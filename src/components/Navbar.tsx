"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className="w-full sticky top-6 z-[100] px-4 lg:px-8">
      <header className="max-w-[1400px] mx-auto px-8 lg:px-10 flex items-center justify-between h-20 bg-white border border-slate-200 rounded-full shadow-sm">
        
        {/* Left: Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center shrink-0">
            <img 
              src="/images/alnaciim_logo_final.png?v=3" 
              alt="Alnaciim Group" 
              className="h-8 w-auto object-contain"
            />
          </Link>
        </div>
        
        {/* Center: Navigation */}
                <nav className="hidden lg:flex items-center gap-10 text-[11px] font-bold text-slate-900 h-full tracking-widest uppercase">
          <Link href="/water" className={`h-full flex items-center border-b-2 transition-colors ${pathname === '/water' ? 'border-blue-600 text-blue-600' : 'border-transparent hover:border-blue-600 hover:text-blue-600'}`}>
            ALNACIIM WATER
          </Link>

          {/* Energy Dropdown */}
          <div className="relative group/item h-full flex items-center">
            <button type="button" className={`h-full flex items-center gap-1.5 border-b-2 transition-colors outline-none ${pathname.startsWith('/energy') ? 'border-blue-600 text-blue-600' : 'border-transparent hover:border-blue-600 hover:text-blue-600'}`}>
              ALNACIIM ENERGY
              <ChevronDown size={14} className="opacity-50 group-hover/item:rotate-180 transition-transform duration-200" />
            </button>
            
            <div className="absolute top-full left-0 w-64 bg-white border border-slate-200 shadow-2xl opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible transition-all duration-200 z-50">
              <Link href="/energy" className="block px-8 py-5 hover:bg-slate-50 text-slate-600 hover:text-blue-600 text-[10px] font-bold tracking-widest uppercase transition-colors border-b border-slate-100">ALNACIIM ENERGY</Link>
              <Link href="/energy/solutions" className="block px-8 py-5 hover:bg-slate-50 text-slate-600 hover:text-blue-600 text-[10px] font-bold tracking-widest uppercase transition-colors">SOLUTIONS</Link>
            </div>
          </div>

          {/* Engineering Dropdown */}
          <div className="relative group/item h-full flex items-center">
            <button type="button" className={`h-full flex items-center gap-1.5 border-b-2 transition-colors outline-none ${pathname.startsWith('/engineering') ? 'border-blue-600 text-blue-600' : 'border-transparent hover:border-blue-600 hover:text-blue-600'}`}>
              ALNACIIM ENGINEERING
              <ChevronDown size={14} className="opacity-50 group-hover/item:rotate-180 transition-transform duration-200" />
            </button>
            
            <div className="absolute top-full left-0 w-64 bg-white border border-slate-200 shadow-2xl opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible transition-all duration-200 z-50">
              <Link href="/engineering" className="block px-8 py-5 hover:bg-slate-50 text-slate-600 hover:text-blue-600 text-[10px] font-bold tracking-widest uppercase transition-colors border-b border-slate-100">ALNACIIM ENGINEERING</Link>
              <Link href="/engineering/solutions" className="block px-8 py-5 hover:bg-slate-50 text-slate-600 hover:text-blue-600 text-[10px] font-bold tracking-widest uppercase transition-colors">SOLUTIONS</Link>
            </div>
          </div>

          <Link href="/work" className={`h-full flex items-center border-b-2 transition-colors ${pathname === '/work' ? 'border-blue-600 text-blue-600' : 'border-transparent hover:border-blue-600 hover:text-blue-600'}`}>
            OUR WORK
          </Link>

          <Link href="/catalog" className={`h-full flex items-center border-b-2 transition-colors ${pathname === '/catalog' ? 'border-blue-600 text-blue-600' : 'border-transparent hover:border-blue-600 hover:text-blue-600'}`}>
            CATALOG
          </Link>

          <Link href="/about" className={`h-full flex items-center border-b-2 transition-colors ${pathname === '/about' ? 'border-blue-600 text-blue-600' : 'border-transparent hover:border-blue-600 hover:text-blue-600'}`}>
            ABOUT
          </Link>
        </nav>
        
        {/* Right: CTA */}
        <div className="flex items-center">
          <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 text-[11px] font-bold tracking-widest uppercase transition-all shadow-md hover:shadow-lg rounded-full">
            CONTACT
          </Link>
        </div>
      </header>
    </div>
  );
}
