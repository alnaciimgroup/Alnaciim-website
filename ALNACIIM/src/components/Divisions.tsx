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
      img: "/images/media__1771787700513.png",
      color: "#0066FF",
      href: "/water"
    },
    {
       icon: <Zap size={24} />,
       title: "ALNM Energy",
       desc: "Solar PV systems, hybrid inverters, MPPT controllers, and battery energy storage from home-scale kWh to industrial MWh BESS.",
       img: "/images/alnaciim_hero_full_1771787383245.png",
       color: "#FF5A00",
       href: "/energy"
    },
    {
       icon: <ShieldCheck size={24} />,
       title: "ALNM Engineering",
       desc: "Full EPC — factory design, global procurement, installation, commissioning. Generator supply, installation, and service contracts.",
       img: "/images/about_page_top_1769371967484.png",
       color: "#ffc100",
       href: "/engineering"
    },
    {
       icon: <BarChart3 size={24} />,
       title: "ALNM Digital",
       desc: "Custom websites, enterprise database architecture, ERP and systems integration, and managed IT infrastructure.",
       img: "/images/about_page_middle1_1769372003268.png",
       color: "#00c2ff",
       href: "/digital"
    }
  ];

  return (
    <section id="divisions" className="py-24 md:py-32 bg-[#f8fafc] relative z-20">
      <div className="max-w-[1240px] mx-auto px-6">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left mb-16 max-w-2xl"
        >
          <div className="text-[#0066FF] font-[700] text-[13px] tracking-widest uppercase mb-4">Our Four Divisions</div>
          <h2 className="text-[36px] md:text-[48px] font-[900] tracking-tight text-slate-900 leading-[1.1] mb-6">
            Specialised expertise.<br />Integrated delivery.
          </h2>
          <p className="text-[16px] md:text-[18px] text-slate-500 leading-[1.6]">
            Each division delivers world-class solutions independently — and works together to provide complete infrastructure from a single trusted partner.
          </p>
        </motion.div>

       {/* Floating SaaS Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {cards.map((card, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-white rounded-2xl border border-slate-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 group overflow-hidden flex flex-col"
            >
              {/* Image Thumbnail */}
              <div className="w-full h-48 bg-slate-100 relative overflow-hidden">
                 <img src={card.img} alt={card.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                 <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply"></div>
                 {/* Floating Icon overlapping the image */}
                 <div 
                   className="absolute -bottom-7 left-8 w-14 h-14 rounded-full bg-white shadow-md flex items-center justify-center border border-slate-100 group-hover:scale-110 transition-all duration-300"
                   style={{ color: card.color }}
                 >
                   {card.icon}
                 </div>
              </div>

              <div className="p-8 lg:p-10 pt-12 flex-1 flex flex-col">
                <h3 className="text-[20px] font-[800] text-slate-900 mb-4">{card.title}</h3>
                <p className="text-slate-500 leading-[1.7] text-[15px] mb-8 font-[400] flex-1">
                  {card.desc}
                </p>
                
                <Link 
                  href={card.href} 
                  className="inline-flex items-center gap-2 font-[700] text-[14px] mt-auto transition-colors"
                  style={{ color: card.color }}
                >
                  Explore Division <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
