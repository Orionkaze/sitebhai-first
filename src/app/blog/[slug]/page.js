import Link from "next/link";
import { notFound } from "next/navigation";
import { MessageSquare, ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import Button from "@/components/Button";

// Static parameters generation for Next.js static exports
export async function generateStaticParams() {
  return siteConfig.blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogDetailPage({ params }) {
  const resolvedParams = await params;
  const post = siteConfig.blogPosts.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Blog Article Hero */}
      <div className="bg-primary text-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <div className="text-xs md:text-sm text-slate-400 mb-4 font-medium">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>{" "}
            &rsaquo;{" "}
            <Link href="/blog" className="hover:text-white transition-colors">
              Blog
            </Link>{" "}
            &rsaquo; <span className="text-white">Read Article</span>
          </div>

          <span
            className={`inline-block text-[0.72rem] font-head font-bold px-2.5 py-0.5 rounded-full mb-4 ${
              post.badgeType === "accent"
                ? "bg-orange-50 text-accent border border-orange-100/50"
                : "bg-emerald-50 text-emerald-600 border border-emerald-100/50"
            }`}
          >
            {post.category}
          </span>

          <h1 className="font-head font-extrabold text-2xl sm:text-3xl md:text-4xl text-white leading-tight mb-6">
            {post.title}
          </h1>

          <div className="flex flex-wrap gap-4 text-xs md:text-sm text-slate-400 font-medium">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" /> {post.date}
            </div>
            <div className="flex items-center gap-1">
              <User className="w-4 h-4" /> {post.author}
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" /> {post.readTime}
            </div>
          </div>
        </div>
      </div>

      {/* Article Body */}
      <section className="py-12 md:py-16">
        <div className="max-w-2xl mx-auto px-4 md:px-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 font-head font-bold text-xs uppercase tracking-wider text-slate-400 hover:text-accent mb-8 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to blog list
          </Link>

          {/* HTML Render Container */}
          <div
            className="prose prose-slate max-w-none text-slate-700 leading-relaxed font-body
              [&>h2]:font-head [&>h2]:font-bold [&>h2]:text-xl [&>h2]:text-primary [&>h2]:mt-8 [&>h2]:mb-3
              [&>p]:mb-5 [&>p]:text-sm [&>p]:sm:text-base
              [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-6 [&>ul]:space-y-2 [&>ul]:text-sm [&>ul]:sm:text-base
              [&>strong]:font-bold [&>strong]:text-primary"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </section>

      {/* Bottom CTA banner */}
      <section className="py-16 bg-primary text-white text-center">
        <div className="max-w-3xl mx-auto px-4 md:px-6 flex flex-col items-center">
          <h2 className="font-head font-extrabold text-2xl text-white mb-4">
            Ready to get your business online?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8 max-w-lg font-body">
            Website setups starting from ₹2,999. Live in 48 hours. Let's talk!
          </p>
          <Button variant="whatsapp" href={siteConfig.whatsappLinks.general}>
            <MessageSquare className="w-5 h-5 fill-white" /> Connect on WhatsApp
          </Button>
        </div>
      </section>
    </div>
  );
}
