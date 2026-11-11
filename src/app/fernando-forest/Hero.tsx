export function Hero() {
  return (
    <section className="ff-hero" aria-label="Apresentação">
      <div className="ff-hero-photo">
        <img
          src="/fernando-forest/hero.jpg"
          alt="Linho natural com dobras e luz suave sobre a cama"
        />
      </div>
      <div className="ff-hero-copy">
        <p className="ff-eyebrow">São Paulo</p>
        <h1>Texturas que inspiram. Tecidos que transformam.</h1>
        <p className="ff-hero-lead">
          Explore cores, tramas e possibilidades para dar forma às suas ideias.
        </p>
        <div className="ff-hero-actions">
          <a className="ff-btn" href="#colecoes">
            Explorar coleção
          </a>
          <a className="ff-btn ff-btn-ghost" href="#contato">
            Fale com a Fernando Forest
          </a>
        </div>
      </div>
    </section>
  );
}
