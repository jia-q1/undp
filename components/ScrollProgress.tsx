"use client";

import { useScrollStore } from "@/lib/store";

export function ScrollProgress() {
  const scrollProgress = useScrollStore((state) => state.scrollProgress);

  return (
    <div className="fixed top-0 left-0 right-0 h-1 bg-navy/10 z-50 print:hidden">
      <div
        className="h-full bg-gradient-to-r from-sky to-teal transition-all duration-200"
        style={{ width: `${scrollProgress * 100}%` }}
      />
    </div>
  );
}
