import BackgroundGrid from "@/components/BackgroundGrid";
import FloatingShapes from "@/components/FloatingShapes";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Documentation | AsianCompute",
  description: "Documentation and resources for AsianCompute automation systems.",
};

export default function DocumentationPage() {
  return (
    <main className="relative min-h-screen pt-20">
      <BackgroundGrid />
      <FloatingShapes />

      <section className="relative py-24 px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6">
            <span className="gradient-text">Documentation</span>
          </h1>
          <p className="text-xl text-text-muted leading-relaxed mb-12">
            Resources and guides for using AsianCompute automation systems.
          </p>
          <div className="glass glass-hover rounded-2xl p-12">
            <p className="text-text-muted mb-6">
              Documentation is available to our clients. If you're a client,
              please contact us for access.
            </p>
            <Link href="/contact">
              <button className="px-8 py-4 bg-gradient-to-r from-primary via-accent to-secondary text-white font-semibold rounded-lg glow-effect-hover">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
