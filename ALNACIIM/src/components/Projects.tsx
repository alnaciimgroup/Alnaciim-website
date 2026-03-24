"use client";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { projects } from "@/data/projects";
import { motion } from "framer-motion";

export default function Projects() {
  // Grab the top 3 featured projects
  const topProjects = projects.slice(0, 3);

  return (
    <section className="py-32 bg-[#0b0d14] relative overflow-hidden" id="projects">
      {/* Background Graphic */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#1152d4]/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>

      <div className="max-w-[1160px] mx-auto px-6 relative z-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-xl">
            <div className="text-[10px] font-[700] tracking-[2px] uppercase text-[#1152d4] mb-3 flex items-center gap-3">
              <span className="w-6 h-px bg-[#1152d4]/50"></span> Heritage Records
            </div>
            <h2 className="font-['Syne'] text-[36px] sm:text-[46px] font-[800] tracking-[-1.5px] text-white leading-[1.1]">
              Highlighted Case Studies
            </h2>
          </div>
          <Link href="/projects" className="inline-flex items-center gap-2 text-[13.5px] font-[600] font-['Syne'] text-white hover:text-[#1152d4] transition-colors pb-1 border-b-2 border-white hover:border-[#1152d4]">
            View The Full Archive
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
          {topProjects.map((proj, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
              className="group bg-white/5 backdrop-blur-sm rounded-[24px] overflow-hidden border border-white/10 flex flex-col hover:bg-white/10 transition-colors"
            >
              
              <div className="relative h-[220px] bg-slate-900 overflow-hidden shrink-0">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0d14]/80 to-transparent z-10"></div>
                <img 
                  src={proj.image} 
                  alt={proj.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-4 left-4 z-20">
                  <span className={`px-3 py-1.5 text-[9.5px] font-[700] tracking-[1.5px] rounded-full uppercase bg-[#1152d4]/90 text-white backdrop-blur-md`}>
                    {proj.category}
                  </span>
                </div>
              </div>
              
              <div className="p-7 flex-1 flex flex-col">
                <h3 className="font-['Syne'] text-[20px] font-[800] text-white tracking-tight mb-3 leading-[1.25]">
                  {proj.title}
                </h3>
                <p className="text-[14px] text-white/50 leading-[1.6] flex-1">
                  {proj.short_description}
                </p>
                <Link href="/projects" className="inline-flex items-center gap-1.5 text-[12.5px] font-[700] tracking-[0.5px] uppercase text-[#1152d4] hover:text-white transition-colors mt-6 pt-4 border-t border-white/10 w-fit">
                  Read Case Study <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
              
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
