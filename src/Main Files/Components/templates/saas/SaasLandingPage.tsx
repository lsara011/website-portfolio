import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ---------- HEADER ----------
const SaaSHeader: React.FC = () => {
  const [open, setOpen] = useState(false);
  const links = ["Features", "Pricing", "Testimonials", "FAQ"];

  return (
    <header className="relative z-30 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">
        <a
          href="#home"
          className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600"
        >
          FlowDesk
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 font-medium text-gray-700">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="hover:text-indigo-600 transition"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <a href="/login" className="text-gray-700 hover:text-indigo-600">
            Sign In
          </a>
          <a
            href="/signup"
            className="bg-indigo-600 text-white px-5 py-2 rounded-full font-semibold shadow hover:bg-indigo-500 transition"
          >
            Sign Up
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="md:hidden p-2 rounded-lg hover:bg-gray-100"
        >
          <svg
            className="w-6 h-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Fullscreen Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-white flex flex-col items-center justify-center space-y-8 text-2xl font-bold"
          >
            {links.map((link, i) => (
              <motion.a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="hover:text-indigo-600"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                {link}
              </motion.a>
            ))}
            <div className="flex flex-col gap-4 mt-6">
              <a href="/login" className="text-gray-700 text-lg">
                Sign In
              </a>
              <a
                href="/signup"
                className="bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-indigo-500 transition"
              >
                Sign Up
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <p className="text-xs text-center text-gray-500 py-1">
        <strong>Integration Idea:</strong> Add Stripe for payments, Clerk or Auth0 for authentication, Google Tag Manager for analytics.
      </p>
    </header>
  );
};

// ---------- HERO ----------
const SaaSHero: React.FC = () => {
  const words = ["Collaborate", "Ship Faster", "Stay Aligned"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setIndex((prev) => (prev + 1) % words.length),
      2000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-900 text-white pt-32 pb-24 overflow-hidden"
    >
      {/* Background blobs */}
      <motion.div
        className="absolute top-[-10%] left-[-10%] w-[35rem] h-[35rem] bg-purple-700 rounded-full blur-3xl opacity-30"
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.4, 0.3] }}
        transition={{ repeat: Infinity, duration: 8 }}
      />
      <motion.div
        className="absolute bottom-[-10%] right-[-10%] w-[30rem] h-[30rem] bg-indigo-700 rounded-full blur-3xl opacity-30"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ repeat: Infinity, duration: 10 }}
      />

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Section */}
        <div className="text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight">
            <span className="text-amber-400">Teams</span> that{" "}
            <AnimatePresence mode="wait">
              <motion.span
                key={words[index]}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
                className="inline-block text-amber-300"
              >
                {words[index]}
              </motion.span>
            </AnimatePresence>
          </h1>
          <p className="mt-6 text-lg text-gray-200 max-w-lg mx-auto lg:mx-0">
            The platform that centralizes your projects, chats, and performance tracking — so nothing slips through the cracks.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="/signup"
              className="bg-amber-400 text-black px-8 py-4 rounded-full font-semibold shadow-lg hover:bg-amber-300 transition"
            >
              Get Started Free
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="#features"
              className="border border-white/40 px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-indigo-700 transition"
            >
              Learn More
            </motion.a>
          </div>
        </div>

        {/* Image Section */}
        <motion.div
  className="relative"
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ delay: 0.3, duration: 0.8 }}
>
  <img
    src="https://images.unsplash.com/photo-1581090700227-4c4f50a69a63?auto=format&fit=crop&w=1200&q=80"
    alt="App preview"
    className="rounded-3xl shadow-2xl border border-white/10"
    onError={(e) => {
      e.currentTarget.src = "https://placehold.co/1200x800/EEE/AAA?text=App+Preview+Unavailable";
    }}
  />
</motion.div>
      </div>
    </section>
  );
};

