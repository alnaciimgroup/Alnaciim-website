"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { MapPin } from "lucide-react";

export default function Footer() {
  const [year, setYear] = useState(2026);
  
  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-[#050505] text-white pt-20 pb-10 border-t border-white/10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Block */}
          <div className="flex flex-col items-start lg:col-span-1">
            <Link href="/" className="mb-8">
              <img 
                src="/images/alnaciim_logo_final.png?v=3" 
                alt="Alnaciim Group" 
                className="h-8 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-slate-400 text-[14px] leading-relaxed font-light max-w-sm">
               Building the technical foundations of east africa-Somalia since 1998. Three specialized divisions, one unified standard of excellence.
            </p>
          </div>
          
          {/* Divisions */}
          <div>
            <h4 className="text-[10px] font-bold text-white tracking-[0.2em] uppercase mb-8 font-serif" style={{ fontFamily: "var(--font-playfair)" }}>
              Divisions
            </h4>
            <div className="flex flex-col gap-4">
              <Link href="/water" className="text-[12px] font-bold text-slate-400 hover:text-blue-500 tracking-widest uppercase transition-colors">
                ALNACIIM WATER
              </Link>
              <Link href="/energy" className="text-[12px] font-bold text-slate-400 hover:text-blue-500 tracking-widest uppercase transition-colors">
                ALNACIIM ENERGY
              </Link>
              <Link href="/engineering" className="text-[12px] font-bold text-slate-400 hover:text-blue-500 tracking-widest uppercase transition-colors">
                ALNACIIM ENGINEERING
              </Link>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-[10px] font-bold text-white tracking-[0.2em] uppercase mb-8 font-serif" style={{ fontFamily: "var(--font-playfair)" }}>
              Navigation
            </h4>
            <div className="flex flex-col gap-4">
              <Link href="/work" className="text-[12px] font-bold text-slate-400 hover:text-blue-500 tracking-widest uppercase transition-colors">OUR WORK</Link>
              <Link href="/catalog" className="text-[12px] font-bold text-slate-400 hover:text-blue-500 tracking-widest uppercase transition-colors">CATALOG</Link>
              <Link href="/contact" className="text-[12px] font-bold text-slate-400 hover:text-blue-500 tracking-widest uppercase transition-colors">CONTACT US</Link>
            </div>
          </div>

          {/* Information */}
          <div>
             <h4 className="text-[10px] font-bold text-white tracking-[0.2em] uppercase mb-8 font-serif" style={{ fontFamily: "var(--font-playfair)" }}>
              Information
            </h4>
            <div className="flex flex-col gap-4">
              <Link href="/about" className="text-[12px] font-bold text-slate-400 hover:text-blue-500 tracking-widest uppercase transition-colors">OUR STORY</Link>
              <Link href="/privacy" className="text-[12px] font-bold text-slate-400 hover:text-blue-500 tracking-widest uppercase transition-colors">PRIVACY POLICY</Link>
              <div className="pt-4 mt-2 border-t border-white/5 space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin size={14} className="text-blue-500 shrink-0 mt-0.5" />
                  <p className="text-slate-400 text-[12px] leading-relaxed font-light">
                    Garowe, Puntland,<br />
                    Somalia
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <div className="text-[9px] text-slate-500 font-bold tracking-widest uppercase">
            © {year} ALNACIIM GROUP.
          </div>
        </div>
      </div>
    </footer>
  );
}
