import { fabrics } from "./fabrics";

export function Collection() {
  return (
    <section className="ff-section" id="colecoes">
      <div className="ff-wrap">
        <div className="ff-section-head">
          <p className="ff-eyebrow">Coleções</p>
          <h2>Um universo de possibilidades.</h2>
          <p className="ff-intro">
            Seis tramas para arquitetura de interiores. Poucas cores, muito
            toque — do cru ao terracota.
          </p>
        </div>
        <div className="ff-grid">
          {fabrics.map((fabric, index) => (
            <article className="ff-fabric" key={fabric.name}>
              <img src={fabric.image} alt={fabric.alt} />
              <h3>
                <span className="ff-index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {fabric.name}
              </h3>
              <p>{fabric.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
