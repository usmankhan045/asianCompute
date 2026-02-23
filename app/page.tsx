import dynamic from "next/dynamic";
import Hero from "@/components/sections/Hero";
import FloatingShapes from "@/components/FloatingShapes";
import BackgroundGrid from "@/components/BackgroundGrid";
import Footer from "@/components/Footer";

// Lazy load sections below the fold for better initial load performance
const Problem = dynamic(() => import("@/components/sections/Problem"), {
  loading: () => null,
});
const Services = dynamic(() => import("@/components/sections/Services"), {
  loading: () => null,
});
const HowItWorks = dynamic(() => import("@/components/sections/HowItWorks"), {
  loading: () => null,
});
const Results = dynamic(() => import("@/components/sections/Results"), {
  loading: () => null,
});
const Workflows = dynamic(() => import("@/components/sections/Workflows"), {
  loading: () => null,
});
const CaseStudies = dynamic(() => import("@/components/sections/CaseStudies"), {
  loading: () => null,
});
const AboutFounders = dynamic(
  () => import("@/components/sections/AboutFounders"),
  { loading: () => null }
);
const Testimonials = dynamic(
  () => import("@/components/sections/Testimonials"),
  { loading: () => null }
);
const FinalCTA = dynamic(() => import("@/components/sections/FinalCTA"), {
  loading: () => null,
});

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <BackgroundGrid />
      <FloatingShapes />
      <Hero />
      <Problem />
      <Services />
      <HowItWorks />
      <Results />
      <Workflows />
      <CaseStudies />
      <AboutFounders />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </main>
  );
}