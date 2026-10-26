import svgPaths from "./svg-trzv7013po";
import imgEquipamentos from "./3a7901187f89cd9ca3be462555e3061133917928.png";
import imgAtletaTreinando from "./135a87646d57110c12fda8b9764de32faaccddce.png";
import imgEstruturaInterna from "./65e913fa297303b4fcc8d5d22393893e6b956e92.png";
import imgRodrigoFarias from "./978baaaf70f56ca33ac1fb607419361a243bff2a.png";
import imgAnaLuisa from "./7917b0410322b5b75914d197712fffc242d55c79.png";
import imgBrunoT from "./f374078a3311f864e69180b2fc8568b20d9f2c9e.png";
import imgCamilaD from "./d4a62d52a819ef7d4b7d881577dd8428fdc62a95.png";

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#e8400a] text-[12px] tracking-[1.44px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">ESTRUTURA</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Container">
      <div className="bg-[#e8400a] h-px shrink-0 w-[32px]" data-name="Horizontal Divider" />
      <Container4 />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Oswald:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[36px] text-white tracking-[-1.8px] uppercase w-full">
        <p className="leading-[37.8px]">EQUIPAMENTO</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Oswald:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[36px] text-white tracking-[-1.8px] uppercase w-full">
        <p className="leading-[37.8px]">QUE NÃO TE</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Oswald:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e8400a] text-[36px] tracking-[-1.8px] uppercase w-full">
        <p className="leading-[37.8px]">LIMITA.</p>
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <Container5 />
      <Container6 />
      <Container7 />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Container3 />
      <Heading1 />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[384px] pb-[0.56px] pt-[15.19px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#b0b0b0] text-[15px] w-full">
        <p className="leading-[24.38px] mb-0">Cada peça selecionada com um critério: aguentar</p>
        <p className="leading-[24.38px]">seu melhor dia todos os dias.</p>
      </div>
    </div>
  );
}

function Equipamentos() {
  return (
    <div className="aspect-[4/3] relative shrink-0 w-full" data-name="Equipamentos">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-full left-[-6.29%] max-w-none top-0 w-[112.57%]" src={imgEquipamentos} />
        </div>
        <div className="absolute bg-white inset-0 mix-blend-saturation" />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[32px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <Container2 />
      <Container8 />
      <Equipamentos />
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 3">
      <div className="flex flex-col font-['Oswald:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e8400a] text-[20px] tracking-[-0.5px] uppercase whitespace-nowrap">
        <p className="leading-[28px]">{`01 · CARDIO & CONDITIONING`}</p>
      </div>
    </div>
  );
}

function Svg() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="SVG">
          <path d="M19 9L12 15L5 9" id="Vector" stroke="var(--stroke-0, #E8400A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{ stroke: "color(display-p3 0.9098 0.2510 0.0392)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function IconifyIcon() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="iconify-icon">
      <Svg />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-start relative" data-name="Container">
      <IconifyIcon />
    </div>
  );
}

function Button() {
  return (
    <div className="relative shrink-0 w-full" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between py-[24px] relative w-full">
        <Heading2 />
        <div className="flex items-center justify-center relative shrink-0">
          <div className="flex-none rotate-180">
            <Container9 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[24.38px] relative shrink-0 w-[273.69px]" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#b0b0b0] text-[15px] top-[11.5px] whitespace-nowrap">
        <p className="leading-[24.38px]">Assault Bike Concept2 — 8 UNIDADES</p>
      </div>
    </div>
  );
}

function Item() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Item">
      <div className="bg-[#e8400a] rounded-[9999px] shrink-0 size-[6px]" data-name="Background" />
      <Container11 />
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[24.38px] relative shrink-0 w-[290.86px]" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#b0b0b0] text-[15px] top-[11.5px] whitespace-nowrap">
        <p className="leading-[24.38px]">Remo Concept2 Model D — 6 UNIDADES</p>
      </div>
    </div>
  );
}

function Item1() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Item">
      <div className="bg-[#e8400a] rounded-[9999px] shrink-0 size-[6px]" data-name="Background" />
      <Container12 />
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[24.38px] relative shrink-0 w-[232.66px]" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#b0b0b0] text-[15px] top-[11.5px] whitespace-nowrap">
        <p className="leading-[24.38px]">SkiErg Concept2 — 4 UNIDADES</p>
      </div>
    </div>
  );
}

function Item2() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Item">
      <div className="bg-[#e8400a] rounded-[9999px] shrink-0 size-[6px]" data-name="Background" />
      <Container13 />
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[24.38px] relative shrink-0 w-[321.56px]" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#b0b0b0] text-[15px] top-[11.5px] whitespace-nowrap">
        <p className="leading-[24.38px]">Esteiras NordicTrack com inclinação negativa</p>
      </div>
    </div>
  );
}

function Item3() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Item">
      <div className="bg-[#e8400a] rounded-[9999px] shrink-0 size-[6px]" data-name="Background" />
      <Container14 />
    </div>
  );
}

function Container15() {
  return (
    <div className="h-[24.38px] relative shrink-0 w-[210.63px]" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-0 not-italic text-[#b0b0b0] text-[15px] top-[11.5px] whitespace-nowrap">
        <p className="leading-[24.38px]">Cordas de batalha 15m e 20m</p>
      </div>
    </div>
  );
}

function Item4() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Item">
      <div className="bg-[#e8400a] rounded-[9999px] shrink-0 size-[6px]" data-name="Background" />
      <Container15 />
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="List">
      <Item />
      <Item1 />
      <Item2 />
      <Item3 />
      <Item4 />
    </div>
  );
}

function Container10() {
  return (
    <div className="max-h-[500px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start max-h-[inherit] overflow-clip pb-[32px] relative rounded-[inherit] w-full">
        <List />
      </div>
    </div>
  );
}

function HorizontalBorder1() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#2a2a2a] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-px relative w-full">
        <Button />
        <Container10 />
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 3">
      <div className="flex flex-col font-['Oswald:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-white tracking-[-0.5px] uppercase whitespace-nowrap">
        <p className="leading-[28px]">02 · FORÇA LIVRE</p>
      </div>
    </div>
  );
}

function Svg1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="SVG">
          <path d="M19 9L12 15L5 9" id="Vector" stroke="var(--stroke-0, #6B6B6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{ stroke: "color(display-p3 0.4196 0.4196 0.4196)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function IconifyIcon1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="iconify-icon">
      <Svg1 />
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <IconifyIcon1 />
    </div>
  );
}

function Button1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between py-[24px] relative w-full">
        <Heading3 />
        <Container16 />
      </div>
    </div>
  );
}

function HorizontalBorder2() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#2a2a2a] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-px relative w-full">
        <Button1 />
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 3">
      <div className="flex flex-col font-['Oswald:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-white tracking-[-0.5px] uppercase whitespace-nowrap">
        <p className="leading-[28px]">03 · MÁQUINAS</p>
      </div>
    </div>
  );
}

function Svg2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="SVG">
          <path d="M19 9L12 15L5 9" id="Vector" stroke="var(--stroke-0, #6B6B6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{ stroke: "color(display-p3 0.4196 0.4196 0.4196)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function IconifyIcon2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="iconify-icon">
      <Svg2 />
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <IconifyIcon2 />
    </div>
  );
}

function Button2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between py-[24px] relative w-full">
        <Heading4 />
        <Container17 />
      </div>
    </div>
  );
}

function HorizontalBorder3() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#2a2a2a] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-px relative w-full">
        <Button2 />
      </div>
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 3">
      <div className="flex flex-col font-['Oswald:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-white tracking-[-0.5px] uppercase whitespace-nowrap">
        <p className="leading-[28px]">{`04 · FUNCIONAL & MOBILITY`}</p>
      </div>
    </div>
  );
}

function Svg3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="SVG">
          <path d="M19 9L12 15L5 9" id="Vector" stroke="var(--stroke-0, #6B6B6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{ stroke: "color(display-p3 0.4196 0.4196 0.4196)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function IconifyIcon3() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="iconify-icon">
      <Svg3 />
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <IconifyIcon3 />
    </div>
  );
}

function Button3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between py-[24px] relative w-full">
        <Heading5 />
        <Container18 />
      </div>
    </div>
  );
}

function HorizontalBorder4() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#2a2a2a] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-px relative w-full">
        <Button3 />
      </div>
    </div>
  );
}

function Heading6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 3">
      <div className="flex flex-col font-['Oswald:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-white tracking-[-0.5px] uppercase whitespace-nowrap">
        <p className="leading-[28px]">05 · INFRAESTRUTURA</p>
      </div>
    </div>
  );
}

function Svg4() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="SVG">
          <path d="M19 9L12 15L5 9" id="Vector" stroke="var(--stroke-0, #6B6B6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{ stroke: "color(display-p3 0.4196 0.4196 0.4196)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function IconifyIcon4() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="iconify-icon">
      <Svg4 />
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <IconifyIcon4 />
    </div>
  );
}

function Button4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between py-[24px] relative w-full">
        <Heading6 />
        <Container19 />
      </div>
    </div>
  );
}

function HorizontalBorder5() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#2a2a2a] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-px relative w-full">
        <Button4 />
      </div>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start justify-self-stretch pt-px relative row-2 self-start shrink-0" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#2a2a2a] border-solid border-t inset-0 pointer-events-none" />
      <HorizontalBorder1 />
      <HorizontalBorder2 />
      <HorizontalBorder3 />
      <HorizontalBorder4 />
      <HorizontalBorder5 />
    </div>
  );
}

function Container() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid gap-x-[64px] gap-y-[64px] grid grid-cols-[repeat(1,minmax(0,1fr))] grid-rows-[__544.89px_603.88px] relative w-full">
        <Container1 />
        <HorizontalBorder />
      </div>
    </div>
  );
}

function Section() {
  return (
    <div className="absolute bg-[#0a0a0a] content-stretch flex flex-col items-start left-0 px-[16px] py-[97px] right-0 top-[3636.39px]" data-name="Section">
      <div aria-hidden="true" className="absolute border-[#1e1e1e] border-b border-solid border-t inset-0 pointer-events-none" />
      <Container />
    </div>
  );
}

function AtletaTreinando() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Atleta treinando">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-121.97%] max-w-none top-0 w-[343.94%]" src={imgAtletaTreinando} />
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute content-stretch flex flex-col inset-0 items-start justify-center" data-name="Container">
      <AtletaTreinando />
      <div className="absolute bg-gradient-to-r from-[#111] inset-0 to-[rgba(17,17,17,0)] via-1/2 via-[rgba(17,17,17,0.8)]" data-name="Gradient" />
      <div className="absolute bg-gradient-to-t from-[#111] inset-0 to-[rgba(17,17,17,0)] via-1/2 via-[rgba(17,17,17,0)]" data-name="Gradient" />
      <div className="absolute bg-[rgba(232,64,10,0.1)] blur-[60px] h-[426px] mix-blend-screen right-0 rounded-[9999px] top-[213px] w-[196.5px]" data-name="Overlay+Blur" />
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Oswald:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[36px] text-white tracking-[-1.8px] uppercase w-full">
        <p className="leading-[36px]">SEM MÁGICA.</p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Oswald:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e8400a] text-[36px] tracking-[-1.8px] uppercase w-full">
        <p className="leading-[36px]">SEM ATALHOS.</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Oswald:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[36px] text-white tracking-[-1.8px] uppercase w-full">
        <p className="leading-[36px]">SEM DESCULPAS.</p>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 1">
      <Container23 />
      <Container24 />
      <Container25 />
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[9.1px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#d9d9d9] text-[20px] w-full">
        <p className="leading-[28px] mb-0">Treinos progressivos e</p>
        <p className="leading-[28px]">acompanhamento real!</p>
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[512px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#b0b0b0] text-[15px] w-full">
        <p className="leading-[24.38px] mb-0">Um espaço desenhado para quem treina com</p>
        <p className="leading-[24.38px] mb-0">intenção. Sem distrações. Sem promessas vazias.</p>
        <p className="leading-[24.38px]">Só você, o equipamento e o trabalho.</p>
      </div>
    </div>
  );
}

