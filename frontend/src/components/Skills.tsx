"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Code2, BrainCircuit, LineChart, Database, Sparkles, 
  Cloud, BarChart3, Workflow, ExternalLink, CheckCircle2
} from "lucide-react";
import clsx from "clsx";

const ecosystem = [
  {
    category: "Languages",
    icon: <Code2 className="w-6 h-6 text-blue-400" />,
    color: "from-blue-500/20 to-cyan-500/20",
    border: "group-hover:border-blue-500/50",
    skills: [
      { name: "Python", desc: "Primary language used across AI, machine learning, backend APIs, automation, and data engineering projects.", projects: ["All Projects"], count: "Used in 15 Projects", logo: "🐍", badge: "Primary Skill" },
      { name: "SQL", desc: "Data querying, complex joins, query optimization, and analytics.", projects: ["NeuralRetail", "Home Loan Default"], count: "Used in 10 Projects", logo: "🗄️", badge: "Core Expertise" },
      { name: "JavaScript", desc: "Building responsive React applications, APIs, dashboards, and full-stack AI products.", projects: ["Full Stack AI"], count: "Used in 6 Projects", logo: "⚡" },
      { name: "HTML & CSS", desc: "Semantic web structure and modern styling with Tailwind CSS.", projects: ["All Projects"], count: "Used in 15 Projects", logo: "🎨" }
    ]
  },
  {
    category: "Data Science & Analytics",
    icon: <LineChart className="w-6 h-6 text-yellow-400" />,
    color: "from-yellow-500/20 to-orange-500/20",
    border: "group-hover:border-yellow-500/50",
    badge: "⭐ Primary",
    skills: [
      { name: "Pandas + NumPy", desc: "Data wrangling, preprocessing, feature engineering, and scientific computing.", projects: ["House Price Prediction"], count: "Used in 12 Projects", logo: "🐼", badge: "Core Expertise" },
      { name: "Statistics & EDA", desc: "Hypothesis testing, probability distributions, and exploratory data analysis.", projects: ["Home Loan Default"], count: "Used in 10 Projects", logo: "📊" },
      { name: "Feature Engineering", desc: "Creating predictive signals and transforming raw data into actionable features.", projects: ["NeuralRetail"], count: "Used in 9 Projects", logo: "⚙️" },
      { name: "Python Data Analysis", desc: "End-to-end data exploration, automated ML workflows, and scripting.", projects: ["NeuralRetail", "House Price Prediction"], count: "Used in 15 Projects", logo: "🐍", badge: "Primary Skill" }
    ]
  },
  {
    category: "Machine Learning",
    icon: <BrainCircuit className="w-6 h-6 text-purple-400" />,
    color: "from-purple-500/20 to-fuchsia-500/20",
    border: "group-hover:border-purple-500/50",
    badge: "⭐",
    skills: [
      { name: "Scikit-learn", desc: "Classification, regression, clustering, and traditional ML workflows.", projects: ["Home Loan Default", "House Price Prediction"], count: "Used in 10 Projects", logo: "🧠", badge: "Core Expertise" },
      { name: "XGBoost", desc: "Gradient boosting models for structured data and high-performance predictions.", projects: ["Home Loan Default"], count: "Used in 5 Projects", logo: "🚀" },
      { name: "TensorFlow & PyTorch", desc: "Deep learning, neural networks, and computer vision architectures.", projects: ["Rice Disease"], count: "Used in 6 Projects", logo: "🔥" },
      { name: "Model Evaluation", desc: "Cross Validation, ROC-AUC, Precision, Recall, and hyperparameter tuning.", projects: ["NeuralRetail"], count: "Used in 12 Projects", logo: "🎯" }
    ]
  },
  {
    category: "Data Visualization",
    icon: <BarChart3 className="w-6 h-6 text-pink-400" />,
    color: "from-pink-500/20 to-rose-500/20",
    border: "group-hover:border-pink-500/50",
    badge: "⭐",
    skills: [
      { name: "Power BI", desc: "Interactive dashboards and comprehensive business intelligence.", projects: ["Home Loan Dashboard"], count: "Used in 7 Projects", logo: "📈", badge: "Core Expertise" },
      { name: "Tableau", desc: "Complex business reporting and visual storytelling.", projects: ["Sales Dashboard"], count: "Used in 5 Projects", logo: "🎨" },
      { name: "Matplotlib + Seaborn", desc: "Statistical visualization and programmatic plotting in Python.", projects: ["House Price Prediction"], count: "Used in 14 Projects", logo: "📉" },
      { name: "Excel", desc: "Pivot Tables, Dashboards, and rapid spreadsheet modeling.", projects: ["Home Loan Dashboard"], count: "Used in 8 Projects", logo: "📗" }
    ]
  },
  {
    category: "Data Engineering",
    icon: <Database className="w-6 h-6 text-emerald-400" />,
    color: "from-emerald-500/20 to-teal-500/20",
    border: "group-hover:border-emerald-500/50",
    skills: [
      { name: "ETL Pipelines", desc: "Designing robust data extraction, transformation, and loading workflows.", projects: ["NeuralRetail"], count: "Used in 6 Projects", logo: "🔄" },
      { name: "PySpark", desc: "Distributed data processing, feature engineering, and scalable analytics pipelines.", projects: ["NeuralRetail"], count: "Used in 3 Projects", logo: "⚡" },
      { name: "SQL Database Management", desc: "Relational database administration and query optimization.", projects: ["NeuralRetail", "Home Loan Default"], count: "Used in 8 Projects", logo: "🗄️" },
      { name: "Data Cleaning", desc: "Handling missing values, outliers, and ensuring high data quality.", projects: ["Home Loan Default"], count: "Used in 15 Projects", logo: "🧹" }
    ]
  },
  {
    category: "AI & Generative AI",
    icon: <Sparkles className="w-6 h-6 text-indigo-400" />,
    color: "from-indigo-500/20 to-blue-500/20",
    border: "group-hover:border-indigo-500/50",
    skills: [
      { name: "Hugging Face", desc: "Transformers, open-source LLMs, and model deployment.", projects: ["NeuralRetail", "Full Stack AI"], count: "Used in 5 Projects", logo: "🤗", badge: "Core Expertise" },
      { name: "LangChain", desc: "Building AI agents, RAG systems, and LLM orchestration.", projects: ["Full Stack AI"], count: "Used in 4 Projects", logo: "🦜" },
      { name: "Prompt Engineering", desc: "Optimizing AI outputs, context injection, and system prompts.", projects: ["Full Stack AI"], count: "Used in 6 Projects", logo: "✍️" },
      { name: "LLM Fine-tuning", desc: "Parameter-efficient model finetuning (PEFT, LoRA) and domain adaptation.", projects: ["Full Stack AI"], count: "Used in 3 Projects", logo: "🔧" }
    ]
  },
  {
    category: "Cloud & Deployment",
    icon: <Cloud className="w-6 h-6 text-orange-400" />,
    color: "from-orange-500/20 to-amber-500/20",
    border: "group-hover:border-orange-500/50",
    skills: [
      { name: "AWS", desc: "AI services, ML infrastructure, S3, and EC2.", projects: ["NeuralRetail"], count: "Used in 4 Projects", logo: "☁️" },
      { name: "Docker", desc: "Containerizing machine learning models and web applications.", projects: ["NeuralRetail"], count: "Used in 5 Projects", logo: "🐳" },
      { name: "Git & GitHub Actions", desc: "Version control, collaborative development, and CI/CD.", projects: ["All Projects"], count: "Used in 15 Projects", logo: "🔀" },
      { name: "FastAPI & React", desc: "Building scalable backend APIs and interactive frontend applications.", projects: ["Full Stack AI"], count: "Used in 5 Projects", logo: "⚛️" }
    ]
  }
];