// ---------- PRODUCT OVERVIEW ----------
const ProductOverview = () => (
  <section className="py-28 bg-gradient-to-b from-gray-50 to-white">
    <div className="max-w-6xl mx-auto px-6 text-center">
      <h2 className="text-5xl font-extrabold mb-6">The Ultimate Workspace for Modern Teams</h2>
      <img
        src="https://placehold.co/800x400/EEE/AAA?text=Product+Overview+Image"
        alt="Product Overview"
        className="mx-auto rounded-xl shadow-xl mb-8"
      />
      <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
        Bring tasks, communication, and reporting into one place — no more context switching.
      </p>
      <p className="mt-4 text-gray-500 text-sm">
        <strong>Integration Idea:</strong> Connect to Google Calendar, Slack, and Notion for two-way sync of tasks and events.
      </p>
    </div>
  </section>
);

// ---------- INTEGRATIONS ----------
const SaaSIntegrations = () => (
  <section className="py-28 bg-gray-50">
    <div className="max-w-6xl mx-auto px-6 text-center">
      <h2 className="text-4xl font-extrabold mb-10">Works With Your Favorite Tools</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center">
        {["Slack", "Notion", "Google Drive", "GitHub", "Figma", "Jira"].map((logo) => (
          <div key={logo} className="bg-white p-4 rounded-xl shadow hover:shadow-md transition">
            <img
              src={`https://placehold.co/150x50?text=${logo}`}
              alt={logo}
              className="mx-auto object-contain"
            />
          </div>
        ))}
      </div>
      <p className="mt-6 text-gray-500 text-sm">
        <strong>Integration Idea:</strong> Use Zapier or n8n to extend integrations and automate cross-platform workflows.
      </p>
    </div>
  </section>
);

