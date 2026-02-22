"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">

      {/* Full Background Image — clean, no color mixing */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        <Image
          src="/hr-ai-ecosystem.png.jpeg"
          alt="HR AI Ecosystem"
          fill
          priority
          quality={90}
          className="object-cover object-center opacity-20 dark:opacity-[0.07]"
        />
      </div>

      {/* Left Content (Perfect Vertical Center) */}
      <div className="absolute top-1/2 -translate-y-1/2 left-6 sm:left-12 lg:left-24 max-w-4xl z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold gradient-text mb-4 tracking-tight leading-none"
          >
            AsianCompute
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-text leading-tight"
          >
            Make Your Business Smart
          </motion.h2>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="w-6 h-6 text-text-muted" />
        </motion.div>
      </motion.div>

    </section>
  );
}