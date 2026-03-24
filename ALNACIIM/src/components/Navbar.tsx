"use client";

import Link from "next/link";
import { Droplets } from "lucide-react";
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
          <Link href="/energy" className="hover:text-[#0066FF] transition-colors whitespace-nowrap">Alnaciim Energy</Link>
          <Link href="/water" className="hover:text-[#0066FF] transition-colors whitespace-nowrap">Alnaciim Water</Link>
          <Link href="/engineering" className="hover:text-[#0066FF] transition-colors whitespace-nowrap">Alnaciim Engineering</Link>
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
