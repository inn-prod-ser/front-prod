"use client";

import { useEffect, useRef, useState } from "react";

import { UI } from "../../ui";

const searchingMessages = [
  "Buscando...",
  "Analizando resultados...",
  "Explorando cursos...",
  "Casi listo...",
];

export const AnimatedSearching = () => {
  const [messageIndex, setMessageIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % searchingMessages.length);
    }, 1500);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center p-4 text-center text-black/60 dark:text-white/70 min-h-[120px]">
      <UI.Spinner />
      <span className="mt-2 text-base animate-pulse">
        {searchingMessages[messageIndex]}
      </span>
    </div>
  );
};
