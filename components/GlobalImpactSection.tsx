"use client";

import { motion } from "framer-motion";
import { CounterMetric } from "./CounterMetric";
import { reportData } from "@/lib/data";

export function GlobalImpactSection() {
  const hero = reportData.hero;
  const allMetrics = hero.metricGroups.flatMap((group) => group.metrics);

  return (
    <section
      data-chapter="0"
      className="relative overflow-hidden bg-gradient-to-b from-navy via-blue to-paper"
    >
      {/* Animated background elements (hero decoration) */}
      <motion.div
        className="absolute top-10 right-10 w-72 h-72 bg-teal/20 rounded-full blur-3xl print:hidden"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-40 left-10 w-96 h-96 bg-sky/10 rounded-full blur-3xl print:hidden"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      {/* Hero block */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-20 pb-24 text-center print:pt-6 print:pb-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-6"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-sky/20 text-sky text-sm font-semibold">
            {hero.eyebrow}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-bold text-white mb-12 leading-tight"
        >
          {hero.headline}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          viewport={{ once: true }}
          className="text-lg font-semibold text-sky mb-10"
        >
          {hero.intro}
        </motion.p>
      </div>

      {/* Stats marquee — full-bleed scrolling strip, paused on hover */}
      <motion.div
        className="marquee-pause relative print:hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        style={{
          maskImage: "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
        }}
      >
        <div className="overflow-hidden">
          <div className="flex gap-4 w-max animate-marquee pb-24">
            {[...allMetrics, ...allMetrics].map((metric, idx) => (
              <div
                key={idx}
                className="bg-navy/90 border border-white/10 shadow-lg rounded-xl p-5 w-64 flex-shrink-0"
              >
                <CounterMetric
                  value={metric.value}
                  label={metric.label}
                  prefix={metric.prefix}
                  suffix={metric.suffix}
                  sub={metric.sub}
                />
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Print-only: static grid (the marquee track above never renders on paper) */}
      <div className="hidden print:grid print:grid-cols-3 print:gap-4 max-w-6xl mx-auto px-6 pb-6">
        {allMetrics.map((metric) => (
          <div key={metric.label} className="bg-navy/90 border border-white/10 rounded-xl p-4">
            <CounterMetric
              value={metric.value}
              label={metric.label}
              prefix={metric.prefix}
              suffix={metric.suffix}
              sub={metric.sub}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
