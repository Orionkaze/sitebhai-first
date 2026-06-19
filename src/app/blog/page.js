import Link from "next/link";
import Image from "next/image";
import { MessageSquare, ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import Button from "@/components/Button";

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Hero */}
      <div className="bg-primary text-white py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="text-xs md:text-sm text-slate-400 mb-3 font-medium">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>{" "}
            &rsaquo; <span className="text-white">Blog</span>
          </div>
          <h1 className="font-head font-extrabold text-3xl md:text-4xl text-white">
            Digital tips for Indian businesses
          </h1>
          <p className="text-slate-300 text-sm md:text-base mt-2 max-w-xl leading-relaxed">
            Practical advice to help your business grow online. Websites, Google listings, and WhatsApp Business explained simply.
          </p>
        </div>
      </div>

      {/* Articles Grid */}
      <section className="py-16 bg-slate-50/30">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {siteConfig.blogPosts.map((post) => (
              <article
                key={post.slug}
                className="border border-slate-200 bg-white rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-56 bg-slate-100 border-b border-slate-100">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3 flex-wrap">
                      <span
                        className={`text-[0.72rem] font-head font-bold px-2.5 py-0.5 rounded-full ${
                          post.badgeType === "accent"
                            ? "bg-orange-50 text-accent border border-orange-100/50"
                            : "bg-emerald-50 text-emerald-600 border border-emerald-100/50"
                        }`}
                      >
                        {post.category}
                      </span>
                      <span className="text-[0.8rem] text-slate-400 font-medium">
                        {post.date}
                      </span>
                    </div>
                    <h3 className="font-head font-bold text-lg text-primary mb-3 leading-snug">
                      <Link href={`/blog/${post.slug}`} className="hover:text-accent transition-colors">
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-4">
                      {post.excerpt}
                    </p>
                  </div>
                </div>
                <div className="px-6 pb-6 pt-2">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="font-head font-bold text-sm text-accent hover:text-accent-dark transition-colors flex items-center gap-1 group"
                  >
                    Read article <span className="group-hover:translate-x-0.5 transition-transform">&rarr;</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Suggest Topic CTA */}
      <section className="py-16 bg-primary text-white text-center">
        <div className="max-w-3xl mx-auto px-4 md:px-6 flex flex-col items-center">
          <h2 className="font-head font-extrabold text-2xl text-white mb-4">
            Have a topic you'd like us to cover?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8 max-w-lg font-body">
            Ask us your question via WhatsApp. We might cover it in our next advice post!
          </p>
          <Button variant="whatsapp" href={siteConfig.whatsappLinks.blogTopic}>
            <MessageSquare className="w-5 h-5 fill-white" /> Chat on WhatsApp
          </Button>
        </div>
      </section>
    </div>
  );
}