function Svg5() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p1159b040} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" style={{ stroke: "white", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function IconifyIcon5() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="iconify-icon">
      <Svg5 />
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Container">
      <IconifyIcon5 />
    </div>
  );
}

function LinkButton() {
  return (
    <div className="bg-[#e8400a] relative shrink-0 w-full" data-name="Link → Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[7.99px] items-center justify-center px-[32px] py-[16px] relative w-full">
          <div className="flex flex-col font-['Oswald:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white tracking-[1.2px] uppercase whitespace-nowrap">
            <p className="leading-[16px]">COMEÇAR AGORA</p>
          </div>
          <Container29 />
        </div>
      </div>
    </div>
  );
}

function LinkButton1() {
  return (
    <div className="bg-[#1e1e1e] relative shrink-0 w-full" data-name="Link → Button">
      <div aria-hidden="true" className="absolute border border-[#2a2a2a] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[33px] py-[17px] relative w-full">
          <div className="flex flex-col font-['Oswald:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white tracking-[1.2px] uppercase whitespace-nowrap">
            <p className="leading-[16px]">CONHECER O ESPAÇO</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start pt-[25.09px] relative shrink-0 w-full" data-name="Container">
      <LinkButton />
      <LinkButton1 />
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex flex-col gap-[14.9px] items-start max-w-[672px] relative shrink-0 w-full" data-name="Container">
      <Heading />
      <Container26 />
      <Container27 />
      <Container28 />
    </div>
  );
}

function Container21() {
  return (
    <div className="flex-[1_0_0] max-w-[1280px] min-h-px min-w-px relative" data-name="Container">
      <div className="content-stretch flex flex-col items-start max-w-[inherit] pb-[224px] px-[16px] relative w-full">
        <Container22 />
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Oswald:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-center text-white tracking-[-0.6px] whitespace-nowrap">
        <p className="leading-[32px]">05H–23H</p>
      </div>
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[4px] relative shrink-0" data-name="Margin">
      <Container32 />
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#6b6b6b] text-[10px] text-center tracking-[2px] uppercase whitespace-nowrap">
        <p className="leading-[15px]">HORÁRIO</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="col-1 justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[16px] relative w-full">
          <Margin />
          <Container33 />
        </div>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Oswald:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-center text-white tracking-[-0.6px] whitespace-nowrap">
        <p className="leading-[32px]">7 DIAS</p>
      </div>
    </div>
  );
}

function Margin1() {
  return (
    <div className="relative shrink-0" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[4px] relative">
        <Container34 />
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#6b6b6b] text-[10px] text-center tracking-[2px] uppercase whitespace-nowrap">
          <p className="leading-[15px]">DIAS/SEMANA</p>
        </div>
      </div>
    </div>
  );
}

function VerticalBorder() {
  return (
    <div className="col-2 justify-self-stretch relative row-1 self-start shrink-0" data-name="VerticalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(30,30,30,0)] border-l border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center pl-[17px] pr-[16px] relative w-full">
          <Margin1 />
          <Container35 />
        </div>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Oswald:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-center text-white tracking-[-0.6px] whitespace-nowrap">
        <p className="leading-[32px]">1.800M²</p>
      </div>
    </div>
  );
}

function Margin2() {
  return (
    <div className="relative shrink-0" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[4px] relative">
        <Container36 />
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#6b6b6b] text-[10px] text-center tracking-[2px] uppercase whitespace-nowrap">
          <p className="leading-[15px]">ESPAÇO</p>
        </div>
      </div>
    </div>
  );
}

function VerticalBorder1() {
  return (
    <div className="col-1 justify-self-stretch relative row-2 self-start shrink-0" data-name="VerticalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(30,30,30,0)] border-l border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center pl-[17px] pr-[16px] relative w-full">
          <Margin2 />
          <Container37 />
        </div>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Oswald:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-center text-white tracking-[-0.6px] whitespace-nowrap">
        <p className="leading-[32px]">+1.200</p>
      </div>
    </div>
  );
}

function Margin3() {
  return (
    <div className="relative shrink-0" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[4px] relative">
        <Container38 />
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#6b6b6b] text-[10px] text-center tracking-[2px] uppercase whitespace-nowrap">
          <p className="leading-[15px]">ALUNOS</p>
        </div>
      </div>
    </div>
  );
}

function VerticalBorder2() {
  return (
    <div className="col-2 justify-self-stretch relative row-2 self-start shrink-0" data-name="VerticalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(30,30,30,0)] border-l border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center pl-[17px] pr-[16px] relative w-full">
          <Margin3 />
          <Container39 />
        </div>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Oswald:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-center text-white tracking-[-0.6px] whitespace-nowrap">
        <p className="leading-[32px]">EST. 2018</p>
      </div>
    </div>
  );
}

function Margin4() {
  return (
    <div className="relative shrink-0" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[4px] relative">
        <Container40 />
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#6b6b6b] text-[10px] text-center tracking-[2px] uppercase whitespace-nowrap">
          <p className="leading-[15px]">FUNDAÇÃO</p>
        </div>
      </div>
    </div>
  );
}

function VerticalBorder3() {
  return (
    <div className="col-1 justify-self-stretch relative row-3 self-start shrink-0" data-name="VerticalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(30,30,30,0)] border-l border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center pl-[17px] pr-[16px] relative w-full">
          <Margin4 />
          <Container41 />
        </div>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid gap-x-[32px] gap-y-[32px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[___51px_51px_51px] py-[24px] relative w-full">
        <Container31 />
        <VerticalBorder />
        <VerticalBorder1 />
        <VerticalBorder2 />
        <VerticalBorder3 />
      </div>
    </div>
  );
}

function OverlayHorizontalBorderOverlayBlur() {
  return (
    <div className="absolute backdrop-blur-[2px] bg-[rgba(10,10,10,0.9)] bottom-0 content-stretch flex flex-col items-start left-0 pt-px px-[16px] right-0" data-name="Overlay+HorizontalBorder+OverlayBlur">
      <div aria-hidden="true" className="absolute border-[#1e1e1e] border-solid border-t inset-0 pointer-events-none" />
      <Container30 />
    </div>
  );
}

function Section1() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-0 min-h-[852px] overflow-clip pb-[58.43px] pt-[138.44px] right-0 top-0" data-name="Section">
      <Container20 />
      <Container21 />
      <OverlayHorizontalBorderOverlayBlur />
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#e8400a] text-[12px] tracking-[1.44px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">QUEM SOMOS</p>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Container">
      <div className="bg-[#e8400a] h-px shrink-0 w-[32px]" data-name="Horizontal Divider" />
      <Container46 />
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Oswald:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[36px] text-white tracking-[-1.8px] uppercase w-full">
        <p className="leading-[37.8px]">FORJADOS</p>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Oswald:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[36px] text-white tracking-[-1.8px] uppercase w-full">
        <p className="leading-[37.8px]">PELA</p>
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Oswald:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e8400a] text-[36px] tracking-[-1.8px] uppercase w-full">
        <p className="leading-[37.8px]">DISCIPLINA.</p>
      </div>
    </div>
  );
}

function Heading7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <Container47 />
      <Container48 />
      <Container49 />
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Container45 />
      <Heading7 />
    </div>
  );
}

function Container51() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.56px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#b0b0b0] text-[15px] w-full">
        <p className="leading-[24.38px] mb-0">A FORGEE nasceu de uma certeza simples:</p>
        <p className="leading-[24.38px]">ambiente mediano produz resultado mediano.</p>
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#b0b0b0] text-[15px] w-full">
        <p className="leading-[24.38px] mb-0">Cada metro quadrado foi pensado para que o</p>
        <p className="leading-[24.38px] mb-0">espaço não interfira — ele desaparece. O que fica</p>
        <p className="leading-[24.38px]">é o treino, a concentração e o progresso.</p>
      </div>
    </div>
  );
}

function Blockquote() {
  return (
    <div className="relative shrink-0 w-full" data-name="Blockquote">
      <div aria-hidden="true" className="absolute border-[#e8400a] border-l-2 border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start pb-[8px] pl-[26px] pt-[9.1px] relative w-full">
        <div className="flex flex-col font-['Inter:Medium_Italic',sans-serif] font-medium italic justify-center leading-[0] relative shrink-0 text-[20px] text-white whitespace-nowrap">
          <p className="leading-[28px] mb-0">{`"In silence, the transformation`}</p>
          <p className="leading-[28px]">{`begins."`}</p>
        </div>
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.63px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#b0b0b0] text-[15px] w-full">
        <p className="leading-[24.38px] mb-0">Aqui não tem música forçada, espelho em excesso</p>
        <p className="leading-[24.38px] mb-0">ou coach em cima. Tem equipamento que não</p>
        <p className="leading-[24.38px] mb-0">decepciona no seu melhor dia, profissionais que</p>
        <p className="leading-[24.38px] mb-0">aparecem quando você precisa e silêncio o</p>
        <p className="leading-[24.38px]">suficiente para se ouvir.</p>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex flex-col gap-[22.9px] items-start relative shrink-0 w-full" data-name="Container">
      <Container51 />
      <Container52 />
      <Blockquote />
      <Container53 />
    </div>
  );
}

function Container43() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[47.19px] items-start justify-self-stretch relative row-1 self-center shrink-0" data-name="Container">
      <Container44 />
      <Container50 />
    </div>
  );
}

function EstruturaInterna() {
  return (
    <div className="h-[451.25px] relative shrink-0 w-full" data-name="Estrutura interna">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-full left-[-43.81%] max-w-none top-0 w-[187.62%]" src={imgEstruturaInterna} />
        </div>
        <div className="absolute bg-white inset-0 mix-blend-saturation" />
      </div>
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#1e1e1e] col-1 content-stretch flex flex-col items-start justify-center justify-self-stretch relative row-2 self-center shrink-0" data-name="Background">
      <EstruturaInterna />
      <div aria-hidden="true" className="absolute bg-[rgba(255,255,255,0)] inset-0 pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_0px_white,inset_0px_0px_0px_1px_rgba(255,255,255,0.1)]" />
    </div>
  );
}

function Container42() {
  return (
    <div className="gap-x-[64px] gap-y-[64px] grid grid-cols-[repeat(1,minmax(0,1fr))] grid-rows-[__581.14px_451.25px] relative shrink-0 w-full" data-name="Container">
      <Container43 />
      <Background1 />
    </div>
  );
}

function Container55() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Oswald:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6b6b6b] text-[20px] w-full">
          <p className="leading-[28px]">01</p>
        </div>
      </div>
    </div>
  );
}

function Heading8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[5.2px] relative w-full">
        <div className="flex flex-col font-['Oswald:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white tracking-[0.8px] uppercase w-full">
          <p className="leading-[24px]">INTENSIDADE</p>
        </div>
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6b6b6b] text-[14px] w-full">
          <p className="leading-[22.75px] mb-0">O ambiente foi calibrado para elevar.</p>
          <p className="leading-[22.75px] mb-0">Iluminação, acústica, temperatura — tudo</p>
          <p className="leading-[22.75px]">serve ao treino.</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="bg-[#181818] col-1 justify-self-stretch relative row-1 self-start shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#2a2a2a] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[10.8px] items-start p-[33px] relative w-full">
        <Container55 />
        <Heading8 />
        <Container56 />
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Oswald:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6b6b6b] text-[20px] w-full">
          <p className="leading-[28px]">02</p>
        </div>
      </div>
    </div>
  );
}

