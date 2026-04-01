import Link from "next/link";
import { Droplets } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-footer pt-20 pb-8 px-6 lg:px-12 font-['Inter'] relative z-20 overflow-hidden">
      
      {/* Top Border Accent */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-50 z-10"></div>

      <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-12 mb-12 relative z-10">
        
        {/* Brand Block */}
        <div>
          <Link href="/" className="flex items-center gap-2.5 mb-5 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-primary to-secondary flex items-center justify-center text-white shadow-lg">
              <Droplets size={16} className="fill-current" />
            </div>
            <span className="text-[18px] font-[900] tracking-tighter text-white leading-none uppercase">
              Alnaciim Group
            </span>
          </Link>
          <p className="text-slate-400 text-[14px] leading-[1.6] font-[400] mb-6 max-w-[260px]">
            Building the technical foundations of East Africa since 1998. Four divisions. One unified standard.
          </p>
        </div>

        {/* Column 2 - Divisions */}
        <div>
          <h4 className="text-[11px] font-[700] tracking-[2px] text-white/50 mb-5 uppercase">
            Divisions
          </h4>
          <div className="flex flex-col gap-2">
            <Link href="/" className="text-[13px] text-slate-400 hover:text-primary transition-colors">ALNACIIM WATER</Link>
            <Link href="/energy" className="text-[13px] text-slate-400 hover:text-primary transition-colors">ALNACIIM ENERGY</Link>
            <Link href="/engineering" className="text-[13px] text-slate-400 hover:text-primary transition-colors">ALNACIIM ENGINEERING</Link>
            <Link href="/digital" className="text-[13px] text-slate-400 hover:text-primary transition-colors">ALNACIIM DIGITAL</Link>
          </div>
        </div>

        {/* Column 3 - Navigation */}
        <div>
          <h4 className="text-[11px] font-[700] tracking-[2px] text-white/50 mb-5 uppercase">
            Navigation
          </h4>
          <div className="flex flex-col gap-2">
            <Link href="/work" className="text-[13px] text-slate-400 hover:text-white transition-colors">OUR WORK</Link>
            <Link href="/catalog" className="text-[13px] text-slate-400 hover:text-white transition-colors">CATALOG</Link>
            <Link href="/contact" className="text-[13px] text-slate-400 hover:text-white transition-colors">CONTACT US</Link>
          </div>
        </div>

        {/* Column 4 - Information */}
        <div>
          <h4 className="text-[11px] font-[700] tracking-[2px] text-white/50 mb-5 uppercase">
            Information
          </h4>
          <div className="flex flex-col gap-2">
            <Link href="/about" className="text-[13px] text-slate-400 hover:text-white transition-colors">OUR STORY</Link>
            <Link href="/privacy" className="text-[13px] text-slate-400 hover:text-white transition-colors">PRIVACY POLICY</Link>
          </div>
        </div>

      </div>

      <div className="max-w-[1240px] mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-[14px] text-slate-500 font-[400]">
          © {new Date().getFullYear()} Alnaciim Group. Built here. Operating here.
        </div>
        <div className="text-[14px] text-slate-500 flex gap-8">
          <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
