import Link from "next/link";
import { Droplets } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 pt-32 pb-12 px-6 lg:px-12 font-['Inter'] relative z-20 overflow-hidden">
      
      {/* Top Border Accent */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#0066FF] to-transparent opacity-50 z-10"></div>

      <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-16 mb-20 relative z-10">
        
        {/* Brand Block */}
        <div>
          <Link href="/" className="flex items-center gap-3 mb-6 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#0066FF] to-[#00D2FF] flex items-center justify-center text-white shadow-lg">
              <Droplets size={18} className="fill-current" />
            </div>
            <span className="text-[22px] font-[900] tracking-tighter text-white leading-none uppercase">
              ALNACIIM GROUP
            </span>
          </Link>
          <p className="text-slate-400 text-[15px] leading-[1.7] font-[400] mb-8 max-w-[300px]">
            Building the technical foundations of East Africa since 1998. Four divisions. One unified standard.
          </p>
        </div>

        {/* Column 2 - Divisions */}
        <div>
          <h4 className="text-[13px] font-[700] tracking-[2px] text-white/50 mb-6 uppercase">
            Divisions
          </h4>
          <div className="flex flex-col gap-3">
            <Link href="/" className="text-[14px] text-slate-400 hover:text-[#0066FF] transition-colors">ALNACIIM WATER</Link>
            <Link href="/energy" className="text-[14px] text-slate-400 hover:text-[#0066FF] transition-colors">ALNACIIM ENERGY</Link>
            <Link href="/engineering" className="text-[14px] text-slate-400 hover:text-[#0066FF] transition-colors">ALNACIIM ENGINEERING</Link>
            <Link href="/digital" className="text-[14px] text-slate-400 hover:text-[#0066FF] transition-colors">ALNACIIM DIGITAL</Link>
          </div>
        </div>

        {/* Column 3 - Navigation */}
        <div>
          <h4 className="text-[13px] font-[700] tracking-[2px] text-white/50 mb-6 uppercase">
            Navigation
          </h4>
          <div className="flex flex-col gap-3">
            <Link href="/work" className="text-[14px] text-slate-400 hover:text-white transition-colors">OUR WORK</Link>
            <Link href="/catalog" className="text-[14px] text-slate-400 hover:text-white transition-colors">CATALOG</Link>
            <Link href="/contact" className="text-[14px] text-slate-400 hover:text-white transition-colors">CONTACT US</Link>
          </div>
        </div>

        {/* Column 4 - Information */}
        <div>
          <h4 className="text-[13px] font-[700] tracking-[2px] text-white/50 mb-6 uppercase">
            Information
          </h4>
          <div className="flex flex-col gap-3">
            <Link href="/about" className="text-[14px] text-slate-400 hover:text-white transition-colors">OUR STORY</Link>
            <Link href="/privacy" className="text-[14px] text-slate-400 hover:text-white transition-colors">PRIVACY POLICY</Link>
          </div>
        </div>

      </div>

      <div className="max-w-[1240px] mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-[14px] text-slate-500 font-[400]">
          © {new Date().getFullYear()} ALNACIIM GROUP. Built here. Operating here.
        </div>
        <div className="text-[14px] text-slate-500 flex gap-8">
          <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
