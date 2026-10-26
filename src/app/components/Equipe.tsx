import { motion } from "motion/react";
import imgRodrigoFarias from "../../imports/Body/978baaaf70f56ca33ac1fb607419361a243bff2a.png";
import imgAnaLuisa from "../../imports/Body/7917b0410322b5b75914d197712fffc242d55c79.png";
import imgBrunoT from "../../imports/Body/f374078a3311f864e69180b2fc8568b20d9f2c9e.png";
import imgCamilaD from "../../imports/Body/d4a62d52a819ef7d4b7d881577dd8428fdc62a95.png";

const coaches = [
  {
    initials: "RF",
    name: "RODRIGO FARIAS",
    role: "Head Coach",
    cref: "CREF 045821-G/SP",
    img: imgRodrigoFarias,
  },
  {
    initials: "AL",
    name: "ANA LUÍSA",
    role: "Conditioning",
    cref: "CREF 078342-G/SP",
    img: imgAnaLuisa,
  },
  {
    initials: "BT",
    name: "BRUNO T.",
    role: "Mobility & Rehab",
    cref: "CREF 091205-G/SP",
    img: imgBrunoT,
  },
  {
    initials: "CD",
    name: "CAMILA D.",
    role: "Personal Trainer",
    cref: "CREF 063417-G/SP",
    img: imgCamilaD,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export function Equipe() {
  return (
    <section id="equipe" className="bg-[#111111] py-24 md:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
          className="mb-16"
        >
          <motion.div variants={fadeUp} className="flex items-center gap-4 mb-6">
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
              Quem te acompanha
            </span>
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
            className="text-[clamp(40px,6vw,80px)] mb-6"
          >
            COACHES QUE
            <br />
            <span style={{ color: "#E8400A" }}>TREINAM.</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 400,
              fontSize: "15px",
              lineHeight: 1.65,
              color: "#B0B0B0",
              maxWidth: "480px",
            }}
          >
            Todos graduados em Educação Física. Todos registrados no CREF SP. Todos treinando.
          </motion.p>
        </motion.div>

        {/* Coaches Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {coaches.map((coach) => (
            <motion.div key={coach.name} variants={fadeUp} className="group cursor-default">
              {/* Photo */}
              <div className="relative overflow-hidden mb-5 aspect-[3/4]">
                <img
                  src={coach.img}
                  alt={coach.name}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  style={{ filter: "brightness(0.75) saturate(0.7)" }}
                />
                {/* Overlay on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: "linear-gradient(to top, rgba(232,64,10,0.35) 0%, transparent 60%)",
                  }}
                />
                {/* Initials badge */}
                <div
                  className="absolute top-4 left-4"
                  style={{
                    background: "#E8400A",
                    padding: "4px 10px",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Oswald', sans-serif",
                      fontWeight: 700,
                      fontSize: "14px",
                      letterSpacing: "0.05em",
                      color: "#FFFFFF",
                    }}
                  >
                    {coach.initials}
                  </span>
                </div>
              </div>

              {/* Info */}
              <h3
                style={{
                  fontFamily: "'Oswald', sans-serif",
                  fontWeight: 700,
                  fontSize: "18px",
                  letterSpacing: "-0.3px",
                  textTransform: "uppercase",
                  color: "#FFFFFF",
                  marginBottom: "4px",
                }}
              >
                {coach.name}
              </h3>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 500,
                  fontSize: "12px",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: "#E8400A",
                  marginBottom: "4px",
                }}
              >
                {coach.role}
              </p>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 400,
                  fontSize: "11px",
                  letterSpacing: "0.05em",
                  color: "#6B6B6B",
                  textTransform: "uppercase",
                }}
              >
                {coach.cref}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
