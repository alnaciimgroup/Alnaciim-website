"use client";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";

import { CONTENT } from "@/data/content";

const { pillars } = CONTENT.engineering;

const solutions = [
  {
    id: "01",
    title: pillars[0].title,
    image: "/images/industrial_automation_control_room_1774871867828.png",
    services: ["Switchboard Design", "Panel Build", "Industrial Wiring", "Functional Testing"]
  },
  {
    id: "02",
    title: pillars[1].title,
    image: "/images/water_purification_industrial_1774886325880.png",
    services: ["Mechanical Installation", "Electrical Commissioning", "Performance Verification", "Operator Training"]
  },
  {
    id: "03",
    title: pillars[2].title,
    image: "/images/power_systems_generators_1774871854169.png",
    services: ["SCADA Programming", "Energy Management Systems", "Manual-to-Auto Retrofit", "System Audits"]
  },
  {
    id: "04",
    title: pillars[3].title,
    image: "/images/water_infrastructure_ro_plant_1774871836361.png",
    services: ["Spare Parts Supply", "Membrane Cleaning", "Pump Repair", "Scheduled Servicing"]
  }
];

export default function SolutionsGrid() {
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 border-t border-slate-100">
          {solutions.map((sol, idx) => (
            <motion.div 
              key={sol.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`p-10 lg:p-16 border-b border-slate-100 ${idx % 2 === 0 ? 'md:border-r' : ''} group hover:bg-[#FAFBFF] transition-colors duration-500`}
            >
              <div className="flex flex-col h-full">
                <span className="text-[13px] font-[800] text-slate-300 mb-8 group-hover:text-[#ffc100] transition-colors">{sol.id}</span>
                <h3 className="text-[28px] lg:text-[36px] font-[900] tracking-tight text-slate-900 mb-8 leading-[1.1] max-w-sm group-hover:translate-x-1 transition-transform">
                  {sol.title}
                </h3>
                
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-10 shadow-lg">
                  <img src={sol.image} alt={sol.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors"></div>
                </div>

                <ul className="grid grid-cols-1 gap-4">
                  {sol.services.map((service, sIdx) => (
                    <li key={sIdx} className="flex items-center gap-3 text-[14px] font-[600] text-slate-500 uppercase tracking-widest">
                      <Plus size={14} className="text-[#ffc100]" />
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
