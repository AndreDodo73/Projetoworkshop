import { ReactNode, SelectHTMLAttributes, InputHTMLAttributes, ButtonHTMLAttributes } from "react";

const labelStyle = {
  fontFamily: "var(--font-body)",
  fontSize: 11,
  fontWeight: 500,
  letterSpacing: "0.1em",
  textTransform: "uppercase" as const,
  color: "var(--color-text-muted)",
};

const controlStyle = {
  fontFamily: "var(--font-body)",
  fontSize: 16,
  color: "var(--color-text-primary)",
  background: "var(--color-input)",
  border: "1px solid var(--color-input-border)",
  borderRadius: "var(--radius-subtle)",
  minHeight: 48,
  width: "100%",
  padding: "12px 16px",
};

export function Field({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <label className="flex w-full min-w-0 flex-col gap-2">
      <span style={labelStyle}>{label}</span>
      {children}
    </label>
  );
}

export function TextInput(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      style={controlStyle}
      className="outline-none focus:border-[var(--color-primary)]"
    />
  );
}

export function SelectInput(props: SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      {...props}
      style={controlStyle}
      className="outline-none focus:border-[var(--color-primary)]"
    />
  );
}

export function PrimaryButton({ children, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      type={props.type ?? "button"}
      className="inline-flex min-h-11 items-center justify-center px-6 disabled:opacity-50"
      style={{
        fontFamily: "var(--font-display)",
        fontWeight: 700,
        fontSize: 13,
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        color: "var(--color-text-primary)",
        background: "var(--color-primary)",
        borderRadius: "var(--radius-sharp)",
      }}
    >
      {children}
    </button>
  );
}

export function GhostButton({ children, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      type={props.type ?? "button"}
      className="inline-flex min-h-11 items-center justify-center px-6"
      style={{
        fontFamily: "var(--font-display)",
        fontWeight: 700,
        fontSize: 13,
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        color: "var(--color-text-secondary)",
        background: "transparent",
        border: "1px solid var(--color-border)",
        borderRadius: "var(--radius-sharp)",
      }}
    >
      {children}
    </button>
  );
}

export function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-6">
      <div className="mb-3 flex items-center gap-4">
        <div className="h-px w-8" style={{ background: "var(--color-primary)" }} />
        <span style={{ ...labelStyle, color: "var(--color-primary)" }}>{eyebrow}</span>
      </div>
      <h2
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 700,
          letterSpacing: "-0.02em",
          textTransform: "uppercase",
          color: "var(--color-text-primary)",
          fontSize: "clamp(28px, 4vw, 40px)",
          lineHeight: 0.95,
        }}
      >
        {title}
      </h2>
    </div>
  );
}
