"use client";

import { ArrowRight, Server } from "lucide-react";
import { useState } from "react";
import { projects } from "@/data/projects";
import ProjectModal from "@/components/ProjectModal";
import { motion } from "framer-motion";

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const stats = [
    { value: "28+", label: "Years Experience" },
    { value: "600K", label: "USGPD Capacity", glow: "text-[#0066FF]" },
    { value: "500kW", label: "Solar Array", glow: "text-[#0066FF]" },
    { value: "60+", label: "Major Deployments" }
  ];

  return (
    <div className="bg-[#FAFBFF] min-h-screen pt-32 w-full font-['Inter'] text-slate-900 selection:bg-[#00D2FF] selection:text-black overflow-hidden relative">
      
      {/* Background Soft Blurs */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[600px] bg-[#0066FF] rounded-full mix-blend-multiply filter blur-[120px] opacity-10 animate-blob pointer-events-none"></div>

      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-[1240px] mx-auto px-6 lg:px-12 mb-20 relative z-10 text-center flex flex-col items-center"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-slate-200 shadow-sm text-[#0066FF] mb-8">
          <Server size={14} className="fill-current" />
          <span className="font-[600] text-[12px] tracking-wide">System Logs / Infrastructure Archive</span>
        </div>
        
        <h1 className="text-[56px] md:text-[88px] font-[800] leading-[1] tracking-[-3px] mb-8 text-slate-900 max-w-[1000px]">
          Industrial Layouts. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0066FF] to-[#00D2FF]">Executed Logic.</span>
        </h1>
        
        <p className="max-w-[600px] text-[18px] text-slate-600 leading-[1.8] font-[400]">
          An authoritative server dump of past industrial excellence, hydrology development, and utility-scale deployments spanning 28 operational years.
        </p>
      </motion.section>

      {/* Floating Stats Bar */}
      <section className="w-full mb-32 px-6 lg:px-12 relative z-10">
        <div className="max-w-[1240px] mx-auto bg-white rounded-3xl border border-slate-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col lg:flex-row justify-between divide-y lg:divide-y-0 lg:divide-x divide-slate-100 overflow-hidden">
          {stats.map((s, i) => (
             <div key={i} className="text-center px-8 py-10 w-full hover:bg-slate-50 transition-colors">
               <div className={`text-[48px] font-[800] mb-2 leading-none tracking-tight ${s.glow || 'text-slate-900'}`}>{s.value}</div>
               <div className="text-[13px] text-slate-500 font-[600] mt-2">{s.label}</div>
             </div>
          ))}
        </div>
      </section>

      {/* Projects List - Floating Arrays */}
      <section className="max-w-[1240px] mx-auto px-6 lg:px-12 mb-32 space-y-16 relative z-10">
        {projects.map((proj, idx) => (
          <motion.div 
            key={proj.id} 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-[2rem] border border-slate-200 p-4 lg:p-6 flex flex-col lg:flex-row gap-8 lg:gap-16 items-center group relative shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-500"
          >
            {/* Soft Floating Image Side */}
            <button 
              onClick={() => setSelectedProject(proj)}
              className={`w-full lg:w-1/2 relative bg-slate-100 h-[400px] lg:h-[450px] flex items-center justify-center overflow-hidden outline-none rounded-[1.5rem] group-hover:shadow-inner transition-all duration-700 ${idx % 2 !== 0 ? 'lg:order-last' : ''}`}
            >
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full border border-slate-200 text-[11px] font-[700] tracking-wide text-slate-800 z-20 flex items-center gap-2 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#00D2FF] animate-pulse"></span>
                Record [{proj.id}]
              </div>
              
              <img src={proj.image} alt={proj.title} className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-700" />
            </button>
            
            {/* Stripe Typography Side */}
            <div className="w-full lg:w-1/2 px-4 lg:px-8 py-8 lg:py-4">
              <div className="text-[12px] font-[700] uppercase tracking-wide text-[#0066FF] mb-4 bg-blue-50 px-3 py-1.5 rounded-lg inline-block">
                {proj.category}
              </div>
              
              <h2 className="text-[36px] md:text-[48px] font-[800] text-slate-900 leading-[1.1] mb-6 tracking-tight">
                {proj.title}
              </h2>
              
              <p className="text-[16px] text-slate-600 leading-[1.8] mb-10 w-full font-[400]">
                {proj.description}
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-10">
                <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
                  <div className="text-[12px] font-[600] text-slate-500 mb-2">Payload Limit</div>
                  <div className="text-[18px] font-[700] text-slate-900">{proj.scale}</div>
                </div>
                <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
                  <div className="text-[12px] font-[600] text-slate-500 mb-2">Grid Spec</div>
                  <div className="text-[18px] font-[700] text-slate-900">{proj.power}</div>
                </div>
              </div>

              <button 
                onClick={() => setSelectedProject(proj)}
                className="group/btn inline-flex items-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-xl text-[14px] font-[600] tracking-wide hover:bg-black transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5"
              >
                Inspect Data <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        ))}
      </section>

      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
      
    </div>
  );
}
