import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from "react";
import type { AcademyState, ConfiguracaoAcademia, NovoAlunoInput, Plano, TipoCheckIn, Usuario } from "./types";
import { createSeed } from "./seed";

const STORAGE_KEY = "forgee-academy-v1";

type AcademyContextValue = {
  ready: boolean;
  state: AcademyState;
  user: Usuario | null;
  login: (email: string, senha: string) => boolean;
  logout: () => void;
  addAluno: (input: NovoAlunoInput) => { ok: true; matricula: string } | { ok: false; error: string };
  addCheckIn: (identificador: string) => { ok: true; nome: string } | { ok: false; error: string };
  updateConfig: (patch: Partial<ConfiguracaoAcademia>) => void;
  updatePerfil: (patch: Pick<Usuario, "nome" | "email" | "telefone">) => void;
  changeSenha: (atual: string, nova: string) => boolean;
  addPlano: (plano: Omit<Plano, "id">) => void;
  updatePlano: (id: string, patch: Partial<Plano>) => void;
};

const AcademyContext = createContext<AcademyContextValue | null>(null);

function isAcademyState(value: unknown): value is AcademyState {
  if (!value || typeof value !== "object") return false;
  const state = value as AcademyState;
  return Array.isArray(state.alunos) && Array.isArray(state.planos) && Boolean(state.config);
}

function nextMatricula(state: AcademyState) {
  const max = state.alunos.reduce((highest, aluno) => Math.max(highest, Number(aluno.matricula) || 0), 1000);
  return String(max + 1);
}

export function AcademyProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<AcademyState>(createSeed);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed: unknown = JSON.parse(raw);
        if (isAcademyState(parsed)) setState(parsed);
      }
    } catch {
      // Keep the in-memory seed when storage is unreadable.
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [ready, state]);

  const value = useMemo<AcademyContextValue>(() => {
    const user = state.usuarios.find((item) => item.id === state.sessionUserId) ?? null;

    return {
      ready,
      state,
      user,
      login: (email, senha) => {
        const match = state.usuarios.find(
          (item) => item.email.toLowerCase() === email.trim().toLowerCase() && item.senha === senha,
        );
        if (!match) return false;
        setState((prev) => ({ ...prev, sessionUserId: match.id }));
        return true;
      },
      logout: () => setState((prev) => ({ ...prev, sessionUserId: null })),
      addAluno: (input) => {
        const cpf = input.cpf.trim();
        const email = input.email.trim().toLowerCase();
        if (!input.nome.trim() || !cpf || !email) {
          return { ok: false, error: "Nome, CPF e e-mail são obrigatórios." };
        }
        if (state.alunos.some((aluno) => aluno.cpf === cpf)) {
          return { ok: false, error: "Já existe um aluno com este CPF." };
        }
        if (state.alunos.some((aluno) => aluno.email.toLowerCase() === email)) {
          return { ok: false, error: "Já existe um aluno com este e-mail." };
        }
        const matricula = nextMatricula(state);
        const alunoId = crypto.randomUUID();
        const { planoId, valorPlano, dataInicio, dataVenc, formaPgto, ...alunoFields } = input;
        setState((prev) => ({
          ...prev,
          alunos: [
            {
              ...alunoFields,
              id: alunoId,
              nome: input.nome.trim(),
              cpf,
              email,
              status: "ATIVO",
              matricula,
              qrCodeToken: `fg-${matricula}`,
              createdAt: new Date().toISOString(),
            },
            ...prev.alunos,
          ],
          planosAlunos: [
            {
              id: crypto.randomUUID(),
              alunoId,
              planoId,
              valor: valorPlano,
              dataInicio,
              dataVenc,
              formaPgto,
              status: "ATIVO",
            },
            ...prev.planosAlunos,
          ],
          pagamentos: [
            {
              id: crypto.randomUUID(),
              alunoId,
              valor: valorPlano,
              dataPagamento: dataInicio,
              formaPgto,
              status: "PAGO",
            },
            ...prev.pagamentos,
          ],
        }));
        return { ok: true, matricula };
      },
      addCheckIn: (identificador) => {
        const needle = identificador.trim().toLowerCase();
        if (!needle) return { ok: false, error: "Informe o código, a matrícula ou o e-mail." };
        const aluno = state.alunos.find((item) => {
          return (
            item.email.toLowerCase() === needle ||
            item.matricula.toLowerCase() === needle.replace("#", "") ||
            item.qrCodeToken.toLowerCase() === needle
          );
        });
        if (!aluno) return { ok: false, error: "Aluno não encontrado." };
        if (aluno.status === "SUSPENSO" || aluno.status === "INATIVO") {
          return { ok: false, error: "Cadastro inativo. Procure a recepção." };
        }
        const tipo: TipoCheckIn = aluno.qrCodeToken.toLowerCase() === needle ? "QR_CODE" : "AUTO";
        setState((prev) => ({
          ...prev,
          checkins: [
            {
              id: crypto.randomUUID(),
              alunoId: aluno.id,
              entrada: new Date().toISOString(),
              tipo,
              identificador: identificador.trim(),
            },
            ...prev.checkins,
          ],
        }));
        return { ok: true, nome: aluno.nome };
      },
      updateConfig: (patch) => setState((prev) => ({ ...prev, config: { ...prev.config, ...patch } })),
      updatePerfil: (patch) =>
        setState((prev) => ({
          ...prev,
          usuarios: prev.usuarios.map((item) => (item.id === prev.sessionUserId ? { ...item, ...patch } : item)),
        })),
      changeSenha: (atual, nova) => {
        const current = state.usuarios.find((item) => item.id === state.sessionUserId);
        if (!current || current.senha !== atual || nova.trim().length < 6) return false;
        setState((prev) => ({
          ...prev,
          usuarios: prev.usuarios.map((item) => (item.id === current.id ? { ...item, senha: nova } : item)),
        }));
        return true;
      },
      addPlano: (plano) =>
        setState((prev) => ({
          ...prev,
          planos: [...prev.planos, { ...plano, id: crypto.randomUUID(), nome: plano.nome.toUpperCase() }],
        })),
      updatePlano: (id, patch) =>
        setState((prev) => ({
          ...prev,
          planos: prev.planos.map((item) => (item.id === id ? { ...item, ...patch } : item)),
        })),
    };
  }, [ready, state]);

  return <AcademyContext.Provider value={value}>{children}</AcademyContext.Provider>;
}

export function useAcademy() {
  const context = useContext(AcademyContext);
  if (!context) throw new Error("useAcademy deve ficar dentro de AcademyProvider");
  return context;
}
