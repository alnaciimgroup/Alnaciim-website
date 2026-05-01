"use client";

import { motion } from "framer-motion";
import { ArrowRight, History, MapPin, ShieldCheck, Droplets, Zap, Settings } from "lucide-react";
import Link from "next/link";
import { CONTENT } from "@/data/content";

export default function AboutPage() {
  const { water, energy, engineering } = CONTENT;

  const divisions = [
    {
      id: "DIV-01",
      title: "Alnaciim Water",
      subtitle: "Hydraulic Systems",
      description: "Water well drilling, large-scale reverse osmosis treatment, Aqua Safi bottled water, and industrial ice production.",
    },
    {
      id: "DIV-02",
      title: "Alnaciim Energy",
      subtitle: "Renewable Assets",
      description: "Solar PV supply and installation, hybrid microgrid design, battery energy storage, and generator integration.",
    },
    {
      id: "DIV-03",
      title: "Alnaciim Engineering",
      subtitle: "Technical Execution",
      description: "The technical delivery arm. Mechanical and electrical installation, plant commissioning, and SCADA automation.",
    },
  ];

  return (
    <div className="bg-white min-h-screen selection:bg-blue-600 selection:text-white">
      
      {/* Hero Section */}
      <section className="relative w-full min-h-[70vh] bg-white flex flex-col lg:flex-row border-b border-slate-200 pt-32 lg:pt-0">
        <div className="w-full lg:w-1/2 flex items-center justify-center px-6 lg:px-20 py-24 lg:py-0 relative z-10 bg-white">
          <div className="max-w-xl w-full">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-8 h-px bg-blue-600" />
              <span className="text-sm font-semibold text-blue-600 tracking-widest uppercase">Our Story</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-5xl md:text-6xl lg:text-[72px] font-bold text-slate-900 leading-[1.1] mb-8 font-serif"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Built here.<br />
              <span className="text-blue-600 italic">Operating here.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-slate-600 leading-relaxed font-light max-w-xl"
            >
              Alnaciim Group is Somalia's leading infrastructure conglomerate. We design, build and maintain the technical systems that power life and progress across the Horn of Africa.
            </motion.p>
          </div>
        </div>

        <div className="w-full lg:w-1/2 relative min-h-[400px] lg:min-h-full overflow-hidden bg-slate-50 flex items-center justify-center">
          <img 
            src="/images/alnaciim_logo_final.png?v=3" 
            alt="Alnaciim Heritage" 
            className="w-full h-auto max-w-[400px] object-contain p-12" 
          />
        </div>
      </section>

      {/* History Section */}
      <section className="py-32 bg-white relative">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-24 items-start">
            <div>
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 mb-8"
              >
                <div className="w-8 h-px bg-blue-600" />
                <span className="text-xs font-bold tracking-widest text-blue-600 uppercase">History & Origin</span>
              </motion.div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-12 leading-tight font-serif" style={{ fontFamily: "var(--font-playfair)" }}>
                Founded in <span className="text-blue-600 italic">1998.</span>
              </h2>
              
              <div className="space-y-8 text-lg text-slate-600 leading-relaxed font-light">
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
            
            <div className="grid grid-cols-2 gap-6">
              <div className="aspect-[4/5] bg-slate-100 border border-slate-200 p-8 flex flex-col justify-end">
                <History className="text-blue-600 mb-6" size={32} />
                <div className="text-3xl font-bold text-slate-900 mb-2 font-serif" style={{ fontFamily: "var(--font-playfair)" }}>28+</div>
                <div className="text-sm text-slate-500 font-medium uppercase tracking-wider">Years of technical heritage</div>
              </div>
              <div className="aspect-[4/5] bg-slate-900 border border-slate-800 p-8 flex flex-col justify-end">
                <MapPin className="text-blue-400 mb-6" size={32} />
                <div className="text-3xl font-bold text-white mb-2 font-serif" style={{ fontFamily: "var(--font-playfair)" }}>Garowe</div>
                <div className="text-sm text-slate-400 font-medium uppercase tracking-wider">Strategic HQ since 1998</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divisions Section */}
      <section className="py-32 bg-slate-50 border-y border-slate-200">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 font-serif"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Three Divisions. <span className="text-blue-600 italic">One Group.</span>
          </motion.h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto font-light">
            Every Alnaciim project is delivered by an integrated team across our three specialized technical divisions.
          </p>
        </div>

        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid md:grid-cols-3 gap-8">
          {divisions.map((div, i) => (
            <div key={i} className="bg-white border border-slate-200 p-10 flex flex-col hover:border-blue-600 transition-colors group">
              <div className="text-blue-600 mb-6 group-hover:scale-110 transition-transform">
                {i === 0 && <Droplets size={32} />}
                {i === 1 && <Zap size={32} />}
                {i === 2 && <Settings size={32} />}
              </div>
              <div className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-4">{div.subtitle}</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6 font-serif" style={{ fontFamily: "var(--font-playfair)" }}>{div.title}</h3>
              <p className="text-slate-600 leading-relaxed font-light mb-8 flex-1">
                {div.description}
              </p>
              <div className="text-[10px] font-bold text-slate-400 tracking-[0.2em] uppercase border-t border-slate-100 pt-6">
                Division ID: {div.id}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Location Section */}
      <section className="py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-24 items-center">
            <div className="w-full lg:w-1/2">
               <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-px bg-blue-600" />
                <span className="text-xs font-bold tracking-widest text-blue-600 uppercase">Strategic Presence</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 font-serif" style={{ fontFamily: "var(--font-playfair)" }}>
                Where We <span className="text-blue-600 italic">Operate.</span>
              </h2>
              <p className="text-lg text-slate-600 mb-12 font-light leading-relaxed">
                Alnaciim Group operates from strategic offices across the region, providing local engineering expertise and direct support to our infrastructure assets.
              </p>
              
              <div className="bg-slate-50 border border-slate-200 p-10 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <ShieldCheck size={120} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 font-serif" style={{ fontFamily: "var(--font-playfair)" }}>Garowe</h3>
                <p className="text-slate-600 font-light leading-relaxed">
                  Puntland, Federal Republic of Somalia. The founding location of Alnaciim Group and home of all divisions, main warehouse, and fabrication facility.
                </p>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2 aspect-square relative bg-slate-50 border border-slate-100 flex items-center justify-center p-4 overflow-hidden rounded-2xl">
               <iframe  
                 src="https://maps.google.com/maps?q=8.4084,48.4837&z=13&output=embed"  
                 className="w-full h-full border-0 min-h-[380px] lg:min-h-[450px]"
                 allowFullScreen={true}
                 loading="lazy">  
               </iframe>
               
               {/* Label overlay to match modern aesthetic */}
               <div className="absolute top-8 left-8 bg-slate-900 text-white text-[10px] font-bold tracking-widest uppercase px-4 py-2 rounded shadow-xl pointer-events-none z-10 border border-white/10 select-none">
                 GAROWE HQ
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-32 bg-slate-900 text-white border-t border-slate-800">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 font-serif" style={{ fontFamily: "var(--font-playfair)" }}>
            Let's Discuss Your <span className="text-blue-400 italic">Next Project.</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-12 font-light">
            Take your infrastructure from concept to reality with our integrated engineering team.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center gap-3 px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white font-bold uppercase tracking-widest text-[13px] transition-all"
          >
            Get In Touch <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
