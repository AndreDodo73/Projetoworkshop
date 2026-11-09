import { supabase } from "./supabase";
import { blank, escapeLikePattern, parseMoney, planDatesAreValid } from "./values";

export type FinanceStatus = "Em dia" | "Vencendo" | "Em atraso" | "Sem plano";
export type PaymentStatus = "Pago" | "Atrasado" | "Pendente" | "Cancelado";

export type PaymentView = {
  date: string;
  status: PaymentStatus;
  method: string;
  amount: number;
};

export type StudentView = {
  id: string;
  name: string;
  email: string;
  phone: string;
  plan: string;
  status: FinanceStatus;
  enrollmentDate: string;
  lastCheckIn: string;
  totalCheckIns: number;
  avatar: string;
  isActive: boolean;
  payments: PaymentView[];
};

export type CheckInView = {
  id: string;
  studentName: string;
  studentAvatar: string;
  financialStatus: FinanceStatus;
  plan: string;
  date: string;
  time: string;
  timestamp: Date;
};

export type AcademyGeneral = {
  nomeAcademia: string;
  cnpj: string;
  telefone: string;
  email: string;
  endereco: string;
  cidade: string;
  estado: string;
  cep: string;
};

export type AcademySystem = {
  abertura: string;
  fechamento: string;
  diasRisco: string;
  diasVencimento: string;
  pin: string;
};

export type PlanRecord = {
  id: string;
  name: string;
  subtitle: string;
  price: string;
  benefits: string[];
  featured: boolean;
};

export type DashboardMember = {
  id: number;
  name: string;
  plan: string;
  time: string;
  status: FinanceStatus;
  statusColor: string;
  avatar: string;
};

export type DashboardTourist = {
  id: number;
  name: string;
  plan: string;
  days: number;
};

export type DashboardData = {
  metrics: {
    active: number;
    inactive: number;
    checkins: number;
    frequency: number;
    ghosts: number;
    newMembers: number;
  };
  riskDays: number;
  monthlyGrowth: { month: string; members: number }[];
  growthLabel: string;
  growthPercent: string | null;
  recentMembers: DashboardMember[];
  tourists: DashboardTourist[];
};

type PlanRelation = { nome: string } | { nome: string }[] | null;

const paymentLabels: Record<string, PaymentStatus> = {
  PAGO: "Pago",
  ATRASADO: "Atrasado",
  PENDENTE: "Pendente",
  CANCELADO: "Cancelado",
};

const statusColors: Record<FinanceStatus, string> = {
  "Em dia": "#4ADE80",
  Vencendo: "#FACC15",
  "Em atraso": "#E8271A",
  "Sem plano": "#A8A8A8",
};

function formatDate(value: string | null | undefined): string {
  if (!value) return "—";
  const date = new Date(value.includes("T") ? value : `${value}T12:00:00`);
  if (Number.isNaN(date.getTime())) return "—";
  return new Intl.DateTimeFormat("pt-BR").format(date);
}

function formatTime(value: string): string {
  return new Intl.DateTimeFormat("pt-BR", { hour: "2-digit", minute: "2-digit" }).format(new Date(value));
}

function relativeTime(value: string): string {
  const minutes = Math.round((Date.now() - new Date(value).getTime()) / 60000);
  if (minutes < 1) return "agora";
  if (minutes < 60) return `${minutes} min atrás`;
  const hours = Math.round(minutes / 60);
  if (hours < 24) return `${hours} hora${hours > 1 ? "s" : ""} atrás`;
  const days = Math.round(hours / 24);
  return `${days} dia${days > 1 ? "s" : ""} atrás`;
}

