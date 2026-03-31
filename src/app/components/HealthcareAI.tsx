import { Header } from "./Header";
import { Footer } from "./Footer";
import { Link } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { heroSection, heroContainer, heroLeftCol, heroRightPanel, heroImage, heroCTARow } from "../styles/pageStyles";
import {
  ArrowRight,
  Database,
  ShieldCheck,
  Layers,
  Microscope,
  ScanLine,
  FileText,
  MessageSquareQuote,
  BrainCircuit,
  Activity,
  Lock,
  Workflow,
  Network,
  GitMerge,
  Search,
  CheckCircle2,
  Stethoscope,
  Bot,
  LayoutDashboard
} from "lucide-react";
import { useState } from "react";

export function HealthcareAI() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="bg-[#0A0A0A] min-h-screen text-[#E8E7EF] selection:bg-[#8B5CF6]/30 font-['Poppins'] overflow-x-hidden">
      {/* 1. Hero Section */}
      <section id="hero-healthcare-ai" className={heroSection}>
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
          <div className="absolute top-[10%] right-[-10%] w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(139,92,246,0.15)_0%,transparent_70%)] blur-[120px]"></div>
          <div className="absolute top-[40%] left-[-5%] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(217,70,239,0.1)_0%,transparent_70%)] blur-[100px]"></div>
        </div>

        <div className={`${heroContainer} relative z-10`}>
          <div id="hero-left-healthcare-ai" className={heroLeftCol}>
            
            <h1 className="text-[54px] md:text-[64px] leading-[64px] md:leading-[72px] font-bold tracking-tight text-[#FFFFFF] mb-[32px]">
              AI-Ready Data Infrastructure for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] via-[#D946EF] to-[#FFFFFF]">
                Clinically Complex Systems
              </span>
            </h1>
            
            <p className="text-[24px] leading-[32px] text-[#FFFFFF] font-bold mb-[16px] max-w-lg">
              A full-stack medical AI data production platform spanning ingestion, governance, annotation, knowledge structuring, and large-model training.
            </p>

            <p className="text-[16px] leading-[24px] text-[#9CA3AF] font-normal mb-[48px] max-w-lg">
              Built for healthcare systems that depend on precision, privacy, and clinical context, the platform supports everything from structured data intake and expert-guided annotation to retrieval, reasoning, and model iteration.
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
              id="hero-img-healthcare-ai"
              src="https://images.unsplash.com/photo-1669023414162-5bb06bbff0ec?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwZGF0YSUyMHBsYXRmb3JtJTIwZGFyayUyMFVJJTIwcHVycGxlfGVufDF8fHx8MTc3NDcxNTEyM3ww&ixlib=rb-4.1.0&q=80&w=450&h=648"
              alt="Healthcare Data Platform"
              className={heroImage}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/90 via-transparent to-transparent"></div>
            
            {/* Layered Clinical Data System Visual */}
            <div className="absolute inset-0 pointer-events-none p-[32px] flex flex-col justify-between">
               
               <div className="self-end flex gap-[16px]">
                  <div className="w-[120px] h-[120px] rounded-[16px] border border-[#8B5CF6]/30 bg-[#161616]/60 backdrop-blur-md overflow-hidden relative shadow-[0_0_20px_rgba(139,92,246,0.2)]">
                     <img src="https://images.unsplash.com/photo-1600673645627-1c47394132ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwaW1hZ2luZyUyMENUJTIwc2NhbiUyMGRhcmslMjBwdXJwbGV8ZW58MXx8fHwxNzc0NzE1MTIzfDA&ixlib=rb-4.1.0&q=80&w=1080" className="w-full h-full object-cover opacity-80" alt="Scan" />
                     <div className="absolute top-[8px] right-[8px] bg-[#0A0A0A]/80 px-[6px] py-[2px] rounded text-[12px] leading-[16px] font-bold text-[#8B5CF6]">CT_DICOM</div>
                     <div className="absolute inset-0 border border-[#8B5CF6]/50 rounded-[16px]"></div>
                  </div>
               </div>

               <div className="flex flex-col gap-[12px] max-w-[250px]">
                 <div className="bg-[#0A0A0A]/80 backdrop-blur-md border border-[#E8E7EF]/10 p-[16px] rounded-[12px] shadow-lg">
                   <div className="flex items-center gap-[8px] mb-[8px]">
                     <Lock className="w-[16px] h-[16px] text-[#D946EF]" />
                     <span className="text-[12px] leading-[16px] font-bold text-[#D946EF]">PHI DE-IDENTIFIED</span>
                   </div>
                   <div className="space-y-[8px]">
                     <div className="h-[4px] w-full bg-[#E8E7EF]/10 rounded-[2px]"><div className="h-full bg-[#9CA3AF] rounded-[2px] w-[70%]"></div></div>
                     <div className="h-[4px] w-full bg-[#E8E7EF]/10 rounded-[2px]"><div className="h-full bg-[#9CA3AF] rounded-[2px] w-[40%]"></div></div>
                   </div>
                 </div>

                 <div className="bg-[#8B5CF6]/10 backdrop-blur-md border border-[#8B5CF6]/30 p-[16px] rounded-[12px]">
                   <span className="text-[12px] leading-[16px] font-bold text-[#FFFFFF] block mb-[4px]">KNOWLEDGE_GRAPH</span>
                   <p className="text-[12px] leading-[16px] font-normal text-[#8B5CF6] truncate">Mapped to SNOMED-CT</p>
                 </div>
               </div>
               
            </div>
          </div>
        </div>
      </section>

      {/* 2. Medical Data Engineering and Standardization */}
      <section className="py-[128px] relative bg-[#0A0A0A] border-b border-[#E8E7EF]/10">
        <div className="w-full max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-[64px] lg:gap-[96px] items-center">
          
          <div className="lg:w-1/2 flex flex-col">
            <h2 className="text-[54px] leading-[64px] font-bold text-[#FFFFFF] mb-[24px] tracking-tight">
              Medical Data Engineering & Standardization
            </h2>
            <p className="text-[24px] leading-[32px] text-[#FFFFFF] font-bold mb-[24px]">
              Build a standardized data governance layer for medical AI by ingesting, cleaning, structuring, and unifying multi-source healthcare data.
            </p>
            <p className="text-[16px] leading-[24px] text-[#9CA3AF] font-normal mb-[48px]">
              Multi-center data integration, unstructured clinical data, medical coding alignment, and long-horizon data governance require a rigorous pipeline to ensure models are trained on reliable ground truth.
            </p>

            <div className="flex flex-col gap-[16px] mb-[48px]">
              {[
                "Metadata-driven structure mapping",
                "Healthcare standard coding support (ICD, SNOMED)",
                "Multi-center data collaboration workflows"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-[16px]">
                  <CheckCircle2 className="w-[20px] h-[20px] text-[#8B5CF6]" />
                  <span className="text-[16px] leading-[24px] font-bold text-[#FFFFFF]">{item}</span>
                </div>
              ))}
            </div>

            {/* Flow strip */}
            <div className="flex items-center justify-between text-[12px] leading-[16px] font-bold text-[#9CA3AF] border border-[#E8E7EF]/10 bg-[#161616] p-[16px] rounded-[12px] overflow-x-auto hide-scrollbar gap-[12px]">
              <span className="text-[#8B5CF6] whitespace-nowrap">Ingest</span> <ArrowRight className="w-[12px] h-[12px] text-[#E8E7EF]/20 shrink-0" />
              <span className="whitespace-nowrap">Parse</span> <ArrowRight className="w-[12px] h-[12px] text-[#E8E7EF]/20 shrink-0" />
              <span className="whitespace-nowrap">Map</span> <ArrowRight className="w-[12px] h-[12px] text-[#E8E7EF]/20 shrink-0" />
              <span className="whitespace-nowrap">Normalize</span> <ArrowRight className="w-[12px] h-[12px] text-[#E8E7EF]/20 shrink-0" />
              <span className="whitespace-nowrap">Validate</span> <ArrowRight className="w-[12px] h-[12px] text-[#E8E7EF]/20 shrink-0" />
              <span className="text-[#FFFFFF] whitespace-nowrap">Store</span>
            </div>
          </div>

          <div className="lg:w-1/2 w-full relative h-[450px] lg:h-[600px] rounded-[24px] bg-[#161616] border border-[#E8E7EF]/10 p-[32px] shadow-2xl overflow-hidden flex flex-col justify-center">
             <img src="https://images.unsplash.com/photo-1768327240007-2f45398639d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwZGF0YSUyMGVuZ2luZWVyaW5nJTIwbmV0d29yayUyMGFic3RyYWN0JTIwZGFya3xlbnwxfHx8fDE3NzQ3MTUxMjh8MA&ixlib=rb-4.1.0&q=80&w=1080" alt="Data Network" className="absolute inset-0 w-full h-full object-cover opacity-10 mix-blend-screen" />
             
             <div className="relative z-10 flex flex-col gap-[32px]">
               {/* Incoming Data */}
               <div className="flex justify-between items-center gap-[16px]">
                  <div className="bg-[#0A0A0A] border border-[#E8E7EF]/10 p-[16px] rounded-[16px] flex-1 text-center shadow-lg">
                    <span className="text-[12px] leading-[16px] font-bold text-[#9CA3AF] block mb-[8px]">RAW DICOM</span>
                    <div className="w-full h-[2px] bg-[#E8E7EF]/10 rounded"><div className="w-1/2 h-full bg-[#8B5CF6] rounded"></div></div>
                  </div>
                  <div className="bg-[#0A0A0A] border border-[#E8E7EF]/10 p-[16px] rounded-[16px] flex-1 text-center shadow-lg">
                    <span className="text-[12px] leading-[16px] font-bold text-[#9CA3AF] block mb-[8px]">EMR TEXT</span>
                    <div className="w-full h-[2px] bg-[#E8E7EF]/10 rounded"><div className="w-3/4 h-full bg-[#8B5CF6] rounded"></div></div>
                  </div>
                  <div className="bg-[#0A0A0A] border border-[#E8E7EF]/10 p-[16px] rounded-[16px] flex-1 text-center shadow-lg">
                    <span className="text-[12px] leading-[16px] font-bold text-[#9CA3AF] block mb-[8px]">LAB RESULTS</span>
                    <div className="w-full h-[2px] bg-[#E8E7EF]/10 rounded"><div className="w-1/4 h-full bg-[#8B5CF6] rounded"></div></div>
                  </div>
               </div>

               {/* Processing Center */}
               <div className="w-full border border-[#8B5CF6]/30 bg-[#8B5CF6]/5 rounded-[16px] p-[24px] flex flex-col items-center justify-center relative">
                 <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-[#8B5CF6]/0 via-[#8B5CF6] to-[#8B5CF6]/0 opacity-50"></div>
                 <Workflow className="w-[32px] h-[32px] text-[#8B5CF6] mb-[16px]" />
                 <span className="text-[16px] leading-[24px] font-bold text-[#FFFFFF] mb-[8px]">Standardization Engine</span>
                 <div className="flex gap-[16px] mt-[16px]">
                   <span className="px-[12px] py-[4px] bg-[#161616] border border-[#E8E7EF]/10 rounded text-[12px] leading-[16px] font-bold text-[#9CA3AF]">Parse Metadata</span>
                   <span className="px-[12px] py-[4px] bg-[#161616] border border-[#E8E7EF]/10 rounded text-[12px] leading-[16px] font-bold text-[#9CA3AF]">Structure Map</span>
                 </div>
               </div>

               {/* Output Storage */}
               <div className="bg-[#161616] border border-[#8B5CF6]/50 rounded-[16px] p-[24px] flex justify-between items-center shadow-[0_0_30px_rgba(139,92,246,0.1)]">
                 <div className="flex items-center gap-[16px]">
                   <Database className="w-[24px] h-[24px] text-[#8B5CF6]" />
                   <span className="text-[16px] leading-[24px] font-bold text-[#FFFFFF]">Normalized Data Lake</span>
                 </div>
                 <span className="text-[12px] leading-[16px] font-bold text-[#8B5CF6] bg-[#8B5CF6]/20 px-[12px] py-[6px] rounded-[4px]">READY FOR AI</span>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* 3. Medical Data Privacy */}
      <section className="py-[128px] relative bg-[#0A0A0A] border-b border-[#E8E7EF]/10">
        <div className="w-full max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-[64px] lg:gap-[96px] items-center">
          
          <div className="lg:w-1/2 order-2 lg:order-1 relative h-[450px] lg:h-[600px] rounded-[24px] bg-[#161616] border border-[#E8E7EF]/10 overflow-hidden">
             <img src="https://images.unsplash.com/photo-1614064642261-3ccbfafa481b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwZGF0YSUyMHByaXZhY3klMjBsb2NrJTIwbWVkaWNhbCUyMGRhcmt8ZW58MXx8fDE3NzQ3MTUxMjN8MA&ixlib=rb-4.1.0&q=80&w=1080" alt="Privacy Security" className="w-full h-full object-cover opacity-30 mix-blend-screen" />
             <div className="absolute inset-0 bg-gradient-to-tr from-[#0A0A0A] to-transparent"></div>
             
             <div className="absolute inset-0 p-[48px] flex flex-col justify-center gap-[24px]">
               {/* Data Record Masking */}
               <div className="bg-[#0A0A0A]/80 backdrop-blur-md border border-[#E8E7EF]/10 rounded-[16px] p-[24px] w-full max-w-sm">
                 <div className="flex justify-between items-center mb-[16px]">
                   <span className="text-[12px] leading-[16px] font-bold text-[#9CA3AF]">Patient Record: 88291A</span>
                   <ShieldCheck className="w-[16px] h-[16px] text-[#D946EF]" />
                 </div>
                 <div className="space-y-[12px] text-[12px] leading-[16px] font-normal font-mono text-[#9CA3AF]">
                   <div className="flex justify-between"><span>Name:</span> <span className="text-[#D946EF] bg-[#D946EF]/20 px-[4px] rounded">*** ***</span></div>
                   <div className="flex justify-between"><span>DOB:</span> <span className="text-[#D946EF] bg-[#D946EF]/20 px-[4px] rounded">XX/XX/XXXX</span></div>
                   <div className="flex justify-between"><span>Diagnosis:</span> <span className="text-[#FFFFFF]">Type II Diabetes</span></div>
                 </div>
               </div>

               {/* Access Control Alert */}
               <div className="bg-[#8B5CF6]/10 backdrop-blur-md border border-[#8B5CF6]/40 rounded-[16px] p-[24px] w-full max-w-sm self-end">
                 <div className="flex items-center gap-[12px] mb-[8px]">
                   <Lock className="w-[20px] h-[20px] text-[#8B5CF6]" />
                   <span className="text-[16px] leading-[24px] font-bold text-[#FFFFFF]">Access Controlled</span>
                 </div>
                 <p className="text-[12px] leading-[16px] font-normal text-[#9CA3AF]">Role: Annotator_L2. Restricted from viewing raw PHI fields. Audit log active.</p>
               </div>
             </div>
          </div>

          <div className="lg:w-1/2 order-1 lg:order-2 flex flex-col">
            <h2 className="text-[54px] leading-[64px] font-bold text-[#FFFFFF] mb-[24px] tracking-tight">
              Medical Data Privacy & Compliance Protection
            </h2>
            <p className="text-[24px] leading-[32px] text-[#FFFFFF] font-bold mb-[24px]">
              Protect sensitive patient data through classification, desensitization, access control, and security auditing to enable compliant AI workflows.
            </p>
            <p className="text-[16px] leading-[24px] text-[#9CA3AF] font-normal mb-[48px]">
              Patient privacy, multi-organization data sharing, clinical compliance requirements, and traceable data use demand an enterprise-grade security foundation embedded directly into the annotation platform.
            </p>

            <div className="grid grid-cols-2 gap-[24px] mb-[48px]">
              <div>
                <span className="text-[16px] leading-[24px] font-bold text-[#FFFFFF] block mb-[8px]">De-identification</span>
                <p className="text-[12px] leading-[16px] font-normal text-[#9CA3AF]">Automated masking of PHI fields across text and images.</p>
              </div>
              <div>
                <span className="text-[16px] leading-[24px] font-bold text-[#FFFFFF] block mb-[8px]">Role-Based Access</span>
                <p className="text-[12px] leading-[16px] font-normal text-[#9CA3AF]">Strict permission boundaries for different annotation tiers.</p>
              </div>
              <div>
                <span className="text-[16px] leading-[24px] font-bold text-[#FFFFFF] block mb-[8px]">Data Classification</span>
                <p className="text-[12px] leading-[16px] font-normal text-[#9CA3AF]">Security-level evaluation prior to processing.</p>
              </div>
              <div>
                <span className="text-[16px] leading-[24px] font-bold text-[#FFFFFF] block mb-[8px]">Security Auditing</span>
                <p className="text-[12px] leading-[16px] font-normal text-[#9CA3AF]">Comprehensive logging of all data views and edits.</p>
              </div>
            </div>

            <div className="flex gap-[12px] text-[12px] leading-[16px] font-bold text-[#9CA3AF]">
               <span className="bg-[#161616] border border-[#E8E7EF]/10 px-[16px] py-[8px] rounded-[8px]">Classify</span>
               <span className="bg-[#161616] border border-[#E8E7EF]/10 px-[16px] py-[8px] rounded-[8px]">Mask</span>
               <span className="bg-[#161616] border border-[#E8E7EF]/10 px-[16px] py-[8px] rounded-[8px]">Control</span>
               <span className="bg-[#161616] border border-[#E8E7EF]/10 px-[16px] py-[8px] rounded-[8px]">Audit</span>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Medical Data Annotation System */}
      <section className="py-[128px] relative bg-[#0A0A0A] border-b border-[#E8E7EF]/10">
        <div className="w-full max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-[64px] lg:gap-[96px] items-center">
          
          <div className="lg:w-1/2 flex flex-col">
            <h2 className="text-[54px] leading-[64px] font-bold text-[#FFFFFF] mb-[24px] tracking-tight">
              Medical Data Annotation System
            </h2>
            <p className="text-[24px] leading-[32px] text-[#FFFFFF] font-bold mb-[24px]">
              A multimodal medical annotation system spanning imaging, text, and clinical data tasks.
            </p>
            <p className="text-[16px] leading-[24px] text-[#9CA3AF] font-normal mb-[48px]">
              Designed with expert-defined rules, AI pre-labeling, and multi-round QA to ensure medical semantic consistency, clinical constraint adherence, and high-quality outputs.
            </p>

            <div className="flex flex-wrap gap-[16px] mb-[48px]">
              <div className="bg-[#161616] border border-[#E8E7EF]/10 rounded-[12px] px-[20px] py-[16px] flex flex-col">
                <span className="text-[24px] leading-[32px] font-bold text-[#FFFFFF] mb-[4px]">500K+</span>
                <span className="text-[12px] leading-[16px] font-bold text-[#9CA3AF]">Medical QA</span>
              </div>
              <div className="bg-[#161616] border border-[#E8E7EF]/10 rounded-[12px] px-[20px] py-[16px] flex flex-col">
                <span className="text-[24px] leading-[32px] font-bold text-[#FFFFFF] mb-[4px]">100K+</span>
                <span className="text-[12px] leading-[16px] font-bold text-[#9CA3AF]">Medical Reports</span>
              </div>
              <div className="bg-[#161616] border border-[#E8E7EF]/10 rounded-[12px] px-[20px] py-[16px] flex flex-col">
                <span className="text-[24px] leading-[32px] font-bold text-[#FFFFFF] mb-[4px]">120K+</span>
                <span className="text-[12px] leading-[16px] font-bold text-[#9CA3AF]">Dental/3D Scans</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-[12px] text-[12px] leading-[16px] font-bold text-[#E8E7EF]">
               <span className="px-[12px] py-[6px] border border-[#E8E7EF]/10 rounded-full">Create</span>
               <span className="px-[12px] py-[6px] border border-[#E8E7EF]/10 rounded-full">Define Rules</span>
               <span className="px-[12px] py-[6px] border border-[#8B5CF6]/50 bg-[#8B5CF6]/10 text-[#8B5CF6] rounded-full">AI Pre-label</span>
               <span className="px-[12px] py-[6px] border border-[#E8E7EF]/10 rounded-full">Human Correct</span>
               <span className="px-[12px] py-[6px] border border-[#E8E7EF]/10 rounded-full">Multi-QA</span>
            </div>
          </div>

          <div className="lg:w-1/2 w-full relative">
            <div className="bg-[#161616] border border-[#E8E7EF]/10 rounded-[24px] p-[32px] shadow-2xl flex flex-col gap-[24px]">
               <div className="flex justify-between items-center border-b border-[#E8E7EF]/10 pb-[16px]">
                 <div className="flex items-center gap-[12px]">
                   <Layers className="w-[20px] h-[20px] text-[#8B5CF6]" />
                   <span className="text-[16px] leading-[24px] font-bold text-[#FFFFFF]">Annotation Lifecycle</span>
                 </div>
                 <span className="text-[12px] leading-[16px] font-bold text-[#9CA3AF]">Project: ONC_TUMOR_SEG</span>
               </div>
               
               <div className="space-y-[16px] relative">
                 <div className="absolute left-[20px] top-[24px] bottom-[24px] w-px bg-[#E8E7EF]/10"></div>
                 
                 {[
                   { step: "Schema Definition", status: "Expert Guided", active: false },
                   { step: "AI Pre-labeling", status: "Auto-Seg Model v2", active: true },
                   { step: "Human Refinement", status: "Pending Clinical Team", active: false },
                 ].map((item, i) => (
                   <div key={i} className={`relative flex items-center gap-[24px] p-[16px] rounded-[16px] border ${item.active ? 'bg-[#8B5CF6]/10 border-[#8B5CF6]/30' : 'bg-[#0A0A0A] border-[#E8E7EF]/5'}`}>
                     <div className={`w-[8px] h-[8px] rounded-full ${item.active ? 'bg-[#8B5CF6] shadow-[0_0_10px_#8B5CF6]' : 'bg-[#E8E7EF]/20'}`}></div>
                     <div>
                       <span className={`text-[16px] leading-[24px] font-bold block mb-[4px] ${item.active ? 'text-[#FFFFFF]' : 'text-[#9CA3AF]'}`}>{item.step}</span>
                       <span className={`text-[12px] leading-[16px] font-normal ${item.active ? 'text-[#8B5CF6]' : 'text-[#9CA3AF]'}`}>{item.status}</span>
                     </div>
                   </div>
                 ))}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Medical Imaging Annotation */}
      <section className="py-[128px] relative bg-[#0A0A0A] border-b border-[#E8E7EF]/10 overflow-hidden">
        <div className="w-full max-w-[1200px] mx-auto">
          
          <div className="flex flex-col md:flex-row justify-between items-end mb-[64px] gap-[32px]">
            <div className="max-w-2xl">
              <h2 className="text-[54px] leading-[64px] font-bold text-[#FFFFFF] mb-[24px] tracking-tight">
                Medical Imaging Annotation & Structured Dataset Construction
              </h2>
              <p className="text-[16px] leading-[24px] text-[#9CA3AF] font-normal">
                Provide high-precision medical imaging annotation through pixel-level segmentation and lesion localization. CT organ segmentation, tumor localization, vascular structure recognition, and radiomics-ready feature extraction.
              </p>
            </div>
            <div className="flex gap-[24px]">
              <div className="text-right">
                <span className="text-[32px] leading-[40px] font-bold text-[#FFFFFF] block">8K+</span>
                <span className="text-[12px] leading-[16px] font-bold text-[#9CA3AF]">Imaging Cases</span>
              </div>
              <div className="text-right">
                <span className="text-[32px] leading-[40px] font-bold text-[#FFFFFF] block">100K+</span>
                <span className="text-[12px] leading-[16px] font-bold text-[#9CA3AF]">Structured Reports</span>
              </div>
            </div>
          </div>

          <div className="w-full h-[500px] md:h-[700px] bg-[#161616] rounded-[24px] border border-[#E8E7EF]/10 overflow-hidden relative shadow-2xl">
             <img src="https://images.unsplash.com/photo-1600673645627-1c47394132ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwaW1hZ2luZyUyMENUJTIwc2NhbiUyMGRhcmslMjBwdXJwbGV8ZW58MXx8fHwxNzc0NzE1MTIzfDA&ixlib=rb-4.1.0&q=80&w=1080" alt="High Precision Imaging" className="w-full h-full object-cover opacity-60 mix-blend-screen" />
             <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] to-transparent"></div>

             {/* UI Editor Elements Overlay */}
             <div className="absolute top-[32px] left-[32px] bg-[#0A0A0A]/80 backdrop-blur-md border border-[#E8E7EF]/10 rounded-[12px] p-[16px] flex flex-col gap-[12px]">
               <span className="text-[12px] leading-[16px] font-bold text-[#9CA3AF] uppercase">Segmentation Layers</span>
               <div className="flex items-center gap-[12px]"><div className="w-[12px] h-[12px] rounded border border-[#8B5CF6] bg-[#8B5CF6]/20"></div> <span className="text-[12px] leading-[16px] font-bold text-[#FFFFFF]">Lesion Boundary</span></div>
               <div className="flex items-center gap-[12px]"><div className="w-[12px] h-[12px] rounded border border-[#D946EF] bg-[#D946EF]/20"></div> <span className="text-[12px] leading-[16px] font-bold text-[#FFFFFF]">Organ Outline</span></div>
               <div className="flex items-center gap-[12px]"><div className="w-[12px] h-[12px] rounded border border-[#E8E7EF]/50 bg-[#E8E7EF]/10"></div> <span className="text-[12px] leading-[16px] font-bold text-[#FFFFFF]">Vessel Layer</span></div>
             </div>

             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] border-[2px] border-dashed border-[#8B5CF6]/80 rounded-full animate-[spin_60s_linear_infinite] pointer-events-none"></div>
             
             {/* Highlight region */}
             <div className="absolute top-[40%] left-[45%] w-[64px] h-[80px] bg-[#8B5CF6]/20 border border-[#8B5CF6] rounded-[50%_40%_60%_30%] blur-[2px] shadow-[0_0_20px_#8B5CF6]"></div>
             
             <div className="absolute bottom-[32px] right-[32px] bg-[#8B5CF6]/20 backdrop-blur-md border border-[#8B5CF6]/50 rounded-[12px] p-[16px] flex items-center gap-[12px]">
               <Microscope className="w-[20px] h-[20px] text-[#FFFFFF]" />
               <span className="text-[16px] leading-[24px] font-bold text-[#FFFFFF]">Expert Review Required</span>
             </div>
          </div>

        </div>
      </section>

      {/* 6. Medical NLP and Knowledge Graph */}
      <section className="py-[128px] relative bg-[#0A0A0A] border-b border-[#E8E7EF]/10">
        <div className="w-full max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-[64px] lg:gap-[96px] items-center">
          
          <div className="lg:w-1/2 flex flex-col">
            <h2 className="text-[54px] leading-[64px] font-bold text-[#FFFFFF] mb-[24px] tracking-tight">
              Medical NLP & Knowledge Graph Construction
            </h2>
            <p className="text-[24px] leading-[32px] text-[#FFFFFF] font-bold mb-[24px]">
              Transform unstructured medical text into structured knowledge.
            </p>
            <p className="text-[16px] leading-[24px] text-[#9CA3AF] font-normal mb-[48px]">
              Clinical note understanding, guideline parsing, literature structuring, and medically grounded reasoning. We extract entities, relationships, and build semantic graphs to power diagnosis coding and trial matching.
            </p>

            <div className="grid grid-cols-2 gap-[24px] mb-[48px]">
              <div className="bg-[#161616] border border-[#E8E7EF]/10 p-[20px] rounded-[16px]">
                <FileText className="w-[24px] h-[24px] text-[#8B5CF6] mb-[12px]" />
                <span className="text-[16px] leading-[24px] font-bold text-[#FFFFFF] block mb-[4px]">Entity Recognition</span>
                <p className="text-[12px] leading-[16px] font-normal text-[#9CA3AF]">Symptoms, drugs, procedures.</p>
              </div>
              <div className="bg-[#161616] border border-[#E8E7EF]/10 p-[20px] rounded-[16px]">
                <Network className="w-[24px] h-[24px] text-[#D946EF] mb-[12px]" />
                <span className="text-[16px] leading-[24px] font-bold text-[#FFFFFF] block mb-[4px]">Relation Extraction</span>
                <p className="text-[12px] leading-[16px] font-normal text-[#9CA3AF]">Semantic links and logic structuring.</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-[12px] text-[12px] leading-[16px] font-bold text-[#9CA3AF]">
               <span className="px-[12px] py-[6px] bg-[#161616] rounded-[4px] border border-[#E8E7EF]/5">Text</span> →
               <span className="px-[12px] py-[6px] bg-[#161616] rounded-[4px] border border-[#E8E7EF]/5">Entity</span> →
               <span className="px-[12px] py-[6px] bg-[#161616] rounded-[4px] border border-[#E8E7EF]/5">Relation</span> →
               <span className="px-[12px] py-[6px] bg-[#8B5CF6]/10 text-[#8B5CF6] border border-[#8B5CF6]/30 rounded-[4px]">Graph</span> →
               <span className="px-[12px] py-[6px] bg-[#161616] rounded-[4px] border border-[#E8E7EF]/5">Use Case</span>
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
             <div className="flex flex-col md:flex-row h-[450px] lg:h-[550px] bg-[#161616] border border-[#E8E7EF]/10 rounded-[24px] overflow-hidden shadow-2xl relative">
                
                {/* Left: Text */}
                <div className="w-full md:w-1/2 h-1/2 md:h-full p-[32px] border-b md:border-b-0 md:border-r border-[#E8E7EF]/10 flex flex-col gap-[16px] relative z-10">
                  <span className="text-[12px] leading-[16px] font-bold text-[#9CA3AF] uppercase">Clinical Notes</span>
                  <div className="text-[12px] leading-[24px] font-normal text-[#E8E7EF] bg-[#0A0A0A] p-[16px] rounded-[12px] border border-[#E8E7EF]/5 h-full">
                    Patient presents with <span className="bg-[#8B5CF6]/30 text-[#FFFFFF] px-[4px] rounded border border-[#8B5CF6]/50">severe headache</span> and <span className="bg-[#8B5CF6]/30 text-[#FFFFFF] px-[4px] rounded border border-[#8B5CF6]/50">nausea</span>. Prescribed <span className="bg-[#D946EF]/30 text-[#FFFFFF] px-[4px] rounded border border-[#D946EF]/50">Ibuprofen 400mg</span> and advised rest. History of <span className="bg-[#8B5CF6]/30 text-[#FFFFFF] px-[4px] rounded border border-[#8B5CF6]/50">migraines</span>.
                  </div>
                </div>

                {/* Right: Graph */}
                <div className="w-full md:w-1/2 h-1/2 md:h-full relative overflow-hidden z-0 bg-[#0A0A0A]">
                  <img src="https://images.unsplash.com/photo-1647356191320-d7a1f80ca777?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwTkxQJTIwa25vd2xlZGdlJTIwZ3JhcGglMjBuZXR3b3JrJTIwZGFya3xlbnwxfHx8fDE3NzQ3MTUxMjN8MA&ixlib=rb-4.1.0&q=80&w=1080" alt="Knowledge Graph" className="w-full h-full object-cover opacity-40 mix-blend-screen" />
                  <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#0A0A0A]"></div>
                  
                  {/* Overlay Nodes */}
                  <div className="absolute top-[30%] left-[20%] w-[64px] h-[32px] bg-[#8B5CF6]/20 border border-[#8B5CF6] rounded-full flex items-center justify-center text-[10px] font-bold text-[#FFFFFF] shadow-[0_0_15px_#8B5CF6]">Migraine</div>
                  <div className="absolute top-[60%] right-[20%] w-[80px] h-[32px] bg-[#D946EF]/20 border border-[#D946EF] rounded-full flex items-center justify-center text-[10px] font-bold text-[#FFFFFF] shadow-[0_0_15px_#D946EF]">Ibuprofen</div>
                  <svg className="absolute inset-0 w-full h-full pointer-events-none">
                    <path d="M 60 70 L 150 150" stroke="#8B5CF6" strokeWidth="2" strokeDasharray="4 4" />
                  </svg>
                </div>

             </div>
          </div>

        </div>
      </section>

      {/* 7. Medical Dialogue Data */}
      <section className="py-[128px] relative bg-[#0A0A0A] border-b border-[#E8E7EF]/10">
        <div className="w-full max-w-[1200px] mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-[80px]">
            <h2 className="text-[54px] leading-[64px] font-bold text-[#FFFFFF] tracking-tight mb-[24px]">
              Medical Dialogue Data for Intelligent Consultation
            </h2>
            <p className="text-[16px] leading-[24px] text-[#9CA3AF] font-normal">
              Build structured consultation data simulating real doctor-patient interactions. Handle multi-turn dialogues, symptom discovery, and differential diagnosis for intelligent triage models.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-[32px]">
            
            {/* Left: 6-step flow */}
            <div className="md:w-1/3 flex flex-col gap-[16px]">
               <span className="text-[12px] leading-[16px] font-bold text-[#9CA3AF] uppercase tracking-widest mb-[8px]">Consultation Structure</span>
               {[
                 { step: "1", name: "Chief Complaint", icon: MessageSquareQuote },
                 { step: "2", name: "Present Illness", icon: Activity },
                 { step: "3", name: "Past History", icon: FileText },
                 { step: "4", name: "Examination", icon: ScanLine },
                 { step: "5", name: "Diagnosis", icon: Microscope },
                 { step: "6", name: "Treatment", icon: Stethoscope },
               ].map((item, i) => (
                 <div key={i} className={`flex items-center gap-[16px] p-[16px] rounded-[12px] border ${i === 4 ? 'bg-[#8B5CF6]/10 border-[#8B5CF6]/50 shadow-[0_0_20px_rgba(139,92,246,0.1)]' : 'bg-[#161616] border-[#E8E7EF]/5'}`}>
                   <div className={`w-[32px] h-[32px] rounded-[8px] flex items-center justify-center font-bold text-[12px] ${i === 4 ? 'bg-[#8B5CF6] text-[#FFFFFF]' : 'bg-[#E8E7EF]/10 text-[#9CA3AF]'}`}>{item.step}</div>
                   <div className="flex items-center gap-[8px]">
                     <item.icon className={`w-[16px] h-[16px] ${i === 4 ? 'text-[#8B5CF6]' : 'text-[#9CA3AF]'}`} />
                     <span className={`text-[16px] leading-[24px] font-bold ${i === 4 ? 'text-[#FFFFFF]' : 'text-[#9CA3AF]'}`}>{item.name}</span>
                   </div>
                 </div>
               ))}
            </div>

            {/* Right: Dialogue Interface */}
            <div className="md:w-2/3 bg-[#161616] border border-[#E8E7EF]/10 rounded-[24px] p-[32px] shadow-2xl relative overflow-hidden flex flex-col">
               <img src="https://images.unsplash.com/photo-1649652214784-d3e217c145a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N0b3IlMjBwYXRpZW50JTIwY29uc3VsdGF0aW9uJTIwZGFyayUyMHB1cnBsZXxlbnwxfHx8fDE3NzQ3MTUxMjl8MA&ixlib=rb-4.1.0&q=80&w=1080" alt="Consultation Background" className="absolute inset-0 w-full h-full object-cover opacity-10 mix-blend-screen grayscale-[50%]" />
               <div className="absolute inset-0 bg-gradient-to-t from-[#161616] via-[#161616]/80 to-transparent"></div>
               
               <div className="relative z-10 flex flex-col gap-[24px] h-full justify-center">
                 
                 <div className="self-start max-w-[80%] bg-[#0A0A0A] border border-[#E8E7EF]/10 p-[16px] rounded-[16px] rounded-tl-none">
                   <span className="text-[12px] leading-[16px] font-bold text-[#9CA3AF] mb-[8px] block">PATIENT</span>
                   <p className="text-[16px] leading-[24px] font-normal text-[#E8E7EF]">I've had this sharp pain in my lower right abdomen since yesterday, and I feel a bit nauseous.</p>
                 </div>

                 <div className="self-end max-w-[80%] bg-[#8B5CF6]/10 border border-[#8B5CF6]/30 p-[16px] rounded-[16px] rounded-tr-none">
                   <span className="text-[12px] leading-[16px] font-bold text-[#8B5CF6] mb-[8px] block">AI DOCTOR / ANNOTATED DIAGNOSIS</span>
                   <p className="text-[16px] leading-[24px] font-normal text-[#FFFFFF]">Given the <span className="bg-[#8B5CF6]/30 px-[4px] rounded">RLQ pain</span> and <span className="bg-[#8B5CF6]/30 px-[4px] rounded">nausea</span>, we need to rule out <span className="bg-[#D946EF]/30 px-[4px] rounded">appendicitis</span>. Have you had any fever?</p>
                 </div>

                 <div className="w-full mt-[32px] pt-[24px] border-t border-[#E8E7EF]/10 flex flex-wrap gap-[12px]">
                   <span className="text-[12px] leading-[16px] font-bold text-[#9CA3AF] bg-[#E8E7EF]/5 px-[12px] py-[6px] rounded-[4px]">Differential Diagnosis</span>
                   <span className="text-[12px] leading-[16px] font-bold text-[#8B5CF6] bg-[#8B5CF6]/10 border border-[#8B5CF6]/30 px-[12px] py-[6px] rounded-[4px]">Symptom Extraction</span>
                 </div>

               </div>
            </div>

          </div>
        </div>
      </section>

      {/* 8. LLM Data Engineering for Medical AI */}
      <section className="py-[128px] relative bg-[#0A0A0A] border-b border-[#E8E7EF]/10">
        <div className="w-full max-w-[1200px] mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-[80px]">
            <h2 className="text-[54px] leading-[64px] font-bold text-[#FFFFFF] tracking-tight mb-[24px]">
              LLM Data Engineering for Medical AI
            </h2>
            <p className="text-[16px] leading-[24px] text-[#9CA3AF] font-normal">
              Construct medical large-model training data through retrieval annotation and chain-of-thought (COT) review to improve knowledge grounding and reasoning quality while reducing clinical hallucination.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-[24px]">
            
            {/* Left: RAG */}
            <div className="w-full md:w-1/2 bg-[#161616] border border-[#E8E7EF]/10 rounded-[24px] pt-[32px] pb-[32px] px-[32px] flex flex-col relative overflow-hidden group">
               <div className="absolute right-0 top-0 w-[150px] h-[150px] bg-[#8B5CF6]/10 rounded-full blur-[50px] group-hover:bg-[#8B5CF6]/20 transition-colors"></div>
               <div className="relative z-10 flex items-center gap-[12px] mb-[24px]">
                 <Search className="w-[24px] h-[24px] text-[#8B5CF6]" />
                 <h3 className="text-[24px] leading-[32px] font-bold text-[#FFFFFF]">RAG Retrieval Labeling</h3>
               </div>
               <p className="text-[16px] leading-[24px] font-normal text-[#9CA3AF] mb-[32px]">Ensure answers are grounded in verifiable clinical guidelines.</p>
               
               <div className="flex flex-col gap-[12px]">
                 <div className="bg-[#0A0A0A] border border-[#8B5CF6]/30 rounded-[12px] p-[16px]">
                   <span className="text-[10px] leading-[16px] font-bold text-[#8B5CF6] uppercase block mb-[4px]">Source Document</span>
                   <div className="w-full h-[8px] bg-[#E8E7EF]/10 rounded-[4px] mb-[8px]"><div className="w-[60%] h-full bg-[#8B5CF6] rounded-[4px]"></div></div>
                   <div className="w-full h-[8px] bg-[#E8E7EF]/10 rounded-[4px]"></div>
                 </div>
                 <div className="flex justify-center text-[#8B5CF6]">↓</div>
                 <div className="bg-[#0A0A0A] border border-[#E8E7EF]/10 rounded-[12px] p-[16px]">
                   <span className="text-[10px] leading-[16px] font-bold text-[#9CA3AF] uppercase block mb-[4px]">Grounded Output</span>
                   <div className="w-full h-[8px] bg-[#E8E7EF]/10 rounded-[4px]"></div>
                 </div>
               </div>
            </div>

            {/* Right: COT */}
            <div className="w-full md:w-1/2 bg-[#161616] border border-[#E8E7EF]/10 rounded-[24px] pt-[32px] pb-[32px] px-[32px] flex flex-col relative overflow-hidden group">
               <div className="absolute right-0 top-0 w-[150px] h-[150px] bg-[#D946EF]/10 rounded-full blur-[50px] group-hover:bg-[#D946EF]/20 transition-colors"></div>
               <div className="relative z-10 flex items-center gap-[12px] mb-[24px]">
                 <BrainCircuit className="w-[24px] h-[24px] text-[#D946EF]" />
                 <h3 className="text-[24px] leading-[32px] font-bold text-[#FFFFFF]">COT Reasoning Annotation</h3>
               </div>
               <p className="text-[16px] leading-[24px] font-normal text-[#9CA3AF] mb-[32px]">Expert review of step-by-step clinical diagnostic logic.</p>
               
               <div className="flex flex-col gap-[16px]">
                 <div className="flex items-start gap-[12px]">
                   <div className="w-[24px] h-[24px] rounded-full bg-[#E8E7EF]/10 flex items-center justify-center text-[12px] font-bold">1</div>
                   <div className="bg-[#0A0A0A] border border-[#E8E7EF]/10 rounded-[8px] p-[12px] flex-1 text-[12px] leading-[16px] text-[#9CA3AF]">Identify primary symptom</div>
                 </div>
                 <div className="flex items-start gap-[12px]">
                   <div className="w-[24px] h-[24px] rounded-full bg-[#E8E7EF]/10 flex items-center justify-center text-[12px] font-bold">2</div>
                   <div className="bg-[#0A0A0A] border border-[#E8E7EF]/10 rounded-[8px] p-[12px] flex-1 text-[12px] leading-[16px] text-[#9CA3AF]">Correlate with past history</div>
                 </div>
                 <div className="flex items-start gap-[12px]">
                   <div className="w-[24px] h-[24px] rounded-full bg-[#D946EF] flex items-center justify-center text-[12px] font-bold text-[#FFFFFF]">3</div>
                   <div className="bg-[#D946EF]/10 border border-[#D946EF]/50 rounded-[8px] p-[12px] flex-1 text-[12px] leading-[16px] text-[#FFFFFF] font-bold">Formulate clinical decision</div>
                 </div>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* 9. Medical AI Model Training Loop */}
      <section className="py-[128px] relative bg-[#0A0A0A] border-b border-[#E8E7EF]/10">
        <div className="w-full max-w-[1200px] mx-auto flex flex-col items-center">
          
          <div className="text-center max-w-3xl mb-[80px]">
            <h2 className="text-[54px] leading-[64px] font-bold text-[#FFFFFF] tracking-tight mb-[24px]">
              Medical AI Training & Data Feedback Loop
            </h2>
            <p className="text-[16px] leading-[24px] text-[#9CA3AF] font-normal">
              Continuous model iteration fueled by quality data feedback and visualized training monitoring.
            </p>
          </div>

          <div className="relative w-full max-w-[800px] h-[400px] md:h-[500px] flex items-center justify-center">
             <img src="https://images.unsplash.com/photo-1774385439730-db274efb6ec4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaSUyMG5ldXJhbCUyMGxvb3AlMjBpbmZpbml0eSUyMGRhcmslMjBwdXJwbGV8ZW58MXx8fHwxNzc0NzE1MTI5fDA&ixlib=rb-4.1.0&q=80&w=1080" alt="Infinity Loop" className="absolute inset-0 w-full h-full object-contain opacity-20 mix-blend-screen" />
             
             {/* Circular Data Flow Nodes */}
             <div className="absolute inset-0 flex items-center justify-center">
               <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full border border-dashed border-[#8B5CF6]/30 animate-[spin_40s_linear_infinite]"></div>
             </div>

             <div className="absolute w-[120px] h-[120px] rounded-full bg-[#161616] border border-[#E8E7EF]/10 flex flex-col items-center justify-center shadow-lg z-10 top-[10%] md:top-0">
               <Database className="w-[24px] h-[24px] text-[#9CA3AF] mb-[8px]" />
               <span className="text-[12px] leading-[16px] font-bold text-[#FFFFFF]">Data Intake</span>
             </div>

             <div className="absolute w-[140px] h-[140px] rounded-full bg-[#161616] border border-[#8B5CF6]/50 flex flex-col items-center justify-center shadow-[0_0_30px_rgba(139,92,246,0.2)] z-10 bottom-[10%] md:bottom-0 right-[10%] md:right-[15%]">
               <Bot className="w-[32px] h-[32px] text-[#8B5CF6] mb-[8px]" />
               <span className="text-[12px] leading-[16px] font-bold text-[#FFFFFF]">Model Update</span>
             </div>

             <div className="absolute w-[120px] h-[120px] rounded-full bg-[#161616] border border-[#E8E7EF]/10 flex flex-col items-center justify-center shadow-lg z-10 bottom-[20%] md:bottom-[10%] left-[10%] md:left-[15%]">
               <Activity className="w-[24px] h-[24px] text-[#D946EF] mb-[8px]" />
               <span className="text-[12px] leading-[16px] font-bold text-[#FFFFFF]">Evaluate</span>
             </div>

             <div className="w-[160px] h-[160px] rounded-full bg-[#0A0A0A] border-2 border-[#8B5CF6] flex flex-col items-center justify-center z-20 shadow-[0_0_50px_rgba(139,92,246,0.3)]">
               <span className="text-[24px] leading-[32px] font-bold text-[#FFFFFF] mb-[4px]">AI Core</span>
               <span className="text-[12px] leading-[16px] font-bold text-[#8B5CF6]">Continuous Opt</span>
             </div>
          </div>

        </div>
      </section>

      {/* 10. AI DataOps */}
      <section className="py-[128px] relative bg-[#0A0A0A] border-b border-[#E8E7EF]/10">
        <div className="w-full max-w-[1200px] mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-[80px]">
            <h2 className="text-[54px] leading-[64px] font-bold text-[#FFFFFF] tracking-tight mb-[24px]">
              AI DataOps & Visualized Medical Operations
            </h2>
            <p className="text-[16px] leading-[24px] text-[#9CA3AF] font-normal">
              Manage medical data production through project control, task allocation, statistical visibility, and reusable data assets inside an integrated DataOps cockpit.
            </p>
          </div>

          <div className="w-full bg-[#161616] border border-[#E8E7EF]/10 rounded-[24px] p-[32px] shadow-2xl relative overflow-hidden flex flex-col gap-[24px]">
             <img src="https://images.unsplash.com/photo-1725544014976-5c60cc9fc1fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwZGF0YSUyMEFJJTIwZGFzaGJvYXJkJTIwZGFya3xlbnwxfHx8fDE3NzQ3MTUxMjN8MA&ixlib=rb-4.1.0&q=80&w=1080" alt="DataOps Dashboard" className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-screen" />
             <div className="absolute inset-0 bg-gradient-to-t from-[#161616] via-[#161616]/80 to-transparent"></div>
             
             <div className="relative z-10 grid grid-cols-1 md:grid-cols-4 gap-[24px]">
               {/* Main Dashboard Widget */}
               <div className="md:col-span-3 bg-[#0A0A0A]/80 backdrop-blur-md border border-[#E8E7EF]/10 rounded-[16px] p-[24px]">
                 <div className="flex justify-between items-center mb-[24px] border-b border-[#E8E7EF]/10 pb-[16px]">
                   <span className="text-[16px] leading-[24px] font-bold text-[#FFFFFF] flex items-center gap-[12px]"><LayoutDashboard className="w-[20px] h-[20px] text-[#8B5CF6]" /> Production Overview</span>
                   <span className="text-[12px] leading-[16px] font-bold text-[#8B5CF6] bg-[#8B5CF6]/10 px-[12px] py-[6px] rounded-[4px]">LIVE SYNC</span>
                 </div>
                 
                 <div className="grid grid-cols-3 gap-[16px]">
                   <div className="bg-[#161616] p-[16px] rounded-[12px]">
                     <span className="text-[12px] leading-[16px] font-bold text-[#9CA3AF] mb-[8px] block">Project Progress</span>
                     <span className="text-[32px] leading-[40px] font-bold text-[#FFFFFF]">78%</span>
                     <div className="w-full h-[4px] bg-[#E8E7EF]/10 rounded mt-[8px]"><div className="w-[78%] h-full bg-[#8B5CF6] rounded"></div></div>
                   </div>
                   <div className="bg-[#161616] p-[16px] rounded-[12px]">
                     <span className="text-[12px] leading-[16px] font-bold text-[#9CA3AF] mb-[8px] block">Volume Statistics</span>
                     <span className="text-[32px] leading-[40px] font-bold text-[#FFFFFF]">1.2M</span>
                     <span className="text-[12px] leading-[16px] font-normal text-[#9CA3AF] mt-[8px] block">+40K this week</span>
                   </div>
                   <div className="bg-[#161616] p-[16px] rounded-[12px]">
                     <span className="text-[12px] leading-[16px] font-bold text-[#9CA3AF] mb-[8px] block">QA Pass Rate</span>
                     <span className="text-[32px] leading-[40px] font-bold text-[#FFFFFF]">99.2%</span>
                     <span className="text-[12px] leading-[16px] font-normal text-[#9CA3AF] mt-[8px] block">Exceeds clinical threshold</span>
                   </div>
                 </div>
               </div>

               {/* Side Widget */}
               <div className="md:col-span-1 bg-[#8B5CF6]/10 backdrop-blur-md border border-[#8B5CF6]/30 rounded-[16px] p-[24px] flex flex-col justify-between">
                 <div>
                   <span className="text-[16px] leading-[24px] font-bold text-[#FFFFFF] mb-[16px] block">Asset Reuse</span>
                   <p className="text-[12px] leading-[16px] font-normal text-[#E8E7EF]">Turn single-use annotations into structured, searchable dataset assets for future foundation models.</p>
                 </div>
                 <div className="mt-[24px] w-full bg-[#0A0A0A]/50 h-[64px] rounded-[8px] flex items-center justify-center border border-[#8B5CF6]/50 shadow-[0_0_15px_rgba(139,92,246,0.2)]">
                   <span className="text-[12px] leading-[16px] font-bold text-[#8B5CF6]">View Asset Library</span>
                 </div>
               </div>
             </div>

          </div>

        </div>
      </section>

      {/* 11. Closing CTA */}
      <section className="relative py-[128px] md:py-[192px] overflow-hidden bg-[#0A0A0A]">
        <div className="absolute inset-0 z-0 pointer-events-none">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(139,92,246,0.08)_0%,transparent_60%)] blur-[100px]"></div>
           <div className="absolute inset-0 bg-[linear-gradient(rgba(232,231,239,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(232,231,239,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]"></div>
        </div>

        <div className="w-full max-w-[1200px] mx-auto text-center relative z-10 flex flex-col items-center">
          
          <Layers className="w-[48px] h-[48px] text-[#8B5CF6] mx-auto mb-[32px] opacity-80" />
          
          <h2 className="text-[54px] md:text-[64px] leading-[64px] md:leading-[72px] font-bold text-[#FFFFFF] mb-[24px] tracking-tight">
            Ready to Support High-Complexity Healthcare AI Programs
          </h2>
          <p className="text-[24px] leading-[32px] font-bold text-[#9CA3AF] mb-[48px] max-w-3xl">
            Whether you’re building medical imaging models, clinical knowledge systems, consultation AI, or medical LLM workflows, we help turn clinically complex data into structured assets for training and deployment.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-[16px] w-full sm:w-auto mb-[64px]">
            <Link to="/contact" className="group w-full sm:w-auto flex items-center justify-center gap-[12px] px-[36px] py-[16px] relative rounded-[18px] shadow-[0px_20px_25px_0px_rgba(139,92,246,0.2),0px_8px_10px_0px_rgba(139,92,246,0.2)] hover:shadow-[0px_20px_25px_0px_rgba(139,92,246,0.4),0px_8px_10px_0px_rgba(139,92,246,0.4)] text-[18px] leading-[normal] font-bold text-white whitespace-nowrap transition-all" style={{ backgroundImage: "linear-gradient(90deg, rgb(139, 92, 246) 0%, rgb(145, 91, 246) 7.1429%, rgb(151, 90, 245) 14.286%, rgb(157, 90, 245) 21.429%, rgb(162, 89, 244) 28.571%, rgb(168, 87, 244) 35.714%, rgb(174, 86, 243) 42.857%, rgb(179, 85, 243) 50%, rgb(185, 83, 242) 57.143%, rgb(190, 81, 242) 64.286%, rgb(196, 80, 241) 71.429%, rgb(201, 78, 241) 78.571%, rgb(206, 75, 240) 85.714%, rgb(212, 73, 240) 92.857%, rgb(217, 70, 239) 100%)" }}>
              Contact us
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-[12px]">
            {[
              "Data Engineering", 
              "Privacy Governance", 
              "Imaging Annotation", 
              "Medical NLP", 
              "Dialogue Data", 
              "LLM Training",
              "Medical DataOps"
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
