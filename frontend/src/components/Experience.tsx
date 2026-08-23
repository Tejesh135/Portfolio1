"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    company: "Rubixee",
    role: "Data Science Intern",
    duration: "January 2026 – Present",
    location: "Hyderabad, India",
    logo: "/Rubixe logo.png",
    description: "Spearheading advanced machine learning initiatives and full-stack AI development to solve complex business challenges.",
    responsibilities: [
      "Architected and deployed end-to-end Machine Learning pipelines.",
      "Developed Full Stack AI web applications using Next.js and FastAPI.",
      "Optimized model inference times by 40% through efficient serving architectures."
    ],
    achievements: [
      "Successfully launched the AI Architecture platform to production.",
      "Reduced data preprocessing time by automating ETL workflows."
    ],
    lessons_learned: "Learned how to bridge the gap between complex ML models and user-friendly frontend interfaces in production environments.",
    projects: ["House Price Prediction", "Rice Leaf Disease Classification", "Full Stack AI Architecture"],
    skills: ["Python", "Machine Learning", "FastAPI", "React", "Deep Learning"],
  },
  {
    company: "Datamites Global Institution",
    role: "Data Science & AI Trainee",
    duration: "January 2026 – Present",
    location: "Hyderabad, India",
    logo: "/Datamites logo.jpg",
    description: "Undergoing rigorous training in state-of-the-art AI algorithms, data pipelines, and deep neural networks.",
    responsibilities: [
      "Engineered features for large-scale financial datasets.",
      "Built and evaluated predictive models using Scikit-Learn and TensorFlow.",
      "Designed a scalable recommendation engine for retail."
    ],
    achievements: [
      "Achieved 95% accuracy on the Home Loan Default Prediction model.",
      "Completed intensive capstone projects ahead of schedule."
    ],
    lessons_learned: "Mastered the importance of rigorous EDA (Exploratory Data Analysis) and feature engineering over pure model complexity.",
    projects: ["Neuralretail Recommendation Engine", "Home Loan Default Prediction"],
    skills: ["Scikit-Learn", "Pandas", "SQL", "Data Engineering", "TensorFlow"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 relative w-full flex flex-col items-center justify-center px-6 lg:px-8 bg-black">
      <div className="max-w-7xl w-full">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 border-b border-white/5 pb-6"
        >
          <span className="text-xs font-mono text-gray-500 uppercase tracking-widest block mb-2">[ 02 / JOURNEY ]</span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white uppercase leading-none">
            WORK EXPERIENCE
          </h2>
        </motion.div>

        {/* Timeline Rows */}
        <div className="flex flex-col">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 border-t border-white/5 py-12 items-start"
            >
              {/* Left Column: Timeline & Company Metadata */}
              <div className="lg:col-span-3 flex flex-col gap-3">
                <span className="text-xs font-mono text-blue-400 tracking-wider uppercase">{exp.duration}</span>
                <div>
                  <h4 className="text-lg font-bold text-white tracking-tight">
                    {exp.company}
                  </h4>
                  <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest block mt-1">{exp.location}</span>
                </div>
              </div>

              {/* Right Column: Detailed Role Description & Contributions */}
              <div className="lg:col-span-9 flex flex-col gap-6">
                <div>
                  <h3 className="text-2xl font-bold text-white tracking-tight mb-2 uppercase">{exp.role}</h3>
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed font-light">
                    {exp.description}
                  </p>
                </div>

                {/* Structured details without icons */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-2">
                  {/* Responsibilities */}
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest block">[ Contributions ]</span>
                    <ul className="space-y-1.5">
                      {exp.responsibilities.map((item, i) => (
                        <li key={i} className="text-gray-300 text-sm flex items-start gap-2 font-light">
                          <span className="text-blue-500 mt-0.5 shrink-0 font-mono text-[9px]">-</span>
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Achievements */}
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest block">[ Key Achievements ]</span>
                    <ul className="space-y-1.5">
                      {exp.achievements.map((item, i) => (
                        <li key={i} className="text-gray-300 text-sm flex items-start gap-2 font-light">
                          <span className="text-green-500 mt-0.5 shrink-0 font-mono text-[9px]">+</span>
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Lessons Learned */}
                <div className="border-l-2 border-white/10 pl-4 py-1 bg-white/2 mt-2">
                  <span className="text-[9px] font-mono text-gray-500 uppercase tracking-widest block mb-0.5">Lessons Learned</span>
                  <p className="text-xs text-gray-400 italic font-light">&quot;{exp.lessons_learned}&quot;</p>
                </div>

                {/* Technical Stack Tags */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                  <span className="text-[9px] font-mono text-gray-600 uppercase tracking-widest mr-2 mt-1">[ Tech Stack ]</span>
                  {exp.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="text-[9px] font-mono text-gray-400 bg-white/5 border border-white/10 px-2 py-0.5 rounded-sm uppercase tracking-wider">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
