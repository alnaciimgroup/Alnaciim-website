"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { catalogProducts } from "@/data/catalog";
import ProductCard from "@/components/ProductCard";

export default function Hardware() {
  // Grab a robust cross-section of hardware for the marquee
  const showcaseProducts = [
    catalogProducts.find(p => p.id === "sp1"),
    catalogProducts.find(p => p.id === "ro1"),
    catalogProducts.find(p => p.id === "g1"),
    catalogProducts.find(p => p.id === "inv1"),
    catalogProducts.find(p => p.id === "m1"),
    catalogProducts.find(p => p.id === "ice1"),
  ].filter(Boolean) as typeof catalogProducts;

  return (
    <section className="py-24 bg-white relative overflow-hidden border-t border-[#dde2f0]/60" id="catalog">
      <div className="max-w-[1160px] mx-auto px-6 mb-14">
        <div className="flex flex-col md:flex-row items-end justify-between gap-6">
          <div className="max-w-xl">
             <div className="text-[10px] font-[700] tracking-[2px] uppercase text-[#1152d4] mb-3 flex items-center gap-3">
               <span className="w-6 h-px bg-[#1152d4]/50"></span> Infrastructure Catalog
             </div>
             <h2 className="font-['Syne'] text-[36px] sm:text-[46px] font-[800] tracking-[-1.5px] text-[#0b0d14] leading-[1.1]">
               Superior Hardware for <br/>Every Scale
             </h2>
          </div>
          <Link href="/catalog" className="inline-flex items-center justify-center shrink-0 bg-[#f0f3fa] hover:bg-[#e4e9f5] border border-transparent hover:border-[#dde2f0] text-[#1152d4] px-8 py-3.5 rounded-[12px] text-[13.5px] font-[600] font-['Syne'] transition-all">
            Explore Full Catalog
          </Link>
        </div>
      </div>

      {/* Infinite Marquee Slider */}
      <div className="relative w-full flex overflow-hidden group pb-8">
        
        {/* Left Fade Edge */}
        <div className="absolute left-0 top-0 bottom-0 w-[100px] bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        {/* Right Fade Edge */}
        <div className="absolute right-0 top-0 bottom-0 w-[100px] bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

        <motion.div 
          className="flex shrink-0 gap-[20px] px-[10px]"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          {/* Double array to ensure seamless looping without glitch */}
          {[...showcaseProducts, ...showcaseProducts].map((product, i) => (
            <div key={`${product.id}-${i}`} className="w-[300px] shrink-0 pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity">
              <ProductCard 
                product={product} 
                onClick={() => {}} 
              />
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
