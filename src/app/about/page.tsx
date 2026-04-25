"use client";

import { motion } from "framer-motion";
import { ArrowRight, History, MapPin, Droplets, Zap, Settings, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  const divisions = [
    {
      title: "Alnaciim Water",
      subtitle: "Purity & Supply",
      description: "Water well drilling, large-scale reverse osmosis treatment, Aqua Safi bottled water, and industrial ice production.",
      icon: <Droplets size={24} />,
      color: "text-primary"
    },
    {
      title: "Alnaciim Energy",
      subtitle: "Renewable Power",
      description: "Solar PV supply and installation, hybrid microgrid design, battery energy storage, and generator integration.",
      icon: <Zap size={24} />,
      color: "text-accent-orange"
    },
    {
      title: "Alnaciim Engineering",
      subtitle: "Technical Execution",
      description: "The technical delivery arm. Mechanical and electrical installation, plant commissioning, and SCADA automation.",
      icon: <Settings size={24} />,
      color: "text-ink"
    },
  ];

  return (
    <div className="bg-white min-h-screen pt-32 pb-20">
      {/* Hero Section */}
      <section className="max-w-[1400px] mx-auto px-6 lg:px-12 mb-32">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-50 text-slate-400 text-[11px] font-bold tracking-[0.2em] uppercase mb-10 border border-slate-100"
          >
            About Alnaciim Group
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-[48px] md:text-[72px] lg:text-[84px] font-[800] leading-[1.05] tracking-[-0.04em] text-ink mb-10 font-heading uppercase"
          >
            Built here.<br />
            <span className="text-primary italic">Operating here.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[19px] md:text-[22px] text-slate-500 leading-relaxed font-[450] max-w-3xl"
          >
            Alnaciim Group is Somalia's leading infrastructure conglomerate. We design, build and maintain the technical systems that power life and progress across the Horn of Africa.
          </motion.p>
        </div>
      </section>

      {/* Founding Story Section with Modern Layout */}
      <section className="bg-slate-50 py-32 border-y border-slate-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 blur-[120px]" />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-[12px] font-bold text-primary uppercase tracking-widest mb-6">
                <History size={18} />
                Our Journey
              </div>
              <h2 className="text-[40px] md:text-[48px] font-[800] tracking-[-0.03em] text-ink mb-8 font-heading uppercase">Founded in 1998.</h2>
              <div className="space-y-6 text-[18px] text-slate-500 leading-relaxed font-[450]">
                <p>
                  Alnaciim Group was founded in Garowe, Puntland, in 1998 as Al Naciim Water — a company dedicated to solving clean, reliable water challenges across the region.
                </p>
                <p>
                  What began with water well drilling has evolved into a multi-sector engineering powerhouse. We expanded into large-scale purification, renewable energy systems, and precision technical delivery to meet the growing needs of our communities.
                </p>
                <p>
                  Today, through our three specialized divisions, we provide the entire infrastructure lifecycle, from initial concept through to final commissioning and long-term maintenance.
                </p>
              </div>
            </div>
            <div className="relative">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5 }}
                className="aspect-[4/5] rounded-[40px] overflow-hidden shadow-premium relative z-10 flex items-center justify-center p-12 bg-white border border-slate-100"
              >
                <img 
                  src="/images/alnaciim_logo_final.png?v=3" 
                  alt="Alnaciim Group Logo" 
                  className="w-full h-full object-contain"
                />
              </motion.div>
              <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-primary/10 rounded-full blur-[100px] z-0" />
            </div>
          </div>
        </div>
      </section>

      {/* Divisions Section - Bento Style Cards */}
      <section className="py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-[40px] md:text-[48px] font-[800] tracking-[-0.03em] text-ink mb-6 font-heading uppercase">Three Divisions. One Group.</h2>
            <p className="text-[18px] text-slate-500 font-[450]">
              Every Alnaciim project is delivered by an integrated team across our three specialized technical divisions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {divisions.map((div, i) => (
              <motion.div 
                key={i} 
                whileHover={{ y: -10 }}
                className="p-10 rounded-[32px] bg-white border border-slate-100 shadow-sm hover:shadow-premium transition-all duration-500"
              >
                <div className={`w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center ${div.color} mb-8`}>
                  {div.icon}
                </div>
                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-4">{div.subtitle}</div>
                <h3 className="text-[24px] font-[800] text-ink mb-4 tracking-tight font-heading uppercase">{div.title}</h3>
                <p className="text-[16px] text-slate-500 leading-relaxed">
                  {div.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-32 bg-ink text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/10 blur-[120px] pointer-events-none" />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
               <div className="inline-flex items-center gap-2 text-[12px] font-bold text-primary uppercase tracking-widest mb-6">
                <MapPin size={18} />
                Footprint
              </div>
              <h2 className="text-[40px] md:text-[48px] font-[800] tracking-[-0.03em] mb-8 font-heading uppercase">Where We Operate.</h2>
              <p className="text-[18px] text-slate-400 font-[450] mb-12 max-w-xl">
                Alnaciim Group operates from strategic offices across the region, providing local engineering expertise and direct support to our infrastructure assets.
              </p>
              <div className="p-10 rounded-[32px] bg-white/5 border border-white/10 group max-w-md">
                <div className="text-[12px] font-bold text-primary tracking-widest uppercase mb-2">Headquarters</div>
                <h3 className="text-[32px] font-[800] tracking-tight mb-4 font-heading uppercase">Garowe</h3>
                <p className="text-[16px] text-slate-400 leading-relaxed">
                  Puntland, Federal Republic of Somalia. The founding location of Alnaciim Group and home of all divisions, main warehouse, and fabrication facility.
                </p>
              </div>
            </div>
            <div className="relative aspect-square">
               {/* Decorative Tech Map Visual Placeholder */}
               <div className="absolute inset-0 bg-primary/5 rounded-full border border-primary/20 animate-pulse" />
               <div className="absolute inset-[15%] bg-primary/10 rounded-full border border-primary/30" />
               <div className="absolute inset-[30%] bg-primary/20 rounded-full border border-primary/40 flex items-center justify-center">
                  <ShieldCheck size={80} className="text-primary opacity-50" />
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <motion.div 
            whileHover={{ scale: 0.99 }}
            className="p-12 lg:p-24 rounded-[48px] bg-primary relative overflow-hidden text-center group shadow-premium"
          >
            <div className="absolute inset-0 bg-ink opacity-0 group-hover:opacity-10 transition-opacity duration-700" />
            <div className="relative z-10">
              <h2 className="text-[40px] md:text-[64px] font-[800] text-white tracking-[-0.03em] mb-8 leading-[1.1] font-heading uppercase">
                Let's Discuss Your<br />Next Project.
              </h2>
              <p className="text-[19px] md:text-[22px] text-white/80 font-[450] mb-12 max-w-2xl mx-auto">
                Take your infrastructure from concept to reality with our integrated engineering team.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 bg-white text-primary px-12 py-6 rounded-2xl text-[16px] font-[800] transition-all hover:-translate-y-1 shadow-xl font-heading uppercase tracking-wider"
              >
                Get In Touch
                <ArrowRight size={22} />
              </Link>
            </div>
            
            {/* Abstract Shapes */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
