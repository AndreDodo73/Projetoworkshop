import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "Preciso ter experiência?",
    a: "Não. Todos passam pela avaliação inicial — do iniciante ao atleta. O ponto de partida é individual.",
  },
  {
    q: "Posso treinar sozinho?",
    a: "Sim. A maioria dos alunos treina de forma autônoma com planilha. Coaches estão disponíveis para dúvidas pontuais — não ficam em cima.",
  },
  {
    q: "Como funciona o cancelamento?",
    a: "Avise com 30 dias. Plano encerrado no próximo ciclo. Sem multa, sem justificativa obrigatória.",
  },
  {
    q: "Posso visitar antes de assinar?",
    a: "Sim — e incentivamos. Agende pelo site. Você conhece o espaço, conversa com um coach e faz uma aula experimental gratuita.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#0A0A0A] border-t border-[#1E1E1E] py-24 md:py-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Left: Header */}
          <motion.div
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
                Dúvidas
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
              className="text-[clamp(40px,6vw,80px)] mb-8"
            >
              PERGUNTAS
              <br />
              <span style={{ color: "#E8400A" }}>DIRETAS.</span>
            </motion.h2>

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
              Sem burocracia. Sem letras miúdas. Se tiver outra dúvida, fala no WhatsApp.
            </motion.p>
          </motion.div>

          {/* Right: Accordion */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          >
            <div className="border-t border-[#2A2A2A]">
              {faqs.map((faq, i) => {
                const isOpen = openIndex === i;
                return (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    className="border-b border-[#2A2A2A]"
                  >
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : i)}
                      className="w-full flex items-center justify-between py-7 text-left gap-4"
                    >
                      <span
                        style={{
                          fontFamily: "'Oswald', sans-serif",
                          fontWeight: 700,
                          fontSize: "clamp(16px, 2vw, 22px)",
                          letterSpacing: "-0.3px",
                          textTransform: "uppercase",
                          color: isOpen ? "#E8400A" : "#FFFFFF",
                          transition: "color 0.2s",
                        }}
                      >
                        {faq.q}
                      </span>
                      <div className="flex-shrink-0">
                        {isOpen ? (
                          <Minus size={20} color="#E8400A" strokeWidth={2} />
                        ) : (
                          <Plus size={20} color="#6B6B6B" strokeWidth={2} />
                        )}
                      </div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                          style={{ overflow: "hidden" }}
                        >
                          <p
                            className="pb-7"
                            style={{
                              fontFamily: "'Inter', sans-serif",
                              fontWeight: 400,
                              fontSize: "15px",
                              lineHeight: 1.65,
                              color: "#B0B0B0",
                            }}
                          >
                            {faq.a}
                          </p>
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
