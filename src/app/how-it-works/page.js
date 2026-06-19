import Link from "next/link";
import { MessageSquare, ArrowRight, Check, Sparkles } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import Button from "@/components/Button";
import AccordionItem from "@/components/Accordion";

export default function HowItWorksPage() {
  const steps = [
    {
      num: 1,
      title: "We talk",
      description:
        "Our representative visits your shop locally, or you connect with us over WhatsApp. We understand your business structure in 10–15 minutes — what services you provide, your pricing levels, and contact details. No jargon or questionnaires. Just a friendly chat.",
    },
    {
      num: 2,
      title: "We build",
      description:
        "We build your website layout, map the custom domain, and set up your local Business Listings within 48 hours. You review and suggest edits. We make changes until you are 100% happy and sign off before going live.",
    },
    {
      num: 3,
      title: "You go live",
      description:
        "We configure DNS hosting and map everything. You just share your brand URL with clients and start receiving direct enquiries. We will send you a simple, short walkthrough of how to share your site link.",
    },
  ];

  const maintenanceRows = [
    {
      name: "Minor changes",
      sub: "Text, phone number, working hours, address updates",
      price: "Free, always",
      desc: "Just WhatsApp us the updates — completed same-day.",
      isFree: true,
    },
    {
      name: "Major changes",
      sub: "New page creation, page section redesign, custom feature integration",
      price: "₹1,499+",
      desc: "Scoped and agreed before starting. No hidden surprises.",
      isFree: false,
    },
    {
      name: "Domain renewal",
      sub: "From year 2 onwards",
      price: "₹1,800/yr",
      desc: "We notify you and handle the technical renewal for you.",
      isFree: false,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Hero */}
      <div className="bg-primary text-white py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-xs md:text-sm text-slate-400 mb-3 font-medium">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>{" "}
            &rsaquo; <span className="text-white">How It Works</span>
          </div>
          <h1 className="font-head font-extrabold text-3xl md:text-4xl text-white">
            How It Works
          </h1>
          <p className="text-slate-300 text-sm md:text-base mt-2 max-w-xl leading-relaxed">
            Live in 48 hours. We handle all the complex technical settings. You focus on running your business.
          </p>
        </div>
      </div>

      {/* Expanded Steps Section */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 md:px-6">
          <div className="flex flex-col gap-10">
            {steps.map((step) => (
              <div key={step.num} className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-accent text-white font-head font-extrabold text-lg flex items-center justify-center flex-shrink-0 shadow-md shadow-accent/25 mt-1">
                  {step.num}
                </div>
                <div>
                  <h3 className="font-head font-bold text-lg text-primary mb-2">
                    {step.title}
                  </h3>
                  <p className="text-slate-500 text-sm sm:text-base leading-relaxed font-body">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-slate-400 font-medium italic mt-8 pl-18">
            * The 48-hour timeline begins from when you provide the initial content (images, logo, text).
          </p>
        </div>
      </section>

      {/* What happens after Section */}
      <section className="py-16 bg-slate-50/50 border-t border-slate-200/40">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h2 className="font-head font-extrabold text-2xl text-primary mb-3">
              What happens after you go live?
            </h2>
            <p className="text-sm text-slate-500 leading-relaxed">
              We continue supporting your business after your setup is live. We keep billing clear and upfront.
            </p>
          </div>

          <div className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-sm">
            <div className="overflow-x-auto styled-scrollbar">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-primary text-white border-b border-slate-200">
                    <th className="py-4 px-5 font-head font-bold text-xs uppercase tracking-wider">
                      Update Type
                    </th>
                    <th className="py-4 px-5 font-head font-bold text-xs uppercase tracking-wider w-36">
                      Cost
                    </th>
                    <th className="py-4 px-5 font-head font-bold text-xs uppercase tracking-wider">
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {maintenanceRows.map((row, i) => (
                    <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                      <td className="py-4 px-5">
                        <div className="font-head font-bold text-slate-800 text-sm">
                          {row.name}
                        </div>
                        <div className="text-xs text-slate-400 font-medium mt-0.5 max-w-xs">
                          {row.sub}
                        </div>
                      </td>
                      <td className="py-4 px-5">
                        <span
                          className={`font-head font-extrabold text-sm ${
                            row.isFree ? "text-emerald-600" : "text-accent"
                          }`}
                        >
                          {row.price}
                        </span>
                      </td>
                      <td className="py-4 px-5 text-xs text-slate-500 leading-relaxed">
                        {row.desc}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Common questions */}
      <section className="py-16">
        <div className="max-w-2xl mx-auto px-4 md:px-6">
          <h2 className="font-head font-extrabold text-2xl text-primary text-center mb-8">
            Common questions
          </h2>
          <div className="border border-slate-200 rounded-xl bg-white p-5 divide-y divide-slate-100 shadow-sm">
            <AccordionItem
              question="What content do I need to provide?"
              answer="Three simple things: text about your business (services offered, open hours, location details), your logo (or business name for a clean typography logo), and a few high-quality photos. Most clients send this over in a single WhatsApp message."
            />
            <AccordionItem
              question="What if I'm not happy with the result?"
              answer="We make changes and revise the setup until you approve. We don't deploy anything live without your explicit approval. Any edits requested during the setup are fully included in the one-time fee."
            />
          </div>
        </div>
      </section>

      {/* CTA Footer banner */}
      <section className="py-16 bg-primary text-white text-center">
        <div className="max-w-3xl mx-auto px-4 md:px-6 flex flex-col items-center">
          <h2 className="font-head font-extrabold text-2xl text-white mb-4">
            Ready to get started?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8 max-w-lg font-body">
            Get your business digital ready. Connect on WhatsApp and we will reply same-day.
          </p>
          <Button variant="whatsapp" href={siteConfig.whatsappLinks.getStarted}>
            <MessageSquare className="w-5 h-5 fill-white" /> Connect on WhatsApp
          </Button>
        </div>
      </section>
    </div>
  );
}
