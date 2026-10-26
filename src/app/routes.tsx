import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { LoginAdmin } from "./pages/LoginAdmin";
import { Dashboard } from "./pages/Dashboard";
import { NovoAluno } from "./pages/NovoAluno";
import { Alunos } from "./pages/Alunos";
import { CheckIns } from "./pages/CheckIns";
import { ModoRecepcao } from "./pages/ModoRecepcao";
import { Configuracoes } from "./pages/Configuracoes";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
    ],
  },
  {
    path: "/login-admin",
    Component: LoginAdmin,
  },
  {
    path: "/dashboard",
    Component: Dashboard,
  },
  {
    path: "/novo-aluno",
    Component: NovoAluno,
  },
  {
    path: "/alunos",
    Component: Alunos,
  },
  {
    path: "/check-ins",
    Component: CheckIns,
  },
  {
    path: "/modo-recepcao",
    Component: ModoRecepcao,
  },
  {
    path: "/configuracoes",
    Component: Configuracoes,
  },
]);