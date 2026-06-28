"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Mic, Send, Bot, StopCircle, ArrowLeft, BrainCircuit } from "lucide-react";
import Link from "next/link";
import clsx from "clsx";

export default function InterviewPage() {
  const [messages, setMessages] = useState<{ role: "ai" | "user"; content: string }[]>([
    { role: "ai", content: "Hello! I am Tejesh's AI Digital Twin. I'm ready for a technical interview. What would you like to ask me?" }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const speak = (text: string) => {
    if (!("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    
    setIsSpeaking(true);
    const utterance = new SpeechSynthesisUtterance(text);
    
    const voices = window.speechSynthesis.getVoices();
    const preferredVoice = voices.find(v => v.lang.includes("en-US") || v.lang.includes("en-GB"));
    if (preferredVoice) utterance.voice = preferredVoice;
    
    utterance.rate = 1.0;
    utterance.pitch = 1;
    
    utterance.onend = () => setIsSpeaking(false);
    window.speechSynthesis.speak(utterance);
  };

  const stopSpeaking = () => {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  };

  const toggleListening = () => {
    if (!("webkitSpeechRecognition" in window) && !("SpeechRecognition" in window)) {
      alert("Speech recognition is not supported in this browser.");
      return;
    }

    if (isListening) {
      setIsListening(false);
      return;
    }

    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onstart = () => {
      setIsListening(true);
      stopSpeaking();
    };

    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      setInput(transcript);
      handleSend(transcript);
    };

    recognition.onerror = (event: any) => {
      console.error("Speech recognition error", event.error);
      setIsListening(false);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.start();
  };

  const handleSend = async (text: string = input) => {
    if (!text.trim()) return;

    const userMessage = text.trim();
    setInput("");
    setMessages(prev => [...prev, { role: "user", content: userMessage }]);
    setIsLoading(true);
    stopSpeaking();

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage, isInterviewMode: true }),
      });

      const data = await res.json();
      
      if (data.reply) {
        setMessages(prev => [...prev, { role: "ai", content: data.reply }]);
        speak(data.reply);
      } else {
        setMessages(prev => [...prev, { role: "ai", content: "I encountered an error. Please try again." }]);
      }
    } catch (error) {
      setMessages(prev => [...prev, { role: "ai", content: "Network error. Please try again." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#050505] text-white flex flex-col relative overflow-hidden">
      
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/10 blur-[150px] rounded-full pointer-events-none" />

      {/* Header */}
      <header className="relative z-10 px-6 py-6 flex items-center justify-between border-b border-white/10 glass">
        <Link href="/" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
          <ArrowLeft size={20} />
          <span>Exit Interview</span>
        </Link>
        <div className="flex items-center gap-3">
          <BrainCircuit className={clsx("w-6 h-6", isSpeaking ? "text-blue-400 animate-pulse" : "text-gray-500")} />
          <h1 className="font-semibold text-lg tracking-wide hidden sm:block">AI Digital Twin Interview</h1>
        </div>
        <div className="flex items-center gap-2 text-sm font-medium">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-green-400">System Ready</span>
        </div>
      </header>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto p-6 md:p-12 relative z-10 scrollbar-hide">
        <div className="max-w-4xl mx-auto space-y-8">
          {messages.map((msg, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={clsx(
                "flex max-w-[85%] md:max-w-[75%]",
                msg.role === "user" ? "ml-auto justify-end" : "mr-auto justify-start"
              )}
            >
              {msg.role === "ai" && (
                <div className="w-10 h-10 rounded-full bg-blue-500/20 border border-blue-500/30 flex flex-shrink-0 items-center justify-center mr-4 mt-2 hidden sm:flex">
                  <Bot className="w-5 h-5 text-blue-400" />
                </div>
              )}
              
              <div className={clsx(
                "p-5 rounded-3xl text-base md:text-lg leading-relaxed shadow-xl border",
                msg.role === "user" 
                  ? "bg-blue-600 text-white rounded-tr-sm border-blue-500" 
                  : "glass text-gray-200 rounded-tl-sm border-white/10"
              )}>
                {msg.content}
              </div>
            </motion.div>
          ))}
          
          {isLoading && (
            <div className="flex max-w-[85%] md:max-w-[75%] mr-auto justify-start">
              <div className="w-10 h-10 rounded-full bg-blue-500/20 border border-blue-500/30 flex flex-shrink-0 items-center justify-center mr-4 mt-2 hidden sm:flex">
                <Bot className="w-5 h-5 text-blue-400" />
              </div>
              <div className="p-6 rounded-3xl glass border border-white/10 rounded-tl-sm flex items-center gap-3">
                <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce" />
                <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce delay-100" />
                <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce delay-200" />
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input Area */}
      <div className="p-6 md:p-8 bg-black/60 border-t border-white/10 relative z-10 glass">
        <div className="max-w-4xl mx-auto flex items-end gap-4">
          <div className="flex-1 bg-white/5 border border-white/10 rounded-3xl p-3 flex items-center gap-3 focus-within:border-blue-500/50 transition-colors shadow-inner">
            <button 
              onClick={toggleListening}
              className={clsx(
                "p-4 rounded-full transition-all duration-300 flex-shrink-0",
                isListening ? "bg-red-500/20 text-red-400 animate-pulse shadow-[0_0_20px_rgba(239,68,68,0.3)]" : "hover:bg-white/10 text-gray-400"
              )}
            >
              {isListening ? <StopCircle size={24} /> : <Mic size={24} />}
            </button>

            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSend();
                }
              }}
              placeholder="Ask an interview question..."
              className="w-full bg-transparent text-white placeholder-gray-500 text-lg resize-none focus:outline-none max-h-32 py-4 px-2 scrollbar-hide"
              rows={1}
            />
          </div>

          <button 
            onClick={() => handleSend()}
            disabled={!input.trim() || isLoading}
            className="p-5 rounded-full bg-blue-600 text-white hover:bg-blue-500 disabled:opacity-50 disabled:hover:bg-blue-600 transition-colors flex-shrink-0 shadow-[0_0_20px_rgba(37,99,235,0.4)]"
          >
            <Send size={24} />
          </button>
        </div>
      </div>
    </main>
  );
}
