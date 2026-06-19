import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Hero */}
      <div className="bg-primary text-white py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-xs md:text-sm text-slate-400 mb-3 font-medium">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>{" "}
            &rsaquo; <span className="text-white">Terms of Service</span>
          </div>
          <h1 className="font-head font-extrabold text-3xl md:text-4xl text-white">
            Terms of Service
          </h1>
          <p className="text-slate-300 text-sm md:text-base mt-2 max-w-xl leading-relaxed">
            Plain language. No hidden surprises.
          </p>
        </div>
      </div>

      {/* Policy Text Container */}
      <section className="py-16 bg-white text-slate-700 leading-relaxed font-body">
        <div className="max-w-2xl mx-auto px-4 md:px-6">
          <p className="text-xs text-slate-400 font-bold mb-8">
            Last updated: June 2026
          </p>
          <p className="text-sm sm:text-base mb-5 font-semibold">
            By engaging SiteBhai and making a payment, you agree to these terms. If you have questions, ask us before paying — we're happy to clarify anything.
          </p>

          <h2 className="font-head font-bold text-lg text-primary mt-8 mb-3">Scope of work</h2>
          <p className="text-sm sm:text-base mb-5">
            The scope of each project is agreed between SiteBhai and the client via WhatsApp conversation before any payment is made. Work begins only after scope and price are confirmed in writing (WhatsApp messages constitute written confirmation).
          </p>
          <p className="text-sm sm:text-base mb-5">
            Any work outside the agreed scope will be quoted separately before it is started.
          </p>

          <h2 className="font-head font-bold text-lg text-primary mt-8 mb-3">Payment</h2>
          <p className="text-sm sm:text-base mb-5">
            Payment is 100% upfront before work begins. We accept UPI, bank transfer, and other payment methods as agreed. Payment confirmation is required before the 48-hour delivery clock starts.
          </p>

          <h2 className="font-head font-bold text-lg text-primary mt-8 mb-3">Delivery</h2>
          <ul className="list-disc pl-6 mb-5 space-y-2 text-sm sm:text-base">
            <li><strong>Website:</strong> 48 hours from when the client provides their content (text, logo, photos). The 48-hour clock starts from content receipt, not from payment.</li>
            <li><strong>Google Business setup:</strong> 1–2 hours from when we receive necessary access and information.</li>
            <li><strong>WhatsApp Business setup:</strong> 1–2 hours from when we receive access.</li>
            <li><strong>Custom ops tools:</strong> 3–7 days as agreed per project.</li>
          </ul>

          <h2 className="font-head font-bold text-lg text-primary mt-8 mb-3">Revisions</h2>
          <p className="text-sm sm:text-base mb-5">
            Revisions are included until the client approves the work before go-live. We do not go live without explicit client approval. Post-approval, minor changes (text, phone, hours) are free; major changes are ₹1,499+ as agreed.
          </p>

          <h2 className="font-head font-bold text-lg text-primary mt-8 mb-3">Domain ownership</h2>
          <p className="text-sm sm:text-base mb-5">
            Domains are always registered in the client's name. The client retains full ownership of their domain at all times. If the client wishes to move their domain to another registrar or provider, SiteBhai will provide all necessary transfer information at no charge.
          </p>

          <h2 className="font-head font-bold text-lg text-primary mt-8 mb-3">Hosting</h2>
          <p className="text-sm sm:text-base mb-5">
            Websites are hosted on Netlify's free tier. Netlify's own terms of service apply to hosting. SiteBhai is not responsible for Netlify's service availability, though we will assist in resolving any hosting issues that arise.
          </p>

          <h2 className="font-head font-bold text-lg text-primary mt-8 mb-3">Client responsibilities</h2>
          <p className="text-sm sm:text-base mb-5">
            The client is responsible for providing accurate content (text, images, contact details) and for having the legal right to use any photos or logos they provide. SiteBhai is not liable for content provided by the client.
          </p>

          <h2 className="font-head font-bold text-lg text-primary mt-8 mb-3">Governing law</h2>
          <p className="text-sm sm:text-base mb-5">
            These terms are governed by the laws of India. Any disputes will be resolved under Indian jurisdiction.
          </p>

          <h2 className="font-head font-bold text-lg text-primary mt-8 mb-3">Contact</h2>
          <p className="text-sm sm:text-base mb-5">
            Questions about these terms? WhatsApp us: <strong>{siteConfig.phone}</strong>
          </p>
        </div>
      </section>
    </div>
  );
}
