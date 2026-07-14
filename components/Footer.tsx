"use client";

import React from "react";
import { HamediaLogo } from "./ui/HamediaLogo";
import { Mail, Phone, MapPin, ArrowUp, Send } from "lucide-react";

export default function Footer() {
  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-brand-charcoal text-white pt-16 pb-8 relative overflow-hidden">
      {/* Background Dot Grid */}
      <div className="absolute inset-0 bg-dots-white-10 opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo & Pitch */}
          <div className="md:col-span-1 flex flex-col items-start">
            <HamediaLogo variant="full" light={true} className="items-start" iconClassName="w-14 h-14" />
            <p className="mt-4 font-sans text-xs text-brand-light-gray/70 leading-relaxed max-w-xs">
              Pioneering asset-backed, sustainable development and livestock investments in Afghanistan. Connecting growth with passive economic participation.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col">
            <h4 className="font-serif text-sm font-bold tracking-wider text-brand-gold uppercase mb-5">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3 font-sans text-xs text-brand-light-gray/80">
              <li>
                <a href="#about" className="hover:text-brand-gold transition-colors duration-200">
                  About Hamedia
                </a>
              </li>
              <li>
                <a href="#flagship" className="hover:text-brand-gold transition-colors duration-200">
                  Arghandab Dairy Farm
                </a>
              </li>
              <li>
                <a href="#ventures" className="hover:text-brand-gold transition-colors duration-200">
                  Future Ventures
                </a>
              </li>
              <li>
                <a href="#model" className="hover:text-brand-gold transition-colors duration-200">
                  Investment Model
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col">
            <h4 className="font-serif text-sm font-bold tracking-wider text-brand-gold uppercase mb-5">
              Contact Details
            </h4>
            <ul className="flex flex-col gap-4 font-sans text-xs text-brand-light-gray/80">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-brand-red flex-shrink-0 mt-0.5" />
                <span>Kandahar & Kabul, Afghanistan</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-brand-red flex-shrink-0" />
                <a href="tel:+19492996263" className="hover:text-brand-gold transition-colors">
                  +1-949-299-6263
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-brand-red flex-shrink-0" />
                <a href="mailto:info@hamediainvestment.com" className="hover:text-brand-gold transition-colors">
                  info@hamediainvestment.com
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div className="flex flex-col">
            <h4 className="font-serif text-sm font-bold tracking-wider text-brand-gold uppercase mb-5">
              Investor Relations
            </h4>
            <p className="font-sans text-xs text-brand-light-gray/70 mb-4 leading-relaxed">
              Subscribe to receive updates on Arghandab Dairy Farm operations and upcoming projects.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex items-center">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-white/10 text-white placeholder-brand-light-gray/50 px-4 py-2.5 rounded-l-lg focus:outline-none focus:ring-1 focus:ring-brand-gold text-xs border border-white/15"
                required
              />
              <button
                type="submit"
                className="bg-brand-red hover:bg-brand-red-dark text-white px-4 py-2.5 rounded-r-lg border border-brand-red transition-colors duration-200"
                aria-label="Subscribe"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        </div>

        <hr className="border-white/10 my-8" />

        {/* Disclaimer Section */}
        <div className="mb-8 p-4 bg-white/5 rounded-lg border border-white/5">
          <h5 className="font-serif text-xs font-bold text-brand-gold uppercase mb-2">
            Investment Disclaimer
          </h5>
          <p className="font-sans text-[10px] text-brand-light-gray/60 leading-relaxed">
            All investment operations structured by Hamedia Investments (including the Cow-Line Economic Participation Model for Arghandab Dairy Farm) carry inherent operational, biological, and market risks. Historical performance, initial herd sizes, and milk output calculations are illustrative and do not guarantee future returns. Economic Participation Certificates do not grant company equity, voting rights, or land deeds, but rather represent a direct contractual right to operational outcomes as specified in the Economic Participation Agreement.
          </p>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 font-sans text-[10px] text-brand-light-gray/40">
          <span>
            &copy; {new Date().getFullYear()} Hamedia Investments. All Rights Reserved.
          </span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-brand-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-gold transition-colors">Terms of Service</a>
          </div>
          <a
            href="#"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-white/10 hover:bg-white/15 rounded text-white transition-colors duration-200"
          >
            Back to Top
            <ArrowUp className="w-3 h-3" />
          </a>
        </div>
      </div>
    </footer>
  );
}
