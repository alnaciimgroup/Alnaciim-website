"use client";
import React from "react";
import Link from "next/link";
import { CheckCircle2, Factory, Zap, ShieldCheck } from "lucide-react";
import EnergyProjectsGrid from "@/components/energy/EnergyProjectsGrid";
import EnergyCTA from "@/components/energy/EnergyCTA";

export default function EnergySolutionsPage() {
  return (
    <div className="w-full bg-[#FAFBFF] font-['Inter'] selection:bg-[#FF5A00] selection:text-white">
      
      {/* 1. Neomorphic Bright Hero Section */}
      <section className="relative w-full pt-40 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Soft Orange Glow */}
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[500px] bg-[#FF8C00] rounded-full mix-blend-multiply filter blur-[120px] opacity-10 pointer-events-none z-0"></div>

        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10 flex flex-col lg:flex-row items-center gap-16">
          
          <div className="w-full lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-slate-200 text-[#FF5A00] shadow-sm mb-6">
              <Zap size={14} className="fill-current" />
              <span className="font-[600] text-[12px] tracking-wide">Core Infrastructure</span>
            </div>
            
            <h1 className="text-[48px] md:text-[64px] lg:text-[72px] font-[900] tracking-[-2px] text-slate-900 leading-[1.05] mb-8">
              Integrated<br/>Energy<br/>Architecture.
            </h1>
            <p className="text-[18px] text-slate-600 font-[400] leading-[1.6] mb-10 max-w-lg">
              End-to-end delivery of renewable power infrastructure. We design, procure, and install the foundations of modern utility.
            </p>
            
            <div className="flex items-center gap-6">
              <Link href="#portfolio" className="inline-flex items-center justify-center px-8 py-4 bg-[#FF5A00] text-white font-[700] text-[14px] rounded-full hover:-translate-y-1 transition-transform shadow-[0_8px_25px_rgba(255,90,0,0.3)]">
                VIEW TECHNICAL SPECIFICATIONS
              </Link>
            </div>
            
            {/* Soft Stats Box */}
            <div className="flex gap-12 mt-16 pt-8 border-t border-slate-200">
              <div>
                <div className="text-[36px] font-[800] text-slate-900 leading-none tracking-tight mb-2">2.4GW</div>
                <div className="text-[11px] text-slate-500 font-[700] tracking-[1px] uppercase">Installed Capacity</div>
              </div>
              <div className="w-px bg-slate-200"></div>
              <div>
                <div className="text-[36px] font-[800] text-slate-900 leading-none tracking-tight mb-2">12+</div>
                <div className="text-[11px] text-slate-500 font-[700] tracking-[1px] uppercase">Regional Hubs</div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 relative h-[500px] lg:h-[700px]">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#FF5A00] to-[#FF8C00] rounded-[40px] rotate-3 opacity-20 filter blur-2xl"></div>
            <img src="https://images.unsplash.com/photo-1509391366360-1e506f522f67?auto=format&fit=crop&q=80" alt="Solar Array" className="w-full h-full object-cover rounded-[40px] shadow-2xl relative z-10" />
            
            {/* Floating Element */}
            <div className="absolute -left-12 bottom-24 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.08)] border border-white z-20 hidden md:block">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#FFF5F0] rounded-full flex items-center justify-center text-[#FF5A00]">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <div className="text-[14px] font-[700] text-slate-900">Tier-1 EPC Partner</div>
                  <div className="text-[12px] text-slate-500 font-[500]">Certified Deployment</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. System Portfolio */}
      <section id="portfolio" className="py-20 max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <h2 className="text-[32px] font-[800] tracking-tight text-slate-900 mb-16 border-b border-slate-200 pb-6">System Portfolio</h2>

        <div className="flex flex-col gap-12 bg-white p-8 lg:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 rounded-3xl">
          
          {/* Solution 01 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center pb-12 border-b border-slate-100">
            <div>
              <div className="text-[10px] font-[700] tracking-[2px] uppercase text-[#FF5A00] mb-4">Solution 01</div>
              <h3 className="text-[32px] font-[800] text-slate-900 tracking-tight mb-6">Solar PV Systems</h3>
              <p className="text-[15px] leading-[1.7] text-slate-600 mb-8 max-w-md">
                High-efficiency crystalline modules engineered for peak performance in diverse climates. From residential rooftops to commercial hubs and industrial ground-mount arrays.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-[13px] font-[600] text-slate-700 tracking-wide uppercase"><CheckCircle2 size={16} className="text-[#FF5A00]" /> Residential Scale</li>
                <li className="flex items-center gap-3 text-[13px] font-[600] text-slate-700 tracking-wide uppercase"><CheckCircle2 size={16} className="text-[#FF5A00]" /> Commercial Roofmount</li>
                <li className="flex items-center gap-3 text-[13px] font-[600] text-slate-700 tracking-wide uppercase"><CheckCircle2 size={16} className="text-[#FF5A00]" /> Utility Industrial</li>
              </ul>
            </div>
            <div className="w-full aspect-[4/3] bg-slate-50 overflow-hidden rounded-2xl border border-slate-100 shadow-sm">
               <img src="https://images.unsplash.com/photo-1592833159057-6ade16551c6c?auto=format&fit=crop&q=80" alt="Solar Array" className="w-full h-full object-cover filter brightness-[0.98]" />
            </div>
          </div>

          {/* Solution 02 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center pb-12 border-b border-slate-100">
             <div className="w-full aspect-[4/3] bg-slate-50 overflow-hidden rounded-2xl border border-slate-100 shadow-sm hidden md:block">
               <img src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80" alt="Control UI" className="w-full h-full object-cover" />
             </div>
             <div className="md:pl-12">
              <div className="text-[10px] font-[700] tracking-[2px] uppercase text-[#FF5A00] mb-4">Solution 02</div>
              <h3 className="text-[32px] font-[800] text-slate-900 tracking-tight mb-6">Hybrid Microgrids</h3>
              <p className="text-[15px] leading-[1.7] text-slate-600 mb-8 max-w-md">
                Intelligent integration of Solar, Battery, and existing Diesel infrastructure. Our EMS (Energy Management Systems) dynamically balance loads to minimize carbon dependency and fuel burn.
              </p>
              <Link href="#contact" className="inline-flex items-center justify-center px-6 py-3 bg-[#FFF5F0] text-[#FF5A00] font-[700] text-[12px] uppercase tracking-wide rounded-full hover:bg-[#FFede4] transition-colors">
                Explore Integration Lab
              </Link>
            </div>
            {/* Mobile order image */}
            <div className="w-full aspect-[4/3] bg-slate-50 overflow-hidden rounded-2xl border border-slate-100 shadow-sm md:hidden">
               <img src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80" alt="Control UI" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Solution 03 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center pb-12 border-b border-slate-100">
            <div>
              <div className="text-[10px] font-[700] tracking-[2px] uppercase text-[#FF5A00] mb-4">Solution 03</div>
              <h3 className="text-[32px] font-[800] text-slate-900 tracking-tight mb-6">Battery Energy Storage (BESS)</h3>
              <p className="text-[15px] leading-[1.7] text-slate-600 mb-8 max-w-md">
                From modular 5kWh home systems to containerized multi-MWh utility installations. High-cycle life LFP chemistry with integrated thermal management and fire suppression.
              </p>
              <div className="flex gap-6 border-t border-slate-100 pt-6">
                <div>
                  <div className="text-[20px] font-[700] text-[#FF5A00] italic">Modular</div>
                  <div className="text-[10px] text-slate-500 font-[600] tracking-wide uppercase">Scaleable Architecture</div>
                </div>
                <div className="w-px bg-slate-200"></div>
                <div>
                  <div className="text-[20px] font-[700] text-[#FF5A00]">98.2%</div>
                  <div className="text-[10px] text-slate-500 font-[600] tracking-wide uppercase">Round-Trip Efficiency</div>
                </div>
              </div>
            </div>
            <div className="w-full aspect-[4/3] bg-slate-50 overflow-hidden rounded-2xl border border-slate-100 shadow-sm">
               <img src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80" alt="BESS Containers" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Solution 04 - Bright Mode */}
          <div className="w-full bg-[#FFF5F0] rounded-3xl flex flex-col md:flex-row shadow-sm border border-[#FF5A00]/10 overflow-hidden relative">
             <div className="w-full md:w-1/2 aspect-[4/3] md:aspect-auto h-auto min-h-[400px]">
               <img src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&q=80" alt="Generators" className="w-full h-full object-cover" />
             </div>
             <div className="w-full md:w-1/2 p-12 lg:p-16 flex flex-col justify-center relative z-10">
              <div className="text-[10px] font-[700] tracking-[2px] uppercase text-[#FF5A00] mb-4">Solution 04</div>
              <h3 className="text-[32px] font-[800] text-slate-900 tracking-tight mb-6">Industrial Power Units</h3>
              <p className="text-[15px] leading-[1.7] text-slate-700 mb-8 max-w-md">
                Heavy-duty generators and backup redundancy for mission-critical operations. Designed for 24/7 reliability in mining, healthcare, and telecommunications.
              </p>
              <div className="flex items-center gap-6 text-[#FF5A00]">
                <Factory size={24} />
                <Zap size={24} />
                <ShieldCheck size={24} />
              </div>
             </div>
          </div>

        </div>
      </section>

      {/* 3. The EPC Lifecycle */}
      <section className="py-24 bg-white border-y border-slate-100 shadow-sm relative z-10">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          
          <div className="max-w-xl mb-16">
            <h2 className="text-[36px] font-[800] tracking-tight text-slate-900 mb-6">The EPC Lifecycle</h2>
            <p className="text-[15px] leading-[1.7] text-slate-600">
              Our structured approach to project delivery ensures technical accuracy and budget compliance at every milestone.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-12">
            {[
              { num: "01", title: "Design & Load Calculation", desc: "Precision site surveys and spectral load modeling for optimized system sizing." },
              { num: "02", title: "Strategic Procurement", desc: "Direct Tier-1 OEM partnerships ensuring equipment longevity and warranty integrity." },
              { num: "03", title: "Field Installation", desc: "Safety-certified engineering teams executing according to international ISO standards." },
              { num: "04", title: "Commissioning & O&M", desc: "Comprehensive testing protocols followed by real-time digital performance monitoring." }
            ].map((step, i) => (
              <div key={i} className="relative group">
                <div className="text-[64px] font-[900] text-slate-100 leading-none mb-4 group-hover:text-[#FF8C00] transition-colors duration-500 select-none">{step.num}</div>
                <h4 className="text-[18px] font-[800] text-slate-900 mb-4">{step.title}</h4>
                <p className="text-[14px] leading-[1.7] text-slate-500 font-[500]">{step.desc}</p>
                {/* Vertical Divider (desktop) */}
                {i < 3 && <div className="hidden lg:block absolute top-[20%] right-[-24px] w-px h-[60%] bg-slate-100"></div>}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Why Alnaciim Energy? */}
      <section className="py-24 max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="w-full lg:w-1/2 relative aspect-[3/4] max-h-[700px]">
            <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80" alt="Engineering Operations" className="w-full h-full object-cover rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.06)]" />
            <div className="absolute -bottom-8 lg:-right-8 bg-white p-8 lg:p-10 shadow-2xl max-w-sm rounded-[24px] border border-slate-100">
              <p className="text-[18px] font-[600] text-slate-900 italic leading-[1.6] mb-4">
                "Engineering is not just math; it is the physical manifestation of reliability."
              </p>
              <div className="text-[11px] font-[800] text-[#FF5A00] tracking-[2px] uppercase">— Technical Directorate</div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col justify-center lg:pl-10">
            <div className="text-[11px] font-[700] tracking-[2px] uppercase text-[#FF5A00] mb-4">Proven Capability</div>
            <h2 className="text-[40px] md:text-[48px] font-[900] tracking-tight text-slate-900 mb-12 italic">
              Why Alnaciim Energy?
            </h2>

            <div className="flex flex-col gap-10">
              <div className="flex gap-6">
                <div className="text-[32px] font-[800] text-[#FF5A00] w-12 shrink-0 h-10 flex items-center justify-center">28</div>
                <div>
                  <h4 className="text-[18px] font-[800] text-slate-900 mb-2">Years Track Record</h4>
                  <p className="text-[15px] leading-[1.6] text-slate-500 font-[400]">Decades of navigating the evolving global energy landscape.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 shrink-0 h-12 flex items-center justify-center bg-[#FFF5F0] rounded-xl"><Factory size={20} className="text-[#FF5A00]" /></div>
                <div>
                  <h4 className="text-[18px] font-[800] text-slate-900 mb-2">In-House Engineering</h4>
                  <p className="text-[15px] leading-[1.6] text-slate-500 font-[400]">No outsourcing. Every design is vetted by our certified structural engineers.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 shrink-0 h-12 flex items-center justify-center bg-[#FFF5F0] rounded-xl"><Zap size={20} className="text-[#FF5A00]" /></div>
                <div>
                  <h4 className="text-[18px] font-[800] text-slate-900 mb-2">Regional Logistics</h4>
                  <p className="text-[15px] leading-[1.6] text-slate-500 font-[400]">Optimized supply chain for rapid mobilization across the territory.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Extracted Projects Injection */}
      <div className="relative z-10">
        <EnergyProjectsGrid />
      </div>

      {/* Unified bright Neo-SaaS CTA & Footer */}
      <div className="relative z-20">
        <EnergyCTA />
      </div>

    </div>
  );
}
