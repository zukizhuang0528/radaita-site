import { Header } from "./Header";
import { Footer } from "./Footer";
import { Link } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { heroSection, heroContainer, heroLeftCol, heroRightPanel, heroImage, heroCTARow } from "../styles/pageStyles";
import { 
  ArrowRight, 
  MessageSquareQuote, 
  Database, 
  Settings2,
  FileText,
  Activity,
  CheckCircle2,
  Workflow,
  Search,
  BrainCircuit,
  Layers,
  Network,
  ShieldCheck,
  AlignLeft,
  Bot
} from "lucide-react";
import { useState } from "react";

export function LLMIndustry() {
  const [activeVertical, setActiveVertical] = useState(0);

  return (
    <div className="bg-[#0A0A0A] min-h-screen text-[#E8E7EF] selection:bg-[#8B5CF6]/30 font-['Poppins'] overflow-x-hidden">
      {/* 1. Hero Section */}
      <section id="hero-llm-industry" className={heroSection}>
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
          <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(139,92,246,0.15)_0%,transparent_70%)] blur-[120px]"></div>
          <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(217,70,239,0.1)_0%,transparent_70%)] blur-[100px]"></div>
        </div>

        <div className={`${heroContainer} relative z-10`}>
          
          <div id="hero-left-llm-industry" className={heroLeftCol}>
            
            <h1 className="text-[54px] md:text-[64px] leading-[64px] md:leading-[72px] font-bold tracking-tight text-[#FFFFFF] mb-[32px]">
              Semantic Data Infrastructure for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] via-[#D946EF] to-[#FFFFFF]">
                LLM Training & Alignment
              </span>
            </h1>
            
            <p className="text-[24px] leading-[32px] text-[#FFFFFF] font-bold mb-[16px] max-w-lg">
              A high-quality semantic data infrastructure spanning data generation, annotation, evaluation, and feedback loops.
            </p>
            
            <p className="text-[16px] leading-[24px] text-[#9CA3AF] font-normal mb-[48px] max-w-lg">
              Built for teams training and refining large language models, the platform supports semantic data construction across QA, dialogue, rewriting, evaluation, alignment, and vertical-domain tasks — with million-scale capacity and industry-grade accuracy.
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
              id="hero-img-llm-industry"
              src="https://images.unsplash.com/photo-1741795990583-d4115c018da2?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxMTE0lMjBkYXRhJTIwbm9kZXMlMjBhbGlnbm1lbnQlMjBuZXR3b3JrJTIwZGFyayUyMHB1cnBsZXxlbnwxfHx8fDE3NzQ3MTY0MTJ8MA&ixlib=rb-4.1.0&q=80&w=450&h=648"
              alt="LLM Data Alignment Network"
              className={heroImage}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/90 via-transparent to-transparent"></div>

            {/* Semantic Data UI Nodes */}
            <div className="absolute inset-0 pointer-events-none p-[32px]">
              
              {/* QA Box */}
              <div className="absolute top-[15%] left-[10%] bg-[#0A0A0A]/80 backdrop-blur-md border border-[#E8E7EF]/10 rounded-[16px] p-[20px] w-[260px] shadow-lg transform transition-transform group-hover:translate-y-[-5px]">
                <div className="flex gap-[8px] mb-[12px]">
                  <div className="w-[20px] h-[20px] rounded-full bg-[#8B5CF6]/20 flex items-center justify-center text-[10px] text-[#8B5CF6]">U</div>
                  <div className="flex-1 bg-[#161616] rounded-[8px] p-[8px] text-[10px] leading-[14px] text-[#E8E7EF] font-mono">Explain quantum superposition concisely.</div>
                </div>
                <div className="flex gap-[8px]">
                  <div className="w-[20px] h-[20px] rounded-full bg-[#D946EF]/20 flex items-center justify-center text-[10px] text-[#D946EF]">A</div>
                  <div className="flex-1 bg-[#8B5CF6]/10 border border-[#8B5CF6]/30 rounded-[8px] p-[8px] text-[10px] leading-[14px] text-[#E8E7EF] font-mono shadow-[inset_0_0_10px_rgba(139,92,246,0.1)]">It's a principle where a quantum system can exist in multiple states simultaneously until measured.</div>
                </div>
              </div>

              {/* Evaluation Labels */}
              <div className="absolute top-[40%] right-[15%] flex flex-col gap-[12px] items-end">
                <div className="bg-[#161616]/90 backdrop-blur border border-[#E8E7EF]/10 px-[16px] py-[8px] rounded-full flex items-center gap-[8px]">
                  <CheckCircle2 className="w-[12px] h-[12px] text-[#D946EF]" />
                  <span className="text-[12px] leading-[16px] font-bold text-[#E8E7EF]">Helpful</span>
                </div>
                <div className="bg-[#161616]/90 backdrop-blur border border-[#E8E7EF]/10 px-[16px] py-[8px] rounded-full flex items-center gap-[8px]">
                  <ShieldCheck className="w-[12px] h-[12px] text-[#8B5CF6]" />
                  <span className="text-[12px] leading-[16px] font-bold text-[#E8E7EF]">Harmless</span>
                </div>
                <div className="bg-[#161616]/90 backdrop-blur border border-[#D946EF]/50 shadow-[0_0_15px_rgba(217,70,239,0.2)] px-[16px] py-[8px] rounded-full flex items-center gap-[8px]">
                  <span className="text-[12px] leading-[16px] font-bold text-[#D946EF]">Rank: Model A &gt; Model B</span>
                </div>
              </div>

              {/* Connection Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <motion.path 
                  d="M 280 150 Q 400 150 400 250 T 600 300" 
                  fill="none" 
                  stroke="#8B5CF6" 
                  strokeWidth="2" 
                  strokeDasharray="6 6"
                  initial={{ strokeDashoffset: 100 }}
                  animate={{ strokeDashoffset: 0 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />
              </svg>

              {/* Dataset Node */}
              <div className="absolute bottom-[20%] left-[25%] bg-[#0A0A0A]/60 backdrop-blur border border-[#8B5CF6]/30 px-[16px] py-[12px] rounded-[12px] flex items-center gap-[12px]">
                <Database className="w-[20px] h-[20px] text-[#8B5CF6]" />
                <div>
                  <span className="text-[12px] leading-[16px] font-bold text-[#FFFFFF] block">RLHF Dataset</span>
                  <span className="text-[10px] leading-[14px] font-normal text-[#9CA3AF]">1.2M Preference Pairs</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 2. Core Semantic Data Service Overview */}
      <section className="py-[128px] relative bg-[#0A0A0A] border-b border-[#E8E7EF]/10">
        <div className="w-full max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-[64px] lg:gap-[96px] items-center">
          
          <div className="lg:w-1/2 flex flex-col">
            <h2 className="text-[54px] leading-[64px] font-bold text-[#FFFFFF] mb-[24px] tracking-tight">
              Built Around the Semantic Data Workflows LLM Teams Actually Need
            </h2>
            <p className="text-[24px] leading-[32px] text-[#FFFFFF] font-bold mb-[24px]">
              A semantic data infrastructure covering semantic understanding, content generation, model alignment, and vertical-domain data production.
            </p>
            <p className="text-[16px] leading-[24px] text-[#9CA3AF] font-normal mb-[32px]">
              Semantic consistency, multi-turn logic, evaluability, human-preference alignment, and cross-domain generalization are the hardest challenges in LLM training. We provide the end-to-end pipeline to solve them.
            </p>

            <div className="grid grid-cols-2 gap-[16px] mb-[48px]">
              <div className="bg-[#161616] border border-[#E8E7EF]/10 p-[16px] rounded-[12px]">
                <span className="text-[24px] leading-[32px] font-bold text-[#FFFFFF] block mb-[4px]">Millions</span>
                <span className="text-[12px] leading-[16px] font-bold text-[#9CA3AF] uppercase">General Semantic Data</span>
              </div>
              <div className="bg-[#161616] border border-[#E8E7EF]/10 p-[16px] rounded-[12px]">
                <span className="text-[24px] leading-[32px] font-bold text-[#8B5CF6] block mb-[4px]">≥98%</span>
                <span className="text-[12px] leading-[16px] font-bold text-[#9CA3AF] uppercase">General Accuracy</span>
              </div>
              <div className="bg-[#161616] border border-[#E8E7EF]/10 p-[16px] rounded-[12px]">
                <span className="text-[24px] leading-[32px] font-bold text-[#FFFFFF] block mb-[4px]">10+</span>
                <span className="text-[12px] leading-[16px] font-bold text-[#9CA3AF] uppercase">Task Types</span>
              </div>
              <div className="bg-[#161616] border border-[#E8E7EF]/10 p-[16px] rounded-[12px]">
                <span className="text-[24px] leading-[32px] font-bold text-[#D946EF] block mb-[4px]">≥95%</span>
                <span className="text-[12px] leading-[16px] font-bold text-[#9CA3AF] uppercase">Vertical-Task Accuracy</span>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="bg-[#161616] border border-[#E8E7EF]/10 rounded-[24px] p-[32px] md:p-[48px] relative overflow-hidden shadow-2xl">
               <img src="https://images.unsplash.com/photo-1664854953181-b12e6dda8b7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3JrZmxvdyUyMHN5c3RlbSUyMGFic3RyYWN0JTIwc2VtYW50aWMlMjBkYXRhJTIwZGFya3xlbnwxfHx8fDE3NzQ3MTY0MTd8MA&ixlib=rb-4.1.0&q=80&w=1080" className="absolute inset-0 w-full h-full object-cover opacity-10 mix-blend-screen" alt="Abstract Workflow" />
               <div className="absolute inset-0 bg-[#161616]/80"></div>
               
               <div className="relative z-10">
                 <span className="text-[12px] leading-[16px] font-bold text-[#9CA3AF] uppercase tracking-widest mb-[24px] block text-center">End-to-End Semantic Pipeline</span>
                 
                 <div className="flex flex-col gap-[12px]">
                   {[
                     { name: "Task Definition", active: false },
                     { name: "Schema Design", active: false },
                     { name: "Data Production & Generation", active: true },
                     { name: "Multi-Round QA", active: false },
                     { name: "Evaluation & Alignment", active: true },
                     { name: "Delivery", active: false }
                   ].map((step, i) => (
                     <div key={i} className="flex flex-col items-center">
                       <div className={`w-full max-w-[320px] py-[12px] px-[24px] rounded-[12px] border text-center font-bold text-[14px] leading-[20px] transition-all ${step.active ? 'bg-[#8B5CF6]/10 border-[#8B5CF6]/50 text-[#8B5CF6] shadow-[0_0_15px_rgba(139,92,246,0.15)]' : 'bg-[#0A0A0A] border-[#E8E7EF]/10 text-[#E8E7EF]'}`}>
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

      {/* 3. General Semantic Data Construction */}
      <section className="py-[128px] relative bg-[#0A0A0A] border-b border-[#E8E7EF]/10">
        <div className="w-full max-w-[1200px] mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-[80px]">
            <h2 className="text-[54px] leading-[64px] font-bold text-[#FFFFFF] tracking-tight mb-[24px]">
              General Semantic Data Construction
            </h2>
            <p className="text-[16px] leading-[24px] text-[#9CA3AF] font-normal">
              Construct broad-coverage semantic training data for general-purpose LLMs across QA, dialogue, rewriting, and response evaluation, with guaranteed multi-turn consistency and broad domain coverage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-[24px]">
             
             {/* QA Panel */}
             <div className="col-span-1 md:col-span-7 bg-[#161616] border border-[#E8E7EF]/10 rounded-[24px] p-[32px] flex flex-col relative overflow-hidden">
               <div className="absolute right-[-10%] top-[-10%] w-[200px] h-[200px] bg-[#8B5CF6]/5 rounded-full blur-[60px]"></div>
               <div className="flex items-center gap-[12px] mb-[24px] relative z-10">
                 <MessageSquareQuote className="w-[24px] h-[24px] text-[#8B5CF6]" />
                 <h3 className="text-[24px] leading-[32px] font-bold text-[#FFFFFF]">QA & Dialogue Construction</h3>
               </div>
               
               <div className="flex-1 flex flex-col gap-[16px] relative z-10">
                 <div className="bg-[#0A0A0A] border border-[#E8E7EF]/5 p-[16px] rounded-[16px]">
                   <span className="text-[12px] leading-[16px] font-bold text-[#9CA3AF] mb-[8px] block">TURN 1 : USER</span>
                   <p className="text-[14px] leading-[20px] text-[#E8E7EF]">Write a Python script to parse a CSV and calculate the average of the 'revenue' column.</p>
                 </div>
                 <div className="bg-[#8B5CF6]/5 border border-[#8B5CF6]/20 p-[16px] rounded-[16px] ml-[24px]">
                   <div className="flex justify-between items-start mb-[8px]">
                     <span className="text-[12px] leading-[16px] font-bold text-[#8B5CF6] block">TURN 2 : ASSISTANT</span>
                     <span className="bg-[#D946EF]/20 text-[#D946EF] px-[6px] py-[2px] rounded text-[10px] font-bold border border-[#D946EF]/30">Valid Code</span>
                   </div>
                   <div className="bg-[#0A0A0A] p-[12px] rounded-[8px] font-mono text-[12px] text-[#9CA3AF]">
                     import pandas as pd<br/>
                     df = pd.read_csv('data.csv')<br/>
                     avg_rev = df['revenue'].mean()<br/>
                     print(f"Average: {'{'}avg_rev{'}'}")
                   </div>
                 </div>
               </div>
             </div>

             {/* Rewriting Panel */}
             <div className="col-span-1 md:col-span-5 bg-[#161616] border border-[#E8E7EF]/10 rounded-[24px] p-[32px] flex flex-col">
               <div className="flex items-center gap-[12px] mb-[24px]">
                 <AlignLeft className="w-[24px] h-[24px] text-[#D946EF]" />
                 <h3 className="text-[24px] leading-[32px] font-bold text-[#FFFFFF]">Rewriting & Expansion</h3>
               </div>
               
               <div className="bg-[#0A0A0A] border border-[#E8E7EF]/10 p-[16px] rounded-[16px] mb-[16px] relative opacity-60">
                 <span className="absolute top-[16px] right-[16px] text-[10px] font-bold text-[#9CA3AF] bg-[#E8E7EF]/10 px-[6px] py-[2px] rounded">ORIGINAL</span>
                 <p className="text-[14px] leading-[20px] text-[#9CA3AF] pr-[48px]">The company made money last year but spent a lot on new tools.</p>
               </div>

               <div className="flex justify-center mb-[16px]"><ArrowRight className="w-[16px] h-[16px] text-[#D946EF] rotate-90 md:rotate-0 md:hidden" /><ArrowRight className="w-[16px] h-[16px] text-[#D946EF] hidden md:block rotate-90" /></div>

               <div className="bg-[#D946EF]/5 border border-[#D946EF]/30 p-[16px] rounded-[16px] relative shadow-[0_0_15px_rgba(217,70,239,0.1)]">
                 <span className="absolute top-[16px] right-[16px] text-[10px] font-bold text-[#D946EF] bg-[#D946EF]/20 px-[6px] py-[2px] rounded">REWRITTEN (Formal)</span>
                 <p className="text-[14px] leading-[20px] text-[#E8E7EF] pr-[64px]">Despite generating substantial revenue in the previous fiscal year, the corporation incurred significant capital expenditures on infrastructural upgrades.</p>
               </div>
             </div>

             {/* Workflow Ribbon */}
             <div className="col-span-1 md:col-span-12 bg-[#161616] border border-[#E8E7EF]/10 rounded-[16px] p-[24px] flex flex-wrap items-center justify-center gap-[16px] text-[12px] leading-[16px] font-bold text-[#9CA3AF]">
                <span className="px-[16px] py-[8px] bg-[#0A0A0A] rounded-[8px]">QA</span>
                <span className="px-[16px] py-[8px] bg-[#0A0A0A] rounded-[8px]">Dialogue</span>
                <span className="px-[16px] py-[8px] bg-[#0A0A0A] rounded-[8px]">Rewrite</span>
                <span className="px-[16px] py-[8px] bg-[#0A0A0A] rounded-[8px]">Log Eval</span>
                <span className="px-[16px] py-[8px] bg-[#8B5CF6]/20 border border-[#8B5CF6]/50 text-[#8B5CF6] rounded-[8px]">Sensitivity Analysis</span>
             </div>
          </div>

        </div>
      </section>

      {/* 4. Model Evaluation and Alignment */}
      <section className="py-[128px] relative bg-[#0A0A0A] border-b border-[#E8E7EF]/10">
        <div className="w-full max-w-[1200px] mx-auto">
          
          <div className="mb-[64px] max-w-3xl">
            <h2 className="text-[54px] leading-[64px] font-bold text-[#FFFFFF] mb-[24px] tracking-tight">
              Evaluation & Alignment for Model Improvement
            </h2>
            <p className="text-[16px] leading-[24px] text-[#9CA3AF] font-normal">
              Support model evaluation, feedback analysis, and human-preference alignment to improve response quality, safety, and consistency. Built for RLHF, SFT, and continuous benchmark testing.
            </p>
          </div>

          <div className="w-full bg-[#161616] border border-[#E8E7EF]/10 rounded-[24px] p-[32px] md:p-[48px] shadow-2xl relative">
             
             {/* Evaluation Control Surface */}
             <div className="flex flex-col gap-[32px]">
               
               <div className="flex flex-col md:flex-row items-center justify-between gap-[24px] pb-[32px] border-b border-[#E8E7EF]/10">
                 <div className="flex-1 w-full bg-[#0A0A0A] border border-[#E8E7EF]/10 rounded-[16px] p-[24px]">
                   <span className="text-[12px] leading-[16px] font-bold text-[#9CA3AF] mb-[12px] block">PROMPT / CONTEXT</span>
                   <p className="text-[16px] leading-[24px] font-normal text-[#FFFFFF]">How do I securely store user passwords in a Node.js backend?</p>
                 </div>
                 
                 <div className="flex gap-[16px]">
                   <div className="flex flex-col items-center gap-[8px]">
                     <div className="w-[48px] h-[48px] rounded-full bg-[#161616] border border-[#E8E7EF]/20 flex items-center justify-center font-bold text-[#E8E7EF]">A</div>
                     <span className="text-[10px] font-bold text-[#9CA3AF]">Model Alpha</span>
                   </div>
                   <div className="w-[2px] h-[48px] bg-[#E8E7EF]/10"></div>
                   <div className="flex flex-col items-center gap-[8px]">
                     <div className="w-[48px] h-[48px] rounded-full bg-[#8B5CF6]/20 border border-[#8B5CF6]/50 flex items-center justify-center font-bold text-[#8B5CF6] shadow-[0_0_15px_rgba(139,92,246,0.3)]">B</div>
                     <span className="text-[10px] font-bold text-[#8B5CF6]">Model Beta</span>
                   </div>
                 </div>
               </div>

               {/* Multi-dimensional Scoring Columns */}
               <div className="grid grid-cols-2 md:grid-cols-4 gap-[16px]">
                 {[
                   { label: "Accuracy", scoreA: "3/5", scoreB: "5/5", win: "B" },
                   { label: "Completeness", scoreA: "4/5", scoreB: "4/5", win: "Tie" },
                   { label: "Safety", scoreA: "5/5", scoreB: "5/5", win: "Tie" },
                   { label: "Readability", scoreA: "2/5", scoreB: "4/5", win: "B" }
                 ].map((dim, i) => (
                   <div key={i} className="bg-[#0A0A0A] border border-[#E8E7EF]/5 p-[16px] rounded-[12px] flex flex-col">
                     <span className="text-[12px] leading-[16px] font-bold text-[#9CA3AF] mb-[16px] uppercase tracking-wider">{dim.label}</span>
                     <div className="flex justify-between items-center text-[14px] font-bold mb-[8px]">
                       <span className="text-[#E8E7EF]">{dim.scoreA}</span>
                       <span className="text-[10px] text-[#E8E7EF]/30">vs</span>
                       <span className={dim.win === 'B' ? "text-[#8B5CF6]" : "text-[#E8E7EF]"}>{dim.scoreB}</span>
                     </div>
                   </div>
                 ))}
               </div>

               {/* Preference Ranking */}
               <div className="bg-[#8B5CF6]/5 border border-[#8B5CF6]/20 rounded-[16px] p-[24px] flex flex-col md:flex-row items-center justify-between gap-[24px]">
                 <div>
                   <h4 className="text-[16px] leading-[24px] font-bold text-[#FFFFFF] mb-[4px]">Overall Human Preference</h4>
                   <p className="text-[12px] leading-[16px] font-normal text-[#9CA3AF]">Candidate B provides a safer implementation using bcrypt and detailed salt explanations.</p>
                 </div>
                 <div className="bg-[#8B5CF6] text-[#FFFFFF] px-[24px] py-[12px] rounded-[8px] font-bold text-[14px] shadow-[0_0_20px_rgba(139,92,246,0.3)]">
                   Rank: B &gt; A
                 </div>
               </div>

             </div>
          </div>

        </div>
      </section>

      {/* 5. Content Generation and AIGC Data */}
      <section className="py-[128px] relative bg-[#0A0A0A] border-b border-[#E8E7EF]/10">
        <div className="w-full max-w-[1200px] mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-[80px]">
            <h2 className="text-[54px] leading-[64px] font-bold text-[#FFFFFF] tracking-tight mb-[24px]">
              Content Generation & AIGC Training Data
            </h2>
            <p className="text-[16px] leading-[24px] text-[#9CA3AF] font-normal">
              Build structured training data for text generation, rewriting, summarization, and creative content tasks. Balancing logical rigor, style consistency, and controllable creativity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px]">
            {/* Multi-panel editorial layout */}
            
            <div className="bg-[#161616] border border-[#E8E7EF]/10 rounded-[24px] p-[32px] flex flex-col relative overflow-hidden group">
               <img src="https://images.unsplash.com/photo-1762337681092-ba832887fb30?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGNvbnRlbnQlMjBnZW5lcmF0aW9uJTIwbmV0d29yayUyMHRleHQlMjBkYXJrfGVufDF8fHx8MTc3NDcxNjQxMnww&ixlib=rb-4.1.0&q=80&w=1080" className="absolute inset-0 w-full h-full object-cover opacity-10 group-hover:opacity-20 transition-opacity" alt="Creative Gen" />
               <div className="absolute inset-0 bg-gradient-to-t from-[#161616] to-transparent"></div>
               
               <div className="relative z-10 flex flex-col h-full">
                 <span className="text-[12px] leading-[16px] font-bold text-[#8B5CF6] mb-[8px] bg-[#8B5CF6]/10 w-max px-[8px] py-[4px] rounded">CREATIVE</span>
                 <h3 className="text-[24px] leading-[32px] font-bold text-[#FFFFFF] mb-[24px]">Narrative & Script Gen</h3>
                 <div className="mt-auto bg-[#0A0A0A]/80 backdrop-blur border border-[#E8E7EF]/5 p-[16px] rounded-[12px] text-[12px] leading-[20px] text-[#E8E7EF]">
                   <span className="text-[#9CA3AF]">Prompt: Write a sci-fi opening...</span><br/><br/>
                   The neon hum of Neo-Seoul filtered through the rain-streaked glass. Kael adjusted his neural link...
                 </div>
               </div>
            </div>

            <div className="bg-[#161616] border border-[#E8E7EF]/10 rounded-[24px] p-[32px] flex flex-col relative overflow-hidden group">
               <div className="relative z-10 flex flex-col h-full">
                 <span className="text-[12px] leading-[16px] font-bold text-[#D946EF] mb-[8px] bg-[#D946EF]/10 w-max px-[8px] py-[4px] rounded">REASONING</span>
                 <h3 className="text-[24px] leading-[32px] font-bold text-[#FFFFFF] mb-[24px]">Educational Explanations</h3>
                 <div className="mt-auto bg-[#0A0A0A]/80 backdrop-blur border border-[#E8E7EF]/5 p-[16px] rounded-[12px] text-[12px] leading-[20px] text-[#E8E7EF]">
                   <span className="text-[#9CA3AF]">Step 1: Isolate the variable...</span><br/>
                   To solve 2x + 4 = 10, we first subtract 4 from both sides, yielding 2x = 6. Dividing by 2 gives x = 3.
                 </div>
               </div>
            </div>

            <div className="bg-[#161616] border border-[#E8E7EF]/10 rounded-[24px] p-[32px] flex flex-col relative overflow-hidden group">
               <div className="relative z-10 flex flex-col h-full">
                 <span className="text-[12px] leading-[16px] font-bold text-[#D946EF] mb-[8px] bg-[#D946EF]/10 w-max px-[8px] py-[4px] rounded">STRUCTURAL</span>
                 <h3 className="text-[24px] leading-[32px] font-bold text-[#FFFFFF] mb-[24px]">Summarization</h3>
                 <div className="mt-auto bg-[#0A0A0A]/80 backdrop-blur border border-[#E8E7EF]/5 p-[16px] rounded-[12px] text-[12px] leading-[20px] text-[#E8E7EF]">
                   <div className="border-l-2 border-[#D946EF] pl-[12px] mb-[8px] text-[#9CA3AF] line-clamp-2">Long form meeting transcript covering Q3 financials, product roadmap, and hiring freezes...</div>
                   <span className="font-bold text-[#FFFFFF]">Summary:</span> Q3 revenue up 15%. Product V2 launching in Nov. Hiring frozen until Q1.
                 </div>
               </div>
            </div>

          </div>

          <div className="mt-[48px] flex justify-center items-center gap-[32px] text-[12px] leading-[16px] font-bold text-[#9CA3AF]">
            <div className="flex items-center gap-[8px]">
              <span>Accuracy</span>
              <div className="w-[64px] h-[4px] bg-gradient-to-r from-[#E8E7EF]/20 to-[#8B5CF6] rounded"></div>
              <span className="text-[#8B5CF6]">Creativity</span>
            </div>
            <div className="w-px h-[24px] bg-[#E8E7EF]/20"></div>
            <div className="flex items-center gap-[8px]">
              <span>Consistency</span>
              <div className="w-[64px] h-[4px] bg-gradient-to-r from-[#E8E7EF]/20 to-[#D946EF] rounded"></div>
              <span className="text-[#D946EF]">Diversity</span>
            </div>
          </div>

        </div>
      </section>

      {/* 6. Vertical Semantic Data Solutions */}
      <section className="py-[128px] relative bg-[#0A0A0A] border-b border-[#E8E7EF]/10">
        <div className="w-full max-w-[1200px] mx-auto">
          
          <div className="mb-[64px] max-w-3xl">
            <h2 className="text-[54px] leading-[64px] font-bold text-[#FFFFFF] mb-[24px] tracking-tight">
              Vertical Semantic Data Solutions
            </h2>
            <p className="text-[16px] leading-[24px] text-[#9CA3AF] font-normal">
              Build domain-specific semantic datasets for industry-focused LLM systems, balancing factuality, structure, creativity, and task-specific logic.
            </p>
          </div>

          {/* 3-part asymmetric layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-[24px] h-auto lg:h-[440px]">
            
            {/* Education (Large) */}
            <div className="lg:col-span-7 bg-[#161616] rounded-[24px] border border-[#E8E7EF]/10 overflow-hidden relative p-[32px] flex flex-col group">
              <img src="https://images.unsplash.com/photo-1746468659017-6f1ec22bb1f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjBtYXRoJTIwZ3JhcGglMjBsb2dpYyUyMGRhcmslMjBwdXJwbGV8ZW58MXx8fHwxNzc0NzE2NDEyfDA&ixlib=rb-4.1.0&q=80&w=1080" alt="Education Logic" className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-screen transition-transform duration-1000 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#161616] via-[#161616]/80 to-transparent"></div>
              
              <div className="relative z-10 flex flex-col h-full justify-start">
                <h3 className="text-[32px] leading-[40px] font-bold text-[#FFFFFF] mb-[16px]">Education & Reasoning</h3>
                <p className="text-[16px] leading-[24px] font-normal text-[#9CA3AF] mb-[24px] max-w-md">Math reasoning, explanation generation, and essay rewriting requiring high logical rigor and explainability.</p>
                
                <div className="bg-[#0A0A0A]/80 backdrop-blur border border-[#8B5CF6]/30 rounded-[16px] p-[20px] max-w-md shadow-lg mb-[20px]">
                  <div className="flex items-center gap-[12px] mb-[12px]">
                    <Network className="w-[16px] h-[16px] text-[#8B5CF6]" />
                    <span className="text-[12px] leading-[16px] font-bold text-[#E8E7EF]">Logic Flow Annotation</span>
                  </div>
                  <div className="w-full h-[2px] bg-[#E8E7EF]/10 rounded mb-[8px]"><div className="w-[100%] h-full bg-[#8B5CF6] rounded"></div></div>
                  <span className="text-[10px] text-[#9CA3AF]">≥98% Accuracy Achieved</span>
                </div>

                <div className="flex gap-[24px] text-[12px] leading-[16px] font-bold mt-auto">
                  <div><span className="text-[#FFFFFF] block text-[16px]">100K+</span><span className="text-[#9CA3AF]">Samples</span></div>
                  <div><span className="text-[#8B5CF6] block text-[16px]">High Logic</span><span className="text-[#9CA3AF]">Requirement</span></div>
                </div>
              </div>
            </div>

            {/* Right Column Stack */}
            <div className="lg:col-span-5 flex flex-col gap-[24px]">
              
              {/* Gaming */}
              <div className="flex-1 bg-[#161616] rounded-[24px] border border-[#E8E7EF]/10 overflow-hidden relative p-[24px] group">
                <img src="https://images.unsplash.com/photo-1653891024072-4f730ee58f49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBuZXR3b3JrJTIwbmFycmF0aXZlJTIwZGFyayUyMHB1cnBsZXxlbnwxfHx8fDE3NzQ3MTY0MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080" alt="Gaming Narrative" className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-screen transition-transform duration-1000 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#161616] to-[#161616]/60"></div>
                
                <div className="relative z-10 flex flex-col h-full">
                  <h3 className="text-[24px] leading-[32px] font-bold text-[#FFFFFF] mb-[8px]">Gaming & Creative</h3>
                  <p className="text-[14px] leading-[20px] font-normal text-[#9CA3AF] mb-[16px]">Script generation, role behavior, and story branching annotation.</p>
                  
                  <div className="flex gap-[24px] text-[12px] leading-[16px] font-bold mt-auto">
                    <div><span className="text-[#FFFFFF] block text-[16px]">Hundreds of K</span><span className="text-[#9CA3AF]">Samples</span></div>
                    <div><span className="text-[#D946EF] block text-[16px]">Plot Consistency</span><span className="text-[#9CA3AF]">Key Focus</span></div>
                  </div>
                </div>
              </div>

              {/* Gov */}
              <div className="flex-1 bg-[#161616] rounded-[24px] border border-[#E8E7EF]/10 overflow-hidden relative p-[24px] group">
                <img src="https://images.unsplash.com/photo-1648565496992-d1216d628508?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb3Zlcm5tZW50JTIwc3RydWN0dXJlZCUyMGRvY3VtZW50JTIwYWJzdHJhY3QlMjBkYXJrfGVufDF8fHx8MTc3NDcxNjQxMnww&ixlib=rb-4.1.0&q=80&w=1080" alt="Gov Documents" className="absolute inset-0 w-full h-full object-cover opacity-10 mix-blend-screen transition-transform duration-1000 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#161616] to-[#161616]/60"></div>
                
                <div className="relative z-10 flex flex-col h-full">
                  <h3 className="text-[24px] leading-[32px] font-bold text-[#FFFFFF] mb-[8px]">Gov & Enterprise</h3>
                  <p className="text-[14px] leading-[20px] font-normal text-[#9CA3AF] mb-[16px]">Document structuring, QA extraction, and policy consistency.</p>
                  
                  <div className="flex gap-[24px] text-[12px] leading-[16px] font-bold mt-auto">
                    <div><span className="text-[#FFFFFF] block text-[16px]">10K+</span><span className="text-[#9CA3AF]">Samples</span></div>
                    <div><span className="text-[#E8E7EF] block text-[16px]">Factuality</span><span className="text-[#9CA3AF]">Zero Tolerance</span></div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 7. Scale, Quality Control, and Alignment Readiness */}
      <section className="py-[128px] relative bg-[#0A0A0A] border-b border-[#E8E7EF]/10">
        <div className="w-full max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-[64px] lg:gap-[96px] items-center">
          
          <div className="lg:w-1/2 flex flex-col">
            <h2 className="text-[54px] leading-[64px] font-bold text-[#FFFFFF] mb-[24px] tracking-tight">
              Scale, Quality Control, & Alignment Readiness
            </h2>
            <p className="text-[16px] leading-[24px] text-[#9CA3AF] font-normal mb-[48px]">
              A production system designed for million-scale delivery, standardized evaluation, multi-round QA, and alignment-ready semantic datasets that plug directly into RLHF and SFT pipelines.
            </p>

            <div className="space-y-[24px]">
              {[
                "Million-scale delivery capacity",
                "Unified production across multiple semantic task types",
                "≥98% general-task accuracy via multi-round QA",
                "Human preference modeling and RLHF/SFT readiness"
              ].map((feature, i) => (
                <div key={i} className="flex items-start gap-[16px]">
                  <CheckCircle2 className="w-[24px] h-[24px] text-[#8B5CF6] shrink-0" />
                  <span className="text-[16px] leading-[24px] font-bold text-[#FFFFFF]">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 w-full relative h-[500px] bg-[#161616] border border-[#E8E7EF]/10 rounded-[24px] p-[40px] shadow-2xl overflow-hidden flex flex-col justify-center items-center">
             
             <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>

             {/* Quality Control Stack */}
             <div className="w-full max-w-[400px] flex flex-col gap-[8px] relative z-10">
                <div className="bg-[#0A0A0A] border border-[#E8E7EF]/10 p-[16px] rounded-[12px] text-center w-full">
                  <span className="text-[14px] leading-[20px] font-bold text-[#9CA3AF]">Data Production</span>
                </div>
                
                <div className="flex justify-center"><ArrowRight className="w-[16px] h-[16px] text-[#E8E7EF]/20 rotate-90" /></div>
                
                <div className="bg-[#0A0A0A] border border-[#E8E7EF]/10 p-[16px] rounded-[12px] text-center w-[90%] mx-auto">
                  <span className="text-[14px] leading-[20px] font-bold text-[#9CA3AF]">QA Review Layer 1</span>
                </div>

                <div className="flex justify-center"><ArrowRight className="w-[16px] h-[16px] text-[#E8E7EF]/20 rotate-90" /></div>

                <div className="bg-[#0A0A0A] border border-[#E8E7EF]/10 p-[16px] rounded-[12px] text-center w-[80%] mx-auto">
                  <span className="text-[14px] leading-[20px] font-bold text-[#9CA3AF]">Expert Review Layer 2</span>
                </div>

                <div className="flex justify-center"><ArrowRight className="w-[16px] h-[16px] text-[#E8E7EF]/20 rotate-90" /></div>

                <div className="bg-[#8B5CF6]/10 border border-[#8B5CF6]/30 p-[16px] rounded-[12px] text-center w-[70%] mx-auto shadow-[0_0_20px_rgba(139,92,246,0.15)]">
                  <span className="text-[14px] leading-[20px] font-bold text-[#8B5CF6]">Standardized Evaluation</span>
                </div>

                <div className="flex justify-center"><ArrowRight className="w-[16px] h-[16px] text-[#8B5CF6] rotate-90" /></div>

                <div className="bg-[#D946EF]/20 border border-[#D946EF]/50 p-[16px] rounded-[12px] text-center w-[60%] mx-auto shadow-[0_0_30px_rgba(217,70,239,0.2)]">
                  <span className="text-[14px] leading-[20px] font-bold text-[#FFFFFF]">Alignment Ready</span>
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
          
          <Network className="w-[48px] h-[48px] text-[#8B5CF6] mx-auto mb-[32px] opacity-80" />
          
          <h2 className="text-[54px] md:text-[64px] leading-[64px] md:leading-[72px] font-bold text-[#FFFFFF] mb-[24px] tracking-tight">
            Ready to Support Large-Scale LLM Data & Alignment Programs
          </h2>
          <p className="text-[24px] leading-[32px] font-bold text-[#9CA3AF] mb-[48px] max-w-3xl">
            Whether you’re building general semantic datasets, alignment workflows, AIGC training data, or domain-specific LLM corpora, we help turn complex language tasks into structured assets for training, evaluation, and optimization.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-[16px] w-full sm:w-auto mb-[64px]">
            <Link to="/contact" className="group w-full sm:w-auto flex items-center justify-center gap-[12px] px-[36px] py-[16px] relative rounded-[18px] shadow-[0px_20px_25px_0px_rgba(139,92,246,0.2),0px_8px_10px_0px_rgba(139,92,246,0.2)] hover:shadow-[0px_20px_25px_0px_rgba(139,92,246,0.4),0px_8px_10px_0px_rgba(139,92,246,0.4)] text-[18px] leading-[normal] font-bold text-white whitespace-nowrap transition-all" style={{ backgroundImage: "linear-gradient(90deg, rgb(139, 92, 246) 0%, rgb(145, 91, 246) 7.1429%, rgb(151, 90, 245) 14.286%, rgb(157, 90, 245) 21.429%, rgb(162, 89, 244) 28.571%, rgb(168, 87, 244) 35.714%, rgb(174, 86, 243) 42.857%, rgb(179, 85, 243) 50%, rgb(185, 83, 242) 57.143%, rgb(190, 81, 242) 64.286%, rgb(196, 80, 241) 71.429%, rgb(201, 78, 241) 78.571%, rgb(206, 75, 240) 85.714%, rgb(212, 73, 240) 92.857%, rgb(217, 70, 239) 100%)" }}>
              Contact us
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-[12px]">
            {[
              "QA", 
              "Dialogue", 
              "Rewrite", 
              "Evaluation", 
              "Alignment", 
              "RLHF",
              "SFT",
              "Vertical Data"
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
