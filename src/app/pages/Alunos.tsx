import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowLeft,
  Search,
  ChevronDown,
  MoreVertical,
  Sun,
  UserPlus,
  Scan,
  Mail,
  Phone,
  Calendar,
  MessageCircle,
  Edit2,
} from "lucide-react";
import { useNavigate } from "react-router";
import { AdminLayout } from "../components/AdminLayout";
import imgJoaoSilva from "../../imports/Alunos/81e581e8bdbf8c9f2fa02e4c20dce774b1a1bb76.png";
import imgCarlosOliveira from "../../imports/Alunos/4631e0b3856fc2d697783d063af0506770940150.png";
import imgMariaSantos from "../../imports/Alunos/c370e1db29c9956574be3ed78df1b2c14bcdb239.png";
import imgAnaCosta from "../../imports/Alunos/e243fca66b972890241de9a6542eedb4acdb0d0f.png";
import imgBeatrizLima from "../../imports/Alunos/a8d9836506bb678008af0be8a848b247e3386b00.png";

// ─── Types & Mock Data ────────────────────────────────────────────────────────

type Student = {
  id: string;
  name: string;
  email: string;
  phone: string;
  plan: "BASIC" | "PREMIUM" | "ELITE";
  status: "Em dia" | "Vencendo" | "Em atraso";
  enrollmentDate: string;
  lastCheckIn: string;
  totalCheckIns: number;
  avatar: string;
  isActive: boolean;
  payments: Payment[];
};

type Payment = {
  date: string;
  status: "Pago" | "Atrasado" | "Pendente";
  method: string;
  amount: number;
};

const mockStudents: Student[] = [
  {
    id: "#5678",
    name: "João Silva",
    email: "joao@email.com",
    phone: "(11) 98765-1234",
    plan: "BASIC",
    status: "Em atraso",
    enrollmentDate: "09/03/2024",
    lastCheckIn: "2026-02-20",
    totalCheckIns: 54,
    avatar: imgJoaoSilva,
    isActive: true,
    payments: [
      { date: "09/02/2026", status: "Atrasado", method: "Boleto", amount: 89.9 },
      { date: "09/01/2026", status: "Pago", method: "PIX", amount: 89.9 },
    ],
  },
  {
    id: "#3456",
    name: "Carlos Oliveira",
    email: "carlos@email.com",
    phone: "(11) 91234-5678",
    plan: "PREMIUM",
    status: "Vencendo",
    enrollmentDate: "31/01/2024",
    lastCheckIn: "2026-04-05",
    totalCheckIns: 142,
    avatar: imgCarlosOliveira,
    isActive: true,
    payments: [
      { date: "31/03/2026", status: "Pendente", method: "Cartão", amount: 129.9 },
      { date: "31/02/2026", status: "Pago", method: "PIX", amount: 129.9 },
    ],
  },
  {
    id: "#1234",
    name: "Maria Santos",
    email: "maria@email.com",
    phone: "(11) 99876-5432",
    plan: "PREMIUM",
    status: "Em dia",
    enrollmentDate: "14/01/2024",
    lastCheckIn: "2026-04-10",
    totalCheckIns: 189,
    avatar: imgMariaSantos,
    isActive: true,
    payments: [
      { date: "14/04/2026", status: "Pago", method: "PIX", amount: 129.9 },
      { date: "14/03/2026", status: "Pago", method: "PIX", amount: 129.9 },
    ],
  },
  {
    id: "#9012",
    name: "Ana Costa",
    email: "ana@email.com",
    phone: "(11) 97654-3210",
    plan: "ELITE",
    status: "Em dia",
    enrollmentDate: "19/11/2023",
    lastCheckIn: "2026-04-11",
    totalCheckIns: 298,
    avatar: imgAnaCosta,
    isActive: true,
    payments: [
      { date: "19/04/2026", status: "Pago", method: "Débito Automático", amount: 189.9 },
      { date: "19/03/2026", status: "Pago", method: "Débito Automático", amount: 189.9 },
    ],
  },
  {
    id: "#7890",
    name: "Beatriz Lima",
    email: "beatriz@email.com",
    phone: "(11) 96543-2109",
    plan: "BASIC",
    status: "Em atraso",
    enrollmentDate: "04/08/2023",
    lastCheckIn: "2026-03-15",
    totalCheckIns: 87,
    avatar: imgBeatrizLima,
    isActive: true,
    payments: [
      { date: "04/04/2026", status: "Atrasado", method: "Boleto", amount: 89.9 },
      { date: "04/03/2026", status: "Pago", method: "PIX", amount: 89.9 },
    ],
  },
];

