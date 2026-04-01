"use client";
import AnimatedSection from "./AnimatedSection";

export default function Stats() {
  return (
    <section className="py-20 bg-[#1152d4] relative text-white">
      <div className="max-w-[1300px] mx-auto px-6">
        <AnimatedSection>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
            
            <div className="text-center lg:text-left">
               <h3 className="font-['Syne'] text-[32px] md:text-[40px] font-[800] leading-tight tracking-[-1px] mb-2">
                 10k+ Bottles
               </h3>
               <p className="text-[#a4bdf5] text-[14px] font-[700] tracking-[2px] uppercase">Produced Every Hour</p>
            </div>

            <div className="hidden lg:block w-px h-16 bg-white/20"></div>

            <div className="text-center lg:text-left">
               <h3 className="font-['Syne'] text-[32px] md:text-[40px] font-[800] leading-tight tracking-[-1px] mb-2">
                 100% Pure
               </h3>
               <p className="text-[#a4bdf5] text-[14px] font-[700] tracking-[2px] uppercase">R.O. Commercial Ice</p>
            </div>

            <div className="hidden lg:block w-px h-16 bg-white/20"></div>

            <div className="text-center lg:text-left">
               <h3 className="font-['Syne'] text-[32px] md:text-[40px] font-[800] leading-tight tracking-[-1px] mb-2">
                 24/7 Hours
               </h3>
               <p className="text-[#a4bdf5] text-[14px] font-[700] tracking-[2px] uppercase">Rapid Fleet Dispatch</p>
            </div>

            <div className="hidden lg:block w-px h-16 bg-white/20"></div>

            <div className="text-center lg:text-left">
               <h3 className="font-['Syne'] text-[32px] md:text-[40px] font-[800] leading-tight tracking-[-1px] mb-2">
                 ISO 9001
               </h3>
               <p className="text-[#a4bdf5] text-[14px] font-[700] tracking-[2px] uppercase">Certified Security</p>
            </div>

          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
