"use client";

import React, { useState, useEffect } from "react";
import { HamediaLogo } from "./ui/HamediaLogo";
import { cn } from "@/lib/utils";
import {
  Menu,
  X,
  ArrowRight,
  ChevronRight,
  Palette,
  Layers,
  ChevronDown,
  Users,
  Phone,
  UserCheck,
  Settings,
  Headphones,
  Video,
  Calculator,
  Clapperboard,
  FileText,
  Camera,
  Award,
  Globe,
  TrendingUp,
  Edit,
  Search,
  MousePointerClick,
  Share2,
  MessageSquare,
  Mail,
  Bot,
  Wheat,
  Factory,
  Zap,
  Truck,
  HardHat,
  Store,
  Brain,
  Home as HomeIcon,
  Compass,
  ShieldCheck,
  DollarSign,
  Monitor,
  UtensilsCrossed
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useDesign } from "@/components/providers/DesignContext";

export default function Header() {
  const { theme, setTheme, structure, setStructure } = useDesign();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isMobileIndustriesOpen, setIsMobileIndustriesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const headerOffset = 150; // Accounts for header + double-row top bar
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const getHeaderStyles = () => {
    switch (theme) {
      case "royal":
        return {
          fontClass: "font-sans",
          headerBg: isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-100" : "bg-transparent",
          linkHover: "hover:text-[#10a5b2] after:bg-[#10a5b2]",
          textClass: "text-slate-800",
          btnClass: "bg-[#10a5b2] hover:bg-[#0d8a94] text-white rounded-lg shadow-sm",
          lightLogo: false,
        };
      case "oasis":
        return {
          fontClass: "font-sans",
          headerBg: isScrolled ? "bg-[#1e1e1e]/85 backdrop-blur-md border-b border-white/5 shadow-lg" : "bg-transparent",
          linkHover: "hover:text-[#f2b03d] after:bg-[#f2b03d]",
          textClass: "text-white/80",
          btnClass: "bg-[#f2b03d] hover:bg-[#d69624] text-black font-black border-0 rounded-lg shadow-sm",
          lightLogo: true,
        };
      case "heritage":
      default:
        return {
          fontClass: "font-sans",
          headerBg: isScrolled ? "bg-white/90 backdrop-blur-md border-b border-brand-cream-revamp/20 shadow-sm" : "bg-transparent",
          linkHover: "hover:text-[#e9595e] after:bg-[#e9595e]",
          textClass: "text-slate-800",
          btnClass: "bg-[#e9595e] hover:bg-[#d64c51] text-white rounded-lg shadow-sm",
          lightLogo: false,
        };
    }
  };

  const styles = getHeaderStyles();
  const isDark = theme === "oasis";

  const servicesCategories = [
    {
      name: "Remote Staffing",
      icon: Users,
      services: [
        { name: "Telemarketing & Sales", icon: Phone },
        { name: "Virtual Assistant", icon: UserCheck },
        { name: "Operational Support", icon: Settings },
        { name: "Technical Support", icon: Headphones },
        { name: "Video Monitoring", icon: Video },
        { name: "Bookkeeping & Finance", icon: Calculator },
      ],
    },
    {
      name: "Creative Services",
      icon: Palette,
      services: [
        { name: "Graphic Design", icon: Edit },
        { name: "Video Production", icon: Clapperboard },
        { name: "Copywriting", icon: FileText },
        { name: "Photography", icon: Camera },
        { name: "Branding", icon: Award },
        { name: "Web Design", icon: Globe },
      ],
    },
    {
      name: "Digital Services",
      icon: Monitor,
      services: [
        { name: "SEO Optimization", icon: Search },
        { name: "PPC Advertising", icon: MousePointerClick },
        { name: "Social Media Management", icon: Share2 },
        { name: "Omnichannel Support", icon: MessageSquare },
        { name: "Email Marketing", icon: Mail },
      ],
    },
  ];

  const industriesData = [
    { name: "Entertainment", icon: Clapperboard },
    { name: "Food Industry", icon: UtensilsCrossed },
    { name: "Agriculture", icon: Wheat },
    { name: "Manufacturing", icon: Factory },
    { name: "Renewable Energy", icon: Zap },
    { name: "Transportation", icon: Truck },
    { name: "Construction", icon: HardHat },
    { name: "Technology", icon: Monitor },
    { name: "Retail", icon: Store },
    { name: "Artificial Intelligence", icon: Brain },
    { name: "Real Estate", icon: HomeIcon },
    { name: "Architecture", icon: Compass },
    { name: "Security Industry", icon: ShieldCheck },
    { name: "Mortgage Industry", icon: DollarSign },
    { name: "Accounting & Finance", icon: Calculator },
    { name: "Technical Support", icon: Headphones },
  ];

  return (
    <>
      {/* Design customizer top bar */}
      <div className="fixed top-0 left-0 right-0 h-16 bg-[#121214] text-white flex items-center justify-between px-6 z-50 border-b border-white/5 font-sans">
        <div className="flex items-center gap-2">
          <Bot className="w-4 h-4 text-[#f2b03d] animate-pulse" />
          <span className="text-[10px] font-bold uppercase tracking-widest text-gray-300">Investment Customizer</span>
        </div>
        <div className="flex items-center gap-6">
          {/* Theme customizer */}
          <div className="flex items-center gap-2">
            <span className="text-[8px] text-gray-400 font-bold uppercase tracking-wider flex items-center gap-1">
              Palette:
            </span>
            <div className="flex gap-1 bg-white/5 p-1 rounded-lg">
              <button
                onClick={() => setTheme("heritage")}
                className={cn(
                  "px-2.5 py-1 rounded transition-all duration-150 uppercase text-[8px]",
                  theme === "heritage"
                    ? "bg-[#e9595e] text-white font-black shadow-sm"
                    : "text-gray-300 hover:text-white hover:bg-white/5"
                )}
              >
                1. Coral
              </button>
              <button
                onClick={() => setTheme("royal")}
                className={cn(
                  "px-2.5 py-1 rounded transition-all duration-150 uppercase text-[8px]",
                  theme === "royal"
                    ? "bg-[#10a5b2] text-white font-black shadow-sm"
                    : "text-gray-300 hover:text-white hover:bg-white/5"
                )}
              >
                2. Teal
              </button>
              <button
                onClick={() => setTheme("oasis")}
                className={cn(
                  "px-2.5 py-1 rounded transition-all duration-150 uppercase text-[8px]",
                  theme === "oasis"
                    ? "bg-[#f2b03d] text-black font-black shadow-sm"
                    : "text-gray-300 hover:text-white hover:bg-white/5"
                )}
              >
                3. Glass
              </button>
            </div>
          </div>

          {/* Structure customizer */}
          <div className="flex items-center gap-2">
            <span className="text-[8px] text-gray-400 font-bold uppercase tracking-wider flex items-center gap-1">
              Structure:
            </span>
            <div className="flex gap-1 bg-white/5 p-1 rounded-lg">
              <button
                onClick={() => setStructure("structure1")}
                className={cn(
                  "px-2.5 py-1 rounded transition-all duration-150 uppercase text-[8px]",
                  structure === "structure1"
                    ? "bg-white text-black font-black shadow-sm"
                    : "text-gray-300 hover:text-white hover:bg-white/5"
                )}
              >
                1. Editorial
              </button>
              <button
                onClick={() => setStructure("structure2")}
                className={cn(
                  "px-2.5 py-1 rounded transition-all duration-150 uppercase text-[8px]",
                  structure === "structure2"
                    ? "bg-white text-black font-black shadow-sm"
                    : "text-gray-300 hover:text-white hover:bg-white/5"
                )}
              >
                2. Slides
              </button>
              <button
                onClick={() => setStructure("structure3")}
                className={cn(
                  "px-2.5 py-1 rounded transition-all duration-150 uppercase text-[8px]",
                  structure === "structure3"
                    ? "bg-white text-black font-black shadow-sm"
                    : "text-gray-300 hover:text-white hover:bg-white/5"
                )}
              >
                3. Bento
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header (Pushed down by top customizer bar - top-16) */}
      <header
        className={cn(
          "fixed top-16 left-0 right-0 z-40 transition-all duration-300 w-full h-24 flex items-center",
          styles.headerBg
        )}
      >
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
                iconClassName="h-14 w-auto" 
              />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-10 lg:gap-12">
              <a
                href="#"
                onClick={(e) => handleLinkClick(e, "#")}
                className={cn(
                  "text-[13px] font-medium transition-colors duration-200 hover:text-[#10a5b2]",
                  styles.fontClass,
                  styles.textClass
                )}
              >
                Home
              </a>
              <a
                href="#about"
                onClick={(e) => handleLinkClick(e, "#about")}
                className={cn(
                  "text-[13px] font-medium transition-colors duration-200 hover:text-[#10a5b2]",
                  styles.fontClass,
                  styles.textClass
                )}
              >
                About Us
              </a>
              <a
                href="#flagship"
                onClick={(e) => handleLinkClick(e, "#flagship")}
                className={cn(
                  "text-[13px] font-medium transition-colors duration-200 hover:text-[#10a5b2]",
                  styles.fontClass,
                  styles.textClass
                )}
              >
                Flagship Farm
              </a>

              {/* Services Dropdown */}
              <div className="relative group py-4">
                <button
                  className={cn(
                    "text-[13px] font-medium transition-colors duration-200 flex items-center gap-1 focus:outline-none hover:text-[#10a5b2]",
                    styles.textClass
                  )}
                >
                  <span>Services</span>
                  <ChevronDown className="w-3.5 h-3.5 opacity-60" />
                </button>
                {/* Dropdown Card */}
                <div
                  className={cn(
                    "absolute top-full left-1/2 -translate-x-1/2 w-[800px] rounded-xl shadow-2xl p-6 hidden group-hover:block z-50 border transition-all duration-300 text-left font-sans",
                    isDark ? "bg-[#1c1c1e] border-white/10" : "bg-white border-slate-200"
                  )}
                >
                  <div className="mb-4 pb-3 border-b border-slate-100 dark:border-white/5">
                    <span className="text-[9px] uppercase font-black tracking-widest text-[#10a5b2] block mb-1">Operational Integration</span>
                    <p className={cn("text-[11px] leading-relaxed", isDark ? "text-gray-400" : "text-slate-500")}>
                      Hamedia Investment utilizes Hamedia Agency's AI-enhanced remote operations to automate logistics, supply, accounting, and sales across our portfolio.
                    </p>
                  </div>
                  <div className="grid grid-cols-3 gap-6">
                    {servicesCategories.map((cat) => {
                      const Icon = cat.icon;
                      return (
                        <div key={cat.name} className="space-y-3">
                          <div className="flex items-center gap-2 pb-1.5 border-b border-slate-100 dark:border-white/5">
                            <Icon className="w-4 h-4 text-[#10a5b2]" />
                            <h5 className={cn("font-bold text-xs uppercase tracking-wider", isDark ? "text-white" : "text-slate-900")}>{cat.name}</h5>
                          </div>
                          <div className="flex flex-col gap-1.5">
                            {cat.services.map((ser) => {
                              const SerIcon = ser.icon;
                              return (
                                <div key={ser.name} className="flex items-center gap-2 py-0.5 text-[11px] text-slate-500 dark:text-gray-400">
                                  <SerIcon className="w-3.5 h-3.5 text-[#10a5b2] opacity-75 flex-shrink-0" />
                                  <span className="truncate">{ser.name}</span>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Industries Dropdown */}
              <div className="relative group py-4">
                <button
                  className={cn(
                    "text-[13px] font-medium transition-colors duration-200 flex items-center gap-1 focus:outline-none hover:text-[#10a5b2]",
                    styles.textClass
                  )}
                >
                  <span>Industries</span>
                  <ChevronDown className="w-3.5 h-3.5 opacity-60" />
                </button>
                {/* Dropdown Card */}
                <div
                  className={cn(
                    "absolute top-full left-1/2 -translate-x-1/2 w-[800px] rounded-xl shadow-2xl p-6 hidden group-hover:block z-50 border transition-all duration-300 text-left font-sans",
                    isDark ? "bg-[#1c1c1e] border-white/10" : "bg-white border-slate-200"
                  )}
                >
                  <div className="mb-4 pb-3 border-b border-slate-100 dark:border-white/5">
                    <span className="text-[9px] uppercase font-black tracking-widest text-[#f2b03d] block mb-1">Target Sectors & Verticals</span>
                    <p className={cn("text-[11px] leading-relaxed", isDark ? "text-gray-400" : "text-slate-500")}>
                      We deploy capital and manage physical infrastructure across primary sectors backed entirely by our remote staffing operations.
                    </p>
                  </div>
                  <div className="grid grid-cols-4 gap-3">
                    {industriesData.map((ind) => {
                      const Icon = ind.icon;
                      return (
                        <div
                          key={ind.name}
                          className={cn(
                            "flex items-center gap-2.5 p-2 rounded-lg border transition-colors duration-150",
                            isDark
                              ? "bg-white/5 border-white/5 hover:border-white/10"
                              : "bg-slate-50 border-slate-100 hover:border-slate-200"
                          )}
                        >
                          <div className={cn("w-7 h-7 flex items-center justify-center rounded border text-[#f2b03d] flex-shrink-0",
                            isDark ? "bg-white/5 border-white/5" : "bg-white border-slate-100"
                          )}>
                            <Icon className="w-3.5 h-3.5" />
                          </div>
                          <span className={cn("text-[9px] font-bold tracking-wider uppercase truncate",
                            isDark ? "text-gray-300" : "text-slate-700"
                          )}>{ind.name}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              <a
                href="#calculator"
                onClick={(e) => handleLinkClick(e, "#calculator")}
                className={cn(
                  "text-[13px] font-medium transition-colors duration-200 hover:text-[#10a5b2]",
                  styles.fontClass,
                  styles.textClass
                )}
              >
                Calculator
              </a>
              <a
                href="#faq"
                onClick={(e) => handleLinkClick(e, "#faq")}
                className={cn(
                  "text-[13px] font-medium transition-colors duration-200 hover:text-[#10a5b2]",
                  styles.fontClass,
                  styles.textClass
                )}
              >
                FAQ
              </a>
            </nav>

            {/* CTA Actions */}
            <div className="hidden md:flex items-center gap-6">
              <a
                href="#calculator"
                onClick={(e) => handleLinkClick(e, "#calculator")}
                className={cn(
                  "text-[13px] font-semibold transition-colors duration-200 hover:text-[#10a5b2] focus:outline-none",
                  styles.fontClass,
                  styles.textClass
                )}
              >
                Calculator
              </a>
              <a
                href="#contact"
                onClick={(e) => handleLinkClick(e, "#contact")}
                className={cn(
                  "inline-flex items-center justify-center px-4 py-2.5 font-sans text-xs font-semibold rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 group",
                  styles.btnClass
                )}
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
                isDark ? "text-white hover:bg-white/5" : "text-slate-800 hover:bg-slate-100"
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
              "fixed inset-0 top-[152px] z-30 md:hidden flex flex-col justify-between p-6 border-t font-sans overflow-y-auto pb-24",
              isDark ? "bg-[#121214] border-white/5 text-white" : "bg-[#FAF7F2] border-brand-cream-revamp/30 text-slate-800"
            )}
          >
            <div className="flex flex-col gap-4 mt-2">
              <a
                href="#"
                onClick={(e) => handleLinkClick(e, "#")}
                className="py-3 border-b border-slate-100 dark:border-white/5 text-xs font-bold uppercase tracking-wider flex items-center justify-between"
              >
                <span>Home</span>
                <ChevronRight className="w-4 h-4 opacity-50" />
              </a>
              <a
                href="#about"
                onClick={(e) => handleLinkClick(e, "#about")}
                className="py-3 border-b border-slate-100 dark:border-white/5 text-xs font-bold uppercase tracking-wider flex items-center justify-between"
              >
                <span>About Us</span>
                <ChevronRight className="w-4 h-4 opacity-50" />
              </a>
              <a
                href="#flagship"
                onClick={(e) => handleLinkClick(e, "#flagship")}
                className="py-3 border-b border-slate-100 dark:border-white/5 text-xs font-bold uppercase tracking-wider flex items-center justify-between"
              >
                <span>Flagship Farm</span>
                <ChevronRight className="w-4 h-4 opacity-50" />
              </a>

              {/* Mobile Services Drawer Toggle */}
              <div className="border-b border-slate-100 dark:border-white/5 py-1">
                <button
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                  className="w-full flex items-center justify-between py-2 text-xs font-bold uppercase tracking-wider text-left"
                >
                  <span>Services (Ops)</span>
                  <ChevronDown className={cn("w-4 h-4 transition-transform duration-200", isMobileServicesOpen && "rotate-180")} />
                </button>
                {isMobileServicesOpen && (
                  <div className="pl-4 py-2 space-y-3">
                    {servicesCategories.map((cat) => (
                      <div key={cat.name} className="space-y-1">
                        <span className="text-[9px] font-black text-[#10a5b2] tracking-wider uppercase block">{cat.name}</span>
                        <div className="pl-2 space-y-1">
                          {cat.services.map((ser) => (
                            <span key={ser.name} className="block text-[10px] text-slate-500 dark:text-gray-400">{ser.name}</span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Industries Drawer Toggle */}
              <div className="border-b border-slate-100 dark:border-white/5 py-1">
                <button
                  onClick={() => setIsMobileIndustriesOpen(!isMobileIndustriesOpen)}
                  className="w-full flex items-center justify-between py-2 text-xs font-bold uppercase tracking-wider text-left"
                >
                  <span>Industries</span>
                  <ChevronDown className={cn("w-4 h-4 transition-transform duration-200", isMobileIndustriesOpen && "rotate-180")} />
                </button>
                {isMobileIndustriesOpen && (
                  <div className="pl-4 py-2 grid grid-cols-2 gap-2">
                    {industriesData.map((ind) => (
                      <span key={ind.name} className="text-[10px] text-slate-500 dark:text-gray-400 border border-slate-100 dark:border-white/5 p-1 rounded uppercase tracking-wider text-center truncate">{ind.name}</span>
                    ))}
                  </div>
                )}
              </div>

              <a
                href="#calculator"
                onClick={(e) => handleLinkClick(e, "#calculator")}
                className="py-3 border-b border-slate-100 dark:border-white/5 text-xs font-bold uppercase tracking-wider flex items-center justify-between"
              >
                <span>Calculator</span>
                <ChevronRight className="w-4 h-4 opacity-50" />
              </a>
              <a
                href="#faq"
                onClick={(e) => handleLinkClick(e, "#faq")}
                className="py-3 border-b border-slate-100 dark:border-white/5 text-xs font-bold uppercase tracking-wider flex items-center justify-between"
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
                className={cn(
                  "flex items-center justify-center w-full py-4 text-xs font-bold tracking-widest uppercase shadow-md transition-all duration-300",
                  styles.btnClass
                )}
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
