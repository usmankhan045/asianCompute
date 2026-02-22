"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 pt-24">
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-7xl sm:text-8xl lg:text-9xl font-bold gradient-text mb-6 tracking-tight leading-none">
              AsianCompute
            </h1>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 leading-tight"
          >
            <span className="text-text">
              Make Your Business Smart.
            </span>
          </motion.h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative max-w-6xl mx-auto mb-12"
        >
          {/* Background Image with Gradient Overlay */}
          <div className="absolute inset-0 rounded-3xl overflow-hidden opacity-15 z-0">
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')",
                filter: "blur(2px)",
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/40 via-secondary/30 to-accent/40" />
          </div>
          
          {/* Border Glow */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-secondary to-accent rounded-3xl opacity-20 blur-sm z-0" />
          
          {/* Content */}
          <div className="relative z-10 glass glass-hover rounded-3xl p-8 md:p-12 lg:p-16 backdrop-blur-xl border border-white/20">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              {/* Left Column */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="space-y-4"
              >
                <div className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="text-primary text-lg">✓</span>
                  </div>
                  <p className="text-lg sm:text-xl text-text leading-relaxed pt-1">
                    Intelligent workflows that automate operations from lead generation to client onboarding
                  </p>
                </div>
                
                <div className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-secondary/20 to-secondary/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="text-secondary text-lg">✓</span>
                  </div>
                  <p className="text-lg sm:text-xl text-text leading-relaxed pt-1">
                    Less manual work, lower costs, and faster response times
                  </p>
                </div>
                
                <div className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="text-accent text-lg">✓</span>
                  </div>
                  <p className="text-lg sm:text-xl text-text leading-relaxed pt-1">
                    Streamlined systems that consistently capture and manage opportunities
                  </p>
                </div>
              </motion.div>

              {/* Right Column */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="space-y-4"
              >
                <div className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-primary/20 to-accent/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="text-primary text-lg">✓</span>
                  </div>
                  <p className="text-lg sm:text-xl text-text leading-relaxed pt-1">
                    Drive stronger revenue and higher profit margins
                  </p>
                </div>
                
                <div className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-secondary/20 to-primary/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="text-secondary text-lg">✓</span>
                  </div>
                  <p className="text-lg sm:text-xl text-text leading-relaxed pt-1">
                    Scalable business growth while you focus on expansion
                  </p>
                </div>
                
                <div className="flex items-start gap-4 group">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-br from-accent/20 to-secondary/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="text-accent text-lg">✓</span>
                  </div>
                  <p className="text-lg sm:text-xl text-text leading-relaxed pt-1">
                    Automated internal processes that eliminate bottlenecks
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link href="/contact">
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-primary via-secondary to-accent text-white font-semibold rounded-lg glow-effect-hover"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book Free Strategy Call
            </motion.button>
          </Link>
          <Link href="/services">
            <motion.button
              className="px-8 py-4 glass glass-hover text-text font-semibold rounded-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              See Our Systems
            </motion.button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowDown className="w-6 h-6 text-text-muted" />
          </motion.div>
        </motion.div>
      </div>

      {/* Gradient background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20" />
      </div>
    </section>
  );
}
