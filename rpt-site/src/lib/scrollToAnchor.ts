const HEADER_GAP = 16;
const HEADER_TOP = 120;
const HEADER_SCROLLED = 78;
const HEADER_MOBILE = 82;

function headerHeightForScrollY(scrollY: number) {
  if (window.matchMedia("(max-width: 980px)").matches) return HEADER_MOBILE;
  return scrollY > 24 ? HEADER_SCROLLED : HEADER_TOP;
}

/** Altura do header + folga, alinhada ao estado scrolled do destino. */
export function getAnchorOffset(destinationScrollY = window.scrollY) {
  return headerHeightForScrollY(destinationScrollY) + HEADER_GAP;
}

/** Mantém o scroll-padding do html alinhado ao header (inclusive ao encolher no scroll). */
export function syncAnchorOffset(destinationScrollY = window.scrollY) {
  const offset = getAnchorOffset(destinationScrollY);
  document.documentElement.style.setProperty("--site-anchor-offset", `${offset}px`);
  return offset;
}

/** Posição de layout sem translate de .reveal (getBoundingClientRect inclui o transform). */
function layoutDocumentTop(el: HTMLElement) {
  let y = 0;
  let node: HTMLElement | null = el;
  while (node) {
    y += node.offsetTop;
    node = node.offsetParent as HTMLElement | null;
  }
  return y;
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

  // Reveals com translateY alteram getBoundingClientRect até .is-visible.
  target.classList.add("is-visible");
  target.querySelectorAll(".reveal").forEach((node) => node.classList.add("is-visible"));

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const layoutTop = layoutDocumentTop(target);
  const offset = syncAnchorOffset(Math.max(layoutTop, 25));
  const top = Math.max(0, layoutTop - offset);
  const distance = Math.abs(top - window.scrollY);
  // Saltos longos em smooth às vezes param no meio; usa auto nesse caso.
  const scrollBehavior: ScrollBehavior =
    behavior ?? (reduceMotion || distance > window.innerHeight * 1.75 ? "auto" : "smooth");
  const scrolling = document.scrollingElement ?? document.documentElement;

  const html = document.documentElement;
  const previous = html.style.scrollBehavior;
  html.style.scrollBehavior = scrollBehavior === "auto" ? "auto" : "";
  scrolling.scrollTo({ top, behavior: scrollBehavior });
  html.style.scrollBehavior = previous;

  const correct = () => {
    const desired = syncAnchorOffset(window.scrollY);
    const expected = layoutDocumentTop(target) - window.scrollY;
    const drift = expected - desired;
    if (Math.abs(drift) > 2) {
      scrolling.scrollBy({ top: drift, behavior: "auto" });
    }
  };
  if (scrollBehavior === "smooth") {
    window.setTimeout(correct, 520);
  } else {
    requestAnimationFrame(() => requestAnimationFrame(correct));
  }
  window.setTimeout(correct, 900);

  if (history.replaceState) {
    history.replaceState(null, "", `#${id}`);
  }

  return true;
}
