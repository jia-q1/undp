"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { reportData } from "@/lib/data";

// Country ids with a dedicated dossier page at /countries/<id>
const COUNTRY_PAGES = new Set(["papp"]);

export function CrisisResponseSection() {
  const [selectedCrisis, setSelectedCrisis] = useState<string | null>("papp");
  const crises = reportData.crisisResponse.crises;
  const selected = crises.find((c) => c.id === selectedCrisis);
  const tracker = reportData.crisisResponse.crisisTracker;
  const sopFramework = reportData.crisisResponse.sopFramework;

  const getLevelColor = (level: string) => {
    if (level === "L3") return "#E05A2B";
    if (level === "L2") return "#F0A500";
    if (level === "L1") return "#1D9E75";
    return "#4A6174";
  };

  const getLevelLabel = (level: string) => (level === "—" ? "No declaration" : level);

  return (
    <section
      data-chapter="3"
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
          <span className="inline-block px-4 py-2 rounded-full bg-coral/20 text-coral text-sm font-semibold mb-4">
            Crisis Management
          </span>
          <h2 className="text-5xl font-bold text-navy mb-4">Crisis Response Timeline</h2>
          <p className="text-lg text-mid max-w-2xl mx-auto">
            {reportData.crisisResponse.crises.length} major crisis responses in 2025, with targeted expert deployment
          </p>
        </motion.div>

        {/* SOP Framework */}
        <motion.div
          className="bg-white rounded-xl shadow-lg border border-rule p-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold text-navy mb-4">{sopFramework.headline}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xs font-bold text-mid uppercase tracking-wide mb-3">This Includes</h4>
              <div className="space-y-2">
                {sopFramework.includes.map((item) => (
                  <div key={item} className="flex gap-2 p-2.5 bg-ice rounded-lg text-xs text-slate">
                    <span className="w-1.5 h-1.5 rounded-full bg-coral mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-xs font-bold text-mid uppercase tracking-wide mb-3">Crisis Board Structure</h4>
              <div className="space-y-2">
                {sopFramework.crisisBoardStructure.map((item) => (
                  <div key={item} className="flex gap-2 p-2.5 bg-ice rounded-lg text-xs text-slate">
                    <span className="w-1.5 h-1.5 rounded-full bg-coral mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Crisis Tracker dashboard */}
        <motion.div
          className="bg-white rounded-xl shadow-lg border border-rule p-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-bold text-navy mb-2">Crisis Tracker</h3>
              <p className="text-mid leading-relaxed mb-4">{tracker.description}</p>
              <div className="grid grid-cols-2 gap-2">
                {tracker.features.map((feature) => (
                  <div key={feature} className="flex gap-2 p-2.5 bg-ice rounded-lg text-xs text-slate">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky mt-1 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center md:justify-end">
              <a
                href={tracker.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg font-semibold bg-navy text-white hover:bg-blue transition-colors"
              >
                <span>Open Crisis Tracker Dashboard</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>

          <a href={tracker.link} target="_blank" rel="noopener noreferrer" className="block mt-6">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/crisis_tracker_dashboard.png"
              alt="Crisis Tracker Dashboard preview"
              className="w-full h-auto rounded-lg border border-rule shadow-sm hover:shadow-lg transition-shadow"
            />
          </a>
        </motion.div>

        {/* Timeline */}
        <div className="flex gap-2 mb-12 overflow-x-auto pb-4 md:overflow-visible md:justify-center flex-wrap print:hidden">
          {crises.map((crisis, index) => (
            <motion.button
              key={crisis.id}
              onClick={() => setSelectedCrisis(crisis.id)}
              className={`relative px-6 py-4 rounded-xl transition-all whitespace-nowrap ${
                selectedCrisis === crisis.id
                  ? "text-white shadow-lg ring-2 ring-navy ring-offset-2 ring-offset-paper"
                  : "bg-white border border-rule text-slate hover:border-sky"
              }`}
              style={{
                backgroundColor:
                  selectedCrisis === crisis.id ? getLevelColor(crisis.level) : undefined,
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="text-sm font-bold">{crisis.name}</div>
              <div className="text-xs opacity-75">{crisis.experts} experts</div>
            </motion.button>
          ))}
        </div>

        {/* Detail Panel */}
        <AnimatePresence mode="wait">
          {selected && (
            <motion.div
              key={selected.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-xl shadow-lg border border-rule overflow-hidden print:hidden"
            >
              {/* Header */}
              <div
                className="px-8 py-6 text-white"
                style={{ backgroundColor: getLevelColor(selected.level) }}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-3xl font-bold mb-2">{selected.name}</div>
                    <div className="text-lg opacity-90">{selected.description}</div>
                  </div>
                  <div className={selected.level === "—" ? "text-sm font-bold text-white/60 uppercase tracking-wide pt-2" : "text-4xl font-bold text-white/50"}>
                    {getLevelLabel(selected.level)}
                  </div>
                </div>
                {COUNTRY_PAGES.has(selected.id) && (
                  <Link
                    href={`/countries/${selected.id}`}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-white/90 hover:text-white mt-4"
                  >
                    View full {selected.name} country page →
                  </Link>
                )}
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Deployment Stats */}
                  <div>
                    <h3 className="text-xl font-bold text-navy mb-4">Deployment Overview</h3>
                    <div className="space-y-3">
                      <div className="border-l-2 border-sky pl-3">
                        <div className="text-sm text-mid">Total Experts Deployed</div>
                        <div className="text-2xl font-bold text-navy">{selected.experts}</div>
                      </div>
                      <div className="border-l-2 border-teal pl-3">
                        <div className="text-sm text-mid">Crisis Level</div>
                        <div className="text-2xl font-bold text-navy">{selected.level}</div>
                      </div>
                    </div>
                  </div>

                  {/* Roles */}
                  <div>
                    <h3 className="text-xl font-bold text-navy mb-4">Deployment Roles</h3>
                    <div className="space-y-2">
                      {selected.roles.map((role, index) => (
                        <motion.div
                          key={index}
                          className="flex items-start gap-3 p-2"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-sky mt-1.5 flex-shrink-0" />
                          <div className="text-sm text-slate">{role}</div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Print-only: full listing of all crises (screen shows one at a time above) */}
        <div className="hidden print:block space-y-3">
          {crises.map((crisis) => (
            <div key={crisis.id} className="border border-rule rounded-lg overflow-hidden break-inside-avoid">
              <div
                className="px-4 py-2 text-white flex items-center justify-between"
                style={{ backgroundColor: getLevelColor(crisis.level) }}
              >
                <span className="font-bold">{crisis.name}</span>
                <span className="text-sm">
                  {getLevelLabel(crisis.level)} · {crisis.experts} experts
                </span>
              </div>
              <div className="px-4 py-3 text-sm text-slate">
                <p className="mb-2">{crisis.description}</p>
                <p className="text-mid">
                  <strong className="text-navy">Roles:</strong> {crisis.roles.join(", ")}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
