"use client";
import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Droplet, Snowflake, Truck } from "lucide-react";
import Link from "next/link";

export default function HorizontalScrollSequence() {
  const targetRef = useRef<HTMLDivElement>(null);
  
  // Track viewport to disable scroll-jack on mobile
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Transform vertical scroll into horizontal movement (Desktop only)
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  const content = [
    {
      id: "hero",
      title: "Crystal Clear.",
      subtitle: "The Purest Water in Hargeisa.",
      desc: "An architectural approach to hydration. Delivered directly to your doorstep.",
      image: "https://images.unsplash.com/photo-1548846399-5567bbed44cd?q=80&w=2940&auto=format&fit=crop",
      isHero: true
    },
    {
      id: "bottles",
      title: "10k Units/Hr.",
      subtitle: "Unmatched Bottling Capacity.",
      desc: "Our facility processes, purifies, and bottles over 10,000 units every single hour using multi-stage reverse osmosis.",
      image: "https://images.unsplash.com/photo-1548846399-5567bbed44cd?q=80&w=2940&auto=format&fit=crop",
      icon: <Droplet size={32} />
    },
    {
      id: "ice",
      title: "Industrial Ice.",
      subtitle: "100% RO Purified Assembly.",
      desc: "Massive scale ice blocks and commercial cubes dedicated to the hospitality and logistics sectors.",
      image: "https://images.unsplash.com/photo-1543301385-bd71be9b9356?q=80&w=2940&auto=format&fit=crop",
      icon: <Snowflake size={32} />
    },
    {
      id: "logistics",
      title: "Fleet Dispatch.",
      subtitle: "24/7 Logistics Network.",
      desc: "A massive distribution fleet guarantees your bulk deliveries arrive unconditionally.",
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=2940&auto=format&fit=crop",
      icon: <Truck size={32} />
    }
  ];

  if (isMobile) {
    // Mobile Fallback: Standard Vertical Flow
    return (
      <div className="flex flex-col gap-12 py-12 px-6">
        {content.map((slide) => (
          <div key={slide.id} className="min-h-[70vh] flex flex-col justify-center relative">
            <h2 className="text-[48px] font-['Syne'] font-[800] text-[#0b0d14] leading-[1.1] tracking-[-2px] mb-2">{slide.title}</h2>
            <h3 className="text-[#1152d4] font-bold tracking-[1px] uppercase text-[12px] mb-4">{slide.subtitle}</h3>
            <p className="text-[#4e5570] text-[16px] mb-8">{slide.desc}</p>
            <div className="w-full h-[40vh] rounded-[24px] overflow-hidden relative">
              <img src={slide.image} className="w-full h-full object-cover" alt={slide.title} />
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <section ref={targetRef} className="relative h-[400vh] bg-white">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-0 w-[400vw]">
          
          {content.map((slide, index) => (
            <div key={slide.id} className="w-screen h-screen flex items-center justify-center relative px-24">
              
              {/* Massive Slide Content */}
              <div className="w-full max-w-[1400px] flex items-center justify-between gap-24 h-[70vh]">
                
                {/* Left Typography Side */}
                <div className="w-1/2 flex flex-col justify-center h-full pr-12 relative z-10">
                  <div className="overflow-hidden">
                     <motion.h2 
                       initial={{ opacity: 0, y: 100 }}
                       whileInView={{ opacity: 1, y: 0 }}
                       transition={{ duration: 0.8, ease: "easeOut" }}
                       className="text-[80px] xl:text-[110px] font-['Syne'] font-[800] text-[#0b0d14] leading-[0.95] tracking-[-4px] mb-6"
                     >
                       {slide.title}
                     </motion.h2>
                  </div>
                  <motion.h3 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="text-[#1152d4] font-[800] tracking-[4px] uppercase text-[16px] mb-6"
                  >
                    {slide.subtitle}
                  </motion.h3>
                  <motion.p 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="text-[#4e5570] text-[20px] xl:text-[24px] leading-[1.6] max-w-lg mb-12"
                  >
                    {slide.desc}
                  </motion.p>
                  
                  {slide.isHero && (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      <Link href="/order" className="inline-flex items-center gap-4 bg-[#1152d4] hover:bg-[#0b0d14] text-white px-10 py-5 rounded-full text-[16px] font-[700] transition-colors shadow-2xl">
                        Schedule Delivery <ArrowRight size={20} />
                      </Link>
                    </motion.div>
                  )}
                </div>

                {/* Right Image Side with Parallax */}
                <div className="w-1/2 h-full relative rounded-[40px] overflow-hidden shadow-[0_40px_100px_rgba(11,13,20,0.1)] border-[12px] border-[#f5f7fc]">
                  <motion.img 
                    initial={{ scale: 1.2 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    src={slide.image} 
                    alt={slide.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  {/* Glassmorphic Overlay for Icons */}
                  {!slide.isHero && slide.icon && (
                    <div className="absolute top-8 right-8 w-20 h-20 bg-white/30 backdrop-blur-xl rounded-full flex items-center justify-center text-white border border-white/50 shadow-2xl">
                      {slide.icon}
                    </div>
                  )}
                </div>
              </div>

              {/* Massive background watermark number */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[45vw] font-['Syne'] font-[900] text-[#f5f7fc] pointer-events-none z-[-1] tracking-tighter leading-none select-none">
                 0{index + 1}
              </div>

            </div>
          ))}

        </motion.div>
      </div>
    </section>
  );
}
