import Link from "next/link";
import { siteConfig } from "@/config/siteConfig";

export default function Footer() {
  const serviceLinks = siteConfig.services.map((svc) => ({
    name: svc.name,
    href: `/services/${svc.slug}`,
  }));

  const companyLinks = [
    { name: "About Us", href: "/about" },
    { name: "Our Work", href: "/our-work" },
    { name: "Blog / Advice", href: "/blog" },
    { name: "Referral Program", href: "/referral" },
    { name: "Contact Us", href: "/contact" },
  ];

  const helpLinks = [
    { name: "Frequently Asked Questions", href: "/faq" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Refund Policy", href: "/refund" },
  ];

  return (
    <footer className="bg-primary text-slate-300 font-body py-12 md:py-16 mt-auto">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* Brand Info */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="font-head font-extrabold text-2xl text-white select-none">
              Site<span className="text-accent">Bhai</span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
              Done-for-you digital setup for Indian service businesses. Website, Google listing, WhatsApp Business — we handle everything.
            </p>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-head font-bold text-xs uppercase tracking-wider text-white mb-4">
              Services
            </h4>
            <ul className="flex flex-col gap-2.5">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-head font-bold text-xs uppercase tracking-wider text-white mb-4">
              Company
            </h4>
            <ul className="flex flex-col gap-2.5">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help & Legal Links */}
          <div>
            <h4 className="font-head font-bold text-xs uppercase tracking-wider text-white mb-4">
              Help
            </h4>
            <ul className="flex flex-col gap-2.5">
              {helpLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} SiteBhai. All rights reserved.
          </p>
          <div className="flex items-center gap-1">
            <span className="text-xs text-slate-500">Support:</span>
            <a
              href={`https://wa.me/${siteConfig.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-wa-green hover:underline"
            >
              {siteConfig.phone}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
