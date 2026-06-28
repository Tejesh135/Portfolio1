"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, CheckCircle, Lightbulb, MapPin, Building2 } from "lucide-react";

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
      <div className="max-w-5xl w-full">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <h2 className="text-sm font-medium tracking-widest text-blue-500 uppercase mb-3">03. Career Journey</h2>
          <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
            Professional Experience
          </h3>
        </motion.div>

        <div className="relative border-l border-white/10 ml-4 md:ml-0 md:space-y-24 space-y-16">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1, type: "spring", bounce: 0.4 }}
              className="relative pl-8 md:pl-0"
            >
              {/* Timeline Node */}
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.4, type: "spring" }}
                className="absolute left-[-5px] md:left-[-6px] top-10 w-3 h-3 md:w-3 md:h-3 bg-blue-500 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.6)]" 
              />

              <div className="glass p-8 md:p-10 rounded-3xl border border-white/5 hover:border-white/20 transition-all duration-500 flex flex-col md:flex-row gap-10 relative overflow-hidden group ml-2 md:ml-12 shadow-[0_8px_30px_rgb(0,0,0,0.5)]">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                {/* Branding & Meta Column */}
                <div className="flex-shrink-0 relative z-10 flex flex-col items-start gap-4 w-full md:w-56">
                  <div className="w-24 h-24 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center p-3 overflow-hidden bg-white shadow-xl">
                    <img src={exp.logo} alt={exp.company} className="object-contain w-full h-full" />
                  </div>
                  
                  <div className="space-y-3 mt-2">
                    <div className="flex items-center gap-3 text-gray-400 text-sm font-medium">
                      <Calendar className="w-4 h-4 text-blue-400" />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-400 text-sm font-medium">
                      <MapPin className="w-4 h-4 text-purple-400" />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-400 text-sm font-medium">
                      <Building2 className="w-4 h-4 text-green-400" />
                      <span>{exp.company}</span>
                    </div>
                  </div>
                </div>

                {/* Content Column */}
                <div className="relative z-10 flex-1">
                  <h4 className="text-3xl font-bold text-white mb-2 tracking-tight">{exp.role}</h4>
                  <p className="text-gray-300 text-base leading-relaxed mb-8 font-light">
                    {exp.description}
                  </p>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    {/* Responsibilities */}
                    <div className="space-y-3">
                      <h6 className="text-xs font-semibold uppercase tracking-wider text-gray-500 flex items-center gap-2">
                        <Briefcase className="w-4 h-4 text-blue-400" /> Responsibilities
                      </h6>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((item, i) => (
                          <li key={i} className="text-gray-300 text-sm flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 flex-shrink-0" />
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Achievements */}
                    <div className="space-y-3">
                      <h6 className="text-xs font-semibold uppercase tracking-wider text-gray-500 flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400" /> Key Achievements
                      </h6>
                      <ul className="space-y-2">
                        {exp.achievements.map((item, i) => (
                          <li key={i} className="text-gray-300 text-sm flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 flex-shrink-0" />
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Lessons Learned */}
                  <div className="mb-8 p-4 rounded-2xl bg-blue-500/5 border border-blue-500/10 flex gap-4 items-start">
                    <Lightbulb className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h6 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1">Lessons Learned</h6>
                      <p className="text-sm text-gray-300 leading-relaxed italic">"{exp.lessons_learned}"</p>
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                    {exp.skills.map((skill, sIdx) => (
                      <span key={sIdx} className="px-3 py-1.5 text-xs font-medium bg-white/5 text-gray-300 rounded-lg border border-white/10 hover:border-white/30 hover:bg-white/10 transition-colors">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
