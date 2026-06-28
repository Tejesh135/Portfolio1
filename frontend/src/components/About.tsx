"use client";

import { useEffect, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { GraduationCap, Briefcase, Code2, Award, Zap, Activity } from "lucide-react";
import { useRef } from "react";

function AnimatedCounter({ value, duration = 2 }: { value: number, duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let startTimestamp: number;
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
        setCount(Math.floor(progress * value));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        } else {
          setCount(value);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [isInView, value, duration]);

  return <span ref={ref}>{count}</span>;
}

export function About() {
  const stats = [
    { title: "Completed Projects", value: "15", icon: <Briefcase className="w-5 h-5 text-blue-400" />, suffix: "+" },
    { title: "Certifications", value: "6", icon: <Award className="w-5 h-5 text-purple-400" />, suffix: "+" },
    { title: "Professional Experiences", value: "2", icon: <Code2 className="w-5 h-5 text-green-400" />, suffix: "" },
    { title: "Tech Stack", value: "AI & ML", icon: <Activity className="w-5 h-5 text-red-400" />, suffix: "" }
  ];

  return (
    <section id="about" className="py-32 relative w-full flex flex-col items-center justify-center px-6 lg:px-8 bg-black">
      <div className="max-w-7xl w-full">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-sm font-medium tracking-widest text-blue-500 uppercase mb-3">01. About Me</h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
            Turning Data into <br className="hidden md:block"/> Intelligent Solutions.
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column - Bio & Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-8 text-gray-400 text-lg leading-relaxed font-light"
          >
            <div className="glass p-8 rounded-3xl border border-white/5 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <h4 className="text-xl font-medium text-white mb-4 flex items-center gap-3">
                <Zap className="text-yellow-400 w-5 h-5" /> The Story
              </h4>
              <p>
                My interest in Artificial Intelligence started with a curiosity about how data can solve real-world problems. Through academic projects, internships at Rubixee, and intensive training at Datamites, I developed practical experience building machine learning models, AI applications, and end-to-end data solutions. Today, I focus on creating intelligent systems that combine strong engineering with measurable business impact.
              </p>
            </div>

            <div className="glass p-8 rounded-3xl border border-white/5 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <h4 className="text-xl font-medium text-white mb-4 flex items-center gap-3">
                <GraduationCap className="text-purple-400 w-5 h-5" /> Career Goal & Motivation
              </h4>
              <p>
                My goal is to build production-ready AI applications that transform complex data into practical solutions. I aim to contribute to teams developing machine learning, generative AI, and scalable software while continuously improving my engineering and problem-solving skills.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Stats & Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, idx) => (
              <div 
                key={idx}
                className="glass p-6 rounded-3xl border border-white/5 hover:border-blue-500/30 transition-colors duration-300 flex flex-col justify-center items-center text-center group"
              >
                <div className="p-4 rounded-full bg-white/5 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2 tracking-tighter flex items-center justify-center text-center">
                  {isNaN(Number(stat.value)) ? (
                    <span>{stat.value}</span>
                  ) : (
                    <AnimatedCounter value={Number(stat.value)} />
                  )}
                  <span className="text-blue-500">{stat.suffix}</span>
                </div>
                <div className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                  {stat.title}
                </div>
              </div>
            ))}
            
            <div className="col-span-2 glass p-8 rounded-3xl border border-white/5 bg-gradient-to-br from-blue-900/20 to-black relative overflow-hidden mt-2">
              <h4 className="text-xl font-medium text-white mb-2">Current Status</h4>
              <div className="flex items-center gap-3">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <p className="text-gray-300">Interning at Rubixee & Training at Datamites</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
