"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react";
import BackgroundGrid from "@/components/BackgroundGrid";
import FloatingShapes from "@/components/FloatingShapes";
import Link from "next/link";
import { ArrowLeft, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const caseStudiesData = [
  {
    id: "marketing-agency",
    client: "Marketing Agency",
    title: "Automated Lead Qualification",
    challenge: "Performance-focused marketing agency struggling to keep up with inbound lead volume and manual qualification.",
    result: "+45%",
    resultLabel: "booked calls",
    before: [
      "Leads sat in inbox for 24–72 hours before follow-up",
      "Account managers manually qualified every inquiry",
      "Inconsistent data in the CRM and no clear pipeline view",
    ],
    after: [
      "Instant AI-powered lead scoring and qualification",
      "Hot leads routed directly to the right account owner",
      "Unified, always up-to-date CRM pipeline",
    ],
    kpis: [
      "+45% increase in booked sales calls",
      "Response time cut from days to minutes",
      "60% reduction in manual qualification work",
    ],
    system: "AI lead scoring engine with automated workflows that captures form submissions, enriches lead data, scores based on firmographic and behavioral signals, and routes qualified leads to the appropriate account manager via Slack and CRM updates.",
    revenue: "The agency closed 45% more deals in the first quarter post-implementation, directly attributed to faster response times and better lead prioritization.",
    gradient: "from-primary/20 to-primary/5",
  },
  {
    id: "online-coach",
    client: "Online Coach",
    title: "AI DM Assistant",
    challenge: "High-growth online coach drowning in DMs, unable to focus on high-value clients due to manual response workload.",
    result: "3x",
    resultLabel: "conversion rate",
    before: [
      "Hundreds of DMs per day requiring manual responses",
      "No way to prioritize high-intent prospects",
      "Missed opportunities due to slow response times",
    ],
    after: [
      "AI assistant handles initial qualification conversations",
      "Smart routing sends only qualified leads to the coach",
      "Automated booking system for discovery calls",
    ],
    kpis: [
      "3x improvement in conversion rate (20% to 60%)",
      "20+ hours saved per week on manual responses",
      "100% of qualified leads get immediate response",
    ],
    system: "AI-powered DM assistant built with natural language processing that engages prospects, asks qualifying questions, and books calls automatically. Only high-intent leads are forwarded to the coach.",
    revenue: "Conversion rate tripled from 20% to 60%, meaning the coach now closes 3x more clients from the same volume of inquiries, dramatically increasing revenue per hour worked.",
    gradient: "from-secondary/20 to-secondary/5",
  },
  {
    id: "ecommerce-brand",
    client: "E-commerce Brand",
    title: "Abandoned Cart AI System",
    challenge: "E-commerce brand losing significant revenue to abandoned carts with no automated recovery system in place.",
    result: "+32%",
    resultLabel: "revenue recovery",
    before: [
      "0% recovery rate on abandoned carts",
      "No personalized follow-up sequences",
      "Manual email campaigns were too slow and generic",
    ],
    after: [
      "Automated AI-powered abandoned cart recovery",
      "Personalized product recommendations and offers",
      "Multi-touch re-engagement sequences",
    ],
    kpis: [
      "32% of abandoned carts recovered",
      "Average order value increased by 15%",
      "Customer lifetime value improved by 25%",
    ],
    system: "Automated workflow that triggers when a cart is abandoned, uses AI to generate personalized product recommendations and discount offers, and sends a multi-email sequence with increasing urgency and value.",
    revenue: "Recovered 32% of previously lost revenue from abandoned carts, adding significant revenue without additional marketing spend. The system pays for itself within the first month.",
    gradient: "from-accent/20 to-accent/5",
  },
];

function CaseStudiesContent() {
  const searchParams = useSearchParams();
  const caseId = searchParams.get("case");
  const [selectedCase, setSelectedCase] = useState<any>(null);

  useEffect(() => {
    if (caseId) {
      const caseStudy = caseStudiesData.find((c) => c.id === caseId);
      setSelectedCase(caseStudy || null);
      if (caseStudy) {
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }, 100);
      }
    } else {
      setSelectedCase(null);
    }
  }, [caseId]);

  if (selectedCase) {
    return (
      <main className="relative min-h-screen pt-20 bg-white">
        <BackgroundGrid />
        <FloatingShapes />

        <section className="relative py-24 px-4 sm:px-6 lg:px-8 z-10">
          <div className="max-w-5xl mx-auto">
            <Link href="/#case-studies" className="inline-flex items-center gap-2 text-gray-500 hover:text-primary mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              <span>Back to All Case Studies</span>
            </Link>

            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className={`glass glass-hover rounded-2xl p-8 md:p-10 bg-gradient-to-br ${selectedCase.gradient}`}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
                <div>
                  <span className="px-3 py-1 rounded-full glass text-sm font-medium text-text-muted mb-4 inline-block">
                    {selectedCase.client}
                  </span>
                  <h1 className="text-4xl font-bold mb-4">
                    {selectedCase.title}
                  </h1>
                  <p className="text-text-muted text-lg">
                    {selectedCase.challenge}
                  </p>
                </div>
                <div className="text-center md:text-right">
                  <p className="text-sm uppercase tracking-wide text-text-muted mb-2">
                    Core Result
                  </p>
                  <p className="text-4xl font-bold gradient-text mb-1">
                    {selectedCase.result}
                  </p>
                  <p className="text-text-muted">{selectedCase.resultLabel}</p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="glass rounded-xl p-6">
                  <h3 className="text-sm font-semibold text-text-muted mb-4">
                    Before AsianCompute
                  </h3>
                  <ul className="space-y-2 text-text-muted text-sm">
                    {selectedCase.before.map((item: string, i: number) => (
                      <li key={i}>• {item}</li>
                    ))}
                  </ul>
                </div>
                <div className="glass rounded-xl p-6">
                  <h3 className="text-sm font-semibold text-text-muted mb-4">
                    After Implementation
                  </h3>
                  <ul className="space-y-2 text-text-muted text-sm">
                    {selectedCase.after.map((item: string, i: number) => (
                      <li key={i}>• {item}</li>
                    ))}
                  </ul>
                </div>
                <div className="glass rounded-xl p-6">
                  <h3 className="text-sm font-semibold text-text-muted mb-4">
                    KPIs Moved
                  </h3>
                  <ul className="space-y-2 text-text-muted text-sm">
                    {selectedCase.kpis.map((item: string, i: number) => (
                      <li key={i}>• {item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="glass rounded-xl p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <TrendingUp className="w-5 h-5 text-primary" />
                    <h3 className="text-lg font-semibold">System Architecture</h3>
                  </div>
                  <p className="text-text-muted leading-relaxed">
                    {selectedCase.system}
                  </p>
                </div>
                <div className="glass rounded-xl p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <TrendingUp className="w-5 h-5 text-primary" />
                    <h3 className="text-lg font-semibold">Revenue Impact</h3>
                  </div>
                  <p className="text-text-muted leading-relaxed">
                    {selectedCase.revenue}
                  </p>
                </div>
              </div>

              <Link href="/#contact">
                <motion.button
                  className="w-full px-8 py-4 bg-gradient-to-r from-primary via-accent to-secondary text-white font-semibold rounded-lg glow-effect-hover"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get Similar Results for Your Business
                </motion.button>
              </Link>
            </motion.article>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="relative min-h-screen pt-20">
      <BackgroundGrid />
      <FloatingShapes />

      <section className="relative py-24 px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6">
            Case <span className="gradient-text">Studies</span>
          </h1>
          <p className="text-xl text-gray-500 leading-relaxed">
            See how intelligent automation systems transformed these businesses
            and drove measurable revenue growth.
          </p>
        </div>
      </section>

      <section className="relative py-16 px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-5xl mx-auto space-y-16">
          {caseStudiesData.map((caseStudy) => (
            <article
              key={caseStudy.id}
              id={caseStudy.id}
              className={`glass glass-hover rounded-2xl p-8 md:p-10 scroll-mt-24 bg-gradient-to-br ${caseStudy.gradient}`}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-6">
                <div>
                  <span className="px-3 py-1 rounded-full glass text-sm font-medium text-text-muted mb-4 inline-block">
                    {caseStudy.client}
                  </span>
                  <h2 className="text-3xl font-bold mb-2">
                    {caseStudy.title}
                  </h2>
                  <p className="text-text-muted">{caseStudy.challenge}</p>
                </div>
                <div className="text-center md:text-right">
                  <p className="text-sm uppercase tracking-wide text-text-muted">
                    Core Result
                  </p>
                  <p className="text-3xl font-bold gradient-text">
                    {caseStudy.result} {caseStudy.resultLabel}
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div>
                  <h3 className="text-sm font-semibold text-text-muted mb-2">
                    Before AsianCompute
                  </h3>
                  <ul className="space-y-2 text-text-muted text-sm">
                    {caseStudy.before.map((item: string, i: number) => (
                      <li key={i}>• {item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-text-muted mb-2">
                    After Implementation
                  </h3>
                  <ul className="space-y-2 text-text-muted text-sm">
                    {caseStudy.after.map((item: string, i: number) => (
                      <li key={i}>• {item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-text-muted mb-2">
                    KPIs Moved
                  </h3>
                  <ul className="space-y-2 text-text-muted text-sm">
                    {caseStudy.kpis.map((item: string, i: number) => (
                      <li key={i}>• {item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-3">
                    System Architecture
                  </h3>
                  <p className="text-text-muted leading-relaxed text-sm">
                    {caseStudy.system}
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3">Revenue Impact</h3>
                  <p className="text-text-muted leading-relaxed text-sm">
                    {caseStudy.revenue}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="relative py-16 px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-4xl mx-auto text-center glass glass-hover rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">
            Ready to See Similar Results?
          </h2>
          <p className="text-xl text-gray-500 mb-8">
            Let's discuss how we can automate your revenue operations.
          </p>
          <Link href="/#contact">
            <button className="px-8 py-4 bg-gradient-to-r from-primary via-accent to-secondary text-white font-semibold rounded-lg glow-effect-hover">
              Book Free Strategy Call
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}

export default function CaseStudiesPage() {
  return (
    <Suspense fallback={
      <main className="relative min-h-screen pt-20 flex items-center justify-center">
        <div className="text-gray-500">Loading...</div>
      </main>
    }>
      <CaseStudiesContent />
    </Suspense>
  );
}
