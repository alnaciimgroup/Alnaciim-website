"use client";

import { X, ArrowRight, Zap, Target, Gauge } from "lucide-react";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Type definition for Project inline to avoid missing exports
type ProjectType = {
  id: string;
  category: string;
  title: string;
  scope: string;
  power: string;
  scale: string;
  description: string;
  tags: string[];
  image: string;
};

interface ProjectModalProps {
  project: ProjectType;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  // Prevent scrolling on the body when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[300] flex items-center justify-center p-4 sm:p-6 md:p-8 overflow-y-auto">
      {/* Backdrop */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-[#050505]/80 backdrop-blur-xl transition-opacity" 
        onClick={onClose}
      />
      
      {/* Modal Card */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative w-full max-w-6xl max-h-full glass-card border-white/10 rounded-[3rem] shadow-2xl flex flex-col transform overflow-hidden"
      >
        
        <div className="flex flex-col lg:flex-row h-full overflow-y-auto lg:overflow-hidden">
          
          {/* Left Column: Media & Core Info */}
          <div className="w-full lg:w-3/5 relative flex flex-col">
            {/* Header Image Area */}
            <div className="relative w-full aspect-video lg:h-full shrink-0">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover brightness-75 transition-all duration-1000" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-transparent to-transparent opacity-40" />
              
              {/* Header Text */}
              <div className="absolute bottom-10 left-10 right-10">
                <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full glass-panel border border-white/10 text-blue-400 text-[10px] font-bold tracking-widest uppercase mb-6">
                  {project.category}
                </div>
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1] uppercase max-w-2xl">
                  {project.title}
                </h2>
              </div>
            </div>

            {/* Close Button Mobile */}
            <button 
              onClick={onClose} 
              className="lg:hidden absolute top-6 right-6 glass-panel border border-white/10 text-white rounded-full p-3 backdrop-blur-md transition-colors hover:bg-white/5 z-50"
            >
              <X size={20} />
            </button>
          </div>

          {/* Right Column: Technical & Interaction */}
          <div className="w-full lg:w-2/5 flex flex-col bg-[#0A0A0A]/95 backdrop-blur-3xl overflow-y-auto">
            
            {/* Close Button Desktop */}
            <button 
              onClick={onClose} 
              className="hidden lg:flex absolute top-10 right-10 glass-panel border border-white/10 text-white/40 hover:text-white rounded-full p-3 transition-colors z-50"
            >
              <X size={24} />
            </button>

            <div className="p-10 lg:p-14 space-y-12">
              
              {/* Overview */}
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="h-px flex-1 bg-white/5" />
                  <span className="text-[11px] font-bold text-zinc-600 uppercase tracking-widest">Technical Overview</span>
                </div>
                <p className="text-lg text-zinc-500 leading-relaxed font-medium">
                  {project.description}
                </p>
              </div>

              {/* Specs Grid */}
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="h-px flex-1 bg-white/5" />
                  <span className="text-[11px] font-bold text-zinc-600 uppercase tracking-widest">Project Performance</span>
                </div>
                
                <div className="grid gap-4">
                  {[
                    { label: "Regional Scale", value: project.scale, icon: <Target size={18} /> },
                    { label: "Engineering Scope", value: project.scope, icon: <Zap size={18} /> },
                    { label: "Power Grid", value: project.power, icon: <Gauge size={18} /> }
                  ].map((spec, i) => (
                    <div key={i} className="glass-panel border border-white/5 p-6 rounded-3xl flex items-center gap-5 group hover:border-white/10 transition-all">
                      <div className="w-12 h-12 rounded-2xl glass-panel border border-white/10 flex items-center justify-center text-blue-400 shadow-xl group-hover:scale-110 transition-transform">
                        {spec.icon}
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest mb-1">{spec.label}</span>
                        <span className="text-base font-bold text-white uppercase tracking-tight">{spec.value}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div className="space-y-6">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-5 py-2 glass-panel border border-white/5 text-[10px] font-bold text-zinc-500 uppercase tracking-widest rounded-full hover:text-blue-500 transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action */}
              <div className="pt-10 border-t border-white/5">
                <button className="w-full py-6 bg-blue-600 hover:bg-blue-700 text-white rounded-3xl font-bold text-[14px] uppercase tracking-widest transition-all shadow-[0_0_20px_rgba(0,112,255,0.3)] hover:shadow-[0_0_35px_rgba(0,112,255,0.5)] hover:-translate-y-1 flex items-center justify-center gap-3 group">
                  Download Project Specs
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <p className="text-[11px] text-zinc-700 font-bold uppercase tracking-widest text-center mt-6">
                  Technical Documentation Verified 2024
                </p>
              </div>

            </div>
          </div>
          
        </div>
      </motion.div>
    </div>
  );
}
