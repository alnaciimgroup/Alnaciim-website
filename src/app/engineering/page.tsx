"use client";

import { motion } from "framer-motion";
import { ArrowRight, Plus, Settings, ShieldCheck, Factory, Zap, FileText, MessageSquare, Activity, Box } from "lucide-react";
import Link from "next/link";

export default function EngineeringPage() {
  return (
    <main className="relative bg-white min-h-screen selection:bg-blue-600 selection:text-white">
      
      {/* 1. HERO SECTION - STRICTLY PRESERVED DESIGN & CONTENT */}
      <section className="relative w-full min-h-[90vh] bg-white flex flex-col lg:flex-row border-b border-slate-200">
        <div className="w-full lg:w-1/2 flex items-center justify-center px-6 lg:px-20 pt-32 pb-24 lg:py-0 relative z-10 bg-white">
          <div className="max-w-xl w-full">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-8 h-px bg-blue-600" />
              <span className="text-sm font-semibold text-blue-600 tracking-widest uppercase">
                Alnaciim Engineering
              </span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[72px] font-bold text-slate-900 leading-[1.1] mb-8 font-serif"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              The engineering <br /> behind every <br /><span className="text-blue-600 italic">Alnaciim project.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-lg md:text-xl text-slate-600 leading-relaxed font-light mb-12"
            >
              The technical backbone of Alnaciim. Precision panel fabrication, industrial wiring, and full mechanical-electrical plant commissioning.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col sm:flex-row items-center gap-4"
            >
              <Link href="/contact" className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors flex items-center justify-center gap-3 group text-[15px]">
                Start a Project <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/work" className="w-full sm:w-auto px-8 py-4 bg-transparent hover:bg-slate-50 text-slate-900 border border-slate-300 font-medium transition-colors flex items-center justify-center text-[15px]">
                Technical Archive
              </Link>
            </motion.div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 relative min-h-[350px] lg:min-h-full overflow-hidden bg-[#0a2e5c]">
          <img 
            src="/images/engineering_hero_new.png" 
            alt="Engineering Infrastructure" 
            className="absolute inset-0 w-full h-full object-contain" 
          />
          <div className="absolute inset-0 bg-slate-900/10 mix-blend-multiply" />
          
          <div className="absolute bottom-6 right-6 left-6 sm:left-auto bg-white/10 backdrop-blur-md border border-white/20 p-6 sm:p-8 shadow-2xl max-w-sm">
            <div className="text-2xl sm:text-3xl font-bold text-white mb-2 sm:mb-3 font-serif" style={{ fontFamily: "var(--font-playfair)" }}>Precision Systems</div>
            <p className="text-[10px] sm:text-sm text-white/70 font-medium uppercase tracking-widest leading-relaxed">Delivering complex technical <br className="hidden sm:block" />solutions and asset management.</p>
          </div>
        </div>
      </section>

      {/* 2. STATS STRIP - 100% CONTENT SYNC */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-0 divide-x-0 md:divide-x divide-slate-100">
            {[
              { value: "28+", label: "Years of Heritage" },
              { value: "60+", label: "Global Projects" },
              { value: "03", label: "Strategic fields" },
              { value: "100%", label: "Lifecycle Support" }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center md:items-start md:px-12 first:pl-0">
                <span className="text-5xl font-bold text-slate-900 mb-2">{stat.value}</span>
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SYSTEMATIC EXCELLENCE - 100% CONTENT SYNC */}
      <section className="py-40 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mb-32">
             <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-px bg-blue-600" />
                <span className="text-[11px] font-bold text-blue-600 uppercase tracking-widest">Our Framework</span>
             </div>
             <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-8 font-serif leading-tight" style={{ fontFamily: "var(--font-playfair)" }}>Systematic Excellence.</h2>
             <p className="text-xl text-slate-500 font-light leading-relaxed">
                We deploy a comprehensive engineering framework across three critical pillars to ensure architectural Excellence.
             </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              {
                id: "01",
                title: "System Design",
                desc: "Technical design from first principles. We produce load analyses, equipment specifications, single-line diagrams and installation drawings.",
                icon: <Settings className="text-blue-600" size={32} />
              },
              {
                id: "02",
                title: "Procurement",
                desc: "We source the components. Every project is supplied with equipment that matches the design specification.",
                icon: <Box className="text-blue-600" size={32} />
              },
              {
                id: "03",
                title: "Commissioning",
                desc: "Rigorous field testing and final system validation to guarantee peak operational performance and site safety.",
                icon: <ShieldCheck className="text-[#FF5C00]" size={32} />,
                accent: true
              }
            ].map((pillar, i) => (
              <div key={i} className="space-y-8 group">
                <div className="mb-10">{pillar.icon}</div>
                <h3 className={`text-3xl font-bold font-serif ${pillar.accent ? 'text-[#FF5C00]' : 'text-slate-900'}`} style={{ fontFamily: "var(--font-playfair)" }}>{pillar.title}</h3>
                <p className="text-lg text-slate-500 font-light leading-relaxed">
                   {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. INDUSTRIAL AUTOMATION - 100% CONTENT SYNC */}
      <section className="py-40 bg-slate-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
             <div className="relative aspect-[4/3] overflow-hidden shadow-2xl">
                <img src="/images/eng_automation_new.png" alt="Industrial Automation" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
             </div>
             <div className="space-y-10">
                <div className="flex items-center gap-3">
                   <div className="w-8 h-px bg-blue-600" />
                   <span className="text-[11px] font-bold text-blue-600 uppercase tracking-widest">Automation</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 font-serif leading-tight" style={{ fontFamily: "var(--font-playfair)" }}>Industrial Automation</h2>
                <p className="text-xl text-slate-600 font-light leading-relaxed">
                   Modernizing industrial systems with integrated automation solutions for the next generation of smart manufacturing and industrial logistics.
                </p>
                <div className="pt-6">
                   <Link href="/contact" className="px-10 py-5 bg-blue-600 text-white font-bold uppercase tracking-widest text-[12px] hover:bg-blue-700 transition-colors">
                      Discuss Capability
                   </Link>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 5. ENERGY INFRASTRUCTURE - 100% CONTENT SYNC */}
      <section className="py-40 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
             <div className="order-2 lg:order-1 space-y-10">
                <div className="flex items-center gap-3">
                   <div className="w-8 h-px bg-blue-600" />
                   <span className="text-[11px] font-bold text-blue-600 uppercase tracking-widest">Facility Design</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 font-serif leading-tight" style={{ fontFamily: "var(--font-playfair)" }}>Energy Infrastructure & Factory Design</h2>
                <p className="text-xl text-slate-600 font-light leading-relaxed">
                   Alnaciim Engineering designs and installs complete power infrastructure for industrial facilities, from the incoming supply and distribution boards through to motor control, automation and SCADA monitoring.
                </p>
                <p className="text-xl text-slate-600 font-light leading-relaxed">
                   We also take on factory design, electrical layout, equipment positioning, power demand planning and full mechanical and electrical installation for new production facilities and industrial builds.
                </p>
             </div>
             <div className="order-1 lg:order-2 relative aspect-[4/3] overflow-hidden shadow-2xl">
                <img src="/images/eng_factory_design_new.png" alt="Factory Design" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
             </div>
          </div>
        </div>
      </section>

      {/* 6. TECHNICAL ARCHIVE - 100% CONTENT SYNC */}
      <section className="py-40 bg-white border-t border-slate-100" id="portfolio">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start">
            <div className="lg:col-span-4 space-y-10">
               <h2 className="text-5xl font-bold text-slate-900 font-serif leading-tight" style={{ fontFamily: "var(--font-playfair)" }}>Access the Technical Archive.</h2>
               <p className="text-xl text-slate-500 font-light leading-relaxed">
                  Have a technical enquiry or require a specific project dossier?
               </p>
               <Link href="/contact" className="inline-flex items-center gap-3 text-blue-600 font-bold uppercase tracking-widest text-[13px] group">
                  Start a Conversation <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
               </Link>
            </div>
            <div className="lg:col-span-8">
               <div className="divide-y divide-slate-100 border-t border-slate-100">
                  {[
                    { label: "Water infrastructure projects", link: "/work?filter=Water" },
                    { label: "Power and energy projects", link: "/work?filter=Energy" },
                    { label: "Industrial and custom works", link: "/work?filter=Engineering" }
                  ].map((item, i) => (
                    <Link 
                      key={i} 
                      href={item.link}
                      className="flex items-center justify-between py-12 group hover:bg-slate-50 transition-all px-8 -mx-8"
                    >
                       <div className="flex items-center gap-10">
                          <span className="text-slate-200 text-3xl font-serif italic">0{i+1}</span>
                          <span className="text-2xl md:text-3xl text-slate-900 font-medium group-hover:text-blue-600 transition-colors">
                             {item.label}
                          </span>
                       </div>
                       <ArrowRight size={28} className="text-slate-300 group-hover:text-blue-600 group-hover:translate-x-2 transition-all" />
                    </Link>
                  ))}
               </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
