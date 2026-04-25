"use client";

import { Sun, Battery, Zap, Fuel, ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { CONTENT } from "@/data/content";

export default function EnergySolutions() {
  const { hero } = CONTENT.energy;

  const solutions = [
    {
      index: "01",
      title: "Solar PV Systems",
      description: "Alnaciim Energy designs, supplies and installs solar photovoltaic systems sized for the actual load and site conditions.",
      features: [
        "Residential rooftop — 2 kW to 30 kW",
        "Commercial compounds — 30 kW to 500 kW",
        "Industrial ground-mount — 100 kW+",
        "In-house technical installation & support",
        "On-grid, off-grid and solar pumping configurations"
      ],
      image: "/images/solar_power_system.png",
      icon: <Sun className="text-[#FF5A00]" size={24} />
    },
    {
      index: "02",
      title: "Hybrid Microgrid Systems",
      description: "Our systems seamlessly route energy between Solar PV, BESS and Generators. Alnaciim Group integrates all three systems into a single-source solution.",
      features: [
        "Intelligent stabilization of unreliable grids",
        "Seamless source selection (Solar/BESS/Grid/Gen)",
        "Peak shaving and continuous load management",
        "Independent power for remote infrastructure",
        "High-cycle life LiFePO4 battery integration"
      ],
      image: "/images/energy_intelligent_controller.png",
      icon: <Zap className="text-[#FF5A00]" size={24} />
    },
    {
      index: "03",
      title: "Generator Sets & Backup",
      description: "Heavy-duty diesel generation optimized for base load power in remote locations. Engineered with DSE controllers to synchronize with solar.",
      features: [
        "Standby, prime and continuous ratings",
        "AMF and parallel load-sharing controllers",
        "Solar-to-generator integration, automatic switching",
        "Weatherproof and sound-attenuated enclosures",
        "Full load-bank testing before handover"
      ],
      image: "/images/catalog_generator_1774889998709.png",
      icon: <Fuel className="text-[#FF5A00]" size={24} />
    },
    {
      index: "04",
      title: "Intelligent System Controllers",
      description: "The logic layer of the power system. We specify and program site-specific controllers rather than a one-size-fits-all approach.",
      features: [
        "Programmable logic for complex grids",
        "DSE and ComAp industrial controller support",
        "Remote SCADA monitoring and control",
        "Custom ATS and parallel panel fabrication",
        "Real-time energy telemetry and reporting"
      ],
      image: "/images/energy_intelligent_controller.png",
      icon: <Zap className="text-[#FF5A00]" size={24} />
    }
  ];

  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="py-20 lg:py-40 bg-slate-50 border-b border-slate-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#FF5A00]/5 blur-[100px] -z-10" />
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="max-w-4xl text-center mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 text-[#FF5A00] text-[10px] font-bold tracking-[0.2em] uppercase mb-8 border border-orange-100 mx-auto"
            >
              Enterprise Energy Solutions
            </motion.div>
            <h1 className="text-[48px] md:text-[64px] lg:text-[72px] font-[900] text-slate-900 leading-[1] tracking-tight mb-8 uppercase">
              Energy solutions for homes, business and industry.
            </h1>
            <p className="text-[16px] md:text-[18px] text-slate-600 leading-relaxed font-[450] max-w-2xl mx-auto">
              Alnaciim Energy provides the technical infrastructure required for energy independence. We design for the specific environmental and operational challenges of East Africa.
            </p>
          </div>
        </div>
      </section>

      {/* Systematic Excellence Grid for Solar & Hybrid */}
      <section className="py-24 bg-white border-t border-slate-50">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 mb-40">
            {solutions.slice(0, 2).map((sol, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex flex-col group relative"
              >
                <div className="text-[72px] lg:text-[96px] font-[900] text-slate-50 leading-none mb-6 group-hover:text-[#FF5A00]/10 transition-colors duration-500">
                  {sol.index}
                </div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center text-[#FF5A00]">
                    {sol.icon}
                  </div>
                  <h3 className="text-[20px] md:text-[24px] lg:text-[28px] font-[900] text-slate-900 tracking-tight group-hover:text-[#FF5A00] transition-colors uppercase">
                    {sol.title}
                  </h3>
                </div>
                <p className="text-slate-600 leading-[1.7] text-[15px] md:text-[16px] font-[450] mb-8">
                  {sol.description}
                </p>
                <ul className="space-y-4 mb-10 border-l border-slate-100 pl-6">
                  {sol.features.map((feat, j) => (
                    <li key={j} className="flex items-start gap-3 text-[13px] text-slate-500 font-[500]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FF5A00] mt-1.5 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Remaining Solutions - Alternating Blocks */}
          <div className="flex flex-col gap-32">
            {solutions.slice(2).map((sol, i) => (
              <div key={i} className={`flex flex-col lg:flex-row gap-16 lg:gap-24 items-center ${i % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="w-full lg:w-1/2">
                  <div className="aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl relative group bg-slate-100">
                    <img src={sol.image} alt={sol.title} className={`w-full h-full object-cover transition-all duration-700 ${sol.title.includes('Solar') ? 'object-bottom' : ''}`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent" />
                  </div>
                </div>
                <div className="w-full lg:w-1/2">
                  <div className="text-[72px] lg:text-[96px] font-[900] text-slate-50 leading-none mb-4">
                    {sol.index}
                  </div>
                  <div className="w-14 h-14 rounded-2xl bg-orange-50 flex items-center justify-center mb-8 text-[#FF5A00]">
                    {sol.icon}
                  </div>
                  <h2 className="text-[32px] md:text-[42px] font-[900] text-slate-900 leading-[1.1] tracking-tight mb-6 uppercase">
                    {sol.title}
                  </h2>
                  <p className="text-[16px] md:text-[18px] text-slate-600 leading-relaxed mb-8">
                    {sol.description}
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                    {sol.features.map((feat, j) => (
                      <li key={j} className="flex items-start gap-4 text-slate-700 font-[500] text-[14px]">
                        <CheckCircle2 size={18} className="text-[#FF5A00] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact" className="inline-flex items-center gap-2 text-slate-900 font-[700] hover:text-[#FF5A00] transition-colors group uppercase tracking-widest text-[11px]">
                    Request a technical proposal
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Verbatim Page 16 */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#FF5A00]/5 -skew-x-12 transform translate-x-1/4" />
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 text-center relative z-10">
          <h2 className="text-[42px] md:text-[56px] font-[900] mb-8 tracking-tighter uppercase leading-[1.1]">
            Ready for an Energy independence?
          </h2>
          <p className="text-[16px] md:text-[18px] text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed font-[450]">
            Start with a detailed site assessment and energy audit. Our engineers will design a system sized specifically for your load and operational requirements.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 bg-[#FF5A00] hover:bg-[#e65100] text-white rounded-2xl font-[700] transition-all shadow-xl shadow-orange-500/20 group uppercase tracking-[0.2em] text-[12px]">
              Book Site Assessment
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/contact" className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-2xl font-[700] transition-all uppercase tracking-[0.2em] text-[12px]">
              Request technical proposal
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
