"use client";
import { motion } from "framer-motion";

export default function EngineeringIndustries() {
  return (
    <section className="w-full py-24 md:py-32 bg-white">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-blue-500 font-[800] text-[10px] tracking-[0.25em] uppercase mb-4">Industrial Specialization</div>
            <h2 className="text-[44px] md:text-[64px] font-[900] tracking-tighter text-[#0F172A] leading-[1] mb-10">
              Energy Infrastructure & Factory Design
            </h2>
            <p className="text-slate-500 text-[18px] md:text-[20px] leading-[1.7] font-[450] mb-8">
              Alnaciim Engineering designs and installs complete power infrastructure for industrial facilities, from the incoming supply and distribution boards through to motor control, automation and SCADA monitoring. 
            </p>
            <p className="text-slate-500 text-[18px] md:text-[20px] leading-[1.7] font-[450]">
              We also take on factory design, electrical layout, equipment positioning, power demand planning and full mechanical and electrical installation for new production facilities and industrial builds.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl"
          >
            {/* SECTION: Industrial Specialization */}
            <img 
              src="/images/energy_intelligent_controller.png" 
              alt="Industrial Automation" 
              className="w-full h-full object-cover" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
            <div className="absolute bottom-10 left-10">
              <div className="text-white font-[900] text-[24px] tracking-tight mb-2">Industrial Automation</div>
              <div className="text-blue-400 font-[700] text-[10px] tracking-[0.2em] uppercase">Control Systems Integration</div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