function Heading9() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[5.1px] relative w-full">
        <div className="flex flex-col font-['Oswald:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white tracking-[0.8px] uppercase w-full">
          <p className="leading-[24px]">PRECISÃO</p>
        </div>
      </div>
    </div>
  );
}

function Container58() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[0.625px] relative w-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6b6b6b] text-[14px] w-full">
          <p className="leading-[22.75px] mb-0">Protocolo individualizado desde o dia um.</p>
          <p className="leading-[22.75px]">Nenhuma planilha genérica sai daqui.</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder1() {
  return (
    <div className="bg-[#181818] col-1 justify-self-stretch relative row-2 self-start shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#2a2a2a] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[10.9px] items-start p-[33px] relative w-full">
        <Container57 />
        <Heading9 />
        <Container58 />
      </div>
    </div>
  );
}

function Container59() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Oswald:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#6b6b6b] text-[20px] w-full">
          <p className="leading-[28px]">03</p>
        </div>
      </div>
    </div>
  );
}

function Heading10() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[5.1px] relative w-full">
        <div className="flex flex-col font-['Oswald:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white tracking-[0.8px] uppercase w-full">
          <p className="leading-[24px]">CONTROLE</p>
        </div>
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[0.625px] relative w-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6b6b6b] text-[14px] w-full">
          <p className="leading-[22.75px] mb-0">Você define o objetivo. Nós fornecemos o</p>
          <p className="leading-[22.75px]">caminho, o espaço e o suporte.</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder2() {
  return (
    <div className="bg-[#181818] col-1 justify-self-stretch relative row-3 self-start shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#2a2a2a] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[10.9px] items-start p-[33px] relative w-full">
        <Container59 />
        <Heading10 />
        <Container60 />
      </div>
    </div>
  );
}

function Container54() {
  return (
    <div className="gap-x-[32px] gap-y-[32px] grid grid-cols-[repeat(1,minmax(0,1fr))] grid-rows-[___214.25px_191.50px_191.50px] relative shrink-0 w-full" data-name="Container">
      <BackgroundBorder />
      <BackgroundBorder1 />
      <BackgroundBorder2 />
    </div>
  );
}

function Container62() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Inter:Italic',sans-serif] font-normal italic justify-center leading-[0] relative shrink-0 text-[#d9d9d9] text-[14px] w-full">
          <p className="leading-[22.75px] mb-0">{`"Treinei em academias em São Paulo por`}</p>
          <p className="leading-[22.75px] mb-0">anos. A FORGEE é a única que me fez não</p>
          <p className="leading-[22.75px]">{`sentir falta de nenhuma delas."`}</p>
        </div>
      </div>
    </div>
  );
}

function Container64() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white tracking-[0.7px] uppercase w-full">
        <p className="leading-[20px]">RAFAEL M.</p>
      </div>
    </div>
  );
}

function Container65() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6b6b6b] text-[12px] w-full">
        <p className="leading-[16px]">Engenheiro · Aluno há 3 anos</p>
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative w-full">
        <Container64 />
        <Container65 />
      </div>
    </div>
  );
}

function BackgroundBorder3() {
  return (
    <div className="bg-[#111] col-1 justify-self-stretch relative row-1 self-start shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#1e1e1e] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[24px] items-start pb-[33px] pt-[31.75px] px-[33px] relative w-full">
        <Container62 />
        <Container63 />
      </div>
    </div>
  );
}

function Container66() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Inter:Italic',sans-serif] font-normal italic justify-center leading-[0] relative shrink-0 text-[#d9d9d9] text-[14px] w-full">
          <p className="leading-[22.75px] mb-0">{`"Entrei querendo perder peso. Fiquei pela`}</p>
          <p className="leading-[22.75px] mb-0">comunidade e pela sensação de que</p>
          <p className="leading-[22.75px]">{`alguém realmente acompanha."`}</p>
        </div>
      </div>
    </div>
  );
}

function Container68() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white tracking-[0.7px] uppercase w-full">
        <p className="leading-[20px]">JULIANA T.</p>
      </div>
    </div>
  );
}

function Container69() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6b6b6b] text-[12px] w-full">
        <p className="leading-[16px]">Professora · Aluna há 2 anos</p>
      </div>
    </div>
  );
}

function Container67() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative w-full">
        <Container68 />
        <Container69 />
      </div>
    </div>
  );
}

function BackgroundBorder4() {
  return (
    <div className="bg-[#111] col-1 justify-self-stretch relative row-2 self-start shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#1e1e1e] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[24px] items-start pb-[33px] pt-[31.75px] px-[33px] relative w-full">
        <Container66 />
        <Container67 />
      </div>
    </div>
  );
}

function Container70() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Inter:Italic',sans-serif] font-normal italic justify-center leading-[0] relative shrink-0 text-[#d9d9d9] text-[14px] w-full">
          <p className="leading-[22.75px] mb-0">{`"A estrutura impressiona. Mas o que me`}</p>
          <p className="leading-[22.75px] mb-0">mantém são os profissionais. Nunca fui tão</p>
          <p className="leading-[22.75px]">{`bem orientado."`}</p>
        </div>
      </div>
    </div>
  );
}

function Container72() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white tracking-[0.7px] uppercase w-full">
        <p className="leading-[20px]">LUCAS O.</p>
      </div>
    </div>
  );
}

function Container73() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6b6b6b] text-[12px] w-full">
        <p className="leading-[16px]">Empresário · Aluno há 4 anos</p>
      </div>
    </div>
  );
}

function Container71() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative w-full">
        <Container72 />
        <Container73 />
      </div>
    </div>
  );
}

function BackgroundBorder5() {
  return (
    <div className="bg-[#111] col-1 justify-self-stretch relative row-3 self-start shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#1e1e1e] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[24px] items-start pb-[33px] pt-[31.75px] px-[33px] relative w-full">
        <Container70 />
        <Container71 />
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(1,minmax(0,1fr))] grid-rows-[___198.25px_198.25px_198.25px] relative shrink-0 w-full" data-name="Container">
      <BackgroundBorder3 />
      <BackgroundBorder4 />
      <BackgroundBorder5 />
    </div>
  );
}

function Section2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[96px] items-start left-0 max-w-[1280px] px-[16px] right-0 top-[948px]" data-name="Section">
      <Container42 />
      <Container54 />
      <Container61 />
    </div>
  );
}

function Container76() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#e8400a] text-[12px] text-center tracking-[1.44px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">O QUE OFERECEMOS</p>
      </div>
    </div>
  );
}

function Container75() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Container">
      <div className="bg-[#e8400a] h-px shrink-0 w-[32px]" data-name="Horizontal Divider" />
      <Container76 />
      <div className="bg-[#e8400a] h-px shrink-0 w-[32px]" data-name="Horizontal Divider" />
    </div>
  );
}

function Margin5() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[16px] relative shrink-0" data-name="Margin">
      <Container75 />
    </div>
  );
}

function Container77() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Oswald:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[36px] text-center text-white tracking-[-1.8px] uppercase whitespace-nowrap">
        <p className="leading-[37.8px]">UM PROTOCOLO</p>
      </div>
    </div>
  );
}

function Container78() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Oswald:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[36px] text-center text-white tracking-[-1.8px] uppercase whitespace-nowrap">
        <p className="leading-[37.8px]">PARA CADA</p>
      </div>
    </div>
  );
}

function Container79() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Oswald:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[36px] text-center text-white tracking-[-1.8px] uppercase whitespace-nowrap">
        <p className="leading-[37.8px]">OBJETIVO.</p>
      </div>
    </div>
  );
}

function Heading11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[211.58px]" data-name="Heading 2">
      <Container77 />
      <Container78 />
      <Container79 />
    </div>
  );
}

function Container74() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <Margin5 />
      <Heading11 />
    </div>
  );
}

function Heading12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Oswald:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-white uppercase w-full">
        <p className="leading-[32px]">01 — FORGEE STRENGTH</p>
      </div>
    </div>
  );
}

function Heading3Margin() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[16px] relative w-full">
        <Heading12 />
      </div>
    </div>
  );
}

function Container81() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pb-[0.63px] right-0 top-[-0.75px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#b0b0b0] text-[15px] whitespace-nowrap">
        <p className="leading-[24.38px] mb-0">Musculação por periodização. Para quem</p>
        <p className="leading-[24.38px] mb-0">quer construir massa e entender o</p>
        <p className="leading-[24.38px] mb-0">próprio corpo. Disponível como treino</p>
        <p className="leading-[24.38px] mb-0">livre com planilha ou acompanhado com</p>
        <p className="leading-[24.38px]">coach.</p>
      </div>
    </div>
  );
}

function Margin6() {
  return (
    <div className="h-[153.88px] relative shrink-0 w-full" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container81 />
      </div>
    </div>
  );
}

function Container83() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6b6b6b] text-[10px] tracking-[1px] uppercase w-full">
        <p className="leading-[15px]">PARA QUEM É</p>
      </div>
    </div>
  );
}

function Container84() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white w-full">
        <p className="leading-[20px] mb-0">Iniciantes a</p>
        <p className="leading-[20px]">avançados</p>
      </div>
    </div>
  );
}

function Container82() {
  return (
    <div className="col-1 justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative w-full">
        <Container83 />
        <Container84 />
      </div>
    </div>
  );
}

function Container86() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6b6b6b] text-[10px] tracking-[1px] uppercase w-full">
        <p className="leading-[15px]">FREQUÊNCIA</p>
      </div>
    </div>
  );
}

function Container87() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white w-full">
        <p className="leading-[20px]">3–5× por semana</p>
      </div>
    </div>
  );
}

function Container85() {
  return (
    <div className="col-2 justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start pb-[20px] relative w-full">
        <Container86 />
        <Container87 />
      </div>
    </div>
  );
}

function HorizontalBorder6() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#2a2a2a] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid gap-x-[16px] gap-y-[16px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[_59px] pt-[25px] relative w-full">
        <Container82 />
        <Container85 />
      </div>
    </div>
  );
}

function BackgroundBorder6() {
  return (
    <div className="bg-[#181818] col-1 justify-self-stretch relative row-1 self-start shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#2a2a2a] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start justify-between p-[33px] relative w-full">
        <Heading3Margin />
        <Margin6 />
        <HorizontalBorder6 />
      </div>
    </div>
  );
}

function Heading13() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Oswald:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-white uppercase w-full">
        <p className="leading-[32px]">03 — FORGEE MOBILITY</p>
      </div>
    </div>
  );
}

function Heading3Margin1() {
  return (
    <div className="mb-[-0.935px] relative shrink-0 w-full" data-name="Heading 3:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[16px] relative w-full">
        <Heading13 />
      </div>
    </div>
  );
}

function Container88() {
  return (
    <div className="mb-[-0.935px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#b0b0b0] text-[15px] w-full">
          <p className="leading-[24.38px] mb-0">Protocolo de mobilidade, postura e</p>
          <p className="leading-[24.38px] mb-0">cadeia posterior. Não é yoga. É trabalho</p>
          <p className="leading-[24.38px] mb-0">de corpo para quem treina pesado e não</p>
          <p className="leading-[24.38px]">quer se machucar.</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder7() {
  return (
    <div className="bg-[#181818] col-1 justify-self-stretch relative row-3 self-start shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#2a2a2a] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start pb-[33.935px] pt-[33px] px-[33px] relative w-full">
        <Heading3Margin1 />
        <Container88 />
      </div>
    </div>
  );
}

function Heading14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Oswald:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-white uppercase w-full">
        <p className="leading-[32px]">04 — PERSONAL TRAINING</p>
      </div>
    </div>
  );
}

