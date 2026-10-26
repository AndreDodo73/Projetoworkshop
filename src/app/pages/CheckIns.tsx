import { useState } from "react";
import { motion } from "motion/react";
import {
  Sun,
  UserPlus,
  Scan,
  Download,
  Search,
  Calendar,
  Clock,
  TrendingUp,
  Users as UsersIcon,
  Zap,
} from "lucide-react";
import { useNavigate } from "react-router";
import { AdminLayout } from "../components/AdminLayout";
import imgMariaSantos from "../../imports/CheckIns/c370e1db29c9956574be3ed78df1b2c14bcdb239.png";
import imgJoaoSilva from "../../imports/CheckIns/81e581e8bdbf8c9f2fa02e4c20dce774b1a1bb76.png";
import imgCarlosOliveira from "../../imports/CheckIns/4631e0b3856fc2d697783d063af0506770940150.png";
import imgAnaCosta from "../../imports/CheckIns/e243fca66b972890241de9a6542eedb4acdb0d0f.png";

// ─── Types & Mock Data ────────────────────────────────────────────────────────

type CheckIn = {
  id: string;
  studentName: string;
  studentAvatar: string;
  financialStatus: "Em dia" | "Vencendo" | "Em atraso";
  plan: "BASIC" | "PREMIUM" | "ELITE";
  date: string;
  time: string;
  timestamp: Date;
};

const mockCheckIns: CheckIn[] = [
  {
    id: "1",
    studentName: "Maria Santos",
    studentAvatar: imgMariaSantos,
    financialStatus: "Em dia",
    plan: "PREMIUM",
    date: "22/02/2026",
    time: "18:45",
    timestamp: new Date("2026-02-22T18:45:00"),
  },
  {
    id: "2",
    studentName: "João Silva",
    studentAvatar: imgJoaoSilva,
    financialStatus: "Em atraso",
    plan: "BASIC",
    date: "22/02/2026",
    time: "18:30",
    timestamp: new Date("2026-02-22T18:30:00"),
  },
  {
    id: "3",
    studentName: "Carlos Oliveira",
    studentAvatar: imgCarlosOliveira,
    financialStatus: "Vencendo",
    plan: "PREMIUM",
    date: "22/02/2026",
    time: "18:15",
    timestamp: new Date("2026-02-22T18:15:00"),
  },
  {
    id: "4",
    studentName: "Maria Santos",
    studentAvatar: imgMariaSantos,
    financialStatus: "Em dia",
    plan: "PREMIUM",
    date: "22/02/2026",
    time: "17:50",
    timestamp: new Date("2026-02-22T17:50:00"),
  },
  {
    id: "5",
    studentName: "Ana Costa",
    studentAvatar: imgAnaCosta,
    financialStatus: "Em dia",
    plan: "ELITE",
    date: "22/02/2026",
    time: "17:30",
    timestamp: new Date("2026-02-22T17:30:00"),
  },
  {
    id: "6",
    studentName: "Maria Santos",
    studentAvatar: imgMariaSantos,
    financialStatus: "Em dia",
    plan: "PREMIUM",
    date: "22/02/2026",
    time: "16:45",
    timestamp: new Date("2026-02-22T16:45:00"),
  },
  {
    id: "7",
    studentName: "João Silva",
    studentAvatar: imgJoaoSilva,
    financialStatus: "Em atraso",
    plan: "BASIC",
    date: "22/02/2026",
    time: "15:20",
    timestamp: new Date("2026-02-22T15:20:00"),
  },
  {
    id: "8",
    studentName: "Carlos Oliveira",
    studentAvatar: imgCarlosOliveira,
    financialStatus: "Vencendo",
    plan: "PREMIUM",
    date: "22/02/2026",
    time: "14:30",
    timestamp: new Date("2026-02-22T14:30:00"),
  },
  {
    id: "9",
    studentName: "Maria Santos",
    studentAvatar: imgMariaSantos,
    financialStatus: "Em dia",
    plan: "PREMIUM",
    date: "22/02/2026",
    time: "12:15",
    timestamp: new Date("2026-02-22T12:15:00"),
  },
  {
    id: "10",
    studentName: "Ana Costa",
    studentAvatar: imgAnaCosta,
    financialStatus: "Em dia",
    plan: "ELITE",
    date: "22/02/2026",
    time: "11:00",
    timestamp: new Date("2026-02-22T11:00:00"),
  },
  {
    id: "11",
    studentName: "João Silva",
    studentAvatar: imgJoaoSilva,
    financialStatus: "Em atraso",
    plan: "BASIC",
    date: "22/02/2026",
    time: "10:30",
    timestamp: new Date("2026-02-22T10:30:00"),
  },
  {
    id: "12",
    studentName: "Carlos Oliveira",
    studentAvatar: imgCarlosOliveira,
    financialStatus: "Vencendo",
    plan: "PREMIUM",
    date: "22/02/2026",
    time: "09:45",
    timestamp: new Date("2026-02-22T09:45:00"),
  },
  {
    id: "13",
    studentName: "Maria Santos",
    studentAvatar: imgMariaSantos,
    financialStatus: "Em dia",
    plan: "PREMIUM",
    date: "22/02/2026",
    time: "08:30",
    timestamp: new Date("2026-02-22T08:30:00"),
  },
  {
    id: "14",
    studentName: "Maria Santos",
    studentAvatar: imgMariaSantos,
    financialStatus: "Em dia",
    plan: "PREMIUM",
    date: "22/02/2026",
    time: "07:15",
    timestamp: new Date("2026-02-22T07:15:00"),
  },
  {
    id: "15",
    studentName: "João Silva",
    studentAvatar: imgJoaoSilva,
    financialStatus: "Em atraso",
    plan: "BASIC",
    date: "22/02/2026",
    time: "06:45",
    timestamp: new Date("2026-02-22T06:45:00"),
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
          CHECK-INS
        </h1>
        <p
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 14,
            color: "#606060",
          }}
        >
          HISTÓRICO E CONTROLE DE FREQUÊNCIA
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

