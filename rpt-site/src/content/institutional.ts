export type SiteLanguage = "pt" | "en" | "fr";

export const official = {
  home: "https://rugbyparatodos.org.br/",
  newsletter: "https://rugbyparatodos.org.br/contato_prospect.php",
  shop: "https://rugbyparatodos.mercadoshops.com.br/",
  whatsapp: "5511989830049",
  monthly: "https://www.catarse.me/orptnaovaiparar",
  incomeTax: "https://doeseuir.abraceumacausa.com.br/projeto/?projectId=1430",
  helpAsYouCan: "https://rugbyparatodos.colabore.org/doeja",
  donations: {
    "50": "https://www.paypal.com/donate?hosted_button_id=U8AC4EP6G8DRC",
    "100": "https://www.paypal.com/donate?hosted_button_id=4QUPEKR75EZQ2",
    "200": "https://www.paypal.com/donate?hosted_button_id=6P3R7T3VZKJ7J",
    other: "https://www.paypal.com/donate?hosted_button_id=CPBKD3YKWNQZE",
  },
  social: [
    { name: "Instagram", href: "https://www.instagram.com/rugbyparatodos/", icon: "c381b.svg" },
    {
      name: "YouTube",
      href: "https://www.youtube.com/channel/UCAe9PXJkXKLWcQ3cRD8jG_w",
      icon: "9d4f7.svg",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/institutorugbyparatodos/",
      icon: "d0cd2.svg",
    },
    { name: "Facebook", href: "https://www.facebook.com/rugbyparatodos", icon: "976d6.svg" },
  ],
};

export const apparelSizes = ["P", "M", "G", "GG", "XG"] as const;

export type ShopProduct = {
  id: string;
  image: string;
  apparel: boolean;
  priceCents?: number;
  colors?: readonly {
    id: string;
    image: string;
    label: Record<SiteLanguage, string>;
  }[];
  name: Record<SiteLanguage, string>;
  blurb: Record<SiteLanguage, string>;
};

export const shopProducts: readonly ShopProduct[] = [
  {
    id: "camisa",
    image: "shop/camisa.webp",
    apparel: true,
    priceCents: 18900,
    name: { pt: "Camisa RPT", en: "RPT jersey", fr: "Maillot RPT" },
    blurb: {
      pt: "Polo amarela para vestir a causa em campo.",
      en: "Yellow polo to wear the cause on the field.",
      fr: "Polo jaune pour porter la cause sur le terrain.",
    },
  },
  {
    id: "camiseta",
    image: "shop/camiseta.webp",
    apparel: true,
    priceCents: 12900,
    name: { pt: "Camiseta RPT", en: "RPT t-shirt", fr: "T-shirt RPT" },
    blurb: {
      pt: "Camiseta branca para o treino e o dia a dia.",
      en: "White t-shirt for training and everyday wear.",
      fr: "T-shirt blanc pour l’entraînement et le quotidien.",
    },
  },
  {
    id: "agasalho",
    image: "shop/agasalho.webp",
    apparel: true,
    priceCents: 34900,
    name: { pt: "Agasalho RPT", en: "RPT jacket", fr: "Veste RPT" },
    blurb: {
      pt: "Jaqueta preta e amarela para chegar e sair do treino.",
      en: "Black and yellow jacket for the way to training.",
      fr: "Veste noire et jaune pour aller et revenir de l’entraînement.",
    },
  },
  {
    id: "bone",
    image: "shop/bone.webp",
    apparel: false,
    priceCents: 12000,
    name: { pt: "Boné RPT", en: "RPT cap", fr: "Casquette RPT" },
    blurb: {
      pt: "Boné preto com o monograma do instituto.",
      en: "Black cap with the institute monogram.",
      fr: "Casquette noire avec le monogramme de l’institut.",
    },
  },
  {
    id: "mochila",
    image: "shop/mochila.webp",
    apparel: false,
    priceCents: 27900,
    name: { pt: "Mochila RPT", en: "RPT backpack", fr: "Sac à dos RPT" },
    blurb: {
      pt: "Mochila para levar o rugby pra todo lado.",
      en: "Backpack to take rugby everywhere.",
      fr: "Sac à dos pour emporter le rugby partout.",
    },
  },
  {
    id: "bolsa",
    image: "shop/bolsa.webp",
    apparel: false,
    priceCents: 24900,
    name: { pt: "Bolsa RPT", en: "RPT duffel", fr: "Sac de sport RPT" },
    blurb: {
      pt: "Bolsa esportiva para treino e viagem.",
      en: "Sports bag for training and travel.",
      fr: "Sac de sport pour l’entraînement et les déplacements.",
    },
  },
  {
    id: "squeeze",
    image: "shop/squeeze.webp",
    apparel: false,
    priceCents: 15900,
    colors: [
      {
        id: "amarelo",
        image: "shop/squeeze.webp",
        label: { pt: "Amarelo", en: "Yellow", fr: "Jaune" },
      },
      {
        id: "preto",
        image: "shop/squeeze-preto.webp",
        label: { pt: "Preto", en: "Black", fr: "Noir" },
      },
    ],
    name: { pt: "Squeeze RPT", en: "RPT bottle", fr: "Gourde RPT" },
    blurb: {
      pt: "Para hidratar dentro e fora de campo.",
      en: "For hydration on and off the field.",
      fr: "Pour s’hydrater sur et hors du terrain.",
    },
  },
  {
    id: "bola",
    image: "shop/bola.webp",
    apparel: false,
    priceCents: 19900,
    name: { pt: "Bola de rugby RPT", en: "RPT rugby ball", fr: "Ballon de rugby RPT" },
    blurb: {
      pt: "A bola que começa o jogo e abre caminhos.",
      en: "The ball that starts the game and opens paths.",
      fr: "Le ballon qui lance le jeu et ouvre des chemins.",
    },
  },
];

