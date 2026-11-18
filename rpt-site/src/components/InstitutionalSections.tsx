import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  awardsList,
  documents,
  institutional,
  official,
  shopProducts,
  shopWhatsAppHref,
  type SiteLanguage,
} from "../content/institutional";
import "./InstitutionalSections.css";

function ExtIcon() {
  // Make/Figma: seta linha limpa ↗ (sem quadrado)
  return (
    <span className="arrow" aria-hidden="true">
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

function Outbound({
  href,
  children,
  className = "text-link",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  const plainLabel = typeof children === "string" || typeof children === "number";
  const hideIcon = className.includes("social-channel");
  return (
    <a href={href} className={className} target="_blank" rel="noopener noreferrer">
      {plainLabel ? <span className="link-label">{children}</span> : children}
      {hideIcon ? null : <ExtIcon />}
    </a>
  );
}

export function VideoStories({ language }: { language: SiteLanguage }) {
  const t = institutional[language];
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const playVideo = () => {
    const video = videoRef.current;
    if (!video) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const playPromise = video.play();
    if (playPromise) {
      playPromise
        .then(() => setPlaying(true))
        .catch(() => setPlaying(false));
    }
  };

  const stopVideo = () => {
    const video = videoRef.current;
    if (!video) return;
    video.pause();
    video.currentTime = 0;
    setPlaying(false);
  };

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || !window.matchMedia("(hover: none)").matches) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.45) {
          playVideo();
        } else {
          stopVideo();
        }
      },
      { threshold: [0, 0.45, 0.8] },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`video-stories${playing ? " is-playing" : ""}`}
      aria-labelledby="video-stories-title"
      onMouseEnter={playVideo}
      onMouseLeave={stopVideo}
      onFocusCapture={playVideo}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          stopVideo();
        }
      }}
    >
      <video
        ref={videoRef}
        className="video-stories-media"
        src="/assets/boy-running-rugby.mp4"
        poster="/assets/boy-running-rugby-poster.jpg"
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      />
      <div className="video-stories-copy reveal">
        <p className="eyebrow light">{t.contentEyebrow}</p>
        <h2 id="video-stories-title">{t.videoTitle}</h2>
        <Outbound className="pill light-pill" href={official.social[1].href}>
          {t.videoCta}
        </Outbound>
      </div>
    </section>
  );
}

