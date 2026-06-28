"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CalendarDays, Clock, Video, FileText, Send, CheckCircle2, MapPin, Mail } from "lucide-react";

export function Booking() {
  const [formData, setFormData] = useState({
    recruiter_name: "",
    company_name: "",
    email: "",
    meeting_type: "Google Meet",
    booking_date: "",
    booking_time: "",
    purpose: ""
  });
  
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      
      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 relative w-full flex flex-col items-center justify-center px-6 lg:px-8 bg-black">
      <div className="max-w-7xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="text-sm font-medium tracking-widest text-blue-500 uppercase mb-3">06. Get in Touch</h2>
          <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Let's Build Together
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column - Booking Form */}
          <motion.div 
            className="lg:col-span-7"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {status === "success" ? (
              <div className="glass p-12 rounded-3xl flex flex-col items-center text-center border border-green-500/30 h-full justify-center">
                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-10 h-10 text-green-400" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">Request Sent!</h3>
                <p className="text-gray-400 text-lg">
                  Thank you, {formData.recruiter_name}. I have received your request for a {formData.meeting_type} meeting on {formData.booking_date}. I will confirm shortly via email.
                </p>
                <button 
                  onClick={() => setStatus("idle")}
                  className="mt-8 px-8 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors border border-white/20"
                >
                  Book Another Meeting
                </button>
              </div>
            ) : (
              <form 
                onSubmit={handleSubmit}
                className="glass p-8 md:p-10 rounded-3xl border border-white/5 space-y-6 relative z-50 pointer-events-auto"
              >
                <h4 className="text-2xl font-semibold text-white mb-8 border-b border-white/10 pb-4">Schedule an Interview</h4>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Full Name</label>
                    <input required type="text" value={formData.recruiter_name} onChange={e => setFormData({...formData, recruiter_name: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">Company</label>
                    <input type="text" value={formData.company_name} onChange={e => setFormData({...formData, company_name: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="Tech Inc." />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Work Email</label>
                  <input required type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="john@company.com" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2 flex items-center gap-2"><CalendarDays size={16}/> Date & Time</label>
                    <div className="flex gap-2">
                      <input required type="date" value={formData.booking_date} onChange={e => setFormData({...formData, booking_date: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors [color-scheme:dark]" />
                      <input required type="time" value={formData.booking_time} onChange={e => setFormData({...formData, booking_time: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-xl px-3 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors [color-scheme:dark]" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2 flex items-center gap-2"><Video size={16}/> Meeting Type</label>
                    <select value={formData.meeting_type} onChange={e => setFormData({...formData, meeting_type: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors appearance-none">
                      <option className="bg-gray-900" value="Google Meet">Google Meet</option>
                      <option className="bg-gray-900" value="Zoom">Zoom</option>
                      <option className="bg-gray-900" value="Microsoft Teams">Teams</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2 flex items-center gap-2"><FileText size={16}/> Purpose</label>
                  <textarea required value={formData.purpose} onChange={e => setFormData({...formData, purpose: e.target.value})} rows={2} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none" placeholder="E.g., Interview for ML Engineer role" />
                </div>

                <div className="pt-4">
                  <button 
                    type="submit" 
                    disabled={status === "loading"}
                    className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-colors disabled:opacity-50"
                  >
                    {status === "loading" ? "Processing..." : <><Send size={20} /> Request Interview</>}
                  </button>
                  {status === "error" && (
                    <p className="text-red-400 text-sm mt-4 text-center">Something went wrong. Please try again.</p>
                  )}
                </div>
              </form>
            )}
          </motion.div>

          {/* Right Column - Map & Details */}
          <motion.div
            className="lg:col-span-5 flex flex-col gap-8 h-full"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Minimal Map UI */}
            <div className="glass flex-1 rounded-3xl border border-white/5 relative overflow-hidden flex items-center justify-center min-h-[300px]">
              <div className="absolute inset-0 bg-blue-900/10 pointer-events-none" />
              
              {/* Simple stylized SVG Map */}
              <svg viewBox="0 0 800 400" className="w-full h-full opacity-30 px-8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M150 150 Q 250 50 350 150 T 550 150" stroke="white" strokeWidth="2" strokeDasharray="5,5" />
                <circle cx="150" cy="150" r="4" fill="white" />
                <circle cx="550" cy="150" r="4" fill="white" />
                {/* Abstract Continents */}
                <path d="M100 100 C 120 80, 180 80, 200 120 C 220 160, 180 220, 140 240 C 100 260, 60 200, 80 140 Z" fill="currentColor" className="text-white/20"/>
                <path d="M400 60 C 450 40, 520 60, 550 100 C 580 140, 560 200, 520 220 C 480 240, 420 260, 380 200 C 340 140, 360 80, 400 60 Z" fill="currentColor" className="text-white/20"/>
                <path d="M600 120 C 630 100, 680 120, 700 160 C 720 200, 700 260, 660 280 C 620 300, 580 240, 580 180 Z" fill="currentColor" className="text-white/20"/>
              </svg>

              {/* Location Marker */}
              <div className="absolute top-[35%] left-[25%] flex items-center justify-center">
                <span className="absolute w-8 h-8 rounded-full bg-blue-500/30 animate-ping" />
                <span className="relative w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.8)]" />
              </div>
            </div>

            {/* Contact Details */}
            <div className="grid grid-cols-2 gap-4">
              <div className="glass p-6 rounded-3xl border border-white/5 flex flex-col gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center">
                  <Mail className="text-blue-400 w-5 h-5" />
                </div>
                <h4 className="text-white font-medium">Email Me</h4>
                <a href="mailto:poolatejesh2006@gmail.com" className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors truncate">poolatejesh2006@gmail.com</a>
              </div>
              <div className="glass p-6 rounded-3xl border border-white/5 flex flex-col gap-3">
                <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center">
                  <MapPin className="text-purple-400 w-5 h-5" />
                </div>
                <h4 className="text-white font-medium">Location</h4>
                <span className="text-sm text-gray-400">Open to Remote / Relocation</span>
              </div>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="glass p-6 rounded-3xl border border-white/5 flex flex-col gap-3 group hover:border-blue-500/30 transition-colors">
                <div className="w-10 h-10 rounded-full bg-[#0A66C2]/10 flex items-center justify-center group-hover:bg-[#0A66C2]/20 transition-colors">
                  <svg className="w-5 h-5 text-[#0A66C2]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </div>
                <h4 className="text-white font-medium">LinkedIn</h4>
                <span className="text-sm text-gray-400">Connect with me</span>
              </a>
              <a href="https://github.com/repos" target="_blank" rel="noreferrer" className="glass p-6 rounded-3xl border border-white/5 flex flex-col gap-3 group hover:border-white/30 transition-colors">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </div>
                <h4 className="text-white font-medium">GitHub</h4>
                <span className="text-sm text-gray-400">View my repositories</span>
              </a>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
