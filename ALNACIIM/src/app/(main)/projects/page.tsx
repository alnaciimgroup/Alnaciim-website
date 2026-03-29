"use client";

import { ArrowRight, Server } from "lucide-react";
import { useState } from "react";
import { projects } from "@/data/projects";
import { motion } from "framer-motion";

export default function ProjectsPage() {

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

      {/* Projects List - Floating Arrays - Reverted to Large Layout per User Request */}
      <section className="max-w-[1240px] mx-auto px-6 lg:px-12 mb-32 flex flex-col gap-16 relative z-10">
        {projects.map((proj, idx) => (
          <motion.div 
            key={proj.id} 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className={`bg-white rounded-3xl p-8 lg:p-12 flex flex-col lg:flex-row gap-12 items-center group relative shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_20px_50px_rgb(0,0,0,0.12)] hover:-translate-y-2 transition-all duration-500 ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
          >
            {/* Soft Floating Image Side */}
            <div 
              className="w-full lg:w-1/2 relative bg-slate-100 aspect-[4/3] flex items-center justify-center overflow-hidden rounded-2xl group-hover:shadow-inner transition-all duration-500"
            >
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full border border-slate-200 text-[10px] sm:text-[12px] font-[700] tracking-wide text-slate-800 z-20 flex items-center gap-2 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00D2FF] animate-pulse"></span>
                Record [{proj.id}]
              </div>
              
              <img src={proj.image} alt={proj.title} className="w-full h-full object-cover filter brightness-[0.95] group-hover:scale-[1.05] transition-transform duration-700" />
            </div>
            
            {/* Stripe Typography Side */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center">
              <div>
                <div className="text-[12px] font-[700] uppercase tracking-wider text-[#0066FF] mb-4 bg-blue-50 px-3 py-1.5 rounded-md inline-block">
                  {proj.category}
                </div>
                
                <h2 className="text-[28px] lg:text-[40px] font-[800] text-slate-900 leading-[1.1] mb-6 tracking-tight">
                  {proj.title}
                </h2>
                
                <p className="text-[16px] lg:text-[18px] text-slate-600 leading-[1.8] mb-10 font-[400]">
                  {proj.description}
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6 mt-auto border-t border-slate-100 pt-8">
                <div>
                  <div className="text-[12px] font-[600] text-slate-500 uppercase tracking-wide">Payload Scope</div>
                  <div className="text-[18px] font-[700] text-slate-900 mt-2">{proj.scale}</div>
                </div>
                <div>
                  <div className="text-[12px] font-[600] text-slate-500 uppercase tracking-wide">Grid Specification</div>
                  <div className="text-[18px] font-[700] text-slate-900 mt-2">{proj.power}</div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </section>
      
    </div>
  );
}
