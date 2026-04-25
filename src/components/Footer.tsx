import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-footer pt-24 pb-12 px-6 lg:px-12 relative z-20 overflow-hidden">
      
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
         <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[50%] bg-primary/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2.5fr_1fr_1fr_1fr] gap-16 mb-20">
          
          {/* Brand Block */}
          <div>
            <Link href="/" className="flex items-center group mb-8">
              <div className="h-16 w-auto flex items-center transition-transform group-hover:scale-105 duration-300">
                <img 
                  src="/images/alnaciim_logo_final.png?v=3" 
                  alt="Alnaciim Group" 
                  className="h-full w-auto object-contain brightness-0 invert"
                />
              </div>
            </Link>
            <p className="text-slate-400 text-[15px] leading-[1.8] font-[450] mb-8 max-w-[320px]">
               Building the technical foundations of Somalia since 1998. Three specialized divisions, one unified standard of excellence.
            </p>
          </div>
          
          <div>
            <h4 className="text-[13px] font-[700] tracking-[0.2em] text-white mb-8 uppercase font-heading">
              Divisions
            </h4>
            <div className="flex flex-col gap-4">
              <Link href="/water" className="text-[14px] text-slate-400 hover:text-primary transition-colors font-[500] uppercase">ALNACIIM WATER</Link>
              <Link href="/energy" className="text-[14px] text-slate-400 hover:text-primary transition-colors font-[500] uppercase">ALNACIIM ENERGY</Link>
              <Link href="/engineering" className="text-[14px] text-slate-400 hover:text-primary transition-colors font-[500] uppercase">ALNACIIM ENGINEERING</Link>
            </div>
          </div>

          <div>
            <h4 className="text-[13px] font-[700] tracking-[0.2em] text-white mb-8 uppercase font-heading">
              Navigation
            </h4>
            <div className="flex flex-col gap-4">
              <Link href="/work" className="text-[14px] text-slate-400 hover:text-white transition-colors font-[500] uppercase">OUR WORK</Link>
              <Link href="/catalog" className="text-[14px] text-slate-400 hover:text-white transition-colors font-[500] uppercase">CATALOG</Link>
              <Link href="/contact" className="text-[14px] text-slate-400 hover:text-white transition-colors font-[500] uppercase">CONTACT US</Link>
            </div>
          </div>

          <div>
             <h4 className="text-[13px] font-[700] tracking-[0.2em] text-white mb-8 uppercase font-heading">
              Information
            </h4>
            <div className="flex flex-col gap-4">
              <Link href="/about" className="text-[14px] text-slate-400 hover:text-white transition-colors font-[500] uppercase">OUR STORY</Link>
              <Link href="/privacy" className="text-[14px] text-slate-400 hover:text-white transition-colors font-[500] uppercase">PRIVACY POLICY</Link>
            </div>
          </div>

        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-[13px] text-slate-500 font-[500] uppercase tracking-widest text-center md:text-left">
            © {new Date().getFullYear()} Alnaciim Group. Built in Somalia. Operating for Somalia.
          </div>
          <div className="flex items-center gap-4">
             <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
             <span className="text-[11px] font-[700] text-slate-400 uppercase tracking-widest">Systems Active</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
