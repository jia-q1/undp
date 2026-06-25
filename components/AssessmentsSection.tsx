"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { reportData } from "@/lib/data";

export function AssessmentsSection() {
  const data = reportData.assessments;
  const [openTool, setOpenTool] = useState<string | null>(null);
  const toggleTool = (name: string) => setOpenTool((prev) => (prev === name ? null : name));

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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 items-start"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {data.tools.map((tool, idx) => {
            const hasStats = tool.statsByYear.length > 0;
            return (
              <div
                key={tool.name}
                className="bg-white rounded-xl shadow-lg border border-rule p-6 border-l-4"
                style={{ borderLeftColor: ["#1D9E75", "#009EDB", "#F0A500", "#7F77DD"][idx] }}
              >
                <h3 className="text-xl font-bold text-navy mb-1">{tool.name}</h3>
                {tool.fullName && (
                  <p className="text-xs text-mid font-semibold mb-3">{tool.fullName}</p>
                )}
                {tool.description && (
                  <p className="text-sm text-mid leading-relaxed mb-4">{tool.description}</p>
                )}

                {!hasStats && (
                  <div className="text-xs text-mid italic border border-dashed border-rule rounded-lg px-3 py-2">
                    Data pending
                  </div>
                )}

                {hasStats && (
                  <>
                    <div className="print:hidden border border-rule rounded-lg overflow-hidden">
                      <button
                        onClick={() => toggleTool(tool.name)}
                        className="w-full flex items-center justify-between gap-2 px-3 py-2 text-left bg-ice/60 hover:bg-ice transition-colors"
                      >
                        <span className="text-xs font-bold text-navy uppercase tracking-wide">
                          {tool.statsByYear.reduce((sum, y) => sum + y.total, 0)} assessments since 2025
                        </span>
                        <motion.span
                          animate={{ rotate: openTool === tool.name ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                          className="text-mid flex-shrink-0"
                        >
                          ▾
                        </motion.span>
                      </button>
                      <AnimatePresence initial={false}>
                        {openTool === tool.name && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="overflow-hidden"
                          >
                            <div className="px-3 py-3 space-y-3">
                              {tool.statsByYear.map((yearStat) => (
                                <div key={yearStat.year}>
                                  <div className="text-xs font-bold text-navy uppercase tracking-wide mb-1.5">
                                    {yearStat.year} — {yearStat.total} assessment{yearStat.total !== 1 ? "s" : ""} ·{" "}
                                    {yearStat.countries.length} countr{yearStat.countries.length !== 1 ? "ies" : "y"}
                                  </div>
                                  <div className="flex flex-wrap gap-1.5">
                                    {yearStat.countries.map((c) => (
                                      <span
                                        key={c.name}
                                        className="text-xs px-2 py-1 rounded-md bg-white border border-rule text-blue font-medium"
                                      >
                                        {c.name}
                                        {c.count > 1 ? ` (${c.count})` : ""}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Print-only: full listing (screen shows the collapsible dropdown above) */}
                    <div className="hidden print:block space-y-2">
                      {tool.statsByYear.map((yearStat) => (
                        <div key={yearStat.year}>
                          <div className="text-xs font-bold text-navy uppercase tracking-wide mb-1">
                            {yearStat.year} — {yearStat.total} assessment{yearStat.total !== 1 ? "s" : ""} ·{" "}
                            {yearStat.countries.length} countr{yearStat.countries.length !== 1 ? "ies" : "y"}
                          </div>
                          <div className="flex flex-wrap gap-1.5">
                            {yearStat.countries.map((c) => (
                              <span
                                key={c.name}
                                className="text-xs px-2 py-1 rounded-md bg-ice border border-rule text-blue font-medium"
                              >
                                {c.name}
                                {c.count > 1 ? ` (${c.count})` : ""}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            );
          })}
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
