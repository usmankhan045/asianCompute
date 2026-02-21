"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import {
  Users,
  Workflow,
  MessageCircle,
  ShoppingBag,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    id: "lead-qualification",
    title: "AI Lead Qualification Systems",
    description:
      "Automatically qualify, score, and route leads to your team. Never miss a hot prospect again.",
    icon: Users,
    gradient: "from-primary/20 to-primary/5",
  },
  {
    id: "crm-automation",
    title: "Smart CRM & Pipeline Automation",
    description:
      "n8n-powered workflows that sync data, update pipelines, and trigger actions automatically.",
    icon: Workflow,
    gradient: "from-secondary/20 to-secondary/5",
    badge: "n8n Powered",
  },
  {
    id: "ai-chatbots",
    title: "AI Chatbots for Sales & Support",
    description:
      "Intelligent assistants that handle inquiries, book calls, and qualify leads 24/7.",
    icon: MessageCircle,
    gradient: "from-accent/20 to-accent/5",
  },
  {
    id: "ecommerce",
    title: "E-commerce AI Retention Workflows",
    description:
      "Abandoned cart recovery, personalized recommendations, and automated re-engagement systems.",
    icon: ShoppingBag,
    gradient: "from-primary/20 to-accent/5",
  },
];

export default function Services() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative py-24 px-4 sm:px-6 lg:px-8 z-10 scroll-mt-20"
      id="services"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Revenue Automation{" "}
            <span className="gradient-text">Systems</span>
          </h2>
          <p className="text-xl text-text-muted max-w-2xl mx-auto">
            Intelligent workflows that work while you sleep
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass glass-hover rounded-2xl p-8 group cursor-pointer"
              >
                <div className="flex items-start justify-between mb-6">
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  {service.badge && (
                    <span className="px-3 py-1 rounded-full glass text-xs font-medium text-secondary">
                      {service.badge}
                    </span>
                  )}
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-text-muted mb-6 leading-relaxed">
                  {service.description}
                </p>
                <Link href={`/services?service=${service.id}`} className="flex items-center gap-2 text-primary font-semibold group-hover:gap-4 transition-all">
                  Explore
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
