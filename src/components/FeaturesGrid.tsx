"use client";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function FeaturesGrid() {
  const features = [
    {
      title: "10,000 UPH Bottling Capacity",
      desc: "Our automated assembly line is capable of processing and bottling 10,000 units every single hour, running 24/7 without fail. Backed by rigorous SLA uptime metrics.",
      bullets: ["10,000 UPH Production Speed", "Fully Automated Filtration", "Zero-Downtime Architecture"],
      img: "/images/about_page_top_1769371967484.png",
      align: "left"
    },
    {
      title: "Commercial Ice Production",
      desc: "We supply massive quantities of commercial-grade crystal clear tube and block ice engineered specifically for the highest-tier hospitality and event supply chains.",
      bullets: ["Crystal Clear Hospitality Ice", "High-Density Block Yield", "Temperature Verified Distribution"],
      img: "/images/about_page_bottom_1769372132851.png",
      align: "right"
    }
  ];

  return (
    <section className="w-full bg-[#f8fafc] py-32 relative overflow-hidden">
      
      {/* Background soft mesh for depth */}
      <div className="absolute bottom-[20%] right-[-10%] w-[30%] h-[500px] bg-[#00D2FF]/10 rounded-full filter blur-[100px] pointer-events-none"></div>

      <div className="max-w-[1240px] mx-auto px-6 lg:px-12 flex flex-col gap-32">
        
        {features.map((feature, idx) => (
          <div key={idx} className={`flex flex-col lg:flex-row gap-16 lg:gap-24 items-center ${feature.align === 'right' ? 'lg:flex-row-reverse' : ''}`}>
            
            {/* Soft Shadow Image Side */}
            <motion.div 
              initial={{ opacity: 0, x: feature.align === 'left' ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full lg:w-1/2 relative"
            >
               <div className="bg-white p-4 pb-12 rounded-[2rem] shadow-[0_20px_60px_-15px_rgba(0,102,255,0.15)] border border-slate-100 transform rotate-1 group hover:rotate-0 transition-transform duration-700">
                 <div className="aspect-[4/3] rounded-[1.5rem] overflow-hidden bg-slate-100 relative">
                   <img src={feature.img} alt={feature.title} className="w-full h-full object-cover filter brightness-[0.95] group-hover:scale-105 transition-transform duration-700" />
                   <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                 </div>
               </div>
               
               {/* Decorative Abstract Pill */}
               <div className={`absolute top-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-tr from-[#0066FF] to-[#00D2FF] rounded-full blur-[60px] opacity-30 -z-10 ${feature.align === 'left' ? '-left-8' : '-right-8'}`}></div>
            </motion.div>

            {/* Clean Typography Side */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full lg:w-1/2 flex flex-col justify-center"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 text-[#0066FF] rounded-lg font-[700] text-[12px] uppercase tracking-wide mb-6">
                Feature // {idx + 1}
              </div>
              
              <h2 className="text-[36px] md:text-[48px] font-[800] text-slate-900 leading-[1.1] tracking-tight mb-6">
                {feature.title}
              </h2>
              
              <p className="text-slate-600 text-[18px] leading-[1.8] font-[400] mb-8">
                {feature.desc}
              </p>
              
              <div className="flex flex-col gap-4">
                {feature.bullets.map((bullet, i) => (
                  <div key={i} className="flex items-center gap-4 text-slate-700 font-[500] text-[16px]">
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                      <CheckCircle2 size={16} className="text-[#0066FF]" />
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
