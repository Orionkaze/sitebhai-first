"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, MessageSquare } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import Button from "./Button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus when path changes
  useEffect(() => {
    setIsOpen(false);
    setIsDropdownOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Our Work", href: "/our-work" },
    { name: "Pricing", href: "/pricing" },
    { name: "How It Works", href: "/how-it-works" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-200/50 py-3"
          : "bg-white border-b border-slate-100 py-4"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="font-head font-extrabold text-xl md:text-2xl text-primary tracking-tight select-none">
            Site<span className="text-accent">Bhai</span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-6">
            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button
                className={`flex items-center gap-1 font-head font-medium text-[0.95rem] hover:text-accent transition-colors py-2 cursor-pointer ${
                  pathname.startsWith("/services") ? "text-accent" : "text-primary-light"
                }`}
              >
                Services <ChevronDown className="w-4 h-4" />
              </button>

              {isDropdownOpen && (
                <div className="absolute top-full left-0 bg-white border border-slate-200 rounded-lg shadow-xl py-2 w-60 transform translate-y-1 fade-in-up">
                  <Link
                    href="/services"
                    className="block px-4 py-2 text-[0.9rem] hover:bg-slate-50 font-semibold text-primary hover:text-accent border-b border-slate-100"
                  >
                    All Services Overview
                  </Link>
                  {siteConfig.services.map((svc) => (
                    <Link
                      key={svc.id}
                      href={`/services/${svc.slug}`}
                      className="block px-4 py-2 text-[0.88rem] hover:bg-slate-50 text-slate-700 hover:text-accent"
                    >
                      {svc.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`font-head font-medium text-[0.95rem] hover:text-accent transition-colors ${
                  pathname === link.href ? "text-accent" : "text-primary-light"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:block">
            <Button variant="whatsapp" size="sm" href={siteConfig.whatsappLinks.general}>
              <MessageSquare className="w-4 h-4 fill-white" /> Chat on WhatsApp
            </Button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-primary hover:text-accent transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <div className="md:hidden mt-3 border-t border-slate-200 pt-4 flex flex-col gap-4 animate-fadeIn">
            {/* Services Group in Mobile */}
            <div className="flex flex-col gap-2">
              <span className="font-head font-bold text-[0.85rem] uppercase tracking-wider text-slate-400">
                Services
              </span>
              <Link
                href="/services"
                className="pl-3 py-1 font-head font-semibold text-[0.95rem] text-primary hover:text-accent"
              >
                All Services Overview
              </Link>
              {siteConfig.services.map((svc) => (
                <Link
                  key={svc.id}
                  href={`/services/${svc.slug}`}
                  className="pl-5 py-1 font-head font-medium text-[0.9rem] text-slate-600 hover:text-accent"
                >
                  {svc.name}
                </Link>
              ))}
            </div>

            <div className="flex flex-col gap-3 border-t border-slate-100 pt-3">
              <span className="font-head font-bold text-[0.85rem] uppercase tracking-wider text-slate-400">
                Company
              </span>
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="pl-3 py-1 font-head font-medium text-[0.95rem] text-primary-light hover:text-accent"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="border-t border-slate-100 pt-4 pb-2">
              <Button variant="whatsapp" size="sm" href={siteConfig.whatsappLinks.general} className="w-full">
                <MessageSquare className="w-4 h-4 fill-white" /> Chat on WhatsApp
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