function Heading3Margin2() {
  return (
    <div className="mb-[-1.125px] relative shrink-0 w-full" data-name="Heading 3:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[16px] relative w-full">
        <Heading14 />
      </div>
    </div>
  );
}

function Container89() {
  return (
    <div className="mb-[-1.125px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#b0b0b0] text-[15px] w-full">
          <p className="leading-[24.38px] mb-0">Sessões 1:1 com avaliação completa,</p>
          <p className="leading-[24.38px] mb-0">protocolo personalizado e revisão a cada</p>
          <p className="leading-[24.38px]">4 semanas. Individual ou em dupla.</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder8() {
  return (
    <div className="bg-[#181818] col-1 justify-self-stretch relative row-4 self-start shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#2a2a2a] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start pb-[34.125px] pt-[33px] px-[33px] relative w-full">
        <Heading3Margin2 />
        <Container89 />
      </div>
    </div>
  );
}

function Heading15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="flex flex-col font-['Oswald:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-white uppercase w-full">
        <p className="leading-[32px]">02 — FORGEE CONDITIONING</p>
      </div>
    </div>
  );
}

function Heading3Margin3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 3:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[16px] relative w-full">
        <Heading15 />
      </div>
    </div>
  );
}

function Container90() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[-0.94px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#d9d9d9] text-[15px] whitespace-nowrap">
        <p className="leading-[24.38px] mb-0">Sessões de 45 min com circuito de alta</p>
        <p className="leading-[24.38px] mb-0">intensidade — remo, assault bike, força</p>
        <p className="leading-[24.38px] mb-0">funcional e potência. Início e fim</p>
        <p className="leading-[24.38px]">marcados. Sem improvisar.</p>
      </div>
    </div>
  );
}

function Margin7() {
  return (
    <div className="h-[129.5px] relative shrink-0 w-full" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container90 />
      </div>
    </div>
  );
}

function Container92() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6b6b6b] text-[10px] tracking-[1px] uppercase w-full">
        <p className="leading-[15px]">PARA QUEM É</p>
      </div>
    </div>
  );
}

function Container93() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white w-full">
        <p className="leading-[20px]">Condicionamento</p>
      </div>
    </div>
  );
}

function Container91() {
  return (
    <div className="col-1 justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative w-full">
        <Container92 />
        <Container93 />
      </div>
    </div>
  );
}

function Container95() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6b6b6b] text-[10px] tracking-[1px] uppercase w-full">
        <p className="leading-[15px]">TURMAS</p>
      </div>
    </div>
  );
}

function Container96() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white w-full">
        <p className="leading-[20px]">06H · 12H · 18H...</p>
      </div>
    </div>
  );
}

function Container94() {
  return (
    <div className="col-2 justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative w-full">
        <Container95 />
        <Container96 />
      </div>
    </div>
  );
}

function HorizontalBorder7() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[rgba(232,64,10,0.3)] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid gap-x-[16px] gap-y-[16px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[_39px] pt-[25px] relative w-full">
        <Container91 />
        <Container94 />
      </div>
    </div>
  );
}

function Background2() {
  return (
    <div className="absolute bg-[#e8400a] right-px top-px" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[12px] py-[4px] relative">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-white tracking-[1px] uppercase whitespace-nowrap">
          <p className="leading-[15px]">DESTAQUE</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder9() {
  return (
    <div className="bg-[#1e1e1e] col-1 justify-self-stretch relative row-2 self-start shrink-0" data-name="Background+Border">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start justify-between p-[33px] relative w-full">
          <Heading3Margin3 />
          <Margin7 />
          <HorizontalBorder7 />
          <Background2 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e8400a] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Container80() {
  return (
    <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(1,minmax(0,1fr))] grid-rows-[____351.88px_307.50px_211.50px_187.12px] relative shrink-0 w-full" data-name="Container">
      <BackgroundBorder6 />
      <BackgroundBorder7 />
      <BackgroundBorder8 />
      <BackgroundBorder9 />
    </div>
  );
}

function Section3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[64px] items-start left-0 max-w-[1280px] px-[16px] right-0 top-[5139.16px]" data-name="Section">
      <Container74 />
      <Container80 />
    </div>
  );
}

function Container100() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#e8400a] text-[12px] text-center tracking-[1.44px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">INVESTIMENTO</p>
      </div>
    </div>
  );
}

function Container99() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Container">
      <div className="bg-[#e8400a] h-px shrink-0 w-[32px]" data-name="Horizontal Divider" />
      <Container100 />
      <div className="bg-[#e8400a] h-px shrink-0 w-[32px]" data-name="Horizontal Divider" />
    </div>
  );
}

function Margin8() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[16px] relative shrink-0" data-name="Margin">
      <Container99 />
    </div>
  );
}

function Container101() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Oswald:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[36px] text-center text-white tracking-[-1.8px] uppercase whitespace-nowrap">
        <p className="leading-[37.8px]">SEM MATRÍCULA.</p>
      </div>
    </div>
  );
}

function Container102() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Oswald:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[36px] text-center text-white tracking-[-1.8px] uppercase whitespace-nowrap">
        <p className="leading-[37.8px]">SEM FIDELIDADE.</p>
      </div>
    </div>
  );
}

function Container103() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Oswald:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[36px] text-center text-white tracking-[-1.8px] uppercase whitespace-nowrap">
        <p className="leading-[37.8px]">SEM ENROLAÇÃO.</p>
      </div>
    </div>
  );
}

function Heading16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[227.34px]" data-name="Heading 2">
      <Container101 />
      <Container102 />
      <Container103 />
    </div>
  );
}

function Container98() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Container">
      <Margin8 />
      <Heading16 />
    </div>
  );
}

function Container104() {
  return (
    <div className="content-stretch flex flex-col items-center max-w-[672px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#b0b0b0] text-[18px] text-center whitespace-nowrap">
        <p className="leading-[28px] mb-0">Mude de plano quando quiser. Cancele</p>
        <p className="leading-[28px]">com 30 dias. Sem justificativa.</p>
      </div>
    </div>
  );
}

function Heading17() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Oswald:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#b0b0b0] text-[16px] tracking-[1.6px] uppercase w-full">
        <p className="leading-[24px]">LIVRE</p>
      </div>
    </div>
  );
}

function Heading4Margin() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 4:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative w-full">
        <Heading17 />
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[42px] leading-[0] relative shrink-0 w-full whitespace-nowrap" data-name="Paragraph">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Oswald:Bold',sans-serif] justify-center left-0 not-italic text-[36px] text-white top-[19.5px]">
        <p className="leading-[40px]">R$149</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Oswald:Medium',sans-serif] font-medium justify-center left-[91.16px] text-[#6b6b6b] text-[18px] top-[28px]">
        <p className="leading-[28px]">/mês</p>
      </div>
    </div>
  );
}

function Margin9() {
  return (
    <div className="relative shrink-0 w-full" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[32px] relative w-full">
        <Paragraph />
      </div>
    </div>
  );
}

function Svg6() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path clipRule="evenodd" d={svgPaths.p3773df80} fill="var(--fill-0, #B0B0B0)" fillRule="evenodd" id="Vector" style={{ fill: "color(display-p3 0.6902 0.6902 0.6902)", fillOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function IconifyIcon6() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="iconify-icon">
      <Svg6 />
    </div>
  );
}

function Item5() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Item">
      <IconifyIcon6 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#b0b0b0] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Acesso ilimitado 05H–23H</p>
      </div>
    </div>
  );
}

function Svg7() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path clipRule="evenodd" d={svgPaths.p3773df80} fill="var(--fill-0, #B0B0B0)" fillRule="evenodd" id="Vector" style={{ fill: "color(display-p3 0.6902 0.6902 0.6902)", fillOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function IconifyIcon7() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="iconify-icon">
      <Svg7 />
    </div>
  );
}

function Item6() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Item">
      <IconifyIcon7 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#b0b0b0] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Avaliação física de entrada</p>
      </div>
    </div>
  );
}

function Svg8() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path clipRule="evenodd" d={svgPaths.p3773df80} fill="var(--fill-0, #B0B0B0)" fillRule="evenodd" id="Vector" style={{ fill: "color(display-p3 0.6902 0.6902 0.6902)", fillOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function IconifyIcon8() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="iconify-icon">
      <Svg8 />
    </div>
  );
}

function Item7() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Item">
      <IconifyIcon8 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#b0b0b0] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Planilha de treino inicial</p>
      </div>
    </div>
  );
}

function Svg9() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path clipRule="evenodd" d={svgPaths.p3773df80} fill="var(--fill-0, #B0B0B0)" fillRule="evenodd" id="Vector" style={{ fill: "color(display-p3 0.6902 0.6902 0.6902)", fillOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function IconifyIcon9() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="iconify-icon">
      <Svg9 />
    </div>
  );
}

function Item8() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Item">
      <IconifyIcon9 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#b0b0b0] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">App FORGEE</p>
      </div>
    </div>
  );
}

function List1() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="List">
      <Item5 />
      <Item6 />
      <Item7 />
      <Item8 />
    </div>
  );
}

function ListMargin() {
  return (
    <div className="relative shrink-0 w-full" data-name="List:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[32px] relative w-full">
        <List1 />
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-[#1e1e1e] relative shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#2a2a2a] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[33px] py-[17px] relative w-full">
          <div className="flex flex-col font-['Oswald:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white tracking-[1.2px] uppercase whitespace-nowrap">
            <p className="leading-[16px]">QUERO ESSE PLANO</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder10() {
  return (
    <div className="bg-[#111] col-1 justify-self-stretch relative row-1 self-start shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#2a2a2a] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start p-[33px] relative w-full">
        <Heading4Margin />
        <Margin9 />
        <ListMargin />
        <Button5 />
      </div>
    </div>
  );
}

function Heading18() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Oswald:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#b0b0b0] text-[16px] tracking-[1.6px] uppercase w-full">
        <p className="leading-[24px]">ELITE</p>
      </div>
    </div>
  );
}

function Heading4Margin1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 4:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] relative w-full">
        <Heading18 />
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[42px] leading-[0] relative shrink-0 w-full whitespace-nowrap" data-name="Paragraph">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Oswald:Bold',sans-serif] justify-center left-0 not-italic text-[36px] text-white top-[19.5px]">
        <p className="leading-[40px]">R$389</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Oswald:Medium',sans-serif] font-medium justify-center left-[95.7px] text-[#6b6b6b] text-[18px] top-[28px]">
        <p className="leading-[28px]">/mês</p>
      </div>
    </div>
  );
}

function Margin10() {
  return (
    <div className="relative shrink-0 w-full" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[32px] relative w-full">
        <Paragraph1 />
      </div>
    </div>
  );
}

function Svg10() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path clipRule="evenodd" d={svgPaths.p3773df80} fill="var(--fill-0, #B0B0B0)" fillRule="evenodd" id="Vector" style={{ fill: "color(display-p3 0.6902 0.6902 0.6902)", fillOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function IconifyIcon10() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="iconify-icon">
      <Svg10 />
    </div>
  );
}

function Item9() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Item">
      <IconifyIcon10 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#b0b0b0] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Tudo do plano Plus</p>
      </div>
    </div>
  );
}

function Svg11() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path clipRule="evenodd" d={svgPaths.p3773df80} fill="var(--fill-0, #B0B0B0)" fillRule="evenodd" id="Vector" style={{ fill: "color(display-p3 0.6902 0.6902 0.6902)", fillOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function IconifyIcon11() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="iconify-icon">
      <Svg11 />
    </div>
  );
}

