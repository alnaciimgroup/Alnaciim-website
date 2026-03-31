"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const highlights = [
  {
    title: "Nuwaco RO Plant",
    tag: "Water · Engineering",
    scale: "2,400 m³ per day",
    delivery: "Design, installation and commissioning",
    description: "The largest water treatment facility delivered by ALNM Group — a full-scale reverse osmosis plant providing safe drinking water to the Nuwaco district.",
    image: "/images/water_purification_industrial_1774886325880.png"
  },
  {
    title: "300 kWp Solar Power System",
    tag: "Energy · Engineering",
    scale: "300 kW installed",
    delivery: "Full EPC — panels, inverters, in-house controls",
    description: "Large-scale solar installation with in-house control panel fabrication and DEIF ASC 150 solar-genset coordination in Garowe.",
    image: "/images/power_systems_generators_1774871854169.png"
  },
  {
    title: "Aqua Safi Bottling Facility",
    tag: "Water · Engineering",
    scale: "10,000 bottles per hour",
    delivery: "Facility design, procurement and installation",
    description: "One of the largest bottled water production facilities in the Horn of Africa, producing 250 ml to 19-litre formats at high capacity.",
    image: "/images/packaged_bottled_water_1769372456350.png"
  },
  {
    title: "Industrial Hybrid Power + SCADA",
    tag: "Energy · Engineering",
    scale: "Solar + battery + generator",
    delivery: "System design, installation, SCADA commissioning",
    description: "Custom hybrid power system with intelligent energy management and remote monitoring for continuous site visibility.",
    image: "/images/industrial_automation_control_room_1774871867828.png"
  }
];

export default function ProjectHighlights() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <h2 className="text-[32px] md:text-[48px] font-[900] leading-[1.1] tracking-tighter text-ink mb-6">
            Project Highlights.
          </h2>
          <p className="text-[17px] text-slate-500 leading-relaxed font-[450]">
            Four flagship projects that define ALNM Group's integrated capability across water, energy and engineering infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {highlights.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group cursor-default"
            >
              <div className="aspect-[16/10] rounded-[2.5rem] overflow-hidden mb-8 shadow-sm border border-slate-100 relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-6 left-6 flex gap-2">
                  <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-bold text-ink uppercase tracking-wider shadow-sm">
                    {project.tag}
                  </span>
                </div>
              </div>
              
              <h3 className="text-[24px] font-[900] text-ink mb-3 tracking-tight">{project.title}</h3>
              <p className="text-[16px] text-slate-500 leading-relaxed mb-6 font-[450]">
                {project.description}
              </p>
              
              <ul className="space-y-2 mb-8">
                <li className="flex items-center gap-3 text-[14px] font-[700] text-slate-800">
                  <CheckCircle2 size={16} className="text-primary" />
                  <span>Scale: {project.scale}</span>
                </li>
                <li className="flex items-center gap-3 text-[14px] font-[700] text-slate-800">
                  <CheckCircle2 size={16} className="text-primary" />
                  <span>Delivery: {project.delivery}</span>
                </li>
              </ul>
              
              <Link
                href="/work"
                className="inline-flex items-center gap-2 text-[12px] font-[800] text-slate-400 group-hover:text-primary transition-colors tracking-[0.2em] uppercase"
              >
                Project Archive
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-20 p-12 rounded-[3rem] bg-slate-900 overflow-hidden relative group">
            <div className="absolute inset-0 bg-blue-600/10 pointer-events-none group-hover:bg-blue-600/20 transition-all duration-700" />
            <div className="absolute -right-[10%] top-[20%] w-[40%] h-[60%] bg-blue-600/30 rounded-full blur-[100px]" />
            
            <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-8 text-white">
                <div className="max-w-xl text-center md:text-left">
                    <h3 className="text-[32px] md:text-[42px] font-[900] leading-[1.1] tracking-tighter mb-4">
                        Ready to start your next project?
                    </h3>
                    <p className="text-[17px] text-slate-400 font-[450]">
                        From water infrastructure and solar energy to engineering and digital systems — ALNM Group delivers the complete project lifecycle.
                    </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 shrink-0">
                    <Link href="/contact" className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-xl text-[14px] font-bold shadow-xl transition-all">
                        Start a Project
                    </Link>
                    <Link href="/work" className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/10 px-8 py-4 rounded-xl text-[14px] font-bold transition-all">
                        Browse All Projects
                    </Link>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
