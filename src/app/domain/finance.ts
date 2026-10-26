import type { AcademyState, Aluno, StatusFinanceiro } from "./types";

export function startOfDay(date: Date) {
  const copy = new Date(date);
  copy.setHours(0, 0, 0, 0);
  return copy;
}

export function daysUntil(dateStr: string, today: Date) {
  const end = startOfDay(new Date(`${dateStr}T00:00:00`));
  const diff = end.getTime() - startOfDay(today).getTime();
  return Math.round(diff / 86_400_000);
}

export function isSameLocalDay(iso: string, ref: Date) {
  const date = new Date(iso);
  return (
    date.getFullYear() === ref.getFullYear() &&
    date.getMonth() === ref.getMonth() &&
    date.getDate() === ref.getDate()
  );
}

export function planoAtual(state: AcademyState, alunoId: string) {
  return state.planosAlunos
    .filter((item) => item.alunoId === alunoId)
    .sort((a, b) => b.dataInicio.localeCompare(a.dataInicio))[0];
}

export function statusFinanceiro(state: AcademyState, alunoId: string, today = new Date()): StatusFinanceiro {
  const contrato = planoAtual(state, alunoId);
  const atrasado = state.pagamentos.some((item) => item.alunoId === alunoId && item.status === "ATRASADO");
  if (!contrato) return "Sem plano";
  if (contrato.status === "VENCIDO" || atrasado) return "Em atraso";
  if (contrato.status !== "ATIVO") return "Sem plano";
  if (daysUntil(contrato.dataVenc, today) <= state.config.diasAlertaVencimento) return "Vencendo";
  return "Em dia";
}

export function ultimoCheckIn(state: AcademyState, alunoId: string) {
  return state.checkins
    .filter((item) => item.alunoId === alunoId)
    .sort((a, b) => b.entrada.localeCompare(a.entrada))[0];
}

export function isTurista(state: AcademyState, aluno: Aluno, today = new Date()) {
  if (aluno.status !== "ATIVO") return false;
  const ultimo = ultimoCheckIn(state, aluno.id);
  if (!ultimo) return true;
  const limite = startOfDay(today);
  limite.setDate(limite.getDate() - state.config.diasSemCheckinRisco);
  return new Date(ultimo.entrada).getTime() < limite.getTime();
}

export function formatBRL(value: number) {
  return new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(value);
}

export function formatDate(value: string) {
  const date = value.includes("T") ? new Date(value) : new Date(`${value}T00:00:00`);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleDateString("pt-BR");
}

export function formatTime(iso: string) {
  return new Date(iso).toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });
}

export function calcImc(peso: string, altura: string) {
  const kg = Number(peso.replace(",", "."));
  const cm = Number(altura.replace(",", "."));
  if (!kg || !cm) return null;
  const metros = cm / 100;
  return kg / (metros * metros);
}

export function hasParqWarning(parq: Aluno["parq"]) {
  return Object.values(parq).some((answer) => answer === "Sim");
}
