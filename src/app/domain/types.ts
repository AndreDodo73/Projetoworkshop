export type AlunoStatus = "ATIVO" | "INATIVO" | "INADIMPLENTE" | "SUSPENSO";
export type StatusPlanoAluno = "ATIVO" | "VENCIDO" | "CANCELADO" | "SUSPENSO";
export type StatusPagamento = "PENDENTE" | "PAGO" | "ATRASADO" | "CANCELADO";
export type TipoCheckIn = "MANUAL" | "AUTO" | "QR_CODE";
export type StatusFinanceiro = "Em dia" | "Vencendo" | "Em atraso" | "Sem plano";

export type Plano = {
  id: string;
  nome: string;
  subtitulo: string;
  preco: number;
  beneficios: string[];
  destaque: boolean;
};

export type Pagamento = {
  id: string;
  alunoId: string;
  valor: number;
  dataPagamento: string;
  formaPgto: string;
  status: StatusPagamento;
};

export type PlanoAluno = {
  id: string;
  alunoId: string;
  planoId: string;
  valor: number;
  dataInicio: string;
  dataVenc: string;
  formaPgto: string;
  status: StatusPlanoAluno;
};

export type CheckIn = {
  id: string;
  alunoId: string;
  entrada: string;
  tipo: TipoCheckIn;
  identificador?: string;
};

export type DadosSaude = {
  doenca: string;
  cardiaco: string;
  pressao: string;
  diabetes: string;
  desmaios: string;
  respiratorio: string;
  articular: string;
  cirurgia: string;
  medicacao: string;
  gestante: string;
  limitacao: string;
  recomendacaoMedica: string;
};

export type ParQ = {
  q1: string;
  q2: string;
  q3: string;
  q4: string;
  q5: string;
  q6: string;
};

export type Objetivos = {
  objetivo: string;
  treinouAntes: string;
  tempoPratica: string;
  vezesSemana: string;
  horarioPref: string;
};

export type DadosFisicos = {
  peso: string;
  altura: string;
  gordura: string;
  medidas: string;
};

export type Aluno = {
  id: string;
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
  fotoUrl: string | null;
  status: AlunoStatus;
  matricula: string;
  qrCodeToken: string;
  saude: DadosSaude;
  parq: ParQ;
  objetivos: Objetivos;
  fisicos: DadosFisicos;
  termoAceito: boolean;
  createdAt: string;
};

export type Usuario = {
  id: string;
  nome: string;
  email: string;
  telefone: string;
  senha: string;
  cargo: string;
};

export type ConfiguracaoAcademia = {
  nome: string;
  cnpj: string;
  telefone: string;
  email: string;
  endereco: string;
  cidade: string;
  estado: string;
  cep: string;
  horarioAbertura: string;
  horarioFechamento: string;
  diasSemCheckinRisco: number;
  diasAlertaVencimento: number;
  pinRecepcao: string;
};

export type AcademyState = {
  alunos: Aluno[];
  planos: Plano[];
  planosAlunos: PlanoAluno[];
  pagamentos: Pagamento[];
  checkins: CheckIn[];
  config: ConfiguracaoAcademia;
  usuarios: Usuario[];
  sessionUserId: string | null;
};

export type NovoAlunoInput = Omit<Aluno, "id" | "matricula" | "qrCodeToken" | "createdAt" | "status"> & {
  planoId: string;
  valorPlano: number;
  dataInicio: string;
  dataVenc: string;
  formaPgto: string;
};
