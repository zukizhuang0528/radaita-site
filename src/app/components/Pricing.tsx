import React, { useState } from 'react';
import { Link } from "react-router";
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Check, X } from 'lucide-react';

const plans = [
  {
    name: "Starter Platform",
    description: "A self-serve option for individuals and small teams who want to launch AI data workflows quickly and estimate costs with clarity.",
    features: [
      "Fast project setup",
      "Self-managed workflows",
      "Core platform tools",
      "Lightweight collaboration",
      "Best for pilot execution"
    ],
    showEstimate: true
  },
  {
    name: "Scale Platform",
    description: "A scalable platform tier for teams running more structured AI data operations.",
    features: [
      "Scalable workflows",
      "Team collaboration",
      "Workflow control",
      "Project visibility",
      "Ongoing operations"
    ],
    showEstimate: true
  },
  {
    name: "Expert Services",
    description: "A custom service option for teams that need expert-led delivery for advanced AI projects.",
    features: [
      "Custom delivery",
      "Expert-led execution",
      "Tailored workflows",
      "Deep quality control",
      "Specialized support"
    ],
    showEstimate: false
  }
];

const comparisonData = {
  "Best for": ["Pilots and smaller projects", "Growing teams and ongoing workflows", "Advanced and specialized projects"],
  "Workflow style": ["Lightweight and self-serve", "Structured and internally managed", "Tailored and service-led"],
  "Project scope": ["Clearly defined, moderate-complexity workflows", "Larger, more repeatable workflows", "High-complexity, high-touch workflows"],
  "Team setup": ["Individuals or small teams", "Collaborative team environments", "Expert-supported execution"],
  "Cost model": ["Estimate available", "Estimate available", "Custom quote only"],
  "Level of support": ["Basic platform support", "Advanced platform support", "Hands-on expert support"]
};

