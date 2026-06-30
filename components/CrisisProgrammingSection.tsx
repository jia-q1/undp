"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { reportData } from "@/lib/data";

export function CrisisProgrammingSection() {
  const data = reportData.crisisProgramming;
  const pillars = data.pillars;
  const GENDER_TAB_ID = "gender-equality";
  const RISK_TAB_ID = "crisis-risk-anticipation";
  const [selectedId, setSelectedId] = useState(pillars[0].id);
  const selected = pillars.find((p) => p.id === selectedId);
  const gender = data.genderEquality;
  const riskAnticipation = data.crisisRiskAnticipation;
  const satelliteEvidence = reportData.directFundingSupport.satelliteEvidence;
  const erh = reportData.readinessTraining.erh;

  return (
    <section
      data-chapter="2"
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
            Programming Pillars
          </span>
          <h2 className="text-5xl font-bold text-navy mb-4">{data.title}</h2>
          <p className="text-lg text-mid max-w-2xl mx-auto">{data.intro}</p>
        </motion.div>

        {/* Pillar selector */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-4 md:overflow-visible md:justify-center md:flex-wrap print:hidden">
          {pillars.map((pillar, index) => (
            <motion.button
              key={pillar.id}
              onClick={() => setSelectedId(pillar.id)}
              className={`px-5 py-3 rounded-xl text-sm font-bold whitespace-nowrap transition-all ${
                selectedId === pillar.id
                  ? "bg-navy text-white shadow-lg ring-2 ring-blue ring-offset-2 ring-offset-paper"
                  : "bg-white border border-rule text-slate hover:border-sky"
              }`}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.04, duration: 0.4 }}
              viewport={{ once: true }}
            >
              {pillar.name}
            </motion.button>
          ))}
          <motion.button
            onClick={() => setSelectedId(GENDER_TAB_ID)}
            className={`px-5 py-3 rounded-xl text-sm font-bold whitespace-nowrap transition-all ${
              selectedId === GENDER_TAB_ID
                ? "bg-navy text-white shadow-lg ring-2 ring-blue ring-offset-2 ring-offset-paper"
                : "bg-white border border-rule text-slate hover:border-sky"
            }`}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: pillars.length * 0.04, duration: 0.4 }}
            viewport={{ once: true }}
          >
            {gender.name}
          </motion.button>
          <motion.button
            onClick={() => setSelectedId(RISK_TAB_ID)}
            className={`px-5 py-3 rounded-xl text-sm font-bold whitespace-nowrap transition-all ${
              selectedId === RISK_TAB_ID
                ? "bg-navy text-white shadow-lg ring-2 ring-blue ring-offset-2 ring-offset-paper"
                : "bg-white border border-rule text-slate hover:border-sky"
            }`}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: (pillars.length + 1) * 0.04, duration: 0.4 }}
            viewport={{ once: true }}
          >
            {riskAnticipation.name}
          </motion.button>
        </div>

        {/* Detail panel */}
        <AnimatePresence mode="wait">
          {selectedId === RISK_TAB_ID ? (
            <motion.div
              key={RISK_TAB_ID}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-xl shadow-lg border border-rule p-8 mb-12 print:hidden"
            >
              <h3 className="text-2xl font-bold text-navy mb-8">{riskAnticipation.name}</h3>

              <div className="space-y-10">
                {riskAnticipation.tools.map((tool) => (
                  <div key={tool.name} className="border-t border-rule pt-8 first:border-t-0 first:pt-0">
                    <h4 className="text-lg font-bold text-navy mb-3">{tool.name}</h4>
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
                  </div>
                ))}
              </div>
            </motion.div>
          ) : selectedId === GENDER_TAB_ID ? (
            <motion.div
              key={GENDER_TAB_ID}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-navy rounded-xl shadow-lg p-8 mb-12 print:hidden"
            >
              <h3 className="text-2xl font-bold text-white mb-6">{gender.name}</h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                {gender.contextStats.map((stat, idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-3xl font-bold text-teal mb-1">{stat.value}</div>
                    <div className="text-xs text-white/80 leading-snug">{stat.label}</div>
                  </div>
                ))}
              </div>

              <h4 className="text-xs font-bold text-white/60 uppercase tracking-wide mb-4 text-center">
                Impact at Scale (2024)
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                {gender.impactStats.map((stat, idx) => (
                  <div key={idx} className="bg-white/10 rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-xs text-white/80 leading-snug">{stat.label}</div>
                  </div>
                ))}
              </div>

              <p className="text-sm text-white/70 italic text-center">{gender.note}</p>
            </motion.div>
          ) : selected ? (
            <motion.div
              key={selected.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-xl shadow-lg border border-rule p-8 mb-12 print:hidden"
            >
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <h3 className="text-2xl font-bold text-navy">{selected.name}</h3>
                {selected.scope && (
                  <span className="px-3 py-1.5 rounded-full bg-ice text-blue text-sm font-semibold">
                    {selected.scope}
                  </span>
                )}
              </div>

              {selected.id === "early-recovery" && (
                <div className="mb-8 pb-8 border-b border-rule">
                  <h4 className="text-lg font-bold text-navy mb-1">{erh.name}</h4>
                  <p className="text-sm text-sky mb-4">Central digital platform</p>
                  <p className="text-mid text-sm leading-relaxed mb-6">{erh.description}</p>

                  <div className="space-y-2 mb-6">
                    {erh.features.map((feature, idx) => (
                      <div key={idx} className="flex gap-3 p-3 bg-sky/5 rounded-lg">
                        <div className="w-1.5 h-1.5 rounded-full bg-sky mt-1.5 flex-shrink-0" />
                        <div className="text-sm text-slate">{feature}</div>
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="p-3 bg-gradient-to-r from-sky/10 to-teal/10 rounded-lg border border-sky/20">
                      <div className="text-xl font-bold text-navy">{erh.pageViews}</div>
                      <div className="text-xs text-mid">page views</div>
                    </div>
                    <div className="p-3 bg-gradient-to-r from-sky/10 to-teal/10 rounded-lg border border-sky/20">
                      <div className="text-xl font-bold text-navy">{erh.uniqueVisitors}</div>
                      <div className="text-xs text-mid">unique visitors</div>
                    </div>
                  </div>

                  <div className="p-4 bg-gradient-to-r from-sky/10 to-teal/10 rounded-lg border border-sky/20">
                    <div className="text-2xl font-bold text-navy">{erh.reach.toLocaleString()}</div>
                    <div className="text-sm text-mid">
                      personnel reached via {erh.sessionsDelivered} sessions across {erh.bureausReached} bureaus and{" "}
                      {erh.officesReached} country offices
                    </div>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {selected.stats.map((stat, idx) => (
                  <div key={idx} className="bg-ice rounded-lg p-5">
                    <div className="text-3xl font-bold text-coral mb-1">{stat.value}</div>
                    <div className="text-sm text-mid leading-snug">{stat.label}</div>
                  </div>
                ))}
              </div>

              {selected.examples && (
                <div className="mb-6">
                  <h4 className="text-xs font-bold text-mid uppercase tracking-wide mb-3">In Practice</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {selected.examples.map((ex) => (
                      <div key={ex.country} className="border-l-2 border-sky pl-3">
                        <div className="text-sm font-bold text-navy">{ex.country}</div>
                        <div className="text-xs text-mid leading-snug">{ex.note}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {selected.countryHighlights && (
                <div className="mb-6">
                  <h4 className="text-xs font-bold text-mid uppercase tracking-wide mb-3">Country Highlights</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {selected.countryHighlights.map((ex) => (
                      <div key={ex.country} className="border-l-2 border-teal pl-3">
                        <div className="text-sm font-bold text-navy">{ex.country}</div>
                        <div className="text-xs text-mid leading-snug">{ex.note}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {selected.note && (
                <p className="text-sm text-mid italic mb-4">{selected.note}</p>
              )}

              {selected.id === "early-recovery" && (
                <div className="border-t border-rule pt-6 mb-6">
                  <h4 className="text-lg font-bold text-navy mb-1">{satelliteEvidence.title}</h4>
                  <p className="text-mid text-sm leading-relaxed mb-6">{satelliteEvidence.approach}</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    {satelliteEvidence.headline.map((stat, idx) => (
                      <div key={idx} className="bg-navy rounded-xl p-6 relative overflow-hidden">
                        <div className="absolute top-0 left-0 right-0 h-1 bg-gold" />
                        <div className="text-3xl font-bold text-teal">{stat.value}</div>
                        <div className="text-sm text-white/90 mt-2 leading-snug">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  <h4 className="text-xs font-bold text-mid uppercase tracking-wide mb-4">Robust Impact Evidence</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    {satelliteEvidence.robust.map((item) => (
                      <div key={item.country} className="bg-ice rounded-lg p-5 border-l-3 border-blue" style={{ borderLeftWidth: 3 }}>
                        <div className="flex items-baseline justify-between mb-2">
                          <span className="font-bold text-navy">{item.country}</span>
                          <span className="text-xs text-mid">{item.investment}</span>
                        </div>
                        <p className="text-sm text-slate leading-relaxed mb-2">{item.finding}</p>
                        <p className="text-sm font-semibold text-coral leading-relaxed">{item.result}</p>
                        {item.note && <p className="text-xs text-mid italic leading-relaxed mt-2">{item.note}</p>}
                      </div>
                    ))}
                  </div>

                  <h4 className="text-xs font-bold text-mid uppercase tracking-wide mb-4">
                    Correlational Recovery Signals <span className="font-normal text-mid/70">(additional country findings)</span>
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2.5 mb-6">
                    {satelliteEvidence.correlational.map((item) => (
                      <div key={item.country} className="grid grid-cols-[110px_70px_60px_1fr] items-baseline gap-2">
                        <span className="text-sm font-semibold text-navy">{item.country}</span>
                        <span className="text-sm text-blue">{item.investment}</span>
                        <span className="text-sm font-bold text-coral">{item.recovery}</span>
                        <span className="text-xs text-mid">{item.note}</span>
                      </div>
                    ))}
                  </div>

                  <p className="text-xs text-mid italic leading-relaxed border-t border-rule pt-4">{satelliteEvidence.caveat}</p>
                </div>
              )}

              {selected.partners && (
                <div>
                  <h4 className="text-xs font-bold text-mid uppercase tracking-wide mb-2">Current Partners</h4>
                  <div className="flex flex-wrap gap-2">
                    {selected.partners.map((partner) => (
                      <span
                        key={partner}
                        className="text-xs px-2 py-1 rounded-md bg-ice border border-rule text-blue font-medium"
                      >
                        {partner}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          ) : null}
        </AnimatePresence>

        {/* Print-only: full listing of all pillars */}
        <div className="hidden print:block space-y-4 mb-12">
          {pillars.map((pillar) => (
            <div key={pillar.id} className="border border-rule rounded-lg p-4 break-inside-avoid">
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-navy">{pillar.name}</span>
                {pillar.scope && <span className="text-sm text-blue">{pillar.scope}</span>}
              </div>
              <div className="space-y-1">
                {pillar.stats.map((stat, idx) => (
                  <div key={idx} className="text-sm text-slate">
                    <strong className="text-coral">{stat.value}</strong> — {stat.label}
                  </div>
                ))}
              </div>
              {pillar.partners && (
                <p className="text-xs text-mid mt-2">Partners: {pillar.partners.join(", ")}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
