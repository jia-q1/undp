"use client";

import { motion } from "framer-motion";
import { reportData } from "@/lib/data";

export function WorkforceIntelligenceSection() {
  const { title, tool } = reportData.crisisSignals;

  return (
    <section
      data-chapter="8"
      className="relative py-24 px-6 bg-gradient-to-b from-paper to-ice"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-blue/20 text-blue text-sm font-semibold mb-4">
            Decision Support
          </span>
          <h2 className="text-5xl font-bold text-navy mb-4">{title}</h2>
          <p className="text-lg text-mid max-w-2xl mx-auto">
            Live crisis demand scoring to guide where talent and resources go next
          </p>
        </motion.div>

        {/* Tool card */}
        <motion.div
          className="bg-white rounded-xl shadow-lg border border-rule overflow-hidden max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="p-8 text-white bg-gradient-to-r from-sky to-teal">
            <div className="text-xs font-semibold opacity-90 mb-2">{tool.organization}</div>
            <h3 className="text-2xl font-bold mb-3">{tool.name}</h3>
            <p className="text-sm leading-relaxed opacity-95">{tool.description}</p>
          </div>

          <div className="p-8">
            <a href={tool.link} target="_blank" rel="noopener noreferrer" className="block mb-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/crisis_demand_profile_dash.png"
                alt="Crisis Demand Profile Dashboard preview"
                className="w-full h-auto rounded-lg border border-rule shadow-sm hover:shadow-lg transition-shadow"
              />
            </a>
            <div className="text-center">
              <a
                href={tool.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg font-semibold bg-sky text-white hover:bg-teal transition-all hover:scale-105"
              >
                <span>Open Dashboard</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
