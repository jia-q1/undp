"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollStore } from "@/lib/store";
import { reportData } from "@/lib/data";

export function Header() {
  const activeChapter = useScrollStore((state) => state.activeChapter);
  const pathname = usePathname();
  const [countriesOpen, setCountriesOpen] = useState(false);
  const countries = Object.entries(reportData.countryProfiles).map(([id, profile]) => ({
    id,
    name: profile.name,
  }));
  const onCountryPage = pathname?.startsWith("/countries/") ?? false;
  const chapters = [
    "Global Impact",
    "Crisis Funding",
    "Crisis Programming",
    "Crisis Response",
    "Assessments",
    "Talent Network",
    "Crisis Operations",
    "Readiness",
    "Crisis Signals",
  ];

  const handleChapterJump = (index: number) => {
    const elements = document.querySelectorAll("[data-chapter]");
    if (elements[index]) {
      elements[index].scrollIntoView({ behavior: "smooth" });
    }
  };

  const handlePrint = async () => {
    const startY = window.scrollY;
    // Walk the whole document in viewport-sized steps (not just a jump to
    // each chapter's top) so every scroll-reveal animation actually fires —
    // tall sections have content deeper than one viewport below their top,
    // which a single per-chapter jump would skip and leave un-animated.
    const step = Math.max(window.innerHeight * 0.85, 400);
    const maxY = document.documentElement.scrollHeight - window.innerHeight;
    for (let y = 0; y <= maxY; y += step) {
      window.scrollTo({ top: y, behavior: "auto" });
      await new Promise((resolve) => setTimeout(resolve, 350));
    }
    window.scrollTo({ top: maxY, behavior: "auto" });
    await new Promise((resolve) => setTimeout(resolve, 350));
    window.scrollTo({ top: startY, behavior: "auto" });
    await new Promise((resolve) => setTimeout(resolve, 200));
    window.print();
  };

  return (
    <header className="sticky top-0 z-40 bg-gradient-to-b from-navy to-navy/95 border-b border-white/10 print:hidden">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold text-white">Crisis Bureau</h1>
            <p className="text-sm text-sky">Country Office Support 2025</p>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={handlePrint}
              className="px-3 py-2 text-xs font-semibold rounded-lg border border-white/20 text-white/80 hover:bg-white/10 hover:text-white transition-colors whitespace-nowrap"
            >
              Print Report
            </button>
          </div>
        </div>

        {/* Chapter navigation */}
        <div className="flex flex-wrap gap-2.5 overflow-x-auto pb-2 md:overflow-visible md:pb-0 md:justify-center">
          {chapters.map((chapter, index) => (
            <motion.button
              key={index}
              onClick={() => handleChapterJump(index)}
              className="px-5 py-2.5 text-sm font-semibold rounded-full whitespace-nowrap transition-all border"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              style={{
                background: index === activeChapter ? "rgba(0, 157, 219, 0.25)" : "rgba(255, 255, 255, 0.12)",
                color: index === activeChapter ? "#009EDB" : "rgba(255, 255, 255, 0.9)",
                borderColor: index === activeChapter ? "#009EDB" : "rgba(255, 255, 255, 0.25)",
              }}
            >
              {chapter}
            </motion.button>
          ))}

          <motion.button
            onClick={() => setCountriesOpen((open) => !open)}
            className="px-5 py-2.5 text-sm font-semibold rounded-full whitespace-nowrap transition-all border inline-flex items-center gap-1.5"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: chapters.length * 0.05 }}
            style={{
              background: countriesOpen || onCountryPage ? "rgba(0, 157, 219, 0.25)" : "rgba(255, 255, 255, 0.12)",
              color: countriesOpen || onCountryPage ? "#009EDB" : "rgba(255, 255, 255, 0.9)",
              borderColor: countriesOpen || onCountryPage ? "#009EDB" : "rgba(255, 255, 255, 0.25)",
            }}
          >
            Countries
            <motion.span animate={{ rotate: countriesOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
              ▾
            </motion.span>
          </motion.button>
        </div>

        {/* Countries panel — expands inline below the chapter nav */}
        <AnimatePresence initial={false}>
          {countriesOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden"
            >
              <div className="flex flex-wrap gap-2.5 justify-center pt-4 mt-2 border-t border-white/10">
                {countries.map((country) => (
                  <Link
                    key={country.id}
                    href={`/countries/${country.id}`}
                    className="px-4 py-2 text-sm font-medium rounded-full whitespace-nowrap border border-white/20 text-white/80 bg-white/5 hover:bg-white/15 hover:text-white transition-colors"
                  >
                    {country.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
