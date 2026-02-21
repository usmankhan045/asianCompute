"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Search, Code, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Strategy & Revenue Audit",
    description:
      "We analyze your current processes, identify bottlenecks, and map out automation opportunities that will drive the highest ROI.",
    icon: Search,
  },
  {
    number: "02",
    title: "AI System Architecture",
    description:
      "Built with n8n + AI, we design and develop custom automation workflows tailored to your business model and goals.",
    icon: Code,
    badge: "Built with n8n + AI",
  },
  {
    number: "03",
    title: "Launch, Optimize & Scale",
    description:
      "We deploy your systems, monitor performance, and continuously optimize to ensure maximum revenue impact as you scale.",
    icon: Rocket,
  },
];

export default function HowItWorks() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative py-24 px-4 sm:px-6 lg:px-8 z-10 scroll-mt-20"
      id="how-it-works"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            How It <span className="gradient-text">Works</span>
          </h2>
          <p className="text-xl text-text-muted max-w-2xl mx-auto">
            A proven process to transform your revenue operations
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent" />

          <div className="space-y-16 md:space-y-24">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={
                    isInView
                      ? { opacity: 1, x: 0 }
                      : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }
                  }
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative flex items-start gap-8"
                >
                  {/* Timeline dot */}
                  <div className="hidden md:flex relative z-10 flex-shrink-0 w-16 h-16 items-center justify-center">
                    <div className="absolute w-16 h-16 rounded-full bg-background border-4 border-primary" />
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary" />
                  </div>

                  <div className="flex-1 glass glass-hover rounded-2xl p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <span className="text-sm text-text-muted font-medium">
                          Step {step.number}
                        </span>
                        <h3 className="text-2xl font-bold">{step.title}</h3>
                      </div>
                    </div>
                    <p className="text-text-muted leading-relaxed mb-4">
                      {step.description}
                    </p>
                    {step.badge && (
                      <span className="inline-block px-3 py-1 rounded-full glass text-xs font-medium text-secondary">
                        {step.badge}
                      </span>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
