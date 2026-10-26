import { motion } from "motion/react";
import imgEstruturaInterna from "../../imports/Body/65e913fa297303b4fcc8d5d22393893e6b956e92.png";

const pillars = [
  {
    num: "01",
    title: "Intensidade",
    desc: "O ambiente foi calibrado para elevar. Iluminação, acústica, temperatura — tudo serve ao treino.",
  },
  {
    num: "02",
    title: "Precisão",
    desc: "Protocolo individualizado desde o dia um. Nenhuma planilha genérica sai daqui.",
  },
  {
    num: "03",
    title: "Controle",
    desc: "Você define o objetivo. Nós fornecemos o caminho, o espaço e o suporte.",
  },
];

const metrics = [
  { value: "+1.200", label: "Alunos ativos" },
  { value: "94%", label: "Retenção em 6 meses" },
  { value: "8 anos", label: "Em operação" },
  { value: "1.8K M²", label: "Área dedicada" },
];

const testimonials = [
  {
    text: "Treinei em academias em São Paulo por anos. A FORGEE é a única que me fez não sentir falta de nenhuma delas.",
    name: "Rafael M.",
    role: "Engenheiro · Aluno há 3 anos",
  },
  {
    text: "Entrei querendo perder peso. Fiquei pela comunidade e pela sensação de que alguém realmente acompanha.",
    name: "Juliana T.",
    role: "Professora · Aluna há 2 anos",
  },
  {
    text: "A estrutura impressiona. Mas o que me mantém são os profissionais. Nunca fui tão bem orientado.",
    name: "Lucas O.",
    role: "Empresário · Aluno há 4 anos",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export function QuemSomos() {
  return (
    <section id="espao" className="bg-[#111111] py-24 md:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24"
        >
          {/* Left: Text */}
          <div>
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
                Quem somos
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
                className="text-[clamp(48px,7vw,96px)] mb-10"
              >
                FORJADOS
                <br />
                PELA
                <br />
                <span style={{ color: "#E8400A" }}>DISCIPLINA.</span>
              </h2>
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="mb-6"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 400,
                fontSize: "15px",
                lineHeight: 1.65,
                color: "#B0B0B0",
              }}
            >
              A FORGEE nasceu de uma certeza simples: ambiente mediano produz resultado mediano.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="mb-8"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 400,
                fontSize: "15px",
                lineHeight: 1.65,
                color: "#B0B0B0",
              }}
            >
              Cada metro quadrado foi pensado para que o espaço não interfira — ele desaparece.
              O que fica é o treino, a concentração e o progresso.
            </motion.p>

            <motion.blockquote
              variants={fadeUp}
              className="border-l-2 border-[#E8400A] pl-6 mb-8"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontStyle: "italic",
                fontSize: "18px",
                lineHeight: 1.5,
                color: "#D9D9D9",
              }}
            >
              "In silence, the transformation begins."
            </motion.blockquote>

            <motion.p
              variants={fadeUp}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 400,
                fontSize: "15px",
                lineHeight: 1.65,
                color: "#B0B0B0",
              }}
            >
              Aqui não tem música forçada, espelho em excesso ou coach em cima. Tem equipamento
              que não decepciona no seu melhor dia, profissionais que aparecem quando você precisa
              e silêncio o suficiente para se ouvir.
            </motion.p>
          </div>

          {/* Right: Image */}
          <motion.div
            variants={fadeUp}
            className="relative h-96 lg:h-full min-h-80 overflow-hidden rounded-sm"
          >
            <img
              src={imgEstruturaInterna}
              alt="Estrutura interna da FORGEE"
              className="w-full h-full object-cover"
              style={{ filter: "brightness(0.75) saturate(0.8)" }}
            />
            {/* Overlay */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to bottom, transparent 60%, rgba(17,17,17,0.8) 100%)",
              }}
            />
          </motion.div>
        </motion.div>

        {/* Pillars */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24"
        >
          {pillars.map((pillar) => (
            <motion.div
              key={pillar.num}
              variants={fadeUp}
              className="p-8 border border-[#2A2A2A] bg-[#1E1E1E] relative overflow-hidden group"
            >
              {/* Hover FX */}
              <div
                className="absolute top-0 left-0 w-full h-1 bg-[#E8400A] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
              />
              <span
                style={{
                  fontFamily: "'Oswald', sans-serif",
                  fontWeight: 700,
                  fontSize: "48px",
                  letterSpacing: "-2px",
                  color: "#2A2A2A",
                  display: "block",
                  lineHeight: 1,
                  marginBottom: "16px",
                }}
              >
                {pillar.num}
              </span>
              <h3
                style={{
                  fontFamily: "'Oswald', sans-serif",
                  fontWeight: 700,
                  fontSize: "22px",
                  letterSpacing: "-0.5px",
                  textTransform: "uppercase",
                  color: "#FFFFFF",
                  marginBottom: "12px",
                }}
              >
                {pillar.title}
              </h3>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 400,
                  fontSize: "14px",
                  lineHeight: 1.65,
                  color: "#B0B0B0",
                }}
              >
                {pillar.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Metrics */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          className="grid grid-cols-2 md:grid-cols-4 border border-[#2A2A2A] mb-24"
        >
          {metrics.map((metric, i) => (
            <motion.div
              key={metric.label}
              variants={fadeUp}
              className={`flex flex-col items-center justify-center py-10 px-6 ${
                i < metrics.length - 1 ? "border-r border-[#2A2A2A]" : ""
              }`}
            >
              <span
                style={{
                  fontFamily: "'Oswald', sans-serif",
                  fontWeight: 700,
                  fontSize: "36px",
                  letterSpacing: "-1px",
                  color: "#FFFFFF",
                  textTransform: "uppercase",
                }}
              >
                {metric.value}
              </span>
              <span
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 500,
                  fontSize: "11px",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#6B6B6B",
                  marginTop: "6px",
                  textAlign: "center",
                }}
              >
                {metric.label}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={fadeUp}
              className="p-8 bg-[#1E1E1E] border border-[#2A2A2A] flex flex-col"
            >
              {/* Quote mark */}
              <span
                style={{
                  fontFamily: "'Oswald', sans-serif",
                  fontSize: "64px",
                  lineHeight: 1,
                  color: "#E8400A",
                  display: "block",
                  marginBottom: "8px",
                }}
              >
                "
              </span>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontStyle: "italic",
                  fontWeight: 400,
                  fontSize: "15px",
                  lineHeight: 1.65,
                  color: "#D9D9D9",
                  flexGrow: 1,
                  marginBottom: "24px",
                }}
              >
                {t.text}
              </p>
              <div className="border-t border-[#2A2A2A] pt-6">
                <span
                  style={{
                    fontFamily: "'Oswald', sans-serif",
                    fontWeight: 700,
                    fontSize: "16px",
                    letterSpacing: "-0.3px",
                    color: "#FFFFFF",
                    display: "block",
                    textTransform: "uppercase",
                  }}
                >
                  {t.name}
                </span>
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 400,
                    fontSize: "12px",
                    color: "#6B6B6B",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                  }}
                >
                  {t.role}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
