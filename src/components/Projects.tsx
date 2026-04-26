"use client";
import { ArrowRight, Database } from "lucide-react";
import Link from "next/link";
import { projects } from "@/data/projects";
import { motion } from "framer-motion";

export default function Projects() {
  const topProjects = projects.slice(0, 3);

  return (
    <section className="py-32 bg-white relative overflow-hidden" id="projects">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-24">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[11px] font-bold tracking-widest uppercase mb-10"
            >
              <Database size={14} />
              Heritage Portfolio
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[40px] md:text-[68px] font-bold tracking-tight text-slate-900 leading-[1] uppercase"
            >
              Major <br/><span className="text-blue-600 italic">Infrastructure</span> Records.
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link href="/work" className="px-10 py-5 bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 rounded-2xl font-bold text-[14px] uppercase tracking-widest transition-all flex items-center gap-3 group">
              Full Archive <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform text-blue-600" />
            </Link>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {topProjects.map((proj, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              className="group bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 transition-all duration-500 hover:shadow-premium hover:-translate-y-2 flex flex-col"
            >
              
              <div className="relative h-[260px] bg-slate-100 overflow-hidden shrink-0">
                <img 
                  src={proj.image} 
                  alt={proj.title}
                  className="w-full h-full object-cover brightness-[0.85] group-hover:brightness-100 group-hover:scale-105 transition-all duration-1000"
                />
                <div className="absolute top-6 left-6 z-20">
                  <span className="px-4 py-1.5 text-[9px] font-bold tracking-widest rounded-lg uppercase bg-blue-600 text-white shadow-xl">
                    {proj.tags[0]}
                  </span>
                </div>
              </div>
              
              <div className="p-10 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold text-slate-900 tracking-tight mb-4 uppercase group-hover:text-blue-600 transition-colors">
                  {proj.title}
                </h3>
                <p className="text-slate-500 leading-relaxed text-sm font-medium flex-1 line-clamp-3">
                  {proj.description}
                </p>
                <Link href="/work" className="inline-flex items-center gap-3 text-[11px] font-bold tracking-widest uppercase text-blue-600 hover:text-blue-700 transition-all mt-10 pt-8 border-t border-slate-50 w-fit group/link">
                  Read Case Study <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
              
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
