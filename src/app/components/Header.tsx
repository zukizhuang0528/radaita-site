import React, { useState, useRef } from 'react';
import { Link as RouterLink } from 'react-router';
import { Info, Users, MessageSquare, Layers, Database, Tag, Sparkles, Mic, Bot, Activity } from 'lucide-react';
import svgPaths from "../../imports/svg-2vxk7hxun8";
import imgHeader from "figma:asset/27c0b8bdfc44b80c7d7440d8c5f236d1a34610bb.png";

const MercedesIcon = ({ size = 24, strokeWidth = 2 }: { size?: number, strokeWidth?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2v10" />
    <path d="M12 12l8.5 5" />
    <path d="M12 12l-8.5 5" />
  </svg>
);

function IconBackground({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative shrink-0 size-[26px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="Icon">
          <path d={svgPaths.pf11d00} id="Star 1" stroke="var(--stroke-0, #8B5CF6)" strokeLinejoin="round" strokeOpacity="0.2" strokeWidth="2" />
          <path d={svgPaths.p3c892c00} id="Vector 1" stroke="var(--stroke-0, #8B5CF6)" strokeLinecap="round" strokeWidth="2" />
          <path d={svgPaths.p28c18580} id="Vector 2" stroke="var(--stroke-0, #8B5CF6)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
      <div className="absolute inset-0 flex items-center justify-center text-[#8B5CF6]">
        {children}
      </div>
    </div>
  );
}

function DropdownItem({ title, desc, icon: Icon, to }: { title: string, desc?: string, icon: any, to: string }) {
  return (
    <RouterLink to={to} className={`content-stretch flex gap-[24px] ${desc ? 'items-start' : 'items-center'} relative shrink-0 w-full group/item transition-colors`}>
      <IconBackground>
        <Icon size={13} strokeWidth={2} />
      </IconBackground>
      <div className={`content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start leading-[normal] not-italic relative ${desc ? 'pt-[4px]' : ''}`}>
        <p className="font-['Poppins:Regular',sans-serif] font-normal relative shrink-0 text-[14px] text-white group-hover/item:text-[#8B5CF6] transition-colors w-full">
          {title}
        </p>
        {desc && (
          <p className="font-['Poppins:Regular',sans-serif] font-normal relative shrink-0 text-[#9ca3af] text-[12px] w-full">
            {desc}
          </p>
        )}
      </div>
    </RouterLink>
  );
}



function HeaderIcon() {
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

function LogoMark() {
  return (
    <div className="relative rounded-[9.25px] shadow-[0px_10px_15px_0px_rgba(139,92,246,0.2),0px_4px_6px_0px_rgba(139,92,246,0.2)] shrink-0 size-[35.994px]" data-name="Header" style={{ backgroundImage: "linear-gradient(135deg, rgb(139, 92, 246) 0%, rgb(145, 91, 246) 7.1429%, rgb(151, 90, 245) 14.286%, rgb(157, 90, 245) 21.429%, rgb(162, 89, 244) 28.571%, rgb(168, 87, 244) 35.714%, rgb(174, 86, 243) 42.857%, rgb(179, 85, 243) 50%, rgb(185, 83, 242) 57.143%, rgb(190, 81, 242) 64.286%, rgb(196, 80, 241) 71.429%, rgb(201, 78, 241) 78.571%, rgb(206, 75, 240) 85.714%, rgb(212, 73, 240) 92.857%, rgb(217, 70, 239) 100%)" }}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[6.747px] relative size-full">
        <HeaderIcon />
      </div>
    </div>
  );
}

function LogoText() {
  return (
    <div className="h-[31.506px] relative shrink-0 w-[47.173px]" data-name="Header">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Poppins:Bold',sans-serif] font-bold leading-[31.5px] left-0 not-italic text-[#e8e7ef] text-[20.25px] top-[-0.09px] tracking-[-0.5063px] whitespace-nowrap">Logo</p>
      </div>
    </div>
  );
}

function LogoLink() {
  return (
    <RouterLink to="/" className="relative shrink-0 hover:opacity-80 transition-opacity" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative">
        <LogoMark />
        <LogoText />
      </div>
    </RouterLink>
  );
}

function ChevronDownIcon({ active }: { active?: boolean }) {
  return (
    <div className={`relative shrink-0 size-[16px] transition-transform duration-300 ${active ? 'rotate-180' : 'group-hover:rotate-180'}`} data-name="tabler-icon-chevron-down">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <path d="M4 6L8 10L12 6" stroke="var(--stroke-0, #E8E7EF)" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggle = (section: string) => {
    setOpenSection(prev => prev === section ? null : section);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex flex-col bg-[#0a0a0a]">
      {/* top bar */}
      <div className="flex items-center justify-between px-5 h-[72px] border-b border-white/10 shrink-0">
        <LogoLink />
        <button onClick={onClose} className="text-white p-2" aria-label="Close menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* nav items */}
      <div className="flex-1 overflow-y-auto px-5 py-6 flex flex-col gap-2">
        {/* Products */}
        <div>
          <button
            className="flex items-center justify-between w-full py-3 text-[18px] font-['Poppins'] font-bold text-white"
            onClick={() => toggle('products')}
          >
            Products
            <ChevronDownIcon active={openSection === 'products'} />
          </button>
          {openSection === 'products' && (
            <div className="flex flex-col gap-5 pl-2 pb-3 pt-1">
              <DropdownItem title="Platform Architecture" icon={Layers} to="/platform-architecture" />
              <DropdownItem title="Data Collection" icon={Database} to="/data-collection" />
              <DropdownItem title="Data Annotation" icon={Tag} to="/data-annotation" />
            </div>
          )}
        </div>

        <div className="border-t border-white/10" />

        {/* Industries */}
        <div>
          <button
            className="flex items-center justify-between w-full py-3 text-[18px] font-['Poppins'] font-bold text-white"
            onClick={() => toggle('industries')}
          >
            Industries
            <ChevronDownIcon active={openSection === 'industries'} />
          </button>
          {openSection === 'industries' && (
            <div className="flex flex-col gap-5 pl-2 pb-3 pt-1">
              <DropdownItem title="Generative AI & LLMs" icon={Sparkles} to="/llm" />
              <DropdownItem title="Autonomous Driving" icon={Activity} to="/autonomous-driving" />
              <DropdownItem title="Robotics & Embodied AI" icon={Bot} to="/embodied-ai" />
              <DropdownItem title="Medical AI Solutions" icon={Activity} to="/healthcare-ai" />
              <DropdownItem title="Voice & Speech AI" icon={Mic} to="/speech-ai" />
            </div>
          )}
        </div>

        <div className="border-t border-white/10" />

        <RouterLink to="/pricing" className="py-3 text-[18px] font-['Poppins'] font-bold text-white" onClick={onClose}>Pricing</RouterLink>

        <div className="border-t border-white/10" />

        <RouterLink to="#" className="py-3 text-[18px] font-['Poppins'] font-bold text-white" onClick={onClose}>Resources</RouterLink>

        <div className="border-t border-white/10" />

        {/* Company */}
        <div>
          <button
            className="flex items-center justify-between w-full py-3 text-[18px] font-['Poppins'] font-bold text-white"
            onClick={() => toggle('company')}
          >
            Company
            <ChevronDownIcon active={openSection === 'company'} />
          </button>
          {openSection === 'company' && (
            <div className="flex flex-col gap-5 pl-2 pb-3 pt-1">
              <DropdownItem title="About us" icon={Info} to="/about" />
              <DropdownItem title="Teams" icon={Users} to="/teams" />
              <DropdownItem title="Contact" icon={MessageSquare} to="/contact" />
            </div>
          )}
        </div>
      </div>

      {/* bottom CTAs */}
      <div className="px-5 py-6 border-t border-white/10 flex flex-col gap-3 shrink-0">
        <RouterLink to="#" className="text-center py-3 text-[#e8e7ef] text-[16px] font-['Poppins']" onClick={onClose}>Sign In</RouterLink>
        <div
          className="h-[52px] cursor-pointer rounded-[12px] flex items-center justify-center shadow-[0px_20px_25px_0px_rgba(139,92,246,0.2)]"
          style={{ backgroundImage: "linear-gradient(90deg, rgb(139,92,246) 0%, rgb(217,70,239) 100%)" }}
        >
          <p className="text-white text-[16px] font-['Poppins']">Book Demo</p>
        </div>
      </div>
    </div>
  );
}

export function Header() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (menu: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  return (
    <>
      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
      <div className="w-full flex justify-center relative z-50 pointer-events-none">

      <div className="relative w-full h-[72px] pointer-events-auto" onMouseLeave={handleMouseLeave}>
        
        <div className="absolute inset-x-0 content-stretch flex flex-col h-[72px] items-center top-0 w-full z-50" data-name="Header">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none w-full h-full" src={imgHeader} />
          
          <div className="content-stretch flex h-[72px] items-center justify-between relative shrink-0 w-full max-w-[1200px] px-4 xl:px-0" data-name="Container">
            <LogoLink />
            
            {/* Desktop navigation — hidden on mobile */}
            <div className="hidden xl:flex relative shrink-0" data-name="Navigation">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[36px] items-center relative h-[72px]">
                
                <div 
                  className="h-full relative shrink-0 cursor-pointer group flex items-center"
                  onMouseEnter={() => handleMouseEnter('products')}
                >
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] h-[24px] items-center justify-center relative">
                    <p className={`font-['Poppins'] leading-[normal] not-italic relative shrink-0 transition-colors text-[16px] whitespace-nowrap ${activeDropdown === 'products' ? 'font-bold text-white' : 'font-normal text-[#e8e7ef] hover:text-white'}`}>Products</p>
                    <ChevronDownIcon active={activeDropdown === 'products'} />
                  </div>
                  <div className={`absolute top-full left-0 mt-[2px] z-50 bg-[#0f0f0f]/95 backdrop-blur-md rounded-none shadow-[0_12px_40px_rgba(0,0,0,0.7)] p-[20px] flex flex-col gap-[16px] w-[260px] transition-all duration-200 ${activeDropdown === 'products' ? 'opacity-100 visible pointer-events-auto' : 'opacity-0 invisible pointer-events-none'}`}>
                    <DropdownItem title="Platform Architecture" icon={Layers} to="/platform-architecture" />
                    <DropdownItem title="Data Collection" icon={Database} to="/data-collection" />
                    <DropdownItem title="Data Annotation" icon={Tag} to="/data-annotation" />
                  </div>
                </div>

                <div 
                  className="h-full relative shrink-0 cursor-pointer group flex items-center"
                  onMouseEnter={() => handleMouseEnter('industries')}
                >
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] h-[24px] items-center justify-center relative">
                    <p className={`font-['Poppins'] leading-[normal] not-italic relative shrink-0 transition-colors text-[16px] whitespace-nowrap ${activeDropdown === 'industries' ? 'font-bold text-white' : 'font-normal text-[#e8e7ef] hover:text-white'}`}>Industries</p>
                    <ChevronDownIcon active={activeDropdown === 'industries'} />
                  </div>
                  <div className={`absolute top-full left-0 mt-[2px] z-50 bg-[#0f0f0f]/95 backdrop-blur-md rounded-none shadow-[0_12px_40px_rgba(0,0,0,0.7)] p-[20px] flex gap-[24px] transition-all duration-200 ${activeDropdown === 'industries' ? 'opacity-100 visible pointer-events-auto' : 'opacity-0 invisible pointer-events-none'}`}>
                    <div className="flex flex-col gap-[16px] w-[240px]">
                      <DropdownItem title="Generative AI & LLMs" icon={Sparkles} to="/llm" />
                      <DropdownItem title="Autonomous Driving" icon={MercedesIcon} to="/autonomous-driving" />
                      <DropdownItem title="Robotics & Embodied AI" icon={Bot} to="/embodied-ai" />
                    </div>
                    <div className="flex flex-col gap-[16px] w-[240px]">
                      <DropdownItem title="Medical AI Solutions" icon={Activity} to="/healthcare-ai" />
                      <DropdownItem title="Voice & Speech AI" icon={Mic} to="/speech-ai" />
                    </div>
                  </div>
                </div>

                <RouterLink 
                  to="/pricing" 
                  className="h-full relative shrink-0 flex items-center" 
                  data-name="Link"
                  onMouseEnter={() => handleMouseEnter('none')}
                >
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-[24px] items-center justify-center relative">
                    <p className="font-['Poppins'] font-normal leading-[normal] not-italic relative shrink-0 text-[#e8e7ef] hover:text-white transition-colors text-[16px] whitespace-nowrap">Pricing</p>
                  </div>
                </RouterLink>

                <RouterLink 
                  to="#" 
                  className="h-full relative shrink-0 flex items-center"
                  onMouseEnter={() => handleMouseEnter('none')}
                >
                  <p className="font-['Poppins'] font-normal leading-[normal] not-italic relative shrink-0 text-[#e8e7ef] hover:text-white transition-colors text-[16px] whitespace-nowrap">Resources</p>
                </RouterLink>

                <div 
                  className="h-full relative shrink-0 cursor-pointer group flex items-center"
                  onMouseEnter={() => handleMouseEnter('company')}
                >
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[4px] h-[24px] items-center justify-center relative">
                    <p className={`font-['Poppins'] leading-[normal] not-italic relative shrink-0 transition-colors text-[16px] whitespace-nowrap ${activeDropdown === 'company' ? 'font-bold text-white' : 'font-normal text-[#e8e7ef] hover:text-white'}`}>Company</p>
                    <ChevronDownIcon active={activeDropdown === 'company'} />
                  </div>
                  <div className={`absolute top-full right-0 mt-[2px] z-50 bg-[#0f0f0f]/95 backdrop-blur-md rounded-none shadow-[0_12px_40px_rgba(0,0,0,0.7)] p-[20px] flex flex-col gap-[16px] w-[220px] transition-all duration-200 ${activeDropdown === 'company' ? 'opacity-100 visible pointer-events-auto' : 'opacity-0 invisible pointer-events-none'}`}>
                    <DropdownItem title="About us" icon={Info} to="/about" />
                    <DropdownItem title="Teams" icon={Users} to="/teams" />
                    <DropdownItem title="Contact" icon={MessageSquare} to="/contact" />
                  </div>
                </div>

              </div>
            </div>

            {/* Desktop CTAs — hidden on mobile */}
            <div className="hidden xl:flex relative shrink-0" data-name="Container">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[24px] items-center relative">
                
                <RouterLink to="#" className="h-[22.5px] relative shrink-0 w-[53.04px] hover:opacity-80 transition-opacity" data-name="Link">
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
                    <p className="font-['Poppins:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#e8e7ef] text-[16px] whitespace-nowrap">Sign In</p>
                  </div>
                </RouterLink>

                <div className="h-[48px] cursor-pointer hover:opacity-90 transition-opacity relative rounded-[12px] shadow-[0px_20px_25px_0px_rgba(139,92,246,0.2),0px_8px_10px_0px_rgba(139,92,246,0.2)] shrink-0 w-[135px]" data-name="Primary" style={{ backgroundImage: "linear-gradient(90deg, rgb(139, 92, 246) 0%, rgb(145, 91, 246) 7.1429%, rgb(151, 90, 245) 14.286%, rgb(157, 90, 245) 21.429%, rgb(162, 89, 244) 28.571%, rgb(168, 87, 244) 35.714%, rgb(174, 86, 243) 42.857%, rgb(179, 85, 243) 50%, rgb(185, 83, 242) 57.143%, rgb(190, 81, 242) 64.286%, rgb(196, 80, 241) 71.429%, rgb(201, 78, 241) 78.571%, rgb(206, 75, 240) 85.714%, rgb(212, 73, 240) 92.857%, rgb(217, 70, 239) 100%)" }}>
                  <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[36px] relative size-full">
                    <p className="font-['Poppins:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[16px] text-center text-white whitespace-nowrap">Book Demo</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Mobile hamburger — visible only on mobile */}
            <button
              className="xl:hidden text-white p-2"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 12h18M3 6h18M3 18h18" />
              </svg>
            </button>

          </div>
        </div>



      </div>
    </div>
    </>
  );
}
