import { ReactNode } from "react";
import { Link } from "react-router";

/** STUB helper for screens that were not in the partial export. */
export function StubPage({
  title,
  children,
}: {
  title: string;
  children?: ReactNode;
}) {
  return (
    <section className="w-full px-4 py-16 md:px-6 lg:px-8">
      <h1
        style={{
          fontFamily: "'Oswald', sans-serif",
          fontWeight: 700,
          letterSpacing: "-0.02em",
          textTransform: "uppercase",
          color: "#FFFFFF",
          fontSize: "clamp(32px, 5vw, 48px)",
          lineHeight: 1,
        }}
      >
        {title}
      </h1>
      <p
        style={{
          fontFamily: "'Inter', sans-serif",
          color: "#B0B0B0",
          marginTop: 16,
          maxWidth: 560,
          lineHeight: 1.6,
        }}
      >
        Esta tela não veio no export parcial do Figma Make.
      </p>
      {children}
    </section>
  );
}

export function StubLink({ to, label }: { to: string; label: string }) {
  return (
    <Link
      to={to}
      style={{
        display: "inline-flex",
        alignItems: "center",
        minHeight: 44,
        marginTop: 24,
        fontFamily: "'Oswald', sans-serif",
        fontWeight: 700,
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        fontSize: 13,
        color: "#FFFFFF",
        background: "#E8400A",
        textDecoration: "none",
        padding: "12px 24px",
      }}
    >
      {label}
    </Link>
  );
}
