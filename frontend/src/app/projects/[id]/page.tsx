import { getProjectById, projectData } from "@/lib/projects";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2, Code2, AlertTriangle, Database, Network, LineChart, Server, Rocket, PlayCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export function generateStaticParams() {
  return projectData.map((project) => ({
    id: project.id,
  }));
}

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const project = getProjectById(resolvedParams.id);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black text-white py-24 px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <Link 
          href="/#projects"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-12 transition-colors font-medium"
        >
          <ArrowLeft size={20} />
          Back to Portfolio
        </Link>

        <header className="mb-16 relative z-10">
          <div className="flex items-center gap-4 mb-4">
            <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-semibold tracking-widest uppercase text-xs">
              {project.category}
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
            {project.title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 font-light max-w-3xl leading-relaxed">
            {project.subtitle}
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-colors">
              <PlayCircle size={18} /> Watch Demo
            </button>
            <a 
              href="https://github.com/repos"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-full glass border border-white/10 hover:bg-white/10 transition-colors"
            >
              <Code2 size={18} /> View Source
            </a>
          </div>
        </header>

        {project.images.length > 0 && (
          <div className="w-full aspect-video md:aspect-[21/9] rounded-3xl overflow-hidden mb-20 relative border border-white/10 group">
            <Image 
              src={project.images[0]} 
              alt={project.title}
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="md:col-span-2 space-y-16">
            
            <section className="glass p-8 rounded-3xl border border-white/5">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 border-b border-white/10 pb-4">
                <Code2 className="text-blue-500" /> Business Problem & Overview
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed font-light">
                {project.overview}
              </p>
            </section>

            <section className="glass p-8 rounded-3xl border border-white/5">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 border-b border-white/10 pb-4">
                <Database className="text-purple-500" /> Dataset & Features
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed font-light">
                The dataset consisted of millions of records requiring extensive preprocessing, imputation, and feature engineering to isolate predictive signals.
              </p>
            </section>

            <section className="glass p-8 rounded-3xl border border-white/5">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 border-b border-white/10 pb-4">
                <Network className="text-cyan-500" /> Architecture & ML Models
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed font-light mb-6">
                Utilized an ensemble approach combining Deep Learning architectures with robust gradient boosting pipelines to maximize accuracy and minimize inference latency.
              </p>
              {/* Simulated terminal output */}
              <div className="bg-black/50 border border-white/10 rounded-xl p-4 font-mono text-sm text-gray-400">
                <div className="flex gap-2 mb-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <p className="text-blue-400">$ python train.py --model ensemble --epochs 100</p>
                <p>Loading dataset... OK</p>
                <p>Initializing Neural Network... OK</p>
                <p>Epoch 100/100: loss: 0.042 - accuracy: 0.985</p>
                <p className="text-green-400">Training complete. Model saved.</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <AlertTriangle className="text-orange-500" /> Challenges
              </h2>
              <ul className="space-y-4">
                {project.challenges.map((challenge, idx) => (
                  <li key={idx} className="flex gap-4 items-start">
                    <span className="w-2 h-2 mt-2.5 rounded-full bg-orange-500 flex-shrink-0" />
                    <span className="text-gray-300 text-lg leading-relaxed font-light">{challenge}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <CheckCircle2 className="text-green-500" /> Solutions
              </h2>
              <ul className="space-y-4">
                {project.solutions.map((solution, idx) => (
                  <li key={idx} className="flex gap-4 items-start">
                    <span className="w-2 h-2 mt-2.5 rounded-full bg-green-500 flex-shrink-0" />
                    <span className="text-gray-300 text-lg leading-relaxed font-light">{solution}</span>
                  </li>
                ))}
              </ul>
            </section>

          </div>

          <aside className="md:col-span-1 space-y-8">
            <div className="sticky top-32 space-y-8">
              <div className="glass p-8 rounded-3xl border border-white/5 shadow-[0_8px_30px_rgb(0,0,0,0.5)]">
                <h3 className="text-xl font-bold mb-6 border-b border-white/10 pb-4">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, idx) => (
                    <span key={idx} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-sm font-medium text-gray-300 hover:bg-white/10 transition-colors">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="glass p-8 rounded-3xl border border-white/5 shadow-[0_8px_30px_rgb(0,0,0,0.5)]">
                <h3 className="text-xl font-bold mb-6 border-b border-white/10 pb-4 flex items-center gap-2">
                  <LineChart size={20} className="text-green-400" /> Evaluation Metrics
                </h3>
                <ul className="space-y-4 text-sm text-gray-300 font-light">
                  <li className="flex justify-between border-b border-white/5 pb-2">
                    <span>Accuracy</span>
                    <span className="font-mono text-green-400">98.5%</span>
                  </li>
                  <li className="flex justify-between border-b border-white/5 pb-2">
                    <span>F1 Score</span>
                    <span className="font-mono text-green-400">0.97</span>
                  </li>
                  <li className="flex justify-between border-b border-white/5 pb-2">
                    <span>Inference Time</span>
                    <span className="font-mono text-green-400">12ms</span>
                  </li>
                </ul>
              </div>
            </div>
          </aside>
        </div>

        {project.images.length > 1 && (
          <section className="mt-24">
            <h2 className="text-3xl font-bold mb-10 text-center">Project Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {project.images.slice(1).map((src, idx) => (
                <div key={idx} className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 group cursor-pointer">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                  <Image 
                    src={src} 
                    alt={`${project.title} Screenshot ${idx + 2}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              ))}
            </div>
          </section>
        )}
        
      </div>
    </main>
  );
}
