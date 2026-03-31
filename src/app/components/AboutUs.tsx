import { Header } from "./Header";
import { Footer } from "./Footer";
import { Link } from "react-router";
import { ArrowRight, CornerDownRight, Check, Database, Zap, Shield, Play } from "lucide-react";
import { motion } from "motion/react";
import { heroSection, heroContainer, heroLeftCol, heroRightPanel, heroImage, heroCTARow } from "../styles/pageStyles";

export function AboutUs() {
  return (
    <div className="bg-[#0A0A0A] min-h-screen text-[#E8E7EF] selection:bg-[#8B5CF6]/30 font-['Poppins'] overflow-x-hidden">

      <main className="relative z-10">
        
        {/* Section 1 - Hero / Intro */}
        <section id="hero-about-us" className={heroSection}>
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
            <div className="absolute top-[-20%] left-1/4 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(139,92,246,0.08)_0%,transparent_70%)] blur-[100px]"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(109,40,217,0.06)_0%,transparent_70%)] blur-[120px]"></div>
          </div>

          <div className={`${heroContainer} relative z-10`}>
            <div id="hero-left-about-us" className={heroLeftCol}>
              <h1 className="text-[48px] md:text-[56px] leading-[1.1] font-bold tracking-tight text-white mb-[24px]">
                We Help AI Teams<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] via-[#D946EF] to-[#FFFFFF]">
                  Build Better Data Workflows
                </span>
              </h1>
              
              <p className="text-[20px] leading-[1.6] text-[#9CA3AF] mb-[32px]">
                We work with AI teams to turn raw, fragmented data into structured, high-quality assets for training, evaluation, and real-world deployment. From data collection to model-assisted workflows, we support complex AI systems with the rigor they require.
              </p>

              <div className={heroCTARow}>
                <Link to="/contact" className="px-[32px] py-[16px] rounded-[16px] bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] text-white font-bold text-[16px] hover:shadow-[0_0_30px_rgba(139,92,246,0.4)] transition-all flex items-center gap-[8px]">
                  Talk to Our Team <ArrowRight size={20} />
                </Link>
              </div>
            </div>

            <div className={`${heroRightPanel} group`}>
              <img 
                src="https://images.unsplash.com/photo-1770210217380-d78a69acdc77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMEFJJTIwbmV1cmFsJTIwbmV0d29yayUyMGRhdGF8ZW58MXx8fHwxNzc0MzU0NDY3fDA&ixlib=rb-4.1.0&q=80&w=1080" 
                alt="AI Neural Network Data" 
                className={heroImage}
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0a0a0a] via-transparent to-transparent opacity-80 z-10" />
              
              {/* Abstract Glass UI Overlay 1 */}
              <div className="absolute top-10 right-10 z-20 bg-black/40 backdrop-blur-xl border border-white/10 p-5 rounded-2xl shadow-2xl w-64 transform translate-y-4 group-hover:translate-y-0 transition-all duration-700">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[10px] font-mono text-[#D946EF] uppercase tracking-wider">Pipeline Status</span>
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                </div>
                <div className="space-y-3">
                  <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-[#8B5CF6] w-[85%]"></div>
                  </div>
                  <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-[#D946EF] w-[60%]"></div>
                  </div>
                  <div className="flex justify-between text-xs text-[#9CA3AF] pt-1">
                    <span>Throughput</span>
                    <span className="text-white">94.2%</span>
                  </div>
                </div>
              </div>
              
              {/* Abstract Glass UI Overlay 2 */}
              <div className="absolute bottom-10 left-10 z-20 bg-black/40 backdrop-blur-xl border border-white/10 p-5 rounded-2xl shadow-2xl w-56 transform -translate-y-4 group-hover:translate-y-0 transition-all duration-700 delay-100">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-[rgba(139,92,246,0.2)] flex items-center justify-center border border-[rgba(139,92,246,0.3)]">
                    <Database className="w-4 h-4 text-[#8B5CF6]" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-[#9CA3AF] uppercase tracking-wider">Nodes Active</div>
                    <div className="text-lg font-medium text-white">4,021</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2 - What Makes Us Different */}
        <section className="w-full max-w-[1200px] mx-auto py-32 border-t border-white/5 relative">
          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">What Makes Us Different</h2>
            <div className="w-16 h-1 bg-purple-500"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
            {/* Block 1 */}
            <div className="group">
              <div className="h-48 rounded-2xl bg-[#161616] border border-white/5 mb-8 overflow-hidden relative flex items-center justify-center">
                {/* Custom Diagram: Networked system */}
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.4)_0%,transparent_60%)]"></div>
                <div className="relative w-full h-full flex items-center justify-center">
                  <div className="w-12 h-12 rounded-lg bg-purple-500/20 border border-purple-500/40 absolute z-10 flex items-center justify-center shadow-[0_0_20px_rgba(168,85,247,0.3)] group-hover:scale-110 transition-transform">
                    <div className="w-4 h-4 rounded bg-purple-400"></div>
                  </div>
                  {/* Surrounding nodes */}
                  {[0, 60, 120, 180, 240, 300].map((deg, i) => (
                    <div key={i} className="absolute w-full h-full" style={{ transform: `rotate(${deg}deg)` }}>
                      <div className="absolute top-[20%] left-1/2 w-[1px] h-[30%] bg-gradient-to-b from-purple-500/50 to-transparent -translate-x-1/2 origin-bottom group-hover:h-[25%] transition-all duration-500"></div>
                      <div className="absolute top-[15%] left-1/2 w-3 h-3 rounded-full bg-white/10 border border-white/20 -translate-x-1/2 group-hover:-translate-y-2 transition-transform duration-500 delay-100"></div>
                    </div>
                  ))}
                </div>
              </div>
              <h3 className="text-2xl font-medium text-white mb-4 tracking-tight group-hover:text-purple-300 transition-colors">Built for complex AI data</h3>
              <p className="text-gray-400 font-light leading-relaxed">
                We support advanced use cases such as LLMs, autonomous driving, embodied AI, and healthcare AI — not just generic data tasks.
              </p>
            </div>
            
            {/* Block 2 */}
            <div className="group">
              <div className="h-48 rounded-2xl bg-[#161616] border border-white/5 mb-8 overflow-hidden relative flex items-center justify-center px-8">
                 {/* Custom Diagram: Pipeline raw to clean */}
                 <div className="absolute inset-0 opacity-20 bg-[linear-gradient(90deg,transparent_0%,rgba(168,85,247,0.2)_50%,transparent_100%)]"></div>
                 <div className="flex items-center justify-between w-full relative z-10">
                   {/* Raw Data */}
                   <div className="flex flex-wrap w-16 gap-1 group-hover:-translate-x-2 transition-transform duration-500">
                     {[...Array(9)].map((_, i) => (
                       <div key={i} className={`w-4 h-4 rounded-sm border ${i%2===0 ? 'border-white/20 bg-transparent' : 'bg-white/10 border-transparent'} transform ${i===2?'rotate-12':i===5?'-rotate-12':''}`}></div>
                     ))}
                   </div>
                   {/* Arrow/Funnel */}
                   <div className="flex-1 px-4 relative flex items-center justify-center">
                     <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-purple-500/50 to-transparent relative">
                       <div className="absolute top-1/2 left-0 w-8 h-[2px] bg-purple-400 -translate-y-1/2 animate-[translateX_2s_ease-in-out_infinite] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                     </div>
                     <ArrowRight className="w-5 h-5 text-purple-400 absolute absolute-center bg-[#161616] px-1" />
                   </div>
                   {/* Clean Data */}
                   <div className="grid grid-cols-2 gap-2 group-hover:translate-x-2 transition-transform duration-500">
                     {[...Array(4)].map((_, i) => (
                       <div key={i} className="w-6 h-6 rounded bg-purple-500/20 border border-purple-500/40 flex items-center justify-center">
                          <div className="w-2 h-2 rounded-sm bg-purple-400"></div>
                       </div>
                     ))}
                   </div>
                 </div>
              </div>
              <h3 className="text-2xl font-medium text-white mb-4 tracking-tight group-hover:text-purple-300 transition-colors">More than annotation alone</h3>
              <p className="text-gray-400 font-light leading-relaxed">
                Our capabilities span collection, annotation, and model-related workflows, helping teams move from raw data to cleaner, more usable outputs.
              </p>
            </div>
            
            {/* Block 3 */}
            <div className="group">
              <div className="h-48 rounded-2xl bg-[#161616] border border-white/5 mb-8 overflow-hidden relative flex items-center justify-center">
                {/* Custom Diagram: Layered scale */}
                <div className="relative w-32 h-32 flex items-center justify-center group-hover:scale-105 transition-transform duration-700 perspective-[1000px]">
                  {[1, 2, 3].map((layer) => (
                    <div 
                      key={layer}
                      className="absolute w-24 h-24 border border-purple-500/30 bg-[#0A0A0A]/80 backdrop-blur-sm rounded-xl transform transition-transform duration-500 ease-out flex items-center justify-center"
                      style={{
                        transform: `rotateX(60deg) rotateZ(45deg) translateZ(${layer * 15 - 20}px)`,
                        opacity: layer === 3 ? 1 : 0.5 + layer * 0.15,
                        borderColor: layer === 3 ? 'rgba(168, 85, 247, 0.6)' : 'rgba(255, 255, 255, 0.1)'
                      }}
                    >
                      <div className="grid grid-cols-3 gap-1 w-12 h-12 transform -rotate-45">
                        {[...Array(9)].map((_, i) => (
                          <div key={i} className={`rounded-sm ${layer === 3 ? 'bg-purple-500/40' : 'bg-white/10'}`}></div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <h3 className="text-2xl font-medium text-white mb-4 tracking-tight group-hover:text-purple-300 transition-colors">Structured for scale and reuse</h3>
              <p className="text-gray-400 font-light leading-relaxed">
                We design workflows that support repeatability, quality control, and long-term operational value.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3 - Who We Work With */}
        <section className="bg-[#0A0A0A] relative overflow-hidden py-32 border-t border-white/5">
          <div className="w-full max-w-[1200px] mx-auto relative z-10">
            <div className="mb-20 max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Who We Work With</h2>
              <p className="text-xl text-gray-400 font-light leading-relaxed">
                We support teams building AI products where data quality, workflow control, and domain relevance matter most.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {[
                { 
                  title: "LLM & Generative AI Teams", 
                  desc: "Fine-tuning, alignment, and evaluation data at scale.",
                  img: "https://images.unsplash.com/photo-1760112982304-5c40449e83ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGRhdGElMjB2aXN1YWwlMjBsaW5lc3xlbnwxfHx8fDE3NzQzNTQ0NzR8MA&ixlib=rb-4.1.0&q=80&w=1080",
                  tag: "Language & Logic"
                },
                { 
                  title: "Autonomous Driving & Robotics", 
                  desc: "High-precision 3D, sensor fusion, and scenario labeling.",
                  img: "https://images.unsplash.com/photo-1699423957878-bff709d3dd4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvbm9tb3VzJTIwZHJpdmluZyUyMGxpZGFyJTIwc2Vuc29yJTIwZGFya3xlbnwxfHx8fDE3NzQzNTQ0Njd8MA&ixlib=rb-4.1.0&q=80&w=1080",
                  tag: "Spatial Intelligence"
                },
                { 
                  title: "Healthcare AI Teams", 
                  desc: "Domain-expert annotation for clinical and imaging data.",
                  img: "https://images.unsplash.com/photo-1746109970436-b3d1d66931c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwc2NhbiUyMGFic3RyYWN0JTIwdGVjaG5vbG9neSUyMGRhcmt8ZW58MXx8fHwxNzc0MzU0NDY3fDA&ixlib=rb-4.1.0&q=80&w=1080",
                  tag: "Medical Systems"
                },
                { 
                  title: "Enterprise Knowledge Systems", 
                  desc: "Structured data extraction and ontology building.",
                  img: "https://images.unsplash.com/photo-1706158449580-d4fd729c5f6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbnRlcnByaXNlJTIwZGF0YSUyMG5ldHdvcmslMjBnbG93aW5nJTIwZGFya3xlbnwxfHx8fDE3NzQzNTQ0Njd8MA&ixlib=rb-4.1.0&q=80&w=1080",
                  tag: "Structured Ontology"
                }
              ].map((item, i) => (
                <div key={i} className="group relative h-[360px] md:h-[400px] rounded-3xl overflow-hidden border border-white/10 hover:border-purple-500/30 transition-colors duration-500 cursor-default">
                  {/* Background Image */}
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 group-hover:opacity-50 transition-all duration-[1.5s] ease-out"
                  />
                  {/* Gradients */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent"></div>
                  
                  {/* Content */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <span className="inline-block px-3 py-1 bg-white/5 backdrop-blur-md rounded-full text-xs font-mono text-purple-300 border border-white/10 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                        {item.tag}
                      </span>
                      <h3 className="text-2xl md:text-3xl font-medium text-white mb-3 tracking-tight group-hover:text-purple-200 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-gray-400 font-light leading-relaxed text-lg max-w-sm">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4 - Our Approach (Diagram Led) */}
        <section className="w-full max-w-[1200px] mx-auto py-32 relative overflow-hidden border-t border-white/5 bg-[#161616]">
          <div className="mb-24 text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Our Approach</h2>
            <p className="text-xl text-gray-400 font-light leading-relaxed">
              We combine structured workflows, domain-specific execution, and human-reviewed quality control to support AI data operations that are both scalable and dependable.
            </p>
          </div>

          {/* Custom Connected Flow Diagram */}
          <div className="relative max-w-5xl mx-auto py-10">
            {/* Desktop Connector Line */}
            <div className="hidden lg:block absolute top-[140px] left-[10%] right-[10%] h-[2px] bg-white/10 z-0">
              <div className="h-full bg-gradient-to-r from-transparent via-purple-500 to-transparent w-1/3 animate-[translateX_4s_ease-in-out_infinite_alternate]"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-8 relative z-10">
              
              {/* Step 1 */}
              <div className="flex flex-col items-center text-center group">
                {/* Visual Node */}
                <div className="w-48 h-48 rounded-2xl bg-[#0A0A0A] border border-white/10 mb-8 relative flex items-center justify-center group-hover:border-purple-500/40 transition-colors duration-500 shadow-xl overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.1)_0%,transparent_70%)]"></div>
                  {/* Inner abstract graphic */}
                  <div className="relative w-20 h-20">
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded bg-purple-500/40 border border-purple-500/60"></div>
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[2px] h-6 bg-purple-500/50"></div>
                    <div className="absolute top-8 left-1/2 -translate-x-1/2 w-16 h-[2px] bg-purple-500/50"></div>
                    <div className="absolute top-4 left-2 w-4 h-4 rounded bg-white/20 border border-white/30"></div>
                    <div className="absolute top-4 right-2 w-4 h-4 rounded bg-white/20 border border-white/30"></div>
                    <div className="absolute top-8 left-4 w-[2px] h-4 bg-purple-500/50 -translate-x-1/2"></div>
                    <div className="absolute top-8 right-4 w-[2px] h-4 bg-purple-500/50 -translate-x-1/2"></div>
                  </div>
                  {/* Step Badge */}
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center text-xs font-bold border-4 border-[#161616]">1</div>
                </div>
                <h3 className="text-2xl font-medium text-white mb-4">Structure before scale</h3>
                <p className="text-gray-400 font-light px-4">We define precise ontologies and tooling before scaling throughput.</p>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col items-center text-center group mt-0 lg:mt-16">
                {/* Visual Node */}
                <div className="w-48 h-48 rounded-2xl bg-[#0A0A0A] border border-white/10 mb-8 relative flex items-center justify-center group-hover:border-purple-500/40 transition-colors duration-500 shadow-xl overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.1)_0%,transparent_70%)]"></div>
                  {/* Inner abstract graphic */}
                  <div className="relative w-24 h-24 flex items-center justify-center">
                     <div className="absolute w-16 h-16 rounded-full border border-purple-500/30 animate-[spin_10s_linear_infinite]"></div>
                     <div className="absolute w-12 h-12 rounded-full border border-dashed border-white/20 animate-[spin_15s_linear_infinite_reverse]"></div>
                     <Zap className="w-6 h-6 text-purple-400 relative z-10 group-hover:scale-110 transition-transform" />
                  </div>
                  {/* Step Badge */}
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center text-xs font-bold border-4 border-[#161616]">2</div>
                </div>
                <h3 className="text-2xl font-medium text-white mb-4">Domain relevance</h3>
                <p className="text-gray-400 font-light px-4">Matching the right expertise to your specific data modality.</p>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col items-center text-center group">
                {/* Visual Node */}
                <div className="w-48 h-48 rounded-2xl bg-[#0A0A0A] border border-white/10 mb-8 relative flex items-center justify-center group-hover:border-purple-500/40 transition-colors duration-500 shadow-xl overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.1)_0%,transparent_70%)]"></div>
                  {/* Inner abstract graphic */}
                  <div className="relative w-20 h-20 flex items-center justify-center">
                    <div className="absolute inset-0 bg-purple-500/10 rounded-lg transform rotate-45 border border-purple-500/30 group-hover:rotate-90 transition-transform duration-700"></div>
                    <div className="absolute inset-2 bg-white/5 rounded-lg transform rotate-45 border border-white/10 group-hover:rotate-0 transition-transform duration-700"></div>
                    <Shield className="w-8 h-8 text-purple-400 relative z-10" />
                  </div>
                  {/* Step Badge */}
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center text-xs font-bold border-4 border-[#161616]">3</div>
                </div>
                <h3 className="text-2xl font-medium text-white mb-4">Quality before delivery</h3>
                <p className="text-gray-400 font-light px-4">Multi-stage QA ensures you receive data ready for production.</p>
              </div>

            </div>
          </div>
        </section>

        {/* Section 5 - Company Snapshot (Infographic Dashboard) */}
        <section className="py-32 border-t border-white/5 relative bg-[#0A0A0A]">
          <div className="w-full max-w-[1200px] mx-auto relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 tracking-tight">Company Snapshot</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
              
              {/* Tile 1 */}
              <div className="lg:col-span-4 bg-white/[0.02] border border-white/[0.05] rounded-3xl p-8 hover:bg-white/[0.04] transition-colors relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 blur-2xl rounded-full"></div>
                <h4 className="text-xs uppercase tracking-[0.15em] text-purple-400/80 font-mono mb-8">Core Capabilities</h4>
                <div className="space-y-4">
                  {["Data Collection", "Data Annotation", "Model Services"].map((cap, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-500"></div>
                      <span className="text-lg text-white font-medium">{cap}</span>
                    </div>
                  ))}
                </div>
                {/* Visual touch */}
                <div className="mt-8 pt-6 border-t border-white/5 flex gap-1">
                  {[...Array(20)].map((_, i) => (
                    <div key={i} className={`h-1 flex-1 rounded-full ${i < 15 ? 'bg-purple-500/50' : 'bg-white/10'}`}></div>
                  ))}
                </div>
              </div>

              {/* Tile 2 */}
              <div className="lg:col-span-8 bg-white/[0.02] border border-white/[0.05] rounded-3xl p-8 hover:bg-white/[0.04] transition-colors relative overflow-hidden group flex flex-col justify-between">
                <h4 className="text-xs uppercase tracking-[0.15em] text-purple-400/80 font-mono mb-8">Key Industries</h4>
                <div className="grid grid-cols-2 gap-6">
                  {["LLMs", "Autonomous Driving", "Embodied AI", "Healthcare AI"].map((ind, i) => (
                    <div key={i} className="bg-[#0A0A0A] border border-white/5 p-4 rounded-xl flex items-center gap-4 group-hover:border-purple-500/20 transition-colors">
                      <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center font-mono text-purple-400 text-sm">
                        0{i+1}
                      </div>
                      <span className="text-white font-medium">{ind}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tile 3 */}
              <div className="lg:col-span-7 bg-white/[0.02] border border-white/[0.05] rounded-3xl p-8 hover:bg-white/[0.04] transition-colors relative overflow-hidden flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1">
                  <h4 className="text-xs uppercase tracking-[0.15em] text-purple-400/80 font-mono mb-4">Delivery Modes</h4>
                  <p className="text-xl text-white font-light leading-snug">Platform Access, Managed Workflows, Expert Services</p>
                </div>
                {/* Visual touch: 3 pillars */}
                <div className="flex items-end gap-2 h-20">
                  <div className="w-8 h-[60%] bg-white/10 rounded-t-sm group-hover:bg-purple-500/30 transition-colors"></div>
                  <div className="w-8 h-[100%] bg-purple-500/40 rounded-t-sm group-hover:bg-purple-500/60 transition-colors"></div>
                  <div className="w-8 h-[80%] bg-white/10 rounded-t-sm group-hover:bg-purple-500/30 transition-colors"></div>
                </div>
              </div>

              {/* Tile 4 */}
              <div className="lg:col-span-5 bg-gradient-to-br from-purple-900/20 to-transparent border border-purple-500/20 rounded-3xl p-8 hover:bg-purple-900/30 transition-colors relative overflow-hidden group">
                <h4 className="text-xs uppercase tracking-[0.15em] text-purple-300 font-mono mb-4">Workflow Focus</h4>
                <div className="flex flex-wrap gap-2">
                  {["Quality", "Scalability", "Structured execution", "Real-world usability"].map((tag, i) => (
                    <span key={i} className="px-3 py-1.5 bg-purple-500/10 border border-purple-500/20 rounded-full text-sm text-purple-100 whitespace-nowrap">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Section 6 - Closing */}
        <section className="relative py-40 md:py-56 overflow-hidden">
          {/* Large Background Image & Gradient */}
          <div className="absolute inset-0 z-0">
             <img 
               src="https://images.unsplash.com/photo-1721183186502-b82455f11c80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWdoLWVuZCUyMHRlY2hub2xvZ3klMjBzeXN0ZW0lMjBzZXJ2ZXIlMjByb29tJTIwZGFya3xlbnwxfHx8fDE3NzQzNTQ0NzR8MA&ixlib=rb-4.1.0&q=80&w=1080" 
               alt="Enterprise Tech Background" 
               className="w-full h-full object-cover opacity-20"
             />
             <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#0A0A0A]/80 to-[#0A0A0A]"></div>
             <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.15)_0%,transparent_70%)]"></div>
          </div>

          <div className="w-full max-w-[1200px] mx-auto text-center relative z-10 flex flex-col items-center">
            
            <div className="w-20 h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-10 backdrop-blur-md">
              <div className="w-12 h-12 rounded-full bg-purple-500/20 border border-purple-500/30 flex items-center justify-center animate-pulse">
                <div className="w-6 h-6 rounded-full bg-purple-400"></div>
              </div>
            </div>

            <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight leading-[1.05] max-w-4xl">
              Why Teams Choose to <br className="hidden md:block" /> Work With Us
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed mb-16 max-w-3xl">
              Because strong AI systems do not start with raw data alone. They start with the right workflows, the right quality standards, and the right partner to turn complexity into something usable.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto">
              <Link to="/contact" className="group w-full sm:w-auto flex items-center justify-center gap-[12px] px-[36px] py-[16px] relative rounded-[18px] shadow-[0px_20px_25px_0px_rgba(139,92,246,0.2),0px_8px_10px_0px_rgba(139,92,246,0.2)] hover:shadow-[0px_20px_25px_0px_rgba(139,92,246,0.4),0px_8px_10px_0px_rgba(139,92,246,0.4)] text-[18px] leading-[normal] font-bold text-white whitespace-nowrap transition-all" style={{ backgroundImage: "linear-gradient(90deg, rgb(139, 92, 246) 0%, rgb(145, 91, 246) 7.1429%, rgb(151, 90, 245) 14.286%, rgb(157, 90, 245) 21.429%, rgb(162, 89, 244) 28.571%, rgb(168, 87, 244) 35.714%, rgb(174, 86, 243) 42.857%, rgb(179, 85, 243) 50%, rgb(185, 83, 242) 57.143%, rgb(190, 81, 242) 64.286%, rgb(196, 80, 241) 71.429%, rgb(201, 78, 241) 78.571%, rgb(206, 75, 240) 85.714%, rgb(212, 73, 240) 92.857%, rgb(217, 70, 239) 100%)" }}>
                Contact us
                <ArrowRight className="w-[18px] h-[18px] group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
