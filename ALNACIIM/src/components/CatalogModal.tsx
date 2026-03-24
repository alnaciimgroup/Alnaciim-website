"use client";

import { Product } from "@/data/catalog";
import { X, CheckCircle2 } from "lucide-react";
import { useEffect, useState } from "react";

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
    <div className="fixed inset-0 z-[300] flex items-start justify-center p-6 pb-20 overflow-y-auto">
      <div className="fixed inset-0 bg-[#0b0d14]/60 backdrop-blur-[10px] transition-opacity" onClick={onClose}></div>
      
      <div className="relative bg-white rounded-[18px] max-w-[820px] w-full mt-8 sm:mt-12 overflow-hidden shadow-[0_40px_100px_rgba(11,13,20,0.28)] animate-in fade-in slide-in-from-bottom-5 duration-200 flex flex-col">
        
        {/* Header */}
        <div className="h-[240px] relative shrink-0">
          <img src={product.img} alt={product.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b0d14]/70 via-[#0b0d14]/15 to-transparent"></div>
          
          <div className="absolute bottom-0 left-0 right-0 p-[22px] sm:px-[28px]">
            <div className="inline-block text-[9.5px] font-[700] tracking-[1.5px] uppercase px-[11px] py-[4px] rounded-[20px] bg-white/20 text-white mb-[9px] backdrop-blur-[6px]">
              {product.category}
            </div>
            <h2 className="font-['Syne'] text-[17px] sm:text-[24px] font-[800] text-white leading-[1.2] tracking-[-0.4px]">
              {product.name}
            </h2>
            <div className="font-mono text-[10.5px] text-white/50 mt-[5px]">
              {product.brand}
            </div>
          </div>
          
          <button 
            onClick={onClose}
            className="absolute top-[13px] right-[13px] w-[34px] h-[34px] rounded-[9px] bg-white/20 hover:bg-white/30 text-white flex items-center justify-center backdrop-blur-[4px] transition-colors"
          >
            <X size={15} strokeWidth={2} />
          </button>
        </div>

        {/* Body Matrix */}
        <div className="flex flex-col md:flex-row bg-white min-h-[420px]">
          
          {/* Left: Info */}
          <div className="w-full md:w-[60%] p-[22px] sm:p-[26px] border-b md:border-b-0 md:border-r border-[#bdr]">
            
            <div className="mb-[24px]">
              <div className="text-[9.5px] font-[700] tracking-[2px] uppercase text-[#8890a8] mb-[11px] flex items-center gap-[9px]">
                Overview <span className="flex-1 h-[1px] bg-[#dde2f0]"></span>
              </div>
              <p className="text-[13px] text-[#222538] leading-[1.78]">
                {product.desc}
              </p>
            </div>

            <div className="mb-[24px]">
              <div className="text-[9.5px] font-[700] tracking-[2px] uppercase text-[#8890a8] mb-[11px] flex items-center gap-[9px]">
                Specifications <span className="flex-1 h-[1px] bg-[#dde2f0]"></span>
              </div>
              <table className="w-full border-collapse">
                <tbody>
                  {product.specs.map(([k, v], i) => (
                    <tr key={i} className="border-b last:border-0 border-[#dde2f0]">
                      <td className="py-[8px] pr-[13px] w-[110px] text-[12px] text-[#8890a8] align-top">{k}</td>
                      <td className="py-[8px] text-[11.5px] text-[#222538] font-[500] font-mono align-top">{v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div>
              <div className="text-[9.5px] font-[700] tracking-[2px] uppercase text-[#8890a8] mb-[11px] flex items-center gap-[9px]">
                Tags <span className="flex-1 h-[1px] bg-[#dde2f0]"></span>
              </div>
              <div className="flex flex-wrap gap-[5px]">
                {product.tags.map(t => (
                  <span key={t} className="text-[10px] px-[9px] py-[3px] rounded-[20px] bg-[#f5f7fc] border border-[#dde2f0] text-[#4e5570] font-mono">
                    {t}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Right: Quote Form */}
          <div className="w-full md:w-[40%] p-[22px] bg-[#f5f7fc] flex flex-col relative">
            {!submitted ? (
              <div className="flex-1 flex flex-col">
                <h3 className="font-['Syne'] text-[15px] font-[700] text-[#0b0d14] mb-[4px]">Request a Quote</h3>
                <p className="text-[12.5px] text-[#4e5570] leading-[1.6] mb-[18px]">Tell us your requirement and we'll respond within 24 hours.</p>
                
                <div className="space-y-[12px] shrink-0">
                  <div>
                    <label className="text-[10.5px] font-[600] text-[#4e5570] tracking-[0.5px] block mb-[4px]">Full Name *</label>
                    <input type="text" placeholder="Your name" className="w-[100%] px-[11px] py-[8px] border-[1.5px] border-[#c4cce0] rounded-[7px] text-[12.5px] font-sans text-[#0b0d14] bg-white outline-none focus:border-[#1152d4] transition-colors" />
                  </div>
                  <div>
                    <label className="text-[10.5px] font-[600] text-[#4e5570] tracking-[0.5px] block mb-[4px]">Email *</label>
                    <input type="email" placeholder="email@company.com" className="w-[100%] px-[11px] py-[8px] border-[1.5px] border-[#c4cce0] rounded-[7px] text-[12.5px] font-sans text-[#0b0d14] bg-white outline-none focus:border-[#1152d4] transition-colors" />
                  </div>
                  <div>
                    <label className="text-[10.5px] font-[600] text-[#4e5570] tracking-[0.5px] block mb-[4px]">Phone / WhatsApp</label>
                    <input type="tel" placeholder="+252 ..." className="w-[100%] px-[11px] py-[8px] border-[1.5px] border-[#c4cce0] rounded-[7px] text-[12.5px] font-sans text-[#0b0d14] bg-white outline-none focus:border-[#1152d4] transition-colors" />
                  </div>
                  <div>
                    <label className="text-[10.5px] font-[600] text-[#4e5570] tracking-[0.5px] block mb-[4px]">Quantity / Scale</label>
                    <select className="w-[100%] px-[11px] py-[8px] border-[1.5px] border-[#c4cce0] rounded-[7px] text-[12.5px] font-sans text-[#0b0d14] bg-white outline-none focus:border-[#1152d4] transition-colors cursor-pointer appearance-none bg-[url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%3E%3Cpath%20d%3D%22M2%204l4%204%204-4%22%20stroke%3D%22%238890a8%22%20stroke-width%3D%221.5%22%20fill%3D%22none%22%20stroke-linecap%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[position:right_11px_center]">
                      <option value="">Select…</option>
                      <option>1 unit</option>
                      <option>2–5 units</option>
                      <option>5–20 units</option>
                      <option>Bulk / project order</option>
                      <option>Spare parts order</option>
                      <option>Consultation only</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-[10.5px] font-[600] text-[#4e5570] tracking-[0.5px] block mb-[4px]">Notes</label>
                    <textarea placeholder="Application, capacity, site conditions..." className="w-[100%] px-[11px] py-[8px] border-[1.5px] border-[#c4cce0] rounded-[7px] text-[12.5px] font-sans text-[#0b0d14] bg-white outline-none focus:border-[#1152d4] transition-colors min-h-[68px] leading-[1.6] resize-y"></textarea>
                  </div>
                </div>

                <div className="mt-[3px] shrink-0">
                  <button onClick={() => setSubmitted(true)} className="w-full py-[11px] bg-[#1152d4] hover:bg-[#0838b0] text-white font-[600] text-[13px] font-['Syne'] rounded-[8px] transition-colors">
                    Send Quote Request →
                  </button>
                  <div className="text-[10.5px] text-[#8890a8] text-center mt-[7px] leading-[1.5]">We respond within 24 hours.</div>
                </div>
              </div>
            ) : (
              <div className="absolute inset-0 flex flex-col items-center justify-center px-[14px] py-[28px] text-center bg-[#f5f7fc] animate-in fade-in duration-300">
                <CheckCircle2 size={36} className="text-[#0b8850] mb-[10px]" />
                <h4 className="font-['Syne'] text-[15px] font-[700] text-[#0b0d14] mb-[7px]">Quote request sent!</h4>
                <p className="text-[12.5px] text-[#4e5570] leading-[1.6]">Our team will contact you within 24 hours.</p>
              </div>
            )}
          </div>
          
        </div>
      </div>
    </div>
  );
}
