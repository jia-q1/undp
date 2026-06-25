"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { reportData } from "@/lib/data";

export function SpecialMeasuresSection() {
  const [activePillar, setActivePillar] = useState<number | null>(null);
  const [activeCO, setActiveCO] = useState<number | null>(null);
  const pillars = reportData.specialMeasures.pillars;
  const { coDelivery, officesActivated, microHactsWaived, regionLeader, q4Activations, reviveProject, extensionsRequested, dashboardLink } =
    reportData.specialMeasures;

  const pillarColors = [
    { bg: "#003F6B", light: "#E8F4FA", accent: "#009EDB" },
    { bg: "#00689D", light: "#E1F5EE", accent: "#1D9E75" },
    { bg: "#E05A2B", light: "#FBE9E3", accent: "#003F6B" },
    { bg: "#00B5C8", light: "#E1F5EE", accent: "#003F6B" },
    { bg: "#F0A500", light: "#FEF8EC", accent: "#003F6B" },
    { bg: "#7F77DD", light: "#EEEDFB", accent: "#003F6B" },
  ];

  return (
    <section
      data-chapter="5"
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
          <span className="inline-block px-4 py-2 rounded-full bg-gold/20 text-gold text-sm font-semibold mb-4">
            Crisis Authorization
          </span>
          <h2 className="text-5xl font-bold text-navy mb-4">Special Measures</h2>
          <p className="text-lg text-mid max-w-2xl mx-auto">
            Pre-approved fast-track authority for crisis delivery: <strong>{reportData.specialMeasures.totalValue}</strong> across{" "}
            <strong>{reportData.specialMeasures.totalCases}</strong> cases
          </p>
        </motion.div>

        {/* Quick stats */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-xl p-6 border border-rule shadow-sm">
            <div className="text-3xl font-bold text-navy">{officesActivated}</div>
            <div className="text-sm text-mid mt-2">Country offices activated</div>
          </div>
          <div className="bg-white rounded-xl p-6 border border-rule shadow-sm">
            <div className="text-3xl font-bold text-navy">{microHactsWaived}</div>
            <div className="text-sm text-mid mt-2">Micro-HACTs waived</div>
            <div className="text-xs text-mid mt-1">30–45 days saved each</div>
          </div>
          <div className="bg-white rounded-xl p-6 border border-rule shadow-sm">
            <div className="text-3xl font-bold text-navy">{regionLeader.value}</div>
            <div className="text-sm text-mid mt-2">{regionLeader.name} region led delivery</div>
            <div className="text-xs text-mid mt-1">{regionLeader.cases} cases</div>
          </div>
        </motion.div>

        {/* Pillars */}
        <div className="space-y-4">
          {pillars.map((pillar, index) => {
            const colors = pillarColors[index];
            const isActive = activePillar === index;

            return (
              <motion.div
                key={index}
                className="overflow-hidden rounded-xl transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                viewport={{ once: true }}
                layout
              >
                {/* Header Button */}
                <motion.button
                  onClick={() => setActivePillar(isActive ? null : index)}
                  className="w-full p-6 text-white text-left font-bold transition-all relative overflow-hidden group"
                  style={{ background: colors.bg }}
                  whileHover={{ paddingLeft: 28 }}
                >
                  {/* Animated background */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-20"
                    style={{ background: "radial-gradient(circle, rgba(255,255,255,0.5), transparent)" }}
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />

                  <div className="relative z-10 flex items-center justify-between">
                    <div>
                      <div className="text-2xl mb-1">{pillar.name}</div>
                      <div className="text-sm font-normal opacity-90">{pillar.cases} cases processed</div>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold">{pillar.value}</div>
                      <motion.div
                        animate={{ rotate: isActive ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-2xl mt-1"
                      >
                        ▼
                      </motion.div>
                    </div>
                  </div>
                </motion.button>

                {/* Expanded Content */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                      style={{ background: colors.light }}
                    >
                      <div className="p-8 border-t-2" style={{ borderColor: colors.bg + "40" }}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          {/* Main content */}
                          <div>
                            <h3 className="text-xl font-bold text-navy mb-3">Impact</h3>
                            <p className="text-mid leading-relaxed mb-6">{pillar.description}</p>

                            <h3 className="text-lg font-bold text-navy mb-3 mt-6">Details</h3>
                            <p className="text-mid leading-relaxed">{pillar.details}</p>
                          </div>

                          {/* Stats */}
                          <div className="space-y-4">
                            <motion.div
                              className="p-6 rounded-lg text-white"
                              style={{ background: colors.bg }}
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.1 }}
                            >
                              <div className="text-sm opacity-90 mb-1">Total Value</div>
                              <div className="text-4xl font-bold">{pillar.value}</div>
                            </motion.div>

                            <motion.div
                              className="p-6 rounded-lg bg-white border-2"
                              style={{ borderColor: colors.bg }}
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.2 }}
                            >
                              <div className="text-sm text-mid mb-1">Cases Processed</div>
                              <div className="text-4xl font-bold text-navy">{pillar.cases}</div>
                            </motion.div>

                            {/* Time saved indicator */}
                            {index === 0 && (
                              <motion.div
                                className="p-6 rounded-lg bg-gradient-to-br from-coral/20 to-gold/20 border border-coral/30"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 }}
                              >
                                <div className="text-sm text-mid mb-2">Time Saved</div>
                                <div className="text-2xl font-bold text-navy">30–45 days</div>
                                <div className="text-xs text-mid mt-1">per assessment waived</div>
                              </motion.div>
                            )}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Print-only: always show the detail (screen only shows it when expanded) */}
                <div className="hidden print:block p-6 border-t-2" style={{ background: colors.light, borderColor: colors.bg + "40" }}>
                  <p className="text-sm text-mid leading-relaxed mb-2">{pillar.description}</p>
                  <p className="text-sm text-mid leading-relaxed">{pillar.details}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CO delivery table */}
        <motion.div
          className="mt-12 bg-white rounded-xl shadow-lg border border-rule p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-sm font-bold text-mid uppercase tracking-wide mb-5">
            Delivery by country office — click a row for detail
          </h3>
          <div className="grid grid-cols-[1fr_80px_100px] items-center gap-3 px-4 pb-2 mb-1 border-b border-rule">
            <span className="text-xs font-bold text-mid uppercase tracking-wide">Country office</span>
            <span className="text-xs font-bold text-mid uppercase tracking-wide text-right">Number of cases</span>
            <span className="text-xs font-bold text-mid uppercase tracking-wide text-right">Value of cases</span>
          </div>
          <div className="space-y-1">
            {coDelivery.map((row, idx) => {
              const isActive = activeCO === idx;
              return (
                <div key={row.co}>
                  <button
                    onClick={() => setActiveCO(isActive ? null : idx)}
                    className={`w-full grid grid-cols-[1fr_80px_100px] items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                      isActive ? "bg-ice" : idx % 2 === 0 ? "bg-white hover:bg-ice/60" : "bg-paper hover:bg-ice/60"
                    }`}
                  >
                    <span className="text-sm font-medium text-slate">{row.co}</span>
                    <span className="text-sm font-semibold text-blue text-right">{row.cases}</span>
                    <span className="text-sm font-semibold text-blue text-right">{row.value}</span>
                  </button>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="px-4 py-3 text-sm text-mid leading-relaxed bg-navy text-white/90 rounded-lg mt-1 print:hidden"
                    >
                      <strong className="text-teal">{row.co}:</strong> {row.detail}
                    </motion.div>
                  )}
                  {/* Print-only: always show the detail (screen only shows it when expanded) */}
                  <div className="hidden print:block px-4 py-2 text-sm text-mid leading-relaxed break-inside-avoid">
                    <strong className="text-navy">{row.co}:</strong> {row.detail}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Activation notes */}
        <motion.div
          className="mt-6 text-sm text-mid"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <strong className="text-navy">New Q4 activations:</strong> {q4Activations.join(", ")} &nbsp;·&nbsp;{" "}
          <strong className="text-navy">REVIVE Project:</strong> {reviveProject.join(" and ")} &nbsp;·&nbsp;{" "}
          <strong className="text-navy">Extensions requested:</strong> {extensionsRequested.join(", ")}
        </motion.div>

        {/* Special Measures dashboard */}
        <motion.div
          className="mt-12 bg-white rounded-xl shadow-lg border border-rule p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="text-xl font-bold text-navy mb-1">Special Measures Dashboard</h3>
              <p className="text-mid text-sm">Full case-level detail and live tracking across all six pillars.</p>
            </div>
            <a
              href={dashboardLink}
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

          <a href={dashboardLink} target="_blank" rel="noopener noreferrer" className="block">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/special_measures_dash.png"
              alt="Special Measures Dashboard preview"
              className="w-full h-auto rounded-lg border border-rule shadow-sm hover:shadow-lg transition-shadow"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