function Item10() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Item">
      <IconifyIcon11 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#b0b0b0] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">4 sessões de Personal/mês</p>
      </div>
    </div>
  );
}

function Svg12() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path clipRule="evenodd" d={svgPaths.p3773df80} fill="var(--fill-0, #B0B0B0)" fillRule="evenodd" id="Vector" style={{ fill: "color(display-p3 0.6902 0.6902 0.6902)", fillOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function IconifyIcon12() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="iconify-icon">
      <Svg12 />
    </div>
  );
}

function Item11() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Item">
      <IconifyIcon12 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#b0b0b0] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Acesso ilimitado a classes</p>
      </div>
    </div>
  );
}

function Svg13() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path clipRule="evenodd" d={svgPaths.p3773df80} fill="var(--fill-0, #B0B0B0)" fillRule="evenodd" id="Vector" style={{ fill: "color(display-p3 0.6902 0.6902 0.6902)", fillOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function IconifyIcon13() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="iconify-icon">
      <Svg13 />
    </div>
  );
}

function Item12() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Item">
      <IconifyIcon13 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#b0b0b0] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Bioimpedância mensal</p>
      </div>
    </div>
  );
}

function Svg14() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path clipRule="evenodd" d={svgPaths.p3773df80} fill="var(--fill-0, #B0B0B0)" fillRule="evenodd" id="Vector" style={{ fill: "color(display-p3 0.6902 0.6902 0.6902)", fillOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function IconifyIcon14() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="iconify-icon">
      <Svg14 />
    </div>
  );
}

function Item13() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Item">
      <IconifyIcon14 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#b0b0b0] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">WhatsApp com coach dedicado</p>
      </div>
    </div>
  );
}

function List2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="List">
      <Item9 />
      <Item10 />
      <Item11 />
      <Item12 />
      <Item13 />
    </div>
  );
}

function ListMargin1() {
  return (
    <div className="relative shrink-0 w-full" data-name="List:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[32px] relative w-full">
        <List2 />
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="bg-[#1e1e1e] relative shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#2a2a2a] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[33px] py-[17px] relative w-full">
          <div className="flex flex-col font-['Oswald:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white tracking-[1.2px] uppercase whitespace-nowrap">
            <p className="leading-[16px]">QUERO ESSE PLANO</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder11() {
  return (
    <div className="bg-[#111] col-1 justify-self-stretch relative row-3 self-start shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#2a2a2a] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start p-[33px] relative w-full">
        <Heading4Margin1 />
        <Margin10 />
        <ListMargin1 />
        <Button6 />
      </div>
    </div>
  );
}

function Heading19() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Oswald:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e8400a] text-[16px] tracking-[1.6px] uppercase w-full">
        <p className="leading-[24px]">PLUS</p>
      </div>
    </div>
  );
}

function Heading4Margin2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 4:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[8px] pt-[16px] relative w-full">
        <Heading19 />
      </div>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[42px] leading-[0] relative shrink-0 w-full whitespace-nowrap" data-name="Paragraph">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Oswald:Bold',sans-serif] justify-center left-0 not-italic text-[36px] text-white top-[19.5px]">
        <p className="leading-[40px]">R$229</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Oswald:Medium',sans-serif] font-medium justify-center left-[95.44px] text-[#6b6b6b] text-[18px] top-[28px]">
        <p className="leading-[28px]">/mês</p>
      </div>
    </div>
  );
}

function Margin11() {
  return (
    <div className="relative shrink-0 w-full" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[32px] relative w-full">
        <Paragraph2 />
      </div>
    </div>
  );
}

function Svg15() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path clipRule="evenodd" d={svgPaths.p3773df80} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" style={{ fill: "white", fillOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function IconifyIcon15() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="iconify-icon">
      <Svg15 />
    </div>
  );
}

function Item14() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Item">
      <IconifyIcon15 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">
        <p className="leading-[20px]">Tudo do plano Livre</p>
      </div>
    </div>
  );
}

function Svg16() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path clipRule="evenodd" d={svgPaths.p3773df80} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" style={{ fill: "white", fillOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function IconifyIcon16() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="iconify-icon">
      <Svg16 />
    </div>
  );
}

function Item15() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Item">
      <IconifyIcon16 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">
        <p className="leading-[20px]">2 sessões de Personal/mês</p>
      </div>
    </div>
  );
}

function Svg17() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path clipRule="evenodd" d={svgPaths.p3773df80} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" style={{ fill: "white", fillOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function IconifyIcon17() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="iconify-icon">
      <Svg17 />
    </div>
  );
}

function Item16() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Item">
      <IconifyIcon17 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">
        <p className="leading-[20px]">1 aula Conditioning/semana</p>
      </div>
    </div>
  );
}

function Svg18() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path clipRule="evenodd" d={svgPaths.p3773df80} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" style={{ fill: "white", fillOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function IconifyIcon18() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="iconify-icon">
      <Svg18 />
    </div>
  );
}

function Item17() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Item">
      <IconifyIcon18 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">
        <p className="leading-[20px]">Revisão de planilha a cada 4 semanas</p>
      </div>
    </div>
  );
}

function Svg19() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path clipRule="evenodd" d={svgPaths.p3773df80} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" style={{ fill: "white", fillOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function IconifyIcon19() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="iconify-icon">
      <Svg19 />
    </div>
  );
}

function Item18() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Item">
      <IconifyIcon19 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">
        <p className="leading-[20px]">Acesso ao Mobility</p>
      </div>
    </div>
  );
}

function List3() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="List">
      <Item14 />
      <Item15 />
      <Item16 />
      <Item17 />
      <Item18 />
    </div>
  );
}

function ListMargin2() {
  return (
    <div className="relative shrink-0 w-full" data-name="List:margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[32px] relative w-full">
        <List3 />
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="bg-[#e8400a] relative shrink-0 w-full" data-name="Button">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[32px] py-[16px] relative w-full">
          <div className="flex flex-col font-['Oswald:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white tracking-[1.2px] uppercase whitespace-nowrap">
            <p className="leading-[16px]">QUERO ESSE PLANO</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Background3() {
  return (
    <div className="absolute bg-[#e8400a] left-[31.62%] right-[31.62%] top-px" data-name="Background">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start px-[16px] py-[4px] relative w-full">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-white tracking-[1px] uppercase whitespace-nowrap">
          <p className="leading-[15px]">MAIS ESCOLHIDO</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder12() {
  return (
    <div className="bg-[#1e1e1e] col-1 justify-self-stretch relative row-2 self-start shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#e8400a] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col items-start p-[33px] relative w-full">
        <div className="absolute bg-[rgba(255,255,255,0)] inset-0 shadow-[0px_25px_50px_-12px_rgba(232,64,10,0.05)]" data-name="Overlay+Shadow" />
        <Heading4Margin2 />
        <Margin11 />
        <ListMargin2 />
        <Button7 />
        <Background3 />
      </div>
    </div>
  );
}

function Container105() {
  return (
    <div className="gap-x-[32px] gap-y-[32px] grid grid-cols-[repeat(1,minmax(0,1fr))] grid-rows-[___382px_432px_418px] pt-[48px] relative shrink-0 w-full" data-name="Container">
      <BackgroundBorder10 />
      <BackgroundBorder11 />
      <BackgroundBorder12 />
    </div>
  );
}

function Container107() {
  return (
    <div className="content-stretch flex flex-col items-center px-[3.48px] relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6b6b6b] text-[12px] text-center tracking-[1.2px] uppercase whitespace-nowrap">
        <p className="leading-[16px] mb-0">PAGAMENTO VIA PIX OU CARTÃO (3× SEM JUROS) ·</p>
        <p className="leading-[16px] mb-0">CANCELAMENTO COM 30 DIAS DE AVISO · PLANO</p>
        <p className="leading-[16px]">ANUAL COM 15% DE DESCONTO</p>
      </div>
    </div>
  );
}

function Container108() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center relative">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#e8400a] text-[14px] text-center whitespace-nowrap">
          <p>
            <span className="leading-[20px]">DIÁRIA: R$ 39</span>
            <span className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic text-white">{` · Acesso por 1 dia`}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="relative shrink-0" data-name="Link">
      <div aria-hidden="true" className="absolute border-[#e8400a] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center pb-[3px] relative">
        <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white tracking-[1.2px] uppercase whitespace-nowrap">
          <p className="leading-[16px]">AGENDAR</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder13() {
  return (
    <div className="bg-[#181818] content-stretch flex gap-[16px] items-center px-[25px] py-[13px] relative shrink-0" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#2a2a2a] border-solid inset-0 pointer-events-none" />
      <Container108 />
      <Link />
    </div>
  );
}

function Margin12() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[16px] relative shrink-0" data-name="Margin">
      <BackgroundBorder13 />
    </div>
  );
}

function Container106() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center pt-[32px] relative shrink-0 w-full" data-name="Container">
      <Container107 />
      <Margin12 />
    </div>
  );
}

function Container97() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start max-w-[inherit] px-[16px] relative w-full">
        <Container98 />
        <Container104 />
        <Container105 />
        <Container106 />
      </div>
    </div>
  );
}

function Section4() {
  return (
    <div className="absolute bg-[#0a0a0a] content-stretch flex flex-col items-start left-0 py-[97px] right-0 top-[6574.55px]" data-name="Section">
      <div aria-hidden="true" className="absolute border-[#1e1e1e] border-b border-solid border-t inset-0 pointer-events-none" />
      <Container97 />
    </div>
  );
}

function Container111() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#e8400a] text-[12px] tracking-[1.44px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">QUEM TE ACOMPANHA</p>
      </div>
    </div>
  );
}

function Container110() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Container">
      <div className="bg-[#e8400a] h-px shrink-0 w-[32px]" data-name="Horizontal Divider" />
      <Container111 />
    </div>
  );
}

function Container112() {
  return (
    <div className="content-stretch flex flex-col items-start mb-[-0.01px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Oswald:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[36px] text-white tracking-[-1.8px] uppercase w-full">
        <p className="leading-[37.8px]">COACHES QUE</p>
      </div>
    </div>
  );
}

function Container113() {
  return (
    <div className="content-stretch flex flex-col items-start mb-[-0.01px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Oswald:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[36px] text-white tracking-[-1.8px] uppercase w-full">
        <p className="leading-[37.8px]">TREINAM.</p>
      </div>
    </div>
  );
}

function Heading20() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.01px] relative shrink-0 w-full" data-name="Heading 2">
      <Container112 />
      <Container113 />
    </div>
  );
}

function Container109() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Container110 />
      <Heading20 />
    </div>
  );
}

function Container114() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[672px] pb-[0.75px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#b0b0b0] text-[15px] w-full">
        <p className="leading-[22.5px] mb-0">Todos graduados em Educação Física. Todos</p>
        <p className="leading-[22.5px]">registrados no CREF SP. Todos treinando.</p>
      </div>
    </div>
  );
}

function RodrigoFarias() {
  return (
    <div className="h-[481.33px] relative shrink-0 w-full" data-name="Rodrigo Farias">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-full left-[-50.1%] max-w-none top-0 w-[200.2%]" src={imgRodrigoFarias} />
        </div>
        <div className="absolute bg-white inset-0 mix-blend-saturation" />
      </div>
    </div>
  );
}

function Container116() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <RodrigoFarias />
    </div>
  );
}

function Container118() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#e8400a] text-[10px] tracking-[1px] uppercase w-full">
        <p className="leading-[15px]">HEAD COACH</p>
      </div>
    </div>
  );
}

function Heading21() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Oswald:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-white tracking-[1px] uppercase w-full">
        <p className="leading-[28px]">RODRIGO FARIAS</p>
      </div>
    </div>
  );
}

