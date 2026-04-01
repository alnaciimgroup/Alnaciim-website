"use client";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { CONTENT } from "@/data/content";

export default function EnergyFeaturesGrid() {
  const { pillars } = CONTENT.energy;
  
  const features = [
    {
      ...pillars[0],
      bullets: ["Tier 1 Bifacial Modules", "Anti-PID Technology", "Structural Wind Loading Design"],
      img: "/images/catalog_solar_panels_1774889827145.png",
      align: "left"
    },
    {
      ...pillars[1],
      bullets: ["Peak Shaving & Load Shifting", "Intelligent BMS Routing", "24/7 Continuous Operation"],
      img: "/images/eng_power.png",
      align: "right"
    }
  ];

  return (
    <section className="w-full bg-[#f8fafc] py-20 relative overflow-hidden" id="renewables">
      
      {/* Background soft mesh for depth */}
      <div className="absolute bottom-[20%] right-[-10%] w-[30%] h-[500px] bg-[#FF8C00]/10 rounded-full filter blur-[100px] pointer-events-none"></div>

      <div className="max-w-[1240px] mx-auto px-6 lg:px-12 flex flex-col gap-20">
        
        {features.map((feature, idx) => (
          <div key={idx} className={`flex flex-col lg:flex-row gap-12 lg:gap-20 items-center ${feature.align === 'right' ? 'lg:flex-row-reverse' : ''}`}>
            
            {/* Soft Shadow Image Side */}
            <motion.div 
              initial={{ opacity: 0, x: feature.align === 'left' ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full lg:w-1/2 relative"
            >
               <div className="bg-white p-3 pb-8 rounded-3xl shadow-[0_20px_60px_-15px_rgba(255,90,0,0.15)] border border-slate-100 transform rotate-1 group hover:rotate-0 transition-transform duration-700">
                 <div className="aspect-video rounded-2xl overflow-hidden bg-slate-100 relative">
                   <img src={feature.img} alt={feature.title} className="w-full h-full object-cover filter brightness-[0.95] group-hover:scale-105 transition-transform duration-700" />
                   <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                 </div>
               </div>
               
               {/* Decorative Abstract Pill */}
               <div className={`absolute top-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-tr from-[#FF5A00] to-[#FF8C00] rounded-full blur-[60px] opacity-30 -z-10 ${feature.align === 'left' ? '-left-8' : '-right-8'}`}></div>
            </motion.div>

            {/* Clean Typography Side */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full lg:w-1/2 flex flex-col justify-center"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FFF5F0] text-[#FF5A00] rounded-lg font-[700] text-[11px] uppercase tracking-wide mb-5">
                Feature // {idx + 1}
              </div>
              
              <h2 className="text-[32px] md:text-[42px] font-[800] text-slate-900 leading-[1.1] tracking-tight mb-5">
                {feature.title}
              </h2>
              
              <p className="text-slate-600 text-[17px] leading-[1.7] font-[450] mb-6">
                {feature.description}
              </p>
              
              <div className="flex flex-col gap-3">
                {feature.bullets.map((bullet, i) => (
                  <div key={i} className="flex items-center gap-3 text-slate-700 font-[500] text-[15px]">
                    <div className="w-5 h-5 rounded-full bg-[#FFF5F0] flex items-center justify-center shrink-0">
                      <CheckCircle2 size={14} className="text-[#FF5A00]" />
                    </div>
                    {bullet}
                  </div>
                ))}
              </div>
            </motion.div>
            
          </div>
        ))}

      </div>
    </section>
  );
}
