// Central configuration for SiteBhai
export const siteConfig = {
  name: "SiteBhai",
  phone: "+91-XXXXXXXXXX",
  whatsapp: "91XXXXXXXXXX",
  email: "support@sitebhai.com",
  city: "Pune",
  formspreeId: "sitebhaiFormspreeID",
  
  // Quick links for contact CTAs
  whatsappLinks: {
    general: "https://wa.me/91XXXXXXXXXX?text=Hi+SiteBhai!+I%27d+like+to+know+more+about+your+services.",
    generalShort: "https://wa.me/91XXXXXXXXXX?text=Hi+SiteBhai!+I%27d+like+to+know+more.",
    getStarted: "https://wa.me/91XXXXXXXXXX?text=Hi+SiteBhai!+I%27d+like+to+get+my+business+online.",
    website: "https://wa.me/91XXXXXXXXXX?text=Hi+SiteBhai!+I%27m+interested+in+getting+a+website+for+my+business.",
    google: "https://wa.me/91XXXXXXXXXX?text=Hi+SiteBhai!+I%27m+interested+in+Google+Business+setup.",
    whatsappSvc: "https://wa.me/91XXXXXXXXXX?text=Hi+SiteBhai!+I%27m+interested+in+WhatsApp+Business+setup.",
    domain: "https://wa.me/91XXXXXXXXXX?text=Hi+SiteBhai!+I%27m+interested+in+getting+a+domain+for+my+business.",
    ops: "https://wa.me/91XXXXXXXXXX?text=Hi+SiteBhai!+I%27d+like+to+discuss+a+custom+ops+tool+for+my+business.",
    unsure: "https://wa.me/91XXXXXXXXXX?text=Hi+SiteBhai!+I%27m+not+sure+which+services+I+need.+Can+you+help%3F",
    referral: "https://wa.me/91XXXXXXXXXX?text=Hi+SiteBhai!+I%27d+like+to+refer+a+business:+[Name],+[Phone]",
    blogTopic: "https://wa.me/91XXXXXXXXXX?text=Hi+SiteBhai!+I+have+a+topic+suggestion+for+your+blog.",
    salonOwner: "https://wa.me/91XXXXXXXXXX?text=Hi+SiteBhai!+I%27m+a+salon+owner+and+want+to+get+a+website.",
    setupOnline: "https://wa.me/91XXXXXXXXXX?text=Hi+SiteBhai!+I+want+to+set+up+my+business+online."
  },

  // Services list
  services: [
    {
      id: "website",
      slug: "website-development",
      name: "Website Development",
      price: 2999,
      priceLabel: "₹2,999",
      icon: "Globe",
      shortDescription: "Custom, SEO-optimised, mobile-ready. Includes appointment booking. Live in 48 hours.",
      description: "Custom, SEO-optimised, mobile-ready website — built to your requirements and live in 48 hours.",
      included: [
        "All pages the client needs (no page limit)",
        "Appointment booking form built-in",
        "Mobile-responsive design",
        "SEO meta tags + Google Analytics setup",
        "SSL certificate (via Netlify)",
        "Contact form",
        "Live in 48 hours from content receipt"
      ],
      notIncluded: [
        "Ongoing content updates (client provides text/photos)",
        "E-commerce or payment processing",
        "Stock photography (client provides, or we source free-tier)",
        "Domain name (separate add-on — ₹2,499)"
      ],
      whoItIsFor: ["Salons", "Clinics", "CA Firms", "Coaching Institutes", "Restaurants", "Caterers", "Event Planners", "Lawyers", "Gyms"],
      faqs: [
        { q: "Do I need to provide content?", a: "Yes — text about your business, your logo, and photos. We help you structure it so you know exactly what to send us. Most clients send it over WhatsApp." },
        { q: "What if I don't have a logo?", a: "We can use a text-based logo using your business name — it looks clean and professional. Full logo design is a separate service if you'd like one." },
        { q: "Can I add more pages later?", a: "Yes. Adding a new page or section is a major change, priced at ₹1,499+ depending on scope. We agree the price before we start — no surprises." }
      ]
    },
    {
      id: "domain",
      slug: "domain-hosting",
      name: "Domain & Hosting",
      price: 2499,
      priceLabel: "₹2,499",
      icon: "ShieldAlert", // Replaced emoji 🌍 with custom representation or Globe
      shortDescription: "yourname.com — registered in your name, managed by us. First year included.",
      description: "Your own domain, registered in your name, fully managed by us. First year included.",
      included: [
        "Domain registered in your name",
        "Full DNS configuration",
        "Connected to your website",
        "Email forwarding setup (optional)",
        "First year registration included"
      ],
      notIncluded: [
        "Domain renewal from year 2 (₹1,800/yr — we handle separately)",
        "Full email inbox (forwarding only)"
      ],
      whoItIsFor: ["All businesses wanting a professional brand online"],
      faqs: [
        { q: "What domains are included?", a: "We include standard domains like .com, .in, .co.in, or .net. Premium domains are excluded." },
        { q: "Who owns the domain?", a: "You own it completely. It's registered with your contact details and you can transfer it out at any time if you wish." }
      ]
    },
    {
      id: "google",
      slug: "google-business",
      name: "Google Business Setup",
      price: 799,
      priceLabel: "₹799",
      icon: "MapPin",
      shortDescription: "Show up on Google Maps when customers search for your service nearby.",
      description: "Get found on Google Maps when customers search for your service nearby. We handle the full setup.",
      included: [
        "Listing creation or claim",
        "Correct business category",
        "Photo upload (client-provided)",
        "Hours, address, phone number",
        "Business description",
        "Google verification initiated"
      ],
      notIncluded: [
        "Ongoing post management",
        "Responding to reviews",
        "Ongoing photo updates"
      ],
      whoItIsFor: ["Salons", "Clinics", "CA Firms", "Restaurants", "Shops", "Gyms"],
      faqs: [
        { q: "How long does verification take?", a: "Google verification can take anywhere from a few hours to 10 days, depending on the verification method Google requires (video, phone, or postcard). We assist you through the process." },
        { q: "Will I definitely show up at #1?", a: "No one can guarantee #1 ranking. However, a properly set up profile dramatically increases your visibility and ensures you show up when local customers search for you." }
      ]
    },
    {
      id: "whatsapp",
      slug: "whatsapp-business",
      name: "WhatsApp Business",
      price: 799,
      priceLabel: "₹799",
      icon: "MessageSquare",
      shortDescription: "Professional profile, catalog, and auto-replies so customers get instant responses.",
      description: "Professional WhatsApp presence with a business profile, product catalog, and auto-replies.",
      included: [
        "WhatsApp Business account setup",
        "Professional business profile",
        "Product/service catalog (up to 10 items)",
        "Auto-reply greeting message",
        "Away message setup"
      ],
      notIncluded: [
        "Ongoing catalog updates after delivery",
        "CRM or automation integration",
        "WhatsApp API / bulk messaging"
      ],
      whoItIsFor: ["Salons", "Shops", "Caterers", "Clinics", "Any service business"],
      faqs: [
        { q: "Do I need a separate phone number?", a: "We recommend using a separate number for business, but you can convert your existing personal number. Note that you cannot use personal WhatsApp and WhatsApp Business on the same number at the same time." }
      ]
    },
    {
      id: "ops",
      slug: "ops-tools",
      name: "Custom Ops Tool",
      price: 3999,
      priceLabel: "From ₹3,999",
      icon: "Settings",
      shortDescription: "Appointment booking, fee trackers, billing — custom-built to your workflow.",
      description: "Lightweight digital tools built to exactly how your business works — appointment booking, billing, tracking, and more.",
      included: [
        "Tool scoped and built to your workflow",
        "WhatsApp-based scoping call",
        "Fixed quote before work begins",
        "Delivered in 3–7 days"
      ],
      notIncluded: [
        "Anything outside the agreed scope",
        "Ongoing maintenance (separate)"
      ],
      whoItIsFor: ["CA Firms", "Clinics", "Coaching Institutes", "Businesses with custom processes"],
      faqs: [
        { q: "What kind of tools do you build?", a: "Common examples are: simple Excel/Google Sheet automated trackers, custom appointment calculators, client database forms, or simple invoice generators. We talk to you and build what works." }
      ]
    }
  ],

  // Portfolio items
  portfolio: [
    {
      name: "Priya Beauty Parlour",
      city: "Pune",
      type: "salon",
      services: ["Website", "WhatsApp Business", "Sample"],
      image: "/images/portfolio-salon.png"
    },
    {
      name: "Dr. Mehta Family Clinic",
      city: "Mumbai",
      type: "clinic",
      services: ["Website", "Google Business", "Sample"],
      image: "/images/portfolio-clinic.png"
    },
    {
      name: "Sharma & Associates CA",
      city: "Delhi",
      type: "ca-firm",
      services: ["Website", "Domain", "Sample"],
      image: "/images/portfolio-ca.png"
    }
  ],

  // Blog posts
  blogPosts: [
    {
      slug: "salon-website-2026",
      category: "Websites",
      badgeType: "accent",
      date: "June 2026",
      title: "Why your salon needs a website in 2026 — and why it's cheaper than you think",
      excerpt: "Most salons in India are losing customers to competitors who show up on Google. Here's why a website matters — and how you can get one for ₹2,999.",
      readTime: "6 min read",
      author: "SiteBhai Team",
      image: "/images/blog-salon.png",
      content: `
        <p>Think about the last time you wanted to try a new restaurant or find a doctor. Chances are, you Googled it. You looked at photos. You checked reviews. You visited their website before you decided to go.</p>
        <p>Your customers are doing the exact same thing before they book a salon appointment. And if you're not online, they're choosing the competitor who is.</p>
        
        <h2>Your competitors are already online</h2>
        <p>Walk into any upmarket area in any Indian city and you'll find salons with websites — booking forms, service menus, before-and-after photos. These aren't chain salons. They're independent parlours just like yours, run by people who decided to invest ₹3,000 in a website a year ago.</p>
        <p>When a customer searches "best salon near me" or "hair colouring in [your city]," Google shows results based on who has an online presence. A verified Google Business listing. A website. Reviews. If you have none of that, you simply don't appear — regardless of how good your work is.</p>
        <p>The good news: most salons in smaller cities and neighbourhoods still haven't made this move. You can be the first in your area to show up on Google, and that advantage compounds over time as reviews accumulate.</p>
        
        <h2>WhatsApp alone isn't enough</h2>
        <p>Many salon owners we talk to say "but I get bookings on WhatsApp." And that's great — WhatsApp is brilliant for conversations with existing customers. But it doesn't help new customers find you.</p>
        <p>A new customer can't discover you on WhatsApp. She has to already know your number. A website, on the other hand, works 24/7 as a discovery tool — appearing in Google searches, being shareable on Instagram, showing up when someone asks a friend for a recommendation and the friend sends a link.</p>
        <p>WhatsApp and a website aren't alternatives. They work together. A website gets the customer to you; WhatsApp handles the conversation after that.</p>
        
        <div class="bg-orange-50 border-l-4 border-orange-500 p-4 my-6 rounded-r-lg">
          <p class="text-slate-800 text-sm font-medium"><strong>The shift:</strong> In 2026, word-of-mouth still matters — but it increasingly happens online. When someone recommends your salon, the next thing their friend does is Google you. Make sure they find something.</p>
        </div>
        
        <h2>What a salon website actually gives you</h2>
        <p>A good salon website isn't just a digital brochure. It actively works for your business:</p>
        <ul class="list-disc pl-6 mb-6 flex flex-col gap-2">
          <li><strong>Appointment bookings:</strong> Customers can book directly from your website, even at midnight, without needing to call or WhatsApp.</li>
          <li><strong>Service menu:</strong> Show your full services with prices. Reduces "how much for a hair spa?" questions by half.</li>
          <li><strong>Photo gallery:</strong> Before-and-after photos are your most powerful selling tool. A website gives them a permanent, shareable home.</li>
          <li><strong>Trust signals:</strong> A professional website signals that you're serious, established, and worth visiting. It's the difference between "looks legit" and "not sure about this one."</li>
          <li><strong>Google ranking:</strong> A website dramatically increases your chances of appearing in local Google searches.</li>
        </ul>
        
        <h2>The cost myth</h2>
        <p>Most salon owners we speak to assume a website will cost ₹20,000 to ₹50,000. Some have been quoted even more. This is the reason so many haven't moved yet.</p>
        <p>That pricing comes from agencies with high overheads — office rent, large teams, project managers, long timelines. None of that makes your website better. It just makes it more expensive.</p>
        <p>At SiteBhai, we've figured out how to build the same quality website in a fraction of the time using modern tools. A custom, SEO-optimised, mobile-ready salon website with appointment booking — delivered in 48 hours — costs <strong>₹2,999</strong>. One-time. No monthly fees.</p>
        <p>That's less than the cost of a single hair colouring treatment at most salons. And it keeps working for your business 24 hours a day, every day.</p>
        
        <h2>What you need to get started</h2>
        <p>Three things — that's it:</p>
        <ul class="list-disc pl-6 mb-6 flex flex-col gap-2">
          <li><strong>Your business name and contact details</strong> — name, phone, address, working hours</li>
          <li><strong>A few photos</strong> — of your salon, your work, or even just your products. Phone photos are fine.</li>
          <li><strong>Your service list</strong> — what you offer and rough prices. Even a rough list is fine — we help you structure it.</li>
        </ul>
        <p>Most clients send us everything over WhatsApp in one message. We take it from there.</p>
        <p>If you've been meaning to get your salon online and just haven't got around to it, now is the right time. The longer you wait, the more ground your competitors gain on Google. And once they've accumulated reviews and ranking, it takes much longer to catch up.</p>
        <p>WhatsApp us and let's get you live in 48 hours.</p>
      `
    },
    {
      slug: "google-maps-vs-website",
      category: "Google Business",
      badgeType: "green",
      date: "June 2026",
      title: "Google Maps vs website: which does your business actually need first?",
      excerpt: "Both help customers find you — but they work differently. Here's how to decide what to set up first for your type of business.",
      readTime: "6 min read",
      author: "SiteBhai Team",
      image: "/images/blog-maps.png",
      content: `
        <p>One of the most common questions we hear from business owners: "Should I set up Google Business first, or do I need a website?" It's a fair question — both help customers find you online, and if budget is tight, you want to know which one to do first.</p>
        <p>The short answer: they're different tools that do different jobs. Understanding the difference will help you decide what's right for your business right now.</p>
        
        <h2>What Google Business (Maps) actually does</h2>
        <p>Google Business is the listing that appears when someone searches "salon near me" or "CA firm in [city]" on Google or Google Maps. It shows your business name, address, phone number, photos, hours, and reviews — right there in the search results, without the customer needing to visit any website.</p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
          <div class="border border-slate-200 rounded-lg p-5 bg-slate-50">
            <h4 class="font-bold text-slate-900 mb-2">📍 Google Business strengths</h4>
            <ul class="list-disc pl-5 text-sm text-slate-600 flex flex-col gap-1">
              <li>Shows up for "near me" searches</li>
              <li>Displays hours, address, phone — instantly</li>
              <li>Reviews visible directly in search</li>
              <li>Works even without a website</li>
              <li>Free to set up (we charge ₹799 for the setup work)</li>
            </ul>
          </div>
          <div class="border border-slate-200 rounded-lg p-5 bg-slate-50">
            <h4 class="font-bold text-slate-900 mb-2">📍 Google Business limitations</h4>
            <ul class="list-disc pl-5 text-sm text-slate-600 flex flex-col gap-1">
              <li>Limited space for your story</li>
              <li>No appointment booking built in</li>
              <li>No portfolio or detailed service menu</li>
              <li>Less control over design and content</li>
              <li>Weaker for national / non-local searches</li>
            </ul>
          </div>
        </div>
        
        <p>Google Business is extremely powerful for <strong>local search</strong> — customers in your area who are ready to buy. It's often the first thing they see. And with reviews, it builds trust before they've even visited your page.</p>
        
        <h2>What a website does</h2>
        <p>A website is your full online presence. It tells your complete story — who you are, what you offer, photos, prices, your team, testimonials, a booking form. It works for any search, not just local ones. And it's something you control completely.</p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
          <div class="border border-slate-200 rounded-lg p-5 bg-slate-50">
            <h4 class="font-bold text-slate-900 mb-2">🌐 Website strengths</h4>
            <ul class="list-disc pl-5 text-sm text-slate-600 flex flex-col gap-1">
              <li>Full service menu with prices</li>
              <li>Appointment booking form (24/7)</li>
              <li>Photo gallery to showcase work</li>
              <li>Builds more trust with detailed content</li>
              <li>Works for broader searches too</li>
              <li>Your own branded URL</li>
            </ul>
          </div>
          <div class="border border-slate-200 rounded-lg p-5 bg-slate-50">
            <h4 class="font-bold text-slate-900 mb-2">🌐 Website limitations</h4>
            <ul class="list-disc pl-5 text-sm text-slate-600 flex flex-col gap-1">
              <li>Needs content from you to set up</li>
              <li>Takes slightly longer to appear in Google</li>
              <li>Slightly higher upfront cost</li>
            </ul>
          </div>
        </div>
        
        <h2>The key difference</h2>
        <div class="bg-slate-900 text-white rounded-lg p-5 my-6 text-center font-bold">
          Google Business gets you found. A website gets you chosen.
        </div>
        
        <p>Google Business puts you on the map — literally. When someone searches locally, your listing appears. That's discovery. But once they see your listing, they want more information before committing. That's where your website comes in — it converts the curious into the convinced.</p>
        <p>A customer who finds you on Google Maps and then visits a well-made website is far more likely to book than one who finds only a Maps listing with no website link.</p>
        
        <h2>What should you set up first?</h2>
        <p>For most local service businesses — salons, clinics, restaurants, coaches — we recommend this order:</p>
        <ul class="list-disc pl-6 mb-6 flex flex-col gap-2">
          <li><strong>First: Google Business Profile (₹799)</strong> — Immediate impact. You start showing up in local searches within days. Customers searching "near me" can find you right away. This is your fastest path to visibility.</li>
          <li><strong>Second: Website (₹2,999)</strong> — Once you're appearing in search, give people somewhere to go. A website converts searchers into customers, enables online booking, and builds long-term trust.</li>
        </ul>
        
        <div class="bg-orange-50 border-l-4 border-orange-500 p-4 my-6 rounded-r-lg">
          <p class="text-slate-800 text-sm font-medium"><strong>Exception:</strong> If you have customers who find you through referrals and word-of-mouth (rather than local search), start with the website — it gives your referrals somewhere to send people, and it makes you look established.</p>
        </div>
        
        <h2>The best answer: both</h2>
        <p>In practice, Google Business and a website work best together. They reinforce each other — your Google listing links to your website, your website includes a "Find us on Google" prompt, and reviews on your listing build the trust that makes your website convert better.</p>
        <p>Together, Google Business + Website + WhatsApp Business costs ₹3,798 with SiteBhai. That's a complete digital presence for a business — the kind that makes customers trust you before they've even spoken to you.</p>
        <p>If you're not sure where to start for your specific business, just WhatsApp us and describe what you do. We'll tell you exactly what we'd recommend and why — no obligation, no sales pitch.</p>
      `
    }
  ],

  // General FAQs
  faqs: [
    {
      q: "How long does it take?",
      a: "Your website is ready in 48 hours from when you provide your content (text, logo, photos). Google Business and WhatsApp Business setup each take 1–2 hours once we have access. Custom ops tools take 3–7 days depending on complexity."
    },
    {
      q: "Do I need any technical knowledge?",
      a: "None at all. We handle everything from start to finish — domain registration, DNS setup, hosting configuration, Google verification, WhatsApp setup. You just tell us about your business. If you can use WhatsApp, you can work with us."
    },
    {
      q: "What if I want to change something later?",
      a: "Small changes — text, phone number, hours, address — are free, always. Just WhatsApp us and we'll update it. Major changes like new sections, redesigned pages, or new features are ₹1,499+ per request. We agree the price before we start — no surprises."
    },
    {
      q: "Who owns the website and domain?",
      a: "You do, completely. Your domain is registered in your name with your contact details. Your website files belong to you. If you ever want to move away from SiteBhai — for any reason — your website and domain go with you. We never hold anything hostage."
    },
    {
      q: "What about hosting?",
      a: "We host your website on Netlify — a reliable, fast, globally distributed platform used by millions of websites. There is no separate hosting fee. It's included in your website setup price. Netlify's free tier easily handles the traffic of a small business website."
    },
    {
      q: "Do you work outside Pune?",
      a: "We're currently focused on Pune. We're expanding to more cities soon — WhatsApp us and we'll add you to our list and let you know when we reach your area. For Google Business and WhatsApp setup, we can often work remotely regardless of location."
    },
    {
      q: "Is there a contract or subscription?",
      a: "No contract, no subscription. Each service is a one-time payment. No monthly fees, no lock-in, no auto-renewals (except domain renewal at ₹1,800/yr, which we remind you about and handle only when you confirm)."
    },
    {
      q: "What if I already have a domain?",
      a: "We'll use it — no need to buy a new one. We'll ask you for access to your domain registrar (GoDaddy, BigRock, etc.) and configure the DNS to point to your new website. No additional domain charge."
    },
    {
      q: "What if I'm not happy with the website?",
      a: "We revise until you approve it. We don't go live without your explicit sign-off. If something doesn't look right — colours, layout, wording — just tell us and we'll fix it. Revisions before go-live are included in the price."
    }
  ]
};
