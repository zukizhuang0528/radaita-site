import React from "react";
import { Link } from "react-router";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { motion } from "motion/react";
import { heroSection, heroContainer, heroLeftCol, heroRightPanel, heroImage, heroCTARow } from "../styles/pageStyles";
import {
  ArrowRight,
  Radio,
  Video,
  Mic,
  MousePointerClick,
  MapPin,
  Server,
  Activity,
  Globe2,
  CheckCircle2,
  Workflow,
  Camera,
  Cpu,
  Layers,
  Home,
  Car,
  Building2,
  Trees,
  Factory,
  Stethoscope,
  Store,
  FlaskConical,
  Database,
  ArrowRightCircle
} from "lucide-react";

export function DataCollection() {
  return (
    <div className="bg-[#0A0A0A] min-h-screen text-[#E8E7EF] selection:bg-[#8B5CF6]/30 font-['Poppins'] overflow-x-hidden">
      {/* 1. Hero */}
      <section id="hero-data-collection" className={heroSection}>
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(139,92,246,0.15)_0%,transparent_70%)] blur-[120px]"></div>
          <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(217,70,239,0.1)_0%,transparent_70%)] blur-[100px]"></div>
        </div>

        <div className={`${heroContainer} relative z-10`}>
          <div id="hero-left-data-collection" className={heroLeftCol}>
            
            <h1 className="text-[48px] md:text-[56px] leading-[1.1] font-bold tracking-tight text-white mb-[24px]">
              Data Collection Built for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] via-[#D946EF] to-[#FFFFFF]">
                Real-World AI Data
              </span>
            </h1>
            
            <p className="text-[20px] leading-[1.6] text-[#9CA3AF] mb-[32px]">
              Capture sensor, visual, audio, and interaction data across real environments, global resource networks, and controlled collection setups — all connected to downstream cleaning, annotation, and training workflows.
            </p>

            <div className="flex flex-wrap gap-[12px] mb-[48px]">
              {["Sensor Data", "Visual Data", "Audio Data", "Interaction Data", "Real Environments"].map(tag => (
                <div key={tag} className="px-[16px] py-[8px] rounded-full bg-[rgba(139,92,246,0.1)] border border-[rgba(139,92,246,0.3)] text-[#E8E7EF] text-[14px]">
                  {tag}
                </div>
              ))}
            </div>

            <div className={heroCTARow}>
              <Link to="#" className="px-[32px] py-[16px] rounded-[16px] bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] text-white font-bold text-[16px] hover:shadow-[0_0_30px_rgba(139,92,246,0.4)] transition-all flex items-center gap-[8px]">
                Explore More <ArrowRight size={20} />
              </Link>
            </div>
          </div>

          <div className={`${heroRightPanel} flex items-center justify-center`}>
            <img
              id="hero-img-data-collection"
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwbXVsdGklMjBzb3VyY2UlMjBkYXRhJTIwdmlzdWFsfGVufDF8fHx8MTc3NDgzNTA4Nnww&ixlib=rb-4.1.0&q=80&w=450&h=648"
              alt="Multi-source Collection"
              className={heroImage}
            />
            {/* Overlay Network Simulating Intake */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-80" />
            
            <div className="relative z-10 w-full h-full p-[40px] flex items-center justify-center">
              {/* Central Node */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120px] h-[120px] bg-[#0A0A0A]/80 backdrop-blur-md rounded-full border-2 border-[#8B5CF6]/50 flex flex-col items-center justify-center shadow-[0_0_40px_rgba(139,92,246,0.3)] z-20">
                <Database className="text-[#8B5CF6] mb-[4px]" size={32} />
                <span className="text-[10px] text-white font-mono tracking-widest">PLATFORM</span>
              </div>
              
              {/* Floating Input Nodes */}
              <div className="absolute top-[15%] left-[15%] w-[80px] h-[80px] bg-white/5 backdrop-blur-md border border-white/20 rounded-[16px] flex flex-col items-center justify-center">
                <Radio className="text-[#D946EF] mb-[4px]" size={24} />
                <span className="text-[9px] text-[#9CA3AF] font-mono">SENSOR</span>
              </div>
              <svg className="absolute top-0 left-0 w-full h-full z-0 opacity-30" pointerEvents="none">
                <path d="M 22% 22% L 50% 50%" stroke="#D946EF" strokeWidth="2" strokeDasharray="4,4" />
              </svg>

              <div className="absolute top-[15%] right-[15%] w-[80px] h-[80px] bg-white/5 backdrop-blur-md border border-white/20 rounded-[16px] flex flex-col items-center justify-center">
                <Video className="text-blue-400 mb-[4px]" size={24} />
                <span className="text-[9px] text-[#9CA3AF] font-mono">VISION</span>
              </div>
              <svg className="absolute top-0 left-0 w-full h-full z-0 opacity-30" pointerEvents="none">
                <path d="M 78% 22% L 50% 50%" stroke="#8B5CF6" strokeWidth="2" strokeDasharray="4,4" />
              </svg>

              <div className="absolute bottom-[15%] left-[15%] w-[80px] h-[80px] bg-white/5 backdrop-blur-md border border-white/20 rounded-[16px] flex flex-col items-center justify-center">
                <Mic className="text-green-400 mb-[4px]" size={24} />
                <span className="text-[9px] text-[#9CA3AF] font-mono">AUDIO</span>
              </div>
              <svg className="absolute top-0 left-0 w-full h-full z-0 opacity-30" pointerEvents="none">
                <path d="M 22% 78% L 50% 50%" stroke="#D946EF" strokeWidth="2" strokeDasharray="4,4" />
              </svg>

              <div className="absolute bottom-[15%] right-[15%] w-[80px] h-[80px] bg-white/5 backdrop-blur-md border border-white/20 rounded-[16px] flex flex-col items-center justify-center">
                <MousePointerClick className="text-yellow-400 mb-[4px]" size={24} />
                <span className="text-[9px] text-[#9CA3AF] font-mono">HITL</span>
              </div>
              <svg className="absolute top-0 left-0 w-full h-full z-0 opacity-30" pointerEvents="none">
                <path d="M 78% 78% L 50% 50%" stroke="#D946EF" strokeWidth="2" strokeDasharray="4,4" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Why This Collection Layer Is Different */}
      <section className="relative py-[120px] border-b border-[rgba(255,255,255,0.05)] bg-[#0e0e0e] overflow-hidden">
        <div className="w-full max-w-[1200px] mx-auto">
          <div className="text-center mb-[80px] max-w-[800px] mx-auto">
            <h2 className="text-[40px] md:text-[48px] font-bold text-white mb-[24px]">Why This Collection Layer Is Different</h2>
            <p className="text-[20px] text-[#9CA3AF]">
              The value of collection here comes from more than reach. It combines multi-source intake, real-world environments, global execution, and a direct path into the rest of the AI data platform.
            </p>
          </div>

          <div className="relative flex flex-col lg:flex-row items-center justify-center gap-[64px] min-h-[500px]">
            {/* Center Node */}
            <div className="relative z-10 w-[260px] h-[260px] rounded-full bg-gradient-to-tr from-[#8B5CF6]/10 to-[#D946EF]/10 border border-[#8B5CF6]/30 flex items-center justify-center shadow-[0_0_60px_rgba(139,92,246,0.15)] backdrop-blur-xl">
              <div className="absolute inset-[10px] border border-white/5 rounded-full border-dashed animate-[spin_30s_linear_infinite]" />
              <div className="absolute inset-[30px] bg-[#161616] rounded-full flex flex-col items-center justify-center gap-[12px] shadow-inner border border-white/5">
                 <Activity className="text-[#8B5CF6]" size={40} />
                 <span className="font-bold text-[14px] tracking-wider uppercase text-white">Intake Engine</span>
              </div>
            </div>

            {/* Surrounding blocks (Absolute on lg, grid on sm) */}
            <div className="absolute inset-0 hidden lg:block pointer-events-none">
              {/* Top Left */}
              <div className="absolute top-[5%] left-[5%] xl:left-[10%] w-[320px] bg-[#161616] border border-white/10 rounded-[16px] p-[24px] shadow-2xl pointer-events-auto">
                <div className="w-[40px] h-[40px] rounded-[8px] bg-[rgba(139,92,246,0.1)] flex items-center justify-center mb-[16px]">
                  <Layers className="text-[#8B5CF6]" size={20} />
                </div>
                <h3 className="text-white font-bold text-[18px] mb-[8px]">1. Multi-source, not single-format</h3>
                <p className="text-[#9CA3AF] text-[14px] leading-relaxed">Support collection across sensor, video, image, audio, and human interaction data.</p>
              </div>
              
              {/* Top Right */}
              <div className="absolute top-[5%] right-[5%] xl:right-[10%] w-[320px] bg-[#161616] border border-white/10 rounded-[16px] p-[24px] shadow-2xl pointer-events-auto">
                <div className="w-[40px] h-[40px] rounded-[8px] bg-[rgba(139,92,246,0.1)] flex items-center justify-center mb-[16px]">
                  <MapPin className="text-[#8B5CF6]" size={20} />
                </div>
                <h3 className="text-white font-bold text-[18px] mb-[8px]">2. Real environments, not labs</h3>
                <p className="text-[#9CA3AF] text-[14px] leading-relaxed">Capture data from the environments where AI systems actually need to work.</p>
              </div>

              {/* Bottom Left */}
              <div className="absolute bottom-[5%] left-[5%] xl:left-[10%] w-[320px] bg-[#161616] border border-white/10 rounded-[16px] p-[24px] shadow-2xl pointer-events-auto">
                <div className="w-[40px] h-[40px] rounded-[8px] bg-[rgba(139,92,246,0.1)] flex items-center justify-center mb-[16px]">
                  <Globe2 className="text-[#8B5CF6]" size={20} />
                </div>
                <h3 className="text-white font-bold text-[18px] mb-[8px]">3. Global reach & local execution</h3>
                <p className="text-[#9CA3AF] text-[14px] leading-relaxed">Combine international resource coverage with local language, operators, and delivery.</p>
              </div>

              {/* Bottom Right */}
              <div className="absolute bottom-[5%] right-[5%] xl:right-[10%] w-[320px] bg-[#161616] border border-white/10 rounded-[16px] p-[24px] shadow-2xl pointer-events-auto">
                <div className="w-[40px] h-[40px] rounded-[8px] bg-[rgba(139,92,246,0.1)] flex items-center justify-center mb-[16px]">
                  <Workflow className="text-[#8B5CF6]" size={20} />
                </div>
                <h3 className="text-white font-bold text-[18px] mb-[8px]">4. Built to feed the platform</h3>
                <p className="text-[#9CA3AF] text-[14px] leading-relaxed">Connect collection directly into cleaning, standardization, annotation, and training.</p>
              </div>
              
              {/* Connecting lines */}
              <svg className="absolute inset-0 w-full h-full -z-10 opacity-30" pointerEvents="none">
                <path d="M 25% 20% L 50% 50%" stroke="#8B5CF6" strokeWidth="2" strokeDasharray="5,5" />
                <path d="M 75% 20% L 50% 50%" stroke="#8B5CF6" strokeWidth="2" strokeDasharray="5,5" />
                <path d="M 25% 80% L 50% 50%" stroke="#8B5CF6" strokeWidth="2" strokeDasharray="5,5" />
                <path d="M 75% 80% L 50% 50%" stroke="#8B5CF6" strokeWidth="2" strokeDasharray="5,5" />
              </svg>
            </div>

            {/* Mobile layout */}
            <div className="lg:hidden flex flex-col gap-[24px] w-full mt-[40px]">
              {[
                { title: "Multi-source, not single-format", desc: "Support collection across sensor, video, image, audio, and human interaction data.", icon: Layers },
                { title: "Real environments, not labs", desc: "Capture data from the environments where AI systems actually need to work.", icon: MapPin },
                { title: "Global reach & local execution", desc: "Combine international resource coverage with local language, operators, and delivery.", icon: Globe2 },
                { title: "Built to feed the platform", desc: "Connect collection directly into cleaning, standardization, annotation, and training.", icon: Workflow }
              ].map((item, i) => (
                <div key={i} className="w-full bg-[#161616] border border-white/10 rounded-[16px] p-[24px]">
                  <div className="w-[40px] h-[40px] rounded-[8px] bg-[rgba(139,92,246,0.1)] flex items-center justify-center mb-[16px]">
                    <item.icon className="text-[#8B5CF6]" size={20} />
                  </div>
                  <h3 className="text-white font-bold text-[18px] mb-[8px]">{i + 1}. {item.title}</h3>
                  <p className="text-[#9CA3AF] text-[14px] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Collection Modes */}
      <section className="py-[120px] bg-[#0A0A0A] border-b border-[rgba(255,255,255,0.05)] relative">
        <div className="w-full max-w-[1200px] mx-auto">
          <div className="mb-[80px]">
            <h2 className="text-[40px] md:text-[48px] font-bold text-white mb-[24px]">Collection Modes Built for Different Kinds of Data</h2>
            <p className="text-[20px] text-[#9CA3AF] max-w-[800px]">
              Different AI systems require different capture methods. The product supports multiple ways of sourcing data depending on format, environment, hardware, and interaction model.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[32px]">
            {[
              {
                title: "Field and Mobile Collection",
                short: "Distributed collection at real-world scale.",
                desc: "Support mobile-based and field-based collection across large participant pools, multiple regions, and varied environments for scalable real-world data intake.",
                tags: ["Mobile Collection", "Field Capture", "Distributed Participants", "Real-World Scale"],
                img: "https://images.unsplash.com/photo-1664526937033-fe2c11f1be25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjB1c2VycyUyMGRpc3RyaWJ1dGVkJTIwbmV0d29ya3xlbnwxfHx8fDE3NzQ4MzUwODZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
                icon: MapPin
              },
              {
                title: "Controlled Acoustic Collection",
                short: "High-quality audio capture under controlled conditions.",
                desc: "Use professional recording rooms, anechoic environments, and hardware testing setups to collect speech and device-sensitive audio data with strong quality control.",
                tags: ["Recording Studio", "Anechoic Room", "Acoustic Testing", "Hardware Validation"],
                img: "https://images.unsplash.com/photo-1691244427119-12c36d7872fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmVjaG9pYyUyMGFjb3VzdGljJTIwcmVjb3JkaW5nJTIwY2hhbWJlcnxlbnwxfHx8fDE3NzQ4MzUwNzd8MA&ixlib=rb-4.1.0&q=80&w=1080",
                icon: Mic
              },
              {
                title: "Human-in-the-Loop Interaction Capture",
                short: "Capture human action and control signals for embodied systems.",
                desc: "Support VR teleoperation, exoskeleton capture, motion capture, and 3D mouse teaching to generate human demonstration and interaction data for embodied AI training.",
                tags: ["VR Teleoperation", "Exoskeleton", "Motion Capture", "3D Mouse", "Human Demonstration"],
                img: "https://images.unsplash.com/photo-1578918748648-7d30d67436c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ciUyMHJvYm90aWNzJTIwb3BlcmF0b3IlMjBpbnRlcmZhY2V8ZW58MXx8fDE3NzQ4MzUwNzd8MA&ixlib=rb-4.1.0&q=80&w=1080",
                icon: MousePointerClick
              },
              {
                title: "Sensor and Multimodal Collection",
                short: "Structured intake for sensor-rich and multimodal systems.",
                desc: "Support collection across sensors, video, image, and other multimodal inputs with format compatibility, real-time or offline workflows, and downstream-ready data structuring.",
                tags: ["Sensor Data", "Video", "Image", "Multimodal", "Real-Time / Offline"],
                img: "https://images.unsplash.com/photo-1730303055577-c8bdba043b19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZW5zb3IlMjBzdGFjayUyMGRhdGElMjBmbG93fGVufDF8fHx8MTc3NDgzNTA3N3ww&ixlib=rb-4.1.0&q=80&w=1080",
                icon: Radio
              }
            ].map((mode, i) => (
              <div key={i} className="flex flex-col bg-[#161616] border border-white/5 rounded-[24px] overflow-hidden group hover:border-[#8B5CF6]/30 transition-colors duration-300">
                <div className="h-[240px] w-full relative overflow-hidden">
                  <img src={mode.img} alt={mode.title} className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#161616] to-transparent" />
                  <div className="absolute top-[24px] left-[24px] w-[48px] h-[48px] rounded-[12px] bg-black/50 backdrop-blur-md flex items-center justify-center border border-white/10">
                    <mode.icon className="text-[#8B5CF6]" size={24} />
                  </div>
                </div>
                <div className="p-[32px] flex flex-col flex-1">
                  <h3 className="text-[24px] font-bold text-white mb-[12px]">{mode.title}</h3>
                  <p className="text-[#8B5CF6] font-medium text-[16px] mb-[16px]">{mode.short}</p>
                  <p className="text-[#9CA3AF] text-[15px] leading-[1.6] mb-[32px] flex-1">{mode.desc}</p>
                  <div className="flex flex-wrap gap-[8px]">
                    {mode.tags.map(tag => (
                      <span key={tag} className="text-[12px] px-[12px] py-[4px] rounded-full bg-white/5 border border-white/10 text-gray-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Built for Real Environments */}
      <section className="py-[120px] bg-[#0A0A0A] border-b border-[rgba(255,255,255,0.05)] relative">
        <div className="w-full max-w-[1200px] mx-auto">
          <div className="text-center mb-[80px] max-w-[800px] mx-auto">
            <h2 className="text-[40px] md:text-[48px] font-bold text-white mb-[24px]">Built for the Environments Where AI Actually Operates</h2>
            <p className="text-[20px] text-[#9CA3AF]">
              The product is designed to collect data from environments where AI products have to perform — not just from idealized or isolated inputs.
            </p>
          </div>

          <div className="relative w-full h-[600px] rounded-[32px] overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1485463611174-f302f6a5c1c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhdXRvbW90aXZlJTIwZGFzaCUyMGF1dG9ub21vdXN8ZW58MXx8fHwxNzc0ODM1MDc4fDA&ixlib=rb-4.1.0&q=80&w=1080" 
              alt="Real World Environments" 
              className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-[1.5s]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent" />
            
            {/* Floating Environment Tags */}
            <div className="absolute inset-0 p-[24px] md:p-[48px] flex flex-wrap content-end gap-[16px]">
              {[
                { label: "Home", icon: Home },
                { label: "Automotive", icon: Car },
                { label: "Office", icon: Building2 },
                { label: "Outdoor", icon: Trees },
                { label: "Industrial Floor", icon: Factory },
                { label: "Healthcare", icon: Stethoscope },
                { label: "Retail Space", icon: Store },
                { label: "Research", icon: FlaskConical }
              ].map((env, i) => (
                <div key={i} className="flex items-center gap-[8px] px-[24px] py-[12px] bg-black/60 backdrop-blur-md border border-white/20 rounded-full text-white font-medium hover:bg-[#8B5CF6]/20 hover:border-[#8B5CF6]/50 transition-all cursor-default">
                  <env.icon size={18} className="text-[#8B5CF6]" />
                  {env.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Global Reach, Localized Execution */}
      <section className="py-[120px] bg-[#0A0A0A] border-b border-[rgba(255,255,255,0.05)]">
        <div className="w-full max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-[80px] items-center">
          <div className="lg:w-1/2 relative h-[500px] w-full rounded-[24px] overflow-hidden border border-white/5 bg-[#161616]">
            <img 
              src="https://images.unsplash.com/photo-1684610529682-553625a1ffed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGdsb2JhbCUyMG5vZGUlMjBuZXR3b3JrJTIwZnV0dXJpc3RpY3xlbnwxfHx8fDE3NzQ4MzUwNzh8MA&ixlib=rb-4.1.0&q=80&w=1080" 
              alt="Global Network"
              className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-screen"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/80 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
               <Globe2 className="text-[#8B5CF6]/30 w-[300px] h-[300px]" />
            </div>
          </div>

          <div className="lg:w-1/2 flex flex-col">
            <h2 className="text-[40px] md:text-[48px] font-bold text-white mb-[24px]">Global Reach, Localized Execution</h2>
            <p className="text-[20px] text-[#9CA3AF] mb-[40px] leading-[1.6]">
              A scalable collection layer requires more than broad geographic coverage. It needs local operators, local language capability, and flexible delivery infrastructure across markets.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[24px]">
              <div className="p-[24px] bg-[#161616] rounded-[16px] border border-white/5">
                <h4 className="text-[32px] font-bold text-[#8B5CF6] mb-[8px]">50+</h4>
                <p className="text-white font-medium">Countries</p>
                <p className="text-[#9CA3AF] text-[14px] mt-[4px]">Execution experience across diverse global markets.</p>
              </div>
              <div className="p-[24px] bg-[#161616] rounded-[16px] border border-white/5">
                <h4 className="text-[32px] font-bold text-[#8B5CF6] mb-[8px]">Global</h4>
                <p className="text-white font-medium">Regional Coverage</p>
                <p className="text-[#9CA3AF] text-[14px] mt-[4px]">Europe, Americas, Africa, Middle East, and Asia.</p>
              </div>
              <div className="p-[24px] bg-[#161616] rounded-[16px] border border-white/5">
                <h4 className="text-[32px] font-bold text-[#8B5CF6] mb-[8px]">Local</h4>
                <p className="text-white font-medium">Overseas Bases</p>
                <p className="text-[#9CA3AF] text-[14px] mt-[4px]">Direct infrastructure for dedicated local delivery.</p>
              </div>
              <div className="p-[24px] bg-[#161616] rounded-[16px] border border-white/5">
                <h4 className="text-[32px] font-bold text-[#8B5CF6] mb-[8px]">Flexible</h4>
                <p className="text-white font-medium">Workforce</p>
                <p className="text-[#9CA3AF] text-[14px] mt-[4px]">Allocation across voice, vision, and NLP services.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Collection Quality Architecture */}
      <section className="py-[120px] bg-[#0A0A0A] border-b border-[rgba(255,255,255,0.05)] overflow-hidden">
        <div className="w-full max-w-[1200px] mx-auto">
          <div className="text-center mb-[80px] max-w-[800px] mx-auto">
            <h2 className="text-[40px] md:text-[48px] font-bold text-white mb-[24px]">Collection Quality Starts Before Annotation</h2>
            <p className="text-[20px] text-[#9CA3AF]">
              Quality is designed into the collection process through controlled environments, hardware validation, setup standards, and structured intake workflows before data moves downstream.
            </p>
          </div>

          {/* Flow Diagram */}
          <div className="relative max-w-[1200px] mx-auto">
            <div className="hidden md:block absolute top-[45px] left-[50px] right-[50px] h-[2px] bg-gradient-to-r from-transparent via-[#8B5CF6]/50 to-transparent z-0" />
            
            <div className="grid grid-cols-2 md:grid-cols-6 gap-[24px] md:gap-[16px] relative z-10">
              {[
                { step: "Environment", desc: "Studio setup" },
                { step: "Hardware", desc: "Device testing" },
                { step: "Capture", desc: "Execution" },
                { step: "Check", desc: "Quality gate" },
                { step: "Clean", desc: "Filtering" },
                { step: "Standardize", desc: "Ingestion ready" }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <div className="w-[64px] h-[64px] rounded-full bg-[#161616] border-2 border-[#8B5CF6] flex items-center justify-center text-white font-bold text-[20px] shadow-[0_0_20px_rgba(139,92,246,0.2)] mb-[16px] relative">
                    {i + 1}
                    {i < 5 && <ArrowRight className="hidden md:block absolute -right-[40px] text-[#8B5CF6]/50" size={20} />}
                  </div>
                  <h4 className="text-white font-bold text-[16px] mb-[4px]">{item.step}</h4>
                  <span className="text-[#9CA3AF] text-[12px]">{item.desc}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-[80px] grid grid-cols-1 md:grid-cols-3 gap-[24px] max-w-[1200px] mx-auto">
            <div className="p-[32px] bg-gradient-to-b from-[#161616] to-transparent rounded-[16px] border-t border-white/10">
              <h4 className="text-white font-bold mb-[12px]">Controlled Environments</h4>
              <p className="text-[#9CA3AF] text-[14px]">Professional recording studios and anechoic chambers ensure base data purity.</p>
            </div>
            <div className="p-[32px] bg-gradient-to-b from-[#161616] to-transparent rounded-[16px] border-t border-white/10">
              <h4 className="text-white font-bold mb-[12px]">Hardware Validation</h4>
              <p className="text-[#9CA3AF] text-[14px]">Hardware-level testing and comparison support to guarantee sensor integrity.</p>
            </div>
            <div className="p-[32px] bg-gradient-to-b from-[#161616] to-transparent rounded-[16px] border-t border-white/10">
              <h4 className="text-white font-bold mb-[12px]">Unified Workflows</h4>
              <p className="text-[#9CA3AF] text-[14px]">A structured process before data is passed to any downstream processing layer.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Connected to the Platform */}
      <section className="py-[120px] bg-[#0A0A0A] border-b border-[rgba(255,255,255,0.05)]">
        <div className="w-full max-w-[1200px] mx-auto">
          <div className="text-center mb-[80px] max-w-[800px] mx-auto">
            <h2 className="text-[40px] md:text-[48px] font-bold text-white mb-[24px]">From Collection to Platform-Ready Data</h2>
            <p className="text-[20px] text-[#9CA3AF]">
              Collection is only the first layer. The product connects raw inputs directly into cleaning, structuring, annotation, training, and operational control inside the platform.
            </p>
          </div>

          <div className="relative flex items-center justify-center py-[80px]">
            {/* Center Node */}
            <div className="relative z-20 w-[160px] h-[160px] bg-gradient-to-tr from-[#8B5CF6] to-[#D946EF] rounded-full flex flex-col items-center justify-center shadow-[0_0_50px_rgba(139,92,246,0.4)]">
              <Database size={40} className="text-white mb-[8px]" />
              <span className="text-white font-bold text-[18px]">Collection</span>
            </div>

            {/* Connecting Rings */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-[#8B5CF6]/20 rounded-full z-0" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-[#8B5CF6]/10 rounded-full z-0" />

            {/* Surrounding Nodes */}
            <div className="absolute top-[0%] left-1/2 -translate-x-1/2 w-[200px] bg-[#161616] border border-[#8B5CF6]/30 p-[16px] rounded-[12px] flex items-center gap-[12px] z-10">
              <div className="p-[8px] bg-[#8B5CF6]/20 rounded-[8px]"><Cpu size={20} className="text-[#8B5CF6]" /></div>
              <span className="text-white font-medium text-[14px]">Data Ingestion</span>
            </div>

            <div className="absolute top-[25%] right-[5%] lg:right-[15%] w-[200px] bg-[#161616] border border-white/10 p-[16px] rounded-[12px] flex items-center gap-[12px] z-10">
              <div className="p-[8px] bg-white/5 rounded-[8px]"><Database size={20} className="text-gray-400" /></div>
              <span className="text-white font-medium text-[14px]">Data Lake / ETL</span>
            </div>

            <div className="absolute bottom-[25%] right-[5%] lg:right-[15%] w-[200px] bg-[#161616] border border-white/10 p-[16px] rounded-[12px] flex items-center gap-[12px] z-10">
              <div className="p-[8px] bg-[#8B5CF6]/20 rounded-[8px]"><CheckCircle2 size={20} className="text-[#8B5CF6]" /></div>
              <span className="text-white font-medium text-[14px]">Annotation</span>
            </div>

            <div className="absolute bottom-[0%] left-1/2 -translate-x-1/2 w-[200px] bg-[#161616] border border-white/10 p-[16px] rounded-[12px] flex items-center gap-[12px] z-10">
              <div className="p-[8px] bg-[#D946EF]/20 rounded-[8px]"><Activity size={20} className="text-[#D946EF]" /></div>
              <span className="text-white font-medium text-[14px]">Training</span>
            </div>

            <div className="absolute top-[50%] left-[5%] lg:left-[15%] -translate-y-1/2 w-[200px] bg-[#161616] border border-white/10 p-[16px] rounded-[12px] flex items-center gap-[12px] z-10">
              <div className="p-[8px] bg-white/5 rounded-[8px]"><Server size={20} className="text-gray-400" /></div>
              <span className="text-white font-medium text-[14px]">Operations</span>
            </div>

            {/* Connector Lines (Simulated with absolute positioned divs) */}
            <div className="absolute top-[30%] left-1/2 -translate-x-1/2 w-[2px] h-[20%] bg-gradient-to-t from-[#8B5CF6] to-transparent z-0" />
            <div className="absolute bottom-[30%] left-1/2 -translate-x-1/2 w-[2px] h-[20%] bg-gradient-to-b from-[#8B5CF6] to-transparent z-0" />
          </div>
        </div>
      </section>

      {/* 8. Closing CTA */}
      <section className="relative py-[160px] overflow-hidden">
        <div className="absolute inset-0 bg-[#0A0A0A]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(139,92,246,0.15)_0%,transparent_60%)] pointer-events-none" />
        
        <div className="relative w-full max-w-[1200px] mx-auto text-center z-10">
          <h2 className="text-[40px] md:text-[56px] font-bold text-white mb-[24px] leading-[1.1]">
            Ready to Collect Better Data From the Real World?
          </h2>
          <p className="text-[20px] text-[#9CA3AF] mb-[48px] leading-[1.6]">
            Scale real-world data acquisition across environments, devices, and regions — and connect it directly into your AI production workflow.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-[24px]">
            <Link to="/contact" className="w-full sm:w-auto px-[40px] py-[20px] rounded-[20px] bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] text-white font-bold text-[18px] hover:shadow-[0_0_40px_rgba(139,92,246,0.4)] transition-all flex items-center justify-center gap-[12px] group">
              Contact us <ArrowRightCircle size={24} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
