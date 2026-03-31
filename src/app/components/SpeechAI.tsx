import { Header } from "./Header";
import { Footer } from "./Footer";
import { Link } from "react-router";
import { motion } from "motion/react";
import { heroSection, heroContainer, heroLeftCol, heroRightPanel, heroImage, heroCTARow } from "../styles/pageStyles";
import { 
  ArrowRight, Mic, Globe2, Ear, 
  Car, Home, HeartPulse, Watch,
  AudioLines, Activity, Settings2,
  Workflow, Layers, Laptop, Network,
  Languages, UserCheck, ShieldCheck,
  CheckCircle2, Volume2, Waves
} from "lucide-react";

export function SpeechAI() {
  return (
    <div className="bg-[#0A0A0A] min-h-screen text-[#E8E7EF] selection:bg-[#8B5CF6]/30 font-['Poppins'] overflow-x-hidden">
      {/* 1. Hero Section */}
      <section id="hero-speech-ai" className={heroSection}>
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
          <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(139,92,246,0.15)_0%,transparent_70%)] blur-[120px]"></div>
          <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(217,70,239,0.1)_0%,transparent_70%)] blur-[100px]"></div>
        </div>

        <div className={`${heroContainer} relative z-10`}>
          
          <div id="hero-left-speech-ai" className={heroLeftCol}>
            
            <h1 className="text-[54px] md:text-[64px] leading-[64px] md:leading-[72px] font-bold tracking-tight text-[#FFFFFF] mb-[32px]">
              Voice Data Infrastructure for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] via-[#D946EF] to-[#FFFFFF]">
                Global Speech AI
              </span>
            </h1>
            
            <p className="text-[24px] leading-[32px] text-[#FFFFFF] font-bold mb-[16px] max-w-lg">
              An end-to-end voice data infrastructure spanning collection, annotation, multilingual resources, and quality control.
            </p>
            
            <p className="text-[16px] leading-[24px] text-[#9CA3AF] font-normal mb-[48px] max-w-lg">
              Built for speech products that need to work across languages, devices, and environments, the platform supports everything from ASR data sourcing and TTS annotation to acoustic-quality control and rapid multilingual expansion.
            </p>
            
            <div className={heroCTARow}>
              <Link to="/contact" className="group w-full sm:w-auto flex items-center justify-center gap-[12px] px-[36px] py-[16px] relative rounded-[18px] shadow-[0px_20px_25px_0px_rgba(139,92,246,0.2),0px_8px_10px_0px_rgba(139,92,246,0.2)] hover:shadow-[0px_20px_25px_0px_rgba(139,92,246,0.4),0px_8px_10px_0px_rgba(139,92,246,0.4)] text-[18px] leading-[normal] font-bold text-white whitespace-nowrap transition-all" style={{ backgroundImage: "linear-gradient(90deg, rgb(139, 92, 246) 0%, rgb(145, 91, 246) 7.1429%, rgb(151, 90, 245) 14.286%, rgb(157, 90, 245) 21.429%, rgb(162, 89, 244) 28.571%, rgb(168, 87, 244) 35.714%, rgb(174, 86, 243) 42.857%, rgb(179, 85, 243) 50%, rgb(185, 83, 242) 57.143%, rgb(190, 81, 242) 64.286%, rgb(196, 80, 241) 71.429%, rgb(201, 78, 241) 78.571%, rgb(206, 75, 240) 85.714%, rgb(212, 73, 240) 92.857%, rgb(217, 70, 239) 100%)" }}>
                Talk to an Expert
                <ArrowRight className="w-[18px] h-[18px] group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          <div className={`${heroRightPanel} flex items-center justify-center`}>
            
            <img
              id="hero-img-speech-ai"
              src="https://images.unsplash.com/photo-1764263703837-3250668eafc2?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb3VuZCUyMHdhdmVmb3JtJTIwc3BlY3Ryb2dyYW0lMjBkYXJrJTIwcHVycGxlJTIwYWJzdHJhY3R8ZW58MXx8fHwxNzc0NzE3MTc5fDA&ixlib=rb-4.1.0&q=80&w=450&h=648"
              alt="Voice Data Infrastructure"
              className={heroImage}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/90 via-transparent to-transparent"></div>

            {/* Speech Data UI Nodes */}
            <div className="absolute inset-0 pointer-events-none p-[32px]">
              
              {/* Audio Signal Node */}
              <div className="absolute top-[20%] left-[15%] bg-[#0A0A0A]/80 backdrop-blur-md border border-[#8B5CF6]/30 rounded-[16px] p-[20px] w-[220px] shadow-[0_0_20px_rgba(139,92,246,0.2)] transform transition-transform group-hover:translate-y-[-5px]">
                <div className="flex items-center gap-[12px] mb-[12px]">
                  <Waves className="w-[16px] h-[16px] text-[#8B5CF6]" />
                  <span className="text-[12px] leading-[16px] font-bold text-[#E8E7EF]">ASR Audio Capture</span>
                </div>
                <div className="flex items-end gap-[4px] h-[32px]">
                  {Array.from({ length: 24 }).map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-[4px] bg-gradient-to-t from-[#8B5CF6] to-[#D946EF] rounded-full"
                      animate={{ height: ["20%", `${Math.random() * 80 + 20}%`, "20%"] }}
                      transition={{ duration: Math.random() * 1.5 + 0.5, repeat: Infinity, ease: "easeInOut" }}
                    />
                  ))}
                </div>
              </div>

              {/* Multilingual Labels */}
              <div className="absolute top-[35%] right-[10%] flex flex-col gap-[12px] items-end">
                <div className="bg-[#161616]/90 backdrop-blur border border-[#E8E7EF]/10 px-[16px] py-[8px] rounded-full flex items-center gap-[8px]">
                  <span className="w-[8px] h-[8px] rounded-full bg-[#D946EF] animate-pulse"></span>
                  <span className="text-[12px] leading-[16px] font-bold text-[#E8E7EF]">EN-US</span>
                </div>
                <div className="bg-[#161616]/90 backdrop-blur border border-[#E8E7EF]/10 px-[16px] py-[8px] rounded-full flex items-center gap-[8px]">
                  <span className="w-[8px] h-[8px] rounded-full bg-[#8B5CF6] animate-pulse"></span>
                  <span className="text-[12px] leading-[16px] font-bold text-[#E8E7EF]">JA-JP</span>
                </div>
                <div className="bg-[#161616]/90 backdrop-blur border border-[#E8E7EF]/10 px-[16px] py-[8px] rounded-full flex items-center gap-[8px]">
                  <span className="w-[8px] h-[8px] rounded-full bg-[#D946EF] animate-pulse"></span>
                  <span className="text-[12px] leading-[16px] font-bold text-[#E8E7EF]">DE-DE</span>
                </div>
              </div>

              {/* Connection Flow Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <motion.path 
                  d="M 230 180 Q 380 220 450 320" 
                  fill="none" 
                  stroke="#8B5CF6" 
                  strokeWidth="2" 
                  strokeDasharray="6 6"
                  initial={{ strokeDashoffset: 100 }}
                  animate={{ strokeDashoffset: 0 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />
              </svg>

              {/* Environment Node */}
              <div className="absolute bottom-[20%] left-[30%] bg-[#0A0A0A]/60 backdrop-blur border border-[#D946EF]/30 px-[24px] py-[16px] rounded-[16px] flex items-center gap-[16px]">
                <Car className="w-[24px] h-[24px] text-[#D946EF]" />
                <div>
                  <span className="text-[12px] leading-[16px] font-bold text-[#FFFFFF] block mb-[4px]">In-Car Environment</span>
                  <span className="text-[10px] leading-[14px] font-normal text-[#9CA3AF] bg-[#D946EF]/10 px-[8px] py-[2px] rounded">75dB Noise Floor</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 2. Full Voice Data Service Overview */}
      <section className="py-[128px] relative bg-[#0A0A0A] border-b border-[#E8E7EF]/10">
        <div className="w-full max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-[64px] lg:gap-[96px] items-center">
          
          <div className="lg:w-1/2 flex flex-col">
            <h2 className="text-[54px] leading-[64px] font-bold text-[#FFFFFF] mb-[24px] tracking-tight">
              Built Around the Full Voice Data Workflow
            </h2>
            <p className="text-[24px] leading-[32px] text-[#FFFFFF] font-bold mb-[24px]">
              A full-stack speech data workflow spanning collection, annotation, QA, and multilingual resource management.
            </p>
            <p className="text-[16px] leading-[24px] text-[#9CA3AF] font-normal mb-[48px]">
              Accuracy, naturalness, noise robustness, multilingual consistency, and rapid replication across new languages are the core challenges of voice AI. We built our platform to solve them all.
            </p>

            <div className="grid grid-cols-2 gap-[16px]">
              {[
                { val: "20+", label: "Country Resources" },
                { val: "80,000+", label: "Collection Users" },
                { val: "15,000+", label: "Annual Participants" },
                { val: "ISO", label: "Precision Anechoic" }
              ].map((stat, i) => (
                <div key={i} className="bg-[#161616] border border-[#E8E7EF]/10 p-[24px] rounded-[16px]">
                  <span className="text-[32px] leading-[40px] font-bold text-[#8B5CF6] block mb-[8px]">{stat.val}</span>
                  <span className="text-[12px] leading-[16px] font-bold text-[#9CA3AF] uppercase">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="bg-[#161616] border border-[#E8E7EF]/10 rounded-[24px] p-[32px] md:p-[48px] relative overflow-hidden shadow-2xl">
               <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
               
               <div className="relative z-10">
                 <span className="text-[12px] leading-[16px] font-bold text-[#9CA3AF] uppercase tracking-widest mb-[32px] block text-center">End-to-End Voice Pipeline</span>
                 
                 <div className="flex flex-col gap-[12px] max-w-[400px] mx-auto">
                   {[
                     { name: "Requirement & Scenario", active: false },
                     { name: "Global Data Collection", active: true },
                     { name: "Cleaning & Processing", active: false },
                     { name: "ASR / TTS Annotation", active: true },
                     { name: "Standardized QA", active: false },
                     { name: "Delivery & Optimization", active: false }
                   ].map((step, i) => (
                     <div key={i} className="flex flex-col items-center">
                       <div className={`w-full py-[16px] px-[24px] rounded-[16px] border text-center font-bold text-[14px] leading-[20px] transition-all flex items-center justify-center gap-[12px] ${step.active ? 'bg-[#8B5CF6]/10 border-[#8B5CF6]/50 text-[#8B5CF6] shadow-[0_0_20px_rgba(139,92,246,0.2)]' : 'bg-[#0A0A0A] border-[#E8E7EF]/10 text-[#E8E7EF]'}`}>
                         {step.active && <div className="w-[8px] h-[8px] bg-[#8B5CF6] rounded-full animate-pulse"></div>}
                         {step.name}
                       </div>
                       {i < 5 && (
                         <div className="h-[24px] w-[2px] bg-gradient-to-b from-[#E8E7EF]/20 to-[#E8E7EF]/20 my-[4px] relative">
                           {step.active && <div className="absolute inset-0 bg-[#8B5CF6] shadow-[0_0_8px_#8B5CF6]"></div>}
                         </div>
                       )}
                     </div>
                   ))}
                 </div>
               </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Voice Data Collection for ASR */}
      <section className="py-[128px] relative bg-[#0A0A0A] border-b border-[#E8E7EF]/10">
        <div className="w-full max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-[64px] lg:gap-[96px] items-center">
          
          <div className="lg:w-1/2 flex flex-col order-2 lg:order-1">
            <h2 className="text-[54px] leading-[64px] font-bold text-[#FFFFFF] mb-[24px] tracking-tight">
              Voice Data Collection for ASR at Scale
            </h2>
            <p className="text-[16px] leading-[24px] text-[#9CA3AF] font-normal mb-[48px]">
              Build multilingual ASR source datasets through scalable collection across real and simulated environments, devices, and speaker groups.
            </p>

            <div className="space-y-[24px] mb-[48px]">
              {[
                { title: "Mobile Collection for Scale", desc: "80,000+ users deployed for rapid, large-scale linguistic variation gathering." },
                { title: "Professional Booths for Quality", desc: "Studio-grade capture for foundational ASR and high-precision TTS sourcing." },
                { title: "Multi-Environment Construction", desc: "Real-scenario coverage across home, auto, office, and outdoor noise conditions." }
              ].map((item, i) => (
                <div key={i} className="flex gap-[16px]">
                  <div className="w-[48px] h-[48px] rounded-[12px] bg-[#161616] border border-[#E8E7EF]/10 flex items-center justify-center shrink-0 text-[#8B5CF6]">
                    <Mic className="w-[20px] h-[20px]" />
                  </div>
                  <div>
                    <h3 className="text-[16px] leading-[24px] font-bold text-[#FFFFFF] mb-[4px]">{item.title}</h3>
                    <p className="text-[14px] leading-[20px] text-[#9CA3AF]">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-[12px] text-[12px] leading-[16px] font-bold text-[#9CA3AF]">
              <span className="px-[12px] py-[6px] bg-[#161616] border border-[#E8E7EF]/10 rounded-[8px]">Environment</span>
              <span className="px-[12px] py-[6px] bg-[#161616] border border-[#E8E7EF]/10 rounded-[8px]">Device</span>
              <span className="px-[12px] py-[6px] bg-[#161616] border border-[#E8E7EF]/10 rounded-[8px]">Noise Floor</span>
              <span className="px-[12px] py-[6px] bg-[#161616] border border-[#E8E7EF]/10 rounded-[8px]">Speaker Diversity</span>
            </div>
          </div>

          <div className="lg:w-1/2 w-full order-1 lg:order-2 h-[500px] lg:h-[650px] relative">
            <div className="grid grid-cols-2 gap-[16px] h-full">
              <div className="col-span-1 row-span-2 rounded-[24px] overflow-hidden border border-[#E8E7EF]/10 relative group">
                <img src="https://images.unsplash.com/photo-1774016591315-7dfe28567dc1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBwaG9uZSUyMG1pY3JvcGhvbmUlMjBkYXJrJTIwYWJzdHJhY3QlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc3NDcxNzE3NHww&ixlib=rb-4.1.0&q=80&w=1080" alt="Mobile Collection" className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent"></div>
                <div className="absolute bottom-[24px] left-[24px]">
                  <span className="text-[10px] font-bold bg-[#8B5CF6]/20 text-[#8B5CF6] px-[8px] py-[4px] rounded-[4px] border border-[#8B5CF6]/30 mb-[8px] inline-block">SCALE</span>
                  <h4 className="text-[20px] leading-[28px] font-bold text-[#FFFFFF]">Mobile Collection</h4>
                </div>
              </div>
              <div className="col-span-1 row-span-1 rounded-[24px] overflow-hidden border border-[#E8E7EF]/10 relative group bg-[#161616]">
                <img src="https://images.unsplash.com/photo-1653047746312-3a99ab042d18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWNvcmRpbmclMjBzdHVkaW8lMjBzb3VuZHByb29mJTIwYm9vdGglMjBkYXJrfGVufDF8fHx8MTc3NDcxNzE3NHww&ixlib=rb-4.1.0&q=80&w=1080" alt="Booth" className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent"></div>
                <div className="absolute bottom-[24px] left-[24px]">
                  <span className="text-[10px] font-bold bg-[#D946EF]/20 text-[#D946EF] px-[8px] py-[4px] rounded-[4px] border border-[#D946EF]/30 mb-[8px] inline-block">PRECISION</span>
                  <h4 className="text-[16px] leading-[24px] font-bold text-[#FFFFFF]">Professional Booth</h4>
                </div>
              </div>
              <div className="col-span-1 row-span-1 rounded-[24px] overflow-hidden border border-[#E8E7EF]/10 relative bg-[#161616] p-[32px] flex flex-col justify-center items-center text-center">
                <UserCheck className="w-[32px] h-[32px] text-[#8B5CF6] mb-[16px]" />
                <h4 className="text-[20px] leading-[28px] font-bold text-[#FFFFFF] mb-[8px]">15,000+</h4>
                <p className="text-[12px] leading-[16px] font-normal text-[#9CA3AF]">Annual Participant Roster</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Annotation for ASR / TTS */}
      <section className="py-[128px] relative bg-[#0A0A0A] border-b border-[#E8E7EF]/10">
        <div className="w-full max-w-[1200px] mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-[80px]">
            <h2 className="text-[54px] leading-[64px] font-bold text-[#FFFFFF] tracking-tight mb-[24px]">
              Annotation for ASR & TTS Workflows
            </h2>
            <p className="text-[16px] leading-[24px] text-[#9CA3AF] font-normal">
              Provide structured annotation pipelines for speech-to-text transcription, text-to-speech prosody marking, and intent-related semantic labeling.
            </p>
          </div>

          <div className="w-full bg-[#161616] border border-[#E8E7EF]/10 rounded-[24px] p-[32px] md:p-[48px] shadow-2xl relative">
             
             {/* Dual Logic Workbench */}
             <div className="flex flex-col lg:flex-row gap-[32px]">
               
               {/* ASR Side */}
               <div className="flex-1 bg-[#0A0A0A] border border-[#E8E7EF]/10 rounded-[16px] p-[32px] flex flex-col relative">
                 <div className="flex items-center justify-between mb-[32px]">
                   <h3 className="text-[24px] leading-[32px] font-bold text-[#FFFFFF]">ASR Annotation</h3>
                   <span className="bg-[#8B5CF6]/10 text-[#8B5CF6] px-[12px] py-[4px] rounded-[4px] text-[10px] font-bold border border-[#8B5CF6]/30">Audio → Text</span>
                 </div>
                 
                 <div className="mb-[24px]">
                   <div className="h-[64px] bg-[#161616] border border-[#E8E7EF]/10 rounded-[12px] flex items-center px-[16px] gap-[8px] mb-[16px]">
                     <Volume2 className="w-[16px] h-[16px] text-[#8B5CF6]" />
                     {Array.from({ length: 30 }).map((_, i) => (
                        <div key={i} className={`w-[3px] rounded-full ${i > 10 && i < 20 ? 'bg-[#8B5CF6] h-[32px]' : 'bg-[#E8E7EF]/20 h-[16px]'}`}></div>
                     ))}
                   </div>
                   <div className="bg-[#161616] border border-[#8B5CF6]/30 rounded-[12px] p-[16px] relative shadow-[0_0_15px_rgba(139,92,246,0.1)]">
                     <span className="text-[10px] font-bold text-[#9CA3AF] mb-[8px] block">TRANSCRIPT</span>
                     <p className="text-[14px] leading-[24px] text-[#E8E7EF] font-mono">Navigate to the nearest <span className="bg-[#8B5CF6]/20 text-[#8B5CF6] px-[4px] py-[2px] rounded">EV charging station</span>.</p>
                   </div>
                 </div>

                 <div className="mt-auto pt-[24px] border-t border-[#E8E7EF]/10 flex gap-[12px]">
                    <span className="text-[10px] font-bold bg-[#E8E7EF]/5 text-[#9CA3AF] px-[8px] py-[4px] rounded-[4px]">Intent: Navigation</span>
                    <span className="text-[10px] font-bold bg-[#E8E7EF]/5 text-[#9CA3AF] px-[8px] py-[4px] rounded-[4px]">Entity: Charging</span>
                 </div>
               </div>

               {/* Divider */}
               <div className="hidden lg:flex w-[2px] bg-[#E8E7EF]/10 items-center justify-center relative">
                 <div className="absolute w-[32px] h-[32px] bg-[#161616] border border-[#E8E7EF]/10 rounded-full flex items-center justify-center text-[#9CA3AF]">
                   <Workflow className="w-[12px] h-[12px]" />
                 </div>
               </div>

               {/* TTS Side */}
               <div className="flex-1 bg-[#0A0A0A] border border-[#E8E7EF]/10 rounded-[16px] p-[32px] flex flex-col relative">
                 <div className="flex items-center justify-between mb-[32px]">
                   <h3 className="text-[24px] leading-[32px] font-bold text-[#FFFFFF]">TTS Prosody Marking</h3>
                   <span className="bg-[#D946EF]/10 text-[#D946EF] px-[12px] py-[4px] rounded-[4px] text-[10px] font-bold border border-[#D946EF]/30">Text → Speech Rules</span>
                 </div>
                 
                 <div className="mb-[24px]">
                   <div className="bg-[#161616] border border-[#E8E7EF]/10 rounded-[12px] p-[16px] mb-[16px]">
                     <span className="text-[10px] font-bold text-[#9CA3AF] mb-[8px] block">SOURCE TEXT (Japanese)</span>
                     <p className="text-[16px] leading-[24px] text-[#E8E7EF]">明日の天気は晴れです。</p>
                   </div>
                   <div className="bg-[#161616] border border-[#D946EF]/30 rounded-[12px] p-[16px] relative shadow-[0_0_15px_rgba(217,70,239,0.1)]">
                     <span className="text-[10px] font-bold text-[#D946EF] mb-[8px] block">PHONEME & PITCH ANNOTATION</span>
                     <p className="text-[14px] leading-[24px] text-[#E8E7EF] font-mono">
                       a <span className="text-[#D946EF]">shí</span> ta no / te <span className="text-[#D946EF]">ń</span> ki wa // ha <span className="text-[#D946EF]">ré</span> de su .
                     </p>
                   </div>
                 </div>

                 <div className="mt-auto pt-[24px] border-t border-[#E8E7EF]/10 flex gap-[12px]">
                    <span className="text-[10px] font-bold bg-[#E8E7EF]/5 text-[#9CA3AF] px-[8px] py-[4px] rounded-[4px]">Pitch Sensitivity</span>
                    <span className="text-[10px] font-bold bg-[#E8E7EF]/5 text-[#9CA3AF] px-[8px] py-[4px] rounded-[4px]">300h+ Volume</span>
                 </div>
               </div>

             </div>
          </div>

        </div>
      </section>

      {/* 5. Multilingual Voice Data Capabilities */}
      <section className="py-[128px] relative bg-[#0A0A0A] border-b border-[#E8E7EF]/10 overflow-hidden">
        <div className="w-full max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-[64px] lg:gap-[96px] items-center relative z-10">
          
          <div className="lg:w-1/2 flex flex-col">
            <h2 className="text-[54px] leading-[64px] font-bold text-[#FFFFFF] mb-[24px] tracking-tight">
              Multilingual Voice Data for Global Deployment
            </h2>
            <p className="text-[16px] leading-[24px] text-[#9CA3AF] font-normal mb-[48px]">
              Support multilingual collection, localized annotation, and cross-region resource orchestration. Navigate cultural contexts, native-speaker nuances, and strict cross-language consistency for global models.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
              {[
                { title: "Asia", desc: "Japan, Korea, SEA, Middle East" },
                { title: "Europe", desc: "UK, France, Germany, Spain" },
                { title: "North America", desc: "US, Canada" },
                { title: "Low-Resource", desc: "Specialized language integration" }
              ].map((region, i) => (
                <div key={i} className="flex flex-col gap-[8px]">
                  <div className="flex items-center gap-[8px]">
                    <Globe2 className="w-[16px] h-[16px] text-[#8B5CF6]" />
                    <span className="text-[16px] leading-[24px] font-bold text-[#FFFFFF]">{region.title}</span>
                  </div>
                  <span className="text-[14px] leading-[20px] font-normal text-[#9CA3AF] pl-[24px]">{region.desc}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 w-full relative">
            <div className="relative w-full aspect-square md:aspect-video lg:aspect-square max-w-[600px] mx-auto rounded-[24px] border border-[#E8E7EF]/10 bg-[#161616] overflow-hidden group shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1647356191320-d7a1f80ca777?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbG9iYWwlMjBuZXR3b3JrJTIwZGF0YSUyMG5vZGVzJTIwbWFwJTIwZGFyayUyMHB1cnBsZXxlbnwxfHx8fDE3NzQ3MTcxNzR8MA&ixlib=rb-4.1.0&q=80&w=1080" 
                alt="Global Network" 
                className="w-full h-full object-cover opacity-60 mix-blend-lighten group-hover:scale-105 transition-transform duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/50 via-transparent to-[#0A0A0A]"></div>
              
              {/* Overlay Network Nodes */}
              <div className="absolute inset-0 p-[32px] pointer-events-none">
                <div className="absolute top-[20%] right-[30%] bg-[#8B5CF6] text-[#FFFFFF] text-[10px] font-bold px-[8px] py-[4px] rounded-[4px] shadow-[0_0_15px_rgba(139,92,246,0.5)]">JA-JP Verified</div>
                <div className="absolute bottom-[30%] left-[20%] bg-[#D946EF] text-[#FFFFFF] text-[10px] font-bold px-[8px] py-[4px] rounded-[4px] shadow-[0_0_15px_rgba(217,70,239,0.5)]">ES-ES Collection</div>
                <div className="absolute top-[40%] left-[40%] bg-[#161616] border border-[#E8E7EF]/20 text-[#E8E7EF] text-[10px] font-bold px-[8px] py-[4px] rounded-[4px]">EN-US Sync</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 6. High-Quality Voice Data Infrastructure */}
      <section className="py-[128px] relative bg-[#0A0A0A] border-b border-[#E8E7EF]/10">
        <div className="w-full max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-[64px] lg:gap-[96px] items-center">
          
          <div className="lg:w-1/2 flex flex-col order-2 lg:order-1">
             <div className="grid grid-cols-1 gap-[16px] h-full relative">
               
               <div className="relative rounded-[24px] overflow-hidden border border-[#E8E7EF]/10 h-[300px] group">
                 <img src="https://images.unsplash.com/photo-1610433792066-2a2ed2bc51bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmVjaG9pYyUyMGNoYW1iZXIlMjBhY291c3RpYyUyMHRlc3QlMjByb29tJTIwZGFya3xlbnwxfHx8fDE3NzQ3MTcxNzh8MA&ixlib=rb-4.1.0&q=80&w=1080" className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700" alt="Anechoic Chamber" />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-[#0A0A0A]/20"></div>
                 <div className="absolute bottom-[24px] left-[24px]">
                   <span className="text-[12px] leading-[16px] font-bold text-[#8B5CF6] mb-[8px] block">120㎡ ISO STANDARD</span>
                   <h3 className="text-[24px] leading-[32px] font-bold text-[#FFFFFF]">Precision Anechoic Chamber</h3>
                 </div>
               </div>

               <div className="relative rounded-[24px] overflow-hidden border border-[#E8E7EF]/10 h-[250px] group bg-[#161616] flex flex-col justify-center px-[32px]">
                  <Settings2 className="w-[32px] h-[32px] text-[#D946EF] mb-[16px]" />
                  <h3 className="text-[20px] leading-[28px] font-bold text-[#FFFFFF] mb-[8px]">Device Calibration & Testing</h3>
                  <p className="text-[14px] leading-[20px] text-[#9CA3AF] max-w-sm">Microphone array testing, algorithm-effect comparison, and cross-hardware validation.</p>
               </div>

             </div>
          </div>

          <div className="lg:w-1/2 flex flex-col order-1 lg:order-2">
            <h2 className="text-[54px] leading-[64px] font-bold text-[#FFFFFF] mb-[24px] tracking-tight">
              Built for High-Quality Audio Capture & Acoustic Control
            </h2>
            <p className="text-[16px] leading-[24px] text-[#9CA3AF] font-normal mb-[48px]">
              Support speech AI systems with professional recording environments, acoustic testing capability, and device-level voice data capture infrastructure. High-fidelity audio, low-noise interference, and reliable algorithm validation.
            </p>

            <div className="flex flex-wrap gap-[12px] mb-[32px]">
              <span className="px-[16px] py-[8px] bg-[#161616] border border-[#E8E7EF]/10 rounded-[8px] text-[12px] font-bold text-[#E8E7EF]">80㎡ Recording Studio</span>
              <span className="px-[16px] py-[8px] bg-[#161616] border border-[#E8E7EF]/10 rounded-[8px] text-[12px] font-bold text-[#E8E7EF]">Hardware Testing Setup</span>
              <span className="px-[16px] py-[8px] bg-[#161616] border border-[#E8E7EF]/10 rounded-[8px] text-[12px] font-bold text-[#E8E7EF]">Mic Array Calibration</span>
            </div>
          </div>

        </div>
      </section>

      {/* 7. Real Product Use Cases */}
      <section className="py-[128px] relative bg-[#0A0A0A] border-b border-[#E8E7EF]/10">
        <div className="w-full max-w-[1200px] mx-auto">
          
          <div className="mb-[64px] max-w-3xl">
            <h2 className="text-[54px] leading-[64px] font-bold text-[#FFFFFF] mb-[24px] tracking-tight">
              Where Voice Data Gets Used in Real Products
            </h2>
            <p className="text-[16px] leading-[24px] text-[#9CA3AF] font-normal">
              Build voice datasets that reflect the constraints and requirements of real product categories across devices and usage environments.
            </p>
          </div>

          {/* Editorial Scenario Layout */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-[24px] h-auto lg:h-[640px]">
            
            {/* Automotive */}
            <div className="md:col-span-7 row-span-2 relative rounded-[24px] overflow-hidden border border-[#E8E7EF]/10 group bg-[#161616]">
              <img 
                src="https://images.unsplash.com/photo-1699423957878-bff709d3dd4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvbW90aXZlJTIwZGFzaGJvYXJkJTIwc21hcnQlMjBzY3JlZW4lMjBkYXJrfGVufDF8fHx8MTc3NDcxNzE3NHww&ixlib=rb-4.1.0&q=80&w=1080" 
                alt="Automotive" 
                className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-700 min-h-[220px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent"></div>
              <div className="absolute bottom-[32px] left-[32px] right-[32px]">
                <Car className="w-[32px] h-[32px] text-[#8B5CF6] mb-[16px]" />
                <h3 className="text-[32px] leading-[40px] font-bold text-[#FFFFFF] mb-[8px]">Automotive Systems</h3>
                <p className="text-[14px] leading-[20px] text-[#9CA3AF] mb-[16px] max-w-md">Real-time recognition, engine/road noise robustness, and hands-free control.</p>
                <span className="text-[10px] font-bold bg-[#8B5CF6]/20 text-[#8B5CF6] px-[8px] py-[4px] rounded border border-[#8B5CF6]/30">High Noise Tolerance</span>
              </div>
            </div>

            {/* Smart Home */}
            <div className="md:col-span-5 row-span-1 relative rounded-[24px] overflow-hidden border border-[#E8E7EF]/10 group bg-[#161616]">
              <img 
                src="https://images.unsplash.com/photo-1658217456399-8e5cf10c128a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMHNwZWFrZXIlMjBob21lJTIwZGV2aWNlJTIwZGFyayUyMGFic3RyYWN0fGVufDF8fHx8MTc3NDcxNzE3OXww&ixlib=rb-4.1.0&q=80&w=1080" 
                alt="Smart Home" 
                className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-700 min-h-[200px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent"></div>
              <div className="absolute bottom-[24px] left-[24px] right-[24px]">
                <Home className="w-[24px] h-[24px] text-[#D946EF] mb-[12px]" />
                <h3 className="text-[20px] leading-[28px] font-bold text-[#FFFFFF] mb-[4px]">Smart Home Devices</h3>
                <p className="text-[12px] leading-[16px] text-[#9CA3AF]">Wake-word accuracy and far-field audio capture.</p>
              </div>
            </div>

            {/* Medical */}
            <div className="md:col-span-5 row-span-1 relative rounded-[24px] overflow-hidden border border-[#E8E7EF]/10 group bg-[#161616]">
              <img 
                src="https://images.unsplash.com/photo-1715837644848-ec3bf4726b73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwaGVhbHRoY2FyZSUyMHNtYXJ0JTIwZGV2aWNlJTIwYWJzdHJhY3QlMjBkYXJrfGVufDF8fHx8MTc3NDcxNzE3OHww&ixlib=rb-4.1.0&q=80&w=1080" 
                alt="Medical Voice" 
                className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-700 min-h-[200px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent"></div>
              <div className="absolute bottom-[24px] left-[24px] right-[24px]">
                <HeartPulse className="w-[24px] h-[24px] text-[#D946EF] mb-[12px]" />
                <h3 className="text-[20px] leading-[28px] font-bold text-[#FFFFFF] mb-[4px]">Medical Dictation</h3>
                <p className="text-[12px] leading-[16px] text-[#9CA3AF]">High precision and terminology sensitivity.</p>
              </div>
            </div>

            {/* Wearables / Office Split */}
            <div className="md:col-span-12 row-span-1 grid grid-cols-1 md:grid-cols-2 gap-[24px]">
               <div className="relative rounded-[24px] overflow-hidden border border-[#E8E7EF]/10 group bg-[#161616] min-h-[200px]">
                 <img src="https://images.unsplash.com/photo-1614241404508-23ad4ca04009?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHdhdGNoJTIwd2VhcmFibGUlMjBkZXZpY2UlMjBpbnRlcmZhY2UlMjBkYXJrfGVufDF8fHx8MTc3NDcxNzE3OXww&ixlib=rb-4.1.0&q=80&w=1080" className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-opacity" alt="Wearable" />
                 <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] to-transparent"></div>
                 <div className="relative z-10 p-[32px] h-full flex flex-col justify-center">
                   <Watch className="w-[24px] h-[24px] text-[#8B5CF6] mb-[12px]" />
                   <h3 className="text-[20px] leading-[28px] font-bold text-[#FFFFFF] mb-[4px]">Wearables</h3>
                   <p className="text-[12px] leading-[16px] text-[#9CA3AF]">Lightweight interaction, constrained compute.</p>
                 </div>
               </div>
               <div className="relative rounded-[24px] overflow-hidden border border-[#E8E7EF]/10 group bg-[#161616] min-h-[200px]">
                 <img src="https://images.unsplash.com/photo-1758626099012-2904337e9c60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvZmZpY2UlMjBhaSUyMHNtYXJ0JTIwYXNzaXN0YW50JTIwbGFwdG9wJTIwZGFya3xlbnwxfHx8fDE3NzQ3MTcxNzl8MA&ixlib=rb-4.1.0&q=80&w=1080" className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-opacity" alt="Office AI" />
                 <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] to-transparent"></div>
                 <div className="relative z-10 p-[32px] h-full flex flex-col justify-center">
                   <Laptop className="w-[24px] h-[24px] text-[#D946EF] mb-[12px]" />
                   <h3 className="text-[20px] leading-[28px] font-bold text-[#FFFFFF] mb-[4px]">Office AI Assistants</h3>
                   <p className="text-[12px] leading-[16px] text-[#9CA3AF]">Complex semantics and multilingual support.</p>
                 </div>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* 8. Closing CTA */}
      <section className="relative py-[128px] md:py-[192px] overflow-hidden bg-[#0A0A0A]">
        <div className="absolute inset-0 z-0 pointer-events-none">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(139,92,246,0.08)_0%,transparent_60%)] blur-[100px]"></div>
           <div className="absolute inset-0 bg-[linear-gradient(rgba(232,231,239,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(232,231,239,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]"></div>
        </div>

        <div className="w-full max-w-[1200px] mx-auto text-center relative z-10 flex flex-col items-center">
          
          <Mic className="w-[48px] h-[48px] text-[#8B5CF6] mx-auto mb-[32px] opacity-80" />
          
          <h2 className="text-[54px] md:text-[64px] leading-[64px] md:leading-[72px] font-bold text-[#FFFFFF] mb-[24px] tracking-tight">
            Ready to Support Global Speech AI Data Programs
          </h2>
          <p className="text-[24px] leading-[32px] font-bold text-[#9CA3AF] mb-[48px] max-w-3xl">
            Whether you’re building multilingual ASR, TTS systems, or voice-enabled products across diverse environments, we help turn complex audio inputs into structured data assets for training, validation, and deployment.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-[16px] w-full sm:w-auto mb-[64px]">
            <Link to="/contact" className="group w-full sm:w-auto flex items-center justify-center gap-[12px] px-[36px] py-[16px] relative rounded-[18px] shadow-[0px_20px_25px_0px_rgba(139,92,246,0.2),0px_8px_10px_0px_rgba(139,92,246,0.2)] hover:shadow-[0px_20px_25px_0px_rgba(139,92,246,0.4),0px_8px_10px_0px_rgba(139,92,246,0.4)] text-[18px] leading-[normal] font-bold text-white whitespace-nowrap transition-all" style={{ backgroundImage: "linear-gradient(90deg, rgb(139, 92, 246) 0%, rgb(145, 91, 246) 7.1429%, rgb(151, 90, 245) 14.286%, rgb(157, 90, 245) 21.429%, rgb(162, 89, 244) 28.571%, rgb(168, 87, 244) 35.714%, rgb(174, 86, 243) 42.857%, rgb(179, 85, 243) 50%, rgb(185, 83, 242) 57.143%, rgb(190, 81, 242) 64.286%, rgb(196, 80, 241) 71.429%, rgb(201, 78, 241) 78.571%, rgb(206, 75, 240) 85.714%, rgb(212, 73, 240) 92.857%, rgb(217, 70, 239) 100%)" }}>
              Contact us
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-[12px]">
            {[
              "ASR", 
              "TTS", 
              "Multilingual Data", 
              "Audio QA", 
              "Recording Infrastructure", 
              "Global Deployment"
            ].map((tag, i) => (
              <span key={i} className="px-[16px] py-[8px] rounded-full border border-[#E8E7EF]/5 bg-[#E8E7EF]/5 text-[12px] leading-[16px] font-bold text-[#9CA3AF] hover:text-[#FFFFFF] hover:border-[#8B5CF6]/50 hover:bg-[#8B5CF6]/10 transition-colors shadow-sm cursor-default">
                {tag}
              </span>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}
