import { Header } from "./Header";
import { Footer } from "./Footer";
import { Link } from "react-router";
import { ArrowRight, Layers, Workflow, CheckCircle2, Combine, Cpu, BoxSelect, ServerCog, Sparkles } from "lucide-react";

export function Teams() {
  return (
    <div className="bg-[#0A0A0A] min-h-screen text-[#e8e7ef] selection:bg-purple-500/30 font-sans overflow-x-hidden">
      {/* Abstract Ambient Gradients */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(168,85,247,0.07)_0%,transparent_70%)] blur-[120px]"></div>
        <div className="absolute bottom-[20%] left-[-10%] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(139,92,246,0.05)_0%,transparent_70%)] blur-[100px]"></div>
      </div>

      <main className="relative z-10">
        
        {/* Section 1 - Hero */}
        <section className="relative min-h-[90vh] flex flex-col justify-center w-full max-w-[1200px] mx-auto pt-40 pb-20">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto z-10 mb-16">
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-white mb-8">
              The Team Behind Reliable <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] via-[#D946EF] to-[#FFFFFF]">
                AI Data Workflows
              </span>
            </h1>
            
            <p className="text-xl text-gray-400 leading-relaxed font-light">
              We turn fragmented data, complex workflows, and specialized AI requirements into structured delivery systems that teams can trust. We are the execution engine behind intelligent operations.
            </p>
          </div>
          
          {/* Abstract Network Visual */}
          <div className="relative w-full h-[500px] rounded-3xl overflow-hidden border border-white/5 bg-[#161616] group">
            <img 
              src="https://images.unsplash.com/photo-1675044794023-2c70962f4899?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMG5vZGVzJTIwY29ubmVjdGVkJTIwbmV0d29yayUyMGRhcmt8ZW58MXx8fHwxNzc0NDAyMzA2fDA&ixlib=rb-4.1.0&q=80&w=1080" 
              alt="Connected Nodes Network" 
              className="w-full h-full object-cover opacity-30 mix-blend-screen scale-105 group-hover:scale-100 transition-transform duration-[3s] ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent z-10" />
            
            {/* Custom Diagram Overlay */}
            <div className="absolute inset-0 flex items-center justify-center z-20">
               <div className="relative w-[80%] max-w-[800px] h-[300px]">
                 {/* Central Hub */}
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-2xl bg-[#0A0A0A]/80 backdrop-blur-md border border-purple-500/40 flex items-center justify-center shadow-[0_0_40px_rgba(168,85,247,0.2)] z-30">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-fuchsia-600 flex items-center justify-center">
                       <Workflow className="w-6 h-6 text-white" />
                    </div>
                 </div>

                 {/* Connecting Nodes */}
                 {[
                   { top: '10%', left: '20%', icon: Layers, label: 'Data Architects' },
                   { top: '80%', left: '30%', icon: CheckCircle2, label: 'Quality Leads' },
                   { top: '15%', left: '80%', icon: Cpu, label: 'ML Engineers' },
                   { top: '75%', left: '70%', icon: Combine, label: 'Domain Experts' },
                 ].map((node, i) => (
                   <div key={i} className="absolute flex flex-col items-center gap-3 transform -translate-x-1/2 -translate-y-1/2 z-20 group-hover:-translate-y-2 transition-transform duration-700" style={{ top: node.top, left: node.left, transitionDelay: `${i * 100}ms` }}>
                      <div className="w-12 h-12 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <node.icon className="w-5 h-5 text-purple-300" />
                      </div>
                      <span className="text-xs font-mono text-gray-400 uppercase tracking-widest">{node.label}</span>
                   </div>
                 ))}

                 {/* Animated Connections */}
                 <svg className="absolute inset-0 w-full h-full z-10 pointer-events-none opacity-50" preserveAspectRatio="none">
                    <path d="M 20% 10% L 50% 50% L 80% 15%" fill="none" stroke="url(#line-grad-1)" strokeWidth="1.5" strokeDasharray="4 4" />
                    <path d="M 30% 80% L 50% 50% L 70% 75%" fill="none" stroke="url(#line-grad-2)" strokeWidth="1.5" strokeDasharray="4 4" />
                    <defs>
                      <linearGradient id="line-grad-1" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.1" />
                        <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.1" />
                      </linearGradient>
                      <linearGradient id="line-grad-2" x1="0" y1="1" x2="1" y2="0">
                        <stop offset="0%" stopColor="#d946ef" stopOpacity="0.1" />
                        <stop offset="50%" stopColor="#d946ef" stopOpacity="0.8" />
                        <stop offset="100%" stopColor="#d946ef" stopOpacity="0.1" />
                      </linearGradient>
                    </defs>
                 </svg>
               </div>
            </div>
          </div>
        </section>

        {/* Section 2 - What Our Team Brings (Asymmetrical layout) */}
        <section className="w-full max-w-[1200px] mx-auto py-32 border-t border-white/5 relative">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">What Our Team Brings</h2>
              <p className="text-xl text-gray-400 font-light">
                We operate as a unified system of specialized skills, ensuring every data pipeline runs with precision.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[280px]">
            
            {/* Block 1 - Large Vertical */}
            <div className="md:col-span-5 md:row-span-2 rounded-3xl bg-gradient-to-b from-[#161616] to-[#0A0A0A] border border-white/5 p-10 relative overflow-hidden group hover:border-purple-500/30 transition-colors duration-500 flex flex-col">
               <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/5 blur-3xl rounded-full"></div>
               <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 relative z-10 group-hover:scale-110 transition-transform duration-500">
                 <Combine className="w-6 h-6 text-purple-400" />
               </div>
               <h3 className="text-3xl font-medium text-white mb-4 z-10">Cross-functional execution</h3>
               <p className="text-gray-400 font-light leading-relaxed z-10 flex-1">
                 Our workflows are never siloed. Data engineers, domain annotators, and QA leads work in parallel. We design pipelines that prevent bottlenecks and maintain continuous, structured delivery.
               </p>
               {/* Visual touch */}
               <div className="h-32 mt-6 relative z-10 w-full border-t border-white/10 pt-6">
                 <div className="flex gap-2 h-full">
                    {[40, 70, 50, 90, 60, 100].map((h, i) => (
                      <div key={i} className="flex-1 bg-white/5 rounded-t-sm relative overflow-hidden group-hover:bg-white/10 transition-colors" style={{ height: `${h}%`, marginTop: 'auto' }}>
                        <div className="absolute bottom-0 w-full bg-purple-500/50" style={{ height: '2px' }}></div>
                      </div>
                    ))}
                 </div>
               </div>
            </div>

            {/* Block 2 - Horizontal Top */}
            <div className="md:col-span-7 md:row-span-1 rounded-3xl bg-[#161616] border border-white/5 p-10 relative overflow-hidden group hover:border-purple-500/30 transition-colors duration-500 flex items-center gap-8">
               <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(168,85,247,0.1)_0%,transparent_60%)]"></div>
               <div className="flex-1 z-10">
                 <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6">
                   <BoxSelect className="w-5 h-5 text-purple-400" />
                 </div>
                 <h3 className="text-2xl font-medium text-white mb-3">Domain-specific expertise</h3>
                 <p className="text-gray-400 font-light leading-relaxed">
                   We match the precise modality of your data to the specific technical literacy required to interpret it.
                 </p>
               </div>
               {/* Visual */}
               <div className="hidden lg:flex w-48 h-full items-center justify-center relative z-10">
                 <div className="w-full h-full border border-purple-500/20 rounded-2xl flex items-center justify-center relative overflow-hidden">
                   <div className="absolute w-[200%] h-[200%] bg-[conic-gradient(from_0deg,transparent_0_340deg,rgba(168,85,247,0.4)_360deg)] animate-[spin_4s_linear_infinite]"></div>
                   <div className="absolute inset-[1px] bg-[#161616] rounded-2xl"></div>
                   <div className="grid grid-cols-2 gap-2 z-10">
                     <div className="w-6 h-6 rounded bg-purple-500/20"></div>
                     <div className="w-6 h-6 rounded bg-purple-500/60"></div>
                     <div className="w-6 h-6 rounded bg-white/10"></div>
                     <div className="w-6 h-6 rounded bg-purple-500/40"></div>
                   </div>
                 </div>
               </div>
            </div>

            {/* Block 3 - Small Square */}
            <div className="md:col-span-3 md:row-span-1 rounded-3xl bg-[#161616] border border-white/5 p-8 relative overflow-hidden group hover:border-purple-500/30 transition-colors duration-500 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-5">
                  <CheckCircle2 className="w-5 h-5 text-purple-400" />
                </div>
                <h3 className="text-xl font-medium text-white mb-3">Quality-driven</h3>
                <p className="text-sm text-gray-400 font-light leading-relaxed">
                  Rigorous multi-stage validation ensures high fidelity.
                </p>
              </div>
              <div className="w-full h-1 bg-white/5 rounded-full mt-6 overflow-hidden">
                 <div className="h-full bg-purple-500 w-[95%] group-hover:w-full transition-all duration-1000"></div>
              </div>
            </div>

            {/* Block 4 - Medium Square */}
            <div className="md:col-span-4 md:row-span-1 rounded-3xl bg-gradient-to-tr from-[#161616] to-purple-900/10 border border-white/5 p-8 relative overflow-hidden group hover:border-purple-500/30 transition-colors duration-500 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-5">
                  <ServerCog className="w-5 h-5 text-fuchsia-400" />
                </div>
                <h3 className="text-xl font-medium text-white mb-3">Scalable collaboration</h3>
                <p className="text-sm text-gray-400 font-light leading-relaxed">
                  Our infrastructure scales resources without breaking process structure.
                </p>
              </div>
              {/* Visual layers */}
              <div className="flex -space-x-4 mt-6">
                {[1,2,3,4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-[#161616] bg-white/10 flex items-center justify-center text-[10px] font-mono text-white/50 group-hover:-translate-y-1 transition-transform" style={{ transitionDelay: `${i*50}ms` }}>
                    0{i}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* Section 3 - How the Team Operates (Process Map) */}
        <section className="bg-[#161616] relative overflow-hidden py-32 border-t border-white/5">
          <div className="w-full max-w-[1200px] mx-auto relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-24">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">How the Team Operates</h2>
              <p className="text-xl text-gray-400 font-light leading-relaxed">
                We combine structured methodology, continuous human + AI collaboration, and tight feedback loops to manage complexity.
              </p>
            </div>

            {/* Custom Process Diagram */}
            <div className="relative max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative z-20">
                {[
                  { step: "01", title: "Alignment", desc: "Establishing strict ontology & guidelines." },
                  { step: "02", title: "Orchestration", desc: "Routing data to specialized annotators." },
                  { step: "03", title: "Human + AI", desc: "Model-assisted execution & refinement." },
                  { step: "04", title: "Validation", desc: "Multi-tier QA before final delivery." }
                ].map((item, index) => (
                  <div key={index} className="bg-[#161616] border border-white/10 rounded-2xl p-6 relative group hover:border-purple-500/50 transition-colors">
                     {/* Step Number */}
                     <div className="absolute -top-4 left-6 w-8 h-8 rounded bg-[#0A0A0A] border border-white/10 flex items-center justify-center text-xs font-mono text-purple-400 group-hover:bg-purple-500/20 group-hover:text-purple-300 transition-colors">
                       {item.step}
                     </div>
                     <div className="mt-4">
                       <h4 className="text-lg font-medium text-white mb-2">{item.title}</h4>
                       <p className="text-sm text-gray-400 font-light">{item.desc}</p>
                     </div>
                     {/* Inner diagram cue */}
                     <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                       <div className="flex gap-1">
                         {[1,2,3].map(i => (
                           <div key={i} className={`w-2 h-2 rounded-full ${i===1 ? 'bg-purple-500' : 'bg-white/10'}`}></div>
                         ))}
                       </div>
                       <ArrowRight className="w-4 h-4 text-white/20 group-hover:text-purple-400 group-hover:translate-x-1 transition-all" />
                     </div>
                  </div>
                ))}
              </div>

              {/* Connecting Background Track */}
              <div className="hidden md:block absolute top-1/2 left-0 w-full h-[2px] bg-white/5 z-10 -translate-y-1/2">
                <div className="h-full bg-gradient-to-r from-transparent via-purple-500 to-transparent w-1/4 animate-[translateX_3s_ease-in-out_infinite_alternate]"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4 - Built for Complex AI Domains */}
        <section className="py-32 border-t border-white/5 relative">
          <div className="w-full max-w-[1200px] mx-auto">
            <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
              <div className="max-w-2xl">
                <div className="w-16 h-1 bg-purple-500 mb-8"></div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Built for Complex AI Domains</h2>
                <p className="text-xl text-gray-400 font-light leading-relaxed">
                  We don't do generic data labeling. Our teams are constructed around the specific technical nuances of advanced AI modalities.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-16 lg:gap-24 relative">
              {/* Vertical connecting line */}
              <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/5 -translate-x-1/2"></div>
              
              {/* Domain 1: LLM */}
              <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24 relative group">
                <div className="lg:w-1/2 w-full lg:text-right flex flex-col items-start lg:items-end order-2 lg:order-1 relative z-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-mono text-purple-400 mb-6">
                    01 // LLM & Generative AI
                  </div>
                  <h3 className="text-3xl md:text-4xl font-medium text-white mb-4">Language Model Tuning</h3>
                  <p className="text-gray-400 font-light leading-relaxed max-w-md mb-8 lg:ml-auto">
                    Complex instruction following, RLHF, and conversational grounding at scale. We build diverse, high-quality prompt-response datasets with strict adherence to policy and tone.
                  </p>
                  <div className="flex gap-4">
                     <span className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-purple-500/50 transition-colors"><Sparkles className="w-5 h-5 text-white/50 group-hover:text-purple-400 transition-colors" /></span>
                     <span className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-purple-500/50 transition-colors"><Layers className="w-5 h-5 text-white/50 group-hover:text-purple-400 transition-colors" /></span>
                  </div>
                </div>
                
                {/* Node center */}
                <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-purple-500 border-[4px] border-[#0A0A0A] z-20 shadow-[0_0_20px_rgba(168,85,247,0.5)] group-hover:scale-150 transition-transform duration-500"></div>
                
                <div className="lg:w-1/2 w-full h-[350px] md:h-[450px] order-1 lg:order-2">
                  <div className="w-full h-full rounded-3xl overflow-hidden bg-[#161616] border border-white/5 relative group-hover:border-purple-500/30 transition-colors duration-700">
                    <img 
                      src="https://images.unsplash.com/photo-1708807524676-86a7a4d42d2f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmNoZXN0cmF0aW9uJTIwY29tcGxleCUyMHN5c3RlbXMlMjBhYnN0cmFjdHxlbnwxfHx8fDE3NzQ0MDIzMDZ8MA&ixlib=rb-4.1.0&q=80&w=1080" 
                      alt="LLM Orchestration" 
                      className="w-full h-full object-cover opacity-30 mix-blend-screen group-hover:scale-105 transition-transform duration-[2s] ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#0A0A0A] via-transparent to-[#0A0A0A]/80"></div>
                  </div>
                </div>
              </div>

              {/* Domain 2: Autonomous Driving */}
              <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24 relative group">
                <div className="lg:w-1/2 w-full h-[350px] md:h-[450px]">
                  <div className="w-full h-full rounded-3xl overflow-hidden bg-[#161616] border border-white/5 relative group-hover:border-fuchsia-500/30 transition-colors duration-700">
                    <img 
                      src="https://images.unsplash.com/photo-1641869089000-bbfdfff05afc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGxheWVycyUyMGdsb3dpbmclMjBBSSUyMGRhdGF8ZW58MXx8fHwxNzc0NDAyMzA2fDA&ixlib=rb-4.1.0&q=80&w=1080" 
                      alt="Spatial Intelligence" 
                      className="w-full h-full object-cover opacity-30 mix-blend-screen group-hover:scale-105 transition-transform duration-[2s] ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tl from-[#0A0A0A] via-transparent to-[#0A0A0A]/80"></div>
                  </div>
                </div>
                
                {/* Node center */}
                <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-fuchsia-500 border-[4px] border-[#0A0A0A] z-20 shadow-[0_0_20px_rgba(217,70,239,0.5)] group-hover:scale-150 transition-transform duration-500"></div>
                
                <div className="lg:w-1/2 w-full flex flex-col items-start relative z-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-mono text-fuchsia-400 mb-6">
                    02 // Autonomous Systems
                  </div>
                  <h3 className="text-3xl md:text-4xl font-medium text-white mb-4">Spatial Intelligence</h3>
                  <p className="text-gray-400 font-light leading-relaxed max-w-md mb-8">
                    Sensor fusion, 3D tracking, and dynamic scenario mapping for robotics. We handle LiDAR, radar, and complex multi-camera synchronizations.
                  </p>
                  <div className="flex gap-4">
                     <span className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-fuchsia-500/50 transition-colors"><BoxSelect className="w-5 h-5 text-white/50 group-hover:text-fuchsia-400 transition-colors" /></span>
                     <span className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-fuchsia-500/50 transition-colors"><Combine className="w-5 h-5 text-white/50 group-hover:text-fuchsia-400 transition-colors" /></span>
                  </div>
                </div>
              </div>

              {/* Domain 3: Healthcare */}
              <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24 relative group">
                <div className="lg:w-1/2 w-full lg:text-right flex flex-col items-start lg:items-end order-2 lg:order-1 relative z-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-mono text-blue-400 mb-6">
                    03 // Healthcare AI
                  </div>
                  <h3 className="text-3xl md:text-4xl font-medium text-white mb-4">Clinical Precision</h3>
                  <p className="text-gray-400 font-light leading-relaxed max-w-md mb-8 lg:ml-auto">
                    Expert-led annotation for medical imaging and structured health records. Workflows designed for compliance, driven by domain practitioners.
                  </p>
                  <div className="flex gap-4">
                     <span className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-blue-500/50 transition-colors"><CheckCircle2 className="w-5 h-5 text-white/50 group-hover:text-blue-400 transition-colors" /></span>
                  </div>
                </div>
                
                {/* Node center */}
                <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-blue-500 border-[4px] border-[#0A0A0A] z-20 shadow-[0_0_20px_rgba(139,92,246,0.5)] group-hover:scale-150 transition-transform duration-500"></div>
                
                <div className="lg:w-1/2 w-full h-[350px] md:h-[450px] order-1 lg:order-2">
                  <div className="w-full h-full rounded-3xl overflow-hidden bg-[#161616] border border-white/5 relative group-hover:border-blue-500/30 transition-colors duration-700 flex items-center justify-center">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.08)_0%,transparent_70%)]"></div>
                    <div className="relative w-64 h-64 border border-blue-500/20 rounded-full flex items-center justify-center">
                       <div className="absolute w-full h-full border-t border-blue-400/50 rounded-full animate-[spin_10s_linear_infinite]"></div>
                       <div className="w-40 h-40 border border-white/10 rounded-full flex items-center justify-center relative">
                          <div className="absolute w-full h-full border-b border-white/30 rounded-full animate-[spin_7s_linear_infinite_reverse]"></div>
                          <div className="w-20 h-20 bg-blue-500/10 blur-xl rounded-full group-hover:bg-blue-500/20 transition-colors"></div>
                       </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Domain 4: Enterprise */}
              <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24 relative group">
                <div className="lg:w-1/2 w-full h-[350px] md:h-[450px]">
                  <div className="w-full h-full rounded-3xl overflow-hidden bg-[#161616] border border-white/5 relative group-hover:border-indigo-500/30 transition-colors duration-700">
                    <img 
                      src="https://images.unsplash.com/photo-1768796371277-5cff3ec6cfc1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbnRlcnByaXNlJTIwZGF0YSUyMGludGVsbGlnZW5jZSUyMG5ldHdvcmslMjBkYXJrfGVufDF8fHx8MTc3NDQwMjMwNnww&ixlib=rb-4.1.0&q=80&w=1080" 
                      alt="Enterprise Knowledge" 
                      className="w-full h-full object-cover opacity-30 mix-blend-screen group-hover:scale-105 transition-transform duration-[2s] ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-[#0A0A0A]/80"></div>
                  </div>
                </div>
                
                {/* Node center */}
                <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-indigo-500 border-[4px] border-[#0A0A0A] z-20 shadow-[0_0_20px_rgba(139,92,246,0.5)] group-hover:scale-150 transition-transform duration-500"></div>
                
                <div className="lg:w-1/2 w-full flex flex-col items-start relative z-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-mono text-indigo-400 mb-6">
                    04 // Enterprise Systems
                  </div>
                  <h3 className="text-3xl md:text-4xl font-medium text-white mb-4">Knowledge Extraction</h3>
                  <p className="text-gray-400 font-light leading-relaxed max-w-md mb-8">
                    Transforming unstructured enterprise documents into mapped ontological data. We extract relationships and entities to fuel proprietary search and reasoning.
                  </p>
                  <div className="flex gap-4">
                     <span className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-indigo-500/50 transition-colors"><ServerCog className="w-5 h-5 text-white/50 group-hover:text-indigo-400 transition-colors" /></span>
                     <span className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-indigo-500/50 transition-colors"><Workflow className="w-5 h-5 text-white/50 group-hover:text-indigo-400 transition-colors" /></span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Section 5 - Team Philosophy */}
        <section className="py-32 border-t border-white/5 bg-[#0A0A0A]">
          <div className="w-full max-w-[1200px] mx-auto flex flex-col md:flex-row gap-16 md:gap-24">
            <div className="md:w-1/3">
              <span className="text-xs font-mono tracking-[0.2em] text-purple-400 uppercase block mb-4">Philosophy</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight">
                Working <br/> Principles
              </h2>
            </div>
            
            <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-16">
              {[
                { title: "Structure before scale", desc: "We map out rigid guidelines and establish tooling guardrails before ramping up volume. Control first." },
                { title: "Domain relevance", desc: "Generalist knowledge doesn't cut it. We ensure every workflow is handled by teams with specific vertical context." },
                { title: "Quality before delivery", desc: "Throughput means nothing without fidelity. Our multi-stage review ensures you never ingest broken data." },
                { title: "Collaboration over handoff", desc: "We don't throw files over the wall. We integrate directly into your iterative feedback cycles." }
              ].map((principle, i) => (
                <div key={i} className="relative group">
                  <div className="absolute -left-6 top-0 w-[2px] h-0 bg-purple-500 group-hover:h-full transition-all duration-500 ease-out"></div>
                  <h4 className="text-xl font-medium text-white mb-3 flex items-center gap-3">
                    <span className="text-sm font-mono text-white/20">0{i+1}</span> 
                    {principle.title}
                  </h4>
                  <p className="text-gray-400 font-light leading-relaxed">
                    {principle.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 6 - Closing / CTA */}
        <section className="relative py-40 md:py-56 overflow-hidden">
          <div className="absolute inset-0 z-0">
             <img 
               src="https://images.unsplash.com/photo-1759956445479-ab537a9b2f12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25uZWN0ZWQlMjB3b3JrZmxvdyUyMGNvbGxhYm9yYXRpb24lMjBhYnN0cmFjdCUyMGRhcmt8ZW58MXx8fHwxNzc0NDAyMzA2fDA&ixlib=rb-4.1.0&q=80&w=1080" 
               alt="Connected Workflow Abstract" 
               className="w-full h-full object-cover opacity-15"
             />
             <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#0A0A0A]/80 to-[#0A0A0A]"></div>
             <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.15)_0%,transparent_60%)]"></div>
          </div>

          <div className="w-full max-w-[1200px] mx-auto text-center relative z-10 flex flex-col items-center">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 tracking-tight leading-[1.1]">
              Built to Support Teams <br /> Building Serious AI
            </h2>
            <p className="text-xl text-gray-300 font-light leading-relaxed mb-16 max-w-2xl">
              We operate as a trusted extension of your own workflow — a capable execution partner designed specifically for complex data systems.
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
