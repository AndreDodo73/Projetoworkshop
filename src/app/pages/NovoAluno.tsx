import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowLeft,
  Printer,
  Save,
  AlertTriangle,
  UserPlus,
  ChevronRight,
  MonitorPlay,
} from "lucide-react";
import { useNavigate } from "react-router";
import { AdminLayout } from "../components/AdminLayout";

// ─── Shared Components ────────────────────────────────────────────────────────

/** Styled text input following the FORGEE design system */
function DSInput({
  label,
  placeholder,
  type = "text",
  required,
  value,
  onChange,
  hint,
}: {
  label: string;
  placeholder?: string;
  type?: string;
  required?: boolean;
  value: string;
  onChange: (v: string) => void;
  hint?: string;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: 11,
          fontWeight: 500,
          letterSpacing: "0.09em",
          textTransform: "uppercase",
          color: "#A8A8A8",
        }}
      >
        {label}
        {required && <span style={{ color: "#E8400A", marginLeft: 3 }}>*</span>}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{
          background: "#0D0D0D",
          border: "0.833px solid #303030",
          borderRadius: 6,
          padding: "11px 14px",
          fontFamily: "'Inter', sans-serif",
          fontSize: 14,
          color: "#F2F2F2",
          outline: "none",
          width: "100%",
          transition: "border-color 0.15s",
        }}
        onFocus={(e) => (e.target.style.borderColor = "#E8400A")}
        onBlur={(e) => (e.target.style.borderColor = "#303030")}
      />
      {hint && (
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, color: "#606060" }}>
          {hint}
        </p>
      )}
    </div>
  );
}

/** Styled select/dropdown */
function DSSelect({
  label,
  options,
  required,
  value,
  onChange,
}: {
  label: string;
  options: string[];
  required?: boolean;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: 11,
          fontWeight: 500,
          letterSpacing: "0.09em",
          textTransform: "uppercase",
          color: "#A8A8A8",
        }}
      >
        {label}
        {required && <span style={{ color: "#E8400A", marginLeft: 3 }}>*</span>}
      </label>
      <div style={{ position: "relative" }}>
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          style={{
            appearance: "none",
            WebkitAppearance: "none",
            background: "#0D0D0D",
            border: "0.833px solid #303030",
            borderRadius: 6,
            padding: "11px 36px 11px 14px",
            fontFamily: "'Inter', sans-serif",
            fontSize: 14,
            color: value === "" ? "#606060" : "#F2F2F2",
            outline: "none",
            width: "100%",
            cursor: "pointer",
            transition: "border-color 0.15s",
          }}
          onFocus={(e) => (e.target.style.borderColor = "#E8400A")}
          onBlur={(e) => (e.target.style.borderColor = "#303030")}
        >
          <option value="" style={{ color: "#606060", background: "#0D0D0D" }}>
            Selecione
          </option>
          {options.map((opt) => (
            <option key={opt} value={opt} style={{ background: "#1A1A1A", color: "#F2F2F2" }}>
              {opt}
            </option>
          ))}
        </select>
        <svg
          style={{
            position: "absolute",
            right: 12,
            top: "50%",
            transform: "translateY(-50%)",
            pointerEvents: "none",
          }}
          width="14"
          height="14"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path d="M6 9l6 6 6-6" stroke="#606060" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  );
}

/** SIM/NÃO/N/A toggle button group */
function YesNoToggle({
  question,
  options = ["SIM", "NÃO"],
  value,
  onChange,
}: {
  question: string;
  options?: string[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="flex flex-col gap-2.5">
      <p
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: 13,
          color: "#D9D9D9",
          lineHeight: 1.5,
        }}
      >
        {question}
      </p>
      <div className="flex gap-2">
        {options.map((opt) => {
          const isSelected = value === opt;
          const isPositive = opt === "SIM" || opt === "ALTA" || opt === "BAIXA";
          return (
            <button
              key={opt}
              type="button"
              onClick={() => onChange(opt)}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                padding: "6px 16px",
                borderRadius: 4,
                border: isSelected
                  ? `1px solid ${isPositive ? "#E8400A" : "#3A3A3A"}`
                  : "1px solid #2A2A2A",
                background: isSelected
                  ? isPositive
                    ? "rgba(232,64,10,0.18)"
                    : "rgba(255,255,255,0.06)"
                  : "#0D0D0D",
                color: isSelected
                  ? isPositive
                    ? "#E8400A"
                    : "#F2F2F2"
                  : "#6B6B6B",
                cursor: "pointer",
                transition: "all 0.15s",
              }}
            >
              {opt}
            </button>
          );
        })}
      </div>
    </div>
  );
}

