import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MouseGlow from "@/components/MouseGlow";
import ScrollProgress from "@/components/ScrollProgress";
import Navigation from "@/components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AsianCompute | AI Growth Automation Agency | Revenue Automation Systems",
  description: "We build intelligent automation systems using AI + n8n that eliminate manual work, optimize lead flow, and increase conversion rates for agencies, coaches, and e-commerce brands.",
  keywords: "AI automation, n8n automation, revenue automation, lead automation, e-commerce AI, business automation, AsianCompute",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-background text-text antialiased`}>
        <MouseGlow />
        <ScrollProgress />
        <Navigation />
        {children}
      </body>
    </html>
  );
}
