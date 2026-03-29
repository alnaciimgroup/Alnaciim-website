import Link from "next/link";
import { ArrowRight, Zap } from "lucide-react";

export default function EnergyCTA() {
  return (
    <section className="relative w-full py-40 mt-20 z-10 overflow-hidden">
      
      {/* Stripe-Style Slanted Background Element */}
      <div className="absolute top-0 left-0 w-full h-[120%] bg-slate-900 transform -skew-y-3 origin-bottom-right z-0 overflow-hidden">
        <img src="https://images.unsplash.com/photo-1620825937374-87fc7d6adf0e?q=80&w=2940&auto=format&fit=crop" alt="Hybrid Microgrid" className="absolute inset-0 w-full h-full object-cover opacity-15 mix-blend-overlay scale-110" />
      </div>
      
      {/* Decorative Glow inside the CTA */}
      <div className="absolute top-0 right-[-10%] w-[400px] h-[400px] bg-[#FF5A00] rounded-full filter blur-[100px] opacity-40 mix-blend-screen pointer-events-none z-0"></div>

      <div className="max-w-[1240px] mx-auto px-6 lg:px-12 relative z-10 w-full flex flex-col lg:flex-row items-center justify-between gap-12">
        
        <div className="w-full lg:w-3/5 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 text-orange-100 rounded-full font-[600] text-[12px] uppercase tracking-wide mb-8 border border-white/20">
            <Zap size={14} className="fill-current text-[#FF5A00]" /> High Voltage Capacity
          </div>
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center lg:text-left">
            <h2 className="text-[42px] md:text-[64px] font-[900] tracking-tighter text-white leading-[1.1] mb-6">
              Require a custom<br />configuration?
            </h2>
            <p className="text-[18px] md:text-[22px] text-orange-200 font-[400] mb-10 max-w-2xl mx-auto lg:mx-0 leading-[1.6]">
              Our in-house engineering team specializes in heavy loads and complex synchronization constraints.
            </p>
          </div>
        </div>
        
        <div className="w-full lg:w-auto flex flex-col gap-4">
          <Link href="/contact" className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-5 bg-[#FF5A00] text-white text-[15px] font-[700] rounded-xl hover:bg-[#FF4500] hover:-translate-y-1 transition-all shadow-[0_4px_14px_0_rgb(255,90,0,0.39)] hover:shadow-[0_6px_20px_rgba(255,90,0,0.23)]">
            Contact Engineering <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link href="/" className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-5 bg-white/10 border border-white/20 rounded-xl text-white text-[15px] font-[600] hover:bg-white/20 transition-colors">
            Return to Main Site
          </Link>
        </div>

      </div>
    </section>
  );
}