function Container119() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6b6b6b] text-[10px] uppercase w-full">
        <p className="leading-[15px]">CREF 045821-G/SP</p>
      </div>
    </div>
  );
}

function Container117() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <Container118 />
      <Heading21 />
      <Container119 />
    </div>
  );
}

function Background5() {
  return (
    <div className="absolute bg-gradient-to-t content-stretch flex flex-col from-[#111] inset-0 items-start justify-end pb-[8px] pt-[403.33px] px-[24px] to-[rgba(17,17,17,0)] via-1/2 via-[rgba(17,17,17,0.4)]" data-name="Background">
      <Container117 />
    </div>
  );
}

function Background4() {
  return (
    <div className="bg-[#1e1e1e] col-1 content-stretch flex flex-col items-start justify-self-stretch overflow-clip relative row-1 self-start shrink-0" data-name="Background">
      <Container116 />
      <Background5 />
    </div>
  );
}

function AnaLuisa() {
  return (
    <div className="h-[481.33px] relative shrink-0 w-full" data-name="Ana Luísa">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-[112.5%] left-0 max-w-none top-[-6.25%] w-full" src={imgAnaLuisa} />
        </div>
        <div className="absolute bg-white inset-0 mix-blend-saturation" />
      </div>
    </div>
  );
}

function Container120() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <AnaLuisa />
    </div>
  );
}

function Container122() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#e8400a] text-[10px] tracking-[1px] uppercase w-full">
        <p className="leading-[15px]">CONDITIONING</p>
      </div>
    </div>
  );
}

function Heading22() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Oswald:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-white tracking-[1px] uppercase w-full">
        <p className="leading-[28px]">ANA LUÍSA</p>
      </div>
    </div>
  );
}

function Container123() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6b6b6b] text-[10px] uppercase w-full">
        <p className="leading-[15px]">CREF 078342-G/SP</p>
      </div>
    </div>
  );
}

function Container121() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <Container122 />
      <Heading22 />
      <Container123 />
    </div>
  );
}

function Background7() {
  return (
    <div className="absolute bg-gradient-to-t content-stretch flex flex-col from-[#111] inset-0 items-start justify-end pb-[8px] pt-[403.33px] px-[24px] to-[rgba(17,17,17,0)] via-1/2 via-[rgba(17,17,17,0.4)]" data-name="Background">
      <Container121 />
    </div>
  );
}

function Background6() {
  return (
    <div className="bg-[#1e1e1e] col-1 content-stretch flex flex-col items-start justify-self-stretch overflow-clip relative row-2 self-start shrink-0" data-name="Background">
      <Container120 />
      <Background7 />
    </div>
  );
}

function BrunoT() {
  return (
    <div className="h-[481.33px] relative shrink-0 w-full" data-name="Bruno T.">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-[112.5%] left-0 max-w-none top-[-6.25%] w-full" src={imgBrunoT} />
        </div>
        <div className="absolute bg-white inset-0 mix-blend-saturation" />
      </div>
    </div>
  );
}

function Container124() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <BrunoT />
    </div>
  );
}

function Container126() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#e8400a] text-[10px] tracking-[1px] uppercase w-full">
        <p className="leading-[15px]">{`MOBILITY & REHAB`}</p>
      </div>
    </div>
  );
}

function Heading23() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Oswald:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-white tracking-[1px] uppercase w-full">
        <p className="leading-[28px]">BRUNO T.</p>
      </div>
    </div>
  );
}

function Container127() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6b6b6b] text-[10px] uppercase w-full">
        <p className="leading-[15px]">CREF 091205-G/SP</p>
      </div>
    </div>
  );
}

function Container125() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <Container126 />
      <Heading23 />
      <Container127 />
    </div>
  );
}

function Background9() {
  return (
    <div className="absolute bg-gradient-to-t content-stretch flex flex-col from-[#111] inset-0 items-start justify-end pb-[8px] pt-[403.33px] px-[24px] to-[rgba(17,17,17,0)] via-1/2 via-[rgba(17,17,17,0.4)]" data-name="Background">
      <Container125 />
    </div>
  );
}

function Background8() {
  return (
    <div className="bg-[#1e1e1e] col-1 content-stretch flex flex-col items-start justify-self-stretch overflow-clip relative row-3 self-start shrink-0" data-name="Background">
      <Container124 />
      <Background9 />
    </div>
  );
}

function CamilaD() {
  return (
    <div className="h-[481.33px] relative shrink-0 w-full" data-name="Camila D.">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 overflow-hidden">
          <img alt="" className="absolute h-[112.5%] left-0 max-w-none top-[-6.25%] w-full" src={imgCamilaD} />
        </div>
        <div className="absolute bg-white inset-0 mix-blend-saturation" />
      </div>
    </div>
  );
}

function Container128() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center overflow-clip relative shrink-0 w-full" data-name="Container">
      <CamilaD />
    </div>
  );
}

function Container130() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#e8400a] text-[10px] tracking-[1px] uppercase w-full">
        <p className="leading-[15px]">PERSONAL TRAINER</p>
      </div>
    </div>
  );
}

function Heading24() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Oswald:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-white tracking-[1px] uppercase w-full">
        <p className="leading-[28px]">CAMILA D.</p>
      </div>
    </div>
  );
}

function Container131() {
  return (
    <div className="content-stretch flex flex-col items-start pt-[4px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6b6b6b] text-[10px] uppercase w-full">
        <p className="leading-[15px]">CREF 063417-G/SP</p>
      </div>
    </div>
  );
}

function Container129() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Container">
      <Container130 />
      <Heading24 />
      <Container131 />
    </div>
  );
}

function Background11() {
  return (
    <div className="absolute bg-gradient-to-t content-stretch flex flex-col from-[#111] inset-0 items-start justify-end pb-[8.01px] pt-[403.32px] px-[24px] to-[rgba(17,17,17,0)] via-1/2 via-[rgba(17,17,17,0.4)]" data-name="Background">
      <Container129 />
    </div>
  );
}

function Background10() {
  return (
    <div className="bg-[#1e1e1e] col-1 content-stretch flex flex-col items-start justify-self-stretch overflow-clip relative row-4 self-start shrink-0" data-name="Background">
      <Container128 />
      <Background11 />
    </div>
  );
}

function Container115() {
  return (
    <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(1,minmax(0,1fr))] grid-rows-[____481.33px_481.33px_481.33px_481.33px] pt-[32.7px] relative shrink-0 w-full" data-name="Container">
      <Background4 />
      <Background6 />
      <Background8 />
      <Background10 />
    </div>
  );
}

function Section5() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[15.3px] items-start left-0 max-w-[1280px] px-[16px] right-0 top-[8615.94px]" data-name="Section">
      <Container109 />
      <Container114 />
      <Container115 />
    </div>
  );
}

function Container136() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#e8400a] text-[12px] tracking-[1.44px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">DÚVIDAS</p>
      </div>
    </div>
  );
}

function Container135() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Container">
      <div className="bg-[#e8400a] h-px shrink-0 w-[32px]" data-name="Horizontal Divider" />
      <Container136 />
    </div>
  );
}

function Container137() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Oswald:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[36px] text-white tracking-[-1.8px] uppercase w-full">
        <p className="leading-[37.8px]">PERGUNTAS</p>
      </div>
    </div>
  );
}

function Container138() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Oswald:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[36px] text-white tracking-[-1.8px] uppercase w-full">
        <p className="leading-[37.8px]">DIRETAS.</p>
      </div>
    </div>
  );
}

function Heading25() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <Container137 />
      <Container138 />
    </div>
  );
}

function Container134() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Container135 />
      <Heading25 />
    </div>
  );
}

function Heading26() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 3">
      <div className="flex flex-col font-['Oswald:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e8400a] text-[20px] tracking-[-0.5px] uppercase whitespace-nowrap">
        <p className="leading-[28px]">01 · PRECISO TER EXPERIÊNCIA?</p>
      </div>
    </div>
  );
}

function Svg20() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="SVG">
          <path d="M19 9L12 15L5 9" id="Vector" stroke="var(--stroke-0, #E8400A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{ stroke: "color(display-p3 0.9098 0.2510 0.0392)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function IconifyIcon20() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="iconify-icon">
      <Svg20 />
    </div>
  );
}

function Container139() {
  return (
    <div className="content-stretch flex flex-col items-start relative" data-name="Container">
      <IconifyIcon20 />
    </div>
  );
}

function Button8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between py-[24px] relative w-full">
        <Heading26 />
        <div className="flex items-center justify-center relative shrink-0">
          <div className="flex-none rotate-180">
            <Container139 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Container141() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 max-w-[672px] pb-[0.565px] right-0 top-[-0.81px]" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#b0b0b0] text-[15px] whitespace-nowrap">
        <p className="leading-[24.38px] mb-0">Não. Todos passam pela avaliação inicial — do</p>
        <p className="leading-[24.38px]">iniciante ao atleta. O ponto de partida é individual.</p>
      </div>
    </div>
  );
}

function Container140() {
  return (
    <div className="h-[80.75px] max-h-[500px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Container141 />
      </div>
    </div>
  );
}

function HorizontalBorder9() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#2a2a2a] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-px relative w-full">
        <Button8 />
        <Container140 />
      </div>
    </div>
  );
}

function Heading27() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 3">
      <div className="flex flex-col font-['Oswald:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-white tracking-[-0.5px] uppercase whitespace-nowrap">
        <p className="leading-[28px]">02 · POSSO TREINAR SOZINHO?</p>
      </div>
    </div>
  );
}

function Svg21() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="SVG">
          <path d="M19 9L12 15L5 9" id="Vector" stroke="var(--stroke-0, #6B6B6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{ stroke: "color(display-p3 0.4196 0.4196 0.4196)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function IconifyIcon21() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="iconify-icon">
      <Svg21 />
    </div>
  );
}

function Container142() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <IconifyIcon21 />
    </div>
  );
}

function Button9() {
  return (
    <div className="relative shrink-0 w-full" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between py-[24px] relative w-full">
        <Heading27 />
        <Container142 />
      </div>
    </div>
  );
}

function HorizontalBorder10() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#2a2a2a] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-px relative w-full">
        <Button9 />
      </div>
    </div>
  );
}

function Heading28() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 3">
      <div className="flex flex-col font-['Oswald:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-white tracking-[-0.5px] uppercase whitespace-nowrap">
        <p className="leading-[28px]">03 · COMO FUNCIONA O CANCELAMENTO?</p>
      </div>
    </div>
  );
}

function Svg22() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="SVG">
          <path d="M19 9L12 15L5 9" id="Vector" stroke="var(--stroke-0, #6B6B6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{ stroke: "color(display-p3 0.4196 0.4196 0.4196)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function IconifyIcon22() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="iconify-icon">
      <Svg22 />
    </div>
  );
}

function Container143() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <IconifyIcon22 />
    </div>
  );
}

function Button10() {
  return (
    <div className="relative shrink-0 w-full" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between py-[24px] relative w-full">
        <Heading28 />
        <Container143 />
      </div>
    </div>
  );
}

function HorizontalBorder11() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#2a2a2a] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-px relative w-full">
        <Button10 />
      </div>
    </div>
  );
}

function Heading29() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 3">
      <div className="flex flex-col font-['Oswald:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-white tracking-[-0.5px] uppercase whitespace-nowrap">
        <p className="leading-[28px]">04 · POSSO VISITAR ANTES DE ASSINAR?</p>
      </div>
    </div>
  );
}

function Svg23() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="SVG">
          <path d="M19 9L12 15L5 9" id="Vector" stroke="var(--stroke-0, #6B6B6B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{ stroke: "color(display-p3 0.4196 0.4196 0.4196)", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function IconifyIcon23() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="iconify-icon">
      <Svg23 />
    </div>
  );
}

