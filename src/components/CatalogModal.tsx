"use client";

import { Product } from "@/data/catalog";
import { X, CheckCircle2, ChevronRight, Hash, Tag, Info } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CatalogModalProps {
  product: Product;
  onClose: () => void;
}

export default function CatalogModal({ product, onClose }: CatalogModalProps) {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = "unset"; };
  }, []);

  return (
    <div className="fixed inset-0 z-[300] flex items-center justify-center p-4 sm:p-6 overflow-hidden">
      {/* Backdrop */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-md" 
        onClick={onClose}
      />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative bg-white rounded-[2rem] max-w-[1100px] w-full overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
      >
        
        {/* Left: Product Visuals */}
        <div className="w-full md:w-1/2 relative bg-slate-50 border-r border-slate-100 overflow-hidden">
          <div className="relative h-full flex flex-col p-10 md:p-16">
            <div className="inline-block text-[10px] font-bold tracking-[0.2em] uppercase px-4 py-2 bg-white border border-slate-200 text-slate-500 mb-10 w-fit">
              {product.category}
            </div>
            
            <div className="flex-1 flex items-center justify-center mb-12">
              <img 
                src={product.img} 
                alt={product.name} 
                className="max-w-full max-h-[450px] object-contain drop-shadow-2xl" 
              />
            </div>

            <div>
              <div className="text-[11px] font-bold text-blue-600 mb-3 tracking-[0.25em] uppercase">{product.brand}</div>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight font-serif" style={{ fontFamily: "var(--font-playfair)" }}>
                {product.name}
              </h2>
            </div>
          </div>

          <button 
            onClick={onClose}
            className="absolute top-8 right-8 w-12 h-12 rounded-full bg-white border border-slate-200 text-slate-900 flex items-center justify-center hover:bg-slate-50 transition-all z-20 group"
          >
            <X size={20} className="group-hover:rotate-90 transition-transform" />
          </button>
        </div>

        {/* Right: Specs & Form */}
        <div className="w-full md:w-1/2 flex flex-col bg-white overflow-y-auto no-scrollbar">
          
          <div className="p-10 md:p-16 flex flex-col gap-16">
            
            {/* Specs Table */}
            <div>
              <div className="flex items-center gap-3 mb-10">
                <Hash size={16} className="text-blue-600" />
                <h3 className="text-[11px] font-bold tracking-[0.25em] uppercase text-slate-400">Technical Specifications</h3>
              </div>
              <div className="space-y-0">
                {product.specs.map(([k, v], i) => (
                  <div key={i} className="flex justify-between items-center py-5 border-b border-slate-100 group">
                    <span className="text-[13px] font-medium text-slate-500">{k}</span>
                    <span className="text-[14px] font-bold text-slate-900 uppercase tracking-tight">{v}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Tag size={16} className="text-blue-600" />
                <h3 className="text-[11px] font-bold tracking-[0.25em] uppercase text-slate-400">Product Tags</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {product.tags.map(t => (
                  <span key={t} className="text-[10px] px-4 py-2 bg-slate-50 border border-slate-200 text-slate-500 font-bold uppercase tracking-widest">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Form Section */}
            <div className="bg-slate-50 border border-slate-200 p-10 rounded-2xl relative overflow-hidden">
              {!submitted ? (
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-8">
                    <Info size={16} className="text-blue-600" />
                    <h3 className="text-xl font-bold text-slate-900 tracking-tight uppercase font-serif">Request Quote</h3>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold text-slate-400 tracking-widest uppercase ml-1">Full Name</label>
                        <input type="text" placeholder="Your name" className="w-full px-6 py-4 bg-white border border-slate-200 text-[13px] font-medium text-slate-900 outline-none focus:border-blue-600 transition-all" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold text-slate-400 tracking-widest uppercase ml-1">Email Address</label>
                        <input type="email" placeholder="email@company.com" className="w-full px-6 py-4 bg-white border border-slate-200 text-[13px] font-medium text-slate-900 outline-none focus:border-blue-600 transition-all" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-slate-400 tracking-widest uppercase ml-1">Message</label>
                      <textarea placeholder="Application requirements..." className="w-full px-6 py-4 bg-white border border-slate-200 text-[13px] font-medium text-slate-900 outline-none focus:border-blue-600 transition-all min-h-[100px] resize-none"></textarea>
                    </div>

                    <button 
                      onClick={() => setSubmitted(true)} 
                      className="w-full py-5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-[13px] uppercase tracking-widest transition-all flex items-center justify-center gap-3 group"
                    >
                      Send Request <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              ) : (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-10 text-center relative z-10"
                >
                  <div className="w-16 h-16 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 mb-6">
                    <CheckCircle2 size={32} />
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight uppercase font-serif">Request Sent</h4>
                  <p className="text-sm text-slate-500 font-medium max-w-[250px]">Our technical team will contact you shortly with a quote.</p>
                </motion.div>
              )}
            </div>
          </div>
          
        </div>
      </motion.div>
    </div>
  );
}
