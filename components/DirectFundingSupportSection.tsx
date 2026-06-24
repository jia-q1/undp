"use client";

import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { reportData } from "@/lib/data";

function formatUsd(value: number | string) {
  return `$${(Number(value) / 1_000_000).toFixed(1)}M`;
}

export function DirectFundingSupportSection() {
  const data = reportData.directFundingSupport;
  const { trac3, surge } = data;
  const maxBureau = Math.max(...trac3.byBureau.map((b) => b.value));
  const maxCountry = Math.max(...trac3.topCountries.map((c) => c.value));

  return (
    <section
      data-chapter="1"
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
          <span className="inline-block px-4 py-2 rounded-full bg-gold/20 text-gold text-sm font-semibold mb-4">
            Crisis Financing
          </span>
          <h2 className="text-5xl font-bold text-navy mb-4">{data.title}</h2>
        </motion.div>

        {/* Top-line stats */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-xl font-bold text-navy text-center mb-6">{data.toplineIntro}</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {data.topline.map((stat, idx) => (
              <div key={idx} className="bg-navy rounded-xl p-6 border border-navy/20 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gold" />
                <div className="text-3xl font-bold text-teal">{stat.value}</div>
                <div className="text-sm text-white/90 mt-2 leading-snug">{stat.label}</div>
                {stat.sub && <div className="text-xs text-white/50 mt-1">{stat.sub}</div>}
              </div>
            ))}
          </div>
          <p className="text-center text-mid italic mt-6 max-w-2xl mx-auto">{data.toplineOutro}</p>
          <p className="text-lg text-mid max-w-2xl mx-auto text-center mt-8">{data.description}</p>
        </motion.div>

        {/* TRAC 3 */}
        <motion.div
          className="bg-white rounded-xl shadow-lg border border-rule p-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold text-navy mb-1">💰 {trac3.title}</h3>
          <p className="text-mid text-sm leading-relaxed mb-6">{trac3.description}</p>

          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="bg-ice rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-navy">{trac3.total}</div>
              <div className="text-xs text-mid mt-1">Total, 2023–2026</div>
            </div>
            <div className="bg-ice rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-blue">{trac3.recoveryTotal}</div>
              <div className="text-xs text-mid mt-1">Recovery</div>
            </div>
            <div className="bg-ice rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-coral">{trac3.responseTotal}</div>
              <div className="text-xs text-mid mt-1">Response</div>
            </div>
          </div>

          {/* Trend chart (screen only) */}
          <div className="mb-8 print:hidden" style={{ height: 260 }}>
            <h4 className="text-sm font-bold text-mid uppercase tracking-wide mb-3">4-year trend — Recovery vs. Response</h4>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={trac3.byYear} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#D0DFE8" />
                <XAxis dataKey="year" tick={{ fontSize: 12, fill: "#4A6174" }} axisLine={{ stroke: "#D0DFE8" }} />
                <YAxis tickFormatter={(v) => formatUsd(v)} tick={{ fontSize: 12, fill: "#4A6174" }} axisLine={false} tickLine={false} />
                <Tooltip formatter={(v) => formatUsd(v as number)} />
                <Legend wrapperStyle={{ fontSize: 12 }} />
                <Bar dataKey="recovery" name="Recovery" stackId="a" fill="#00689D" radius={[0, 0, 0, 0]} />
                <Bar dataKey="response" name="Response" stackId="a" fill="#E05A2B" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Print-only: plain trend table */}
          <div className="hidden print:block mb-8">
            <h4 className="text-sm font-bold text-mid uppercase tracking-wide mb-2">4-year trend — Recovery vs. Response</h4>
            <div className="space-y-1">
              {trac3.byYear.map((y) => (
                <div key={y.year} className="grid grid-cols-3 text-sm border-b border-rule py-1">
                  <span className="font-semibold text-navy">{y.year}</span>
                  <span className="text-blue">{formatUsd(y.recovery)} recovery</span>
                  <span className="text-coral">{formatUsd(y.response)} response</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h4 className="text-sm font-bold text-mid uppercase tracking-wide mb-4">By regional bureau (2023–2026)</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2.5">
              {trac3.byBureau.map((b, idx) => (
                <div key={b.bureau} className="grid grid-cols-[70px_1fr_50px] items-center gap-2">
                  <div className="text-xs text-mid text-right">{b.bureau}</div>
                  <div className="h-2.5 bg-ice rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full bg-blue"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(b.value / maxBureau) * 100}%` }}
                      transition={{ duration: 0.6, delay: idx * 0.05 }}
                      viewport={{ once: true }}
                    />
                  </div>
                  <div className="text-xs font-semibold text-navy text-right">{formatUsd(b.value)}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold text-mid uppercase tracking-wide mb-4">
              Top 10 countries, by TRAC 3 delivery <span className="font-normal text-mid/70">(2023–2026, {trac3.countriesReached} countries total)</span>
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2.5">
              {trac3.topCountries.map((c, idx) => (
                <div key={c.country} className="grid grid-cols-[130px_1fr_50px] items-center gap-2">
                  <div className="text-xs text-mid text-right">{c.country}</div>
                  <div className="h-2.5 bg-ice rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full bg-coral"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(c.value / maxCountry) * 100}%` }}
                      transition={{ duration: 0.6, delay: idx * 0.05 }}
                      viewport={{ once: true }}
                    />
                  </div>
                  <div className="text-xs font-semibold text-navy text-right">{formatUsd(c.value)}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* SURGE */}
        <motion.div
          className="bg-white rounded-xl shadow-lg border border-rule p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold text-navy mb-1">⚡ {surge.title}</h3>
          <p className="text-mid text-sm leading-relaxed mb-6">{surge.description}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="bg-ice rounded-lg p-4 text-center md:max-w-[200px]">
              <div className="text-2xl font-bold text-green">{surge.total}</div>
              <div className="text-xs text-mid mt-1">Total, 2023–2026</div>
            </div>

            <div className="print:hidden" style={{ height: 200 }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={surge.byYear} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#D0DFE8" />
                  <XAxis dataKey="year" tick={{ fontSize: 12, fill: "#4A6174" }} axisLine={{ stroke: "#D0DFE8" }} />
                  <YAxis tickFormatter={(v) => formatUsd(v)} tick={{ fontSize: 12, fill: "#4A6174" }} axisLine={false} tickLine={false} />
                  <Tooltip formatter={(v) => formatUsd(v as number)} />
                  <Bar dataKey="value" name="SURGE spend" fill="#1D9E75" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Print-only: plain trend table */}
          <div className="hidden print:block mt-4">
            <div className="space-y-1">
              {surge.byYear.map((y) => (
                <div key={y.year} className="grid grid-cols-2 text-sm border-b border-rule py-1">
                  <span className="font-semibold text-navy">{y.year}</span>
                  <span className="text-green">{formatUsd(y.value)}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
