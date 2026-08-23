"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Certificates } from "@/components/Certificates";
import { Booking } from "@/components/Booking";
import { Footer } from "@/components/Footer";
import { Hero3D } from "@/components/Hero3D";
import { HeroProfile } from "@/components/HeroProfile";

export default function Home() {
  return (
    <main className="relative w-full overflow-hidden bg-black text-white selection:bg-blue-500/30">
      {/* Hero Section */}
      <section className="relative w-full min-h-screen lg:h-screen flex flex-col items-center justify-center overflow-hidden py-24 lg:py-0">
        <Hero3D />

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-center w-full max-w-7xl mx-auto px-6 lg:px-8 gap-12">
          
          <div className="flex-1 flex flex-col items-start justify-center text-left">
            <div className="flex flex-wrap gap-2.5 mb-6">
              <span className="text-[9px] font-mono text-green-400 border border-green-500/15 bg-green-500/5 px-2.5 py-1 uppercase tracking-wider">
                ● Available for opportunities
              </span>
              <span className="text-[9px] font-mono text-gray-500 border border-white/5 bg-white/5 px-2.5 py-1 uppercase tracking-wider">
                AI / ML
              </span>
              <span className="text-[9px] font-mono text-gray-500 border border-white/5 bg-white/5 px-2.5 py-1 uppercase tracking-wider">
                Generative AI (SAP)
              </span>
            </div>

            <motion.h1 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-6xl sm:text-7xl md:text-8xl font-black tracking-tighter mb-4 text-white uppercase leading-none"
            >
              TEJESH POOLA
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xs sm:text-sm font-mono text-blue-400 mb-6 tracking-widest uppercase border-l border-blue-500/30 pl-4 py-1.5"
            >
              AI/ML Developer &middot; Data Scientist &middot; Generative AI for Business (SAP)
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-gray-400 max-w-lg mb-8 text-sm md:text-base font-light leading-relaxed"
            >
              I build production-grade machine learning pipelines, scalable backend endpoints, and enterprise-focused generative AI architectures.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row flex-wrap gap-3 w-full sm:w-auto"
            >
              <a href="#projects" className="group flex items-center justify-center gap-2 px-5 py-3 bg-white text-black font-semibold rounded-md hover:bg-neutral-200 transition-all text-center text-xs uppercase tracking-wider">
                Explore Work
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#contact" className="flex items-center justify-center gap-2 px-5 py-3 border border-white/10 hover:border-white/20 text-white font-semibold rounded-md hover:bg-white/5 transition-all text-center text-xs uppercase tracking-wider">
                Book Interview
              </a>
              <a href="/Tejesh__Resume.pdf" download className="flex items-center justify-center gap-2 px-5 py-3 border border-white/10 hover:border-white/20 text-white font-semibold rounded-md hover:bg-white/5 transition-all text-center text-xs uppercase tracking-wider">
                Resume
              </a>
              <button 
                onClick={() => window.dispatchEvent(new Event('open-ai-chat'))}
                className="flex items-center justify-center gap-2 px-5 py-3 border border-blue-500/20 bg-blue-500/5 text-blue-400 font-semibold rounded-md hover:bg-blue-500/10 transition-all text-center text-xs uppercase tracking-wider"
              >
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
