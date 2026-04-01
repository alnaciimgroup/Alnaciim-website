"use client";

import { motion } from "framer-motion";
import { ArrowRight, Droplets, Zap, Settings, Globe } from "lucide-react";
import Link from "next/link";

const divisions = [
  {
    title: "ALNACIIM Water",
    description: "Clean water supply, large-scale reverse osmosis purification and the Aqua Safi bottled water range — Somalia's most recognised water brand.",
    link: "/water",
    icon: <Droplets size={24} />,
    color: "bg-blue-500",
    lightColor: "bg-blue-50",
    textColor: "text-blue-600"
  },
  {
    title: "ALNACIIM Energy",
    description: "Tier-1 solar supply, hybrid microgrid systems, battery storage and generator integration — from residential to industrial scale.",
    link: "/energy",
    icon: <Zap size={24} />,
    color: "bg-orange-500",
    lightColor: "bg-orange-50",
    textColor: "text-orange-600"
  },
  {
    title: "ALNACIIM Engineering",
    description: "The engineering backbone of the group. Water well drilling, RO plant installation, power system commissioning, SCADA and automation.",
    link: "/engineering",
    icon: <Settings size={24} />,
    color: "bg-slate-800",
    lightColor: "bg-slate-100",
    textColor: "text-slate-800"
  },
  {
    title: "ALNACIIM Digital",
    description: "Web development, software systems, database infrastructure, IoT connectivity and industrial SCADA monitoring for regional businesses.",
    link: "/digital",
    icon: <Globe size={24} />,
    color: "bg-indigo-600",
    lightColor: "bg-indigo-50",
    textColor: "text-indigo-600"
  }
];

export default function DivisionsGrid() {
  return (
    <section className="py-24 bg-slate-50/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-[32px] md:text-[48px] font-[900] leading-[1.1] tracking-tighter text-ink mb-6">
              Four Divisions.<br />One Infrastructure Group.
            </h2>
            <p className="text-[17px] text-slate-500 leading-relaxed font-[450]">
              Alnaciim Group integrates deep regional expertise with advanced technology. We manage the entire infrastructure value chain through four specialized divisions.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {divisions.map((division, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group p-10 rounded-[2.5rem] bg-white border border-slate-100 hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 flex flex-col justify-between"
            >
              <div>
                <div className={`w-14 h-14 rounded-2xl ${division.lightColor} flex items-center justify-center ${division.textColor} mb-8 group-hover:scale-110 group-hover:${division.color} group-hover:text-white transition-all duration-500 shadow-sm`}>
                  {division.icon}
                </div>
                <h3 className="text-[26px] font-[900] text-ink mb-4 tracking-tight">{division.title}</h3>
                <p className="text-[16px] text-slate-500 leading-relaxed mb-10 max-w-md">
                  {division.description}
                </p>
              </div>
              
              <Link
                href={division.link}
                className="inline-flex items-center gap-2 text-[14px] font-[800] text-ink group-hover:text-primary transition-colors tracking-widest uppercase"
              >
                Explore Division
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