// ─── Metric Cards ─────────────────────────────────────────────────────────────

function MetricCard({
  icon: Icon,
  label,
  value,
  description,
  color,
  index,
}: {
  icon: any;
  label: string;
  value: string;
  description: string;
  color: string;
  index: number;
}) {
  const colorConfig: Record<string, { bg: string; border: string; icon: string }> = {
    red: {
      bg: "rgba(232, 39, 26, 0.1)",
      border: "rgba(232, 39, 26, 0.2)",
      icon: "#E8271A",
    },
    green: {
      bg: "rgba(74, 222, 128, 0.1)",
      border: "rgba(74, 222, 128, 0.2)",
      icon: "#4ADE80",
    },
    purple: {
      bg: "rgba(139, 92, 246, 0.1)",
      border: "rgba(139, 92, 246, 0.2)",
      icon: "#8B5CF6",
    },
    yellow: {
      bg: "rgba(250, 204, 21, 0.1)",
      border: "rgba(250, 204, 21, 0.2)",
      icon: "#FACC15",
    },
  };

  const config = colorConfig[color];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className="bg-[#0D0D0D] border border-[#303030] rounded-2xl p-6 flex flex-col"
    >
      <div className="flex items-center justify-between mb-4">
        <div
          className="rounded-xl flex items-center justify-center"
          style={{
            width: 42,
            height: 42,
            background: config.bg,
            border: `1px solid ${config.border}`,
          }}
        >
          <Icon size={20} color={config.icon} strokeWidth={1.75} />
        </div>
        <p
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 12,
            letterSpacing: "0.6px",
            color: "#606060",
          }}
        >
          {label}
        </p>
      </div>

      <h3
        style={{
          fontFamily: "'Barlow Condensed', sans-serif",
          fontWeight: 700,
          fontSize: 36,
          lineHeight: "40px",
          color: "#F2F2F2",
          marginBottom: 4,
        }}
      >
        {value}
      </h3>

      <p
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: 14,
          lineHeight: "20px",
          color: "#A8A8A8",
        }}
      >
        {description}
      </p>
    </motion.div>
  );
}

// ─── Check-in List ────────────────────────────────────────────────────────────

