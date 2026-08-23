"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import clsx from "clsx";
import Link from "next/link";
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

  // Background scroll lock when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

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
        className="fixed top-0 left-0 right-0 h-[2px] bg-white origin-left z-[60]"
        style={{ scaleX }}
      />
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={clsx(
          "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 transition-all duration-300",
          isScrolled ? "glass border-b border-white/5" : "bg-transparent"
        )}
      >
        <div className="flex items-center gap-6">
          <Link href="/" className="font-mono text-sm tracking-widest text-white hover:opacity-85 transition-opacity">
            TEJESH.AI
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-xs text-gray-400 hover:text-white transition-colors hover-link-effect"
            >
              {link.name}
            </Link>
          ))}
          <button
            onClick={toggleRecruiterMode}
            className={clsx(
              "flex items-center gap-2 px-3 py-1.5 rounded-md text-[10px] font-mono tracking-wider uppercase transition-all duration-200 border",
              isRecruiterMode
                ? "bg-white/10 border-white/20 text-white font-semibold"
                : "bg-transparent border-white/10 text-gray-400 hover:text-white hover:border-white/20"
            )}
          >
            <span className={clsx(
              "w-1.5 h-1.5 rounded-full inline-block",
              isRecruiterMode ? "bg-green-400 animate-pulse" : "bg-gray-600"
            )} />
            Recruiter Mode
          </button>
        </div>

        {/* Mobile menu trigger */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </motion.nav>

      {/* Redesigned Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/98 backdrop-blur-md flex flex-col justify-between p-8"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/5 pb-4">
              <span className="font-semibold text-xs tracking-widest text-gray-500 uppercase font-mono">[Menu]</span>
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="text-white p-2"
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>
            
            {/* Links */}
            <div className="flex flex-col gap-6 my-auto items-start">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-3xl font-light text-gray-400 hover:text-white transition-all tracking-tight"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Footer actions */}
            <div className="flex flex-col gap-3 border-t border-white/5 pt-6 w-full">
              <Link 
                href="/interview" 
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 bg-white text-black font-semibold text-center rounded-md text-xs uppercase tracking-wider transition-all hover:bg-neutral-200"
              >
                Start AI Interview
              </Link>
              <button
                onClick={() => {
                  toggleRecruiterMode();
                  setMobileMenuOpen(false);
                }}
                className={clsx(
                  "w-full py-3 border rounded-md text-xs font-mono tracking-wider uppercase text-center transition-all",
                  isRecruiterMode
                    ? "bg-white/10 border-white/20 text-white"
                    : "bg-transparent border-white/10 text-gray-400"
                )}
              >
                Recruiter Mode: {isRecruiterMode ? "ACTIVE" : "OFF"}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
