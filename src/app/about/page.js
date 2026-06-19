import Link from "next/link";
import { MessageSquare, Heart, Shield, Terminal, Settings } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import Button from "@/components/Button";

export default function AboutPage() {
  const values = [
    {
      icon: "Heart", // Transparent Pricing
      title: "Transparent pricing",
      desc: "You see exactly what you pay before we start. No surprises, no hidden setup fees. The price on the website is the price you pay.",
    },
    {
      icon: "Shield", // No Lock-in
      title: "No lock-in",
      desc: "Your domain is registered in your name. Your website files belong to you. If you ever decide to move away, you take everything with you. We hold nothing hostage.",
    },
    {
      icon: "Terminal", // No Jargon
      title: "No jargon",
      desc: "We explain everything in plain language. You don't need to know DNS, server protocols, or SSL. We handle the tech; you focus on your customers.",
    },
    {
      icon: "Settings", // Done For You
      title: "Done for you",
      desc: "You focus on running your business. We handle the digital side completely. From registering domains to maps verification, you do nothing.",
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
            &rsaquo; <span className="text-white">About</span>
          </div>
          <h1 className="font-head font-extrabold text-3xl md:text-4xl text-white">
            About SiteBhai
          </h1>
          <p className="text-slate-300 text-sm md:text-base mt-2 max-w-xl leading-relaxed">
            We make digital setups affordable and simple for local service businesses in India.
          </p>
        </div>
      </div>

      {/* Why We Exist Section */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 md:px-6">
          <span className="inline-block font-head font-bold text-xs uppercase tracking-widest text-accent mb-2">
            Why we exist
          </span>
          <h2 className="font-head font-extrabold text-2xl text-primary mb-6">
            The problem we're solving
          </h2>
          <div className="space-y-4 text-slate-500 font-body text-sm sm:text-base leading-relaxed">
            <p>
              Local agencies in India charge ₹25,000 to ₹1,50,000 for a website. Most small business owners we talk to have been told they "should get online" but never acted — because that cost felt out of reach.
            </p>
            <p>
              The beauty salon owner. The family clinic. The local CA firm. The coaching center. These are businesses serving real customers every day. They deserve to be searchable online, and their customers deserve to find them.
            </p>
            <p>
              We figured out how to build professional, custom websites faster using modern static frameworks. We cut down our agency overheads and pass those direct savings to you.
            </p>
          </div>

          <div className="bg-primary text-white rounded-xl p-6 md:p-8 my-10 relative overflow-hidden shadow-lg shadow-primary/10">
            <p className="font-head font-bold text-lg md:text-xl text-white leading-relaxed relative z-10">
              "₹2,999 for a real website. Not a template you have to manage yourself. A done-for-you digital setup — built, launched, and handed over."
            </p>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-accent/10 rounded-full blur-2xl"></div>
          </div>
        </div>
      </section>

      {/* How We Keep Prices Low */}
      <section className="py-16 bg-slate-50/50 border-t border-slate-200/40">
        <div className="max-w-3xl mx-auto px-4 md:px-6">
          <span className="inline-block font-head font-bold text-xs uppercase tracking-widest text-accent mb-2">
            How we do it
          </span>
          <h2 className="font-head font-extrabold text-2xl text-primary mb-6">
            How we keep setup prices low
          </h2>
          <div className="space-y-4 text-slate-500 font-body text-sm sm:text-base leading-relaxed">
            <p>
              We use static site generation, clean custom components, and highly reliable hosting platforms like Netlify/Vercel. We use the same engineering processes used by major tech teams, now applied directly to help small business owners.
            </p>
            <p>
              You don't need to understand any of the tech. You just get a fast, highly secure website at an honest price. No compromise on quality.
            </p>
            <p>
              We don't rent fancy offices or run heavy digital ads. We grow almost entirely via referrals and word-of-mouth — which keeps our overheads low and keeps us focused on doing excellent work.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <span className="inline-block font-head font-bold text-xs uppercase tracking-widest text-accent mb-2">
            What we believe
          </span>
          <h2 className="font-head font-extrabold text-2xl sm:text-3xl text-primary mb-12 text-center md:text-left">
            Our Values
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {values.map((v, i) => {
              let Icon = Heart;
              if (v.icon === "Shield") Icon = Shield;
              if (v.icon === "Terminal") Icon = Terminal;
              if (v.icon === "Settings") Icon = Settings;

              return (
                <div
                  key={i}
                  className="border border-slate-200 bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <div className="w-10 h-10 rounded-lg bg-orange-50 text-accent flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-head font-bold text-base text-primary mb-2">
                    {v.title}
                  </h3>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team placeholders */}
      <section className="py-16 bg-slate-50/50 border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <span className="inline-block font-head font-bold text-xs uppercase tracking-widest text-accent mb-2">
            The team
          </span>
          <h2 className="font-head font-extrabold text-2xl sm:text-3xl text-primary mb-12">
            Our Team
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-xl">
            <div className="border border-slate-200 bg-white rounded-xl p-6 shadow-sm text-center">
              <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-400 text-2xl mx-auto mb-4">
                SB
              </div>
              <h3 className="font-head font-bold text-base text-primary">Founder</h3>
              <div className="text-xs text-accent font-semibold tracking-wide uppercase mt-1">
                Business &amp; Strategy
              </div>
              <div className="text-xs text-slate-400 font-medium mt-3 flex items-center justify-center gap-1">
                📍 Pune
              </div>
            </div>

            <div className="border border-slate-200 bg-white rounded-xl p-6 shadow-sm text-center">
              <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-400 text-2xl mx-auto mb-4">
                SB
              </div>
              <h3 className="font-head font-bold text-base text-primary">Client Relations</h3>
              <div className="text-xs text-accent font-semibold tracking-wide uppercase mt-1">
                Sales &amp; Scoping
              </div>
              <div className="text-xs text-slate-400 font-medium mt-3 flex items-center justify-center gap-1">
                📍 Pune
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Block */}
      <section className="py-16 bg-primary text-white text-center">
        <div className="max-w-3xl mx-auto px-4 md:px-6 flex flex-col items-center">
          <h2 className="font-head font-extrabold text-2xl text-white mb-4">
            Let's work together
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8 max-w-lg font-body">
            Get your business the online credibility it deserves. Connect on WhatsApp today.
          </p>
          <Button variant="whatsapp" href={siteConfig.whatsappLinks.general}>
            <MessageSquare className="w-5 h-5 fill-white" /> Connect on WhatsApp
          </Button>
        </div>
      </section>
    </div>
  );
}
