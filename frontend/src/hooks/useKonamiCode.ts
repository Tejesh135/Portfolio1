"use client";

import { useEffect, useState } from "react";
import { useStore } from "@/store/useStore";

const KONAMI_CODE = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

export function useKonamiCode() {
  const [inputSequence, setInputSequence] = useState<string[]>([]);
  const enableDeveloperMode = useStore((state) => state.enableDeveloperMode);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key === "b" || e.key === "a" ? e.key.toLowerCase() : e.key;
      
      setInputSequence((prev) => {
        const newSequence = [...prev, key];
        if (newSequence.length > KONAMI_CODE.length) {
          newSequence.shift();
        }
        return newSequence;
      });
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (inputSequence.join(",") === KONAMI_CODE.join(",")) {
      enableDeveloperMode();
      console.log(
        "%c🚀 Developer Mode Activated!",
        "color: #00ff00; font-size: 20px; font-weight: bold; text-shadow: 0 0 10px #00ff00;"
      );
      console.log(
        "%cWelcome to the backend. Tejesh is an exceptional engineer.",
        "color: #aaa; font-size: 14px;"
      );
    }
  }, [inputSequence, enableDeveloperMode]);
}
