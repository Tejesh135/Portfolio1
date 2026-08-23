"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ArrowRight } from "lucide-react";

interface Certificate {
  id: string;
  title: string;
  issuer: string;
  year: string;
  description: string;
  badge: string;
  certificate: string | null;
}

export const certs: Certificate[] = [
  {
    id: "aws-ml",
    title: "AWS Certified Machine Learning Engineer – Associate",
    issuer: "Amazon Web Services",
    year: "2025",
    description: "Validation of expertise in building, training, tuning, and deploying machine learning models on AWS for complex business use cases.",
    badge: "/badges/aws-certified-machine-learning-engineer-associate.png",
    certificate: "/certificates/aws-ml.png"
  },
  {
    id: "aws-ai",
    title: "AWS Certified AI Practitioner",
    issuer: "Amazon Web Services",
    year: "2025",
    description: "Proof of foundational understanding of artificial intelligence, machine learning concepts, and associated generative AI technologies on AWS.",
    badge: "/badges/aws-certified-ai-practitioner.png",
    certificate: "/certificates/aws-ai.png"
  },
  {
    id: "aws-cloud",
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    year: "2025",
    description: "Core cloud computing concepts, AWS services, security, architecture, pricing, and support models.",
    badge: "/badges/aws-certified-cloud-practitioner.png",
    certificate: "/certificates/aws-cloud.png"
  },
  {
    id: "sap-gen-ai",
    title: "SAP Certified - SAP Generative AI Developer",
    issuer: "SAP",
    year: "2026",
    description: "Professional certification focused on developing Generative AI solutions using SAP technologies, with an emphasis on foundation models, AI capabilities, and enterprise-focused Generative AI development.",
    badge: "/badges/sap-gen-ai-developer.png",
    certificate: "/certificates/sap-gen-ai-developer.jpg"
  },
  {
    id: "microsoft-azure-ai",
    title: "Microsoft Certified: Azure AI Apps and Agents Developer Associate",
    issuer: "Microsoft",
    year: "2026",
    description: "Professional certification validating skills in designing, building, and deploying AI solutions on Microsoft Azure, with an emphasis on creating intelligent agents, natural language processing, and integrating Azure OpenAI services.",
    badge: "/badges/microsoft.svg",
    certificate: "/certificates/microsoft-azure-ai.jpg"
  },
  {
    id: "iabac-data-science",
    title: "Data Science Foundation - IABAC",
    issuer: "IABAC",
    year: "2026",
    description: "Foundation certification covering core Data Science concepts including data analysis, statistical thinking, machine learning fundamentals, and transforming data into meaningful insights.",
    badge: "/badges/iabac.png",
    certificate: "/certificates/iabac-data-science.jpg"
  },
  {
    id: "google-analytics",
    title: "Google Data Analytics Professional",
    issuer: "Google",
    year: "2026",
    description: "Professional credential covering data cleaning, analysis, visualization, and programming with R and SQL for business intelligence.",
    badge: "/badges/google-data-analytics-professional-certificate-v-3.png",
    certificate: "/certificates/google-data-analytics.jpg"
  },
  {
    id: "sap-analytics",
    title: "SAP Certified Data Analyst",
    issuer: "SAP",
    year: "2026",
    description: "Validation of skills in business intelligence, data modeling, predictive analytics, and dashboard design using SAP Analytics Cloud.",
    badge: "/badges/sap-certified-data-analyst-sap-analytics-cloud.png",
    certificate: "/certificates/sap-data-analyst.jpg"
  },
  {
    id: "pearson-mepro",
    title: "Pearson MePro Level 10 Expert",
    issuer: "Pearson",
    year: "2024",
    description: "High-level English language proficiency credential validating advanced communication skills for global business environments.",
    badge: "/badges/pearson-mepro-level-10-expert.png",
    certificate: null
  }
];

