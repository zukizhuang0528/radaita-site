import { Header } from "./Header";
import { Footer } from "./Footer";
import { Link } from "react-router";
import { motion } from "motion/react";
import coreArchitectureImage from "../../assets/platform-architecture/core-architecture.png";
import { heroSection, heroContainer, heroLeftCol, heroRightPanel, heroImage, heroCTARow } from "../styles/pageStyles";
import {
  ArrowRight,
  Database,
  BrainCircuit,
  ShieldCheck,
  Activity,
  Network,
  Cpu,
  Lock,
  Server,
  RefreshCw,
  Repeat,
  CircleDashed,
  Layers,
  Fingerprint,
  CheckCircle2,
  Workflow
} from "lucide-react";

export function PlatformArchitecture() {
  const reinforcingFlywheels = [
    {
      title: "Data Flywheel",
      eyebrow: "Production Intelligence",
      description:
        "AI-assisted annotation, expert refinement, and recurring model updates compound into better throughput and higher-quality datasets.",
      highlights: ["AI pre-annotation", "Human refinement", "Model retraining"],
      accent: "#8B5CF6",
      icon: RefreshCw
    },
    {
      title: "Synthetic Flywheel",
      eyebrow: "Scenario Expansion",
      description:
        "Synthetic generation expands hard-to-capture conditions, and real-world comparison keeps simulation quality grounded over time.",
      highlights: ["Rare-scene generation", "Real-vs-sim comparison", "Simulation improvement"],
      accent: "#D946EF",
      icon: Repeat
    },
    {
      title: "Compliance Flywheel",
      eyebrow: "Trusted Collaboration",
      description:
        "Trusted spaces, federated participation, and auditable controls make secure data collaboration more valuable as the ecosystem grows.",
      highlights: ["Trusted data space", "Federated participation", "Secure ecosystem growth"],
      accent: "#E8E7EF",
      icon: CircleDashed
    }
  ];

  return (
    <div className="bg-[#0A0A0A] min-h-screen text-[#E8E7EF] selection:bg-[#8B5CF6]/30 font-['Poppins'] overflow-x-hidden">
      {/* 1. Hero Section */}
      <section id="hero-platform-architecture" className={heroSection}>
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
          <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(139,92,246,0.15)_0%,transparent_70%)] blur-[120px]"></div>
          <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(217,70,239,0.1)_0%,transparent_70%)] blur-[100px]"></div>
        </div>

        <div className={`${heroContainer} relative z-10`}>
          
          <div id="hero-left-platform-architecture" className={heroLeftCol}>
            
            <h1 className="text-[54px] md:text-[64px] leading-[64px] md:leading-[72px] font-bold tracking-tight text-[#FFFFFF] mb-[32px]">
              A Platform Built to Turn Complex Data into <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] via-[#D946EF] to-[#FFFFFF]">
                AI-Ready Assets
              </span>
            </h1>
            
            <p className="text-[16px] leading-[24px] text-[#9CA3AF] font-normal mb-[48px] max-w-lg">
              ADAOP brings together data collection, annotation, training, evaluation, and built-in governance in one unified system — helping teams manage the full lifecycle of AI data production with more clarity, control, and scale.
            </p>
            
            <div className={heroCTARow}>
              <Link to="/contact" className="group w-full sm:w-auto flex items-center justify-center gap-[12px] px-[36px] py-[16px] relative rounded-[18px] shadow-[0px_20px_25px_0px_rgba(139,92,246,0.2),0px_8px_10px_0px_rgba(139,92,246,0.2)] hover:shadow-[0px_20px_25px_0px_rgba(139,92,246,0.4),0px_8px_10px_0px_rgba(139,92,246,0.4)] text-[18px] leading-[normal] font-bold text-white whitespace-nowrap transition-all" style={{ backgroundImage: "linear-gradient(90deg, rgb(139, 92, 246) 0%, rgb(145, 91, 246) 7.1429%, rgb(151, 90, 245) 14.286%, rgb(157, 90, 245) 21.429%, rgb(162, 89, 244) 28.571%, rgb(168, 87, 244) 35.714%, rgb(174, 86, 243) 42.857%, rgb(179, 85, 243) 50%, rgb(185, 83, 242) 57.143%, rgb(190, 81, 242) 64.286%, rgb(196, 80, 241) 71.429%, rgb(201, 78, 241) 78.571%, rgb(206, 75, 240) 85.714%, rgb(212, 73, 240) 92.857%, rgb(217, 70, 239) 100%)" }}>
                Talk to Our Team
                <ArrowRight className="w-[18px] h-[18px] group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          <div className={`${heroRightPanel} flex items-center justify-center`}>
            
            <img
              id="hero-img-platform-architecture"
              src="https://images.unsplash.com/photo-1764265992140-e07714cbaaf6?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaSUyMHBsYXRmb3JtJTIwZGF0YSUyMGNlbnRlciUyMG5vZGUlMjBhYnN0cmFjdCUyMGRhcmslMjBwdXJwbGV8ZW58MXx8fHwxNzc0Nzg2NjM1fDA&ixlib=rb-4.1.0&q=80&w=450&h=648"
              alt="Data Infrastructure"
              className={heroImage}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent"></div>
            
            {/* Core & Orbit Visual */}
            <div className="relative w-[320px] h-[320px] flex items-center justify-center perspective-[1200px]">
              
              {/* Center Core */}
              <div className="w-[100px] h-[100px] rounded-full bg-[#161616] border-2 border-[#8B5CF6]/50 flex items-center justify-center z-20 shadow-[0_0_40px_rgba(139,92,246,0.3)] relative">
                <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.4)_0%,transparent_70%)] animate-pulse"></div>
                <Network className="w-[40px] h-[40px] text-[#8B5CF6]" />
                <span className="absolute -bottom-[24px] text-[12px] font-bold tracking-widest text-[#E8E7EF]">ADAOP</span>
              </div>

              {/* Orbital Rings */}
              <motion.div className="absolute w-[240px] h-[240px] rounded-full border border-dashed border-[#8B5CF6]/30 z-10" animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} />
              <motion.div className="absolute w-[360px] h-[360px] rounded-full border border-[#D946EF]/20 z-0" animate={{ rotate: -360 }} transition={{ duration: 40, repeat: Infinity, ease: "linear" }} />

              {/* Orbiting Nodes */}
              {[
                { angle: 0, label: "Collect", icon: Database, color: "#8B5CF6" },
                { angle: 60, label: "Annotate", icon: BrainCircuit, color: "#D946EF" },
                { angle: 120, label: "Train", icon: Cpu, color: "#8B5CF6" },
                { angle: 180, label: "Evaluate", icon: Activity, color: "#D946EF" },
                { angle: 240, label: "Quality", icon: CheckCircle2, color: "#8B5CF6" },
                { angle: 300, label: "Security", icon: ShieldCheck, color: "#D946EF" }
              ].map((node, i) => {
                const radius = i % 2 === 0 ? 120 : 180;
                const rad = (node.angle * Math.PI) / 180;
                const x = Math.cos(rad) * radius;
                const y = Math.sin(rad) * radius;

                return (
                  <motion.div 
                    key={i}
                    className="absolute flex flex-col items-center justify-center z-30"
                    initial={{ x: 0, y: 0, opacity: 0 }}
                    animate={{ x, y, opacity: 1 }}
                    transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
                  >
                    <div className="w-[48px] h-[48px] rounded-[12px] bg-[#0A0A0A]/80 backdrop-blur-md border border-[#E8E7EF]/10 flex items-center justify-center group hover:border-[#8B5CF6]/50 hover:bg-[#8B5CF6]/10 transition-colors shadow-lg">
                      <node.icon className="w-[20px] h-[20px]" style={{ color: node.color }} />
                    </div>
                    <span className="mt-[8px] text-[10px] font-bold tracking-widest text-[#9CA3AF] uppercase bg-[#0A0A0A]/60 px-[6px] py-[2px] rounded">{node.label}</span>
                  </motion.div>
                );
              })}
            </div>

          </div>

        </div>
      </section>

      {/* 2. The Core Architecture of the Platform */}
      <section className="py-[128px] relative bg-[#0A0A0A] border-b border-[#E8E7EF]/10 overflow-hidden">
        <div className="w-full max-w-[1200px] mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-[80px]">
            <h2 className="text-[54px] leading-[64px] font-bold text-[#FFFFFF] tracking-tight mb-[24px]">
              The Core Architecture of the Platform
            </h2>
            <p className="text-[16px] leading-[24px] text-[#9CA3AF] font-normal">
              Built around five core production stages, reinforced by native quality, compliance, and security layers, and extended through domain adaptation and flexible computing infrastructure.
            </p>
          </div>

          <div className="relative w-full rounded-[24px] bg-[#161616] border border-[#E8E7EF]/10 p-[16px] md:p-[24px] shadow-2xl">
            <img
              src={coreArchitectureImage}
              alt="Core architecture diagram"
              className="block w-full h-auto rounded-[16px]"
            />
          </div>
        </div>
      </section>

      {/* 3. How the Platform Operates as a Continuous Loop */}
      <section className="py-[128px] relative bg-[#0A0A0A] border-b border-[#E8E7EF]/10">
        <div className="w-full max-w-[1200px] mx-auto flex flex-col items-center">
          <div className="text-center max-w-3xl mx-auto mb-[64px]">
            <h2 className="text-[54px] leading-[64px] font-bold text-[#FFFFFF] tracking-tight mb-[24px]">
              How the Platform Operates as Three Reinforcing Flywheels
            </h2>
            <p className="text-[16px] leading-[24px] text-[#9CA3AF] font-normal">
              ADAOP improves as a system, not as a one-pass workflow. A data flywheel, a synthetic flywheel, and a compliance flywheel continuously feed one another, while quality, compliance, and security remain the foundation under every loop.
            </p>
          </div>

          <div className="w-full rounded-[24px] border border-[#E8E7EF]/10 bg-[#161616]/95 p-[24px] md:p-[40px] overflow-hidden relative shadow-[0_0_40px_rgba(139,92,246,0.12)]">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-[-10%] left-[12%] w-[260px] h-[260px] bg-[radial-gradient(circle,rgba(139,92,246,0.18)_0%,transparent_70%)] blur-[70px]"></div>
              <div className="absolute top-[18%] right-[8%] w-[220px] h-[220px] bg-[radial-gradient(circle,rgba(217,70,239,0.14)_0%,transparent_70%)] blur-[70px]"></div>
              <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[260px] h-[220px] bg-[radial-gradient(circle,rgba(232,231,239,0.08)_0%,transparent_70%)] blur-[70px]"></div>
            </div>

            <div className="relative md:hidden flex flex-col gap-[20px]">
              <div className="border border-[#E8E7EF]/10 bg-[#0A0A0A]/80 rounded-[20px] p-[20px]">
                <div className="flex items-center justify-center gap-[12px] mb-[12px]">
                  <Network className="w-[20px] h-[20px] text-[#8B5CF6]" />
                  <span className="text-[12px] leading-[16px] tracking-[0.22em] uppercase font-bold text-[#8B5CF6]">System Feedback Architecture</span>
                </div>
                <h3 className="text-[24px] leading-[32px] font-bold text-[#FFFFFF] text-center mb-[12px]">High-Quality Datasets</h3>
                <p className="text-[14px] leading-[20px] text-[#9CA3AF] text-center mb-[16px]">
                  Production, scenario generation, and trusted collaboration keep improving the platform together.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-[8px]">
                  <span className="px-[12px] py-[6px] rounded-full border border-[#8B5CF6]/30 bg-[#8B5CF6]/10 text-[12px] leading-[16px] font-bold text-[#E8E7EF]">AI Engine</span>
                  <span className="px-[12px] py-[6px] rounded-full border border-[#E8E7EF]/20 bg-[#FFFFFF]/5 text-[12px] leading-[16px] font-bold text-[#E8E7EF]">Talent & Service</span>
                  <span className="px-[12px] py-[6px] rounded-full border border-[#D946EF]/30 bg-[#D946EF]/10 text-[12px] leading-[16px] font-bold text-[#E8E7EF]">Technical Platform</span>
                </div>
              </div>

              {reinforcingFlywheels.map((wheel, idx) => (
                <div key={idx} className="border border-[#E8E7EF]/10 bg-[#0A0A0A]/80 rounded-[20px] p-[20px]">
                  <div className="flex items-center gap-[12px] mb-[12px]">
                    <div className="w-[44px] h-[44px] rounded-full border flex items-center justify-center bg-[#161616]" style={{ borderColor: `${wheel.accent}66`, boxShadow: `0 0 24px ${wheel.accent}22` }}>
                      <wheel.icon className="w-[18px] h-[18px]" style={{ color: wheel.accent }} />
                    </div>
                    <div>
                      <span className="text-[12px] leading-[16px] font-bold uppercase tracking-[0.22em]" style={{ color: wheel.accent }}>{wheel.eyebrow}</span>
                      <h4 className="text-[20px] leading-[28px] font-bold text-[#FFFFFF]">{wheel.title}</h4>
                    </div>
                  </div>
                  <p className="text-[14px] leading-[20px] text-[#9CA3AF] mb-[12px]">{wheel.description}</p>
                  <div className="flex flex-wrap gap-[8px]">
                    {wheel.highlights.map((item) => (
                      <span key={item} className="px-[10px] py-[6px] rounded-full border border-[#E8E7EF]/10 bg-[#FFFFFF]/5 text-[12px] leading-[16px] font-bold text-[#E8E7EF]">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}

              <div className="border border-[#D946EF]/20 bg-[#0A0A0A]/90 rounded-[18px] p-[16px]">
                <div className="flex items-center gap-[10px] mb-[10px]">
                  <ShieldCheck className="w-[18px] h-[18px] text-[#D946EF]" />
                  <span className="text-[12px] leading-[16px] font-bold uppercase tracking-[0.22em] text-[#D946EF]">Foundation</span>
                </div>
                <div className="flex flex-wrap gap-[8px]">
                  {["Quality", "Compliance", "Security"].map((item) => (
                    <span key={item} className="px-[12px] py-[6px] rounded-full border border-[#E8E7EF]/10 bg-[#161616] text-[12px] leading-[16px] font-bold text-[#E8E7EF]">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative hidden md:block min-h-[980px]">
              <div className="absolute left-1/2 top-[380px] -translate-x-1/2 w-[560px] h-[560px] rounded-full border border-[#8B5CF6]/22 bg-[radial-gradient(circle,rgba(255,255,255,0.02)_0%,rgba(139,92,246,0.06)_54%,rgba(10,10,10,0)_55%)]"></div>

              <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible" viewBox="0 0 1000 980" fill="none" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
                <defs>
                  <linearGradient id="flywheelCircle" x1="220" y1="200" x2="780" y2="620" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#8B5CF6" stopOpacity="0.65" />
                    <stop offset="0.5" stopColor="#D946EF" stopOpacity="0.55" />
                    <stop offset="1" stopColor="#E8E7EF" stopOpacity="0.45" />
                  </linearGradient>
                  <marker id="flywheelArrow" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto">
                    <path d="M0 0L10 5L0 10V0Z" fill="#D946EF" fillOpacity="0.85" />
                  </marker>
                </defs>
                <circle cx="500" cy="380" r="280" stroke="url(#flywheelCircle)" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeDasharray="0 16 1720 16" markerEnd="url(#flywheelArrow)" />
              </svg>

              <div className="absolute left-1/2 top-[36px] -translate-x-1/2 px-[14px] py-[6px] rounded-full border border-[#8B5CF6]/20 bg-[#8B5CF6]/10 text-[11px] leading-[16px] font-bold uppercase tracking-[0.2em] text-[#8B5CF6]">
                Three reinforcing loops
              </div>

              <div className="absolute left-1/2 top-[380px] -translate-x-1/2 -translate-y-1/2 w-[260px]">
                <div className="flex flex-col items-center justify-center text-center">
                  <div className="flex items-center justify-center gap-[10px] mb-[12px]">
                    <Network className="w-[18px] h-[18px] text-[#8B5CF6]" />
                    <span className="text-[12px] leading-[16px] font-bold uppercase tracking-[0.24em] text-[#8B5CF6]">System Feedback Architecture</span>
                  </div>
                  <h3 className="text-[32px] leading-[40px] font-bold text-[#FFFFFF] text-center">High-Quality Datasets</h3>
                </div>
              </div>

              <div className="absolute left-[36px] top-[120px] w-[270px] rounded-[22px] border border-[#8B5CF6]/20 bg-[#0A0A0A]/88 p-[20px] shadow-[0_0_24px_rgba(139,92,246,0.12)]">
                <div className="flex flex-col items-center justify-center text-center min-h-[244px]">
                  <div className="relative w-[52px] h-[52px] shrink-0 mb-[14px]">
                    <motion.div
                      className="absolute inset-0 rounded-full border-2 border-dashed"
                      style={{ borderColor: "#8B5CF6" }}
                      animate={{ rotate: 360 }}
                      transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
                    />
                    <div className="absolute inset-[8px] rounded-full border border-[#8B5CF6]/40 bg-[#161616] flex items-center justify-center">
                      <RefreshCw className="w-[18px] h-[18px] text-[#8B5CF6]" />
                    </div>
                  </div>
                  <span className="text-[12px] leading-[16px] font-bold uppercase tracking-[0.22em] text-[#8B5CF6] mb-[10px]">Production Intelligence</span>
                  <h4 className="text-[20px] leading-[28px] font-bold text-[#FFFFFF] mb-[14px]">Data Flywheel</h4>
                  <div className="flex flex-wrap justify-center gap-[8px]">
                    {reinforcingFlywheels[0].highlights.map((item) => (
                      <span key={item} className="px-[10px] py-[6px] rounded-full border border-[#8B5CF6]/20 bg-[#8B5CF6]/10 text-[12px] leading-[16px] font-bold text-[#E8E7EF]">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="absolute right-[36px] top-[120px] w-[270px] rounded-[22px] border border-[#D946EF]/20 bg-[#0A0A0A]/88 p-[20px] shadow-[0_0_24px_rgba(217,70,239,0.12)]">
                <div className="flex flex-col items-center justify-center text-center min-h-[244px]">
                  <div className="relative w-[52px] h-[52px] shrink-0 mb-[14px]">
                    <motion.div
                      className="absolute inset-0 rounded-full border-2 border-dashed"
                      style={{ borderColor: "#D946EF" }}
                      animate={{ rotate: -360 }}
                      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    />
                    <div className="absolute inset-[8px] rounded-full border border-[#D946EF]/40 bg-[#161616] flex items-center justify-center">
                      <Repeat className="w-[18px] h-[18px] text-[#D946EF]" />
                    </div>
                  </div>
                  <span className="text-[12px] leading-[16px] font-bold uppercase tracking-[0.22em] text-[#D946EF] mb-[10px]">Scenario Expansion</span>
                  <h4 className="text-[20px] leading-[28px] font-bold text-[#FFFFFF] mb-[14px]">Synthetic Flywheel</h4>
                  <div className="flex flex-wrap justify-center gap-[8px]">
                    {reinforcingFlywheels[1].highlights.map((item) => (
                      <span key={item} className="px-[10px] py-[6px] rounded-full border border-[#D946EF]/20 bg-[#D946EF]/10 text-[12px] leading-[16px] font-bold text-[#E8E7EF]">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="absolute left-1/2 top-[590px] -translate-x-1/2 w-[320px] rounded-[22px] border border-[#E8E7EF]/16 bg-[#0A0A0A]/92 p-[20px] shadow-[0_0_24px_rgba(232,231,239,0.08)]">
                <div className="flex flex-col items-center justify-center text-center min-h-[244px]">
                  <div className="relative w-[52px] h-[52px] shrink-0 mb-[14px]">
                    <motion.div
                      className="absolute inset-0 rounded-full border-2 border-dashed border-[#E8E7EF]/45"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                    />
                    <div className="absolute inset-[8px] rounded-full border border-[#E8E7EF]/30 bg-[#161616] flex items-center justify-center">
                      <CircleDashed className="w-[18px] h-[18px] text-[#E8E7EF]" />
                    </div>
                  </div>
                  <span className="text-[12px] leading-[16px] font-bold uppercase tracking-[0.22em] text-[#E8E7EF] mb-[10px]">Trusted Collaboration</span>
                  <h4 className="text-[20px] leading-[28px] font-bold text-[#FFFFFF] mb-[14px]">Compliance Flywheel</h4>
                  <div className="flex flex-wrap justify-center gap-[8px]">
                    {reinforcingFlywheels[2].highlights.map((item) => (
                      <span key={item} className="px-[10px] py-[6px] rounded-full border border-[#E8E7EF]/10 bg-[#FFFFFF]/5 text-[12px] leading-[16px] font-bold text-[#E8E7EF]">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="absolute left-[28px] right-[28px] bottom-[20px] rounded-[18px] border border-[#D946EF]/18 bg-[#0A0A0A]/96 p-[18px]">
                <div className="flex items-center justify-between gap-[20px]">
                  <div className="flex items-center gap-[10px] shrink-0">
                    <ShieldCheck className="w-[18px] h-[18px] text-[#D946EF]" />
                    <span className="text-[12px] leading-[16px] font-bold uppercase tracking-[0.22em] text-[#D946EF]">Foundation</span>
                  </div>
                  <div className="flex flex-wrap justify-end gap-[8px]">
                    {["Quality", "Compliance", "Security"].map((item) => (
                      <span key={item} className="px-[12px] py-[6px] rounded-full border border-[#E8E7EF]/10 bg-[#161616] text-[12px] leading-[16px] font-bold text-[#E8E7EF]">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-[20px] mt-[24px]">
            {reinforcingFlywheels.map((wheel, idx) => (
              <div key={idx} className="rounded-[20px] border border-[#E8E7EF]/10 bg-[#161616] p-[24px] shadow-[0_0_20px_rgba(0,0,0,0.35)]">
                <span className="block text-[12px] leading-[16px] font-bold uppercase tracking-[0.22em] mb-[12px]" style={{ color: wheel.accent }}>
                  {wheel.eyebrow}
                </span>
                <h3 className="text-[24px] leading-[32px] font-bold text-[#FFFFFF] mb-[12px]">{wheel.title}</h3>
                <p className="text-[14px] leading-[20px] text-[#9CA3AF]">{wheel.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Security Architecture Built Into Every Layer */}
      <section className="py-[128px] relative bg-[#0A0A0A] border-b border-[#E8E7EF]/10">
        <div className="w-full max-w-[1200px] mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-[80px]">
            <h2 className="text-[54px] leading-[64px] font-bold text-[#FFFFFF] tracking-tight mb-[24px]">
              Security Architecture Built Into Every Layer
            </h2>
            <p className="text-[16px] leading-[24px] text-[#9CA3AF] font-normal">
              Security and trust are embedded into platform access, infrastructure isolation, operational control, and deployment architecture — not added as an afterthought.
            </p>
          </div>

          <div className="relative w-full rounded-[24px] bg-[#161616] border border-[#E8E7EF]/10 p-[32px] md:p-[64px] overflow-hidden shadow-2xl flex items-center justify-center min-h-[600px]">
            
            <img src="https://images.unsplash.com/photo-1614064642261-3ccbfafa481b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlciUyMHNlY3VyaXR5JTIwbG9jayUyMGVudmlyb25tZW50JTIwc2VjdXJlJTIwc2VydmVyJTIwZGFya3xlbnwxfHx8fDE3NzQ3ODY2NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080" className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-screen" alt="Security Env" />
            <div className="absolute inset-0 bg-[#0A0A0A]/60"></div>

            {/* Concentric Security Map */}
            <div className="relative w-full max-w-[800px] aspect-square md:aspect-auto md:h-[500px] flex items-center justify-center z-10">
               
               {/* Outer Boundary */}
               <div className="absolute inset-0 border border-[#E8E7EF]/10 rounded-full md:rounded-[32px] bg-[#0A0A0A]/40 backdrop-blur-sm"></div>
               
               {/* Notes around */}
               <div className="absolute top-[24px] left-[24px] md:left-[48px] bg-[#161616]/90 border border-[#E8E7EF]/20 rounded-[12px] p-[16px] w-[180px] shadow-xl">
                 <Fingerprint className="w-[20px] h-[20px] text-[#8B5CF6] mb-[8px]" />
                 <h4 className="text-[12px] font-bold text-[#E8E7EF] mb-[4px]">Controlled Access</h4>
                 <p className="text-[10px] text-[#9CA3AF] leading-[14px]">Platform permissions, logs, and behavior audit.</p>
               </div>
               
               <div className="absolute top-[24px] right-[24px] md:right-[48px] bg-[#161616]/90 border border-[#E8E7EF]/20 rounded-[12px] p-[16px] w-[180px] shadow-xl">
                 <Server className="w-[20px] h-[20px] text-[#D946EF] mb-[8px]" />
                 <h4 className="text-[12px] font-bold text-[#E8E7EF] mb-[4px]">Isolated Environments</h4>
                 <p className="text-[10px] text-[#9CA3AF] leading-[14px]">Network, storage, and compute isolation.</p>
               </div>

               <div className="absolute bottom-[24px] left-[24px] md:left-[48px] bg-[#161616]/90 border border-[#E8E7EF]/20 rounded-[12px] p-[16px] w-[180px] shadow-xl">
                 <Workflow className="w-[20px] h-[20px] text-[#D946EF] mb-[8px]" />
                 <h4 className="text-[12px] font-bold text-[#E8E7EF] mb-[4px]">Auditable Operations</h4>
                 <p className="text-[10px] text-[#9CA3AF] leading-[14px]">Dedicated devices, VPN, and operational auditing.</p>
               </div>

               <div className="absolute bottom-[24px] right-[24px] md:right-[48px] bg-[#161616]/90 border border-[#E8E7EF]/20 rounded-[12px] p-[16px] w-[180px] shadow-xl">
                 <Layers className="w-[20px] h-[20px] text-[#8B5CF6] mb-[8px]" />
                 <h4 className="text-[12px] font-bold text-[#E8E7EF] mb-[4px]">Dual-Layer Protection</h4>
                 <p className="text-[10px] text-[#9CA3AF] leading-[14px]">Customer private cloud + rigorous platform policies.</p>
               </div>

               {/* Inner Core */}
               <div className="w-[160px] h-[160px] rounded-full border border-[#8B5CF6]/50 bg-[#8B5CF6]/10 flex items-center justify-center shadow-[0_0_40px_rgba(139,92,246,0.3)] backdrop-blur-md relative group">
                  <div className="absolute inset-[-10px] border border-[#D946EF]/30 rounded-full animate-[spin_10s_linear_infinite]"></div>
                  <Lock className="w-[48px] h-[48px] text-[#E8E7EF]" />
                  <div className="absolute inset-0 rounded-full bg-[#8B5CF6]/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. Closing CTA */}
      <section className="relative py-[128px] md:py-[192px] overflow-hidden bg-[#0A0A0A]">
        <div className="absolute inset-0 z-0 pointer-events-none">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(139,92,246,0.1)_0%,transparent_60%)] blur-[100px]"></div>
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-[#8B5CF6]/10 rounded-full"></div>
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-[#D946EF]/10 rounded-full"></div>
        </div>

        <div className="w-full max-w-[1200px] mx-auto text-center relative z-10 flex flex-col items-center">
          
          <div className="w-[64px] h-[64px] bg-[#161616] border border-[#8B5CF6]/30 rounded-full flex items-center justify-center mb-[32px] shadow-[0_0_20px_rgba(139,92,246,0.2)]">
            <Network className="w-[24px] h-[24px] text-[#8B5CF6]" />
          </div>
          
          <h2 className="text-[54px] md:text-[64px] leading-[64px] md:leading-[72px] font-bold text-[#FFFFFF] mb-[24px] tracking-tight">
            Ready to Build on a Platform That Compounds Over Time
          </h2>
          <p className="text-[24px] leading-[32px] font-bold text-[#9CA3AF] mb-[48px] max-w-3xl">
            Whether you’re scaling annotation, integrating models, improving data quality, or building secure collaboration around sensitive data, ADAOP provides a unified foundation for AI-ready data production.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-[16px] w-full sm:w-auto mb-[64px]">
            <Link to="/contact" className="group w-full sm:w-auto flex items-center justify-center gap-[12px] px-[36px] py-[16px] relative rounded-[18px] shadow-[0px_20px_25px_0px_rgba(139,92,246,0.2),0px_8px_10px_0px_rgba(139,92,246,0.2)] hover:shadow-[0px_20px_25px_0px_rgba(139,92,246,0.4),0px_8px_10px_0px_rgba(139,92,246,0.4)] text-[18px] leading-[normal] font-bold text-white whitespace-nowrap transition-all" style={{ backgroundImage: "linear-gradient(90deg, rgb(139, 92, 246) 0%, rgb(145, 91, 246) 7.1429%, rgb(151, 90, 245) 14.286%, rgb(157, 90, 245) 21.429%, rgb(162, 89, 244) 28.571%, rgb(168, 87, 244) 35.714%, rgb(174, 86, 243) 42.857%, rgb(179, 85, 243) 50%, rgb(185, 83, 242) 57.143%, rgb(190, 81, 242) 64.286%, rgb(196, 80, 241) 71.429%, rgb(201, 78, 241) 78.571%, rgb(206, 75, 240) 85.714%, rgb(212, 73, 240) 92.857%, rgb(217, 70, 239) 100%)" }}>
              Contact us
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-[12px]">
            {[
              "Collection", 
              "Auto-Annotation", 
              "HITL", 
              "Training", 
              "Evaluation", 
              "Quality", 
              "Compliance",
              "Security"
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
