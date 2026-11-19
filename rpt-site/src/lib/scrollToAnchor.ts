const HEADER_GAP = 16;

/** Altura atual do header fixo + folga, para a âncora não ficar escondida. */
export function getAnchorOffset() {
  const header = document.querySelector<HTMLElement>(".site-header");
  return (header?.offsetHeight ?? 120) + HEADER_GAP;
}

/** Mantém o scroll-padding do html alinhado ao header (inclusive ao encolher no scroll). */
export function syncAnchorOffset() {
  const offset = getAnchorOffset();
  document.documentElement.style.setProperty("--site-anchor-offset", `${offset}px`);
  return offset;
}

/**
 * Rola até a seção/âncora, respeitando o header.
 * Impacto pousa nas métricas para os números aparecerem na tela.
 */
export function scrollToAnchor(id: string, behavior?: ScrollBehavior) {
  const section = document.getElementById(id);
  if (!section) return false;

  const target =
    id === "impacto"
      ? section.querySelector<HTMLElement>(".metrics") ??
        document.getElementById("impacto-metricas") ??
        section
      : section;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const scrollBehavior: ScrollBehavior = behavior ?? (reduceMotion ? "auto" : "smooth");
  const offset = syncAnchorOffset();
  const top = Math.max(0, target.getBoundingClientRect().top + window.scrollY - offset);
  const scrolling = document.scrollingElement ?? document.documentElement;

  // Interrompe um smooth anterior e aplica o destino (CSS scroll-behavior + scrollTo).
  const html = document.documentElement;
  const previous = html.style.scrollBehavior;
  html.style.scrollBehavior = scrollBehavior === "auto" ? "auto" : "";
  scrolling.scrollTo({ top, behavior: scrollBehavior });
  html.style.scrollBehavior = previous;

  if (history.replaceState) {
    history.replaceState(null, "", `#${id}`);
  }

  return true;
}
