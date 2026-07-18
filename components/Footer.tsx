"use client";

import React from "react";
import Link from "next/link";
import { HamediaLogo } from "./ui/HamediaLogo";
import { cn } from "@/lib/utils";
import {
  Mail,
  Phone,
  MapPin,
  Bot,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ArrowRight,
  Send,
  Music2 as Tiktok
} from "lucide-react";
import { useDesign } from "@/components/providers/DesignContext";

export default function Footer() {
  const { theme } = useDesign();

  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const getFooterStyles = () => {
    switch (theme) {
      case "royal":
        return {
          footerBg: "bg-[#0c1626] border-t border-slate-800",
          headingClass: "font-sans text-xs font-black tracking-wider text-[#10a5b2] uppercase mb-5",
          linkHover: "hover:text-[#10a5b2]",
          textClass: "text-slate-300",
          iconColor: "text-[#10a5b2]",
          disclaimerClass: "bg-white/5 border border-white/5 p-4 rounded-lg text-slate-300/80",
          disclaimerTitleColor: "text-[#10a5b2]",
          inputClass: "w-full bg-white/10 text-white placeholder-slate-400 px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[#10a5b2] text-xs border border-white/10 rounded-lg",
          buttonClass: "px-4 py-2 rounded-lg border border-[#10a5b2] bg-[#10a5b2] hover:bg-[#0d8a94] text-white transition-colors duration-200",
          dividerColor: "border-white/10",
          dotGridClass: "bg-dots-white-10 opacity-10",
          lightLogo: true,
          backToTopClass: "bg-white/10 hover:bg-white/15 text-white rounded-lg px-3 py-1.5",
        };
      case "oasis":
        return {
          footerBg: "bg-[#1e1e1e] border-t border-white/5",
          headingClass: "font-serif text-xs font-bold tracking-widest text-[#f2b03d] uppercase mb-5",
          linkHover: "hover:text-[#f2b03d]",
          textClass: "text-gray-300",
          iconColor: "text-[#f2b03d]",
          disclaimerClass: "glass-dark p-4 rounded-lg text-gray-300/80 border-white/5",
          disclaimerTitleColor: "text-[#f2b03d]",
          inputClass: "w-full glass text-white placeholder-gray-400 px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[#f2b03d] text-xs border border-white/10 rounded-lg",
          buttonClass: "px-4 py-2 rounded-lg bg-[#f2b03d] hover:bg-[#d69624] text-black font-black transition-colors duration-200 border-0 ml-1",
          dividerColor: "border-white/5",
          dotGridClass: "bg-dots-white-10 opacity-10",
          lightLogo: true,
          backToTopClass: "glass hover:bg-white/10 text-white rounded-lg border-white/10 px-3 py-1.5",
        };
      case "heritage":
      default:
        return {
          footerBg: "bg-[#1e1e1e] border-t border-white/5",
          headingClass: "font-serif text-xs font-bold tracking-wider text-[#e9595e] uppercase mb-5",
          linkHover: "hover:text-[#e9595e]",
          textClass: "text-gray-300",
          iconColor: "text-[#e9595e]",
          disclaimerClass: "bg-white/5 border border-white/5 p-4 rounded-lg text-gray-300/80",
          disclaimerTitleColor: "text-[#e9595e]",
          inputClass: "w-full bg-white/10 text-white placeholder-gray-400 px-4 py-2 focus:outline-none focus:ring-1 focus:ring-[#e9595e] text-xs border border-white/10 rounded-lg",
          buttonClass: "px-4 py-2 rounded-lg border border-[#e9595e] bg-[#e9595e] hover:bg-[#d64c51] text-white transition-colors duration-200",
          dividerColor: "border-white/10",
          dotGridClass: "bg-dots-white-10 opacity-15",
          lightLogo: true,
          backToTopClass: "bg-white/10 hover:bg-white/15 text-white rounded-lg px-3 py-1.5",
        };
    }
  };

  const styles = getFooterStyles();

  const services = [
    { name: "Remote Staffing", href: "#about" },
    { name: "Operational Support", href: "#about" },
    { name: "Technical Support", href: "#about" },
    { name: "Bookkeeping & Finance", href: "#about" },
    { name: "Video Monitoring", icon: Bot, href: "#about" },
    { name: "Omnichannel Support", href: "#about" },
  ];

  const company = [
    { name: "Home", href: "#" },
    { name: "About Us", href: "#about" },
    { name: "Flagship Farm", href: "#flagship" },
    { name: "Calculator", href: "#calculator" },
    { name: "Future Ventures", href: "#ventures" },
    { name: "Roadmap", href: "#roadmap" },
    { name: "FAQ", href: "#faq" },
  ];

  const resources = [
    { name: "AI operations integration", href: "#about" },
    { name: "Economic certificates", href: "#flagship" },
    { name: "Cattle tags tracking", href: "#flagship" },
    { name: "Investor support desk", href: "#contact" },
    { name: "Regulatory compliance", href: "#contact" },
  ];

  const legal = [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Cookie Policy", href: "#" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/HamediaAgency", name: "Facebook" },
    { icon: Twitter, href: "https://twitter.com/hamediaagency", name: "Twitter" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/hamedia-agency/", name: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/hamedia_outsourcing/", name: "Instagram" },
    { icon: Tiktok, href: "https://www.tiktok.com/@hamediaagency", name: "TikTok" },
  ];

  return (
    <footer className={cn("pt-16 pb-8 relative overflow-hidden transition-colors duration-500", styles.footerBg)}>
      {/* Background Dot Grid */}
      <div className={cn("absolute inset-0 pointer-events-none", styles.dotGridClass)} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-sans">
        {/* 5-Column Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Column 1: Company Info / Logo Pitch */}
          <div className="lg:col-span-2 flex flex-col items-start text-left">
            <Link href="#" className="inline-flex items-center space-x-3 mb-6">
              <HamediaLogo 
                variant="full" 
                light={styles.lightLogo} 
                iconClassName="h-16 w-auto" 
              />
            </Link>
            <p className={cn("text-xs mb-6 leading-relaxed max-w-sm", styles.textClass)}>
              Leading provider of AI-enhanced agricultural and livestock investments. We combine human management with cutting-edge remote tracking technology to secure passive return pipelines.
            </p>

            {/* Contact Details */}
            <div className="space-y-3 text-xs">
              <div className="flex items-center space-x-3">
                <Mail className={cn("w-4 h-4 flex-shrink-0", styles.iconColor)} />
                <a href="mailto:info@hamediainvestment.com" className={cn("hover:underline transition-colors break-all", styles.textClass)}>
                  info@hamediainvestment.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className={cn("w-4 h-4 flex-shrink-0", styles.iconColor)} />
                <a href="tel:+19492996263" className={cn("hover:underline transition-colors", styles.textClass)}>
                  +1 949-299-6263
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className={cn("w-4 h-4 flex-shrink-0 mt-0.5", styles.iconColor)} />
                <span className={cn("leading-tight", styles.textClass)}>
                  18001 Sky Park Circle #J, Irvine, CA 92614
                </span>
              </div>
            </div>
          </div>

          {/* Column 2: Services (Ops) */}
          <div className="text-left">
            <h4 className={styles.headingClass}>Services (Ops)</h4>
            <ul className="space-y-2">
              {services.map((ser, index) => (
                <li key={index}>
                  <a href={ser.href} className={cn("hover:underline transition-colors text-xs opacity-75", styles.textClass)}>
                    {ser.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className="text-left">
            <h4 className={styles.headingClass}>Company</h4>
            <ul className="space-y-2">
              {company.map((item, index) => (
                <li key={index}>
                  <a href={item.href} className={cn("hover:underline transition-colors text-xs opacity-75", styles.textClass)}>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Resources & Newsletter */}
          <div className="text-left">
            <h4 className={styles.headingClass}>Resources</h4>
            <ul className="space-y-2 mb-6">
              {resources.map((item, index) => (
                <li key={index}>
                  <a href={item.href} className={cn("hover:underline transition-colors text-xs opacity-75", styles.textClass)}>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>

            <h4 className={styles.headingClass}>AI Updates Newsletter</h4>
            <div className="flex space-x-1.5 mt-2">
              <input
                type="email"
                placeholder="Enter email"
                className={styles.inputClass}
              />
              <button className={styles.buttonClass} aria-label="Subscribe">
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        <hr className={cn("my-8", styles.dividerColor)} />

        {/* Disclaimer Section */}
        <div className={styles.disclaimerClass}>
          <h5 className={cn("font-serif text-xs font-bold uppercase mb-2", styles.disclaimerTitleColor)}>
            Investment Disclaimer
          </h5>
          <p className="font-sans text-[10px] leading-relaxed opacity-85 text-left">
            All investment operations structured by Hamedia Investments (including the Cow-Line Economic Participation Model for Arghandab Dairy Farm) carry inherent operational, biological, and market risks. Historical performance, initial herd sizes, and milk output calculations are illustrative and do not guarantee future returns. Economic Participation Certificates do not grant company equity, voting rights, or land deeds, but rather represent a direct contractual right to operational outcomes as specified in the Economic Participation Agreement.
          </p>
        </div>

        <hr className={cn("my-8", styles.dividerColor)} />

        {/* Bottom Footer bar */}
        <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0 text-xs opacity-75">
          {/* Copyright & Legal links */}
          <div className={cn("flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4", styles.textClass)}>
            <span>© {new Date().getFullYear()} Hamedia Investments. All rights reserved.</span>
            <div className="hidden sm:block">•</div>
            <div className="flex flex-wrap justify-center sm:justify-start gap-x-4 gap-y-1">
              {legal.map((item, index) => (
                <a key={index} href={item.href} className={cn("hover:underline transition-colors", styles.linkHover)}>
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-3">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.name}
                    className={cn(
                      "w-7 h-7 bg-white/5 rounded-lg flex items-center justify-center transition-colors border border-white/5",
                      theme === "royal" ? "hover:bg-[#10a5b2] hover:text-white" : theme === "oasis" ? "hover:bg-[#f2b03d] hover:text-black border-white/10" : "hover:bg-[#e9595e] hover:text-white"
                    )}
                  >
                    <IconComponent className="w-3.5 h-3.5" />
                  </a>
                );
              })}
            </div>
            <a
              href="#"
              onClick={scrollToTop}
              className={cn("flex items-center gap-1 text-[10px] uppercase font-bold transition-all duration-200", styles.backToTopClass)}
            >
              Back to Top
            </a>
          </div>
        </div>

        {/* AI Badge */}
        <div className="text-center mt-8 pt-6 border-t border-white/5 px-4">
          <div className="inline-flex items-center justify-center space-x-2 px-6 py-2 bg-gradient-to-r from-[#10a5b2]/10 via-[#f2b03d]/10 to-[#e9595e]/10 rounded-full border border-white/5 w-auto">
            <Bot className="w-4 h-4 text-[#f2b03d] animate-pulse" />
            <span className="text-xs text-gray-300">Powered by AI Technology</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