export function Pricing() {
  const [isComparisonOpen, setIsComparisonOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [catalogValue, setCatalogValue] = useState(25);
  const [annotateValue, setAnnotateValue] = useState(21);
  const [modelValue, setModelValue] = useState(58);

  const formatLBU = (val: number) => {
    return (val * 0.4668).toFixed(2);
  };
  const formatCost = (val: number) => {
    return (val * 0.0468).toFixed(2);
  };

  const getCatalogVolume = (val: number) => {
    if (val === 0) return '0';
    if (val < 25) return '10k';
    if (val < 50) return '100k';
    if (val < 75) return '1M';
    if (val < 100) return '10M';
    return '1B+';
  };

  return (
    <div className="bg-[#0A0A0A] min-h-screen text-[#E8E7EF] font-['Poppins']">
      
      {/* 1. Hero Section */}
      <section className="pt-32 pb-16 flex flex-col items-center text-center px-6">
        <h1 className="text-4xl md:text-[54px] leading-tight font-bold tracking-tight text-white max-w-4xl mb-6">
          Flexible Pricing for AI Data Services and Platform Access
        </h1>
        <p className="text-[#9CA3AF] text-lg md:text-[24px] max-w-5xl leading-relaxed">
          Choose the option that fits your workflow best, fully managed services for hands-off delivery, or subscription access for teams building and managing AI data operations in-house.
        </p>
      </section>

      {/* 2. Pricing Cards */}
      <section className="w-full max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {plans.map((plan, idx) => (
          <div key={idx} className="bg-[#161616] rounded-2xl p-10 flex flex-col items-start border border-white/5">
            <h3 className="text-[32px] font-bold text-white mb-4">{plan.name}</h3>
            <p className="text-[#9CA3AF] text-base leading-relaxed min-h-[100px] mb-8">{plan.description}</p>
            
            <ul className="flex flex-col gap-4 mb-12 w-full">
              {plan.features.map((feature, fIdx) => (
                <li key={fIdx} className="flex items-center gap-4 text-white text-[15px]">
                  <div className="w-2 h-2 rounded-full bg-[#8B5CF6] flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>

            <div className="mt-auto w-full flex flex-col gap-4">
              <button className="w-full h-16 rounded-xl bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] text-white font-bold text-lg hover:opacity-90 transition-opacity">
                Contact Sales
              </button>
              {plan.showEstimate ? (
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="text-[#D946EF] hover:text-white transition-colors text-base text-center w-full"
                >
                  Estimate your cost
                </button>
              ) : (
                <div className="h-6" /> // spacer to keep heights aligned
              )}
            </div>
          </div>
        ))}
      </section>

      {/* 3. More Comparison Toggle */}
      <section className="w-full max-w-[1200px] mx-auto mb-24 flex flex-col items-center">
        <button 
          onClick={() => setIsComparisonOpen(!isComparisonOpen)}
          className="flex items-center gap-3 text-[#9CA3AF] hover:text-white transition-colors text-base"
        >
          More Comparison
          <motion.div animate={{ rotate: isComparisonOpen ? 180 : 0 }}>
            <ChevronDown size={20} />
          </motion.div>
        </button>

        <AnimatePresence>
          {isComparisonOpen && (
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="w-full overflow-hidden"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-4 mt-8 pt-8 border-t border-white/10 w-full text-left">
                {/* Headers */}
                {plans.map((plan, idx) => (
                  <h4 key={idx} className="text-[22px] font-bold text-white mb-4 hidden md:block">{plan.name}</h4>
                ))}

                {/* Features rows */}
                {Object.entries(comparisonData).map(([, values], rowIdx) => (
                  <React.Fragment key={rowIdx}>
                    {values.map((val, colIdx) => (
                      <div key={colIdx} className="flex flex-col gap-2 mb-2">
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full bg-[#8B5CF6] flex-shrink-0 mt-[7px]" />
                          <p className="text-[#9CA3AF] text-[15px]">{val}</p>
                        </div>
                      </div>
                    ))}
                  </React.Fragment>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* 4. Bottom CTA */}
      <section className="relative py-32 flex flex-col items-center justify-center border-t border-white/5 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[radial-gradient(circle,rgba(217,70,239,0.15)_0%,transparent_70%)] blur-[100px] pointer-events-none" />
        
        <h2 className="text-[48px] md:text-[54px] font-bold text-white tracking-tight mb-12 text-center relative z-10">
          Need a tailored quote for your AI data workflow?
        </h2>
        
        <div className="flex flex-col sm:flex-row gap-6 relative z-10">
          <Link to="/contact" className="px-10 h-16 rounded-xl bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] text-white font-bold text-lg hover:shadow-[0_0_30px_rgba(217,70,239,0.4)] transition-all flex items-center justify-center">
            Contact us
          </Link>
        </div>
      </section>

      {/* 5. Estimate Cost Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          >
            <div className="absolute top-8 left-8 cursor-pointer text-white/50 hover:text-white" onClick={() => setIsModalOpen(false)}>
              <X size={32} />
            </div>

            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-[#0A0A0A] border border-white/10 w-full max-w-4xl rounded-2xl p-12 relative flex flex-col items-center overflow-y-auto max-h-[90vh]"
            >
              <div className="w-full text-left mb-12">
                <h3 className="text-4xl font-bold text-white mb-2">Estimate Your Project Cost</h3>
                <p className="text-[#9CA3AF] text-lg">Get a directional estimate based on service type, project scale, and workflow complexity.</p>
              </div>

              {/* Sliders Container */}
              <div className="w-full flex flex-col gap-12 mb-16">
                
                {/* Catalog Slider */}
                <div className="w-full">
                  <div className="flex justify-between items-end mb-6">
                    <div>
                      <h4 className="text-2xl font-bold text-white">Catalog</h4>
                      <p className="text-[#9CA3AF]">How much data do you have?</p>
                    </div>
                    <div className="flex items-baseline gap-4">
                      <span className="text-xl text-white">{formatLBU(catalogValue)} LBUs</span>
                      <span className="text-2xl font-bold text-[#D946EF]">${formatCost(catalogValue)} <span className="text-base font-normal">per month</span></span>
                    </div>
                  </div>
                  <div className="relative pt-4 pb-8">
                    <input 
                      type="range" min="0" max="100" value={catalogValue} onChange={(e) => setCatalogValue(Number(e.target.value))}
                      className="w-full h-1 bg-white/20 rounded-full appearance-none outline-none z-10 relative cursor-pointer"
                      style={{ background: `linear-gradient(to right, #8B5CF6 ${catalogValue}%, rgba(255,255,255,0.2) ${catalogValue}%)` }}
                    />
                    <div className="absolute top-[10px] w-5 h-5 bg-[#8B5CF6] border-[3px] border-white rounded-full pointer-events-none -ml-2.5 shadow-[0_0_10px_#8B5CF6]" style={{ left: `${catalogValue}%` }} />
                    <div className="flex justify-between text-xs text-[#9CA3AF] font-mono mt-4 absolute w-full">
                      <span>0</span>
                      <span>10K</span>
                      <span>100K</span>
                      <span>1M</span>
                      <span>10M</span>
                      <span>1B+</span>
                    </div>
                  </div>
                </div>

                {/* Annotate Slider */}
                <div className="w-full border-t border-white/10 pt-12">
                  <div className="flex justify-between items-end mb-6">
                    <div>
                      <h4 className="text-2xl font-bold text-white">Annotate</h4>
                      <p className="text-[#9CA3AF]">% to be labeled</p>
                    </div>
                    <div className="flex items-baseline gap-4">
                      <span className="text-xl text-white">{(annotateValue * 0.05).toFixed(2)}k LBUs</span>
                      <span className="text-2xl font-bold text-[#D946EF]">${(annotateValue * 5).toFixed(2)} <span className="text-base font-normal">one-time</span></span>
                    </div>
                  </div>
                  <div className="relative pt-4 pb-8">
                    <input 
                      type="range" min="0" max="100" value={annotateValue} onChange={(e) => setAnnotateValue(Number(e.target.value))}
                      className="w-full h-1 bg-white/20 rounded-full appearance-none outline-none z-10 relative cursor-pointer"
                      style={{ background: `linear-gradient(to right, #8B5CF6 ${annotateValue}%, rgba(255,255,255,0.2) ${annotateValue}%)` }}
                    />
                    <div className="absolute top-[10px] w-5 h-5 bg-[#8B5CF6] border-[3px] border-white rounded-full pointer-events-none -ml-2.5 shadow-[0_0_10px_#8B5CF6]" style={{ left: `${annotateValue}%` }} />
                    <div className="absolute mt-4 text-xs text-[#9CA3AF] font-mono -ml-2" style={{ left: `${annotateValue}%` }}>
                      {annotateValue}%
                    </div>
                  </div>
                </div>

                {/* Model Slider */}
                <div className="w-full border-t border-white/10 pt-12">
                  <div className="flex justify-between items-end mb-6">
                    <div>
                      <h4 className="text-2xl font-bold text-white">Model</h4>
                      <p className="text-[#9CA3AF]">% with predictions</p>
                    </div>
                    <div className="flex items-baseline gap-4">
                      <span className="text-xl text-white">{(modelValue * 10).toFixed(2)} LBUs</span>
                      <span className="text-2xl font-bold text-[#D946EF]">${(modelValue).toFixed(2)} <span className="text-base font-normal">one-time</span></span>
                    </div>
                  </div>
                  <div className="relative pt-4 pb-8">
                    <input 
                      type="range" min="0" max="100" value={modelValue} onChange={(e) => setModelValue(Number(e.target.value))}
                      className="w-full h-1 bg-white/20 rounded-full appearance-none outline-none z-10 relative cursor-pointer"
                      style={{ background: `linear-gradient(to right, #8B5CF6 ${modelValue}%, rgba(255,255,255,0.2) ${modelValue}%)` }}
                    />
                    <div className="absolute top-[10px] w-5 h-5 bg-[#8B5CF6] border-[3px] border-white rounded-full pointer-events-none -ml-2.5 shadow-[0_0_10px_#8B5CF6]" style={{ left: `${modelValue}%` }} />
                    <div className="absolute mt-4 text-xs text-[#9CA3AF] font-mono -ml-2" style={{ left: `${modelValue}%` }}>
                      {modelValue}%
                    </div>
                  </div>
                </div>

              </div>

              {/* Recommendation */}
              <div className="text-center mb-8">
                <p className="text-xl text-[#9CA3AF]">
                  Based on your estimated volume, <br/>
                  <span className="text-white font-bold">Scale Platform</span> is likely the most appropriate subscription for your project.
                </p>
              </div>

              {/* CTA */}
              <button className="w-full max-w-2xl h-16 rounded-xl bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] text-white font-bold text-lg hover:opacity-90 transition-opacity mb-8">
                Subscribe
              </button>

              {/* Disclaimer */}
              <div className="w-full bg-[#161616] border border-white/5 rounded-xl p-6 flex gap-4">
                <div className="text-[#D946EF] shrink-0 mt-1">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
                    <path d="m9 12 2 2 4-4"/>
                  </svg>
                </div>
                <p className="text-[#9CA3AF] text-sm leading-relaxed">
                  These estimates are based on volume of basic data types using the Starter rate of $0.10 per LBU. Additional charges for model inferencing may vary. All charges are billed monthly based on actual usage. No payment required before signing up.
                </p>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Global CSS for Slider to hide default thumb but still be draggable */}
      <style>{`
        input[type=range]::-webkit-slider-thumb {
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: transparent;
          cursor: pointer;
        }
        input[type=range]::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: transparent;
          cursor: pointer;
          border: none;
        }
      `}</style>
    </div>
  );
}
