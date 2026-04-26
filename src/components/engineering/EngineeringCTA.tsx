import Link from "next/link";
import { ArrowRight, Settings2, Mail } from "lucide-react";

export default function EngineeringCTA() {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="relative bg-blue-600 rounded-[3rem] p-8 md:p-16 lg:p-24 overflow-hidden shadow-2xl shadow-blue-600/20 text-center flex flex-col items-center">
          
          {/* Background Decorative Lighting */}
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-500 rounded-full blur-[120px] pointer-events-none z-0 translate-x-1/3 -translate-y-1/3 opacity-50" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-500 rounded-full blur-[100px] pointer-events-none z-0 -translate-x-1/3 translate-y-1/3 opacity-30" />
          
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold tracking-widest uppercase mb-10 relative z-10 shadow-sm">
            <Settings2 size={14} className="text-blue-200" />
            Get Started
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-8 relative z-10 leading-[1.1] max-w-4xl">
            Have a project that <span className="text-blue-200 italic font-light pr-2">needs engineering?</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-16 leading-relaxed relative z-10 font-light">
            ALNM Engineering takes the brief from design through to a commissioned, maintained system. Tell us what needs to be built — water, power, automation or custom works — and we will tell you how we deliver it.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10 w-full sm:w-auto">
            <Link 
              href="/contact" 
              className="w-full sm:w-auto px-10 py-5 bg-white text-blue-600 rounded-[2rem] font-bold text-lg transition-all shadow-xl hover:-translate-y-1 flex items-center justify-center gap-3 group"
            >
              Send a Project Brief
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="/contact" 
              className="w-full sm:w-auto px-10 py-5 bg-blue-700/50 hover:bg-blue-700/80 backdrop-blur-md text-white border border-blue-400/30 rounded-[2rem] font-bold text-lg transition-all flex items-center justify-center gap-3 shadow-lg"
            >
              Contact an Engineer
              <Mail size={20} className="text-blue-200" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
