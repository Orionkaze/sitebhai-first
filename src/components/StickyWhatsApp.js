"use client";

import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export default function StickyWhatsApp() {
  return (
    <a
      href={siteConfig.whatsappLinks.generalShort}
      target="_blank"
      rel="noopener noreferrer"
      className="md:hidden fixed bottom-6 right-6 z-40 bg-wa-green hover:bg-wa-dark text-white font-head font-bold text-sm px-5 py-3.5 rounded-full shadow-lg shadow-wa-green/30 flex items-center gap-2 transition-all duration-200 hover:scale-105 active:scale-95"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-5 h-5 fill-white" />
      <span>WhatsApp Us</span>
    </a>
  );
}
