"use client";

import React, { useState, useEffect } from "react";
import { HamediaLogo } from "./ui/HamediaLogo";
import { cn } from "@/lib/utils";
import {
  Menu,
  X,
  ArrowRight,
  ChevronRight,
  ExternalLink
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useDesign } from "@/components/providers/DesignContext";

export default function Header() {
  const { theme, setTheme, structure, setStructure } = useDesign();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // IntersectionObserver to sense underlying section background (Light vs Dark)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const isDark =
              el.classList.contains("bg-[#092227]") ||
              el.classList.contains("bg-[#0b2d34]") ||
              el.classList.contains("bg-[#071d22]") ||
              el.classList.contains("bg-slate-900") ||
              el.classList.contains("bg-black") ||
              el.className.includes("bg-[#092227]") ||
              el.className.includes("bg-[#0b2d34]");
            setCurrentTheme(isDark ? "dark" : "light");
          }
        });
      },
      {
        rootMargin: "-10% 0px -80% 0px",
        threshold: 0,
      }
    );

    const sections = document.querySelectorAll("section");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("http")) return; // Allow external links to behave normally
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const headerOffset = 90;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const isDarkTheme = currentTheme === "dark";

  const navItemColorClass = isDarkTheme
    ? "text-white hover:text-[#10a5b2]"
    : "text-slate-900 hover:text-[#10a5b2]";

  const headerBgClass = isScrolled
    ? isDarkTheme
      ? "bg-[#092227]/90 backdrop-blur-md border-b border-white/10 shadow-xl text-white"
      : "bg-white/85 backdrop-blur-md border-b border-slate-200/80 shadow-md text-slate-900"
    : isDarkTheme
      ? "bg-transparent border-b border-transparent text-white"
      : "bg-white/70 backdrop-blur-md border-b border-slate-200/60 shadow-sm text-slate-900";

  return (
    <>
      {/* Main Header */}
      <header className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full h-20 flex items-center", headerBgClass)}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#"
              onClick={(e) => handleLinkClick(e, "#")}
              className="flex items-center focus:outline-none"
            >
              <HamediaLogo 
                variant="icon" 
                iconClassName="h-12 w-auto" 
              />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8 lg:gap-10">
              <a
                href="#"
                onClick={(e) => handleLinkClick(e, "#")}
                className={cn("text-[13px] font-medium transition-colors duration-200 font-sans", navItemColorClass)}
              >
                Home
              </a>
              <a
                href="#about"
                onClick={(e) => handleLinkClick(e, "#about")}
                className={cn("text-[13px] font-medium transition-colors duration-200 font-sans", navItemColorClass)}
              >
                About Us
              </a>
              <a
                href="https://arghandabdairy.com"
                target="_blank"
                rel="noopener noreferrer"
                className={cn("text-[13px] font-medium transition-colors duration-200 font-sans flex items-center gap-1.5", navItemColorClass)}
              >
                Flagship Farm
                <ExternalLink className="w-3.5 h-3.5 opacity-70" />
              </a>
              <a
                href="#ventures"
                onClick={(e) => handleLinkClick(e, "#ventures")}
                className={cn("text-[13px] font-medium transition-colors duration-200 font-sans", navItemColorClass)}
              >
                Ventures
              </a>
              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, "#contact")}
                className={cn("text-[13px] font-medium transition-colors duration-200 font-sans", navItemColorClass)}
              >
                Calculator
              </a>
              <a
                href="#faq"
                onClick={(e) => handleLinkClick(e, "#faq")}
                className={cn("text-[13px] font-medium transition-colors duration-200 font-sans", navItemColorClass)}
              >
                FAQ
              </a>
            </nav>

            {/* CTA Actions */}
            <div className="hidden md:flex items-center gap-6">
              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, "#contact")}
                className="inline-flex items-center justify-center px-5 py-2.5 font-sans text-xs font-bold rounded-xl shadow-md transition-all duration-300 hover:-translate-y-0.5 group bg-[#10a5b2] hover:bg-[#0c8a94] text-white"
              >
                Apply to Invest
                <ArrowRight className="ml-1.5 w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn(
                "md:hidden p-2 rounded-lg focus:outline-none transition-colors duration-200",
                isDarkTheme ? "text-white hover:bg-white/5" : "text-slate-800 hover:bg-slate-100"
              )}
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
              "fixed inset-0 top-[80px] z-40 md:hidden flex flex-col justify-between p-6 border-t font-sans overflow-y-auto pb-24 shadow-2xl",
              isDarkTheme ? "bg-[#092227] border-white/10 text-white" : "bg-white border-slate-200 text-slate-900"
            )}
          >
            <div className="flex flex-col gap-4 mt-2">
              <a
                href="#"
                onClick={(e) => handleLinkClick(e, "#")}
                className="py-3 border-b border-slate-200 dark:border-white/10 text-xs font-bold uppercase tracking-wider flex items-center justify-between"
              >
                <span>Home</span>
                <ChevronRight className="w-4 h-4 opacity-50" />
              </a>
              <a
                href="#about"
                onClick={(e) => handleLinkClick(e, "#about")}
                className="py-3 border-b border-slate-200 dark:border-white/10 text-xs font-bold uppercase tracking-wider flex items-center justify-between"
              >
                <span>About Us</span>
                <ChevronRight className="w-4 h-4 opacity-50" />
              </a>
              <a
                href="https://arghandabdairy.com"
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 border-b border-slate-200 dark:border-white/10 text-xs font-bold uppercase tracking-wider flex items-center justify-between"
              >
                <span className="flex items-center gap-2">
                  Flagship Farm <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                </span>
                <ChevronRight className="w-4 h-4 opacity-50" />
              </a>
              <a
                href="#ventures"
                onClick={(e) => handleLinkClick(e, "#ventures")}
                className="py-3 border-b border-slate-200 dark:border-white/10 text-xs font-bold uppercase tracking-wider flex items-center justify-between"
              >
                <span>Ventures</span>
                <ChevronRight className="w-4 h-4 opacity-50" />
              </a>
              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, "#contact")}
                className="py-3 border-b border-slate-200 dark:border-white/10 text-xs font-bold uppercase tracking-wider flex items-center justify-between"
              >
                <span>Calculator</span>
                <ChevronRight className="w-4 h-4 opacity-50" />
              </a>
              <a
                href="#faq"
                onClick={(e) => handleLinkClick(e, "#faq")}
                className="py-3 border-b border-slate-200 dark:border-white/10 text-xs font-bold uppercase tracking-wider flex items-center justify-between"
              >
                <span>FAQ</span>
                <ChevronRight className="w-4 h-4 opacity-50" />
              </a>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 space-y-3"
            >
              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, "#contact")}
                className="flex items-center justify-center w-full py-4 text-xs font-bold tracking-widest uppercase shadow-md transition-all duration-300 bg-[#10a5b2] hover:bg-[#0c8a94] text-white rounded-xl"
              >
                Apply to Invest
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
