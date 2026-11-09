import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { Navigate, Outlet } from "react-router";
import type { Session } from "@supabase/supabase-js";
import { supabase } from "./supabase";

export type StaffProfile = {
  id: string;
  nome: string;
  email: string;
  telefone: string | null;
  cargo: string;
};

type AuthContextValue = {
  ready: boolean;
  session: Session | null;
  staff: StaffProfile | null;
  notice: string | null;
  clearNotice: () => void;
  refreshStaff: () => Promise<void>;
  signOut: () => Promise<void>;
};

const AuthContext = createContext<AuthContextValue | null>(null);

async function fetchStaff(userId: string): Promise<StaffProfile | null> {
  for (let attempt = 0; attempt < 3; attempt += 1) {
    const { data, error } = await supabase
      .from("usuarios")
      .select("id, nome, email, telefone, cargo")
      .eq("id", userId)
      .maybeSingle();

    if (data) return data;
    if (error && attempt === 2) return null;
    await new Promise((resolve) => setTimeout(resolve, 400));
  }
  return null;
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [ready, setReady] = useState(false);
  const [session, setSession] = useState<Session | null>(null);
  const [staff, setStaff] = useState<StaffProfile | null>(null);
  const [notice, setNotice] = useState<string | null>(null);

  const resolveStaff = async (userId: string) => {
    const profile = await fetchStaff(userId);
    if (profile) {
      setStaff(profile);
      setNotice(null);
      return;
    }
    setStaff(null);
    setNotice("Esta conta não faz parte da equipe da academia.");
    await supabase.auth.signOut();
  };

  const refreshStaff = async () => {
    const { data } = await supabase.auth.getUser();
    if (!data.user) {
      setStaff(null);
      return;
    }
    const profile = await fetchStaff(data.user.id);
    setStaff(profile);
  };

  const signOut = async () => {
    await supabase.auth.signOut();
    setSession(null);
    setStaff(null);
  };

  useEffect(() => {
    let active = true;

    supabase.auth.getSession().then(({ data }) => {
      if (!active) return;
      setSession(data.session);
      if (!data.session) {
        setReady(true);
        return;
      }
      void resolveStaff(data.session.user.id).finally(() => {
        if (active) setReady(true);
      });
    });

    const { data: subscription } = supabase.auth.onAuthStateChange((_event, nextSession) => {
      setSession(nextSession);
      if (!nextSession) {
        setStaff(null);
        setReady(true);
        return;
      }
      setTimeout(() => {
        if (active) void resolveStaff(nextSession.user.id);
      }, 0);
    });

    return () => {
      active = false;
      subscription.subscription.unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{ ready, session, staff, notice, clearNotice: () => setNotice(null), refreshStaff, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const value = useContext(AuthContext);
  if (!value) throw new Error("useAuth precisa ficar dentro do AuthProvider.");
  return value;
}

// Enquanto VITE_REQUIRE_AUTH não for "true", o painel abre sem login.
// Para exigir login: defina VITE_REQUIRE_AUTH=true e rode supabase/reverter-acesso-aberto.sql.
const AUTH_REQUIRED = import.meta.env.VITE_REQUIRE_AUTH === "true";

export function RequireStaff() {
  const { ready, session, staff } = useAuth();

  if (!AUTH_REQUIRED) return <Outlet />;

  if (!ready || (session && staff?.id !== session.user.id)) {
    return (
      <div
        className="min-h-screen flex items-center justify-center"
        style={{ background: "#090909", color: "#A8A8A8", fontFamily: "Inter, sans-serif" }}
      >
        Carregando painel...
      </div>
    );
  }

  if (!session || !staff) return <Navigate to="/login-admin" replace />;
  return <Outlet />;
}
