import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Users,
  UserX,
  ClipboardCheck,
  TrendingUp,
  AlertCircle,
  UserPlus,
  Calendar,
  ChevronRight,
  UserCog,
  LogOut,
  Settings,
  LayoutDashboard,
  Clipboard,
  MonitorPlay,
  ChevronDown,
  Menu,
  X,
  Sun,
} from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useNavigate } from "react-router";
import imgForgeeLogo from "../../imports/Dashboard-2/234239702fd000ad91d5040296534366f62ba051.png";
import imgMariaSantos from "../../imports/Dashboard-2/c370e1db29c9956574be3ed78df1b2c14bcdb239.png";
import imgJoaoSilva from "../../imports/Dashboard-2/81e581e8bdbf8c9f2fa02e4c20dce774b1a1bb76.png";
import imgAnaCosta from "../../imports/Dashboard-2/e243fca66b972890241de9a6542eedb4acdb0d0f.png";
import imgPedroAlves from "../../imports/Dashboard-2/4631e0b3856fc2d697783d063af0506770940150.png";
import imgCarlaSouza from "../../imports/Dashboard-2/a8d9836506bb678008af0be8a848b247e3386b00.png";

// ─── Mock Data ────────────────────────────────────────────────────────────────
const monthlyGrowth = [
  { month: "Abr 25", members: 172 },
  { month: "Mai 25", members: 189 },
  { month: "Jun 25", members: 201 },
  { month: "Jul 25", members: 215 },
  { month: "Ago 25", members: 242 },
  { month: "Set 25", members: 268 },
  { month: "Out 25", members: 291 },
  { month: "Nov 25", members: 312 },
  { month: "Dez 25", members: 345 },
  { month: "Jan 26", members: 448 },
  { month: "Fev 26", members: 500 },
];

const recentMembers = [
  {
    id: 1,
    name: "Maria Santos",
    plan: "PREMIUM",
    time: "1 hora atrás",
    status: "Em dia",
    statusColor: "#4ADE80",
    avatar: imgMariaSantos,
  },
  {
    id: 2,
    name: "João Silva",
    plan: "BASIC",
    time: "3 horas atrás",
    status: "Vencendo",
    statusColor: "#FACC15",
    avatar: imgJoaoSilva,
  },
  {
    id: 3,
    name: "Ana Costa",
    plan: "ELITE",
    time: "2 dias atrás",
    status: "Em atraso",
    statusColor: "#EF4444",
    avatar: imgAnaCosta,
  },
  {
    id: 4,
    name: "Pedro Alves",
    plan: "PREMIUM",
    time: "5 horas atrás",
    status: "Em dia",
    statusColor: "#4ADE80",
    avatar: imgPedroAlves,
  },
  {
    id: 5,
    name: "Carla Souza",
    plan: "BASIC",
    time: "1 dia atrás",
    status: "Em dia",
    statusColor: "#4ADE80",
    avatar: imgCarlaSouza,
  },
];

const touristMembers = [
  { id: 1, name: "Lucas Martins", plan: "PREMIUM", days: 12 },
  { id: 2, name: "Fernanda Lima", plan: "BASIC", days: 14 },
  { id: 3, name: "Roberto Carlos", plan: "ELITE", days: 16 },
];

// ─── Helpers ─────────────────────────────────────────────────────────────────
function getPlanColor(plan: string) {
  if (plan === "PREMIUM") return "#E8400A";
  if (plan === "ELITE") return "#FFD700";
  return "#6B6B6B";
}

function getPlanBg(plan: string) {
  if (plan === "PREMIUM") return "rgba(232,64,10,0.12)";
  if (plan === "ELITE") return "rgba(255,215,0,0.12)";
  return "rgba(107,107,107,0.12)";
}

