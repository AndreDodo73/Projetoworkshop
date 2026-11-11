export type Fabric = {
  name: string;
  description: string;
  image: string;
  alt: string;
};

export const fabrics: Fabric[] = [
  {
    name: "Linho Natural",
    description:
      "O cru do linho, com a irregularidade nobre do fio. Uma base clara para estofados, cortinas e peças que recebem a luz do dia.",
    image: "/fernando-forest/linho-natural.jpg",
    alt: "Trama fechada de linho natural em tom cru",
  },
  {
    name: "Trama Areia",
    description:
      "Bege mineral, quase pó de pedra. A trama acalma superfícies amplas e deixa o ambiente respirar.",
    image: "/fernando-forest/trama-areia.jpg",
    alt: "Tecido bege areia com trama uniforme",
  },
  {
    name: "Bouclé Marfim",
    description:
      "Laçadas em marfim quente. O volume do bouclé traz aconchego tátil sem perder a linha sóbria.",
    image: "/fernando-forest/boucle-marfim.jpg",
    alt: "Bouclé marfim com laçadas densas",
  },
  {
    name: "Textura Oliva",
    description:
      "Verde de folha madura, com relevo discreto. Para poltronas e painéis que pedem presença sem alarde.",
    image: "/fernando-forest/textura-oliva.jpg",
    alt: "Tecido oliva com nervuras finas",
  },
  {
    name: "Linho Floresta",
    description:
      "Verde floresta, mate e profundo. Uma cor que segura a luz e permanece no estofado por muitos anos.",
    image: "/fernando-forest/linho-floresta.jpg",
    alt: "Estofado em verde floresta sob luz suave",
  },
  {
    name: "Trama Terracota",
    description:
      "Terracota queimada, como argila no fim da tarde. Um acento quente para a peça que se quer ver de perto.",
    image: "/fernando-forest/trama-terracota.jpg",
    alt: "Tecido terracota de toque macio",
  },
];
