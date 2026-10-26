import { motion } from "motion/react";
import { MapPin, Clock, Phone, Mail, Instagram } from "lucide-react";

const hours = [
  { day: "Segunda a Sexta", time: "05H00 – 23H00" },
  { day: "Sábado", time: "07H00 – 20H00" },
  { day: "Domingo e Feriados", time: "08H00 – 14H00" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export function Localizacao() {
  return (
    <section id="localizacao" className="bg-[#111111] border-t border-[#1E1E1E] py-24 md:py-36">
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
              Onde estamos
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
            className="text-[clamp(40px,6vw,80px)]"
          >
            NO CORAÇÃO
            <br />
            <span style={{ color: "#E8400A" }}>DE INDAIATUBA.</span>
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          >
            {/* Address */}
            <motion.div variants={fadeUp} className="flex gap-4 mb-10">
              <MapPin size={20} color="#E8400A" className="flex-shrink-0 mt-1" strokeWidth={1.5} />
              <div>
                <p
                  style={{
                    fontFamily: "'Oswald', sans-serif",
                    fontWeight: 700,
                    fontSize: "18px",
                    letterSpacing: "-0.3px",
                    textTransform: "uppercase",
                    color: "#FFFFFF",
                    marginBottom: "8px",
                  }}
                >
                  Endereço
                </p>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 400,
                    fontSize: "15px",
                    lineHeight: 1.75,
                    color: "#B0B0B0",
                  }}
                >
                  Rua das Esmeraldas, 742
                  <br />
                  Jardim Morada do Sol
                  <br />
                  Indaiatuba, SP — CEP 13.334-210
                </p>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 400,
                    fontSize: "13px",
                    color: "#6B6B6B",
                    marginTop: "8px",
                  }}
                >
                  200m do Carrefour · Próximo à saída SP-075
                </p>
              </div>
            </motion.div>

            {/* Hours */}
            <motion.div variants={fadeUp} className="flex gap-4 mb-10">
              <Clock size={20} color="#E8400A" className="flex-shrink-0 mt-1" strokeWidth={1.5} />
              <div className="w-full">
                <p
                  style={{
                    fontFamily: "'Oswald', sans-serif",
                    fontWeight: 700,
                    fontSize: "18px",
                    letterSpacing: "-0.3px",
                    textTransform: "uppercase",
                    color: "#FFFFFF",
                    marginBottom: "12px",
                  }}
                >
                  Horários
                </p>
                <div className="space-y-3">
                  {hours.map((h) => (
                    <div
                      key={h.day}
                      className="flex items-center justify-between border-b border-[#2A2A2A] pb-3"
                    >
                      <span
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "14px",
                          color: "#B0B0B0",
                        }}
                      >
                        {h.day}
                      </span>
                      <span
                        style={{
                          fontFamily: "'Oswald', sans-serif",
                          fontWeight: 700,
                          fontSize: "16px",
                          letterSpacing: "-0.3px",
                          color: "#FFFFFF",
                          textTransform: "uppercase",
                        }}
                      >
                        {h.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact */}
            <motion.div variants={fadeUp} className="space-y-4 mb-10">
              <div className="flex items-center gap-3">
                <Phone size={16} color="#E8400A" strokeWidth={1.5} />
                <a
                  href="https://wa.me/5519982345678"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "15px",
                    color: "#B0B0B0",
                  }}
                  className="hover:text-white transition-colors"
                >
                  (19) 98234-5678
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} color="#E8400A" strokeWidth={1.5} />
                <a
                  href="mailto:contato@forgee.academy"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "15px",
                    color: "#B0B0B0",
                  }}
                  className="hover:text-white transition-colors"
                >
                  contato@forgee.academy
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Instagram size={16} color="#E8400A" strokeWidth={1.5} />
                <a
                  href="https://instagram.com/forgee.academy"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "15px",
                    color: "#B0B0B0",
                  }}
                  className="hover:text-white transition-colors"
                >
                  @forgee.academy
                </a>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/5519982345678"
                target="_blank"
                rel="noreferrer"
                style={{
                  fontFamily: "'Oswald', sans-serif",
                  fontWeight: 700,
                  fontSize: "12px",
                  letterSpacing: "0.10em",
                  textTransform: "uppercase",
                  color: "#FFFFFF",
                  background: "#E8400A",
                  padding: "14px 28px",
                  display: "inline-block",
                  textDecoration: "none",
                }}
                className="hover:bg-[#FF4D0D] transition-colors"
              >
                FALAR NO WHATSAPP
              </a>
              <a
                href="https://maps.google.com/?q=Rua+das+Esmeraldas+742+Indaiatuba"
                target="_blank"
                rel="noreferrer"
                style={{
                  fontFamily: "'Oswald', sans-serif",
                  fontWeight: 700,
                  fontSize: "12px",
                  letterSpacing: "0.10em",
                  textTransform: "uppercase",
                  color: "#B0B0B0",
                  background: "transparent",
                  padding: "13px 27px",
                  display: "inline-block",
                  border: "1px solid #3A3A3A",
                  textDecoration: "none",
                }}
                className="hover:border-white hover:text-white transition-colors"
              >
                COMO CHEGAR
              </a>
            </motion.div>
          </motion.div>

          {/* Right: Map placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="relative h-80 lg:h-full min-h-80 bg-[#1E1E1E] border border-[#2A2A2A] overflow-hidden"
          >
            {/* Map embed simulation */}
            <iframe
              title="FORGEE Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60135.00098039539!2d-47.30157!3d-23.09056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c87f9f9e1dda99%3A0x2d8c9d6e0a7e8a0e!2sIndaiatuba%2C+SP!5e0!3m2!1spt-BR!2sbr!4v1620000000000"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) saturate(0.3) brightness(0.8)" }}
              allowFullScreen
              loading="lazy"
            />
            {/* Overlay with address */}
            <div
              className="absolute bottom-0 left-0 right-0 p-6"
              style={{
                background: "linear-gradient(to top, rgba(17,17,17,0.95) 0%, transparent 100%)",
              }}
            >
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2 h-2 rounded-full bg-[#E8400A]" />
                <span
                  style={{
                    fontFamily: "'Oswald', sans-serif",
                    fontWeight: 700,
                    fontSize: "16px",
                    letterSpacing: "-0.3px",
                    color: "#FFFFFF",
                    textTransform: "uppercase",
                  }}
                >
                  FORGEE ACADEMY
                </span>
              </div>
              <span
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "13px",
                  color: "#6B6B6B",
                  paddingLeft: "16px",
                }}
              >
                Indaiatuba, SP · CEP 13.334-210
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
