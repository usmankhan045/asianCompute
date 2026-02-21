import Services from "@/components/sections/Services";
import BackgroundGrid from "@/components/BackgroundGrid";
import FloatingShapes from "@/components/FloatingShapes";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Services | AsianCompute - AI Automation Solutions",
  description: "Explore our AI automation services: Lead Qualification, CRM Automation, AI Chatbots, and E-commerce Workflows powered by n8n.",
};

export default function ServicesPage() {
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
        "n8n-powered workflows that sync data, update pipelines, and trigger actions automatically.",
      features: [
        "Automated data synchronization across platforms",
        "Pipeline updates based on lead behavior",
        "Smart task creation and assignment",
        "Automated follow-up sequences",
        "Custom workflow creation for your business",
      ],
      icon: "⚙️",
      badge: "n8n Powered",
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

  return (
    <main className="relative min-h-screen pt-20">
      <BackgroundGrid />
      <FloatingShapes />

      {/* Hero Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6">
            Our <span className="gradient-text">Services</span>
          </h1>
          <p className="text-xl text-text-muted leading-relaxed mb-8">
            Intelligent automation systems that work while you sleep. Built with
            AI + n8n to scale your revenue automatically.
          </p>
          <Link href="/contact">
            <button className="px-8 py-4 bg-gradient-to-r from-primary via-secondary to-accent text-white font-semibold rounded-lg glow-effect-hover">
              Get Started Today
            </button>
          </Link>
        </div>
      </section>

      {/* Services Overview */}
      <Services />

      {/* Detailed Services */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Service <span className="gradient-text">Details</span>
          </h2>
          <div className="space-y-16">
            {serviceDetails.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className="scroll-mt-20 glass glass-hover rounded-2xl p-8 md:p-12"
              >
                <div className="flex items-start gap-6 mb-6">
                  <div className="text-5xl">{service.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <h3 className="text-3xl font-bold">{service.title}</h3>
                      {service.badge && (
                        <span className="px-3 py-1 rounded-full glass text-sm font-medium text-secondary">
                          {service.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-xl text-text-muted mb-6">
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

      {/* CTA Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-4xl mx-auto text-center glass glass-hover rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Automate Your Revenue?
          </h2>
          <p className="text-xl text-text-muted mb-8">
            Book a free strategy call and discover how intelligent systems can
            scale your business.
          </p>
          <Link href="/contact">
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
