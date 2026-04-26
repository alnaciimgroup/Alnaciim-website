"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { catalogProducts } from "@/data/catalog";
import ProductCard from "@/components/ProductCard";
import { ArrowRight, Database } from "lucide-react";

export default function Hardware() {
  const showcaseProducts = [
    catalogProducts.find(p => p.id === "sp1"),
    catalogProducts.find(p => p.id === "ro1"),
    catalogProducts.find(p => p.id === "g1"),
    catalogProducts.find(p => p.id === "inv1"),
    catalogProducts.find(p => p.id === "m1"),
    catalogProducts.find(p => p.id === "ice1"),
  ].filter(Boolean) as typeof catalogProducts;

  return (
    <section className="py-32 bg-white relative overflow-hidden border-t border-slate-100" id="catalog">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-24 relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between gap-10">
          <div className="max-w-2xl">
             <motion.div 
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[11px] font-bold tracking-widest uppercase mb-10"
             >
               <Database size={14} />
               Infrastructure Catalog
             </motion.div>
             <motion.h2 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.1 }}
               className="text-[40px] md:text-[68px] font-bold tracking-tight text-slate-900 leading-[1] uppercase"
             >
               Superior Hardware <br/><span className="text-blue-600 italic">For Every Scale.</span>
             </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link href="/catalog" className="px-10 py-5 bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 rounded-2xl font-bold text-[14px] uppercase tracking-widest transition-all flex items-center gap-3 group">
              Explore Catalog <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform text-blue-600" />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Infinite Marquee Slider */}
      <div className="relative w-full flex overflow-hidden group pb-12">
        {/* Edge Fades */}
        <div className="absolute left-0 top-0 bottom-0 w-[15%] bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-[15%] bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none"></div>

        <motion.div 
          className="flex shrink-0 gap-10 px-5"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
        >
          {[...showcaseProducts, ...showcaseProducts].map((product, i) => (
            <div key={`${product.id}-${i}`} className="w-[340px] shrink-0 pointer-events-none">
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