function CheckInItem({ checkIn, index }: { checkIn: CheckIn; index: number }) {
  const statusColors = {
    "Em dia": "#4ADE80",
    Vencendo: "#FACC15",
    "Em atraso": "#E8271A",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.02 }}
      className="bg-[#1A1A1A] border border-[#303030] rounded-lg p-4 flex items-center justify-between hover:border-[#E8400A] transition-colors cursor-pointer"
    >
      <div className="flex items-center gap-4 flex-1">
        <img
          src={checkIn.studentAvatar}
          alt={checkIn.studentName}
          className="w-12 h-12 rounded-full object-cover"
          style={{ border: "2px solid rgba(232, 39, 26, 0.2)" }}
        />

        <div className="flex-1">
          <h4
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 16,
              fontWeight: 500,
              color: "#F2F2F2",
              marginBottom: 4,
            }}
          >
            {checkIn.studentName}
          </h4>

          <div className="flex items-center gap-2 text-xs">
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                color: statusColors[checkIn.financialStatus],
              }}
            >
              {checkIn.financialStatus}
            </span>
            <span style={{ color: "#606060" }}>•</span>
            <span
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 12,
                letterSpacing: "0.05em",
                color: "#606060",
              }}
            >
              {checkIn.plan}
            </span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <Calendar size={16} color="#606060" />
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 14,
              color: "#A8A8A8",
            }}
          >
            {checkIn.date}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Clock size={16} color="#606060" />
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 14,
              color: "#A8A8A8",
            }}
          >
            {checkIn.time}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export function CheckIns() {
  const [searchTerm, setSearchTerm] = useState("");
  const [periodFilter, setPeriodFilter] = useState<"Hoje" | "Semana" | "Mês">("Hoje");

  const filteredCheckIns = mockCheckIns.filter((checkIn) =>
    checkIn.studentName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <AdminLayout>
      <Header />

      <main className="flex-1 p-8 lg:pl-8 lg:pr-8">
        <div className="max-w-[1400px]">
          {/* Metric Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <MetricCard
              icon={TrendingUp}
              label="HOJE"
              value="15"
              description="Check-ins hoje"
              color="red"
              index={0}
            />
            <MetricCard
              icon={Calendar}
              label="SEMANA"
              value="20"
              description="Esta semana"
              color="green"
              index={1}
            />
            <MetricCard
              icon={UsersIcon}
              label="MÊS"
              value="20"
              description="Este mês"
              color="purple"
              index={2}
            />
            <MetricCard
              icon={Zap}
              label="PICO"
              value="18:00-19:00"
              description="Horário de pico"
              color="yellow"
              index={3}
            />
          </div>

          {/* History Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-[#0D0D0D] border border-[#303030] rounded-2xl p-6"
          >
            {/* Section Header */}
            <div className="flex items-center justify-between mb-6">
              <h2
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 700,
                  fontSize: 20,
                  letterSpacing: "-0.025em",
                  color: "#F2F2F2",
                }}
              >
                HISTÓRICO DE CHECK-INS
              </h2>

              <div className="flex items-center gap-3">
                <button className="bg-[#E8271A] rounded-lg px-4 py-2 flex items-center gap-2">
                  <Download size={16} color="#FFFFFF" />
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
                    Baixar Relatório
                  </span>
                </button>

                {/* Period Filters */}
                {(["Hoje", "Semana", "Mês"] as const).map((period) => (
                  <button
                    key={period}
                    onClick={() => setPeriodFilter(period)}
                    className="rounded-lg px-4 py-2 border transition-colors"
                    style={{
                      background: periodFilter === period ? "#E8271A" : "#1A1A1A",
                      borderColor: periodFilter === period ? "#E8271A" : "#303030",
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 14,
                      fontWeight: 500,
                      color: periodFilter === period ? "#FFFFFF" : "#A8A8A8",
                    }}
                  >
                    {period}
                  </button>
                ))}
              </div>
            </div>

            {/* Search Bar */}
            <div className="relative mb-6">
              <Search size={20} color="#606060" className="absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Buscar por nome do aluno..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-[#1A1A1A] border border-[#303030] rounded-lg pl-12 pr-4 py-3 text-sm text-[#F2F2F2] placeholder:text-[#606060] outline-none focus:border-[#E8400A] transition-colors"
                style={{ fontFamily: "'Inter', sans-serif" }}
              />
            </div>

            {/* Check-in List */}
            <div className="flex flex-col gap-3">
              {filteredCheckIns.map((checkIn, index) => (
                <CheckInItem key={checkIn.id} checkIn={checkIn} index={index} />
              ))}
            </div>
          </motion.div>
        </div>
      </main>
    </AdminLayout>
  );
}
