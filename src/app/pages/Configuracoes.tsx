import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Sun,
  UserPlus,
  MonitorPlay,
  Building2,
  UserCog,
  CreditCard,
  Zap,
  Save,
  Phone,
  Mail,
  MapPin,
  Shield,
  Eye,
  EyeOff,
  Clock,
  Calendar,
  DollarSign,
  Plus,
  Trash2,
  X,
  Info,
  Palette,
} from "lucide-react";
import { useNavigate } from "react-router";
import { AdminLayout } from "../components/AdminLayout";
import { toast } from "sonner";

// ─── Types ────────────────────────────────────────────────────────────────────

type Tab = "geral" | "perfil" | "planos" | "sistema";

interface Plan {
  id: string;
  name: string;
  subtitle: string;
  price: string;
  benefits: string[];
  featured: boolean;
  accentColor?: string;
}

// ─── Mock Data ────────────────────────────────────────────────────────────────

const initialPlans: Plan[] = [
  {
    id: "basic",
    name: "BASIC",
    subtitle: "Plano básico",
    price: "89.9",
    benefits: [
      "Acesso à área de musculação",
      "Horário livre",
      "Armário individual",
    ],
    featured: false,
    accentColor: "#F2F2F2",
  },
  {
    id: "premium",
    name: "PREMIUM",
    subtitle: "Plano mais popular",
    price: "199.9",
    benefits: [
      "Tudo do plano BASIC",
      "Aulas coletivas ilimitadas",
      "Avaliação física mensal",
      "Treino personalizado",
    ],
    featured: true,
    accentColor: "#E8400A",
  },
  {
    id: "elite",
    name: "ELITE",
    subtitle: "Plano completo",
    price: "299.9",
    benefits: [
      "Tudo do plano PREMIUM",
      "Personal trainer 2x por semana",
      "Acompanhamento nutricional",
      "Acesso a unidades parceiras",
      "Bebidas proteicas gratuitas",
    ],
    featured: false,
    accentColor: "#E8400A",
  },
];

// ─── Shared Components ────────────────────────────────────────────────────────

function FormInput({
  label,
  icon: Icon,
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  label: string;
  icon?: React.ComponentType<{ size?: number; color?: string; strokeWidth?: number }>;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: 14,
          fontWeight: 500,
          color: "#F2F2F2",
        }}
      >
        {label}
      </label>
      <div
        className="flex items-center gap-3 rounded-xl px-4"
        style={{
          height: 46,
          background: "#0D0D0D",
          border: "1px solid #303030",
        }}
      >
        {Icon && <Icon size={16} color="#606060" strokeWidth={1.75} />}
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="flex-1 bg-transparent outline-none"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 14,
            color: "#F2F2F2",
          }}
        />
      </div>
    </div>
  );
}

function PasswordInput({
  label,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  const [show, setShow] = useState(false);
  return (
    <div className="flex flex-col gap-2">
      <label
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: 14,
          fontWeight: 500,
          color: "#F2F2F2",
        }}
      >
        {label}
      </label>
      <div
        className="flex items-center gap-3 rounded-xl px-4"
        style={{
          height: 46,
          background: "#0D0D0D",
          border: "1px solid #303030",
        }}
      >
        <Shield size={16} color="#606060" strokeWidth={1.75} />
        <input
          type={show ? "text" : "password"}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="flex-1 bg-transparent outline-none"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 14,
            color: "#F2F2F2",
          }}
        />
        <button
          type="button"
          onClick={() => setShow((p) => !p)}
          className="flex-shrink-0"
          style={{ color: "#606060" }}
        >
          {show ? <EyeOff size={16} strokeWidth={1.75} /> : <Eye size={16} strokeWidth={1.75} />}
        </button>
      </div>
    </div>
  );
}

