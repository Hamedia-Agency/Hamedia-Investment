"use client";

import React from "react";
import { HamediaLogo } from "./ui/HamediaLogo";
import { Mail, Phone, MapPin, ArrowUp, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { useDesign } from "@/components/providers/DesignContext";

export default function Footer() {
  const { design } = useDesign();
  
  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Theme-specific styles for Footer
  const getFooterStyles = () => {
    switch (design) {
      case "royal":
        return {
          footerBg: "bg-brand-navy-dark border-t border-brand-navy/30",
          headingClass: "font-sans text-sm font-black tracking-wider text-brand-gold uppercase mb-5",
          linkHover: "hover:text-brand-gold",
          textClass: "text-slate-300",
          iconColor: "text-brand-blue",
          disclaimerClass: "bg-white/5 border border-white/5",
          disclaimerTitleColor: "text-brand-gold",
          inputClass: "w-full bg-white/10 text-white placeholder-slate-400 px-4 py-2.5 rounded-l-lg focus:outline-none focus:ring-1 focus:ring-brand-gold text-xs border border-white/10",
          buttonClass: "px-4 py-2.5 rounded-r-lg border border-brand-blue bg-brand-blue hover:bg-brand-blue-dark text-white transition-colors duration-200",
          dividerColor: "border-white/10",
          dotGridClass: "bg-dots-white-10 opacity-30",
          lightLogo: true,
          backToTopClass: "bg-white/10 hover:bg-white/15 text-white rounded",
        };
      case "oasis":
        return {
          footerBg: "bg-[#FAF6EE] border-t border-[#D4A218]/20",
          headingClass: "font-serif text-sm font-bold tracking-widest text-[#D4A218] uppercase mb-5",
          linkHover: "hover:text-[#D4A218]",
          textClass: "text-[#4E3E2F]/80",
          iconColor: "text-[#D4A218]",
          disclaimerClass: "bg-white border border-[#D4A218]/15 p-4 rounded-none text-[#4E3E2F]/70",
          disclaimerTitleColor: "text-[#D4A218]",
          inputClass: "w-full bg-white text-[#4E3E2F] placeholder-[#4E3E2F]/40 px-4 py-2.5 rounded-none focus:outline-none focus:ring-1 focus:ring-[#D4A218] text-xs border border-[#D4A218]/20",
          buttonClass: "px-4 py-2.5 rounded-none border border-[#D4A218] bg-[#D4A218] hover:bg-[#B5880F] text-white font-bold transition-colors duration-200",
          dividerColor: "border-[#D4A218]/20",
          dotGridClass: "bg-dots-charcoal-10 opacity-5",
          lightLogo: false,
          backToTopClass: "bg-[#D4A218]/10 hover:bg-[#D4A218]/20 text-[#4E3E2F] rounded-none border border-[#D4A218]/20",
        };
      case "heritage":
      default:
        return {
          footerBg: "bg-brand-charcoal border-t border-brand-charcoal/10",
          headingClass: "font-serif text-sm font-bold tracking-wider text-brand-gold uppercase mb-5",
          linkHover: "hover:text-brand-gold",
          textClass: "text-brand-light-gray/70",
          iconColor: "text-brand-red",
          disclaimerClass: "bg-white/5 border border-white/5",
          disclaimerTitleColor: "text-brand-gold",
          inputClass: "w-full bg-white/10 text-white placeholder-brand-light-gray/50 px-4 py-2.5 rounded-l-lg focus:outline-none focus:ring-1 focus:ring-brand-gold text-xs border border-white/10",
          buttonClass: "px-4 py-2.5 rounded-r-lg border border-brand-red bg-brand-red hover:bg-brand-red-dark text-white transition-colors duration-200",
          dividerColor: "border-white/10",
          dotGridClass: "bg-dots-white-10 opacity-30",
          lightLogo: true,
          backToTopClass: "bg-white/10 hover:bg-white/15 text-white rounded",
        };
    }
  };

  const styles = getFooterStyles();

  return (
    <footer className={cn("pt-16 pb-8 relative overflow-hidden transition-colors duration-500", styles.footerBg)}>
      {/* Background Dot Grid */}
      <div className={cn("absolute inset-0 pointer-events-none", styles.dotGridClass)} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Logo & Pitch */}
          <div className="md:col-span-1 flex flex-col items-start">
            <HamediaLogo 
              variant="full" 
              light={styles.lightLogo} 
              className="items-start" 
              iconClassName="w-18 h-18 md:w-20 md:h-20"
              titleClassName="text-xl md:text-2xl mt-3"
              subtitleClassName="text-[10px] md:text-[11px] mt-1"
              stripesClassName="w-20 md:w-24 mt-2.5"
            />
            <p className={cn("mt-4 font-sans text-xs leading-relaxed max-w-xs", styles.textClass)}>
              Pioneering asset-backed, sustainable development and livestock investments in Afghanistan. Connecting growth with passive economic participation.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col">
            <h4 className={styles.headingClass}>
              Quick Links
            </h4>
            <ul className={cn("flex flex-col gap-3 font-sans text-xs", styles.textClass)}>
              <li>
                <a href="#about" className={cn("transition-colors duration-200", styles.linkHover)}>
                  About Hamedia
                </a>
              </li>
              <li>
                <a href="#flagship" className={cn("transition-colors duration-200", styles.linkHover)}>
                  Arghandab Dairy Farm
                </a>
              </li>
              <li>
                <a href="#ventures" className={cn("transition-colors duration-200", styles.linkHover)}>
                  Future Ventures
                </a>
              </li>
              <li>
                <a href="#model" className={cn("transition-colors duration-200", styles.linkHover)}>
                  Investment Model
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col">
            <h4 className={styles.headingClass}>
              Contact Details
            </h4>
            <ul className={cn("flex flex-col gap-4 font-sans text-xs", styles.textClass)}>
              <li className="flex items-start gap-3">
                <MapPin className={cn("w-4 h-4 flex-shrink-0 mt-0.5", styles.iconColor)} />
                <span>Kandahar & Kabul, Afghanistan</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className={cn("w-4 h-4 flex-shrink-0", styles.iconColor)} />
                <a href="tel:+19492996263" className={cn("transition-colors", styles.linkHover)}>
                  +1-949-299-6263
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className={cn("w-4 h-4 flex-shrink-0", styles.iconColor)} />
                <a href="mailto:info@hamediainvestment.com" className={cn("transition-colors", styles.linkHover)}>
                  info@hamediainvestment.com
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div className="flex flex-col">
            <h4 className={styles.headingClass}>
              Investor Relations
            </h4>
            <p className={cn("font-sans text-xs mb-4 leading-relaxed", styles.textClass)}>
              Subscribe to receive updates on Arghandab Dairy Farm operations and upcoming projects.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex items-center">
              <input
                type="email"
                placeholder="Email Address"
                className={styles.inputClass}
                required
              />
              <button
                type="submit"
                className={styles.buttonClass}
                aria-label="Subscribe"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        </div>

        <hr className={cn("my-8", styles.dividerColor)} />

        {/* Disclaimer Section */}
        <div className={styles.disclaimerClass}>
          <h5 className={cn("font-serif text-xs font-bold uppercase mb-2", styles.disclaimerTitleColor)}>
            Investment Disclaimer
          </h5>
          <p className="font-sans text-[10px] leading-relaxed opacity-85">
            All investment operations structured by Hamedia Investments (including the Cow-Line Economic Participation Model for Arghandab Dairy Farm) carry inherent operational, biological, and market risks. Historical performance, initial herd sizes, and milk output calculations are illustrative and do not guarantee future returns. Economic Participation Certificates do not grant company equity, voting rights, or land deeds, but rather represent a direct contractual right to operational outcomes as specified in the Economic Participation Agreement.
          </p>
        </div>

        {/* Bottom bar */}
        <div className={cn("flex flex-col sm:flex-row items-center justify-between gap-4 font-sans text-[10px] opacity-60", styles.textClass)}>
          <span>
            &copy; {new Date().getFullYear()} Hamedia Investments. All Rights Reserved.
          </span>
          <div className="flex gap-4">
            <a href="#" className={styles.linkHover}>Privacy Policy</a>
            <a href="#" className={styles.linkHover}>Terms of Service</a>
          </div>
          <a
            href="#"
            onClick={scrollToTop}
            className={cn("flex items-center gap-1.5 px-3 py-1.5 transition-colors duration-200", styles.backToTopClass)}
          >
            Back to Top
            <ArrowUp className="w-3 h-3" />
          </a>
        </div>
      </div>
    </footer>
  );
}
