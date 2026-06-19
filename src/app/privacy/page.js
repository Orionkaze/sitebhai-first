import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Hero */}
      <div className="bg-primary text-white py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-xs md:text-sm text-slate-400 mb-3 font-medium">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>{" "}
            &rsaquo; <span className="text-white">Privacy Policy</span>
          </div>
          <h1 className="font-head font-extrabold text-3xl md:text-4xl text-white">
            Privacy Policy
          </h1>
          <p className="text-slate-300 text-sm md:text-base mt-2 max-w-xl leading-relaxed">
            We keep it simple: we collect only what is needed to deliver your service, and we never sell your data.
          </p>
        </div>
      </div>

      {/* Policy Text Container */}
      <section className="py-16 bg-white text-slate-700 leading-relaxed font-body">
        <div className="max-w-2xl mx-auto px-4 md:px-6">
          <p className="text-xs text-slate-400 font-bold mb-8">
            Last updated: June 2026
          </p>

          <h2 className="font-head font-bold text-lg text-primary mt-8 mb-3">Who we are</h2>
          <p className="text-sm sm:text-base mb-5">
            SiteBhai is a digital services provider based in India that builds websites, configures Google Business profiles, and sets up WhatsApp Business accounts for Indian service-based small businesses.
          </p>

          <h2 className="font-head font-bold text-lg text-primary mt-8 mb-3">What data we collect</h2>
          <p className="text-sm sm:text-base mb-4">
            We collect only the information you share directly with us when you reach out or buy our services:
          </p>
          <ul className="list-disc pl-6 mb-5 space-y-2 text-sm sm:text-base">
            <li>Your name</li>
            <li>Your WhatsApp or contact phone number</li>
            <li>Your business name and business type</li>
            <li>Any other details you send via WhatsApp or our contact forms</li>
          </ul>
          <p className="text-sm sm:text-base mb-5">
            We also use Google Analytics (GA4) to trace site traffic and count visits. This collects anonymous logs only (device types, approximate locations, page visits). No personally identifying information is tracked via analytics.
          </p>

          <h2 className="font-head font-bold text-lg text-primary mt-8 mb-3">How we use your information</h2>
          <p className="text-sm sm:text-base mb-4">
            We use the data you supply only to:
          </p>
          <ul className="list-disc pl-6 mb-5 space-y-2 text-sm sm:text-base">
            <li>Deliver the digital setup services you request</li>
            <li>Contact you about files, reviews, or revisions</li>
            <li>Follow up to ensure your setup runs smoothly</li>
          </ul>
          <p className="text-sm sm:text-base mb-5">
            We do not use your contact information to send promotional spam.
          </p>

          <h2 className="font-head font-bold text-lg text-primary mt-8 mb-3">Who we share your data with</h2>
          <p className="text-sm sm:text-base mb-5">
            We do not sell, rent, or lease your personal contact details to any third-party marketing companies.
          </p>
          <p className="text-sm sm:text-base mb-4">
            The only third-party systems processing details are:
          </p>
          <ul className="list-disc pl-6 mb-5 space-y-2 text-sm sm:text-base">
            <li><strong>Google Analytics</strong> — anonymous website visitor tracking only</li>
            <li><strong>Formspree</strong> — processes our contact forms and forwards messages to us</li>
            <li><strong>WhatsApp</strong> — conversations happen on WhatsApp and are subject to WhatsApp's policies</li>
          </ul>

          <h2 className="font-head font-bold text-lg text-primary mt-8 mb-3">Data retention</h2>
          <p className="text-sm sm:text-base mb-5">
            We retain client configurations as long as you use our domain management. If you want us to delete your details, WhatsApp us at {siteConfig.phone} and we will clear it from our files within 7 days.
          </p>

          <h2 className="font-head font-bold text-lg text-primary mt-8 mb-3">Your rights</h2>
          <p className="text-sm sm:text-base mb-5">
            You can query what data we hold, ask for corrections of outdated numbers, or request full deletion of files at any time. Simply connect with us via WhatsApp.
          </p>

          <h2 className="font-head font-bold text-lg text-primary mt-8 mb-3">Contact</h2>
          <p className="text-sm sm:text-base mb-5">
            For privacy inquiries, connect via WhatsApp: <strong>{siteConfig.phone}</strong>
          </p>
        </div>
      </section>
    </div>
  );
}
