import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import imgAtleta from "../../imports/Body/135a87646d57110c12fda8b9764de32faaccddce.png";

const stats = [
  { value: "05H–23H", label: "Horário" },
  { value: "7 DIAS", label: "Dias/Semana" },
  { value: "1.800M²", label: "Espaço" },
  { value: "+1.200", label: "Alunos" },
  { value: "EST. 2018", label: "Fundação" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const lineVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);

  const scrollToAgenda = () => {
    document.getElementById("localizacao")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToEspaco = () => {
    document.getElementById("espao")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section ref={ref} className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background Video with parallax */}
      <motion.div className="absolute inset-0" style={{ y: imgY }}>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center"
          style={{ filter: "brightness(0.55)" }}
        >
          <source
            src="https://ynupjjktjahzrjrwvtko.supabase.co/storage/v1/object/public/imagens-workshop-2/Video%20bg2.mp4"
            type="video/mp4"
          />
        </video>
        {/* Overlays */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(17,17,17,0.95) 40%, rgba(17,17,17,0.4) 75%, rgba(17,17,17,0.2) 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(17,17,17,1) 0%, rgba(17,17,17,0) 40%)",
          }}
        />
        {/* Orange light leak FX */}
        <div
          className="absolute right-0 top-1/4 w-64 h-96 rounded-full"
          style={{
            background: "rgba(232,64,10,0.12)",
            filter: "blur(80px)",
            mixBlendMode: "screen",
          }}
        />
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10 flex-1 flex flex-col justify-center max-w-7xl mx-auto px-6 lg:px-8 pt-40 pb-32"
        style={{ y: textY }}
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:-ml-40 xl:-ml-56"
        >
          {/* Overline */}
          <motion.div variants={lineVariants} className="flex items-center gap-4 mb-8">
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
              FORGEE ACADEMY · INDAIATUBA
            </span>
          </motion.div>

          {/* Headline */}
          <div className="overflow-hidden">
            <motion.div
              variants={lineVariants}
              style={{
                fontFamily: "'Oswald', sans-serif",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                textTransform: "uppercase",
                lineHeight: 0.9,
                color: "#FFFFFF",
              }}
              className="text-[clamp(56px,10vw,120px)]"
            >
              SEM MÁGICA
            </motion.div>
          </div>
          <div className="overflow-hidden">
            <motion.div
              variants={lineVariants}
              style={{
                fontFamily: "'Oswald', sans-serif",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                textTransform: "uppercase",
                lineHeight: 0.9,
                color: "#E8400A",
              }}
              className="text-[clamp(56px,10vw,120px)]"
            >
              SEM ATALHOS
            </motion.div>
          </div>
          <div className="overflow-hidden">
            <motion.div
              variants={lineVariants}
              style={{
                fontFamily: "'Oswald', sans-serif",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                textTransform: "uppercase",
                lineHeight: 0.9,
                color: "#FFFFFF",
              }}
              className="text-[clamp(56px,10vw,120px)]"
            >
              SEM DESCULPAS
            </motion.div>
          </div>

          {/* Subtitle */}
          <motion.p
            variants={lineVariants}
            className="mt-8 mb-3"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 500,
              fontSize: "clamp(16px, 2vw, 22px)",
              color: "#D9D9D9",
            }}
          >
            Treinos progressivos e acompanhamento real!
          </motion.p>

          {/* Support text */}
          <motion.p
            variants={lineVariants}
            className="max-w-lg mb-10"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 400,
              fontSize: "15px",
              lineHeight: 1.65,
              color: "#B0B0B0",
            }}
          >
            Um espaço desenhado para quem treina com intenção. Sem distrações. Sem
            promessas vazias. Só você, o equipamento e o trabalho.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={lineVariants} className="flex flex-wrap gap-4">
            <button
              onClick={scrollToAgenda}
              className="flex items-center gap-3 hover:bg-[#FF4D0D] transition-colors duration-200 group"
              style={{
                fontFamily: "'Oswald', sans-serif",
                fontWeight: 700,
                fontSize: "12px",
                letterSpacing: "0.10em",
                textTransform: "uppercase",
                color: "#FFFFFF",
                background: "#E8400A",
                padding: "16px 32px",
                border: "none",
                cursor: "pointer",
              }}
            >
              COMEÇAR AGORA
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M2.66667 8H13.3333M13.3333 8L9.33333 4M13.3333 8L9.33333 12"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              onClick={scrollToEspaco}
              className="hover:border-white hover:text-white transition-colors duration-200"
              style={{
                fontFamily: "'Oswald', sans-serif",
                fontWeight: 700,
                fontSize: "12px",
                letterSpacing: "0.10em",
                textTransform: "uppercase",
                color: "#B0B0B0",
                background: "transparent",
                padding: "16px 32px",
                border: "1px solid #3A3A3A",
                cursor: "pointer",
              }}
            >
              CONHECER O ESPAÇO
            </button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Stats Bar */}
      <div className="relative z-10 bg-[#0A0A0A] border-t border-[#1E1E1E]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + i * 0.1, duration: 0.5 }}
                className={`flex flex-col items-center justify-center py-6 px-4 ${
                  i < stats.length - 1 ? "border-r border-[#1E1E1E]" : ""
                } ${i === stats.length - 1 && stats.length % 2 !== 0 ? "col-span-2 md:col-span-1 border-r-0" : ""}`}
              >
                <span
                  style={{
                    fontFamily: "'Oswald', sans-serif",
                    fontWeight: 700,
                    fontSize: "22px",
                    letterSpacing: "-0.5px",
                    color: "#FFFFFF",
                    textTransform: "uppercase",
                  }}
                >
                  {stat.value}
                </span>
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 500,
                    fontSize: "10px",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "#6B6B6B",
                    marginTop: "4px",
                  }}
                >
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
