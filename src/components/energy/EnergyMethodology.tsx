"use client";
import { motion } from "framer-motion";
import { Sun, Zap, Battery, Fuel, ArrowRight } from "lucide-react";
import Link from "next/link";
import { CONTENT } from "@/data/content";

export default function EnergyMethodology() {
  const { pillars } = CONTENT.energy;
  
  const icons = [<Sun size={20} />, <Zap size={20} />, <Battery size={20} />, <Fuel size={20} />];
  const images = [
    "/images/solar_power_system.png",
    "/images/energy_intelligent_controller.png",
    "/images/battery_energy_storage_bess.png",
    "/images/catalog_generator_1774889998709.png"
  ];

  const methods = pillars.map((pillar, idx) => ({
    ...pillar,
    icon: icons[idx],
    image: images[idx]
  }));

  return (
    <section className="w-full bg-white py-24 md:py-32" id="methodologies">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        
        {/* Header Section */}
        <div className="flex flex-col items-center mb-24 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-orange-50 border border-orange-100 text-[#FF5A00] text-[10px] font-bold tracking-[0.2em] uppercase mb-6">
            System Excellence
          </div>
          
          <div className="relative w-full flex items-center justify-center gap-10 mb-8 text-center">
             {/* Left Structural Line */}
             <div className="hidden lg:block h-[1px] flex-grow bg-[#FF5A00]/20 max-w-[400px]" />
             
             <h2 className="text-[28px] md:text-[42px] font-[900] text-slate-900 leading-[1] tracking-[0.12em] uppercase">
               Technological Precision.
             </h2>
             
             {/* Right Structural Line */}
             <div className="hidden lg:block h-[1px] flex-grow bg-[#FF5A00]/20 max-w-[400px]" />
          </div>
          
          <p className="text-[16px] text-slate-500 font-[450] leading-relaxed max-w-2xl mx-auto text-center">
            Our energy systems are engineered for the regional climate, utilizing industrial-grade hardware and intelligent smart-sync software.
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {methods.map((method, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group bg-white rounded-[2rem] border border-slate-100 overflow-hidden hover:shadow-2xl hover:shadow-[#FF5A00]/5 transition-all duration-500"
            >
              {/* Image Section */}
              <div className="relative aspect-[4/3] p-3">
                <div className="w-full h-full rounded-2xl overflow-hidden relative">
                  <img 
                    src={method.image} 
                    alt={method.title} 
                    className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${idx === 0 ? 'object-bottom' : ''}`}
                  />
                  <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500" />
                  
                  {/* Icon Badge */}
                  <div className="absolute -bottom-1 -left-1 w-12 h-12 rounded-full bg-white shadow-xl flex items-center justify-center p-2 z-20">
                    <div className="w-full h-full rounded-full bg-white border border-[#FF5A00]/20 flex items-center justify-center text-[#FF5A00]">
                      {method.icon}
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8 pt-4">
                <h3 className="text-[20px] font-[800] text-slate-900 mb-4 tracking-tight">
                  {method.title}
                </h3>
                <p className="text-slate-500 text-[14px] leading-relaxed mb-8">
                  {method.description}
                </p>
                <Link 
                  href="/contact" 
                  className="inline-flex items-center gap-2 text-[#FF5A00] font-[700] text-[13px] hover:gap-3 transition-all"
                >
                  Request Detail
                  <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
