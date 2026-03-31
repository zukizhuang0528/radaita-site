import { Header } from "./Header";
import { Footer } from "./Footer";
import { Link } from "react-router";
import { ArrowRight, Mail, MapPin, CheckCircle2, MessageSquare, Briefcase, ChevronDown } from "lucide-react";
import { heroSection } from "../styles/pageStyles";

export function Contact() {
  return (
    <div className="bg-[#0A0A0A] min-h-screen text-[#E8E7EF] selection:bg-[#8B5CF6]/30 font-['Poppins'] overflow-x-hidden">

      <main className="relative z-10">
        
        {/* Section 1 & 2 - Hero Split with Form */}
        <section className={heroSection}>
          {/* Section-level ambient gradients */}
          <div className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(168,85,247,0.07)_0%,transparent_70%)] blur-[120px] pointer-events-none"></div>
          <div className="absolute bottom-[20%] left-[-10%] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(139,92,246,0.05)_0%,transparent_70%)] blur-[100px] pointer-events-none"></div>

          <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-8 lg:gap-12">
            
            {/* Left Column: Intro */}
            <div className="lg:w-5/12 flex flex-col justify-start lg:self-stretch z-10 pt-10">
              <h1 className="text-[48px] md:text-[56px] font-bold leading-[1.1] tracking-tight text-white mb-8">
                Let's Talk About Your <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] via-[#D946EF] to-[#FFFFFF]">
                  AI Data Needs
                </span>
              </h1>
              
              <p className="text-[20px] text-[#A1A1AA] leading-relaxed font-light mb-12 max-w-md">
                Invite our team to help with data collection, annotation, model services, partnerships, or any other enterprise inquiry. Reach out, and we'll align the right expertise for your project.
              </p>
            </div>

            {/* Right Column: Form */}
            <div className="lg:w-7/12">
              <div className="bg-[#131218] border border-white/5 rounded-3xl p-8 sm:p-12 relative overflow-hidden">
                
                <form className="relative z-10 flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                  
                  <div className="flex flex-col sm:flex-row gap-6">
                    <div className="flex-1 flex flex-col gap-2">
                      <label htmlFor="name" className="text-sm font-medium text-gray-300">Full Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        placeholder="John Doe"
                        className="w-full bg-[#0b0a0f] border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                      />
                    </div>
                    <div className="flex-1 flex flex-col gap-2">
                      <label htmlFor="email" className="text-sm font-medium text-gray-300">Work Email</label>
                      <input 
                        type="email" 
                        id="email" 
                        placeholder="john@company.com"
                        className="w-full bg-[#0b0a0f] border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="company" className="text-sm font-medium text-gray-300">Company</label>
                    <input 
                      type="text" 
                      id="company" 
                      placeholder="Organization Name"
                      className="w-full bg-[#0b0a0f] border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                    />
                  </div>

                  <div className="flex flex-col gap-2 relative">
                    <label htmlFor="topic" className="text-sm font-medium text-gray-300">Topic / Inquiry Type</label>
                    <div className="relative">
                      <select 
                        id="topic" 
                        className="w-full appearance-none bg-[#0b0a0f] border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                        defaultValue=""
                      >
                        <option value="" disabled hidden className="text-gray-600">Select a topic...</option>
                        <option value="general" className="bg-[#131218] text-white py-2">General Inquiry</option>
                        <option value="pricing" className="bg-[#131218] text-white py-2">Pricing</option>
                        <option value="collection" className="bg-[#131218] text-white py-2">Data Collection</option>
                        <option value="annotation" className="bg-[#131218] text-white py-2">Data Annotation</option>
                        <option value="models" className="bg-[#131218] text-white py-2">Model Services</option>
                        <option value="partnerships" className="bg-[#131218] text-white py-2">Partnerships</option>
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-300">Message</label>
                    <textarea 
                      id="message" 
                      rows={4}
                      placeholder="Tell us about your project or data requirements..."
                      className="w-full bg-[#0b0a0f] border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all resize-none"
                    ></textarea>
                  </div>

                  <div className="mt-4">
                    <button 
                      type="submit"
                      className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white rounded-xl font-medium transition-all text-sm md:text-base shadow-[0_0_20px_rgba(168,85,247,0.2)] hover:shadow-[0_0_30px_rgba(168,85,247,0.4)]"
                    >
                      Send Inquiry
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                  
                </form>
              </div>
            </div>
            
          </div>
        </section>

        {/* Section 3 - What Happens Next */}
        <section className="bg-[#161616] relative overflow-hidden py-32 border-t border-white/5">
          <div className="w-full max-w-[1200px] mx-auto relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-20">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">What Happens After You Reach Out</h2>
            </div>

            <div className="relative max-w-5xl mx-auto">
              {/* Desktop connecting line */}
              <div className="hidden md:block absolute top-12 left-10 right-10 h-[1px] bg-white/5 z-0">
                <div className="h-full bg-gradient-to-r from-purple-500/0 via-purple-500/50 to-purple-500/0 w-1/3 animate-[translateX_4s_ease-in-out_infinite_alternate]"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
                {[
                  { icon: MessageSquare, step: "01", title: "We review your request", desc: "Our team assesses your inquiry to understand your specific AI modality and project scope." },
                  { icon: Briefcase, step: "02", title: "We route to specialists", desc: "Your request is matched with the domain-specific team best equipped to handle your requirements." },
                  { icon: CheckCircle2, step: "03", title: "We align on next steps", desc: "We follow up promptly to schedule a discussion, provide scoping details, or offer recommendations." }
                ].map((item, index) => (
                  <div key={index} className="flex flex-col items-center md:items-start text-center md:text-left group">
                     <div className="w-24 h-24 rounded-2xl bg-[#161616] border border-white/10 flex items-center justify-center mb-8 relative group-hover:border-purple-500/30 transition-colors">
                       <item.icon className="w-8 h-8 text-purple-400 group-hover:scale-110 transition-transform duration-500" />
                       <div className="absolute -top-3 -right-3 w-8 h-8 rounded bg-[#0A0A0A] border border-white/10 flex items-center justify-center text-xs font-mono text-gray-500 group-hover:text-purple-300 group-hover:border-purple-500/30 transition-colors">
                         {item.step}
                       </div>
                     </div>
                     <h4 className="text-xl font-medium text-white mb-3">{item.title}</h4>
                     <p className="text-gray-400 font-light leading-relaxed text-sm md:text-base">
                       {item.desc}
                     </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 4 - Other Ways to Reach Us */}
        <section className="py-24 border-t border-white/5">
          <div className="w-full max-w-[1200px] mx-auto">
            <div className="mb-12 flex flex-col md:flex-row items-end justify-between gap-6">
              <div className="max-w-xl">
                <h2 className="text-3xl font-bold text-white mb-4 tracking-tight">Other Ways to Reach Us</h2>
                <p className="text-gray-400 font-light">Prefer to connect directly? Find us on our official channels or visit our headquarters.</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
               <a href="mailto:hello@company.com" className="group relative flex flex-col justify-between p-8 h-[240px] rounded-3xl bg-[#161616] border border-white/5 hover:border-purple-500/30 overflow-hidden transition-all duration-500">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-[40px] -translate-y-1/2 translate-x-1/2 group-hover:bg-purple-500/20 transition-colors duration-500"></div>
                 <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center relative z-10 group-hover:scale-110 transition-transform duration-500">
                   <Mail className="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors" />
                 </div>
                 <div className="relative z-10">
                   <p className="text-xs font-mono text-gray-500 mb-2">EMAIL</p>
                   <p className="text-lg text-white font-medium">hello@company.com</p>
                 </div>
               </a>

               <a href="#" className="group relative flex flex-col justify-between p-8 h-[240px] rounded-3xl bg-[#161616] border border-white/5 hover:border-blue-500/30 overflow-hidden transition-all duration-500">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-[40px] -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-500/20 transition-colors duration-500"></div>
                 <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center relative z-10 group-hover:scale-110 transition-transform duration-500">
                   <svg viewBox="0 0 24 24" className="w-5 h-5 fill-gray-400 group-hover:fill-blue-400 transition-colors" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
                   </svg>
                 </div>
                 <div className="relative z-10">
                   <p className="text-xs font-mono text-gray-500 mb-2">LINKEDIN</p>
                   <p className="text-lg text-white font-medium">@company-ai</p>
                 </div>
               </a>

               <a href="#" className="group relative flex flex-col justify-between p-8 h-[240px] rounded-3xl bg-[#161616] border border-white/5 hover:border-white/30 overflow-hidden transition-all duration-500">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-[40px] -translate-y-1/2 translate-x-1/2 group-hover:bg-white/10 transition-colors duration-500"></div>
                 <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center relative z-10 group-hover:scale-110 transition-transform duration-500">
                   <svg viewBox="0 0 24 24" className="w-4 h-4 fill-gray-400 group-hover:fill-white transition-colors" xmlns="http://www.w3.org/2000/svg">
                     <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                   </svg>
                 </div>
                 <div className="relative z-10">
                   <p className="text-xs font-mono text-gray-500 mb-2">X / TWITTER</p>
                   <p className="text-lg text-white font-medium">@company</p>
                 </div>
               </a>
               
               <div className="group relative flex flex-col justify-between p-8 h-[240px] rounded-3xl bg-[#161616] border border-white/5 overflow-hidden transition-all duration-500">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-gray-500/10 rounded-full blur-[40px] -translate-y-1/2 translate-x-1/2"></div>
                 <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center relative z-10">
                   <MapPin className="w-5 h-5 text-gray-400" />
                 </div>
                 <div className="relative z-10">
                   <p className="text-xs font-mono text-gray-500 mb-2">HQ LOCATION</p>
                   <p className="text-lg text-white font-medium mb-1">San Francisco, CA</p>
                   <p className="text-sm text-gray-500">Global Delivery Centers</p>
                 </div>
               </div>
            </div>
          </div>
        </section>

        {/* Section 5 - Closing CTA */}
        <section className="relative py-32 md:py-48 overflow-hidden border-t border-white/5">
          <div className="absolute inset-0 z-0">
             <img 
               src="https://images.unsplash.com/photo-1760105900163-97964e25c252?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdWJ0bGUlMjBkYXJrJTIwZ3JhZGllbnQlMjB0ZXh0dXJlfGVufDF8fHx8MTc3NDQ0MTg5NXww&ixlib=rb-4.1.0&q=80&w=1080" 
               alt="Subtle Background Texture" 
               className="w-full h-full object-cover opacity-10"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-[#0A0A0A]"></div>
             <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(168,85,247,0.1)_0%,transparent_60%)]"></div>
          </div>

          <div className="w-full max-w-[1200px] mx-auto text-center relative z-10 flex flex-col items-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
              Built for Teams Working <br /> on Serious AI
            </h2>
            <p className="text-xl text-gray-300 font-light leading-relaxed mb-12">
              Reaching out is the first step. Let's build the right delivery system for your complex data requirements.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-[16px] w-full sm:w-auto">
              <Link to="/contact" className="group w-full sm:w-auto flex items-center justify-center gap-[12px] px-[36px] py-[16px] relative rounded-[18px] shadow-[0px_20px_25px_0px_rgba(139,92,246,0.2),0px_8px_10px_0px_rgba(139,92,246,0.2)] hover:shadow-[0px_20px_25px_0px_rgba(139,92,246,0.4),0px_8px_10px_0px_rgba(139,92,246,0.4)] text-[18px] leading-[normal] font-bold text-white whitespace-nowrap transition-all" style={{ backgroundImage: "linear-gradient(90deg, rgb(139, 92, 246) 0%, rgb(145, 91, 246) 7.1429%, rgb(151, 90, 245) 14.286%, rgb(157, 90, 245) 21.429%, rgb(162, 89, 244) 28.571%, rgb(168, 87, 244) 35.714%, rgb(174, 86, 243) 42.857%, rgb(179, 85, 243) 50%, rgb(185, 83, 242) 57.143%, rgb(190, 81, 242) 64.286%, rgb(196, 80, 241) 71.429%, rgb(201, 78, 241) 78.571%, rgb(206, 75, 240) 85.714%, rgb(212, 73, 240) 92.857%, rgb(217, 70, 239) 100%)" }}>
                Contact us
              </Link>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