export function Skills() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="skills" className="py-24 relative w-full flex flex-col items-center justify-center px-6 lg:px-8 bg-black overflow-hidden">
      
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl w-full relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <h2 className="text-sm font-medium tracking-widest text-blue-500 uppercase mb-3">02. Technical Arsenal</h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
              Technology Ecosystem
            </h3>
          </div>
          <p className="text-gray-400 max-w-md text-sm leading-relaxed">
            I don't just write code. I architect ecosystems. Explore the tools, languages, and frameworks I leverage to transform raw data into intelligent applications.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Category Selector */}
          <div className="flex flex-row lg:flex-col gap-4 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 w-full lg:w-1/3 shrink-0 scrollbar-hide">
            {ecosystem.map((eco, idx) => (
              <button
                key={idx}
                onClick={() => setActiveCategory(idx)}
                className={clsx(
                  "flex items-center gap-4 p-5 rounded-2xl border transition-all duration-300 text-left whitespace-nowrap lg:whitespace-normal group relative overflow-hidden",
                  activeCategory === idx
                    ? `bg-gradient-to-r ${eco.color} border-white/20 shadow-lg`
                    : "glass border-white/5 hover:border-white/10 hover:bg-white/5 text-gray-400 hover:text-gray-200"
                )}
              >
                {activeCategory === idx && (
                  <motion.div layoutId="active-indicator" className="absolute left-0 top-0 bottom-0 w-1 bg-white" />
                )}
                <div className={clsx(
                  "p-2 rounded-xl transition-transform duration-300",
                  activeCategory === idx ? "bg-white/10 scale-110" : "bg-white/5 group-hover:scale-110"
                )}>
                  {eco.icon}
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold text-lg">{eco.category}</span>
                  {eco.badge && <span className="text-xs text-yellow-400 font-medium mt-1">{eco.badge}</span>}
                </div>
              </button>
            ))}
          </div>

          {/* Active Skills Grid */}
          <div className="w-full lg:w-2/3">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
                  exit: { opacity: 0, transition: { duration: 0.2 } }
                }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-6"
              >
                {ecosystem[activeCategory].skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } },
                      exit: { opacity: 0, y: -20, transition: { duration: 0.2 } }
                    }}
                    className={clsx(
                      "group glass p-6 rounded-2xl border border-white/5 transition-all duration-300 relative overflow-hidden cursor-default flex flex-col justify-between",
                      ecosystem[activeCategory].border
                    )}
                  >
                    {/* Hover Glow */}
                    <div className={clsx(
                      "absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r blur-xl rounded-2xl -z-10",
                      ecosystem[activeCategory].color
                    )} />

                    <div>
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex items-center gap-3">
                          <span className="text-3xl filter drop-shadow-md">{skill.logo}</span>
                          <div>
                            <h4 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
                              {skill.name}
                            </h4>
                            <span className="text-xs text-blue-400 font-medium">{skill.count}</span>
                          </div>
                        </div>
                        {skill.badge && (
                          <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 bg-blue-500/20 text-blue-300 border border-blue-500/30 rounded-full text-center max-w-[80px]">
                            {skill.badge}
                          </span>
                        )}
                      </div>

                      <p className="text-sm text-gray-400 mb-6 leading-relaxed">
                        {skill.desc}
                      </p>
                    </div>

                    <div>
                      <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 flex items-center gap-2">
                        Used In
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {skill.projects.map((proj) => (
                          <span key={proj} className="text-xs px-2 py-1 bg-black/40 border border-white/5 rounded-md text-gray-400 flex items-center gap-1 group-hover:border-white/20 transition-colors">
                            {proj === "All Projects" ? <Workflow size={10} /> : <ExternalLink size={10} />}
                            {proj}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* Technology Summary Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 w-full max-w-4xl mx-auto"
        >
          <div className="glass border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden group hover:border-blue-500/30 transition-colors">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div>
              <h4 className="text-xl font-bold text-white mb-4">Technology Summary</h4>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3 text-sm text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                  <span className="font-medium text-white">30+</span> Technologies
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                  <span className="font-medium text-white">15+</span> AI Projects
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-300">
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                  <span className="font-medium text-white">6</span> Professional Certifications
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center md:justify-end flex-1">
              <div className="px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-center backdrop-blur-sm relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10" />
                <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-extrabold tracking-widest text-sm md:text-base">
                  AI • ML • BACKEND • CLOUD
                </span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