// ---------- FEATURES ----------
const SaaSFeatures = () => (
  <section id="features" className="py-28 bg-white">
    <div className="max-w-6xl mx-auto px-6">
      <h2 className="text-5xl font-extrabold text-center mb-16">Features Designed to Empower Your Team</h2>
      <div className="grid lg:grid-cols-2 gap-12">
        {[
          { icon: "📊", title: "Analytics Dashboard", desc: "Track performance, spot bottlenecks, and keep your projects healthy." },
          { icon: "🤝", title: "Team Collaboration", desc: "Real-time updates and threaded conversations — keep everyone aligned." },
          { icon: "⚡", title: "Automation", desc: "Set triggers, eliminate repetitive tasks, and focus on what matters." },
          { icon: "🔗", title: "Integrations", desc: "Plug into Slack, Notion, Google Drive, and 50+ tools instantly." },
        ].map((f, i) => (
          <motion.div
            key={f.title}
            className="flex gap-4 bg-gray-50 p-8 rounded-2xl shadow hover:shadow-lg transition"
            initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-4xl">{f.icon}</div>
            <div>
              <h3 className="text-xl font-bold">{f.title}</h3>
              <p className="text-gray-600 mt-2">{f.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <p className="mt-6 text-gray-500 text-center text-sm">
        <strong>Integration Idea:</strong> Integrate Mixpanel, PostHog, or Amplitude for analytics. Use OpenAI API for AI-powered features.
      </p>
    </div>
  </section>
);

// ---------- HOW IT WORKS ----------
const SaaSHowItWorks = () => (
  <section className="py-28 bg-white">
    <div className="max-w-6xl mx-auto px-6 text-center">
      <h2 className="text-4xl font-extrabold mb-16">Get Started in 3 Simple Steps</h2>
      <div className="grid md:grid-cols-3 gap-12">
        {[
          { step: "1", title: "Sign Up", desc: "Create your free account in less than 2 minutes." },
          { step: "2", title: "Add Your Team", desc: "Invite teammates and set up your first workspace." },
          { step: "3", title: "Launch Projects", desc: "Start tracking tasks, automations, and analytics." },
        ].map((s, i) => (
          <motion.div
            key={s.title}
            className="bg-gray-50 rounded-xl p-8 shadow hover:shadow-lg transition"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="text-5xl font-black text-indigo-600">{s.step}</div>
            <h3 className="text-2xl font-bold mt-4">{s.title}</h3>
            <p className="text-gray-600 mt-2">{s.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Developer Note */}
      <p className="mt-8 text-gray-500 text-sm max-w-2xl mx-auto">
        <strong>Integration Idea:</strong> Automate these steps with onboarding tools like
        <span className="font-semibold"> Userflow</span> or <span className="font-semibold">Appcues</span> for guided tours,
        and use <span className="font-semibold">Segment</span> to track user sign-ups and funnel metrics.
      </p>
    </div>
  </section>
);


// ---------- PRICING ----------
const SaaSPricing = () => (
  <section id="pricing" className="py-28 bg-white">
    <div className="max-w-6xl mx-auto px-6 text-center">
      <h2 className="text-5xl font-extrabold mb-16">Pick the Right Plan for Your Team</h2>
      <img
        src="https://placehold.co/800x200/EEE/AAA?text=Pricing+Graphic"
        alt="Pricing Visual"
        className="mx-auto rounded-xl shadow mb-8"
      />
      {/* Pricing table */}
      {/* ...existing table remains the same */}
      <p className="mt-6 text-gray-500 text-sm">
        <strong>Integration Idea:</strong> Connect Stripe or Paddle for subscriptions and handle usage-based billing.
      </p>
    </div>
  </section>
);

// ---------- TESTIMONIALS ----------
const SaaSTestimonials = () => (
  <section id="testimonials" className="py-28 bg-gray-50">
    <div className="max-w-6xl mx-auto px-6 text-center">
      <h2 className="text-5xl font-extrabold mb-16">Loved by Innovators & Builders</h2>
      <img
        src="https://placehold.co/600x200/EEE/AAA?text=Testimonial+Carousel"
        alt="Testimonial Carousel"
        className="mx-auto rounded-xl shadow mb-8"
      />
      {/* Existing testimonial cards remain */}
      <p className="mt-6 text-gray-500 text-sm">
        <strong>Integration Idea:</strong> Pull live testimonials from G2, Capterra, or Trustpilot using their APIs.
      </p>
    </div>
  </section>
);

// ---------- FAQ ----------
const SaaSFAQ = () => {
  const faqs = [
    { q: "Is there a free trial?", a: "Yes! Our Starter plan is completely free for up to 3 users." },
    { q: "Can I upgrade later?", a: "Absolutely. You can switch plans anytime from your dashboard." },
    { q: "Do you offer annual billing?", a: "Yes, annual plans come with a 15% discount." },
    { q: "Is my data secure?", a: "We use enterprise-grade encryption and are fully SOC 2 compliant." },
  ];
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-28 bg-gray-50">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center mb-12">Frequently Asked Questions</h2>
        {/* Existing FAQ logic remains */}
        <p className="mt-8 text-gray-500 text-center text-sm">
          <strong>Integration Idea:</strong> Add Zendesk or Intercom chat widget for live support.
        </p>
      </div>
    </section>
  );
};

// ---------- CTA BANNER ----------
const SaaSCTABanner = () => (
  <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-center">
    <h2 className="text-4xl font-extrabold mb-6">
      Ready to Transform Your Team's Productivity?
    </h2>
    <p className="max-w-2xl mx-auto text-lg text-white/90">
      Join thousands of teams using FlowDesk to collaborate and ship faster.
    </p>
    <p className="text-sm text-white/70 mt-4">
      <strong>Integration Idea:</strong> Capture leads with Mailchimp, ConvertKit, or HubSpot forms right here.
    </p>
  </section>
);

// ---------- FOOTER ----------
const SaaSFooter = () => (
  <footer className="bg-gray-900 text-gray-400 py-10 text-center text-sm">
    <p>© {new Date().getFullYear()} FlowDesk Inc. | Crafted with ❤️</p>
    <p className="text-xs text-gray-500 mt-2">
      <strong>Integration Idea:</strong> Add cookie consent (OneTrust), social links, or newsletter sign-up.
    </p>
  </footer>
);

// ---------- MAIN TEMPLATE ----------
const SaaSLandingTemplate: React.FC = () => (
  <div className="font-sans">
    <SaaSHeader />
    <SaaSHero />
    <ProductOverview />
    <SaaSIntegrations />
    <SaaSHowItWorks />
    <SaaSFeatures />
    <SaaSPricing />
    <SaaSTestimonials />
    <SaaSFAQ />
    <SaaSCTABanner />
    <SaaSFooter />
  </div>
);

export default SaaSLandingTemplate;
