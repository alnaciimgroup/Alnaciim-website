"use client";

import Link from "next/link";
import { Droplets, ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center w-full px-4 pointer-events-none">
      
      {/* Stripe-Style Floating Glass Pill */}
      <header className="pointer-events-auto flex items-center justify-between w-full max-w-[1240px] h-[60px] bg-white/80 backdrop-blur-xl border border-white/40 rounded-full px-6 shadow-[0_8px_30px_rgb(0,0,0,0.06)] ring-1 ring-slate-900/5 transition-shadow hover:shadow-[0_8px_30px_rgb(0,0,0,0.1)]">
        
        <Link href="/" className="flex items-center gap-2.5 group shrink-0">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#0066FF] to-[#00D2FF] flex items-center justify-center text-white shadow-md">
            <Droplets size={14} className="fill-current" />
          </div>
          <span className="text-[16px] font-[800] tracking-tight text-slate-900 group-hover:text-[#0066FF] transition-colors hidden sm:block">
            Alnaciim <span className="font-[500] text-slate-500">Group</span>
          </span>
        </Link>
        
        <nav className="hidden xl:flex items-center gap-5 text-[13px] font-[600] text-slate-600 mx-4">
          {/* Energy Dropdown */}
          <div className="relative group">
            <button type="button" className="hover:text-[#0066FF] transition-colors whitespace-nowrap flex items-center gap-1 py-4 -my-4 outline-none">
              Alnaciim Energy
              <ChevronDown size={14} className="opacity-70 group-hover:-rotate-180 transition-transform duration-300" />
            </button>
            
            <div className="absolute top-full left-0 w-44 bg-white border border-slate-100 rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-1 group-hover:translate-y-0 z-50">
              <Link href="/energy" className="block px-4 py-2 hover:bg-slate-50 hover:text-[#0066FF] transition-colors text-[13px] font-[600] text-slate-700">Energy Home</Link>
              <Link href="/energy/solutions" className="block px-4 py-2 hover:bg-slate-50 hover:text-[#0066FF] transition-colors text-[13px] font-[600] text-slate-700">Solutions</Link>
            </div>
          </div>
          <Link href="/water" className="hover:text-[#0066FF] transition-colors whitespace-nowrap">Alnaciim Water</Link>
          {/* Engineering Dropdown */}
          <div className="relative group">
            <button type="button" className="hover:text-[#ffc100] transition-colors whitespace-nowrap flex items-center gap-1 py-4 -my-4 outline-none">
              Alnaciim Engineering
              <ChevronDown size={14} className="opacity-70 group-hover:-rotate-180 transition-transform duration-300" />
            </button>
            
            <div className="absolute top-full left-0 w-48 bg-white border border-slate-100 rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-1 group-hover:translate-y-0 z-50">
              <Link href="/engineering" className="block px-4 py-2 hover:bg-slate-50 hover:text-[#ffc100] transition-colors text-[13px] font-[600] text-slate-700">Engineering Home</Link>
              <Link href="/engineering/solutions" className="block px-4 py-2 hover:bg-slate-50 hover:text-[#ffc100] transition-colors text-[13px] font-[600] text-slate-700">Solutions</Link>
            </div>
          </div>
          <Link href="/digital" className="hover:text-[#0066FF] transition-colors whitespace-nowrap">Alnaciim Digital</Link>
          <Link href="/projects" className={`hover:text-[#0066FF] transition-colors whitespace-nowrap ${pathname === '/projects' ? 'text-slate-900 font-[800]' : ''}`}>Projects</Link>
          <Link href="/catalog" className={`hover:text-[#0066FF] transition-colors whitespace-nowrap ${pathname === '/catalog' ? 'text-slate-900 font-[800]' : ''}`}>Catalog</Link>
          <Link href="#about" className="hover:text-[#0066FF] transition-colors whitespace-nowrap">About</Link>
        </nav>
        
        <Link href="/contact" className="bg-slate-900 hover:bg-[#0066FF] text-white px-6 py-2.5 rounded-full text-[13px] font-[600] transition-all shadow-[0_4px_14px_0_rgb(0,102,255,0.39)] hover:shadow-[0_6px_20px_rgba(0,102,255,0.23)] hover:-translate-y-0.5 shrink-0">
          Contact
        </Link>
      </header>

    </div>
  );
}
