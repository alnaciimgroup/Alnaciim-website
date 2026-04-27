"use client";

import { motion } from "framer-motion";
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
        <div className="max-w-3xl mx-auto">
          
          {/* Form Container */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white border border-slate-200/60 rounded-[3rem] shadow-2xl p-8 md:p-16"
          >
            <ContactForm />
          </motion.div>

        </div>
      </section>
    </div>
  );
}
