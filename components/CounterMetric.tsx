"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface CounterMetricProps {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
  delay?: number;
  sub?: string;
}

export function CounterMetric({ value, label, prefix = "", suffix = "", delay = 0, sub }: CounterMetricProps) {
  const isDecimal = value % 1 !== 0;
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        observer.unobserve(entry.target);
      }
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;

    const duration = 2000;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime - delay;
      if (elapsed < 0) {
        requestAnimationFrame(animate);
        return;
      }

      const progress = Math.min(elapsed / duration, 1);
      const current = value * progress;
      setDisplayValue(isDecimal ? Math.round(current * 10) / 10 : Math.floor(current));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [inView, value, delay, isDecimal]);

  return (
    <motion.div
      ref={ref}
      className="text-center"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay }}
    >
      <div className="text-4xl md:text-5xl font-bold text-white">
        {prefix}
        {isDecimal ? displayValue.toFixed(1) : displayValue.toLocaleString()}
        {suffix}
      </div>
      <div className="text-sm text-navy mt-2">{label}</div>
      {sub && <div className="text-xs text-navy mt-1">{sub}</div>}
    </motion.div>
  );
}
