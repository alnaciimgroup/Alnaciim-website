import Link from "next/link";
import { Zap } from "lucide-react";

export default function EnergyFooter() {
  return (
    <footer className="bg-slate-900 pt-32 pb-12 px-6 lg:px-12 font-['Inter'] relative mt-[-100px] z-20 w-full overflow-hidden">
      
      {/* Infrastructure Background Texture */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img src="/images/alnaciim_hero_full_1771787383245.png" alt="Energy Infrastructure" className="w-full h-full object-cover opacity-[0.03] grayscale mix-blend-screen" />
      </div>

      {/* Top Border Accent Orange */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#FF5A00] to-transparent opacity-50 z-10"></div>

      <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-16 mb-20 relative z-10">
        
        {/* Brand Block */}
        <div>
          <Link href="/energy" className="flex items-center gap-3 mb-6 group">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#FF4500] to-[#FF8C00] flex items-center justify-center text-white shadow-[0_4px_10px_rgb(255,90,0,0.4)]">
              <Zap size={14} className="fill-current" />
            </div>
            <span className="text-[20px] font-[800] tracking-tight text-white leading-none">
              Alnaciim <span className="font-[400] text-slate-400">Energy</span>
            </span>
          </Link>
          <p className="text-slate-400 text-[15px] leading-[1.7] font-[400] mb-8 max-w-[300px]">
            Engineered for endurance. Supplying Tier-1 solar arrays, hybrid microgrids, and prime generation across East Africa since 2012.
          </p>
        </div>

        {/* Column 2 */}
        <div>
          <h4 className="text-[13px] font-[700] tracking-[1px] text-white mb-6 uppercase">
            Architecture
          </h4>
          <div className="flex flex-col gap-3">
            <Link href="#solar" className="text-[14px] text-slate-400 hover:text-[#FF8C00] transition-colors">Utility-Scale Solar</Link>
            <Link href="#bess" className="text-[14px] text-slate-400 hover:text-[#FF8C00] transition-colors">BESS Integration</Link>
            <Link href="#generators" className="text-[14px] text-slate-400 hover:text-[#FF8C00] transition-colors">Prime Load Gensets</Link>
            <Link href="#hybrid" className="text-[14px] text-slate-400 hover:text-[#FF8C00] transition-colors">Hybrid Microgrids</Link>
          </div>
        </div>

        {/* Column 3 */}
        <div>
          <h4 className="text-[13px] font-[700] tracking-[1px] text-white mb-6 uppercase">
            Hardware Stack
          </h4>
          <div className="flex flex-col gap-3">
            <Link href="#inverters" className="text-[14px] text-slate-400 hover:text-[#FF8C00] transition-colors">Hybrid Inverters</Link>
            <Link href="#panels" className="text-[14px] text-slate-400 hover:text-[#FF8C00] transition-colors">Tier-1 Monocrystalline</Link>
            <Link href="#batteries" className="text-[14px] text-slate-400 hover:text-[#FF8C00] transition-colors">LiFePO4 Modules</Link>
            <Link href="#controllers" className="text-[14px] text-slate-400 hover:text-[#FF8C00] transition-colors">DSE & DEIF Controllers</Link>
          </div>
        </div>

        {/* Column 4 */}
        <div>
          <h4 className="text-[13px] font-[700] tracking-[1px] text-white mb-6 uppercase">
            Nodes
          </h4>
          <div className="flex flex-col gap-3">
            <Link href="#hq" className="text-[14px] text-slate-400 hover:text-white transition-colors">Garowe Operations</Link>
            <Link href="#mogadishu" className="text-[14px] text-slate-400 hover:text-white transition-colors">Mogadishu Distribution</Link>
            <Link href="#berbera" className="text-[14px] text-slate-400 hover:text-white transition-colors">Berbera Node</Link>
          </div>
        </div>

      </div>

      <div className="max-w-[1240px] mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-[14px] text-slate-500 font-[400]">
          © {new Date().getFullYear()} Alnaciim Energy. All rights reserved.
        </div>
        <div className="text-[14px] text-slate-500 flex gap-8">
          <Link href="#privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="#terms" className="hover:text-white transition-colors">Commercial Terms</Link>
        </div>
      </div>
    </footer>
  );
}
