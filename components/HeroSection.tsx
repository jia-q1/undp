"use client";

import { motion } from "framer-motion";
import { CounterMetric } from "./CounterMetric";
import { reportData } from "@/lib/data";

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section
      data-chapter="0"
      className="relative min-h-screen print:min-h-0 bg-gradient-to-br from-navy via-blue to-navy overflow-hidden flex items-center justify-center pt-20 print:py-12"
    >
      {/* Animated background elements */}
      <motion.div
        className="absolute top-10 right-10 w-72 h-72 bg-teal/20 rounded-full blur-3xl print:hidden"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-10 left-10 w-96 h-96 bg-sky/10 rounded-full blur-3xl print:hidden"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-6xl mx-auto px-6 text-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-block px-4 py-2 rounded-full bg-sky/20 text-sky text-sm font-semibold">
            {reportData.hero.eyebrow}
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
        >
          {reportData.hero.headline}
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-xl text-sky/90 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          {reportData.hero.subheadline}
        </motion.p>

        {/* Metrics Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
          variants={containerVariants}
        >
          <CounterMetric value={2585} label="Deployments" delay={0} />
          <CounterMetric value={150} label="Country Offices" suffix="+" delay={0.1} />
          <CounterMetric value={98.2} label="Via Special Measures" prefix="$" suffix="M" delay={0.2} />
          <CounterMetric value={15000} label="Vetted Experts" suffix="+" delay={0.3} />
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={itemVariants}
          className="mt-16 print:hidden"
        >
          <motion.button
            className="px-8 py-4 bg-sky text-navy font-bold rounded-lg hover:bg-teal transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore the Story
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-sky print:hidden"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  );
}
