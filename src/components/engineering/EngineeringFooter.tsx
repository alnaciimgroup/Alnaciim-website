"use client";
import React from 'react';
import { Droplets, Mail, Phone, MapPin, Linkedin, Facebook, Twitter, Shield } from "lucide-react";
import Link from "next/link";

export default function EngineeringFooter() {
  return (
    <footer className="w-full bg-[#111827] text-white pt-24 pb-12 relative overflow-hidden">
      
      {/* Infrastructure Background Texture */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img src="https://images.unsplash.com/photo-1544453896-e2a27b82fe8d?q=80&w=2940&auto=format&fit=crop" alt="Engineering Infrastructure" className="w-full h-full object-cover opacity-[0.03] grayscale mix-blend-screen" />
      </div>

      {/* Top Border Accent Orange */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#ffc100]/50 to-transparent"></div>

      <div className="max-w-[1240px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 group mb-8">
              <div className="w-10 h-10 rounded-xl bg-[#ffc100] flex items-center justify-center text-slate-900 shadow-lg shadow-[#ffc100]/20">
                <Shield size={20} className="fill-current" />
              </div>
              <div className="flex flex-col">
                <span className="text-[18px] font-[900] tracking-tighter text-white">ALNACIIM ENGINEERING</span>
                <span className="text-[10px] font-[700] tracking-[0.2em] uppercase text-[#ffc100]">Heavy Industry Group</span>
              </div>
            </Link>
            <p className="text-slate-400 text-[14px] leading-[1.8] mb-8 font-[400] max-w-[280px]">
              Architectural permanence secured through rigorous technical excellence. Delivering permanent solutions for the modern world's core infrastructure.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:bg-[#ffc100] hover:text-slate-900 transition-all">
                <Linkedin size={18} />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:bg-[#ffc100] hover:text-slate-900 transition-all">
                <Facebook size={18} />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:bg-[#ffc100] hover:text-slate-900 transition-all">
                <Twitter size={18} />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-2 gap-8 lg:col-span-2">
            <div>
              <h4 className="text-[12px] font-[700] uppercase tracking-widest text-[#ffc100] mb-8">Quick Navigation</h4>
              <ul className="flex flex-col gap-4">
                <li><Link href="/engineering" className="text-slate-400 hover:text-white transition-colors text-[14px] font-[500]">Engineering Home</Link></li>
                <li><Link href="/engineering/solutions" className="text-slate-400 hover:text-white transition-colors text-[14px] font-[500]">Our Solutions</Link></li>
                <li><Link href="/projects" className="text-slate-400 hover:text-white transition-colors text-[14px] font-[500]">Technical Portfolio</Link></li>
                <li><Link href="/catalog" className="text-slate-400 hover:text-white transition-colors text-[14px] font-[500]">Spare Parts Hub</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[12px] font-[700] uppercase tracking-widest text-[#ffc100] mb-8">Legal & Privacy</h4>
              <ul className="flex flex-col gap-4">
                <li><Link href="#" className="text-slate-400 hover:text-white transition-colors text-[14px] font-[500]">Privacy Protocol</Link></li>
                <li><Link href="#" className="text-slate-400 hover:text-white transition-colors text-[14px] font-[500]">Terms of Service</Link></li>
                <li><Link href="#" className="text-slate-400 hover:text-white transition-colors text-[14px] font-[500]">Global Offices</Link></li>
                <li><Link href="#" className="text-slate-400 hover:text-white transition-colors text-[14px] font-[500]">Legal Ledger</Link></li>
              </ul>
            </div>
          </div>

          <div>
            <h4 className="text-[12px] font-[700] uppercase tracking-widest text-[#ffc100] mb-8">Engineering HQ</h4>
            <ul className="flex flex-col gap-6">
              <li className="flex gap-4">
                <MapPin size={20} className="text-[#ffc100] shrink-0" />
                <span className="text-slate-400 text-[14px] leading-[1.6]">Hargeisa, Somaliland Industrial Zone, Plot 442B</span>
              </li>
              <li className="flex gap-4">
                <Phone size={20} className="text-[#ffc100] shrink-0" />
                <span className="text-slate-400 text-[14px]">+252 63 XXX XXXX</span>
              </li>
              <li className="flex gap-4">
                <Mail size={20} className="text-[#ffc100] shrink-0" />
                <span className="text-slate-400 text-[14px]">engineering@alnaciim.com</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-12 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-[12px] tracking-wide">
            © 2024 ALNACIIM ENGINEERING GROUP. ARCHITECTURAL PERMANENCE SECURED.
          </p>
          <div className="flex gap-8 text-[11px] font-[700] uppercase tracking-[0.2em] text-slate-500">
            <span className="hover:text-[#ffc100] cursor-pointer transition-colors">ISO 9001:2015</span>
            <span className="hover:text-[#ffc100] cursor-pointer transition-colors">Safety First</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
