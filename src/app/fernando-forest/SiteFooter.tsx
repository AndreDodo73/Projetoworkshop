export function SiteFooter() {
  return (
    <footer className="ff-footer">
      <div className="ff-wrap">
        <div className="ff-footer-grid">
          <div>
            <p className="ff-logo-name">Fernando Forest</p>
            <p className="ff-logo-sub">Tecelagem</p>
            <p className="ff-footer-lead">
              Texturas que inspiram. Tecidos que transformam.
            </p>
          </div>
          <nav aria-label="Rodapé">
            <a href="#colecoes">Coleções</a>
            <a href="#essencia">Essência</a>
            <a href="#contato">Contato</a>
          </nav>
          <p>
            Rua Harmonia, 412 — Vila Madalena, São Paulo.
            <br />
            Demonstração.
          </p>
        </div>
        <p className="ff-legal">
          © 2026 Fernando Forest. Página de demonstração para apresentação.
        </p>
      </div>
    </footer>
  );
}