function PanelActions({
  onCancel,
  onSave,
}: {
  onCancel: () => void;
  onSave: () => void;
}) {
  return (
    <div className="flex items-center justify-end gap-3 pt-4 mt-4" style={{ borderTop: "1px solid #1E1E1E" }}>
      <button
        onClick={onCancel}
        className="flex items-center justify-center rounded-xl px-6 transition-colors"
        style={{
          height: 46,
          background: "transparent",
          border: "1px solid #303030",
          color: "#F2F2F2",
          fontFamily: "'Inter', sans-serif",
          fontSize: 16,
          fontWeight: 500,
        }}
      >
        Cancelar
      </button>
      <button
        onClick={onSave}
        className="flex items-center gap-2 justify-center rounded-xl px-6 transition-opacity hover:opacity-90"
        style={{
          height: 46,
          background: "#E8400A",
          color: "#F2F2F2",
          fontFamily: "'Inter', sans-serif",
          fontSize: 16,
          fontWeight: 500,
        }}
      >
        <Save size={16} strokeWidth={2} />
        Salvar Alterações
      </button>
    </div>
  );
}

function SectionTitle({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mb-6">
      <h2
        style={{
          fontFamily: "'Oswald', sans-serif",
          fontWeight: 700,
          fontSize: 20,
          letterSpacing: "0.02em",
          textTransform: "uppercase",
          color: "#F2F2F2",
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 14,
            color: "#606060",
            marginTop: 4,
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

// ─── Tab: Geral ───────────────────────────────────────────────────────────────

function TabGeral() {
  const [form, setForm] = useState({
    nomeAcademia: "FORGEE Academia",
    cnpj: "12.345.678/0001-90",
    telefone: "(11) 3456-7890",
    email: "contato@forgee.com.br",
    endereco: "Rua das Academias, 123 - Centro",
    cidade: "Indaiatuba",
    estado: "SP",
    cep: "13345-000",
  });
  const [saved, setSaved] = useState({ ...form });

  const set = (key: keyof typeof form) => (v: string) =>
    setForm((p) => ({ ...p, [key]: v }));

  const handleSave = () => {
    setSaved({ ...form });
    toast.success("Configurações salvas com sucesso.");
  };

  const handleCancel = () => {
    setForm({ ...saved });
  };

  return (
    <div
      className="rounded-2xl p-6"
      style={{ background: "#1A1A1A", border: "1px solid #2A2A2A" }}
    >
      <SectionTitle
        title="Informações da Academia"
        subtitle="Configure os dados básicos da sua academia"
      />

      <div className="flex flex-col gap-5">
        {/* Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <FormInput
            label="Nome da Academia"
            icon={Building2}
            value={form.nomeAcademia}
            onChange={set("nomeAcademia")}
            placeholder="FORGEE Academia"
          />
          <FormInput
            label="CNPJ"
            icon={Shield}
            value={form.cnpj}
            onChange={set("cnpj")}
            placeholder="00.000.000/0000-00"
          />
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <FormInput
            label="Telefone"
            icon={Phone}
            value={form.telefone}
            onChange={set("telefone")}
            placeholder="(11) 3456-7890"
          />
          <FormInput
            label="Email"
            icon={Mail}
            type="email"
            value={form.email}
            onChange={set("email")}
            placeholder="contato@forgee.com.br"
          />
        </div>

        {/* Row 3 */}
        <FormInput
          label="Endereço"
          icon={MapPin}
          value={form.endereco}
          onChange={set("endereco")}
          placeholder="Rua das Academias, 123 - Centro"
        />

        {/* Row 4 */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          <FormInput
            label="Cidade"
            value={form.cidade}
            onChange={set("cidade")}
            placeholder="Indaiatuba"
          />
          <FormInput
            label="Estado"
            value={form.estado}
            onChange={set("estado")}
            placeholder="SP"
          />
          <FormInput
            label="CEP"
            value={form.cep}
            onChange={set("cep")}
            placeholder="00000-000"
          />
        </div>
      </div>

      <PanelActions onCancel={handleCancel} onSave={handleSave} />
    </div>
  );
}

// ─── Tab: Perfil Admin ────────────────────────────────────────────────────────

function TabPerfil() {
  const [form, setForm] = useState({
    nome: "Admin FORGEE",
    email: "admin@forgee.com.br",
    telefone: "(11) 98765-4321",
  });
  const [saved, setSaved] = useState({ ...form });
  const [senhaAtual, setSenhaAtual] = useState("");
  const [novaSenha, setNovaSenha] = useState("");

  const set = (key: keyof typeof form) => (v: string) =>
    setForm((p) => ({ ...p, [key]: v }));

  const handleSave = () => {
    if (novaSenha && !senhaAtual) {
      toast.error("Informe a senha atual para alterá-la.");
      return;
    }
    if (novaSenha && novaSenha.length < 6) {
      toast.error("A nova senha deve ter ao menos 6 caracteres.");
      return;
    }
    setSaved({ ...form });
    setSenhaAtual("");
    setNovaSenha("");
    toast.success("Perfil salvo com sucesso.");
  };

  const handleCancel = () => {
    setForm({ ...saved });
    setSenhaAtual("");
    setNovaSenha("");
  };

  return (
    <div
      className="rounded-2xl p-6"
      style={{ background: "#1A1A1A", border: "1px solid #2A2A2A" }}
    >
      {/* Subseção 1 */}
      <SectionTitle
        title="Perfil do Administrador"
        subtitle="Gerencie suas informações pessoais e credenciais"
      />

      <div className="flex flex-col gap-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <FormInput
            label="Nome Completo"
            icon={UserCog}
            value={form.nome}
            onChange={set("nome")}
            placeholder="Admin FORGEE"
          />
          <FormInput
            label="Email"
            icon={Mail}
            type="email"
            value={form.email}
            onChange={set("email")}
            placeholder="admin@forgee.com.br"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <FormInput
            label="Telefone"
            icon={Phone}
            value={form.telefone}
            onChange={set("telefone")}
            placeholder="(11) 98765-4321"
          />
        </div>
      </div>

      {/* Divider */}
      <div className="my-6" style={{ borderTop: "1px solid #2A2A2A" }} />

      {/* Subseção 2 */}
      <div className="mb-6">
        <h3
          style={{
            fontFamily: "'Oswald', sans-serif",
            fontWeight: 700,
            fontSize: 18,
            letterSpacing: "0.02em",
            textTransform: "uppercase",
            color: "#F2F2F2",
          }}
        >
          Alterar Senha
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <PasswordInput
          label="Senha Atual"
          value={senhaAtual}
          onChange={setSenhaAtual}
          placeholder="Digite sua senha atual"
        />
        <PasswordInput
          label="Nova Senha"
          value={novaSenha}
          onChange={setNovaSenha}
          placeholder="Digite a nova senha"
        />
      </div>

      <PanelActions onCancel={handleCancel} onSave={handleSave} />
    </div>
  );
}

// ─── Tab: Planos ──────────────────────────────────────────────────────────────

function PlanCard({
  plan,
  onUpdate,
  onDelete,
}: {
  plan: Plan;
  onUpdate: (updated: Plan) => void;
  onDelete: () => void;
}) {
  const [newBenefit, setNewBenefit] = useState("");

  const updateBenefit = (idx: number, val: string) => {
    const benefits = [...plan.benefits];
    benefits[idx] = val;
    onUpdate({ ...plan, benefits });
  };

  const removeBenefit = (idx: number) => {
    const benefits = plan.benefits.filter((_, i) => i !== idx);
    onUpdate({ ...plan, benefits });
  };

  const addBenefit = () => {
    if (!newBenefit.trim()) return;
    onUpdate({ ...plan, benefits: [...plan.benefits, newBenefit.trim()] });
    setNewBenefit("");
  };

  const isCustom = !["basic", "premium", "elite"].includes(plan.id);
  const accentColor = plan.featured ? "#E8400A" : "#F2F2F2";

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      className="rounded-xl p-5"
      style={{
        background: "#111111",
        border: `1px solid ${plan.featured ? "#E8400A44" : "#2A2A2A"}`,
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex flex-col gap-0.5">
          <input
            value={plan.name}
            onChange={(e) => onUpdate({ ...plan, name: e.target.value.toUpperCase() })}
            className="bg-transparent outline-none"
            style={{
              fontFamily: "'Oswald', sans-serif",
              fontWeight: 700,
              fontSize: 18,
              color: accentColor,
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              width: "140px",
            }}
          />
          <input
            value={plan.subtitle}
            onChange={(e) => onUpdate({ ...plan, subtitle: e.target.value })}
            className="bg-transparent outline-none"
            placeholder="Subtítulo do plano"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 12,
              color: "#606060",
              width: "200px",
            }}
          />
        </div>

        <div className="flex items-center gap-3">
          {/* Price input */}
          <div
            className="flex items-center gap-2 rounded-lg px-3"
            style={{
              height: 38,
              background: "#1A1A1A",
              border: "1px solid #303030",
            }}
          >
            <DollarSign size={14} color="#606060" strokeWidth={1.75} />
            <input
              type="number"
              value={plan.price}
              onChange={(e) => onUpdate({ ...plan, price: e.target.value })}
              className="bg-transparent outline-none w-20"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 14,
                color: "#F2F2F2",
              }}
            />
          </div>

          {/* Featured toggle */}
          <button
            onClick={() => onUpdate({ ...plan, featured: !plan.featured })}
            className="flex items-center gap-1.5 rounded-lg px-3 py-1.5 transition-colors"
            style={{
              background: plan.featured ? "#E8400A22" : "#1A1A1A",
              border: `1px solid ${plan.featured ? "#E8400A66" : "#303030"}`,
              color: plan.featured ? "#E8400A" : "#606060",
              fontFamily: "'Inter', sans-serif",
              fontSize: 11,
              fontWeight: 500,
            }}
          >
            {plan.featured ? "Destaque" : "Destacar"}
          </button>

          {/* Delete (only custom plans) */}
          {isCustom && (
            <button
              onClick={onDelete}
              className="flex items-center justify-center rounded-lg transition-colors hover:bg-red-500/10"
              style={{ width: 32, height: 32, color: "#606060" }}
            >
              <Trash2 size={15} strokeWidth={1.75} />
            </button>
          )}
        </div>
      </div>

      {/* Benefits */}
      <div className="flex flex-col gap-2 mb-3">
        {plan.benefits.map((b, i) => (
          <div key={i} className="flex items-center gap-2 group">
            <span style={{ color: accentColor, fontSize: 14 }}>•</span>
            <input
              value={b}
              onChange={(e) => updateBenefit(i, e.target.value)}
              className="flex-1 bg-transparent outline-none"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 13,
                color: "#C0C0C0",
              }}
            />
            <button
              onClick={() => removeBenefit(i)}
              className="opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0"
              style={{ color: "#606060" }}
            >
              <X size={13} strokeWidth={2} />
            </button>
          </div>
        ))}
      </div>

      {/* Add benefit */}
      <div className="flex items-center gap-2">
        <span style={{ color: "#606060", fontSize: 14 }}>+</span>
        <input
          value={newBenefit}
          onChange={(e) => setNewBenefit(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") addBenefit();
          }}
          placeholder="Adicionar benefício"
          className="flex-1 bg-transparent outline-none"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 13,
            color: "#606060",
          }}
        />
        {newBenefit.trim() && (
          <button
            onClick={addBenefit}
            className="flex-shrink-0"
            style={{ color: "#E8400A" }}
          >
            <Plus size={14} strokeWidth={2} />
          </button>
        )}
      </div>
    </motion.div>
  );
}

