import HowItWorks from "@/components/sections/HowItWorks";
import BackgroundGrid from "@/components/BackgroundGrid";
import FloatingShapes from "@/components/FloatingShapes";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How It Works | AsianCompute - Our Process",
  description: "Learn about our proven 3-step process: Strategy & Revenue Audit, AI System Architecture, and Launch, Optimize & Scale.",
};

export default function HowItWorksPage() {
  return (
    <main className="relative min-h-screen pt-20">
      <BackgroundGrid />
      <FloatingShapes />

      {/* Hero Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6">
            How It <span className="gradient-text">Works</span>
          </h1>
          <p className="text-xl text-text-muted leading-relaxed">
            A proven process to transform your revenue operations with
            intelligent automation systems.
          </p>
        </div>
      </section>

      {/* How It Works Timeline */}
      <HowItWorks />

      {/* Additional Process Details */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-4xl mx-auto">
          <div className="glass glass-hover rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-6 gradient-text">
              What to Expect
            </h2>
            <div className="space-y-6 text-text-muted">
              <p className="text-lg leading-relaxed">
                Our process is designed to be collaborative and transparent. We
                start by understanding your business, identifying automation
                opportunities, and then building custom solutions that deliver
                measurable results.
              </p>
              <p className="text-lg leading-relaxed">
                Throughout the journey, you'll have full visibility into what
                we're building, how it works, and the impact it's having on your
                revenue. We provide training and documentation so you can
                maintain and scale your automation systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-text-muted mb-8">
            Book a free strategy call to discuss your automation needs.
          </p>
          <Link href="/contact">
            <button className="px-8 py-4 bg-gradient-to-r from-primary via-accent to-secondary text-white font-semibold rounded-lg glow-effect-hover">
              Schedule Your Free Call
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}
