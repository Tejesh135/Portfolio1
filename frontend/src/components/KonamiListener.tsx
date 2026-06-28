"use client";
import { useEffect } from "react";
import { useKonamiCode } from "@/hooks/useKonamiCode";

export function KonamiListener() {
  useKonamiCode();

  useEffect(() => {
    console.log(
      "%c Welcome to my AI-powered portfolio! 🚀 ",
      "background: #2563eb; color: #fff; font-size: 20px; font-weight: bold; padding: 8px; border-radius: 4px;"
    );
    console.log(
      "%c If you're reading this, we should probably talk. Reach out at the contact section!\n\nAlso, try typing the Konami Code for a surprise... (↑ ↑ ↓ ↓ ← → ← → B A)",
      "color: #9ca3af; font-size: 14px; padding: 4px;"
    );
  }, []);

  return null;
}