function initialsAvatar(name: string): string {
  const letter = (name.trim().charAt(0) || "?").toUpperCase();
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="128" height="128"><rect width="128" height="128" fill="#1A1A1A"/><text x="64" y="78" text-anchor="middle" fill="#E8400A" font-family="Arial" font-size="56" font-weight="700">${letter}</text></svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

async function signedPhotoMap(paths: Array<string | null | undefined>): Promise<Map<string, string>> {
  const unique = [...new Set(paths.filter((path): path is string => Boolean(path)))];
  const map = new Map<string, string>();
  await Promise.all(
    unique.map(async (path) => {
      if (path.startsWith("http") || path.startsWith("data:")) {
        map.set(path, path);
        return;
      }
      const { data } = await supabase.storage.from("fotos-alunos").createSignedUrl(path, 60 * 60);
      if (data?.signedUrl) map.set(path, data.signedUrl);
    }),
  );
  return map;
}

function avatarFor(name: string, path: string | null | undefined, photos: Map<string, string>) {
  if (path && photos.get(path)) return photos.get(path)!;
  return initialsAvatar(name);
}

function planName(relation: PlanRelation): string {
  if (!relation) return "Sem plano";
  if (Array.isArray(relation)) return relation[0]?.nome ?? "Sem plano";
  return relation.nome || "Sem plano";
}

function startOfDay(date = new Date()) {
  const copy = new Date(date);
  copy.setHours(0, 0, 0, 0);
  return copy;
}

type Enrollment = {
  aluno_id: number;
  status: string;
  created_at: string;
  planos: PlanRelation;
};

function planForStudent(enrollments: Enrollment[], alunoId: number): string {
  const rows = enrollments
    .filter((row) => row.aluno_id === alunoId)
    .sort((a, b) => b.created_at.localeCompare(a.created_at));
  const active = rows.find((row) => row.status === "ATIVO");
  return planName((active ?? rows[0])?.planos ?? null);
}

export async function listStudents(): Promise<StudentView[]> {
  const [{ data: alunos, error }, { data: finance, error: financeError }] = await Promise.all([
    supabase
      .from("alunos")
      .select(`
        id, nome, email, telefone, matricula, foto_url, status, created_at,
        checkins ( entrada ),
        pagamentos ( valor, data_pagamento, forma_pgto, status, created_at ),
        planos_alunos ( status, created_at, planos ( nome ) )
      `)
      .order("created_at", { ascending: false }),
    supabase.from("alunos_financeiro").select("id, status_financeiro"),
  ]);

  if (error) throw new Error("Não foi possível carregar os alunos.");
  if (financeError) throw new Error("Não foi possível carregar a situação financeira.");

  const rows = alunos ?? [];
  const photos = await signedPhotoMap(rows.map((row) => row.foto_url));
  const financeById = new Map(
    (finance ?? []).map((row) => [Number(row.id), (row.status_financeiro as FinanceStatus) ?? "Sem plano"]),
  );

  return rows.map((row) => {
    const checkins = [...(row.checkins ?? [])].sort((a, b) => b.entrada.localeCompare(a.entrada));
    const payments = [...(row.pagamentos ?? [])].sort((a, b) =>
      (b.data_pagamento ?? b.created_at).localeCompare(a.data_pagamento ?? a.created_at),
    );
    const enrollmentsByRecent = [...(row.planos_alunos ?? [])].sort((a, b) => b.created_at.localeCompare(a.created_at));
    const activePlan = enrollmentsByRecent.find((item) => item.status === "ATIVO");
    const plan = planName((activePlan ?? enrollmentsByRecent[0])?.planos ?? null);

    return {
      id: row.matricula,
      name: row.nome,
      email: row.email ?? "",
      phone: row.telefone ?? "",
      plan,
      status: financeById.get(row.id) ?? "Sem plano",
      enrollmentDate: formatDate(row.created_at),
      lastCheckIn: checkins[0] ? formatDate(checkins[0].entrada) : "Nunca",
      totalCheckIns: checkins.length,
      avatar: avatarFor(row.nome, row.foto_url, photos),
      isActive: row.status === "ATIVO",
      payments: payments.map((payment) => ({
        date: formatDate(payment.data_pagamento ?? payment.created_at),
        status: paymentLabels[payment.status] ?? "Pendente",
        method: payment.forma_pgto ?? "—",
        amount: Number(payment.valor),
      })),
    };
  });
}

export async function listCheckIns(): Promise<CheckInView[]> {
  const [{ data: checkins, error }, { data: finance, error: financeError }, { data: plans, error: plansError }] =
    await Promise.all([
      supabase
        .from("checkins")
        .select("id, entrada, aluno_id, alunos ( nome, foto_url )")
        .order("entrada", { ascending: false }),
      supabase.from("alunos_financeiro").select("id, status_financeiro"),
      supabase.from("planos_alunos").select("aluno_id, status, created_at, planos ( nome )"),
    ]);

  if (error || financeError || plansError) throw new Error("Não foi possível carregar os check-ins.");

  const rows = checkins ?? [];
  const photos = await signedPhotoMap(
    rows.map((row) => {
      const student = Array.isArray(row.alunos) ? row.alunos[0] : row.alunos;
      return student?.foto_url ?? null;
    }),
  );
  const financeById = new Map(
    (finance ?? []).map((row) => [Number(row.id), (row.status_financeiro as FinanceStatus) ?? "Sem plano"]),
  );
  const enrollments = (plans ?? []) as Enrollment[];

  return rows.map((row) => {
    const student = Array.isArray(row.alunos) ? row.alunos[0] : row.alunos;
    const name = student?.nome ?? "Aluno";
    const timestamp = new Date(row.entrada);
    return {
      id: String(row.id),
      studentName: name,
      studentAvatar: avatarFor(name, student?.foto_url, photos),
      financialStatus: financeById.get(row.aluno_id) ?? "Sem plano",
      plan: planForStudent(enrollments, row.aluno_id),
      date: formatDate(row.entrada),
      time: formatTime(row.entrada),
      timestamp,
    };
  });
}

export async function loadDashboard(): Promise<DashboardData> {
  const [{ data: alunos, error }, { data: checkins, error: checkinError }, { data: finance }, { data: plans }, { data: config }] =
    await Promise.all([
      supabase.from("alunos").select("id, nome, status, created_at, foto_url").order("created_at", { ascending: false }),
      supabase.from("checkins").select("aluno_id, entrada"),
      supabase.from("alunos_financeiro").select("id, status_financeiro"),
      supabase.from("planos_alunos").select("aluno_id, status, created_at, planos ( nome )"),
      supabase.from("configuracoes_academia").select("dias_sem_checkin_risco").eq("id", 1).maybeSingle(),
    ]);

  if (error || checkinError) throw new Error("Não foi possível carregar o painel.");

  const students = alunos ?? [];
  const visits = checkins ?? [];
  const photos = await signedPhotoMap(students.map((student) => student.foto_url));
  const financeById = new Map(
    (finance ?? []).map((row) => [Number(row.id), (row.status_financeiro as FinanceStatus) ?? "Sem plano"]),
  );
  const enrollments = (plans ?? []) as Enrollment[];
  const riskDays = config?.dias_sem_checkin_risco ?? 10;
  const today = startOfDay();
  const weekAgo = new Date(today);
  weekAgo.setDate(weekAgo.getDate() - 7);
  const monthStart = new Date(today.getFullYear(), today.getMonth(), 1);
  const riskCutoff = Date.now() - riskDays * 24 * 60 * 60 * 1000;

  const lastVisit = new Map<number, number>();
  for (const visit of visits) {
    const time = new Date(visit.entrada).getTime();
    const current = lastVisit.get(visit.aluno_id) ?? 0;
    if (time > current) lastVisit.set(visit.aluno_id, time);
  }

  const active = students.filter((student) => student.status === "ATIVO").length;
  const checkinsToday = visits.filter((visit) => new Date(visit.entrada) >= today).length;
  const checkinsWeek = visits.filter((visit) => new Date(visit.entrada) >= weekAgo).length;
  const tourists = students
    .map((student) => {
      const last = lastVisit.get(student.id);
      if (!last || last >= riskCutoff) return null;
      const days = Math.floor((Date.now() - last) / (24 * 60 * 60 * 1000));
      return {
        id: student.id,
        name: student.nome,
        plan: planForStudent(enrollments, student.id),
        days,
      };
    })
    .filter((item): item is DashboardTourist => item !== null)
    .sort((a, b) => b.days - a.days);

  const months = Array.from({ length: 12 }, (_, index) => {
    const date = new Date(today.getFullYear(), today.getMonth() - (11 - index), 1);
    const end = new Date(date.getFullYear(), date.getMonth() + 1, 0, 23, 59, 59, 999);
    return {
      month: new Intl.DateTimeFormat("pt-BR", { month: "short", year: "2-digit" }).format(date),
      members: students.filter((student) => new Date(student.created_at) <= end).length,
    };
  });
  const windowStart = new Date(today.getFullYear(), today.getMonth() - 11, 1);
  const before = students.filter((student) => new Date(student.created_at) < windowStart).length;
  const growth = students.length - before;

  return {
    metrics: {
      active,
      inactive: students.length - active,
      checkins: checkinsToday,
      frequency: active === 0 ? 0 : Math.round((checkinsWeek / active) * 10) / 10,
      ghosts: tourists.length,
      newMembers: students.filter((student) => new Date(student.created_at) >= monthStart).length,
    },
    riskDays,
    monthlyGrowth: months,
    growthLabel: `${growth >= 0 ? "+" : ""}${growth} MEMBROS`,
    growthPercent: before > 0 ? `${growth >= 0 ? "+" : ""}${Math.round((growth / before) * 100)}%` : null,
    recentMembers: students.slice(0, 5).map((student) => {
      const status = financeById.get(student.id) ?? "Sem plano";
      return {
        id: student.id,
        name: student.nome,
        plan: planForStudent(enrollments, student.id),
        time: relativeTime(student.created_at),
        status,
        statusColor: statusColors[status],
        avatar: avatarFor(student.nome, student.foto_url, photos),
      };
    }),
    tourists: tourists.slice(0, 6),
  };
}

export async function loadGeneral(): Promise<AcademyGeneral> {
  const { data, error } = await supabase
    .from("configuracoes_academia")
    .select("nome, cnpj, telefone, email, endereco, cidade, estado, cep")
    .eq("id", 1)
    .single();
  if (error) throw new Error("Não foi possível carregar os dados da academia.");
  return {
    nomeAcademia: data.nome ?? "",
    cnpj: data.cnpj ?? "",
    telefone: data.telefone ?? "",
    email: data.email ?? "",
    endereco: data.endereco ?? "",
    cidade: data.cidade ?? "",
    estado: data.estado ?? "",
    cep: data.cep ?? "",
  };
}

export async function saveGeneral(form: AcademyGeneral) {
  const { error } = await supabase
    .from("configuracoes_academia")
    .update({
      nome: form.nomeAcademia.trim(),
      cnpj: blank(form.cnpj),
      telefone: blank(form.telefone),
      email: blank(form.email),
      endereco: blank(form.endereco),
      cidade: blank(form.cidade),
      estado: blank(form.estado),
      cep: blank(form.cep),
    })
    .eq("id", 1);
  if (error) throw new Error("Não foi possível salvar. Confira os dados, principalmente o CNPJ.");
}

export async function loadSystem(): Promise<AcademySystem> {
  const { data, error } = await supabase
    .from("configuracoes_academia")
    .select("horario_abertura, horario_fechamento, dias_sem_checkin_risco, dias_alerta_vencimento, pin_recepcao")
    .eq("id", 1)
    .single();
  if (error) throw new Error("Não foi possível carregar as configurações do sistema.");
  return {
    abertura: String(data.horario_abertura).slice(0, 5),
    fechamento: String(data.horario_fechamento).slice(0, 5),
    diasRisco: String(data.dias_sem_checkin_risco),
    diasVencimento: String(data.dias_alerta_vencimento),
    pin: data.pin_recepcao,
  };
}

export async function saveSystem(form: AcademySystem) {
  const { error } = await supabase
    .from("configuracoes_academia")
    .update({
      horario_abertura: form.abertura,
      horario_fechamento: form.fechamento,
      dias_sem_checkin_risco: Number(form.diasRisco),
      dias_alerta_vencimento: Number(form.diasVencimento),
      pin_recepcao: form.pin,
    })
    .eq("id", 1);
  if (error) throw new Error("Não foi possível salvar. O PIN precisa ter 4 números.");
}

export async function loadReceptionPin(): Promise<string> {
  const { data, error } = await supabase.from("configuracoes_academia").select("pin_recepcao").eq("id", 1).single();
  if (error) throw new Error("Não foi possível carregar o PIN da recepção.");
  return data.pin_recepcao;
}

export async function loadPlans(): Promise<PlanRecord[]> {
  const { data, error } = await supabase
    .from("planos")
    .select("id, nome, subtitulo, preco, beneficios, destaque")
    .order("preco", { ascending: true });
  if (error) throw new Error("Não foi possível carregar os planos.");
  return (data ?? []).map((plan) => ({
    id: String(plan.id),
    name: plan.nome,
    subtitle: plan.subtitulo ?? "",
    price: String(plan.preco),
    benefits: Array.isArray(plan.beneficios) ? plan.beneficios.filter((item): item is string => typeof item === "string") : [],
    featured: Boolean(plan.destaque),
  }));
}

export async function savePlans(current: PlanRecord[], original: PlanRecord[]) {
  const kept = new Set(current.filter((plan) => /^\d+$/.test(plan.id)).map((plan) => plan.id));

  for (const plan of original) {
    if (!/^\d+$/.test(plan.id) || kept.has(plan.id)) continue;
    const { error } = await supabase.from("planos").delete().eq("id", Number(plan.id));
    if (error) throw new Error(`O plano ${plan.name} está em uso e não pode ser apagado.`);
  }

  for (const plan of current) {
    const price = Number(plan.price);
    if (!plan.name.trim() || !Number.isFinite(price) || price < 0) {
      throw new Error("Preencha o nome e um preço válido em todos os planos.");
    }
    const payload = {
      nome: plan.name.trim(),
      subtitulo: blank(plan.subtitle),
      preco: price,
      beneficios: plan.benefits,
      destaque: plan.featured,
    };
    if (/^\d+$/.test(plan.id)) {
      const { error } = await supabase.from("planos").update(payload).eq("id", Number(plan.id));
      if (error) throw new Error(`Não foi possível salvar o plano ${plan.name}.`);
    } else {
      const { error } = await supabase.from("planos").insert(payload);
      if (error) throw new Error(`Não foi possível criar o plano ${plan.name}.`);
    }
  }
}

export type NewStudentInput = {
  nome: string;
  dataNasc: string;
  cpf: string;
  rg: string;
  sexo: string;
  estadoCivil: string;
  profissao: string;
  telefone: string;
  email: string;
  endereco: string;
  contatoEmerg: string;
  telEmerg: string;
  foto: File | null;
  saude: Record<string, string>;
  parq: Record<string, string>;
  objetivo: string;
  treinouAntes: string;
  tempoPratica: string;
  vezesSemana: string;
  horarioPref: string;
  peso: string;
  altura: string;
  gordura: string;
  medidas: string;
  tipoPlano: string;
  planoId?: string;
  valorPlano: string;
  dataInicio: string;
  dataVenc: string;
  formaPgto: string;
};

export async function registerStudent(input: NewStudentInput) {
  const valor = parseMoney(input.valorPlano);
  if (valor === null || valor < 0) throw new Error("Informe um valor de plano válido.");
  if (!planDatesAreValid(input.dataInicio, input.dataVenc)) {
    throw new Error("A data de vencimento precisa ser igual ou posterior à data de início.");
  }

  const planQuery = supabase.from("planos").select("id, nome");
  const { data: plano, error: planoError } = input.planoId
    ? await planQuery.eq("id", Number(input.planoId)).maybeSingle()
    : await planQuery.ilike("nome", escapeLikePattern(input.tipoPlano.trim())).maybeSingle();
  if (planoError || !plano) throw new Error("Escolha um plano que exista em Configurações.");

  const { data: aluno, error: alunoError } = await supabase
    .from("alunos")
    .insert({
      nome: input.nome.trim(),
      data_nasc: input.dataNasc,
      cpf: blank(input.cpf),
      rg: blank(input.rg),
      sexo: blank(input.sexo),
      estado_civil: blank(input.estadoCivil),
      profissao: blank(input.profissao),
      telefone: blank(input.telefone),
      email: blank(input.email),
      endereco: blank(input.endereco),
      contato_emerg: blank(input.contatoEmerg),
      tel_emerg: blank(input.telEmerg),
    })
    .select("id")
    .single();

  if (alunoError || !aluno) {
    if (alunoError?.code === "23505") throw new Error("Já existe um aluno com este CPF ou e-mail.");
    throw new Error("Não foi possível cadastrar o aluno.");
  }

  let photoPath: string | null = null;
  const rollback = async () => {
    if (photoPath) await supabase.storage.from("fotos-alunos").remove([photoPath]);
    await supabase.from("alunos").delete().eq("id", aluno.id);
  };

  try {
    if (input.foto) {
      const extension = input.foto.name.split(".").pop()?.toLowerCase().replace(/[^a-z0-9]/g, "") || "jpg";
      photoPath = `${aluno.id}/${crypto.randomUUID()}.${extension}`;
      const { error: uploadError } = await supabase.storage.from("fotos-alunos").upload(photoPath, input.foto, {
        contentType: input.foto.type || "image/jpeg",
        upsert: false,
      });
      if (uploadError) throw new Error("Não foi possível enviar a foto.");
      const { error: photoError } = await supabase.from("alunos").update({ foto_url: photoPath }).eq("id", aluno.id);
      if (photoError) throw new Error("Não foi possível salvar a foto do aluno.");
    }

    const writes = await Promise.all([
      supabase.from("dados_saude").insert({
        aluno_id: aluno.id,
        doenca: blank(input.saude.doenca ?? ""),
        cardiaco: blank(input.saude.cardiaco ?? ""),
        pressao: blank(input.saude.pressao ?? ""),
        diabetes: blank(input.saude.diabetes ?? ""),
        desmaios: blank(input.saude.desmaios ?? ""),
        respiratorio: blank(input.saude.respiratorio ?? ""),
        articular: blank(input.saude.articular ?? ""),
        cirurgia: blank(input.saude.cirurgia ?? ""),
        medicacao: blank(input.saude.medicacao ?? ""),
        gestante: blank(input.saude.gestante ?? ""),
        limitacao: blank(input.saude.limitacao ?? ""),
        recomendacao_medica: blank(input.saude.recomendacaoMedica ?? ""),
      }),
      supabase.from("parq").insert({
        aluno_id: aluno.id,
        q1: blank(input.parq.q1 ?? ""),
        q2: blank(input.parq.q2 ?? ""),
        q3: blank(input.parq.q3 ?? ""),
        q4: blank(input.parq.q4 ?? ""),
        q5: blank(input.parq.q5 ?? ""),
        q6: blank(input.parq.q6 ?? ""),
      }),
      supabase.from("objetivos").insert({
        aluno_id: aluno.id,
        objetivo: blank(input.objetivo),
        treinou_antes: blank(input.treinouAntes),
        tempo_pratica: blank(input.tempoPratica),
        vezes_semana: blank(input.vezesSemana),
        horario_pref: blank(input.horarioPref),
      }),
    ]);
    const failed = writes.find((result) => result.error);
    if (failed?.error) throw new Error("Não foi possível salvar os dados do aluno.");

    const peso = input.peso.trim() ? Number(input.peso.replace(",", ".")) : null;
    const altura = input.altura.trim() ? Number(input.altura.replace(",", ".")) : null;
    const gordura = input.gordura.trim() ? Number(input.gordura.replace(",", ".")) : null;
    if (input.peso.trim() || input.altura.trim() || input.gordura.trim() || input.medidas.trim()) {
      if ((input.peso.trim() && !(peso && peso > 0)) || (input.altura.trim() && !(altura && altura > 0))) {
        throw new Error("Peso e altura precisam ser números maiores que zero.");
      }
      const { error } = await supabase.from("dados_fisicos").insert({
        aluno_id: aluno.id,
        peso,
        altura,
        gordura,
        medidas: blank(input.medidas),
      });
      if (error) throw new Error("Não foi possível salvar os dados físicos.");
    }

    const { data: vinculo, error: vinculoError } = await supabase
      .from("planos_alunos")
      .insert({
        aluno_id: aluno.id,
        plano_id: plano.id,
        valor,
        data_inicio: input.dataInicio,
        data_venc: input.dataVenc,
        forma_pgto: blank(input.formaPgto),
      })
      .select("id")
      .single();
    if (vinculoError || !vinculo) throw new Error("Não foi possível vincular o plano.");

    const { error: pagamentoError } = await supabase.from("pagamentos").insert({
      aluno_id: aluno.id,
      plano_aluno_id: vinculo.id,
      valor,
      data_pagamento: input.dataInicio,
      forma_pgto: blank(input.formaPgto),
      status: "PAGO",
    });
    if (pagamentoError) throw new Error("Não foi possível registrar o pagamento inicial.");

    const { error: termoError } = await supabase.from("termos_responsabilidade").insert({
      aluno_id: aluno.id,
      aceito: true,
      data_assinatura: new Date().toLocaleDateString("sv-SE"),
    });
    if (termoError) throw new Error("Não foi possível salvar o termo de responsabilidade.");
  } catch (error) {
    await rollback();
    throw error instanceof Error ? error : new Error("Não foi possível salvar o aluno.");
  }
}

export async function manualCheckIn(mode: "codigo" | "email", rawValue: string): Promise<string> {
  const value = rawValue.trim();
  if (!value) throw new Error("Digite a matrícula, o código ou o e-mail.");
  if (value.includes(",")) throw new Error("Código inválido.");

  let aluno: { id: number; nome: string } | null = null;
  if (mode === "email") {
    const { data, error } = await supabase.from("alunos").select("id, nome").ilike("email", escapeLikePattern(value)).maybeSingle();
    if (error) throw new Error("Não foi possível buscar o aluno.");
    aluno = data;
  } else {
    const matriculas = value.startsWith("#") ? [value] : [value, `#${value}`];
    const filter = [...matriculas.map((item) => `matricula.eq.${item}`), `qr_code_token.eq.${value}`].join(",");
    const { data, error } = await supabase.from("alunos").select("id, nome").or(filter).limit(1);
    if (error) throw new Error("Não foi possível buscar o aluno.");
    aluno = data?.[0] ?? null;
  }

  if (!aluno) throw new Error("Aluno não encontrado.");

  const { error } = await supabase.from("checkins").insert({
    aluno_id: aluno.id,
    tipo: "MANUAL",
    identificador: value,
  });
  if (error) throw new Error("Não foi possível registrar o check-in.");
  return aluno.nome;
}

export async function demoQrCheckIn(): Promise<string> {
  const { data, error } = await supabase
    .from("alunos")
    .select("id, nome, qr_code_token")
    .order("id", { ascending: true })
    .limit(1);
  if (error) throw new Error("Não foi possível buscar um aluno.");
  const aluno = data?.[0];
  if (!aluno) throw new Error("Nenhum aluno cadastrado para simular o QR Code.");

  const { error: insertError } = await supabase.from("checkins").insert({
    aluno_id: aluno.id,
    tipo: "QR_CODE",
    identificador: aluno.qr_code_token,
  });
  if (insertError) throw new Error("Não foi possível registrar o check-in.");
  return aluno.nome;
}
