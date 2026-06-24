"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { reportData } from "@/lib/data";

export function CrisisResponseSection() {
  const [selectedCrisis, setSelectedCrisis] = useState<string | null>("papp");
  const crises = reportData.crisisResponse.crises;
  const selected = crises.find((c) => c.id === selectedCrisis);

  const getLevelColor = (level: string) => {
    if (level === "L3") return "#E05A2B";
    if (level === "L2") return "#F0A500";
    if (level === "L1") return "#1D9E75";
    return "#4A6174";
  };

  const getLevelLabel = (level: string) => (level === "—" ? "No declaration" : level);

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
          <span className="inline-block px-4 py-2 rounded-full bg-coral/20 text-coral text-sm font-semibold mb-4">
            Crisis Management
          </span>
          <h2 className="text-5xl font-bold text-navy mb-4">Crisis Response Timeline</h2>
          <p className="text-lg text-mid max-w-2xl mx-auto">
            {reportData.crisisResponse.crises.length} major crisis responses in 2025, with targeted expert deployment
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="flex gap-2 mb-12 overflow-x-auto pb-4 md:overflow-visible md:justify-center flex-wrap print:hidden">
          {crises.map((crisis, index) => (
            <motion.button
              key={crisis.id}
              onClick={() => setSelectedCrisis(crisis.id)}
              className={`relative px-6 py-4 rounded-xl transition-all whitespace-nowrap ${
                selectedCrisis === crisis.id
                  ? "text-white shadow-lg"
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
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Deployment Stats */}
                  <div>
                    <h3 className="text-xl font-bold text-navy mb-4">Deployment Overview</h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-sky/20 rounded-lg flex items-center justify-center text-sky font-bold">
                          👥
                        </div>
                        <div>
                          <div className="text-sm text-mid">Total Experts Deployed</div>
                          <div className="text-2xl font-bold text-navy">{selected.experts}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-teal/20 rounded-lg flex items-center justify-center text-teal font-bold">
                          ⚡
                        </div>
                        <div>
                          <div className="text-sm text-mid">Crisis Level</div>
                          <div className="text-2xl font-bold text-navy">{selected.level}</div>
                        </div>
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
                          <div className="text-sky mt-1">✓</div>
                          <div className="text-sm text-slate">{role}</div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Key insight */}
                <motion.div
                  className="mt-8 p-6 bg-sky/5 rounded-lg border border-sky/20"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <p className="text-sm text-slate leading-relaxed">
                    The {selected.name} crisis response demonstrates UNDP&apos;s capacity to deploy specialized expertise
                    rapidly across multiple domains. Each expert was identified, vetted, and shared with the country
                    office within 2–5 days of the request.
                  </p>
                </motion.div>
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