// Modal: Criar Novo Plano
function CriarPlanoModal({
  onClose,
  onCreate,
}: {
  onClose: () => void;
  onCreate: (plan: Plan) => void;
}) {
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");
  const [descricao, setDescricao] = useState("");
  const [destaque, setDestaque] = useState(false);

  const handleCreate = () => {
    if (!nome.trim() || !preco || parseFloat(preco) <= 0) {
      toast.error("Preencha o nome e o preço do plano.");
      return;
    }
    const newPlan: Plan = {
      id: `custom-${Date.now()}`,
      name: nome.trim().toUpperCase(),
      subtitle: descricao.trim() || "Plano personalizado",
      price: preco,
      benefits: [],
      featured: destaque,
    };
    onCreate(newPlan);
    onClose();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.7)" }}
    >
      <motion.div
        initial={{ scale: 0.95, y: 16 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.95, y: 16 }}
        className="rounded-2xl w-full max-w-xl p-8"
        style={{ background: "#1A1A1A", border: "1px solid #2A2A2A" }}
      >
        <h3
          style={{
            fontFamily: "'Oswald', sans-serif",
            fontWeight: 700,
            fontSize: 18,
            textTransform: "uppercase",
            color: "#F2F2F2",
            marginBottom: 24,
          }}
        >
          Criar Novo Plano
        </h3>

        <div className="flex flex-col gap-5">
          <div className="grid grid-cols-2 gap-4">
            <FormInput
              label="Nome do Plano"
              value={nome}
              onChange={(v) => setNome(v.toUpperCase())}
              placeholder="Ex: PREMIUM"
            />
            <div className="flex flex-col gap-2">
              <label
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 14,
                  fontWeight: 500,
                  color: "#F2F2F2",
                }}
              >
                Preço Mensal
              </label>
              <div
                className="flex items-center gap-2 rounded-xl px-4"
                style={{
                  height: 46,
                  background: "#0D0D0D",
                  border: "1px solid #303030",
                }}
              >
                <DollarSign size={16} color="#606060" strokeWidth={1.75} />
                <input
                  type="number"
                  value={preco}
                  onChange={(e) => setPreco(e.target.value)}
                  placeholder="0"
                  className="flex-1 bg-transparent outline-none"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 14,
                    color: "#F2F2F2",
                  }}
                />
              </div>
            </div>
          </div>

          <FormInput
            label="Descrição"
            value={descricao}
            onChange={setDescricao}
            placeholder="Breve descrição do plano"
          />

          <label className="flex items-center gap-3 cursor-pointer">
            <div
              onClick={() => setDestaque((p) => !p)}
              className="flex items-center justify-center rounded transition-colors"
              style={{
                width: 18,
                height: 18,
                background: destaque ? "#E8400A" : "#0D0D0D",
                border: `1px solid ${destaque ? "#E8400A" : "#303030"}`,
                flexShrink: 0,
              }}
            >
              {destaque && (
                <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                  <path d="M1 4L3.5 6.5L9 1" stroke="#F2F2F2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </div>
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 14,
                fontWeight: 500,
                color: "#F2F2F2",
              }}
            >
              Marcar como plano em destaque
            </span>
          </label>
        </div>

        <div className="flex items-center justify-end gap-3 mt-8">
          <button
            onClick={onClose}
            className="flex items-center justify-center rounded-xl px-6 transition-colors"
            style={{
              height: 46,
              background: "transparent",
              border: "1px solid #303030",
              color: "#F2F2F2",
              fontFamily: "'Inter', sans-serif",
              fontSize: 15,
              fontWeight: 500,
            }}
          >
            Cancelar
          </button>
          <button
            onClick={handleCreate}
            className="flex items-center gap-2 justify-center rounded-xl px-6 transition-opacity hover:opacity-90"
            style={{
              height: 46,
              background: "#E8400A",
              color: "#F2F2F2",
              fontFamily: "'Inter', sans-serif",
              fontSize: 15,
              fontWeight: 500,
            }}
          >
            <Plus size={16} strokeWidth={2} />
            Criar Plano
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

