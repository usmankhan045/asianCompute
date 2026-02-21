"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ArrowUpRight, TrendingUp } from "lucide-react";

const caseStudies = [
  {
    client: "Marketing Agency",
    challenge: "Manual lead qualification was slow and inconsistent",
    solution: "Automated lead qualification system",
    result: "45%",
    resultLabel: "increase in booked calls",
    metric: "Booked Calls",
    before: "2-3 days response time",
    after: "Instant qualification & routing",
    gradient: "from-primary/20 to-primary/5",
  },
  {
    client: "Online Coach",
    challenge: "DMs overload preventing focus on high-value clients",
    solution: "AI DM assistant with smart routing",
    result: "3x",
    resultLabel: "conversion rate improvement",
    metric: "Conversion Rate",
    before: "Manual responses, 20% close rate",
    after: "AI-qualified leads, 60% close rate",
    gradient: "from-secondary/20 to-secondary/5",
  },
  {
    client: "E-commerce Brand",
    challenge: "High cart abandonment with no recovery system",
    solution: "Abandoned cart AI system with personalized offers",
    result: "32%",
    resultLabel: "revenue boost from recovery",
    metric: "Revenue Recovery",
    before: "0% recovery rate",
    after: "32% of abandoned carts recovered",
    gradient: "from-accent/20 to-accent/5",
  },
];

export default function CaseStudies() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative py-24 px-4 sm:px-6 lg:px-8 z-10"
      id="case-studies"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Real <span className="gradient-text">Case Studies</span>
          </h2>
          <p className="text-xl text-text-muted max-w-2xl mx-auto">
            See how automation transformed these businesses
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.client}
              initial={{ opacity: 0, y: 30 }}
              animate={
                isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
              }
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass glass-hover rounded-2xl p-8 group cursor-pointer"
            >
              <Link href="/case-studies">
                <div className="flex items-start justify-between mb-6">
                  <span className="px-3 py-1 rounded-full glass text-xs font-medium text-text-muted">
                    {study.client}
                  </span>
                  <ArrowUpRight className="w-5 h-5 text-text-muted group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
              </Link>

              <h3 className="text-xl font-bold mb-2">{study.challenge}</h3>
              <p className="text-text-muted text-sm mb-6">{study.solution}</p>

              <div
                className={`rounded-xl p-6 bg-gradient-to-br ${study.gradient} mb-6`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  <span className="text-sm text-text-muted">{study.metric}</span>
                </div>
                <div className="text-4xl font-bold gradient-text mb-1">
                  {study.result}
                </div>
                <p className="text-sm text-text-muted">{study.resultLabel}</p>
              </div>

              <div className="space-y-3 pt-6 border-t border-white/10">
                <div>
                  <span className="text-xs text-text-muted">Before: </span>
                  <span className="text-sm text-text-muted line-through">
                    {study.before}
                  </span>
                </div>
                <div>
                  <span className="text-xs text-text-muted">After: </span>
                  <span className="text-sm text-primary font-semibold">
                    {study.after}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
