"use client";

import { motion } from "framer-motion";
import { reportData } from "@/lib/data";

export function FutureOutlookSection() {
  const initiatives = reportData.futureOutlook.roadmap[0].initiatives;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section
      data-chapter="7"
      className="relative py-24 px-6 bg-gradient-to-b from-ice to-navy/20 overflow-hidden"
    >
      {/* Background elements */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-teal/10 rounded-full blur-3xl print:hidden"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-2 rounded-full bg-purple/20 text-purple text-sm font-semibold mb-4">
            2026 & Beyond
          </span>
          <h2 className="text-5xl font-bold text-navy mb-4">Future Outlook</h2>
          <p className="text-lg text-mid max-w-2xl mx-auto">
            Building on 2025&apos;s momentum to strengthen UNDP&apos;s crisis response capabilities globally
          </p>
        </motion.div>

        {/* Roadmap Path */}
        <div className="relative mb-12">
          {/* SVG Path */}
          <svg
            className="w-full h-32 mb-8 print:hidden"
            viewBox="0 0 1000 120"
            preserveAspectRatio="xMidYMid meet"
          >
            <motion.path
              d="M 50 60 Q 250 20, 450 60 T 950 60"
              stroke="url(#pathGradient)"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 2 }}
              viewport={{ once: true }}
            />
            <defs>
              <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#009EDB" />
                <stop offset="50%" stopColor="#00B5C8" />
                <stop offset="100%" stopColor="#1D9E75" />
              </linearGradient>
            </defs>
          </svg>

          {/* Roadmap Items */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-4 gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {initiatives.map((initiative, index) => {
              const colors = [
                { bg: "#E8F4FA", border: "#009EDB", accent: "#009EDB" },
                { bg: "#E1F5EE", border: "#1D9E75", accent: "#1D9E75" },
                { bg: "#FEF8EC", border: "#F0A500", accent: "#F0A500" },
                { bg: "#EEEDFB", border: "#7F77DD", accent: "#7F77DD" },
              ];

              const color = colors[index];

              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative"
                >
                  {/* Node dot */}
                  <motion.div
                    className="absolute -top-16 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white border-4 shadow-lg"
                    style={{ borderColor: color.accent }}
                    whileInView={{ scale: [0.8, 1.2, 1], opacity: [0, 1, 1] }}
                    transition={{ delay: index * 0.15 }}
                    viewport={{ once: true }}
                  />

                  {/* Card */}
                  <div
                    className="p-6 rounded-xl border-2 transition-all hover:shadow-lg"
                    style={{
                      backgroundColor: color.bg,
                      borderColor: color.border,
                    }}
                  >
                    <motion.div
                      className="text-2xl mb-2 text-center"
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 3, delay: index * 0.2, repeat: Infinity }}
                    >
                      {["🌍", "🚀", "🛡️", "📊"][index]}
                    </motion.div>
                    <h3 className="font-bold text-navy text-center text-sm leading-tight">
                      {initiative}
                    </h3>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Strategic imperatives */}
        <motion.div
          className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            {
              title: "Expand Global Talent Pools",
              desc: "Recruit and train 2,000+ new ExpRes experts in underrepresented regions and specializations",
              icon: "🌐",
            },
            {
              title: "Improve Crisis Forecasting",
              desc: "Integrate climate and conflict data to predict crises 6–12 months in advance",
              icon: "📈",
            },
            {
              title: "Strengthen Regional Readiness",
              desc: "Establish crisis readiness hubs in Africa, Asia-Pacific, and the Middle East",
              icon: "🏢",
            },
            {
              title: "Scale Workforce Intelligence",
              desc: "Expand the Workforce Intelligence Center to cover all 9,000+ UNDP staff globally",
              icon: "🔍",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-xl p-8 border border-rule shadow-lg hover:shadow-xl transition-shadow"
              whileHover={{ translateY: -4 }}
            >
              <div className="flex items-start gap-4">
                <div className="text-4xl flex-shrink-0">{item.icon}</div>
                <div className="flex-grow">
                  <h3 className="text-lg font-bold text-navy mb-2">{item.title}</h3>
                  <p className="text-mid leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Closing statement */}
        <motion.div
          className="mt-16 text-center print:hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="inline-block p-8 bg-gradient-to-r from-navy to-blue text-white rounded-xl">
            <p className="text-xl font-bold mb-2">
              2026 marks the next chapter in UNDP&apos;s crisis response evolution.
            </p>
            <p className="text-sm opacity-90">
              With strengthened talent networks, advanced intelligence tools, and a globally engaged readiness
              ecosystem, UNDP is positioned to respond faster, smarter, and more equitably to the crises of tomorrow.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