// ─── Header Component ─────────────────────────────────────────────────────────

function Header() {
  const navigate = useNavigate();

  return (
    <header
      className="h-20 border-b border-black flex items-center justify-between px-8 pl-16 lg:pl-8"
      style={{ background: "rgba(13, 13, 13, 0.8)" }}
    >
      <div>
        <h1
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 700,
            fontSize: 24,
            letterSpacing: "-0.025em",
            color: "#F2F2F2",
          }}
        >
          ALUNOS
        </h1>
        <p
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 14,
            color: "#606060",
          }}
        >
          GESTÃO COMPLETA DA BASE DE MEMBROS
        </p>
      </div>

      <div className="flex items-center gap-3">
        <button
          className="w-10 h-10 bg-[#1A1A1A] border border-[#303030] rounded-lg flex items-center justify-center"
          title="Alternar tema"
        >
          <Sun size={20} color="#F2F2F2" />
        </button>
        <button
          onClick={() => navigate("/novo-aluno")}
          className="bg-[#1A1A1A] border border-[#303030] rounded-lg px-4 py-2 flex items-center gap-2"
        >
          <UserPlus size={16} color="#F2F2F2" />
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 12,
              fontWeight: 500,
              letterSpacing: "0.05em",
              color: "#F2F2F2",
              textTransform: "uppercase",
            }}
          >
            Novo Aluno
          </span>
        </button>
        <button
          onClick={() => navigate("/modo-recepcao")}
          className="bg-[#E8271A] rounded-lg px-4 py-2 flex items-center gap-2"
          style={{ minWidth: 173 }}
        >
          <Scan size={16} color="#FFFFFF" />
          <span
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 12,
              fontWeight: 500,
              letterSpacing: "0.05em",
              color: "#FFFFFF",
              textTransform: "uppercase",
            }}
          >
            Ativar Recepção
          </span>
        </button>
      </div>
    </header>
  );
}

// ─── Student List Components ──────────────────────────────────────────────────

function FilterBar({
  searchTerm,
  onSearchChange,
}: {
  searchTerm: string;
  onSearchChange: (v: string) => void;
}) {
  return (
    <div className="flex flex-col gap-3 w-full">
      {/* Search Input */}
      <div className="relative w-full">
        <Search size={20} color="#606060" className="absolute left-4 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          placeholder="Buscar aluno por nome, email ou telefone..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full bg-[#1A1A1A] border border-[#303030] rounded-lg pl-12 pr-4 py-3 text-sm text-[#F2F2F2] placeholder:text-[#606060] outline-none focus:border-[#E8400A] transition-colors"
          style={{ fontFamily: "'Inter', sans-serif" }}
        />
      </div>

      {/* Filters */}
      <div className="flex gap-3">
        <button className="bg-[#1A1A1A] border border-[#303030] rounded-lg px-3 py-2.5 flex items-center justify-between gap-2 min-w-[115px]">
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: "#A8A8A8" }}>Planos</span>
          <ChevronDown size={16} color="#A8A8A8" />
        </button>
        <button className="bg-[#1A1A1A] border border-[#303030] rounded-lg px-3 py-2.5 flex items-center justify-between gap-2 min-w-[115px]">
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: "#A8A8A8" }}>Mês</span>
          <ChevronDown size={16} color="#A8A8A8" />
        </button>
        <button className="bg-[#1A1A1A] border border-[#303030] rounded-lg px-3 py-2.5 flex items-center justify-between gap-2 min-w-[115px]">
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, color: "#A8A8A8" }}>Recentes</span>
          <ChevronDown size={16} color="#A8A8A8" />
        </button>
      </div>
    </div>
  );
}

