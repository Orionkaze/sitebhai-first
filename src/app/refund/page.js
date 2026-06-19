import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";

export default function RefundPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Hero */}
      <div className="bg-primary text-white py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-xs md:text-sm text-slate-400 mb-3 font-medium">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>{" "}
            &rsaquo; <span className="text-white">Refund Policy</span>
          </div>
          <h1 className="font-head font-extrabold text-3xl md:text-4xl text-white">
            Refund &amp; Cancellation Policy
          </h1>
          <p className="text-slate-300 text-sm md:text-base mt-2 max-w-xl leading-relaxed">
            Clear and fair. Here is exactly what applies.
          </p>
        </div>
      </div>

      {/* Policy Text Container */}
      <section className="py-16 bg-white text-slate-700 leading-relaxed font-body">
        <div className="max-w-2xl mx-auto px-4 md:px-6">
          <p className="text-xs text-slate-400 font-bold mb-8">
            Last updated: June 2026
          </p>

          <h2 className="font-head font-bold text-lg text-primary mt-8 mb-3">Cancellation within 24 hours</h2>
          <div className="bg-orange-50 border-l-4 border-accent p-4.5 rounded-r-lg my-6 text-slate-800 text-sm sm:text-base">
            <p className="leading-relaxed">
              <strong>Full refund available</strong> if you cancel within 24 hours of payment and work has not yet started. Contact us via WhatsApp at {siteConfig.phone} to request cancellation.
            </p>
          </div>
          <p className="text-sm sm:text-base mb-5">
            Once we confirm that work has not yet started, we will process a full refund to your original payment method within 3–5 business days.
          </p>

          <h2 className="font-head font-bold text-lg text-primary mt-8 mb-3">No refund once work has begun</h2>
          <p className="text-sm sm:text-base mb-5">
            Once work has started on your project, no refund will be issued. &ldquo;Work has started&rdquo; means we have registered files, initiated design setups, configured Google maps coordinates, or set up catalogs.
          </p>
          <p className="text-sm sm:text-base mb-5">
            This is because our costs are primarily time and custom labour — once that time has been spent, it cannot be recovered. We believe this is fair, which is why we scope and agree everything before starting.
          </p>

          <h2 className="font-head font-bold text-lg text-primary mt-8 mb-3">Domain registration</h2>
          <p className="text-sm sm:text-base mb-5">
            The domain service fee (₹2,499) is non-refundable once the domain has been registered in your name. Domain registration is an immediate action with a third-party registrar and cannot be reversed.
          </p>

          <h2 className="font-head font-bold text-lg text-primary mt-8 mb-3">Post-approval</h2>
          <p className="text-sm sm:text-base mb-5">
            Once you have reviewed and approved your website (or other deliverable), the project is considered complete. Refunds are not applicable after client approval. If you are unhappy with any aspect of the work before approval, we will revise it — revisions before go-live are fully included.
          </p>

          <h2 className="font-head font-bold text-lg text-primary mt-8 mb-3">Revisions before go-live</h2>
          <p className="text-sm sm:text-base mb-5">
            We revise until you approve. If something isn't right, the correct course of action is to ask for a revision — not to request a refund. We take this seriously and will fix issues until you are satisfied.
          </p>

          <h2 className="font-head font-bold text-lg text-primary mt-8 mb-3">How to request a refund or cancellation</h2>
          <p className="text-sm sm:text-base mb-5">
            Contact us via WhatsApp: <strong>{siteConfig.phone}</strong>
          </p>
          <p className="text-sm sm:text-base mb-5">
            Please include your name, the service you paid for, and the date of payment. We will confirm receipt and process eligible refunds promptly.
          </p>

          <h2 className="font-head font-bold text-lg text-primary mt-8 mb-3">Disputes</h2>
          <p className="text-sm sm:text-base mb-5">
            If you believe a refund is warranted and we have not agreed, contact us directly via WhatsApp. We will do our best to resolve any dispute fairly. Our goal is always a satisfied client — we'd rather fix the problem than argue.
          </p>
        </div>
      </section>
    </div>
  );
}
