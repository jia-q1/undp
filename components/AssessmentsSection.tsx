"use client";

import { motion } from "framer-motion";
import { reportData } from "@/lib/data";

export function AssessmentsSection() {
  const data = reportData.assessments;

  return (
    <section
      data-chapter="3"
      className="relative py-24 px-6 bg-gradient-to-b from-ice to-paper"
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
          <span className="inline-block px-4 py-2 rounded-full bg-green/20 text-green text-sm font-semibold mb-4">
            Evidence Base
          </span>
          <h2 className="text-5xl font-bold text-navy mb-4">{data.title}</h2>
          <p className="text-lg text-mid max-w-2xl mx-auto">{data.intro}</p>
        </motion.div>

        {/* Tools */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {data.tools.map((tool, idx) => (
            <div
              key={tool.name}
              className="bg-white rounded-xl shadow-lg border border-rule p-6 border-l-4"
              style={{ borderLeftColor: ["#1D9E75", "#009EDB", "#F0A500"][idx] }}
            >
              <h3 className="text-xl font-bold text-navy mb-1">{tool.name}</h3>
              {tool.fullName && (
                <p className="text-xs text-mid font-semibold mb-3">{tool.fullName}</p>
              )}
              <p className="text-sm text-mid leading-relaxed">{tool.description}</p>
            </div>
          ))}
        </motion.div>

        <motion.p
          className="text-center text-mid italic max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {data.outro}
        </motion.p>

        {/* C3RT dashboard */}
        <motion.div
          className="bg-white rounded-xl shadow-lg border border-rule p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="text-xl font-bold text-navy mb-1">C3RT Assessments Dashboard</h3>
              <p className="text-mid text-sm">Live tracking of RAPIDA, HBDA, and SEIA assessments across crisis contexts.</p>
            </div>
            <a
              href={data.dashboardLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg font-semibold bg-gold text-navy hover:bg-coral hover:text-white transition-colors whitespace-nowrap"
            >
              <span>Open Dashboard</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

          <a href={data.dashboardLink} target="_blank" rel="noopener noreferrer" className="block">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/c3rt.png"
              alt="C3RT Assessments Dashboard preview"
              className="w-full h-auto rounded-lg border border-rule shadow-sm hover:shadow-lg transition-shadow"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
