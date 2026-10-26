import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";
import imgEquipamentos from "../../imports/Body/3a7901187f89cd9ca3be462555e3061133917928.png";

const categories = [
  {
    id: "cardio",
    title: "01 · CARDIO & CONDITIONING",
    items: [
      "Assault Bike Concept2 — 8 UNIDADES",
      "Remo Concept2 Model D — 6 UNIDADES",
      "SkiErg Concept2 — 4 UNIDADES",
      "Esteiras NordicTrack com inclinação negativa",
      "Cordas de batalha 15m e 20m",
    ],
  },
  {
    id: "forca",
    title: "02 · FORÇA LIVRE",
    items: [
      "Halteres de 2kg a 60kg",
      "Barras olímpicas competição 20kg",
      "Anilhas calibradas borracha",
      "Power rack com j-hooks e safeties",
      "Bancos ajustáveis incline/decline",
    ],
  },
  {
    id: "maquinas",
    title: "03 · MÁQUINAS",
    items: [
      "Leg press 45° bilateral",
      "Hack squat",
      "Cadeira extensora e flexora",
      "Pec deck e fly machine",
      "Polia dupla funcional",
    ],
  },
  {
    id: "funcional",
    title: "04 · FUNCIONAL & MOBILITY",
    items: [
      "Wall balls 6kg a 20kg",
      "Kettlebells 4kg a 48kg",
      "Plyo boxes 20/24/30 polegadas",
      "Foam rollers e faixas elásticas",
      "Área de mobilidade 80m²",
    ],
  },
  {
    id: "infra",
    title: "05 · INFRAESTRUTURA",
    items: [
      "Vestiários com armários individuais",
      "Duchas quentes e frias",
      "Ar condicionado central",
      "Wi-Fi dedicado por zona",
      "Estacionamento coberto",
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export function Estrutura() {
  const [openId, setOpenId] = useState<string>("cardio");

  const toggle = (id: string) => {
    setOpenId(openId === id ? "" : id);
  };

  return (
    <section
      id="estrutura"
      className="bg-[#0A0A0A] border-t border-b border-[#1E1E1E] py-24 md:py-36"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left column — text + image */}
          <motion.div
            className="lg:col-span-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
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
                Estrutura
              </span>
            </motion.div>

            <motion.div variants={fadeUp}>
              <h2
                style={{
                  fontFamily: "'Oswald', sans-serif",
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                  textTransform: "uppercase",
                  lineHeight: 0.9,
                  color: "#FFFFFF",
                }}
                className="text-[clamp(40px,6vw,80px)] mb-8"
              >
                EQUIPAMENTO
                <br />
                QUE NÃO TE
                <br />
                <span style={{ color: "#E8400A" }}>LIMITA.</span>
              </h2>
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="mb-10"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 400,
                fontSize: "15px",
                lineHeight: 1.65,
                color: "#B0B0B0",
              }}
            >
              Cada peça selecionada com um critério: aguentar seu melhor dia todos os dias.
            </motion.p>

            {/* Image */}
            <motion.div
              variants={fadeUp}
              className="relative overflow-hidden rounded-sm aspect-[4/3]"
            >
              <img
                src={imgEquipamentos}
                alt="Equipamentos FORGEE"
                className="w-full h-full object-cover"
                style={{ filter: "saturate(0.6) brightness(0.85)" }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to bottom right, rgba(17,17,17,0.2), rgba(17,17,17,0.4))",
                }}
              />
            </motion.div>
          </motion.div>

          {/* Right column — Accordion */}
          <motion.div
            className="lg:col-span-7"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
          >
            <div className="border-t border-[#2A2A2A]">
              {categories.map((cat) => {
                const isOpen = openId === cat.id;
                return (
                  <motion.div
                    key={cat.id}
                    variants={fadeUp}
                    className="border-b border-[#2A2A2A]"
                  >
                    <button
                      onClick={() => toggle(cat.id)}
                      className="w-full flex items-center justify-between py-8 text-left group"
                    >
                      <span
                        style={{
                          fontFamily: "'Oswald', sans-serif",
                          fontWeight: 700,
                          fontSize: "clamp(16px, 2vw, 24px)",
                          letterSpacing: "-0.5px",
                          textTransform: "uppercase",
                          color: isOpen ? "#E8400A" : "#FFFFFF",
                          transition: "color 0.2s",
                        }}
                      >
                        {cat.title}
                      </span>
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.25 }}
                        className="flex-shrink-0 ml-4"
                      >
                        <ChevronDown
                          size={24}
                          color={isOpen ? "#E8400A" : "#6B6B6B"}
                          strokeWidth={1.5}
                        />
                      </motion.div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                          style={{ overflow: "hidden" }}
                        >
                          <div className="pb-8 space-y-4">
                            {cat.items.map((item) => (
                              <div key={item} className="flex items-center gap-3">
                                <div
                                  className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                                  style={{ background: "#E8400A" }}
                                />
                                <span
                                  style={{
                                    fontFamily: "'Inter', sans-serif",
                                    fontWeight: 400,
                                    fontSize: "15px",
                                    color: "#B0B0B0",
                                    lineHeight: 1.5,
                                  }}
                                >
                                  {item}
                                </span>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
