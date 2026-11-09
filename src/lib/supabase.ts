import { createClient } from "@supabase/supabase-js";

const url = import.meta.env.VITE_SUPABASE_URL;
const key = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

if (!url || !key) {
  throw new Error("A conexão com o banco não está configurada.");
}

export const supabase = createClient(url, key);

export const BOOTSTRAP_ADMIN_EMAIL = "andre@jabuticabadesign.com";
