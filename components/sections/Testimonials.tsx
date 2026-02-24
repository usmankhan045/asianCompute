"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Agency Owner",
    company: "Growth Marketing Co.",
    content:
      "Their AI automation system transformed our lead process. We went from manually qualifying leads to having a fully automated pipeline that books calls automatically. Revenue increased 40% in 3 months.",
    avatar: "SJ",
  },
  {
    name: "Marcus Williams",
    role: "Business Coach",
    company: "Elite Coaching",
    content:
      "The AI DM assistant they built saved me 20+ hours per week. Now I only talk to qualified prospects, and my conversion rate tripled. This is the future of scaling a coaching business.",
    avatar: "MW",
  },
  {
    name: "Emily Chen",
    role: "E-commerce Founder",
    company: "StyleHub",
    content:
      "The abandoned cart recovery system they implemented recovered 32% of our abandoned carts. That's pure revenue we were leaving on the table. ROI was clear within the first month.",
    avatar: "EC",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 z-10" id="testimonials">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Client <span className="gradient-text">Testimonials</span>
          </h2>
          <p className="text-base sm:text-xl text-text-muted max-w-2xl mx-auto">
            Hear from businesses that transformed with automation
          </p>
        </motion.div>

        <div className="relative min-h-[320px] sm:min-h-[384px]">
          <AnimatePresence mode="wait">
            {testimonials.map(
              (testimonial, index) =>
                index === currentIndex && (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5 }}
                    className="glass glass-hover rounded-2xl p-5 sm:p-8 absolute inset-0"
                  >
                    <Quote className="w-8 h-8 sm:w-12 sm:h-12 text-primary/30 mb-4 sm:mb-6" />
                    <p className="text-base sm:text-xl text-text leading-relaxed mb-6 sm:mb-8">
                      "{testimonial.content}"
                    </p>
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center flex-shrink-0">
                        <span className="text-base sm:text-xl font-bold text-primary">
                          {testimonial.avatar}
                        </span>
                      </div>
                      <div>
                        <div className="font-bold text-base sm:text-lg">{testimonial.name}</div>
                        <div className="text-text-muted text-sm sm:text-base">
                          {testimonial.role} at {testimonial.company}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
            )}
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex
                  ? "bg-primary w-8"
                  : "bg-text-muted/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