/** Section header with numbered accent */
function SectionHeader({
  number,
  title,
  subtitle,
}: {
  number: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="flex items-start gap-3 mb-5">
      <div
        style={{
          background: "#E8400A",
          borderRadius: 4,
          width: 28,
          height: 28,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          marginTop: 2,
        }}
      >
        <span
          style={{
            fontFamily: "'Oswald', sans-serif",
            fontWeight: 700,
            fontSize: 14,
            color: "#FFFFFF",
          }}
        >
          {number}
        </span>
      </div>
      <div>
        <h2
          style={{
            fontFamily: "'Oswald', sans-serif",
            fontWeight: 700,
            fontSize: 18,
            letterSpacing: "-0.4px",
            color: "#F2F2F2",
            textTransform: "uppercase",
          }}
        >
          {title}
        </h2>
        {subtitle && (
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 12,
              color: "#606060",
              marginTop: 2,
            }}
          >
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}

/** Card wrapper for each section */
function SectionCard({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        background: "#0D0D0D",
        border: "0.833px solid #303030",
        borderRadius: 14,
        padding: "28px 24px",
      }}
    >
      {children}
    </div>
  );
}

/** Objective button (single select) */
function ObjectiveButton({
  label,
  selected,
  onClick,
}: {
  label: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        fontFamily: "'Inter', sans-serif",
        fontSize: 13,
        fontWeight: 500,
        padding: "10px 14px",
        borderRadius: 6,
        border: selected ? "1px solid #E8400A" : "0.833px solid #303030",
        background: selected ? "rgba(232,64,10,0.12)" : "#111111",
        color: selected ? "#E8400A" : "#A8A8A8",
        cursor: "pointer",
        transition: "all 0.15s",
        textAlign: "left",
        width: "100%",
      }}
    >
      {label}
    </button>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export function NovoAluno() {
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);

  // ── Section 1: Dados Pessoais
  const [nome, setNome] = useState("");
  const [dataNasc, setDataNasc] = useState("");
  const [cpf, setCpf] = useState("");
  const [rg, setRg] = useState("");
  const [sexo, setSexo] = useState("");
  const [estadoCivil, setEstadoCivil] = useState("");
  const [profissao, setProfissao] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [endereco, setEndereco] = useState("");
  const [contatoEmerg, setContatoEmerg] = useState("");
  const [telEmerg, setTelEmerg] = useState("");
  const [fotoAluno, setFotoAluno] = useState<File | null>(null);
  const [fotoPreview, setFotoPreview] = useState<string>("");

  // ── Section 2: Saúde
  const [saude, setSaude] = useState<Record<string, string>>({
    doenca: "",
    cardiaco: "",
    pressao: "",
    diabetes: "",
    desmaios: "",
    respiratorio: "",
    articular: "",
    cirurgia: "",
    medicacao: "",
    gestante: "",
    limitacao: "",
    recomendacaoMedica: "",
  });

  // ── Section 3: PAR-Q
  const [parq, setParq] = useState<Record<string, string>>({
    q1: "",
    q2: "",
    q3: "",
    q4: "",
    q5: "",
    q6: "",
  });
  const hasParqWarning = Object.values(parq).some((v) => v === "SIM");

  // ── Section 4: Objetivos
  const [objetivo, setObjetivo] = useState("");
  const [treinouAntes, setTreinouAntes] = useState("");
  const [tempoPratica, setTempoPratica] = useState("");
  const [vezesSemana, setVezesSemana] = useState("");
  const [horarioPref, setHorarioPref] = useState("");

  // ── Section 5: Físico
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [imc, setImc] = useState("");
  const [gordura, setGordura] = useState("");
  const [medidas, setMedidas] = useState("");

  useEffect(() => {
    const p = parseFloat(peso);
    const a = parseFloat(altura) / 100;
    if (p > 0 && a > 0) {
      setImc((p / (a * a)).toFixed(1));
    } else {
      setImc("");
    }
  }, [peso, altura]);

  // ── Section 6: Plano
  const [tipoPlano, setTipoPlano] = useState("");
  const [valorPlano, setValorPlano] = useState("");
  const [dataInicio, setDataInicio] = useState("");
  const [dataVenc, setDataVenc] = useState("");
  const [formaPgto, setFormaPgto] = useState("");

  // ── Section 7: Termo
  const [aceitaTermo, setAceitaTermo] = useState(false);
  const today = new Date().toISOString().split("T")[0];

  const handleFotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith("image/")) {
      setFotoAluno(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setFotoPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      navigate("/alunos");
    }, 1800);
  };

  return (
    <AdminLayout>
      <div className="flex-1 flex flex-col overflow-auto min-w-0" style={{ background: "#0A0A0A" }}>

        {/* Header */}
        <header
          className="flex-shrink-0 px-6 md:px-8 py-4 pl-16 lg:pl-8"
          style={{ background: "#111111", borderBottom: "1px solid #1E1E1E" }}
        >
          <div className="flex items-center justify-between">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2">
              <span
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 12,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "#606060",
                  cursor: "pointer",
                }}
                onClick={() => navigate("/alunos")}
              >
                Alunos
              </span>
              <ChevronRight size={12} color="#3A3A3A" />
              <span
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 12,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "#A8A8A8",
                }}
              >
                Novo Aluno
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                className="hidden md:flex items-center gap-2 px-4 py-2 rounded-xl transition-colors"
                style={{
                  background: "transparent",
                  border: "0.833px solid #303030",
                  color: "#A8A8A8",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                }}
              >
                <UserPlus size={13} />
                Novo Aluno
              </button>
              <button
                className="flex items-center gap-2 px-4 py-2 rounded-xl"
                style={{
                  background: "#E8400A",
                  color: "#FFFFFF",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                }}
                onClick={() => navigate("/modo-recepcao")}
              >
                <MonitorPlay size={13} />
                <span className="hidden sm:inline">Ativar Recepção</span>
              </button>
            </div>
          </div>
        </header>

        {/* Form Content */}
        <main className="flex-1 p-4 md:p-6">
          <form onSubmit={handleSubmit}>
            {/* Form Action Bar */}
            <div
              className="flex items-center justify-between mb-5 px-5 py-3.5 rounded-2xl"
              style={{ background: "#111111", border: "0.833px solid #1E1E1E" }}
            >
              <div className="flex items-center gap-4">
                <button
                  type="button"
                  onClick={() => navigate("/alunos")}
                  className="flex items-center gap-2 transition-colors"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 12,
                    fontWeight: 600,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "#606060",
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#A8A8A8")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#606060")}
                >
                  <ArrowLeft size={15} />
                  Voltar
                </button>
                <div style={{ width: 1, height: 20, background: "#2A2A2A" }} />
                <h1
                  style={{
                    fontFamily: "'Oswald', sans-serif",
                    fontWeight: 700,
                    fontSize: "clamp(16px,3vw,22px)",
                    letterSpacing: "-0.4px",
                    color: "#F2F2F2",
                    textTransform: "uppercase",
                  }}
                >
                  Cadastrar Novo Aluno
                </h1>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl"
                  style={{
                    background: "#0D0D0D",
                    border: "0.833px solid #303030",
                    color: "#F2F2F2",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 11,
                    fontWeight: 600,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                  }}
                >
                  <Printer size={13} />
                  Imprimir
                </button>
                <button
                  type="submit"
                  className="flex items-center gap-2 px-5 py-2 rounded-xl transition-colors"
                  style={{
                    background: "#E8400A",
                    color: "#FFFFFF",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#FF4D0D")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "#E8400A")}
                >
                  <Save size={13} />
                  Salvar Cadastro
                </button>
              </div>
            </div>

            <div className="space-y-4">
              {/* ── 1. DADOS PESSOAIS ───────────────────────────── */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 }}
              >
                <SectionCard>
                  <SectionHeader number="1" title="Dados Pessoais" subtitle="Identificação básica do aluno — todos os campos são obrigatórios" />

                  {/* Foto do Aluno */}
                  <div className="mb-6">
                    <label
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: 11,
                        fontWeight: 500,
                        letterSpacing: "0.09em",
                        textTransform: "uppercase",
                        color: "#A8A8A8",
                        display: "block",
                        marginBottom: 8,
                      }}
                    >
                      Foto do Aluno
                    </label>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFotoChange}
                      style={{ display: "none" }}
                      id="foto-aluno-input"
                    />
                    <label
                      htmlFor="foto-aluno-input"
                      style={{
                        display: "inline-block",
                        cursor: "pointer",
                      }}
                    >
                      <div
                        style={{
                          width: 120,
                          height: 120,
                          borderRadius: 8,
                          border: fotoPreview ? "2px solid #E8400A" : "2px dashed #303030",
                          background: fotoPreview ? "#000000" : "#0D0D0D",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          overflow: "hidden",
                          position: "relative",
                          transition: "all 0.2s",
                        }}
                        onMouseEnter={(e) => {
                          if (fotoPreview) {
                            const overlay = e.currentTarget.querySelector(".photo-overlay") as HTMLElement;
                            if (overlay) overlay.style.opacity = "1";
                          } else {
                            e.currentTarget.style.borderColor = "#E8400A";
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (fotoPreview) {
                            const overlay = e.currentTarget.querySelector(".photo-overlay") as HTMLElement;
                            if (overlay) overlay.style.opacity = "0";
                          } else {
                            e.currentTarget.style.borderColor = "#303030";
                          }
                        }}
                      >
                        {fotoPreview ? (
                          <>
                            <img
                              src={fotoPreview}
                              alt="Preview"
                              style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                              }}
                            />
                            <div
                              className="photo-overlay"
                              style={{
                                position: "absolute",
                                inset: 0,
                                background: "rgba(0,0,0,0.75)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                flexDirection: "column",
                                gap: 6,
                                opacity: 0,
                                transition: "opacity 0.2s",
                              }}
                            >
                              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E8400A" strokeWidth="2">
                                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
                                <circle cx="12" cy="13" r="4"></circle>
                              </svg>
                              <span
                                style={{
                                  fontFamily: "'Inter', sans-serif",
                                  fontSize: 10,
                                  fontWeight: 600,
                                  letterSpacing: "0.08em",
                                  textTransform: "uppercase",
                                  color: "#E8400A",
                                }}
                              >
                                Alterar
                              </span>
                            </div>
                          </>
                        ) : (
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                              gap: 8,
                            }}
                          >
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#3A3A3A" strokeWidth="1.5">
                              <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
                              <circle cx="12" cy="13" r="4"></circle>
                            </svg>
                            <span
                              style={{
                                fontFamily: "'Inter', sans-serif",
                                fontSize: 10,
                                fontWeight: 600,
                                letterSpacing: "0.08em",
                                textTransform: "uppercase",
                                color: "#3A3A3A",
                              }}
                            >
                              Adicionar
                            </span>
                          </div>
                        )}
                      </div>
                    </label>
                    <p
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: 11,
                        color: "#606060",
                        marginTop: 6,
                      }}
                    >
                      {fotoPreview ? "Clique para alterar a foto" : "Clique para fazer upload"}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="md:col-span-2">
                      <DSInput label="Nome Completo" placeholder="Nome e sobrenome" required value={nome} onChange={setNome} />
                    </div>
                    <DSInput label="Data de Nascimento" type="date" required value={dataNasc} onChange={setDataNasc} />
                    <DSInput label="CPF" placeholder="000.000.000-00" required value={cpf} onChange={setCpf} />
                    <DSInput label="RG" placeholder="00.000.000-0" required value={rg} onChange={setRg} />
                    <DSSelect
                      label="Sexo"
                      required
                      options={["Feminino", "Masculino", "Outro"]}
                      value={sexo}
                      onChange={setSexo}
                    />
                    <DSSelect
                      label="Estado Civil"
                      required
                      options={["Solteiro(a)", "Casado(a)", "Divorciado(a)", "Viúvo(a)", "União Estável"]}
                      value={estadoCivil}
                      onChange={setEstadoCivil}
                    />
                    <DSInput label="Profissão" placeholder="Sua profissão" required value={profissao} onChange={setProfissao} />
                    <DSInput label="Telefone (WhatsApp)" placeholder="(00) 00000-0000" required value={telefone} onChange={setTelefone} />
                    <div className="md:col-span-2">
                      <DSInput label="E-mail" type="email" placeholder="exemplo@email.com" required value={email} onChange={setEmail} />
                    </div>
                    <div className="md:col-span-2">
                      <DSInput label="Endereço Completo" placeholder="Rua, Número, Bairro, Cidade, Estado, CEP" required value={endereco} onChange={setEndereco} />
                    </div>
                    <DSInput label="Contato de Emergência" placeholder="Nome completo" required value={contatoEmerg} onChange={setContatoEmerg} />
                    <DSInput label="Telefone do Contato de Emergência" placeholder="(00) 00000-0000" required value={telEmerg} onChange={setTelEmerg} />
                  </div>
                </SectionCard>
              </motion.div>

              {/* ── 2. DADOS DE SAÚDE ───────────────────────────── */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <SectionCard>
                  <SectionHeader
                    number="2"
                    title="Dados de Saúde (Anamnese Básica)"
                    subtitle="Questionário de saúde pré-participação — responda todas as perguntas"
                  />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <YesNoToggle question="Possui alguma doença diagnosticada?" value={saude.doenca} onChange={(v) => setSaude((s) => ({ ...s, doenca: v }))} />
                    <YesNoToggle question="Problemas cardíacos?" value={saude.cardiaco} onChange={(v) => setSaude((s) => ({ ...s, cardiaco: v }))} />
                    <YesNoToggle question="Pressão alta ou baixa?" options={["NÃO", "ALTA", "BAIXA"]} value={saude.pressao} onChange={(v) => setSaude((s) => ({ ...s, pressao: v }))} />
                    <YesNoToggle question="Possui diabetes?" value={saude.diabetes} onChange={(v) => setSaude((s) => ({ ...s, diabetes: v }))} />
                    <YesNoToggle question="Desmaios ou tonturas frequentes?" value={saude.desmaios} onChange={(v) => setSaude((s) => ({ ...s, desmaios: v }))} />
                    <YesNoToggle question="Problemas respiratórios?" value={saude.respiratorio} onChange={(v) => setSaude((s) => ({ ...s, respiratorio: v }))} />
                    <YesNoToggle question="Problemas articulares?" value={saude.articular} onChange={(v) => setSaude((s) => ({ ...s, articular: v }))} />
                    <YesNoToggle question="Já realizou cirurgia?" value={saude.cirurgia} onChange={(v) => setSaude((s) => ({ ...s, cirurgia: v }))} />
                    <YesNoToggle question="Faz uso de medicação contínua?" value={saude.medicacao} onChange={(v) => setSaude((s) => ({ ...s, medicacao: v }))} />
                    <YesNoToggle question="Está gestante?" options={["SIM", "NÃO", "N/A"]} value={saude.gestante} onChange={(v) => setSaude((s) => ({ ...s, gestante: v }))} />
                    <YesNoToggle question="Possui limitação física?" value={saude.limitacao} onChange={(v) => setSaude((s) => ({ ...s, limitacao: v }))} />
                    <YesNoToggle question="Possui recomendação médica para prática de exercícios?" value={saude.recomendacaoMedica} onChange={(v) => setSaude((s) => ({ ...s, recomendacaoMedica: v }))} />
                  </div>
                </SectionCard>
              </motion.div>

              {/* ── 3. PAR-Q ────────────────────────────────────── */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
              >
                <SectionCard>
                  <SectionHeader
                    number="3"
                    title="Questionário PAR-Q (Prontidão para Atividade Física)"
                    subtitle="Responda SIM ou NÃO para cada pergunta"
                  />
                  <div className="space-y-4">
                    {[
                      { key: "q1", text: "Algum médico já disse que você possui problema cardíaco?" },
                      { key: "q2", text: "Sente dor no peito ao realizar atividade física?" },
                      { key: "q3", text: "Sentiu dor no peito no último mês?" },
                      { key: "q4", text: "Perde o equilíbrio por tontura ou já perdeu a consciência?" },
                      { key: "q5", text: "Possui problema ósseo ou articular que pode piorar com exercício?" },
                      { key: "q6", text: "Seu médico já recomendou restrição de atividade física?" },
                    ].map((q) => (
                      <YesNoToggle
                        key={q.key}
                        question={q.text}
                        value={parq[q.key]}
                        onChange={(v) => setParq((p) => ({ ...p, [q.key]: v }))}
                      />
                    ))}
                  </div>

                  <AnimatePresence>
                    {hasParqWarning && (
                      <motion.div
                        initial={{ opacity: 0, y: -8, height: 0 }}
                        animate={{ opacity: 1, y: 0, height: "auto" }}
                        exit={{ opacity: 0, y: -8, height: 0 }}
                        className="mt-5 overflow-hidden"
                      >
                        <div
                          className="flex items-start gap-3 p-4 rounded-xl"
                          style={{
                            background: "rgba(232,64,10,0.1)",
                            border: "1px solid rgba(232,64,10,0.3)",
                          }}
                        >
                          <AlertTriangle size={18} color="#E8400A" style={{ flexShrink: 0, marginTop: 1 }} />
                          <p
                            style={{
                              fontFamily: "'Inter', sans-serif",
                              fontSize: 13,
                              color: "#D9D9D9",
                              lineHeight: 1.6,
                            }}
                          >
                            <span style={{ color: "#E8400A", fontWeight: 600 }}>Atenção: </span>
                            Se respondeu 1 ou mais respostas &apos;SIM&apos;, recomendamos avaliação médica antes de iniciar qualquer prática de atividade física.
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </SectionCard>
              </motion.div>

              {/* ── 4. OBJETIVOS ────────────────────────────────── */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <SectionCard>
                  <SectionHeader number="4" title="Objetivos do Aluno" />
                  <div className="mb-5">
                    <label
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: 11,
                        fontWeight: 500,
                        letterSpacing: "0.09em",
                        textTransform: "uppercase",
                        color: "#A8A8A8",
                        display: "block",
                        marginBottom: 10,
                      }}
                    >
                      Qual seu principal objetivo?
                      <span style={{ color: "#E8400A", marginLeft: 3 }}>*</span>
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {["Emagrecimento", "Hipertrofia", "Condicionamento Físico", "Reabilitação", "Saúde Geral", "Outro"].map(
                        (obj) => (
                          <ObjectiveButton
                            key={obj}
                            label={obj}
                            selected={objetivo === obj}
                            onClick={() => setObjetivo(obj)}
                          />
                        )
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <DSSelect
                      label="Já treinou antes?"
                      required
                      options={["Sim, regularmente", "Sim, esporadicamente", "Nunca treinei"]}
                      value={treinouAntes}
                      onChange={setTreinouAntes}
                    />
                    <DSInput
                      label="Há quanto tempo pratica exercícios?"
                      placeholder="Ex: 6 meses, 2 anos"
                      value={tempoPratica}
                      onChange={setTempoPratica}
                    />
                    <DSSelect
                      label="Quantas vezes por semana pretende treinar?"
                      required
                      options={["1x", "2x", "3x", "4x", "5x ou mais"]}
                      value={vezesSemana}
                      onChange={setVezesSemana}
                    />
                    <DSInput
                      label="Preferência de horário"
                      placeholder="Ex: manhã, tarde, noite"
                      value={horarioPref}
                      onChange={setHorarioPref}
                    />
                  </div>
                </SectionCard>
              </motion.div>

              {/* ── 5. INFORMAÇÕES CORPORAIS ─────────────────────── */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
              >
                <SectionCard>
                  <div className="flex items-start justify-between mb-5">
                    <SectionHeader
                      number="5"
                      title="Informações Corporais"
                      subtitle="Avaliação inicial — opcional"
                    />
                    <span
                      className="flex-shrink-0 mt-0.5"
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: 10,
                        fontWeight: 600,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        color: "#606060",
                        background: "rgba(107,107,107,0.12)",
                        border: "0.833px solid #2A2A2A",
                        padding: "3px 10px",
                        borderRadius: 4,
                      }}
                    >
                      Opcional
                    </span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-4">
                    <DSInput label="Peso" placeholder="0.0" type="number" hint="KG" value={peso} onChange={setPeso} />
                    <DSInput label="Altura" placeholder="000" type="number" hint="CM" value={altura} onChange={setAltura} />
                    <div className="flex flex-col gap-1.5">
                      <label
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: 11,
                          fontWeight: 500,
                          letterSpacing: "0.09em",
                          textTransform: "uppercase",
                          color: "#A8A8A8",
                        }}
                      >
                        IMC
                      </label>
                      <div
                        style={{
                          background: "#0D0D0D",
                          border: "0.833px solid #303030",
                          borderRadius: 6,
                          padding: "11px 14px",
                          fontFamily: "'Inter', sans-serif",
                          fontSize: 14,
                          color: imc ? "#E8400A" : "#3A3A3A",
                          fontWeight: imc ? 600 : 400,
                        }}
                      >
                        {imc || "Auto"}
                      </div>
                      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, color: "#606060" }}>
                        Calculado
                      </p>
                    </div>
                    <DSInput label="% Gordura" placeholder="0.0" type="number" hint="%" value={gordura} onChange={setGordura} />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: 11,
                        fontWeight: 500,
                        letterSpacing: "0.09em",
                        textTransform: "uppercase",
                        color: "#A8A8A8",
                      }}
                    >
                      Medidas Corporais
                    </label>
                    <textarea
                      placeholder="Ex: Braço 35cm, Cintura 80cm, Quadril 96cm"
                      value={medidas}
                      onChange={(e) => setMedidas(e.target.value)}
                      rows={3}
                      style={{
                        background: "#0D0D0D",
                        border: "0.833px solid #303030",
                        borderRadius: 6,
                        padding: "11px 14px",
                        fontFamily: "'Inter', sans-serif",
                        fontSize: 14,
                        color: "#F2F2F2",
                        outline: "none",
                        width: "100%",
                        resize: "vertical",
                        transition: "border-color 0.15s",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "#E8400A")}
                      onBlur={(e) => (e.target.style.borderColor = "#303030")}
                    />
                  </div>
                </SectionCard>
              </motion.div>

              {/* ── 6. PLANO CONTRATADO ──────────────────────────── */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <SectionCard>
                  <SectionHeader number="6" title="Plano Contratado" />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <DSSelect
                      label="Tipo de Plano"
                      required
                      options={["Mensal Basic", "Mensal Premium", "Mensal Elite", "Trimestral", "Semestral", "Anual"]}
                      value={tipoPlano}
                      onChange={setTipoPlano}
                    />
                    <DSInput
                      label="Valor (R$)"
                      placeholder="150,00"
                      type="text"
                      required
                      value={valorPlano}
                      onChange={setValorPlano}
                    />
                    <DSInput label="Data de Início" type="date" required value={dataInicio} onChange={setDataInicio} />
                    <DSInput label="Data de Vencimento" type="date" required value={dataVenc} onChange={setDataVenc} />
                    <div className="md:col-span-2">
                      <DSSelect
                        label="Forma de Pagamento"
                        required
                        options={["PIX", "Cartão de Débito", "Cartão de Crédito", "Boleto", "Dinheiro"]}
                        value={formaPgto}
                        onChange={setFormaPgto}
                      />
                    </div>
                  </div>
                </SectionCard>
              </motion.div>

              {/* ── 7. TERMO DE RESPONSABILIDADE ─────────────────── */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
              >
                <SectionCard>
                  <SectionHeader number="7" title="Termo de Responsabilidade" />

                  <div
                    className="p-4 rounded-xl mb-5 space-y-3"
                    style={{ background: "#111111", border: "0.833px solid #1E1E1E" }}
                  >
                    <p
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: 13,
                        color: "#B0B0B0",
                        lineHeight: 1.7,
                      }}
                    >
                      Declaro que as informações acima são verdadeiras e estou ciente de que a prática de atividades físicas envolve riscos. Comprometo-me a informar qualquer alteração em meu estado de saúde à administração da academia.
                    </p>
                    <p
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: 13,
                        color: "#B0B0B0",
                        lineHeight: 1.7,
                      }}
                    >
                      Autorizo o uso dos meus dados conforme a Lei Geral de Proteção de Dados (LGPD) para fins administrativos da academia, incluindo comunicações sobre serviços, agendamentos e informações relevantes.
                    </p>
                  </div>

                  <div
                    className="flex items-center gap-3 mb-5 cursor-pointer"
                    onClick={() => setAceitaTermo(!aceitaTermo)}
                  >
                    <div
                      style={{
                        width: 18,
                        height: 18,
                        borderRadius: 3,
                        border: `1.5px solid ${aceitaTermo ? "#E8400A" : "#3A3A3A"}`,
                        background: aceitaTermo ? "#E8400A" : "transparent",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        transition: "all 0.15s",
                      }}
                    >
                      {aceitaTermo && (
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                          <path d="M1.5 5L4 7.5L8.5 2.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </div>
                    <p
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: 13,
                        color: aceitaTermo ? "#F2F2F2" : "#6B6B6B",
                        userSelect: "none",
                        transition: "color 0.15s",
                      }}
                    >
                      Li e aceito os termos de responsabilidade acima
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="flex flex-col gap-1.5">
                      <label
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: 11,
                          fontWeight: 500,
                          letterSpacing: "0.09em",
                          textTransform: "uppercase",
                          color: "#A8A8A8",
                        }}
                      >
                        Assinatura do Aluno
                      </label>
                      <div
                        className="flex items-center justify-center rounded-lg"
                        style={{
                          background: "#0D0D0D",
                          border: "0.833px dashed #303030",
                          height: 72,
                          borderRadius: 6,
                        }}
                      >
                        <span
                          style={{
                            fontFamily: "'Inter', sans-serif",
                            fontSize: 12,
                            color: "#3A3A3A",
                          }}
                        >
                          Campo de assinatura
                        </span>
                      </div>
                    </div>
                    <DSInput label="Data" type="date" value={today} onChange={() => {}} />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-4 rounded-xl transition-all"
                    style={{
                      background: aceitaTermo ? "#E8400A" : "#1A1A1A",
                      color: aceitaTermo ? "#FFFFFF" : "#3A3A3A",
                      fontFamily: "'Oswald', sans-serif",
                      fontWeight: 700,
                      fontSize: 16,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      border: aceitaTermo ? "none" : "0.833px solid #2A2A2A",
                      cursor: aceitaTermo ? "pointer" : "not-allowed",
                    }}
                    disabled={!aceitaTermo}
                    onMouseEnter={(e) => {
                      if (aceitaTermo) (e.currentTarget as HTMLElement).style.background = "#FF4D0D";
                    }}
                    onMouseLeave={(e) => {
                      if (aceitaTermo) (e.currentTarget as HTMLElement).style.background = "#E8400A";
                    }}
                  >
                    <Save size={16} />
                    Registrar Aluno
                  </button>
                </SectionCard>
              </motion.div>
            </div>
          </form>
        </main>
      </div>

      {/* Success toast */}
      <AnimatePresence>
        {submitted && (
          <motion.div
            className="fixed bottom-6 right-6 flex items-center gap-3 px-5 py-4 rounded-2xl z-50"
            style={{
              background: "#0D0D0D",
              border: "1px solid #E8400A",
              boxShadow: "0 8px 40px rgba(0,0,0,0.6)",
            }}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
          >
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: "50%",
                background: "#E8400A",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Save size={16} color="#FFFFFF" />
            </div>
            <div>
              <p style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700, fontSize: 15, color: "#F2F2F2", letterSpacing: "-0.3px" }}>
                Aluno cadastrado!
              </p>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: "#A8A8A8" }}>
                Redirecionando para alunos...
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </AdminLayout>
  );
}
