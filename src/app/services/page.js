import Link from "next/link";
import { MessageSquare, ArrowRight, Check, X } from "lucide-react";
import * as Icons from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import Button from "@/components/Button";

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Hero */}
      <div className="bg-primary text-white py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-xs md:text-sm text-slate-400 mb-3 font-medium">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>{" "}
            &rsaquo; <span className="text-white">Services</span>
          </div>
          <h1 className="font-head font-extrabold text-3xl md:text-4xl text-white">
            Everything your business needs to go digital
          </h1>
          <p className="text-slate-300 text-sm md:text-base mt-2 max-w-xl leading-relaxed">
            Done-for-you digital setups — website, Google maps listing, professional WhatsApp Business. Pick only what you need.
          </p>
          <div className="mt-6">
            <Button variant="whatsapp" href={siteConfig.whatsappLinks.general} size="sm">
              <MessageSquare className="w-4 h-4 fill-white" /> Chat on WhatsApp
            </Button>
          </div>
        </div>
      </div>

      {/* Services detailed card list */}
      <section className="py-16 bg-slate-50/30">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <div className="flex flex-col gap-10">
            {siteConfig.services.map((svc) => {
              const IconComponent = Icons[svc.icon] || Icons.HelpCircle;
              return (
                <div
                  key={svc.id}
                  className="border border-slate-200 bg-white rounded-2xl p-6 md:p-8 shadow-sm flex flex-col hover:shadow-md transition-all duration-200"
                >
                  {/* Header Row */}
                  <div className="flex flex-col sm:flex-row items-start justify-between gap-4 pb-6 border-b border-slate-100">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-orange-50 text-accent flex items-center justify-center flex-shrink-0 border border-orange-100/50">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div>
                        <h2 className="font-head font-bold text-lg md:text-xl text-primary leading-tight">
                          {svc.name}
                        </h2>
                        <p className="text-slate-400 text-xs sm:text-sm mt-1 max-w-md leading-relaxed font-body">
                          {svc.description}
                        </p>
                      </div>
                    </div>
                    <div className="font-head font-extrabold text-xl text-accent sm:text-right shrink-0">
                      {svc.priceLabel}
                    </div>
                  </div>

                  {/* Included / Excluded Columns */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                    <div>
                      <h4 className="font-head font-bold text-xs uppercase tracking-wider text-slate-400 mb-3">
                        What's included
                      </h4>
                      <ul className="space-y-2">
                        {svc.included.map((item, idx) => (
                          <li key={idx} className="flex gap-2 text-xs sm:text-sm text-slate-600 items-start leading-relaxed">
                            <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-head font-bold text-xs uppercase tracking-wider text-slate-400 mb-3">
                        Not included
                      </h4>
                      <ul className="space-y-2">
                        {svc.notIncluded.map((item, idx) => (
                          <li key={idx} className="flex gap-2 text-xs sm:text-sm text-slate-400 items-start leading-relaxed">
                            <X className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Footer Actions */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-slate-100">
                    <Link
                      href={`/services/${svc.slug}`}
                      className="font-head font-bold text-sm text-accent hover:text-accent-dark transition-colors flex items-center gap-1 group"
                    >
                      See full specifications <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                    <Button
                      variant="whatsapp"
                      size="sm"
                      href={siteConfig.whatsappLinks[svc.id] || siteConfig.whatsappLinks.general}
                    >
                      <MessageSquare className="w-4 h-4 fill-white" /> Get started
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Alternative bottom query strip */}
      <section className="py-16 bg-primary text-white text-center">
        <div className="max-w-3xl mx-auto px-4 md:px-6 flex flex-col items-center">
          <h2 className="font-head font-extrabold text-2xl text-white mb-4">
            Not sure what your business needs?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8 max-w-lg font-body">
            WhatsApp us. We will tell you exactly what would help your business and what you can skip. No pushy sales calls.
          </p>
          <Button variant="whatsapp" href={siteConfig.whatsappLinks.unsure}>
            <MessageSquare className="w-5 h-5 fill-white" /> Chat on WhatsApp
          </Button>
        </div>
      </section>
    </div>
  );
}
