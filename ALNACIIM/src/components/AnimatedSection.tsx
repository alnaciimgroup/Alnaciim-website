"use client";
import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

export default function AnimatedSection({ 
  children, 
  delay = 0,
  className = ""
}: { 
  children: ReactNode, 
  delay?: number,
  className?: string
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 40 }}
      whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ 
        duration: 0.8, 
        delay, 
        ease: "easeOut" 
      }}
    >
      {children}
    </motion.div>
  );
}
