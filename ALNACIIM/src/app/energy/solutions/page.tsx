"use client";

import { Sun, Battery, Zap, Fuel, ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { CONTENT } from "@/data/content";

export default function EnergySolutions() {
  const { hero, pillars } = CONTENT.energy;

  const solutions = [
    {
      title: "Solar PV Systems",
      description: "Direct Tier-1 supply and precision design for all scales. Every system is sized against the actual site load profile and measured solar resource—we do not use standard templates.",
      features: [
        "Residential rooftop — 2 kW to 30 kW",
        "Commercial compounds — 30 kW to 500 kW",
        "Industrial ground-mount — 100 kW to multi-MW",
        "High-efficiency PERC and TOPCon modules",
        "On-grid, off-grid and solar pumping configurations"
      ],
      image: "/images/catalog_solar_panels_1774889827145.png",
      icon: <Sun className="text-[#00a8ff]" size={24} />
    },
    {
      title: "Hybrid Microgrid Systems",
      description: "Intelligent coordination of solar, battery storage, and diesel generation. Our energy management controllers select the optimal source in real time to maximize solar and reduce fuel cost.",
      features: [
        "Hospitals, clinics and healthcare facilities",
        "Telecom towers and remote communications",
        "Industrial manufacturing and processing",
        "Automated solar-priority dispatch algorithms",
        "Seamless integration of Solar, BESS and Gensets"
      ],
      image: "/images/industrial_automation_control_room_1774871867828.png",
      icon: <Zap className="text-[#00a8ff]" size={24} />
    },
    {
      title: "Battery Energy Storage (BESS)",
      description: "LFP battery systems for residential to utility applications. We specify LFP chemistry exclusively for superior cycle life (>6,000 cycles) and thermal stability.",
      features: [
        "Residential LFP — 5 kWh to 20 kWh modules",
        "Commercial LFP — 20 kWh to 100 kWh scalable racks",
        "Industrial BESS — 100 kWh to multi-MWh skid deployment",
        "High cycle life (>16 years of daily cycling)",
        "Integrated BMS for maintenance-free operation"
      ],
      image: "/images/catalog_inverter_1774889842179.png",
      icon: <Battery className="text-[#00a8ff]" size={24} />
    },
    {
      title: "Generator Sets & Backup",
      description: "Industrial diesel generator sets from 20 kVA to 3,000+ kVA. We provide full integration with hybrid controllers and in-house ATS panel fabrication.",
      features: [
        "Standby, prime and continuous ratings",
        "Weatherproof and sound-attenuated enclosures",
        "AMF and parallel load-sharing controllers",
        "Load bank testing to rated capacity before handover",
        "Automatic solar-to-generator priority switching"
      ],
      image: "/images/catalog_generator_1774889998709.png",
      icon: <Fuel className="text-[#00a8ff]" size={24} />
    },
    {
      title: "Intelligent System Controllers",
      description: "The logic layer of the power system. We specify and program site-specific controllers rather than a one-size-fits-all approach.",
      features: [
        "MPPT solar charge controllers (40A - 150A)",
        "Advanced multi-generator paralleling units",
        "Hybrid EMS source selection & management",
        "Remote SCADA monitoring and alarm notifications",
        "In-house PLC-based industrial process control"
      ],
      image: "/images/catalog_controller_1774889872104.png",
      icon: <Zap className="text-[#00a8ff]" size={24} />
    }
  ];

  return (
    <div className="bg-white pt-32">
      {/* Page Header */}
      <section className="py-20 lg:py-32 bg-slate-50 border-b border-slate-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#FF5A00]/5 blur-[100px] -z-10" />
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 text-[#FF5A00] text-[10px] font-bold tracking-[0.2em] uppercase mb-8 border border-orange-100"
            >
              Enterprise Energy Solutions
            </motion.div>
            <h1 className="text-[56px] md:text-[72px] font-[800] text-slate-900 leading-[1] tracking-tight mb-8">
              Energy solutions for business and industry.
            </h1>
            <p className="text-[20px] text-slate-600 leading-relaxed font-[450]">
              Alnaciim Energy provides the technical infrastructure required for energy independence. We design for the specific environmental and operational challenges of East Africa.
            </p>
          </div>
        </div>
      </section>

      {/* Architectural permanence. In energy design. (SolutionsLanding Style) */}
      <section className="relative w-full pt-32 pb-20 lg:pt-48 lg:pb-16 overflow-hidden bg-white">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-12 relative z-10 flex flex-col items-start">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="w-12 h-[1px] bg-[#FF5A00]"></div>
            <span className="text-[12px] font-[700] tracking-[0.3em] uppercase text-slate-400">Technical Philosophy</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-[64px] md:text-[88px] lg:text-[100px] font-[900] tracking-tighter text-slate-900 leading-[0.9] max-w-[1000px] mb-12"
          >
            Architectural<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5A00] to-orange-400">Permanence.</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[18px] md:text-[22px] text-slate-500 font-[450] max-w-3xl leading-[1.6]"
          >
            In energy design. Alnaciim Energy delivers high-complexity systems across critical infrastructure sectors. Our technical archive documents a legacy of permanence through rigorous standards and innovative methodology.
          </motion.p>
        </div>

        {/* Decorative large number in background */}
        <div className="absolute right-[-5%] bottom-0 text-[300px] lg:text-[500px] font-[900] text-slate-50 opacity-[0.03] leading-none pointer-events-none select-none">
          01
        </div>
      </section>

      {/* Systematic Excellence Grid for Solar & Hybrid */}
      <section className="py-24 bg-white border-t border-slate-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 mb-40">
            {[solutions[0], solutions[1]].map((sol, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex flex-col group relative"
              >
                <div className="text-[72px] lg:text-[96px] font-[900] text-slate-50 leading-none mb-6 group-hover:text-[#FF5A00]/10 transition-colors duration-500">
                  {idx === 0 ? "01" : "02"}
                </div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center text-[#FF5A00]">
                    {sol.icon}
                  </div>
                  <h3 className="text-[24px] md:text-[32px] font-[800] text-slate-900 tracking-tight group-hover:text-[#FF5A00] transition-colors uppercase">
                    {sol.title}
                  </h3>
                </div>
                <p className="text-slate-600 leading-[1.7] text-[16px] font-[450] mb-8">
                  {sol.description}
                </p>
                <ul className="space-y-4 mb-10 border-l border-slate-100 pl-6">
                  {sol.features.map((feat, j) => (
                    <li key={j} className="flex items-start gap-3 text-[14px] text-slate-500 font-[500]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FF5A00] mt-1.5 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Remaining Solutions - Restored Alternating Blocks */}
          <div className="flex flex-col gap-32">
            {[solutions[2], solutions[3], solutions[4]].map((sol, i) => (
              <div key={i} className={`flex flex-col lg:flex-row gap-16 lg:gap-24 items-center ${i % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="w-full lg:w-1/2">
                  <div className="aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl relative group">
                    <img src={sol.image} alt={sol.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                  </div>
                </div>
                <div className="w-full lg:w-1/2">
                  <div className="w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center mb-8 text-[#FF5A00]">
                    {sol.icon}
                  </div>
                  <h2 className="text-[36px] md:text-[48px] font-[800] text-slate-900 leading-[1.1] tracking-tight mb-6 uppercase">
                    {sol.title}
                  </h2>
                  <p className="text-[18px] text-slate-600 leading-relaxed mb-8">
                    {sol.description}
                  </p>
                  <ul className="space-y-4 mb-10">
                    {sol.features.map((feat, j) => (
                      <li key={j} className="flex items-start gap-4 text-slate-700 font-[500]">
                        <CheckCircle2 size={20} className="text-[#FF5A00] shrink-0 mt-1" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className="inline-flex items-center gap-2 text-slate-900 font-[700] hover:text-[#FF5A00] transition-colors group uppercase tracking-widest text-[13px]">
                    Request a technical proposal
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#FF5A00]/5 -skew-x-12 transform translate-x-1/4" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-[42px] md:text-[56px] font-[800] mb-8 tracking-tighter uppercase">Ready to stabilize your power?</h2>
          <p className="text-[18px] md:text-[20px] text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed font-[450]">
            Every Alnaciim Energy project starts with a detailed energy audit and load analysis. Talk to our engineers today about your facility's requirements.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#FF5A00] hover:bg-[#FF8C00] text-white rounded-2xl font-[700] transition-all shadow-xl shadow-orange-500/20 group uppercase tracking-widest text-[13px]">
              Start a Conversation
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/catalog" className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-2xl font-[700] transition-all uppercase tracking-widest text-[13px]">
              View Hardware Catalog
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
