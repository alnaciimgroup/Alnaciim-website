"use client";

import { useState, useMemo } from "react";
import { catalogProducts, Product } from "@/data/catalog";
import { Search, Package, ArrowRight, ShieldCheck, Activity } from "lucide-react";
import CatalogModal from "@/components/CatalogModal";
import { motion, AnimatePresence } from "framer-motion";

export default function CatalogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filteredProducts = useMemo(() => {
    return catalogProducts.filter(p => {
      const textMatch = 
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        p.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));

      return textMatch;
    });
  }, [searchQuery]);

  return (
    <main className="min-h-screen bg-[#fafafa] pt-40 pb-32 selection:bg-blue-600 selection:text-white">
      
      {/* Hero Section - Scale refined for comfort */}
      <section className="px-6 lg:px-12 max-w-[1300px] mx-auto mb-16">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-3 mb-6"
        >
          <div className="w-6 h-px bg-blue-600" />
          <span className="text-[10px] font-bold text-blue-600 tracking-[0.2em] uppercase">Inventory Node</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-[75px] font-bold text-slate-900 mb-10 font-serif leading-tight"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          TECHNICAL <br /><span className="text-blue-600 italic">CATALOG.</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-slate-500 leading-relaxed max-w-xl font-light"
        >
          Industrial-grade hardware for regional infrastructure.
        </motion.p>
      </section>

      {/* Scaled Down Search Section */}
      <section className="px-6 lg:px-12 max-w-[1300px] mx-auto mb-24">
        <div className="relative w-full max-w-xl">
          <div className="relative group">
            <Search size={18} className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search by part name or brand..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-14 pr-6 py-5 bg-white border border-slate-200 text-[14px] font-medium outline-none focus:border-blue-600 shadow-[0_10px_30px_rgba(0,0,0,0.02)] transition-all rounded-2xl"
            />
          </div>
        </div>
      </section>

      {/* Refined Product Grid */}
      <section className="px-6 lg:px-12 max-w-[1300px] mx-auto">
        {filteredProducts.length === 0 ? (
          <div className="text-center py-40 border border-slate-100 bg-white rounded-[32px]">
            <Package size={48} className="text-slate-200 mx-auto mb-6" />
            <div className="text-xl font-bold text-slate-900 mb-2 uppercase font-serif tracking-widest">No results</div>
            <p className="text-slate-500 font-light">Try adjusting your search query.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product, i) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.6, delay: i * 0.05 }}
                  className="flex flex-col bg-white border border-slate-100 rounded-[32px] overflow-hidden group cursor-pointer hover:shadow-[0_30px_60px_rgba(0,0,0,0.05)] transition-all duration-700"
                  onClick={() => setSelectedProduct(product)}
                >
                  {/* Image Holder - Correct Scale */}
                  <div className="aspect-[4/3] relative overflow-hidden bg-slate-100">
                    {product.img ? (
                      <img 
                        src={product.img} 
                        alt={product.name} 
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-[4s] ease-out group-hover:scale-105" 
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-slate-200 text-slate-400 font-bold text-xl uppercase">{product.brand}</div>
                    )}
                    
                    <div className="absolute top-6 left-6">
                        <div className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-md border border-white/20">
                            <span className="text-[9px] font-black text-slate-900 uppercase tracking-[0.15em]">
                                {product.category}
                            </span>
                        </div>
                    </div>
                  </div>

                  {/* Content Area - Refined Spacing */}
                  <div className="p-8 flex flex-col flex-1">
                    <div className="flex items-center gap-3 mb-5">
                        <div className="text-[10px] font-black text-blue-600 uppercase tracking-[0.15em]">{product.brand}</div>
                        <div className="w-4 h-px bg-slate-100" />
                        <div className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">{product.id}</div>
                    </div>

                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 leading-tight mb-8 font-serif group-hover:text-blue-600 transition-colors" style={{ fontFamily: "var(--font-playfair)" }}>
                        {product.name}
                    </h3>
                    
                    <div className="mt-auto flex items-center justify-between pt-6 border-t border-slate-50">
                        <div className="flex items-center gap-2">
                            <ShieldCheck size={14} className="text-blue-500 opacity-40" />
                            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Detail View</span>
                        </div>
                        <div className="w-10 h-10 bg-slate-50 border border-slate-100 rounded-full flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-600 transition-all duration-500">
                            <ArrowRight size={18} className="text-slate-300 group-hover:text-white transition-all" />
                        </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </section>

      {selectedProduct && (
        <CatalogModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}
    </main>
  );
}
