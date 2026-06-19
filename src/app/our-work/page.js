"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MessageSquare, Filter } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import Button from "@/components/Button";

export default function OurWorkPage() {
  const [filter, setFilter] = useState("all");

  const categories = [
    { id: "all", label: "All Setup Samples" },
    { id: "salon", label: "Salons" },
    { id: "clinic", label: "Clinics" },
    { id: "ca-firm", label: "CA Firms" },
    { id: "restaurant", label: "Restaurants" },
    { id: "coaching", label: "Coaching" },
    { id: "other", label: "Other" },
  ];

  const filteredItems =
    filter === "all"
      ? siteConfig.portfolio
      : siteConfig.portfolio.filter((item) => item.type === filter);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Hero */}
      <div className="bg-primary text-white py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-xs md:text-sm text-slate-400 mb-3 font-medium">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>{" "}
            &rsaquo; <span className="text-white">Our Work</span>
          </div>
          <h1 className="font-head font-extrabold text-3xl md:text-4xl text-white">
            Our Work
          </h1>
          <p className="text-slate-300 text-sm md:text-base mt-2 max-w-xl leading-relaxed">
            Websites and professional local profile setups we have successfully built and verified for small businesses in India.
          </p>
        </div>
      </div>

      {/* Portfolio Filter Section */}
      <section className="py-16 bg-slate-50/20">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 mb-10 pb-4 border-b border-slate-100">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`font-head font-bold text-xs sm:text-sm px-4 py-2 rounded-full cursor-pointer border transition-all duration-150 ${
                  filter === cat.id
                    ? "bg-accent border-accent text-white shadow-sm shadow-accent/15"
                    : "bg-white border-slate-200 text-slate-600 hover:border-slate-300 hover:text-primary"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Grid Layout */}
          {filteredItems.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 transition-all duration-300">
              {filteredItems.map((item, idx) => (
                <div
                  key={idx}
                  className="border border-slate-200 bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md hover:translate-y-[-2px] transition-all duration-200"
                >
                  <div className="relative h-52 bg-slate-100 border-b border-slate-100">
                    <Image
                      src={item.image}
                      alt={`${item.name} website preview`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-head font-bold text-base text-slate-800 mb-1">
                      {item.name}
                    </h3>
                    <div className="text-xs text-slate-400 font-medium mb-4 flex items-center gap-1">
                      📍 {item.city}
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {item.services.map((svc, i) => (
                        <span
                          key={i}
                          className={`text-[0.72rem] font-head font-bold px-2.5 py-0.5 rounded-full ${
                            svc === "Website"
                              ? "bg-orange-50 text-accent border border-orange-100/50"
                              : svc === "Sample"
                              ? "bg-blue-50 text-blue-600 border border-blue-100/50"
                              : "bg-emerald-50 text-emerald-600 border border-emerald-100/50"
                          }`}
                        >
                          {svc}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 border border-dashed border-slate-200 rounded-xl bg-white p-6 max-w-sm mx-auto">
              <Filter className="w-8 h-8 text-slate-300 mx-auto mb-3" />
              <h4 className="font-head font-bold text-slate-700 mb-1">No setup items yet</h4>
              <p className="text-slate-400 text-xs leading-relaxed">
                We will update this section with real business samples soon.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Featured CTA */}
      <section className="py-16 bg-primary text-white text-center">
        <div className="max-w-3xl mx-auto px-4 md:px-6 flex flex-col items-center">
          <h2 className="font-head font-extrabold text-2xl text-white mb-4">
            Want to see your business featured here?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8 max-w-lg font-body">
            Get your business online today and let us build you a trusted digital setup that gets you chosen.
          </p>
          <Button variant="whatsapp" href={siteConfig.whatsappLinks.getStarted}>
            <MessageSquare className="w-5 h-5 fill-white" /> Get Started Now
          </Button>
        </div>
      </section>
    </div>
  );
}