// ─── Metric Card ─────────────────────────────────────────────────────────────
function MetricCard({
  label,
  value,
  description,
  icon: Icon,
  iconColor,
  iconBg,
  iconBorder,
  delay = 0,
}: {
  label: string;
  value: string | number;
  description: string;
  icon: React.ElementType;
  iconColor: string;
  iconBg: string;
  iconBorder: string;
  delay?: number;
}) {
  return (
    <motion.div
      className="relative rounded-2xl p-6 overflow-hidden"
      style={{
        background: "#0D0D0D",
        border: "0.833px solid #303030",
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.4 }}
    >
      {/* Icon + Label */}
      <div className="flex items-center justify-between mb-5">
        <div
          className="flex items-center justify-center rounded-xl"
          style={{
            width: 38,
            height: 38,
            background: iconBg,
            border: `0.833px solid ${iconBorder}`,
          }}
        >
          <Icon size={18} color={iconColor} strokeWidth={1.75} />
        </div>
        <span
          style={{
            fontFamily: "'Inter', monospace",
            fontSize: 11,
            letterSpacing: "0.6px",
            textTransform: "uppercase",
            color: "#606060",
          }}
        >
          {label}
        </span>
      </div>

      {/* Value */}
      <p
        style={{
          fontFamily: "'Oswald', sans-serif",
          fontWeight: 700,
          fontSize: 42,
          letterSpacing: "-1.5px",
          color: "#F2F2F2",
          lineHeight: 1,
          marginBottom: 8,
        }}
      >
        {value}
      </p>

      {/* Description */}
      <p
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: 13,
          color: "#A8A8A8",
        }}
      >
        {description}
      </p>
    </motion.div>
  );
}

// ─── Custom Tooltip ───────────────────────────────────────────────────────────
function CustomTooltip({ active, payload, label }: any) {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          background: "#1A1A1A",
          border: "1px solid #303030",
          borderRadius: 8,
          padding: "10px 14px",
        }}
      >
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 11,
            color: "#606060",
            marginBottom: 4,
          }}
        >
          {label}
        </p>
        <p
          style={{
            fontFamily: "'Oswald', sans-serif",
            fontWeight: 700,
            fontSize: 22,
            color: "#E8400A",
            letterSpacing: "-0.5px",
          }}
        >
          {payload[0].value}
        </p>
      </div>
    );
  }
  return null;
}

