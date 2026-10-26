import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

const tickerText =
  "AGENDAR UMA VISITA · GRATUITA · SEM COMPROMISSO · TRAGA TÊNIS · AGENDAR UMA VISITA · GRATUITA · SEM COMPROMISSO · TRAGA TÊNIS · ";

export function CTAFinal() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <section ref={ref} className="relative overflow-hidden">
      {/* Background */}
      <motion.div
        className="absolute inset-0"
        style={{ y: bgY }}
      >
        <div
          className="absolute inset-0"
          style={{ background: "#E8400A" }}
        />
        {/* Noise texture overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")",
          }}
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 py-28 md:py-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2
              style={{
                fontFamily: "'Oswald', sans-serif",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                textTransform: "uppercase",
                lineHeight: 0.9,
                color: "#FFFFFF",
              }}
              className="text-[clamp(40px,8vw,120px)] mb-12"
            >
              A DECISÃO
              <br />
              JÁ FOI TOMADA.
              <br />
              AGORA É A AÇÃO.
            </h2>

            <a
              href="#localizacao"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("localizacao")?.scrollIntoView({ behavior: "smooth" });
              }}
              style={{
                fontFamily: "'Oswald', sans-serif",
                fontWeight: 700,
                fontSize: "14px",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#E8400A",
                background: "#FFFFFF",
                padding: "20px 48px",
                display: "inline-block",
                textDecoration: "none",
                transition: "background 0.2s",
              }}
              className="hover:bg-[#F0F0F0] transition-colors"
            >
              AGENDAR VISITA GRATUITA
            </a>
          </motion.div>
        </div>

        {/* Ticker */}
        <div className="overflow-hidden border-t border-b border-[rgba(255,255,255,0.15)] py-5">
          <motion.div
            className="flex gap-0 whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          >
            {[0, 1].map((n) => (
              <span
                key={n}
                style={{
                  fontFamily: "'Oswald', sans-serif",
                  fontWeight: 700,
                  fontSize: "clamp(14px, 2vw, 18px)",
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.55)",
                  flexShrink: 0,
                }}
              >
                {tickerText}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
