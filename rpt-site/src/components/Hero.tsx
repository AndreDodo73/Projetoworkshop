import { useEffect, useRef, useState } from "react";

const HERO_VIDEO = "/media/hero-rugby.mp4";
const HERO_POSTER = "/media/hero-rugby-poster.jpg";
/** Complete the clip sooner in the scroll so the scrub feels quicker. */
const SCROLL_SPAN_FACTOR = 0.52;

const heroCopy = {
  pt: {
    start: "Começa no Rugby.",
    beyond: "Vai muito além do campo.",
    description: "Promovemos cidadania, e criamos oportunidades por meio do esporte.",
    action: "Faça parte dessa transformação",
    scroll: "Deslize para conhecer o RPT",
  },
  en: {
    start: "It starts with Rugby.",
    beyond: "It goes far beyond the field.",
    description: "We promote citizenship and create opportunities through sport.",
    action: "Be part of this transformation",
    scroll: "Swipe to meet RPT",
  },
  fr: {
    start: "Tout commence avec le Rugby.",
    beyond: "Bien au-delà du terrain.",
    description: "Nous favorisons la citoyenneté et créons des opportunités grâce au sport.",
    action: "Participez à cette transformation",
    scroll: "Glissez pour découvrir le RPT",
  },
};

export function Hero({
  language,
  onJoin,
}: {
  language: keyof typeof heroCopy;
  onJoin: () => void;
}) {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoReady, setVideoReady] = useState(false);
  const text = heroCopy[language];

  useEffect(() => {
    const video = videoRef.current;
    const section = sectionRef.current;
    if (!video || !section) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let raf = 0;
    let desiredTime = 0;
    let seeking = false;
    let pending = false;

    const seekToDesired = () => {
      if (video.readyState < 1) return;
      if (seeking) {
        pending = true;
        return;
      }
      if (Math.abs(video.currentTime - desiredTime) < 0.012) return;
      seeking = true;
      pending = false;
      try {
        video.currentTime = desiredTime;
      } catch {
        seeking = false;
      }
    };

    const onSeeked = () => {
      seeking = false;
      if (pending) seekToDesired();
    };

    const update = () => {
      raf = 0;
      if (!Number.isFinite(video.duration) || video.duration <= 0) return;
      const span = Math.max(180, section.clientHeight * SCROLL_SPAN_FACTOR);
      const raw = Math.min(1, Math.max(0, window.scrollY / span));
      // Ease-out so early scroll advances the clip faster, then settles.
      const progress = 1 - (1 - raw) * (1 - raw);
      const lastFrame = Math.max(0, video.duration - 0.04);
      desiredTime = reducedMotion.matches ? 0 : progress * lastFrame;
      seekToDesired();
    };

    const scheduleUpdate = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    const onMeta = () => {
      if (Number.isFinite(video.duration) && video.duration > 0) {
        setVideoReady(true);
        scheduleUpdate();
      }
    };
    const onFail = () => setVideoReady(false);

    video.pause();
    video.addEventListener("loadedmetadata", onMeta);
    video.addEventListener("error", onFail);
    video.addEventListener("seeked", onSeeked);
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    reducedMotion.addEventListener("change", scheduleUpdate);
    scheduleUpdate();

    return () => {
      cancelAnimationFrame(raf);
      video.removeEventListener("loadedmetadata", onMeta);
      video.removeEventListener("error", onFail);
      video.removeEventListener("seeked", onSeeked);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      reducedMotion.removeEventListener("change", scheduleUpdate);
    };
  }, []);

  return (
    <section className="hero" ref={sectionRef} id="conteudo" aria-labelledby="hero-title">
      {/* Still matches Make frame 0 until hero-rugby.mp4 is exported. */}
      <img
        className="hero-media"
        src={HERO_POSTER}
        alt=""
        aria-hidden="true"
        style={videoReady ? { opacity: 0 } : undefined}
      />
      <video
        ref={videoRef}
        className="hero-media"
        src={HERO_VIDEO}
        poster={HERO_POSTER}
        muted
        playsInline
        preload="auto"
        disablePictureInPicture
        aria-hidden="true"
        style={videoReady ? undefined : { opacity: 0, pointerEvents: "none" }}
      />
      <div className="hero-gradient hero-gradient-left" aria-hidden="true" />
      <div className="hero-gradient hero-gradient-right" aria-hidden="true" />
      <div className="hero-content" lang={language}>
        <h1 id="hero-title">
          <span>{text.start}</span>
          <span className="hero-title-accent">{text.beyond}</span>
        </h1>
        <p className="hero-description">{text.description}</p>
        <button className="hero-cta" onClick={onJoin}>
          {text.action}
        </button>
      </div>
      <button
        type="button"
        className="scroll-cue"
        onClick={() => {
          const section = document.getElementById("impacto");
          const target =
            section?.querySelector<HTMLElement>(".metrics") ?? section ?? document.getElementById("impacto-metricas");
          if (!target) return;
          const header = document.querySelector<HTMLElement>(".site-header");
          const headerOffset = (header?.offsetHeight ?? 96) + 12;
          const top = Math.max(0, target.getBoundingClientRect().top + window.scrollY - headerOffset);
          window.scrollTo({
            top,
            behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
          });
        }}
        aria-label={text.scroll}
      >
        <span aria-hidden="true" />
        {text.scroll}
        <i className="scroll-cue-chevron" aria-hidden="true" />
      </button>
    </section>
  );
}
