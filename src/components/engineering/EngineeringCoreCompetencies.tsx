"use client";
import { motion } from "framer-motion";
import { CONTENT } from "@/data/content";

export default function EngineeringCoreCompetencies() {
  const { pillars, pillars_intro } = CONTENT.engineering;

  return (
    <section className="w-full py-24 md:py-32 bg-white" id="capabilities">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-24 gap-12">
          <div className="max-w-4xl">
            <div className="text-blue-500 font-[800] text-[10px] tracking-[0.25em] uppercase mb-4">Core Competencies</div>
            <h2 className="text-[44px] md:text-[64px] font-[900] tracking-tighter text-[#0F172A] leading-[1] mb-6">
              Systematic Excellence.
            </h2>
            <p className="max-w-2xl text-slate-500 text-[18px] md:text-[20px] leading-[1.6] font-[450]">
              {pillars_intro}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="flex flex-col group"
            >
              <div className="text-[80px] lg:text-[100px] font-[900] text-slate-100 leading-none mb-8 group-hover:text-blue-500/10 transition-colors duration-500">
                0{idx + 1}
              </div>
              <h3 className="text-[22px] font-[900] text-[#0F172A] mb-5 tracking-tight group-hover:text-blue-600 transition-colors">
                {pillar.title}
              </h3>
              <p className="text-slate-500 leading-[1.7] text-[15px] md:text-[17px] font-[450]">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
