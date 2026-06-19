import Link from "next/link";
import { MessageSquare, ArrowRight, Check } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import Button from "@/components/Button";

export default function ReferralPage() {
  const steps = [
    {
      num: 1,
      title: "Share SiteBhai with a business owner you know",
      desc: "Tell them about SiteBhai. Show them our website setups. Share our contact details. That's all it takes to start.",
    },
    {
      num: 2,
      title: "WhatsApp us their details",
      desc: "Send us their name and phone number on WhatsApp. We will reach out, mention your name, and handle the scoping process from there.",
    },
    {
      num: 3,
      title: "Earn ₹500 when they pay",
      desc: "Once they sign up and make their first payment, you earn ₹500. Credit toward your next service, or direct UPI cash transfer — your choice.",
    },
  ];

  const terms = [
    "₹500 paid after the referred client makes their first payment",
    "No limit on referrals — refer 10 businesses, earn ₹5,000",
    "Credit toward your next SiteBhai service, or UPI cash transfer",
    "Tracked manually — we're honest about it",
    "One referral fee per new business client (not per service they buy)",
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
            &rsaquo; <span className="text-white">Referral Program</span>
          </div>
          <h1 className="font-head font-extrabold text-3xl md:text-4xl text-white">
            Refer a business, earn ₹500
          </h1>
          <p className="text-slate-300 text-sm md:text-base mt-2 max-w-xl leading-relaxed">
            Help another local business owner go digital. We pay you when they sign up.
          </p>
        </div>
      </div>

      {/* Referral Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          
          {/* Big Amount Callout */}
          <div className="border border-orange-200 bg-orange-50/50 rounded-2xl p-6 md:p-10 text-center max-w-md mx-auto mb-16 shadow-sm">
            <div className="font-head font-extrabold text-5xl md:text-6xl text-accent mb-2 leading-none">
              ₹500
            </div>
            <div className="text-sm font-semibold uppercase tracking-wider text-slate-500 font-head">
              per successful referral — no limit
            </div>
          </div>

          {/* Steps Grid */}
          <h2 className="font-head font-extrabold text-2xl text-primary text-center mb-10">
            How it works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16">
            {steps.map((step) => (
              <div
                key={step.num}
                className="border border-slate-200 bg-white rounded-xl p-6 shadow-sm flex flex-col items-center text-center hover:shadow-md transition-shadow duration-200"
              >
                <div className="w-12 h-12 bg-accent text-white font-head font-extrabold text-base rounded-full flex items-center justify-center mb-4">
                  {step.num}
                </div>
                <h3 className="font-head font-bold text-sm sm:text-base text-slate-800 mb-2 leading-snug">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed font-body">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Simple Terms */}
          <div className="max-w-xl mx-auto border border-slate-200 rounded-xl bg-slate-50/50 p-6 shadow-sm mb-16">
            <h3 className="font-head font-bold text-base text-primary mb-4 pb-2 border-b border-slate-200 flex items-center gap-2">
              The terms, simply
            </h3>
            <ul className="space-y-3">
              {terms.map((item, idx) => (
                <li key={idx} className="flex gap-2.5 text-xs sm:text-sm text-slate-600 items-start leading-relaxed font-body">
                  <Check className="w-4.5 h-4.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Trigger action button */}
          <div className="text-center bg-white border border-slate-200 p-8 rounded-2xl max-w-xl mx-auto shadow-sm">
            <h3 className="font-head font-bold text-lg text-primary mb-2">
              Start referring now
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mb-6 leading-relaxed">
              Send us the name and phone number of whoever you're referring — we'll take it from there.
            </p>
            <Button variant="whatsapp" href={siteConfig.whatsappLinks.referral} className="w-full sm:w-auto px-8 py-4">
              <MessageSquare className="w-5 h-5 fill-white" /> Refer someone now
            </Button>
          </div>

        </div>
      </section>
    </div>
  );
}
