import { useState, ReactNode } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Users,
  LayoutDashboard,
  Clipboard,
  MonitorPlay,
  Settings,
  UserCog,
  LogOut,
  Menu,
  X,
} from "lucide-react";
import { useNavigate, useLocation } from "react-router";
import imgForgeeLogo from "../../imports/Dashboard-2/234239702fd000ad91d5040296534366f62ba051.png";

interface AdminLayoutProps {
  children: ReactNode;
}

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/dashboard" },
  { icon: Users, label: "Alunos", path: "/alunos" },
  { icon: Clipboard, label: "Check-ins", path: "/check-ins" },
  { icon: MonitorPlay, label: "Modo Recepção", path: "/modo-recepcao" },
];

function SidebarContent({
  onNavClick,
}: {
  onNavClick?: () => void;
}) {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === "#") return false;
    // Mark Alunos as active for sub-pages like /novo-aluno
    if (path === "/alunos" && location.pathname.startsWith("/novo-aluno")) return true;
    return location.pathname === path;
  };

  return (
    <div className="flex flex-col h-full">
      {/* Logo */}
      <div className="px-5 py-5 border-b flex-shrink-0" style={{ borderColor: "#1E1E1E" }}>
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
      <nav className="flex-1 p-3 space-y-0.5 overflow-y-auto">
        {navItems.map((item, i) => {
          const active = isActive(item.path);
          return (
            <motion.button
              key={item.label}
              onClick={() => {
                if (item.path !== "#") navigate(item.path);
                onNavClick?.();
              }}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-left"
              style={{
                background: active ? "#E8400A" : "transparent",
                color: active ? "#FFFFFF" : "#6B6B6B",
              }}
              whileHover={!active ? { backgroundColor: "#1A1A1A", color: "#FFFFFF" } : {}}
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.06 }}
            >
              <item.icon size={17} strokeWidth={1.75} />
              <span
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 13,
                  fontWeight: active ? 600 : 500,
                }}
              >
                {item.label}
              </span>
            </motion.button>
          );
        })}

        {/* Configurações */}
        <div className="pt-2 mt-2 border-t" style={{ borderColor: "#1E1E1E" }}>
          <motion.button
            onClick={() => { navigate("/configuracoes"); onNavClick?.(); }}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-left"
            style={{
              background: location.pathname === "/configuracoes" ? "#E8400A" : "transparent",
              color: location.pathname === "/configuracoes" ? "#FFFFFF" : "#6B6B6B",
            }}
            whileHover={location.pathname !== "/configuracoes" ? { backgroundColor: "#1A1A1A", color: "#FFFFFF" } : {}}
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: navItems.length * 0.06 }}
          >
            <Settings size={17} strokeWidth={1.75} />
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 13,
                fontWeight: location.pathname === "/configuracoes" ? 600 : 500,
              }}
            >
              Configurações
            </span>
          </motion.button>
        </div>
      </nav>

      {/* User + Logout */}
      <div className="p-3 border-t flex-shrink-0" style={{ borderColor: "#1E1E1E" }}>
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
        <motion.button
          onClick={() => { navigate("/login-admin"); onNavClick?.(); }}
          className="w-full flex items-center gap-2 px-4 py-2 rounded-lg transition-colors text-left"
          style={{ color: "#6B6B6B" }}
          whileHover={{ backgroundColor: "#1A1A1A", color: "#FFFFFF" }}
        >
          <LogOut size={15} strokeWidth={1.75} />
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 12,
              fontWeight: 500,
            }}
          >
            Sair
          </span>
        </motion.button>
      </div>
    </div>
  );
}

export function AdminLayout({ children }: AdminLayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#090909]">

      {/* ── Desktop Sidebar (always visible on lg+) ── */}
      <aside
        className="hidden lg:flex flex-col flex-shrink-0"
        style={{
          width: 232,
          minHeight: "100vh",
          background: "#111111",
          borderRight: "1px solid #1E1E1E",
          position: "sticky",
          top: 0,
          height: "100vh",
        }}
      >
        <SidebarContent />
      </aside>

      {/* ── Mobile: hamburger button ── */}
      <button
        onClick={() => setMobileMenuOpen(true)}
        className="lg:hidden fixed top-4 left-4 z-50 flex items-center justify-center rounded-lg"
        style={{ width: 40, height: 40, background: "#1A1A1A", border: "1px solid #303030" }}
        aria-label="Abrir menu"
      >
        <Menu size={20} color="#F2F2F2" />
      </button>

      {/* ── Mobile Sidebar ── */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileMenuOpen(false)}
              className="lg:hidden fixed inset-0 bg-black/60 z-40"
            />

            {/* Drawer */}
            <motion.aside
              key="drawer"
              initial={{ x: -232 }}
              animate={{ x: 0 }}
              exit={{ x: -232 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="lg:hidden fixed left-0 top-0 bottom-0 z-50 flex flex-col"
              style={{
                width: 232,
                background: "#111111",
                borderRight: "1px solid #1E1E1E",
              }}
            >
              {/* Close button */}
              <div
                className="flex items-center justify-end p-3 flex-shrink-0"
                style={{ borderBottom: "1px solid #1E1E1E" }}
              >
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center rounded-lg"
                  style={{ width: 32, height: 32, background: "#1A1A1A", color: "#6B6B6B" }}
                >
                  <X size={16} />
                </button>
              </div>
              <SidebarContent onNavClick={() => setMobileMenuOpen(false)} />
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* ── Main Content ── */}
      <div className="flex-1 flex flex-col min-h-screen min-w-0">
        {children}
      </div>
    </div>
  );
}