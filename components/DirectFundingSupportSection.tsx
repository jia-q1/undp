"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { reportData } from "@/lib/data";

function formatUsd(value: number | string) {
  return `$${(Number(value) / 1_000_000).toFixed(1)}M`;
}

export function DirectFundingSupportSection() {
  const data = reportData.directFundingSupport;
  const { trac3, surge, leverage, resourceMobilization2025, satelliteEvidence } = data;
  const maxBureau = Math.max(...trac3.byBureau.map((b) => b.value));
  const maxCountry = Math.max(...trac3.topCountries.map((c) => c.value));
  const [expandedTeam, setExpandedTeam] = useState<string | null>(null);

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
          <h3 className="text-xl font-bold text-navy mb-1">{trac3.title}</h3>
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

          <div className="overflow-x-auto mt-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-rule">
                  <th className="text-left font-bold text-mid uppercase text-xs tracking-wide py-2 pr-4">
                    Total TRAC 3 (2023–2025)
                  </th>
                  <th className="text-right font-bold text-mid uppercase text-xs tracking-wide py-2 pr-4">
                    Total resources mobilized (2023–2025)
                  </th>
                  <th className="text-right font-bold text-mid uppercase text-xs tracking-wide py-2">
                    Ratio
                  </th>
                </tr>
              </thead>
              <tbody>
                {leverage.breakdown.map((row, idx) => (
                  <tr key={idx} className="border-b border-rule">
                    <td className="py-2 pr-4 text-navy">${row.trac3.toLocaleString()}</td>
                    <td className="py-2 pr-4 text-right text-navy">${row.mobilized.toLocaleString()}</td>
                    <td className="py-2 text-right text-coral font-semibold">{row.ratio}</td>
                  </tr>
                ))}
                <tr className="font-bold">
                  <td className="py-2 pr-4 text-navy">${leverage.breakdownTotal.trac3.toLocaleString()}</td>
                  <td className="py-2 pr-4 text-right text-navy">${leverage.breakdownTotal.mobilized.toLocaleString()}</td>
                  <td className="py-2 text-right text-coral">${leverage.breakdownTotal.ratio}</td>
                </tr>
              </tbody>
            </table>
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
          <h3 className="text-xl font-bold text-navy mb-1">{surge.title}</h3>
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
            Funds mobilized by Crisis Bureau teams from donors in 2025. Click a team to see its donor breakdown.
          </p>

          <div className="bg-ice rounded-lg p-4 text-center max-w-[200px] mb-8">
            <div className="text-2xl font-bold text-navy">{formatUsd(resourceMobilization2025.total)}</div>
            <div className="text-xs text-mid mt-1">Total mobilized, 2025</div>
          </div>

          <div className="space-y-2 print:hidden">
            {resourceMobilization2025.byTeam.map((team) => {
              const isOpen = expandedTeam === team.team;
              return (
                <div key={team.team} className="border border-rule rounded-lg overflow-hidden">
                  <button
                    onClick={() => setExpandedTeam(isOpen ? null : team.team)}
                    className="w-full flex items-center gap-3 px-4 py-3 text-left bg-ice/60 hover:bg-ice transition-colors"
                  >
                    <div className="text-sm font-semibold text-navy flex-1">{team.team}</div>
                    <div className="text-sm font-bold text-navy w-16 text-right flex-shrink-0">{formatUsd(team.total)}</div>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="text-mid flex-shrink-0"
                    >
                      ▾
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <div className="px-4 py-3">
                          <table className="w-full text-sm">
                            <thead>
                              <tr className="border-b border-rule">
                                <th className="text-left font-bold text-mid uppercase text-xs tracking-wide py-1.5 pr-4">Donor</th>
                                <th className="text-left font-bold text-mid uppercase text-xs tracking-wide py-1.5 pr-4">Entity</th>
                                <th className="text-right font-bold text-mid uppercase text-xs tracking-wide py-1.5">Contribution</th>
                              </tr>
                            </thead>
                            <tbody>
                              {team.donors.map((d, idx) => (
                                <tr key={idx} className="border-b border-rule last:border-0">
                                  <td className="py-1.5 pr-4 text-slate">{d.donor}</td>
                                  <td className="py-1.5 pr-4 text-mid">{d.entity}</td>
                                  <td className="py-1.5 text-right text-navy font-semibold">
                                    {d.amount < 0 ? "-" : ""}${Math.abs(d.amount).toLocaleString()}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Print-only: full listing (screen shows collapsible dropdowns above) */}
          <div className="hidden print:block space-y-4">
            {resourceMobilization2025.byTeam.map((team) => (
              <div key={team.team} className="break-inside-avoid">
                <div className="flex items-center justify-between text-sm font-bold text-navy border-b border-rule pb-1 mb-1.5">
                  <span>{team.team}</span>
                  <span>{formatUsd(team.total)}</span>
                </div>
                {team.donors.map((d, idx) => (
                  <div key={idx} className="flex items-center justify-between text-xs text-mid py-0.5">
                    <span>{d.donor} — {d.entity}</span>
                    <span className="text-navy font-semibold">
                      {d.amount < 0 ? "-" : ""}${Math.abs(d.amount).toLocaleString()}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Satellite Evidence on Early Recovery Impact */}
        <motion.div
          className="bg-white rounded-xl shadow-lg border border-rule p-8 mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold text-navy mb-1">{satelliteEvidence.title}</h3>
          <p className="text-mid text-sm leading-relaxed mb-6">{satelliteEvidence.approach}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {satelliteEvidence.headline.map((stat, idx) => (
              <div key={idx} className="bg-navy rounded-xl p-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gold" />
                <div className="text-3xl font-bold text-teal">{stat.value}</div>
                <div className="text-sm text-white/90 mt-2 leading-snug">{stat.label}</div>
              </div>
            ))}
          </div>

          <h4 className="text-sm font-bold text-mid uppercase tracking-wide mb-4">Robust Impact Evidence</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {satelliteEvidence.robust.map((item) => (
              <div key={item.country} className="bg-ice rounded-lg p-5 border-l-3 border-blue" style={{ borderLeftWidth: 3 }}>
                <div className="flex items-baseline justify-between mb-2">
                  <span className="font-bold text-navy">{item.country}</span>
                  <span className="text-xs text-mid">{item.investment}</span>
                </div>
                <p className="text-sm text-slate leading-relaxed mb-2">{item.finding}</p>
                <p className="text-sm font-semibold text-coral leading-relaxed">{item.result}</p>
                {item.note && <p className="text-xs text-mid italic leading-relaxed mt-2">{item.note}</p>}
              </div>
            ))}
          </div>

          <h4 className="text-sm font-bold text-mid uppercase tracking-wide mb-4">
            Correlational Recovery Signals <span className="font-normal text-mid/70">(additional country findings)</span>
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2.5 mb-6">
            {satelliteEvidence.correlational.map((item) => (
              <div key={item.country} className="grid grid-cols-[110px_70px_60px_1fr] items-baseline gap-2">
                <span className="text-sm font-semibold text-navy">{item.country}</span>
                <span className="text-sm text-blue">{item.investment}</span>
                <span className="text-sm font-bold text-coral">{item.recovery}</span>
                <span className="text-xs text-mid">{item.note}</span>
              </div>
            ))}
          </div>

          <p className="text-xs text-mid italic leading-relaxed border-t border-rule pt-4">{satelliteEvidence.caveat}</p>
        </motion.div>
      </div>
    </section>
  );
}
