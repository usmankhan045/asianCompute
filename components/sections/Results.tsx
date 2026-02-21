"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { TrendingUp, Clock, Zap, Users } from "lucide-react";

const results = [
  {
    metric: "40%",
    label: "Increase in Lead Conversion",
    icon: TrendingUp,
    color: "from-primary to-primary/50",
  },
  {
    metric: "60%",
    label: "Reduction in Manual Work",
    icon: Clock,
    color: "from-secondary to-secondary/50",
  },
  {
    metric: "2x",
    label: "Faster Response Time",
    icon: Zap,
    color: "from-accent to-accent/50",
  },
  {
    metric: "30%",
    label: "Higher Client Retention",
    icon: Users,
    color: "from-primary to-accent",
  },
];

function AnimatedCounter({
  value,
  suffix = "%",
  isInView,
}: {
  value: number;
  suffix?: string;
  isInView: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    const stepDuration = duration / steps;

    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function Results() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative py-24 px-4 sm:px-6 lg:px-8 z-10"
      id="results"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Proven <span className="gradient-text">Results</span>
          </h2>
          <p className="text-xl text-text-muted max-w-2xl mx-auto">
            Real metrics from businesses we've automated
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {results.map((result, index) => {
            const Icon = result.icon;
            const numericValue = parseFloat(result.metric);
            const suffix = result.metric.includes("%")
              ? "%"
              : result.metric.includes("x")
              ? "x"
              : "";

            return (
              <motion.div
                key={result.label}
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass glass-hover rounded-2xl p-8 text-center"
              >
                <div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${result.color} flex items-center justify-center mx-auto mb-6`}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-5xl font-bold gradient-text mb-4">
                  {result.metric.includes("x") ? (
                    <AnimatedCounter
                      value={numericValue}
                      suffix="x"
                      isInView={isInView}
                    />
                  ) : result.metric.includes("%") ? (
                    <AnimatedCounter
                      value={numericValue}
                      suffix="%"
                      isInView={isInView}
                    />
                  ) : (
                    result.metric
                  )}
                </div>
                <p className="text-text-muted text-lg">{result.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
