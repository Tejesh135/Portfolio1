"use client";

import { motion } from "framer-motion";

export function HeroProfile() {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.0, delay: 0.4 }}
      className="flex-1 hidden md:flex items-center justify-center relative w-full h-full"
    >
      {/* Blueprint container grid */}
      <div className="relative p-2 border border-white/5 bg-black/40">
        {/* Technical drafting crosshair corners */}
        <span className="absolute -top-1.5 -left-1.5 w-4 h-[1px] bg-white/20" />
        <span className="absolute -top-1.5 -left-1.5 w-[1px] h-4 bg-white/20" />
        
        <span className="absolute -top-1.5 -right-1.5 w-4 h-[1px] bg-white/20" />
        <span className="absolute -top-1.5 -right-1.5 w-[1px] h-4 bg-white/20" />
        
        <span className="absolute -bottom-1.5 -left-1.5 w-4 h-[1px] bg-white/20" />
        <span className="absolute -bottom-1.5 -left-1.5 w-[1px] h-4 bg-white/20" />
        
        <span className="absolute -bottom-1.5 -right-1.5 w-4 h-[1px] bg-white/20" />
        <span className="absolute -bottom-1.5 -right-1.5 w-[1px] h-4 bg-white/20" />

        {/* Small drafting coordinate tags */}
        <span className="absolute -top-5 left-0 font-mono text-[9px] text-gray-600 uppercase tracking-widest">[GRID_SEC_A]</span>
        <span className="absolute -bottom-5 right-0 font-mono text-[9px] text-gray-600 uppercase tracking-widest">[RE_2026]</span>

        {/* Profile Image container */}
        <div className="w-56 h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 overflow-hidden bg-neutral-900 border border-white/10 relative">
          <img 
            src="/Tejesh_photo.jpg" 
            alt="Tejesh Poola" 
            className="w-full h-full object-cover hover:scale-102 transition-transform duration-500 ease-in-out"
          />
        </div>
      </div>
    </motion.div>
  );
}
