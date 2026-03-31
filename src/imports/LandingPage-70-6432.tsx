import svgPaths from "./svg-5c803cn868";
import imgCanvas from "figma:asset/86b3fda691f59b46f91144ad58313da64ae0ea7e.png";
import imgHeader from "figma:asset/27c0b8bdfc44b80c7d7440d8c5f236d1a34610bb.png";

function Container() {
  return <div className="absolute h-[1224.545px] left-0 top-0 w-[1986.364px]" data-name="Container" style={{ backgroundImage: "linear-gradient(90deg, rgba(255, 255, 255, 0.04) 0%, rgba(0, 0, 0, 0) 0%), linear-gradient(rgba(255, 255, 255, 0.04) 0%, rgba(0, 0, 0, 0) 0%)" }} />;
}

function Container1() {
  return <div className="absolute bg-[rgba(139,92,246,0.2)] blur-[120px] left-[693.18px] rounded-[30504000px] size-[600px] top-[312.27px]" data-name="Container" />;
}

function Container2() {
  return <div className="absolute bg-[rgba(167,139,250,0.1)] blur-[100px] left-[793.18px] rounded-[30504000px] size-[400px] top-[412.27px]" data-name="Container" />;
}

function Canvas() {
  return (
    <div className="absolute h-[1224.545px] left-0 top-0 w-[1986.364px]" data-name="Canvas">
      <img alt="" className="absolute inset-0 max-w-none object-contain pointer-events-none size-full" src={imgCanvas} />
    </div>
  );
}

function Text() {
  return (
    <div className="absolute content-stretch flex h-[26.989px] items-start left-[27.9px] top-[14.4px] w-[306.932px]" data-name="Text">
      <p className="font-['Poppins:Medium',sans-serif] leading-[27px] not-italic relative shrink-0 text-[18px] text-center text-white whitespace-nowrap">Accelerate your AI transformation</p>
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[21.989px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.9886 21.9886">
        <g id="Icon">
          <path d={svgPaths.p3938e00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.19886" />
        </g>
      </svg>
    </div>
  );
}

function Text1() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[348.32px] pl-[15.994px] pr-[16.008px] py-[0.909px] rounded-[30504000px] size-[53.991px] top-[0.91px]" data-name="Text">
      <div aria-hidden="true" className="absolute border-[0.909px] border-[rgba(255,255,255,0.7)] border-solid inset-0 pointer-events-none rounded-[30504000px]" />
      <Icon />
    </div>
  );
}

function Button() {
  return (
    <div className="h-[55.81px] relative rounded-[30504000px] shrink-0 w-full" data-name="Button">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Text />
        <Text1 />
      </div>
      <div aria-hidden="true" className="absolute border-[0.909px] border-[rgba(255,255,255,0.7)] border-solid inset-0 pointer-events-none rounded-[30504000px]" />
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute content-stretch flex flex-col h-[55.81px] items-start left-[773.57px] px-[17.997px] top-[890.5px] w-[439.219px]" data-name="Container">
      <Button />
    </div>
  );
}

function ParticleHero() {
  return (
    <div className="absolute bg-[#0a0a0a] border-[rgba(255,255,255,0.05)] border-b-[0.909px] border-solid h-[1225.454px] left-0 overflow-clip top-0 w-[1986.364px]" data-name="ParticleHero">
      <Container />
      <Container1 />
      <Container2 />
      <Canvas />
      <Container3 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="Icon">
          <path d={svgPaths.pf11d00} id="Star 1" stroke="var(--stroke-0, #8B5CF6)" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="2" />
          <path d={svgPaths.p3c892c00} id="Vector 1" stroke="var(--stroke-0, #8B5CF6)" strokeLinecap="round" strokeWidth="2" />
          <path d={svgPaths.p28c18580} id="Vector 2" stroke="var(--stroke-0, #8B5CF6)" strokeLinecap="round" strokeWidth="2" />
          <g id="tabler-icon-sparkles">
            <path d={svgPaths.p23a13210} id="Vector" stroke="var(--stroke-0, #8B5CF6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start leading-[normal] min-h-px min-w-px not-italic relative">
      <p className="font-['Poppins:Bold',sans-serif] relative shrink-0 text-[16px] text-white w-full">{`Generative AI & LLMs`}</p>
      <p className="font-['Poppins:Regular',sans-serif] relative shrink-0 text-[#9ca3af] text-[12px] w-full">Structured data workflows for chatbots, assistants, content generation, and enterprise language systems.</p>
    </div>
  );
}

