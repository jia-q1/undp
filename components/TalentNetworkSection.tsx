"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { reportData } from "@/lib/data";

export function TalentNetworkSection() {
  const [activeEcosystem, setActiveEcosystem] = useState(0);
  const [activeModality, setActiveModality] = useState(0);
  const ecosystems = reportData.talentNetwork.ecosystems;
  const regions = reportData.globalImpact.regions;
  const modalities = reportData.globalImpact.deploymentsByModality;
  const topProfiles = reportData.globalImpact.topProfiles;
  const sbpPartners = reportData.globalImpact.sbpPartners;
  const maxSbp = Math.max(...sbpPartners.map((p) => p.count));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const nodeVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
      },
    },
    hover: {
      scale: 1.1,
      boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
    },
  };

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
          <span className="inline-block px-4 py-2 rounded-full bg-purple/20 text-purple text-sm font-semibold mb-4">
            Workforce Ecosystem
          </span>
          <h2 className="text-5xl font-bold text-navy mb-4">Talent Infrastructure</h2>
          <p className="text-lg text-mid max-w-2xl mx-auto">
            Four complementary rosters forming UNDP&apos;s crisis deployment backbone
          </p>
        </motion.div>

        {/* Network Diagram */}
        <motion.div
          className="relative mb-16 h-96 md:h-80 flex items-center justify-center print:hidden"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Center node */}
          <motion.div
            className="absolute bg-gradient-to-br from-navy to-blue text-white rounded-full w-32 h-32 flex flex-col items-center justify-center cursor-pointer shadow-lg z-10"
            variants={nodeVariants}
            whileHover={{ scale: 1.1 }}
          >
            <div className="font-bold text-center text-sm">Crisis Bureau</div>
          </motion.div>

          {/* Orbiting nodes */}
          {ecosystems.map((ecosystem, index) => {
            const angle = (index / ecosystems.length) * Math.PI * 2;
            const x = Math.cos(angle) * 180;
            const y = Math.sin(angle) * 140;

            return (
              <motion.div
                key={index}
                className="absolute"
                style={{
                  x: x,
                  y: y,
                }}
                variants={nodeVariants}
              >
                <motion.button
                  onClick={() => setActiveEcosystem(index)}
                  className={`w-28 h-28 rounded-full shadow-lg transition-all flex flex-col items-center justify-center cursor-pointer relative ${
                    activeEcosystem === index
                      ? "ring-4 ring-sky"
                      : "hover:ring-2 hover:ring-sky/50"
                  }`}
                  style={{
                    background:
                      activeEcosystem === index
                        ? "linear-gradient(135deg, #009EDB, #00B5C8)"
                        : "linear-gradient(135deg, #E8F4FA, #E1F5EE)",
                    color: activeEcosystem === index ? "white" : "#003F6B",
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="text-xs font-bold text-center leading-tight">
                    {ecosystem.count}
                  </div>
                  <div className="text-xs opacity-75 text-center leading-tight">
                    {ecosystem.name.split("/")[0]}
                  </div>
                </motion.button>

                {/* Connection line */}
                <svg
                  className="absolute top-1/2 left-1/2"
                  width="200"
                  height="200"
                  style={{ transform: `translate(-100%, -100%)` }}
                  pointerEvents="none"
                >
                  <line
                    x1="0"
                    y1="0"
                    x2={-x}
                    y2={-y}
                    stroke={activeEcosystem === index ? "#009EDB" : "#D0DFE8"}
                    strokeWidth={activeEcosystem === index ? 3 : 2}
                    opacity={activeEcosystem === index ? 1 : 0.3}
                  />
                </svg>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Detail Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeEcosystem}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-xl shadow-lg border border-rule p-8 print:hidden"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="mb-6">
                  <h3 className="text-3xl font-bold text-navy">
                    {ecosystems[activeEcosystem].name}
                  </h3>
                  <p className="text-lg font-semibold text-sky">
                    {ecosystems[activeEcosystem].count}
                  </p>
                </div>
                <p className="text-mid leading-relaxed">
                  {ecosystems[activeEcosystem].description}
                </p>
              </div>

              <motion.div
                className="bg-gradient-to-br from-sky/10 to-teal/10 rounded-lg p-6 border border-sky/20"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                <h4 className="font-bold text-navy mb-3 text-sm uppercase">Key Features</h4>
                <ul className="space-y-2 text-sm text-slate">
                  {ecosystems[activeEcosystem].description.split(".").map((feature, idx) => (
                    feature.trim() && (
                      <li key={idx} className="flex gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-sky mt-1.5 flex-shrink-0" />
                        <span>{feature.trim()}</span>
                      </li>
                    )
                  ))}
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Print-only: full listing of all ecosystems (screen shows the orbit diagram above) */}
        <div className="hidden print:grid print:grid-cols-2 print:gap-4">
          {ecosystems.map((ecosystem, idx) => (
            <div key={idx} className="border border-rule rounded-lg p-4 break-inside-avoid">
              <div className="mb-2">
                <div className="font-bold text-navy">{ecosystem.name}</div>
                <div className="text-sm text-sky font-semibold">{ecosystem.count}</div>
              </div>
              <p className="text-sm text-mid leading-relaxed">{ecosystem.description}</p>
            </div>
          ))}
        </div>

        {/* Deployments by region/bureau */}
        <div className="mt-16">
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/15 text-sm font-semibold text-navy mb-6"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span>Leveraging crisis tools to accelerate overall UNDP delivery — not crisis-context-only</span>
          </motion.div>

          <h3 className="text-sm font-bold text-mid uppercase tracking-wide mb-4">
            Deployments by region
          </h3>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4"
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
        </div>

        {/* Deployment modality breakdown + top profiles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 mt-16">
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
          className="bg-white rounded-xl shadow-lg border border-rule p-8"
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
      </div>
    </section>
  );
}
