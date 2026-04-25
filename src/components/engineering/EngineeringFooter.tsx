"use client";
import React from 'react';
import { Droplets, Mail, Phone, MapPin, Linkedin, Facebook, Twitter, Shield } from "lucide-react";
import Link from "next/link";

export default function EngineeringFooter() {
  return (
    <footer className="w-full bg-[#0F172A] text-white pt-24 pb-12 relative overflow-hidden">
      
      {/* Infrastructure Background Texture */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.05]">
        {/* SECTION: Engineering Footer Background */}
        <img src="/images/water_wells_drilling.png" alt="Engineering Infrastructure" className="w-full h-full object-cover grayscale mix-blend-overlay" />
      </div>

      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center group mb-8">
              <div className="h-16 w-auto flex items-center">
                <img 
                  src="/images/alnaciim_logo_final.png?v=3" 
                  alt="Alnaciim Group" 
                  className="h-full w-auto object-contain brightness-0 invert"
                />
              </div>
            </Link>
            <p className="text-slate-400 text-[14px] leading-[1.8] mb-8 font-[400] max-w-[280px]">
              Delivering the full project lifecycle from technical design through to final commissioning and long-term maintenance.
            </p>
            <div className="flex gap-4">
              {[Linkedin, Facebook, Twitter].map((Icon, idx) => (
                <Link key={idx} href="#" className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all">
                  <Icon size={18} />
                </Link>
              
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-2 gap-8 lg:col-span-2">
            <div>
              <h4 className="text-[11px] font-[700] uppercase tracking-widest text-blue-400 mb-8">Technical Links</h4>
              <ul className="flex flex-col gap-4">
                <li><Link href="/engineering/solutions" className="text-slate-400 hover:text-white transition-colors text-[13px] font-[500] uppercase tracking-wider">Our Solutions</Link></li>
                <li><Link href="/contact" className="text-slate-400 hover:text-white transition-colors text-[13px] font-[500] uppercase tracking-wider">Project Brief</Link></li>
                <li><Link href="/contact" className="text-slate-400 hover:text-white transition-colors text-[13px] font-[500] uppercase tracking-wider">Global Offices</Link></li>
                <li><Link href="/contact" className="text-slate-400 hover:text-white transition-colors text-[13px] font-[500] uppercase tracking-wider">Technical Support</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[11px] font-[700] uppercase tracking-widest text-blue-400 mb-8">Division Groups</h4>
              <ul className="flex flex-col gap-4">
                <li><Link href="/water" className="text-slate-400 hover:text-white transition-colors text-[13px] font-[500] uppercase tracking-wider">Alnaciim Water</Link></li>
                <li><Link href="/energy" className="text-slate-400 hover:text-white transition-colors text-[13px] font-[500] uppercase tracking-wider">Alnaciim Energy</Link></li>
                <li><Link href="/" className="text-slate-400 hover:text-white transition-colors text-[13px] font-[500] uppercase tracking-wider">Group Headquarters</Link></li>
              </ul>
            </div>
          </div>

          <div>
            <h4 className="text-[11px] font-[700] uppercase tracking-widest text-blue-400 mb-8">Technical HQ</h4>
            <ul className="flex flex-col gap-6">
              <li className="flex gap-4">
                <MapPin size={20} className="text-blue-500 shrink-0" />
                <span className="text-slate-400 text-[14px] leading-[1.6]">Garowe · Mogadishu · Hargeisa</span>
              </li>
              <li className="flex gap-4">
                <Mail size={20} className="text-blue-500 shrink-0" />
                <span className="text-slate-400 text-[14px]">engineering@alnaciim.com</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-12 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-[11px] tracking-wide uppercase font-[500]">
            © 2026 Alnaciim Engineering Group. All technical rights reserved.
          </p>
          <div className="flex gap-8 text-[11px] font-[700] uppercase tracking-[0.2em] text-slate-500">
            <span className="hover:text-blue-400 cursor-pointer transition-colors">Safety First</span>
            <span className="hover:text-blue-400 cursor-pointer transition-colors">Precision Verified</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