function Container144() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <IconifyIcon23 />
    </div>
  );
}

function Button11() {
  return (
    <div className="relative shrink-0 w-full" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between py-[24px] relative w-full">
        <Heading29 />
        <Container144 />
      </div>
    </div>
  );
}

function HorizontalBorder12() {
  return (
    <div className="relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#2a2a2a] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-px relative w-full">
        <Button11 />
      </div>
    </div>
  );
}

function HorizontalBorder8() {
  return (
    <div className="content-stretch flex flex-col items-start pt-px relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#2a2a2a] border-solid border-t inset-0 pointer-events-none" />
      <HorizontalBorder9 />
      <HorizontalBorder10 />
      <HorizontalBorder11 />
      <HorizontalBorder12 />
    </div>
  );
}

function Container133() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[48.01px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <Container134 />
      <HorizontalBorder8 />
    </div>
  );
}

function Container148() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#e8400a] text-[12px] tracking-[1.44px] uppercase whitespace-nowrap">
        <p className="leading-[16px]">ONDE ESTAMOS</p>
      </div>
    </div>
  );
}

function Container147() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full" data-name="Container">
      <div className="bg-[#e8400a] h-px shrink-0 w-[32px]" data-name="Horizontal Divider" />
      <Container148 />
    </div>
  );
}

function Container149() {
  return (
    <div className="content-stretch flex flex-col items-start mb-[-0.01px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Oswald:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[36px] text-white tracking-[-1.8px] uppercase w-full">
        <p className="leading-[37.8px]">NO CORAÇÃO</p>
      </div>
    </div>
  );
}

function Container150() {
  return (
    <div className="content-stretch flex flex-col items-start mb-[-0.01px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Oswald:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[36px] text-white tracking-[-1.8px] uppercase w-full">
        <p className="leading-[37.8px]">DE INDAIATUBA.</p>
      </div>
    </div>
  );
}

function Heading30() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.01px] relative shrink-0 w-full" data-name="Heading 2">
      <Container149 />
      <Container150 />
    </div>
  );
}

function Container146() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Container147 />
      <Heading30 />
    </div>
  );
}

function Heading31() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 4">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <div className="flex flex-col font-['Oswald:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white tracking-[1.4px] uppercase w-full">
          <p className="leading-[20px]">ENDEREÇO</p>
        </div>
      </div>
    </div>
  );
}

function Container151() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-[0.875px] relative w-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#b0b0b0] text-[14px] w-full">
          <p className="leading-[22.75px] mb-0">Rua das Esmeraldas, 742</p>
          <p className="leading-[22.75px] mb-0">Jardim Morada do Sol</p>
          <p className="leading-[22.75px] mb-0">Indaiatuba, SP</p>
          <p className="leading-[22.75px]">CEP 13.334-210</p>
        </div>
      </div>
    </div>
  );
}

function Container152() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[0.9px] relative w-full">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6b6b6b] text-[12px] tracking-[1.2px] uppercase w-full">
          <p className="leading-[16px] mb-0">200M DO CARREFOUR · PRÓXIMO À SAÍDA</p>
          <p className="leading-[16px]">SP-075</p>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder14() {
  return (
    <div className="bg-[#111] relative shrink-0 w-full" data-name="Background+Border">
      <div aria-hidden="true" className="absolute border border-[#2a2a2a] border-solid inset-0 pointer-events-none" />
      <div className="content-stretch flex flex-col gap-[15.1px] items-start pb-[33px] pt-[49px] px-[33px] relative w-full">
        <Heading31 />
        <Container151 />
        <Container152 />
      </div>
    </div>
  );
}

function Heading32() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Oswald:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white tracking-[1.4px] uppercase w-full">
        <p className="leading-[20px]">HORÁRIOS</p>
      </div>
    </div>
  );
}

function Container155() {
  return (
    <div className="relative self-stretch shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col h-full items-start relative">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#b0b0b0] text-[14px] whitespace-nowrap">
          <p className="leading-[20px]">Seg-Sex</p>
        </div>
      </div>
    </div>
  );
}

function Container156() {
  return (
    <div className="relative self-stretch shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col h-full items-start relative">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">
          <p className="leading-[20px]">05H–23H</p>
        </div>
      </div>
    </div>
  );
}

function Item19() {
  return (
    <div className="content-stretch flex h-[29px] items-start justify-between pb-[9px] relative shrink-0 w-full" data-name="Item">
      <div aria-hidden="true" className="absolute border-[#2a2a2a] border-b border-solid inset-0 pointer-events-none" />
      <Container155 />
      <Container156 />
    </div>
  );
}

function Container157() {
  return (
    <div className="relative self-stretch shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col h-full items-start relative">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#b0b0b0] text-[14px] whitespace-nowrap">
          <p className="leading-[20px]">Sáb</p>
        </div>
      </div>
    </div>
  );
}

function Container158() {
  return (
    <div className="relative self-stretch shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col h-full items-start relative">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">
          <p className="leading-[20px]">07H–20H</p>
        </div>
      </div>
    </div>
  );
}

function Item20() {
  return (
    <div className="content-stretch flex h-[29px] items-start justify-between pb-[9px] relative shrink-0 w-full" data-name="Item">
      <div aria-hidden="true" className="absolute border-[#2a2a2a] border-b border-solid inset-0 pointer-events-none" />
      <Container157 />
      <Container158 />
    </div>
  );
}

function Container159() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#b0b0b0] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">Dom/Feriados</p>
      </div>
    </div>
  );
}

function Container160() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">
        <p className="leading-[20px]">08H–14H</p>
      </div>
    </div>
  );
}

function Item21() {
  return (
    <div className="content-stretch flex h-[28px] items-start justify-between pb-[8px] relative shrink-0 w-full" data-name="Item">
      <Container159 />
      <Container160 />
    </div>
  );
}

function List4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="List">
      <Item19 />
      <Item20 />
      <Item21 />
    </div>
  );
}

function Container154() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[16px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <Heading32 />
      <List4 />
    </div>
  );
}

function Heading33() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Oswald:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white tracking-[1.4px] uppercase w-full">
        <p className="leading-[20px]">CONTATO</p>
      </div>
    </div>
  );
}

function Svg24() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="SVG">
          <path d={svgPaths.p7303100} fill="var(--fill-0, #B0B0B0)" id="Vector" style={{ fill: "color(display-p3 0.6902 0.6902 0.6902)", fillOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function IconifyIcon24() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="iconify-icon">
      <Svg24 />
    </div>
  );
}

function Item22() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Item">
      <IconifyIcon24 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#b0b0b0] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">(19) 98234-5678</p>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[16.66%_8.33%_16.67%_8.34%]" data-name="Group">
      <div className="absolute inset-[-4.68%_-3.75%_-4.69%_-3.75%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.5417 10.2083">
          <g id="Group">
            <path d={svgPaths.pcddbf00} id="Vector" stroke="var(--stroke-0, #B0B0B0)" strokeWidth="0.875" style={{ stroke: "color(display-p3 0.6902 0.6902 0.6902)", strokeOpacity: "1" }} />
            <path d={svgPaths.p16f13f80} id="Vector_2" stroke="var(--stroke-0, #B0B0B0)" strokeLinecap="round" strokeWidth="0.875" style={{ stroke: "color(display-p3 0.6902 0.6902 0.6902)", strokeOpacity: "1" }} />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Svg25() {
  return (
    <div className="overflow-clip relative shrink-0 size-[14px]" data-name="SVG">
      <Group />
    </div>
  );
}

function IconifyIcon25() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-center justify-center left-0 top-1/2" data-name="iconify-icon">
      <Svg25 />
    </div>
  );
}

function Item23() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Item">
      <IconifyIcon25 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[26px] not-italic text-[#b0b0b0] text-[14px] top-[calc(50%-0.5px)] whitespace-nowrap">
        <p className="leading-[20px]">contato@forgee.academy</p>
      </div>
    </div>
  );
}

function Svg26() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_1_708)" id="SVG">
          <path d={svgPaths.p1536a240} fill="var(--fill-0, #B0B0B0)" id="Vector" style={{ fill: "color(display-p3 0.6902 0.6902 0.6902)", fillOpacity: "1" }} />
        </g>
        <defs>
          <clipPath id="clip0_1_708">
            <rect fill="white" height="14" style={{ fill: "white", fillOpacity: "1" }} width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IconifyIcon26() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="iconify-icon">
      <Svg26 />
    </div>
  );
}

function Item24() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Item">
      <IconifyIcon26 />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#b0b0b0] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">@forgee.academy</p>
      </div>
    </div>
  );
}

function List5() {
  return (
    <div className="content-stretch flex flex-col gap-[15.5px] items-start relative shrink-0 w-full" data-name="List">
      <Item22 />
      <Item23 />
      <Item24 />
    </div>
  );
}

function Container161() {
  return (
    <div className="col-2 content-stretch flex flex-col gap-[16px] items-start justify-self-stretch pb-[10px] relative row-1 self-start shrink-0" data-name="Container">
      <Heading33 />
      <List5 />
    </div>
  );
}

function Container153() {
  return (
    <div className="gap-x-[32px] gap-y-[32px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[_138px] relative shrink-0 w-full" data-name="Container">
      <Container154 />
      <Container161 />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[12.5%_13.54%_9.3%_13.54%]" data-name="Group">
      <div className="absolute inset-[-4%_0_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 13.0125">
          <g id="Group">
            <path d={svgPaths.p105b5580} fill="var(--fill-0, white)" id="Vector" style={{ fill: "white", fillOpacity: "1" }} />
            <path d={svgPaths.p38685800} id="Vector_2" stroke="var(--stroke-0, white)" style={{ stroke: "white", strokeOpacity: "1" }} />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Svg27() {
  return (
    <div className="overflow-clip relative shrink-0 size-[16px]" data-name="SVG">
      <Group1 />
    </div>
  );
}

function IconifyIcon27() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="iconify-icon">
      <Svg27 />
    </div>
  );
}

function Container163() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative">
        <IconifyIcon27 />
      </div>
    </div>
  );
}

function Button12() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e8400a] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[25.53px] items-center justify-center pl-[50.53px] pr-[33px] py-[17px] relative w-full">
          <div className="flex flex-col font-['Oswald:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white tracking-[1.2px] uppercase whitespace-nowrap">
            <p className="leading-[16px] mb-0">COMO</p>
            <p className="leading-[16px]">CHEGAR</p>
          </div>
          <Container163 />
        </div>
      </div>
    </div>
  );
}

function Svg28() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_736)" id="SVG">
          <path d={svgPaths.p2211a980} fill="var(--fill-0, #25D366)" id="Vector" style={{ fill: "color(display-p3 0.1451 0.8275 0.4000)", fillOpacity: "1" }} />
        </g>
        <defs>
          <clipPath id="clip0_1_736">
            <rect fill="white" height="16" style={{ fill: "white", fillOpacity: "1" }} width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IconifyIcon28() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="iconify-icon">
      <Svg28 />
    </div>
  );
}

function Container164() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative">
        <IconifyIcon28 />
      </div>
    </div>
  );
}

function Button13() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#25d366] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8.01px] items-center justify-center pb-[25px] pt-[24.5px] px-[33px] relative w-full">
          <div className="flex flex-col font-['Oswald:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#25d366] text-[12px] text-center tracking-[1.2px] uppercase whitespace-nowrap">
            <p className="leading-[16px]">WHATSAPP</p>
          </div>
          <Container164 />
        </div>
      </div>
    </div>
  );
}

function Container162() {
  return (
    <div className="content-stretch flex gap-[16px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Button12 />
      <Button13 />
    </div>
  );
}

