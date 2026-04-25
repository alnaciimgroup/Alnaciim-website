"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function EnergyNavbar() {
  const pathname = usePathname();

  return (
    <div className="fixed top-4 left-0 right-0 z-[100] flex justify-center w-full px-4 mb-4">
      
      {/* Modern Floating Glass Pill */}
      <header className="flex items-center justify-between w-full max-w-[1200px] h-[72px] bg-white/70 backdrop-blur-2xl border border-white/20 rounded-[24px] px-8 shadow-glass transition-all hover:shadow-premium group/nav">
        
        <Link href="/energy" className="flex items-center group shrink-0 transition-transform hover:scale-105 duration-300">
          <div className="h-12 w-auto flex items-center">
            <img 
              src="/images/alnaciim_logo_final.png?v=3" 
              alt="Alnaciim Group" 
              className="h-full w-auto object-contain"
            />
          </div>
        </Link>
        
        <nav className="flex items-center gap-8 text-[13px] font-[600] text-slate-500 mx-4 uppercase tracking-[0.1em] font-heading">
          <Link href="/energy" className={`hover:text-primary transition-all relative group ${pathname === '/energy' ? 'text-primary' : ''}`}>
            Home
            <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${pathname === '/energy' ? 'w-full' : 'w-0 group-hover:w-full'}`} />
          </Link>
          <Link href="/energy/solutions" className={`hover:text-primary transition-all relative group ${pathname === '/energy/solutions' ? 'text-primary' : ''}`}>
            Solutions
            <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${pathname === '/energy/solutions' ? 'w-full' : 'w-0 group-hover:w-full'}`} />
          </Link>
        </nav>
        
        <Link href="/contact" className="bg-ink hover:bg-primary text-white px-7 py-2.5 rounded-xl text-[13px] font-[700] transition-all shadow-premium hover:-translate-y-0.5 shrink-0 uppercase tracking-wider font-heading">
          Contact
        </Link>
      </header>
    </div>
  );
}