function Item() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="Item">
      <Icon1 />
      <Frame />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="Icon">
          <path d={svgPaths.pf11d00} id="Star 1" stroke="var(--stroke-0, #8B5CF6)" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="2" />
          <path d={svgPaths.p3c892c00} id="Vector 1" stroke="var(--stroke-0, #8B5CF6)" strokeLinecap="round" strokeWidth="2" />
          <path d={svgPaths.p28c18580} id="Vector 2" stroke="var(--stroke-0, #8B5CF6)" strokeLinecap="round" strokeWidth="2" />
          <g id="tabler-icon-brand-mercedes">
            <path d={svgPaths.pd678b80} id="Vector" stroke="var(--stroke-0, #8B5CF6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start leading-[normal] min-h-px min-w-px not-italic relative">
      <p className="font-['Poppins:Bold',sans-serif] relative shrink-0 text-[16px] text-white w-full">{`Autonomous Driving`}</p>
      <p className="font-['Poppins:Regular',sans-serif] relative shrink-0 text-[#9ca3af] text-[12px] w-full">High-precision data solutions for perception, prediction, mapping, parking, and in-cabin intelligence.</p>
    </div>
  );
}

function Item1() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="Item">
      <Icon2 />
      <Frame1 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="Icon">
          <path d={svgPaths.pf11d00} id="Star 1" stroke="var(--stroke-0, #8B5CF6)" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="2" />
          <path d={svgPaths.p3c892c00} id="Vector 1" stroke="var(--stroke-0, #8B5CF6)" strokeLinecap="round" strokeWidth="2" />
          <path d={svgPaths.p28c18580} id="Vector 2" stroke="var(--stroke-0, #8B5CF6)" strokeLinecap="round" strokeWidth="2" />
          <g id="tabler-icon-microphone">
            <path d={svgPaths.p171f0b00} id="Vector" stroke="var(--stroke-0, #8B5CF6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start leading-[normal] min-h-px min-w-px not-italic relative">
      <p className="font-['Poppins:Bold',sans-serif] relative shrink-0 text-[16px] text-white w-full">{`Voice & Speech AI`}</p>
      <p className="font-['Poppins:Regular',sans-serif] relative shrink-0 text-[#9ca3af] text-[12px] w-full">Audio and language data solutions for speech recognition, synthesis, and conversational systems.</p>
    </div>
  );
}

function Item2() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="Item">
      <Icon3 />
      <Frame2 />
    </div>
  );
}

function Highlight() {
  return (
    <div className="content-stretch flex flex-col gap-[36px] items-start relative shrink-0 w-[400px]" data-name="Highlight">
      <Item />
      <Item1 />
      <Item2 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="Icon">
          <path d={svgPaths.pf11d00} id="Star 1" stroke="var(--stroke-0, #8B5CF6)" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="2" />
          <path d={svgPaths.p3c892c00} id="Vector 1" stroke="var(--stroke-0, #8B5CF6)" strokeLinecap="round" strokeWidth="2" />
          <path d={svgPaths.p28c18580} id="Vector 2" stroke="var(--stroke-0, #8B5CF6)" strokeLinecap="round" strokeWidth="2" />
          <g id="tabler-icon-robot-face">
            <path d={svgPaths.p7ab9c00} id="Vector" stroke="var(--stroke-0, #8B5CF6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start leading-[normal] min-h-px min-w-px not-italic relative">
      <p className="font-['Poppins:Bold',sans-serif] relative shrink-0 text-[16px] text-white w-full">{`Robotics & Embodied AI`}</p>
      <p className="font-['Poppins:Regular',sans-serif] relative shrink-0 text-[#9ca3af] text-[12px] w-full">Data workflows for perception, motion, manipulation, navigation, and human-robot interaction.</p>
    </div>
  );
}

