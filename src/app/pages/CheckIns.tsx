import { AdminLayout } from "../components/AdminLayout";
import { AdminPage, MetricCard } from "../components/admin-ui";
import { formatDate, formatTime, isSameLocalDay } from "../domain/finance";
import { useAcademy } from "../domain/store";

export function CheckIns() {
  const { state } = useAcademy();
  const today = new Date();
  const hoje = state.checkins.filter((item) => isSameLocalDay(item.entrada, today));
  const semanaInicio = new Date(today);
  semanaInicio.setDate(today.getDate() - 6);
  semanaInicio.setHours(0, 0, 0, 0);
  const semana = state.checkins.filter((item) => new Date(item.entrada) >= semanaInicio);
  const mes = state.checkins.filter((item) => {
    const date = new Date(item.entrada);
    return date.getMonth() === today.getMonth() && date.getFullYear() === today.getFullYear();
  });
  const porHora = new Map<number, number>();
  state.checkins.forEach((item) => {
    const hour = new Date(item.entrada).getHours();
    porHora.set(hour, (porHora.get(hour) ?? 0) + 1);
  });
  let picoHora = 0;
  let picoCount = 0;
  porHora.forEach((count, hour) => {
    if (count > picoCount) {
      picoCount = count;
      picoHora = hour;
    }
  });

  return (
    <AdminLayout>
      <AdminPage title="Check-ins">
        <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          <MetricCard label="Hoje" value={hoje.length} />
          <MetricCard label="Semana" value={semana.length} />
          <MetricCard label="Mês" value={mes.length} />
          <MetricCard label="Pico" value={picoCount ? `${String(picoHora).padStart(2, "0")}h` : "—"} hint={picoCount ? `${picoCount} check-ins` : "Sem registros"} />
        </div>
        <ul className="mt-8 flex w-full flex-col">
          {state.checkins.map((item) => {
            const aluno = state.alunos.find((entry) => entry.id === item.alunoId);
            return (
              <li key={item.id} className="flex w-full flex-col gap-1 border-b py-4 md:flex-row md:items-center md:justify-between" style={{ borderColor: "var(--color-border)" }}>
                <span style={{ fontFamily: "var(--font-body)", color: "var(--color-text-primary)" }}>{aluno?.nome ?? "Aluno"}</span>
                <span style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "var(--color-text-muted)" }}>
                  {formatDate(item.entrada)} {formatTime(item.entrada)} · {item.tipo}
                </span>
              </li>
            );
          })}
        </ul>
      </AdminPage>
    </AdminLayout>
  );
}
