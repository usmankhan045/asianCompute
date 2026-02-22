"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Github,
  Facebook,
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: "About Us", href: "/about" },
      { name: "Services", href: "/services" },
      { name: "Case Studies", href: "/case-studies" },
      { name: "How It Works", href: "/how-it-works" },
    ],
    services: [
      { name: "AI Lead Qualification", href: "/services#lead-qualification" },
      { name: "CRM Automation", href: "/services#crm-automation" },
      { name: "AI Chatbots", href: "/services#ai-chatbots" },
      { name: "E-commerce Workflows", href: "/services#ecommerce" },
    ],
    resources: [
      { name: "Blog", href: "/blog" },
      { name: "Documentation", href: "/documentation" },
      { name: "Support", href: "/support" },
      { name: "Contact", href: "/contact" },
    ],
  };

  const socialLinks = [
    { icon: Linkedin, href: "https://linkedin.com/company/asiancompute", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com/asiancompute", label: "Twitter" },
    { icon: Github, href: "https://github.com/asiancompute", label: "GitHub" },
    { icon: Facebook, href: "https://facebook.com/asiancompute", label: "Facebook" },
  ];

  return (
    <footer className="relative border-t border-white/10 bg-background/50 backdrop-blur-sm z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold gradient-text mb-4">
                AsianCompute
              </h3>
              <p className="text-text-muted mb-6 leading-relaxed">
                Building intelligent automation systems that scale your revenue
                automatically. AI-powered solutions for agencies, coaches,
                and e-commerce brands.
              </p>
              <div className="space-y-3">
                <a
                  href="mailto:info@asiancompute.com"
                  className="flex items-center gap-3 text-text-muted hover:text-primary transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>info@asiancompute.com</span>
                </a>
                <a
                  href="tel:+1234567890"
                  className="flex items-center gap-3 text-text-muted hover:text-primary transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>+1 (234) 567-890</span>
                </a>
                <div className="flex items-start gap-3 text-text-muted">
                  <MapPin className="w-4 h-4 mt-1" />
                  <span>Global Remote Team</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Company Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-text-muted hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Services Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-text-muted hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Resources Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h4 className="text-lg font-semibold mb-4">Resources</h4>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-text-muted hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-white/10 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-6">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-muted hover:text-primary transition-colors"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
            <div className="text-text-muted text-sm text-center md:text-right">
              <p>
                © {currentYear} AsianCompute. All rights reserved.
              </p>
              <p className="mt-1">
                Built with AI automation systems.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