function Item3() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="Item">
      <Icon4 />
      <Frame3 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="Icon">
          <path d={svgPaths.pf11d00} id="Star 1" stroke="var(--stroke-0, #8B5CF6)" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="2" />
          <path d={svgPaths.p3c892c00} id="Vector 1" stroke="var(--stroke-0, #8B5CF6)" strokeLinecap="round" strokeWidth="2" />
          <path d={svgPaths.p28c18580} id="Vector 2" stroke="var(--stroke-0, #8B5CF6)" strokeLinecap="round" strokeWidth="2" />
          <g id="tabler-icon-wave-saw-tool">
            <path d={svgPaths.p3510ed00} id="Vector" stroke="var(--stroke-0, #8B5CF6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start leading-[normal] min-h-px min-w-px not-italic relative">
      <p className="font-['Poppins:Bold',sans-serif] relative shrink-0 text-[16px] text-white w-full">Medical AI Solutions</p>
      <p className="font-['Poppins:Regular',sans-serif] relative shrink-0 text-[#9ca3af] text-[12px] w-full">Precision data services for medical imaging, clinical language, speech, and physiological signals.</p>
    </div>
  );
}

function Item4() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full" data-name="Item">
      <Icon5 />
      <Frame4 />
    </div>
  );
}

function Highlight1() {
  return (
    <div className="content-stretch flex flex-col gap-[36px] items-start relative shrink-0 w-[400px]" data-name="Highlight">
      <Item3 />
      <Item4 />
    </div>
  );
}

function Dropdown() {
  return (
    <div className="-translate-x-1/2 absolute bg-[#0a0a0a] content-stretch flex gap-[72px] items-start left-1/2 overflow-clip pl-[480px] py-[72px] top-[72px] w-[1986px]" data-name="Dropdown">
      <Highlight />
      <Highlight1 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[22.5px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.5 22.5">
        <g id="Icon">
          <path d={svgPaths.p3843bf00} id="Vector" stroke="var(--stroke-0, #E8E7EF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.875" />
          <path d={svgPaths.p1144b00} id="Vector_2" stroke="var(--stroke-0, #E8E7EF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.875" />
          <path d="M11.25 20.625V11.25" id="Vector_3" stroke="var(--stroke-0, #E8E7EF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.875" />
        </g>
      </svg>
    </div>
  );
}

function Header1() {
  return (
    <div className="relative rounded-[9.25px] shadow-[0px_10px_15px_0px_rgba(139,92,246,0.2),0px_4px_6px_0px_rgba(139,92,246,0.2)] shrink-0 size-[35.994px]" data-name="Header" style={{ backgroundImage: "linear-gradient(135deg, rgb(139, 92, 246) 0%, rgb(145, 91, 246) 7.1429%, rgb(151, 90, 245) 14.286%, rgb(157, 90, 245) 21.429%, rgb(162, 89, 244) 28.571%, rgb(168, 87, 244) 35.714%, rgb(174, 86, 243) 42.857%, rgb(179, 85, 243) 50%, rgb(185, 83, 242) 57.143%, rgb(190, 81, 242) 64.286%, rgb(196, 80, 241) 71.429%, rgb(201, 78, 241) 78.571%, rgb(206, 75, 240) 85.714%, rgb(212, 73, 240) 92.857%, rgb(217, 70, 239) 100%)" }}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[6.747px] relative size-full">
        <Icon6 />
      </div>
    </div>
  );
}

function Header2() {
  return (
    <div className="h-[31.506px] relative shrink-0 w-[47.173px]" data-name="Header">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Poppins:Bold',sans-serif] leading-[31.5px] left-0 not-italic text-[#e8e7ef] text-[20.25px] top-[-0.09px] tracking-[-0.5063px] whitespace-nowrap">Logo</p>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative">
        <Header1 />
        <Header2 />
      </div>
    </div>
  );
}

function TablerIconChevronDown() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="tabler-icon-chevron-down">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="tabler-icon-chevron-down">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #E8E7EF)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Link1() {
  return (
    <div className="h-[24px] relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] h-full items-center justify-center relative">
        <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#e8e7ef] text-[16px] whitespace-nowrap">Products</p>
        <TablerIconChevronDown />
      </div>
    </div>
  );
}

