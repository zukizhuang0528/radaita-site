import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { Video, Box, Image as ImageIcon, Mic, FileText, ArrowRight, Activity, Crosshair, Brain, LayoutTemplate, Route, Cloud, Shapes, Cuboid, Waypoints, MousePointerClick, Maximize, CheckCircle, Clock, Link as LinkIcon, BoxSelect } from 'lucide-react';

// --- Hero Enhancements ---

export function ParticleTextAnimation() {
  const words = ["Radaita", "Transform complexity into", "AI-ready data"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 pb-[100px]">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          className="relative flex flex-wrap justify-center text-center px-4 max-w-[1200px]"
        >
          {words[index].split(' ').map((word, wIdx) => (
             <span key={wIdx} className="inline-block whitespace-nowrap mx-4">
               {word.split('').map((char, cIdx) => (
                 <motion.span
                   key={cIdx}
                   initial={{ opacity: 0, filter: 'blur(20px)', x: (Math.random() - 0.5) * 300, y: (Math.random() - 0.5) * 300, scale: 0 }}
                   animate={{ opacity: 1, filter: 'blur(0px)', x: 0, y: 0, scale: 1 }}
                   exit={{ opacity: 0, filter: 'blur(20px)', x: (Math.random() - 0.5) * 300, y: (Math.random() - 0.5) * 300, scale: 0 }}
                   transition={{ duration: 1.5, ease: "easeInOut", delay: Math.random() * 0.3 }}
                   className="inline-block text-white font-['Poppins'] font-bold tracking-tight"
                   style={{ 
                     fontSize: index === 0 ? '160px' : '96px',
                     textShadow: '0 0 30px rgba(255, 255, 255, 0.4), 0 0 80px rgba(139, 92, 246, 0.8)'
                   }}
                 >
                   {char === ' ' ? '\u00A0' : char}
                 </motion.span>
               ))}
             </span>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export function FloatingParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {Array.from({ length: 80 }).map((_, i) => {
        const size = Math.random() * 3 + 1; // 1 to 4px
        const isPurple = Math.random() > 0.3;
        const color = isPurple ? '#8B5CF6' : '#D946EF';
        return (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              background: color,
              boxShadow: `0 0 ${size * 4}px ${size}px ${isPurple ? 'rgba(139, 92, 246, 0.4)' : 'rgba(217, 70, 239, 0.3)'}`,
              width: size + 'px',
              height: size + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              opacity: 0,
              filter: `blur(${Math.random() * 1.5}px)`
            }}
            animate={{
              y: [0, Math.random() * -150 - 50],
              x: [0, Math.random() * 80 - 40],
              opacity: [0, Math.random() * 0.5 + 0.2, 0],
            }}
            transition={{
              duration: Math.random() * 20 + 20,
              repeat: Infinity,
              ease: 'linear',
              delay: Math.random() * 20,
            }}
          />
        );
      })}
    </div>
  );
}

export function HeroCTAButton() {
  return (
    <div className="relative w-full h-[55.81px] rounded-[30504000px] group cursor-pointer overflow-hidden border-[0.909px] border-[rgba(255,255,255,0.7)] bg-[rgba(10,10,10,0.3)] backdrop-blur-sm">
      {/* Subtle purple neon motion inside the button */}
      <motion.div 
        className="absolute w-[180px] h-[100px] bg-[#8b5cf6] rounded-full pointer-events-none z-0"
        style={{ filter: 'blur(30px)', opacity: 0.2 }}
        animate={{
          x: [-80, 350, -80],
          y: [-20, 20, -20]
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Button Content mapped to exact figma positions */}
      <div className="absolute h-[26.989px] left-[27.9px] top-[14.4px] w-[306.932px] z-10 pointer-events-none">
        <p className="font-['Poppins'] font-medium leading-[27px] text-[18px] text-center text-white whitespace-nowrap">
          Accelerate your AI transformation
        </p>
      </div>

      <div className="absolute flex items-center justify-center left-[348.32px] w-[53.991px] h-[53.991px] top-[0.91px] rounded-[30504000px] border-[0.909px] border-[rgba(255,255,255,0.7)] bg-[rgba(255,255,255,0.05)] group-hover:bg-[rgba(255,255,255,0.15)] transition-colors z-10">
        <ArrowRight size={22} className="text-white" strokeWidth={2.2} />
      </div>
    </div>
  );
}

export function MarqueeContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="absolute h-[35.994px] left-0 top-[5.99px] w-[1386.023px] overflow-hidden pointer-events-none">
      <motion.div 
        className="flex h-full w-max"
        animate={{ x: [0, -1386.023] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      >
        <div className="relative w-[1386.023px] h-full flex-shrink-0 flex items-center">
          {children}
        </div>
        <div className="relative w-[1386.023px] h-full flex-shrink-0 flex items-center">
          {children}
        </div>
      </motion.div>
    </div>
  );
}

// --- Core Capabilities ---

const CORE_CAPABILITIES = [
  {
    title: "Multimodal Video Annotation",
    shortDesc: "Temporal understanding across frames, events, and multi-signal context.",
    longDesc: "Build structured video datasets for behavior analysis, event segmentation, sequence understanding, and multimodal model training. Supports frame-level review, keyframe labeling, temporal segmentation, and scene-aware annotation across complex workflows.",
    tags: ["Temporal Segmentation", "Event Labeling", "Sequence Understanding", "Behavior Analysis", "Multimodal Context"],
    icon: Video,
    image: "https://images.unsplash.com/photo-1731311982559-374855a21f8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwdGVjaG5vbG9neSUyMGFic3RyYWN0JTIwdmlkZW8lMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzc0ODM5MDQ3fDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    title: "Point Cloud Annotation",
    shortDesc: "Precise 3D structure understanding for spatially complex environments.",
    longDesc: "Support 3D cuboids, point cloud segmentation, free-space understanding, spatial alignment, and multi-frame 3D annotation for autonomous systems, robotics, and perception-heavy AI models.",
    tags: ["3D Cuboids", "Point Cloud Segmentation", "Free Space", "Spatial Alignment", "Multi-Frame 3D"],
    icon: Box,
    image: "https://images.unsplash.com/photo-1748723594319-142e211b46a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwM2QlMjBhYnN0cmFjdCUyMHBvaW50JTIwY2xvdWR8ZW58MXx8fHwxNzc0ODM5MDU5fDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    title: "Image Annotation",
    shortDesc: "High-precision visual labeling for structured perception tasks.",
    longDesc: "Support bounding boxes, polygons, semantic segmentation, keypoint / pose annotation, and fine-grained image understanding across large-scale training pipelines for image-based AI systems.",
    tags: ["Bounding Box", "Polygon", "Semantic Segmentation", "Keypoints", "Fine-Grained Vision"],
    icon: ImageIcon,
    image: "https://images.unsplash.com/photo-1695902173528-0b15104c4554?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwY29tcHV0ZXIlMjB2aXNpb24lMjBhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlfGVufDF8fHx8MTc3NDgzOTA3Mnww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    title: "Speech Annotation",
    shortDesc: "High-quality speech data workflows for ASR, TTS, and multilingual voice AI.",
    longDesc: "Support speech-to-text, text-to-speech, intent / semantic labeling, multilingual voice resource construction, and quality-controlled speech datasets across real deployment environments.",
    tags: ["ASR", "TTS", "Multilingual Speech", "Intent Labeling", "Audio QA"],
    icon: Mic,
    image: "https://images.unsplash.com/photo-1767479524565-b1b78fa2bd24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwYXVkaW8lMjB3YXZlZm9ybSUyMGZyZXF1ZW5jeXxlbnwxfHx8fDE3NzQ4MzkwODJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    title: "Text Annotation",
    shortDesc: "Structured semantic data for LLM training, evaluation, and alignment.",
    longDesc: "Support QA construction, multi-turn dialogue annotation, rewriting, summarization, preference labeling, evaluation, and alignment data production for LLM and semantic AI workflows.",
    tags: ["QA", "Dialogue", "Rewrite", "Evaluation", "Alignment"],
    icon: FileText,
    image: "https://images.unsplash.com/photo-1649451844813-3130d6f42f8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwY29kZSUyMHRleHQlMjBkYXRhYmFzZSUyMHRlcm1pbmFsfGVufDF8fHx8MTc3NDgzOTA4Nnww&ixlib=rb-4.1.0&q=80&w=1080"
  }
];

export function EnhancedCoreCapabilities1({ bgImage }: { bgImage: string }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % CORE_CAPABILITIES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isHovered]);

  const activeContent = CORE_CAPABILITIES[activeIndex];

  return (
    <div 
      className="h-[700px] relative rounded-[24px] shrink-0 w-full" 
      data-name="Core Capabilities"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[24px] overflow-hidden">
        <div className="absolute bg-[#161616] inset-0 rounded-[24px] transition-colors duration-1000" />
        <motion.img 
          key={activeIndex}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ duration: 1 }}
          alt="" 
          className="absolute max-w-none object-cover rounded-[24px] size-full" 
          src={activeContent.image} 
        />
      </div>
      
      <div className="overflow-clip rounded-[inherit] size-full relative z-10">
        <div className="content-stretch flex flex-col items-start justify-between p-[36px] relative size-full">
          
          {/* Main Top Area */}
          <div className="relative shrink-0 w-full h-[256px]">
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="content-stretch flex flex-col gap-[16px] items-start pl-[72px] pr-[300px] py-[40px] relative w-full"
              >
                <p className="font-['Poppins'] font-bold leading-[26px] not-italic relative shrink-0 text-[24px] text-white whitespace-nowrap">
                  {activeContent.title}
                </p>
                <p className="font-['Poppins'] font-normal leading-[20px] not-italic relative shrink-0 text-[#e8e7ef] text-[14px] w-full">
                  {activeContent.longDesc}
                </p>
                <div className="content-stretch flex flex-wrap gap-[8px] items-start relative shrink-0 w-full">
                  {activeContent.tags.map((tag, i) => (
                    <div key={i} className="bg-[rgba(139,92,246,0.2)] content-stretch flex items-center justify-center px-[8px] py-[0px] relative rounded-[30504000px] shrink-0 border border-[rgba(139,92,246,0.8)] border-solid">
                      <p className="font-['Poppins'] font-light leading-[20px] not-italic relative shrink-0 text-[#e8e7ef] text-[14px] whitespace-nowrap">
                        {tag}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Bottom Tabs Row */}
          <div className="content-stretch flex gap-[24px] items-stretch justify-center relative shrink-0 w-full h-[264px]">
            {CORE_CAPABILITIES.map((cap, i) => {
              const isActive = i === activeIndex;
              const Icon = cap.icon;
              return (
                <div 
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`flex-[1_0_0] min-w-0 relative rounded-[18px] cursor-pointer transition-all duration-500 overflow-hidden ${
                    isActive ? 'bg-[#161616] border border-[rgba(139,92,246,0.8)] shadow-[0px_8px_32px_0px_rgba(139,92,246,0.2)]' : 'bg-[rgba(22,22,22,0.5)] border border-[rgba(255,255,255,0.05)] hover:bg-[#161616]'
                  }`}
                >
                  <div className="content-stretch flex flex-col items-start pt-[19px] pb-[19px] px-[32px] relative w-full h-full">
                    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
                      <div className="relative shrink-0 w-[64px] h-[64px] flex items-center justify-center">
                        <svg className="absolute inset-0 w-full h-full pointer-events-none" fill="none" viewBox="0 0 64 64">
                          <path 
                            d="M32 4L56 18V46L32 60L8 46V18L32 4Z" 
                            fill="rgba(139, 92, 246, 0.1)"
                            stroke={isActive ? "rgba(139, 92, 246, 0.6)" : "transparent"} 
                            strokeWidth="2" 
                            strokeLinejoin="round" 
                          />
                        </svg>
                        <Icon className="size-[32px] text-[#8B5CF6] z-10 relative" strokeWidth={2} />
                      </div>
                      <div className="content-stretch flex items-start justify-start relative shrink-0 w-full">
                        <p className={`font-['Poppins'] font-bold leading-[24px] not-italic relative text-[16px] transition-colors w-full whitespace-normal break-words ${isActive ? 'text-white' : 'text-[#e8e7ef]'}`}>
                          {cap.title.split(' ')[0]} Annotation
                        </p>
                      </div>
                    </div>
                    <div className="content-stretch flex items-start relative shrink-0 w-full mt-[24px]">
                      <p className={`font-['Poppins'] font-normal leading-[22px] not-italic relative text-[14px] transition-colors line-clamp-3 ${isActive ? 'text-[#9ca3af]' : 'text-[#9CA3AF]'}`}>
                        {cap.shortDesc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-8 border-[rgba(255,255,255,0.05)] border-solid inset-[-8px] pointer-events-none rounded-[32px]" />
    </div>
  );
}

// --- Medical Section Tabs ---
export const MEDICAL_TABS = [
  {
    title: "Medical Imaging Annotation",
    text: "Annotate lesions, organs, and structures with pixel-level precision.",
    icon: Activity,
    image: "https://images.unsplash.com/photo-1771774982253-adcc7715b8f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwYWJzdHJhY3QlMjBtZWRpY2FsJTIwaW1hZ2luZ3xlbnwxfHx8fDE3NzQ4NjI0NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    title: "Clinical NLP & Knowledge Graph",
    text: "Turn clinical text into structured entities, relations, and computable knowledge.",
    icon: FileText,
    image: "https://images.unsplash.com/photo-1620933967796-53cc2b175b6c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwY2xpbmljYWwlMjBhYnN0cmFjdCUyMGRhdGElMjBkb2N1bWVudCUyMHRleHR8ZW58MXx8fHwxNzc0ODYyNDQ4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    title: "Clinical Dialogue Generation",
    text: "Generate high-fidelity doctor–patient dialogue data for training and evaluation.",
    icon: Mic,
    image: "https://images.unsplash.com/photo-1758691463198-dc663b8a64e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwcHJvZmVzc2lvbmFsJTIwY29uc3VsdGF0aW9ufGVufDF8fHx8MTc3NDc5NTQ4NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  }
];

export function EnhancedMedicalTabs({ defaultImage }: { defaultImage: string }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="content-stretch flex gap-[48px] items-center justify-center relative shrink-0 w-full h-[600px] mt-[72px]">
      {/* Left Tabs */}
      <div className="w-[480px] flex flex-col gap-[16px]">
        {MEDICAL_TABS.map((tab, i) => {
          const isActive = i === activeTab;
          const Icon = tab.icon;
          return (
            <div 
              key={i}
              onClick={() => setActiveTab(i)}
              className={`p-[24px] rounded-[16px] cursor-pointer transition-all duration-300 flex gap-[20px] items-start border ${
                isActive 
                  ? 'bg-[#161616] border-[rgba(139,92,246,0.5)] shadow-[0px_8px_24px_rgba(0,0,0,0.24)]' 
                  : 'bg-transparent border-transparent hover:bg-[rgba(255,255,255,0.02)]'
              }`}
            >
              <div className={`mt-1 shrink-0 p-[10px] rounded-[10px] ${isActive ? 'bg-[rgba(139,92,246,0.15)] text-[#8b5cf6]' : 'bg-[rgba(255,255,255,0.05)] text-[#9ca3af]'}`}>
                <Icon size={24} strokeWidth={isActive ? 2.5 : 1.5} />
              </div>
              <div className="flex flex-col gap-[8px]">
                <h4 className={`font-['Poppins'] font-bold text-[20px] leading-[28px] ${isActive ? 'text-white' : 'text-[#e8e7ef]'}`}>
                  {tab.title}
                </h4>
                <AnimatePresence>
                  {isActive && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="font-['Poppins'] font-light text-[16px] leading-[24px] text-[#9ca3af] mt-[4px]">
                        {tab.text}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          );
        })}
      </div>

      {/* Right Content */}
      <div className="flex-[1_0_0] h-[580px] bg-[#161616] rounded-[24px] shadow-[0px_0px_50px_0px_rgba(139,92,246,0.15)] p-[24px] overflow-hidden relative">
        <div className="bg-black w-full h-full rounded-[18px] overflow-hidden relative border border-[rgba(255,255,255,0.05)]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <img src={MEDICAL_TABS[activeTab].image || defaultImage} alt="" className="absolute inset-0 w-full h-full object-cover" />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

// --- Embodied AI Floating Nodes ---

const EMBODIED_NODES = [
  { title: 'Interactive Segmentation', desc: 'Trigger precise segmentation with minimal point-based input.' },
  { title: 'Context-Aware Refinement', desc: 'Expand segmentation intelligently using surrounding visual context.' },
  { title: 'Human Validation', desc: 'Use fast human review to verify and finalize segmentation results.' },
  { title: 'Temporal Annotation', desc: 'Label actions and events across video time with flexible temporal controls.' },
  { title: 'Temporal Consistency', desc: 'Maintain event consistency across frames, segments, and evolving actions.' },
  { title: '3D–2D Alignment', desc: 'Map 3D point clouds and 2D images into one aligned annotation workflow.' }
];

export function EmbodiedFloatingNodes() {
  return (
    <div className="absolute inset-0 z-20 pointer-events-none">
      {EMBODIED_NODES.map((node, i) => (
        <motion.div
          key={i}
          className="absolute pointer-events-auto"
          style={{ left: node.x, top: node.y }}
          animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
          transition={{ duration: 6 + i, repeat: Infinity, ease: 'easeInOut', delay: i * 0.5 }}
        >
          <div className="group relative">
            <div className="flex items-center justify-center size-[60px] bg-[#161616] border-[2px] border-[#8b5cf6] rounded-full shadow-[0_0_20px_rgba(139,92,246,0.4)] cursor-pointer backdrop-blur-sm z-30 transition-transform hover:scale-110">
              <Crosshair className="text-white size-[24px]" />
            </div>
            
            {/* Hover Card */}
            <div className="absolute top-1/2 -translate-y-1/2 left-[70px] w-[300px] p-[20px] bg-[#161616] border border-[rgba(139,92,246,0.5)] rounded-[16px] shadow-2xl opacity-0 scale-95 pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto transition-all duration-300 origin-left z-40">
              <h4 className="font-['Poppins'] font-bold text-white text-[18px] mb-[8px]">{node.title}</h4>
              <p className="font-['Poppins'] text-[#9ca3af] text-[14px] leading-relaxed">{node.desc}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

// --- Autonomous Driving Points ---
export function AutonomousDrivingPoints() {
  const points = [
    "3D detection and free-space understanding",
    "2D / 3D sensor fusion",
    "HD map and road-structure annotation",
    "Scenario and behavior labeling",
    "VLA-oriented scene understanding"
  ];
  
  return (
    <div className="content-stretch flex flex-col gap-[36px] items-start relative shrink-0 w-[400px]">
      {points.map((point, index) => (
        <div key={index} className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
          <div className="relative shrink-0 size-[48px] flex items-center justify-center rounded-xl bg-[rgba(139,92,246,0.1)] border border-[rgba(139,92,246,0.3)]">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12l5 5L20 7" stroke="#8B5CF6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="flex-[1_0_0] pt-[10px]">
            <p className="font-['Poppins'] font-bold leading-[28px] text-[20px] text-white">
              {point}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

// --- Automation Assisted Labeling / Autonomous Driving Scale Section ---
export function EnhancedAutomationSection() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    { title: "3D Box Creation" },
    { title: "Lane Centerline" },
    { title: "4D Point Cloud & OCC" }
  ];

  const features = [
    {
      title: "Flexible 3D Box Creation",
      desc: "Seamlessly switch between manual boxing, fixed-size boxes, and auto-fitting box creation for faster object annotation across different driving scenarios.",
      icon: Box
    },
    {
      title: "Lane Centerline Automation",
      desc: "Automatically generate lane centerlines to improve lane annotation efficiency, helping annotators work more quickly and consistently.",
      icon: Route
    },
    {
      title: "Fast 4D Point Cloud Loading",
      desc: "Support ultra-fast loading for large-scale 4D point cloud data, making complex autonomous driving scenes easier to inspect and annotate.",
      icon: Cloud
    },
    {
      title: "Smarter Polygon and OCC Workflows",
      desc: "Enable efficient point cloud OCC annotation with automatic switching between polygon and lasso-style tools in multi-shape workflows.",
      icon: Shapes
    }
  ];

  const images = [
    "https://images.unsplash.com/photo-1695902173528-0b15104c4554?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwY29tcHV0ZXIlMjB2aXNpb24lMjBhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlfGVufDF8fHx8MTc3NDgzOTA3Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1579372795676-6f78fadd0639?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwcm9hZCUyMGhpZ2h3YXklMjBhdXRvbm9tb3VzJTIwZHJpdmluZyUyMG5pZ2h0fGVufDF8fHx8MTc3NDg0MDMzOXww&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1748723594319-142e211b46a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwM2QlMjBhYnN0cmFjdCUyMHBvaW50JTIwY2xvdWR8ZW58MXx8fHwxNzc0ODM5MDU5fDA&ixlib=rb-4.1.0&q=80&w=1080"
  ];

  return (
    <div className="content-stretch flex flex-col gap-[72px] items-start relative shrink-0 w-full" data-name="Container">
      {/* Top Header */}
      <div className="relative shrink-0 w-full" data-name="Container">
        <div className="flex flex-col items-center size-full">
          <div className="content-stretch flex flex-col gap-[24px] items-center pr-[300px] relative w-full">
            <div className="relative shrink-0 w-full" data-name="Heading 2">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative w-full">
                <p className="flex-[1_0_0] font-['Poppins:Bold',sans-serif] leading-[64px] min-h-px min-w-px not-italic relative text-[54px] text-white">Autonomous Driving Annotation Tools Built for Scale</p>
              </div>
            </div>
            <div className="relative shrink-0 w-full" data-name="Paragraph">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative w-full">
                <p className="flex-[1_0_0] font-['Poppins:Regular',sans-serif] leading-[normal] min-h-px min-w-px not-italic relative text-[#9ca3af] text-[24px]">High-performance tooling for 3D perception, lane understanding, and multi-modal data at production scale.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Split */}
      <div className="content-stretch flex gap-[48px] items-center justify-center relative shrink-0 w-full">
        {/* Left Side Features */}
        <div className="content-stretch flex flex-col gap-[48px] items-start relative shrink-0 w-[480px]">
          {features.map((feature, i) => (
            <div key={i} className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="FeatureHighlight">
              <div className="relative shrink-0 size-[64px]" data-name="Icon">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 64">
                  <path d="M32 4L55.9993 18V46L32 60L7.99934 46V18L32 4Z" fill="#161616" stroke="#8B5CF6" strokeLinejoin="round" strokeOpacity="0.3" strokeWidth="2" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center text-[#8b5cf6]">
                  <feature.icon size={24} strokeWidth={2} />
                </div>
              </div>
              <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="Container">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
                  <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Heading 4">
                    <p className="flex-[1_0_0] font-['Poppins:Bold',sans-serif] leading-[36px] min-h-px min-w-px not-italic relative text-[24px] text-white">{feature.title}</p>
                  </div>
                  <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Paragraph">
                    <p className="flex-[1_0_0] font-['Poppins:Light',sans-serif] leading-[24px] min-h-px min-w-px not-italic relative text-[#9ca3af] text-[16px]">{feature.desc}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Side Media & Tabs */}
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-center min-h-px min-w-px relative">
          {/* Tabs */}
          <div className="content-stretch flex items-start justify-center relative shrink-0 w-full gap-[12px]">
            {tabs.map((tab, i) => {
              const isActive = activeTab === i;
              return (
                <div 
                  key={i} 
                  onClick={() => setActiveTab(i)}
                  className="content-stretch flex flex-col items-center justify-center overflow-clip px-[24px] py-[16px] relative shrink-0 cursor-pointer group" 
                  data-name="tab"
                >
                  <p className={`font-['Poppins:Regular',sans-serif] leading-[32px] not-italic relative shrink-0 text-[16px] whitespace-nowrap transition-colors duration-300 ${isActive ? 'text-white' : 'text-[#9ca3af] group-hover:text-[#E8E7EF]'}`}>
                    {tab.title}
                  </p>
                  {isActive && (
                    <motion.div 
                      layoutId="autoDrivingTabUnderline"
                      className="absolute bottom-0 bg-gradient-to-r from-[#8b5cf6] to-[#d946ef] h-[4px] rounded-[999px] w-[60%]"
                    />
                  )}
                </div>
              );
            })}
          </div>

          {/* Image Container */}
          <div className="aspect-[880/526] bg-[#161616] relative rounded-[24px] shadow-[0px_0px_50px_0px_rgba(139,92,246,0.15)] shrink-0 w-full" data-name="Container">
            <div className="overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex flex-col items-start p-[24px] relative size-full">
                <div className="bg-black flex-[1_0_0] min-h-px min-w-px overflow-clip relative rounded-[18px] w-full" data-name="Container">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTab}
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
                    >
                      <img alt="" className="absolute inset-0 w-full h-full object-cover opacity-80" src={images[activeTab]} />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 via-transparent to-[#0a0a0a]/20" />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- Autonomous Driving Annotation - Built for Scale ---
export function AutonomousDrivingAnnotation() {
  const features = [
    {
      title: "3D Objects, Instantly Aligned",
      body: "Create precise 3D bounding boxes your way — manual, fixed-size, or auto-snapped. Switch modes seamlessly and annotate complex scenes without friction.",
      highlight: "→ Faster labeling. Higher consistency. Zero compromise on accuracy.",
      icon: Cuboid
    },
    {
      title: "Lanes, Automatically Structured",
      body: "Generate lane centerlines automatically and refine with minimal input. Turn tedious lane annotation into a fast, structured workflow.",
      highlight: "→ 20%+ efficiency gain. Cleaner topology. Better downstream models.",
      icon: Route
    },
    {
      title: "Point Clouds, Without Limits",
      body: "Load massive 4D point clouds instantly and annotate with adaptive tools that just work. Polygon or lasso — the system switches for you.",
      highlight: "→ Effortless OCC labeling. Massive scale. Real-time performance.",
      icon: Waypoints
    }
  ];

  return (
    <div className="content-stretch flex flex-col gap-[72px] items-start relative shrink-0 w-full" data-name="Container">
      <div className="relative shrink-0 w-full" data-name="Container">
        <div className="flex flex-col items-center size-full">
          <div className="content-stretch flex flex-col gap-[24px] items-center pl-[300px] relative w-full">
            <div className="relative shrink-0 w-full" data-name="Heading 2">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative w-full">
                <p className="flex-[1_0_0] font-['Poppins'] font-bold leading-[64px] min-h-px min-w-px not-italic relative text-[54px] text-right text-white">
                  Autonomous Driving Annotation
                  <br />
                  Built for Scale
                </p>
              </div>
            </div>
            <div className="relative shrink-0 w-full" data-name="Paragraph">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative w-full">
                <p className="flex-[1_0_0] font-['Poppins'] font-normal leading-[normal] min-h-px min-w-px not-italic relative text-[#9ca3af] text-[24px] text-right">High-performance tooling for 3D perception, lane understanding, and multi-modal data at production scale.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="content-stretch flex gap-[48px] items-center relative shrink-0 w-full">
        <div className="aspect-square bg-[#161616] min-h-px min-w-px relative rounded-[24px] shadow-[0px_0px_50px_0px_rgba(139,92,246,0.15)] w-1/2" data-name="Container">
          <div className="overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col items-start p-[24px] relative size-full">
              <div className="bg-black flex-[1_0_0] min-h-px min-w-px overflow-clip relative rounded-[18px] w-full" data-name="Container">
                <img alt="Autonomous driving annotation workbench" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full opacity-80" src="https://images.unsplash.com/photo-1699423957878-bff709d3dd4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwY29tcHV0ZXIlMjB2aXNpb24lMjByb2FkJTIwYXV0b25vbW91cyUyMGNhciUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NzQ4NTY2MDB8MA&ixlib=rb-4.1.0&q=80&w=1080" />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#0a0a0a]/60 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="content-stretch flex flex-col gap-[48px] items-start relative flex-1 min-w-0">
          {features.map((feature, idx) => (
            <div key={idx} className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full" data-name="FeatureHighlight">
              <div className="relative shrink-0 size-[64px]" data-name="Icon">
                <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 64 64">
                  <path d="M32 4L55.9993 18V46L32 60L7.99934 46V18L32 4Z" fill="#161616" stroke="#8B5CF6" strokeLinejoin="round" strokeOpacity="0.3" strokeWidth="2" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center text-[#8b5cf6]">
                  <feature.icon size={24} strokeWidth={2} />
                </div>
              </div>
              <div className="flex-[1_0_0] min-h-px min-w-px relative self-stretch" data-name="Container">
                <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
                  <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Heading 4">
                    <p className="flex-[1_0_0] font-['Poppins'] font-bold leading-[36px] min-h-px min-w-px not-italic relative text-[24px] text-white">{feature.title}</p>
                  </div>
                  <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Paragraph">
                    <p className="flex-[1_0_0] font-['Poppins'] font-light leading-[24px] min-h-px min-w-px not-italic relative text-[#9ca3af] text-[16px]">{feature.body}</p>
                  </div>
                  <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full mt-2" data-name="Paragraph">
                    <p className="flex-[1_0_0] font-['Poppins'] font-bold leading-[24px] min-h-px min-w-px not-italic relative text-[#9ca3af] text-[16px]">{feature.highlight}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ScaleAnnotationSection() {
  const [activeTab, setActiveTab] = useState(0);

  const features = [
    {
      title: "Auto Labeling at Scale",
      desc: "AI-generated labels cut repetitive work by 30%+.",
      icon: "wand"
    },
    {
      title: "Human-in-the-Loop Optimization",
      desc: "Interactive annotation boosts efficiency by 3–5×.",
      icon: "refresh"
    },
    {
      title: "Precision Refinement",
      desc: "Experts refine pre-labeled outputs into production-ready data.",
      icon: "check"
    }
  ];

  const images = [
    "https://images.unsplash.com/photo-1695902173528-0b15104c4554?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwY29tcHV0ZXIlMjB2aXNpb24lMjBhdXRvbWF0ZWQlMjBkZXRlY3Rpb24lMjBzb2Z0d2FyZSUyMGludGVyZmFjZXxlbnwxfHx8fDE3NzQ4NTU2OTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1649451844931-57e22fc82de3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwZGF0YSUyMGFubm90YXRpb24lMjBzb2Z0d2FyZSUyMGludGVyZmFjZSUyMGh1bWFuJTIwd29ya2luZ3xlbnwxfHx8fDE3NzQ4NTU2OTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    "https://images.unsplash.com/photo-1765445665883-085301570c87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHlzdCUyMGRhc2hib2FyZCUyMGRhcmt8ZW58MXx8fHwxNzc0ODU1NzAyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  ];

  const renderIcon = (type: string) => {
    switch(type) {
      case 'wand':
        return <path d="M15 4V2M15 16V14M8 9H6M20 9H18M17.8 13.8L16.4 12.4M7.6 12.4L6.2 13.8M17.8 4.2L16.4 5.6M7.6 5.6L6.2 4.2M13 9A2 2 0 1 1 11 9A2 2 0 0 1 13 9Z" stroke="#8B5CF6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />;
      case 'refresh':
        return <path d="M20 11A8.1 8.1 0 0 0 4.5 9M4 22V16H10M4 13A8.1 8.1 0 0 0 19.5 15M20 2V8H14" stroke="#8B5CF6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />;
      case 'check':
        return <path d="M20 6L9 17L4 12" stroke="#8B5CF6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />;
      default:
        return null;
    }
  };

  return (
    <div className="content-stretch flex flex-col gap-[72px] items-start relative shrink-0 w-full" data-name="Container">
      {/* Top Header */}
      <div className="relative shrink-0 w-full" data-name="Container">
        <div className="flex flex-col items-center size-full">
          <div className="content-stretch flex flex-col gap-[24px] items-center pr-[300px] relative w-full">
            <div className="relative shrink-0 w-full" data-name="Heading 2">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative w-full">
                <p className="flex-[1_0_0] font-['Poppins'] font-bold leading-[64px] min-h-px min-w-px not-italic relative text-[54px] text-white">Scale Your Data Annotation with AI + Human Intelligence</p>
              </div>
            </div>
            <div className="relative shrink-0 w-full" data-name="Paragraph">
              <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative w-full">
                <p className="flex-[1_0_0] font-['Poppins'] font-normal leading-[normal] min-h-px min-w-px not-italic relative text-[#9ca3af] text-[24px]">Turn raw data into high-quality training datasets through a three-stage intelligent pipeline.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Split */}
      <div className="content-stretch flex gap-[48px] items-center justify-center relative shrink-0 w-full">
        {/* Left Side Features */}
        <div className="w-[480px] flex flex-col gap-[16px]">
          {features.map((feature, i) => (
            <div
              key={i}
              onClick={() => setActiveTab(i)}
              className={`p-[24px] rounded-[16px] cursor-pointer transition-all duration-300 flex gap-[20px] items-start border ${
                activeTab === i
                  ? 'bg-[#161616] border-[rgba(139,92,246,0.5)] shadow-[0px_8px_24px_rgba(0,0,0,0.24)]'
                  : 'bg-transparent border-transparent hover:bg-[rgba(255,255,255,0.02)]'
              }`}
            >
              <div className={`mt-1 shrink-0 p-[10px] rounded-[10px] ${activeTab === i ? 'bg-[rgba(139,92,246,0.15)] text-[#8b5cf6]' : 'bg-[rgba(255,255,255,0.05)] text-[#9ca3af]'}`}>
                <svg className="block size-[24px]" fill="none" viewBox="0 0 24 24">
                  {renderIcon(feature.icon)}
                </svg>
              </div>
              <div className="flex flex-col gap-[8px]">
                <h4 className={`font-['Poppins'] font-bold text-[20px] leading-[28px] ${activeTab === i ? 'text-white' : 'text-[#e8e7ef]'}`}>
                  {feature.title}
                </h4>
                <AnimatePresence>
                  {activeTab === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="font-['Poppins'] font-light text-[16px] leading-[24px] text-[#9ca3af] mt-[4px]">
                        {feature.desc}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          ))}
        </div>

        {/* Right Side Media */}
        <div className="content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px relative">
          {/* Image Container */}
          <div className="aspect-[880/526] bg-[#161616] relative rounded-[24px] shadow-[0px_0px_50px_0px_rgba(139,92,246,0.15)] shrink-0 w-full" data-name="Container">
            <div className="overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex flex-col items-start p-[24px] relative size-full">
                <div className="bg-black flex-[1_0_0] min-h-px min-w-px overflow-clip relative rounded-[18px] w-full" data-name="Container">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTab}
                      initial={{ opacity: 0, filter: 'blur(10px)' }}
                      animate={{ opacity: 1, filter: 'blur(0px)' }}
                      exit={{ opacity: 0, filter: 'blur(10px)' }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
                    >
                      <img alt="" className="absolute inset-0 w-full h-full object-cover opacity-80" src={images[activeTab]} />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 via-transparent to-[#0a0a0a]/20" />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- Embodied AI Annotation Section ---
export function EnhancedEmbodiedAISection() {
  const points = [
    {
      title: "Interactive Segmentation",
      desc: "Trigger precise segmentation with minimal point-based input.",
      icon: MousePointerClick,
      x: "15%",
      y: "15%",
      yOffset: [0, -15]
    },
    {
      title: "Context-Aware Refinement",
      desc: "Expand segmentation intelligently using surrounding visual context.",
      icon: Maximize,
      x: "70%",
      y: "10%",
      yOffset: [0, -30]
    },
    {
      title: "Human Validation",
      desc: "Use fast human review to verify and finalize segmentation results.",
      icon: CheckCircle,
      x: "5%",
      y: "65%",
      yOffset: [0, -25]
    },
    {
      title: "Temporal Annotation",
      desc: "Label actions and events across video time with flexible temporal controls.",
      icon: Clock,
      x: "80%",
      y: "75%",
      yOffset: [0, -10]
    },
    {
      title: "Temporal Consistency",
      desc: "Maintain event consistency across frames, segments, and evolving actions.",
      icon: LinkIcon,
      x: "25%",
      y: "85%",
      yOffset: [0, -40]
    },
    {
      title: "3D–2D Alignment",
      desc: "Map 3D point clouds and 2D images into one aligned annotation workflow.",
      icon: BoxSelect,
      x: "65%",
      y: "90%",
      yOffset: [0, -20]
    }
  ];

  const { scrollYProgress } = useScroll();

  return (
    <div className="content-stretch flex flex-col gap-[72px] items-center relative shrink-0 w-full" data-name="EmbodiedAIContainer">
      <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-full">
        <div className="relative shrink-0 w-full" data-name="Heading 2">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative w-full">
            <p className="flex-[1_0_0] font-['Poppins'] font-bold leading-[64px] min-h-px min-w-px not-italic relative text-[54px] text-center text-white">
              Embodied AI Annotation Across Interaction, Time, and Space
            </p>
          </div>
        </div>
        <div className="relative shrink-0 w-full" data-name="Paragraph">
          <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative w-full">
            <p className="flex-[1_0_0] font-['Poppins'] font-normal leading-[normal] min-h-px min-w-px not-italic relative text-[#9ca3af] text-[24px] text-center max-w-[1200px]">
              Support embodied AI workflows with interactive segmentation, temporal event labeling, and 3D–2D aligned annotation for richer scene and action understanding.
            </p>
          </div>
        </div>
      </div>

      <div className="relative shrink-0 w-full h-[1160px] flex items-center justify-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1004px] grid grid-cols-3 gap-[22px]">
          {points.slice(0, 3).map((point, idx) => (
            <motion.div
              key={`top-${idx}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              className="bg-[#161616] rounded-[18px] p-[24px] shadow-[0_8px_24px_rgba(0,0,0,0.24)] min-h-[220px]"
            >
              <div className="flex flex-col gap-[16px] items-start">
                <div className="relative w-[72px] h-[72px] flex items-center justify-center shrink-0">
                  <svg className="absolute inset-0 w-full h-full" fill="none" viewBox="0 0 180 180">
                    <path d="M90 20 L150 55 L150 125 L90 160 L30 125 L30 55 Z" fill="#161616" stroke="#D946EF" strokeOpacity="0.5" strokeWidth="2" />
                  </svg>
                  <point.icon className="relative z-10 text-[#D946EF] size-[28px]" strokeWidth={2} />
                </div>
                <h4 className="font-['Poppins'] font-bold text-[24px] text-white leading-[1.2]">
                  {point.title}
                </h4>
                <p className="font-['Poppins'] font-normal text-[16px] text-[#9ca3af] leading-[24px]">
                  {point.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, -50]) }}
          className="absolute top-[280px] left-1/2 -translate-x-1/2 bg-[#161616] w-[1004px] h-[600px] rounded-[24px] shadow-[0px_0px_50px_0px_rgba(139,92,246,0.15)] p-[24px]"
        >
          <div className="relative w-full h-full rounded-[18px] overflow-hidden bg-black">
            <img 
              src="https://images.unsplash.com/photo-1721745250100-7d777c1c48ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwcm9ib3QlMjBhcm0lMjBmYWN0b3J5JTIwc2NlbmUlMjB1bmRlcnN0YW5kaW5nJTIwY29tcHV0ZXIlMjB2aXNpb258ZW58MXx8fHwxNzc0ODU5NTU5fDA&ixlib=rb-4.1.0&q=80&w=1080" 
              alt="Embodied AI Workspace"
              className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-luminosity"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 via-[#0a0a0a]/20 to-[#0a0a0a]/40" />
          </div>
        </motion.div>

        <div className="absolute top-[920px] left-1/2 -translate-x-1/2 w-[1004px] grid grid-cols-3 gap-[22px]">
          {points.slice(3, 6).map((point, idx) => (
            <motion.div
              key={`bottom-${idx}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: (idx + 3) * 0.06 }}
              className="bg-[#161616] rounded-[18px] p-[24px] shadow-[0_8px_24px_rgba(0,0,0,0.24)] min-h-[220px]"
            >
              <div className="flex flex-col gap-[16px] items-start">
                <div className="relative w-[72px] h-[72px] flex items-center justify-center shrink-0">
                  <svg className="absolute inset-0 w-full h-full" fill="none" viewBox="0 0 180 180">
                    <path d="M90 20 L150 55 L150 125 L90 160 L30 125 L30 55 Z" fill="#161616" stroke="#D946EF" strokeOpacity="0.5" strokeWidth="2" />
                  </svg>
                  <point.icon className="relative z-10 text-[#D946EF] size-[28px]" strokeWidth={2} />
                </div>
                <h4 className="font-['Poppins'] font-bold text-[24px] text-white leading-[1.2]">
                  {point.title}
                </h4>
                <p className="font-['Poppins'] font-normal text-[16px] text-[#9ca3af] leading-[24px]">
                  {point.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
