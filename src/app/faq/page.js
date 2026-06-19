import Link from "next/link";
import { MessageSquare } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import Button from "@/components/Button";
import AccordionItem from "@/components/Accordion";

export default function FAQPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Hero */}
      <div className="bg-primary text-white py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-xs md:text-sm text-slate-400 mb-3 font-medium">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>{" "}
            &rsaquo; <span className="text-white">FAQ</span>
          </div>
          <h1 className="font-head font-extrabold text-3xl md:text-4xl text-white">
            Frequently asked questions
          </h1>
          <p className="text-slate-300 text-sm md:text-base mt-2 max-w-xl leading-relaxed">
            Everything you need to know about our websites and business profiles setups.
          </p>
        </div>
      </div>

      {/* Accordion FAQ Grid */}
      <section className="py-16 bg-slate-50/20">
        <div className="max-w-2xl mx-auto px-4 md:px-6">
          <div className="border border-slate-200 rounded-xl bg-white p-6 md:p-8 divide-y divide-slate-100 shadow-sm">
            {siteConfig.faqs.map((faq, i) => (
              <AccordionItem key={i} question={faq.q} answer={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer banner */}
      <section className="py-16 bg-primary text-white text-center">
        <div className="max-w-3xl mx-auto px-4 md:px-6 flex flex-col items-center">
          <h2 className="font-head font-extrabold text-2xl text-white mb-4">
            Still have a question?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8 max-w-lg font-body">
            WhatsApp us your question. We are happy to help and answer queries same-day.
          </p>
          <Button variant="whatsapp" href={siteConfig.whatsappLinks.general}>
            <MessageSquare className="w-5 h-5 fill-white" /> Connect on WhatsApp
          </Button>
        </div>
      </section>
    </div>
  );
}
