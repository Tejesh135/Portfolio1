"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CalendarDays, Video, FileText, Send, CheckCircle2, Mail, MapPin } from "lucide-react";

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
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 border-b border-white/5 pb-6"
        >
          <span className="text-xs font-mono text-gray-500 uppercase tracking-widest block mb-2">[ 06 / INQUIRIES ]</span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white uppercase leading-none">
            LET&apos;S CONNECT
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column - Form */}
          <motion.div 
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {status === "success" ? (
              <div className="border border-green-500/20 bg-green-500/5 p-12 flex flex-col items-center text-center rounded-sm h-full justify-center min-h-[400px]">
                <div className="w-16 h-16 bg-green-500/10 border border-green-500/20 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-white uppercase tracking-tight mb-3">Request Received</h3>
                <p className="text-gray-400 text-sm max-w-md leading-relaxed font-light mb-8">
                  Thank you, {formData.recruiter_name}. I have received your request for a {formData.meeting_type} meeting on {formData.booking_date}. I will confirm shortly via email.
                </p>
                <button 
                  onClick={() => setStatus("idle")}
                  className="px-6 py-2.5 bg-white text-black font-mono text-xs uppercase tracking-wider rounded-sm hover:bg-neutral-200 transition-colors"
                >
                  Book Another Meeting
                </button>
              </div>
            ) : (
              <form 
                onSubmit={handleSubmit}
                className="border border-white/5 bg-black/40 p-8 md:p-10 rounded-sm space-y-6 relative"
              >
                {/* Drafting blueprint crosshairs */}
                <span className="absolute -top-1 -left-1 w-3 h-[1px] bg-white/20" />
                <span className="absolute -top-1 -left-1 w-[1px] h-3 bg-white/20" />
                <span className="absolute -top-1 -right-1 w-3 h-[1px] bg-white/20" />
                <span className="absolute -top-1 -right-1 w-[1px] h-3 bg-white/20" />
                <span className="absolute -bottom-1 -left-1 w-3 h-[1px] bg-white/20" />
                <span className="absolute -bottom-1 -left-1 w-[1px] h-3 bg-white/20" />
                <span className="absolute -bottom-1 -right-1 w-3 h-[1px] bg-white/20" />
                <span className="absolute -bottom-1 -right-1 w-[1px] h-3 bg-white/20" />

                <div>
                  <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest block mb-4">[ Interview Schedule Request ]</span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-mono text-gray-400 uppercase tracking-wider mb-2">Full Name</label>
                    <input required type="text" value={formData.recruiter_name} onChange={e => setFormData({...formData, recruiter_name: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500/50 transition-colors" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-[10px] font-mono text-gray-400 uppercase tracking-wider mb-2">Company</label>
                    <input type="text" value={formData.company_name} onChange={e => setFormData({...formData, company_name: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500/50 transition-colors" placeholder="Tech Inc." />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-mono text-gray-400 uppercase tracking-wider mb-2">Work Email</label>
                  <input required type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500/50 transition-colors" placeholder="john@company.com" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-mono text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-2"><CalendarDays size={12}/> Date & Time</label>
                    <div className="flex gap-2">
                      <input required type="date" value={formData.booking_date} onChange={e => setFormData({...formData, booking_date: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-sm px-3 py-2.5 text-xs text-white focus:outline-none focus:border-blue-500/50 transition-colors [color-scheme:dark]" />
                      <input required type="time" value={formData.booking_time} onChange={e => setFormData({...formData, booking_time: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-sm px-3 py-2.5 text-xs text-white focus:outline-none focus:border-blue-500/50 transition-colors [color-scheme:dark]" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] font-mono text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-2"><Video size={12}/> Meeting Type</label>
                    <select value={formData.meeting_type} onChange={e => setFormData({...formData, meeting_type: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-2.5 text-xs text-white focus:outline-none focus:border-blue-500/50 transition-colors appearance-none">
                      <option className="bg-neutral-950" value="Google Meet">Google Meet</option>
                      <option className="bg-neutral-950" value="Zoom">Zoom</option>
                      <option className="bg-neutral-950" value="Microsoft Teams">Teams</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-mono text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-2"><FileText size={12}/> Purpose</label>
                  <textarea required value={formData.purpose} onChange={e => setFormData({...formData, purpose: e.target.value})} rows={2} className="w-full bg-white/5 border border-white/10 rounded-sm px-4 py-3 text-sm text-white focus:outline-none focus:border-blue-500/50 transition-colors resize-none" placeholder="E.g., Technical Interview for AI/ML Engineer role" />
                </div>

                <div className="pt-4">
                  <button 
                    type="submit" 
                    disabled={status === "loading"}
                    className="w-full flex items-center justify-center gap-2 px-8 py-3 bg-white text-black font-mono text-xs uppercase tracking-wider rounded-sm hover:bg-neutral-200 transition-colors disabled:opacity-50"
                  >
                    {status === "loading" ? "Processing..." : <><Send size={14} /> Request Interview</>}
                  </button>
                  {status === "error" && (
                    <p className="text-red-400 text-[10px] font-mono uppercase tracking-wider mt-4 text-center">Deployment error. Please retry.</p>
                  )}
                </div>
              </form>
            )}
          </motion.div>

          {/* Right Column - Structured Contacts */}
          <motion.div
            className="lg:col-span-5 flex flex-col justify-between"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 w-full h-full justify-between">
              
              {/* Email */}
              <div className="border border-white/5 bg-black/40 p-6 rounded-sm relative flex flex-col justify-between min-h-[120px]">
                <span className="absolute -top-1 -left-1 w-2.5 h-[1px] bg-white/20" />
                <span className="absolute -top-1 -left-1 w-[1px] h-2.5 bg-white/20" />
                <span className="absolute -bottom-1 -right-1 w-2.5 h-[1px] bg-white/20" />
                <span className="absolute -bottom-1 -right-1 w-[1px] h-2.5 bg-white/20" />
                
                <span className="text-[9px] font-mono text-gray-500 uppercase tracking-widest flex items-center gap-1.5">
                  <Mail size={10} className="text-blue-400" /> [ E-MAIL DIRECT ]
                </span>
                <div className="mt-4">
                  <a href="mailto:poolatejesh2006@gmail.com" className="text-sm font-bold text-white hover:text-blue-400 transition-colors tracking-tight font-mono block">
                    poolatejesh2006@gmail.com
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="border border-white/5 bg-black/40 p-6 rounded-sm relative flex flex-col justify-between min-h-[120px]">
                <span className="absolute -top-1 -left-1 w-2.5 h-[1px] bg-white/20" />
                <span className="absolute -top-1 -left-1 w-[1px] h-2.5 bg-white/20" />
                <span className="absolute -bottom-1 -right-1 w-2.5 h-[1px] bg-white/20" />
                <span className="absolute -bottom-1 -right-1 w-[1px] h-2.5 bg-white/20" />
                
                <span className="text-[9px] font-mono text-gray-500 uppercase tracking-widest flex items-center gap-1.5">
                  <MapPin size={10} className="text-purple-400" /> [ GEOGRAPHIC SITE ]
                </span>
                <div className="mt-4">
                  <span className="text-sm font-bold text-white tracking-tight uppercase block">
                    Hyderabad, India
                  </span>
                  <span className="text-[9px] font-mono text-gray-500 uppercase tracking-wider block mt-0.5">Open to Remote &amp; Relocation</span>
                </div>
              </div>

              {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/poola-tejesh/" target="_blank" rel="noreferrer" className="border border-white/5 bg-black/40 p-6 rounded-sm relative flex flex-col justify-between min-h-[120px] group hover:border-white/25 transition-colors">
                <span className="absolute -top-1 -left-1 w-2.5 h-[1px] bg-white/20" />
                <span className="absolute -top-1 -left-1 w-[1px] h-2.5 bg-white/20" />
                <span className="absolute -bottom-1 -right-1 w-2.5 h-[1px] bg-white/20" />
                <span className="absolute -bottom-1 -right-1 w-[1px] h-2.5 bg-white/20" />
                
                <span className="text-[9px] font-mono text-gray-500 uppercase tracking-widest flex items-center gap-1.5">
                  <svg className="w-3 h-3 text-[#0A66C2]" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg> [ PROFESSIONAL NETWORK ]
                </span>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm font-bold text-white tracking-tight uppercase block group-hover:text-blue-400 transition-colors">
                    LinkedIn Profile
                  </span>
                  <span className="text-[9px] font-mono text-gray-500 uppercase group-hover:text-white transition-colors">Connect →</span>
                </div>
              </a>

              {/* GitHub */}
              <a href="https://github.com/Tejesh135" target="_blank" rel="noreferrer" className="border border-white/5 bg-black/40 p-6 rounded-sm relative flex flex-col justify-between min-h-[120px] group hover:border-white/25 transition-colors">
                <span className="absolute -top-1 -left-1 w-2.5 h-[1px] bg-white/20" />
                <span className="absolute -top-1 -left-1 w-[1px] h-2.5 bg-white/20" />
                <span className="absolute -bottom-1 -right-1 w-2.5 h-[1px] bg-white/20" />
                <span className="absolute -bottom-1 -right-1 w-[1px] h-2.5 bg-white/20" />
                
                <span className="text-[9px] font-mono text-gray-500 uppercase tracking-widest flex items-center gap-1.5">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg> [ REPOSITORY INDEX ]
                </span>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm font-bold text-white tracking-tight uppercase block group-hover:text-blue-400 transition-colors">
                    GitHub Codebase
                  </span>
                  <span className="text-[9px] font-mono text-gray-500 uppercase group-hover:text-white transition-colors">Inspect →</span>
                </div>
              </a>

            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
