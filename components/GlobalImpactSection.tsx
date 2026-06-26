"use client";

import { motion } from "framer-motion";
import { CounterMetric } from "./CounterMetric";
import { reportData } from "@/lib/data";

export function GlobalImpactSection() {
  const hero = reportData.hero;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

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
          className="text-3xl md:text-4xl font-bold text-white mb-10"
        >
          {hero.intro}
        </motion.p>

        <div className="space-y-10">
          {hero.metricGroups.map((group, gIdx) => (
            <motion.div
              key={group.title}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="text-2xl md:text-3xl font-bold uppercase tracking-wide text-white mb-4">
                {group.title}
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                {group.metrics.map((metric, idx) => (
                  <div
                    key={metric.label}
                    className="bg-navy/90 border border-white/10 shadow-lg rounded-xl p-5 w-full sm:w-64"
                  >
                    <CounterMetric
                      value={metric.value}
                      label={metric.label}
                      prefix={metric.prefix}
                      suffix={metric.suffix}
                      sub={metric.sub}
                      delay={gIdx * 0.15 + idx * 0.05}
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