export function MethodologySection({ language }: { language: SiteLanguage }) {
  const t = institutional[language];
  return (
    <section className="methodology restored-section" id="metodologia">
      <div className="methodology-head reveal">
        <p className="eyebrow">{t.methodEyebrow}</p>
        <h2>
          {t.methodTitle.split(". ").map((part, index, parts) => (
            <span key={part}>
              {part}
              {index < parts.length - 1 ? "." : ""}
              {index < parts.length - 1 ? <br /> : null}
            </span>
          ))}
        </h2>
        <div className="methodology-lead">
          <p>{t.methodBody}</p>
          <p className="methodology-team">{t.methodTeam}</p>
        </div>
      </div>

      <ol className="method-values reveal" aria-label={t.methodTitle}>
        {t.methodValues.map((value, i) => (
          <li key={value}>
            <span className="method-value-index">0{i + 1}</span>
            <span className="method-value-label">{value}</span>
          </li>
        ))}
      </ol>

      <div className="awards-band reveal">
        <div className="awards-gallery">
          <img
            className="awards-shot awards-shot-ceremony"
            src="/assets/awards/ceremony.jpg"
            alt="Entrega de premiação do Instituto Rugby Para Todos"
            loading="lazy"
          />
          <img
            className="awards-shot awards-shot-trophy"
            src="/assets/awards/trophy.jpg"
            alt="Jovens atletas erguem o troféu"
            loading="lazy"
          />
          <img
            className="awards-shot awards-shot-match"
            src="/assets/awards/match.jpg"
            alt="Crianças em jogo de rugby"
            loading="lazy"
          />
        </div>
        <div className="awards-copy">
          <p className="eyebrow">{t.awards}</p>
          <h3>{t.awardsSubtitle}</h3>
          <div className="award-list">
            {awardsList.map((award) => (
              <Outbound className="award-link" href={award.href} key={award.title}>
                <span className="award-year">{award.year}</span>
                <span className="award-body">
                  <span className="award-title">{award.title}</span>
                  <small className="award-credit">{award.credit}</small>
                </span>
              </Outbound>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ShopSection({ language }: { language: SiteLanguage }) {
  const t = institutional[language];
  const railRef = useRef<HTMLDivElement>(null);
  const scrollRail = (direction: -1 | 1) => {
    const rail = railRef.current;
    if (!rail) return;
    const card = rail.querySelector<HTMLElement>(".shop-card");
    const distance = (card?.offsetWidth ?? 300) + 18;
    rail.scrollBy({
      left: direction * distance,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
    });
  };
  return (
    <section className="shop restored-section" id="loja" aria-labelledby="shop-title">
      <div className="section-intro reveal">
        <div>
          <p className="eyebrow">{t.shopEyebrow}</p>
          <h2 id="shop-title">{t.shopSectionTitle}</h2>
        </div>
        <p>{t.shopSectionBody}</p>
      </div>
      <div className="shop-rail-wrap">
        <button
          type="button"
          className="stories-nav project-nav"
          onClick={() => scrollRail(-1)}
          aria-label={t.shopPrev}
        >
          ‹
        </button>
        <div className="shop-rail" ref={railRef}>
          {shopProducts.map((product) => {
            const name = product.name[language];
            return (
              <article className="shop-card reveal" key={product.id}>
                <div className="shop-card-media">
                  <img src={`/assets/${product.image}`} alt="" loading="lazy" />
                </div>
                <div className="shop-card-copy">
                  <h3>{name}</h3>
                  <p>{product.blurb[language]}</p>
                  <p className="shop-card-shipping">{t.shopShipping}</p>
                  <Outbound className="shop-card-cta" href={shopWhatsAppHref(name, language)}>
                    {t.shopCardCta}
                  </Outbound>
                </div>
              </article>
            );
          })}
        </div>
        <button
          type="button"
          className="stories-nav stories-nav-next project-nav"
          onClick={() => scrollRail(1)}
          aria-label={t.shopNext}
        >
          ›
        </button>
      </div>
    </section>
  );
}

export function ServicesSection({ language }: { language: SiteLanguage }) {
  const t = institutional[language];
  return (
    <section className="services restored-section" id="servicos" aria-labelledby="services-title">
      <div className="section-intro reveal">
        <div>
          <p className="eyebrow">{t.serviceEyebrow}</p>
          <h2 id="services-title">{t.serviceTitle}</h2>
        </div>
        <p>{t.serviceBody}</p>
      </div>
      <div className="service-grid">
        {t.serviceTitles.map((title, i) => (
          <article className="service-card reveal" key={title}>
            <div className="service-image">
              <img
                src={`/assets/${["54817.png", "e9a3a.png", "46562.png"][i]}`}
                alt={title}
                loading="lazy"
              />
              <span>0{i + 1}</span>
            </div>
            <div className="service-copy">
              <h3>{title}</h3>
              <p>{t.serviceDescriptions[i]}</p>
              <details>
                <summary>
                  {t.learnMore}
                  <span aria-hidden="true">+</span>
                </summary>
                <p>{t.serviceDetails[i]}</p>
              </details>
              <a
                className="text-link"
                href={`mailto:rugbyparatodos@rugbyparatodos.org.br?subject=${encodeURIComponent(`${t.serviceTitle} ${title}`)}`}
              >
                <span className="link-label">{t.contactService}</span>
                <ExtIcon />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function GovernanceSection({ language }: { language: SiteLanguage }) {
  const t = institutional[language];
  return (
    <section className="governance restored-section" id="transparencia">
      <div className="section-intro reveal">
        <div>
          <p className="eyebrow">{t.governanceEyebrow}</p>
          <h2>{t.governanceTitle}</h2>
        </div>
        <p>{t.governanceBody}</p>
      </div>
      <div className="governance-grid">
        <div className="governance-copy reveal">
          <h3>{t.management}</h3>
          <p>{t.managementBody}</p>
          <div className="ombudsman">
            <p className="eyebrow">{t.ombudsman}</p>
            <p>{t.ombudsmanBody}</p>
            <a href="mailto:ouvidoria@rugbyparatodos.org.br">
              ouvidoria@rugbyparatodos.org.br
              <ExtIcon />
            </a>
          </div>
        </div>
        <div className="document-list reveal">
          {documents.map((document, i) => (
            <Outbound
              key={document.file}
              className="document-link"
              href={`${official.home}auxiliares/modulos/conteudo/pdf/${document.file}`}
            >
              <span className="document-index">{`0${i + 1}`}</span>
              <span className="document-title">
                {t.documentLabels[i]}
                <small>PDF · {document.year} · PT-BR</small>
              </span>
            </Outbound>
          ))}
          <p className="external-note">{t.externalNote}</p>
        </div>
      </div>
    </section>
  );
}

export function SupportSection({ language }: { language: SiteLanguage }) {
  const [frequency, setFrequency] = useState<"once" | "monthly">("once");
  const [amount, setAmount] = useState<keyof typeof official.donations>("100");
  const t = institutional[language];
  const isMonthly = frequency === "monthly";
  return (
    <section className="support-options restored-section" id="doe">
      <div className="donation-panel donation-panel-unified reveal">
        <div className="donation-intro">
          <p className="eyebrow">{t.supportEyebrow}</p>
          <h2>{t.supportTitle}</h2>
          <p className="donation-lead">{t.supportBody}</p>
        </div>
        <div className="donation-controls">
          <div className="donation-primary">
            <div className="donation-frequency" role="group" aria-label={t.supportEyebrow}>
              <button type="button" onClick={() => setFrequency("once")} aria-pressed={!isMonthly}>
                {t.once}
              </button>
              <button type="button" onClick={() => setFrequency("monthly")} aria-pressed={isMonthly}>
                {t.monthly}
              </button>
            </div>
            {isMonthly ? (
              <p className="monthly-description">{t.monthlyBody}</p>
            ) : (
              <>
                <p className="donation-amount-label">{t.chooseAmount}</p>
                <div className="donation-amounts" role="group" aria-label={t.chooseAmount}>
                  {(["50", "100", "200", "other"] as const).map((value) => (
                    <button
                      key={value}
                      type="button"
                      onClick={() => setAmount(value)}
                      aria-pressed={amount === value}
                    >
                      {value === "other" ? t.other : `R$ ${value}`}
                    </button>
                  ))}
                </div>
              </>
            )}
            <Outbound
              className="pill donation-submit"
              href={isMonthly ? official.monthly : official.donations[amount]}
            >
              {isMonthly ? t.giveMonthly : t.give}
            </Outbound>
            <p className="donation-channel">
              {isMonthly ? t.channelMonthly : t.channelOnce}
            </p>
          </div>
          <div className="donation-secondary">
            <p className="donation-secondary-label">{t.otherWays}</p>
            <div className="donation-alt-paths" role="group" aria-label={t.otherWays}>
              <Outbound className="pill donation-alt donation-alt-ir" href={official.incomeTax}>
                {t.incomeTax}
              </Outbound>
              <Outbound className="pill donation-alt" href={official.helpAsYouCan}>
                {t.helpAsYouCan}
              </Outbound>
            </div>
            <p className="donation-channel donation-alt-note">{t.incomeTaxNote}</p>
          </div>
          <p className="external-note">{t.externalPayment}</p>
        </div>
      </div>
      <div className="support-other reveal">
        <article className="support-path">
          <p className="eyebrow">Loja RPT</p>
          <h3>{t.shopTitle}</h3>
          <p>{t.shopBody}</p>
          <a className="pill support-path-cta" href="#loja">
            <span className="link-label">{t.shopCta}</span>
            <ExtIcon />
          </a>
        </article>
        <article className="support-path">
          <p className="eyebrow">Instituto RPT</p>
          <h3>{t.work}</h3>
          <p>{t.workBody}</p>
          <a
            className="pill support-path-cta"
            href="mailto:rugbyparatodos@rugbyparatodos.org.br?subject=Trabalhe%20conosco"
          >
            <span className="link-label">{t.workCta}</span>
            <ExtIcon />
          </a>
        </article>
      </div>
    </section>
  );
}

export function ContentSection({ language }: { language: SiteLanguage }) {
  const t = institutional[language];
  return (
    <section className="content-section restored-section" id="conteudos">
      <div className="section-intro reveal">
        <div>
          <p className="eyebrow">{t.contentEyebrow}</p>
          <h2>{t.contentTitle}</h2>
        </div>
        <p>{t.contentBody}</p>
      </div>
      <div className="content-editorial">
        <div className="content-image reveal reveal-image">
          <img src="/assets/fb2b9.png" alt={t.archive} loading="lazy" />
          <span>{t.archive}</span>
        </div>
        <div className="content-news reveal">
          <p className="eyebrow">{t.newsTitle}</p>
          {t.news.map((headline, i) => (
            <Outbound
              key={headline}
              href={`${official.home}conteudo.php?idc=8&idcd=${i === 0 ? "488" : "494"}`}
              className="news-link"
            >
              <h3>{headline}</h3>
            </Outbound>
          ))}
        </div>
      </div>
      <div className="content-connect">
        <div className="newsletter-card reveal">
          <p className="eyebrow">Newsletter</p>
          <h3>{t.newsletterTitle}</h3>
          <p>{t.newsletterBody}</p>
          <Outbound className="pill dark-pill" href={official.newsletter}>
            {t.newsletterCta}
          </Outbound>
        </div>
        <div className="social-card reveal">
          <p className="eyebrow">{t.socialTitle}</p>
          <div className="content-socials">
            {official.social.map((social) => (
              <Outbound href={social.href} className="social-channel" key={social.name}>
                <img src={`/assets/${social.icon}`} alt="" />
                <span>{social.name}</span>
              </Outbound>
            ))}
          </div>
          <p className="external-note">{t.externalNote}</p>
        </div>
      </div>
    </section>
  );
}
