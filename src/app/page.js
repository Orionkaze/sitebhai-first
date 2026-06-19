import Image from "next/image";
import Link from "next/link";
import { MessageSquare, ArrowRight, Zap, PhoneCall, HelpCircle } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import Button from "@/components/Button";
import StatBand from "@/components/StatBand";
import ServiceCard from "@/components/ServiceCard";

export default function Home() {
  // Take 5 main services and add one custom dashed card
  const mainServices = siteConfig.services.slice(0, 5);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-primary-light text-white overflow-hidden py-16 lg:py-24 border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Hero text */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-accent/15 border border-accent/30 text-accent font-head text-xs font-bold tracking-wider uppercase mb-6 animate-pulse">
                <Zap className="w-3.5 h-3.5 fill-accent" /> 48-hour delivery guarantee
              </div>
              <h1 className="font-head font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] leading-tight mb-6 tracking-tight text-white">
                Aapka poora digital setup,<br />
                <span className="text-accent">ek din mein.</span>
              </h1>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-xl font-body">
                Website, Google listing, WhatsApp Business, custom domain, and ops tools — we handle everything. You do nothing, we get your business live.
              </p>
              <div className="flex flex-wrap gap-4 w-full sm:w-auto">
                <Button variant="whatsapp" href={siteConfig.whatsappLinks.general} className="w-full sm:w-auto">
                  <MessageSquare className="w-5 h-5 fill-white" /> Chat on WhatsApp
                </Button>
                <Button variant="outline-white" href="/pricing" className="w-full sm:w-auto">
                  See Pricing
                </Button>
              </div>
            </div>

            {/* Hero image mockup */}
            <div className="lg:col-span-5 flex justify-center relative">
              <div className="relative w-full max-w-[420px] aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-white/10 p-2 bg-slate-900/50 backdrop-blur-sm animate-fadeIn">
                <Image
                  src="/images/hero-mockup.png"
                  alt="SiteBhai mockups on laptop and phone screens"
                  fill
                  className="object-cover rounded-xl"
                  priority
                />
              </div>
              {/* Floating review card decorator */}
              <div className="absolute -bottom-4 -left-4 bg-white text-slate-900 p-4.5 rounded-xl shadow-xl border border-slate-100 flex items-center gap-3 hidden sm:flex">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center font-bold text-accent">
                  ★
                </div>
                <div>
                  <div className="font-head font-bold text-xs text-slate-900">100% Verified Reviews</div>
                  <div className="text-[0.78rem] text-slate-500 font-medium">Pune Small Businesses</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Band */}
      <StatBand />

      {/* What We Do Section */}
      <section className="py-20 bg-slate-50/50">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="inline-block font-head font-bold text-xs uppercase tracking-widest text-accent mb-2">
              What we do
            </span>
            <h2 className="font-head font-extrabold text-2xl sm:text-3xl text-primary mb-4">
              Everything your business needs to go digital
            </h2>
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
              Pick what you need. Pay only for what helps your business, with no ongoing hidden subscription costs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {mainServices.map((svc) => (
              <ServiceCard key={svc.id} service={svc} />
            ))}
            <ServiceCard isDashed={true} />
          </div>
        </div>
      </section>

      {/* How It Works Teaser */}
      <section className="py-20 border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="inline-block font-head font-bold text-xs uppercase tracking-widest text-accent mb-2">
              The Process
            </span>
            <h2 className="font-head font-extrabold text-2xl sm:text-3xl text-primary mb-4">
              Live in 48 hours. You do nothing.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 bg-accent text-white font-head font-extrabold text-lg rounded-full flex items-center justify-center mb-6 shadow-md shadow-accent/20">
                1
              </div>
              <h3 className="font-head font-bold text-lg text-primary mb-3">We talk</h3>
              <p className="text-sm text-slate-500 leading-relaxed max-w-xs">
                Our person visits your business or you chat with us on WhatsApp. We understand your business in 15 minutes.
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 bg-accent text-white font-head font-extrabold text-lg rounded-full flex items-center justify-center mb-6 shadow-md shadow-accent/20">
                2
              </div>
              <h3 className="font-head font-bold text-lg text-primary mb-3">We build</h3>
              <p className="text-sm text-slate-500 leading-relaxed max-w-xs">
                Your custom website and local profiles are built within 48 hours. You approve everything before we go live.
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center">
              <div className="w-14 h-14 bg-accent text-white font-head font-extrabold text-lg rounded-full flex items-center justify-center mb-6 shadow-md shadow-accent/20">
                3
              </div>
              <h3 className="font-head font-bold text-lg text-primary mb-3">You go live</h3>
              <p className="text-sm text-slate-500 leading-relaxed max-w-xs">
                We configure domain hosting and map integrations. You just share your brand URL and receive direct customer enquiries.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/how-it-works"
              className="inline-flex items-center gap-1.5 font-head font-bold text-sm text-accent hover:text-accent-dark transition-colors group"
            >
              See the full process <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Portfolio/Built Section */}
      <section className="py-20 bg-slate-50/50 border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-center max-w-xl mx-auto mb-16">
            <h2 className="font-head font-extrabold text-2xl sm:text-3xl text-primary mb-4">
              What we've built
            </h2>
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
              Real website setups for real local service businesses in India. Yours could be next!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">
            {siteConfig.portfolio.slice(0, 3).map((item, i) => (
              <div
                key={i}
                className="border border-slate-200/80 rounded-lg overflow-hidden bg-white hover:shadow-lg transition-all duration-200"
              >
                <div className="relative h-48 bg-slate-100 border-b border-slate-100">
                  <Image
                    src={item.image}
                    alt={`${item.name} mockup preview`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-head font-bold text-base text-primary mb-1">{item.name}</h3>
                  <div className="text-xs text-slate-400 font-medium mb-3 flex items-center gap-1">
                    📍 {item.city}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {item.services.map((svc, idx) => (
                      <span
                        key={idx}
                        className={`text-[0.72rem] font-head font-bold px-2 py-0.5 rounded-full ${
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

          <div className="text-center mt-12">
            <Link
              href="/our-work"
              className="inline-flex items-center gap-1.5 font-head font-bold text-sm text-accent hover:text-accent-dark transition-colors group"
            >
              See all our work <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing CTA Panel */}
      <section className="py-16 md:py-20 bg-primary text-white text-center">
        <div className="max-w-4xl mx-auto px-4 md:px-6 flex flex-col items-center">
          <h2 className="font-head font-extrabold text-2xl sm:text-3xl text-white mb-4">
            No hidden fees. No monthly subscriptions.
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl mb-8 font-body">
            One-time setup fee per service. You own the domain, files, and listings forever.
          </p>
          <div className="flex flex-wrap gap-4 justify-center w-full sm:w-auto">
            <Button variant="primary" href="/pricing" className="w-full sm:w-auto">
              View Pricing
            </Button>
            <Button variant="whatsapp" href={siteConfig.whatsappLinks.general} className="w-full sm:w-auto">
              <MessageSquare className="w-5 h-5 fill-white" /> Chat on WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* Referral Strip */}
      <section className="py-8 bg-orange-50 border-t border-orange-100/50 text-slate-800">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left bg-white/50 border border-orange-200/50 p-4.5 rounded-xl">
            <p className="text-sm font-medium leading-relaxed">
              🎁 <strong>Already a client?</strong> Refer another business owner and earn <span className="text-accent font-bold">₹500</span> cash when they sign up!
            </p>
            <Link
              href="/referral"
              className="font-head font-bold text-sm text-accent hover:text-accent-dark transition-colors flex items-center gap-1.5 group shrink-0"
            >
              Learn about referral program <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
