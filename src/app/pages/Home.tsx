import { Hero } from "../components/Hero";
import { QuemSomos } from "../components/QuemSomos";
import { Estrutura } from "../components/Estrutura";
import { Programas } from "../components/Programas";
import { Planos } from "../components/Planos";
import { Equipe } from "../components/Equipe";
import { FAQ } from "../components/FAQ";
import { Localizacao } from "../components/Localizacao";
import { CTAFinal } from "../components/CTAFinal";

export function Home() {
  return (
    <>
      <Hero />
      <QuemSomos />
      <Estrutura />
      <Programas />
      <Planos />
      <Equipe />
      <FAQ />
      <Localizacao />
      <CTAFinal />
    </>
  );
}
