"use client";

import { motion } from "framer-motion";
import { reportData } from "@/lib/data";

export function RosterInfrastructureSection() {
  const data = reportData.rosterInfrastructure;
  const { expres, surge } = data;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const splitBar = (leftPct: number, leftLabel: string, rightLabel: string, leftColor: string, rightColor: string) => (
    <div>
      <div className="h-3 rounded-full overflow-hidden flex">
        <motion.div
          className="h-full"
          style={{ backgroundColor: leftColor }}
          initial={{ width: 0 }}
          whileInView={{ width: `${leftPct}%` }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        />
        <div className="h-full flex-1" style={{ backgroundColor: rightColor }} />
      </div>
      <div className="flex justify-between text-xs text-mid mt-2">
        <span>
          <span className="inline-block w-2 h-2 rounded-sm mr-1" style={{ backgroundColor: leftColor }} />
          {leftLabel} {leftPct}%
        </span>
        <span>
          <span className="inline-block w-2 h-2 rounded-sm mr-1" style={{ backgroundColor: rightColor }} />
          {rightLabel} {100 - leftPct}%
        </span>
      </div>
    </div>
  );

  return (
    <section
      data-chapter="5"
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
            Crisis Deployment Backbone
          </span>
          <h2 className="text-5xl font-bold text-navy mb-4">{data.title}</h2>
          <p className="text-lg text-mid max-w-2xl mx-auto">{data.description}</p>
        </motion.div>

        {/* Stats grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            { label: "ExpRes Experts", value: expres.total },
            { label: "Experts Added in 2025", value: expres.added2025.toLocaleString() },
            { label: "SURGE Advisors", value: surge.total.toString(), sub: `+${surge.added2025} added in 2025` },
            { label: "Cost Recovery", value: expres.costRecoveryTotal },
            { label: "Global Call Applicants", value: expres.globalCallApplicants, sub: `${expres.globalCallProfiles} profiles` },
            { label: "Expert Sharing Time", value: "2–5 days" },
          ].map((stat, index) => (
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

        {/* Two rosters */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div
            className="bg-white rounded-xl shadow-lg border border-rule overflow-hidden"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-navy px-6 py-4 flex items-center justify-between">
              <span className="text-white font-bold">ExpRes Roster</span>
              <span className="text-teal font-bold text-lg">{expres.total}</span>
            </div>
            <div className="p-6 space-y-3 text-sm text-mid">
              <div className="flex gap-2"><span className="text-sky">●</span><span>Pre-vetted consultants across {expres.profiles} profiles and {expres.subProfiles} sub-profiles for immediate support</span></div>
              <div className="flex gap-2"><span className="text-sky">●</span><span>{expres.added2025.toLocaleString()} experts added in 2025: {expres.globalCallAdded.toLocaleString()} via Global Call, {expres.adHocAdded.toLocaleString()} ad hoc recommendations</span></div>
              <div className="flex gap-2"><span className="text-sky">●</span><span>{expres.globalSouthPct}% from the Global South; {expres.femalePct}% female deployment rate</span></div>
              <div className="flex gap-2"><span className="text-sky">●</span><span>{expres.costRecoveryTotal} cost recovery; {expres.costRecoveryExpRes} from ExpRes assignments, {expres.costRecoveryCustom} from customized services</span></div>
              <div className="flex gap-2"><span className="text-sky">●</span><span>Due diligence: {expres.dueDiligence.join(", ")}</span></div>
              <div className="flex gap-2"><span className="text-sky">●</span><span>EVA.ai platform enhanced with new automations, improved workflow speed and data quality</span></div>
            </div>
          </motion.div>

          <motion.div
            className="bg-white rounded-xl shadow-lg border border-rule overflow-hidden"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-navy px-6 py-4 flex items-center justify-between">
              <span className="text-white font-bold">SURGE Roster</span>
              <span className="text-teal font-bold text-lg">{surge.total}</span>
            </div>
            <div className="p-6 space-y-3 text-sm text-mid">
              <div className="flex gap-2"><span className="text-sky">●</span><span>Trained deployable UNDP staff ready within days of a crisis declaration</span></div>
              <div className="flex gap-2"><span className="text-sky">●</span><span>{surge.added2025} new advisors added in 2025; historical data consolidated into a single Master Roster dating back to {surge.masterRosterSince}</span></div>
              <div className="flex gap-2"><span className="text-sky">●</span><span>{surge.profilesRevised} profiles revised and aligned to Early Recovery Packages; {surge.subProfilesUpdated} sub-profile ToRs updated</span></div>
              <div className="flex gap-2"><span className="text-sky">●</span><span>New profiles introduced: {surge.newProfiles.join(", ")}</span></div>
              <div className="flex gap-2"><span className="text-sky">●</span><span>SURGE Campus activated to reinforce community of practice and knowledge-sharing</span></div>
              <div className="flex gap-2"><span className="text-sky">●</span><span>Self-paced SURGE training course launching Q1 2026 for broader baseline access</span></div>
            </div>
          </motion.div>
        </div>

        {/* Gender / origin splits + SURGE portal upgrades */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div
            className="bg-white rounded-xl shadow-lg border border-rule p-8 space-y-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-sm font-bold text-mid uppercase tracking-wide mb-4">
                Global Call — gender split (applicants)
              </h3>
              {splitBar(expres.genderSplit.male, "Male", "Female", "#00689D", "#1D9E75")}
            </div>
            <div>
              <h3 className="text-sm font-bold text-mid uppercase tracking-wide mb-4">
                Experts added — origin (2025)
              </h3>
              {splitBar(expres.globalSouthPct, "Global South", "Other", "#E05A2B", "#9BB0C0")}
            </div>
          </motion.div>

          <motion.div
            className="bg-white rounded-xl shadow-lg border border-rule p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-sm font-bold text-mid uppercase tracking-wide mb-4">SURGE Portal upgrades</h3>
            <div className="grid grid-cols-1 gap-2.5 mb-5">
              {surge.portalUpgrades.map((upgrade) => (
                <div key={upgrade} className="flex gap-2 p-2.5 bg-ice rounded-lg text-sm text-slate">
                  <span className="text-sky flex-shrink-0">✓</span>
                  <span>{upgrade}</span>
                </div>
              ))}
            </div>
            <h3 className="text-sm font-bold text-mid uppercase tracking-wide mb-3">New profiles created</h3>
            <div className="flex flex-wrap gap-2">
              {surge.newProfiles.map((profile) => (
                <span key={profile} className="text-xs px-3 py-1.5 rounded-md bg-purple/10 border border-purple/30 text-navy font-medium">
                  {profile}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Key insight */}
        <motion.div
          className="p-8 bg-gradient-to-r from-purple/10 to-blue/10 rounded-xl border border-purple/20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold text-navy mb-2">⚙️ EVA.ai platform upgrades in 2025</h3>
          <p className="text-mid">{expres.evaUpgrades}</p>
        </motion.div>
      </div>
    </section>
  );
}
