"use client";
import { motion } from "framer-motion";

interface FadeInSectionProps {
  children: React.ReactNode;
  className?: string;
  immediate?: boolean; // flag baru biar bisa pilih behavior
}

export default function FadeInSection({ children, className, immediate = false }: FadeInSectionProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={immediate ? { opacity: 1, y: 0 } : undefined} 
      whileInView={immediate ? undefined : { opacity: 1, y: 0 }}
      viewport={immediate ? undefined : { once: false, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