function TabPlanos() {
  const [plans, setPlans] = useState<Plan[]>(initialPlans);
  const [savedPlans, setSavedPlans] = useState<Plan[]>(initialPlans);
  const [showModal, setShowModal] = useState(false);

  const updatePlan = (id: string, updated: Plan) => {
    setPlans((p) => p.map((plan) => (plan.id === id ? updated : plan)));
  };

  const deletePlan = (id: string) => {
    setPlans((p) => p.filter((plan) => plan.id !== id));
  };

  const addPlan = (plan: Plan) => {
    setPlans((p) => [...p, plan]);
  };

  const handleSave = () => {
    setSavedPlans([...plans]);
    toast.success("Planos salvos com sucesso.");
  };

  const handleCancel = () => {
    setPlans([...savedPlans]);
  };

  return (
    <>
      <div
        className="rounded-2xl p-6"
        style={{ background: "#1A1A1A", border: "1px solid #2A2A2A" }}
      >
        <SectionTitle
          title="Planos e Preços"
          subtitle="Configure os planos disponíveis para os alunos. As alterações refletem em todo o sistema."
        />

        <div className="flex flex-col gap-4">
          <AnimatePresence mode="popLayout">
            {plans.map((plan) => (
              <PlanCard
                key={plan.id}
                plan={plan}
                onUpdate={(updated) => updatePlan(plan.id, updated)}
                onDelete={() => deletePlan(plan.id)}
              />
            ))}
          </AnimatePresence>
        </div>

        {/* Create new plan button */}
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 mt-5 px-5 py-2.5 rounded-xl transition-opacity hover:opacity-80"
          style={{
            background: "#E8400A",
            color: "#F2F2F2",
            fontFamily: "'Inter', sans-serif",
            fontSize: 14,
            fontWeight: 500,
          }}
        >
          <Plus size={16} strokeWidth={2} />
          Criar Novo Plano
        </button>

        <PanelActions onCancel={handleCancel} onSave={handleSave} />
      </div>

      <AnimatePresence>
        {showModal && (
          <CriarPlanoModal
            onClose={() => setShowModal(false)}
            onCreate={addPlan}
          />
        )}
      </AnimatePresence>
    </>
  );
}

