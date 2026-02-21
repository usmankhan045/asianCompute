import AboutFounders from "@/components/sections/AboutFounders";
import BackgroundGrid from "@/components/BackgroundGrid";
import FloatingShapes from "@/components/FloatingShapes";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | AsianCompute",
  description: "Learn about AsianCompute and our founders Muhammad Usman and Muhammad Awais, experts in AI automation and growth strategy.",
};

export default function AboutPage() {
  return (
    <main className="relative min-h-screen pt-20">
      <BackgroundGrid />
      <FloatingShapes />
      
      {/* Hero Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6">
            About <span className="gradient-text">AsianCompute</span>
          </h1>
          <p className="text-xl text-text-muted leading-relaxed">
            We're a specialized AI Growth Automation Agency founded by two
            partners with deep expertise in automation systems. Our mission is
            to help businesses scale their revenue through intelligent
            automation.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-4xl mx-auto">
          <div className="glass glass-hover rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-6 gradient-text">Our Mission</h2>
            <p className="text-lg text-text-muted leading-relaxed mb-6">
              At AsianCompute, we believe that every business should be able to
              scale without being limited by manual processes. We build
              intelligent automation systems using AI + n8n that eliminate
              repetitive work, optimize lead flow, and increase conversion rates.
            </p>
            <p className="text-lg text-text-muted leading-relaxed">
              Our focus is on delivering measurable ROI for marketing agencies,
              online coaches, and e-commerce brands who want to grow faster and
              work smarter.
            </p>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <AboutFounders />

      {/* Values Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Our <span className="gradient-text">Values</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Results-Driven",
                description:
                  "We focus on measurable outcomes and ROI, not just technology for technology's sake.",
              },
              {
                title: "Client-First",
                description:
                  "Your success is our success. We build systems that work for your specific business needs.",
              },
              {
                title: "Innovation",
                description:
                  "We stay at the cutting edge of AI and automation technology to deliver the best solutions.",
              },
            ].map((value, index) => (
              <div
                key={value.title}
                className="glass glass-hover rounded-2xl p-8"
              >
                <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                <p className="text-text-muted leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
