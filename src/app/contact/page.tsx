"use client";

import { motion } from "framer-motion";
import { Phone, MapPin, Globe, Clock, ArrowRight, Activity, ShieldCheck } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <div className="bg-slate-50 min-h-screen pt-40 pb-24 lg:pt-56 lg:pb-32 selection:bg-blue-600 selection:text-white overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-600 blur-[100px] rounded-full mix-blend-multiply" />
      </div>
      
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-24 relative z-10 text-center flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/80 backdrop-blur-md border border-slate-200/60 shadow-sm mb-12"
        >
          <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
          <span className="text-sm font-medium text-slate-700 tracking-wide uppercase">SUP-01 // Global Engineering Support</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl md:text-8xl lg:text-[80px] font-bold text-slate-900 leading-[1.05] tracking-tight mb-12 max-w-5xl mx-auto uppercase"
        >
          How can we help <span className="text-blue-600 italic font-light pr-4">power your vision?</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed"
        >
          Whether you have a technical inquiry about our engineering solutions or need high-capacity infrastructure support, our team is ready to deploy.
        </motion.p>
      </section>

      {/* Contact Grid */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-[1fr_0.4fr] gap-8 items-start max-w-6xl mx-auto">
          
          {/* Form Container */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white border border-slate-200/60 rounded-[3rem] shadow-2xl p-8 md:p-16"
          >
            <ContactForm />
          </motion.div>

          {/* Sidebar Support */}
          <div className="space-y-6">
            {[
              {
                icon: <Phone size={24} />,
                title: "Direct Line",
                value: "+252 5 733 333",
                sub: "Technical Support"
              },
              {
                icon: <Globe size={24} />,
                title: "Regional HQ",
                value: "Garowe, Puntland",
                sub: "Main Operations"
              },
              {
                icon: <Clock size={24} />,
                title: "Availability",
                value: "08:00 - 17:00",
                sub: "Sat - Thu"
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 + 0.4 }}
                className="bg-white border border-slate-200/60 p-8 rounded-[2.5rem] shadow-xl hover:-translate-y-2 transition-all duration-500 group flex items-start gap-6"
              >
                <div className="w-16 h-16 shrink-0 rounded-full bg-slate-50 border border-slate-100 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-sm">
                  {item.icon}
                </div>
                <div className="flex flex-col pt-1">
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">{item.title}</div>
                  <div className="text-xl font-bold text-slate-900 tracking-tight uppercase group-hover:text-blue-600 transition-colors mb-1">{item.value}</div>
                  <div className="text-sm text-slate-500 font-medium">{item.sub}</div>
                </div>
              </motion.div>
            ))}
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
              className="bg-blue-600 p-10 rounded-[2.5rem] text-white shadow-xl shadow-blue-600/20 group cursor-default relative overflow-hidden"
            >
               <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-[40px] pointer-events-none" />
               <div className="relative z-10 flex flex-col items-start text-left">
                 <ShieldCheck size={36} className="mb-6 text-blue-200 group-hover:scale-110 transition-transform duration-500" />
                 <div className="text-[10px] font-bold text-blue-200 uppercase tracking-widest mb-2">Security Note</div>
                 <p className="text-base font-light leading-relaxed">
                   All technical inquiries are handled through our encrypted Alnaciim Energy node.
                 </p>
               </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* Trust Testimonial */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 mt-32">
        <div className="py-24 border-y border-slate-200/60 text-center max-w-4xl mx-auto relative">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-2xl md:text-4xl italic text-slate-400 font-light leading-relaxed relative z-10"
          >
            "Reliability isn't just about the systems we build—it's about the technical partnership we maintain with our clients."
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-12 flex items-center justify-center gap-6 relative z-10"
          >
            <div className="h-[1px] w-16 bg-blue-600/20" />
            <p className="text-[10px] font-bold text-slate-900 uppercase tracking-widest">Alnaciim Engineering Team</p>
            <div className="h-[1px] w-16 bg-blue-600/20" />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
