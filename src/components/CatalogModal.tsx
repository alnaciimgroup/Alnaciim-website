"use client";

import { Product } from "@/data/catalog";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { X, Hash, Tag, Info, CheckCircle2, Loader2, AlertCircle } from "lucide-react";

interface CatalogModalProps {
  product: Product;
  onClose: () => void;
}

export default function CatalogModal({ product, onClose }: CatalogModalProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = "unset"; };
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || "Failed to send");
      }
      
      setStatus("success");
    } catch (err: any) {
      console.error(err);
      setStatus("error");
      setErrorMessage(err.message || "Something went wrong. Please try again.");
    }
  }

  return (
    <div className="fixed inset-0 z-[300] flex items-center justify-center p-4 sm:p-10 overflow-hidden">
      {/* Backdrop */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-slate-900/80 backdrop-blur-md" 
        onClick={onClose}
      />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative bg-white rounded-[2.5rem] max-w-[1200px] w-full overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
      >
        {/* Global Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white border border-slate-100 text-slate-900 flex items-center justify-center hover:bg-slate-50 transition-all z-[310] shadow-sm group"
        >
          <X size={20} className="group-hover:rotate-90 transition-transform" />
        </button>
        
        {/* Left Side: Visuals & Primary Info */}
        <div className="w-full md:w-1/2 relative bg-[#f8f9fa] flex flex-col overflow-y-auto no-scrollbar border-r border-slate-100">
          <div className="p-10 md:p-16 flex flex-col min-h-full">
            {/* Category Tag */}
            <div className="inline-block text-[10px] font-black tracking-[0.2em] uppercase px-5 py-2.5 bg-white border border-slate-100 text-slate-400 mb-12 w-fit rounded-full shadow-sm">
              {product.category}
            </div>
            
            {/* Main Product Image */}
            <div className="flex-1 flex items-center justify-center mb-16 px-4">
              <motion.img 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                src={product.img} 
                alt={product.name} 
                className="max-w-full max-h-[400px] object-contain drop-shadow-2xl" 
              />
            </div>

            {/* Title & Brand */}
            <div className="mt-auto">
              <div className="text-[11px] font-black text-blue-600 mb-4 tracking-[0.3em] uppercase">{product.brand}</div>
              <h2 className="text-3xl md:text-5xl lg:text-[54px] font-bold text-slate-900 tracking-tight leading-[1.1] font-serif pb-4" style={{ fontFamily: "var(--font-playfair)" }}>
                {product.name}
              </h2>
            </div>
          </div>
        </div>

        {/* Right Side: Detailed Tech Specs & Overview */}
        <div className="w-full md:w-1/2 flex flex-col bg-white overflow-y-auto no-scrollbar">
          <div className="p-10 md:p-16 flex flex-col gap-16">
            
            {/* Overview Section */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <Info size={16} className="text-blue-600" />
                <h3 className="text-[11px] font-bold tracking-[0.25em] uppercase text-slate-400">Technical Overview</h3>
              </div>
              <p className="text-[16px] text-slate-600 leading-relaxed font-light">
                {product.desc}
              </p>
            </div>

            {/* Specifications Grid */}
            <div>
              <div className="flex items-center gap-3 mb-10">
                <Hash size={16} className="text-blue-600" />
                <h3 className="text-[11px] font-bold tracking-[0.25em] uppercase text-slate-400">System Specifications</h3>
              </div>
              <div className="space-y-1">
                {product.specs.map(([k, v], i) => (
                  <div key={i} className="flex justify-between items-start py-5 border-b border-slate-50 group">
                    <span className="text-[13px] font-bold text-slate-400 uppercase tracking-tight w-1/3">{k}</span>
                    <span className="text-[14px] font-bold text-slate-900 text-right flex-1">{v}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Identification Tags */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <Tag size={16} className="text-blue-600" />
                <h3 className="text-[11px] font-bold tracking-[0.25em] uppercase text-slate-400">Catalog Identifiers</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {product.tags.map(t => (
                  <span key={t} className="text-[10px] px-5 py-2.5 bg-slate-50 border border-slate-100 text-slate-500 font-bold uppercase tracking-widest rounded-full">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Form Section */}
            <div className="bg-slate-50 border border-slate-100 p-10 rounded-[2rem] relative overflow-hidden">
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-8">
                    <Info size={16} className="text-blue-600" />
                    <h3 className="text-xl font-bold text-slate-900 tracking-tight uppercase font-serif">Request Quote</h3>
                  </div>
                  
                  {status === "success" ? (
                    <div className="text-center py-6">
                      <div className="w-16 h-16 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle2 size={32} />
                      </div>
                      <h4 className="text-lg font-bold text-slate-900 mb-2 uppercase tracking-tight">Request Received</h4>
                      <p className="text-sm text-slate-500 font-medium">Our technical team will review the specifications and contact you shortly.</p>
                      <button onClick={() => setStatus("idle")} className="mt-6 text-blue-600 font-bold text-[11px] uppercase tracking-widest">Send another request</button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 gap-6">
                        <div className="space-y-2">
                          <label className="text-[10px] font-bold text-slate-400 tracking-widest uppercase ml-1">Full Name</label>
                          <input required name="name" type="text" placeholder="Your name" className="w-full px-6 py-4 bg-white border border-slate-200 text-[13px] font-medium text-slate-900 outline-none focus:border-blue-600 transition-all rounded-xl" />
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <label className="text-[10px] font-bold text-slate-400 tracking-widest uppercase ml-1">Email Address</label>
                            <input required name="email" type="email" placeholder="email@company.com" className="w-full px-6 py-4 bg-white border border-slate-200 text-[13px] font-medium text-slate-900 outline-none focus:border-blue-600 transition-all rounded-xl" />
                          </div>
                          <div className="space-y-2">
                            <label className="text-[10px] font-bold text-slate-400 tracking-widest uppercase ml-1">Phone Number</label>
                            <input required name="phone" type="tel" placeholder="+252..." className="w-full px-6 py-4 bg-white border border-slate-200 text-[13px] font-medium text-slate-900 outline-none focus:border-blue-600 transition-all rounded-xl" />
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] font-bold text-slate-400 tracking-widest uppercase ml-1">Message</label>
                        <textarea required name="message" defaultValue={`Product Inquiry: [${product.id}] ${product.name}\n\n`} placeholder="Application requirements..." className="w-full px-6 py-4 bg-white border border-slate-200 text-[13px] font-medium text-slate-900 outline-none focus:border-blue-600 transition-all min-h-[100px] resize-none rounded-xl"></textarea>
                      </div>

                      {status === "error" && (
                        <div className="flex items-center gap-2 text-red-600 text-[12px] font-bold uppercase tracking-tight">
                          <AlertCircle size={16} />
                          {errorMessage}
                        </div>
                      )}

                      <button 
                        disabled={status === "loading"}
                        type="submit"
                        className="w-full py-5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-[13px] uppercase tracking-widest transition-all flex items-center justify-center gap-3 group rounded-xl disabled:opacity-50"
                      >
                        {status === "loading" ? <Loader2 className="animate-spin" size={18} /> : "Send Request"}
                      </button>
                    </form>
                  )}
                </div>
            </div>

            {/* Reference Footnote */}
            <div className="pt-8 border-t border-slate-100">
                <p className="text-[11px] text-slate-400 font-medium leading-relaxed">
                    Product ID: {product.id} · Certified Component · Alnaciim Infrastructure Group Inventory
                </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
