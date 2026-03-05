"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import { X, ZoomIn, ArrowRight } from "lucide-react";

const workflows = [
  {
    id: "migration-workflow",
    title: "Data Migration Workflow",
    description:
      "Enterprise-grade automated data migration pipeline that handles complex multi-step processes — from fetching and validating reporting data to deleting stale records, merging sources, and batch-inserting clean data into your destination system.",
    image: "/workflows/migration-workflow.png",
    tags: ["Data Migration", "Batch Processing", "CRM Sync"],
    gradient: "from-primary/20 to-primary/5",
    accentColor: "#3DB54A",  // green
    steps: ["Fetch & Validate", "Delete Stale Data", "Merge Sources", "Batch Insert"],
  },
  {
    id: "gmail-ai-agent",
    title: "Gmail AI Agent",
    description:
      "Intelligent email automation powered by OpenAI. Triggers on incoming Gmail, runs the email through an AI Agent with memory and tools, then routes outputs — attaching files to Google Drive or taking no action based on content analysis.",
    image: "/workflows/gmail-ai-agent.png",
    tags: ["Email Automation", "OpenAI", "Google Drive"],
    gradient: "from-secondary/20 to-secondary/5",
    accentColor: "#1A5BB6",  // blue
    steps: ["Gmail Trigger", "AI Classification", "Smart Routing", "Auto-Save"],
  },
  {
    id: "fitness-coach",
    title: "AI Fitness Coach Agent",
    description:
      "Personalized AI fitness coaching workflow using Strava data and Google Gemini. Combines all activity data, runs it through a custom Fitness Coach AI, structures the output as HTML, and delivers personalized responses via Gmail, email, or WhatsApp.",
    image: "/workflows/fitness-coach.jpeg",
    tags: ["AI Agent", "Strava", "WhatsApp", "Gemini"],
    gradient: "from-accent/20 to-accent/5",
    accentColor: "#00A99D",  // teal
    steps: ["Strava Sync", "Gemini AI Coach", "HTML Report", "Multi-Channel Send"],
  },
  {
    id: "property-lead",
    title: "Property Lead Automation",
    description:
      "End-to-end real estate lead automation that searches properties via API, filters by equity/ownership/delinquency criteria, skip-traces owner contacts, formats data, and pushes qualified leads to your CRM, Excel sheet, and email — on a daily schedule.",
    image: "/workflows/property-lead.jpeg",
    tags: ["Real Estate", "Skip Tracing", "CRM", "HubSpot"],
    gradient: "from-primary/20 to-accent/5",
    accentColor: "#00C8CC",  // bright cyan
    steps: ["Property Search", "Filter & Score", "Skip Trace", "CRM Export"],
  },
];

export default function Workflows() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const activeWorkflow = workflows.find((w) => w.id === activeModal);

  return (
    <section
      ref={ref}
      className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 z-10 scroll-mt-20 bg-[#F0FFFE]"
      id="workflows"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-block px-4 py-1.5 rounded-full glass text-sm font-medium text-primary mb-4 border border-primary/20"
          >
            ⚡ Live Automation Examples
          </motion.span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Real <span className="gradient-text">Workflows</span> We Build
          </h2>
          <p className="text-base sm:text-xl text-gray-500 max-w-2xl mx-auto">
            Battle-tested automation systems running in production — click any workflow to explore it in detail
          </p>
        </motion.div>

        {/* Workflow Grid */}
        <div className="grid md:grid-cols-2 gap-5 sm:gap-8">
          {workflows.map((workflow, index) => (
            <motion.div
              key={workflow.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="glass glass-hover rounded-2xl overflow-hidden group cursor-pointer"
              onClick={() => setActiveModal(workflow.id)}
            >
              {/* Workflow Image Preview */}
              <div className="relative h-40 sm:h-52 overflow-hidden bg-gray-50">
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center"
                  style={{
                    background: `radial-gradient(circle, ${workflow.accentColor}22 0%, transparent 70%)`,
                  }}
                >
                  <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold text-gray-800 border border-black/10">
                    <ZoomIn className="w-4 h-4" />
                    View Full Workflow
                  </div>
                </div>
                <Image
                  src={workflow.image}
                  alt={workflow.title}
                  fill
                  className="object-cover object-left-top scale-100 group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent" />
              </div>

              {/* Workflow Info */}
              <div className="p-4 sm:p-6">
                <div className="flex items-start justify-between mb-2 sm:mb-3">
                  <h3 className="text-base sm:text-xl font-bold text-gray-900 group-hover:text-primary transition-colors">
                    {workflow.title}
                  </h3>
                  <ArrowRight className="w-5 h-5 text-text-muted group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0 mt-0.5" />
                </div>

                <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">
                  {workflow.description}
                </p>

                {/* Pipeline Steps */}
                <div className="flex items-center gap-1.5 mb-4 flex-wrap">
                  {workflow.steps.map((step, i) => (
                    <div key={i} className="flex items-center gap-1.5">
                      <span className="text-xs px-2 py-1 rounded-md bg-gray-100 text-gray-600 border border-gray-200">
                        {step}
                      </span>
                      {i < workflow.steps.length - 1 && (
                        <span className="text-gray-400/60 text-xs">→</span>
                      )}
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {workflow.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-full"
                      style={{
                        background: `${workflow.accentColor}18`,
                        color: workflow.accentColor,
                        border: `1px solid ${workflow.accentColor}30`,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-gray-500 mb-4">
            Want a custom workflow built for your specific business needs?
          </p>
          <a href="/contact">
            <motion.button
              className="px-8 py-3 bg-gradient-to-r from-primary via-accent to-secondary text-white font-semibold rounded-lg glow-effect-hover inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Your Custom Workflow
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </a>
        </motion.div>
      </div>

      {/* Modal */}
      {activeModal && activeWorkflow && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] flex items-center justify-center p-3 sm:p-4 pt-20 sm:pt-24"
          onClick={() => setActiveModal(null)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-5xl max-h-[85vh] overflow-y-auto bg-white rounded-2xl border border-black/10 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-4 right-4 z-20 w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors border border-black/8"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Full Image */}
            <div className="relative w-full bg-white h-[35vh] sm:h-[52vh]">
              <Image
                src={activeWorkflow.image}
                alt={activeWorkflow.title}
                fill
                className="object-contain p-3"
                sizes="90vw"
              />
            </div>

            {/* Modal Info */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 border-b border-black/8">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div className="flex-1 min-w-0">
                  <div className="text-base sm:text-xl font-bold truncate text-gray-900">{activeWorkflow.title}</div>
                  <div className="text-sm text-gray-500 truncate">{activeWorkflow.description}</div>
                </div>
                <a href="/contact" onClick={() => setActiveModal(null)} className="flex-shrink-0">
                  <motion.button
                    className="px-5 py-2.5 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-lg glow-effect-hover text-sm whitespace-nowrap"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Build This For Me
                  </motion.button>
                </a>
              </div>

              {/* Steps row */}
              <div className="flex flex-wrap gap-2 mt-3">
                {activeWorkflow.steps.map((step, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="text-xs px-3 py-1 rounded-lg glass text-text border border-white/10 font-medium">
                      {step}
                    </span>
                    {i < activeWorkflow.steps.length - 1 && (
                      <span className="text-text-muted/40">→</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}