"use client";
import { motion } from "framer-motion";
import { FileText, ArrowRight } from "lucide-react";

const links = [
  { title: "01. Marine Systems Blueprints", id: "01" },
  { title: "02. Power Generation Lexicon", id: "02" },
  { title: "03. Automation Protocols v2.0", id: "03" }
];

export default function TechnicalArchive() {
  return (
    <section className="w-full py-24 md:py-32 bg-[#FAFBFF]">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div>
            <h2 className="text-[36px] md:text-[56px] font-[900] tracking-tighter text-slate-900 leading-[1] mb-8">
              Access the Technical Archive.
            </h2>
            <div className="flex flex-col gap-0 border-t border-slate-200 mt-12">
              {links.map((link, idx) => (
                <button 
                  key={idx} 
                  className="group flex items-center justify-between py-8 border-b border-slate-200 hover:px-4 transition-all duration-300 outline-none"
                >
                  <span className="text-[14px] md:text-[16px] font-[700] text-slate-500 group-hover:text-slate-900 transition-colors uppercase tracking-widest">
                    {link.title}
                  </span>
                  <ArrowRight size={20} className="text-slate-300 group-hover:text-[#ffc100] group-hover:translate-x-2 transition-all" />
                </button>
              ))}
            </div>
          </div>

          <div className="relative group">
            {/* Visual Document/Shield UI */}
            <div className="aspect-square bg-slate-900 rounded-3xl p-1 relative overflow-hidden transition-transform duration-700 group-hover:-rotate-1">
               <div className="absolute inset-0 bg-gradient-to-tr from-[#ffc100]/20 to-transparent"></div>
               <div className="w-full h-full rounded-[20px] border border-white/10 flex items-center justify-center relative overflow-hidden">
                  {/* Decorative Circle UI */}
                  <div className="w-64 h-64 rounded-full border border-white/5 flex items-center justify-center">
                    <div className="w-48 h-48 rounded-full border border-white/10 flex items-center justify-center">
                      <div className="w-32 h-32 rounded-full border border-white/20 flex items-center justify-center">
                         <div className="w-16 h-16 rounded-full bg-[#ffc100] flex items-center justify-center shadow-[0_0_40px_rgba(255,193,0,0.4)]">
                           <FileText size={32} className="text-slate-900" />
                         </div>
                      </div>
                    </div>
                  </div>

                  {/* PDF Badge */}
                  <div className="absolute top-10 right-10 bg-slate-800 border border-white/10 px-4 py-2 rounded-lg text-white font-[900] text-[24px] tracking-tighter flex flex-col items-center">
                    PDF
                    <span className="text-[8px] font-[600] tracking-widest uppercase opacity-40">Documentation</span>
                  </div>

                  {/* Text Overlay */}
                  <div className="absolute bottom-12 left-12 right-12 text-center">
                    <div className="text-white font-[900] text-[44px] tracking-tighter leading-none mb-3">ENGINEERING</div>
                    <div className="text-[#ffc100] font-[700] text-[12px] tracking-widest uppercase">Safe for Work</div>
                  </div>
               </div>
            </div>

            {/* Floating shadow element */}
            <div className="absolute -bottom-10 inset-x-12 h-20 bg-slate-900/40 blur-[60px] -z-10 rounded-full"></div>
          </div>

        </div>
      </div>
    </section>
  );
}
