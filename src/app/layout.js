import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyWhatsApp from "@/components/StickyWhatsApp";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-head",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "SiteBhai — Website, Google Business & WhatsApp Setup for Indian Businesses",
  description: "Done-for-you digital setup for Indian service businesses. Website in 48 hours from ₹2,999. Google Business, WhatsApp Business. We handle everything.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${inter.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-white text-slate-800 antialiased pt-[72px]">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <StickyWhatsApp />
      </body>
    </html>
  );
}
