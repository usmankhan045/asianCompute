"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Linkedin } from "lucide-react";

const founders = [
  {
    name: "Muhammad Usman",
    role: "AI Systems Architect",
    bio: "Expert in building enterprise automation systems with AI. Specializes in creating scalable workflows that eliminate manual processes and drive revenue growth for businesses.",
    linkedin: "https://linkedin.com/in/muhammadusman80",
    gradient: "from-primary/20 to-primary/5",
  },
  {
    name: "Muhammad Awais",
    role: "Automation Strategy Lead",
    bio: "Growth strategist focused on revenue automation for agencies, coaches, and e-commerce brands. Designs intelligent systems that optimize lead flow and increase conversion rates.",
    linkedin: "https://linkedin.com/in/muhammad-awais-ashfaq-287359396",
    gradient: "from-secondary/20 to-secondary/5",
  },
];

export default function AboutFounders() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative py-24 px-4 sm:px-6 lg:px-8 z-10 scroll-mt-20"
      id="about"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Meet the <span className="gradient-text">Founders</span>
          </h2>
          <p className="text-xl text-text-muted max-w-2xl mx-auto">
            Two partners with deep expertise in AI automation and growth
            strategy
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {founders.map((founder, index) => (
            <motion.div
              key={founder.name}
              initial={{ opacity: 0, y: 30 }}
              animate={
                isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
              }
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass glass-hover rounded-2xl p-8"
            >
              <div className="flex items-start gap-6 mb-6">
                <div
                  className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${founder.gradient} flex items-center justify-center flex-shrink-0`}
                >
                  <span className="text-3xl font-bold text-primary">
                    {founder.name.split(" ").map((n) => n[0]).join("")}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-1">{founder.name}</h3>
                  <p className="text-primary font-medium mb-4">
                    {founder.role}
                  </p>
                  <p className="text-text-muted leading-relaxed">
                    {founder.bio}
                  </p>
                </div>
              </div>
              <a
                href={founder.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                <span className="font-medium">LinkedIn</span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
