"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { reportData } from "@/lib/data";
import { Footer } from "@/components/Footer";

export default function PappCountryPage() {
  const profile = reportData.countryProfiles.papp;
  const crisis = reportData.crisisResponse.crises.find((c) => c.id === "papp")!;
  const specialMeasures = reportData.specialMeasures.coDelivery.find((c) => c.co === "PAPP")!;
  const trac3Country = reportData.directFundingSupport.trac3.topCountries.find((c) => c.country === "PAPP")!;
  const extensionRequested = reportData.specialMeasures.extensionsRequested.includes("PAPP");

  const formatUsd = (value: number) => `$${(value / 1_000_000).toFixed(1)}M`;

  return (
    <main className="bg-white">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-gradient-to-b from-navy to-navy/95 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <Link
            href="/"
            className="text-sm text-sky hover:text-white transition-colors inline-flex items-center gap-1.5 mb-2"
          >
            ← Crisis Bureau 2025 Report
          </Link>
          <h1 className="text-2xl font-bold text-white">{profile.name}</h1>
          <p className="text-sm text-sky">{profile.fullName}</p>
        </div>
      </header>

      {/* Hero stats */}
      <section className="relative py-16 px-6 bg-gradient-to-b from-navy to-navy/90">
        <div className="max-w-6xl mx-auto">
          <motion.p
            className="text-white/90 text-lg leading-relaxed max-w-3xl mb-12"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {profile.overview}
          </motion.p>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-8">
            {[
              { value: crisis.level, label: "Crisis Level" },
              { value: crisis.experts, label: "Experts Deployed" },
              { value: specialMeasures.cases, label: "Special Measures Cases" },
              { value: specialMeasures.value, label: "Special Measures Value" },
              { value: formatUsd(trac3Country.value), label: "TRAC 3 Delivery (2023–2026)" },
            ].map((stat, idx) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl md:text-5xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-sky mt-2">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-16 space-y-8">
        {/* Crisis Response */}
        <motion.div
          className="bg-white rounded-xl shadow-lg border border-rule overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="px-8 py-6 text-white" style={{ backgroundColor: "#E05A2B" }}>
            <div className="text-xl font-bold mb-1">Crisis Response</div>
            <div className="text-sm opacity-90">{crisis.description}</div>
          </div>
          <div className="p-8">
            <h3 className="text-sm font-bold text-mid uppercase tracking-wide mb-4">Deployment Roles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
              {crisis.roles.map((role, idx) => (
                <div key={idx} className="flex items-start gap-3 p-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-sky mt-1.5 flex-shrink-0" />
                  <div className="text-sm text-slate">{role}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Special Measures */}
        <motion.div
          className="bg-white rounded-xl shadow-lg border border-rule p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold text-navy mb-1">Special Measures</h3>
          <p className="text-mid text-sm leading-relaxed mb-6">{specialMeasures.detail}</p>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-ice rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-navy">{specialMeasures.cases}</div>
              <div className="text-xs text-mid mt-1">Cases processed</div>
            </div>
            <div className="bg-ice rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-blue">{specialMeasures.value}</div>
              <div className="text-xs text-mid mt-1">Total value</div>
            </div>
          </div>
          {extensionRequested && (
            <p className="text-xs text-mid italic mt-4">Extension of pre-approved Special Measures requested.</p>
          )}
        </motion.div>

        {/* Funding */}
        <motion.div
          className="bg-white rounded-xl shadow-lg border border-rule p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold text-navy mb-1">Funding</h3>
          <p className="text-mid text-sm leading-relaxed mb-6">
            TRAC 3 recovery and response financing provided to PAPP, part of the Crisis Bureau&apos;s {reportData.directFundingSupport.trac3.total} total across {reportData.directFundingSupport.trac3.countriesReached} countries, 2023–2026.
          </p>
          <div className="bg-ice rounded-lg p-4 text-center max-w-[200px]">
            <div className="text-2xl font-bold text-coral">{formatUsd(trac3Country.value)}</div>
            <div className="text-xs text-mid mt-1">TRAC 3, 2023–2026</div>
          </div>
        </motion.div>

        {/* Data pending */}
        <motion.div
          className="text-sm text-mid italic text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Assessments (RAPIDA/HBDA/SEIA/PDNA), Readiness & Training, and Crisis Signals data for PAPP are not yet broken out at the country level.
        </motion.div>
      </div>

      <Footer />
    </main>
  );
}