function TablerIconChevronDown1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="tabler-icon-chevron-down">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="tabler-icon-chevron-down">
          <path d="M12 10L8 6L4 10" id="Vector" stroke="var(--stroke-0, #E8E7EF)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Link2() {
  return (
    <div className="h-[24px] relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-full items-center justify-center relative">
        <p className="font-['Poppins:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">Industries</p>
        <TablerIconChevronDown1 />
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="h-[24px] relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-full items-center justify-center relative">
        <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#e8e7ef] text-[16px] whitespace-nowrap">Pricing</p>
      </div>
    </div>
  );
}

function TablerIconChevronDown2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="tabler-icon-chevron-down">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="tabler-icon-chevron-down">
          <path d="M4 6L8 10L12 6" id="Vector" stroke="var(--stroke-0, #E8E7EF)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Link4() {
  return (
    <div className="h-[24px] relative shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-full items-center justify-center relative">
        <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#e8e7ef] text-[16px] whitespace-nowrap">Company</p>
        <TablerIconChevronDown2 />
      </div>
    </div>
  );
}

function Navigation() {
  return (
    <div className="relative shrink-0" data-name="Navigation">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[36px] items-center relative">
        <Link1 />
        <Link2 />
        <Link3 />
        <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#e8e7ef] text-[16px] whitespace-nowrap">Resources</p>
        <Link4 />
      </div>
    </div>
  );
}

function Link5() {
  return (
    <div className="h-[22.5px] relative shrink-0 w-[53.04px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#e8e7ef] text-[16px] whitespace-nowrap">Sign In</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[24px] items-center relative">
        <Link5 />
        <div className="h-[48px] relative rounded-[12px] shadow-[0px_20px_25px_0px_rgba(139,92,246,0.2),0px_8px_10px_0px_rgba(139,92,246,0.2)] shrink-0 w-[135px]" data-name="Primary" style={{ backgroundImage: "linear-gradient(90deg, rgb(139, 92, 246) 0%, rgb(145, 91, 246) 7.1429%, rgb(151, 90, 245) 14.286%, rgb(157, 90, 245) 21.429%, rgb(162, 89, 244) 28.571%, rgb(168, 87, 244) 35.714%, rgb(174, 86, 243) 42.857%, rgb(179, 85, 243) 50%, rgb(185, 83, 242) 57.143%, rgb(190, 81, 242) 64.286%, rgb(196, 80, 241) 71.429%, rgb(201, 78, 241) 78.571%, rgb(206, 75, 240) 85.714%, rgb(212, 73, 240) 92.857%, rgb(217, 70, 239) 100%)" }}>
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[36px] relative size-full">
            <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">Book Demo</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex h-[72px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Link />
      <Navigation />
      <Container5 />
    </div>
  );
}

function Header() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col h-[72px] items-start left-1/2 px-[280px] top-0 w-[1986px]" data-name="Header">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgHeader} />
      <Container4 />
    </div>
  );
}

export default function LandingPage() {
  return (
    <div className="bg-white relative size-full" data-name="Landing Page">
      <ParticleHero />
      <Dropdown />
      <Header />
    </div>
  );
}