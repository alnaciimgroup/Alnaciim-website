"use client";

import { useState, useMemo } from "react";
import { catalogProducts, Product } from "@/data/catalog";
import { Search, Package, ArrowRight } from "lucide-react";
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
    <main className="min-h-screen bg-white pt-48 pb-24 selection:bg-blue-600 selection:text-white">
      
      {/* Hero Section */}
      <section className="px-6 lg:px-12 max-w-[1400px] mx-auto mb-20">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-3 mb-8"
        >
          <div className="w-8 h-px bg-blue-600" />
          <span className="text-sm font-semibold text-blue-600 tracking-widest uppercase">Inventory Node</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-6xl md:text-8xl lg:text-[90px] font-bold text-slate-900 mb-12 font-serif"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          TECHNICAL <br /><span className="text-blue-600 italic">CATALOG.</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-slate-600 leading-relaxed max-w-2xl font-light"
        >
          Industrial-grade hardware and equipment for water and energy infrastructure.
        </motion.p>
      </section>

      {/* Simplified Search Bar */}
      <section className="px-6 lg:px-12 max-w-[1400px] mx-auto mb-20">
        <div className="relative w-full max-w-xl">
          <Search size={18} className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input 
            type="text" 
            placeholder="Search specifications..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-6 py-5 bg-slate-50 border border-slate-200 text-[14px] font-medium outline-none focus:border-blue-600 transition-all"
          />
        </div>
      </section>

      {/* Product Grid - Full Width, No Filters */}
      <section className="px-6 lg:px-12 max-w-[1400px] mx-auto">
        {filteredProducts.length === 0 ? (
          <div className="text-center py-40 border border-slate-200 bg-slate-50">
            <Package size={48} className="text-slate-300 mx-auto mb-6" />
            <div className="text-xl font-bold text-slate-900 mb-2 uppercase font-serif">No results</div>
            <p className="text-slate-500 font-light">Try adjusting your search query.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            <AnimatePresence mode="popLayout">
              {filteredProducts.map(product => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="flex flex-col border border-slate-200 group cursor-pointer"
                  onClick={() => setSelectedProduct(product)}
                >
                  <div className="aspect-[4/3] bg-slate-50 relative overflow-hidden flex items-center justify-center border-b border-slate-100 p-8">
                    {product.img ? (
                      <img src={product.img} alt={product.name} className="w-full h-full object-contain transition-transform duration-[3s] group-hover:scale-105" />
                    ) : (
                      <div className="text-slate-300 font-bold text-xl uppercase">{product.brand}</div>
                    )}
                    <div className="absolute top-0 left-0 bg-white border-b border-r border-slate-100 px-4 py-2 text-[9px] font-bold text-slate-500 tracking-widest uppercase">
                      {product.category}
                    </div>
                  </div>

                  <div className="p-10 flex flex-col flex-1">
                    <div className="text-[10px] font-bold text-blue-600 mb-2 uppercase tracking-widest">{product.brand}</div>
                    <h3 className="text-xl font-bold text-slate-900 leading-tight mb-8 font-serif group-hover:text-blue-600 transition-colors" style={{ fontFamily: "var(--font-playfair)" }}>{product.name}</h3>
                    <div className="mt-auto flex items-center justify-between pt-8 border-t border-slate-100">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Detail View</span>
                      <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform text-blue-600" />
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
