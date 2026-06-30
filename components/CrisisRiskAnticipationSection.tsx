"use client";

import { motion } from "framer-motion";
import { reportData } from "@/lib/data";

export function CrisisRiskAnticipationSection() {
  const { crisisRiskAnticipation } = reportData.crisisProgramming;

  return (
    <section
      data-chapter="risk-anticipation"
      className="relative py-24 px-6 bg-gradient-to-b from-ice to-paper"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-blue/20 text-blue text-sm font-semibold mb-4">
            Risk & Anticipation
          </span>
          <h2 className="text-5xl font-bold text-navy mb-4">{crisisRiskAnticipation.name}</h2>
        </motion.div>

        <div className="space-y-12">
          {crisisRiskAnticipation.tools.map((tool, idx) => (
            <motion.div
              key={tool.name}
              className="bg-white rounded-xl shadow-lg border border-rule p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-navy mb-3">{tool.name}</h3>
              <p className="text-mid text-sm leading-relaxed mb-6">{tool.description}</p>

              {tool.screenshot ? (
                <a
                  href={tool.link || undefined}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={tool.link ? "block mb-4" : "block mb-4 pointer-events-none"}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={tool.screenshot}
                    alt={`${tool.name} screenshot`}
                    className="w-full h-auto rounded-lg border border-rule shadow-sm hover:shadow-lg transition-shadow"
                  />
                </a>
              ) : (
                <div className="w-full h-48 rounded-lg border-2 border-dashed border-rule bg-ice flex items-center justify-center text-mid text-sm mb-4">
                  Screenshot coming soon
                </div>
              )}

              {tool.linkLabel && (
                tool.link ? (
                  <a
                    href={tool.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold bg-blue text-white hover:bg-navy transition-colors"
                  >
                    {tool.linkLabel}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold bg-ice text-mid border border-rule cursor-default">
                    {tool.linkLabel}
                  </span>
                )
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
