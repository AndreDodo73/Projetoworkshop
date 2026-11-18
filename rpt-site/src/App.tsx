import { useEffect, useRef, useState } from "react";
import { Hero } from "./components/Hero";
import { AnimatedNumber } from "./components/AnimatedNumber";
import {
  ContentSection,
  GovernanceSection,
  MethodologySection,
  ServicesSection,
  ShopSection,
  SupportSection,
  VideoStories,
} from "./components/InstitutionalSections";
import {
  fundraisingProjects,
  institutional,
  official,
  runningProjects,
  storyPeople,
} from "./content/institutional";

type Language = "pt" | "en" | "fr";

const A = "/assets";

const copy = {
  pt: {
    nav: ["Impacto", "Histórias", "Projetos", "Parceiros"],
    donate: "Doe agora",
    eyebrow: "Paraisópolis · São Paulo · Desde 2004",
    heroA: "Começa",
    heroB: "no rugby.",
    heroC: "Vai muito além",
    heroD: "do campo.",
    heroBody:
      "Formamos atletas. Criamos oportunidades. Transformamos vidas por meio do esporte, da educação e da comunidade.",
    heroCta: "Conheça nossas histórias",
    scroll: "Deslize para descobrir",
    sponsorTitle: "Quem acredita, transforma junto.",
    sponsorBody: "Patrocinadores e apoiadores que entram em campo com o Instituto RPT.",
    impactEyebrow: "O campo é só o começo",
    impactTitle: "De Paraisópolis para o mundo.",
    impactBody:
      "Há mais de duas décadas, o Rugby Para Todos amplia as oportunidades de jovens dentro e fora de campo. Quem deu os primeiros passes no projeto hoje estuda, trabalha ou compete no Brasil e em diversos outros países. Alguns desses atletas chegaram aos Jogos Olímpicos.",
    numbers: [
      ["1.200+", "jovens atendidos"],
      ["20+", "anos de impacto"],
      ["34", "países conectados"],
      ["86", "famílias acompanhadas"],
    ],
    storiesEyebrow: "Vidas em movimento",
    storiesTitle: "O resultado tem nome, rosto e futuro.",
    storiesBody:
      "Por trás de cada número existe uma trajetória que começou na comunidade e ganhou o mundo.",
    storyLabel: "História",
    storyCta: "Próxima história",
    storyQuote:
      "“O rugby me ensinou que o lugar onde a gente começa não define até onde pode chegar.”",
    storyPrev: "Histórias anteriores",
    storyNext: "Próximas histórias",
    projectsEyebrow: "Onde atuamos",
    projectsTitle: "Projetos em captação e execução",
    projectsBody:
      "Os projetos do Instituto RPT contribuem para o desenvolvimento social de crianças e adolescentes em comunidades vulneráveis pelo Brasil. Escolha um projeto e torne-se parceiro pessoa física ou jurídica.",
    projectBrand: "Rugby Para Todos",
    statusFundraising: "Em captação",
    statusRunning: "Em execução",
    projectCta: "Ver apresentação",
    sealsLabel: "Reconhecimentos",
    communityEyebrow: "Desde 2004",
    communityTitle: "Uma comunidade inteira joga junto.",
    communityBody:
      "Nascemos da inquietude de quem acreditava no esporte como ferramenta de desenvolvimento humano. Hoje, uma equipe multidisciplinar acompanha jovens e famílias para que cada conquista continue muito além das quatro linhas.",
    communityCta: "Conheça o Instituto",
    joinEyebrow: "Faça parte",
    joinTitle: "Toda transformação precisa de um time.",
    joinBody: "Sua doação mantém projetos, profissionais e oportunidades em movimento.",
    joinCta: "Quero transformar vidas",
    footerContact: "Contato",
    footerNav: "Navegue",
    footerNote: "Esporte, educação e oportunidades desde 2004.",
  },
  en: {
    nav: ["Impact", "Stories", "Projects", "Partners"],
    donate: "Donate now",
    eyebrow: "Paraisópolis · São Paulo · Since 2004",
    heroA: "It starts",
    heroB: "with rugby.",
    heroC: "It goes far",
    heroD: "beyond the field.",
    heroBody:
      "We develop athletes. We create opportunities. We transform lives through sport, education and community.",
    heroCta: "Meet our stories",
    scroll: "Swipe to discover",
    sponsorTitle: "Those who believe, transform with us.",
    sponsorBody: "Sponsors and supporters who take the field with Instituto RPT.",
    impactEyebrow: "The field is just the beginning",
    impactTitle: "From Paraisópolis to the world.",
    impactBody:
      "For more than two decades, Rugby Para Todos has expanded opportunities for young people on and off the field. Those who took their first passes in the project now study, work or compete in Brazil and in many other countries. Some of these athletes have reached the Olympic Games.",
    numbers: [
      ["1,200+", "young people reached"],
      ["20+", "years of impact"],
      ["34", "countries connected"],
      ["86", "families supported"],
    ],
    storiesEyebrow: "Lives in motion",
    storiesTitle: "Impact has a name, a face and a future.",
    storiesBody:
      "Behind each number is a journey that began in the community and reached the world.",
    storyLabel: "Story",
    storyCta: "Next story",
    storyQuote: "“Rugby taught me that where we start does not define how far we can go.”",
    storyPrev: "Previous stories",
    storyNext: "Next stories",
    projectsEyebrow: "Where we work",
    projectsTitle: "Projects in fundraising and delivery",
    projectsBody:
      "Instituto RPT projects support the social development of children and adolescents in vulnerable communities across Brazil. Choose a project and become a partner as an individual or organization.",
    projectBrand: "Rugby Para Todos",
    statusFundraising: "Fundraising",
    statusRunning: "In delivery",
    projectCta: "View presentation",
    sealsLabel: "Recognition",
    communityEyebrow: "Since 2004",
    communityTitle: "An entire community plays together.",
    communityBody:
      "We were born from the belief that sport can drive human development. Today, a multidisciplinary team supports young people and families so every achievement continues far beyond the field.",
    communityCta: "Meet the Institute",
    joinEyebrow: "Join us",
    joinTitle: "Every transformation needs a team.",
    joinBody: "Your donation keeps projects, professionals and opportunities moving.",
    joinCta: "I want to transform lives",
    footerContact: "Contact",
    footerNav: "Explore",
    footerNote: "Sport, education and opportunity since 2004.",
  },
  fr: {
    nav: ["Impact", "Histoires", "Projets", "Partenaires"],
    donate: "Faire un don",
    eyebrow: "Paraisópolis · São Paulo · Depuis 2004",
    heroA: "Tout commence",
    heroB: "avec le rugby.",
    heroC: "Et va bien",
    heroD: "au-delà du terrain.",
    heroBody:
      "Nous formons des athlètes. Nous créons des opportunités. Nous transformons des vies par le sport, l'éducation et la communauté.",
    heroCta: "Découvrir nos histoires",
    scroll: "Glissez pour découvrir",
    sponsorTitle: "Ceux qui y croient transforment avec nous.",
    sponsorBody: "Sponsors et partenaires qui entrent sur le terrain avec l'Instituto RPT.",
    impactEyebrow: "Le terrain n'est que le début",
    impactTitle: "De Paraisópolis au monde.",
    impactBody:
      "Depuis plus de vingt ans, Rugby Para Todos élargit les opportunités des jeunes sur le terrain et en dehors. Ceux qui ont donné leurs premiers passes dans le projet étudient, travaillent ou concourent aujourd’hui au Brésil et dans de nombreux autres pays. Certains de ces athlètes sont allés jusqu’aux Jeux olympiques.",
    numbers: [
      ["1 200+", "jeunes accompagnés"],
      ["20+", "ans d'impact"],
      ["34", "pays connectés"],
      ["86", "familles accompagnées"],
    ],
    storiesEyebrow: "Des vies en mouvement",
    storiesTitle: "L’impact a un nom, un visage et un avenir.",
    storiesBody:
      "Derrière chaque chiffre se trouve un parcours né dans la communauté et ouvert sur le monde.",
    storyLabel: "Histoire",
    storyCta: "Histoire suivante",
    storyQuote:
      "« Le rugby m’a appris que notre point de départ ne définit pas jusqu’où nous pouvons aller. »",
    storyPrev: "Histoires précédentes",
    storyNext: "Histoires suivantes",
    projectsEyebrow: "Nos actions",
    projectsTitle: "Projets en collecte et en exécution",
    projectsBody:
      "Les projets de l’Instituto RPT contribuent au développement social d’enfants et d’adolescents dans des communautés vulnérables au Brésil. Choisissez un projet et devenez partenaire, en tant que personne physique ou morale.",
    projectBrand: "Rugby Para Todos",
    statusFundraising: "En collecte",
    statusRunning: "En exécution",
    projectCta: "Voir la présentation",
    sealsLabel: "Reconnaissances",
    communityEyebrow: "Depuis 2004",
    communityTitle: "Toute une communauté joue ensemble.",
    communityBody:
      "Nous sommes nés de la conviction que le sport favorise le développement humain. Aujourd'hui, une équipe pluridisciplinaire accompagne les jeunes et leurs familles bien au-delà du terrain.",
    communityCta: "Découvrir l'Institut",
    joinEyebrow: "Rejoignez-nous",
    joinTitle: "Chaque transformation a besoin d'une équipe.",
    joinBody: "Votre don permet aux projets, aux professionnels et aux opportunités de continuer.",
    joinCta: "Je veux transformer des vies",
    footerContact: "Contact",
    footerNav: "Explorer",
    footerNote: "Sport, éducation et opportunités depuis 2004.",
  },
};

