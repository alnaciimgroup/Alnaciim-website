"use client";

import { useState, useMemo } from "react";
import { catalogProducts, Product } from "@/data/catalog";
import { Search, Database } from "lucide-react";
import CatalogModal from "@/components/CatalogModal";
import { motion, AnimatePresence } from "framer-motion";

export default function CatalogPage() {
  const [activeTab, setActiveTab] = useState("All Products");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const tabs = [
    "All Products", "RO Systems", "Generators & Motors", "Spare Parts"
  ];

  const allCategories = useMemo(() => Array.from(new Set(catalogProducts.map(p => p.category))).sort(), []);

  const toggleFilter = (cat: string) => {
    setSelectedFilters(prev => 
      prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
    );
    setActiveTab("All Products");
  };

  const filteredProducts = useMemo(() => {
    return catalogProducts.filter(p => {
      const textMatch = 
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        p.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));

      if (!textMatch) return false;

      if (selectedFilters.length > 0) {
        if (!selectedFilters.includes(p.category)) return false;
      } else {
        if (activeTab === "RO Systems" && p.category !== "RO System") return false;
        if (activeTab === "Generators & Motors" && !(p.category.includes("Generator") || p.category === "Motors" || p.category === "Inverters" || p.category === "Solar Panels")) return false;
        if (activeTab === "Spare Parts" && !(p.category.includes("Spare Parts") || p.category.includes("Refrigeration") || p.category.includes("Electrical") || p.category === "Ice Machines")) return false;
      }

      return true;
    });
  }, [activeTab, searchQuery, selectedFilters]);

  return (
    <main className="min-h-screen bg-[#FAFBFF] font-['Inter'] text-slate-800 pt-32 selection:bg-[#00D2FF] selection:text-black overflow-hidden relative">
      
      {/* Neo-SaaS Mesh Gradients */}
      <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[500px] bg-[#00D2FF] rounded-full mix-blend-multiply filter blur-[100px] opacity-10 pointer-events-none"></div>

      {/* Hero Unit */}
      <section className="px-6 lg:px-12 max-w-[1400px] mx-auto mb-16 relative z-10 text-center flex flex-col items-center">
          
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-slate-200 text-[#0066FF] shadow-sm mb-6">
          <Database size={14} className="fill-current" />
          <span className="font-[600] text-[12px] tracking-wide">Warehouse Database</span>
        </div>
        
        <h1 className="text-[52px] md:text-[80px] font-[800] text-slate-900 leading-[1] tracking-[-3px] mb-6">
          Hardware Inventory.
        </h1>
        
        <p className="text-[18px] text-slate-600 leading-[1.8] max-w-2xl font-[400] mb-8">
          Access the secure ALNM Energy distribution node. Procure Tier-1 industrial hydrology and prime power infrastructure hardware.
        </p>

        <div className="flex justify-center gap-12 bg-white px-8 py-5 rounded-2xl shadow-sm border border-slate-100">
           <div className="flex flex-col items-center">
             <div className="text-[32px] font-[800] text-slate-900 leading-none tracking-[-1px]">200+</div>
             <div className="text-[12px] font-[600] tracking-wide text-slate-500">SKUs Available</div>
           </div>
           <div className="w-px bg-slate-200"></div>
           <div className="flex flex-col items-center">
             <div className="text-[32px] font-[800] text-slate-900 leading-none tracking-[-1px]">OEM</div>
             <div className="text-[12px] font-[600] tracking-wide text-slate-500">Direct Supply</div>
           </div>
        </div>

      </section>

      {/* Floating UI Command Bar */}
      <section className="sticky top-[80px] z-[40] pb-8 bg-[#FAFBFF]/90 backdrop-blur-md">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 pt-4">
          <div className="bg-white p-3 rounded-2xl border border-slate-200 shadow-[0_8px_30px_rgb(0,0,0,0.06)] flex flex-col md:flex-row items-center justify-between gap-4">
            
            <div className="w-full md:w-auto overflow-x-auto no-scrollbar">
              <div className="flex items-center gap-1 min-w-max">
                {tabs.map(tab => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-5 py-2.5 rounded-xl text-[13px] font-[600] transition-all ${
                      activeTab === tab 
                        ? 'bg-slate-900 text-white shadow-md' 
                        : 'bg-transparent text-slate-500 hover:bg-slate-100'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            <div className="relative w-full md:w-[400px] shrink-0">
              <Search size={16} className="absolute left-[16px] top-1/2 -translate-y-1/2 text-slate-400" />
              <input 
                type="text" 
                placeholder="Query hardware specifications..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-[46px] pr-[16px] py-[10px] bg-slate-50 border border-slate-200 rounded-xl text-[13px] outline-none focus:bg-white focus:border-[#0066FF] focus:ring-4 focus:ring-blue-50 transition-all font-[500] text-slate-900"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Main Grid Engine */}
      <section className="py-8 px-6 lg:px-12 relative z-10">
        <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-8">
          
          {/* Left Sidebar Filters */}
          <aside className="w-full lg:w-[260px] shrink-0">
            <div className="lg:sticky lg:top-[200px] bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
               <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
                 <h3 className="text-[13px] font-[700] tracking-wide text-slate-900">Filter Matrix</h3>
                 {selectedFilters.length > 0 && (
                   <button onClick={() => setSelectedFilters([])} className="text-[11px] font-[600] text-[#0066FF] hover:underline uppercase tracking-wide">
                     Clear
                   </button>
                 )}
               </div>

               <div className="space-y-4">
                 {allCategories.map(cat => (
                   <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                      <div className="relative flex items-center justify-center shrink-0">
                        <input 
                          type="checkbox" 
                          checked={selectedFilters.includes(cat)}
                          onChange={() => toggleFilter(cat)}
                          className="peer appearance-none w-5 h-5 rounded border-2 border-slate-300 bg-white checked:bg-[#0066FF] checked:border-[#0066FF] transition-all cursor-pointer shadow-sm" 
                        />
                        <svg className="absolute w-3 h-3 text-white pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <span className={`text-[14px] font-[500] transition-colors ${selectedFilters.includes(cat) ? 'text-slate-900 font-[600]' : 'text-slate-600 group-hover:text-slate-900'}`}>
                        {cat}
                      </span>
                   </label>
                 ))}
               </div>
            </div>
          </aside>

          {/* Catalog Array */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-32 rounded-2xl border-2 border-slate-200 border-dashed bg-white">
                <div className="text-[20px] font-[700] text-slate-900 mb-2 tracking-tight">NULL RESPONSE</div>
                <p className="text-[14px] text-slate-500 font-[400]">Reconfigure query parameters to locate valid objects.</p>
              </div>
            ) : (
              <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                <AnimatePresence mode="popLayout">
                  {filteredProducts.map(product => (
                    <motion.div
                      layout
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                      key={product.id}
                      className="bg-white rounded-2xl border border-slate-200 hover:border-[#0066FF]/30 shadow-sm hover:shadow-[0_20px_40px_rgba(0,102,255,0.08)] hover:-translate-y-1 transition-all duration-300 group flex flex-col overflow-hidden"
                    >
                      <div onClick={() => setSelectedProduct(product)} className="cursor-pointer h-full flex flex-col">
                        
                        {/* Soft Image Box */}
                        <div className="aspect-[4/3] bg-slate-50 relative overflow-hidden p-8 flex flex-col items-center justify-center border-b border-slate-100 group-hover:bg-blue-50/50 transition-colors">
                          {product.img ? (
                            <img src={product.img} alt={product.name} className="w-full h-full object-contain filter drop-shadow-xl group-hover:scale-110 transition-transform duration-500" />
                          ) : (
                            <div className="text-slate-200 font-[800] text-[20px] tracking-tight uppercase">{product.brand}</div>
                          )}
                          <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-[600] text-slate-700 tracking-wide border border-slate-200 shadow-sm">
                            {product.category}
                          </div>
                        </div>

                        {/* Content Box */}
                        <div className="p-6 flex-1 flex flex-col bg-white">
                          <h3 className="text-[16px] font-[700] text-slate-900 leading-tight mb-2 tracking-tight">{product.name}</h3>
                          <div className="text-[12px] font-[600] text-[#0066FF] mb-6 tracking-wide">{product.brand}</div>
                          
                          <div className="mt-auto flex flex-wrap gap-2">
                            {product.tags.slice(0, 3).map(tag => (
                              <span key={tag} className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-[11px] font-[500] group-hover:bg-blue-50 group-hover:text-[#0066FF] transition-colors">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            )}
          </div>

        </div>
      </section>

      {selectedProduct && (
        <CatalogModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}
    </main>
  );
}
