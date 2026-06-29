"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, ArrowRight, BrainCircuit, Download, MessageSquare } from "lucide-react";

import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Certificates } from "@/components/Certificates";
import { Booking } from "@/components/Booking";
import { Footer } from "@/components/Footer";
import { Hero3D } from "@/components/Hero3D";
import { HeroProfile } from "@/components/HeroProfile";

const roles = [
  "Python Developer",
  "Data Scientist",
  "Data Analyst",
  "Machine Learning Engineer"
];


export default function Home() {
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="relative w-full overflow-hidden bg-black text-white selection:bg-blue-500/30">
      {/* Hero Section */}
      <section className="relative w-full h-[100vh] flex flex-col items-center justify-center overflow-hidden">
        <Hero3D />

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-center w-full max-w-7xl mx-auto px-6 lg:px-8 h-full gap-12 pt-20">
          
          <div className="flex-1 flex flex-col items-start justify-center text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 glass text-xs font-medium tracking-wide text-blue-400 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Available for new opportunities
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl md:text-3xl font-light text-gray-400 mb-2"
            >
              Hi, I'm
            </motion.h1>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter mb-4 text-white"
            >
              TEJESH
            </motion.h1>

            <div className="h-10 md:h-12 flex items-center mb-6 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.h2
                  key={currentRole}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-xl md:text-3xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300"
                >
                  {roles[currentRole]}
                </motion.h2>
              </AnimatePresence>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-gray-400 max-w-lg mb-10 text-lg font-light leading-relaxed"
            >
              I build data-driven solutions and scalable applications that solve real-world problems.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row flex-wrap gap-4 w-full"
            >
              <a href="#projects" className="group flex items-center justify-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-all text-center shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]">
                Explore My Work
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#contact" className="flex items-center justify-center gap-2 px-8 py-4 glass text-white font-semibold rounded-full hover:bg-white/10 transition-colors border border-white/20 text-center">
                Book Interview
              </a>
              <a href="/Tejesh__Resume.pdf" download className="flex items-center justify-center gap-2 px-8 py-4 glass text-white font-semibold rounded-full hover:bg-white/10 transition-colors border border-white/20 text-center">
                <Download className="w-4 h-4" />
                Resume
              </a>
              <button 
                onClick={() => window.dispatchEvent(new Event('open-ai-chat'))}
                className="flex items-center justify-center gap-2 px-8 py-4 bg-blue-600/20 text-blue-400 font-semibold rounded-full hover:bg-blue-600/30 transition-colors border border-blue-500/30 text-center shadow-[0_0_20px_rgba(59,130,246,0.2)]"
              >
                <BrainCircuit className="w-4 h-4" />
                Talk to AI
              </button>
            </motion.div>
          </div>

          <HeroProfile />

        </div>
      </section>

      {/* Main Sections */}
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Certificates />
      <Booking />
      
      <Footer />
    </main>
  );
}
