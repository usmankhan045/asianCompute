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
    color: "from-primary/10 to-transparent",
  },
  {
    title: "For Coaches",
    icon: MessageSquare,
    issues: [
      "DMs overload drowning your inbox",
      "No automation for client onboarding",
      "Low conversion rates from manual processes",
    ],
    color: "from-secondary/10 to-transparent",
  },
  {
    title: "For E-commerce",
    icon: ShoppingCart,
    issues: [
      "Abandoned carts with no recovery system",
      "Poor retention from lack of personalization",
      "Manual operations limiting scale",
    ],
    color: "from-accent/10 to-transparent",
  },
];

export default function Problem() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 z-10 scroll-mt-20 bg-[#F0FAF1]"
      id="problem"
    >
      <div className="max-w-7xl mx-auto">
        {/* Description Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="glass glass-hover rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-12 lg:p-16 backdrop-blur-xl border border-primary/20">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              {/* Left Column */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-4"
              >
                <div className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="text-primary text-lg">✓</span>
                  </div>
                  <p className="text-lg sm:text-xl text-gray-700 leading-relaxed pt-1 text-justify">
                    Intelligent workflows that automate operations from lead generation to client onboarding
                  </p>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-secondary/20 to-secondary/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="text-secondary text-lg">✓</span>
                  </div>
                  <p className="text-lg sm:text-xl text-gray-700 leading-relaxed pt-1 text-justify">
                    Less manual work, lower costs, and faster response times
                  </p>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="text-accent text-lg">✓</span>
                  </div>
                  <p className="text-lg sm:text-xl text-gray-700 leading-relaxed pt-1 text-justify">
                    Streamlined systems that consistently capture and manage opportunities
                  </p>
                </div>
              </motion.div>

              {/* Right Column */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="space-y-4"
              >
                <div className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-primary/20 to-accent/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="text-primary text-lg">✓</span>
                  </div>
                  <p className="text-lg sm:text-xl text-gray-700 leading-relaxed pt-1 text-justify">
                    Drive stronger revenue and higher profit margins
                  </p>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-secondary/20 to-primary/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="text-secondary text-lg">✓</span>
                  </div>
                  <p className="text-lg sm:text-xl text-gray-700 leading-relaxed pt-1 text-justify">
                    Scalable business growth while you focus on expansion
                  </p>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-accent/20 to-secondary/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="text-accent text-lg">✓</span>
                  </div>
                  <p className="text-lg sm:text-xl text-gray-700 leading-relaxed pt-1 text-justify">
                    Automated internal processes that eliminate bottlenecks
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Still Managing Everything{" "}
            <span className="gradient-text">Manually?</span>
          </h2>
          <p className="text-base sm:text-xl text-gray-500 max-w-2xl mx-auto">
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
                className="glass glass-hover rounded-2xl p-5 sm:p-8"
              >
                <div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${problem.color} flex items-center justify-center mb-6`}
                >
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{problem.title}</h3>
                <ul className="space-y-3">
                  {problem.issues.map((issue, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-600">
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
