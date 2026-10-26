import { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

const navItems = ["Espaço", "Programas", "Equipe", "Planos"];

export function Layout() {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id.toLowerCase().replace(/[^a-z]/g, ""));
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#111111] flex flex-col">
      {/* Institutional bar */}
      <div className="hidden md:block bg-[#0A0A0A] border-b border-[#1E1E1E] py-2 text-center">
        <span
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "10px",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "#6B6B6B",
          }}
        >
          Beyond Limits Known™ · Indaiatuba, SP · Est. 2018
        </span>
      </div>

      {/* Header */}
      <motion.header
        className={`fixed z-50 w-full transition-all duration-300 ${
          scrolled
            ? "bg-[#111111]/95 backdrop-blur-md border-b border-[#2A2A2A] top-0"
            : "bg-transparent md:top-8 top-0"
        }`}
        initial={false}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex-shrink-0"
            >
              <span
                style={{
                  fontFamily: "'Oswald', sans-serif",
                  fontWeight: 700,
                  fontSize: "24px",
                  letterSpacing: "-1px",
                  color: "#FFFFFF",
                  textTransform: "uppercase",
                }}
              >
                FORGEE
              </span>
            </button>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollTo(item)}
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "11px",
                    fontWeight: 500,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "#B0B0B0",
                  }}
                  className="hover:text-white transition-colors duration-200"
                >
                  {item}
                </button>
              ))}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden md:flex items-center gap-6">
              <button
                onClick={() => navigate("/login-admin")}
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "11px",
                  fontWeight: 500,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#B0B0B0",
                }}
                className="hover:text-white transition-colors"
              >
                Sou Membro
              </button>
              <button
                onClick={() => scrollTo("localizacao")}
                style={{
                  fontFamily: "'Oswald', sans-serif",
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: "0.10em",
                  textTransform: "uppercase",
                  color: "#FFFFFF",
                  background: "#E8400A",
                  padding: "12px 24px",
                  border: "none",
                  cursor: "pointer",
                }}
                className="hover:bg-[#FF4D0D] transition-colors duration-200"
              >
                Agendar Visita
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-[#0A0A0A] flex flex-col pt-24 px-6"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <nav className="flex flex-col gap-1">
              {navItems.map((item, i) => (
                <motion.button
                  key={item}
                  onClick={() => scrollTo(item)}
                  className="text-left py-5 border-b border-[#2A2A2A]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  style={{
                    fontFamily: "'Oswald', sans-serif",
                    fontSize: "32px",
                    fontWeight: 700,
                    letterSpacing: "-1px",
                    textTransform: "uppercase",
                    color: "#FFFFFF",
                  }}
                >
                  {item}
                </motion.button>
              ))}
            </nav>
            <div className="mt-8 flex flex-col gap-4">
              <button
                onClick={() => navigate("/login-admin")}
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "11px",
                  fontWeight: 500,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#B0B0B0",
                }}
                className="text-left py-3"
              >
                Sou Membro
              </button>
              <button
                onClick={() => scrollTo("localizacao")}
                style={{
                  fontFamily: "'Oswald', sans-serif",
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: "0.10em",
                  textTransform: "uppercase",
                  color: "#FFFFFF",
                  background: "#E8400A",
                  padding: "16px 32px",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                Agendar Visita
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Page Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-[#0A0A0A] border-t border-[#1E1E1E] pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <span
                style={{
                  fontFamily: "'Oswald', sans-serif",
                  fontWeight: 700,
                  fontSize: "32px",
                  letterSpacing: "-1px",
                  color: "#FFFFFF",
                  textTransform: "uppercase",
                  display: "block",
                  marginBottom: "8px",
                }}
              >
                FORGEE
              </span>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "11px",
                  fontWeight: 500,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "#6B6B6B",
                }}
              >
                BEYOND LIMITS KNOWN™
              </p>
              <div className="mt-8 flex gap-4">
                <a
                  href="https://instagram.com/forgee.academy"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#6B6B6B] hover:text-[#E8400A] transition-colors"
                  style={{ fontSize: "14px" }}
                >
                  Instagram
                </a>
                <a
                  href="https://wa.me/5519982345678"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#6B6B6B] hover:text-[#E8400A] transition-colors"
                  style={{ fontSize: "14px" }}
                >
                  WhatsApp
                </a>
              </div>
            </div>

            <div>
              <h4
                style={{
                  fontFamily: "'Oswald', sans-serif",
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#FFFFFF",
                  marginBottom: "24px",
                }}
              >
                Academia
              </h4>
              <ul className="space-y-4">
                {navItems.map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "14px",
                        color: "#B0B0B0",
                      }}
                      className="hover:text-white transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4
                style={{
                  fontFamily: "'Oswald', sans-serif",
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#FFFFFF",
                  marginBottom: "24px",
                }}
              >
                Legal & Redes
              </h4>
              <ul className="space-y-4">
                <li>
                  <a
                    href="#"
                    style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", color: "#B0B0B0" }}
                    className="hover:text-white transition-colors"
                  >
                    Política de Privacidade
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", color: "#B0B0B0" }}
                    className="hover:text-white transition-colors"
                  >
                    Termos de Uso
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-[#1E1E1E] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "11px",
                letterSpacing: "0.10em",
                textTransform: "uppercase",
                color: "#6B6B6B",
              }}
            >
              FORGEE ACADEMIA LTDA. · CNPJ 00.000.000/0001-00 · CREF SP
            </p>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "11px",
                letterSpacing: "0.10em",
                textTransform: "uppercase",
                color: "#6B6B6B",
              }}
            >
              DESIGN SYSTEM © {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
