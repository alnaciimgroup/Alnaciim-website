import Link from "next/link";
import { Droplets } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 pt-32 pb-12 px-6 lg:px-12 font-['Inter'] relative mt-[-100px] z-20">
      
      {/* Top Border Accent */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#0066FF] to-transparent opacity-50"></div>

      <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-16 mb-20">
        
        {/* Brand Block */}
        <div>
          <Link href="/" className="flex items-center gap-3 mb-6 group">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#0066FF] to-[#00D2FF] flex items-center justify-center text-white shadow-[0_4px_10px_rgb(0,102,255,0.4)]">
              <Droplets size={14} className="fill-current" />
            </div>
            <span className="text-[20px] font-[800] tracking-tight text-white leading-none">
              Alnaciim <span className="font-[400] text-slate-400">Water</span>
            </span>
          </Link>
          <p className="text-slate-400 text-[15px] leading-[1.7] font-[400] mb-8 max-w-[300px]">
            Engineered hydration. Operating the largest continuous volumetric output facility in Garowe, Puntland since 1998.
          </p>
        </div>

        {/* Column 2 */}
        <div>
          <h4 className="text-[13px] font-[700] tracking-[1px] text-white mb-6">
            Logistics Map
          </h4>
          <div className="flex flex-col gap-3">
            <Link href="#fleet" className="text-[14px] text-slate-400 hover:text-[#00D2FF] transition-colors">Delivery Fleet</Link>
            <Link href="#ice" className="text-[14px] text-slate-400 hover:text-[#00D2FF] transition-colors">Commercial Ice Supply</Link>
            <Link href="#bottling" className="text-[14px] text-slate-400 hover:text-[#00D2FF] transition-colors">Volumetric Facility</Link>
            <Link href="#sustainability" className="text-[14px] text-slate-400 hover:text-[#00D2FF] transition-colors">Polymer Recycling</Link>
          </div>
        </div>

        {/* Column 3 */}
        <div>
          <h4 className="text-[13px] font-[700] tracking-[1px] text-white mb-6">
            Database
          </h4>
          <div className="flex flex-col gap-3">
            <Link href="/catalog" className="text-[14px] text-slate-400 hover:text-[#00D2FF] transition-colors">Hardware Catalog</Link>
            <Link href="/projects" className="text-[14px] text-slate-400 hover:text-[#00D2FF] transition-colors">Deployment Records</Link>
            <Link href="#certifications" className="text-[14px] text-slate-400 hover:text-[#00D2FF] transition-colors">ISO Certifications</Link>
            <Link href="#api" className="text-[14px] text-slate-400 hover:text-[#00D2FF] transition-colors">B2B Integration</Link>
          </div>
        </div>

        {/* Column 4 */}
        <div>
          <h4 className="text-[13px] font-[700] tracking-[1px] text-white mb-6">
            Terminal Nodes
          </h4>
          <div className="flex flex-col gap-3">
            <Link href="#garowe" className="text-[14px] text-slate-400 hover:text-white transition-colors">Garowe Operations</Link>
            <Link href="#mogadishu" className="text-[14px] text-slate-400 hover:text-white transition-colors">Mogadishu Dist.</Link>
            <Link href="#hargeisa" className="text-[14px] text-slate-400 hover:text-white transition-colors">Hargeisa Node</Link>
          </div>
        </div>

      </div>

      <div className="max-w-[1240px] mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-[14px] text-slate-500 font-[400]">
          © {new Date().getFullYear()} Alnaciim Water. All rights reserved.
        </div>
        <div className="text-[14px] text-slate-500 flex gap-8">
          <Link href="#privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="#terms" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
