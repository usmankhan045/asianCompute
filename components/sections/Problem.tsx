"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { AlertCircle, MessageSquare, ShoppingCart } from "lucide-react";

const problems = [
  {
    title: "For Agencies",
    icon: AlertCircle,
    issues: [
      "Missed leads from slow response times",
      "Manual follow-ups eating your time",
      "CRM chaos with scattered data",
    ],
    color: "from-primary/20 to-primary/5",
  },
  {
    title: "For Coaches",
    icon: MessageSquare,
    issues: [
      "DMs overload drowning your inbox",
      "No automation for client onboarding",
      "Low conversion rates from manual processes",
    ],
    color: "from-secondary/20 to-secondary/5",
  },
  {
    title: "For E-commerce",
    icon: ShoppingCart,
    issues: [
      "Abandoned carts with no recovery system",
      "Poor retention from lack of personalization",
      "Manual operations limiting scale",
    ],
    color: "from-accent/20 to-accent/5",
  },
];

export default function Problem() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative py-24 px-4 sm:px-6 lg:px-8 z-10 scroll-mt-20"
      id="problem"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Still Managing Everything{" "}
            <span className="gradient-text">Manually?</span>
          </h2>
          <p className="text-xl text-text-muted max-w-2xl mx-auto">
            Stop losing revenue to inefficient processes. Here's what's
            holding you back:
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <motion.div
                key={problem.title}
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="glass glass-hover rounded-2xl p-8"
              >
                <div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${problem.color} flex items-center justify-center mb-6`}
                >
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{problem.title}</h3>
                <ul className="space-y-3">
                  {problem.issues.map((issue, i) => (
                    <li key={i} className="flex items-start gap-3 text-text-muted">
                      <span className="text-primary mt-1">•</span>
                      <span>{issue}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
