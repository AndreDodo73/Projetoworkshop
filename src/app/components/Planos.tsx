import { motion } from "motion/react";
import { Check, Minus } from "lucide-react";

const plans = [
  {
    id: "livre",
    name: "LIVRE",
    price: "R$149",
    period: "/mês",
    highlight: false,
    features: [
      { text: "Acesso ilimitado 05H–23H", included: true },
      { text: "Avaliação física de entrada", included: true },
      { text: "Planilha de treino inicial", included: true },
      { text: "App FORGEE", included: true },
      { text: "2 sessões de Personal/mês", included: false },
      { text: "1 aula Conditioning/semana", included: false },
      { text: "Revisão de planilha / 4 semanas", included: false },
      { text: "Acesso ao Mobility", included: false },
      { text: "4 sessões de Personal/mês", included: false },
      { text: "Acesso ilimitado a classes", included: false },
      { text: "Bioimpedância mensal", included: false },
      { text: "WhatsApp com coach dedicado", included: false },
    ],
  },
  {
    id: "plus",
    name: "PLUS",
    price: "R$229",
    period: "/mês",
    highlight: true,
    badge: "MAIS ESCOLHIDO",
    features: [
      { text: "Acesso ilimitado 05H–23H", included: true },
      { text: "Avaliação física de entrada", included: true },
      { text: "Planilha de treino inicial", included: true },
      { text: "App FORGEE", included: true },
      { text: "2 sessões de Personal/mês", included: true },
      { text: "1 aula Conditioning/semana", included: true },
      { text: "Revisão de planilha / 4 semanas", included: true },
      { text: "Acesso ao Mobility", included: true },
      { text: "4 sessões de Personal/mês", included: false },
      { text: "Acesso ilimitado a classes", included: false },
      { text: "Bioimpedância mensal", included: false },
      { text: "WhatsApp com coach dedicado", included: false },
    ],
  },
  {
    id: "elite",
    name: "ELITE",
    price: "R$389",
    period: "/mês",
    highlight: false,
    features: [
      { text: "Acesso ilimitado 05H–23H", included: true },
      { text: "Avaliação física de entrada", included: true },
      { text: "Planilha de treino inicial", included: true },
      { text: "App FORGEE", included: true },
      { text: "2 sessões de Personal/mês", included: true },
      { text: "1 aula Conditioning/semana", included: true },
      { text: "Revisão de planilha / 4 semanas", included: true },
      { text: "Acesso ao Mobility", included: true },
      { text: "4 sessões de Personal/mês", included: true },
      { text: "Acesso ilimitado a classes", included: true },
      { text: "Bioimpedância mensal", included: true },
      { text: "WhatsApp com coach dedicado", included: true },
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export function Planos() {
  return (
    <section id="planos" className="bg-[#0A0A0A] border-t border-[#1E1E1E] py-24 md:py-36">
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
              Investimento
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
            SEM MATRÍCULA.
            <br />
            SEM FIDELIDADE.
            <br />
            <span style={{ color: "#E8400A" }}>SEM ENROLAÇÃO.</span>
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
            Mude de plano quando quiser. Cancele com 30 dias. Sem justificativa.
          </motion.p>
        </motion.div>

        {/* Plans Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
          className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-[#2A2A2A]"
        >
          {plans.map((plan, i) => (
            <motion.div
              key={plan.id}
              variants={fadeUp}
              className={`relative flex flex-col ${
                plan.highlight ? "bg-[#E8400A]" : "bg-[#1E1E1E]"
              } ${i < plans.length - 1 ? "border-b md:border-b-0 md:border-r border-[#2A2A2A]" : ""}`}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "10px",
                      fontWeight: 500,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "#E8400A",
                      background: "#FFFFFF",
                      padding: "4px 12px",
                      display: "inline-block",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="p-8 border-b border-[rgba(255,255,255,0.1)]">
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "11px",
                    fontWeight: 500,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: plan.highlight ? "rgba(255,255,255,0.7)" : "#6B6B6B",
                    display: "block",
                    marginBottom: "12px",
                  }}
                >
                  {plan.name}
                </span>
                <div className="flex items-baseline gap-1">
                  <span
                    style={{
                      fontFamily: "'Oswald', sans-serif",
                      fontWeight: 700,
                      fontSize: "48px",
                      letterSpacing: "-2px",
                      color: "#FFFFFF",
                      lineHeight: 1,
                    }}
                  >
                    {plan.price}
                  </span>
                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "14px",
                      color: plan.highlight ? "rgba(255,255,255,0.7)" : "#6B6B6B",
                    }}
                  >
                    {plan.period}
                  </span>
                </div>
              </div>

              <div className="p-8 flex-1">
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature.text} className="flex items-start gap-3">
                      {feature.included ? (
                        <Check
                          size={16}
                          className="flex-shrink-0 mt-0.5"
                          style={{ color: plan.highlight ? "#FFFFFF" : "#E8400A" }}
                          strokeWidth={2.5}
                        />
                      ) : (
                        <Minus
                          size={16}
                          className="flex-shrink-0 mt-0.5"
                          style={{ color: "rgba(107,107,107,0.5)" }}
                          strokeWidth={2}
                        />
                      )}
                      <span
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "14px",
                          color: feature.included
                            ? plan.highlight
                              ? "#FFFFFF"
                              : "#D9D9D9"
                            : "#6B6B6B",
                        }}
                      >
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  className="w-full transition-colors duration-200"
                  style={{
                    fontFamily: "'Oswald', sans-serif",
                    fontWeight: 700,
                    fontSize: "12px",
                    letterSpacing: "0.10em",
                    textTransform: "uppercase",
                    color: plan.highlight ? "#E8400A" : "#FFFFFF",
                    background: plan.highlight ? "#FFFFFF" : "#E8400A",
                    padding: "16px",
                    border: "none",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    if (plan.highlight) {
                      (e.target as HTMLElement).style.background = "#F0F0F0";
                    } else {
                      (e.target as HTMLElement).style.background = "#FF4D0D";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (plan.highlight) {
                      (e.target as HTMLElement).style.background = "#FFFFFF";
                    } else {
                      (e.target as HTMLElement).style.background = "#E8400A";
                    }
                  }}
                >
                  QUERO ESSE PLANO
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "13px",
              color: "#6B6B6B",
              textAlign: "center",
            }}
          >
            Pagamento via PIX ou cartão (3× sem juros) · Cancelamento com 30 dias de aviso ·
            Plano anual com 15% de desconto
          </p>

          <div className="flex items-center gap-4 flex-shrink-0">
            <div className="text-center">
              <span
                style={{
                  fontFamily: "'Oswald', sans-serif",
                  fontWeight: 700,
                  fontSize: "22px",
                  letterSpacing: "-0.5px",
                  color: "#FFFFFF",
                  display: "block",
                }}
              >
                R$ 39
              </span>
              <span
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "11px",
                  letterSpacing: "0.10em",
                  textTransform: "uppercase",
                  color: "#6B6B6B",
                }}
              >
                DIÁRIA · 1 DIA
              </span>
            </div>
            <button
              style={{
                fontFamily: "'Oswald', sans-serif",
                fontWeight: 700,
                fontSize: "12px",
                letterSpacing: "0.10em",
                textTransform: "uppercase",
                color: "#FFFFFF",
                background: "transparent",
                padding: "12px 24px",
                border: "1px solid #3A3A3A",
                cursor: "pointer",
                whiteSpace: "nowrap",
              }}
              className="hover:border-white transition-colors"
            >
              AGENDAR
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
