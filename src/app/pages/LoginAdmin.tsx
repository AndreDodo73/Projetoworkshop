import { useState } from "react";
import { useNavigate } from "react-router";
import { Eye, EyeOff, Mail, Lock, ShieldCheck, ArrowLeft } from "lucide-react";
import svgPaths from "../../imports/LoginAdmin/svg-d45t8b3hdf";
import imgImageForgeeLogo from "../../imports/LoginAdmin/234239702fd000ad91d5040296534366f62ba051.png";

export function LoginAdmin() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-[#111111] flex flex-col">
      {/* Header */}
      <header className="w-full border-b border-[#1E1E1E] py-4 md:py-5">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-center">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-3 group"
            aria-label="Voltar para página inicial"
          >
            <div className="w-8 h-8 relative flex-shrink-0">
              <img
                src={imgImageForgeeLogo}
                alt="FORGEE Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <span
              style={{
                fontFamily: "'Oswald', sans-serif",
                fontWeight: 700,
                fontSize: "20px",
                letterSpacing: "-0.5px",
                color: "#FFFFFF",
                textTransform: "uppercase",
              }}
              className="group-hover:text-[#E8400A] transition-colors"
            >
              FORGEE
            </span>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-6 py-12 md:py-16">
        <div className="w-full max-w-md">
          {/* Icon & Title Section */}
          <div className="flex flex-col items-center mb-10 md:mb-12">
            {/* Shield Icon */}
            <div className="relative w-16 h-16 mb-6">
              <div className="absolute inset-0 bg-[rgba(232,64,10,0.1)] border border-[rgba(232,64,10,0.2)] rounded-3xl flex items-center justify-center">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                >
                  <path
                    d={svgPaths.pb057600}
                    stroke="#E8400A"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.67"
                  />
                </svg>
              </div>
            </div>

            {/* Title */}
            <h1
              style={{
                fontFamily: "'Oswald', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(36px, 8vw, 48px)",
                letterSpacing: "-1.2px",
                color: "#FFFFFF",
                textTransform: "uppercase",
                textAlign: "center",
                marginBottom: "16px",
              }}
            >
              PAINEL ADMIN
            </h1>

            {/* Subtitle */}
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 300,
                fontSize: "16px",
                lineHeight: "24px",
                color: "#A8A8A8",
                textAlign: "center",
              }}
            >
              Acesso restrito ao sistema de gestão{" "}
              <span style={{ color: "#E8400A", fontWeight: 400 }}>
                PulseGym
              </span>
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} noValidate className="space-y-6">
            {/* Email Field */}
            <div className="space-y-2">
              <label
                htmlFor="email"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 500,
                  fontSize: "12px",
                  letterSpacing: "1.2px",
                  textTransform: "uppercase",
                  color: "#A8A8A8",
                  display: "block",
                }}
              >
                E-mail Administrativo
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
                  <Mail className="w-5 h-5 text-[#606060]" />
                </div>
                <input
                  id="email"
                  type="text"
                  inputMode="email"
                  autoComplete="username"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@forgee.com"
                  className="w-full bg-[#0D0D0D] border border-[#303030] rounded-lg py-4 pl-14 pr-4 text-white placeholder:text-[#606060] focus:outline-none focus:border-[#E8400A] focus:ring-1 focus:ring-[#E8400A] transition-all"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "16px",
                  }}
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <label
                htmlFor="password"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 500,
                  fontSize: "12px",
                  letterSpacing: "1.2px",
                  textTransform: "uppercase",
                  color: "#A8A8A8",
                  display: "block",
                }}
              >
                Senha
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
                  <Lock className="w-5 h-5 text-[#606060]" />
                </div>
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-[#0D0D0D] border border-[#303030] rounded-lg py-4 pl-14 pr-14 text-white placeholder:text-[#606060] focus:outline-none focus:border-[#E8400A] focus:ring-1 focus:ring-[#E8400A] transition-all"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "16px",
                  }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#606060] hover:text-[#A8A8A8] transition-colors focus:outline-none focus:text-[#E8400A]"
                  aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#E8400A] hover:bg-[#FF4D0D] text-white rounded-lg py-4 flex items-center justify-center gap-3 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#E8400A] focus:ring-offset-2 focus:ring-offset-[#111111]"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
                fontSize: "14px",
                letterSpacing: "1.4px",
                textTransform: "uppercase",
              }}
            >
              <ShieldCheck className="w-4 h-4" />
              Acessar Painel
            </button>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 400,
                fontSize: "13px",
                lineHeight: "20px",
                color: "#A8A8A8",
                textAlign: "center",
              }}
            >
              Ambiente de estudo: clique em Acessar Painel. Não precisa de senha.
            </p>
          </form>

          {/* Footer */}
          <div className="mt-10 md:mt-12 space-y-4 text-center">
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 400,
                fontSize: "12px",
                letterSpacing: "0.6px",
                color: "#606060",
              }}
            >
              ACESSO EXCLUSIVO PARA ADMINISTRADORES
            </p>
            <button
              onClick={() => navigate("/")}
              className="inline-flex items-center gap-2 text-[#606060] hover:text-[#A8A8A8] transition-colors focus:outline-none focus:text-[#E8400A]"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
                fontSize: "14px",
              }}
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar para área do membro
            </button>
          </div>
        </div>
      </main>

      {/* Gradient Background Effect */}
      <div
        className="fixed bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: "linear-gradient(to top, rgba(232, 64, 10, 0.05), rgba(0, 0, 0, 0))",
        }}
        aria-hidden="true"
      />
    </div>
  );
}