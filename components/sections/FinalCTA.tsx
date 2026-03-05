"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export default function FinalCTA() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 z-10 overflow-hidden scroll-mt-20"
      id="contact"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-secondary opacity-90" />

      <div className="relative max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <motion.span
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium border border-white/30"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-4 h-4 text-white" />
            Ready to Scale?
          </motion.span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white"
        >
          Stop Working In Your Business.
          <br />
          <span className="text-white/90">Let AI Work For You.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-xl md:text-2xl text-white/80 max-w-2xl mx-auto mb-8 sm:mb-12 leading-relaxed"
        >
          Book a free automation strategy call and discover how intelligent
          systems can scale your revenue.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link href="/contact">
            <motion.button
              className="group relative px-6 sm:px-10 py-4 sm:py-5 bg-white text-primary font-bold text-base sm:text-lg rounded-lg shadow-lg hover:shadow-xl transition-all overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center gap-3">
                Book Free Strategy Call
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
            </motion.button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 sm:mt-16 flex flex-wrap justify-center gap-4 sm:gap-8 text-white/70 text-xs sm:text-sm"
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-white/80 animate-pulse" />
            <span>No credit card required</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-white/80 animate-pulse" />
            <span>30-minute strategy session</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-white/80 animate-pulse" />
            <span>Custom automation roadmap</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
