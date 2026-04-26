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
    <section className="w-full bg-slate-50 py-24 relative overflow-hidden" id="renewables">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col gap-24">
        
        {features.map((feature, idx) => (
          <div key={idx} className={`flex flex-col lg:flex-row gap-16 lg:gap-24 items-center ${feature.align === 'right' ? 'lg:flex-row-reverse' : ''}`}>
            
            {/* Image Side */}
            <motion.div 
              initial={{ opacity: 0, x: feature.align === 'left' ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full lg:w-1/2 relative"
            >
               <div className="bg-white p-2 rounded-2xl shadow-xl border border-slate-200">
                 <div className="aspect-[4/3] rounded-xl overflow-hidden bg-slate-100 relative group">
                   <img src={feature.img} alt={feature.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                   <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-60"></div>
                 </div>
               </div>
            </motion.div>

            {/* Typography Side */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full lg:w-1/2 flex flex-col justify-center"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full font-semibold text-xs tracking-wide uppercase mb-6 shadow-sm w-fit border border-blue-100">
                Core Feature // 0{idx + 1}
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-6">
                {feature.title}
              </h2>
              
              <p className="text-lg text-slate-600 leading-relaxed font-medium mb-10">
                {feature.description}
              </p>
              
              <div className="flex flex-col gap-4">
                {feature.bullets.map((bullet, i) => (
                  <div key={i} className="flex items-center gap-3 text-slate-700 font-semibold text-sm tracking-wide group">
                    <div className="w-6 h-6 rounded-md bg-blue-50 flex items-center justify-center shrink-0 group-hover:bg-blue-600 transition-colors">
                      <CheckCircle2 size={14} className="text-blue-600 group-hover:text-white transition-colors" />
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
