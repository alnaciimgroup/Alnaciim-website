"use client";
import React from "react";
import Link from "next/link";
import { ArrowUpRight, BarChart3, Database, ShieldCheck, Zap } from "lucide-react";
import { motion } from "framer-motion";

export default function Divisions() {
  const cards = [
    {
      icon: <Database size={24} />,
      title: "ALNACIIM Water",
      desc: "Clean water supply, large-scale reverse osmosis purification, Borehole Drilling, Industrial Ice and the Aqua Safi bottled water.",
      img: "/images/nuwaco_ro_plant.png",
      color: "#0066FF",
      href: "/water"
    },
    {
       icon: <Zap size={24} />,
       title: "ALNACIIM Energy",
       desc: "Renewable systems, solar supply, hybrid microgrid systems, battery storage and generator integration from residential to industrial scale.",
       img: "/images/solar_power_system.png",
       color: "#FF5A00",
       href: "/energy"
    },
    {
       icon: <ShieldCheck size={24} />,
       title: "ALNACIIM Engineering",
       desc: "The engineering backbone of the group. Water well drilling, RO plant installation, power system commissioning, SCADA and automation.",
       img: "/images/custom_panel_fabrication_and_industrial_electrical_works.png",
       color: "#ffc100",
       href: "/engineering"
    },
  ];

  return (
    <section id="divisions" className="py-24 bg-[#f8fafc] relative z-20 overflow-hidden">
      
      {/* Widen container to fill more space as requested */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left mb-16 max-w-3xl"
        >
          <div className="text-[#0066FF] font-[800] text-[12px] tracking-[0.2em] uppercase mb-5">Our Three Specialized Divisions</div>
          <h2 className="text-[42px] md:text-[56px] font-[900] tracking-tighter text-slate-900 leading-[1] mb-6">
            Three Divisions. <br className="hidden md:block" />One Infrastructure Group.
          </h2>
          <p className="text-[19px] text-slate-500 leading-relaxed font-[450]">
            Alnaciim Group manages the entire infrastructure value chain through three specialized divisions.
          </p>
        </motion.div>

       {/* Enhanced Hover Grid - CHANGE animation when hovered */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {cards.map((card, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ y: -16, transition: { duration: 0.4, ease: "easeOut" } }}
              className="group relative h-[600px] bg-white rounded-[2.5rem] overflow-hidden border border-slate-200/50 shadow-xl hover:shadow-[0_45px_100px_rgba(0,102,255,0.15)] transition-all duration-500"
            >
              <Link href={card.href} className="block h-full">
                {/* Background Image with Reveal Animation */}
                <div className="absolute inset-0 z-0">
                  <img src={card.img} alt={card.title} className={`absolute inset-0 w-full h-full object-cover block group-hover:scale-110 transition-transform duration-[2s] ease-out filter brightness-[0.85] ${card.title.includes('Energy') ? 'object-bottom' : ''}`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80" />
                </div>

                {/* Content Overlay */}
                <div className="relative z-10 h-full p-10 flex flex-col justify-end">
                   {/* Floating Division Tag */}
                   <div className="absolute top-10 left-10 z-20">
                      <div className="px-5 py-2.5 rounded-xl bg-white/10 backdrop-blur-xl border border-white/20 text-white text-[11px] font-[800] tracking-[0.2em] uppercase">
                         {card.title}
                      </div>
                   </div>

                  <h3 className="text-[36px] md:text-[42px] font-[900] text-white group-hover:text-primary mb-6 tracking-tight leading-none transition-colors duration-300 uppercase">
                    {card.title.split(' ')[1]}
                  </h3>
                  <p className="text-slate-300 group-hover:text-white leading-relaxed text-[17px] mb-10 font-[450] transition-colors duration-300">
                    {card.desc}
                  </p>
                  
                  <div className="inline-flex items-center gap-4 text-white/50 group-hover:text-white transition-all duration-500 text-[14px] font-[800] uppercase tracking-[0.2em]">
                    Explore Division <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                  
                  {/* Secondary accent line */}
                  <div className="absolute bottom-0 left-0 h-2 w-0 group-hover:w-full transition-all duration-700" style={{ backgroundColor: card.color }} />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
