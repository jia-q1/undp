"use client";

import { motion } from "framer-motion";
import { reportData } from "@/lib/data";

export function ReadinessTrainingSection() {
  const cohorts = reportData.readinessTraining.trainingCohorts;
  const { erh, aarTracker, aarDescription, aarDashboardLink, sopUpdates } = reportData.readinessTraining;

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
      data-chapter="6"
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
            Building the network&apos;s capacity to prepare, respond, and recover across {erh.officesReached} country offices
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
            <div className="mb-4">
              <h3 className="text-2xl font-bold text-navy">Early Recovery Hub</h3>
              <p className="text-sm text-sky">Central digital platform</p>
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
                  <div className="w-1.5 h-1.5 rounded-full bg-sky mt-1.5 flex-shrink-0" />
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

        {/* Institutional Learning: AARs + SOPs + dashboard */}
        <motion.div
          className="bg-white rounded-xl shadow-lg border border-rule p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
            <div>
              <h3 className="text-2xl font-bold text-navy mb-2">Institutional Learning</h3>
              <p className="text-mid text-sm leading-relaxed max-w-2xl">{aarDescription}</p>
            </div>
            <a
              href={aarDashboardLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg font-semibold bg-teal text-white hover:bg-navy transition-colors whitespace-nowrap flex-shrink-0"
            >
              <span>Open AAR Dashboard</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

          <a href={aarDashboardLink} target="_blank" rel="noopener noreferrer" className="block mb-6">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/AARs_Dashboard.png"
              alt="AAR Dashboard preview"
              className="w-full h-auto rounded-lg border border-rule shadow-sm hover:shadow-lg transition-shadow"
            />
          </a>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-sm font-bold text-navy mb-3 uppercase tracking-wide">After-Action Reviews</h4>
              <div className="space-y-2">
                {aarTracker.map((aar) => (
                  <div
                    key={aar.name}
                    className="flex items-center gap-2 text-sm px-3 py-2 rounded-lg"
                    style={{
                      backgroundColor: aar.status === "done" ? "#E1F5EE" : "#FEF8EC",
                      color: aar.status === "done" ? "#085041" : "#7A4F00",
                    }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: aar.status === "done" ? "#1D9E75" : "#F0A500" }}
                    />
                    <span className="font-medium">{aar.name} AAR — {aar.status === "done" ? "Completed" : "Ongoing"}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-sm font-bold text-navy mb-3 uppercase tracking-wide">SOPs & Protocols</h4>
              <div className="space-y-2">
                {sopUpdates.map((sop) => (
                  <div key={sop} className="flex gap-2 text-sm text-slate">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky mt-1.5 flex-shrink-0" />
                    <span>{sop}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
