"use client";

import { motion } from "framer-motion";
import { reportData } from "@/lib/data";

export function WorkforceIntelligenceSection() {
  const tools = reportData.workforceIntelligence.tools;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,

      },
    },
  };

  return (
    <section
      data-chapter="8"
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
          <span className="inline-block px-4 py-2 rounded-full bg-blue/20 text-blue text-sm font-semibold mb-4">
            Decision Support
          </span>
          <h2 className="text-5xl font-bold text-navy mb-4">Workforce Intelligence</h2>
          <p className="text-lg text-mid max-w-2xl mx-auto">
            Live dashboards powering strategic workforce planning at global and country scales
          </p>
        </motion.div>

        {/* Tools Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-white rounded-xl shadow-lg border border-rule overflow-hidden hover:shadow-xl transition-shadow"
              whileHover={{ translateY: -4 }}
            >
              {/* Header */}
              <div className={`p-8 text-white ${index === 0 ? "bg-gradient-to-r from-sky to-teal" : "bg-gradient-to-r from-blue to-navy"}`}>
                <div className="text-xs font-semibold opacity-90 mb-2">{tool.organization}</div>
                <h3 className="text-2xl font-bold mb-3">{tool.name}</h3>
                <p className="text-sm leading-relaxed opacity-95">{tool.description}</p>
              </div>

              {/* Content */}
              <div className="p-8">
                {/* Modules grid */}
                <h4 className="text-sm font-bold text-navy uppercase tracking-wide mb-4">
                  {index === 0 ? "Modules" : "Scoring Methodology"}
                </h4>

                {index === 0 ? (
                  // Modules for Workforce Intelligence
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {tool.modules.map((module, midx) => (
                      <motion.div
                        key={midx}
                        className="p-4 bg-sky/5 rounded-lg border border-sky/20 hover:border-sky/40 transition-colors"
                        whileHover={{ scale: 1.05 }}
                      >
                        <div className="text-xl mb-2">{"icon" in module ? module.icon : "📊"}</div>
                        <div className="text-sm font-bold text-navy mb-1">{module.name}</div>
                        <div className="text-xs text-mid">{module.desc}</div>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  // Scoring dimensions for Crisis Demand Profile
                  <div className="space-y-3 mb-6">
                    {tool.modules.map((module, midx) => (
                      <motion.div
                        key={midx}
                        className="p-4 bg-gradient-to-r from-blue/5 to-navy/5 rounded-lg border border-blue/20"
                        whileHover={{ scale: 1.02 }}
                      >
                        <div className="flex justify-between items-start mb-2">
                          <div className="text-sm font-bold text-navy">{module.name}</div>
                          <div className="text-lg font-bold text-blue">{"weight" in module ? module.weight : ""}</div>
                        </div>
                        <div className="text-xs text-mid">{module.desc}</div>
                      </motion.div>
                    ))}
                  </div>
                )}

                {/* CTA Link */}
                <a
                  href={tool.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 px-4 py-3 rounded-lg font-semibold transition-all hover:scale-105 ${
                    index === 0
                      ? "bg-sky text-white hover:bg-teal"
                      : "bg-blue text-white hover:bg-navy"
                  }`}
                >
                  <span>Open Dashboard</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* How they connect */}
        <motion.div
          className="bg-gradient-to-r from-navy/5 to-blue/5 rounded-xl border border-navy/20 p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-navy mb-6">How These Tools Connect</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                step: "1",
                title: "Capacity Mapping",
                desc: "10,000+ staff mapped on EVA.ai feed the Workforce Intelligence Center baseline",
                icon: "🗺️",
              },
              {
                step: "2",
                title: "Gap Analysis",
                desc: "Crisis Demand Profile scores crises, compared against mapped supply",
                icon: "📊",
              },
              {
                step: "3",
                title: "Deployment Decision",
                desc: "Gaps route into the Talent Allocation Framework recommendations",
                icon: "📤",
              },
              {
                step: "4",
                title: "Feedback Loop",
                desc: "Deployment outcomes update supply picture for next cycle",
                icon: "🔄",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="relative"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-white rounded-lg p-4 border border-sky/20">
                  <div className="flex items-start gap-3">
                    <div className="text-2xl flex-shrink-0">{item.icon}</div>
                    <div className="flex-grow">
                      <div className="text-xs font-bold text-sky uppercase tracking-wide">Step {item.step}</div>
                      <div className="text-sm font-bold text-navy mt-1">{item.title}</div>
                      <div className="text-xs text-mid mt-2 leading-relaxed">{item.desc}</div>
                    </div>
                  </div>
                </div>
                {idx < 3 && (
                  <div className="hidden lg:flex absolute -right-6 top-1/2 -translate-y-1/2 text-sky text-2xl">
                    →
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Key insight */}
        <motion.div
          className="mt-12 p-8 bg-gradient-to-r from-blue/10 to-teal/10 rounded-xl border border-blue/20 print:hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold text-navy mb-2">🎯 From Data to Action</h3>
          <p className="text-mid">
            These tools transform raw organizational data into actionable intelligence. By connecting workforce
            capacity, crisis demand, and deployment history in one integrated system, UNDP can make faster, more
            informed staffing decisions for every crisis context.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
