import { Header } from "./Header";
import { Footer } from "./Footer";
import { Link } from "react-router";
import { useState } from "react";
import { heroSection, heroContainer, heroLeftCol, heroRightPanel, heroImage, heroCTARow } from "../styles/pageStyles";
import { motion, AnimatePresence } from "motion/react";
import { 
  ArrowRight, Video, Box, Hexagon, Database, 
  Settings, Bot, Activity, Layers, 
  Workflow, Eye, Target, Cpu, 
  Network, ScanFace, FileCode2,
  HardDrive, LineChart, ShieldCheck,
  LayoutDashboard, Server, Lock, ListChecks
} from "lucide-react";

export function EmbodiedAI() {
  const [activeCapture, setActiveCapture] = useState(0);

  const captureMethods = [
    {
      title: "VR Teleoperation",
      desc: "Capture first-person robot operation data, including pose, trajectory, force, and vision, for imitation learning and task reproduction.",
      icon: Hexagon,
      image: "https://images.unsplash.com/photo-1683821291889-3ad254f02e22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ciUyMGhlYWRzZXQlMjByb2JvdCUyMGNvbnRyb2wlMjBkYXJrfGVufDF8fHx8MTc3NDcxMDkzOHww&ixlib=rb-4.1.0&q=80&w=1080",
      stats: ["First-Person View", "Precise Control"]
    },
    {
      title: "Exoskeleton Capture",
      desc: "Record human joint motion, force, torque, and movement trajectories to support robot imitation and human-robot coordination.",
      icon: Activity,
      image: "https://images.unsplash.com/photo-1557343133-b5cf261ace6b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2JvdGljJTIwbWVjaGFuaWNzJTIwZXhvc2tlbGV0b24lMjBkYXJrfGVufDF8fHx8MTc3NDcxMDk0NHww&ixlib=rb-4.1.0&q=80&w=1080",
      stats: ["Torque Feedback", "Full Joint Tracking"]
    },
    {
      title: "Motion Capture",
      desc: "Use sensors, cameras, and wearables to convert human movement into structured signals for embodied model training.",
      icon: Target,
      image: "https://images.unsplash.com/photo-1656011196400-2c548b70a981?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3Rpb24lMjBjYXB0dXJlJTIwc3VpdCUyMGRhcmslMjB0ZWNofGVufDF8fHx8MTc3NDcxMDkzOHww&ixlib=rb-4.1.0&q=80&w=1080",
      stats: ["Sub-mm Accuracy", "High Frequency"]
    },
    {
      title: "3D Mouse Demonstration",
      desc: "Control robot end-effector motion directly in 3D space while recording paths, pose, and motion parameters.",
      icon: Box,
      image: "https://images.unsplash.com/photo-1604838656896-171d9d737cbe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzZCUyMHBvaW50JTIwY2xvdWQlMjBsYXNlciUyMHNjYW4lMjBkYXJrfGVufDF8fHx8MTc3NDcxMDkzOHww&ixlib=rb-4.1.0&q=80&w=1080",
      stats: ["6-DOF Input", "Intuitive Teaching"]
    }
  ];

  return (
    <div className="bg-[#0A0A0A] min-h-screen text-[#E8E7EF] selection:bg-[#8B5CF6]/30 font-['Poppins'] overflow-x-hidden">
      {/* 1. Hero Section */}
      <section id="hero-embodied-ai" className={heroSection}>
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
          <div className="absolute top-[10%] right-[-10%] w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(139,92,246,0.15)_0%,transparent_70%)] blur-[120px]"></div>
          <div className="absolute top-[40%] left-[-5%] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(139,92,246,0.1)_0%,transparent_70%)] blur-[100px]"></div>
        </div>

        <div className={`${heroContainer} relative z-10`}>
          
          <div id="hero-left-embodied-ai" className={heroLeftCol}>
            
            <h1 className="text-[54px] md:text-[64px] leading-[64px] md:leading-[72px] font-bold tracking-tight text-[#FFFFFF] mb-[32px]">
              Data Infrastructure for Real-World <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] via-[#D946EF] to-[#FFFFFF]">
                Embodied AI
              </span>
            </h1>
            
            <p className="text-[24px] leading-[32px] text-[#FFFFFF] font-bold mb-[16px] max-w-lg">
              A full-stack embodied AI data production platform spanning data acquisition, annotation, data engineering, model training, and operational management.
            </p>

            <p className="text-[16px] leading-[24px] text-[#9CA3AF] font-normal mb-[48px] max-w-lg">
              Built for systems that must perceive, act, and learn in physical environments, the platform supports everything from human demonstration and multimodal labeling to model training and operational scale.
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
              id="hero-img-embodied-ai"
              src="https://images.unsplash.com/photo-1610827345728-7d417bcf483d?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2JvdCUyMGFybSUyMGluZHVzdHJpYWwlMjBkYXJrJTIwcHVycGxlfGVufDF8fHx8MTc3NDcxMDkzOHww&ixlib=rb-4.1.0&q=80&w=450&h=648"
              alt="Real World Robot Operation"
              className={heroImage}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/90 via-transparent to-transparent"></div>
            
            {/* Ambient Data Overlays */}
            <div className="absolute inset-0 flex items-end justify-center pointer-events-none perspective-1000">
               {/* 3D Grid */}
               <motion.div 
                 className="absolute bottom-[-20%] w-[150%] h-[60%] border-t border-[#8B5CF6]/30 [transform:rotateX(75deg)] opacity-60"
                 style={{
                   backgroundImage: "linear-gradient(rgba(139,92,246,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.3) 1px, transparent 1px)",
                   backgroundSize: "40px 40px"
                 }}
               />
               
               {/* Robotic Arm Trajectory Line */}
               <svg className="absolute inset-0 w-full h-full opacity-80" viewBox="0 0 500 500">
                  <motion.path 
                    d="M 100,400 C 150,300 250,250 350,150" 
                    fill="none" 
                    stroke="#8B5CF6" 
                    strokeWidth="3" 
                    strokeDasharray="10 10"
                    initial={{ strokeDashoffset: 100 }}
                    animate={{ strokeDashoffset: 0 }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  />
                  <circle cx="100" cy="400" r="4" fill="#D946EF" className="animate-pulse" />
                  <circle cx="215" cy="275" r="4" fill="#D946EF" />
                  <circle cx="350" cy="150" r="6" fill="#8B5CF6" className="animate-pulse" />
               </svg>

               {/* Multimodal Labels */}
               <div className="absolute top-[30%] left-[20%] bg-[#0A0A0A]/60 backdrop-blur-md border border-[#E8E7EF]/10 rounded-[8px] p-[8px] flex flex-col gap-[4px]">
                 <div className="flex items-center gap-[8px]">
                   <ScanFace className="w-[12px] h-[12px] text-[#8B5CF6]" />
                   <span className="text-[12px] leading-[16px] font-bold text-[#E8E7EF]">VISION_NODE</span>
                 </div>
               </div>
               
               <div className="absolute top-[50%] right-[15%] bg-[#0A0A0A]/60 backdrop-blur-md border border-[#D946EF]/30 rounded-[8px] p-[8px] flex flex-col gap-[4px]">
                 <div className="flex items-center gap-[8px]">
                   <Target className="w-[12px] h-[12px] text-[#D946EF]" />
                   <span className="text-[12px] leading-[16px] font-bold text-[#D946EF]">FORCE: 12.4N</span>
                 </div>
                 <div className="w-full h-[2px] bg-[#D946EF]/20 rounded">
                   <div className="w-[60%] h-full bg-[#D946EF] rounded"></div>
                 </div>
               </div>
               
               <div className="absolute bottom-[25%] left-[40%] bg-[#8B5CF6]/20 backdrop-blur-md border border-[#8B5CF6]/50 rounded-[8px] p-[8px]">
                 <span className="text-[12px] leading-[16px] font-bold text-[#FFFFFF]">INSTRUCTION: "Pick up the object"</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Embodied Data Acquisition */}
      <section className="py-[128px] relative bg-[#0A0A0A] border-b border-[#E8E7EF]/10">
        <div className="w-full max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-[64px] lg:gap-[96px] items-center">
          
          <div className="lg:w-1/2 flex flex-col">
            <h2 className="text-[54px] leading-[64px] font-bold text-[#FFFFFF] mb-[24px] tracking-tight">
              Embodied Data Acquisition at Real-World Scale
            </h2>
            <p className="text-[24px] leading-[32px] text-[#FFFFFF] font-bold mb-[24px]">
              Build a data acquisition system spanning real environments and simulated environments, supporting multiple sensors and human-machine interfaces.
            </p>
            <p className="text-[16px] leading-[24px] text-[#9CA3AF] font-normal mb-[32px]">
              Industrial operations, service-robot environments, complex human-robot interaction, and multi-sensor synchronization require highly controlled collection protocols.
            </p>

            <div className="flex flex-wrap gap-[16px] mb-[48px]">
              <div className="bg-[#161616] border border-[#E8E7EF]/10 rounded-[12px] px-[20px] py-[16px] flex flex-col">
                <span className="text-[12px] leading-[16px] font-bold text-[#9CA3AF] mb-[4px]">DATA VOLUME</span>
                <span className="text-[24px] leading-[32px] font-bold text-[#FFFFFF]">10,000+ <span className="text-[16px] leading-[24px] font-normal text-[#8B5CF6]">hours</span></span>
              </div>
              <div className="bg-[#161616] border border-[#E8E7EF]/10 rounded-[12px] px-[20px] py-[16px] flex flex-col">
                <span className="text-[12px] leading-[16px] font-bold text-[#9CA3AF] mb-[4px]">TASK COMPLEXITY</span>
                <span className="text-[24px] leading-[32px] font-bold text-[#FFFFFF]">5,000+ <span className="text-[16px] leading-[24px] font-normal text-[#8B5CF6]">tasks</span></span>
              </div>
            </div>

            {/* Workflow flow strip */}
            <div className="flex items-center justify-between text-[12px] leading-[16px] font-bold text-[#9CA3AF] border border-[#E8E7EF]/10 bg-[#161616] p-[16px] rounded-[12px] overflow-x-auto hide-scrollbar gap-[12px]">
              <span className="text-[#8B5CF6] whitespace-nowrap">Design</span> <ArrowRight className="w-[12px] h-[12px] text-[#E8E7EF]/20 shrink-0" />
              <span className="whitespace-nowrap">Capture</span> <ArrowRight className="w-[12px] h-[12px] text-[#E8E7EF]/20 shrink-0" />
              <span className="whitespace-nowrap">Record</span> <ArrowRight className="w-[12px] h-[12px] text-[#E8E7EF]/20 shrink-0" />
              <span className="whitespace-nowrap">Sync</span> <ArrowRight className="w-[12px] h-[12px] text-[#E8E7EF]/20 shrink-0" />
              <span className="whitespace-nowrap">Clean</span> <ArrowRight className="w-[12px] h-[12px] text-[#E8E7EF]/20 shrink-0" />
              <span className="text-[#FFFFFF] whitespace-nowrap">Train</span>
            </div>
          </div>

          <div className="lg:w-1/2 w-full relative h-[450px] lg:h-[550px] rounded-[24px] overflow-hidden border border-[#E8E7EF]/10 group bg-[#161616]">
            <img 
              src="https://images.unsplash.com/photo-1740928980493-f1c88f715546?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxodW1hbm9pZCUyMHJvYm90JTIwd2FyZWhvdXNlJTIwZGFya3xlbnwxfHx8fDE3NzQ3MTA5Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080" 
              alt="Data Collection Context" 
              className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000 ease-out mix-blend-screen"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent"></div>
            
            {/* Scene Overlays */}
            <div className="absolute inset-0 pointer-events-none p-[24px] flex flex-col justify-between">
               <div className="flex justify-between">
                  <div className="bg-[#0A0A0A]/80 backdrop-blur border border-[#8B5CF6]/30 px-[12px] py-[6px] rounded-[4px] flex items-center gap-[8px]">
                    <div className="w-[8px] h-[8px] bg-red-500 rounded-full animate-pulse"></div>
                    <span className="text-[12px] leading-[16px] font-bold text-[#8B5CF6]">REC_ACTIVE_03</span>
                  </div>
                  <div className="bg-[#0A0A0A]/60 backdrop-blur border border-[#E8E7EF]/10 px-[12px] py-[6px] rounded-[4px] flex items-center gap-[8px]">
                    <Video className="w-[12px] h-[12px] text-[#9CA3AF]" />
                    <span className="text-[12px] leading-[16px] font-bold text-[#9CA3AF]">MULTI_CAM_SYNC</span>
                  </div>
               </div>
               
               <div className="w-full max-w-xs self-end bg-[#0A0A0A]/70 backdrop-blur-md border border-[#E8E7EF]/10 p-[16px] rounded-[12px] flex flex-col gap-[12px]">
                  <span className="text-[12px] leading-[16px] font-bold text-[#9CA3AF] uppercase">Collection Parameters</span>
                  <div className="flex justify-between items-center text-[12px] leading-[16px] font-bold">
                    <span className="text-[#9CA3AF]">Environment</span>
                    <span className="text-[#FFFFFF]">Industrial Logistics</span>
                  </div>
                  <div className="w-full h-[1px] bg-[#E8E7EF]/10"></div>
                  <div className="flex justify-between items-center text-[12px] leading-[16px] font-bold">
                    <span className="text-[#9CA3AF]">Human-in-Loop</span>
                    <span className="text-[#8B5CF6]">Active</span>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Human-in-the-Loop Capture */}
      <section className="py-[128px] relative bg-[#0A0A0A] border-b border-[#E8E7EF]/10">
        <div className="w-full max-w-[1200px] mx-auto">
          
          <div className="mb-[64px]">
            <h2 className="text-[54px] leading-[64px] font-bold text-[#FFFFFF] tracking-tight mb-[24px] max-w-3xl">
              Human-in-the-Loop Capture for Robot Learning
            </h2>
            <p className="text-[16px] leading-[24px] text-[#9CA3AF] font-normal max-w-3xl">
              Collect robot operation data through interactive human demonstration, recording body motion, robot trajectories, and multimodal signals for imitation learning and policy training.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-[48px] lg:gap-[80px]">
            {/* Left Column: Visual Switching */}
            <div className="lg:w-7/12 order-2 lg:order-1">
              <div className="relative w-full h-[500px] lg:h-[700px] rounded-[24px] bg-[#161616] border border-[#E8E7EF]/10 overflow-hidden shadow-2xl">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeCapture}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="absolute inset-0"
                  >
                    <img 
                      src={captureMethods[activeCapture].image} 
                      alt={captureMethods[activeCapture].title}
                      className="w-full h-full object-cover opacity-50 mix-blend-lighten"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent"></div>
                    
                    {/* Dynamic Overlays Based on Capture Method */}
                    <div className="absolute bottom-[32px] left-[32px] right-[32px]">
                       <div className="flex gap-[16px] mb-[16px]">
                         {captureMethods[activeCapture].stats.map((stat, i) => (
                           <div key={i} className="px-[12px] py-[6px] bg-[#8B5CF6]/20 border border-[#8B5CF6]/30 rounded-[4px] backdrop-blur-md text-[12px] leading-[16px] font-bold text-[#FFFFFF]">
                             {stat}
                           </div>
                         ))}
                       </div>
                       <div className="w-full h-[96px] bg-[#0A0A0A]/60 backdrop-blur-xl border border-[#E8E7EF]/10 rounded-[12px] p-[16px] flex items-center justify-between">
                          {/* Signal Cluster Graph */}
                          <div className="flex items-center gap-[24px] w-full justify-between px-[8px] overflow-x-auto hide-scrollbar">
                             {["Vision", "Pose", "Trajectory", "Force", "Joint Angle", "EMG"].map((signal, i) => (
                               <div key={i} className="flex flex-col items-center gap-[8px] group">
                                 <div className="w-[8px] h-[8px] rounded-full bg-[#9CA3AF] group-hover:bg-[#D946EF] group-hover:shadow-[0_0_8px_#D946EF] transition-all"></div>
                                 <span className="text-[12px] leading-[16px] font-bold text-[#9CA3AF] group-hover:text-[#FFFFFF] transition-colors">{signal}</span>
                               </div>
                             ))}
                          </div>
                       </div>
                    </div>

                    {/* Technical Crosshairs */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[256px] h-[256px] border border-[#E8E7EF]/5 rounded-full pointer-events-none">
                       <div className="absolute top-0 left-1/2 w-[1px] h-full bg-[#E8E7EF]/5"></div>
                       <div className="absolute top-1/2 left-0 w-full h-[1px] bg-[#E8E7EF]/5"></div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Right Column: Methods List */}
            <div className="lg:w-5/12 flex flex-col gap-[16px] order-1 lg:order-2 justify-center">
              {captureMethods.map((method, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveCapture(idx)}
                  className={`flex items-start text-left p-[24px] rounded-[16px] border transition-all duration-300 relative overflow-hidden group ${
                    activeCapture === idx 
                      ? "bg-[#161616] border-[#8B5CF6]/30 shadow-[0_0_30px_rgba(139,92,246,0.1)]" 
                      : "bg-transparent border-transparent hover:bg-[#E8E7EF]/5"
                  }`}
                >
                  <div className={`mr-[20px] mt-[4px] p-[8px] rounded-[12px] transition-colors ${
                    activeCapture === idx ? "bg-[#8B5CF6]/20 text-[#8B5CF6]" : "bg-[#E8E7EF]/5 text-[#9CA3AF] group-hover:text-[#FFFFFF]"
                  }`}>
                    <method.icon className="w-[20px] h-[20px]" />
                  </div>
                  <div>
                    <h3 className={`text-[24px] leading-[32px] font-bold mb-[8px] transition-colors ${
                      activeCapture === idx ? "text-[#FFFFFF]" : "text-[#9CA3AF] group-hover:text-[#E8E7EF]"
                    }`}>
                      {method.title}
                    </h3>
                    <AnimatePresence>
                      {activeCapture === idx && (
                        <motion.p 
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="text-[16px] leading-[24px] font-normal text-[#9CA3AF]"
                        >
                          {method.desc}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Multimodal Annotation */}
      <section className="py-[128px] relative bg-[#0A0A0A] border-b border-[#E8E7EF]/10">
        <div className="w-full max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-[64px] lg:gap-[96px] items-start">
          
          <div className="lg:w-5/12 flex flex-col">
            <h2 className="text-[54px] leading-[64px] font-bold text-[#FFFFFF] mb-[24px] tracking-tight">
              Multimodal Annotation for Embodied Intelligence
            </h2>
            <p className="text-[24px] leading-[32px] text-[#FFFFFF] font-bold mb-[24px]">
              A multimodal labeling system for vision, space, motion, and language — built for embodied AI data rather than conventional static annotation.
            </p>
            <p className="text-[16px] leading-[24px] text-[#9CA3AF] font-normal mb-[32px]">
              Human interaction understanding, robot action sequence modeling, multimodal alignment, and complex-environment perception all handled within one unified platform.
            </p>

            <div className="grid grid-cols-2 gap-[16px] mb-[32px]">
              <div className="bg-[#161616] border border-[#E8E7EF]/10 rounded-[12px] p-[16px] flex flex-col">
                <span className="text-[24px] leading-[32px] font-bold text-[#FFFFFF] mb-[4px]">30%+</span>
                <span className="text-[12px] leading-[16px] font-bold text-[#9CA3AF]">Efficiency Gain</span>
              </div>
              <div className="bg-[#161616] border border-[#E8E7EF]/10 rounded-[12px] p-[16px] flex flex-col">
                <span className="text-[24px] leading-[32px] font-bold text-[#8B5CF6] mb-[4px]">99%+</span>
                <span className="text-[12px] leading-[16px] font-bold text-[#9CA3AF]">Annotation Accuracy</span>
              </div>
            </div>

            {/* Modality Matrix */}
            <div className="bg-[#161616] border border-[#E8E7EF]/10 rounded-[16px] p-[24px]">
               <span className="text-[12px] leading-[16px] font-bold text-[#9CA3AF] mb-[16px] block uppercase">Coverage Matrix</span>
               <div className="flex flex-wrap gap-[8px]">
                 {["2D Detection", "Pose & Direction", "Action Segmentation", "Video Keyframes", "3D Fusion", "2D-3D Alignment", "Action-Language"].map((tag, i) => (
                   <span key={i} className="px-[12px] py-[6px] bg-[#0A0A0A]/40 border border-[#E8E7EF]/5 rounded-[4px] text-[12px] leading-[16px] font-bold text-[#E8E7EF] hover:border-[#8B5CF6]/50 hover:text-[#FFFFFF] transition-colors cursor-default">
                     {tag}
                   </span>
                 ))}
               </div>
            </div>
          </div>

          <div className="lg:w-7/12 w-full">
            {/* Multimodal Explorer Composition */}
            <div className="w-full bg-[#161616] border border-[#E8E7EF]/10 rounded-[24px] p-[16px] shadow-2xl relative">
               <div className="absolute inset-0 bg-gradient-to-br from-[#8B5CF6]/5 via-transparent to-transparent rounded-[24px] pointer-events-none"></div>
               
               {/* Top Bar */}
               <div className="flex items-center justify-between px-[16px] pb-[16px] border-b border-[#E8E7EF]/10 mb-[16px]">
                 <div className="flex gap-[8px]">
                   <div className="w-[12px] h-[12px] rounded-full bg-red-500/50"></div>
                   <div className="w-[12px] h-[12px] rounded-full bg-yellow-500/50"></div>
                   <div className="w-[12px] h-[12px] rounded-full bg-green-500/50"></div>
                 </div>
                 <div className="text-[12px] leading-[16px] font-bold text-[#9CA3AF]">multimodal_editor_v4.2</div>
               </div>

               <div className="grid grid-cols-12 gap-[16px]">
                 {/* Main Vision View */}
                 <div className="col-span-12 md:col-span-8 h-[192px] md:h-[256px] bg-[#0A0A0A] rounded-[12px] overflow-hidden relative border border-[#E8E7EF]/5 group">
                   <img 
                     src="https://images.unsplash.com/photo-1659297396001-fa8d15dcad1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMHZpc2lvbiUyMGRhcmt8ZW58MXx8fHwxNzc0NzEwOTQ0fDA&ixlib=rb-4.1.0&q=80&w=1080" 
                     className="w-full h-full object-cover opacity-60 mix-blend-screen"
                     alt="Vision Annotation"
                   />
                   <div className="absolute top-[20%] left-[30%] w-[96px] h-[128px] border-2 border-[#8B5CF6] bg-[#8B5CF6]/10 rounded-sm"></div>
                   <div className="absolute top-[20%] left-[30%] -translate-y-full bg-[#8B5CF6] text-[#FFFFFF] text-[12px] leading-[16px] px-[8px] py-[2px] font-bold">OBJECT_GRASP</div>
                 </div>

                 {/* 3D Point Cloud View */}
                 <div className="col-span-12 md:col-span-4 h-[192px] md:h-[256px] bg-[#0A0A0A] rounded-[12px] overflow-hidden relative border border-[#E8E7EF]/5">
                   <img 
                     src="https://images.unsplash.com/photo-1604838656896-171d9d737cbe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzZCUyMHBvaW50JTIwY2xvdWQlMjBsYXNlciUyMHNjYW4lMjBkYXJrfGVufDF8fHx8MTc3NDcxMDkzOHww&ixlib=rb-4.1.0&q=80&w=1080" 
                     className="w-full h-full object-cover opacity-80"
                     alt="3D View"
                   />
                   <div className="absolute top-[8px] left-[8px] px-[8px] py-[4px] bg-[#0A0A0A]/60 rounded-[4px] text-[12px] leading-[16px] font-bold text-[#9CA3AF]">3D LIDAR</div>
                   <div className="absolute top-[40%] right-[20%] w-[48px] h-[64px] border border-[#D946EF] bg-[#D946EF]/20 [transform:rotateX(20deg)]"></div>
                 </div>

                 {/* Video Timeline & Action View */}
                 <div className="col-span-12 h-[96px] bg-[#0A0A0A] rounded-[12px] border border-[#E8E7EF]/5 p-[12px] flex flex-col justify-between">
                   <div className="flex justify-between items-center mb-[8px]">
                     <span className="text-[12px] leading-[16px] font-bold text-[#9CA3AF]">TEMPORAL ACTION SEGMENTATION</span>
                     <span className="text-[12px] leading-[16px] font-bold text-[#8B5CF6]">T: 04.25s</span>
                   </div>
                   <div className="w-full h-[32px] bg-[#0A0A0A] border border-[#E8E7EF]/10 rounded-[4px] flex overflow-hidden">
                     <div className="h-full bg-[#161616] border-r border-[#E8E7EF]/10 flex items-center justify-center flex-[2]"><span className="text-[12px] leading-[16px] font-bold text-[#9CA3AF]">APPROACH</span></div>
                     <div className="h-full bg-[#8B5CF6]/30 border-r border-[#8B5CF6]/50 flex items-center justify-center flex-[1] shadow-[inset_0_0_10px_rgba(139,92,246,0.3)]"><span className="text-[12px] leading-[16px] font-bold text-[#FFFFFF]">GRASP</span></div>
                     <div className="h-full bg-[#161616] border-r border-[#E8E7EF]/10 flex items-center justify-center flex-[3]"><span className="text-[12px] leading-[16px] font-bold text-[#9CA3AF]">LIFT & MOVE</span></div>
                   </div>
                 </div>

                 {/* Language Association View */}
                 <div className="col-span-12 bg-[#161616] rounded-[12px] border border-[#8B5CF6]/20 p-[16px] flex items-center gap-[16px]">
                   <FileCode2 className="w-[20px] h-[20px] text-[#8B5CF6] shrink-0" />
                   <div>
                     <span className="text-[12px] leading-[16px] font-bold text-[#9CA3AF] block mb-[4px]">LANGUAGE GROUNDING</span>
                     <p className="text-[16px] leading-[24px] font-normal text-[#E8E7EF]">"Carefully pick up the fragile component from the sorting bin and place it on the transfer belt."</p>
                   </div>
                 </div>
               </div>
            </div>
          </div>

        </div>
      </section>

      {/* 5. Embodied Perception Dataset */}
      <section className="py-[128px] relative bg-[#0A0A0A] border-b border-[#E8E7EF]/10 overflow-hidden">
        <div className="w-full max-w-[1200px] mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-[80px]">
            <h2 className="text-[54px] leading-[64px] font-bold text-[#FFFFFF] tracking-tight mb-[24px]">
              Embodied Perception Datasets for Spatial Understanding
            </h2>
            <p className="text-[16px] leading-[24px] text-[#9CA3AF] font-normal">
              Build perception-ready training data by aligning visual and spatial signals for embodied systems operating in real environments. Overcome indoor complexity, narrow-space navigation, and dynamic environments.
            </p>
          </div>

          {/* 2D to 3D Alignment Visual */}
          <div className="relative w-full h-[400px] md:h-[500px] rounded-[24px] overflow-hidden border border-[#E8E7EF]/10 bg-[#161616] mb-[48px] shadow-2xl flex flex-col md:flex-row">
            
            {/* 2D Side */}
            <div className="w-full md:w-1/2 h-full relative border-b md:border-b-0 md:border-r border-[#E8E7EF]/10 p-[24px] flex flex-col">
              <span className="text-[12px] leading-[16px] font-bold text-[#9CA3AF] mb-[16px] bg-[#0A0A0A]/50 w-max px-[12px] py-[4px] rounded-[4px] backdrop-blur-md z-10">2D VISUAL SCENE</span>
              <div className="absolute inset-0 z-0">
                <img src="https://images.unsplash.com/photo-1768752435475-2e55baeed00f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2dpc3RpY3MlMjB3YXJlaG91c2UlMjByb2JvdCUyMGRhcmt8ZW58MXx8fHwxNzc0NzEwOTQ0fDA&ixlib=rb-4.1.0&q=80&w=1080" alt="Warehouse 2D" className="w-full h-full object-cover opacity-40 mix-blend-screen" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#161616]"></div>
              </div>
              <div className="absolute top-[40%] right-[10%] w-[64px] h-[96px] border-2 border-[#8B5CF6] rounded-[4px] z-10"></div>
            </div>

            {/* Connecting Lines Desktop */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none hidden md:block z-20">
               <motion.path 
                 d="M 45% 45% L 55% 55%" 
                 stroke="#8B5CF6" 
                 strokeWidth="2" 
                 strokeDasharray="4 4"
                 fill="none"
                 initial={{ opacity: 0.2 }}
                 animate={{ opacity: 1 }}
                 transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
               />
               <circle cx="50%" cy="50%" r="20" fill="#161616" stroke="rgba(139,92,246,0.5)" strokeWidth="2" />
               <text x="50%" y="50%" fill="#8B5CF6" fontSize="12" fontFamily="Poppins" fontWeight="bold" textAnchor="middle" dominantBaseline="middle">1:1</text>
            </svg>

            {/* 3D Side */}
            <div className="w-full md:w-1/2 h-full relative p-[24px] flex flex-col items-end text-right">
              <span className="text-[12px] leading-[16px] font-bold text-[#D946EF] mb-[16px] bg-[#0A0A0A]/50 w-max px-[12px] py-[4px] rounded-[4px] backdrop-blur-md z-10 border border-[#D946EF]/30">3D SPATIAL SCENE</span>
              <div className="absolute inset-0 z-0">
                <img src="https://images.unsplash.com/photo-1710755138489-022101f89cd9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXNlciUyMHNjYW4lMjAzZCUyMGFic3RyYWN0JTIwZGFya3xlbnwxfHx8fDE3NzQ1MzcxMjl8MA&ixlib=rb-4.1.0&q=80&w=1080" alt="Warehouse 3D" className="w-full h-full object-cover opacity-50 mix-blend-screen" />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#161616]"></div>
              </div>
              <div className="absolute top-[50%] left-[10%] w-[80px] h-[80px] border border-[#D946EF] bg-[#D946EF]/20 [transform:rotateX(25deg)] z-10"></div>
            </div>

          </div>

          <div className="flex flex-wrap justify-center gap-[16px]">
             {["SLAM", "Obstacle Avoidance", "Path Planning", "Multi-Object Tracking"].map((algo, i) => (
               <div key={i} className="px-[24px] py-[12px] bg-[#161616] border border-[#E8E7EF]/10 rounded-full text-[16px] leading-[24px] font-bold text-[#E8E7EF] hover:text-[#FFFFFF] hover:border-[#8B5CF6]/50 transition-colors">
                 {algo}
               </div>
             ))}
          </div>

        </div>
      </section>

      {/* 6. Data Lake & Data Engineering */}
      <section className="py-[128px] relative bg-[#0A0A0A] border-b border-[#E8E7EF]/10">
        <div className="w-full max-w-[1200px] mx-auto">
          
          <div className="mb-[64px]">
            <h2 className="text-[54px] leading-[64px] font-bold text-[#FFFFFF] mb-[24px] tracking-tight">
              Data Lake & Data Engineering for Embodied AI
            </h2>
            <p className="text-[16px] leading-[24px] text-[#9CA3AF] font-normal max-w-3xl">
              Manage embodied AI data across collection, processing, storage, and governance with lifecycle-level control. Compatible with ROS1, ROS2, MCAP, and multimodal sensor inputs.
            </p>
          </div>

          {/* Architecture Diagram */}
          <div className="w-full bg-[#161616] border border-[#E8E7EF]/10 rounded-[24px] p-[32px] md:p-[64px] relative overflow-hidden">
             <div className="absolute right-0 top-0 opacity-10 pointer-events-none">
               <img src="https://images.unsplash.com/photo-1761078739233-629de9252840?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYXJjaGl0ZWN0dXJlJTIwc2VydmVyJTIwbm9kZXMlMjBhYnN0cmFjdCUyMGRhcmt8ZW58MXx8fHwxNzc0NzEwOTM4fDA&ixlib=rb-4.1.0&q=80&w=1080" alt="Servers" className="w-full h-full object-cover" />
             </div>

             <div className="grid grid-cols-1 md:grid-cols-5 gap-[24px] relative z-10">
                {/* Inputs */}
                <div className="col-span-1 flex flex-col gap-[16px]">
                  <span className="text-[12px] leading-[16px] font-bold text-[#9CA3AF] uppercase tracking-widest mb-[8px]">Ingest</span>
                  <div className="bg-[#161616] border border-[#E8E7EF]/5 p-[16px] rounded-[12px] text-center"><Database className="w-[20px] h-[20px] text-[#8B5CF6] mx-auto mb-[8px]" /><span className="text-[12px] leading-[16px] font-bold text-[#FFFFFF]">ROS Bag</span></div>
                  <div className="bg-[#161616] border border-[#E8E7EF]/5 p-[16px] rounded-[12px] text-center"><Database className="w-[20px] h-[20px] text-[#8B5CF6] mx-auto mb-[8px]" /><span className="text-[12px] leading-[16px] font-bold text-[#FFFFFF]">MCAP</span></div>
                  <div className="bg-[#161616] border border-[#E8E7EF]/5 p-[16px] rounded-[12px] text-center"><Video className="w-[20px] h-[20px] text-[#8B5CF6] mx-auto mb-[8px]" /><span className="text-[12px] leading-[16px] font-bold text-[#FFFFFF]">Video/Sensors</span></div>
                </div>

                {/* ETL Pipeline */}
                <div className="col-span-1 md:col-span-3 flex flex-col justify-center gap-[16px] relative">
                  <span className="text-[12px] leading-[16px] font-bold text-[#9CA3AF] uppercase tracking-widest mb-[8px] text-center">Data Engine</span>
                  <div className="w-full bg-[#0A0A0A] border border-[#8B5CF6]/30 rounded-[16px] p-[24px] relative group hover:border-[#8B5CF6] transition-colors shadow-[0_0_30px_rgba(139,92,246,0.05)]">
                     <div className="absolute inset-0 bg-[#8B5CF6]/5 rounded-[16px] pointer-events-none"></div>
                     <div className="flex flex-col md:flex-row items-center justify-between gap-[16px]">
                       <div className="flex flex-col items-center">
                         <div className="w-[40px] h-[40px] rounded-full bg-[#E8E7EF]/5 flex items-center justify-center mb-[8px]"><Workflow className="w-[16px] h-[16px] text-[#9CA3AF]" /></div>
                         <span className="text-[12px] leading-[16px] font-bold text-[#E8E7EF]">Clean & Parse</span>
                       </div>
                       <div className="h-[1px] w-[32px] bg-[#8B5CF6]/50 hidden md:block"></div>
                       <div className="flex flex-col items-center">
                         <div className="w-[40px] h-[40px] rounded-full bg-[#8B5CF6]/20 border border-[#8B5CF6]/50 flex items-center justify-center mb-[8px]"><Server className="w-[16px] h-[16px] text-[#8B5CF6]" /></div>
                         <span className="text-[12px] leading-[16px] font-bold text-[#FFFFFF]">Standardize</span>
                       </div>
                       <div className="h-[1px] w-[32px] bg-[#8B5CF6]/50 hidden md:block"></div>
                       <div className="flex flex-col items-center">
                         <div className="w-[40px] h-[40px] rounded-full bg-[#E8E7EF]/5 flex items-center justify-center mb-[8px]"><Network className="w-[16px] h-[16px] text-[#9CA3AF]" /></div>
                         <span className="text-[12px] leading-[16px] font-bold text-[#E8E7EF]">ETL Worflow</span>
                       </div>
                     </div>
                  </div>
                  
                  {/* Flow line */}
                  <div className="flex justify-center gap-[32px] mt-[8px]">
                    <span className="text-[12px] leading-[16px] font-bold text-[#9CA3AF] flex items-center gap-[4px]"><HardDrive className="w-[12px] h-[12px]" /> Tiered Storage</span>
                    <span className="text-[12px] leading-[16px] font-bold text-[#9CA3AF] flex items-center gap-[4px]"><Lock className="w-[12px] h-[12px]" /> Secure Governance</span>
                  </div>
                </div>

                {/* Outputs */}
                <div className="col-span-1 flex flex-col justify-center gap-[16px]">
                  <span className="text-[12px] leading-[16px] font-bold text-[#9CA3AF] uppercase tracking-widest mb-[8px]">Access</span>
                  <div className="bg-[#161616] border border-[#E8E7EF]/5 p-[16px] rounded-[12px] text-center"><Database className="w-[20px] h-[20px] text-[#9CA3AF] mx-auto mb-[8px]" /><span className="text-[12px] leading-[16px] font-bold text-[#FFFFFF]">Traceable Retrieval</span></div>
                  <div className="bg-[#161616] border border-[#E8E7EF]/5 p-[16px] rounded-[12px] text-center"><LayoutDashboard className="w-[20px] h-[20px] text-[#9CA3AF] mx-auto mb-[8px]" /><span className="text-[12px] leading-[16px] font-bold text-[#FFFFFF]">Dataset Release</span></div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 7. Embodied Model Training */}
      <section className="py-[128px] relative bg-[#0A0A0A] border-b border-[#E8E7EF]/10">
        <div className="w-full max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-[64px] lg:gap-[96px] items-center">
          
          <div className="lg:w-1/2 flex flex-col">
            <h2 className="text-[54px] leading-[64px] font-bold text-[#FFFFFF] mb-[24px] tracking-tight">
              Embodied Model Training and Deployment
            </h2>
            <p className="text-[24px] leading-[32px] text-[#FFFFFF] font-bold mb-[24px]">
              Support the full model lifecycle from training setup to optimization and scaled deployment.
            </p>
            <p className="text-[16px] leading-[24px] text-[#9CA3AF] font-normal mb-[40px]">
              Go beyond data preparation. Provide environment setups, parameter configuration, performance evaluation, stability optimization, and MaaS (Model-as-a-Service) rollout for fast real-world serving.
            </p>
            
            <div className="flex items-center gap-[8px] md:gap-[16px] flex-wrap text-[16px] leading-[24px] font-bold text-[#9CA3AF]">
              <span className="bg-[#E8E7EF]/5 px-[12px] py-[6px] rounded-[8px]">Configure</span> <ArrowRight className="w-[12px] h-[12px] text-[#8B5CF6]" />
              <span className="bg-[#E8E7EF]/5 px-[12px] py-[6px] rounded-[8px]">Train</span> <ArrowRight className="w-[12px] h-[12px] text-[#8B5CF6]" />
              <span className="bg-[#E8E7EF]/5 px-[12px] py-[6px] rounded-[8px]">Evaluate</span> <ArrowRight className="w-[12px] h-[12px] text-[#8B5CF6]" />
              <span className="bg-[#E8E7EF]/5 px-[12px] py-[6px] rounded-[8px]">Optimize</span> <ArrowRight className="w-[12px] h-[12px] text-[#8B5CF6]" />
              <span className="bg-[#8B5CF6]/20 text-[#8B5CF6] border border-[#8B5CF6]/30 px-[12px] py-[6px] rounded-[8px]">Deploy</span>
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            {/* Dashboard Abstract */}
            <div className="bg-[#161616] border border-[#E8E7EF]/10 rounded-[24px] p-[24px] shadow-2xl relative overflow-hidden h-[450px] flex flex-col gap-[16px]">
              <div className="absolute inset-0 pointer-events-none opacity-20">
                <img src="https://images.unsplash.com/photo-1720962158937-7ea890052166?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXNoYm9hcmQlMjBhbmFseXRpY3MlMjBpbnRlcmZhY2UlMjBkYXJrJTIwdGVjaHxlbnwxfHx8fDE3NzQ3MTA5NDh8MA&ixlib=rb-4.1.0&q=80&w=1080" alt="Dashboard" className="w-full h-full object-cover mix-blend-screen" />
              </div>
              
              <div className="flex justify-between items-center z-10 border-b border-[#E8E7EF]/10 pb-[16px]">
                <span className="text-[16px] leading-[24px] font-bold text-[#E8E7EF]">TRAINING_RUN_v3</span>
                <span className="text-[12px] leading-[16px] font-bold text-green-400 bg-green-900/30 px-[8px] py-[4px] rounded-[4px]">OPTIMIZING</span>
              </div>

              <div className="grid grid-cols-2 gap-[16px] z-10">
                {/* Curve Mock */}
                <div className="col-span-2 bg-[#0A0A0A]/60 border border-[#E8E7EF]/10 rounded-[12px] p-[16px] h-[128px] flex flex-col justify-between">
                  <span className="text-[12px] leading-[16px] font-bold text-[#9CA3AF] uppercase">Loss Curve</span>
                  <div className="relative w-full h-[64px]">
                    <svg className="w-full h-full" viewBox="0 0 100 40" preserveAspectRatio="none">
                      <motion.path 
                        d="M0,35 Q20,30 40,15 T70,10 T100,5" 
                        fill="none" 
                        stroke="#8B5CF6" 
                        strokeWidth="2" 
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, ease: "easeOut" }}
                      />
                    </svg>
                  </div>
                </div>

                <div className="bg-[#0A0A0A]/60 border border-[#E8E7EF]/10 rounded-[12px] p-[16px]">
                   <span className="text-[12px] leading-[16px] font-bold text-[#9CA3AF] uppercase block mb-[8px]">Parameters</span>
                   <div className="space-y-[8px]">
                     <div className="h-[6px] w-full bg-[#E8E7EF]/10 rounded-[4px]"><div className="h-full bg-[#8B5CF6] rounded-[4px] w-[80%]"></div></div>
                     <div className="h-[6px] w-full bg-[#E8E7EF]/10 rounded-[4px]"><div className="h-full bg-[#8B5CF6] rounded-[4px] w-[60%]"></div></div>
                   </div>
                </div>

                <div className="bg-[#8B5CF6]/20 border border-[#8B5CF6]/30 rounded-[12px] p-[16px] flex flex-col justify-center items-center text-center">
                  <Cpu className="w-[24px] h-[24px] text-[#8B5CF6] mb-[8px]" />
                  <span className="text-[12px] leading-[16px] font-bold text-[#FFFFFF]">MaaS Deployment Ready</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 8. AI DataOps */}
      <section className="py-[128px] relative bg-[#0A0A0A] border-b border-[#E8E7EF]/10">
        <div className="w-full max-w-[1200px] mx-auto flex flex-col gap-[64px]">
          
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-[54px] leading-[64px] font-bold text-[#FFFFFF] tracking-tight mb-[24px]">
              AI DataOps for Embodied Production at Scale
            </h2>
            <p className="text-[16px] leading-[24px] text-[#9CA3AF] font-normal">
              A production management system for planning, permissions, auditing, asset management, and reporting across massive embodied AI data programs.
            </p>
          </div>

          <div className="w-full max-w-5xl mx-auto bg-[#161616] border border-[#E8E7EF]/10 rounded-[24px] p-[24px] md:p-[40px] shadow-2xl relative">
            <div className="flex flex-wrap items-center gap-[16px] mb-[32px]">
              {["Project Setup", "Task Split", "Role Permissions", "Data Auditing", "Analytics"].map((tag, i) => (
                <div key={i} className="flex items-center gap-[8px] bg-[#161616] border border-[#E8E7EF]/5 px-[16px] py-[8px] rounded-full text-[16px] leading-[24px] font-bold text-[#E8E7EF]">
                  <div className="w-[6px] h-[6px] rounded-full bg-[#8B5CF6]"></div>
                  {tag}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px]">
              <div className="col-span-1 md:col-span-2 bg-[#0A0A0A] border border-[#E8E7EF]/5 rounded-[16px] p-[24px] relative overflow-hidden">
                <div className="flex items-center justify-between mb-[24px]">
                  <span className="text-[16px] leading-[24px] font-bold text-[#FFFFFF] flex items-center gap-[8px]"><ListChecks className="w-[16px] h-[16px] text-[#8B5CF6]"/> Task Board</span>
                  <span className="text-[12px] leading-[16px] font-bold text-[#9CA3AF]">84% COMPLETE</span>
                </div>
                <div className="space-y-[12px] relative z-10">
                  <div className="w-full bg-[#161616] border border-[#E8E7EF]/10 p-[12px] rounded-[8px] flex justify-between items-center">
                    <span className="text-[12px] leading-[16px] font-bold text-[#E8E7EF]">Batch_A_Manipulation</span>
                    <span className="text-[12px] leading-[16px] font-bold px-[8px] py-[2px] rounded-[4px] bg-green-500/20 text-green-400">DONE</span>
                  </div>
                  <div className="w-full bg-[#161616] border border-[#8B5CF6]/30 shadow-[0_0_15px_rgba(139,92,246,0.1)] p-[12px] rounded-[8px] flex justify-between items-center">
                    <span className="text-[12px] leading-[16px] font-bold text-[#FFFFFF]">Batch_B_Navigation</span>
                    <span className="text-[12px] leading-[16px] font-bold px-[8px] py-[2px] rounded-[4px] bg-[#8B5CF6]/20 text-[#8B5CF6] border border-[#8B5CF6]/30">QA_REVIEW</span>
                  </div>
                  <div className="w-full bg-[#161616] border border-[#E8E7EF]/5 p-[12px] rounded-[8px] flex justify-between items-center opacity-50">
                    <span className="text-[12px] leading-[16px] font-bold text-[#9CA3AF]">Batch_C_Force_Sync</span>
                    <span className="text-[12px] leading-[16px] font-bold px-[8px] py-[2px] rounded-[4px] bg-gray-800 text-[#9CA3AF]">QUEUED</span>
                  </div>
                </div>
              </div>

              <div className="col-span-1 flex flex-col gap-[24px]">
                <div className="bg-[#0A0A0A] border border-[#E8E7EF]/5 rounded-[16px] p-[24px] flex-1 flex flex-col justify-center">
                  <span className="text-[16px] leading-[24px] font-bold text-[#FFFFFF] flex items-center gap-[8px] mb-[8px]"><LineChart className="w-[16px] h-[16px] text-[#8B5CF6]"/> Throughput</span>
                  <span className="text-[24px] leading-[32px] font-bold text-[#FFFFFF] mb-[4px]">1,240 <span className="text-[16px] leading-[24px] font-normal text-[#9CA3AF]">h/day</span></span>
                  <div className="w-full h-[4px] bg-[#E8E7EF]/10 rounded-[2px] mt-[8px]"><div className="w-[75%] h-full bg-[#8B5CF6] rounded-[2px]"></div></div>
                </div>
                <div className="bg-[#0A0A0A] border border-[#E8E7EF]/5 rounded-[16px] p-[24px] flex-1 flex flex-col justify-center">
                  <span className="text-[16px] leading-[24px] font-bold text-[#FFFFFF] flex items-center gap-[8px] mb-[8px]"><ShieldCheck className="w-[16px] h-[16px] text-[#8B5CF6]"/> Audit Trail</span>
                  <span className="text-[12px] leading-[16px] font-normal text-[#9CA3AF]">100% Traceability on modifications.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Application Scenarios & Proof */}
      <section className="py-[128px] relative bg-[#0A0A0A] border-b border-[#E8E7EF]/10">
        <div className="w-full max-w-[1200px] mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-[64px] items-center">
            
            <div className="lg:col-span-5 flex flex-col">
              <h2 className="text-[54px] leading-[64px] font-bold text-[#FFFFFF] tracking-tight mb-[24px]">
                Proven Across Real Embodied AI Scenarios
              </h2>
              <p className="text-[16px] leading-[24px] text-[#9CA3AF] font-normal mb-[40px]">
                Deploying robust, physically consistent data pipelines into real-world factory automation, hospital care, home service, and smart mobility environments.
              </p>

              <div className="grid grid-cols-2 gap-[24px] mb-[32px]">
                <div>
                  <span className="text-[54px] leading-[64px] font-bold text-[#FFFFFF] block mb-[4px]">10K<span className="text-[#8B5CF6]">+</span></span>
                  <span className="text-[12px] leading-[16px] font-bold text-[#9CA3AF] uppercase">Hours Collected</span>
                </div>
                <div>
                  <span className="text-[54px] leading-[64px] font-bold text-[#FFFFFF] block mb-[4px]">40TB<span className="text-[#8B5CF6]">+</span></span>
                  <span className="text-[12px] leading-[16px] font-bold text-[#9CA3AF] uppercase">Multimodal Data</span>
                </div>
                <div>
                  <span className="text-[24px] leading-[32px] font-bold text-[#FFFFFF] block mb-[4px]">1.5K<span className="text-[#8B5CF6]">+</span></span>
                  <span className="text-[12px] leading-[16px] font-bold text-[#9CA3AF] uppercase">Multi-View Hours</span>
                </div>
                <div>
                  <span className="text-[24px] leading-[32px] font-bold text-[#FFFFFF] block mb-[4px]">96%</span>
                  <span className="text-[12px] leading-[16px] font-bold text-[#9CA3AF] uppercase">Video Frame Acc</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-[8px] text-[12px] leading-[16px] font-bold text-[#9CA3AF] mt-[16px]">
                <span className="bg-[#E8E7EF]/5 px-[8px] py-[4px] rounded-[4px]">Hospital</span>
                <span className="bg-[#E8E7EF]/5 px-[8px] py-[4px] rounded-[4px]">Home Service</span>
                <span className="bg-[#E8E7EF]/5 px-[8px] py-[4px] rounded-[4px]">Industrial</span>
                <span className="bg-[#E8E7EF]/5 px-[8px] py-[4px] rounded-[4px]">Mobility</span>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-2 gap-[16px]">
                <div className="h-[256px] rounded-[16px] bg-[#161616] overflow-hidden relative group">
                  <img src="https://images.unsplash.com/photo-1768752435475-2e55baeed00f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2dpc3RpY3MlMjB3YXJlaG91c2UlMjByb2JvdCUyMGRhcmt8ZW58MXx8fHwxNzc0NzEwOTQ0fDA&ixlib=rb-4.1.0&q=80&w=1080" className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" alt="Industrial Logistics" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <span className="absolute bottom-[16px] left-[16px] text-[16px] leading-[24px] font-bold text-[#FFFFFF]">Industrial Sorting</span>
                </div>
                <div className="h-[256px] rounded-[16px] bg-[#161616] overflow-hidden relative group">
                  <img src="https://images.unsplash.com/photo-1585842458220-1a0e1d5d6a19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwcm9ib3QlMjBmdXR1cmlzdGljJTIwZGFya3xlbnwxfHx8fDE3NzQ3MTA5NDl8MA&ixlib=rb-4.1.0&q=80&w=1080" className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" alt="Hospital Robot" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <span className="absolute bottom-[16px] left-[16px] text-[16px] leading-[24px] font-bold text-[#FFFFFF]">Hospital Service</span>
                </div>
                <div className="col-span-2 h-[192px] rounded-[16px] bg-[#161616] overflow-hidden relative group">
                  <img src="https://images.unsplash.com/photo-1697908835609-ee29e5d83f78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMG1vYmlsaXR5JTIwYXV0b25vbW91cyUyMGNhciUyMGRhcmt8ZW58MXx8fHwxNzc0NzEwOTQ0fDA&ixlib=rb-4.1.0&q=80&w=1080" className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700 object-bottom" alt="Smart Mobility" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <span className="absolute bottom-[16px] left-[16px] text-[16px] leading-[24px] font-bold text-[#FFFFFF]">Smart Mobility & Navigation</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 10. Closing CTA */}
      <section className="relative py-[128px] md:py-[192px] overflow-hidden bg-[#0A0A0A]">
        <div className="absolute inset-0 z-0 pointer-events-none">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(139,92,246,0.08)_0%,transparent_60%)] blur-[80px]"></div>
           {/* Subtle signal texture */}
           <div className="absolute inset-0 bg-[linear-gradient(rgba(232,231,239,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(232,231,239,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]"></div>
        </div>

        <div className="w-full max-w-[1200px] mx-auto text-center relative z-10 flex flex-col items-center">
          
          <Bot className="w-[48px] h-[48px] text-[#8B5CF6] mx-auto mb-[32px] opacity-80" />
          
          <h2 className="text-[54px] md:text-[64px] leading-[64px] md:leading-[72px] font-bold text-[#FFFFFF] mb-[24px] tracking-tight">
            Ready to Support Real-World Embodied AI Programs
          </h2>
          <p className="text-[24px] leading-[32px] font-bold text-[#9CA3AF] mb-[48px] max-w-3xl">
            Whether you’re building robot perception, imitation learning systems, teleoperation pipelines, or multimodal embodied intelligence, we help turn real-world interaction data into structured assets for training and deployment.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-[16px] w-full sm:w-auto mb-[64px]">
            <Link to="/contact" className="group w-full sm:w-auto flex items-center justify-center gap-[12px] px-[36px] py-[16px] relative rounded-[18px] shadow-[0px_20px_25px_0px_rgba(139,92,246,0.2),0px_8px_10px_0px_rgba(139,92,246,0.2)] hover:shadow-[0px_20px_25px_0px_rgba(139,92,246,0.4),0px_8px_10px_0px_rgba(139,92,246,0.4)] text-[18px] leading-[normal] font-bold text-white whitespace-nowrap transition-all" style={{ backgroundImage: "linear-gradient(90deg, rgb(139, 92, 246) 0%, rgb(145, 91, 246) 7.1429%, rgb(151, 90, 245) 14.286%, rgb(157, 90, 245) 21.429%, rgb(162, 89, 244) 28.571%, rgb(168, 87, 244) 35.714%, rgb(174, 86, 243) 42.857%, rgb(179, 85, 243) 50%, rgb(185, 83, 242) 57.143%, rgb(190, 81, 242) 64.286%, rgb(196, 80, 241) 71.429%, rgb(201, 78, 241) 78.571%, rgb(206, 75, 240) 85.714%, rgb(212, 73, 240) 92.857%, rgb(217, 70, 239) 100%)" }}>
              Contact us
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-[12px]">
            {[
              "Embodied Data Acquisition", 
              "Human-in-the-Loop Capture", 
              "Multimodal Annotation", 
              "2D-3D Alignment", 
              "Data Engineering", 
              "DataOps"
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