function StudentCard({ student, onClick }: { student: Student; onClick: () => void }) {
  const statusColors = {
    "Em dia": "#4ADE80",
    Vencendo: "#FACC15",
    "Em atraso": "#E8271A",
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-[#1A1A1A] border border-[#303030] rounded-lg p-4 flex items-center justify-between cursor-pointer hover:border-[#E8400A] transition-colors"
      onClick={onClick}
    >
      <div className="flex items-center gap-4 flex-1">
        <img
          src={student.avatar}
          alt={student.name}
          className="w-12 h-12 rounded-full object-cover"
          style={{ border: "2px solid rgba(232, 39, 26, 0.2)" }}
        />

        <div className="flex-1">
          <div className="flex items-center gap-2 mb-0.5">
            <h3
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 16,
                fontWeight: 500,
                color: "#F2F2F2",
              }}
            >
              {student.name}
            </h3>
            <span
              className="px-1.5 py-0.5 rounded"
              style={{
                background: "rgba(232, 39, 26, 0.1)",
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 12,
                color: "#E8271A",
              }}
            >
              {student.id}
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs">
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                color: statusColors[student.status],
              }}
            >
              {student.status}
            </span>
            <span style={{ color: "#606060" }}>•</span>
            <span style={{ fontFamily: "'Inter', sans-serif", color: "#606060" }}>
              Cadastro: {student.enrollmentDate}
            </span>
          </div>
        </div>

        <div className="text-right mr-4">
          <p
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 12,
              letterSpacing: "0.05em",
              color: "#606060",
            }}
          >
            {student.plan}
          </p>
        </div>
      </div>

      <button className="p-1 hover:bg-[#2A2A2A] rounded transition-colors">
        <MoreVertical size={20} color="#606060" />
      </button>
    </motion.div>
  );
}

// ─── Student Profile Components ───────────────────────────────────────────────

function StudentProfile({ student, onBack }: { student: Student; onBack: () => void }) {
  return (
    <div className="w-full">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="flex items-center gap-2 mb-6 text-[#A8A8A8] hover:text-[#F2F2F2] transition-colors"
      >
        <ArrowLeft size={20} />
        <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, fontWeight: 500 }}>
          Voltar para lista
        </span>
      </button>

      {/* Header Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-[#0D0D0D] border border-[#303030] rounded-2xl p-6 mb-6"
      >
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <img
              src={student.avatar}
              alt={student.name}
              className="w-16 h-16 rounded-full object-cover"
              style={{ border: "2px solid rgba(232, 39, 26, 0.2)" }}
            />
            <div>
              <h2
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 700,
                  fontSize: 24,
                  letterSpacing: "-0.025em",
                  color: "#F2F2F2",
                }}
              >
                {student.name}
              </h2>
              <div className="flex items-center gap-2 mt-1">
                <span
                  className="px-2.5 py-1 rounded-full text-xs font-medium"
                  style={{
                    background: "rgba(34, 197, 94, 0.1)",
                    color: "#22C55E",
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  ATIVO
                </span>
                <span
                  className="px-2.5 py-1 rounded-full text-xs font-medium"
                  style={{
                    background: student.status === "Em atraso" ? "rgba(232, 39, 26, 0.1)" : "rgba(34, 197, 94, 0.1)",
                    color: student.status === "Em atraso" ? "#E8271A" : "#22C55E",
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  {student.status}
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button className="bg-[#25D366] rounded-lg px-4 py-2 flex items-center gap-2">
              <MessageCircle size={16} color="#FFFFFF" />
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, fontWeight: 500, color: "#FFFFFF" }}>
                WhatsApp
              </span>
            </button>
            <button className="p-2 hover:bg-[#1A1A1A] rounded-lg transition-colors">
              <Edit2 size={20} color="#606060" />
            </button>
          </div>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <InfoCard icon={Mail} label="EMAIL" value={student.email} />
          <InfoCard icon={Phone} label="TELEFONE" value={student.phone} />
          <InfoCard icon={Calendar} label="PLANO" value={student.plan} mono />
          <InfoCard icon={null} label="DATA DE INÍCIO" value={student.enrollmentDate} />
          <InfoCard icon={null} label="ÚLTIMO CHECK-IN" value={student.lastCheckIn} />
          <InfoCard icon={null} label="TOTAL DE CHECK-INS" value={String(student.totalCheckIns)} mono />
        </div>
      </motion.div>

      {/* Payment History */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-[#0D0D0D] border border-[#303030] rounded-2xl p-6"
      >
        <h3
          className="mb-4"
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 700,
            fontSize: 20,
            letterSpacing: "-0.025em",
            color: "#F2F2F2",
          }}
        >
          HISTÓRICO DE PAGAMENTOS
        </h3>

        <div className="flex flex-col gap-3">
          {student.payments.map((payment, index) => (
            <PaymentItem key={index} payment={payment} />
          ))}
        </div>
      </motion.div>
    </div>
  );
}

