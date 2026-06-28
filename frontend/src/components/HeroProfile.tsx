"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { MouseEvent } from "react";

export function HeroProfile() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);
  
  const lightX = useTransform(x, [-100, 100], [-20, 20]);
  const lightY = useTransform(y, [-100, 100], [-20, 20]);

  function handleMouseMove(event: MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
      animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
      transition={{ duration: 1.2, delay: 0.4 }}
      className="flex-1 hidden lg:flex items-center justify-center relative w-full h-full perspective-[1000px]"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative w-80 h-80 rounded-full flex items-center justify-center transition-transform duration-100 ease-out"
      >
        {/* Dynamic back light */}
        <motion.div 
          className="absolute inset-0 rounded-full bg-blue-500/30 blur-[40px] -z-10"
          style={{ x: lightX, y: lightY }}
        />
        
        {/* Floating animation wrapper */}
        <motion.div
          animate={{ y: [-10, 10, -10] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          className="relative w-full h-full rounded-full"
        >
          <img 
            src="/Tejesh_photo.jpg" 
            alt="Tejesh" 
            className="w-full h-full object-cover rounded-full z-10 border border-white/10 shadow-[0_0_50px_rgba(59,130,246,0.3)] transition-all duration-700 ease-in-out hover:shadow-[0_0_80px_rgba(59,130,246,0.6)]"
            style={{ transform: "translateZ(50px)" }}
          />
          
          {/* Surface dynamic highlight */}
          <motion.div 
            className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/0 via-white/10 to-transparent pointer-events-none mix-blend-overlay"
            style={{ x: lightX, y: lightY, transform: "translateZ(51px)" }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
