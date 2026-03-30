"use client";
import React from "react";
import Link from "next/link";
import { ArrowUpRight, BarChart3, Database, ShieldCheck, Zap } from "lucide-react";
import { motion } from "framer-motion";

export default function Divisions() {
  const cards = [
    {
      icon: <Database size={24} />,
      title: "ALNM Water",
      desc: "RO systems, purified water supply, bottled water manufacturing, and ice production. Serving homes, hospitals, and industry.",
      img: "/images/water_purification_industrial_1774886325880.png",
      color: "#0066FF",
      href: "/water"
    },
    {
       icon: <Zap size={24} />,
       title: "ALNM Energy",
       desc: "Solar PV systems, hybrid inverters, MPPT controllers, and battery energy storage from home-scale kWh to industrial MWh BESS.",
       img: "/images/solar_panels_energy_monitoring_1774871842410.png",
       color: "#FF5A00",
       href: "/energy"
    },
    {
       icon: <ShieldCheck size={24} />,
       title: "ALNM Engineering",
       desc: "Full EPC — factory design, global procurement, installation, commissioning. Generator supply, installation, and service contracts.",
       img: "/images/engineering_hero_industrial_engineer_1774871631526.png",
       color: "#ffc100",
       href: "/engineering"
    },
    {
       icon: <BarChart3 size={24} />,
       title: "ALNM Digital",
       desc: "Custom websites, enterprise database architecture, ERP and systems integration, and managed IT infrastructure.",
       img: "/images/industrial_automation_control_room_1774871867828.png",
       color: "#00c2ff",
       href: "/digital"
    }
  ];

  return (
    <section id="divisions" className="py-16 md:py-20 bg-[#f8fafc] relative z-20">
      <div className="max-w-[1240px] mx-auto px-6">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left mb-12 max-w-2xl"
        >
          <div className="text-[#0066FF] font-[700] text-[11px] tracking-widest uppercase mb-4">Our Four Divisions</div>
          <h2 className="text-[32px] md:text-[42px] font-[900] tracking-tight text-slate-900 leading-[1.1] mb-5">
            Specialised expertise.<br />Integrated delivery.
          </h2>
          <p className="text-[17px] text-slate-500 leading-[1.6] font-[450]">
            Each division delivers world-class solutions independently — and works together to provide complete infrastructure from a single trusted partner.
          </p>
        </motion.div>

       {/* Floating SaaS Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 text-left">
          {cards.map((card, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-white rounded-xl border border-slate-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 group overflow-hidden flex flex-col"
            >
              {/* Image Thumbnail */}
              <div className="w-full h-44 bg-slate-100 relative overflow-hidden">
                 <img src={card.img} alt={card.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                 <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply"></div>
                 {/* Floating Icon overlapping the image */}
                 <div 
                   className="absolute -bottom-6 left-6 w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center border border-slate-100 group-hover:scale-110 transition-all duration-300"
                   style={{ color: card.color }}
                 >
                   {React.cloneElement(card.icon as React.ReactElement, { size: 20 })}
                 </div>
              </div>

              <div className="p-6 lg:p-7 pt-10 flex-1 flex flex-col">
                <h3 className="text-[18px] font-[800] text-slate-900 mb-3">{card.title}</h3>
                <p className="text-slate-500 leading-[1.6] text-[14px] mb-6 font-[400] flex-1">
                  {card.desc}
                </p>
                
                <Link 
                   href={card.href} 
                   className="inline-flex items-center gap-2 font-[700] text-[13px] mt-auto transition-colors"
                   style={{ color: card.color }}
                >
                  Explore Division <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
