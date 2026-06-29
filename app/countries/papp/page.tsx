"use client";

import { useEffect, useState, type ReactNode } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { reportData } from "@/lib/data";
import { Footer } from "@/components/Footer";

const TABS = [
  "Overview",
  "Funding",
  "Programming",
  "Response",
  "Assessments",
  "Special Measures",
  "Crisis Signals",
] as const;

function PendingCard({ children }: { children: ReactNode }) {
  return (
    <div className="bg-white rounded-xl border border-dashed border-rule p-12 text-center">
      <p className="text-mid italic">{children}</p>
    </div>
  );
}

// Combined height of the sticky header + sticky tabs bar, so jumping to a
// section (or detecting which one is active) accounts for what they cover.
const STICKY_OFFSET = 140;

export default function PappCountryPage() {
  const [activeTab, setActiveTab] = useState(0);

  const profile = reportData.countryProfiles.papp;
  const crisis = reportData.crisisResponse.crises.find((c) => c.id === "papp")!;
  const specialMeasures = reportData.specialMeasures.coDelivery.find((c) => c.co === "PAPP")!;
  const trac3Country = reportData.directFundingSupport.trac3.topCountries.find((c) => c.country === "PAPP")!;
  const extensionRequested = reportData.specialMeasures.extensionsRequested.includes("PAPP");

  const formatUsd = (value: number) => `$${(value / 1_000_000).toFixed(1)}M`;

  useEffect(() => {
    const handleScroll = () => {
      // Scroll-spy: same approach as the main report's chapter nav — the active
      // tab is the last section whose top has scrolled past the sticky header.
      const sections = document.querySelectorAll("[data-papp-tab]");
      let current = 0;
      sections.forEach((el, idx) => {
        const rect = el.getBoundingClientRect();
        if (rect.top <= STICKY_OFFSET + 20) {
          current = idx;
        }
      });
      setActiveTab(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleTabJump = (index: number) => {
    const sections = document.querySelectorAll("[data-papp-tab]");
    const target = sections[index];
    if (target) {
      const top = target.getBoundingClientRect().top + window.scrollY - STICKY_OFFSET;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

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

      {/* Tabs */}
      <div className="sticky top-[72px] z-30 bg-white border-b border-rule">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex gap-2 overflow-x-auto py-3 md:flex-wrap md:justify-center">
            {TABS.map((tab, idx) => (
              <button
                key={tab}
                onClick={() => handleTabJump(idx)}
                className={`px-4 py-2 text-sm font-semibold rounded-full whitespace-nowrap transition-all border ${
                  activeTab === idx
                    ? "bg-sky/15 text-blue border-sky"
                    : "bg-white text-mid border-rule hover:border-sky hover:text-blue"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12 space-y-8">
        {/* Overview */}
        <motion.div
          data-papp-tab
          className="bg-gradient-to-br from-navy to-navy/90 rounded-xl p-8 md:p-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-white/90 text-lg leading-relaxed max-w-3xl mb-10">
            {profile.overview}
          </p>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-8">
            {[
              { value: crisis.level, label: "Crisis Level" },
              { value: crisis.experts, label: "Experts Deployed" },
              { value: specialMeasures.cases, label: "Special Measures Cases" },
              { value: specialMeasures.value, label: "Special Measures Value" },
              { value: formatUsd(trac3Country.value), label: "TRAC 3 Delivery (2023–2026)" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-sky mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Funding */}
        <motion.div
          data-papp-tab
          className="bg-white rounded-xl shadow-lg border border-rule p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold text-navy mb-1">Funding</h3>
          <p className="text-mid text-sm leading-relaxed mb-6">
            TRAC 3 recovery and response financing provided to PAPP, part of the Crisis Bureau&apos;s {reportData.directFundingSupport.trac3.total} total across {reportData.directFundingSupport.trac3.countriesReached} countries, 2023–2026.
          </p>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-ice rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-coral">{formatUsd(trac3Country.value)}</div>
              <div className="text-xs text-mid mt-1">TRAC 3, 2023–2026</div>
            </div>
            <div className="bg-ice rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-navy">{formatUsd(9722223)}</div>
              <div className="text-xs text-mid mt-1">REVIVE</div>
            </div>
            <div className="bg-ice rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-blue">{formatUsd(9722222)}</div>
              <div className="text-xs text-mid mt-1">REVIVE Debris Management</div>
            </div>
          </div>
        </motion.div>

        {/* Programming */}
        <motion.div
          data-papp-tab
          className="bg-white rounded-xl shadow-lg border border-rule p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold text-navy mb-4">Early Recovery in Gaza</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-ice rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-navy">210K tonnes</div>
              <div className="text-xs text-mid mt-1">Solid waste collected in Gaza</div>
            </div>
            <div className="bg-ice rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-blue">624K</div>
              <div className="text-xs text-mid mt-1">People benefiting</div>
            </div>
          </div>
        </motion.div>

        {/* Rule of Law */}
        <motion.div
          className="bg-white rounded-xl shadow-lg border border-rule p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold text-navy mb-4">Rule of Law &amp; Access to Justice</h3>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-ice rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-navy">160K</div>
              <div className="text-xs text-mid mt-1">Users enabled remote proceedings via the digital court management system</div>
            </div>
            <div className="bg-ice rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-blue">34K</div>
              <div className="text-xs text-mid mt-1">People, mostly women and children, supported with legal aid, mediation, and psychosocial support</div>
            </div>
            <div className="bg-ice rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-coral">30</div>
              <div className="text-xs text-mid mt-1">Judges and prosecutors trained on evidence and human rights adjudication</div>
            </div>
          </div>
        </motion.div>

        {/* REVIVE — Shelter & WASH */}
        <motion.div
          className="bg-white rounded-xl shadow-lg border border-rule p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold text-navy mb-1">REVIVE — Transitional Shelter &amp; WASH</h3>
          <p className="text-sm text-sky font-semibold mb-6">
            Gaza Inclusive Transitional Community Neighbourhood Programme, Oct–Dec 2025
          </p>

          <h4 className="text-xs font-bold text-mid uppercase tracking-wide mb-3">Humanitarian context</h4>
          <div className="grid grid-cols-3 gap-4 mb-2">
            <div className="bg-ice rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-navy">71K+</div>
              <div className="text-xs text-mid mt-1">Lives lost</div>
            </div>
            <div className="bg-ice rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-blue">171K+</div>
              <div className="text-xs text-mid mt-1">Injured</div>
            </div>
            <div className="bg-ice rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-coral">90%+</div>
              <div className="text-xs text-mid mt-1">Of the population displaced</div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 mb-2">
            <div className="bg-ice rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-navy">92%</div>
              <div className="text-xs text-mid mt-1">Of housing stock destroyed or damaged</div>
            </div>
            <div className="bg-ice rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-blue">61M tonnes</div>
              <div className="text-xs text-mid mt-1">Debris generated</div>
            </div>
            <div className="bg-ice rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-coral">50%+</div>
              <div className="text-xs text-mid mt-1">Of the territory still inaccessible</div>
            </div>
          </div>
          <p className="text-xs text-mid italic mb-6">
            A ceasefire reached in October 2025, backed by UNSC Resolution 2803 (November 2025), opened a window for tentative returns — but sporadic violence continues.
          </p>

          <h4 className="text-xs font-bold text-mid uppercase tracking-wide mb-3">Shelter &amp; WASH delivered</h4>
          <div className="grid grid-cols-3 gap-4 mb-2">
            <div className="bg-ice rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-navy">1,622</div>
              <div className="text-xs text-mid mt-1">Relief Housing Units prepositioned, for 9,684 people</div>
            </div>
            <div className="bg-ice rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-blue">950</div>
              <div className="text-xs text-mid mt-1">Wood-frame tents installed, sheltering 5,700 people</div>
            </div>
            <div className="bg-ice rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-coral">1,600</div>
              <div className="text-xs text-mid mt-1">Tarpaulins distributed, protecting 9,600 people</div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-ice rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-navy">20K</div>
              <div className="text-xs text-mid mt-1">Residents with restored water access (Jabalia well)</div>
            </div>
            <div className="bg-ice rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-blue">652</div>
              <div className="text-xs text-mid mt-1">Water tanks installed or in production</div>
            </div>
            <div className="bg-ice rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-coral">426</div>
              <div className="text-xs text-mid mt-1">Latrines planned (223 in production)</div>
            </div>
          </div>

          <h4 className="text-xs font-bold text-mid uppercase tracking-wide mb-3">Site assessment &amp; community partnerships</h4>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-ice rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-navy">10 / 294</div>
              <div className="text-xs text-mid mt-1">Sites pre-selected for transitional neighbourhoods, of those identified</div>
            </div>
            <div className="bg-ice rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-blue">8</div>
              <div className="text-xs text-mid mt-1">Local partnerships established for social cohesion and disability inclusion</div>
            </div>
          </div>
        </motion.div>

        {/* Debris Management dashboard */}
        <motion.div
          className="bg-white rounded-xl shadow-lg border border-rule p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold text-navy mb-1">Debris Management in Gaza</h3>
          <p className="text-sm text-sky font-semibold mb-4">
            Planning recycling and disposal sites allocation
          </p>
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-ice rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-navy">35.6M</div>
              <div className="text-xs text-mid mt-1">Tonnes of debris (UNEP)</div>
            </div>
            <div className="bg-ice rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-blue">3.6M</div>
              <div className="text-xs text-mid mt-1">Tonnes from destroyed roads</div>
            </div>
            <div className="bg-ice rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-coral">36 ha</div>
              <div className="text-xs text-mid mt-1">Additional land needed</div>
            </div>
          </div>
          <p className="text-xs text-mid mb-2">Minimum safe distance for disposal sites from:</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {[
              ["Water sources", "60m"],
              ["Residential areas", "250m"],
              ["Schools & hospitals", "500m"],
              ["Greenhouses", "50m"],
              ["Roads", "10m"],
              ["Main roads", "50m"],
            ].map(([label, distance]) => (
              <span
                key={label}
                className="text-xs px-2 py-1 rounded-md bg-ice border border-rule text-blue font-medium"
              >
                {label}: <strong className="text-navy">{distance}</strong>
              </span>
            ))}
          </div>
          <a
            href="https://geosmart.undp.org/arcgis/apps/dashboards/795ed50f82924207861f7b0d7b611928"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/papp.png"
              alt="Debris Management in Gaza — Planning recycling and disposal sites allocation"
              className="w-full h-auto rounded-lg border border-rule shadow-sm hover:shadow-lg transition-shadow"
            />
          </a>
        </motion.div>

        {/* Response */}
        <motion.div
          data-papp-tab
          className="bg-white rounded-xl shadow-lg border border-rule overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
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

        {/* Assessments */}
        <motion.div
          data-papp-tab
          className="bg-white rounded-xl shadow-lg border border-rule p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold text-navy mb-1">Rafah Debris Dashboard</h3>
          <p className="text-sm text-sky font-semibold mb-4">Debris mapping and clearance tracking for Rafah</p>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/rafah.png"
            alt="Rafah Debris Dashboard"
            className="w-full h-auto rounded-lg border border-rule shadow-sm"
          />
        </motion.div>

        <motion.div
          className="bg-white rounded-xl shadow-lg border border-rule p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold text-navy mb-1">Gaza Strip Comprehensive Roads Assessment Dashboard</h3>
          <p className="text-sm text-sky font-semibold mb-4">Road network damage assessment across the Gaza Strip</p>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/gaza_strip.png"
            alt="Gaza Strip Comprehensive Roads Assessment Dashboard"
            className="w-full h-auto rounded-lg border border-rule shadow-sm"
          />
        </motion.div>

        {/* Special Measures */}
        <motion.div
          data-papp-tab
          className="bg-white rounded-xl shadow-lg border border-rule p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold text-navy mb-1">Special Measures</h3>
          <p className="text-mid text-sm leading-relaxed mb-6">{specialMeasures.detail}</p>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-ice rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-navy">{specialMeasures.cases}</div>
              <div className="text-xs text-mid mt-1">Cases processed</div>
            </div>
            <div className="bg-ice rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-blue">{specialMeasures.value}</div>
              <div className="text-xs text-mid mt-1">Total value</div>
            </div>
          </div>

          {specialMeasures.categoryBreakdown.length > 0 && (
            <>
              <h4 className="text-xs font-bold text-mid uppercase tracking-wide mb-3">By category</h4>
              <div className="space-y-2 mb-6">
                {specialMeasures.categoryBreakdown.map((cat) => (
                  <div key={cat.name} className="grid grid-cols-[1fr_60px_70px_50px] items-center gap-2">
                    <div className="text-sm text-slate">{cat.name}</div>
                    <div className="text-xs text-mid text-right">{cat.cases} cases</div>
                    <div className="text-sm font-semibold text-navy text-right">{cat.value}</div>
                    <div className="text-xs text-mid text-right">{cat.share}</div>
                  </div>
                ))}
              </div>

              <div className="space-y-2 mb-2">
                {specialMeasures.categoryNotes.map((note, idx) => (
                  <p key={idx} className="text-xs text-mid leading-relaxed">{note}</p>
                ))}
              </div>
            </>
          )}

          {extensionRequested && (
            <p className="text-xs text-mid italic mt-4">Extension of pre-approved Special Measures requested.</p>
          )}
        </motion.div>

        {/* Crisis Signals */}
        <motion.div
          data-papp-tab
          className="bg-white rounded-xl shadow-lg border border-rule p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold text-navy mb-1">Crisis Demand Profile</h3>
          <p className="text-sm text-sky font-semibold mb-4">
            See the full Crisis Signals tool on the main report
          </p>
          <Link href="/#crisis-signals" className="block">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/CDP.png"
              alt="Crisis Demand Profile"
              className="w-full h-auto rounded-lg border border-rule shadow-sm hover:shadow-lg transition-shadow"
            />
          </Link>
        </motion.div>

        <PendingCard>
          Crisis Signals data for PAPP is not yet broken out at the country level.
        </PendingCard>
      </div>

      <Footer />
    </main>
  );
}
