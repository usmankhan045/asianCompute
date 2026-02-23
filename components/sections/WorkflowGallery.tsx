"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

type WorkflowItem = {
  src: string;
  title: string;
  description: string;
};

export default function WorkflowGallery() {
  const items: WorkflowItem[] = useMemo(
    () => [
      {
        src: "/hr-ai-ecosystem.png.jpeg",
        title: "Strava → AI Coach → Email/WhatsApp",
        description:
          "Activity-triggered automation that combines data, generates a personalized response, and delivers it across channels.",
      },
      {
        src: "/workflows/gmail-ai-agent.png",
        title: "Gmail → AI Agent → Drive Upload",
        description:
          "Email intake with AI extraction/classification, merge logic, and conditional routing for file handling.",
      },
      {
        src: "/workflows/migration-workflow.png",
        title: "Data Migration Orchestration",
        description:
          "Batch-safe migration pipeline with formatters, merges, validations, and no-op guards to prevent bad writes.",
      },
      {
        src: "/workflows/property-lead-automation.png",
        title: "Property Lead Automation",
        description:
          "Search, filter, enrich, and export leads to spreadsheets/CRM with summaries and notifications.",
      },
    ],
    []
  );

  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [broken, setBroken] = useState<Record<string, true>>({});

  const active = activeIndex === null ? null : items[activeIndex];

  useEffect(() => {
    if (activeIndex === null) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [activeIndex]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (activeIndex === null) return;
      if (e.key === "Escape") setActiveIndex(null);
      if (e.key === "ArrowLeft")
        setActiveIndex((i) =>
          i === null ? null : (i - 1 + items.length) % items.length
        );
      if (e.key === "ArrowRight")
        setActiveIndex((i) => (i === null ? null : (i + 1) % items.length));
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeIndex, items.length]);

  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Automation <span className="gradient-text">Workflows</span>
          </h2>
          <p className="text-xl text-text-muted max-w-3xl mx-auto">
            A few real workflow examples that blend triggers, AI reasoning, and
            multi-step routing to create reliable business automation.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, idx) => (
            <motion.button
              key={item.src}
              type="button"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              whileHover={{ y: -4 }}
              onClick={() => setActiveIndex(idx)}
              className="group text-left glass glass-hover rounded-2xl overflow-hidden border border-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
              aria-label={`Open workflow: ${item.title}`}
            >
              <div className="relative aspect-[16/11] overflow-hidden">
                {broken[item.src] ? (
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-secondary/10 to-accent/10 grid place-items-center">
                    <div className="text-center px-6">
                      <div className="text-sm font-semibold mb-1">
                        Image missing
                      </div>
                      <div className="text-xs text-text-muted">
                        Add{" "}
                        <span className="text-text font-medium">{item.src}</span>{" "}
                        in <span className="text-text font-medium">/public</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    onError={() => setBroken((b) => ({ ...b, [item.src]: true }))}
                    priority={idx === 0}
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent opacity-90" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="text-sm font-semibold leading-snug">
                    {item.title}
                  </div>
                  <div className="text-xs text-text-muted mt-1 line-clamp-2">
                    {item.description}
                  </div>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && activeIndex !== null && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.button
              type="button"
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              aria-label="Close modal"
              onClick={() => setActiveIndex(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label={active.title}
              initial={{ opacity: 0, y: 14, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-6xl glass rounded-2xl overflow-hidden border border-white/15"
            >
              <div className="flex items-center justify-between px-4 sm:px-6 py-4 border-b border-white/10">
                <div className="min-w-0">
                  <div className="text-lg sm:text-xl font-bold truncate">
                    {active.title}
                  </div>
                  <div className="text-sm text-text-muted truncate">
                    {active.description}
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveIndex(null)}
                  className="p-2 rounded-lg glass-hover border border-white/10"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="relative bg-background/40">
                <div className="relative aspect-[16/9] w-full">
                  {broken[active.src] ? (
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-secondary/10 to-accent/10 grid place-items-center">
                      <div className="text-center px-8">
                        <div className="text-base font-semibold mb-1">
                          Image missing
                        </div>
                        <div className="text-sm text-text-muted">
                          Add{" "}
                          <span className="text-text font-medium">
                            {active.src}
                          </span>{" "}
                          to <span className="text-text font-medium">/public</span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Image
                      src={active.src}
                      alt={active.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 1024px"
                      className="object-contain"
                      onError={() =>
                        setBroken((b) => ({ ...b, [active.src]: true }))
                      }
                    />
                  )}
                </div>

                <button
                  type="button"
                  onClick={() =>
                    setActiveIndex((i) =>
                      i === null ? null : (i - 1 + items.length) % items.length
                    )
                  }
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-xl glass-hover border border-white/10"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setActiveIndex((i) =>
                      i === null ? null : (i + 1) % items.length
                    )
                  }
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-xl glass-hover border border-white/10"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              <div className="px-4 sm:px-6 py-4 text-sm text-text-muted">
                Tip: Use <span className="text-text">←</span>/<span className="text-text">→</span>{" "}
                to navigate, <span className="text-text">Esc</span> to close.
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