// ─── Main Component ───────────────────────────────────────────────────────────
export function Dashboard() {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [metrics, setMetrics] = useState({
    active: 0,
    inactive: 0,
    checkins: 0,
    frequency: 0,
    ghosts: 0,
    newMembers: 0,
  });

  const targets = {
    active: 248,
    inactive: 20,
    checkins: 87,
    frequency: 3.4,
    ghosts: 15,
    newMembers: 23,
  };

  useEffect(() => {
    const duration = 1400;
    const steps = 60;
    const interval = setInterval(() => {
      setMetrics((prev) => {
        const progress = Math.min(
          (prev.active / targets.active + 1 / steps),
          1
        );
        if (prev.active >= targets.active) {
          clearInterval(interval);
          return targets;
        }
        return {
          active: Math.min(Math.floor(targets.active * progress), targets.active),
          inactive: Math.min(Math.floor(targets.inactive * progress), targets.inactive),
          checkins: Math.min(Math.floor(targets.checkins * progress), targets.checkins),
          frequency: Math.min(
            parseFloat((targets.frequency * progress).toFixed(1)),
            targets.frequency
          ),
          ghosts: Math.min(Math.floor(targets.ghosts * progress), targets.ghosts),
          newMembers: Math.min(Math.floor(targets.newMembers * progress), targets.newMembers),
        };
      });
    }, duration / steps);
    return () => clearInterval(interval);
  }, []);

  const navItems = [
    { icon: LayoutDashboard, label: "Dashboard", active: true, path: "/dashboard" },
    { icon: Users, label: "Alunos", active: false, path: "/alunos" },
    { icon: Clipboard, label: "Check-ins", active: false },
    { icon: MonitorPlay, label: "Modo Recepção", active: false },
    { icon: Settings, label: "Configurações", active: false },
  ];

  const SidebarContent = () => (
    <>
      {/* Logo */}
      <div className="px-5 py-5 border-b" style={{ borderColor: "#1E1E1E" }}>
        <div className="flex items-center gap-3">
          <img src={imgForgeeLogo} alt="FORGEE" className="w-8 h-8 object-contain" />
          <div>
            <h1
              style={{
                fontFamily: "'Oswald', sans-serif",
                fontWeight: 700,
                fontSize: 16,
                letterSpacing: "-0.4px",
                color: "#FFFFFF",
                textTransform: "uppercase",
              }}
            >
              FORGEE
            </h1>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 10,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#606060",
              }}
            >
              Admin Panel
            </p>
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 p-3 space-y-0.5">
        {navItems.map((item, i) => (
          <motion.button
            key={item.label}
            onClick={() => item.path && navigate(item.path)}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-left"
            style={{
              background: item.active ? "#E8400A" : "transparent",
              color: item.active ? "#FFFFFF" : "#6B6B6B",
            }}
            whileHover={!item.active ? { backgroundColor: "#1A1A1A", color: "#FFFFFF" } : {}}
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.06 }}
          >
            <item.icon size={17} strokeWidth={1.75} />
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 13,
                fontWeight: item.active ? 600 : 500,
              }}
            >
              {item.label}
            </span>
          </motion.button>
        ))}
      </nav>

      {/* User + Logout */}
      <div className="p-3 border-t" style={{ borderColor: "#1E1E1E" }}>
        <div className="flex items-center gap-3 px-4 py-3 mb-1">
          <div
            className="flex items-center justify-center rounded-full flex-shrink-0"
            style={{ width: 36, height: 36, background: "#E8400A" }}
          >
            <UserCog size={16} color="#FFFFFF" />
          </div>
          <div>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 13,
                fontWeight: 600,
                color: "#FFFFFF",
              }}
            >
              Admin FORGEE
            </p>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 10,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#606060",
              }}
            >
              Gestor
            </p>
          </div>
        </div>
        <button
          className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg transition-colors"
          style={{ color: "#6B6B6B" }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.color = "#FFFFFF";
            (e.currentTarget as HTMLElement).style.background = "#1A1A1A";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.color = "#6B6B6B";
            (e.currentTarget as HTMLElement).style.background = "transparent";
          }}
          onClick={() => (window.location.href = "/")}
        >
          <LogOut size={16} strokeWidth={1.75} />
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 13,
              fontWeight: 500,
            }}
          >
            Sair
          </span>
        </button>
      </div>
    </>
  );

  return (
    <div className="min-h-screen flex" style={{ background: "#0A0A0A" }}>
      {/* ── Desktop Sidebar ─────────────────────────────────────── */}
      <aside
        className="hidden lg:flex flex-col flex-shrink-0"
        style={{ width: 232, background: "#111111", borderRight: "1px solid #1E1E1E" }}
      >
        <SidebarContent />
      </aside>

      {/* ── Mobile Sidebar ──────────────────────────────────────── */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-40 lg:hidden"
              style={{ background: "rgba(0,0,0,0.6)" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.aside
              className="fixed left-0 top-0 bottom-0 z-50 flex flex-col lg:hidden"
              style={{ width: 232, background: "#111111", borderRight: "1px solid #1E1E1E" }}
              initial={{ x: -232 }}
              animate={{ x: 0 }}
              exit={{ x: -232 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
            >
              <div className="flex items-center justify-end p-4 border-b" style={{ borderColor: "#1E1E1E" }}>
                <button onClick={() => setMobileMenuOpen(false)} style={{ color: "#6B6B6B" }}>
                  <X size={20} />
                </button>
              </div>
              <SidebarContent />
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* ── Main ────────────────────────────────────────────────── */}
      <div className="flex-1 flex flex-col overflow-auto min-w-0">

        {/* Header */}
        <header
          className="flex-shrink-0 px-6 md:px-8 pt-5 pb-4"
          style={{ background: "#111111", borderBottom: "1px solid #1E1E1E" }}
        >
          {/* Top row */}
          <div className="flex items-start justify-between gap-4 mb-4">
            <div className="flex items-center gap-3">
              <button
                className="lg:hidden p-2 rounded-lg"
                style={{ background: "#1A1A1A" }}
                onClick={() => setMobileMenuOpen(true)}
              >
                <Menu size={18} color="#B0B0B0" />
              </button>
              <div>
                <h1
                  style={{
                    fontFamily: "'Oswald', sans-serif",
                    fontWeight: 700,
                    fontSize: "clamp(22px,4vw,28px)",
                    letterSpacing: "-0.5px",
                    color: "#FFFFFF",
                    textTransform: "uppercase",
                    lineHeight: 1.1,
                  }}
                >
                  Dashboard
                </h1>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 11,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    color: "#606060",
                  }}
                >
                  Visão Geral — Domingo, 22 Fev 2026
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <button
                className="hidden md:flex items-center justify-center rounded-xl transition-colors"
                style={{ width: 38, height: 38, background: "#1A1A1A", border: "0.833px solid #303030" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "#606060")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.borderColor = "#303030")}
              >
                <Sun size={16} color="#A8A8A8" />
              </button>

              <button
                className="hidden md:flex items-center gap-2 px-4 py-2 rounded-xl transition-colors"
                style={{
                  background: "transparent",
                  border: "0.833px solid #303030",
                  color: "#A8A8A8",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 12,
                  fontWeight: 500,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "#606060";
                  (e.currentTarget as HTMLElement).style.color = "#FFFFFF";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "#303030";
                  (e.currentTarget as HTMLElement).style.color = "#A8A8A8";
                }}
                onClick={() => navigate("/novo-aluno")}
              >
                <UserPlus size={14} />
                Novo Aluno
              </button>

              <button
                className="flex items-center gap-2 px-4 py-2 rounded-xl transition-colors"
                style={{
                  background: "#E8400A",
                  color: "#FFFFFF",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 12,
                  fontWeight: 600,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#FF4D0D")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "#E8400A")}
              >
                <MonitorPlay size={14} />
                <span className="hidden sm:inline">Ativar Recepção</span>
                <span className="sm:hidden">Recepção</span>
              </button>
            </div>
          </div>

          {/* Filter row */}
          <div className="flex items-center gap-2">
            <div
              className="flex items-center gap-2 px-3 py-2 rounded-xl"
              style={{ background: "#1A1A1A", border: "0.833px solid #303030" }}
            >
              <Calendar size={14} color="#606060" />
              <select
                className="bg-transparent border-none focus:outline-none cursor-pointer"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 13,
                  color: "#A8A8A8",
                }}
              >
                <option>Mês</option>
                <option>Semana</option>
                <option>Hoje</option>
              </select>
              <ChevronDown size={14} color="#A8A8A8" />
            </div>

            <div
              className="flex items-center gap-2 px-3 py-2 rounded-xl"
              style={{ background: "#1A1A1A", border: "0.833px solid #303030" }}
            >
              <select
                className="bg-transparent border-none focus:outline-none cursor-pointer"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 13,
                  color: "#A8A8A8",
                }}
              >
                <option>Ativos</option>
                <option>Todos</option>
                <option>Inativos</option>
              </select>
              <ChevronDown size={14} color="#A8A8A8" />
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 p-4 md:p-6 space-y-4 md:space-y-5">

          {/* ── Row 1: 4 Metric Cards ───────────────────────────── */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
            <MetricCard
              label="Ativos"
              value={metrics.active}
              description="Alunos ativos"
              icon={Users}
              iconColor="#4ADE80"
              iconBg="rgba(74,222,128,0.1)"
              iconBorder="rgba(74,222,128,0.2)"
              delay={0.05}
            />
            <MetricCard
              label="Inativos"
              value={metrics.inactive}
              description="12 pausados, 8 cancelados"
              icon={UserX}
              iconColor="#FACC15"
              iconBg="rgba(250,204,21,0.1)"
              iconBorder="rgba(250,204,21,0.2)"
              delay={0.1}
            />
            <MetricCard
              label="Hoje"
              value={metrics.checkins}
              description="Check-ins hoje"
              icon={ClipboardCheck}
              iconColor="#E8271A"
              iconBg="rgba(232,39,26,0.1)"
              iconBorder="rgba(232,39,26,0.2)"
              delay={0.15}
            />
            <MetricCard
              label="Frequência"
              value={
                <span>
                  {metrics.frequency}
                  <span
                    style={{
                      fontSize: 18,
                      color: "#606060",
                      fontWeight: 400,
                      marginLeft: 4,
                    }}
                  >
                    x/sem
                  </span>
                </span>
              }
              description="Média semanal"
              icon={TrendingUp}
              iconColor="#8B5CF6"
              iconBg="rgba(139,92,246,0.1)"
              iconBorder="rgba(139,92,246,0.2)"
              delay={0.2}
            />
          </div>

          {/* ── Row 2: Alert Cards ──────────────────────────────── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
            {/* Ghost Members */}
            <motion.div
              className="relative rounded-2xl p-6 overflow-hidden"
              style={{
                background: "linear-gradient(134deg, rgba(232,39,26,0.2) 0%, rgba(232,39,26,0.05) 100%)",
                border: "0.833px solid rgba(232,39,26,0.3)",
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
            >
              <div className="flex items-center justify-between mb-5">
                <div
                  className="flex items-center justify-center rounded-xl"
                  style={{
                    width: 38,
                    height: 38,
                    background: "#E8271A",
                  }}
                >
                  <AlertCircle size={18} color="#FFFFFF" strokeWidth={1.75} />
                </div>
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 18,
                  }}
                >
                  🕶️
                </span>
              </div>
              <p
                style={{
                  fontFamily: "'Oswald', sans-serif",
                  fontWeight: 700,
                  fontSize: 42,
                  letterSpacing: "-1.5px",
                  color: "#F2F2F2",
                  lineHeight: 1,
                  marginBottom: 8,
                }}
              >
                {metrics.ghosts}
              </p>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 13,
                  color: "#D9D9D9",
                  opacity: 0.85,
                }}
              >
                Turistas 10+ dias sem check-in
              </p>
            </motion.div>

            {/* New Members */}
            <motion.div
              className="relative rounded-2xl p-6 overflow-hidden"
              style={{
                background: "#0D0D0D",
                border: "0.833px solid #303030",
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="flex items-center justify-between mb-5">
                <div
                  className="flex items-center justify-center rounded-xl"
                  style={{
                    width: 38,
                    height: 38,
                    background: "rgba(6,182,212,0.1)",
                    border: "0.833px solid rgba(6,182,212,0.2)",
                  }}
                >
                  <UserPlus size={18} color="#06B6D4" strokeWidth={1.75} />
                </div>
                <span
                  style={{
                    fontFamily: "'Inter', monospace",
                    fontSize: 11,
                    letterSpacing: "0.6px",
                    textTransform: "uppercase",
                    color: "#606060",
                  }}
                >
                  Novos
                </span>
              </div>
              <p
                style={{
                  fontFamily: "'Oswald', sans-serif",
                  fontWeight: 700,
                  fontSize: 42,
                  letterSpacing: "-1.5px",
                  color: "#F2F2F2",
                  lineHeight: 1,
                  marginBottom: 8,
                }}
              >
                {metrics.newMembers}
              </p>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 13,
                  color: "#A8A8A8",
                }}
              >
                Novos este mês
              </p>
            </motion.div>
          </div>

          {/* ── Chart ───────────────────────────────────────────── */}
          <motion.div
            className="rounded-2xl overflow-hidden"
            style={{ background: "#0D0D0D", border: "0.833px solid #303030" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
          >
            {/* Chart Header */}
            <div className="flex items-start justify-between px-6 pt-6 pb-2">
              <div>
                <h2
                  style={{
                    fontFamily: "'Oswald', sans-serif",
                    fontWeight: 700,
                    fontSize: 26,
                    letterSpacing: "-0.75px",
                    color: "#F2F2F2",
                    lineHeight: 1,
                  }}
                >
                  +328 MEMBROS
                </h2>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 13,
                    color: "#A8A8A8",
                    marginTop: 4,
                  }}
                >
                  Crescimento nos últimos 12 meses
                </p>
              </div>
              <div
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl"
                style={{ background: "rgba(34,197,94,0.1)" }}
              >
                <TrendingUp size={14} color="#22C55E" />
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 13,
                    fontWeight: 500,
                    color: "#22C55E",
                  }}
                >
                  +24%
                </span>
              </div>
            </div>

            {/* Chart */}
            <div className="px-2 pt-2 pb-0" style={{ height: 240 }}>
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={monthlyGrowth} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorMembers" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#E8400A" stopOpacity={0.35} />
                      <stop offset="95%" stopColor="#E8400A" stopOpacity={0.03} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="#303030"
                    vertical={false}
                  />
                  <XAxis
                    dataKey="month"
                    tick={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fill: "#606060" }}
                    axisLine={false}
                    tickLine={false}
                    dy={8}
                  />
                  <YAxis
                    tick={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fill: "#606060" }}
                    axisLine={false}
                    tickLine={false}
                    dx={-4}
                  />
                  <Tooltip content={<CustomTooltip />} cursor={{ stroke: "#303030", strokeWidth: 1 }} />
                  <Area
                    type="monotone"
                    dataKey="members"
                    stroke="#E8400A"
                    strokeWidth={2}
                    fill="url(#colorMembers)"
                    dot={{ fill: "#E8400A", r: 3, strokeWidth: 0 }}
                    activeDot={{ fill: "#E8400A", r: 5, strokeWidth: 2, stroke: "#0D0D0D" }}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            {/* Chart Footer */}
            <div
              className="flex items-center justify-between px-6 py-4 mt-2"
              style={{ borderTop: "0.833px solid #303030" }}
            >
              <button
                className="flex items-center gap-1.5 transition-colors"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 13,
                  fontWeight: 500,
                  color: "#A8A8A8",
                }}
              >
                Últimos 12 meses
                <ChevronDown size={14} />
              </button>
              <button
                className="flex items-center gap-1.5 transition-colors"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 13,
                  fontWeight: 500,
                  color: "#E8400A",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#FF4D0D")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#E8400A")}
              >
                Ver todos os membros
                <ChevronRight size={14} />
              </button>
            </div>
          </motion.div>

          {/* ── Bottom Row ──────────────────────────────────────── */}
          <div className="grid grid-cols-1 xl:grid-cols-[1fr_320px] gap-3 md:gap-4">

            {/* Recent Students */}
            <motion.div
              className="rounded-2xl overflow-hidden"
              style={{ background: "#0D0D0D", border: "0.833px solid #303030" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {/* Header */}
              <div
                className="flex items-center justify-between px-6 py-5"
                style={{ borderBottom: "0.833px solid #1E1E1E" }}
              >
                <h3
                  style={{
                    fontFamily: "'Oswald', sans-serif",
                    fontWeight: 700,
                    fontSize: 18,
                    letterSpacing: "-0.5px",
                    color: "#F2F2F2",
                    textTransform: "uppercase",
                  }}
                >
                  Alunos Recentes
                </h3>
                <button
                  className="flex items-center gap-1 transition-colors"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 13,
                    fontWeight: 500,
                    color: "#606060",
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#A8A8A8")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#606060")}
                >
                  Ver todos
                  <ChevronRight size={14} />
                </button>
              </div>

              {/* List */}
              <div>
                {recentMembers.map((member, i) => (
                  <motion.div
                    key={member.id}
                    className="flex items-center justify-between px-4 md:px-6 py-3.5 transition-colors cursor-pointer"
                    style={{
                      background: "transparent",
                      borderBottom: i < recentMembers.length - 1 ? "0.833px solid #1A1A1A" : "none",
                    }}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.45 + i * 0.06 }}
                    whileHover={{ backgroundColor: "#141414" }}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      {/* Avatar */}
                      <div className="relative flex-shrink-0">
                        <img
                          src={member.avatar}
                          alt={member.name}
                          className="rounded-full object-cover"
                          style={{
                            width: 44,
                            height: 44,
                            border: "1.5px solid rgba(232,64,10,0.2)",
                          }}
                        />
                      </div>
                      {/* Info */}
                      <div className="min-w-0">
                        <p
                          style={{
                            fontFamily: "'Inter', sans-serif",
                            fontSize: 15,
                            fontWeight: 500,
                            color: "#F2F2F2",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                          }}
                        >
                          {member.name}
                        </p>
                        <div className="flex items-center gap-2 mt-0.5">
                          <span
                            style={{
                              fontFamily: "'Inter', monospace",
                              fontSize: 12,
                              color: member.statusColor,
                            }}
                          >
                            {member.status}
                          </span>
                          <span style={{ color: "#303030", fontSize: 10 }}>•</span>
                          <span
                            style={{
                              fontFamily: "'Inter', sans-serif",
                              fontSize: 12,
                              color: "#606060",
                            }}
                          >
                            {member.time}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 flex-shrink-0">
                      <span
                        style={{
                          fontFamily: "'Inter', monospace",
                          fontSize: 11,
                          letterSpacing: "0.6px",
                          color: getPlanColor(member.plan),
                          background: getPlanBg(member.plan),
                          padding: "3px 8px",
                          borderRadius: 4,
                        }}
                      >
                        {member.plan}
                      </span>
                      <ChevronRight size={15} color="#3A3A3A" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Tourists Panel */}
            <motion.div
              className="rounded-2xl overflow-hidden flex flex-col"
              style={{
                background: "linear-gradient(160deg, rgba(232,39,26,0.08) 0%, #0D0D0D 50%)",
                border: "0.833px solid rgba(232,39,26,0.2)",
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
            >
              {/* Header */}
              <div
                className="flex items-center gap-2 px-5 py-5"
                style={{ borderBottom: "0.833px solid rgba(232,39,26,0.15)" }}
              >
                <div
                  className="flex items-center justify-center rounded-xl"
                  style={{
                    width: 34,
                    height: 34,
                    background: "#E8271A",
                  }}
                >
                  <AlertCircle size={16} color="#FFFFFF" strokeWidth={1.75} />
                </div>
                <div>
                  <h3
                    style={{
                      fontFamily: "'Oswald', sans-serif",
                      fontWeight: 700,
                      fontSize: 16,
                      letterSpacing: "-0.4px",
                      color: "#F2F2F2",
                      textTransform: "uppercase",
                    }}
                  >
                    Turistas 🕶️
                  </h3>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 11,
                      color: "#A8A8A8",
                    }}
                  >
                    Sem check-in há 10+ dias
                  </p>
                </div>
              </div>

              {/* Tourist list */}
              <div className="flex-1 p-3 space-y-1.5">
                {touristMembers.map((t, i) => (
                  <motion.div
                    key={t.id}
                    className="flex items-center justify-between px-4 py-3 rounded-xl transition-colors cursor-pointer"
                    style={{ background: "rgba(255,255,255,0.03)" }}
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + i * 0.07 }}
                    whileHover={{ backgroundColor: "rgba(255,255,255,0.06)" }}
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-0.5">
                        <p
                          style={{
                            fontFamily: "'Inter', sans-serif",
                            fontSize: 14,
                            fontWeight: 500,
                            color: "#F2F2F2",
                          }}
                        >
                          {t.name}
                        </p>
                        <span
                          style={{
                            fontFamily: "'Inter', monospace",
                            fontSize: 10,
                            letterSpacing: "0.5px",
                            color: getPlanColor(t.plan),
                            background: getPlanBg(t.plan),
                            padding: "2px 6px",
                            borderRadius: 3,
                          }}
                        >
                          {t.plan}
                        </span>
                      </div>
                      <p
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: 12,
                          color: "#606060",
                        }}
                      >
                        Último check-in: {t.days} dias
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Footer */}
              <div className="px-5 py-4" style={{ borderTop: "0.833px solid rgba(232,39,26,0.15)" }}>
                <button
                  className="w-full flex items-center justify-center gap-1.5 transition-colors"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 13,
                    fontWeight: 500,
                    color: "#E8400A",
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#FF4D0D")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#E8400A")}
                >
                  Ver todos os {metrics.ghosts} turistas
                  <ChevronRight size={14} />
                </button>
              </div>
            </motion.div>
          </div>
        </main>
      </div>
    </div>
  );
}