"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, MessageSquare, Plus, Info, Sparkles } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import Button from "@/components/Button";
import AccordionItem from "@/components/Accordion";

export default function PricingPage() {
  // State for interactive builder
  const [selectedServices, setSelectedServices] = useState({
    website: false,
    domain: false,
    google: false,
    whatsapp: false,
    ops: false,
  });

  const handleToggle = (id) => {
    setSelectedServices((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Pricing calculator logic
  const calculateTotal = () => {
    return siteConfig.services.reduce((sum, s) => {
      return selectedServices[s.id] ? sum + s.price : sum;
    }, 0);
  };

  const getSelectedNames = () => {
    return siteConfig.services
      .filter((s) => selectedServices[s.id])
      .map((s) => s.name)
      .join(", ");
  };

  const buildWhatsAppLink = () => {
    const names = getSelectedNames();
    const total = calculateTotal();
    return `https://wa.me/${siteConfig.whatsapp}?text=Hi+SiteBhai!+I%27m+interested+in:+${encodeURIComponent(
      names
    )}.+Total:+%E2%82%B9${total}.+Can+we+talk%3F`;
  };

  const totalSelectedCount = Object.values(selectedServices).filter(Boolean).length;
  const isDomainSelected = selectedServices.domain;

  const comparisonTable = [
    {
      name: "Website Development",
      sub: "custom, SEO-optimised, appointment booking",
      price: "₹2,999",
      details: "Built to your requirements, live in 48 hours",
      type: "price",
    },
    {
      name: "Own Domain",
      sub: "setup + year 1 registration",
      price: "₹2,499",
      details: "Registered in your name, DNS managed by us",
      type: "price",
    },
    {
      name: "Domain Renewal",
      sub: "year 2 onwards",
      price: "₹1,800/yr",
      details: "We handle it annually, no action from you",
      type: "price",
    },
    {
      name: "Google Business Profile",
      sub: "maps verification + photos setup",
      price: "₹799",
      details: "Maps listing, photos, hours, verification",
      type: "price",
    },
    {
      name: "WhatsApp Business Setup",
      sub: "catalog + auto-replies profile",
      price: "₹799",
      details: "Profile, catalog (10 items), auto-reply",
      type: "price",
    },
    {
      name: "Custom Ops Tool",
      sub: "trackers, trackers, billing calculators",
      price: "From ₹3,999",
      details: "Built to your workflow, scoped and quoted first",
      type: "price",
    },
    {
      name: "Minor changes",
      sub: "text, phone number, hours, address updates",
      price: "Free",
      details: "Always — just WhatsApp us, completed same day",
      type: "free",
    },
    {
      name: "Major changes",
      sub: "new sections, page redesign, new integration",
      price: "₹1,499+",
      details: "Scoped and agreed before we start",
      type: "price",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Interior Page Hero */}
      <div className="bg-primary text-white py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-xs md:text-sm text-slate-400 mb-3 font-medium">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>{" "}
            &rsaquo; <span className="text-white">Pricing</span>
          </div>
          <h1 className="font-head font-extrabold text-3xl md:text-4xl text-white">
            Simple, transparent pricing
          </h1>
          <p className="text-slate-300 text-sm md:text-base mt-2 max-w-xl leading-relaxed">
            No hidden fees. You see exactly what you pay before we start. One-time setup, no recurring subscriptions.
          </p>
        </div>
      </div>

      {/* Section 1: Comparison Table */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <span className="inline-block font-head font-bold text-xs uppercase tracking-widest text-accent mb-2">
            All Services
          </span>
          <h2 className="font-head font-extrabold text-2xl sm:text-3xl text-primary mb-8">
            What everything costs
          </h2>

          <div className="border border-slate-200 rounded-xl overflow-hidden shadow-sm bg-white">
            <div className="overflow-x-auto styled-scrollbar">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-primary text-white border-b border-slate-200">
                    <th className="py-4 px-5 font-head font-bold text-xs uppercase tracking-wider">
                      Service
                    </th>
                    <th className="py-4 px-5 font-head font-bold text-xs uppercase tracking-wider w-36">
                      Price
                    </th>
                    <th className="py-4 px-5 font-head font-bold text-xs uppercase tracking-wider">
                      What you get
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {comparisonTable.map((row, i) => (
                    <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                      <td className="py-4 px-5">
                        <div className="font-head font-bold text-slate-800 text-sm sm:text-base">
                          {row.name}
                        </div>
                        <div className="text-xs text-slate-400 font-medium mt-0.5">
                          {row.sub}
                        </div>
                      </td>
                      <td className="py-4 px-5">
                        <span
                          className={`font-head font-extrabold text-sm sm:text-base ${
                            row.type === "free" ? "text-emerald-600" : "text-accent"
                          }`}
                        >
                          {row.price}
                        </span>
                      </td>
                      <td className="py-4 px-5 text-xs sm:text-sm text-slate-500 leading-relaxed">
                        {row.details}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Interactive Calculator */}
      <section className="py-16 bg-slate-50/80 border-y border-slate-200/40">
        <div className="max-w-3xl mx-auto px-4 md:px-6">
          <div className="text-center mb-10">
            <span className="inline-block font-head font-bold text-xs uppercase tracking-widest text-accent mb-2">
              Build your package
            </span>
            <h2 className="font-head font-extrabold text-2xl sm:text-3xl text-primary mb-3">
              Build your own package
            </h2>
            <p className="text-sm text-slate-500 max-w-md mx-auto leading-relaxed">
              Select the service cards below to combine them. See your total live, then connect with us on WhatsApp to start.
            </p>
          </div>

          {/* Selector Grid */}
          <div className="flex flex-col gap-4 mb-8">
            {siteConfig.services.map((svc) => {
              const isSelected = selectedServices[svc.id];
              return (
                <div
                  key={svc.id}
                  onClick={() => handleToggle(svc.id)}
                  onKeyDown={(e) => {
                    if (e.key === " " || e.key === "Enter") {
                      e.preventDefault();
                      handleToggle(svc.id);
                    }
                  }}
                  role="checkbox"
                  aria-checked={isSelected ? "true" : "false"}
                  tabIndex={0}
                  className={`border-2 rounded-xl p-5 cursor-pointer select-none flex gap-4 items-start transition-all duration-200 ${
                    isSelected
                      ? "border-accent bg-orange-50/20 shadow-md shadow-accent/5"
                      : "border-slate-200 hover:border-slate-300 bg-white"
                  }`}
                >
                  {/* Custom Checkbox */}
                  <div
                    className={`w-6 h-6 rounded border flex items-center justify-center flex-shrink-0 mt-1 transition-all ${
                      isSelected
                        ? "bg-accent border-accent text-white"
                        : "border-slate-300 bg-slate-50 text-transparent"
                    }`}
                  >
                    <Check className="w-4 h-4 stroke-[3]" />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-baseline justify-between gap-x-3 mb-1">
                      <h4 className="font-head font-bold text-base text-primary">
                        {svc.name}
                      </h4>
                      <span className="font-head font-extrabold text-base text-accent">
                        {svc.priceLabel}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                      {svc.shortDescription}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Running Total Calculation Bar */}
          <div className="border border-slate-200 rounded-xl p-6 bg-white shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-center sm:text-left">
              <div className="font-head font-bold text-xs uppercase tracking-wider text-slate-400 mb-1">
                Your calculated total
              </div>
              <div className="font-head font-extrabold text-3xl text-primary leading-tight">
                ₹{calculateTotal().toLocaleString("en-IN")}
              </div>
            </div>
            {totalSelectedCount > 0 ? (
              <Button variant="whatsapp" href={buildWhatsAppLink()} className="w-full sm:w-auto">
                <MessageSquare className="w-5 h-5 fill-white" /> Chat on WhatsApp
              </Button>
            ) : (
              <div className="text-xs text-slate-400 font-medium italic text-center sm:text-right">
                Select one or more services above
              </div>
            )}
          </div>

          {/* Domain Renewal Warning */}
          {isDomainSelected && (
            <div className="mt-4 flex items-start gap-2.5 bg-emerald-50 border border-emerald-200/50 p-4 rounded-xl text-emerald-800 text-xs sm:text-sm">
              <Info className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
              <p className="leading-relaxed font-medium">
                Domain renewal is <strong className="font-extrabold">₹1,800/yr</strong> from year 2 onwards — we notify you and handle it automatically, no tech setups required from you.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Section 3: Popular Bundle Card */}
      <section className="py-20 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <span className="inline-block font-head font-bold text-xs uppercase tracking-widest text-accent mb-2">
              Most Popular
            </span>
            <h2 className="font-head font-extrabold text-2xl sm:text-3xl text-primary mb-3">
              The Complete Digital Setup
            </h2>
            <p className="text-sm text-slate-500 max-w-sm mx-auto leading-relaxed">
              Everything your local service business needs to get found by clients and trusted online.
            </p>
          </div>

          <div className="border-2 border-accent rounded-2xl p-6 md:p-8 bg-white relative shadow-xl shadow-accent/5 max-w-lg mx-auto">
            <span className="absolute top-4 right-4 bg-accent text-white font-head font-extrabold text-[0.7rem] uppercase tracking-wider py-1 px-3.5 rounded-full flex items-center gap-1 shadow-sm shadow-accent/20">
              <Sparkles className="w-3 h-3 fill-white" /> Most Popular
            </span>

            <h3 className="font-head font-bold text-lg text-primary mb-4 pr-24 leading-snug">
              Complete Setup Package
            </h3>

            <ul className="space-y-3 mb-6">
              {[
                "Website Development — Custom & Responsive",
                "Custom Domain Name (1st year included)",
                "Google Business Listing maps verification",
                "WhatsApp Business Setup & Cataloging",
              ].map((item, idx) => (
                <li key={idx} className="flex gap-2.5 text-sm text-slate-600 items-start">
                  <span className="w-5 h-5 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    ✓
                  </span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <div className="border-t border-slate-100 pt-6 flex items-baseline justify-between gap-4 mb-6">
              <div>
                <div className="text-xs text-slate-400 font-bold uppercase tracking-wider">
                  One-time price
                </div>
                <div className="font-head font-extrabold text-4xl text-accent leading-none mt-1">
                  ₹7,096
                </div>
              </div>
              <div className="text-right text-xs text-slate-400 font-medium">
                No monthly hosting fees
              </div>
            </div>

            <Button
              variant="whatsapp"
              href="https://wa.me/91XXXXXXXXXX?text=Hi+SiteBhai!+I%27m+interested+in+the+complete+digital+setup+package."
              className="w-full py-4 text-base"
            >
              💬 Get Everything Setup
            </Button>
          </div>
        </div>
      </section>

      {/* Section 4: Pricing FAQs */}
      <section className="py-20 bg-slate-50/50">
        <div className="max-w-2xl mx-auto px-4 md:px-6">
          <h2 className="font-head font-extrabold text-2xl text-primary text-center mb-8">
            Pricing FAQs
          </h2>

          <div className="border border-slate-200 rounded-xl bg-white p-5 divide-y divide-slate-100 shadow-sm">
            <AccordionItem
              question="Is payment required upfront?"
              answer="Yes — payment is made before we start work. This is a one-time payment per service, and you see exactly what you're paying for before we begin."
            />
            <AccordionItem
              question="Are there any hidden fees?"
              answer="None. What you see on this page is what you pay. The only recurring cost is domain renewal (₹1,800/yr from year 2) — and we tell you about that upfront. Free-tier hosting is used, meaning no monthly bills."
            />
            <AccordionItem
              question="What if I need something not on this list?"
              answer="WhatsApp us and describe what you need. We'll scope it out and give you a fixed price before starting. We never begin work without agreeing the price first."
            />
          </div>
        </div>
      </section>

      {/* Bottom Footer CTA banner */}
      <section className="py-16 bg-primary text-white text-center">
        <div className="max-w-3xl mx-auto px-4 md:px-6 flex flex-col items-center">
          <h2 className="font-head font-extrabold text-2xl md:text-3xl text-white mb-4">
            Ready to grow your business?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8 max-w-lg font-body">
            Chat with us on WhatsApp today. We answer all queries and questions same-day.
          </p>
          <Button variant="whatsapp" href={siteConfig.whatsappLinks.general}>
            <MessageSquare className="w-5 h-5 fill-white" /> Connect on WhatsApp
          </Button>
        </div>
      </section>
    </div>
  );
}
