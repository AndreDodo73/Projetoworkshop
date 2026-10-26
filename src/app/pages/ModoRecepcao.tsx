import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Search, Hash, Mail } from "lucide-react";
import { useNavigate } from "react-router";
import { QRCodeSVG } from "qrcode.react";
import imgForgeeLogo from "../../imports/ModoRecepcao/234239702fd000ad91d5040296534366f62ba051.png";

// ─── Password Modal Component ─────────────────────────────────────────────────

function PasswordModal({ onClose, onSuccess }: { onClose: () => void; onSuccess: () => void }) {
  const [pin, setPin] = useState(["", "", "", ""]);
  const [error, setError] = useState(false);

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) return;
    if (!/^\d*$/.test(value)) return;

    const newPin = [...pin];
    newPin[index] = value;
    setPin(newPin);
    setError(false);

    // Auto-focus next input
    if (value && index < 3) {
      const nextInput = document.getElementById(`pin-${index + 1}`);
      nextInput?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !pin[index] && index > 0) {
      const prevInput = document.getElementById(`pin-${index - 1}`);
      prevInput?.focus();
    }
  };

  const handleSubmit = () => {
    const enteredPin = pin.join("");
    if (enteredPin === "1234") {
      onSuccess();
    } else {
      setError(true);
      setPin(["", "", "", ""]);
      const firstInput = document.getElementById("pin-0");
      firstInput?.focus();
    }
  };

  useEffect(() => {
    const firstInput = document.getElementById("pin-0");
    firstInput?.focus();
  }, []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-[#0D0D0D] border border-[#303030] rounded-2xl p-8 max-w-md w-full mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <h2
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 700,
            fontSize: 24,
            letterSpacing: "-0.025em",
            color: "#F2F2F2",
            marginBottom: 8,
            textAlign: "center",
          }}
        >
          ACESSO RESTRITO
        </h2>
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 14,
            color: "#A8A8A8",
            marginBottom: 32,
            textAlign: "center",
          }}
        >
          Insira a senha para sair do modo recepção
        </p>

        {/* PIN Inputs */}
        <div className="flex gap-4 justify-center mb-6">
          {pin.map((digit, index) => (
            <input
              key={index}
              id={`pin-${index}`}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              className="w-16 h-16 text-center bg-[#1A1A1A] border border-[#303030] rounded-xl text-2xl font-bold text-[#F2F2F2] outline-none focus:border-[#E8400A] transition-colors"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
              }}
            />
          ))}
        </div>

        {error && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 14,
              color: "#E8271A",
              textAlign: "center",
              marginBottom: 24,
            }}
          >
            Senha incorreta. Tente novamente.
          </motion.p>
        )}

        {/* Buttons */}
        <div className="flex gap-3 mt-8">
          <button
            onClick={onClose}
            className="flex-1 bg-[#1A1A1A] border border-[#303030] rounded-xl px-6 py-3 transition-colors hover:border-[#606060]"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 14,
              fontWeight: 600,
              color: "#A8A8A8",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
            }}
          >
            Cancelar
          </button>
          <button
            onClick={handleSubmit}
            className="flex-1 bg-[#E8271A] rounded-xl px-6 py-3 transition-colors hover:bg-[#FF4D0D]"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 14,
              fontWeight: 600,
              color: "#FFFFFF",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
            }}
          >
            Confirmar
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export function ModoRecepcao() {
  const navigate = useNavigate();
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [inputMode, setInputMode] = useState<"codigo" | "email">("codigo");
  const [inputValue, setInputValue] = useState("");

  const handleClose = () => {
    setShowPasswordModal(true);
  };

  const handlePasswordSuccess = () => {
    setShowPasswordModal(false);
    navigate("/dashboard");
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ background: "#090909" }}
    >
      {/* Header */}
      <header
        className="h-[52px] border-b flex items-center justify-between px-4"
        style={{
          background: "rgba(13, 13, 13, 0.5)",
          borderColor: "#000000",
        }}
      >
        <div className="flex items-center gap-3">
          <img
            src={imgForgeeLogo}
            alt="FORGEE"
            className="w-6 h-6 object-contain"
            style={{ opacity: 0.9 }}
          />
          <h1
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 700,
              fontSize: 20,
              letterSpacing: "-0.5px",
              color: "#F2F2F2",
              textTransform: "uppercase",
            }}
          >
            Modo Recepção Ativo
          </h1>
        </div>

        <button
          onClick={handleClose}
          className="w-6 h-6 flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity"
        >
          <X size={24} color="#F2F2F2" />
        </button>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4 py-8">
        <div className="max-w-[600px] w-full flex flex-col items-center">
          {/* Heading */}
          <h2
            className="mb-2"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 700,
              fontSize: 60,
              lineHeight: "60px",
              letterSpacing: "-1.5px",
              color: "#F2F2F2",
              textAlign: "center",
            }}
          >
            APROXIME O QR CODE
          </h2>

          <p
            className="mb-12"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 20,
              lineHeight: "28px",
              color: "#A8A8A8",
              textAlign: "center",
            }}
          >
            ou digite seu código de membro / email
          </p>

          {/* QR Code Display */}
          <div
            className="rounded-xl border-[3.75px] flex items-center justify-center mb-12"
            style={{
              width: 320,
              height: 320,
              borderColor: "#303030",
            }}
          >
            <QRCodeSVG
              value="FORGEE-DEMO-001"
              size={128}
              bgColor="transparent"
              fgColor="#303030"
              level="M"
            />
          </div>

          {/* Input Mode Tabs */}
          <div className="flex gap-2 mb-4">
            <button
              onClick={() => setInputMode("codigo")}
              className="rounded-xl px-4 py-2 flex items-center gap-2 transition-colors"
              style={{
                background: inputMode === "codigo" ? "#E8271A" : "#1A1A1A",
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 12,
                fontWeight: 500,
                letterSpacing: "0.6px",
                color: inputMode === "codigo" ? "#FFFFFF" : "#606060",
                textTransform: "uppercase",
              }}
            >
              <Hash size={16} />
              Código
            </button>
            <button
              onClick={() => setInputMode("email")}
              className="rounded-xl px-4 py-2 flex items-center gap-2 transition-colors"
              style={{
                background: inputMode === "email" ? "#E8271A" : "#1A1A1A",
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 12,
                fontWeight: 500,
                letterSpacing: "0.6px",
                color: inputMode === "email" ? "#FFFFFF" : "#606060",
                textTransform: "uppercase",
              }}
            >
              <Mail size={16} />
              Email
            </button>
          </div>

          {/* Input Field */}
          <div className="relative w-full mb-3">
            <Search size={20} color="#606060" className="absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type={inputMode === "email" ? "email" : "text"}
              placeholder={inputMode === "codigo" ? "Digite o código..." : "Digite o email..."}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="w-full bg-[#0D0D0D] border border-[#303030] rounded-2xl pl-12 pr-4 py-3 text-[#F2F2F2] placeholder:text-[#606060] outline-none focus:border-[#E8400A] transition-colors"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 16,
              }}
            />
          </div>

          <p
            className="mb-4"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 12,
              letterSpacing: "0.6px",
              color: "#606060",
              textAlign: "center",
            }}
          >
            {inputMode === "codigo" ? "Ex: 12345" : "Ex: joao@email.com"}
          </p>

          {/* Demo Button */}
          <button
            className="w-full bg-[#1A1A1A] border border-[#303030] rounded-2xl py-3 transition-colors hover:border-[#606060]"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 14,
              fontWeight: 500,
              letterSpacing: "1.4px",
              color: "#606060",
              textTransform: "uppercase",
            }}
          >
            Simular QR Code (DEMO)
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer
        className="h-[41px] border-t flex items-center justify-between px-[70px]"
        style={{
          background: "rgba(13, 13, 13, 0.5)",
          borderColor: "#303030",
        }}
      >
        <p
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 12,
            letterSpacing: "0.6px",
            color: "#606060",
            textTransform: "uppercase",
            opacity: 0.7,
          }}
        >
          Scanner QR Code ativo • Validação automática • Entrada manual disponível
        </p>
        <p
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 12,
            letterSpacing: "0.6px",
            color: "#606060",
            textTransform: "uppercase",
            opacity: 0.7,
          }}
        >
          Pressione ESC para voltar
        </p>
      </footer>

      {/* Password Modal */}
      <AnimatePresence>
        {showPasswordModal && (
          <PasswordModal
            onClose={() => setShowPasswordModal(false)}
            onSuccess={handlePasswordSuccess}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
