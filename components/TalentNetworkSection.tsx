"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { reportData } from "@/lib/data";

export function TalentNetworkSection() {
  const [activeEcosystem, setActiveEcosystem] = useState(0);
  const ecosystems = reportData.talentNetwork.ecosystems;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const nodeVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
      },
    },
    hover: {
      scale: 1.1,
      boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
    },
  };

  return (
    <section
      data-chapter="3"
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
            Workforce Ecosystem
          </span>
          <h2 className="text-5xl font-bold text-navy mb-4">Talent Infrastructure</h2>
          <p className="text-lg text-mid max-w-2xl mx-auto">
            Four complementary rosters forming UNDP&apos;s crisis deployment backbone
          </p>
        </motion.div>

        {/* Network Diagram */}
        <motion.div
          className="relative mb-16 h-96 md:h-80 flex items-center justify-center print:hidden"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Center node */}
          <motion.div
            className="absolute bg-gradient-to-br from-navy to-blue text-white rounded-full w-32 h-32 flex flex-col items-center justify-center cursor-pointer shadow-lg z-10"
            variants={nodeVariants}
            whileHover={{ scale: 1.1 }}
          >
            <div className="text-2xl mb-2">🌐</div>
            <div className="font-bold text-center text-sm">Crisis Bureau</div>
          </motion.div>

          {/* Orbiting nodes */}
          {ecosystems.map((ecosystem, index) => {
            const angle = (index / ecosystems.length) * Math.PI * 2;
            const x = Math.cos(angle) * 180;
            const y = Math.sin(angle) * 140;

            return (
              <motion.div
                key={index}
                className="absolute"
                style={{
                  x: x,
                  y: y,
                }}
                variants={nodeVariants}
              >
                <motion.button
                  onClick={() => setActiveEcosystem(index)}
                  className={`w-28 h-28 rounded-full shadow-lg transition-all flex flex-col items-center justify-center cursor-pointer relative ${
                    activeEcosystem === index
                      ? "ring-4 ring-sky"
                      : "hover:ring-2 hover:ring-sky/50"
                  }`}
                  style={{
                    background:
                      activeEcosystem === index
                        ? "linear-gradient(135deg, #009EDB, #00B5C8)"
                        : "linear-gradient(135deg, #E8F4FA, #E1F5EE)",
                    color: activeEcosystem === index ? "white" : "#003F6B",
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="text-2xl mb-1">{ecosystem.icon}</div>
                  <div className="text-xs font-bold text-center leading-tight">
                    {ecosystem.count}
                  </div>
                  <div className="text-xs opacity-75 text-center leading-tight">
                    {ecosystem.name.split("/")[0]}
                  </div>
                </motion.button>

                {/* Connection line */}
                <svg
                  className="absolute top-1/2 left-1/2"
                  width="200"
                  height="200"
                  style={{ transform: `translate(-100%, -100%)` }}
                  pointerEvents="none"
                >
                  <line
                    x1="0"
                    y1="0"
                    x2={-x}
                    y2={-y}
                    stroke={activeEcosystem === index ? "#009EDB" : "#D0DFE8"}
                    strokeWidth={activeEcosystem === index ? 3 : 2}
                    opacity={activeEcosystem === index ? 1 : 0.3}
                  />
                </svg>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Detail Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeEcosystem}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-xl shadow-lg border border-rule p-8 print:hidden"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-start gap-4 mb-6">
                  <div className="text-5xl">{ecosystems[activeEcosystem].icon}</div>
                  <div>
                    <h3 className="text-3xl font-bold text-navy">
                      {ecosystems[activeEcosystem].name}
                    </h3>
                    <p className="text-lg font-semibold text-sky">
                      {ecosystems[activeEcosystem].count}
                    </p>
                  </div>
                </div>
                <p className="text-mid leading-relaxed">
                  {ecosystems[activeEcosystem].description}
                </p>
              </div>

              <motion.div
                className="bg-gradient-to-br from-sky/10 to-teal/10 rounded-lg p-6 border border-sky/20"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                <h4 className="font-bold text-navy mb-3 text-sm uppercase">Key Features</h4>
                <ul className="space-y-2 text-sm text-slate">
                  {ecosystems[activeEcosystem].description.split(".").map((feature, idx) => (
                    feature.trim() && (
                      <li key={idx} className="flex gap-2">
                        <span className="text-sky flex-shrink-0">✓</span>
                        <span>{feature.trim()}</span>
                      </li>
                    )
                  ))}
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Print-only: full listing of all ecosystems (screen shows the orbit diagram above) */}
        <div className="hidden print:grid print:grid-cols-2 print:gap-4">
          {ecosystems.map((ecosystem, idx) => (
            <div key={idx} className="border border-rule rounded-lg p-4 break-inside-avoid">
              <div className="flex items-start gap-3 mb-2">
                <div className="text-2xl">{ecosystem.icon}</div>
                <div>
                  <div className="font-bold text-navy">{ecosystem.name}</div>
                  <div className="text-sm text-sky font-semibold">{ecosystem.count}</div>
                </div>
              </div>
              <p className="text-sm text-mid leading-relaxed">{ecosystem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
