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
                href="#flagship"
                onClick={(e) => handleLinkClick(e, "#flagship")}
                className={cn("text-[13px] font-medium transition-colors duration-200 font-sans", navItemColorClass)}
              >
                Flagship Farm
              </a>

              {/* Services Dropdown */}
              <div className="relative group py-4">
                <button
                  className={cn("text-[13px] font-medium transition-colors duration-200 flex items-center gap-1 focus:outline-none font-sans", navItemColorClass)}
                >
                  <span>Services</span>
                  <ChevronDown className="w-3.5 h-3.5 opacity-60" />
                </button>
                {/* Dropdown Card (hamedia-revamp style) */}
                <div
                  className="absolute top-full left-1/2 -translate-x-1/2 w-[800px] rounded-2xl shadow-2xl p-6 hidden group-hover:block z-50 border border-slate-200 bg-white text-slate-900 text-left font-sans transition-all duration-300"
                >
                  <div className="mb-4 pb-3 border-b border-slate-200">
                    <span className="text-[9px] uppercase font-black tracking-widest text-[#10a5b2] block mb-1">Operational Integration</span>
                    <p className="text-[11px] leading-relaxed text-slate-600">
                      Hamedia Investment utilizes Hamedia Agency's AI-enhanced remote operations to automate logistics, supply, accounting, and sales across our portfolio.
                    </p>
                  </div>
                  <div className="grid grid-cols-3 gap-6">
                    {servicesCategories.map((cat) => {
                      const Icon = cat.icon;
                      return (
                        <div key={cat.name} className="space-y-3">
                          <div className="flex items-center gap-2 pb-1.5 border-b border-slate-200">
                            <Icon className="w-4 h-4 text-[#10a5b2]" />
                            <h5 className="font-bold text-xs uppercase tracking-wider text-slate-900">{cat.name}</h5>
                          </div>
                          <div className="flex flex-col gap-1.5">
                            {cat.services.map((ser) => {
                              const SerIcon = ser.icon;
                              return (
                                <div key={ser.name} className="flex items-center gap-2 py-1 px-2 text-[11px] text-slate-700 hover:text-[#10a5b2] hover:bg-slate-50 rounded-lg transition-colors">
                                  <SerIcon className="w-3.5 h-3.5 text-[#10a5b2] flex-shrink-0" />
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
                  className={cn("text-[13px] font-medium transition-colors duration-200 flex items-center gap-1 focus:outline-none font-sans", navItemColorClass)}
                >
                  <span>Industries</span>
                  <ChevronDown className="w-3.5 h-3.5 opacity-60" />
                </button>
                {/* Dropdown Card (hamedia-revamp style) */}
                <div
                  className="absolute top-full left-1/2 -translate-x-1/2 w-[800px] rounded-2xl shadow-2xl p-6 hidden group-hover:block z-50 border border-slate-200 bg-white text-slate-900 text-left font-sans transition-all duration-300"
                >
                  <div className="mb-4 pb-3 border-b border-slate-200">
                    <span className="text-[9px] uppercase font-black tracking-widest text-[#10a5b2] block mb-1">Target Sectors & Verticals</span>
                    <p className="text-[11px] leading-relaxed text-slate-600">
                      We deploy capital and manage physical infrastructure across primary sectors backed entirely by our remote staffing operations.
                    </p>
                  </div>
                  <div className="grid grid-cols-4 gap-2.5">
                    {industriesData.map((ind) => {
                      const Icon = ind.icon;
                      return (
                        <div
                          key={ind.name}
                          className="flex items-center gap-2.5 p-2 rounded-lg border border-slate-100 bg-slate-50 hover:bg-[#10a5b2]/10 hover:border-[#10a5b2]/30 transition-colors duration-150"
                        >
                          <div className="w-7 h-7 flex items-center justify-center rounded border border-slate-200 bg-white text-[#10a5b2] flex-shrink-0">
                            <Icon className="w-3.5 h-3.5" />
                          </div>
                          <span className="text-[9px] font-bold tracking-wider uppercase truncate text-slate-800">{ind.name}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              <a
                href="#flagship"
                onClick={(e) => handleLinkClick(e, "#flagship")}
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
                href="#flagship"
                onClick={(e) => handleLinkClick(e, "#flagship")}
                className="py-3 border-b border-slate-200 dark:border-white/10 text-xs font-bold uppercase tracking-wider flex items-center justify-between"
              >
                <span>Flagship Farm</span>
                <ChevronRight className="w-4 h-4 opacity-50" />
              </a>

              {/* Mobile Services Drawer Toggle */}
              <div className="border-b border-slate-200 dark:border-white/10 py-1">
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
                            <span key={ser.name} className="block text-[10px] opacity-75">{ser.name}</span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Industries Drawer Toggle */}
              <div className="border-b border-slate-200 dark:border-white/10 py-1">
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
                      <span key={ind.name} className="text-[10px] border border-slate-200 dark:border-white/10 p-1 rounded uppercase tracking-wider text-center truncate">{ind.name}</span>
                    ))}
                  </div>
                )}
              </div>

              <a
                href="#flagship"
                onClick={(e) => handleLinkClick(e, "#flagship")}
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
