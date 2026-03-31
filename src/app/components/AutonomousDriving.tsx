import { Header } from "./Header";
import { Footer } from "./Footer";
import { Link } from "react-router";
import { motion } from "motion/react";
import { heroSection, heroContainer, heroLeftCol, heroRightPanel, heroImage, heroCTARow } from "../styles/pageStyles";
import {
  ArrowRight,
  BoxSelect,
  Layers,
  Map,
  Network,
  Crosshair,
  Activity,
  CircleCheck,
  Radar,
  Eye,
  Video,
  GitMerge,
  Terminal,
  Database,
  ShieldCheck,
  Scan,
  GitFork,
  Languages
} from "lucide-react";

export function AutonomousDriving() {
  return (
    <div className="bg-[#0A0A0A] min-h-screen text-[#E8E7EF] selection:bg-[#8B5CF6]/30 font-['Poppins'] overflow-x-hidden">
      {/* 1. Hero Section */}
      <section id="hero-autonomous-driving" className={heroSection}>
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
          <div className="absolute top-[10%] right-[-10%] w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(139,92,246,0.15)_0%,transparent_70%)] blur-[120px]"></div>
          <div className="absolute top-[40%] left-[-5%] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(139,92,246,0.1)_0%,transparent_70%)] blur-[100px]"></div>
        </div>

        <div className={`${heroContainer} relative z-10`}>
          <div id="hero-left-autonomous-driving" className={heroLeftCol}>
            
            <h1 className="text-[54px] md:text-[64px] leading-[64px] md:leading-[72px] font-bold tracking-tight text-[#FFFFFF] mb-[32px]">
              Data Infrastructure for Real-World <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] via-[#D946EF] to-[#FFFFFF]">
                Autonomous Driving Systems
              </span>
            </h1>
            
            <p className="text-[24px] leading-[32px] text-[#FFFFFF] font-bold mb-[16px] max-w-lg">
              End-to-end autonomous driving data production across LiDAR, vision, sensor fusion, and driving behavior understanding — supporting 10M+ scale programs with 98%+ annotation accuracy.
            </p>

            <p className="text-[16px] leading-[24px] text-[#9CA3AF] font-normal mb-[48px] max-w-lg">
              From 3D point cloud detection and free-space understanding to sensor fusion, HD map structure, and scenario-level behavior annotation, we support the data workflows behind complex AV and ADAS development.
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
              id="hero-img-autonomous-driving"
              src="https://images.unsplash.com/photo-1763445244812-ce02b4018888?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwcHVycGxlJTIwZGF0YSUyMHBhcnRpY2xlcyUyMGFic3RyYWN0JTIwaGlnaHdheXxlbnwxfHx8fDE3NzQ2OTgyMTh8MA&ixlib=rb-4.1.0&q=80&w=450&h=648"
              alt="Autonomous Driving Data Scene"
              className={heroImage}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/90 via-transparent to-transparent"></div>
            
            {/* Ambient Particle Movement & Lane Overlays */}
            <div className="absolute inset-0 flex items-end justify-center pointer-events-none perspective-1000">
               <motion.div 
                 className="w-full h-full border-x border-dashed border-[#8B5CF6]/20 [transform:rotateX(60deg)_translateY(200px)] opacity-50"
                 animate={{ backgroundPosition: ["0px 0px", "0px 100px"] }}
                 transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                 style={{
                   backgroundImage: "linear-gradient(rgba(139,92,246,0.2) 1px, transparent 1px)",
                   backgroundSize: "100% 40px"
                 }}
               />
               
               {/* Floating 3D/2D Annotation Fragments */}
               <div className="absolute top-1/3 left-1/4 w-[64px] h-[48px] border border-[#8B5CF6] bg-[#8B5CF6]/10 rounded backdrop-blur-sm hidden md:flex items-end justify-between p-[4px]">
                 <span className="text-[12px] leading-[16px] font-bold text-[#8B5CF6]">CAR_01</span>
                 <span className="text-[12px] leading-[16px] font-bold text-[#8B5CF6]">99%</span>
                 <div className="absolute top-0 right-0 w-[8px] h-[8px] border-t border-r border-[#8B5CF6]"></div>
                 <div className="absolute bottom-0 left-0 w-[8px] h-[8px] border-b border-l border-[#8B5CF6]"></div>
               </div>

               <div className="absolute top-1/2 right-1/4 w-[80px] h-[64px] border border-[#D946EF] bg-[#D946EF]/10 rounded backdrop-blur-sm hidden md:flex items-end justify-between p-[4px]">
                 <span className="text-[12px] leading-[16px] font-bold text-[#D946EF]">PED_04</span>
                 <span className="text-[12px] leading-[16px] font-bold text-[#D946EF]">97%</span>
                 <div className="absolute top-0 right-0 w-[8px] h-[8px] border-t border-r border-[#D946EF]"></div>
                 <div className="absolute bottom-0 left-0 w-[8px] h-[8px] border-b border-l border-[#D946EF]"></div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. 3D LiDAR Object Detection */}
      <section className="py-[128px] relative bg-[#0A0A0A] border-b border-[#E8E7EF]/10">
        <div className="w-full max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-[64px] lg:gap-[96px] items-center">
          
          <div className="lg:w-1/2 flex flex-col">
            <h2 className="text-[54px] leading-[64px] font-bold text-[#FFFFFF] mb-[24px] tracking-tight">
              3D Object Detection in LiDAR
            </h2>
            <p className="text-[24px] leading-[32px] text-[#FFFFFF] font-bold mb-[24px]">
              High-precision LiDAR annotation built around multi-view observation, 3D box localization, and cross-frame validation to support sparse perception, occlusion handling, and cross-modal scene understanding.
            </p>
            <ul className="text-[16px] leading-[24px] text-[#9CA3AF] font-normal mb-[32px] space-y-[8px] pl-[20px] list-disc">
              <li>Multi-view observation with point clouds and 2D images</li>
              <li>3D bounding box localization and attribute annotation</li>
              <li>Temporal consistency validation across continuous frames</li>
              <li>Sparse perception and occlusion-aware reconstruction</li>
              <li>Cross-modal understanding between LiDAR and image data</li>
            </ul>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px] mb-[48px] max-w-[520px]">
              <div className="bg-[#161616] border border-[#E8E7EF]/10 rounded-[12px] px-[16px] py-[12px] flex flex-col min-h-[98px]">
                <span className="text-[12px] leading-[16px] font-normal text-[#9CA3AF] mb-[4px]">SCALE</span>
                <span className="text-[16px] leading-[24px] font-bold text-[#FFFFFF]">300K+ frames</span>
              </div>
              <div className="bg-[#161616] border border-[#E8E7EF]/10 rounded-[12px] px-[16px] py-[12px] flex flex-col min-h-[98px]">
                <span className="text-[12px] leading-[16px] font-normal text-[#9CA3AF] mb-[4px]">PRECISION</span>
                <span className="text-[16px] leading-[24px] font-bold text-[#8B5CF6]">98% accurate</span>
              </div>
              <div className="bg-[#161616] border border-[#E8E7EF]/10 rounded-[12px] px-[16px] py-[12px] flex flex-col min-h-[98px]">
                <span className="text-[12px] leading-[16px] font-normal text-[#9CA3AF] mb-[4px]">TARGETS</span>
                <span className="text-[16px] leading-[24px] font-bold text-[#FFFFFF] max-w-[150px]">Vehicles, Pedestrians, Cyclists, Statics</span>
              </div>
              <div className="bg-[#161616] border border-[#E8E7EF]/10 rounded-[12px] px-[16px] py-[12px] flex flex-col min-h-[98px]">
                <span className="text-[12px] leading-[16px] font-normal text-[#9CA3AF] mb-[4px]">CORE TECHNOLOGY</span>
                <span className="text-[16px] leading-[24px] font-bold text-[#FFFFFF] max-w-[180px]">Auto-fitting + multi-frame propagation</span>
              </div>
            </div>

            {/* Workflow flow strip */}
            <div className="flex items-center gap-[8px] md:gap-[16px] flex-wrap text-[16px] leading-[24px] font-bold text-[#9CA3AF] border border-[#E8E7EF]/10 bg-[#161616] p-[16px] rounded-[12px]">
              <span className="text-[#8B5CF6]">Observe</span> <ArrowRight className="w-[12px] h-[12px] text-[#E8E7EF]/20" />
              <span>Box</span> <ArrowRight className="w-[12px] h-[12px] text-[#E8E7EF]/20" />
              <span>Attribute</span> <ArrowRight className="w-[12px] h-[12px] text-[#E8E7EF]/20" />
              <span>Track</span> <ArrowRight className="w-[12px] h-[12px] text-[#E8E7EF]/20" />
              <span className="text-[#FFFFFF]">QA</span>
            </div>
          </div>

          <div className="lg:w-1/2 w-full relative h-[450px] lg:h-[550px] rounded-[24px] overflow-hidden border border-[#E8E7EF]/10 group bg-[#161616]">
            <img 
              src="https://images.unsplash.com/photo-1717618354126-fecb38cc7408?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzZCUyMHBvaW50JTIwY2xvdWQlMjBsaWRhciUyMGF1dG9ub21vdXMlMjBkYXJrfGVufDF8fHx8MTc3NDY5ODIxOHww&ixlib=rb-4.1.0&q=80&w=1080" 
              alt="3D Point Cloud LiDAR" 
              className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-1000 ease-out mix-blend-screen"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent"></div>
            
            {/* Technical Cuboids & Callouts */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-[40%] left-[30%] w-[96px] h-[64px] border border-[#8B5CF6] bg-[#8B5CF6]/20 group-hover:bg-[#8B5CF6]/30 transition-colors [transform:rotateX(20deg)_rotateY(10deg)]">
                <div className="absolute -top-[24px] -left-[80px] flex items-center gap-[8px]">
                  <div className="px-[8px] py-[4px] bg-[#0A0A0A]/80 backdrop-blur-md border border-[#8B5CF6]/50 rounded-[4px] text-[12px] leading-[16px] font-bold text-[#8B5CF6]">Occlusion: 30%</div>
                  <div className="w-[64px] h-[1px] bg-[#8B5CF6]/50"></div>
                </div>
              </div>
              
              <div className="absolute top-[60%] right-[25%] w-[64px] h-[80px] border border-[#D946EF] bg-[#D946EF]/20 group-hover:bg-[#D946EF]/30 transition-colors [transform:rotateX(15deg)_rotateY(-15deg)]">
                 <div className="absolute -top-[32px] -right-[96px] flex items-center gap-[8px] flex-row-reverse">
                  <div className="px-[8px] py-[4px] bg-[#0A0A0A]/80 backdrop-blur-md border border-[#D946EF]/50 rounded-[4px] text-[12px] leading-[16px] font-bold text-[#D946EF]">Inferred Complete</div>
                  <div className="w-[64px] h-[1px] bg-[#D946EF]/50"></div>
                </div>
              </div>

              {/* Timeline marker for frame continuity */}
              <div className="absolute bottom-[24px] left-1/2 -translate-x-1/2 w-4/5 bg-[#0A0A0A]/60 backdrop-blur-md border border-[#E8E7EF]/10 rounded-[8px] p-[8px] flex flex-col gap-[4px]">
                <div className="flex justify-between text-[12px] leading-[16px] font-bold text-[#9CA3AF] mb-[4px]">
                  <span>FRAME T-1</span>
                  <span className="text-[#8B5CF6]">FRAME T (CURRENT)</span>
                  <span>FRAME T+1</span>
                </div>
                <div className="w-full h-[4px] bg-[#E8E7EF]/10 rounded-full overflow-hidden flex">
                  <div className="h-full bg-[#8B5CF6]/50 w-1/3"></div>
                  <div className="h-full bg-[#8B5CF6] w-1/3 shadow-[0_0_10px_#8B5CF6]"></div>
                  <div className="h-full bg-[#E8E7EF]/20 w-1/3"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Free Space Segmentation */}
      <section className="py-[128px] relative bg-[#0A0A0A] border-b border-[#E8E7EF]/10">
        <div className="w-full max-w-[1200px] mx-auto flex flex-col gap-[64px]">
          
          <div className="relative w-full h-[400px] lg:h-[600px] rounded-[24px] overflow-hidden border border-[#E8E7EF]/10 group bg-[#161616]">
            <img 
              src="https://images.unsplash.com/photo-1744070018851-5b2f5a3d1d81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMG5ldHdvcmslMjBwYXJ0aWNsZXMlMjB0b3AlMjBkb3duJTIwZGFya3xlbnwxfHx8fDE3NzQ2OTgyMTh8MA&ixlib=rb-4.1.0&q=80&w=1080" 
              alt="Free Space Top Down" 
              className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000 ease-out mix-blend-screen"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent"></div>
            
            {/* Free space polygon overlay */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <svg className="w-full h-full opacity-80" viewBox="0 0 1000 600" preserveAspectRatio="none">
                <polygon 
                  points="200,500 350,200 650,200 800,500 650,550 350,550" 
                  fill="rgba(139, 92, 246, 0.15)" 
                  stroke="#8B5CF6" 
                  strokeWidth="2"
                  className="group-hover:fill-[rgba(139,92,246,0.25)] transition-colors duration-700"
                />
                {/* Obstacle island */}
                <polygon 
                  points="450,400 500,300 550,400 500,450" 
                  fill="rgba(217, 70, 239, 0.1)" 
                  stroke="#D946EF" 
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                />
              </svg>
            </div>

            {/* 5 camera view thumbnails */}
            <div className="absolute top-[24px] right-[24px] flex gap-[8px]">
              {[1,2,3,4,5].map((i) => (
                <div key={i} className="w-[64px] h-[48px] bg-[#0A0A0A]/60 backdrop-blur-md border border-[#E8E7EF]/10 rounded-[4px] overflow-hidden relative">
                   <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#8B5CF6]/20"></div>
                   <div className="absolute top-[4px] left-[4px] text-[12px] leading-[16px] font-bold text-[#9CA3AF]">CAM_{i}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-[48px] lg:gap-[96px] items-start">
            <div className="lg:w-1/2">
              <h2 className="text-[54px] leading-[64px] font-bold text-[#FFFFFF] mb-[24px] tracking-tight">
                Free Space Segmentation in 3D Point Clouds
              </h2>
              <p className="text-[16px] leading-[24px] text-[#9CA3AF] font-normal mb-[24px]">
                High-precision free-space labeling built for drivable-area parsing, obstacle understanding, and spatial boundary validation in complex road scenes.
              </p>
              <ul className="text-[16px] leading-[24px] text-[#9CA3AF] font-normal space-y-[8px] pl-[20px] list-disc">
                <li>Point cloud scene parsing for complex road environments</li>
                <li>BEV-based drivable area identification and obstacle understanding</li>
                <li>Polygon and line-segment annotation for sparse boundaries</li>
                <li>Closed point cloud region formation with high spatial precision</li>
                <li>Multi-view fusion judgment with boundary accuracy validation</li>
              </ul>
            </div>
            
            <div className="lg:w-1/2 flex flex-col gap-[32px] w-full">
              <div className="flex flex-col gap-[16px]">
                <div className="bg-[#161616] border border-[#E8E7EF]/10 rounded-[16px] p-[24px]">
                  <span className="text-[16px] leading-[24px] text-[#9CA3AF] mb-[8px] block" style={{ fontWeight: 300 }}>VOLUME</span>
                  <span className="text-[24px] leading-[36px] font-bold text-[#FFFFFF]">500K+ frames</span>
                </div>
                <div className="bg-[#161616] border border-[#E8E7EF]/10 rounded-[16px] p-[24px]">
                  <span className="text-[16px] leading-[24px] text-[#9CA3AF] mb-[8px] block" style={{ fontWeight: 300 }}>MODALITY</span>
                  <span className="text-[24px] leading-[36px] font-bold text-[#FFFFFF]">3D Point Cloud + 5 Cams</span>
                </div>
                <div className="bg-[#161616] border border-[#E8E7EF]/10 rounded-[16px] p-[24px]">
                  <span className="text-[16px] leading-[24px] text-[#9CA3AF] mb-[8px] block" style={{ fontWeight: 300 }}>PRECISION TOLERANCE REQUIREMENT</span>
                  <span className="text-[24px] leading-[36px] font-bold text-[#8B5CF6]">≤10 cm spatial error</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Multi-Sensor 2D/3D Fusion */}
      <section className="py-[128px] relative bg-[#0A0A0A] border-b border-[#E8E7EF]/10">
        <div className="w-full max-w-[1200px] mx-auto flex flex-col gap-[64px]">
          
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-[54px] leading-[64px] font-bold text-[#FFFFFF] tracking-tight mb-[24px]">
              Multi-Sensor 2D/3D Fusion Annotation
            </h2>
            <p className="text-[16px] leading-[24px] text-[#9CA3AF] font-normal">
              Cross-modal annotation that aligns LiDAR and image data into one consistent training set, built for fisheye distortion, spatiotemporal synchronization, occlusion, and fine-grained 2D-3D correspondence.
            </p>
          </div>

          <div className="relative w-full rounded-[24px] overflow-hidden border border-[#E8E7EF]/10 bg-[#161616] flex flex-col md:flex-row">
            {/* Left: 3D LiDAR */}
            <div className="w-full md:w-1/2 h-[300px] md:h-[500px] relative border-b md:border-b-0 md:border-r border-[#E8E7EF]/10">
               <img 
                 src="https://images.unsplash.com/photo-1717618354126-fecb38cc7408?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzZCUyMHBvaW50JTIwY2xvdWQlMjBsaWRhciUyMGF1dG9ub21vdXMlMjBkYXJrfGVufDF8fHx8MTc3NDY5ODIxOHww&ixlib=rb-4.1.0&q=80&w=1080" 
                 alt="3D View" 
                 className="w-full h-full object-cover opacity-50 mix-blend-screen"
               />
               <div className="absolute top-[16px] left-[16px] px-[12px] py-[4px] bg-[#0A0A0A]/60 border border-[#E8E7EF]/10 rounded-[4px] text-[12px] leading-[16px] font-bold text-[#E8E7EF] backdrop-blur-md">3D POINT CLOUD</div>
               
               {/* 3D Box target */}
               <div className="absolute top-[45%] right-[20%] w-[64px] h-[64px] border border-[#8B5CF6] bg-[#8B5CF6]/20 [transform:rotateX(20deg)]"></div>
            </div>

            {/* Right: 2D Fisheye */}
            <div className="w-full md:w-1/2 h-[300px] md:h-[500px] relative">
               <img 
                 src="https://images.unsplash.com/photo-1658140009985-f42b0c9434c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBkYXNoYm9hcmQlMjBjYW1lcmElMjBmaXNoZXllJTIwbmlnaHR8ZW58MXx8fHwxNzc0Njk4MjE4fDA&ixlib=rb-4.1.0&q=80&w=1080" 
                 alt="2D Camera View" 
                 className="w-full h-full object-cover opacity-60 mix-blend-screen"
               />
               {/* Simulated fisheye distortion gradient */}
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(10,10,10,0.8)_100%)]"></div>
               <div className="absolute top-[16px] right-[16px] px-[12px] py-[4px] bg-[#0A0A0A]/60 border border-[#E8E7EF]/10 rounded-[4px] text-[12px] leading-[16px] font-bold text-[#E8E7EF] backdrop-blur-md">2D FISHEYE VIEW</div>
               
               {/* 2D Box target */}
               <div className="absolute top-[50%] left-[20%] w-[96px] h-[80px] border-2 border-[#D946EF] bg-[#D946EF]/10 rounded-sm"></div>
            </div>

            {/* Connector Lines (Hidden on mobile for simplicity, visible on desktop) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none hidden md:block" style={{ zIndex: 20 }}>
               <motion.path 
                 d="M 40% 45% C 50% 45%, 50% 50%, 60% 50%" 
                 fill="none" 
                 stroke="#8B5CF6" 
                 strokeWidth="2" 
                 strokeDasharray="5 5"
                 initial={{ strokeDashoffset: 100 }}
                 animate={{ strokeDashoffset: 0 }}
                 transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
               />
               <circle cx="40%" cy="45%" r="4" fill="#8B5CF6" />
               <circle cx="60%" cy="50%" r="4" fill="#D946EF" />
               
               <rect x="44%" y="43%" width="12%" height="8%" rx="4" fill="rgba(10,10,10,0.8)" stroke="rgba(232,231,239,0.1)" />
               <text x="50%" y="47%" fill="#E8E7EF" fontSize="12" fontFamily="Poppins" fontWeight="bold" textAnchor="middle" dominantBaseline="middle">2D-3D ALIGNED</text>
            </svg>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-[32px] bg-[#161616] border border-[#E8E7EF]/10 rounded-[24px] p-[24px] md:p-[32px]">
             <div className="flex gap-[32px]">
               <div>
                 <span className="text-[24px] leading-[32px] font-bold text-[#FFFFFF] block">600K+</span>
                 <span className="text-[12px] leading-[16px] font-normal text-[#9CA3AF] uppercase">Fusion Frames</span>
               </div>
               <div>
                 <span className="text-[24px] leading-[32px] font-bold text-[#FFFFFF] block">98%</span>
                 <span className="text-[12px] leading-[16px] font-normal text-[#9CA3AF] uppercase">Accuracy</span>
               </div>
             </div>

             <div className="flex flex-wrap items-center gap-[12px] text-[16px] leading-[24px] font-bold text-[#E8E7EF]">
               <span className="bg-[#E8E7EF]/5 px-[12px] py-[6px] rounded-[8px]">3D Detect</span> <span className="text-[#8B5CF6]">→</span>
               <span className="bg-[#E8E7EF]/5 px-[12px] py-[6px] rounded-[8px]">Box</span> <span className="text-[#8B5CF6]">→</span>
               <span className="bg-[#E8E7EF]/5 px-[12px] py-[6px] rounded-[8px]">Project</span> <span className="text-[#8B5CF6]">→</span>
               <span className="bg-[#E8E7EF]/5 px-[12px] py-[6px] rounded-[8px]">Refine 2D</span> <span className="text-[#8B5CF6]">→</span>
               <span className="bg-[#E8E7EF]/5 px-[12px] py-[6px] rounded-[8px]">Match</span> <span className="text-[#8B5CF6]">→</span>
               <span className="bg-[#8B5CF6]/20 text-[#8B5CF6] border border-[#8B5CF6]/30 px-[12px] py-[6px] rounded-[8px]">Validate</span>
             </div>
          </div>

        </div>
      </section>

      {/* 5. HD Map & Road Structure Annotation */}
      <section className="py-[128px] relative bg-[#0A0A0A] border-b border-[#E8E7EF]/10 overflow-hidden">
        <div className="absolute left-0 bottom-0 w-full h-[500px] bg-[linear-gradient(to_top,rgba(139,92,246,0.05),transparent)] pointer-events-none"></div>

        <div className="w-full max-w-[1200px] mx-auto">
          
          <div className="mb-[64px]">
            <h2 className="text-[54px] leading-[64px] font-bold text-[#FFFFFF] tracking-tight mb-[24px] max-w-3xl">
              HD Map & Road Structure Annotation
            </h2>
            <p className="text-[16px] leading-[24px] text-[#9CA3AF] font-normal max-w-3xl">
              Map-grade annotation built on multi-frame point cloud fusion for road structure recognition, semantic element extraction, and centimeter-level validation across complex parking layouts and non-standard road markings.
            </p>
          </div>

          <div className="relative w-full h-[400px] md:h-[500px] rounded-[24px] overflow-hidden border border-[#E8E7EF]/10 group bg-[#161616] mb-[48px] shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1546081090-054f9f0ce0d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwcGFya2luZyUyMGxvdCUyMGdlb21ldHJ5JTIwbGluZXMlMjB0b3AlMjBkb3dufGVufDF8fHx8MTc3NDY5ODIxOHww&ixlib=rb-4.1.0&q=80&w=1080" 
              alt="Parking Lot Geometry" 
              className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-1000 ease-out grayscale-[50%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent"></div>
            
            {/* Geometric Overlays */}
            <div className="absolute inset-0 pointer-events-none">
               {/* Parking slot highlight */}
               <div className="absolute top-[30%] left-[40%] w-[128px] h-[256px] border-2 border-[#8B5CF6]/80 bg-[#8B5CF6]/10 [transform:skewX(-20deg)]"></div>
               <div className="absolute top-[30%] left-[55%] w-[128px] h-[256px] border-2 border-[#8B5CF6]/30 bg-[#8B5CF6]/5 [transform:skewX(-20deg)]"></div>
               
               {/* Arrow detection */}
               <div className="absolute bottom-[20%] left-[30%] w-[48px] h-[80px] border border-[#D946EF] bg-[#D946EF]/20 [transform:skewX(-20deg)] flex items-center justify-center">
                 <span className="text-[12px] leading-[16px] font-bold text-[#D946EF] bg-[#0A0A0A]/60 px-[4px] rounded">TURN_LEFT</span>
               </div>
            </div>

            {/* Geometric Tolerance Cue */}
            <div className="absolute bottom-[32px] right-[32px] bg-[#0A0A0A]/80 backdrop-blur-xl border border-[#E8E7EF]/10 p-[20px] rounded-[16px]">
               <div className="flex flex-col gap-[16px]">
                 <div className="flex items-center justify-between gap-[16px]">
                   <span className="text-[12px] leading-[16px] font-bold text-[#9CA3AF] uppercase">Lane Centerline Fit</span>
                   <span className="text-[12px] leading-[16px] font-bold text-[#8B5CF6] bg-[#8B5CF6]/20 px-[8px] py-[2px] rounded border border-[#8B5CF6]/30">≤3 cm</span>
                 </div>
                 <div className="relative w-[192px] h-[40px] border-b border-l border-[#E8E7EF]/10">
                   <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                     <path d="M 0 80 Q 50 20 100 20" fill="none" stroke="rgba(232,231,239,0.3)" strokeWidth="2" strokeDasharray="4 4" />
                     <path d="M 0 82 Q 50 22 100 22" fill="none" stroke="#8B5CF6" strokeWidth="2" />
                   </svg>
                   <div className="absolute top-[40%] left-[40%] text-[12px] leading-[16px] text-[#9CA3AF]">MAX DEVIATION</div>
                 </div>
               </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px]">
            <div className="bg-[#161616] border border-[#E8E7EF]/10 rounded-[16px] p-[24px]">
              <span className="text-[16px] leading-[24px] font-normal text-[#9CA3AF] mb-[8px] block uppercase">SCALE</span>
              <span className="text-[24px] leading-[36px] font-bold text-[#FFFFFF] mb-[8px] block">20,000+ clips</span>
              <p className="text-[16px] leading-[24px] text-[#9CA3AF] font-normal">Large-scale parking geometry datasets.</p>
            </div>
            <div className="bg-[#161616] border border-[#E8E7EF]/10 rounded-[16px] p-[24px]">
              <span className="text-[16px] leading-[24px] font-normal text-[#9CA3AF] mb-[8px] block uppercase">METHOD</span>
              <span className="text-[24px] leading-[36px] font-bold text-[#FFFFFF] mb-[8px] block">60-Frame Stacking</span>
              <p className="text-[16px] leading-[24px] text-[#9CA3AF] font-normal">Multi-frame point cloud fusion for structure recognition.</p>
            </div>
            <div className="bg-[#161616] border border-[#E8E7EF]/10 rounded-[16px] p-[24px]">
              <span className="text-[16px] leading-[24px] font-normal text-[#9CA3AF] mb-[8px] block uppercase">ELEMENTS</span>
              <span className="text-[24px] leading-[36px] font-bold text-[#FFFFFF] mb-[8px] block">Lanes, Arrows, Crosswalks</span>
              <p className="text-[16px] leading-[24px] text-[#9CA3AF] font-normal">Structured map element extraction.</p>
            </div>
          </div>

        </div>
      </section>

      {/* 6. VLA Annotation at Production Scale */}
      <section className="py-[128px] relative bg-[#0A0A0A] border-b border-[#E8E7EF]/10">
        <div className="w-full max-w-[1200px] mx-auto">
          <div className="flex flex-col gap-[24px] mb-[64px]">
            <div className="flex items-center gap-[12px]">
              <div className="w-[32px] h-[1px] bg-gradient-to-r from-transparent to-[#8B5CF6]"></div>
              <span className="text-[12px] leading-[16px] font-bold tracking-widest text-[#8B5CF6] uppercase">Vision-Language-Action / 01</span>
            </div>
            <h2 className="text-[54px] leading-[64px] font-bold text-[#FFFFFF] tracking-tight max-w-4xl">
              VLA Annotation at Production Scale
            </h2>
            <p className="text-[16px] leading-[24px] text-[#9CA3AF] font-normal max-w-3xl">
              High-quality autonomous driving annotation built on Vision-Language-Action workflows, combining perception, semantic understanding, and behavior judgment to improve model training, scene understanding, and performance in complex driving scenarios.
            </p>
          </div>

          <div className="relative w-full h-[375px] md:h-[525px] rounded-[24px] overflow-hidden border border-[#E8E7EF]/10 group bg-[#161616] shadow-[0_0_30px_rgba(139,92,246,0.1)]">
            {/* Base Image */}
            <img 
              src="https://images.unsplash.com/photo-1617721042495-04e739b9739d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvbm9tb3VzJTIwZHJpdmluZyUyMGNhciUyMGRhc2hib2FyZCUyMGNpdHklMjBuaWdodHxlbnwxfHx8fDE3NzQ3MTg2Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080" 
              alt="VLA Annotated Scene" 
              className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-screen transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/80 via-transparent to-[#0A0A0A]/60"></div>
            
            {/* Integrated VLA Overlays */}
            <div className="absolute inset-0 pointer-events-none p-[32px] md:p-[48px]">
              
              {/* Vision Layer Cues */}
              <div className="absolute top-[35%] left-[45%] w-[80px] h-[60px] border border-[#8B5CF6] bg-[#8B5CF6]/10">
                <div className="absolute -top-[24px] left-0 text-[10px] leading-[14px] font-bold text-[#8B5CF6] bg-[#0A0A0A]/80 px-[6px] py-[2px] border border-[#8B5CF6]/30 whitespace-nowrap">VEHICLE_03 (Occ: 20%)</div>
              </div>
              <div className="absolute top-[45%] right-[35%] w-[40px] h-[80px] border border-[#D946EF] bg-[#D946EF]/10">
                <div className="absolute -top-[24px] left-0 text-[10px] leading-[14px] font-bold text-[#D946EF] bg-[#0A0A0A]/80 px-[6px] py-[2px] border border-[#D946EF]/30 whitespace-nowrap">PED_01</div>
              </div>

              {/* Language Layer Cues */}
              <div className="absolute top-[20%] left-[10%] md:left-[20%] max-w-[240px]">
                <div className="bg-[#161616]/80 backdrop-blur-md border border-[#E8E7EF]/10 rounded-[8px] p-[16px] shadow-lg">
                  <div className="flex items-center gap-[8px] mb-[8px]">
                    <Languages className="w-[14px] h-[14px] text-[#8B5CF6]" />
                    <span className="text-[10px] leading-[14px] font-bold text-[#9CA3AF] uppercase">Semantic Scene</span>
                  </div>
                  <p className="text-[12px] leading-[18px] font-bold text-[#E8E7EF]">Urban Night / Wet Road / Dense Interaction / Unprotected Left Turn</p>
                </div>
              </div>

              {/* Action Layer Cues */}
              <div className="absolute bottom-[35%] right-[10%] md:right-[15%] max-w-[240px]">
                <div className="bg-[#D946EF]/10 backdrop-blur-md border border-[#D946EF]/30 rounded-[8px] p-[16px] shadow-[0_0_15px_rgba(217,70,239,0.2)]">
                  <div className="flex items-center gap-[8px] mb-[8px]">
                    <Activity className="w-[14px] h-[14px] text-[#D946EF]" />
                    <span className="text-[10px] leading-[14px] font-bold text-[#D946EF] uppercase">Action Judgment</span>
                  </div>
                  <p className="text-[12px] leading-[18px] font-bold text-[#FFFFFF]">Yield to crossing pedestrian. Trajectory: Decelerate & Wait.</p>
                </div>
              </div>

            </div>

            {/* Embedded Metrics Cluster */}
            <div className="absolute bottom-[24px] left-[24px] right-[24px] bg-[#0A0A0A]/80 backdrop-blur-xl border border-[#E8E7EF]/10 rounded-[16px] p-[20px] flex flex-row items-start justify-between gap-[20px] overflow-x-auto">
              <div className="flex flex-col">
                <span className="text-[20px] md:text-[28px] leading-[32px] font-bold text-[#FFFFFF] mb-[4px]">9.07M</span>
                <span className="text-[10px] md:text-[12px] leading-[16px] font-normal text-[#9CA3AF] uppercase whitespace-nowrap">Scenario Packages</span>
              </div>
              <div className="w-px self-stretch bg-[#E8E7EF]/10 shrink-0"></div>
              <div className="flex flex-col">
                <span className="text-[20px] md:text-[28px] leading-[32px] font-bold text-[#FFFFFF] mb-[4px]">12.96M</span>
                <span className="text-[10px] md:text-[12px] leading-[16px] font-normal text-[#9CA3AF] uppercase whitespace-nowrap">Visual Frames</span>
              </div>
              <div className="w-px self-stretch bg-[#E8E7EF]/10 shrink-0"></div>
              <div className="flex flex-col">
                <span className="text-[20px] md:text-[28px] leading-[32px] font-bold text-[#FFFFFF] mb-[4px]">4.1M</span>
                <span className="text-[10px] md:text-[12px] leading-[16px] font-normal text-[#9CA3AF] uppercase whitespace-nowrap">Event Records</span>
              </div>
              <div className="w-px self-stretch bg-[#E8E7EF]/10 shrink-0"></div>
              <div className="flex flex-col">
                <span className="text-[20px] md:text-[28px] leading-[32px] font-bold text-[#8B5CF6] mb-[4px]">98-99%</span>
                <span className="text-[10px] md:text-[12px] leading-[16px] font-normal text-[#8B5CF6]/60 uppercase whitespace-nowrap">System Accuracy</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. How Vision, Language, and Action Work Together */}
      <section className="py-[128px] relative bg-[#0A0A0A] border-b border-[#E8E7EF]/10">
        <div className="w-full max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-[64px] lg:gap-[96px] items-center">
          
          <div className="lg:w-1/2 flex flex-col order-2 lg:order-1">
             {/* Stacked Visual System */}
             <div className="relative w-full h-[500px] lg:h-[600px] flex flex-col justify-center perspective-[1200px]">
               
               {/* Base Abstract Image for mood */}
               <div className="absolute inset-0 opacity-20 pointer-events-none">
                 <img src="https://images.unsplash.com/photo-1563108773-ec12501a90db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaSUyMGRyaXZpbmclMjBwZXJjZXB0aW9uJTIwbGF5ZXJzJTIwZGFya3xlbnwxfHx8fDE3NzQ3MTg2Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080" alt="Abstract Layers" className="w-full h-full object-cover mix-blend-screen" />
               </div>

               {/* Vision Layer */}
               <div className="relative w-[85%] mx-auto bg-[#161616]/80 backdrop-blur-xl border border-[#E8E7EF]/10 rounded-[16px] p-[24px] [transform:translateZ(-100px)_rotateX(30deg)] shadow-xl mb-[-60px] transition-all duration-500 hover:[transform:translateZ(0px)_rotateX(0deg)] hover:z-30 hover:mb-0 hover:bg-[#161616]">
                 <div className="flex items-center gap-[12px] mb-[16px]">
                   <Eye className="w-[20px] h-[20px] text-[#E8E7EF]" />
                   <h3 className="text-[18px] leading-[24px] font-bold text-[#FFFFFF]">Vision Layer</h3>
                 </div>
                 <div className="flex flex-wrap gap-[8px] mb-[12px]">
                   <span className="text-[10px] leading-[14px] px-[8px] py-[4px] border border-[#E8E7EF]/10 bg-[#E8E7EF]/5 rounded text-[#9CA3AF]">Multi-source input</span>
                   <span className="text-[10px] leading-[14px] px-[8px] py-[4px] border border-[#E8E7EF]/10 bg-[#E8E7EF]/5 rounded text-[#9CA3AF]">Vehicles & Pedestrians</span>
                   <span className="text-[10px] leading-[14px] px-[8px] py-[4px] border border-[#E8E7EF]/10 bg-[#E8E7EF]/5 rounded text-[#9CA3AF]">Atypical Targets</span>
                 </div>
                 <p className="text-[12px] leading-[18px] text-[#9CA3AF]">Perceives 2D/3D boxes, occlusion levels, truncation, and inferred completeness from visual sources.</p>
               </div>

               {/* Language Layer */}
               <div className="relative w-[90%] mx-auto bg-[#161616]/90 backdrop-blur-xl border border-[#8B5CF6]/30 rounded-[16px] p-[24px] [transform:translateZ(-50px)_rotateX(30deg)] shadow-[0_-10px_30px_rgba(0,0,0,0.5)] mb-[-60px] z-10 transition-all duration-500 hover:[transform:translateZ(0px)_rotateX(0deg)] hover:z-30 hover:mb-0 hover:bg-[#161616]">
                 <div className="flex items-center gap-[12px] mb-[16px]">
                   <Map className="w-[20px] h-[20px] text-[#8B5CF6]" />
                   <h3 className="text-[18px] leading-[24px] font-bold text-[#FFFFFF]">Language Layer</h3>
                 </div>
                 <div className="flex flex-wrap gap-[8px] mb-[12px]">
                   <span className="text-[10px] leading-[14px] px-[8px] py-[4px] border border-[#8B5CF6]/30 bg-[#8B5CF6]/10 rounded text-[#8B5CF6]">Semantic Mapping</span>
                   <span className="text-[10px] leading-[14px] px-[8px] py-[4px] border border-[#E8E7EF]/10 bg-[#E8E7EF]/5 rounded text-[#9CA3AF]">Safety & Rare Events</span>
                   <span className="text-[10px] leading-[14px] px-[8px] py-[4px] border border-[#E8E7EF]/10 bg-[#E8E7EF]/5 rounded text-[#9CA3AF]">Road Topology</span>
                 </div>
                 <p className="text-[12px] leading-[18px] text-[#9CA3AF]">Applies rule-based semantic mapping to visual inputs, categorizing urban roads, highway splits, and interaction scenarios.</p>
               </div>

               {/* Action Layer */}
               <div className="relative w-[95%] mx-auto bg-[#0A0A0A] backdrop-blur-xl border border-[#D946EF]/50 rounded-[16px] p-[24px] shadow-[0_-20px_40px_rgba(0,0,0,0.8),0_0_30px_rgba(217,70,239,0.15)] z-20 transition-all duration-500 hover:[transform:translateZ(0px)_rotateX(0deg)] hover:z-30">
                 <div className="flex items-center gap-[12px] mb-[16px]">
                   <GitFork className="w-[20px] h-[20px] text-[#D946EF]" />
                   <h3 className="text-[18px] leading-[24px] font-bold text-[#FFFFFF]">Action Layer</h3>
                 </div>
                 <div className="flex flex-wrap gap-[8px] mb-[12px]">
                   <span className="text-[10px] leading-[14px] px-[8px] py-[4px] border border-[#D946EF]/30 bg-[#D946EF]/10 rounded text-[#D946EF]">Behavior Judgment</span>
                   <span className="text-[10px] leading-[14px] px-[8px] py-[4px] border border-[#E8E7EF]/20 bg-[#E8E7EF]/10 rounded text-[#E8E7EF]">Unified Labels</span>
                   <span className="text-[10px] leading-[14px] px-[8px] py-[4px] border border-[#E8E7EF]/20 bg-[#E8E7EF]/10 rounded text-[#E8E7EF]">Trajectory Validation</span>
                 </div>
                 <p className="text-[12px] leading-[18px] text-[#9CA3AF]">Determines if a scene satisfies a defined driving event, outputting unified labels combining behavior + scene + attribute.</p>
               </div>

             </div>
          </div>

          <div className="lg:w-1/2 flex flex-col order-1 lg:order-2">
            <div className="flex items-center gap-[12px] mb-[24px]">
              <div className="w-[32px] h-[1px] bg-gradient-to-r from-transparent to-[#D946EF]"></div>
              <span className="text-[12px] leading-[16px] font-bold tracking-widest text-[#D946EF] uppercase">Vision-Language-Action / 02</span>
            </div>
            <h2 className="text-[54px] leading-[64px] font-bold text-[#FFFFFF] mb-[24px] tracking-tight">
              How Vision, Language, and Action Work Together
            </h2>
            <p className="text-[16px] leading-[24px] text-[#9CA3AF] font-normal mb-[48px]">
              VLA annotation goes beyond object detection by connecting what the system sees, how the scene is interpreted, and what driving behavior is being judged.
            </p>

            <div className="flex flex-col gap-[32px]">
               <div className="flex items-start gap-[16px]">
                 <div className="w-[40px] h-[40px] shrink-0 rounded-full bg-[#161616] border border-[#E8E7EF]/10 flex items-center justify-center text-[#E8E7EF] font-bold">1</div>
                 <div>
                   <h4 className="text-[16px] leading-[24px] font-bold text-[#FFFFFF] mb-[4px]">Vision (Perceive)</h4>
                   <p className="text-[14px] leading-[20px] text-[#9CA3AF]">Extracting entities, physical structures, and physical states from multimodal sensor data.</p>
                 </div>
               </div>
               <div className="flex items-start gap-[16px]">
                 <div className="w-[40px] h-[40px] shrink-0 rounded-full bg-[#8B5CF6]/10 border border-[#8B5CF6]/30 flex items-center justify-center text-[#8B5CF6] font-bold">2</div>
                 <div>
                   <h4 className="text-[16px] leading-[24px] font-bold text-[#8B5CF6] mb-[4px]">Language (Interpret)</h4>
                   <p className="text-[14px] leading-[20px] text-[#9CA3AF]">Mapping physical observations to standardized semantic ontologies and traffic rules.</p>
                 </div>
               </div>
               <div className="flex items-start gap-[16px]">
                 <div className="w-[40px] h-[40px] shrink-0 rounded-full bg-[#D946EF]/20 border border-[#D946EF]/50 flex items-center justify-center text-[#D946EF] font-bold shadow-[0_0_15px_rgba(217,70,239,0.3)]">3</div>
                 <div>
                   <h4 className="text-[16px] leading-[24px] font-bold text-[#D946EF] mb-[4px]">Action (Decide)</h4>
                   <p className="text-[14px] leading-[20px] text-[#9CA3AF]">Evaluating the behavioral outcome, creating a unified annotation package for end-to-end model training.</p>
                 </div>
               </div>
            </div>
          </div>

        </div>
      </section>

      {/* 8. Standardized VLA Production Loop */}
      <section className="py-[128px] relative bg-[#0A0A0A] border-b border-[#E8E7EF]/10">
        <div className="w-full max-w-[1200px] mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-[80px]">
            <div className="flex items-center justify-center gap-[12px] mb-[24px]">
              <div className="w-[32px] h-[1px] bg-gradient-to-r from-transparent to-[#D946EF]"></div>
              <span className="text-[12px] leading-[16px] font-bold tracking-widest text-[#D946EF] uppercase">Vision-Language-Action / 03</span>
              <div className="w-[32px] h-[1px] bg-gradient-to-l from-transparent to-[#D946EF]"></div>
            </div>
            <h2 className="text-[54px] leading-[64px] font-bold text-[#FFFFFF] tracking-tight mb-[24px]">
              Standardized VLA Production Loop
            </h2>
            <p className="text-[16px] leading-[24px] text-[#9CA3AF] font-normal">
              The VLA workflow becomes valuable when turned into a repeatable production system — from multimodal input and scene understanding to annotation execution, rigorous QA, and model-ready structured output.
            </p>
          </div>

          <div className="relative w-full bg-[#161616] border border-[#E8E7EF]/10 rounded-[24px] p-[32px] md:p-[48px] shadow-[0_0_40px_rgba(0,0,0,0.5)] overflow-hidden">
             
             {/* Abstract background texture */}
             <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-screen">
               <img src="https://images.unsplash.com/photo-1674049949385-a475815ec415?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhaSUyMGRhdGElMjBwaXBlbGluZSUyMGFic3RyYWN0JTIwZGFya3xlbnwxfHx8fDE3NzQ3MTg2Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080" alt="Pipeline abstract" className="w-full h-full object-cover" />
             </div>
             
             {/* Challenge Markers Above */}
             <div className="relative z-10 mb-[48px] flex flex-col md:flex-row md:items-center justify-between gap-[24px] pb-[32px] border-b border-[#E8E7EF]/10">
               <div>
                 <span className="text-[12px] leading-[16px] font-bold text-[#E8E7EF] uppercase tracking-widest block mb-[12px]">Overcoming Technical Challenges</span>
                 <div className="flex flex-wrap gap-[12px]">
                   {["Long-tail events", "Low-visibility", "Dense interaction", "Atypical targets", "Ambiguous boundaries", "Strict consistency"].map((challenge, i) => (
                     <span key={i} className="px-[12px] py-[4px] bg-[#0A0A0A]/60 backdrop-blur border border-[#E8E7EF]/10 rounded-[4px] text-[10px] font-bold text-[#9CA3AF]">{challenge}</span>
                   ))}
                 </div>
               </div>
             </div>

             {/* Process Band */}
             <div className="relative z-10 flex flex-col lg:flex-row items-center lg:justify-center gap-[16px] lg:px-[32px]">
                {[
                  { name: "Input", desc: "Multimodal video/image", icon: Video },
                  { name: "Interpret", desc: "Rule & target matching", icon: Layers },
                  { name: "Annotate", desc: "4D scene & 3D tools", icon: BoxSelect },
                  { name: "Validate", desc: "Attribute QA checks", icon: ShieldCheck },
                  { name: "Output", desc: "Standardized AV datasets", icon: Database, highlight: true }
                ].map((step, i) => (
                  <div key={i} className="flex items-center w-full lg:w-auto">
                    <div className={`flex flex-col items-center justify-center p-[20px] rounded-[16px] w-full lg:w-[170px] h-[140px] text-center border transition-all ${step.highlight ? 'bg-[#D946EF]/10 border-[#D946EF]/50 shadow-[0_0_20px_rgba(217,70,239,0.2)]' : 'bg-[#0A0A0A]/80 backdrop-blur border-[#E8E7EF]/10 hover:border-[#8B5CF6]/30'}`}>
                      <step.icon className={`w-[24px] h-[24px] mb-[16px] ${step.highlight ? 'text-[#D946EF]' : 'text-[#9CA3AF]'}`} />
                      <h4 className={`text-[14px] leading-[20px] font-bold mb-[8px] ${step.highlight ? 'text-[#FFFFFF]' : 'text-[#E8E7EF]'}`}>{step.name}</h4>
                      <p className="text-[10px] leading-[14px] text-[#9CA3AF]">{step.desc}</p>
                    </div>
                    {i < 4 && (
                      <div className="hidden lg:flex w-[20px] h-[2px] bg-gradient-to-r from-[#E8E7EF]/10 to-[#E8E7EF]/10 mx-[8px] relative">
                         <motion.div className="absolute top-1/2 -translate-y-1/2 w-[6px] h-[6px] bg-[#8B5CF6] rounded-full shadow-[0_0_8px_#8B5CF6]" animate={{ left: ["0%", "100%"] }} transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }} />
                      </div>
                    )}
                    {i < 4 && (
                      <div className="flex lg:hidden h-[32px] w-[2px] bg-gradient-to-b from-[#E8E7EF]/10 to-[#E8E7EF]/10 my-[12px] relative"></div>
                    )}
                  </div>
                ))}
             </div>

             {/* Production Outcomes Below */}
             <div className="relative z-10 mt-[48px] pt-[32px] border-t border-[#E8E7EF]/10 flex flex-col md:flex-row items-center justify-between gap-[24px]">
               <span className="text-[12px] leading-[16px] font-bold text-[#D946EF] uppercase tracking-widest">Production Outcomes</span>
               <div className="flex flex-wrap justify-center gap-[16px]">
                 {[
                   { name: "Dataset Quality" },
                   { name: "Generalization" },
                   { name: "VLA Capability" },
                   { name: "Safety + Experience" }
                 ].map((outcome, i) => (
                   <div key={i} className="bg-[#D946EF]/5 border border-[#D946EF]/20 px-[16px] py-[8px] rounded-[8px] flex items-center gap-[8px]">
                     <div className="w-[6px] h-[6px] rounded-full bg-[#D946EF]"></div>
                     <span className="text-[12px] leading-[16px] font-bold text-[#FFFFFF]">{outcome.name}</span>
                   </div>
                 ))}
               </div>
             </div>

          </div>
        </div>
      </section>

      {/* 8. Closing CTA */}
      <section className="py-[128px] relative bg-[#0A0A0A] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(139,92,246,0.08)_0%,transparent_60%)] blur-[100px]"></div>
          {/* Subtle mesh background */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(232,231,239,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(232,231,239,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]"></div>
        </div>
        
        <div className="w-full max-w-[1200px] mx-auto text-center relative z-10">
          <Layers className="w-[48px] h-[48px] text-[#8B5CF6] mx-auto mb-[32px] opacity-80" />
          <h2 className="text-[54px] md:text-[64px] leading-[64px] md:leading-[72px] font-bold text-[#FFFFFF] mb-[32px] tracking-tight">
            Ready to Support High-Complexity AV Data Programs
          </h2>
          <p className="text-[24px] leading-[32px] font-bold text-[#9CA3AF] mb-[48px] max-w-2xl mx-auto">
            Whether you’re building perception systems, fusion pipelines, HD maps, or VLA-oriented driving models, we help turn complex driving data into structured assets for training and evaluation.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-[16px] w-full sm:w-auto mb-[64px]">
            <Link to="/contact" className="group w-full sm:w-auto flex items-center justify-center gap-[12px] px-[36px] py-[16px] relative rounded-[18px] shadow-[0px_20px_25px_0px_rgba(139,92,246,0.2),0px_8px_10px_0px_rgba(139,92,246,0.2)] hover:shadow-[0px_20px_25px_0px_rgba(139,92,246,0.4),0px_8px_10px_0px_rgba(139,92,246,0.4)] text-[18px] leading-[normal] font-bold text-white whitespace-nowrap transition-all" style={{ backgroundImage: "linear-gradient(90deg, rgb(139, 92, 246) 0%, rgb(145, 91, 246) 7.1429%, rgb(151, 90, 245) 14.286%, rgb(157, 90, 245) 21.429%, rgb(162, 89, 244) 28.571%, rgb(168, 87, 244) 35.714%, rgb(174, 86, 243) 42.857%, rgb(179, 85, 243) 50%, rgb(185, 83, 242) 57.143%, rgb(190, 81, 242) 64.286%, rgb(196, 80, 241) 71.429%, rgb(201, 78, 241) 78.571%, rgb(206, 75, 240) 85.714%, rgb(212, 73, 240) 92.857%, rgb(217, 70, 239) 100%)" }}>
              Contact us
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-[12px]">
            {["3D Detection", "Free Space", "Sensor Fusion", "HD Map", "Scenario Reasoning", "Large-Scale Production"].map((tag, i) => (
              <span key={i} className="px-[16px] py-[8px] rounded-full border border-[#E8E7EF]/5 bg-[#E8E7EF]/5 text-[#9CA3AF] text-[12px] leading-[16px] font-bold hover:text-[#FFFFFF] hover:border-[#8B5CF6]/50 hover:bg-[#8B5CF6]/10 transition-all cursor-default shadow-sm hover:shadow-[0_0_15px_rgba(139,92,246,0.2)]">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
