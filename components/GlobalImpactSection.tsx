"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { reportData } from "@/lib/data";

export function GlobalImpactSection() {
  const regions = reportData.globalImpact.regions;
  const topProfiles = reportData.globalImpact.topProfiles;
  const modalities = reportData.globalImpact.deploymentsByModality;
  const sbpPartners = reportData.globalImpact.sbpPartners;
  const [activeModality, setActiveModality] = useState(0);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const regionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const maxSbp = Math.max(...sbpPartners.map((p) => p.count));

  return (
    <section
      data-chapter="1"
      className="relative py-24 px-6 bg-gradient-to-b from-navy/50 to-paper"
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
          <span className="inline-block px-4 py-2 rounded-full bg-white text-navy text-sm font-semibold mb-4 shadow-sm">
            Global Reach
          </span>
          <h2 className="text-5xl font-bold text-navy mb-4">Impact Across All Regions</h2>
          <p className="text-lg text-mid max-w-2xl mx-auto">
            {reportData.globalImpact.stats.countriesSupported} countries supported across all regions with{" "}
            {reportData.globalImpact.stats.totalDeployments} deployments worth{" "}
            {reportData.globalImpact.stats.deploymentValue} in support
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            { label: "Total Deployments", value: "2,585" },
            { label: "Requests Received", value: "3,300+" },
            { label: "Response Time", value: "2–5 days" },
            { label: "Global South", value: "64%" },
            { label: "Cost Recovery", value: "$800K" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={regionVariants}
              className="bg-white rounded-xl p-6 border border-rule shadow-sm"
            >
              <div className="text-3xl font-bold text-navy">{stat.value}</div>
              <div className="text-sm text-mid mt-2">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Regions */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {regions.map((region, index) => (
            <motion.div
              key={index}
              variants={regionVariants}
              className="relative overflow-hidden rounded-xl p-8 cursor-pointer group"
              style={{ backgroundColor: region.color + "15" }}
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}
            >
              {/* Colored border */}
              <div
                className="absolute inset-0 border-l-4"
                style={{ borderColor: region.color }}
              />

              {/* Animated background glow */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100"
                style={{ backgroundColor: region.color + "10" }}
                transition={{ duration: 0.3 }}
              />

              {/* Content */}
              <div className="relative z-10">
                <div className="text-3xl font-bold text-navy mb-2">{region.deployments}</div>
                <div className="text-sm font-semibold text-mid">{region.name}</div>
                <div className="text-xs text-mid mt-3 leading-snug">
                  <div>{region.description}</div>
                </div>
              </div>

              {/* Hover indicator */}
              <motion.div
                className="absolute bottom-4 right-4 text-xl opacity-0 group-hover:opacity-100"
                style={{ color: region.color }}
              >
                ↗
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Deployment modality breakdown + top profiles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Modality selector */}
          <motion.div
            className="bg-white rounded-xl shadow-lg border border-rule p-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-sm font-bold text-mid uppercase tracking-wide mb-4">
              2025 deployments by modality
            </h3>
            <div className="flex flex-wrap gap-2 mb-5">
              {modalities.map((mod, idx) => (
                <button
                  key={mod.id}
                  onClick={() => setActiveModality(idx)}
                  className={`px-4 py-2 rounded-full text-sm font-medium border transition-all ${
                    activeModality === idx
                      ? "bg-ice border-blue text-navy"
                      : "bg-white border-rule text-mid hover:border-sky hover:text-blue"
                  }`}
                >
                  <span className="font-bold text-navy mr-1">
                    {mod.deployments2025.toLocaleString()}
                  </span>
                  {mod.name}
                </button>
              ))}
            </div>
            <motion.div
              key={activeModality}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-ice border-l-3 border-sky rounded-lg p-5 text-sm text-mid leading-relaxed min-h-[120px] print:hidden"
              style={{ borderLeftWidth: 3 }}
            >
              <strong className="text-navy">{modalities[activeModality].name}</strong> —{" "}
              {modalities[activeModality].description}
            </motion.div>

            {/* Print-only: full listing of all modalities (screen shows one at a time above) */}
            <div className="hidden print:block space-y-3">
              {modalities.map((mod) => (
                <div key={mod.id} className="bg-ice border-l-3 border-sky rounded-lg p-4 text-sm text-mid leading-relaxed break-inside-avoid" style={{ borderLeftWidth: 3 }}>
                  <strong className="text-navy">
                    {mod.name} ({mod.deployments2025.toLocaleString()})
                  </strong>{" "}
                  — {mod.description}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Top profiles requested */}
          <motion.div
            className="bg-white rounded-xl shadow-lg border border-rule p-8"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-sm font-bold text-mid uppercase tracking-wide mb-4">
              Top profiles requested
            </h3>
            <div className="space-y-3">
              {topProfiles.map((profile, idx) => (
                <div key={profile.name} className="grid grid-cols-[140px_1fr_36px] items-center gap-3">
                  <div className="text-sm text-mid text-right">{profile.name}</div>
                  <div className="h-2.5 bg-ice rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full bg-blue"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${100 - idx * 12}%` }}
                      transition={{ duration: 0.6, delay: idx * 0.05 }}
                      viewport={{ once: true }}
                    />
                  </div>
                  <div className="text-xs font-semibold text-navy text-right">
                    {["1st", "2nd", "3rd", "4th", "5th", "6th"][idx] ?? `${profile.rank}th`}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stand-by Partner deployments */}
        <motion.div
          className="bg-white rounded-xl shadow-lg border border-rule p-8 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-sm font-bold text-mid uppercase tracking-wide mb-6">
            Stand-by partner deployments
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-2.5">
              {sbpPartners.map((partner, idx) => (
                <div key={partner.name} className="grid grid-cols-[100px_1fr_28px] items-center gap-2">
                  <div className="text-xs text-mid text-right">{partner.name}</div>
                  <div className="h-2.5 bg-ice rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full bg-blue"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(partner.count / maxSbp) * 100}%` }}
                      transition={{ duration: 0.6, delay: idx * 0.05 }}
                      viewport={{ once: true }}
                    />
                  </div>
                  <div className="text-xs font-semibold text-navy text-right">{partner.count}</div>
                </div>
              ))}
            </div>
            <div>
              <p className="text-sm text-mid leading-relaxed mb-4">
                38 total SBP deployments in 2025, with an estimated in-kind value of{" "}
                <strong className="text-navy">USD {reportData.globalImpact.sbpTotalValue}</strong>. Partners
                covered crisis response, peacebuilding, climate action, and programme coordination.
              </p>
              <div className="flex flex-wrap gap-2">
                {reportData.globalImpact.sbpCountries.map((country) => (
                  <span
                    key={country}
                    className="text-xs px-2 py-1 rounded-md bg-ice border border-rule text-blue font-medium"
                  >
                    {country}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Key insight */}
        <motion.div
          className="p-8 bg-gradient-to-r from-sky/10 to-teal/10 rounded-xl border border-sky/20 print:hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold text-navy mb-2">📍 Regional Leadership</h3>
          <p className="text-mid">
            Asia-Pacific leads with 605 deployments, followed by Africa with 498. Each region reflects
            the unique crisis contexts and operational priorities that define UNDP&apos;s global response capacity.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