function Container145() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[32px] items-start justify-self-stretch relative row-2 self-start shrink-0" data-name="Container">
      <Container146 />
      <BackgroundBorder14 />
      <Container153 />
      <Container162 />
    </div>
  );
}

function Container132() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid gap-x-[80px] gap-y-[80px] grid grid-cols-[repeat(1,minmax(0,1fr))] grid-rows-[__545.34px_664.59px] relative w-full">
        <Container133 />
        <Container145 />
      </div>
    </div>
  );
}

function Section6() {
  return (
    <div className="absolute bg-[#0a0a0a] content-stretch flex flex-col items-start left-0 px-[16px] py-[97px] right-0 top-[10925.84px]" data-name="Section">
      <div aria-hidden="true" className="absolute border-[#1e1e1e] border-b border-solid border-t inset-0 pointer-events-none" />
      <Container132 />
    </div>
  );
}

function Heading34() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full" data-name="Heading 2">
      <div className="flex flex-col font-['Oswald:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[48px] text-center text-white tracking-[-2.4px] uppercase whitespace-nowrap">
        <p className="leading-[43.2px] mb-0">A DECISÃO</p>
        <p className="leading-[43.2px] mb-0">JÁ FOI TOMADA.</p>
        <p className="leading-[43.2px]">AGORA É A AÇÃO.</p>
      </div>
    </div>
  );
}

function LinkButton2() {
  return (
    <div className="bg-[#111] content-stretch flex items-center justify-center px-[40px] py-[20px] relative shrink-0" data-name="Link → Button">
      <div className="flex flex-col font-['Oswald:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-center text-white tracking-[1.8px] uppercase whitespace-nowrap">
        <p className="leading-[28px]">AGENDAR VISITA GRATUITA</p>
      </div>
    </div>
  );
}

function Container165() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start max-w-[896px] px-[16px] relative shrink-0" data-name="Container">
      <Heading34 />
      <LinkButton2 />
    </div>
  );
}

function Container167() {
  return (
    <div className="content-stretch flex flex-col h-full items-center relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['Oswald:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#e8400a] text-[14px] text-center tracking-[4.2px] uppercase whitespace-nowrap">
        <p className="leading-[20px]">· AGENDE UMA VISITA · GRATUITA · SEM COMPROMISSO · TRAGA TÊNIS</p>
      </div>
    </div>
  );
}

function Container166() {
  return (
    <div className="absolute bottom-[12px] content-stretch flex gap-[16px] items-start left-0 top-[13px]" data-name="Container">
      <Container167 />
      <div className="h-full shrink-0 w-[654.41px]" data-name="Rectangle" />
      <div className="h-full shrink-0 w-[654.41px]" data-name="Rectangle" />
      <div className="h-full shrink-0 w-[654.41px]" data-name="Rectangle" />
    </div>
  );
}

function BackgroundHorizontalBorder() {
  return (
    <div className="absolute bg-[#111] bottom-[0.44px] h-[45px] left-0 right-0" data-name="Background+HorizontalBorder">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Container166 />
      </div>
      <div aria-hidden="true" className="absolute border-[#2a2a2a] border-solid border-t inset-0 pointer-events-none" />
    </div>
  );
}

function Section7() {
  return (
    <div className="absolute bg-[#e8400a] content-stretch flex flex-col items-center justify-center left-0 overflow-clip py-[128px] right-0 top-[12409.78px]" data-name="Section">
      <div className="absolute inset-[0_0_0.44px_0] mix-blend-overlay" data-name="Background+Image">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 overflow-hidden">
            <img alt="" className="absolute h-[149.93%] left-[-99.36%] max-w-none top-[-24.97%] w-[298.73%]" src={imgAtletaTreinando} />
          </div>
          <div className="absolute bg-white inset-0 mix-blend-saturation" />
        </div>
      </div>
      <div className="absolute bg-[rgba(232,64,10,0.8)] inset-[0_0_0.44px_0] mix-blend-multiply" data-name="Overlay" />
      <Container165 />
      <BackgroundHorizontalBorder />
    </div>
  );
}

function Main() {
  return (
    <div className="bg-[#111] h-[12903.34px] relative shrink-0 w-full" data-name="Main">
      <Section />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
    </div>
  );
}

function Link1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Link">
      <div className="flex flex-col font-['Oswald:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[30px] text-white tracking-[-1.5px] w-full">
        <p className="leading-[36px]">FORGEE</p>
      </div>
    </div>
  );
}

function Container171() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[384px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6b6b6b] text-[14px] w-full">
        <p className="leading-[20px]">BEYOND LIMITS KNOWN™</p>
      </div>
    </div>
  );
}

function Svg29() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_721)" id="SVG">
          <path d={svgPaths.p23163bc0} fill="var(--fill-0, #6B6B6B)" id="Vector" style={{ fill: "color(display-p3 0.4196 0.4196 0.4196)", fillOpacity: "1" }} />
        </g>
        <defs>
          <clipPath id="clip0_1_721">
            <rect fill="white" height="20" style={{ fill: "white", fillOpacity: "1" }} width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IconifyIcon29() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="iconify-icon">
      <Svg29 />
    </div>
  );
}

function Link2() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Link">
      <IconifyIcon29 />
    </div>
  );
}

function Svg30() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_701)" id="SVG">
          <path d={svgPaths.p3812c280} fill="var(--fill-0, #6B6B6B)" id="Vector" style={{ fill: "color(display-p3 0.4196 0.4196 0.4196)", fillOpacity: "1" }} />
        </g>
        <defs>
          <clipPath id="clip0_1_701">
            <rect fill="white" height="20" style={{ fill: "white", fillOpacity: "1" }} width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IconifyIcon30() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="iconify-icon">
      <Svg30 />
    </div>
  );
}

function Link3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Link">
      <IconifyIcon30 />
    </div>
  );
}

function LinkMargin() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pl-[16px] relative self-stretch shrink-0" data-name="Link:margin">
      <Link3 />
    </div>
  );
}

function Container172() {
  return (
    <div className="content-stretch flex h-[36px] items-start pt-[16px] relative shrink-0 w-full" data-name="Container">
      <Link2 />
      <LinkMargin />
    </div>
  );
}

function Container170() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[16px] items-start justify-self-stretch relative row-1 self-start shrink-0" data-name="Container">
      <Link1 />
      <Container171 />
      <Container172 />
    </div>
  );
}

function Heading35() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Oswald:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white tracking-[0.7px] uppercase w-full">
        <p className="leading-[20px]">ACADEMIA</p>
      </div>
    </div>
  );
}

function Item25() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[1.5px] pt-[2.5px] relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#b0b0b0] text-[14px] w-full">
        <p className="leading-[20px]">Espaço</p>
      </div>
    </div>
  );
}

function Item26() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[1.5px] pt-[2.5px] relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#b0b0b0] text-[14px] w-full">
        <p className="leading-[20px]">Programas</p>
      </div>
    </div>
  );
}

function Item27() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[1.5px] pt-[2.5px] relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#b0b0b0] text-[14px] w-full">
        <p className="leading-[20px]">Equipe</p>
      </div>
    </div>
  );
}

function Item28() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[1.5px] pt-[2.5px] relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#b0b0b0] text-[14px] w-full">
        <p className="leading-[20px]">Planos</p>
      </div>
    </div>
  );
}

function List6() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="List">
      <Item25 />
      <Item26 />
      <Item27 />
      <Item28 />
    </div>
  );
}

function Container173() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[24px] items-start justify-self-stretch relative row-2 self-start shrink-0" data-name="Container">
      <Heading35 />
      <List6 />
    </div>
  );
}

function Heading36() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 4">
      <div className="flex flex-col font-['Oswald:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white tracking-[0.7px] uppercase w-full">
        <p className="leading-[20px]">{`LEGAL & REDES`}</p>
      </div>
    </div>
  );
}

function Item29() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[1.5px] pt-[2.5px] relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#b0b0b0] text-[14px] w-full">
        <p className="leading-[20px]">Política de Privacidade</p>
      </div>
    </div>
  );
}

function Item30() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[1.5px] pt-[2.5px] relative shrink-0 w-full" data-name="Item">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#b0b0b0] text-[14px] w-full">
        <p className="leading-[20px]">Termos de Uso</p>
      </div>
    </div>
  );
}

function List7() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="List">
      <Item29 />
      <Item30 />
    </div>
  );
}

function Container174() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[24px] items-start justify-self-stretch relative row-3 self-start shrink-0" data-name="Container">
      <Heading36 />
      <List7 />
    </div>
  );
}

function Container169() {
  return (
    <div className="gap-x-[48px] gap-y-[48px] grid grid-cols-[repeat(1,minmax(0,1fr))] grid-rows-[___124px_188px_108px] relative shrink-0 w-full" data-name="Container">
      <Container170 />
      <Container173 />
      <Container174 />
    </div>
  );
}

function Container175() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center px-[4.09px] relative">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6b6b6b] text-[12px] text-center tracking-[1.2px] uppercase whitespace-nowrap">
          <p className="leading-[16px] mb-0">FORGEE ACADEMIA LTDA. · CNPJ 00.000.000/0001-</p>
          <p className="leading-[16px]">00 · CREF SP</p>
        </div>
      </div>
    </div>
  );
}

function Margin13() {
  return (
    <div className="relative shrink-0" data-name="Margin">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[16px] relative">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#6b6b6b] text-[12px] tracking-[1.2px] uppercase whitespace-nowrap">
          <p className="leading-[16px]">DESIGN SYSTEM © 2026</p>
        </div>
      </div>
    </div>
  );
}

function HorizontalBorder13() {
  return (
    <div className="content-stretch flex flex-col items-center justify-between pt-[33px] relative shrink-0 w-full" data-name="HorizontalBorder">
      <div aria-hidden="true" className="absolute border-[#1e1e1e] border-solid border-t inset-0 pointer-events-none" />
      <Container175 />
      <Margin13 />
    </div>
  );
}

function Container168() {
  return (
    <div className="max-w-[1280px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[64px] items-start max-w-[inherit] px-[16px] relative w-full">
        <Container169 />
        <HorizontalBorder13 />
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#0a0a0a] content-stretch flex flex-col items-start pb-[40px] pt-[81px] relative shrink-0 w-full" data-name="Footer">
      <div aria-hidden="true" className="absolute border-[#1e1e1e] border-solid border-t inset-0 pointer-events-none" />
      <Container168 />
    </div>
  );
}

function Background() {
  return (
    <div className="absolute bg-[#111] content-stretch flex flex-col items-start left-0 min-h-[852px] right-0 top-0" data-name="Background">
      <Main />
      <Footer />
    </div>
  );
}

function Link4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Link">
      <div className="flex flex-col font-['Oswald:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-white tracking-[-1.2px] whitespace-nowrap">
        <p className="leading-[32px]">FORGEE</p>
      </div>
    </div>
  );
}

function Svg31() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="SVG">
          <path d="M20 7H4M20 12H4M20 17H4" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeWidth="1.5" style={{ stroke: "white", strokeOpacity: "1" }} />
        </g>
      </svg>
    </div>
  );
}

function Button14() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center p-[8px] relative shrink-0" data-name="Button">
      <Svg31 />
    </div>
  );
}

function Container176() {
  return (
    <div className="content-stretch flex h-[80px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Link4 />
      <Button14 />
    </div>
  );
}

function Header() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 px-[16px] top-0 w-[393px]" data-name="Header">
      <Container176 />
    </div>
  );
}

export default function Body() {
  return (
    <div className="bg-[#111] relative size-full" data-name="Body">
      <Background />
      <Header />
    </div>
  );
}