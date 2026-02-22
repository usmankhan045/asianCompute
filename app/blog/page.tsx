import BackgroundGrid from "@/components/BackgroundGrid";
import FloatingShapes from "@/components/FloatingShapes";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog | AsianCompute - AI Automation Insights",
  description: "Read the latest insights on AI automation, intelligent workflows, and revenue automation strategies.",
};

export default function BlogPage() {
  return (
    <main className="relative min-h-screen pt-20">
      <BackgroundGrid />
      <FloatingShapes />

      <section className="relative py-24 px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6">
            Our <span className="gradient-text">Blog</span>
          </h1>
          <p className="text-xl text-text-muted leading-relaxed mb-12">
            Insights, tips, and strategies on AI automation and revenue growth.
          </p>
          <div className="glass glass-hover rounded-2xl p-12">
            <p className="text-text-muted mb-6">
              Our blog is coming soon! Check back for the latest insights on AI
              automation, intelligent workflows, and revenue optimization strategies.
            </p>
            <Link href="/contact">
              <button className="px-8 py-4 bg-gradient-to-r from-primary via-secondary to-accent text-white font-semibold rounded-lg glow-effect-hover">
                Get Updates
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
