"use client";
import { Droplet, ArrowRight, ShieldCheck, Waves } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

interface AquaSafiProps {
  title?: string;
  feature1?: string;
  feature2?: string;
  image?: string;
}

export default function AquaSafi({
  title = "Aqua Safi Premium Water.",
  feature1 = "7-Stage Reverse Osmosis",
  feature2 = "pH Balanced (7.2 - 7.6)",
  image = "/images/aqua_safi_production.png"
}: AquaSafiProps) {
  const features = [
    { text: feature1, icon: <ShieldCheck size={16} /> },
    { text: feature2, icon: <Droplet size={16} /> },
    { text: "Mineralized Balance", icon: <Waves size={16} /> },
    { text: "BPA-Free Standards", icon: <ShieldCheck size={16} /> }
  ];

  return (
    <section className="py-32 bg-slate-50 border-y border-slate-200 relative overflow-hidden" id="aquasafi">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col"
          >
            <div className="flex items-center gap-3 mb-10">
              <div className="w-8 h-px bg-blue-600" />
              <span className="text-[11px] font-bold text-blue-600 tracking-widest uppercase">Consumer Product Division</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl lg:text-[80px] font-bold tracking-tight text-slate-900 mb-10 leading-[1] font-serif" style={{ fontFamily: "var(--font-playfair)" }}>
              {title}
            </h2>
            
            <p className="text-xl text-slate-600 mb-12 leading-relaxed max-w-xl font-light">
              Derived from Alnaciim's industrial-grade purification infrastructure, Aqua Safi delivers bottled perfection. We bring engineering precision to the consumer market.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-12 mb-16 border-l border-slate-200 pl-8">
              {features.map((feature, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="text-blue-600">
                    {feature.icon}
                  </div>
                  <span className="text-[11px] font-bold text-slate-900 uppercase tracking-widest">{feature.text}</span>
                </div>
              ))}
            </div>
            
            <Link href="/contact" className="px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white font-bold uppercase tracking-widest text-[11px] transition-all w-fit shadow-lg shadow-blue-600/10 flex items-center justify-center gap-4 group">
              Partner & Distribution <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
          
          {/* Aesthetic Product Showcase */}
          <motion.div 
            initial={{ opacity: 0, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative w-full aspect-[4/5] bg-white border border-slate-200 shadow-2xl overflow-hidden group"
          >
            <div className="w-full h-full overflow-hidden relative">
              <img 
                src={image} 
                alt="Aqua Safi Product" 
                className="absolute inset-0 w-full h-full object-cover scale-110 group-hover:scale-125 transition-transform duration-[3s] ease-out" 
              />
              <div className="absolute inset-0 bg-slate-900/5 transition-opacity duration-700 group-hover:opacity-0" />
              
              {/* Floating Stat */}
              <div className="absolute bottom-0 left-0 right-0 bg-white p-10 border-t border-slate-200 transform transition-transform duration-500">
                <p className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-4">Capacity Output</p>
                <p className="text-5xl font-bold text-slate-900 tracking-tight mb-4 font-serif" style={{ fontFamily: "var(--font-playfair)" }}>3.2M Units</p>
                <p className="text-[13px] text-slate-500 leading-relaxed font-light uppercase tracking-tight">High-volume distribution across regional hubs.</p>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}