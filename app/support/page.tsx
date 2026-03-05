import BackgroundGrid from "@/components/BackgroundGrid";
import FloatingShapes from "@/components/FloatingShapes";
import { Metadata } from "next";
import Link from "next/link";
import { Mail, MessageCircle, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Support | AsianCompute",
  description: "Get support for your AsianCompute automation systems.",
};

export default function SupportPage() {
  return (
    <main className="relative min-h-screen pt-20">
      <BackgroundGrid />
      <FloatingShapes />

      <section className="relative py-24 px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-center">
            <span className="gradient-text">Support</span>
          </h1>
          <p className="text-xl text-text-muted leading-relaxed mb-12 text-center">
            We're here to help you get the most out of your automation systems.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="glass glass-hover rounded-2xl p-8">
              <Mail className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4">Email Support</h3>
              <p className="text-text-muted mb-6">
                Send us an email and we'll get back to you within 24 hours.
              </p>
              <a
                href="mailto:support@asiancompute.tech"
                className="text-primary hover:text-secondary transition-colors font-medium"
              >
                support@asiancompute.tech →
              </a>
            </div>

            <div className="glass glass-hover rounded-2xl p-8">
              <MessageCircle className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4">Live Chat</h3>
              <p className="text-text-muted mb-6">
                Chat with our support team for immediate assistance.
              </p>
              <Link
                href="/contact"
                className="text-primary hover:text-secondary transition-colors font-medium"
              >
                Start Chat →
              </Link>
            </div>
          </div>

          <div className="glass glass-hover rounded-2xl p-8">
            <HelpCircle className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-2xl font-bold mb-4">FAQ</h3>
            <p className="text-text-muted mb-6">
              Check out our frequently asked questions or contact us for
              personalized support.
            </p>
            <Link href="/contact">
              <button className="px-8 py-4 bg-gradient-to-r from-primary via-accent to-secondary text-white font-semibold rounded-lg glow-effect-hover">
                Contact Support
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