function InfoCard({
  icon: Icon,
  label,
  value,
  mono,
}: {
  icon: any;
  label: string;
  value: string;
  mono?: boolean;
}) {
  return (
    <div className="bg-[#1A1A1A] border border-[#303030] rounded-lg p-4">
      {Icon && (
        <div className="flex items-center gap-2 mb-2">
          <Icon size={16} color="#606060" />
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 12,
              letterSpacing: "0.05em",
              color: "#606060",
              textTransform: "uppercase",
            }}
          >
            {label}
          </p>
        </div>
      )}
      {!Icon && (
        <p
          className="mb-2"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 12,
            letterSpacing: "0.05em",
            color: "#606060",
            textTransform: "uppercase",
          }}
        >
          {label}
        </p>
      )}
      <p
        style={{
          fontFamily: mono ? "'JetBrains Mono', monospace" : "'Inter', sans-serif",
          fontSize: 14,
          color: "#F2F2F2",
        }}
      >
        {value}
      </p>
    </div>
  );
}

function PaymentItem({ payment }: { payment: Payment }) {
  const statusConfig = {
    Pago: { bg: "rgba(34, 197, 94, 0.1)", color: "#22C55E" },
    Atrasado: { bg: "rgba(232, 39, 26, 0.1)", color: "#E8271A" },
    Pendente: { bg: "rgba(250, 204, 21, 0.1)", color: "#FACC15" },
  };

  const config = statusConfig[payment.status];

  return (
    <div className="bg-[#1A1A1A] border border-[#303030] rounded-lg p-4 flex items-center justify-between">
      <div>
        <div className="flex items-center gap-3 mb-1">
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 16, fontWeight: 500, color: "#F2F2F2" }}>
            {payment.date}
          </p>
          <span
            className="px-2 py-0.5 rounded-full text-xs font-medium"
            style={{ background: config.bg, color: config.color, fontFamily: "'Inter', sans-serif" }}
          >
            {payment.status}
          </span>
        </div>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 12, color: "#606060" }}>{payment.method}</p>
      </div>
      <p
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 16,
          fontWeight: 500,
          color: "#F2F2F2",
        }}
      >
        R$ {payment.amount.toFixed(2).replace(".", ",")}
      </p>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export function Alunos() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);

  const filteredStudents = mockStudents.filter(
    (student) =>
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.phone.includes(searchTerm)
  );

  return (
    <AdminLayout>
      <Header />

      <main className="flex-1 p-8 lg:pl-8 lg:pr-8">
        <AnimatePresence mode="wait">
          {!selectedStudent ? (
            <motion.div
              key="list"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="max-w-[1200px]"
            >
              <div className="bg-[#0D0D0D] border border-[#303030] rounded-2xl p-6">
                <FilterBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />

                <div className="mt-6 flex flex-col gap-3">
                  {filteredStudents.map((student) => (
                    <StudentCard
                      key={student.id}
                      student={student}
                      onClick={() => setSelectedStudent(student)}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="profile"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="max-w-[1200px]"
            >
              <StudentProfile student={selectedStudent} onBack={() => setSelectedStudent(null)} />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </AdminLayout>
  );
}