"use client";
import { useState } from "react";
import { projects } from "@/data/projects";
import { ArrowRight, MapPin, Tag, Search } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function OurWorkPage() {
  const [filter, setFilter] = useState("All");
  const tags = ["All", "Water", "Energy", "Engineering", "Digital"];

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(p => p.tags.includes(filter));

  return (
    <div className="bg-[#FAFBFF] pt-32 min-h-screen relative overflow-hidden">
      
      {/* Mesh Gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[600px] bg-[#0066FF] rounded-full mix-blend-multiply filter blur-[120px] opacity-10 pointer-events-none"></div>
      <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[600px] bg-[#00D2FF] rounded-full mix-blend-multiply filter blur-[120px] opacity-10 pointer-events-none"></div>

      {/* Header */}
      <section className="mb-20 relative z-10">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 backdrop-blur-md border border-white/60 text-[#0066FF] text-[12px] font-[700] tracking-widest uppercase mb-8 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#0066FF] animate-pulse"></span>
              ALNACIIM INFRASTRUCTURE
            </div>
            <h1 className="text-[64px] md:text-[88px] font-[900] text-slate-900 leading-[0.95] tracking-tighter mb-8">
              OUR WORK.
            </h1>
            <p className="text-[20px] text-slate-600 leading-relaxed mb-12 font-[400]">
              A selection of ALNACIIM's major infrastructure projects across East Africa. From municipal water treatment to utility-scale solar integration.
            </p>

            {/* Filter Bar */}
            <div className="flex flex-wrap gap-3">
              {tags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setFilter(tag)}
                  className={`px-6 py-2.5 rounded-full text-[13px] font-[700] transition-all border ${
                    filter === tag 
                    ? "bg-slate-900 text-white border-slate-900 shadow-lg" 
                    : "bg-white text-slate-500 border-slate-200 hover:border-slate-400"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-32">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, idx) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  className="group"
                >
                  <div className="aspect-[4/3] rounded-3xl overflow-hidden bg-slate-100 mb-8 shadow-sm group-hover:shadow-2xl group-hover:-translate-y-2 transition-all duration-500">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  
                  <div className="flex items-center gap-2 mb-4">
                    {project.tags.map(t => (
                      <span key={t} className="text-[10px] font-[800] text-[#0066FF] uppercase tracking-[0.1em] bg-blue-50 px-2 py-1 rounded-md">
                        {t}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-[24px] font-[800] text-slate-900 mb-2 leading-tight group-hover:text-[#0066FF] transition-colors line-clamp-2">
                    {project.title}
                  </h3>
                  
                  <div className="flex items-center gap-2 text-slate-500 text-[13px] font-[600] mb-6 uppercase tracking-wider">
                    <MapPin size={14} className="text-slate-400" />
                    {project.location}
                  </div>

                  <p className="text-[15px] text-slate-600 leading-relaxed mb-8 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="pt-6 border-t border-slate-100">
                    <div className="text-[11px] font-[700] text-slate-400 uppercase tracking-widest mb-1">Scale</div>
                    <div className="text-[14px] font-[700] text-slate-800">{project.scale}</div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-[32px] md:text-[42px] font-[800] text-slate-900 mb-6">Have a project in mind?</h2>
          <p className="text-[18px] text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            Talk to the ALNACIIM team. We handle the full project — design, procurement, installation, commissioning and ongoing maintenance.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-full font-[600] hover:bg-[#0066FF] transition-all group">
            Start a project conversation
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}
