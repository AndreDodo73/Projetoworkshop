import { FormEvent, useState } from "react";
import { Navigate, useNavigate } from "react-router";
import { useAcademy } from "../domain/store";
import { Field, PrimaryButton, TextInput } from "../components/fields";

export function LoginAdmin() {
  const { user, ready, login } = useAcademy();
  const navigate = useNavigate();
  const [email, setEmail] = useState("admin@forgee.academy");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  if (!ready) return null;
  if (user) return <Navigate to="/dashboard" replace />;

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    const ok = login(email, senha);
    if (!ok) {
      setError("E-mail ou senha inválidos.");
      return;
    }
    navigate("/dashboard");
  };

  return (
    <main className="forge flex min-h-screen w-full items-center justify-center px-4 py-10" style={{ background: "var(--color-bg-absolute)" }}>
      <form
        onSubmit={onSubmit}
        className="w-full max-w-md p-6 md:p-8"
        style={{ background: "var(--color-bg)", border: "1px solid var(--color-border)", borderRadius: "var(--radius-card)" }}
      >
        <p style={{ fontFamily: "var(--font-body)", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--color-primary)" }}>
          Admin Panel
        </p>
        <h1
          className="mt-3 mb-8"
          style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(36px, 6vw, 48px)", lineHeight: 0.95, letterSpacing: "-0.02em", textTransform: "uppercase", color: "var(--color-text-primary)" }}
        >
          Entrar
        </h1>
        <div className="flex flex-col gap-4">
          <Field label="E-mail">
            <TextInput type="email" autoComplete="username" value={email} onChange={(event) => setEmail(event.target.value)} required />
          </Field>
          <Field label="Senha">
            <TextInput type="password" autoComplete="current-password" value={senha} onChange={(event) => setSenha(event.target.value)} required />
          </Field>
        </div>
        {error ? (
          <p className="mt-4" style={{ fontFamily: "var(--font-body)", color: "#C62828", fontSize: 14 }} role="alert">
            {error}
          </p>
        ) : null}
        <div className="mt-6">
          <PrimaryButton type="submit">Entrar</PrimaryButton>
        </div>
        <p className="mt-6" style={{ fontFamily: "var(--font-body)", fontSize: 13, lineHeight: 1.5, color: "var(--color-text-muted)" }}>
          Acesso local de demonstração: admin@forgee.academy / forgee123. Os dados ficam neste navegador.
        </p>
      </form>
    </main>
  );
}
