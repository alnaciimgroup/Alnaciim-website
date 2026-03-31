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
      <AnimatePresence>
        {filter === "All" && (
          <motion.section 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mb-24 relative z-10 px-6 lg:px-12 overflow-hidden"
          >
            <div className="container mx-auto">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="group relative h-[450px] md:h-[550px] rounded-[2.5rem] overflow-hidden shadow-2xl border border-white"
              >
                <img src={featuredProject.image} alt="Featured Project" className="w-full h-full object-cover transition-transform duration-[2.5s] group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                
                <div className="absolute bottom-12 left-10 right-10 flex flex-col md:flex-row justify-between items-end gap-10 text-white">
                  <div className="max-w-2xl">
                    <div className="flex items-center gap-3 mb-6">
                       <div className="px-4 py-1.5 bg-primary rounded-full text-[10px] font-[800] uppercase tracking-widest leading-none shadow-xl shadow-primary/20">Featured Case</div>
                       <div className="flex items-center gap-2 text-[12px] font-[600] text-slate-300">
                         <MapPin size={14} className="text-primary" /> {featuredProject.location}
                       </div>
                    </div>
                    <h2 className="text-[42px] md:text-[64px] font-[900] tracking-tighter leading-[0.9] mb-6">
                      {featuredProject.title}
                    </h2>
                    <p className="text-[18px] text-slate-300 leading-relaxed font-[400] max-w-xl">
                      {featuredProject.description}
                    </p>
                  </div>
                  <div className="shrink-0 flex flex-col items-end">
                    <div className="text-[11px] font-[800] text-primary uppercase tracking-widest mb-2 opacity-80">Technical Scale</div>
                    <div className="text-[36px] md:text-[48px] font-[900] text-white tracking-tight leading-none">{featuredProject.scale}</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* Modern Industrial Zigzag List */}
      <section className="pb-32 relative z-10">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col gap-24 md:gap-32">
            <AnimatePresence mode="popLayout">
              {(filter === "All" ? projects.slice(1) : filteredProjects).map((project, idx) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                  className={`flex flex-col lg:flex-row gap-12 lg:gap-24 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
                >
                  <div className="w-full lg:w-1/2">
                    <div className="relative aspect-[16/10] rounded-[2.5rem] overflow-hidden shadow-2xl group border border-slate-100">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[1.2s]" 
                      />
                      <div className="absolute top-8 left-8">
                         <div className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl border border-slate-100 shadow-sm text-[10px] font-[800] text-slate-900 tracking-[0.15em] uppercase">
                            {project.location}
                         </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="w-full lg:w-1/2">
                    <div className="flex items-center gap-3 mb-8">
                      <div className="h-[3px] w-12 bg-primary rounded-full" />
                      <span className="text-[11px] font-[900] text-primary uppercase tracking-[0.3em]">{project.tags[0]}</span>
                    </div>

                    <h3 className="text-[36px] md:text-[48px] font-[900] text-slate-900 leading-[1] tracking-tighter mb-8 transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-[17px] md:text-[19px] text-slate-500 leading-relaxed mb-10 font-[450]">
                      {project.description}
                    </p>

                    <div className="flex items-center gap-16 py-8 border-y border-slate-100">
                       <div className="flex flex-col">
                         <span className="text-[10px] font-[800] text-slate-400 uppercase tracking-widest mb-2">Project Impact</span>
                         <span className="text-[20px] font-[900] text-slate-900 tracking-tight">{project.scale}</span>
                       </div>
                       <div className="flex flex-col">
                         <span className="text-[10px] font-[800] text-slate-400 uppercase tracking-widest mb-2">Technical Scope</span>
                         <span className="text-[20px] font-[900] text-slate-900 tracking-tight">{project.service.split(' — ')[0]}</span>
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

