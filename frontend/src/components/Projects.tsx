"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const featuredProject = {
  id: "neural-retail",
  title: "Neuralretail Recommendation Engine",
  category: "Datamites",
  problem: "Handling massive, imbalanced transactional datasets to predict inventory demand and customer segmentations.",
  approach: "Implemented advanced SMOTE data balancing and engineered time-series deep learning models using TensorFlow & Keras.",
  outcome: "A demand forecasting platform deployed via FastAPI, maximizing retail sales and inventory efficiency.",
  tech: ["Python", "TensorFlow", "Pandas", "Scikit-Learn", "FastAPI"]
};

const supportingProjects = [
  {
    id: "home-loan",
    title: "Home Loan Default Prediction",
    category: "Datamites",
    problem: "Analyzing noisy, skewed financial records and credit scores to predict default risks.",
    approach: "Designed a machine learning pipeline featuring extensive EDA and XGBoost gradient boosting ensemble modeling.",
    outcome: "Achieved 95% validation accuracy on credit risk assessment modeling.",
    tech: ["Python", "XGBoost", "Data Engineering", "Seaborn"]
  },
  {
    id: "rice-leaf",
    title: "Rice Leaf Disease Classification",
    category: "Rubixee",
    problem: "Identifying crop blight and leaf smut diseases instantly from raw agricultural leaf photos.",
    approach: "Employed PyTorch transfer learning with image augmentations to train CNN models for image classification.",
    outcome: "A computer vision web application that instantly classifies crop diseases and suggests remedies.",
    tech: ["PyTorch", "OpenCV", "Deep Learning", "React"]
  },
  {
    id: "house-price",
    title: "House Price Prediction",
    category: "Rubixee",
    problem: "Predicting real estate value across categorical structural and geographic features.",
    approach: "Evaluated Scikit-Learn regression algorithms (Linear, Trees, Boosting) optimized for Mean Absolute Error.",
    outcome: "An end-to-end forecasting engine deployed with FastAPI for data-driven decisions.",
    tech: ["Python", "Scikit-Learn", "Matplotlib", "FastAPI"]
  },
  {
    id: "full-stack-ai",
    title: "Full Stack AI Architecture",
    category: "Rubixee",
    problem: "Creating high-performance pipelines to bridge heavy model inference latencies with frontends.",
    approach: "Built Next.js asynchronous API endpoints with MongoDB persistence and unified React state management.",
    outcome: "A secure, production-grade application integrating ML models with scalable web UI.",
    tech: ["Next.js", "Node.js", "MongoDB", "TailwindCSS"]
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 relative w-full flex flex-col items-center justify-center px-6 lg:px-8 bg-black">
      <div className="max-w-7xl w-full">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 border-b border-white/5 pb-6 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <span className="text-xs font-mono text-gray-500 uppercase tracking-widest block mb-2">[ 04 / PORTFOLIO ]</span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white uppercase leading-none">
              ENGINEERING SHOWCASE
            </h2>
          </div>
          <p className="text-gray-400 max-w-sm text-xs font-light leading-relaxed">
            Case studies of end-to-end Machine Learning pipelines and AI integrations built for Datamites and Rubixee.
          </p>
        </motion.div>

        {/* 1. Featured Project - Large Split Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="border border-white/5 bg-black/40 p-8 md:p-12 mb-16 relative group"
        >
          {/* Technical crosshairs */}
          <span className="absolute -top-1 -left-1 w-3 h-[1px] bg-white/20" />
          <span className="absolute -top-1 -left-1 w-[1px] h-3 bg-white/20" />
          <span className="absolute -top-1 -right-1 w-3 h-[1px] bg-white/20" />
          <span className="absolute -top-1 -right-1 w-[1px] h-3 bg-white/20" />
          <span className="absolute -bottom-1 -left-1 w-3 h-[1px] bg-white/20" />
          <span className="absolute -bottom-1 -left-1 w-[1px] h-3 bg-white/20" />
          <span className="absolute -bottom-1 -right-1 w-3 h-[1px] bg-white/20" />
          <span className="absolute -bottom-1 -right-1 w-[1px] h-3 bg-white/20" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Title Block */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full min-h-[220px]">
              <div>
                <span className="text-[10px] font-mono text-blue-400 uppercase tracking-widest block mb-2">
                  Featured Case Study &middot; {featuredProject.category}
                </span>
                <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white uppercase leading-tight mb-4">
                  {featuredProject.title}
                </h3>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {featuredProject.tech.map((t, i) => (
                    <span key={i} className="text-[9px] font-mono text-gray-400 bg-white/5 border border-white/10 px-2 py-0.5 rounded-sm uppercase tracking-wider">
                      {t}
                    </span>
                  ))}
                </div>

                <Link href={`/projects/${featuredProject.id}`} className="inline-flex items-center gap-2 text-xs font-mono tracking-wider text-white uppercase group/btn border-b border-white/20 pb-0.5 hover:border-white/80 transition-colors">
                  View Full Case Study
                  <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Structured Details Block */}
            <div className="lg:col-span-7 flex flex-col gap-8 lg:border-l lg:border-white/5 lg:pl-10">
              <div>
                <span className="text-xs font-mono text-gray-400 font-semibold uppercase tracking-wider block mb-2">[ Problem ]</span>
                <p className="text-gray-100 text-base md:text-lg leading-relaxed font-normal">{featuredProject.problem}</p>
              </div>
              <div>
                <span className="text-xs font-mono text-gray-400 font-semibold uppercase tracking-wider block mb-2">[ Approach ]</span>
                <p className="text-gray-100 text-base md:text-lg leading-relaxed font-normal">{featuredProject.approach}</p>
              </div>
              <div>
                <span className="text-xs font-mono text-gray-400 font-semibold uppercase tracking-wider block mb-2">[ Outcome ]</span>
                <p className="text-gray-100 text-base md:text-lg leading-relaxed font-normal">{featuredProject.outcome}</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 2. Supporting Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {supportingProjects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              className="border border-white/5 bg-black/40 p-8 flex flex-col justify-between relative group min-h-[460px]"
            >
              {/* Technical crosshairs */}
              <span className="absolute -top-1 -left-1 w-3 h-[1px] bg-white/20" />
              <span className="absolute -top-1 -left-1 w-[1px] h-3 bg-white/20" />
              <span className="absolute -top-1 -right-1 w-3 h-[1px] bg-white/20" />
              <span className="absolute -top-1 -right-1 w-[1px] h-3 bg-white/20" />
              <span className="absolute -bottom-1 -left-1 w-3 h-[1px] bg-white/20" />
              <span className="absolute -bottom-1 -left-1 w-[1px] h-3 bg-white/20" />
              <span className="absolute -bottom-1 -right-1 w-3 h-[1px] bg-white/20" />
              <span className="absolute -bottom-1 -right-1 w-[1px] h-3 bg-white/20" />

              <div className="space-y-6">
                <div>
                  <span className="text-[9px] font-mono text-blue-400 uppercase tracking-widest block mb-1">
                    {project.category}
                  </span>
                  <h4 className="text-xl font-bold tracking-tight text-white uppercase">{project.title}</h4>
                </div>

                <div className="space-y-6">
                  <div>
                    <span className="text-xs font-mono text-gray-400 font-semibold uppercase tracking-wider block mb-2">[ Problem ]</span>
                    <p className="text-gray-100 text-sm md:text-base leading-relaxed font-normal">{project.problem}</p>
                  </div>
                  <div>
                    <span className="text-xs font-mono text-gray-400 font-semibold uppercase tracking-wider block mb-2">[ Approach ]</span>
                    <p className="text-gray-100 text-sm md:text-base leading-relaxed font-normal">{project.approach}</p>
                  </div>
                  <div>
                    <span className="text-xs font-mono text-gray-400 font-semibold uppercase tracking-wider block mb-2">[ Outcome ]</span>
                    <p className="text-gray-100 text-sm md:text-base leading-relaxed font-normal">{project.outcome}</p>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between">
                <div className="flex flex-wrap gap-1">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-[8px] font-mono text-gray-500 uppercase tracking-wider">
                      {t} &middot;
                    </span>
                  ))}
                </div>

                <Link href={`/projects/${project.id}`} className="text-[10px] font-mono tracking-wider uppercase text-white hover:text-blue-400 flex items-center gap-1">
                  CASE STUDY
                  <ArrowRight className="w-2.5 h-2.5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
