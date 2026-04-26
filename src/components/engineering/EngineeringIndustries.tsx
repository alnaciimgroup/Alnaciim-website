"use client";

import { motion } from "framer-motion";
import { Cpu } from "lucide-react";

export default function EngineeringIndustries() {
  return (
    <section className="w-full py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-slate-50 border border-slate-200/60 text-blue-600 text-xs font-bold tracking-widest uppercase mb-10 shadow-sm">
              Industrial Specialization
            </div>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-slate-900 mb-8 leading-tight">
              Energy <span className="text-blue-600 font-light italic pr-2">Infrastructure</span> & Factory Design.
            </h2>
            <div className="space-y-6 text-xl text-slate-600 leading-relaxed font-light mb-12">
              <p>
                Alnaciim Engineering designs and installs complete power infrastructure for industrial facilities, from incoming supply and distribution to complex motor control and automation.
              </p>
              <p>
                We specialize in factory design, electrical layout, equipment positioning, and full mechanical installation for new production facilities across the region.
              </p>
            </div>
            
            {/* Technical Detail Row */}
            <div className="pt-10 border-t border-slate-200/60 flex gap-12">
               <div className="flex flex-col">
                  <span className="text-4xl font-bold text-slate-900 mb-2 tracking-tight">100<span className="text-blue-600">%</span></span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Precision Aligned</span>
               </div>
               <div className="flex flex-col">
                  <span className="text-4xl font-bold text-slate-900 mb-2 tracking-tight">SCADA</span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Integrated Control</span>
               </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full aspect-[4/3] rounded-[2.5rem] bg-white border border-slate-200/60 shadow-2xl p-3 overflow-hidden group"
          >
             <div className="w-full h-full rounded-[2rem] overflow-hidden relative bg-slate-100">
                <img 
                  src="/images/energy_intelligent_controller.png" 
                  alt="Industrial Automation" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[3s] ease-out" 
                />
                <div className="absolute inset-0 bg-slate-900/10 transition-opacity duration-700 group-hover:opacity-0" />
                
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="bg-white/80 backdrop-blur-md border border-white/50 p-6 rounded-2xl shadow-xl transform transition-transform duration-500 group-hover:-translate-y-2">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center">
                        <Cpu size={20} />
                      </div>
                      <div className="text-[10px] font-bold text-slate-900 uppercase tracking-widest">System Schematic // Integration</div>
                    </div>
                    <div className="text-xl font-bold text-slate-900 tracking-tight mb-2">Industrial Automation & Control Matrix</div>
                    <p className="text-sm text-slate-600 font-medium">Real-time SCADA monitoring and facility-wide automation protocols.</p>
                  </div>
                </div>
             </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
