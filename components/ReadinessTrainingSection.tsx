"use client";

import { motion } from "framer-motion";
import { reportData } from "@/lib/data";

export function ReadinessTrainingSection() {
  const cohorts = reportData.readinessTraining.trainingCohorts;
  const { erh, aarTracker, aarDescription, sopUpdates, crisisTracker, continuum } = reportData.readinessTraining;
  const surge = reportData.rosterInfrastructure.surge;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const barVariants = {
    hidden: { scaleX: 0, originX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        duration: 1.2,
      },
    },
  };

  return (
    <section
      data-chapter="7"
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
          <span className="inline-block px-4 py-2 rounded-full bg-teal/20 text-teal text-sm font-semibold mb-4">
            Capability Building
          </span>
          <h2 className="text-5xl font-bold text-navy mb-4">Readiness & Training</h2>
          <p className="text-lg text-mid max-w-2xl mx-auto">
            Building the network&apos;s capacity to prepare, respond, and recover — across {erh.officesReached} country offices
          </p>
        </motion.div>

        {/* Two Column Layout: ERH + Training */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Early Recovery Hub */}
          <motion.div
            className="bg-white rounded-xl shadow-lg border border-rule p-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-start gap-3 mb-4">
              <div className="text-3xl">📡</div>
              <div>
                <h3 className="text-2xl font-bold text-navy">Early Recovery Hub</h3>
                <p className="text-sm text-sky">Central digital platform</p>
              </div>
            </div>

            <p className="text-mid mb-6 leading-relaxed">
              Launched by the UNDP Administrator, the ERH is the central digital platform for crisis response
              and early recovery programming — available in English, French, and Spanish with AI-enabled support.
            </p>

            <div className="space-y-3 mb-6">
              {erh.features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  className="flex gap-3 p-3 bg-sky/5 rounded-lg"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  viewport={{ once: true }}
                >
                  <div className="text-sky flex-shrink-0 mt-1">✓</div>
                  <div className="text-sm text-slate">{feature}</div>
                </motion.div>
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

            <motion.div
              className="p-4 bg-gradient-to-r from-sky/10 to-teal/10 rounded-lg border border-sky/20"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="text-2xl font-bold text-navy">{erh.reach.toLocaleString()}</div>
              <div className="text-sm text-mid">
                personnel reached via {erh.sessionsDelivered} sessions across {erh.bureausReached} bureaus and{" "}
                {erh.officesReached} country offices
              </div>
            </motion.div>
          </motion.div>

          {/* Training Outcomes */}
          <motion.div
            className="bg-white rounded-xl shadow-lg border border-rule p-8"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-navy mb-6">Training Transformation</h3>

            <div className="space-y-7">
              {cohorts.map((cohort, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="mb-3">
                    <h4 className="font-bold text-navy">{cohort.name}</h4>
                    <p className="text-xs text-mid">{cohort.date} • {cohort.participants} participants</p>
                  </div>

                  {cohort.beforeUnderstanding > 0 && (
                    <div className="mb-3">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-xs font-semibold text-slate">Before</span>
                        <span className="text-xs font-bold text-navy">{cohort.beforeUnderstanding}%</span>
                      </div>
                      <motion.div
                        className="h-2 bg-rule rounded-full overflow-hidden"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                      >
                        <motion.div
                          className="h-full bg-slate rounded-full"
                          variants={barVariants}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                          style={{ width: `${cohort.beforeUnderstanding}%` }}
                        />
                      </motion.div>
                    </div>
                  )}

                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs font-semibold text-slate">After</span>
                      <span className="text-xs font-bold text-green">{cohort.afterUnderstanding}%</span>
                    </div>
                    <motion.div
                      className="h-2 bg-rule rounded-full overflow-hidden"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                    >
                      <motion.div
                        className="h-full bg-green rounded-full"
                        variants={barVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        style={{ width: `${cohort.afterUnderstanding}%` }}
                        transition={{ delay: 0.3 }}
                      />
                    </motion.div>
                  </div>

                  <div className="text-center py-2 bg-sky/5 rounded-lg border border-sky/20 mb-2">
                    <div className="text-lg font-bold text-navy">{cohort.rating}</div>
                    <div className="text-xs text-mid">{cohort.ratingLabel}</div>
                  </div>
                  <p className="text-xs text-mid leading-relaxed">{cohort.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* SURGE revamp + AAR/SOPs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* SURGE revamp */}
          <motion.div
            className="bg-white rounded-xl shadow-lg border border-rule p-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-navy mb-4">🔄 SURGE Mechanism Revamp</h3>
            <p className="text-mid mb-6 leading-relaxed">
              The most comprehensive overhaul of the SURGE mechanism in years. Historical roster data dating back
              to {surge.masterRosterSince} was cleaned, consolidated into a single Master Roster, and expanded —
              visualized through a unified dashboard tracking deployments and trainees across regions and years.
            </p>

            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="bg-navy rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-teal">{surge.total}</div>
                <div className="text-xs text-white/80 font-medium">Active advisors</div>
                <div className="text-xs text-white/40">+{surge.added2025} added in 2025</div>
              </div>
              <div className="bg-navy rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-teal">{surge.profilesRevised}</div>
                <div className="text-xs text-white/80 font-medium">Profiles revised</div>
                <div className="text-xs text-white/40">Aligned to ERPs</div>
              </div>
              <div className="bg-navy rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-teal">{surge.subProfilesUpdated}</div>
                <div className="text-xs text-white/80 font-medium">Sub-profile ToRs updated</div>
                <div className="text-xs text-white/40">Current terminology</div>
              </div>
              <div className="bg-navy rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-teal">{surge.newProfiles.length}</div>
                <div className="text-xs text-white/80 font-medium">New profiles created</div>
                <div className="text-xs text-white/40">{surge.newProfiles.join(" · ")}</div>
              </div>
            </div>

            <div className="space-y-2">
              {surge.portalUpgrades.map((upgrade) => (
                <div key={upgrade} className="flex gap-2 text-sm text-slate">
                  <span className="text-sky flex-shrink-0">✓</span>
                  <span>{upgrade}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* AAR + SOPs */}
          <motion.div
            className="bg-white rounded-xl shadow-lg border border-rule p-8"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-navy mb-4">📋 Institutional Learning & SOPs</h3>

            <h4 className="text-sm font-bold text-navy mb-2">After-Action Reviews</h4>
            <p className="text-sm text-mid leading-relaxed mb-4">{aarDescription}</p>

            <div className="space-y-2 mb-6">
              {aarTracker.map((aar) => (
                <div
                  key={aar.name}
                  className={`flex items-center gap-2 text-sm px-3 py-2 rounded-lg ${
                    aar.status === "done" ? "bg-green/10 text-green-800" : "bg-gold/10 text-gold-800"
                  }`}
                  style={{
                    backgroundColor: aar.status === "done" ? "#E1F5EE" : "#FEF8EC",
                    color: aar.status === "done" ? "#085041" : "#7A4F00",
                  }}
                >
                  <span>{aar.status === "done" ? "✅" : "🕒"}</span>
                  <span className="font-medium">{aar.name} AAR — {aar.status === "done" ? "Completed" : "Ongoing"}</span>
                </div>
              ))}
            </div>

            <div className="h-px bg-rule mb-6" />

            <h4 className="text-sm font-bold text-navy mb-3">SOPs & protocols</h4>
            <div className="space-y-2">
              {sopUpdates.map((sop) => (
                <div key={sop} className="flex gap-2 text-sm text-slate">
                  <span className="text-sky flex-shrink-0">✓</span>
                  <span>{sop}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Crisis monitoring + readiness continuum */}
        <motion.div
          className="bg-white rounded-xl shadow-lg border border-rule p-8 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-navy mb-6">📡 Corporate Visibility & Crisis Monitoring</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-mid leading-relaxed mb-4">{crisisTracker.description}</p>
              <div className="grid grid-cols-2 gap-2">
                {crisisTracker.features.map((feature) => (
                  <div key={feature} className="flex gap-2 p-2.5 bg-ice rounded-lg text-xs text-slate">
                    <span className="text-sky flex-shrink-0">✓</span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-sm font-bold text-navy mb-4">Readiness continuum — how the elements connect</h4>
              <motion.div
                className="flex flex-wrap items-center gap-1"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {continuum.map((step, idx) => {
                  const colors = [
                    { bg: "#E8F4FA", text: "#003F6B" },
                    { bg: "#E1F5EE", text: "#085041" },
                    { bg: "#FEF8EC", text: "#7A4F00" },
                    { bg: "#FBE9E3", text: "#7A2A10" },
                    { bg: "#EEEDFB", text: "#26215C" },
                  ];
                  const color = colors[idx % colors.length];
                  return (
                    <motion.div key={step.label} className="flex items-center gap-1" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
                      <div
                        className="rounded-lg px-3 py-3 text-center min-w-[88px]"
                        style={{ backgroundColor: color.bg, color: color.text }}
                      >
                        <div className="text-lg mb-1">{step.icon}</div>
                        <div className="text-xs font-semibold leading-tight">{step.label}</div>
                        <div className="text-[10px] opacity-75 mt-0.5">{step.sub}</div>
                      </div>
                      {idx < continuum.length - 1 && <span className="text-mid">→</span>}
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Key insight */}
        <motion.div
          className="p-8 bg-gradient-to-r from-teal/10 to-green/10 rounded-xl border border-teal/20 print:hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold text-navy mb-2">📈 Measurable Impact</h3>
          <p className="text-mid">
            Training cohorts demonstrated transformational impact. The Addis Ababa cohort achieved 93% post-training
            understanding of SURGE Advisor roles — the strongest result of 2025. These gains directly translate into
            faster, more effective crisis deployment decisions across the network.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
