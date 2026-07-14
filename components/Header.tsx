"use client";

import React, { useState, useEffect } from "react";
import { HamediaLogo } from "./ui/HamediaLogo";
import { cn } from "@/lib/utils";
import { Menu, X, ArrowRight, ChevronRight, Palette, Layers, Grid } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useDesign, DesignVariant, StructureVariant } from "@/components/providers/DesignContext";

export default function Header() {
  const { theme, setTheme, structure, setStructure } = useDesign();
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
      const headerOffset = 150; // Accounts for header + double-row top bar
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  // Theme-specific styles for Header
  const getHeaderStyles = () => {
    switch (theme) {
      case "royal":
        return {
          fontClass: "font-sans",
          headerBg: isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200" : "bg-transparent",
          linkHover: "hover:text-brand-navy after:bg-brand-navy",
          textClass: "text-slate-800",
          btnClass: "bg-brand-navy hover:bg-brand-navy-dark text-white rounded-lg",
        };
      case "oasis":
        return {
          fontClass: "font-sans",
          headerBg: isScrolled ? "bg-[#F5EFEB]/90 backdrop-blur-md shadow-sm border-b border-brand-oasis-gold/10" : "bg-transparent",
          linkHover: "hover:text-brand-oasis-gold after:bg-brand-oasis-gold",
          textClass: "text-brand-charcoal",
          btnClass: "bg-brand-oasis-charcoal hover:bg-brand-oasis-charcoal/90 text-brand-gold border border-brand-oasis-gold/30 rounded-none",
        };
      case "heritage":
      default:
        return {
          fontClass: "font-sans",
          headerBg: isScrolled ? "glass-nav py-3 shadow-sm" : "bg-transparent",
          linkHover: "hover:text-brand-red after:bg-brand-red",
          textClass: "text-brand-charcoal",
          btnClass: "bg-brand-red hover:bg-brand-red-dark text-white rounded-full",
        };
    }
  };

  const styles = getHeaderStyles();

  return (
    <>
      {/* Dynamic Selector Top Bar - Double Row (Height = 64px / h-16) */}
      <div className="fixed top-0 left-0 right-0 h-16 z-55 bg-brand-charcoal text-white flex flex-col justify-center px-4 border-b border-white/10 select-none font-sans">
        <div className="max-w-7xl mx-auto w-full flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5 text-[9px] sm:text-[10px] font-bold tracking-wider">
          
          {/* Row 1: Theme selection */}
          <div className="flex items-center justify-between sm:justify-start gap-4">
            <span className="flex items-center gap-1 text-brand-light-gray/50 uppercase">
              <Palette className="w-3.5 h-3.5 text-brand-gold" /> Color Palette:
            </span>
            <div className="flex gap-1 bg-white/5 p-1 rounded-lg">
              <button
                onClick={() => setTheme("heritage")}
                className={cn(
                  "px-3 py-1 rounded transition-all duration-150 uppercase text-[8px]",
                  theme === "heritage"
                    ? "bg-red-600 text-white font-black shadow-sm"
                    : "text-gray-300 hover:text-white hover:bg-white/5"
                )}
              >
                1. Heritage Crimson
              </button>
              <button
                onClick={() => setTheme("royal")}
                className={cn(
                  "px-3 py-1 rounded transition-all duration-150 uppercase text-[8px]",
                  theme === "royal"
                    ? "bg-blue-600 text-white font-black shadow-sm"
                    : "text-gray-300 hover:text-white hover:bg-white/5"
                )}
              >
                2. Royal Silk
              </button>
              <button
                onClick={() => setTheme("oasis")}
                className={cn(
                  "px-3 py-1 rounded transition-all duration-150 uppercase text-[8px]",
                  theme === "oasis"
                    ? "bg-amber-500 text-black font-black shadow-sm"
                    : "text-gray-300 hover:text-white hover:bg-white/5"
                )}
              >
                3. Golden Oasis
              </button>
            </div>
          </div>

          {/* Row 2: Structure selection */}
          <div className="flex items-center justify-between sm:justify-start gap-4">
            <span className="flex items-center gap-1 text-brand-light-gray/50 uppercase">
              <Layers className="w-3.5 h-3.5 text-brand-gold" /> Layout Structure:
            </span>
            <div className="flex gap-1 bg-white/5 p-1 rounded-lg">
              <button
                onClick={() => setStructure("structure1")}
                className={cn(
                  "px-3 py-1 rounded transition-all duration-150 uppercase text-[8px]",
                  structure === "structure1"
                    ? "bg-white text-black font-black shadow-sm"
                    : "text-gray-300 hover:text-white hover:bg-white/5"
                )}
              >
                1. Editorial Landing
              </button>
              <button
                onClick={() => setStructure("structure2")}
                className={cn(
                  "px-3 py-1 rounded transition-all duration-150 uppercase text-[8px]",
                  structure === "structure2"
                    ? "bg-white text-black font-black shadow-sm"
                    : "text-gray-300 hover:text-white hover:bg-white/5"
                )}
              >
                2. Split Slide Deck
              </button>
              <button
                onClick={() => setStructure("structure3")}
                className={cn(
                  "px-3 py-1 rounded transition-all duration-150 uppercase text-[8px]",
                  structure === "structure3"
                    ? "bg-white text-black font-black shadow-sm"
                    : "text-gray-300 hover:text-white hover:bg-white/5"
                )}
              >
                3. Bento Dashboard
              </button>
            </div>
          </div>
          
        </div>
      </div>

      {/* Main Header (Pushed down by top switcher bar - top-16) */}
      <header
        className={cn(
          "fixed top-16 left-0 right-0 z-40 transition-all duration-300 w-full py-4",
          styles.headerBg
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
                  className={cn(
                    "text-xs font-bold tracking-wider uppercase transition-colors duration-200 relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left",
                    styles.fontClass,
                    styles.textClass,
                    styles.linkHover
                  )}
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
                className={cn(
                  "inline-flex items-center justify-center px-5 py-2.5 font-sans text-xs font-bold tracking-wider uppercase shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 group",
                  styles.btnClass
                )}
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
            className={cn(
              "fixed inset-0 top-[136px] z-30 md:hidden flex flex-col justify-between p-6 border-t border-brand-charcoal/5",
              theme === "royal" ? "bg-slate-50" : theme === "oasis" ? "bg-[#F5EFEB]" : "bg-brand-cream/98"
            )}
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
                  className={cn(
                    "flex items-center justify-between py-3 border-b border-brand-charcoal/5 text-sm font-bold tracking-widest uppercase text-brand-charcoal hover:text-brand-red transition-colors duration-200",
                    styles.fontClass
                  )}
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
                className={cn(
                  "flex items-center justify-center w-full py-4 font-sans text-sm font-bold tracking-widest uppercase shadow-md transition-all duration-300",
                  styles.btnClass
                )}
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
