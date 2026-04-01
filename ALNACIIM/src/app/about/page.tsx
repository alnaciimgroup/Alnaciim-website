"use client";

import { motion } from "framer-motion";
import { ArrowRight, History, Target, MapPin, Droplets, Zap, Settings, Globe } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  const divisions = [
    {
      title: "ALNM Water",
      description: "Water well drilling, large-scale reverse osmosis water treatment, Aqua Safi bottled water manufacturing, block and tube ice production, and ongoing system maintenance.",
      icon: <Droplets size={24} />
    },
    {
      title: "ALNM Energy",
      description: "Solar PV system supply and installation, hybrid solar-battery-generator microgrid design, battery energy storage, and generator set supply and integration.",
      icon: <Zap size={24} />
    },
    {
      title: "ALNM Engineering",
      description: "The technical delivery arm. Mechanical and electrical installation, well drilling, RO plant commissioning, SCADA programming, and custom control panel fabrication.",
      icon: <Settings size={24} />
    },
    {
      title: "ALNM Digital",
      description: "Web development, software systems, database infrastructure, IoT connectivity, industrial SCADA and remote monitoring — for ALNM and external clients.",
      icon: <Globe size={24} />
    }
  ];

  const locations = [
    {
      city: "Garowe",
      label: "Headquarters",
      description: "Puntland, Federal Republic of Somalia. The founding location of ALNM Group and home of all divisions, main warehouse, and fabrication facility."
    }
  ];

  return (
    <div className="bg-white min-h-screen pt-32 pb-20">
      {/* Hero Section */}
      <section className="container mx-auto px-6 mb-24">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 text-slate-500 text-[10px] font-bold tracking-[0.2em] uppercase mb-8 border border-slate-200"
          >
            About ALNM Group
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-[48px] md:text-[72px] font-[900] leading-[1.05] tracking-tighter text-ink mb-8"
          >
            Built here.<br />
            <span className="text-primary">Operating here.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[19px] md:text-[22px] text-slate-500 leading-relaxed font-[450] max-w-3xl"
          >
            ALNM Group is an East African infrastructure company headquartered in Garowe, Puntland, Somalia. We design, build and maintain water, energy, engineering and digital infrastructure across the region.
          </motion.p>
        </div>
      </section>

      {/* Founding Story */}
      <section className="bg-slate-50 py-24 border-y border-slate-100">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <div>
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                <History size={24} />
              </div>
              <h2 className="text-[32px] md:text-[42px] font-[900] tracking-tighter text-ink mb-8">Our story.</h2>
              <div className="space-y-6 text-[17px] text-slate-600 leading-relaxed font-[450]">
                <p>
                  ALNM Group was founded in Garowe, Puntland, in 1998 as Al Naciim Water — a company dedicated to solving clean, reliable water challenges across the Horn of Africa.
                </p>
                <p>
                  We began by drilling water wells and installing basic treatment systems. Over time, our technical capacity grew alongside our understanding of what East African communities actually needed. We expanded into water purification at scale, building plants treating thousands of cubic metres daily.
                </p>
                <p>
                  The launch of Aqua Safi Industries marked a new chapter, becoming one of the largest bottled water producers in Somalia. As our clients' needs grew, we established ALNM Energy, ALNM Engineering, and ALNM Digital to provide the full infrastructure lifecycle.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl relative z-10">
                <img 
                  src="/images/about_hero_office_woman_1769372753617.png" 
                  alt="ALNM Group Operations" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-primary/10 rounded-full blur-[100px] z-0" />
            </div>
          </div>
        </div>
      </section>

      {/* Divisions Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-[32px] md:text-[42px] font-[900] tracking-tighter text-ink mb-6">Four divisions. One group.</h2>
            <p className="text-[17px] text-slate-500 font-[450]">
              Every ALNM Group project is delivered by an integrated team across our four specialized technical divisions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {divisions.map((div, i) => (
              <div key={i} className="p-8 rounded-[2rem] bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500">
                <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-primary mb-6">
                  {div.icon}
                </div>
                <h3 className="text-[20px] font-[900] text-ink mb-4 tracking-tight">{div.title}</h3>
                <p className="text-[15px] text-slate-500 leading-relaxed">
                  {div.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-primary/5 pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-end gap-12 mb-20">
            <div className="max-w-2xl">
              <h2 className="text-[32px] md:text-[42px] font-[900] tracking-tighter mb-6">Where we operate.</h2>
              <p className="text-[18px] text-slate-400 font-[450]">
                ALNM Group operates from strategic offices across the region, providing local engineering expertise and direct support to our infrastructure assets.
              </p>
            </div>
          </div>

          <div className="max-w-xl mx-auto">
            {locations.map((loc, i) => (
              <div key={i} className="p-10 rounded-[2.5rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-500 group">
                <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform">
                  <MapPin size={20} />
                </div>
                <div className="text-[12px] font-bold text-primary tracking-widest uppercase mb-2">{loc.label}</div>
                <h3 className="text-[28px] font-[900] tracking-tight mb-4">{loc.city}</h3>
                <p className="text-[15px] text-slate-400 leading-relaxed">
                  {loc.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-[1100px] mx-auto p-12 lg:p-20 rounded-[3.5rem] bg-primary relative overflow-hidden text-center group">
            <div className="absolute inset-0 bg-ink/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative z-10">
              <h2 className="text-[32px] md:text-[56px] font-[900] text-white tracking-tighter mb-8 leading-[1.1]">
                Let's discuss your<br />next project.
              </h2>
              <p className="text-[18px] md:text-[21px] text-white/80 font-[450] mb-12 max-w-2xl mx-auto">
                ALNM Group takes projects from the initial concept through to a functioning, maintained system. Three offices. Four divisions. One point of contact.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white text-primary px-10 py-5 rounded-2xl text-[16px] font-[800] transition-all hover:scale-105 shadow-xl"
              >
                Get In Touch
                <ArrowRight size={20} />
              </Link>
            </div>
            
            {/* Abstract Shapes */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />
          </div>
        </div>
      </section>
    </div>
  );
}
