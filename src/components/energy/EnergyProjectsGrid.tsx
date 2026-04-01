"use client";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";

export default function EnergyProjectsGrid({ limit }: { limit?: number }) {
  const energyProjects = projects.filter(p => p.tags.includes("Energy"));
  const displayedProjects = limit ? energyProjects.slice(0, limit) : energyProjects;

  return (
    <section className="w-full py-24 md:py-32 bg-[#FAFBFF] relative overflow-hidden z-10" id="projects">
      {/* Soft Orange Glow */}
      <div className="absolute top-[20%] right-[-10%] w-[40%] h-[500px] bg-[#FF5A00] rounded-full mix-blend-multiply filter blur-[140px] opacity-10 pointer-events-none"></div>
      
      <div className="max-w-[1240px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="mb-16 md:mb-24">
          <div className="text-[#FF5A00] font-[700] text-[13px] tracking-widest uppercase mb-4">Case Studies</div>
          <h2 className="text-[36px] md:text-[48px] font-[900] tracking-tight text-slate-900 leading-[1.1] mb-6">
            Executed Logic.<br />Deployed Power.
          </h2>
          <p className="max-w-xl text-[16px] md:text-[18px] text-slate-500 leading-[1.6]">
            A documented record of our most significant utility-scale arrays, hybrid microgrids, and prime generation assets operating across the Horn of Africa.
          </p>
        </div>

        {/* Floating Arrays Project Layout */}
        <div className="flex flex-col gap-12">
          {displayedProjects.map((proj, idx) => (
            <motion.div 
              key={proj.id} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className={`bg-white rounded-3xl p-8 flex flex-col lg:flex-row gap-10 items-center group relative shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgb(255,90,0,0.08)] hover:-translate-y-1 transition-all duration-500 border border-slate-100 ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* Soft Floating Image Side */}
              <div className="w-full lg:w-1/2 relative bg-slate-50 aspect-[4/3] flex items-center justify-center overflow-hidden rounded-2xl group-hover:shadow-inner transition-all duration-500">
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full border border-slate-200 text-[11px] font-[700] tracking-wider uppercase text-[#FF5A00] z-20 flex items-center gap-2 shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF8C00] animate-pulse"></span>
                  Project {proj.id}
                </div>
                
                <img src={proj.image} alt={proj.title} className="w-full h-full object-cover filter brightness-[0.95] group-hover:scale-[1.05] transition-transform duration-700" />
              </div>
              
              {/* Stripe Typography Side */}
              <div className="w-full lg:w-1/2 flex flex-col justify-center">
                <div>
                  <div className="text-[11px] font-[700] uppercase tracking-wider text-[#FF5A00] mb-4 bg-[#FFF5F0] px-3 py-1.5 rounded-md inline-block">
                    {proj.tags.join(" · ")}
                  </div>
                  
                  <h3 className="text-[24px] lg:text-[32px] font-[800] text-slate-900 leading-[1.2] mb-5 tracking-tight">
                    {proj.title}
                  </h3>
                  
                  <p className="text-[15px] lg:text-[16px] text-slate-600 leading-[1.8] mb-8 font-[400] line-clamp-4">
                    {proj.description}
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-6 mt-auto border-t border-slate-100 pt-6">
                  <div>
                    <div className="text-[11px] font-[600] text-slate-400 uppercase tracking-widest">Payload</div>
                    <div className="text-[15px] font-[700] text-slate-900 mt-1">{proj.scale}</div>
                  </div>
                  <div>
                    <div className="text-[11px] font-[600] text-slate-400 uppercase tracking-widest">Location</div>
                    <div className="text-[15px] font-[700] text-slate-900 mt-1">{proj.location}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
