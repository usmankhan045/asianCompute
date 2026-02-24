"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react";
import BackgroundGrid from "@/components/BackgroundGrid";
import FloatingShapes from "@/components/FloatingShapes";
import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

const serviceDetails = [
  {
    id: "lead-qualification",
    title: "AI Lead Qualification Systems",
    description:
      "Automatically qualify, score, and route leads to your team. Never miss a hot prospect again.",
    features: [
      "Intelligent lead scoring based on behavior and data",
      "Automatic routing to the right team member",
      "Real-time qualification and prioritization",
      "Integration with your CRM and marketing tools",
      "24/7 automated lead processing",
    ],
    icon: "🎯",
  },
  {
    id: "crm-automation",
    title: "Smart CRM & Pipeline Automation",
    description:
      "Intelligent workflows that sync data, update pipelines, and trigger actions automatically.",
    features: [
      "Automated data synchronization across platforms",
      "Pipeline updates based on lead behavior",
      "Smart task creation and assignment",
      "Automated follow-up sequences",
      "Custom workflow creation for your business",
    ],
    icon: "⚙️",
  },
  {
    id: "ai-chatbots",
    title: "AI Chatbots for Sales & Support",
    description:
      "Intelligent assistants that handle inquiries, book calls, and qualify leads 24/7.",
    features: [
      "Natural language understanding",
      "Automated call booking and scheduling",
      "Lead qualification conversations",
      "Multi-channel support (website, social, email)",
      "Seamless handoff to human agents",
    ],
    icon: "💬",
  },
  {
    id: "ecommerce",
    title: "E-commerce AI Retention Workflows",
    description:
      "Abandoned cart recovery, personalized recommendations, and automated re-engagement systems.",
    features: [
      "Automated abandoned cart recovery",
      "Personalized product recommendations",
      "Customer re-engagement campaigns",
      "Post-purchase follow-up sequences",
      "Lifetime value optimization",
    ],
    icon: "🛒",
  },
];

function ServicesContent() {
  const searchParams = useSearchParams();
  const serviceId = searchParams.get("service");
  const [selectedService, setSelectedService] = useState<any>(null);

  useEffect(() => {
    if (serviceId) {
      const service = serviceDetails.find((s) => s.id === serviceId);
      setSelectedService(service || null);
      if (service) {
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }, 100);
      }
    } else {
      setSelectedService(null);
    }
  }, [serviceId]);

  if (selectedService) {
    return (
      <main className="relative min-h-screen pt-20">
        <BackgroundGrid />
        <FloatingShapes />

        <section className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 z-10">
          <div className="max-w-4xl mx-auto">
            <Link href="/services" className="inline-flex items-center gap-2 text-text-muted hover:text-primary mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              <span>Back to All Services</span>
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              id={selectedService.id}
              className="glass glass-hover rounded-2xl p-5 sm:p-8 md:p-12"
            >
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 mb-6">
                <div className="text-4xl sm:text-5xl">{selectedService.icon}</div>
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">{selectedService.title}</h1>
                  </div>
                  <p className="text-base sm:text-xl text-text-muted mb-8">
                    {selectedService.description}
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {selectedService.features.map((feature: string, i: number) => (
                  <div key={i} className="flex items-start gap-3 text-text-muted">
                    <span className="text-primary mt-1">✓</span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <Link href="/contact">
                <motion.button
                  className="w-full px-8 py-4 bg-gradient-to-r from-primary via-secondary to-accent text-white font-semibold rounded-lg glow-effect-hover flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get Started with {selectedService.title}
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="relative min-h-screen pt-20">
      <BackgroundGrid />
      <FloatingShapes />

      <section className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-6">
            Our <span className="gradient-text">Services</span>
          </h1>
          <p className="text-base sm:text-xl text-text-muted leading-relaxed mb-8">
            Intelligent automation systems that work while you sleep. Built with
            AI to scale your revenue automatically.
          </p>
          <Link href="/#contact">
            <button className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-primary via-secondary to-accent text-white font-semibold rounded-lg glow-effect-hover">
              Get Started Today
            </button>
          </Link>
        </div>
      </section>

      <section className="relative py-16 px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            Service <span className="gradient-text">Details</span>
          </h2>
          <div className="space-y-10 sm:space-y-16">
            {serviceDetails.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className="scroll-mt-20 glass glass-hover rounded-2xl p-5 sm:p-8 md:p-12"
              >
                <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 mb-6">
                  <div className="text-4xl sm:text-5xl">{service.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <h3 className="text-2xl sm:text-3xl font-bold">{service.title}</h3>
                    </div>
                    <p className="text-base sm:text-xl text-text-muted mb-6">
                      {service.description}
                    </p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {service.features.map((feature, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 text-text-muted"
                    >
                      <span className="text-primary mt-1">✓</span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-16 px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-4xl mx-auto text-center glass glass-hover rounded-2xl p-6 sm:p-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Ready to Automate Your Revenue?
          </h2>
          <p className="text-base sm:text-xl text-text-muted mb-8">
            Book a free strategy call and discover how intelligent systems can
            scale your business.
          </p>
          <Link href="/#contact">
            <button className="px-8 py-4 bg-gradient-to-r from-primary via-secondary to-accent text-white font-semibold rounded-lg glow-effect-hover flex items-center gap-2 mx-auto">
              Book Free Strategy Call
              <ArrowRight className="w-5 h-5" />
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}

export default function ServicesPage() {
  return (
    <Suspense fallback={
      <main className="relative min-h-screen pt-20 flex items-center justify-center">
        <div className="text-text-muted">Loading...</div>
      </main>
    }>
      <ServicesContent />
    </Suspense>
  );
}
