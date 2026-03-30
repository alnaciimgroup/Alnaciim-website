"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const industries = [
  {
    title: "Water Infrastructure",
    subtitle: "SUSTAINABILITY & SUPPLY",
    image: "/images/eng_water.png",
    color: "#ffc100",
    desc: "Large-scale RO plants, borehole drilling, and municipal distribution networks engineered for peak reliability."
  },
  {
    title: "Power Systems",
    subtitle: "STABILIZATION & GRID",
    image: "/images/eng_power.png",
    color: "#ffc100",
    desc: "Industrial-grade solar arrays and microgrid systems designed to stabilize and augment national power grids."
  }
];

export default function EngineeringIndustries() {
  return (
    <section className="w-full py-24 md:py-32 bg-white">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">
          <div className="lg:col-span-4 bg-slate-900 rounded-2xl p-10 md:p-12 flex flex-col justify-center text-white relative overflow-hidden group">
            <div className="relative z-10">
              <div className="text-[#ffc100] font-[700] text-[13px] tracking-widest uppercase mb-6">Key Feature</div>
              <h2 className="text-[36px] md:text-[44px] font-[900] tracking-tight leading-[1.1] mb-8">
                Expertise across vital industries.
              </h2>
              <p className="text-slate-400 text-[16px] leading-[1.6]">
                Our multidisciplinary approach allows us to solve complex challenges in essential infrastructure and energy production.
              </p>
            </div>
            {/* Decorative Grid */}
            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
          </div>

          {industries.map((industry, idx) => (
            <div key={idx} className="lg:col-span-4 relative h-[400px] md:h-auto min-h-[400px] overflow-hidden rounded-2xl group cursor-pointer">
              <img 
                src={industry.image} 
                alt={industry.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8 text-white z-10">
                <div className="text-[#ffc100] font-[700] text-[10px] tracking-widest uppercase mb-2">
                  {industry.subtitle}
                </div>
                <h3 className="text-[24px] font-[800] tracking-tight group-hover:text-[#ffc100] transition-colors">
                  {industry.title}
                </h3>
              </div>
              <div className="absolute top-8 right-8 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:rotate-45">
                <ArrowUpRight size={24} className="text-white" />
              </div>
            </div>
          ))}
        </div>

        {/* Full-width Industrial Automation */}
        <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden group cursor-pointer shadow-xl">
             <img 
             src="/images/eng_automation.png" 
             alt="Industrial Automation" 
             className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
           />
           <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors"></div>
           <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
              <h3 className="text-[36px] md:text-[56px] font-[900] text-white tracking-tighter mb-4 group-hover:scale-105 transition-transform duration-500">
                Industrial Automation
              </h3>
              <p className="max-w-2xl text-slate-200 text-[16px] md:text-[18px] leading-[1.6]">
                Modernizing industrial systems with integrated automation solutions for the next generation of smart manufacturing and industrial logistics.
              </p>
           </div>
        </div>

      </div>
    </section>
  );
}
