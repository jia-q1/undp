"use client";


import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { reportData } from "@/lib/data";

function formatUsd(value: number | string) {
  return `$${(Number(value) / 1_000_000).toFixed(1)}M`;
}

export function DirectFundingSupportSection() {
  const data = reportData.directFundingSupport;
  const { trac3, surge, leverage, resourceMobilization2025, multiplierEffect } = data;
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
            Crisis Funding
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

        {/* Multiplier effect */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl md:text-4xl font-bold text-navy mb-6">{multiplierEffect.headline}</h3>

          <div className="bg-gold/10 border border-gold rounded-xl p-6 mb-8">
            <p className="text-navy leading-relaxed">
              <strong>{multiplierEffect.quote.source}:</strong> {multiplierEffect.quote.text}{" "}
              <span className="italic text-mid">{multiplierEffect.quote.note}</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {multiplierEffect.cases.map((item) => (
              <div key={item.tag} className="bg-ice rounded-xl border border-rule p-6">
                <span className="inline-block px-3 py-1 rounded-md bg-navy text-white text-xs font-bold mb-4">
                  {item.tag}
                </span>
                <div className="text-xl font-bold text-navy mb-3 leading-snug">{item.stat}</div>
                <p className="text-sm text-mid leading-relaxed mb-3">{item.description}</p>
                <p className="text-xs text-mid italic leading-relaxed">{item.note}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* TRAC 3 */}
        <motion.div
          className="bg-white rounded-xl shadow-lg border border-rule p-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold text-navy mb-1">{trac3.title}</h3>
          <p className="text-mid text-sm leading-relaxed mb-6">{trac3.description}</p>

          <div className="mb-8">
            <div className="bg-ice rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-navy">{trac3.total}</div>
              <div className="text-xs text-mid mt-1">Response and Recovery</div>
            </div>
          </div>

          {/* Trend chart (screen only) */}
          <div className="mb-8 print:hidden" style={{ height: 260 }}>
            <h4 className="text-sm font-bold text-mid uppercase tracking-wide mb-3">4-year trend</h4>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={trac3.byYear.map((y) => ({ year: y.year, total: y.recovery + y.response }))} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#D0DFE8" />
                <XAxis dataKey="year" tick={{ fontSize: 12, fill: "#4A6174" }} axisLine={{ stroke: "#D0DFE8" }} />
                <YAxis tickFormatter={(v) => formatUsd(v)} tick={{ fontSize: 12, fill: "#4A6174" }} axisLine={false} tickLine={false} />
                <Tooltip formatter={(v) => formatUsd(v as number)} />
                <Bar dataKey="total" name="Response and Recovery" fill="#00689D" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Print-only: plain trend table */}
          <div className="hidden print:block mb-8">
            <h4 className="text-sm font-bold text-mid uppercase tracking-wide mb-2">4-year trend</h4>
            <div className="space-y-1">
              {trac3.byYear.map((y) => (
                <div key={y.year} className="grid grid-cols-2 text-sm border-b border-rule py-1">
                  <span className="font-semibold text-navy">{y.year}</span>
                  <span className="text-navy">{formatUsd(y.recovery + y.response)}</span>
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

        {/* TRAC 3 Leverage */}
        <motion.div
          className="bg-white rounded-xl shadow-lg border border-rule p-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold text-navy mb-1">{leverage.title}</h3>
          <p className="text-mid text-sm leading-relaxed mb-6">{leverage.description}</p>

          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-ice rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-navy">{leverage.totalTrac3}</div>
              <div className="text-xs text-mid mt-1">Total TRAC 3, 2023–2025</div>
            </div>
            <div className="bg-ice rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-blue">{leverage.totalMobilized}</div>
              <div className="text-xs text-mid mt-1">Resources mobilized, 2023–2025</div>
            </div>
            <div className="bg-ice rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-coral">{leverage.ratio}</div>
              <div className="text-xs text-mid mt-1">Leverage ratio</div>
            </div>
          </div>

        </motion.div>

        {/* Resource Mobilization 2025 */}
        <motion.div
          className="bg-white rounded-xl shadow-lg border border-rule p-8 mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold text-navy mb-1">Resource Mobilization (2025)</h3>
          <p className="text-mid text-sm leading-relaxed mb-6">
            Funds mobilized by Crisis Bureau teams from donors in 2025.
          </p>

          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-rule">
                <th className="text-left font-bold text-mid uppercase text-xs tracking-wide py-2 pr-4">Team</th>
                <th className="text-right font-bold text-mid uppercase text-xs tracking-wide py-2">Contribution</th>
              </tr>
            </thead>
            <tbody>
              {resourceMobilization2025.byTeam.map((team) => (
                <tr key={team.team} className="border-b border-rule">
                  <td className="py-2 pr-4 text-navy">{team.team}</td>
                  <td className="py-2 text-right text-navy font-semibold">${team.total.toLocaleString()}</td>
                </tr>
              ))}
              <tr className="font-bold">
                <td className="py-2 pr-4 text-navy">Grand Total</td>
                <td className="py-2 text-right text-navy">${resourceMobilization2025.total.toLocaleString()}</td>
              </tr>
            </tbody>
          </table>
        </motion.div>

      </div>
    </section>
  );
}
