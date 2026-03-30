"use client";

import Link from "next/link";
import { Droplets, ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className="fixed top-4 left-0 right-0 z-[100] flex justify-center w-full px-4 mb-4">
      
      {/* Stripe-Style Floating Glass Pill */}
      <header className="flex items-center justify-between w-full max-w-[1400px] h-[64px] bg-white/90 backdrop-blur-xl border border-white/40 rounded-2xl px-6 shadow-[0_8px_32px_rgba(0,0,0,0.08)] transition-all hover:shadow-[0_8px_32px_rgba(0,0,0,0.12)]">
        
        <Link href="/" className="flex items-center gap-2.5 group shrink-0">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#0066FF] to-[#00D2FF] flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
            <Droplets size={18} className="fill-current" />
          </div>
          <span className="text-[18px] font-[900] tracking-tighter text-slate-900 group-hover:text-[#0066FF] transition-colors">
            ALNACIIM GROUP
          </span>
        </Link>
        
        <nav className="hidden xl:flex items-center gap-7 text-[12px] font-[700] text-slate-600 mx-4 uppercase tracking-[0.15em]">
          {/* Energy Dropdown */}
          <div className="relative group">
            <button type="button" className="hover:text-[#0066FF] transition-colors whitespace-nowrap flex items-center gap-1.5 py-4 -my-4 outline-none">
              ALNACIIM ENERGY
              <ChevronDown size={14} className="opacity-50 group-hover:-rotate-180 transition-transform duration-300" />
            </button>
            
            <div className="absolute top-full left-0 w-48 bg-white border border-slate-100 rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-1 z-50">
              <Link href="/energy" className="block px-4 py-2 hover:bg-slate-50 hover:text-[#0066FF] transition-colors text-[13px] font-[700] text-slate-700">ENERGY</Link>
              <Link href="/energy/solutions" className="block px-4 py-2 hover:bg-slate-50 hover:text-[#0066FF] transition-colors text-[13px] font-[700] text-slate-700">SOLUTIONS</Link>
            </div>
          </div>

          {/* Engineering Dropdown */}
          <div className="relative group">
            <button type="button" className="hover:text-[#0066FF] transition-colors whitespace-nowrap flex items-center gap-1.5 py-4 -my-4 outline-none">
              ALNACIIM ENGINEERING
              <ChevronDown size={14} className="opacity-50 group-hover:-rotate-180 transition-transform duration-300" />
            </button>
            
            <div className="absolute top-full left-0 w-56 bg-white border border-slate-100 rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-1 z-50">
              <Link href="/engineering" className="block px-4 py-2 hover:bg-slate-50 hover:text-[#0066FF] transition-colors text-[13px] font-[700] text-slate-700">ENGINEERING</Link>
              <Link href="/engineering/solutions" className="block px-4 py-2 hover:bg-slate-50 hover:text-[#0066FF] transition-colors text-[13px] font-[700] text-slate-700">SOLUTIONS</Link>
            </div>
          </div>

          {/* Digital Dropdown */}
          <div className="relative group">
            <button type="button" className="hover:text-[#0066FF] transition-colors whitespace-nowrap flex items-center gap-1.5 py-4 -my-4 outline-none">
              ALNACIIM DIGITAL
              <ChevronDown size={14} className="opacity-50 group-hover:-rotate-180 transition-transform duration-300" />
            </button>
            
            <div className="absolute top-full left-0 w-48 bg-white border border-slate-100 rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-1 z-50">
              <Link href="/digital" className="block px-4 py-2 hover:bg-slate-50 hover:text-[#0066FF] transition-colors text-[13px] font-[700] text-slate-700">DIGITAL</Link>
              <Link href="/digital/solutions" className="block px-4 py-2 hover:bg-slate-50 hover:text-[#0066FF] transition-colors text-[13px] font-[700] text-slate-700">SOLUTIONS</Link>
            </div>
          </div>

          <Link href="/work" className={`hover:text-[#0066FF] transition-colors whitespace-nowrap ${pathname === '/work' ? 'text-slate-950 font-[800]' : ''}`}>OUR WORK</Link>
          <Link href="/catalog" className={`hover:text-[#0066FF] transition-colors whitespace-nowrap ${pathname === '/catalog' ? 'text-slate-950 font-[800]' : ''}`}>CATALOG</Link>
        </nav>
        
        <Link href="/contact" className="bg-slate-900 hover:bg-black text-white px-7 py-2.5 rounded-xl text-[13px] font-[700] transition-all shadow-[0_4px_14px_rgba(0,0,0,0.1)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.15)] hover:-translate-y-0.5 shrink-0 uppercase tracking-widest">
          Contact
        </Link>
      </header>
    </div>
  );
}
