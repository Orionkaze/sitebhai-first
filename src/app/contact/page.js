"use client";

import { useState } from "react";
import Link from "next/link";
import { MessageSquare, Phone, Clock, Zap, MapPin, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import Button from "@/components/Button";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    businessType: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Check if formspree ID is standard placeholder or empty
    if (siteConfig.formspreeId === "sitebhaiFormspreeID" || !siteConfig.formspreeId) {
      // Simulate network request
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: "", whatsapp: "", businessType: "", message: "" });
      return;
    }

    try {
      const response = await fetch(`https://formspree.io/f/${siteConfig.formspreeId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          whatsapp: formData.whatsapp,
          businessType: formData.businessType,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setSubmitSuccess(true);
        setFormData({ name: "", whatsapp: "", businessType: "", message: "" });
      } else {
        alert("There was a problem submitting your request. Please try again or WhatsApp us!");
      }
    } catch (err) {
      alert("Something went wrong. Please connect with us directly on WhatsApp!");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Hero */}
      <div className="bg-primary text-white py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-xs md:text-sm text-slate-400 mb-3 font-medium">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>{" "}
            &rsaquo; <span className="text-white">Contact</span>
          </div>
          <h1 className="font-head font-extrabold text-3xl md:text-4xl text-white">
            Get in touch
          </h1>
          <p className="text-slate-300 text-sm md:text-base mt-2 max-w-xl leading-relaxed">
            Have questions about website setup or custom ops tools? We reply same-day.
          </p>
        </div>
      </div>

      {/* Contact content grid */}
      <section className="py-16 bg-slate-50/20">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            
            {/* Form Column */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm">
              <h2 className="font-head font-bold text-xl text-primary mb-6">
                Send us a message
              </h2>

              {submitSuccess ? (
                <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-6 rounded-xl text-center flex flex-col items-center gap-4">
                  <CheckCircle2 className="w-12 h-12 text-emerald-600 animate-bounce" />
                  <div>
                    <h4 className="font-head font-bold text-base mb-1">Message Sent Successfully!</h4>
                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-body">
                      Thank you for reaching out. We have received your query and will connect with you on WhatsApp shortly.
                    </p>
                  </div>
                  <button
                    onClick={() => setSubmitSuccess(false)}
                    className="font-head font-bold text-xs uppercase tracking-wider text-accent hover:underline mt-2 cursor-pointer"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="font-head font-bold text-xs uppercase tracking-wider text-slate-400">
                      Your name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Priya Sharma"
                      className="border border-slate-200 focus:border-accent focus:outline-none rounded-md px-4 py-3 text-sm text-slate-800 transition-colors bg-slate-50/50"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="whatsapp" className="font-head font-bold text-xs uppercase tracking-wider text-slate-400">
                      WhatsApp number *
                    </label>
                    <input
                      type="tel"
                      id="whatsapp"
                      name="whatsapp"
                      required
                      value={formData.whatsapp}
                      onChange={handleChange}
                      placeholder="e.g. 98765 43210"
                      className="border border-slate-200 focus:border-accent focus:outline-none rounded-md px-4 py-3 text-sm text-slate-800 transition-colors bg-slate-50/50"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="businessType" className="font-head font-bold text-xs uppercase tracking-wider text-slate-400">
                      Business type
                    </label>
                    <input
                      type="text"
                      id="businessType"
                      name="businessType"
                      value={formData.businessType}
                      onChange={handleChange}
                      placeholder="e.g. Salon, Clinic, CA Firm, Shop"
                      className="border border-slate-200 focus:border-accent focus:outline-none rounded-md px-4 py-3 text-sm text-slate-800 transition-colors bg-slate-50/50"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="message" className="font-head font-bold text-xs uppercase tracking-wider text-slate-400">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your business and what digital services you need..."
                      className="border border-slate-200 focus:border-accent focus:outline-none rounded-md px-4 py-3 text-sm text-slate-800 transition-colors bg-slate-50/50 resize-y min-h-[120px]"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-accent hover:bg-accent-dark disabled:bg-slate-300 text-white font-head font-semibold py-3.5 rounded-md transition-colors cursor-pointer text-center select-none"
                  >
                    {isSubmitting ? "Sending message..." : "Send message"}
                  </button>
                  <p className="text-[0.72rem] text-slate-400 font-medium text-center mt-1">
                    Or WhatsApp us directly — we often reply much faster there.
                  </p>
                </form>
              )}
            </div>

            {/* Direct Contact column */}
            <div className="flex flex-col gap-6">
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm flex flex-col gap-6">
                <h3 className="font-head font-bold text-lg text-primary">
                  Talk to us directly
                </h3>

                <div className="flex gap-4 items-start border-b border-slate-200/60 pb-5">
                  <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MessageSquare className="w-5 h-5 fill-white" />
                  </div>
                  <div>
                    <h4 className="font-head font-bold text-xs uppercase tracking-wider text-slate-400 mb-0.5">
                      WhatsApp
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-500 mb-3 leading-relaxed">
                      The absolute fastest way to connect with us.
                    </p>
                    <Button variant="whatsapp" size="sm" href={siteConfig.whatsappLinks.general}>
                      <MessageSquare className="w-4 h-4 fill-white" /> Chat on WhatsApp
                    </Button>
                  </div>
                </div>

                <div className="flex gap-4 items-start border-b border-slate-200/60 pb-5">
                  <div className="w-10 h-10 rounded-full bg-orange-50 text-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-head font-bold text-xs uppercase tracking-wider text-slate-400 mb-0.5">
                      Phone Number
                    </h4>
                    <p className="text-sm font-semibold text-slate-800 leading-normal">
                      {siteConfig.phone}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start border-b border-slate-200/60 pb-5">
                  <div className="w-10 h-10 rounded-full bg-orange-50 text-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-head font-bold text-xs uppercase tracking-wider text-slate-400 mb-0.5">
                      Business Hours
                    </h4>
                    <p className="text-sm font-semibold text-slate-800 leading-normal">
                      Monday–Saturday, 9am–7pm
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start border-b border-slate-200/60 pb-5">
                  <div className="w-10 h-10 rounded-full bg-orange-50 text-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-head font-bold text-xs uppercase tracking-wider text-slate-400 mb-0.5">
                      Response Time
                    </h4>
                    <p className="text-sm font-semibold text-slate-800 leading-normal">
                      Same-day replies on all messages
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-orange-50 text-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-head font-bold text-xs uppercase tracking-wider text-slate-400 mb-0.5">
                      Location
                    </h4>
                    <p className="text-sm font-semibold text-slate-800 leading-normal">
                      {siteConfig.city}, India
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
