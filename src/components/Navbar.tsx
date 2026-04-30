"use client";

import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  return (
    <div className="w-full sticky top-6 z-[100] px-4 lg:px-8">
      <header className="max-w-[1400px] mx-auto px-8 lg:px-10 flex items-center justify-between h-20 bg-white border border-slate-200 rounded-full shadow-sm">
        
        {/* Left: Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center shrink-0">
            <span className="text-2xl font-black text-blue-600 tracking-tighter uppercase font-serif" style={{ fontFamily: 'var(--font-playfair)' }}>
              ALNACIIM
            </span>
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
        
        {/* Right: CTA & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <Link href="/contact" className="hidden sm:block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 text-[11px] font-bold tracking-widest uppercase transition-all shadow-md hover:shadow-lg rounded-full">
            CONTACT
          </Link>
          
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden w-12 h-12 flex items-center justify-center text-slate-900 bg-slate-50 border border-slate-200 rounded-full"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="fixed inset-0 bg-slate-900/60 backdrop-blur-md z-[110] lg:hidden"
              />
              <motion.div 
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-white z-[120] lg:hidden flex flex-col p-8"
              >
                <div className="flex justify-between items-center mb-12">
                  <span className="text-xl font-black text-blue-600 tracking-tighter uppercase font-serif">ALNACIIM</span>
                  <button onClick={() => setIsMobileMenuOpen(false)} className="w-10 h-10 flex items-center justify-center text-slate-400">
                    <X size={24} />
                  </button>
                </div>

                <nav className="flex flex-col gap-8 text-[13px] font-bold text-slate-900 tracking-[0.15em] uppercase overflow-y-auto no-scrollbar">
                  <Link href="/water" className={pathname === '/water' ? 'text-blue-600' : ''}>ALNACIIM WATER</Link>
                  
                  <div className="flex flex-col gap-4">
                    <Link href="/energy" className={pathname === '/energy' ? 'text-blue-600' : ''}>ALNACIIM ENERGY</Link>
                    <Link href="/energy/solutions" className="text-[11px] text-slate-400 pl-4 border-l border-slate-100">SOLUTIONS</Link>
                  </div>

                  <div className="flex flex-col gap-4">
                    <Link href="/engineering" className={pathname === '/engineering' ? 'text-blue-600' : ''}>ALNACIIM ENGINEERING</Link>
                    <Link href="/engineering/solutions" className="text-[11px] text-slate-400 pl-4 border-l border-slate-100">SOLUTIONS</Link>
                  </div>

                  <Link href="/work" className={pathname === '/work' ? 'text-blue-600' : ''}>OUR WORK</Link>
                  <Link href="/catalog" className={pathname === '/catalog' ? 'text-blue-600' : ''}>CATALOG</Link>
                  <Link href="/about" className={pathname === '/about' ? 'text-blue-600' : ''}>ABOUT</Link>
                  <Link href="/contact" className="mt-8 bg-blue-600 text-white p-6 text-center rounded-2xl tracking-widest">GET IN TOUCH</Link>
                </nav>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </header>
    </div>
  );
}
