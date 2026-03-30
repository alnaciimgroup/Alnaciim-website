"use client";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";

import { CONTENT } from "@/data/content";

const { pillars } = CONTENT.engineering;

const solutions = [
  {
    id: "01",
    title: "Water Infrastructure Engineering",
    image: "/images/water_infrastructure_ro_plant_1774871836361.png",
    services: [
      "Borehole drilling & steel casing",
      "RO system design & treatment train",
      "Projects: Nuwaco (2.4k m³/day), Martisoor, Garacad",
      "MCC panels & VFD motor starters",
      "SCADA remote monitoring integration"
    ]
  },
  {
    id: "02",
    title: "Power Systems — Full EPC",
    image: "/images/power_systems_generators_1774871854169.png",
    services: [
      "Electrical load analysis & demand calc",
      "Solar PV mounting & DC string wiring",
      "ATS design & fabrication (In-house)",
      "Hybrid source integration (Solar/BESS/Genset)",
      "Load bank testing to rated capacity"
    ]
  },
  {
    id: "03",
    title: "SCADA & Industrial Automation",
    image: "/images/industrial_automation_control_room_1774871867828.png",
    services: [
      "Ignition SCADA platform development",
      "PLC: Allen-Bradley, Siemens, Schneider",
      "HMI touchscreen operator interfaces",
      "Historian data & alarm management",
      "Integration: OPC, Modbus, Profibus"
    ]
  },
  {
    id: "04",
    title: "Custom Industrial Works",
    image: "/images/eng_automation.png",
    services: [
      "Automatic Transfer Switch (ATS) builds",
      "Motor Control Centres (MCC)",
      "Main Distribution Boards (all ratings)",
      "Solar combiner boxes & DC panels",
      "IEC 60364 industrial wiring standards"
    ]
  },
  {
    id: "05",
    title: "Maintenance & Repair",
    image: "/images/eng_pm.png",
    services: [
      "RO membrane cleaning & performance test",
      "Pump mechanical seals & impeller service",
      "Solar array cleaning & inverter service",
      "Quarterly & annual service contracts",
      "Garowe warehouse spare parts stock"
    ]
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
