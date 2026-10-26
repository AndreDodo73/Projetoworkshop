import { AdminLayout } from "../components/AdminLayout";
import { AdminPage, MetricCard } from "../components/admin-ui";
import { useAcademy } from "../domain/store";
import { formatTime, isSameLocalDay, isTurista, statusFinanceiro } from "../domain/finance";

export function Dashboard() {
  const { state } = useAcademy();
  const today = new Date();
  const ativos = state.alunos.filter((aluno) => aluno.status === "ATIVO");
  const financeiros = state.alunos.map((aluno) => statusFinanceiro(state, aluno.id, today));
  const turistas = state.alunos.filter((aluno) => isTurista(state, aluno, today));
  const hoje = state.checkins.filter((item) => isSameLocalDay(item.entrada, today));

  return (
    <AdminLayout>
      <AdminPage title="Dashboard">
        <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <MetricCard label="Alunos ativos" value={ativos.length} />
          <MetricCard label="Em dia" value={financeiros.filter((item) => item === "Em dia").length} />
          <MetricCard label="Vencendo" value={financeiros.filter((item) => item === "Vencendo").length} hint={`Até ${state.config.diasAlertaVencimento} dias`} />
          <MetricCard label="Em atraso" value={financeiros.filter((item) => item === "Em atraso").length} />
          <MetricCard label="Turistas" value={turistas.length} hint={`${state.config.diasSemCheckinRisco} dias sem check-in`} />
          <MetricCard label="Check-ins hoje" value={hoje.length} />
        </div>

        <section className="mt-10 w-full">
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, letterSpacing: "0.04em", textTransform: "uppercase", color: "var(--color-text-primary)", fontSize: 20 }}>
            Últimos check-ins
          </h2>
          <ul className="mt-4 flex w-full flex-col">
            {state.checkins.slice(0, 6).map((item) => {
              const aluno = state.alunos.find((entry) => entry.id === item.alunoId);
              return (
                <li
                  key={item.id}
                  className="flex w-full flex-col gap-1 border-b py-4 md:flex-row md:items-center md:justify-between"
                  style={{ borderColor: "var(--color-border)" }}
                >
                  <span style={{ fontFamily: "var(--font-body)", color: "var(--color-text-primary)" }}>{aluno?.nome ?? "Aluno"}</span>
                  <span style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "var(--color-text-muted)" }}>
                    {formatTime(item.entrada)} · {item.tipo}
                  </span>
                </li>
              );
            })}
          </ul>
        </section>
      </AdminPage>
    </AdminLayout>
  );
}
