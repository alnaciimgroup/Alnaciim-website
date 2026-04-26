"use client";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

export default function FeaturesGrid() {
  const features = [
    {
      title: "10,000 UPH Bottling System",
      desc: "Our high-velocity automated facility processes 10,000 units every hour, delivering consistent industrial-grade output for regional demand.",
      bullets: ["Industrial Speed Production", "Multi-Stage Sterilization", "Autonomous Uptime Management"],
      img: "/images/aqua_safi_bottling_facility.png",
      align: "left"
    },
    {
      title: "Industrial Ice Infrastructure",
      desc: "We supply heavy-duty crystal ice engineered for the region's hospitality and supply chain sectors, ensuring thermal precision and clarity.",
      bullets: ["High-Density Block Supply", "Ultra-Clear Hospitality Ice", "Temperature Monitored Logistics"],
      img: "/images/commercial_ice_cubes_1769372486661.png",
      align: "right"
    }
  ];

  return (
    <section className="py-32 bg-white relative">

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col gap-40 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-8 h-px bg-blue-600" />
            <span className="text-xs font-bold tracking-widest text-blue-600 uppercase">Operational Excellence</span>
            <div className="w-8 h-px bg-blue-600" />
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-[56px] font-bold text-slate-900 mb-8 leading-[1.1] font-serif" style={{ fontFamily: "var(--font-playfair)" }}
          >
            Water. Energy. <span className="text-blue-600 italic">Engineering.</span> Delivered.
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl text-slate-600 leading-relaxed font-light"
          >
            Somalia's leading integrated infrastructure group. We combine technical precision with local expertise to deliver large-scale water treatment, renewable energy, and precision engineering projects that build a sustainable future.
          </motion.p>
        </div>
        
        {features.map((feature, idx) => (
          <div key={idx} className={`flex flex-col lg:flex-row gap-16 lg:gap-24 items-center ${feature.align === 'right' ? 'lg:flex-row-reverse' : ''}`}>
            
            {/* Image Container */}
            <motion.div 
              initial={{ opacity: 0, x: feature.align === 'left' ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full lg:w-1/2 relative"
            >
               <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden shadow-2xl">
                 <img 
                  src={feature.img} 
                  alt={feature.title} 
                  className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-[3s] ease-out" 
                 />
                 <div className="absolute inset-0 bg-slate-900/10 mix-blend-multiply"></div>
               </div>
               
               {/* Decorative Accent Frame */}
               <div className={`absolute top-8 ${feature.align === 'left' ? '-left-8' : '-right-8'} w-full h-full border border-slate-200 -z-10`} />
            </motion.div>

            {/* Content Section */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="w-full lg:w-1/2 flex flex-col"
            >
              <div className="flex items-center gap-4 mb-8">
                <span className="text-xs font-bold tracking-widest text-blue-600 uppercase">System Capability</span>
                <div className="h-px bg-slate-200 flex-1" />
                <span className="text-xs font-bold tracking-widest text-slate-400">0{idx + 1}</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-slate-900 mb-8 leading-[1.1] font-serif" style={{ fontFamily: "var(--font-playfair)" }}>
                {feature.title}
              </h2>
              
              <p className="text-lg md:text-xl text-slate-600 mb-12 leading-relaxed font-light">
                {feature.desc}
              </p>
              
              <div className="flex flex-col gap-6">
                {feature.bullets.map((bullet, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="mt-1 flex-shrink-0 text-blue-600">
                      <Check size={20} strokeWidth={2.5} />
                    </div>
                    <span className="text-[15px] font-medium text-slate-900">{bullet}</span>
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
