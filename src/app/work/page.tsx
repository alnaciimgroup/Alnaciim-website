"use client";

import { useState, useEffect } from "react";
import { projects } from "@/data/projects";
import { ArrowRight, MapPin, ArrowUpRight, Activity, Archive } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function OurWorkPage() {
  const searchParams = useSearchParams();
  const initialFilter = searchParams.get("filter") || "All";
  const [filter, setFilter] = useState(initialFilter);
  const tags = ["All", "Water", "Energy", "Engineering"];

  useEffect(() => {
    const filterParam = searchParams.get("filter");
    if (filterParam && tags.includes(filterParam)) {
      setFilter(filterParam);
    }
  }, [searchParams]);

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(p => p.tags.includes(filter));

  return (
    <div className="bg-white min-h-screen selection:bg-blue-600 selection:text-white">
      {/* Header Section */}
      <section className="pt-48 pb-24 lg:pt-64 lg:pb-32 relative border-b border-slate-200">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-8 h-px bg-blue-600" />
              <span className="text-sm font-semibold text-blue-600 tracking-widest uppercase">The Archive</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-6xl md:text-8xl lg:text-[90px] font-bold text-slate-900 leading-[1] mb-12 font-serif"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Projects across <br /><span className="text-blue-600 italic">water, energy and engineering.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-slate-600 font-light leading-relaxed max-w-2xl mb-16"
            >
              A record of infrastructure delivered by Alnaciim Group across the region. From community water wells to large-scale RO plants, solar power systems and industrial facilities.
            </motion.p>

            {/* Filter Bar */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              {tags.map((tag) => (
                <button
                   key={tag}
                   onClick={() => setFilter(tag)}
                   className={`px-8 py-3 text-[13px] font-bold tracking-widest uppercase transition-all duration-300 border ${
                     filter === tag 
                     ? "bg-blue-600 border-blue-600 text-white" 
                     : "bg-white border-slate-200 text-slate-500 hover:border-slate-400"
                   }`}
                >
                  {tag}
                </button>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Project Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col gap-32">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, idx) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className={`flex flex-col lg:flex-row items-center gap-16 lg:gap-24 group ${
                    idx % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className="w-full lg:w-[45%] relative aspect-[16/11] overflow-hidden bg-slate-100 border border-slate-200">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-[3s] ease-out group-hover:scale-105" 
                    />
                    <div className="absolute top-0 left-0 bg-blue-600 text-white text-[10px] font-bold tracking-[0.2em] uppercase px-4 py-2">
                      {project.tags[0]}
                    </div>
                  </div>
                  
                  <div className="w-full lg:w-[55%] flex flex-col">
                    <div className="flex items-center gap-2 text-blue-600 mb-6">
                      <MapPin size={14} />
                      <span className="text-[11px] font-bold uppercase tracking-widest">{project.location}</span>
                    </div>
                    
                    <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 font-serif group-hover:text-blue-600 transition-colors" style={{ fontFamily: "var(--font-playfair)" }}>
                      {project.title}
                    </h3>
                    
                    <p className="text-lg text-slate-600 font-light leading-relaxed mb-10">
                      {project.description}
                    </p>
                    
                    <div className="flex items-center justify-between border-t border-slate-100 pt-8 mt-auto">
                      <div className="flex flex-col">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Impact Scale</span>
                        <span className="text-lg font-bold text-slate-900 tracking-tight">{project.scale}</span>
                      </div>
                      <div className="w-12 h-12 bg-slate-50 border border-slate-200 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                        <ArrowUpRight size={20} />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-32 bg-slate-900 text-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
          <Archive className="text-blue-500 mx-auto mb-10" size={48} />
          <h2 className="text-4xl md:text-6xl font-bold mb-8 font-serif" style={{ fontFamily: "var(--font-playfair)" }}>
            Ready to build the <span className="text-blue-400 italic">future of Infrastructure?</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-12 font-light">
            Deployment-ready engineering teams for major water and energy projects across East Africa.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center gap-3 px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white font-bold uppercase tracking-widest text-[13px] transition-all"
          >
            Start Collaboration <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
