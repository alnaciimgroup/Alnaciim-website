"use client";
import { Droplet, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

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
    feature1,
    feature2,
    "Remineralization Process",
    "BPA-Free Bottling"
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden" id="aquasafi">
      {/* Background aesthetics */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-white pointer-events-none"></div>
      
      <div className="max-w-[1160px] mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-[60px] items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 text-[#1152d4] text-[10px] font-bold tracking-[2px] uppercase mb-8 shadow-sm w-fit">
              <Droplet size={12} className="fill-current" />
              Consumer Product Division
            </div>
            
            <h2 className="font-['Syne'] text-[32px] md:text-[42px] font-[800] leading-[1.05] tracking-[-2px] text-[#0b0d14] mb-8">
              {title}
            </h2>
            
            <p className="text-[17px] text-[#4e5570] mb-10 leading-[1.6] max-w-lg">
              Derived directly from Alnaciim Water's industrial purification technology, {title} delivers bottled perfection. We bring our infrastructure-grade quality control straight to the consumer market.
            </p>
            
            <div className="grid grid-cols-2 gap-y-4 gap-x-8 mb-12">
              {features.map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#1152d4]/10 flex items-center justify-center text-[#1152d4] shrink-0">
                    <Droplet size={10} className="fill-current" />
                  </div>
                  <span className="text-[14px] font-[600] text-[#0b0d14]">{feature}</span>
                </div>
              ))}
            </div>
            
            <a href="#aquasafi-distributors" className="group bg-[#0b0d14] hover:bg-[#1152d4] text-white px-8 py-4 rounded-[12px] text-[14px] font-[600] font-['Syne'] transition-colors shadow-lg flex items-center justify-center gap-2 w-fit">
              Partner & Distribution <ExternalLink size={16} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </motion.div>
          
          {/* Aesthetic Product Showcase */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="relative h-[600px] rounded-[32px] bg-gradient-to-tr from-[#f0f3fa] to-blue-50 p-8 shadow-[inset_0_2px_20px_white,0_20px_50px_rgba(11,13,20,0.05)] border border-white flex flex-col justify-end overflow-hidden"
          >
            {/* The actual water bottle placeholder */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
               <motion.div 
                 animate={{ y: [0, -10, 0] }} 
                 transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                 className="w-48 h-[400px] bg-white/40 backdrop-blur-xl border border-white/60 rounded-[100px] shadow-[0_20px_50px_rgba(17,82,212,0.1)] flex items-center justify-center overflow-hidden p-2"
               >
                 <img src={image} alt="Aqua Safi Technical Origin" className="w-full h-full object-cover p-0" />
               </motion.div>
            </div>

            {/* Aesthetic water ripples */}
            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-[#1152d4]/10 to-transparent pointer-events-none"></div>

            <div className="relative z-20 bg-white/80 backdrop-blur-md p-6 rounded-[20px] shadow-sm border border-white max-w-sm">
              <p className="text-[11px] font-[700] tracking-[1.5px] uppercase text-[#8890a8] mb-1">Production</p>
              <p className="font-['Syne'] text-[24px] font-[800] text-[#0b0d14] tracking-tight leading-none mb-1">3.2M Units</p>
              <p className="text-[13px] text-[#4e5570] font-medium">Distributed annually across Hargeisa and surrounding areas.</p>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}