"use client";

import { motion } from "framer-motion";
import { certs } from "./Certificates";

export function About() {
  return (
    <section id="about" className="py-24 relative w-full flex flex-col items-center justify-center px-6 lg:px-8 bg-black">
      <div className="max-w-7xl w-full">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 border-b border-white/5 pb-6"
        >
          <span className="text-xs font-mono text-gray-500 uppercase tracking-widest block mb-2">[ 01 / PROFILE ]</span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white uppercase leading-none">
            ENGINEERING MANIFESTO
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column - The Editorial Story */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 flex flex-col gap-10 text-gray-300 font-normal"
          >
            <div>
              <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest block mb-2">[ Who I Am ]</span>
              <p className="text-gray-100 text-base md:text-lg leading-relaxed font-normal">
                I am a technical engineer specializing in building clean, robust Machine Learning pipelines and enterprise Generative AI workflows. Currently interning at <span className="text-white font-medium">Rubixee</span> and undergoing intensive specialization training at <span className="text-white font-medium">Datamites</span>, I bridge the gap between heavy data architectures and practical business application.
              </p>
            </div>

            <div>
              <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest block mb-2">[ How I Think ]</span>
              <p className="text-gray-100 text-base md:text-lg leading-relaxed font-normal">
                I believe that AI should not just exist in notebooks, but be engineered as a scalable, reliable product. I focus on model optimization, pipeline integrity, clean data mapping, and precise system boundaries. I value depth over visual noise and clean code over trendy templates.
              </p>
            </div>

            <div>
              <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest block mb-2">[ Where I&apos;m Going ]</span>
              <p className="text-gray-100 text-base md:text-lg leading-relaxed font-normal">
                I am aiming to contribute to technical engineering teams developing state-of-the-art predictive models, multi-agent AI ecosystems, and cloud-native machine learning pipelines. My focus is on continuously scaling model efficiency and engineering highly reliable software architectures.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Factual Technical Grid */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 border border-white/5 bg-black/40 p-8 flex flex-col justify-between relative min-h-[350px]"
          >
            {/* Technical drafting crosshair corners */}
            <span className="absolute -top-1 -left-1 w-3 h-[1px] bg-white/20" />
            <span className="absolute -top-1 -left-1 w-[1px] h-3 bg-white/20" />
            
            <span className="absolute -top-1 -right-1 w-3 h-[1px] bg-white/20" />
            <span className="absolute -top-1 -right-1 w-[1px] h-3 bg-white/20" />
            
            <span className="absolute -bottom-1 -left-1 w-3 h-[1px] bg-white/20" />
            <span className="absolute -bottom-1 -left-1 w-[1px] h-3 bg-white/20" />
            
            <span className="absolute -bottom-1 -right-1 w-3 h-[1px] bg-white/20" />
            <span className="absolute -bottom-1 -right-1 w-[1px] h-3 bg-white/20" />

            <div className="space-y-8">
              <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest block">[ Technical Diagnostics ]</span>

              <div className="grid grid-cols-2 gap-x-8 gap-y-10">
                <div>
                  <span className="text-4xl font-bold tracking-tight text-white block">15+</span>
                  <span className="text-[10px] font-mono text-gray-500 uppercase tracking-wider">Completed Projects</span>
                </div>
                <div>
                  <span className="text-4xl font-bold tracking-tight text-white block">{certs.length}</span>
                  <span className="text-[10px] font-mono text-gray-500 uppercase tracking-wider">Verified Credentials</span>
                </div>
                <div>
                  <span className="text-4xl font-bold tracking-tight text-white block">2</span>
                  <span className="text-[10px] font-mono text-gray-500 uppercase tracking-wider">Professional Experiences</span>
                </div>
                <div>
                  <span className="text-4xl font-bold tracking-tight text-white block">AI / ML</span>
                  <span className="text-[10px] font-mono text-gray-500 uppercase tracking-wider">Primary Specialization</span>
                </div>
              </div>
            </div>

            <div className="border-t border-white/5 pt-8 mt-12">
              <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest block mb-3">[ Current Deployment ]</span>
              <div className="flex items-center gap-2.5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">
                  Interning at Rubixee &middot; Training at Datamites
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
