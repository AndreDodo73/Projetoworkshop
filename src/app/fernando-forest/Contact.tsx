import { FormEvent, useState } from "react";

type Status = "idle" | "success";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const nome = String(data.get("nome") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const mensagem = String(data.get("mensagem") ?? "").trim();

    if (!nome || !email || !mensagem) {
      setError("Preencha nome, e-mail e mensagem.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Informe um e-mail válido.");
      return;
    }

    setError("");
    setStatus("success");
  };

  return (
    <section className="ff-section" id="contato">
      <div className="ff-wrap ff-contact-grid">
        <div>
          <p className="ff-eyebrow">Contato</p>
          <h2>Vamos falar de tecido.</h2>
          <p className="ff-intro">
            Conte o ambiente, a luz e o uso. Respondemos com amostras e uma
            leitura honesta da trama.
          </p>
          <div className="ff-address">
            <p>Rua Harmonia, 412</p>
            <p>Vila Madalena, São Paulo — SP</p>
            <p>(11) 3090-1842</p>
            <p>contato@fernandoforest.com.br</p>
            <p>Segunda a sexta, das 10h às 18h</p>
            <p className="ff-demo">Demonstração — dados fictícios</p>
          </div>
        </div>

        {status === "success" ? (
          <div className="ff-success" role="status">
            <h3>Mensagem recebida.</h3>
            <p>
              Obrigado pelo contato. Este envio é uma demonstração e permanece
              apenas neste navegador.
            </p>
            <button
              className="ff-btn ff-btn-ghost"
              type="button"
              onClick={() => setStatus("idle")}
            >
              Enviar outra mensagem
            </button>
          </div>
        ) : (
          <form className="ff-form" onSubmit={onSubmit} noValidate>
            <div className="ff-field">
              <label htmlFor="nome">Nome</label>
              <input id="nome" name="nome" type="text" autoComplete="name" />
            </div>
            <div className="ff-field">
              <label htmlFor="email">E-mail</label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
              />
            </div>
            <div className="ff-field">
              <label htmlFor="mensagem">Mensagem</label>
              <textarea id="mensagem" name="mensagem" />
            </div>
            {error ? (
              <p className="ff-error" role="alert">
                {error}
              </p>
            ) : null}
            <button className="ff-btn" type="submit">
              Enviar mensagem
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
