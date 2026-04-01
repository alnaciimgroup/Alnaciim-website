"use client";

import Link from "next/link";
import { Zap } from "lucide-react";
import { usePathname } from "next/navigation";

export default function EnergyNavbar() {
  const pathname = usePathname();

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center w-full px-4 pointer-events-none">
      
      {/* Stripe-Style Floating Glass Pill */}
      <header className="pointer-events-auto flex items-center justify-between w-full max-w-[1240px] h-[60px] bg-white/80 backdrop-blur-xl border border-white/40 rounded-full px-6 shadow-[0_8px_30px_rgb(0,0,0,0.06)] ring-1 ring-slate-900/5 transition-shadow hover:shadow-[0_8px_30px_rgb(0,0,0,0.1)]">
        
        {/* Redirecting Logo to Main Home or Energy Home */}
        <Link href="/energy" className="flex items-center gap-2.5 group shrink-0">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#FF4500] to-[#FF8C00] flex items-center justify-center text-white shadow-[0_4px_10px_rgb(255,90,0,0.3)]">
            <Zap size={14} className="fill-current" />
          </div>
          <span className="text-[16px] font-[800] tracking-tight text-slate-900 group-hover:text-[#FF5A00] transition-colors hidden sm:block">
            Alnaciim <span className="font-[500] text-slate-500">Energy</span>
          </span>
        </Link>
        
        {/* User requested: Category, Solutions, Home */}
        <nav className="flex items-center gap-8 text-[13px] font-[600] text-slate-600 mx-4">
          <Link href="/energy" className={`hover:text-[#FF5A00] transition-colors whitespace-nowrap ${pathname === '/energy' ? 'text-slate-900 font-[800]' : ''}`}>Home</Link>
          <Link href="/energy/solutions" className={`hover:text-[#FF5A00] transition-colors whitespace-nowrap ${pathname === '/energy/solutions' ? 'text-slate-900 font-[800]' : ''}`}>Solutions</Link>

        </nav>
        
        <Link href="/contact" className="bg-slate-900 hover:bg-[#FF5A00] text-white px-6 py-2.5 rounded-full text-[13px] font-[600] transition-all shadow-[0_4px_14px_0_rgb(255,90,0,0.39)] hover:shadow-[0_6px_20px_rgba(255,90,0,0.23)] hover:-translate-y-0.5 shrink-0">
          Contact
        </Link>
      </header>

    </div>
  );
}
