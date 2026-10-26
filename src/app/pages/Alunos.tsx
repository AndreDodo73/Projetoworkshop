import { useMemo, useState } from "react";
import { Link } from "react-router";
import { AdminLayout } from "../components/AdminLayout";
import { AdminPage, StatusBadge } from "../components/admin-ui";
import { PrimaryButton, TextInput } from "../components/fields";
import { formatBRL, formatDate, hasParqWarning, planoAtual, statusFinanceiro } from "../domain/finance";
import { useAcademy } from "../domain/store";
import type { StatusFinanceiro } from "../domain/types";

const filters: Array<StatusFinanceiro | "Todos"> = ["Todos", "Em dia", "Vencendo", "Em atraso"];

export function Alunos() {
  const { state } = useAcademy();
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<(typeof filters)[number]>("Todos");
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const rows = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return state.alunos
      .map((aluno) => ({ aluno, financeiro: statusFinanceiro(state, aluno.id) }))
      .filter(({ aluno, financeiro }) => {
        const matchesFilter = filter === "Todos" || financeiro === filter;
        const matchesQuery =
          !needle ||
          aluno.nome.toLowerCase().includes(needle) ||
          aluno.email.toLowerCase().includes(needle) ||
          aluno.cpf.includes(needle) ||
          aluno.matricula.includes(needle.replace("#", ""));
        return matchesFilter && matchesQuery;
      });
  }, [filter, query, state]);

  const selected = state.alunos.find((aluno) => aluno.id === selectedId) ?? null;
  const contrato = selected ? planoAtual(state, selected.id) : undefined;
  const plano = state.planos.find((item) => item.id === contrato?.planoId);
  const pagamentos = selected ? state.pagamentos.filter((item) => item.alunoId === selected.id) : [];

  return (
    <AdminLayout>
      <AdminPage
        title="Alunos"
        action={
          <Link to="/novo-aluno" className="inline-flex">
            <PrimaryButton>Novo aluno</PrimaryButton>
          </Link>
        }
      >
        <div className="flex w-full flex-col gap-4">
          <TextInput
            placeholder="Buscar nome, CPF, e-mail ou matrícula"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            aria-label="Buscar aluno"
          />
          <div className="flex flex-wrap gap-2">
            {filters.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setFilter(item)}
                className="min-h-11 px-4"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 13,
                  color: filter === item ? "var(--color-text-primary)" : "var(--color-text-secondary)",
                  background: filter === item ? "var(--color-primary)" : "transparent",
                  border: "1px solid var(--color-border)",
                  borderRadius: "var(--radius-subtle)",
                }}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <ul className="mt-6 flex w-full flex-col">
          {rows.length === 0 ? (
            <li style={{ fontFamily: "var(--font-body)", color: "var(--color-text-secondary)" }}>Nenhum aluno encontrado.</li>
          ) : (
            rows.map(({ aluno, financeiro }) => (
              <li key={aluno.id} className="border-b" style={{ borderColor: "var(--color-border)" }}>
                <button
                  type="button"
                  onClick={() => setSelectedId(aluno.id === selectedId ? null : aluno.id)}
                  className="flex w-full min-h-11 flex-col items-start gap-1 py-4 text-left md:flex-row md:items-center md:justify-between"
                >
                  <span>
                    <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, letterSpacing: "0.02em", textTransform: "uppercase", color: "var(--color-text-primary)" }}>
                      {aluno.nome}
                    </span>
                    <span className="mt-1 block" style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "var(--color-text-muted)" }}>
                      #{aluno.matricula} · {aluno.email}
                    </span>
                  </span>
                  <StatusBadge status={financeiro} />
                </button>
              </li>
            ))
          )}
        </ul>

        {selected ? (
          <section
            className="mt-8 w-full p-6"
            style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)", borderRadius: "var(--radius-card)" }}
          >
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, textTransform: "uppercase", color: "var(--color-text-primary)", fontSize: 28 }}>
              {selected.nome}
            </h2>
            <p className="mt-2" style={{ fontFamily: "var(--font-body)", color: "var(--color-text-secondary)", lineHeight: 1.6 }}>
              {selected.telefone} · {selected.endereco}
              <br />
              Objetivo: {selected.objetivos.objetivo} · Plano: {plano?.nome ?? "—"} {contrato ? `até ${formatDate(contrato.dataVenc)}` : ""}
            </p>
            {hasParqWarning(selected.parq) ? (
              <p className="mt-4" style={{ fontFamily: "var(--font-body)", color: "var(--color-primary)" }}>
                PAR-Q com resposta SIM. Avaliar restrição antes do treino.
              </p>
            ) : null}
            <h3 className="mt-6" style={{ fontFamily: "var(--font-display)", letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--color-text-primary)" }}>
              Histórico de pagamentos
            </h3>
            <ul className="mt-3">
              {pagamentos.map((pagamento) => (
                <li key={pagamento.id} className="flex flex-col gap-1 border-b py-3 md:flex-row md:justify-between" style={{ borderColor: "var(--color-border)" }}>
                  <span style={{ fontFamily: "var(--font-body)", color: "var(--color-text-primary)" }}>{formatBRL(pagamento.valor)} · {pagamento.formaPgto}</span>
                  <span style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "var(--color-text-muted)" }}>{formatDate(pagamento.dataPagamento)} · {pagamento.status}</span>
                </li>
              ))}
            </ul>
          </section>
        ) : null}
      </AdminPage>
    </AdminLayout>
  );
}
