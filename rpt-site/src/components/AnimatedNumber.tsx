import { useEffect, useRef, useState } from "react";

export function AnimatedNumber({ value, language }: { value: string; language: string }) {
  const ref = useRef<HTMLElement>(null);
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let observer: IntersectionObserver | undefined;
    const target = Number(value.replace(/\D/g, ""));
    const suffix = value.endsWith("+") ? "+" : "";
    const formatter = new Intl.NumberFormat(
      language === "pt" ? "pt-BR" : language === "fr" ? "fr-FR" : "en-US",
    );
    const finish = () => {
      cancelAnimationFrame(frame);
      observer?.disconnect();
      setDisplay(value);
    };
    setDisplay(value);

    if (!preference.matches && target > 0) {
      setDisplay(`0${suffix}`);
      observer = new IntersectionObserver(
        (entries) => {
          if (!entries.some((entry) => entry.isIntersecting)) return;
          observer?.disconnect();
          let start: number | undefined;
          const animate = (time: number) => {
            start ??= time;
            const progress = Math.min(1, Math.max(0, (time - start - 180) / 2200));
            const eased = 1 - (1 - progress) ** 3;
            setDisplay(
              progress === 1 ? value : `${formatter.format(Math.floor(target * eased))}${suffix}`,
            );
            if (progress < 1) frame = requestAnimationFrame(animate);
          };
          frame = requestAnimationFrame(animate);
        },
        { threshold: 0.35 },
      );
      observer.observe(element);
    }
    preference.addEventListener("change", finish);
    return () => {
      cancelAnimationFrame(frame);
      observer?.disconnect();
      preference.removeEventListener("change", finish);
    };
  }, [value, language]);

  return (
    <strong ref={ref} aria-label={value}>
      <span aria-hidden="true">{display}</span>
    </strong>
  );
}
