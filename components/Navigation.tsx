"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    {
      name: "Services",
      href: "/#services",
      submenu: [
        { name: "AI Lead Qualification", href: "/services?service=lead-qualification" },
        { name: "CRM Automation", href: "/services?service=crm-automation" },
        { name: "AI Chatbots", href: "/services?service=ai-chatbots" },
        { name: "E-commerce Workflows", href: "/services?service=ecommerce" },
      ],
    },
    { name: "How It Works", href: "/#how-it-works" },
    { name: "Case Studies", href: "/#case-studies" },
    { name: "Contact", href: "/#contact" },
  ];

  const handleLinkClick = (href: string, e: React.MouseEvent) => {
    if (href.startsWith("/#")) {
      e.preventDefault();
      const hash = href.substring(1);
      if (pathname === "/") {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      } else {
        window.location.href = href;
      }
      setIsOpen(false);
    }
  };

  const isActive = (href: string) => pathname === href;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-white/90 backdrop-blur-xl border-b border-black/8 shadow-sm"
        : "bg-white/60 backdrop-blur-sm"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo — left side */}
          <Link href="/" className="flex-shrink-0 flex items-center group">
            {/*
              Dark container + multiply blend mode removes white logo bg.
              High brightness + saturation makes brand colors pop despite
              the dark-multiply darkening effect.
            */}
            <div className="overflow-hidden h-16 w-40 flex items-center justify-center">
              <Image
                src="/logo.jpeg"
                alt="AsianCompute Logo"
                width={280}
                height={90}
                className="object-contain scale-[1.25] origin-center"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation — center */}
          <div className="hidden lg:flex items-center gap-6 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => {
              if (link.submenu) {
                return (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <button
                      className={`flex items-center gap-1 px-3 py-2 rounded-lg transition-colors ${isActive(link.href)
                        ? "text-primary font-semibold"
                        : "text-gray-600 hover:text-primary"
                        }`}
                    >
                      {link.name}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""
                          }`}
                      />
                    </button>
                    <AnimatePresence>
                      {servicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl p-2 shadow-lg border border-black/8"
                        >
                          {link.submenu.map((sub) => (
                            <Link
                              key={sub.name}
                              href={sub.href}
                              className="block px-4 py-2 rounded-lg text-gray-600 hover:text-primary hover:bg-primary/5 transition-colors"
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(link.href, e)}
                  className={`px-3 py-2 rounded-lg transition-colors cursor-pointer ${isActive(link.href) || (link.href.startsWith("/#") && pathname === "/")
                    ? "text-primary font-semibold"
                    : "text-gray-600 hover:text-primary"
                    }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          {/* Get Started CTA — right side */}
          <div className="hidden lg:flex items-center">
            <Link href="/contact">
              <motion.button
                className="px-6 py-2 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-lg glow-effect-hover"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-700 p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-black/8 shadow-lg"
          >
            <div className="px-4 py-4 space-y-2">
              {/* Mobile logo */}
              <div className="flex justify-center pb-3 border-b border-black/8 mb-2">
                <Image
                  src="/logo.jpeg"
                  alt="AsianCompute Logo"
                  width={180}
                  height={58}
                  className="object-contain h-14"
                />
              </div>

              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.submenu ? (
                    <div>
                      <button
                        onClick={() => setServicesOpen(!servicesOpen)}
                        className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-colors ${isActive(link.href)
                          ? "text-primary font-semibold"
                          : "text-gray-600"
                          }`}
                      >
                        {link.name}
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""
                            }`}
                        />
                      </button>
                      <AnimatePresence>
                        {servicesOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="pl-4 mt-2 space-y-2"
                          >
                            {link.submenu.map((sub) => (
                              <Link
                                key={sub.name}
                                href={sub.href}
                                onClick={() => setIsOpen(false)}
                                className="block px-4 py-2 rounded-lg text-gray-600 hover:text-primary"
                              >
                                {sub.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <a
                      href={link.href}
                      onClick={(e) => {
                        handleLinkClick(link.href, e);
                        setIsOpen(false);
                      }}
                      className={`block px-4 py-3 rounded-lg transition-colors cursor-pointer ${isActive(link.href) || (link.href.startsWith("/#") && pathname === "/")
                        ? "text-primary font-semibold"
                        : "text-gray-600"
                        }`}
                    >
                      {link.name}
                    </a>
                  )}
                </div>
              ))}
              <Link href="/contact" onClick={() => setIsOpen(false)}>
                <motion.button
                  className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-lg"
                  whileTap={{ scale: 0.95 }}
                >
                  Get Started
                </motion.button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
