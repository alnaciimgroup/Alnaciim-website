"use client";

import Link from "next/link";
import { Droplets, ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className="fixed top-4 left-0 right-0 z-[100] flex justify-center w-full px-4 mb-4">
      
      {/* Stripe-Style Floating Glass Pill */}
      <header className="flex items-center justify-between w-full max-w-[1400px] h-[60px] bg-white/90 backdrop-blur-xl border border-slate-100 rounded-2xl px-6 shadow-sm transition-all hover:shadow-md">
        
        <Link href="/" className="flex items-center gap-2 group shrink-0">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-primary to-secondary flex items-center justify-center text-white shadow-lg shadow-primary/20">
            <Droplets size={16} className="fill-current" />
          </div>
          <span className="text-[16px] font-[900] tracking-tighter text-ink group-hover:text-primary transition-colors">
            ALNACIIM GROUP
          </span>
        </Link>
        
        <nav className="hidden xl:flex items-center gap-6 text-[11px] font-[700] text-slate-600 mx-4 uppercase tracking-[0.15em]">
          {/* Energy Dropdown */}
          <div className="relative group">
            <button type="button" className="hover:text-primary transition-colors whitespace-nowrap flex items-center gap-1.5 py-4 -my-4 outline-none">
              ALNACIIM ENERGY
              <ChevronDown size={14} className="opacity-50 group-hover:-rotate-180 transition-transform duration-300" />
            </button>
            
            <div className="absolute top-full left-0 w-48 bg-white border border-slate-100 rounded-2xl shadow-fluid py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-1 z-50">
              <Link href="/energy" className="block px-4 py-2 hover:bg-primary-light hover:text-primary transition-colors text-[13px] font-[700] text-slate-700">ENERGY</Link>
              <Link href="/energy/solutions" className="block px-4 py-2 hover:bg-primary-light hover:text-primary transition-colors text-[13px] font-[700] text-slate-700">SOLUTIONS</Link>
            </div>
          </div>

          {/* Engineering Dropdown */}
          <div className="relative group">
            <button type="button" className="hover:text-primary transition-colors whitespace-nowrap flex items-center gap-1.5 py-4 -my-4 outline-none">
              ALNACIIM ENGINEERING
              <ChevronDown size={14} className="opacity-50 group-hover:-rotate-180 transition-transform duration-300" />
            </button>
            
            <div className="absolute top-full left-0 w-56 bg-white border border-slate-100 rounded-2xl shadow-fluid py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-1 z-50">
              <Link href="/engineering" className="block px-4 py-2 hover:bg-primary-light hover:text-primary transition-colors text-[13px] font-[700] text-slate-700">ENGINEERING</Link>
              <Link href="/engineering/solutions" className="block px-4 py-2 hover:bg-primary-light hover:text-primary transition-colors text-[13px] font-[700] text-slate-700">SOLUTIONS</Link>
            </div>
          </div>

          {/* Digital Dropdown */}
          <div className="relative group">
            <button type="button" className="hover:text-primary transition-colors whitespace-nowrap flex items-center gap-1.5 py-4 -my-4 outline-none">
              ALNACIIM DIGITAL
              <ChevronDown size={14} className="opacity-50 group-hover:-rotate-180 transition-transform duration-300" />
            </button>
            
            <div className="absolute top-full left-0 w-48 bg-white border border-slate-100 rounded-2xl shadow-fluid py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-1 z-50">
              <Link href="/digital" className="block px-4 py-2 hover:bg-primary-light hover:text-primary transition-colors text-[13px] font-[700] text-slate-700">DIGITAL</Link>
              <Link href="/digital/solutions" className="block px-4 py-2 hover:bg-primary-light hover:text-primary transition-colors text-[13px] font-[700] text-slate-700">SOLUTIONS</Link>
            </div>
          </div>

          <Link href="/work" className={`hover:text-primary transition-colors whitespace-nowrap ${pathname === '/work' ? 'text-ink font-[800]' : ''}`}>OUR WORK</Link>
          <Link href="/catalog" className={`hover:text-primary transition-colors whitespace-nowrap ${pathname === '/catalog' ? 'text-ink font-[800]' : ''}`}>CATALOG</Link>
        </nav>
        
        <Link href="/contact" className="bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-xl text-[12px] font-[700] transition-all shadow-fluid hover:-translate-y-0.5 shrink-0 uppercase tracking-widest">
          Contact
        </Link>
      </header>
    </div>
  );
}