export function formatShopPrice(cents: number, language: SiteLanguage) {
  return new Intl.NumberFormat(language === "en" ? "en-US" : language === "fr" ? "fr-FR" : "pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(cents / 100);
}

export function shopWhatsAppHref(
  productName: string,
  language: SiteLanguage,
  detail?: { size?: string; color?: string; price?: string },
) {
  const size = detail?.size;
  const color = detail?.color;
  const price = detail?.price;
  const sizeLine =
    language === "en"
      ? size
        ? `, size ${size}`
        : ""
      : language === "fr"
        ? size
          ? `, taille ${size}`
          : ""
        : size
          ? `, tamanho ${size}`
          : "";
  const colorLine =
    language === "en"
      ? color
        ? `, color ${color}`
        : ""
      : language === "fr"
        ? color
          ? `, couleur ${color}`
          : ""
        : color
          ? `, cor ${color}`
          : "";
  const priceLine = price
    ? language === "en"
      ? `, price ${price}`
      : language === "fr"
        ? `, prix ${price}`
        : `, valor ${price}`
    : "";
  const intro =
    language === "en"
      ? `Hi! I'd like to order this RPT product: ${productName}${sizeLine}${colorLine}${priceLine}`
      : language === "fr"
        ? `Bonjour ! Je souhaite commander ce produit RPT : ${productName}${sizeLine}${colorLine}${priceLine}`
        : `Olá! Quero pedir este produto RPT: ${productName}${sizeLine}${colorLine}${priceLine}`;
  return `https://wa.me/${official.whatsapp}?text=${encodeURIComponent(intro)}`;
}

export const awardsList = [
  {
    title: 'Prêmio Solidário Amaro Domingues | 10º Prêmio Sou do Esporte Foco Radical 2025',
    credit: "Sou do Esporte",
    year: "2025",
    href: "https://www.youtube.com/watch?v=oWL1v6F5-nI",
  },
  {
    title: 'Prêmio "Melhores ONGs 2024"',
    credit: "Instituto Doar, Instituto 'O mundo que queremos' e 'Ambev VOA'",
    year: "2024",
    href: "https://www.premiomelhores.org/",
  },
  {
    title: 'Prêmio "Ouro (2024) ONG Referência do Programa do Grupo Foguete"',
    credit: "Gerando Falcões",
    year: "2024",
    href: "https://rugbyparatodos.org.br/conteudo.php?idc=8&idcd=379&tit=Pr%C3%AAmio+OURO+da+Gerando+Falc%C3%B5es",
  },
  {
    title: 'Prêmio "Carolina de Maria de Jesus para Defensores de Direitos Humanos"',
    credit: 'Fiocruz — projeto "Cesta Básica Digital"',
    year: "2024",
    href: "https://www.instagram.com/p/C2LJLp2xC7E/",
  },
  {
    title: 'Prêmio "Melhores ONGs 2022"',
    credit: "Instituto Doar, Instituto 'O mundo que queremos' e 'Ambev VOA'",
    year: "2022",
    href: "https://www.premiomelhores.org/",
  },
  {
    title: 'Prêmio "Desenvolvimento 2022"',
    credit: "Subprefeitura de Santo Amaro",
    year: "2022",
    href: "https://www.noticiasdaregiao.com.br/aniversario-de-santo-amaro-comeca-com-o-premio-desenvolvimento/",
  },
  {
    title: 'Prêmio "Falcão Captação 2021"',
    credit: "Gerando Falcões",
    year: "2021",
    href: "https://rugbyparatodos.org.br/conteudo.php?idc=8&idcd=187&tit=NL+RPT+Abril+|+Pr%C3%AAmio+Falc%C3%A3o+Capta%C3%A7%C3%A3o+2021",
  },
  {
    title: "Prêmio Esporte e Cidadania 2006 e 2008",
    credit: "Prefeitura de São Paulo",
    year: "2006 / 08",
    href: "https://youtu.be/nCl3LLWUA28",
  },
  {
    title: "Troféu Brasil Rugby 2013 — Melhor Projeto Social de 2012",
    credit: "Confederação Brasileira de Rugby — CBRu",
    year: "2013",
    href: "https://www.facebook.com/media/set/?vanity=rugbyparatodos&set=a.10151309079366961",
  },
  {
    title: "Troféu Brasil Rugby 2017 — Apoiador do Rugby Brasileiro",
    credit: "Confederação Brasileira de Rugby — CBRu",
    year: "2017",
    href: "https://brasilrugby.com.br/2018/03/20/melhores-da-temporada-2017-sao-premiados-no-trofeu-brasil-rugby/",
  },
];

export const fundraisingProjects = [
  {
    place: "Paraisópolis",
    year: "Ano 20",
    image: "captacao/paraisopolis.jpg",
    pdf: "Apresentacao-Rpt-Paraisopolis-Ano-20-Captado-Compressed-20260409132008.pdf",
  },
  {
    place: "ESRRio",
    year: "Ano 11",
    image: "captacao/esrrio.jpg",
    pdf: "Apresentacao-Esrrio-Ano-11-2025-Compressed-20250919112310.pdf",
  },
  {
    place: "Leoas",
    year: "Ano 1",
    image: "captacao/leoas.jpg",
    pdf: "Apresentacao-Jogue-Como-Uma-Leoa-2026-Compressed-20260409130002.pdf",
  },
  {
    place: "Jd. Colombo",
    year: "Ano 1",
    image: "captacao/colombo.jpg",
    pdf: "Apresentacao-Rugby-Para-Todos-Jardim-Colombo-2026-Compressed-20260409131744.pdf",
  },
  {
    place: "Guarulhos",
    year: "Ano 2",
    image: "captacao/guarulhos.jpg",
    pdf: "Rpt-Guarulhos-1-Compressed-20250821104615.pdf",
  },
];

export const storyPeople = [
  {
    name: "Pamella",
    image: "stories/pamela.jpg",
    objectPosition: "48% 16%",
    quote: {
      pt: "“O Instituto representa para mim oportunidade. É um espaço de aprendizado e lazer que, dentro de uma favela, permite às crianças sonhar com algo melhor.”",
      en: "“The Institute means opportunity to me. It is a place to learn and play that, inside a favela, lets children dream of something better.”",
      fr: "“L’Institut représente pour moi une opportunité. C’est un espace d’apprentissage et de loisir qui, dans une favela, permet aux enfants de rêver à mieux.”",
    },
    bio: {
      pt: "Pamella começou como aluna em 2012, formou-se fisioterapeuta e também atuou como profissional no Instituto em Paraisópolis. Jogou nas Leoas por cerca de oito anos e foi tricampeã brasileira juvenil.",
      en: "Pamella joined as a student in 2012, became a physiotherapist and also worked with the Institute in Paraisópolis. She played for the Leoas for about eight years and was a three-time Brazilian youth champion.",
      fr: "Pamella a commencé comme élève en 2012, est devenue physiothérapeute et a aussi travaillé à l’Institut à Paraisópolis. Elle a joué avec les Leoas pendant environ huit ans et a été trois fois championne du Brésil chez les jeunes.",
    },
  },
  {
    name: "Bianca Silva",
    image: "stories/bia.jpg",
    objectPosition: "30% 18%",
    quote: {
      pt: "“Não passou pela minha mente que conseguiria ser atleta profissional. O esporte era somente um hobby.”",
      en: "“It never crossed my mind that I could become a professional athlete. Sport was only a hobby.”",
      fr: "“Je n’imaginais pas pouvoir devenir athlète professionnelle. Le sport n’était qu’un loisir.”",
    },
    bio: {
      pt: "Bianca Silva começou no Instituto em Paraisópolis em 2011, aos 11 anos. A primeira convocação para a Seleção Brasileira veio em 2017. Em 2023, foi a primeira brasileira a jogar profissionalmente no Japão.",
      en: "Bianca Silva started at the Institute in Paraisópolis in 2011, at age 11. Her first call-up to the Brazilian national team came in 2017. In 2023 she became the first Brazilian woman to play professionally in Japan.",
      fr: "Bianca Silva a commencé à l’Institut, à Paraisópolis, en 2011, à 11 ans. Sa première sélection en équipe du Brésil date de 2017. En 2023, elle est devenue la première Brésilienne à jouer professionnellement au Japon.",
    },
  },
  {
    name: "Karol Bedoya",
    image: "stories/karol.jpg",
    objectPosition: "50% 18%",
    quote: {
      pt: "“É mostrar potência: sair do lugar da insuficiência, do que falta, e ir para um lugar de força e de realização.”",
      en: "“It’s about showing power: leaving the place of lack and moving toward strength and achievement.”",
      fr: "“Il s’agit de montrer sa puissance : quitter le lieu du manque pour aller vers la force et la réalisation.”",
    },
    bio: {
      pt: "Karolina Bedoya é ex-aluna do Instituto em Paraisópolis. Hoje joga pelas Leoas, treina as categorias de base e atua como educadora no Rugby Para Todos. Em intercâmbio cultural na França (Essai Du Bout Du Monde), foi uma das 12 Leoas que viveram a experiência com o Rugby Olympique Pantin.",
      en: "Karolina Bedoya is a former Institute student from Paraisópolis. Today she plays for the Leoas, coaches their youth sides and works as an educator at Rugby Para Todos. On a cultural exchange in France (Essai Du Bout Du Monde), she was one of 12 Leoas who shared the experience with Rugby Olympique Pantin.",
      fr: "Karolina Bedoya est une ancienne élève de l’Institut à Paraisópolis. Aujourd’hui, elle joue avec les Leoas, entraîne les catégories de base et travaille comme éducatrice à Rugby Para Todos. Lors d’un échange culturel en France (Essai Du Bout Du Monde), elle a été l’une des 12 Leoas à vivre l’expérience avec le Rugby Olympique Pantin.",
    },
  },
  {
    name: "Lara",
    image: "stories/lara.png",
    quote: null,
    bio: {
      pt: "A história da Lara faz parte das trajetórias do Instituto. O relato completo está no canal do Rugby Para Todos no YouTube.",
      en: "Lara’s story is part of the Institute’s journeys. The full account is on the Rugby Para Todos YouTube channel.",
      fr: "L’histoire de Lara fait partie des parcours de l’Institut. Le récit complet est sur la chaîne YouTube de Rugby Para Todos.",
    },
  },
  {
    name: "Leila Silva",
    image: "stories/leila.jpg",
    quote: null,
    bio: {
      pt: "Leila Silva tinha 12 anos quando conheceu o projeto do Instituto Rugby Para Todos em Paraisópolis. Por “pressão” dos amigos da escola começou a praticar, mas, segundo ela, a paixão mesmo chegou em 2014, quando disputou o campeonato Cultura Inglesa. Em 2021, aos 24 anos, participou da sua primeira Olimpíada, em Tóquio, onde pôde representar a comunidade de Paraisópolis, o Rugby Para Todos e a Seleção Brasileira feminina, as Yaras.",
      en: "Leila Silva was 12 when she met Instituto Rugby Para Todos in Paraisópolis. She started because school friends insisted, and the real passion arrived in 2014, at the Cultura Inglesa championship. In 2021, at 24, she played her first Olympics in Tokyo, representing Paraisópolis, Rugby Para Todos and Brazil’s women’s team, the Yaras.",
      fr: "Leila Silva avait 12 ans lorsqu’elle a découvert l’Instituto Rugby Para Todos à Paraisópolis. Elle a commencé sous l’insistance de ses amis d’école, et la vraie passion est arrivée en 2014, au championnat Cultura Inglesa. En 2021, à 24 ans, elle a disputé ses premiers Jeux olympiques, à Tokyo, pour Paraisópolis, Rugby Para Todos et l’équipe féminine du Brésil, les Yaras.",
    },
  },
  {
    name: "Valentina",
    image: "stories/valentina.png",
    quote: {
      pt: "“Quando crescer, quero ser atriz. Meu sonho mesmo é ter uma casa linda, com um quarto bem grande só para mim.”",
      en: "“When I grow up I want to be an actress. My real dream is a beautiful house, with a big bedroom just for me.”",
      fr: "“Quand je serai grande, je veux être actrice. Mon vrai rêve, c’est une belle maison, avec une grande chambre rien que pour moi.”",
    },
    bio: {
      pt: "Valentina Pacheco, a Thina, começou no projeto em 2020. Tem 7 anos, está na turma do M10, no 2º ano do ensino fundamental, e ama estudar. A torcida do Instituto é para que ela siga amando a escola e, pela educação, alcance os próprios sonhos.",
      en: "Valentina Pacheco, Thina, joined in 2020. She is 7, trains with the under-10s, is in second grade and loves school. The Institute is cheering for her to keep loving her studies and to reach her dreams through education.",
      fr: "Valentina Pacheco, Thina, a commencé en 2020. Elle a 7 ans, s’entraîne avec les moins de 10 ans, est en deuxième année et adore l’école. L’Institut l’encourage à continuer d’aimer étudier et à réaliser ses rêves par l’éducation.",
    },
  },
  {
    name: "Patrício",
    image: "stories/patricio.jpg",
    quote: {
      pt: "“O rugby me ensinou a respeitar companheiros e adversários. Me deu a chance de jogar pela Seleção e de conhecer outros países.”",
      en: "“Rugby taught me to respect teammates and opponents. It gave me the chance to play for Brazil and to meet other countries.”",
      fr: "“Le rugby m’a appris à respecter coéquipiers et adversaires. Il m’a donné la chance de jouer pour le Brésil et de découvrir d’autres pays.”",
    },
    bio: {
      pt: "Patrício foi um dos primeiros alunos do projeto em Paraisópolis. Hoje é nutricionista do Instituto e jogador dos Leões de Paraisópolis. Formado em nutrição, segue ligado ao lugar onde começou.",
      en: "Patrício was one of the first students in Paraisópolis. Today he is the Institute’s nutritionist and a player for the Leões de Paraisópolis. Trained in nutrition, he remains tied to the place where he started.",
      fr: "Patrício a été l’un des premiers élèves à Paraisópolis. Aujourd’hui, il est nutritionniste de l’Institut et joueur des Leões de Paraisópolis. Diplômé en nutrition, il reste lié à l’endroit où tout a commencé.",
    },
  },
  {
    name: "Robert Tenório",
    image: "stories/robert.jpg",
    quote: null,
    bio: {
      pt: "Robert Tenório começou como aluno e jogou pelos Leões de Paraisópolis. Hoje é um dos destaques da Seleção Brasileira masculina de XV e segue sendo convocado. É mais uma trajetória que nasceu no projeto.",
      en: "Robert Tenório started as a student and played for the Leões de Paraisópolis. He is now one of the standouts of Brazil’s men’s XV and keeps being called up. Another path that began inside the project.",
      fr: "Robert Tenório a commencé comme élève et a joué pour les Leões de Paraisópolis. Il est aujourd’hui l’une des figures du XV masculin du Brésil et continue d’être convoqué. Un parcours de plus né dans le projet.",
    },
  },
  {
    name: "Eshyllen",
    image: "stories/eshyllen.png",
    quote: {
      pt: "“Eu investiria no esporte nas escolas e em projetos sociais, para trazer mais crianças e criar, nas comunidades, um lugar melhor para jogar.”",
      en: "“I would invest in sport at school and in social projects, to bring in more children and to build a better place to play inside communities.”",
      fr: "“J’investirais dans le sport à l’école et dans les projets sociaux, pour accueillir plus d’enfants et créer, dans les communautés, un meilleur endroit pour jouer.”",
    },
    bio: {
      pt: "Eshyllen tinha o rugby como caminho no Rio de Janeiro: começou em 2014 na Escolinha Social Rugby Rio, do Instituto. Destacou-se, entrou no Guanabara Rugby e hoje joga pela Seleção Brasileira de Sevens.",
      en: "Eshyllen found rugby in Rio de Janeiro: she started in 2014 at the Institute’s Escolinha Social Rugby Rio. She stood out, joined Guanabara Rugby and now plays for Brazil’s sevens team.",
      fr: "Eshyllen a trouvé le rugby à Rio de Janeiro : elle a commencé en 2014 à l’Escolinha Social Rugby Rio, de l’Institut. Elle s’est distinguée, a rejoint le Guanabara Rugby et joue aujourd’hui pour l’équipe brésilienne à sept.",
    },
  },
  {
    name: "Gilmar",
    image: "stories/gilmar.jpg",
    quote: {
      pt: "“O Instituto foi primordial para a mudança da minha vida. Me desenvolveu como cidadão e me deu diretrizes para imaginar um futuro diferente.”",
      en: "“The Institute was essential to changing my life. It developed me as a citizen and gave me a way to imagine a different future.”",
      fr: "“L’Institut a été essentiel pour changer ma vie. Il m’a fait grandir comme citoyen et m’a donné de quoi imaginer un autre avenir.”",
    },
    bio: {
      pt: "Gilmar, o Capitão, está nos Leões de Paraisópolis desde o começo e foi um dos primeiros alunos. Formado em administração, passou pelas seleções juvenis do Brasil e de São Paulo, e por clubes como Oaks, na Califórnia, e Pasteur.",
      en: "Gilmar, Capitão, has been with the Leões de Paraisópolis from the start and was one of the first students. Trained in business, he played for Brazil and São Paulo youth teams and for clubs including Oaks, in California, and Pasteur.",
      fr: "Gilmar, le Capitão, est avec les Leões de Paraisópolis depuis le début et fut l’un des premiers élèves. Diplômé en gestion, il est passé par les sélections jeunes du Brésil et de São Paulo, et par des clubs comme les Oaks, en Californie, et Pasteur.",
    },
  },
];

export const runningProjects = [
  {
    title: "RPT Paraisópolis",
    description: "Formação esportiva e cidadã no coração da comunidade.",
    image: "38e25.png",
  },
  {
    title: "Rugby Escolar",
    description: "Valores do rugby dentro das escolas públicas.",
    image: "8b5c7.png",
  },
  {
    title: "RPT Cidades",
    description: "Uma metodologia social pronta para alcançar novos territórios.",
    image: "dcc66.png",
  },
  {
    title: "Intercâmbio Social",
    description: "Experiências culturais e esportivas que atravessam fronteiras.",
    image: "46562.png",
  },
];

export const documents = [
  { file: "Estatuto-Social-Consolidado-Rpt-Age-02-03-2024-20240926212423.pdf", year: "2024" },
  { file: "Ata-De-Eleicao-Diretoria-Age-02-03-2024-20240926212535.pdf", year: "2024" },
  { file: "Rugby-Para-Todos-Cartao-Cnpj-20250829141702.pdf", year: "2025" },
  { file: "Anuario-Rpt-2025-20260518094730.pdf", year: "2025" },
  { file: "Codigo-De-Etica-Conduta-Instituto-Rpt-20250829110609.pdf", year: "2025" },
  { file: "Dre-Ecd-2024-20250821103245.pdf", year: "2024" },
];

export const institutional = {
  pt: {
    more: "Mais",
    links: [
      { id: "loja", label: "Loja" },
      { id: "servicos", label: "Serviços" },
      { id: "instituto", label: "O Instituto" },
      { id: "transparencia", label: "Transparência" },
    ],
    shopEyebrow: "Loja RPT",
    shopSectionTitle: "Vista essa causa.",
    shopSectionBody:
      "Camisa, camiseta, agasalho, boné, mochila, bolsa, squeeze e bola com a cara do Rugby Para Todos. Escolha um item e fale com a gente no WhatsApp para pedir.",
    shopCardCta: "Pedir no WhatsApp",
    shopShipping: "Frete não incluso",
    shopPriceNote: "Sob consulta",
    shopPriceLabel: "Valor",
    shopSizeLabel: "Tamanho",
    shopOneSize: "Tamanho único",
    shopColor: "Cor",
    shopPrev: "Produtos anteriores",
    shopNext: "Próximos produtos",
    methodEyebrow: "Como transformamos",
    methodTitle: "Uma metodologia. Muitas possibilidades.",
    methodBody:
      "A metodologia do Instituto RPT desenvolve as competências individuais e sociais entre os educandos, baseada nos ODS e os 5Ps da ONU: Pessoas, Planeta, Prosperidade, Paz e Parcerias.",
    methodTeam:
      "Jogadores e técnicos de rugby, educação física, pedagogia, psicologia, fisioterapia, nutrição e serviço social. Um time multidisciplinar que trabalha pelo desenvolvimento integral de cada jovem.",
    methodValues: ["Pessoas", "Planeta", "Prosperidade", "Paz", "Parcerias"],
    awards: "Prêmios recebidos",
    awardsSubtitle: "Muito suor e orgulho.",
    seeLink: "veja o link",
    incomeTax: "Doar com I.R.*",
    helpAsYouCan: "Ajude como puder",
    incomeTaxNote: "*Doação via incentivo fiscal (I.R.).",
    incomeTaxChannel: "Canal oficial · Doe Seu IR",
    helpChannel: "Canal oficial · Colabore",
    serviceEyebrow: "Experiências que desenvolvem",
    serviceTitle: "Nossos serviços.",
    serviceBody:
      "Oferecemos meios para capacitar pessoas a enfrentar desafios, desenvolver ideias, inovar e gerar impactos positivos. Nossa metodologia ajuda indivíduos, grupos e organizações.",
    serviceTitles: ["Clínica de Rugby", "Team Building", "Intercâmbio Social"],
    serviceDescriptions: [
      "Aprender rugby é também aprender respeito, lealdade e trabalho em equipe. A clínica ensina o esporte e desenvolve pessoas, dentro e fora de campo.",
      "O Rugby Para Todos Experience leva os valores de um dos esportes mais coletivos para dentro das organizações, unindo teoria e prática no mesmo encontro.",
      "Encontros com clubes de rugby para compartilhar experiências sociais, culturais e esportivas, abrindo caminhos para os jovens além das fronteiras.",
    ],
    serviceDetails: [
      "Atividades para crianças de 6 a 10 anos, adolescentes de 11 a 15 anos, jovens de 16 a 18 anos e adultos que desejam vivenciar a metodologia do Instituto.",
      "Conduzida por um coach e jogador do projeto, a experiência combina teoria e prática para fortalecer a colaboração e o desenvolvimento pessoal das equipes.",
      "Voltado a jovens de 16 a 25 anos, prioritariamente de escolas públicas e/ou em situação de vulnerabilidade social. Consulte a equipe sobre oportunidades e parcerias.",
    ],
    learnMore: "Conheça a experiência",
    contactService: "Fale com a nossa equipe",
    governanceEyebrow: "Compromisso dentro e fora de campo",
    governanceTitle: "Transparência & governança.",
    governanceBody:
      "Acesso livre aos documentos institucionais e um canal direto para sugestões, críticas e assuntos relacionados ao Instituto.",
    management: "Gestão responsável",
    managementBody:
      "Assembleia Geral, Conselho de Administração e Diretoria Administrativa compõem a estrutura de gestão do Instituto. Consulte os documentos oficiais para conhecer as regras e a composição da organização.",
    documentLabels: [
      "Estatuto Social",
      "Ata de Eleição",
      "Cartão CNPJ",
      "Relatório Anual",
      "Código de Ética e Conduta",
      "Demonstração de Resultados",
    ],
    ombudsman: "Ouvidoria",
    ombudsmanBody:
      "Informações, sugestões, elogios e reclamações ajudam a aprimorar os processos de governança do RPT.",
    supportEyebrow: "Faça parte",
    supportTitle: "Seu apoio abre caminhos.",
    supportBody:
      "Toda transformação precisa de um time. Sua doação mantém o esporte, a educação e o cuidado com as famílias em movimento.",
    once: "Doar uma vez",
    monthly: "Doar mensalmente",
    other: "Outro valor",
    chooseAmount: "Escolha o valor",
    channelOnce: "Canal oficial · PayPal",
    channelMonthly: "Canal oficial · Catarse",
    otherWays: "Outras formas de apoiar",
    give: "Continuar para doação",
    giveMonthly: "Apoiar pelo Catarse",
    externalPayment:
      "Você será direcionado ao canal oficial de doação. O pagamento acontece fora deste site.",
    monthlyBody: "Faça parte do apoio recorrente ao projeto pela campanha oficial no Catarse.",
    shopTitle: "Vista essa causa.",
    shopBody: "Comprando os produtos RPT, você também ajuda a transformar vidas.",
    shopCta: "Ver a loja RPT",
    work: "Trabalhe conosco",
    workBody: "Quer colocar seu talento a serviço da transformação? Converse com o Instituto.",
    workCta: "Quero trabalhar no RPT",
    contentEyebrow: "O RPT em movimento",
    contentTitle: "Conteúdos.",
    contentBody:
      "Acompanhe ações, reportagens, entrevistas e histórias que acontecem nos projetos.",
    archive: "Arquivo do Instituto",
    contentPhotoAlt:
      "Atletas do Instituto em treino, ajoelhadas no campo com o uniforme amarelo.",
    newsTitle: "Dentro e fora de campo.",
    news: [
      "Instituto Rugby Para Todos realiza Team Building para colaboradores da Renault em Curitiba",
      "Leoas conquistam título histórico: campeãs paulistas de 2026",
    ],
    newsletterTitle: "Assine a nossa newsletter.",
    newsletterBody:
      "Receba notícias e atividades do Instituto. O cadastro é realizado no canal oficial do RPT.",
    newsletterCta: "Abrir cadastro oficial",
    socialTitle: "Fique por dentro",
    videoTitle: "A transformação em primeira pessoa.",
    videoCta: "Assista às histórias no YouTube",
    externalNote: "Links externos abrem em uma nova aba.",
  },
  en: {
    more: "More",
    links: [
      { id: "loja", label: "Shop" },
      { id: "servicos", label: "Services" },
      { id: "instituto", label: "The Institute" },
      { id: "transparencia", label: "Transparency" },
    ],
    shopEyebrow: "RPT shop",
    shopSectionTitle: "Wear the cause.",
    shopSectionBody:
      "Jersey, t-shirt, jacket, cap, backpack, duffel, bottle and rugby ball with Rugby Para Todos spirit. Pick an item and message us on WhatsApp to order.",
    shopCardCta: "Order on WhatsApp",
    shopShipping: "Shipping not included",
    shopPriceNote: "Price on request",
    shopPriceLabel: "Price",
    shopSizeLabel: "Size",
    shopOneSize: "One size",
    shopColor: "Color",
    shopPrev: "Previous products",
    shopNext: "Next products",
    methodEyebrow: "How we make a difference",
    methodTitle: "One methodology. Many possibilities.",
    methodBody:
      "Instituto RPT develops individual and social skills through a methodology based on the SDGs and the UN's five Ps: People, Planet, Prosperity, Peace and Partnership.",
    methodTeam:
      "Rugby players and coaches, physical education, teaching, psychology, physiotherapy, nutrition and social work. A multidisciplinary team supporting each young person's development.",
    methodValues: ["People", "Planet", "Prosperity", "Peace", "Partnership"],
    awards: "Awards",
    awardsSubtitle: "Hard work and pride.",
    seeLink: "see the link",
    incomeTax: "Donate with income tax*",
    helpAsYouCan: "Help as you can",
    incomeTaxNote: "*Donation through a tax incentive program.",
    incomeTaxChannel: "Official channel · Doe Seu IR",
    helpChannel: "Official channel · Colabore",
    serviceEyebrow: "Experiences that develop people",
    serviceTitle: "Our services.",
    serviceBody:
      "We help people face challenges, develop ideas, innovate and make a positive impact. Our methodology supports individuals, groups and organizations.",
    serviceTitles: ["Rugby Clinic", "Team Building", "Social Exchange"],
    serviceDescriptions: [
      "Learning rugby also means learning respect, loyalty and teamwork. The clinic teaches the sport and develops people, on and off the field.",
      "Rugby Para Todos Experience brings the values of one of the most collaborative sports into organizations, joining theory and practice in one session.",
      "Meetings with rugby clubs to share social, cultural and sporting experiences, opening paths for young people beyond borders.",
    ],
    serviceDetails: [
      "Activities for children aged 6–10, adolescents aged 11–15, young people aged 16–18 and adults who want to experience the Institute's methodology.",
      "Led by a coach and project player, the experience combines theory and practice to strengthen collaboration and personal development.",
      "For young people aged 16–25, primarily from public schools and/or socially vulnerable backgrounds. Contact the team about opportunities and partnerships.",
    ],
    learnMore: "Explore the experience",
    contactService: "Talk to our team",
    governanceEyebrow: "Commitment on and off the field",
    governanceTitle: "Transparency & governance.",
    governanceBody:
      "Open access to institutional documents and a direct channel for suggestions, feedback and matters concerning the Institute.",
    management: "Responsible management",
    managementBody:
      "The General Assembly, Board of Directors and Executive Board form the Institute's governance structure. Consult the official documents for its rules and composition.",
    documentLabels: [
      "Bylaws",
      "Election Minutes",
      "CNPJ Registration",
      "Annual Report",
      "Code of Ethics and Conduct",
      "Income Statement",
    ],
    ombudsman: "Ombudsman",
    ombudsmanBody:
      "Information, suggestions, compliments and complaints help improve RPT's governance processes.",
    supportEyebrow: "Join us",
    supportTitle: "Your support opens doors.",
    supportBody:
      "Every transformation needs a team. Your donation keeps sport, education and care for families moving forward.",
    once: "Give once",
    monthly: "Give monthly",
    other: "Other amount",
    chooseAmount: "Choose an amount",
    channelOnce: "Official channel · PayPal",
    channelMonthly: "Official channel · Catarse",
    otherWays: "Other ways to support",
    give: "Continue to donation",
    giveMonthly: "Support on Catarse",
    externalPayment:
      "You will be directed to the official donation channel. Payment takes place outside this website.",
    monthlyBody: "Provide recurring support through the project's official Catarse campaign.",
    shopTitle: "Wear the cause.",
    shopBody: "Buying RPT products also helps transform lives.",
    shopCta: "See the RPT shop",
    work: "Work with us",
    workBody: "Want to put your skills to work for social change? Talk to the Institute.",
    workCta: "I want to work at RPT",
    contentEyebrow: "RPT in motion",
    contentTitle: "Stories & news.",
    contentBody: "Follow activities, reports, interviews and stories from our projects.",
    archive: "Institute archive",
    contentPhotoAlt:
      "Institute athletes kneeling on the field during training, in yellow kits.",
    newsTitle: "On and off the field.",
    news: [
      "Instituto Rugby Para Todos runs Team Building for Renault employees in Curitiba",
      "Leoas win a historic title: 2026 São Paulo champions",
    ],
    newsletterTitle: "Subscribe to our newsletter.",
    newsletterBody:
      "Receive news and activities from the Institute. Registration takes place on RPT's official channel.",
    newsletterCta: "Open official registration",
    socialTitle: "Stay connected",
    videoTitle: "Transformation, in their own words.",
    videoCta: "Watch the stories on YouTube",
    externalNote: "External links open in a new tab.",
  },
  fr: {
    more: "Plus",
    links: [
      { id: "loja", label: "Boutique" },
      { id: "servicos", label: "Services" },
      { id: "instituto", label: "L’Institut" },
      { id: "transparencia", label: "Transparence" },
    ],
    shopEyebrow: "Boutique RPT",
    shopSectionTitle: "Portez cette cause.",
    shopSectionBody:
      "Maillot, t-shirt, veste, casquette, sac à dos, sac de sport, gourde et ballon à l’image de Rugby Para Todos. Choisissez un article et écrivez-nous sur WhatsApp pour commander.",
    shopCardCta: "Commander sur WhatsApp",
    shopShipping: "Frais de port non inclus",
    shopPriceNote: "Prix sur demande",
    shopPriceLabel: "Prix",
    shopSizeLabel: "Taille",
    shopOneSize: "Taille unique",
    shopColor: "Couleur",
    shopPrev: "Produits précédents",
    shopNext: "Produits suivants",
    methodEyebrow: "Notre approche",
    methodTitle: "Une méthode. De nombreuses possibilités.",
    methodBody:
      "L’Instituto RPT développe les compétences individuelles et sociales à partir des ODD et des cinq P de l’ONU : Personnes, Planète, Prospérité, Paix et Partenariats.",
    methodTeam:
      "Joueurs et entraîneurs de rugby, éducation physique, pédagogie, psychologie, kinésithérapie, nutrition et travail social. Une équipe pluridisciplinaire au service du développement de chaque jeune.",
    methodValues: ["Personnes", "Planète", "Prospérité", "Paix", "Partenariats"],
    awards: "Nos distinctions",
    awardsSubtitle: "Beaucoup de travail et de fierté.",
    seeLink: "voir le lien",
    incomeTax: "Donner via l’impôt*",
    helpAsYouCan: "Aidez comme vous le pouvez",
    incomeTaxNote: "*Don via un dispositif d’incitation fiscale.",
    incomeTaxChannel: "Canal officiel · Doe Seu IR",
    helpChannel: "Canal officiel · Colabore",
    serviceEyebrow: "Des expériences qui font grandir",
    serviceTitle: "Nos services.",
    serviceBody:
      "Nous aidons à relever des défis, développer des idées, innover et avoir un impact positif. Notre méthode accompagne les individus, les groupes et les organisations.",
    serviceTitles: ["Initiation au rugby", "Team Building", "Échange social"],
    serviceDescriptions: [
      "Apprendre le rugby, c’est aussi apprendre le respect, la loyauté et le travail d’équipe. L’initiation enseigne le sport et développe les personnes, sur et hors du terrain.",
      "Rugby Para Todos Experience apporte les valeurs de l’un des sports les plus collectifs au cœur des organisations, en réunissant théorie et pratique.",
      "Des rencontres avec des clubs de rugby pour partager des expériences sociales, culturelles et sportives, et ouvrir des chemins aux jeunes au-delà des frontières.",
    ],
    serviceDetails: [
      "Activités pour les enfants de 6 à 10 ans, les adolescents de 11 à 15 ans, les jeunes de 16 à 18 ans et les adultes souhaitant découvrir notre méthode.",
      "Animée par un coach et un joueur du projet, l’expérience allie théorie et pratique pour renforcer la coopération et le développement personnel.",
      "Pour les jeunes de 16 à 25 ans, principalement issus d’écoles publiques et/ou en situation de vulnérabilité sociale. Contactez l’équipe pour les opportunités et partenariats.",
    ],
    learnMore: "Découvrir l’expérience",
    contactService: "Contacter notre équipe",
    governanceEyebrow: "Engagés sur et hors du terrain",
    governanceTitle: "Transparence & gouvernance.",
    governanceBody:
      "Un accès libre aux documents institutionnels et un canal direct pour vos suggestions, retours et questions concernant l’Institut.",
    management: "Une gestion responsable",
    managementBody:
      "L’Assemblée générale, le Conseil d’administration et la Direction administrative forment la structure de gouvernance. Consultez les documents officiels pour en connaître les règles et la composition.",
    documentLabels: [
      "Statuts",
      "Procès-verbal d’élection",
      "Immatriculation CNPJ",
      "Rapport annuel",
      "Code d’éthique et de conduite",
      "Compte de résultat",
    ],
    ombudsman: "Médiation",
    ombudsmanBody:
      "Informations, suggestions, compliments et réclamations contribuent à améliorer la gouvernance du RPT.",
    supportEyebrow: "Rejoignez-nous",
    supportTitle: "Votre soutien ouvre des portes.",
    supportBody:
      "Chaque transformation a besoin d’une équipe. Votre don maintient le sport, l’éducation et l’accompagnement des familles en mouvement.",
    once: "Don ponctuel",
    monthly: "Don mensuel",
    other: "Autre montant",
    chooseAmount: "Choisissez le montant",
    channelOnce: "Canal officiel · PayPal",
    channelMonthly: "Canal officiel · Catarse",
    otherWays: "Autres façons de soutenir",
    give: "Continuer vers le don",
    giveMonthly: "Soutenir sur Catarse",
    externalPayment:
      "Vous serez redirigé vers le canal officiel de don. Le paiement se déroule en dehors de ce site.",
    monthlyBody: "Soutenez régulièrement le projet grâce à sa campagne officielle sur Catarse.",
    shopTitle: "Portez cette cause.",
    shopBody: "Acheter les produits RPT contribue aussi à transformer des vies.",
    shopCta: "Voir la boutique RPT",
    work: "Travaillez avec nous",
    workBody:
      "Envie de mettre vos compétences au service du changement ? Échangez avec l’Institut.",
    workCta: "Je veux travailler au RPT",
    contentEyebrow: "Le RPT en mouvement",
    contentTitle: "Actualités.",
    contentBody: "Découvrez les actions, reportages, entretiens et histoires de nos projets.",
    archive: "Archives de l’Institut",
    contentPhotoAlt:
      "Athlètes de l’Institut à genoux sur le terrain pendant un entraînement, en maillot jaune.",
    newsTitle: "Sur et hors du terrain.",
    news: [
      "L’Instituto Rugby Para Todos organise un Team Building pour Renault à Curitiba",
      "Les Leoas remportent un titre historique : championnes de São Paulo 2026",
    ],
    newsletterTitle: "Abonnez-vous à notre newsletter.",
    newsletterBody:
      "Recevez les actualités de l’Institut. L’inscription se fait sur le canal officiel du RPT.",
    newsletterCta: "Ouvrir l’inscription officielle",
    socialTitle: "Restez connectés",
    videoTitle: "La transformation, racontée par eux.",
    videoCta: "Voir les histoires sur YouTube",
    externalNote: "Les liens externes s’ouvrent dans un nouvel onglet.",
  },
};
