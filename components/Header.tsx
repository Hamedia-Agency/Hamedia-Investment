"use client";

import React, { useState, useEffect } from "react";
import { HamediaLogo } from "./ui/HamediaLogo";
import { cn } from "@/lib/utils";
import { Menu, X, ArrowRight, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About Us", href: "#about" },
    { name: "Flagship Project", href: "#flagship" },
    { name: "Future Ventures", href: "#ventures" },
    { name: "The Model", href: "#model" },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const headerOffset = 90;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full",
          isScrolled
            ? "glass-nav py-3 shadow-sm"
            : "bg-transparent py-5"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo Container */}
            <a
              href="#"
              onClick={(e) => handleLinkClick(e, "#")}
              className="flex items-center gap-2 group focus:outline-none"
            >
              <HamediaLogo variant="icon" iconClassName="w-10 h-10" />
              <div className="flex flex-col">
                <span className="font-serif text-base font-black tracking-widest text-brand-charcoal group-hover:text-brand-red transition-colors duration-200 leading-none">
                  HAMEDIA
                </span>
                <span className="font-sans text-[8px] font-bold tracking-[0.2em] text-brand-gray uppercase mt-0.5 leading-none">
                  INVESTMENTS
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="font-sans text-xs font-semibold tracking-wider uppercase text-brand-charcoal hover:text-brand-red transition-colors duration-200 relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-brand-red after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Call to Action Button */}
            <div className="hidden md:block">
              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, "#contact")}
                className="inline-flex items-center justify-center px-5 py-2.5 rounded-full font-sans text-xs font-bold tracking-wider uppercase bg-brand-red hover:bg-brand-red-dark text-white shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 group"
              >
                Inquire Now
                <ArrowRight className="ml-1.5 w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-brand-charcoal hover:bg-brand-cream-dark/20 focus:outline-none transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-[72px] z-40 bg-brand-cream/98 backdrop-blur-lg md:hidden flex flex-col justify-between p-6 border-t border-brand-charcoal/5"
          >
            <div className="flex flex-col gap-6 mt-4">
              {navLinks.map((link, idx) => (
                <motion.a
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="flex items-center justify-between py-3 border-b border-brand-charcoal/5 font-sans text-sm font-bold tracking-widest uppercase text-brand-charcoal hover:text-brand-red transition-colors duration-200"
                >
                  {link.name}
                  <ChevronRight className="w-4 h-4 text-brand-gray" />
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="mb-8"
            >
              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, "#contact")}
                className="flex items-center justify-center w-full py-4 rounded-full font-sans text-sm font-bold tracking-widest uppercase bg-brand-red hover:bg-brand-red-dark text-white shadow-md transition-all duration-300"
              >
                Inquire Now
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
