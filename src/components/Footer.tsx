"use client";

import Link from "next/link";
import { MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#050505] text-white pt-32 pb-12 border-t border-white/10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          
          {/* Brand Block */}
          <div className="flex flex-col items-start lg:col-span-1">
            <Link href="/" className="mb-10">
              <img 
                src="/images/alnaciim_logo_final.png?v=3" 
                alt="Alnaciim Group" 
                className="h-10 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-slate-400 text-[15px] leading-relaxed mb-10 font-light max-w-sm">
               Building the technical foundations of Somalia since 1998. Three specialized divisions, one unified standard of excellence.
            </p>
            <div className="flex items-center gap-3 px-4 py-2 bg-blue-600/10 border border-blue-600/30">
               <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
               <span className="text-[10px] text-blue-400 font-bold tracking-widest uppercase">Infrastructure Node Active</span>
            </div>
          </div>
          
          {/* Divisions */}
          <div>
            <h4 className="text-[11px] font-bold text-white tracking-[0.2em] uppercase mb-10 font-serif" style={{ fontFamily: "var(--font-playfair)" }}>
              Divisions
            </h4>
            <div className="flex flex-col gap-6">
              <Link href="/water" className="text-[13px] font-bold text-slate-400 hover:text-blue-500 tracking-widest uppercase transition-colors">
                ALNACIIM WATER
              </Link>
              <Link href="/energy" className="text-[13px] font-bold text-slate-400 hover:text-blue-500 tracking-widest uppercase transition-colors">
                ALNACIIM ENERGY
              </Link>
              <Link href="/engineering" className="text-[13px] font-bold text-slate-400 hover:text-blue-500 tracking-widest uppercase transition-colors">
                ALNACIIM ENGINEERING
              </Link>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-[11px] font-bold text-white tracking-[0.2em] uppercase mb-10 font-serif" style={{ fontFamily: "var(--font-playfair)" }}>
              Navigation
            </h4>
            <div className="flex flex-col gap-6">
              <Link href="/work" className="text-[13px] font-bold text-slate-400 hover:text-blue-500 tracking-widest uppercase transition-colors">OUR WORK</Link>
              <Link href="/catalog" className="text-[13px] font-bold text-slate-400 hover:text-blue-500 tracking-widest uppercase transition-colors">CATALOG</Link>
              <Link href="/contact" className="text-[13px] font-bold text-slate-400 hover:text-blue-500 tracking-widest uppercase transition-colors">CONTACT US</Link>
            </div>
          </div>

          {/* Information */}
          <div>
             <h4 className="text-[11px] font-bold text-white tracking-[0.2em] uppercase mb-10 font-serif" style={{ fontFamily: "var(--font-playfair)" }}>
              Information
            </h4>
            <div className="flex flex-col gap-6">
              <Link href="/about" className="text-[13px] font-bold text-slate-400 hover:text-blue-500 tracking-widest uppercase transition-colors">OUR STORY</Link>
              <Link href="/privacy" className="text-[13px] font-bold text-slate-400 hover:text-blue-500 tracking-widest uppercase transition-colors">PRIVACY POLICY</Link>
              <div className="pt-4 mt-4 border-t border-white/5 space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin size={16} className="text-blue-500 shrink-0 mt-0.5" />
                  <p className="text-slate-400 text-[13px] leading-relaxed font-light">
                    Garowe, Puntland,<br />
                    Somalia
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[10px] text-slate-500 font-bold tracking-widest uppercase">
            © {new Date().getFullYear()} ALNACIIM GROUP. BUILT FOR PERMANENCE.
          </div>
          <div className="flex items-center gap-8">
            <span className="text-[10px] text-slate-500 font-bold tracking-widest uppercase">SOMALIA'S TECHNICAL FOUNDATION.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
