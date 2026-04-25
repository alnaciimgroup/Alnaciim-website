"use client";
import { motion } from "framer-motion";
import { ArrowRight, MessageSquare } from "lucide-react";
import Link from "next/link";

const projectLinks = [
  { title: "Water infrastructure projects", href: "/work?division=water" },
  { title: "Power and energy projects", href: "/work?division=energy" },
  { title: "Industrial and custom works", href: "/work?division=engineering" }
];

export default function TechnicalArchive() {
  return (
    <section className="w-full py-24 md:py-32 bg-slate-50">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
          
          {/* Left Side: Soft CTA / Enquiry Prompt */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-[3rem] p-12 md:p-20 shadow-xl border border-slate-100 flex flex-col items-center text-center lg:items-start lg:text-left"
          >
            <div className="w-20 h-20 rounded-[2rem] bg-blue-600 flex items-center justify-center text-white mb-10 shadow-lg shadow-blue-500/25">
              <MessageSquare size={36} />
            </div>
            <h2 className="text-[36px] md:text-[52px] font-[900] tracking-tighter text-[#0F172A] leading-[1] mb-8">
              Start a<br />conversation.
            </h2>
            <p className="text-slate-500 text-[18px] md:text-[20px] leading-[1.6] font-[450] mb-12 max-w-md">
              Our engineering team is ready to discuss your project requirements from first principles. Tell us what you need to build.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-4 px-10 py-5 bg-[#0F172A] text-white rounded-2xl font-[800] text-[13px] uppercase tracking-[0.2em] hover:bg-blue-600 transition-all shadow-xl shadow-slate-900/10"
            >
              Enquire Now <ArrowRight size={18} />
            </Link>
          </motion.div>

          {/* Right Side: Project Type Links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-[36px] md:text-[44px] font-[900] tracking-tighter text-[#0F172A] mb-12">
              Access the Technical Archive.
            </h2>
            <div className="flex flex-col gap-0 border-t border-slate-200">
              {projectLinks.map((link, idx) => (
                <Link 
                  key={idx} 
                  href={link.href}
                  className="group flex items-center justify-between py-10 border-b border-slate-200 hover:px-8 transition-all duration-500 outline-none"
                >
                  <span className="text-[20px] md:text-[26px] font-[900] text-slate-400 group-hover:text-[#0F172A] transition-colors tracking-tight">
                    {link.title}
                  </span>
                  <div className="w-14 h-14 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-600 group-hover:text-white transition-all duration-300">
                    <ArrowRight size={28} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
            <p className="mt-12 text-slate-400 text-[14px] font-[600] uppercase tracking-widest">
              Filtered Records by Infrastructure Division
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