// Make hash lists. Only files present in public/assets are rendered
// (missing logos 404 as HTML via Vite SPA fallback and break the strip).
const sponsorsAll = [
  "51872.png", // Cultura / institucional
  "d2fa6.png", // Ministério / governo
  "680ac.png", // Lei de Incentivo
  "463ef.png", // Montana
  "2575f.png", // CSN (único)
  "c264d.png", // Outback variante patrocínio
  "2406a.png", // Yaman / outro
];
const supportersAll = [
  "05b7e.png", // Einstein
  "a8b5c.png", // Rede Esporte
  "64b7d.png", // CSN (único)
  "893eb.png", // Vita
  "9108e.png", // Outback
  "d51f0.png", // Facchini
];
const presentLogos = new Set([
  "05b7e.png",
  "2406a.png",
  "2575f.png",
  "463ef.png",
  "51872.png",
  "64b7d.png",
  "680ac.png",
  "893eb.png",
  "9108e.png",
  "a8b5c.png",
  "c264d.png",
  "d2fa6.png",
  "d51f0.png",
]);
const sponsors = sponsorsAll.filter((logo) => presentLogos.has(logo));
const supporters = [...new Set(supportersAll.filter((logo) => presentLogos.has(logo)))];
const footerSeals = [
  {
    src: "seals/melhores-ongs-2024.png",
    alt: "Prêmio Melhores ONGs 2024",
  },
  {
    src: "seals/melhores-ongs-2022.png",
    alt: "Prêmio Melhores ONGs 2022",
  },
  {
    src: "seals/transparencia-2024.png",
    alt: "Prêmio Transparência 2024",
  },
];