export function Certificates() {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  // Background scroll lock
  useEffect(() => {
    if (selectedCert) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedCert]);

  // Escape key support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedCert(null);
      }
    };
    if (selectedCert) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedCert]);

  return (
    <section id="certificates" className="py-24 relative w-full flex flex-col items-center justify-center px-6 lg:px-8 bg-black">
      <div className="max-w-7xl w-full">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 border-b border-white/5 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <span className="text-xs font-mono text-gray-500 uppercase tracking-widest block mb-2">[ 05 / VALIDATIONS ]</span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white uppercase leading-none">
              CREDENTIAL ARCHIVE
            </h2>
          </div>
          <p className="text-gray-400 max-w-sm text-xs font-light leading-relaxed">
            Continuous validation of technical skills from Amazon Web Services, SAP, Microsoft, IABAC, and Google.
          </p>
        </motion.div>

        {/* Database List / Archive Row System */}
        <div className="flex flex-col border-b border-white/5">
          {certs.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.03 }}
              onClick={() => setSelectedCert(cert)}
              className="grid grid-cols-1 md:grid-cols-12 gap-6 py-8 md:py-10 border-t border-white/5 items-center hover:bg-white/[0.02] px-4 -mx-4 transition-all duration-200 cursor-pointer group"
            >
              {/* Col 1: Logo Badge */}
              <div className="md:col-span-2 flex items-center">
                <div className="w-16 h-16 rounded border border-white/10 bg-white flex items-center justify-center p-2 relative overflow-hidden group-hover:border-white/35 transition-colors">
                  <Image 
                    src={cert.badge} 
                    alt={`${cert.issuer} Badge`} 
                    fill
                    className="object-contain p-1.5"
                  />
                </div>
              </div>

              {/* Col 2: Title and Issuer */}
              <div className="md:col-span-4 flex flex-col gap-1">
                <h4 className="text-base md:text-lg font-bold text-white uppercase tracking-tight group-hover:text-blue-400 transition-colors">
                  {cert.title}
                </h4>
                <span className="text-xs font-mono text-gray-500 uppercase tracking-wider">
                  {cert.issuer} &middot; {cert.year}
                </span>
              </div>

              {/* Col 3: Description */}
              <div className="md:col-span-5">
                <p className="text-sm text-gray-300 leading-relaxed font-light pr-4">
                  {cert.description}
                </p>
              </div>

              {/* Col 4: Action */}
              <div className="md:col-span-1 flex md:justify-end items-center">
                <div className="inline-flex items-center gap-1.5 text-xs font-mono tracking-widest text-gray-500 uppercase group-hover:text-white transition-colors">
                  <span>VIEW</span>
                  <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox / Modal Redesigned */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 md:p-6 backdrop-blur-md cursor-zoom-out"
            role="dialog"
            aria-modal="true"
            aria-label="Certificate Viewer"
          >
            <motion.div
              initial={{ scale: 0.98, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.98, opacity: 0 }}
              transition={{ type: "tween", duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full flex flex-col items-center justify-center p-6 bg-[#0a0a0c] border border-white/10 rounded-sm cursor-default"
            >
              {/* Drafting blueprint crosshairs */}
              <span className="absolute -top-1.5 -left-1.5 w-4 h-[1px] bg-white/30" />
              <span className="absolute -top-1.5 -left-1.5 w-[1px] h-4 bg-white/30" />
              
              <span className="absolute -top-1.5 -right-1.5 w-4 h-[1px] bg-white/30" />
              <span className="absolute -top-1.5 -right-1.5 w-[1px] h-4 bg-white/30" />
              
              <span className="absolute -bottom-1.5 -left-1.5 w-4 h-[1px] bg-white/30" />
              <span className="absolute -bottom-1.5 -left-1.5 w-[1px] h-4 bg-white/30" />
              
              <span className="absolute -bottom-1.5 -right-1.5 w-4 h-[1px] bg-white/30" />
              <span className="absolute -bottom-1.5 -right-1.5 w-[1px] h-4 bg-white/30" />

              {/* Modal Header */}
              <div className="w-full flex items-start justify-between mb-6 pb-4 border-b border-white/5 text-white">
                <div>
                  <span className="text-[9px] font-mono text-blue-400 uppercase tracking-widest block mb-0.5">Credential Verification</span>
                  <h4 className="text-base md:text-lg font-bold pr-8 uppercase tracking-tight">{selectedCert.title}</h4>
                  <p className="text-[10px] font-mono text-gray-500 uppercase tracking-wider">{selectedCert.issuer} &middot; {selectedCert.year}</p>
                </div>
                <button 
                  onClick={() => setSelectedCert(null)}
                  className="p-1.5 border border-white/10 hover:border-white/30 text-white transition-colors shrink-0"
                  aria-label="Close details"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Certificate or Verification Detail */}
              {selectedCert.certificate ? (
                <div className="relative w-full max-h-[68vh] min-h-[30vh] flex items-center justify-center overflow-hidden border border-white/5 bg-black p-2">
                  <img 
                    src={selectedCert.certificate} 
                    alt={`${selectedCert.title} Certificate`}
                    className="max-w-full max-h-[64vh] object-contain shadow-2xl rounded-sm"
                  />
                </div>
              ) : (
                /* Pearson MePro Detail Card Redesigned */
                <div className="bg-black/50 border border-white/5 p-6 md:p-8 max-w-md w-full text-center space-y-6 relative overflow-hidden">
                  <div className="w-12 h-12 mx-auto relative bg-white/5 border border-white/10 flex items-center justify-center p-2 rounded">
                    <Image src={selectedCert.badge} alt={selectedCert.title} fill className="object-contain p-1.5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white uppercase tracking-tight mb-1">{selectedCert.title}</h4>
                    <span className="text-[9px] font-mono text-gray-500 uppercase tracking-widest block">{selectedCert.issuer} &middot; {selectedCert.year}</span>
                  </div>
                  <div className="border border-white/5 bg-white/2 p-5 text-left space-y-4 text-xs text-gray-300">
                    <p className="leading-relaxed font-light">{selectedCert.description}</p>
                    <div className="border-t border-white/5 pt-4 space-y-2 font-mono text-[10px] uppercase text-gray-400">
                      <div className="flex justify-between">
                        <span className="text-gray-500">Credential Type</span>
                        <span className="text-white">Language Assessment</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-500">Global Score</span>
                        <span className="text-blue-400 font-semibold">Level 10 (Expert)</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-500">Status</span>
                        <span className="text-green-400 font-semibold flex items-center gap-1">
                          <span className="w-1 h-1 rounded-full bg-green-500 inline-block animate-pulse" /> Verified
                        </span>
                      </div>
                    </div>
                  </div>
                  <button 
                    onClick={() => setSelectedCert(null)} 
                    className="px-5 py-2.5 bg-white text-black font-semibold hover:bg-neutral-200 transition-colors text-[10px] uppercase tracking-wider w-full rounded-sm"
                  >
                    Close Verification
                  </button>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
