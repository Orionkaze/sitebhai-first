"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function AccordionItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-200/80 last:border-b-0 py-4.5">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between gap-4 text-left font-head font-bold text-slate-900 hover:text-accent transition-colors py-1 text-base md:text-[1.05rem] cursor-pointer"
        aria-expanded={isOpen}
      >
        <span>{question}</span>
        <span className="text-accent flex-shrink-0">
          {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
        </span>
      </button>
      <div
        className={`transition-all duration-200 ease-in-out overflow-hidden ${
          isOpen ? "max-h-96 opacity-100 mt-2.5" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-slate-500 leading-relaxed text-sm md:text-[0.98rem] pb-2">
          {answer}
        </p>
      </div>
    </div>
  );
}