// ─── Tab: Sistema ─────────────────────────────────────────────────────────────

function TabSistema() {
  const [abertura, setAbertura] = useState("06:00");
  const [fechamento, setFechamento] = useState("22:00");
  const [diasRisco, setDiasRisco] = useState("10");
  const [diasVencimento, setDiasVencimento] = useState("5");

  const [savedState, setSavedState] = useState({ abertura, fechamento, diasRisco, diasVencimento });

  const handleSave = () => {
    if (fechamento <= abertura) {
      toast.error("O horário de fechamento deve ser posterior ao de abertura.");
      return;
    }
    if (!Number.isInteger(Number(diasRisco)) || Number(diasRisco) <= 0) {
      toast.error("Dias sem check-in deve ser um número inteiro positivo.");
      return;
    }
    if (!Number.isInteger(Number(diasVencimento)) || Number(diasVencimento) <= 0) {
      toast.error("Dias antes do vencimento deve ser um número inteiro positivo.");
      return;
    }
    setSavedState({ abertura, fechamento, diasRisco, diasVencimento });
    toast.success("Configurações do sistema salvas.");
  };

  const handleCancel = () => {
    setAbertura(savedState.abertura);
    setFechamento(savedState.fechamento);
    setDiasRisco(savedState.diasRisco);
    setDiasVencimento(savedState.diasVencimento);
  };

  return (
    <div
      className="rounded-2xl p-6"
      style={{ background: "#1A1A1A", border: "1px solid #2A2A2A" }}
    >
      <SectionTitle
        title="Configurações do Sistema"
        subtitle="Configure parâmetros operacionais do sistema"
      />

      {/* Horário */}
      <div className="mb-8">
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 16,
            fontWeight: 600,
            color: "#F2F2F2",
            marginBottom: 16,
          }}
        >
          Horário de Funcionamento
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="flex flex-col gap-2">
            <label
              style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, fontWeight: 500, color: "#F2F2F2" }}
            >
              Abertura
            </label>
            <div
              className="flex items-center gap-3 rounded-xl px-4"
              style={{ height: 46, background: "#0D0D0D", border: "1px solid #303030" }}
            >
              <Clock size={16} color="#606060" strokeWidth={1.75} />
              <input
                type="time"
                value={abertura}
                onChange={(e) => setAbertura(e.target.value)}
                className="flex-1 bg-transparent outline-none"
                style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: "#F2F2F2" }}
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label
              style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, fontWeight: 500, color: "#F2F2F2" }}
            >
              Fechamento
            </label>
            <div
              className="flex items-center gap-3 rounded-xl px-4"
              style={{ height: 46, background: "#0D0D0D", border: "1px solid #303030" }}
            >
              <Clock size={16} color="#606060" strokeWidth={1.75} />
              <input
                type="time"
                value={fechamento}
                onChange={(e) => setFechamento(e.target.value)}
                className="flex-1 bg-transparent outline-none"
                style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: "#F2F2F2" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Alertas */}
      <div className="mb-8" style={{ borderTop: "1px solid #2A2A2A", paddingTop: 24 }}>
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 16,
            fontWeight: 600,
            color: "#F2F2F2",
            marginBottom: 16,
          }}
        >
          Alertas Automáticos
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="flex flex-col gap-2">
            <label
              style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, fontWeight: 500, color: "#F2F2F2" }}
            >
              Dias sem check-in para risco
            </label>
            <div
              className="flex items-center gap-3 rounded-xl px-4"
              style={{ height: 46, background: "#0D0D0D", border: "1px solid #303030" }}
            >
              <Calendar size={16} color="#606060" strokeWidth={1.75} />
              <input
                type="number"
                min="1"
                value={diasRisco}
                onChange={(e) => setDiasRisco(e.target.value)}
                className="flex-1 bg-transparent outline-none"
                style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: "#F2F2F2" }}
              />
            </div>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: "#606060" }}>
              Dias sem frequência para considerar aluno em risco
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <label
              style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, fontWeight: 500, color: "#F2F2F2" }}
            >
              Dias antes do vencimento para alertar
            </label>
            <div
              className="flex items-center gap-3 rounded-xl px-4"
              style={{ height: 46, background: "#0D0D0D", border: "1px solid #303030" }}
            >
              <Calendar size={16} color="#606060" strokeWidth={1.75} />
              <input
                type="number"
                min="1"
                value={diasVencimento}
                onChange={(e) => setDiasVencimento(e.target.value)}
                className="flex-1 bg-transparent outline-none"
                style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: "#F2F2F2" }}
              />
            </div>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: "#606060" }}>
              Antecedência para notificar vencimento
            </p>
          </div>
        </div>
      </div>

      {/* Informações do Sistema */}
      <div className="mb-8" style={{ borderTop: "1px solid #2A2A2A", paddingTop: 24 }}>
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 16,
            fontWeight: 600,
            color: "#F2F2F2",
            marginBottom: 16,
          }}
        >
          Informações do Sistema
        </p>
        <div
          className="rounded-xl p-4 flex flex-col gap-3"
          style={{ background: "#0D0D0D", border: "1px solid #2A2A2A" }}
        >
          {[
            { label: "Versão:", value: "1.0.0", valueColor: "#F2F2F2" },
            { label: "Última atualização:", value: "23 de fevereiro, 2026", valueColor: "#F2F2F2" },
            { label: "Banco de dados:", value: "Conectado", valueColor: "#4ADE80" },
          ].map(({ label, value, valueColor }) => (
            <div key={label} className="flex items-center justify-between">
              <span
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 14,
                  color: "#606060",
                }}
              >
                {label}
              </span>
              <span
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 14,
                  fontWeight: 500,
                  color: valueColor,
                }}
              >
                {value}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Design System */}
      <div className="mb-4" style={{ borderTop: "1px solid #2A2A2A", paddingTop: 24 }}>
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 16,
            fontWeight: 600,
            color: "#F2F2F2",
            marginBottom: 16,
          }}
        >
          Design System
        </p>
        <div
          className="rounded-xl p-5"
          style={{ background: "#0D0D0D", border: "1px solid #2A2A2A" }}
        >
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 14,
              color: "#606060",
              marginBottom: 16,
            }}
          >
            Acesse a documentação completa do Design System com tokens, componentes e guias de estilo.
          </p>
          <button
            onClick={() => toast.info("Design System em construção.")}
            className="flex items-center gap-2 rounded-xl px-5 py-2.5 transition-opacity hover:opacity-80"
            style={{
              background: "#E8400A",
              color: "#F2F2F2",
              fontFamily: "'Inter', sans-serif",
              fontSize: 14,
              fontWeight: 500,
            }}
          >
            <Palette size={16} strokeWidth={1.75} />
            Abrir Design System
          </button>
        </div>
      </div>

      <PanelActions onCancel={handleCancel} onSave={handleSave} />
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export function Configuracoes() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<Tab>("geral");
  const [pendingTab, setPendingTab] = useState<Tab | null>(null);
  const [showUnsavedDialog, setShowUnsavedDialog] = useState(false);

  const tabs: { id: Tab; label: string; icon: React.ComponentType<{ size?: number; strokeWidth?: number }> }[] = [
    { id: "geral", label: "Geral", icon: Building2 },
    { id: "perfil", label: "Perfil Admin", icon: UserCog },
    { id: "planos", label: "Planos", icon: CreditCard },
    { id: "sistema", label: "Sistema", icon: Zap },
  ];

  const handleTabChange = (tab: Tab) => {
    if (tab === activeTab) return;
    setActiveTab(tab);
  };

  return (
    <AdminLayout>
      {/* Header */}
      <div
        className="flex items-center justify-between px-6 lg:px-8 flex-shrink-0"
        style={{
          height: 72,
          borderBottom: "1px solid #1E1E1E",
          background: "#111111",
        }}
      >
        <div className="lg:ml-0 ml-12">
          <h1
            style={{
              fontFamily: "'Oswald', sans-serif",
              fontWeight: 700,
              fontSize: 20,
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              color: "#FFFFFF",
              lineHeight: 1.2,
            }}
          >
            Configurações
          </h1>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 11,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#606060",
            }}
          >
            Configurações do Sistema
          </p>
        </div>

        <div className="flex items-center gap-3">
          {/* Theme toggle */}
          <button
            className="flex items-center justify-center rounded-xl transition-colors hover:bg-white/5"
            style={{
              width: 40,
              height: 40,
              border: "1px solid #303030",
              color: "#F2F2F2",
            }}
          >
            <Sun size={16} strokeWidth={1.75} />
          </button>

          {/* Novo Aluno */}
          <button
            onClick={() => navigate("/novo-aluno")}
            className="hidden sm:flex items-center gap-2 rounded-xl px-4 transition-colors hover:bg-white/5"
            style={{
              height: 40,
              border: "1px solid #303030",
              color: "#F2F2F2",
              fontFamily: "'Inter', sans-serif",
              fontSize: 13,
              fontWeight: 500,
            }}
          >
            <UserPlus size={15} strokeWidth={1.75} />
            Novo Aluno
          </button>

          {/* Ativar Recepção */}
          <button
            onClick={() => navigate("/modo-recepcao")}
            className="flex items-center gap-2 rounded-xl px-4 transition-opacity hover:opacity-90"
            style={{
              height: 40,
              background: "#E8400A",
              color: "#F2F2F2",
              fontFamily: "'Inter', sans-serif",
              fontSize: 13,
              fontWeight: 500,
            }}
          >
            <MonitorPlay size={15} strokeWidth={1.75} />
            <span className="hidden sm:inline">Ativar Recepção</span>
          </button>
        </div>
      </div>

      {/* Content */}
      <main className="flex-1 overflow-y-auto" style={{ background: "#090909" }}>
        <div className="px-6 lg:px-8 py-8 max-w-5xl">
          {/* Page title */}
          <div className="mb-6">
            <h2
              style={{
                fontFamily: "'Oswald', sans-serif",
                fontWeight: 700,
                fontSize: 32,
                letterSpacing: "0.02em",
                textTransform: "uppercase",
                color: "#FFFFFF",
              }}
            >
              Configurações
            </h2>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 14,
                color: "#606060",
                marginTop: 4,
              }}
            >
              Gerencie as configurações da academia
            </p>
          </div>

          {/* Tabs */}
          <div
            className="flex items-center gap-1 mb-6 overflow-x-auto"
            style={{ scrollbarWidth: "none" }}
          >
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id)}
                  className="flex items-center gap-2 rounded-xl px-4 py-2.5 whitespace-nowrap transition-all"
                  style={{
                    background: isActive ? "#E8400A" : "transparent",
                    color: isActive ? "#FFFFFF" : "#606060",
                    border: isActive ? "none" : "1px solid #2A2A2A",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 14,
                    fontWeight: isActive ? 600 : 500,
                  }}
                >
                  <tab.icon size={15} strokeWidth={1.75} />
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Tab content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.18 }}
            >
              {activeTab === "geral" && <TabGeral />}
              {activeTab === "perfil" && <TabPerfil />}
              {activeTab === "planos" && <TabPlanos />}
              {activeTab === "sistema" && <TabSistema />}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </AdminLayout>
  );
}
