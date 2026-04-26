"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageSquare, Briefcase } from "lucide-react";
import Link from "next/link";

const projectLinks = [
  { title: "Water infrastructure projects", href: "/work?division=water" },
  { title: "Power and energy projects", href: "/work?division=energy" },
  { title: "Industrial and custom works", href: "/work?division=engineering" }
];

export default function TechnicalArchive() {
  return (
    <section className="w-full py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Side: Soft CTA / Enquiry Prompt */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="bg-slate-50 border border-slate-200/60 rounded-[3rem] p-12 md:p-16 flex flex-col items-center text-center lg:items-start lg:text-left shadow-xl relative overflow-hidden group hover:shadow-2xl hover:shadow-blue-900/5 hover:-translate-y-2 transition-all duration-500"
          >
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3 group-hover:bg-blue-600/10 transition-colors duration-700" />
            <div className="relative z-10">
              <div className="w-20 h-20 rounded-[2rem] bg-white flex items-center justify-center text-blue-600 mb-10 shadow-sm border border-slate-100 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <MessageSquare size={32} />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6 leading-tight">
                Start a <span className="text-blue-600 font-light italic pr-2">conversation.</span>
              </h2>
              <p className="text-xl text-slate-600 font-light leading-relaxed mb-12 max-w-md">
                Our engineering team is ready to discuss your project requirements from first principles. Tell us what you need to build.
              </p>
              <Link 
                href="/contact" 
                className="inline-flex items-center gap-3 px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-[2rem] font-bold transition-all shadow-xl shadow-blue-600/20 hover:-translate-y-1 text-lg group/btn"
              >
                Enquire Now <ArrowRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* Right Side: Project Type Links */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-slate-50 border border-slate-200/60 text-blue-600 text-xs font-bold tracking-widest uppercase mb-8 shadow-sm">
              <Briefcase size={14} /> Project History
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-12">
              Access the <span className="text-blue-600 italic font-light pr-2">Technical Archive.</span>
            </h2>
            <div className="flex flex-col border-t border-slate-200/60">
              {projectLinks.map((link, idx) => (
                <Link 
                  key={idx} 
                  href={link.href}
                  className="group flex items-center justify-between py-8 border-b border-slate-200/60 hover:bg-slate-50 transition-colors px-6 -mx-6 rounded-2xl"
                >
                  <span className="text-xl md:text-2xl font-semibold text-slate-600 group-hover:text-slate-900 transition-colors tracking-tight">
                    {link.title}
                  </span>
                  <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-600 group-hover:text-white transition-colors shadow-sm bg-white">
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
            <p className="mt-10 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              Filtered Records by Infrastructure Division
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
