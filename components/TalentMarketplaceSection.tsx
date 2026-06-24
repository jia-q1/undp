"use client";

import { motion } from "framer-motion";
import { reportData } from "@/lib/data";

export function TalentMarketplaceSection() {
  const data = reportData.talentMarketplace;
  const maxPractice = Math.max(...data.practiceAreas.map((p) => p.count));
  const maxBureau = Math.max(...data.bureaus.map((b) => b.count));
  const maxMonth = Math.max(...data.monthly.map((m) => m.count));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const stats = [
    { label: "Total Requests", value: data.stats.totalRequests.toString() },
    { label: "Personnel Deployed", value: data.stats.deployed.toString(), sub: `${data.stats.completionRate}% completion` },
    { label: "In Progress / Pending", value: data.stats.pending.toString() },
    { label: "Matched via SmartMatch", value: data.stats.smartMatchMatches },
    { label: "Proactively Applied", value: data.stats.proactiveApplications },
    { label: "Countries Reached", value: data.stats.countriesWithRequests.toString() },
  ];

  return (
    <section
      data-chapter="4"
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
          <span className="inline-block px-4 py-2 rounded-full bg-green/20 text-green text-sm font-semibold mb-4">
            Internal Mobility
          </span>
          <h2 className="text-5xl font-bold text-navy mb-4">{data.title}</h2>
          <p className="text-lg text-mid max-w-2xl mx-auto">{data.description}</p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-xl p-6 border border-rule shadow-sm"
            >
              <div className="text-3xl font-bold text-navy">{stat.value}</div>
              <div className="text-sm text-mid mt-2">{stat.label}</div>
              {stat.sub && <div className="text-xs text-sky mt-1">{stat.sub}</div>}
            </motion.div>
          ))}
        </motion.div>

        {/* Practice areas + Bureaus */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div
            className="bg-white rounded-xl shadow-lg border border-rule p-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-sm font-bold text-mid uppercase tracking-wide mb-5">
              Requests by practice area
            </h3>
            <div className="space-y-2.5">
              {data.practiceAreas.map((area, idx) => (
                <div key={area.name} className="grid grid-cols-[140px_1fr_30px] items-center gap-3">
                  <div className="text-xs text-mid text-right">{area.name}</div>
                  <div className="h-2.5 bg-ice rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full bg-blue"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(area.count / maxPractice) * 100}%` }}
                      transition={{ duration: 0.6, delay: idx * 0.04 }}
                      viewport={{ once: true }}
                    />
                  </div>
                  <div className="text-xs font-semibold text-navy text-right">{area.count}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="bg-white rounded-xl shadow-lg border border-rule p-8"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-sm font-bold text-mid uppercase tracking-wide mb-5">
              Requests by bureau / unit
            </h3>
            <div className="space-y-2">
              {data.bureaus.map((bureau, idx) => (
                <div key={bureau.name} className="grid grid-cols-[60px_1fr_24px] items-center gap-3">
                  <div className="text-xs text-mid text-right">{bureau.name}</div>
                  <div className="h-2 bg-ice rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full bg-sky"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(bureau.count / maxBureau) * 100}%` }}
                      transition={{ duration: 0.6, delay: idx * 0.03 }}
                      viewport={{ once: true }}
                    />
                  </div>
                  <div className="text-xs font-semibold text-navy text-right">{bureau.count}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Monthly trend */}
        <motion.div
          className="bg-white rounded-xl shadow-lg border border-rule p-8 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-sm font-bold text-mid uppercase tracking-wide mb-6">
            Requests by month — 2025
          </h3>
          <div className="flex items-end justify-between gap-2 h-40">
            {data.monthly.map((m, idx) => (
              <div key={m.month} className="flex-1 flex flex-col items-center justify-end h-full gap-2">
                <motion.div
                  className={`w-full rounded-t-md ${
                    m.count === maxMonth ? "bg-navy" : m.count >= 12 ? "bg-blue" : m.count >= 9 ? "bg-sky" : "bg-sky/30"
                  }`}
                  initial={{ height: 0 }}
                  whileInView={{ height: `${(m.count / maxMonth) * 100}%` }}
                  transition={{ duration: 0.6, delay: idx * 0.03 }}
                  viewport={{ once: true }}
                />
                <div className="text-xs text-mid">{m.month}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Key insight */}
        <motion.div
          className="p-8 bg-gradient-to-r from-green/10 to-sky/10 rounded-xl border border-green/20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold text-navy mb-3">🤝 Crisis contexts directly supported</h3>
          <div className="flex flex-wrap gap-2 mb-5">
            {data.crisisContextsSupported.map((c) => (
              <span key={c} className="text-xs px-3 py-1.5 rounded-md bg-white border border-rule text-navy font-medium">
                {c}
              </span>
            ))}
          </div>
          <p className="text-mid text-sm leading-relaxed">
            Enabling rapid identification of specialized profiles without opening external vacancies. Top
            requesting locations:{" "}
            {data.topLocations.map((loc, idx) => (
              <span key={loc.name}>
                <strong className="text-navy">
                  {loc.name} ({loc.count})
                </strong>
                {idx < data.topLocations.length - 1 ? ", " : ""}
              </span>
            ))}
            .
          </p>
        </motion.div>
      </div>
    </section>
  );
}
