import { motion } from "motion/react";

const programs = [
  {
    id: "strength",
    num: "01",
    title: "FORGEE STRENGTH",
    badge: null,
    desc: "Musculação por periodização. Para quem quer construir massa e entender o próprio corpo. Disponível como treino livre com planilha ou acompanhado com coach.",
    details: [
      { label: "Para quem é", value: "Iniciantes a avançados em hipertrofia e força." },
      { label: "Frequência", value: "3–5× por semana." },
    ],
  },
  {
    id: "conditioning",
    num: "02",
    title: "FORGEE CONDITIONING",
    badge: "DESTAQUE",
    desc: "Sessões de 45 min com circuito de alta intensidade — remo, assault bike, força funcional e potência. Início e fim marcados. Sem improvisar.",
    details: [
      { label: "Para quem é", value: "Condicionamento, perda de gordura." },
      { label: "Turmas", value: "06H · 07H · 12H · 18H · 19H30" },
    ],
  },
  {
    id: "mobility",
    num: "03",
    title: "FORGEE MOBILITY",
    badge: null,
    desc: "Protocolo de mobilidade, postura e cadeia posterior. Não é yoga. É trabalho de corpo para quem treina pesado e não quer se machucar.",
    details: [],
  },
  {
    id: "personal",
    num: "04",
    title: "PERSONAL TRAINING",
    badge: null,
    desc: "Sessões 1:1 com avaliação completa, protocolo personalizado e revisão a cada 4 semanas. Individual ou em dupla.",
    details: [],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export function Programas() {
  return (
    <section id="programas" className="bg-[#111111] py-24 md:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
          className="text-center mb-20"
        >
          <motion.div variants={fadeUp} className="flex items-center justify-center gap-4 mb-6">
            <div className="w-8 h-px bg-[#E8400A]" />
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "11px",
                fontWeight: 500,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "#E8400A",
              }}
            >
              O que oferecemos
            </span>
            <div className="w-8 h-px bg-[#E8400A]" />
          </motion.div>

          <motion.h2
            variants={fadeUp}
            style={{
              fontFamily: "'Oswald', sans-serif",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              textTransform: "uppercase",
              lineHeight: 0.9,
              color: "#FFFFFF",
            }}
            className="text-[clamp(40px,7vw,96px)]"
          >
            UM PROTOCOLO
            <br />
            PARA CADA
            <br />
            <span style={{ color: "#E8400A" }}>OBJETIVO.</span>
          </motion.h2>
        </motion.div>

        {/* Programs Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {programs.map((prog) => {
            const isHighlight = prog.badge !== null;
            return (
              <motion.div
                key={prog.id}
                variants={fadeUp}
                className={`relative p-8 border overflow-hidden group transition-colors duration-300 ${
                  isHighlight
                    ? "bg-[#E8400A] border-[#E8400A]"
                    : "bg-[#1E1E1E] border-[#2A2A2A] hover:border-[#E8400A]"
                }`}
              >
                {/* Hover accent bar for non-highlight */}
                {!isHighlight && (
                  <div className="absolute top-0 left-0 w-full h-1 bg-[#E8400A] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                )}

                {/* Badge */}
                {prog.badge && (
                  <div className="mb-4">
                    <span
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "10px",
                        fontWeight: 500,
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        color: "#FFFFFF",
                        background: "rgba(0,0,0,0.3)",
                        padding: "4px 10px",
                        display: "inline-block",
                      }}
                    >
                      {prog.badge}
                    </span>
                  </div>
                )}

                {/* Number */}
                <span
                  style={{
                    fontFamily: "'Oswald', sans-serif",
                    fontWeight: 700,
                    fontSize: "14px",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: isHighlight ? "rgba(255,255,255,0.6)" : "#6B6B6B",
                    display: "block",
                    marginBottom: "8px",
                  }}
                >
                  {prog.num}
                </span>

                {/* Title */}
                <h3
                  style={{
                    fontFamily: "'Oswald', sans-serif",
                    fontWeight: 700,
                    fontSize: "clamp(20px, 2.5vw, 28px)",
                    letterSpacing: "-0.5px",
                    textTransform: "uppercase",
                    color: "#FFFFFF",
                    marginBottom: "16px",
                  }}
                >
                  {prog.title}
                </h3>

                {/* Description */}
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 400,
                    fontSize: "15px",
                    lineHeight: 1.65,
                    color: isHighlight ? "rgba(255,255,255,0.85)" : "#B0B0B0",
                    marginBottom: prog.details.length > 0 ? "20px" : "0",
                  }}
                >
                  {prog.desc}
                </p>

                {/* Details */}
                {prog.details.length > 0 && (
                  <div className="space-y-3 pt-5 border-t border-[rgba(255,255,255,0.15)]">
                    {prog.details.map((detail) => (
                      <div key={detail.label} className="flex gap-2">
                        <span
                          style={{
                            fontFamily: "'Inter', sans-serif",
                            fontSize: "12px",
                            fontWeight: 500,
                            letterSpacing: "0.05em",
                            textTransform: "uppercase",
                            color: isHighlight ? "rgba(255,255,255,0.6)" : "#6B6B6B",
                            flexShrink: 0,
                            minWidth: "100px",
                          }}
                        >
                          {detail.label}
                        </span>
                        <span
                          style={{
                            fontFamily: "'Inter', sans-serif",
                            fontSize: "13px",
                            color: isHighlight ? "#FFFFFF" : "#D9D9D9",
                          }}
                        >
                          {detail.value}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
