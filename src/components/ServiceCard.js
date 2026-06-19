import Link from "next/link";
import * as Icons from "lucide-react";

export default function ServiceCard({ service, isDashed = false }) {
  if (isDashed) {
    return (
      <div className="border-2 border-dashed border-slate-200 rounded-lg p-6 bg-slate-50 flex flex-col items-center justify-center text-center hover:border-accent hover:bg-orange-50/20 transition-all duration-200">
        <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 mb-4">
          <Icons.Wrench className="w-6 h-6 text-slate-600" />
        </div>
        <h3 className="font-head font-bold text-lg text-primary mb-2">Build your own</h3>
        <p className="text-sm text-slate-500 mb-4 max-w-xs">
          Mix and match services. Pay only for what your business needs.
        </p>
        <Link
          href="/pricing"
          className="font-head font-bold text-sm text-accent hover:text-accent-dark flex items-center gap-1 group"
        >
          See pricing <span className="group-hover:translate-x-0.5 transition-transform">&rarr;</span>
        </Link>
      </div>
    );
  }

  const IconComponent = Icons[service.icon] || Icons.HelpCircle;

  return (
    <div className="border border-slate-200/80 rounded-lg p-6 bg-white hover-lift flex flex-col justify-between">
      <div>
        <div className="w-12 h-12 rounded-lg bg-orange-50 flex items-center justify-center text-accent mb-4 border border-orange-100/50">
          <IconComponent className="w-6 h-6" />
        </div>
        <h3 className="font-head font-bold text-lg text-primary mb-1">{service.name}</h3>
        <div className="font-head font-extrabold text-xl text-accent mb-3">
          {service.priceLabel}
        </div>
        <p className="text-sm text-slate-500 leading-relaxed mb-4">
          {service.shortDescription}
        </p>
      </div>
      <Link
        href={`/services/${service.slug}`}
        className="font-head font-bold text-sm text-accent hover:text-accent-dark flex items-center gap-1 group mt-2"
      >
        Learn more <span className="group-hover:translate-x-0.5 transition-transform">&rarr;</span>
      </Link>
    </div>
  );
}
