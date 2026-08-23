"use client";

import { motion } from "framer-motion";

const categories = [
  {
    name: "Programming",
    tag: "[ 01 / PROGRAMMING ]",
    skills: [
      { name: "Python", details: "Data Science &middot; Machine Learning &middot; AI Development &middot; Automation" },
      { name: "SQL", details: "Data Querying &middot; Joins &middot; Aggregations &middot; Database Operations" },
      { name: "JavaScript", details: "React &middot; Node.js &middot; Express.js &middot; Frontend Development" }
    ]
  },
  {
    name: "Data Science",
    tag: "[ 02 / DATA SCIENCE ]",
    skills: [
      { name: "Pandas & NumPy", details: "Data Wrangling &middot; Numerical Computation &middot; Preprocessing" },
      { name: "Exploratory Data Analysis", details: "Data Profiling &middot; Visualization &middot; Pattern Discovery" },
      { name: "Feature Engineering", details: "Feature Transformation &middot; Feature Selection &middot; Data Preparation" }
    ]
  },
  {
    name: "Machine Learning",
    tag: "[ 03 / MACHINE LEARNING ]",
    skills: [
      { name: "Scikit-Learn", details: "Classification &middot; Regression &middot; Model Training &middot; Evaluation" },
      { name: "Machine Learning", details: "Supervised Learning &middot; Model Selection &middot; Hyperparameter Tuning" },
      { name: "Model Evaluation", details: "Cross-Validation &middot; Performance Metrics &middot; Error Analysis" },
      { name: "Deep Learning", details: "Neural Networks &middot; Model Training &middot; Inference &middot; Optimization" }
    ]
  },
  {
    name: "NLP & Transformers",
    tag: "[ 04 / NLP & TRANSFORMERS ]",
    skills: [
      { name: "PyTorch", details: "Deep Learning &middot; Custom Training Loops &middot; Model Fine-Tuning" },
      { name: "Hugging Face Transformers", details: "Transformer Models &middot; Model Hub &middot; Tokenization &middot; Inference" },
      { name: "BERT & DistilBERT", details: "Text Classification &middot; Transformer Embeddings &middot; NLP" },
      { name: "LLM Fine-tuning", details: "Fine-Tuning &middot; Checkpointing &middot; Gradient Accumulation &middot; Quantization" }
    ]
  },
  {
    name: "Generative AI",
    tag: "[ 05 / GENERATIVE AI ]",
    skills: [
      { name: "RAG", details: "Retrieval Augmentation &middot; Document Q&A &middot; Context Retrieval" },
      { name: "LangChain", details: "LLM Orchestration &middot; Retrieval Chains &middot; AI Workflows" },
      { name: "Prompt Engineering", details: "Context Design &middot; System Prompts &middot; Structured Output" },
      { name: "Embeddings", details: "Semantic Search &middot; Vector Representations &middot; Retrieval" }
    ]
  },
  {
    name: "LLM Fine-tuning",
    tag: "[ 06 / LLM FINE-TUNING ]",
    skills: [
      { name: "LoRA", details: "Low-Rank Adaptation &middot; Parameter-Efficient Fine-Tuning" },
      { name: "PEFT", details: "Parameter-Efficient Fine-Tuning &middot; Adapter-Based Training" },
      { name: "QLoRA", details: "4-Bit Quantization &middot; Memory-Efficient Fine-Tuning &middot; LLMs" },
      { name: "Quantization", details: "4-Bit Models &middot; Reduced Memory Usage &middot; Efficient Inference" }
    ]
  },
  {
    name: "Vector Databases",
    tag: "[ 07 / VECTOR DATABASES ]",
    skills: [
      { name: "FAISS", details: "Vector Indexing &middot; Similarity Search &middot; Semantic Retrieval" },
      { name: "ChromaDB", details: "Vector Storage &middot; Embeddings &middot; Document Retrieval" },
      { name: "RAG Pipelines", details: "Chunking &middot; Embeddings &middot; Retrieval &middot; Context Augmentation" }
    ]
  },
  {
    name: "Backend & APIs",
    tag: "[ 08 / BACKEND & APIs ]",
    skills: [
      { name: "FastAPI", details: "Async APIs &middot; Model Serving &middot; Inference Endpoints" },
      { name: "REST APIs", details: "API Design &middot; Request/Response Handling &middot; JSON" },
      { name: "Node.js & Express.js", details: "Backend Development &middot; API Services &middot; Server-Side Applications" },
      { name: "React", details: "Component-Based UI &middot; Frontend Applications &middot; API Integration" }
    ]
  },
  {
    name: "Databases",
    tag: "[ 09 / DATABASES ]",
    skills: [
      { name: "MongoDB", details: "Document Databases &middot; Data Persistence &middot; Application Backends" },
      { name: "PostgreSQL", details: "Relational Databases &middot; SQL &middot; Schema Design" },
      { name: "FAISS & ChromaDB", details: "Vector Storage &middot; Semantic Search &middot; AI Retrieval Systems" }
    ]
  },
  {
    name: "Cloud & Development",
    tag: "[ 10 / CLOUD & DEVELOPMENT ]",
    skills: [
      { name: "Amazon Web Services (AWS)", details: "Cloud Computing &middot; AI/ML Services &middot; Deployment" },
      { name: "Git & GitHub", details: "Version Control &middot; Collaboration &middot; Repository Management" },
      { name: "FastAPI + React", details: "Full-Stack AI Applications &middot; Model APIs &middot; Web Interfaces" }
    ]
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-24 relative w-full flex flex-col items-center justify-center px-6 lg:px-8 bg-black">
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
            <span className="text-xs font-mono text-gray-500 uppercase tracking-widest block mb-2">[ 03 / SYSTEM ]</span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white uppercase leading-none">
              TECHNICAL ECOSYSTEM
            </h2>
          </div>
          <p className="text-gray-400 max-w-sm text-xs font-light leading-relaxed">
            A clean structural map of the core programming languages, analytical frameworks, and artificial intelligence tools in my development ecosystem.
          </p>
        </motion.div>

        {/* Taxonomy Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 gap-y-16">
          {categories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="space-y-6"
            >
              {/* Category Header */}
              <div>
                <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest block mb-1">{cat.tag}</span>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-white border-b border-white/5 pb-2">{cat.name}</h4>
              </div>

              {/* Skills List */}
              <ul className="space-y-5">
                {cat.skills.map((skill, sIdx) => (
                  <li key={sIdx} className="group">
                    <span className="font-bold text-white text-sm block group-hover:text-blue-400 transition-colors uppercase tracking-tight">
                      {skill.name}
                    </span>
                    <span 
                      className="text-[10px] font-mono text-gray-500 uppercase tracking-wider block mt-0.5 leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: skill.details }}
                    />
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
