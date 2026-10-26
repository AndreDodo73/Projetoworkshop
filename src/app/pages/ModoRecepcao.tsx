import { FormEvent, useState } from "react";
import { Navigate, useNavigate } from "react-router";
import { QRCodeSVG } from "qrcode.react";
import { toast } from "sonner";
import { Field, GhostButton, PrimaryButton, TextInput } from "../components/fields";
import { useAcademy } from "../domain/store";

export function ModoRecepcao() {
  const { user, ready, state, addCheckIn } = useAcademy();
  const navigate = useNavigate();
  const [codigo, setCodigo] = useState("");
  const [erro, setErro] = useState("");
  const [ultimo, setUltimo] = useState<{ nome: string; token: string } | null>(null);
  const [pinAberto, setPinAberto] = useState(false);
  const [pin, setPin] = useState("");
  const [pinErro, setPinErro] = useState("");

  if (!ready) return null;
  if (!user) return <Navigate to="/login-admin" replace />;

  const registrar = (event: FormEvent) => {
    event.preventDefault();
    const result = addCheckIn(codigo);
    if (!result.ok) {
      setErro(result.error);
      setUltimo(null);
      return;
    }
    const aluno = state.alunos.find((item) => item.nome === result.nome);
    setUltimo({ nome: result.nome, token: aluno?.qrCodeToken ?? codigo });
    setErro("");
    setCodigo("");
    toast.success(`Check-in de ${result.nome}`);
  };

  const sair = (event: FormEvent) => {
    event.preventDefault();
    if (pin !== state.config.pinRecepcao) {
      setPinErro("PIN incorreto.");
      return;
    }
    navigate("/dashboard");
  };

  return (
    <main className="forge min-h-screen w-full px-4 py-10 md:px-6" style={{ background: "var(--color-bg-absolute)" }}>
      <div className="mx-auto flex w-full max-w-xl flex-col gap-8">
        <div>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--color-primary)" }}>
            {state.config.nome}
          </p>
          <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(40px, 8vw, 64px)", lineHeight: 0.9, letterSpacing: "-0.02em", textTransform: "uppercase", color: "var(--color-text-primary)" }}>
            Modo recepção
          </h1>
        </div>

        <form onSubmit={registrar} className="flex w-full flex-col gap-4">
          <Field label="Código, matrícula ou e-mail">
            <TextInput value={codigo} onChange={(event) => setCodigo(event.target.value)} placeholder="fg-1001 ou e-mail" autoFocus />
          </Field>
          {erro ? <p style={{ fontFamily: "var(--font-body)", color: "#C62828" }}>{erro}</p> : null}
          <PrimaryButton type="submit">Registrar check-in</PrimaryButton>
        </form>

        {ultimo ? (
          <section className="flex w-full flex-col items-start gap-4 p-6" style={{ background: "var(--color-surface)", borderRadius: "var(--radius-card)" }}>
            <p style={{ fontFamily: "var(--font-display)", fontWeight: 700, textTransform: "uppercase", color: "var(--color-text-primary)", fontSize: 28 }}>{ultimo.nome}</p>
            <QRCodeSVG value={ultimo.token} size={160} bgColor="#1E1E1E" fgColor="#FFFFFF" />
          </section>
        ) : null}

        <GhostButton onClick={() => setPinAberto(true)}>Sair do modo</GhostButton>
        <p style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "var(--color-text-muted)" }}>
          PIN inicial da recepção: 1234. Dá para trocar em Configurações → Sistema.
        </p>

        {pinAberto ? (
          <form onSubmit={sair} className="flex w-full flex-col gap-4 p-6" style={{ border: "1px solid var(--color-border)" }}>
            <Field label="PIN de 4 dígitos">
              <TextInput inputMode="numeric" maxLength={4} value={pin} onChange={(event) => setPin(event.target.value)} />
            </Field>
            {pinErro ? <p style={{ fontFamily: "var(--font-body)", color: "#C62828" }}>{pinErro}</p> : null}
            <PrimaryButton type="submit">Confirmar</PrimaryButton>
          </form>
        ) : null}
      </div>
    </main>
  );
}
