import { CTAFinal } from "../components/CTAFinal";
import { Equipe } from "../components/Equipe";
import { Estrutura } from "../components/Estrutura";
import { FAQ } from "../components/FAQ";

/** STUB: pages/Home.tsx was not in the export. Mounts only the uploaded sections. */
export function Home() {
  return (
    <main className="w-full">
      <Equipe />
      <Estrutura />
      <FAQ />
      <CTAFinal />
    </main>
  );
}
