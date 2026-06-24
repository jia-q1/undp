"use client";

import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="bg-navy text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div>
            <h3 className="text-xl font-bold mb-4">Crisis Bureau</h3>
            <p className="text-sky/80 text-sm leading-relaxed">
              Rapid expert deployment and crisis response coordination across 150+ UNDP country offices globally.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Key Resources</h4>
            <ul className="space-y-2 text-sm text-sky/80">
              <li>
                <a href="https://demand-gap-dashboard.vercel.app/control-center" className="hover:text-sky transition-colors">
                  Workforce Intelligence Center
                </a>
              </li>
              <li>
                <a href="https://crisis-demand-profile.vercel.app/dashboard/dashboard_clean.html" className="hover:text-sky transition-colors">
                  Crisis Demand Profile
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-sky transition-colors">
                  Early Recovery Hub
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">2025 Impact</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-sky/80">Deployments:</span>
                <span className="font-bold">2,585</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sky/80">Deployment value:</span>
                <span className="font-bold">~$65M</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sky/80">Via special measures:</span>
                <span className="font-bold">$98.2M</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sky/80">Countries served:</span>
                <span className="font-bold">143</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="border-t border-white/10 pt-8 text-center text-sm text-sky/60"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p>
            Crisis Bureau 2025 Annual Report • {new Date().getFullYear()} © UNDP
          </p>
          <p className="mt-2">
            Designed for rapid decision-making in crisis contexts.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
