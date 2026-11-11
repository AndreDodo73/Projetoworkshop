import { useEffect, useState } from "react";

const links = [
  { href: "#colecoes", label: "Coleções" },
  { href: "#essencia", label: "Essência" },
  { href: "#contato", label: "Contato" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const follow = (href: string) => (event: { preventDefault: () => void }) => {
    event.preventDefault();
    setOpen(false);
    const id = href.replace("#", "");
    window.requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    });
  };

  return (
    <header className="ff-header">
      <div className="ff-wrap ff-header-bar">
        <a className="ff-logo" href="#topo" onClick={follow("#topo")}>
          <span className="ff-logo-name">Fernando Forest</span>
          <span className="ff-logo-sub">Tecelagem</span>
        </a>

        <nav className="ff-nav" aria-label="Seções">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={follow(link.href)}>
              {link.label}
            </a>
          ))}
        </nav>

        <a className="ff-btn ff-header-cta" href="#colecoes" onClick={follow("#colecoes")}>
          Conheça os tecidos
        </a>

        <button
          className="ff-menu-btn"
          type="button"
          aria-expanded={open}
          aria-controls="menu-mobile"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Fechar" : "Menu"}
        </button>
      </div>

      {open ? (
        <nav className="ff-drawer" id="menu-mobile" aria-label="Menu">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={follow(link.href)}>
              {link.label}
            </a>
          ))}
          <a className="ff-btn" href="#colecoes" onClick={follow("#colecoes")}>
            Conheça os tecidos
          </a>
        </nav>
      ) : null}
    </header>
  );
}
