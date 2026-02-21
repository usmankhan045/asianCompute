import CaseStudies from "@/components/sections/CaseStudies";
import BackgroundGrid from "@/components/BackgroundGrid";
import FloatingShapes from "@/components/FloatingShapes";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Case Studies | AsianCompute - Success Stories",
  description: "Real case studies showing how AsianCompute's AI automation systems transformed businesses and increased revenue.",
};

export default function CaseStudiesPage() {
  return (
    <main className="relative min-h-screen pt-20">
      <BackgroundGrid />
      <FloatingShapes />

      {/* Hero Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold mb-6">
            Case <span className="gradient-text">Studies</span>
          </h1>
          <p className="text-xl text-text-muted leading-relaxed">
            See how intelligent automation systems transformed these businesses
            and drove measurable revenue growth.
          </p>
        </div>
      </section>

      {/* Case Studies Grid (Overview) */}
      <CaseStudies />

      {/* Detailed Case Studies */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-5xl mx-auto space-y-16">
          {/* Marketing Agency */}
          <article
            id="marketing-agency"
            className="glass glass-hover rounded-2xl p-8 md:p-10 scroll-mt-24"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-6">
              <div>
                <h2 className="text-3xl font-bold mb-2">
                  Marketing Agency –{" "}
                  <span className="gradient-text">
                    Automated Lead Qualification
                  </span>
                </h2>
                <p className="text-text-muted">
                  Performance-focused marketing agency struggling to keep up
                  with inbound lead volume and manual qualification.
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm uppercase tracking-wide text-text-muted">
                  Core Result
                </p>
                <p className="text-3xl font-bold gradient-text">+45% booked calls</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="text-sm font-semibold text-text-muted mb-2">
                  Before AsianCompute
                </h3>
                <ul className="space-y-2 text-text-muted text-sm">
                  <li>• Leads sat in inbox for 24–72 hours before follow-up</li>
                  <li>• Account managers manually qualified every inquiry</li>
                  <li>• Inconsistent data in the CRM and no clear pipeline view</li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-text-muted mb-2">
                  After Implementation
                </h3>
                <ul className="space-y-2 text-text-muted text-sm">
                  <li>• Instant AI-powered lead scoring and qualification</li>
                  <li>• Hot leads routed directly to the right account owner</li>
                  <li>• Unified, always up-to-date CRM pipeline</li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-text-muted mb-2">
                  KPIs Moved
                </h3>
                <ul className="space-y-2 text-text-muted text-sm">
                  <li>• +45% increase in booked sales calls</li>
                  <li>• Response time cut from days to minutes</li>
                  <li>• 60% reduction in manual qualification work</li>
                </ul>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-3">
                  System Architecture
                </h3>
                <p className="text-text-muted text-sm mb-3">
                  We designed an AI-driven lead router built on n8n that sits
                  between all capture forms, ad platforms, and the CRM. Every
                  new lead is enriched, scored, and classified in real time.
                </p>
                <ul className="space-y-2 text-text-muted text-sm">
                  <li>• n8n orchestrating data between forms, email and CRM</li>
                  <li>• AI model scoring lead intent and fit based on inputs</li>
                  <li>• Auto-tagging and pipeline stage updates in the CRM</li>
                  <li>• Slack + email alerts for hot and high-value leads</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3">
                  Revenue Impact
                </h3>
                <p className="text-text-muted text-sm mb-3">
                  Within 90 days, the agency had a predictable, fully-visible
                  pipeline and more booked calls without increasing ad spend.
                </p>
                <ul className="space-y-2 text-text-muted text-sm">
                  <li>• Higher close rate from better-qualified calls</li>
                  <li>• Senior team freed from low-value admin tasks</li>
                  <li>• Clear reporting on lead sources and performance</li>
                </ul>
              </div>
            </div>
          </article>

          {/* Online Coach */}
          <article
            id="online-coach"
            className="glass glass-hover rounded-2xl p-8 md:p-10 scroll-mt-24"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-6">
              <div>
                <h2 className="text-3xl font-bold mb-2">
                  Online Coach –{" "}
                  <span className="gradient-text">AI DM Assistant</span>
                </h2>
                <p className="text-text-muted">
                  High-ticket coach getting flooded with DMs and inquiries,
                  struggling to respond fast enough and qualify serious buyers.
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm uppercase tracking-wide text-text-muted">
                  Core Result
                </p>
                <p className="text-3xl font-bold gradient-text">3x conversion rate</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="text-sm font-semibold text-text-muted mb-2">
                  Before AsianCompute
                </h3>
                <ul className="space-y-2 text-text-muted text-sm">
                  <li>• Coach personally replying to every DM</li>
                  <li>• No structured qualification questions</li>
                  <li>• Inconsistent booking links and follow-up</li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-text-muted mb-2">
                  After Implementation
                </h3>
                <ul className="space-y-2 text-text-muted text-sm">
                  <li>• AI assistant handling first contact in DMs 24/7</li>
                  <li>• Smart questions to qualify budget, timeline, and fit</li>
                  <li>• Direct booking links sent only to qualified leads</li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-text-muted mb-2">
                  KPIs Moved
                </h3>
                <ul className="space-y-2 text-text-muted text-sm">
                  <li>• 3x increase in call-to-client conversion rate</li>
                  <li>• 20+ hours per week saved on manual messaging</li>
                  <li>• Response time reduced to under 2 minutes</li>
                </ul>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-3">
                  Assistant Flow Design
                </h3>
                <p className="text-text-muted text-sm mb-3">
                  We built an AI DM assistant integrated directly with social
                  inboxes that can understand context, handle objections, and
                  push only qualified leads to the coach&apos;s calendar.
                </p>
                <ul className="space-y-2 text-text-muted text-sm">
                  <li>• AI-powered conversation flows and intent detection</li>
                  <li>• n8n workflows pushing qualified leads into the CRM</li>
                  <li>• Automated reminders and no-show follow-up</li>
                  <li>• Clear transcripts for review and optimization</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3">
                  Revenue Impact
                </h3>
                <p className="text-text-muted text-sm mb-3">
                  The coach now spends time only with serious buyers, leading to
                  more revenue with fewer calls and significantly less time in
                  the inbox.
                </p>
                <ul className="space-y-2 text-text-muted text-sm">
                  <li>• Calendar filled with high-intent prospects</li>
                  <li>• Predictable weekly sales pipeline</li>
                  <li>• Clear insight into which campaigns drive the best leads</li>
                </ul>
              </div>
            </div>
          </article>

          {/* E-commerce Brand */}
          <article
            id="ecommerce-brand"
            className="glass glass-hover rounded-2xl p-8 md:p-10 scroll-mt-24"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-6">
              <div>
                <h2 className="text-3xl font-bold mb-2">
                  E-commerce Brand –{" "}
                  <span className="gradient-text">Abandoned Cart AI System</span>
                </h2>
                <p className="text-text-muted">
                  Fast-growing DTC brand losing significant revenue to abandoned
                  carts with only basic, generic recovery emails in place.
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm uppercase tracking-wide text-text-muted">
                  Core Result
                </p>
                <p className="text-3xl font-bold gradient-text">+32% revenue lift</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="text-sm font-semibold text-text-muted mb-2">
                  Before AsianCompute
                </h3>
                <ul className="space-y-2 text-text-muted text-sm">
                  <li>• Single generic abandoned cart email</li>
                  <li>• No segmentation by AOV, product type, or behavior</li>
                  <li>• No SMS or on-site personalization</li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-text-muted mb-2">
                  After Implementation
                </h3>
                <ul className="space-y-2 text-text-muted text-sm">
                  <li>• Multi-step recovery flows across email and SMS</li>
                  <li>• AI-generated offers based on cart contents and history</li>
                  <li>• Product-specific messaging and urgency triggers</li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-text-muted mb-2">
                  KPIs Moved
                </h3>
                <ul className="space-y-2 text-text-muted text-sm">
                  <li>• 32% of abandoned carts recovered</li>
                  <li>• Higher AOV from smart cross-sell recommendations</li>
                  <li>• Improved repeat purchase rate and retention</li>
                </ul>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-3">
                  Workflow Design
                </h3>
                <p className="text-text-muted text-sm mb-3">
                  Using n8n, we orchestrated events from the storefront, ESP,
                  and SMS provider to trigger highly targeted recovery journeys
                  based on customer behavior.
                </p>
                <ul className="space-y-2 text-text-muted text-sm">
                  <li>• Real-time cart event tracking and segmentation</li>
                  <li>• Dynamic content blocks powered by AI copy</li>
                  <li>• Time-based and behavior-based split logic</li>
                  <li>• Continuous A/B testing and optimization loops</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3">
                  Revenue Impact
                </h3>
                <p className="text-text-muted text-sm mb-3">
                  The brand unlocked a new, consistent revenue stream from
                  traffic they were already paying for, without increasing ad
                  spend or team workload.
                </p>
                <ul className="space-y-2 text-text-muted text-sm">
                  <li>• Higher overall store conversion rate</li>
                  <li>• More predictable monthly recurring revenue</li>
                  <li>• Clear playbook to roll out to other product lines</li>
                </ul>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Additional CTA */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-4xl mx-auto text-center glass glass-hover rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">
            Ready to See Similar Results?
          </h2>
          <p className="text-xl text-text-muted mb-8">
            Let's discuss how we can automate your revenue operations.
          </p>
          <Link href="/contact">
            <button className="px-8 py-4 bg-gradient-to-r from-primary via-secondary to-accent text-white font-semibold rounded-lg glow-effect-hover">
              Book Free Strategy Call
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}
