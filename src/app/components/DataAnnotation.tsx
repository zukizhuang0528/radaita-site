import React, { useState } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Link } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { heroSection, heroContainer, heroLeftCol, heroRightPanel, heroImage, heroCTARow } from "../styles/pageStyles";
import {
  ArrowRight,
  Video,
  Box,
  Image as ImageIcon,
  Mic,
  FileText,
  Activity,
  Layers,
  Cpu,
  Brain,
  Bot,
  Car,
  HeartPulse,
  Globe2,
  CheckCircle,
  Network,
  Workflow,
  RefreshCw,
  Database,
  Search,
  Users
} from "lucide-react";

export function DataAnnotation() {
  const [activeModality, setActiveModality] = useState(0);

  const MODALITIES = [
    {
      title: "Image Annotation",
      shortDesc: "Fine-grained visual labeling for perception-heavy AI systems.",
      longDesc: "Support bounding boxes, polygons, ellipse tools, pseudo-3D, keypoints, pose, and continuous-frame image understanding for structured vision tasks.",
      tags: ["Bounding Box", "Polygon", "Pseudo-3D", "Keypoints", "Pose", "Continuous Frames"],
      icon: ImageIcon,
      image: "https://images.unsplash.com/photo-1772053968247-66482bdc77b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMHZpc2lvbiUyMGltYWdlJTIwYm91bmRpbmclMjBib3glMjBhbm5vdGF0aW9ufGVufDF8fHx8MTc3NDgzMzc1NXww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "Video Annotation",
      shortDesc: "Temporal annotation for events, actions, and sequence understanding.",
      longDesc: "Support keyframes, clip-level attributes, temporal segmentation, event tagging, and action-oriented labeling for video-based AI workflows.",
      tags: ["Keyframes", "Temporal Segmentation", "Clip Attributes", "Event Tagging", "Action Understanding"],
      icon: Video,
      image: "https://images.unsplash.com/photo-1698247291654-4aeeee0330ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMGVkaXRpbmclMjB0aW1lbGluZSUyMHRlbXBvcmFsJTIwYW5hbHlzaXMlMjBhaXxlbnwxfHx8fDE3NzQ4MzM3NTV8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "Point Cloud Annotation",
      shortDesc: "Precise 3D labeling for spatially complex machine perception.",
      longDesc: "Support 3D cuboids, 2D/3D fusion, point cloud segmentation, 3D polygons, 4D point cloud tasks, and spatial attribute editing for perception systems.",
      tags: ["3D Cuboids", "Point Cloud Segmentation", "Fusion", "3D Polygons", "4D Labeling"],
      icon: Box,
      image: "https://images.unsplash.com/photo-1748723594319-142e211b46a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzZCUyMGxpZGFyJTIwcG9pbnQlMjBjbG91ZCUyMGRhdGElMjB2aXN1YWxpemF0aW9ufGVufDF8fHx8MTc3NDgzMzc1NXww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "Speech Annotation",
      shortDesc: "Structured speech workflows for ASR, TTS, and multilingual voice AI.",
      longDesc: "Support speech transcription, segmentation, phoneme labeling, emotion tagging, intent-related voice labeling, and production-ready speech datasets.",
      tags: ["ASR", "TTS", "Segmentation", "Phonemes", "Emotion", "Multilingual Speech"],
      icon: Mic,
      image: "https://images.unsplash.com/photo-1736176421274-546a4eaf57d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGVlY2glMjB3YXZlZm9ybSUyMGF1ZGlvJTIwYW5hbHlzaXMlMjBzcGVjdHJvZ3JhbXxlbnwxfHx8fDE3NzQ4MzM3NTV8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "NLP Annotation",
      shortDesc: "Semantic annotation for retrieval, QA, and language understanding systems.",
      longDesc: "Support token labeling, POS tagging, similarity annotation, intent recognition, entity labeling, and structured semantic workflows for language AI.",
      tags: ["Token Labeling", "POS", "Similarity", "Intent", "Entity", "Semantic Structure"],
      icon: FileText,
      image: "https://images.unsplash.com/photo-1650234083227-74c0700b295a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmFsJTIwbGFuZ3VhZ2UlMjBwcm9jZXNzaW5nJTIwdGV4dCUyMGRhdGElMjBuZXR3b3JrfGVufDF8fHx8MTc3NDgzMzc1NXww&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ];

  return (
    <div className="bg-[#0A0A0A] min-h-screen text-[#E8E7EF] selection:bg-[#8B5CF6]/30 font-['Poppins'] overflow-x-hidden">
      {/* 1. Hero */}
      <section id="hero-data-annotation" className={heroSection}>
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(139,92,246,0.15)_0%,transparent_70%)] blur-[120px]"></div>
          <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(217,70,239,0.1)_0%,transparent_70%)] blur-[100px]"></div>
        </div>

        <div className={`${heroContainer} relative z-10`}>
          <div id="hero-left-data-annotation" className={heroLeftCol}>
            
            <h1 className="text-[48px] md:text-[56px] leading-[1.1] font-bold tracking-tight text-white mb-[24px]">
              Multimodal Annotation Built for<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] via-[#D946EF] to-[#FFFFFF]">
                Complex AI Workflows
              </span>
            </h1>
            
            <p className="text-[20px] leading-[1.6] text-[#9CA3AF] mb-[32px]">
              Unify image, video, point cloud, speech, and language annotation in one production system — combining AI pre-labeling, human refinement, and multi-stage quality control for high-stakes AI applications.
            </p>

            <div className="flex flex-wrap gap-[12px] mb-[48px]">
              {["Image", "Video", "Point Cloud", "Speech", "NLP"].map(tag => (
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
              id="hero-img-data-annotation"
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwbXVsdGltb2RhbCUyMGFpJTIwaW50ZXJmYWNlJTIwZGF0YSUyMHZpc3VhbGl6YXRpb258ZW58MXx8fHwxNzc0ODMzNzU1fDA&ixlib=rb-4.1.0&q=80&w=450&h=648"
              alt="Multimodal Interface"
              className={heroImage}
            />
            {/* Overlay UI elements simulating multimodal interface */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0a0a0a] via-transparent to-transparent opacity-80" />
            <div className="relative z-10 w-[80%] h-[80%] border border-[#8b5cf6]/40 rounded-[16px] bg-[#0a0a0a]/50 backdrop-blur-sm p-[24px] flex flex-col gap-[16px] overflow-hidden">
              <div className="flex justify-between items-center border-b border-white/10 pb-[12px]">
                <div className="flex gap-[8px]">
                  <div className="w-[12px] h-[12px] rounded-full bg-red-500/80" />
                  <div className="w-[12px] h-[12px] rounded-full bg-yellow-500/80" />
                  <div className="w-[12px] h-[12px] rounded-full bg-green-500/80" />
                </div>
                <div className="text-[12px] font-mono text-[#8b5cf6]">MULTIMODAL_WORKSPACE</div>
              </div>
              <div className="flex-1 grid grid-cols-2 gap-[16px]">
                <div className="bg-white/5 rounded-[8px] border border-white/10 flex items-center justify-center p-[16px] relative overflow-hidden">
                   <div className="absolute inset-0 border border-[#8b5cf6] border-dashed opacity-50 m-[20px]" />
                   <ImageIcon className="text-[#8b5cf6] opacity-70" size={32} />
                </div>
                <div className="bg-white/5 rounded-[8px] border border-white/10 flex items-end p-[16px]">
                   <div className="w-full flex gap-[2px] items-end h-[40px]">
                     {[...Array(15)].map((_, i) => (
                       <div key={i} className="flex-1 bg-[#d946ef] rounded-t-sm" style={{ height: `${Math.random() * 100}%`, opacity: Math.random() * 0.5 + 0.3 }} />
                     ))}
                   </div>
                </div>
                <div className="col-span-2 bg-white/5 rounded-[8px] border border-white/10 p-[12px] flex items-center gap-[12px]">
                   <div className="w-[40px] h-[24px] bg-[#8b5cf6]/30 rounded-[4px]" />
                   <div className="w-[80px] h-[24px] bg-[#8b5cf6]/20 rounded-[4px]" />
                   <div className="flex-1 h-[2px] bg-white/10 relative">
                     <div className="absolute top-1/2 left-1/3 w-[10px] h-[10px] bg-[#d946ef] rounded-full -translate-y-1/2 shadow-[0_0_10px_#d946ef]" />
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Why This Annotation Layer Is Different */}
      <section className="relative py-[120px] border-b border-[rgba(255,255,255,0.05)] bg-[#0e0e0e]">
        <div className="w-full max-w-[1200px] mx-auto">
          <div className="text-center mb-[80px] max-w-[800px] mx-auto">
            <h2 className="text-[40px] md:text-[48px] font-bold text-white mb-[24px]">Why This Annotation Layer Is Different</h2>
            <p className="text-[20px] text-[#9CA3AF]">
              The value of annotation here is not just task execution. It comes from one system working across modalities, AI-assisted workflows, domain-specific complexity, and a direct connection to training and operations.
            </p>
          </div>

          <div className="relative flex flex-col lg:flex-row items-center justify-center gap-[64px] min-h-[500px]">
            {/* Center Node */}
            <div className="relative z-10 w-[240px] h-[240px] rounded-full bg-gradient-to-tr from-[#8B5CF6]/20 to-[#D946EF]/20 border-[2px] border-[#8B5CF6]/50 flex items-center justify-center shadow-[0_0_80px_rgba(139,92,246,0.3)] backdrop-blur-xl">
              <div className="absolute inset-[10px] border border-white/10 rounded-full border-dashed animate-[spin_20s_linear_infinite]" />
              <div className="absolute inset-[30px] bg-[#161616] rounded-full flex flex-col items-center justify-center gap-[12px] shadow-inner">
                 <Layers className="text-[#8B5CF6]" size={48} />
                 <span className="font-bold text-[14px] tracking-wider uppercase text-white">Platform Core</span>
              </div>
            </div>

            {/* Surrounding blocks (Absolute on lg, grid on sm) */}
            <div className="absolute inset-0 hidden lg:block pointer-events-none">
              {/* Top Left */}
              <div className="absolute top-[10%] left-[10%] w-[320px] bg-[#161616] border border-white/10 rounded-[16px] p-[24px] shadow-2xl pointer-events-auto">
                <div className="w-[40px] h-[40px] rounded-[8px] bg-[rgba(139,92,246,0.1)] flex items-center justify-center mb-[16px]">
                  <Activity className="text-[#8B5CF6]" size={20} />
                </div>
                <h3 className="text-white font-bold text-[18px] mb-[8px]">1. One system across five modalities</h3>
                <p className="text-[#9CA3AF] text-[14px] leading-relaxed">Support image, video, point cloud, speech, and NLP annotation inside one production environment.</p>
              </div>
              
              {/* Top Right */}
              <div className="absolute top-[10%] right-[10%] w-[320px] bg-[#161616] border border-white/10 rounded-[16px] p-[24px] shadow-2xl pointer-events-auto">
                <div className="w-[40px] h-[40px] rounded-[8px] bg-[rgba(139,92,246,0.1)] flex items-center justify-center mb-[16px]">
                  <Cpu className="text-[#8B5CF6]" size={20} />
                </div>
                <h3 className="text-white font-bold text-[18px] mb-[8px]">2. AI-assisted production</h3>
                <p className="text-[#9CA3AF] text-[14px] leading-relaxed">Use AI pre-labeling and human refinement to improve speed without giving up control.</p>
              </div>

              {/* Bottom Left */}
              <div className="absolute bottom-[10%] left-[10%] w-[320px] bg-[#161616] border border-white/10 rounded-[16px] p-[24px] shadow-2xl pointer-events-auto">
                <div className="w-[40px] h-[40px] rounded-[8px] bg-[rgba(139,92,246,0.1)] flex items-center justify-center mb-[16px]">
                  <Brain className="text-[#8B5CF6]" size={20} />
                </div>
                <h3 className="text-white font-bold text-[18px] mb-[8px]">3. Built for complex tasks</h3>
                <p className="text-[#9CA3AF] text-[14px] leading-relaxed">Support sequence-heavy, spatial, semantic, and multimodal labeling workflows rather than only simple static tasks.</p>
              </div>

              {/* Bottom Right */}
              <div className="absolute bottom-[10%] right-[10%] w-[320px] bg-[#161616] border border-white/10 rounded-[16px] p-[24px] shadow-2xl pointer-events-auto">
                <div className="w-[40px] h-[40px] rounded-[8px] bg-[rgba(139,92,246,0.1)] flex items-center justify-center mb-[16px]">
                  <Network className="text-[#8B5CF6]" size={20} />
                </div>
                <h3 className="text-white font-bold text-[18px] mb-[8px]">4. Connected to platform workflows</h3>
                <p className="text-[#9CA3AF] text-[14px] leading-relaxed">Tie annotation into ingestion, governance, model training, and operational monitoring.</p>
              </div>
              
              {/* Connecting lines */}
              <svg className="absolute inset-0 w-full h-full -z-10 opacity-30" pointerEvents="none">
                <path d="M 30% 25% L 50% 50%" stroke="#8B5CF6" strokeWidth="2" strokeDasharray="5,5" />
                <path d="M 70% 25% L 50% 50%" stroke="#8B5CF6" strokeWidth="2" strokeDasharray="5,5" />
                <path d="M 30% 75% L 50% 50%" stroke="#8B5CF6" strokeWidth="2" strokeDasharray="5,5" />
                <path d="M 70% 75% L 50% 50%" stroke="#8B5CF6" strokeWidth="2" strokeDasharray="5,5" />
              </svg>
            </div>

            {/* Mobile layout */}
            <div className="lg:hidden flex flex-col gap-[24px] w-full mt-[40px]">
              {[
                { title: "One system across five modalities", desc: "Support image, video, point cloud, speech, and NLP annotation inside one production environment.", icon: Activity },
                { title: "AI-assisted production", desc: "Use AI pre-labeling and human refinement to improve speed without giving up control.", icon: Cpu },
                { title: "Built for complex tasks", desc: "Support sequence-heavy, spatial, semantic, and multimodal labeling workflows rather than only simple static tasks.", icon: Brain },
                { title: "Connected to platform workflows", desc: "Tie annotation into ingestion, governance, model training, and operational monitoring.", icon: Network }
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

      {/* 3. Supported Modalities */}
      <section className="py-[120px] bg-[#0A0A0A] border-b border-[rgba(255,255,255,0.05)] relative overflow-hidden">
        <div className="absolute right-[-10%] top-[20%] w-[600px] h-[600px] bg-[#8B5CF6]/5 blur-[150px] rounded-full pointer-events-none" />
        <div className="w-full max-w-[1200px] mx-auto relative z-10">
          <div className="mb-[64px]">
            <h2 className="text-[40px] md:text-[48px] font-bold text-white mb-[24px]">Supported Modalities</h2>
            <p className="text-[20px] text-[#9CA3AF] max-w-[800px]">
              A single annotation layer that spans visual, spatial, audio, and language data.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-[48px]">
            {/* Tabs List */}
            <div className="lg:w-[350px] flex flex-col gap-[12px] shrink-0">
              {MODALITIES.map((mod, idx) => {
                const isActive = activeModality === idx;
                const Icon = mod.icon;
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveModality(idx)}
                    className={`flex items-center gap-[16px] w-full text-left p-[20px] rounded-[16px] transition-all duration-300 border ${
                      isActive 
                        ? 'bg-[#161616] border-[#8B5CF6]/40 shadow-[0_0_20px_rgba(139,92,246,0.1)]' 
                        : 'bg-transparent border-transparent hover:bg-white/5'
                    }`}
                  >
                    <div className={`p-[10px] rounded-[10px] ${isActive ? 'bg-[#8B5CF6]/20 text-[#8B5CF6]' : 'bg-white/5 text-[#9CA3AF]'}`}>
                      <Icon size={24} />
                    </div>
                    <span className={`font-bold text-[18px] ${isActive ? 'text-white' : 'text-[#9CA3AF]'}`}>
                      {mod.title}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Tab Content */}
            <div className="flex-1 bg-[#161616] border border-white/10 rounded-[24px] overflow-hidden min-h-[500px] relative shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeModality}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 flex flex-col h-full"
                >
                  <div className="h-[250px] w-full relative overflow-hidden bg-black">
                    <img 
                      src={MODALITIES[activeModality].image} 
                      alt={MODALITIES[activeModality].title}
                      className="absolute inset-0 w-full h-full object-cover opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#161616] to-transparent" />
                  </div>
                  <div className="p-[40px] flex flex-col flex-1 z-10 relative">
                    <h3 className="text-[32px] font-bold text-white mb-[12px]">{MODALITIES[activeModality].title}</h3>
                    <p className="text-[#8B5CF6] font-medium text-[18px] mb-[20px]">{MODALITIES[activeModality].shortDesc}</p>
                    <p className="text-[#9CA3AF] text-[16px] leading-[1.8] mb-[32px] max-w-[800px]">
                      {MODALITIES[activeModality].longDesc}
                    </p>
                    <div className="mt-auto flex flex-wrap gap-[12px]">
                      {MODALITIES[activeModality].tags.map(tag => (
                        <div key={tag} className="px-[16px] py-[8px] bg-white/5 border border-white/10 rounded-full text-[14px] text-[#E8E7EF]">
                          {tag}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Automation + Quality Architecture */}
      <section className="py-[120px] bg-[#0A0A0A] border-b border-[rgba(255,255,255,0.05)] relative">
        <div className="w-full max-w-[1200px] mx-auto">
          <div className="text-center mb-[80px] max-w-[800px] mx-auto">
            <h2 className="text-[40px] md:text-[48px] font-bold text-white mb-[24px]">Automation and Quality Control Built Into the Workflow</h2>
            <p className="text-[20px] text-[#9CA3AF]">
              The product combines AI pre-labeling, human refinement, and multi-stage review into one production loop — improving efficiency while keeping annotation quality under control.
            </p>
          </div>

          <div className="relative flex flex-col md:flex-row items-center justify-center gap-[40px] max-w-[1200px] mx-auto">
            {/* Loop Visual */}
            <div className="flex-1 flex flex-col gap-[32px] relative z-10">
              <div className="bg-[#161616] border border-[#8B5CF6]/30 rounded-[24px] p-[32px] relative overflow-hidden group">
                 <div className="absolute inset-0 bg-gradient-to-r from-[#8B5CF6]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                 <h4 className="text-white font-bold text-[20px] mb-[12px] flex items-center gap-[12px]"><Bot className="text-[#8B5CF6]" /> AI pre-labeling</h4>
                 <p className="text-[#9CA3AF] text-[16px]">Initial labels generated automatically to reduce repetitive manual work.</p>
              </div>
              <div className="bg-[#161616] border border-white/10 rounded-[24px] p-[32px] relative overflow-hidden">
                 <h4 className="text-white font-bold text-[20px] mb-[12px] flex items-center gap-[12px]"><Users className="text-[#D946EF]" /> Human refinement</h4>
                 <p className="text-[#9CA3AF] text-[16px]">Experts correct, refine, and verify outputs where precision matters.</p>
              </div>
            </div>

            <div className="shrink-0 relative w-[200px] h-[200px] flex items-center justify-center">
               <motion.div 
                 animate={{ rotate: 360 }}
                 transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                 className="absolute inset-0 border-[4px] border-[#8B5CF6]/30 border-dashed rounded-full"
               />
               <RefreshCw size={64} className="text-[#8B5CF6]" />
            </div>

            <div className="flex-1 flex flex-col gap-[32px] relative z-10">
              <div className="bg-[#161616] border border-white/10 rounded-[24px] p-[32px] relative overflow-hidden">
                 <h4 className="text-white font-bold text-[20px] mb-[12px] flex items-center gap-[12px]"><CheckCircle className="text-green-400" /> Multi-stage quality checks</h4>
                 <p className="text-[#9CA3AF] text-[16px]">Validation layers ensure consistency across labels, attributes, and structure.</p>
              </div>
              <div className="bg-[#161616] border border-white/10 rounded-[24px] p-[32px] relative overflow-hidden">
                 <h4 className="text-white font-bold text-[20px] mb-[12px] flex items-center gap-[12px]"><Workflow className="text-[#8B5CF6]" /> Better data improves the system</h4>
                 <p className="text-[#9CA3AF] text-[16px]">As more data is processed, the platform's AI-assisted production improves over time.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Built for Domain Complexity */}
      <section className="py-[120px] bg-[#0A0A0A] border-b border-[rgba(255,255,255,0.05)]">
        <div className="w-full max-w-[1200px] mx-auto">
          <div className="mb-[80px]">
            <h2 className="text-[40px] md:text-[48px] font-bold text-white mb-[24px]">Built for Domain Complexity</h2>
            <p className="text-[20px] text-[#9CA3AF] max-w-[800px]">
              Different industries demand different kinds of annotation logic. The product is designed to support not just more data, but more complex data.
            </p>
          </div>

          <div className="flex flex-col gap-[48px]">
            {[
              {
                title: "Autonomous Driving",
                icon: Car,
                short: "Perception, planning, and scene understanding.",
                desc: "Support continuous-frame 3D perception, free space, sensor fusion, road structure, VLA-oriented scene understanding, and behavior labeling.",
                img: "https://images.unsplash.com/photo-1546440554-353aee3985b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvbm9tb3VzJTIwZHJpdmluZyUyMHNlbnNvciUyMGZ1c2lvbiUyMHN0cmVldCUyMHZpZXd8ZW58MXx8fHwxNzc0ODMzNzU2fDA&ixlib=rb-4.1.0&q=80&w=1080"
              },
              {
                title: "Embodied AI",
                icon: Bot,
                short: "Action sequences and robot perception.",
                desc: "Support multimodal annotation for action sequences, robot perception, 2D–3D alignment, scene semantics, and physically grounded task understanding.",
                img: "https://images.unsplash.com/photo-1774229637247-3cd45219826c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZHZhbmNlZCUyMHJvYm90aWNzJTIwcm9ib3QlMjBhcm0lMjBtYW51ZmFjdHVyaW5nfGVufDF8fHx8MTc3NDgzMzc1Nnww&ixlib=rb-4.1.0&q=80&w=1080"
              },
              {
                title: "Healthcare AI",
                icon: HeartPulse,
                short: "Clinically constrained structure.",
                desc: "Support medically constrained annotation across imaging, NLP, consultation workflows, structured reasoning, and clinically sensitive datasets.",
                img: "https://images.unsplash.com/photo-1758691463110-697a814b2033?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwaW1hZ2luZyUyMG1riSUyMHNjYW4lMjBkYXRhJTIwYW5hbHlzaXN8ZW58MXx8fHwxNzc0ODMzNzYz&ixlib=rb-4.1.0&q=80&w=1080"
              }
            ].map((domain, i) => (
              <div key={i} className={`flex flex-col ${i % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-[48px] items-center bg-[#161616] border border-white/5 rounded-[32px] overflow-hidden group`}>
                <div className="md:w-1/2 h-[400px] w-full relative overflow-hidden">
                  <img src={domain.img} alt={domain.title} className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#161616] via-transparent to-transparent opacity-80" />
                </div>
                <div className="md:w-1/2 p-[48px] flex flex-col gap-[24px]">
                  <div className="w-[56px] h-[56px] rounded-[16px] bg-[#8B5CF6]/10 flex items-center justify-center border border-[#8B5CF6]/30">
                    <domain.icon className="text-[#8B5CF6]" size={28} />
                  </div>
                  <h3 className="text-[32px] font-bold text-white">{domain.title}</h3>
                  <p className="text-[#8B5CF6] font-medium text-[18px]">{domain.short}</p>
                  <p className="text-[#9CA3AF] text-[16px] leading-[1.8]">{domain.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Connected to the Platform */}
      <section className="py-[120px] bg-[#0A0A0A] border-b border-[rgba(255,255,255,0.05)]">
        <div className="w-full max-w-[1200px] mx-auto">
          <div className="text-center mb-[80px] max-w-[800px] mx-auto">
            <h2 className="text-[40px] md:text-[48px] font-bold text-white mb-[24px]">Connected to Ingestion, Training, and Operations</h2>
            <p className="text-[20px] text-[#9CA3AF]">
              Annotation is not isolated. It is connected to data intake, governance, project setup, training workflows, and operational visibility inside the broader platform.
            </p>
          </div>

          <div className="relative w-full max-w-[900px] mx-auto h-[600px] flex items-center justify-center mt-[40px]">
            {/* Center Node */}
            <div className="absolute z-20 w-[180px] h-[180px] bg-[#8B5CF6] rounded-[24px] shadow-[0_0_60px_rgba(139,92,246,0.5)] flex flex-col items-center justify-center gap-[16px]">
              <Layers size={48} className="text-white" />
              <span className="font-bold text-white text-[18px]">Annotation</span>
            </div>

            {/* Surrounding Nodes */}
            {[
              { label: "Data Ingestion & Standardization", icon: Database, pos: "top-[0%] left-[50%] -translate-x-1/2" },
              { label: "Privacy / Governance", icon: Search, pos: "top-[25%] right-[5%]" },
              { label: "Project Creation", icon: Workflow, pos: "bottom-[25%] right-[5%]" },
              { label: "Model Training", icon: Brain, pos: "bottom-[0%] left-[50%] -translate-x-1/2" },
              { label: "Data Cockpit / Monitoring", icon: Activity, pos: "bottom-[25%] left-[5%]" },
              { label: "Task & People Management", icon: Users, pos: "top-[25%] left-[5%]" }
            ].map((node, i) => (
              <div key={i} className={`absolute z-10 w-[200px] bg-[#161616] border border-white/10 rounded-[16px] p-[16px] flex flex-col items-center text-center gap-[12px] shadow-xl ${node.pos}`}>
                 <div className="w-[40px] h-[40px] rounded-full bg-[#161616] flex items-center justify-center border border-white/5">
                   <node.icon className="text-[#9CA3AF]" size={20} />
                 </div>
                 <span className="text-[#E8E7EF] font-medium text-[14px] leading-tight">{node.label}</span>
              </div>
            ))}
            
            {/* Connecting SVG */}
            <svg className="absolute inset-0 w-full h-full -z-0 opacity-20 pointer-events-none">
              <circle cx="50%" cy="50%" r="220" stroke="#8B5CF6" strokeWidth="2" fill="none" strokeDasharray="10,10" />
              <line x1="50%" y1="50%" x2="50%" y2="15%" stroke="#8B5CF6" strokeWidth="2" />
              <line x1="50%" y1="50%" x2="50%" y2="85%" stroke="#8B5CF6" strokeWidth="2" />
              <line x1="50%" y1="50%" x2="85%" y2="35%" stroke="#8B5CF6" strokeWidth="2" />
              <line x1="50%" y1="50%" x2="85%" y2="65%" stroke="#8B5CF6" strokeWidth="2" />
              <line x1="50%" y1="50%" x2="15%" y2="35%" stroke="#8B5CF6" strokeWidth="2" />
              <line x1="50%" y1="50%" x2="15%" y2="65%" stroke="#8B5CF6" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </section>

      {/* 7. Global Delivery and Resource Layer */}
      <section className="py-[80px] bg-[#161616] border-b border-[rgba(255,255,255,0.05)]">
        <div className="w-full max-w-[1200px] mx-auto flex flex-col md:flex-row items-center gap-[64px]">
          <div className="md:w-1/2 relative h-[400px] w-full rounded-[24px] overflow-hidden opacity-80">
            <img src="https://images.unsplash.com/photo-1684610529682-553625a1ffed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbG9iYWwlMjB3b3JsZCUyMG1hcCUyMG5ldHdvcmslMjBjb25uZWN0aW9ucyUyMGFic3RyYWN0fGVufDF8fHx8MTc3NDgzMzc1Nnww&ixlib=rb-4.1.0&q=80&w=1080" alt="Global Network" className="w-full h-full object-cover mix-blend-screen" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#161616] to-transparent opacity-60" />
          </div>
          <div className="md:w-1/2 flex flex-col gap-[24px]">
            <div className="flex items-center gap-[12px] mb-[8px]">
              <Globe2 className="text-[#8B5CF6]" size={28} />
              <h2 className="text-[32px] md:text-[40px] font-bold text-white">Global Resources for Scalable Delivery</h2>
            </div>
            <p className="text-[18px] text-[#9CA3AF] mb-[24px]">
              Behind the product is an execution layer designed for scale — including global resource coverage, overseas delivery bases, and flexible staffing across multiple data types.
            </p>
            <ul className="flex flex-col gap-[16px]">
              {[
                "Execution experience across 50+ countries",
                "Dedicated overseas delivery bases",
                "Coverage across Europe, North America, South America, Africa, the Middle East, and Asia",
                "Flexible support across voice, vision, and NLP data services"
              ].map((fact, i) => (
                <li key={i} className="flex items-start gap-[12px]">
                  <CheckCircle className="text-[#8B5CF6] mt-[4px] shrink-0" size={20} />
                  <span className="text-[#E8E7EF] text-[16px] leading-[1.6]">{fact}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 8. Closing CTA */}
      <section className="py-[120px] bg-[#0A0A0A] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(139,92,246,0.15)_0%,transparent_60%)] blur-[100px] pointer-events-none"></div>
        <div className="w-full max-w-[1200px] mx-auto text-center relative z-10 flex flex-col items-center">
          <h2 className="text-[48px] md:text-[56px] font-bold text-white mb-[24px] tracking-tight">
            Ready to Build Better Data, <br/><span className="text-[#8B5CF6]">Not Just More Labels?</span>
          </h2>
          <p className="text-[20px] text-[#9CA3AF] mb-[48px] max-w-[600px]">
            Connect multimodal annotation to quality control, domain expertise, and model improvement in one production platform.
          </p>
          <div className="flex flex-wrap justify-center gap-[24px]">
            <Link to="/contact" className="px-[40px] py-[20px] rounded-[16px] bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] text-white font-bold text-[18px] shadow-[0_10px_30px_rgba(139,92,246,0.3)] hover:shadow-[0_10px_40px_rgba(139,92,246,0.5)] hover:-translate-y-1 transition-all">
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
