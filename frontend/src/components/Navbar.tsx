"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Bot, Briefcase } from "lucide-react";
import clsx from "clsx";
import { useStore } from "@/store/useStore";

import { useScroll, useSpring } from "framer-motion";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isRecruiterMode = useStore((state) => state.isRecruiterMode);
  const toggleRecruiterMode = useStore((state) => state.toggleRecruiterMode);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "/#skills" },
    { name: "Projects", href: "/#projects" },
    { name: "Interview", href: "/interview" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-blue-500 origin-left z-[60]"
        style={{ scaleX }}
      />
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={clsx(
          "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 transition-all duration-300",
          isScrolled ? "glass border-b border-white/10" : "bg-transparent mt-1"
        )}
      >
        <div className="flex items-center gap-2">
          <a href="/" className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center font-bold text-xl hover:scale-105 transition-transform">
            T
          </a>
          <a href="/" className="font-semibold text-lg tracking-wide hidden sm:block">TEJESH.AI</a>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm text-gray-300 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={toggleRecruiterMode}
            className={clsx(
              "flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
              isRecruiterMode
                ? "bg-blue-500/20 text-blue-400 border border-blue-500/50 shadow-[0_0_15px_rgba(59,130,246,0.3)]"
                : "bg-white/5 text-gray-400 border border-white/10 hover:bg-white/10 hover:text-white"
            )}
          >
            <Briefcase size={16} />
            Recruiter Mode
          </button>
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </motion.nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-black/95 flex flex-col items-center justify-center gap-8"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-medium text-white hover:text-blue-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a href="/interview" className="mt-8 px-8 py-3 bg-blue-600 text-white text-lg font-medium rounded-full transition-colors">
              Chat with AI
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