function Arrow() {
  // Make/Figma line arrow (↗) — color via currentColor (laranja ou branco).
  return (
    <span aria-hidden="true" className="arrow">
      <svg viewBox="0 0 24 24" width="18" height="18" focusable="false">
        <path
          d="M7 17 17 7M9 7h8v8"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export default function App() {
  const [language, setLanguage] = useState<Language>("pt");
  const [activeStory, setActiveStory] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [sponsorsPaused, setSponsorsPaused] = useState(false);
  const [activeSection, setActiveSection] = useState("impacto");
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const storyTabsRef = useRef<HTMLDivElement>(null);
  const projectsRailRef = useRef<HTMLDivElement>(null);
  const t = copy[language];
  const extra = institutional[language];
  const primaryNav = [
    { id: "impacto", label: t.nav[0] },
    { id: "historias", label: t.nav[1] },
    { id: "projetos", label: t.nav[2] },
  ] as const;
  const navItems = [...primaryNav, ...extra.links];
  const person = storyPeople[activeStory];
  const storyCount = String(activeStory + 1).padStart(2, "0");
  const storyTotal = String(storyPeople.length).padStart(2, "0");

  const scrollRail = (rail: HTMLDivElement | null, direction: -1 | 1) => {
    if (!rail) return;
    const amount = Math.max(280, Math.round(rail.clientWidth * 0.72));
    rail.scrollBy({
      left: direction * amount,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
    });
  };

  useEffect(() => {
    let frame = 0;
    const update = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(maxScroll > 0 ? window.scrollY / maxScroll : 0);
      setIsScrolled(window.scrollY > 24);
      frame = 0;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    const closeMenu = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", closeMenu);
    return () => window.removeEventListener("keydown", closeMenu);
  }, []);

  useEffect(() => {
    const sections = [
      "impacto",
      "historias",
      "projetos",
      "parceiros",
      "doe",
      "loja",
      "servicos",
      "instituto",
      "transparencia",
      "conteudos",
    ]
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActiveSection(visible.target.id);
      },
      { rootMargin: "-25% 0px -60%", threshold: [0.05, 0.3, 0.6] },
    );
    sections.forEach((section) => sectionObserver.observe(section));

    document.documentElement.classList.add("motion-ready");
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8%", threshold: 0.12 },
    );
    const revealElements = document.querySelectorAll(".reveal");
    revealElements.forEach((element) => revealObserver.observe(element));

    return () => {
      sectionObserver.disconnect();
      revealObserver.disconnect();
      document.documentElement.classList.remove("motion-ready");
    };
  }, [language]);

  const goTo = (id: string) => {
    const section = document.getElementById(id);
    if (!section) return;

    // Impacto is a tall block: land on the metrics so the numbers are on screen.
    const target =
      id === "impacto"
        ? section.querySelector<HTMLElement>(".metrics") ?? section
        : section;

    const header = document.querySelector<HTMLElement>(".site-header");
    const headerOffset = (header?.offsetHeight ?? 96) + 12;
    const top = Math.max(0, target.getBoundingClientRect().top + window.scrollY - headerOffset);
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    window.scrollTo({ top, behavior: reduceMotion ? "auto" : "smooth" });
    setActiveSection(id);
    setMenuOpen(false);
  };

  return (
    <main>
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <div
        className="scroll-progress"
        aria-hidden="true"
        style={{ transform: `scaleX(${scrollProgress})` }}
      />
      <header className={isScrolled ? "site-header scrolled" : "site-header"}>
        <button
          className="brand"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Rugby Para Todos — início"
        >
          <img src={`${A}/logo-horizontal.png`} alt="Instituto Rugby Para Todos" />
        </button>
        <nav className={menuOpen ? "nav open" : "nav"} aria-label="Navegação principal">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={activeSection === item.id ? "active" : ""}
              onClick={() => goTo(item.id)}
              aria-current={activeSection === item.id ? "location" : undefined}
            >
              {item.label}
            </button>
          ))}
        </nav>
        <div className="header-actions">
          <div className="language-switcher" aria-label="Idioma">
            {(["pt", "en", "fr"] as Language[]).map((lang) => (
              <button
                key={lang}
                className={language === lang ? "active" : ""}
                onClick={() => setLanguage(lang)}
                aria-pressed={language === lang}
                aria-label={lang === "pt" ? "Português" : lang === "en" ? "English" : "Français"}
              >
                {lang.toUpperCase()}
              </button>
            ))}
          </div>
          <button className="donate-small" onClick={() => goTo("doe")}>
            {t.donate}
          </button>
          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menu"
            aria-expanded={menuOpen}
          >
            <span />
            <span />
          </button>
        </div>
      </header>

      <Hero language={language} onJoin={() => goTo("doe")} />

      <section className="sponsors" id="parceiros">
        <div className="section-intro compact reveal">
          <div>
            <p className="eyebrow">Parceiros</p>
            <h2>{t.sponsorTitle}</h2>
          </div>
          <p>{t.sponsorBody}</p>
        </div>
        <div className="logo-marquee" data-paused={sponsorsPaused}>
          <div className="logo-track">
            {[...sponsors, ...sponsors].map((logo, i) => (
              <div className="logo-cell" key={`${logo}-${i}`}>
                <img src={`${A}/${logo}`} alt="" />
              </div>
            ))}
          </div>
        </div>
        <div className="marquee-controls">
          <button
            className="marquee-toggle"
            onClick={() => setSponsorsPaused(!sponsorsPaused)}
            aria-pressed={sponsorsPaused}
          >
            <span className="marquee-status" aria-hidden="true" />
            {sponsorsPaused
              ? { pt: "Retomar movimento", en: "Resume motion", fr: "Reprendre l’animation" }[
                  language
                ]
              : { pt: "Pausar movimento", en: "Pause motion", fr: "Mettre en pause" }[language]}
          </button>
        </div>
      </section>

      <section className="impact" id="impacto" aria-labelledby="impacto-title">
        <div className="impact-image reveal reveal-image">
          <img
            src={`${A}/paraisopolis-mundo.jpg`}
            alt="Atletas do Rugby Para Todos com medalhas e troféus em Paraisópolis"
          />
        </div>
        <div className="impact-copy reveal">
          <p className="eyebrow">{t.impactEyebrow}</p>
          <h2 id="impacto-title">{t.impactTitle}</h2>
          <p className="lead">{t.impactBody}</p>
        </div>
        <div className="metrics reveal" id="impacto-metricas">
          {t.numbers.map(([number, label]) => (
            <div className="metric" key={label}>
              <AnimatedNumber value={number} language={language} />
              <span>{label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="stories" id="historias">
        <div className="section-intro on-dark reveal">
          <div>
            <p className="eyebrow light">{t.storiesEyebrow}</p>
            <h2>{t.storiesTitle}</h2>
          </div>
          <p>{t.storiesBody}</p>
        </div>
        <div className="story-stage reveal" aria-live="polite">
          <div className="story-photo">
            <img
              key={person.name}
              src={`${A}/${person.image}`}
              alt={person.name}
              style={
                "objectPosition" in person && person.objectPosition
                  ? { objectPosition: person.objectPosition }
                  : undefined
              }
            />
            <span className="story-count">
              {storyCount} / {storyTotal}
            </span>
          </div>
          <article className="story-card">
            <h3 className="story-name">{person.name}</h3>
            <blockquote key={`${language}-${person.name}`}>
              {person.quote?.[language] ?? t.storyQuote}
            </blockquote>
            <p className="story-bio">{person.bio[language]}</p>
            <div className="story-actions">
              <button
                className="text-link"
                onClick={() => setActiveStory((activeStory + 1) % storyPeople.length)}
              >
                <span className="link-label">{t.storyCta}</span>
                <Arrow />
              </button>
            </div>
          </article>
        </div>
        <div className="story-tabs-wrap">
          <button
            type="button"
            className="stories-nav"
            onClick={() => scrollRail(storyTabsRef.current, -1)}
            aria-label={t.storyPrev}
          >
            ‹
          </button>
          <div className="story-tabs" ref={storyTabsRef}>
            {storyPeople.map((item, i) => (
              <button
                key={item.name}
                className={activeStory === i ? "active" : ""}
                onClick={() => setActiveStory(i)}
                aria-label={item.name}
                aria-pressed={activeStory === i}
              >
                <img src={`${A}/${item.image}`} alt="" />
                <span>{item.name}</span>
              </button>
            ))}
          </div>
          <button
            type="button"
            className="stories-nav stories-nav-next"
            onClick={() => scrollRail(storyTabsRef.current, 1)}
            aria-label={t.storyNext}
          >
            ›
          </button>
        </div>
      </section>

      <VideoStories language={language} />

      <section className="projects" id="projetos">
        <div className="section-intro reveal">
          <div>
            <p className="eyebrow">{t.projectsEyebrow}</p>
            <h2>{t.projectsTitle}</h2>
          </div>
          <p>{t.projectsBody}</p>
        </div>
        <div className="project-rail-wrap">
          <button
            type="button"
            className="stories-nav project-nav"
            onClick={() => scrollRail(projectsRailRef.current, -1)}
            aria-label={t.storyPrev}
          >
            ‹
          </button>
          <div className="project-rail" ref={projectsRailRef}>
            {fundraisingProjects.map((project) => (
              <a
                className="project-card is-fundraising"
                key={project.place}
                href={`${official.home}auxiliares/modulos/conteudo/pdf/${project.pdf}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={`${A}/${project.image}`} alt="" loading="lazy" />
                <div className="project-overlay" />
                <div className="project-meta">
                  <span>{project.year}</span>
                  <span className="project-status">{t.statusFundraising}</span>
                </div>
                <div className="project-content project-content-rail">
                  <p className="project-brand">{t.projectBrand}</p>
                  <h3>{project.place}</h3>
                  <span className="project-cta">
                    {t.projectCta}
                    <Arrow />
                  </span>
                </div>
              </a>
            ))}
            {runningProjects.map((project) => (
              <article className="project-card is-running" key={project.title}>
                <img src={`${A}/${project.image}`} alt="" loading="lazy" />
                <div className="project-overlay" />
                <div className="project-meta">
                  <span>RPT</span>
                  <span className="project-status">{t.statusRunning}</span>
                </div>
                <div className="project-content project-content-rail">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </article>
            ))}
          </div>
          <button
            type="button"
            className="stories-nav stories-nav-next project-nav"
            onClick={() => scrollRail(projectsRailRef.current, 1)}
            aria-label={t.storyNext}
          >
            ›
          </button>
        </div>
      </section>

      <section className="community" id="instituto">
        <div className="community-bg" aria-hidden="true">
          <img
            src={`${A}/community-fullbleed.jpg`}
            alt=""
            loading="lazy"
          />
        </div>
        <div className="community-copy reveal">
          <p className="eyebrow">{t.communityEyebrow}</p>
          <h2>{t.communityTitle}</h2>
          <p>{t.communityBody}</p>
          <button className="pill light-pill" onClick={() => goTo("impacto")}>
            {t.communityCta}
            <Arrow />
          </button>
        </div>
      </section>

      <MethodologySection language={language} />
      <ServicesSection language={language} />

      <section className="supporters">
        <p className="eyebrow">Apoiadores institucionais</p>
        <div className="supporter-grid reveal">
          {supporters.map((logo) => (
            <div key={logo}>
              <img src={`${A}/${logo}`} alt="" />
            </div>
          ))}
        </div>
      </section>

      <GovernanceSection language={language} />

      <ShopSection language={language} />
      <SupportSection language={language} />
      <ContentSection language={language} />

      <footer>
        <div className="footer-top">
          <div className="footer-brand">
            <img src={`${A}/ff39b.png`} alt="Instituto Rugby Para Todos" />
            <p>{t.footerNote}</p>
            <div className="footer-seals" aria-label={t.sealsLabel}>
              {footerSeals.map((seal) => (
                <img key={seal.src} src={`${A}/${seal.src}`} alt={seal.alt} loading="lazy" />
              ))}
            </div>
          </div>
          <div>
            <p className="footer-label">{t.footerNav}</p>
            {navItems.map((item) => (
              <button key={item.id} onClick={() => goTo(item.id)}>
                {item.label}
              </button>
            ))}
          </div>
          <div>
            <p className="footer-label">{t.footerContact}</p>
            <a href="mailto:rugbyparatodos@rugbyparatodos.org.br">
              rugbyparatodos@rugbyparatodos.org.br
            </a>
            <a href="tel:+551123710843">+55 (11) 2371-0843</a>
            <p>São Paulo, SP — Brasil</p>
            <div className="social-links">
              {official.social.map(({ icon, name, href }) => (
                <a
                  href={href}
                  aria-label={name}
                  key={name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={`${A}/${icon}`} alt="" />
                </a>
              ))}
            </div>
          </div>
          <button
            className="back-top"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            ↑
          </button>
        </div>
        <div className="footer-bottom">
          <span>© 2025 Instituto Rugby Para Todos</span>
          <span>Paraisópolis · São Paulo · Rio de Janeiro</span>
        </div>
      </footer>
    </main>
  );
}
