import { useEffect } from "react";
import "./forest.css";
import { SiteHeader } from "./SiteHeader";
import { Hero } from "./Hero";
import { Collection } from "./Collection";
import { Essence } from "./Essence";
import { Contact } from "./Contact";
import { SiteFooter } from "./SiteFooter";

export function FernandoForestPage() {
  useEffect(() => {
    const previousBackground = document.body.style.background;
    const previousColor = document.body.style.color;
    document.body.style.background = "#f3efe7";
    document.body.style.color = "#1c2822";
    document.title = "Fernando Forest — Tecelagem";
    return () => {
      document.body.style.background = previousBackground;
      document.body.style.color = previousColor;
    };
  }, []);

  return (
    <div className="ff" id="topo">
      <SiteHeader />
      <main>
        <Hero />
        <Collection />
        <Essence />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}
