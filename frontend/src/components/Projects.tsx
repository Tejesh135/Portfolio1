"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code2 } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    id: "neural-retail",
    title: "Neuralretail Recommendation Engine",
    category: "Datamites",
    description: "Advanced retail analytics and demand forecasting platform utilizing deep learning models for accurate inventory prediction and customer segmentation algorithms.",
    tech: ["Python", "TensorFlow", "Pandas", "Scikit-Learn"],
  },
  {
    id: "home-loan",
    title: "Home Loan Default Prediction",
    category: "Datamites",
    description: "A machine learning pipeline designed to predict home loan defaults using complex financial datasets, improving risk assessment accuracy for financial institutions.",
    tech: ["Python", "XGBoost", "Data Engineering", "Seaborn"],
  },
  {
    id: "house-price",
    title: "House Price Prediction",
    category: "Rubixee",
    description: "End-to-end predictive model analyzing real estate features to forecast housing prices with high precision using regression techniques.",
    tech: ["Python", "Scikit-Learn", "Matplotlib", "FastAPI"],
  },
  {
    id: "rice-leaf",
    title: "Rice Leaf Disease Classification",
    category: "Rubixee",
    description: "Computer vision application employing Convolutional Neural Networks (CNNs) to accurately detect and classify diseases in rice leaves from images.",
    tech: ["PyTorch", "OpenCV", "Deep Learning", "React"],
  },
  {
    id: "full-stack-ai",
    title: "Full Stack AI Architecture",
    category: "Rubixee",
    description: "A robust, scalable full stack application integrating advanced AI models seamlessly into a modern React frontend with a secure backend API.",
    tech: ["Next.js", "Node.js", "MongoDB", "TailwindCSS"],
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 relative w-full flex flex-col items-center justify-center px-6 lg:px-8 bg-black">
      <div className="max-w-7xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-sm font-medium tracking-widest text-blue-500 uppercase mb-3">04. Featured Work</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight text-white">
            Engineering Portfolio
          </h3>
          <p className="text-gray-400 text-lg font-light max-w-2xl">
            A selection of my best work in AI, Data Science, and Full Stack Development across Datamites and Rubixee.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Link href={`/projects/${project.id}`} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative rounded-3xl overflow-hidden glass border border-white/5 flex flex-col h-full bg-gradient-to-b from-white/5 to-transparent hover:border-blue-500/30 transition-all duration-500 cursor-pointer"
              >
                <div className="p-8 flex flex-col flex-grow">
                  <div className="text-xs font-semibold tracking-wider text-blue-500 uppercase mb-3">
                    {project.category}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow font-light">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                    {project.tech.map((t, i) => (
                      <span key={i} className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 font-medium group-hover:border-white/20 transition-colors">
                        {t}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/10">
                    <span className="text-sm font-medium text-white group-hover:text-blue-400 transition-colors">
                      View Case Study
                    </span>
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-blue-500 group-hover:text-white transition-all">
                      <ArrowRight size={16} />
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
