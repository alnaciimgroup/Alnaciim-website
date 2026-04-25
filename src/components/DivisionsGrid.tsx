"use client";

import { motion } from "framer-motion";
import { ArrowRight, Droplets, Zap, Settings } from "lucide-react";
import Link from "next/link";

const divisions = [
  {
    title: "ALNACIIM Water",
    description: "Clean water supply, large-scale reverse osmosis purification and the Aqua Safi bottled water range — Somalia's most recognised water brand.",
    link: "/water",
    icon: <Droplets size={24} />,
    color: "#0066FF",
    bgColor: "bg-blue-50"
  },
  {
    title: "ALNACIIM Energy",
    description: "Tier-1 solar supply, hybrid microgrid systems, battery storage and generator integration — from residential to industrial scale.",
    link: "/energy",
    icon: <Zap size={24} />,
    color: "#FF6B00",
    bgColor: "bg-orange-50"
  },
  {
    title: "ALNACIIM Engineering",
    description: "The engineering backbone of the group. Water well drilling, RO plant installation, power system commissioning, SCADA and automation.",
    link: "/engineering",
    icon: <Settings size={24} />,
    color: "#0F172A",
    bgColor: "bg-slate-100"
  }
];

export default function DivisionsGrid() {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-24">
          <h2 className="text-[48px] md:text-[64px] font-[800] leading-[1.1] tracking-[-0.03em] text-ink mb-8 font-heading uppercase max-w-4xl">
            Three Divisions<br />One Infrastructure Group.
          </h2>
          
          <p className="text-[18px] text-slate-500 leading-relaxed font-[450] max-w-3xl mx-auto">
            Alnaciim Group integrates deep regional expertise with advanced technology. We manage the entire infrastructure value chain through three specialized divisions.
          </p>
        </div>

        {/* 3-Card Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {divisions.map((division, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative bg-white rounded-[40px] p-12 flex flex-col border border-slate-100 shadow-sm hover:shadow-premium transition-all duration-500 min-h-[500px]"
            >
              <div className="mb-12">
                <div 
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-10 ${division.bgColor}`}
                  style={{ color: division.color }}
                >
                  {division.icon}
                </div>
                
                <h3 className="text-[28px] font-[800] text-ink mb-6 font-heading uppercase tracking-tight">
                  {division.title}
                </h3>
                <p className="text-[17px] text-slate-500 leading-relaxed group-hover:text-slate-900 transition-colors">
                  {division.description}
                </p>
              </div>

              <div className="mt-auto">
                <Link
                  href={division.link}
                  className="inline-flex items-center gap-3 text-[14px] font-[800] text-ink group-hover:text-primary transition-all tracking-[0.15em] uppercase font-heading"
                >
                  Explore Division
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
