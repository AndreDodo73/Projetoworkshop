import { ReactNode } from "react";
import type { StatusFinanceiro } from "../domain/types";

export function AdminPage({
  title,
  action,
  children,
}: {
  title: string;
  action?: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="w-full min-w-0 px-4 pb-12 pt-20 md:px-6 lg:px-8 lg:pt-8">
      <header className="mb-8 flex w-full flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            textTransform: "uppercase",
            color: "var(--color-text-primary)",
            fontSize: "clamp(32px, 5vw, 48px)",
            lineHeight: 0.95,
          }}
        >
          {title}
        </h1>
        {action}
      </header>
      {children}
    </div>
  );
}

export function MetricCard({ label, value, hint }: { label: string; value: string | number; hint?: string }) {
  return (
    <article
      className="min-w-0 p-6"
      style={{
        background: "var(--color-surface)",
        border: "1px solid var(--color-border)",
        borderRadius: "var(--radius-card)",
      }}
    >
      <p
        style={{
          fontFamily: "var(--font-body)",
          fontSize: 11,
          fontWeight: 500,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "var(--color-text-muted)",
        }}
      >
        {label}
      </p>
      <p
        className="mt-3"
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 700,
          fontSize: "clamp(32px, 4vw, 44px)",
          lineHeight: 1,
          color: "var(--color-text-primary)",
        }}
      >
        {value}
      </p>
      {hint ? (
        <p className="mt-2" style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "var(--color-text-secondary)" }}>
          {hint}
        </p>
      ) : null}
    </article>
  );
}

const financeColor: Record<StatusFinanceiro, string> = {
  "Em dia": "#2E7D32",
  Vencendo: "#F57C00",
  "Em atraso": "#C62828",
  "Sem plano": "#6B6B6B",
};

export function StatusBadge({ status }: { status: StatusFinanceiro | string }) {
  const color = financeColor[status as StatusFinanceiro] ?? "var(--color-text-secondary)";
  return (
    <span
      style={{
        fontFamily: "var(--font-body)",
        fontSize: 11,
        fontWeight: 600,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        color,
      }}
    >
      {status}
    </span>
  );
}
