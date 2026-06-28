"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { MouseEvent } from "react";

const certs = [
  {
    title: "AWS Certified Machine Learning – Specialty",
    issuer: "Amazon Web Services",
    date: "2025",
    image: "/badges/aws-certified-machine-learning-engineer-associate.png"
  },
  {
    title: "AWS Certified AI Practitioner",
    issuer: "Amazon Web Services",
    date: "2025",
    image: "/badges/aws-certified-ai-practitioner.png"
  },
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2025",
    image: "/badges/aws-certified-cloud-practitioner.png"
  },
  {
    title: "Google Data Analytics Professional",
    issuer: "Google",
    date: "2026",
    image: "/badges/google-data-analytics-professional-certificate-v-3.png"
  },
  {
    title: "SAP Certified Data Analyst",
    issuer: "SAP",
    date: "2026",
    image: "/badges/sap-certified-data-analyst-sap-analytics-cloud.png"
  },
  {
    title: "Pearson MePro Level 10 Expert",
    issuer: "Pearson",
    date: "2024",
    image: "/badges/pearson-mepro-level-10-expert.png"
  }
];

function TiltCard({ cert, index }: { cert: typeof certs[0], index: number }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={{ perspective: 1000 }}
      className="h-full"
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="glass p-8 rounded-3xl flex flex-col items-center text-center border border-white/5 hover:border-yellow-400/30 transition-colors duration-500 cursor-pointer relative overflow-hidden group h-full"
      >
        <div 
          className="absolute inset-0 bg-gradient-to-tr from-yellow-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
          style={{ transform: "translateZ(0px)" }}
        />
        
        <div 
          className="w-32 h-32 flex items-center justify-center mb-6 relative"
          style={{ transform: "translateZ(50px)" }}
        >
          <Image src={cert.image} alt={cert.title} fill className="object-contain drop-shadow-[0_0_15px_rgba(250,204,21,0.2)]" />
        </div>
        
        <div style={{ transform: "translateZ(30px)" }}>
          <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>
          <p className="text-gray-400 font-medium text-sm">{cert.issuer}</p>
          <p className="text-xs text-yellow-500/80 mt-4 font-semibold tracking-widest">{cert.date}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Certificates() {
  return (
    <section id="certificates" className="py-24 relative w-full flex flex-col items-center justify-center px-6 lg:px-8 bg-black">
      <div className="max-w-7xl w-full">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="text-sm font-medium tracking-widest text-yellow-500 uppercase mb-3">05. Validations</h2>
          <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Certifications & Badges
          </h3>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light">
            Continuous learning and validation of skills across Cloud, Data, and AI platforms.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certs.map((cert, index) => (
            <TiltCard key={index} cert={cert} index={index} />
          ))}
        </div>
        
      </div>
    </section>
  );
}
