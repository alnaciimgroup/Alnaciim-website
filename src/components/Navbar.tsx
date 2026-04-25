"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className="fixed top-4 left-0 right-0 z-[100] flex justify-center w-full px-4 mb-4">
      
      {/* Stripe-Style Floating Glass Pill */}
      <header className="flex items-center justify-between w-full max-w-[1200px] h-[72px] bg-white/70 backdrop-blur-2xl border border-white/20 rounded-[24px] px-8 shadow-glass transition-all hover:shadow-premium group/nav">
        
        <Link href="/" className="flex items-center group shrink-0 transition-transform hover:scale-105 duration-300">
          <div className="h-12 w-auto flex items-center">
            <img 
              src="/images/alnaciim_logo_final.png?v=3" 
              alt="Alnaciim Group" 
              className="h-full w-auto object-contain"
            />
          </div>
        </Link>
        
        <nav className="hidden xl:flex items-center gap-8 text-[12px] font-[600] text-slate-500 mx-4 uppercase tracking-[0.1em] font-heading">
          <Link href="/water" className={`hover:text-primary transition-all relative group ${pathname === '/water' ? 'text-primary' : ''}`}>
            ALNACIIM WATER
            <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${pathname === '/water' ? 'w-full' : 'w-0 group-hover:w-full'}`} />
          </Link>

          {/* Energy Dropdown */}
          <div className="relative group/item">
            <button type="button" className="hover:text-primary transition-all whitespace-nowrap flex items-center gap-1.5 py-4 -my-4 outline-none">
              ENERGY
              <ChevronDown size={14} className="opacity-50 group-hover/item:-rotate-180 transition-transform duration-300" />
            </button>
            
            <div className="absolute top-full left-0 w-56 bg-white/95 backdrop-blur-xl border border-slate-100 rounded-2xl shadow-premium py-2 opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible transition-all duration-300 translate-y-4 group-hover/item:translate-y-2 z-50">
              <Link href="/energy" className="block px-4 py-2.5 hover:bg-primary/5 hover:text-primary transition-colors text-[13px] font-[600] text-slate-700">ALNACIIM ENERGY</Link>
              <Link href="/energy/solutions" className="block px-4 py-2.5 hover:bg-primary/5 hover:text-primary transition-colors text-[13px] font-[600] text-slate-700">SOLUTIONS</Link>
            </div>
          </div>

          {/* Engineering Dropdown */}
          <div className="relative group/item">
            <button type="button" className="hover:text-primary transition-all whitespace-nowrap flex items-center gap-1.5 py-4 -my-4 outline-none">
              ENGINEERING
              <ChevronDown size={14} className="opacity-50 group-hover/item:-rotate-180 transition-transform duration-300" />
            </button>
            
            <div className="absolute top-full left-0 w-64 bg-white/95 backdrop-blur-xl border border-slate-100 rounded-2xl shadow-premium py-2 opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible transition-all duration-300 translate-y-4 group-hover/item:translate-y-2 z-50">
              <Link href="/engineering" className="block px-4 py-2.5 hover:bg-primary/5 hover:text-primary transition-colors text-[13px] font-[600] text-slate-700">ALNACIIM ENGINEERING</Link>
              <Link href="/engineering/solutions" className="block px-4 py-2.5 hover:bg-primary/5 hover:text-primary transition-colors text-[13px] font-[600] text-slate-700">SOLUTIONS</Link>
            </div>
          </div>

          <Link href="/about" className={`hover:text-primary transition-all relative group ${pathname === '/about' ? 'text-primary' : ''}`}>
            ABOUT
            <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${pathname === '/about' ? 'w-full' : 'w-0 group-hover:w-full'}`} />
          </Link>
          <Link href="/work" className={`hover:text-primary transition-all relative group ${pathname === '/work' ? 'text-primary' : ''}`}>
            OUR WORK
            <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${pathname === '/work' ? 'w-full' : 'w-0 group-hover:w-full'}`} />
          </Link>
          <Link href="/catalog" className={`hover:text-primary transition-all relative group ${pathname === '/catalog' ? 'text-primary' : ''}`}>
            CATALOG
            <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${pathname === '/catalog' ? 'w-full' : 'w-0 group-hover:w-full'}`} />
          </Link>
        </nav>
        
        <Link href="/contact" className="bg-primary hover:bg-primary-dark text-white px-7 py-2.5 rounded-xl text-[13px] font-[700] transition-all shadow-premium hover:-translate-y-0.5 shrink-0 uppercase tracking-wider font-heading">
          Contact
        </Link>
      </header>
    </div>
  );
}
