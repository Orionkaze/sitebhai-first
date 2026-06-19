import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, X, MessageSquare, ArrowLeft } from "lucide-react";
import * as Icons from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import Button from "@/components/Button";
import AccordionItem from "@/components/Accordion";

// Static parameters generation for Next.js static exports
export async function generateStaticParams() {
  return siteConfig.services.map((svc) => ({
    slug: svc.slug,
  }));
}

export default async function ServiceDetailPage({ params }) {
  const resolvedParams = await params;
  const service = siteConfig.services.find((s) => s.slug === resolvedParams.slug);

  if (!service) {
    notFound();
  }

  const IconComponent = Icons[service.icon] || Icons.HelpCircle;

  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Hero */}
      <div className="bg-primary text-white py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-xs md:text-sm text-slate-400 mb-3 font-medium flex items-center gap-1.5">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>{" "}
            &rsaquo;{" "}
            <Link href="/services" className="hover:text-white transition-colors">
              Services
            </Link>{" "}
            &rsaquo; <span className="text-white">{service.name}</span>
          </div>
          
          <div className="flex items-center gap-3 mb-2 mt-4">
            <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-accent">
              <IconComponent className="w-5 h-5" />
            </div>
            <h1 className="font-head font-extrabold text-2xl md:text-3xl text-white">
              {service.name}
            </h1>
          </div>
          
          <p className="font-head font-extrabold text-lg text-accent mt-2">
            One-time Setup: {service.priceLabel}
          </p>
        </div>
      </div>

      {/* Main Details Section */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 md:px-6">
          {/* Back button */}
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 font-head font-bold text-xs uppercase tracking-wider text-slate-400 hover:text-accent mb-8 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to all services
          </Link>

          {/* Core inclusions / exclusions cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12">
            <div className="border border-slate-200 bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-head font-bold text-base text-primary mb-4 pb-2 border-b border-slate-100 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-xs">✓</span> What's included
              </h3>
              <ul className="space-y-3">
                {service.included.map((item, idx) => (
                  <li key={idx} className="flex gap-2.5 text-xs sm:text-sm text-slate-600 items-start leading-relaxed">
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border border-slate-200 bg-slate-50/50 rounded-xl p-6 shadow-sm">
              <h3 className="font-head font-bold text-base text-primary mb-4 pb-2 border-b border-slate-200/50 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-red-50 text-red-600 flex items-center justify-center font-bold text-xs">✗</span> What's NOT included
              </h3>
              <ul className="space-y-3">
                {service.notIncluded.map((item, idx) => (
                  <li key={idx} className="flex gap-2.5 text-xs sm:text-sm text-slate-400 items-start leading-relaxed">
                    <X className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Who it's for */}
          <div className="mb-12 border-t border-slate-100 pt-10">
            <h2 className="font-head font-extrabold text-xl text-primary mb-4">
              Who it's for
            </h2>
            <div className="flex flex-wrap gap-2">
              {service.whoItIsFor.map((item, idx) => (
                <span
                  key={idx}
                  className="font-head font-semibold text-xs sm:text-sm px-3.5 py-1.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200/60"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* FAQs */}
          <div className="border-t border-slate-100 pt-10">
            <h2 className="font-head font-extrabold text-xl text-primary mb-6">
              Frequently asked questions
            </h2>
            <div className="border border-slate-200 rounded-xl bg-white p-5 divide-y divide-slate-100 shadow-sm">
              {service.faqs.map((faq, idx) => (
                <AccordionItem key={idx} question={faq.q} answer={faq.a} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA block */}
      <section className="py-16 bg-primary text-white text-center">
        <div className="max-w-3xl mx-auto px-4 md:px-6 flex flex-col items-center">
          <h2 className="font-head font-extrabold text-2xl text-white mb-4">
            Ready to get {service.name}?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8 max-w-lg font-body">
            Get set up within 48 hours. Connect on WhatsApp to discuss your business details.
          </p>
          <Button
            variant="whatsapp"
            href={siteConfig.whatsappLinks[service.id] || siteConfig.whatsappLinks.general}
          >
            <MessageSquare className="w-5 h-5 fill-white" /> Request Setup via WhatsApp
          </Button>
        </div>
      </section>
    </div>
  );
}
