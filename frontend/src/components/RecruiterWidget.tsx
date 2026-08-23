"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useStore } from "@/store/useStore";
import { Briefcase, CheckCircle2, XCircle, Loader2, Sparkles } from "lucide-react";

interface MatchResult {
  matchScore: number;
  summary: string;
  matchingSkills: string[];
  missingSkills: string[];
}

export function RecruiterWidget() {
  const isRecruiterMode = useStore((state) => state.isRecruiterMode);
  const [jobDescription, setJobDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<MatchResult | null>(null);

  if (!isRecruiterMode) return null;

  const handleAnalyze = async () => {
    if (!jobDescription.trim()) return;
    
    setIsLoading(true);
    setResult(null);

    try {
      const res = await fetch("/api/job-match", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ jobDescription }),
      });
      const data = await res.json();
      setResult(data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -50 }}
        className="fixed top-24 left-6 w-[350px] max-h-[80vh] overflow-y-auto bg-black/95 backdrop-blur-2xl border border-blue-500/30 rounded-3xl p-6 shadow-[0_0_40px_rgba(0,0,0,0.8)] z-40 scrollbar-hide"
      >
        <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
          <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
            <Briefcase className="w-5 h-5 text-blue-400" />
          </div>
          <div>
            <h3 className="font-bold text-lg text-white">Job Match Analyzer</h3>
            <p className="text-xs text-gray-400">Powered by Gemini AI</p>
          </div>
        </div>

        {!result ? (
          <div className="space-y-4">
            <p className="text-sm text-gray-300 font-light leading-relaxed">
              Paste your Job Description below to see why Tejesh is a great fit for your role.
            </p>
            <textarea
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
              placeholder="Paste Job Description here..."
              className="w-full h-32 bg-black/40 border border-white/10 rounded-xl p-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 transition-colors resize-none"
            />
            <button
              onClick={handleAnalyze}
              disabled={isLoading || !jobDescription.trim()}
              className="w-full py-3 rounded-xl bg-blue-600 text-white font-medium flex items-center justify-center gap-2 hover:bg-blue-500 disabled:opacity-50 transition-colors"
            >
              {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Sparkles className="w-5 h-5" />}
              {isLoading ? "Analyzing Match..." : "Analyze Match"}
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="text-center p-4 bg-black/40 rounded-2xl border border-white/5">
              <div className="text-4xl font-extrabold text-white mb-1">
                {result.matchScore}%
              </div>
              <div className="text-sm text-blue-400 font-medium">Match Score</div>
            </div>

            <p className="text-sm text-gray-300 leading-relaxed italic border-l-2 border-blue-500 pl-3">
              &quot;{result.summary}&quot;
            </p>

            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500" /> Matching Skills
              </h4>
              <div className="flex flex-wrap gap-2">
                {result.matchingSkills?.map((skill: string, i: number) => (
                  <span key={i} className="px-2 py-1 bg-green-500/10 border border-green-500/20 text-green-400 text-xs rounded-md">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3 flex items-center gap-2">
                <XCircle className="w-4 h-4 text-red-500" /> Missing Skills
              </h4>
              <div className="flex flex-wrap gap-2">
                {result.missingSkills?.map((skill: string, i: number) => (
                  <span key={i} className="px-2 py-1 bg-red-500/10 border border-red-500/20 text-red-400 text-xs rounded-md">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <button
              onClick={() => setResult(null)}
              className="w-full py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm font-medium hover:bg-white/10 transition-colors"
            >
              Analyze Another Job
            </button>
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
