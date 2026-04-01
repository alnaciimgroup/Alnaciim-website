"use client";
import { motion } from "framer-motion";
import { Sun, Zap, Battery, Fuel, ArrowRight } from "lucide-react";
import Link from "next/link";

const methods = [
  {
    title: "Utility-Scale Solar",
    description: "High-yield commercial solar arrays. We coordinate full EPC services from site assessment to final commissioning and grid integration.",
    icon: <Sun size={20} />,
    image: "/images/catalog_solar_panels_1774889827145.png",
    active: true // Restore for now based on latest screenshot
  },
  {
    title: "Hybrid Microgrids",
    description: "Intelligent stabilization of unreliable grid infrastructure. Our systems seamlessly route energy between Solar PV, BESS, and Generators.",
    icon: <Zap size={20} />,
    image: "/images/industrial_automation_control_room_1774871867828.png",
    active: true // Restore for now based on latest screenshot
  },
  {
    title: "BESS Storage",
    description: "Peak shaving and load shifting utilizing high-cycle life LiFePO4 chemistry. Essential for energy arbitrage and 24/7 continuous operation.",
    icon: <Battery size={20} />,
    image: "/images/catalog_inverter_1774889842179.png",
    active: true
  },
  {
    title: "Prime Generators",
    description: "Heavy-duty diesel generation optimized for base load power in remote locations. Engineered with DSE controllers to synchronize with solar.",
    icon: <Fuel size={20} />,
    image: "/images/catalog_generator_1774889998709.png",
    active: true
  }
];

export default function EnergyMethodology() {
  const activeMethods = methods.filter(m => m.active);

  return (
    <section className="w-full bg-white py-24 md:py-32" id="methodologies">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-12">
        
        {/* Header Section */}
        <div className="max-w-4xl mb-20 text-left">
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[48px] md:text-[64px] lg:text-[72px] font-[800] text-slate-900 leading-[1] tracking-tight mb-8"
          >
            Architectural permanence.<br />
            In energy design.
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 text-[18px] md:text-[20px] leading-relaxed max-w-2xl font-[450]"
          >
            We design, procure, and install end-to-end power delivery systems. By unifying generation and storage, we drastically reduce operating expenses for East African industrials.
          </motion.p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {activeMethods.map((method, idx) => (
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
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
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
