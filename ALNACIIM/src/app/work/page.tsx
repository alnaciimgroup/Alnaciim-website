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

  const featuredProject = projects[0]; // Nuwaco as featured

  return (
    <div className="bg-[#FAFBFF] pt-24 min-h-screen relative overflow-hidden font-['Inter']">
      
      {/* Neo-SaaS Background Architecture */}
      <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[800px] bg-[#0066FF] rounded-full mix-blend-multiply filter blur-[140px] opacity-10 pointer-events-none animate-pulse"></div>
      <div className="absolute top-[20%] right-[-10%] w-[50%] h-[600px] bg-[#00D2FF] rounded-full mix-blend-multiply filter blur-[120px] opacity-10 pointer-events-none"></div>

      {/* Header Strategy */}
      <section className="mb-12 relative z-10">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/80 backdrop-blur-md border border-primary-light text-primary text-[10px] font-[800] tracking-[0.2em] uppercase mb-8 shadow-sm border-l-4 border-l-primary">
              MAJOR INFRASTRUCTURE ARCHIVE
            </div>
            <h1 className="text-[48px] md:text-[72px] font-[900] text-slate-900 leading-[0.9] tracking-[-0.04em] mb-8">
              Transforming the <span className="text-primary italic">Regional</span> Grid.
            </h1>
            <p className="text-[17px] md:text-[18px] text-slate-500 leading-relaxed max-w-3xl font-[450] mb-12">
              A definitive catalog of ALNACIIM's Tier-1 industrial deployments. From municipal hydrology to regional power integration.
            </p>

            {/* Premium Filter Command Bar */}
            <div className="inline-flex flex-wrap items-center gap-1.5 p-1.5 bg-white rounded-2xl shadow-fluid border border-slate-100">
              {tags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setFilter(tag)}
                  className={`px-6 py-2.5 rounded-xl text-[12px] font-[700] transition-all ${
                    filter === tag 
                    ? "bg-ink text-white shadow-xl scale-105" 
                    : "bg-transparent text-slate-400 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Banner (Dynamic) */}
      <section className="mb-16 relative z-10 px-6 lg:px-12">
        <div className="container mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="group relative h-[450px] rounded-3xl overflow-hidden shadow-2xl border border-white"
          >
            <img src={featuredProject.image} alt="Featured Project" className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
            
            <div className="absolute bottom-12 left-10 right-10 flex flex-col md:flex-row justify-between items-end gap-10 text-white">
              <div className="max-w-2xl">
                <div className="flex items-center gap-3 mb-5">
                   <div className="px-4 py-1.5 bg-blue-600 rounded-full text-[10px] font-[700] uppercase tracking-widest leading-none">Featured Case</div>
                   <div className="flex items-center gap-2 text-[11px] font-[600] text-blue-200">
                     <MapPin size={12} /> {featuredProject.location}
                   </div>
                </div>
                <h2 className="text-[32px] md:text-[42px] font-[900] tracking-tighter leading-[1] mb-5">
                  {featuredProject.title}
                </h2>
                <p className="text-[17px] text-slate-300 leading-relaxed font-[400]">
                  {featuredProject.description}
                </p>
              </div>
              <div className="shrink-0 flex flex-col items-end">
                <div className="text-[11px] font-[700] text-blue-400 uppercase tracking-widest mb-2">Technical Scale</div>
                <div className="text-[32px] font-[900] text-white tracking-tight">{featuredProject.scale}</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modern Industrial Grid */}
      <section className="pb-24 relative z-10">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            <AnimatePresence mode="popLayout">
              {filteredProjects.slice(1).map((project, idx) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="group flex flex-col"
                >
                  <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-8 shadow-fluid hover:shadow-2xl transition-all duration-500 border border-slate-100">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" 
                    />
                    
                    {/* Metadata Hover Overlay */}
                    <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                      <div className="bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-slate-100 shadow-sm text-[10px] font-[800] text-slate-900 tracking-wider uppercase">
                         {project.location}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col flex-1">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="h-0.5 w-10 bg-primary rounded-full" />
                      <span className="text-[10px] font-[800] text-primary uppercase tracking-[0.2em]">{project.tags[0]}</span>
                    </div>

                    <h3 className="text-[24px] md:text-[32px] font-[900] text-slate-900 leading-[1.1] tracking-tighter mb-5 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-[15px] md:text-[16px] text-slate-600 leading-relaxed mb-6 flex-1 font-[450]">
                      {project.description}
                    </p>

                    <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                       <div className="flex flex-col">
                         <span className="text-[9px] font-[800] text-slate-400 uppercase tracking-widest mb-1">Project Impact</span>
                         <span className="text-[14px] font-[800] text-slate-900">{project.scale}</span>
                       </div>
                       <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all duration-500">
                         <ArrowRight size={18} />
                       </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Conversion Terminal */}
      <section className="py-20 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[#0066FF]/10 pointer-events-none blur-[100px]" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8 font-[700] text-[10px] text-blue-400 tracking-[0.2em] uppercase">
            Start Collaboration
          </div>
          <h2 className="text-[36px] md:text-[56px] font-[900] tracking-tighter mb-8 leading-[1] max-w-4xl mx-auto">
            Ready to build the future of <span className="text-secondary italic">Infrastructure?</span>
          </h2>
          <p className="text-[17px] text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed font-[450]">
            Deployment-ready engineering teams for major water and energy projects across East Africa.
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <Link href="/contact" className="px-8 py-4 bg-primary hover:bg-[#0086cc] text-white rounded-full font-[800] text-[15px] transition-all shadow-xl shadow-blue-500/20">
              Contact Engineering Team
            </Link>
            <Link href="/catalog" className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-full font-[800] text-[15px] transition-all backdrop-blur-md">
              View Hardware Catalog
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

