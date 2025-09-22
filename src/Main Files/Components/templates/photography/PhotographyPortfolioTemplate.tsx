import { motion } from "framer-motion";

// ---------- HERO ----------
const PhotographyHero = () => (
  <header className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black text-white">
    <motion.img
      src="https://placehold.co/1600x900?text=Hero+Image"
      alt="Photographer Hero"
      className="absolute inset-0 w-full h-full object-cover opacity-30"
      initial={{ scale: 1.1 }}
      animate={{ scale: 1 }}
      transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
    />
    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80" />
    <div className="relative text-center max-w-4xl px-6">
      <motion.h1
        className="text-6xl md:text-8xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-pink-500"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Alex Carter
      </motion.h1>
      <motion.p
        className="mt-6 text-lg md:text-xl text-gray-200 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        Lifestyle & Commercial Photographer — Transforming raw moments into timeless art.
      </motion.p>
      <motion.a
        href="#portfolio"
        className="inline-block mt-10 px-10 py-4 rounded-full bg-amber-400 text-black font-bold shadow hover:bg-amber-300 transition"
        whileHover={{ scale: 1.05 }}
      >
        Explore My Work
      </motion.a>
    </div>
    <p className="absolute bottom-4 text-xs text-gray-500 italic">
      (We can add motion scroll effects, slow zoom, or video background here.)
    </p>
  </header>
);

// ---------- SERVICES ----------
const PhotographyServices = () => (
  <motion.section
    id="services"
    className="py-28 bg-white"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >
    <div className="max-w-6xl mx-auto px-6 text-center">
      <h2 className="text-5xl font-bold mb-16">What I Offer</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { title: "Portrait Sessions", desc: "Editorial portraits that showcase personality." },
          { title: "Event Coverage", desc: "Documenting weddings, concerts & corporate events." },
          { title: "Brand Campaigns", desc: "Lifestyle campaigns & product photography." },
          { title: "Prints & Art", desc: "Limited-edition prints available upon request." },
        ].map((s, i) => (
          <motion.div
            key={s.title}
            className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-xl transition"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-2">{s.title}</h3>
            <p className="text-gray-600">{s.desc}</p>
          </motion.div>
        ))}
      </div>
      <p className="mt-6 text-sm text-gray-400 italic">
        (This could integrate <strong>Calendly</strong> or <strong>Acuity Scheduling</strong> for booking.)
      </p>
    </div>
  </motion.section>
);

// ---------- PORTFOLIO ----------
const PhotographyPortfolio = () => (
  <motion.section
    id="portfolio"
    className="py-28 bg-gray-100"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >
    <div className="max-w-7xl mx-auto px-6">
      <h2 className="text-5xl font-bold text-center mb-16">Portfolio</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {Array.from({ length: 9 }).map((_, i) => (
          <motion.div
            key={i}
            className="relative group overflow-hidden rounded-2xl shadow-lg"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <img
              src={`https://placehold.co/600x800?text=Photo+${i + 1}`}
              alt={`Portfolio ${i + 1}`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
              <p className="text-white font-bold text-lg">View Details</p>
            </div>
          </motion.div>
        ))}
      </div>
      <p className="mt-6 text-center text-sm text-gray-500 italic">
        (We can integrate <strong>Pixieset</strong>, <strong>SmugMug</strong>, or <strong>Cloudinary</strong> to manage galleries.)
      </p>
    </div>
  </motion.section>
);

// ---------- TESTIMONIALS ----------
const PhotographyTestimonials = () => (
  <motion.section
    id="testimonials"
    className="py-28 bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >
    <div className="max-w-5xl mx-auto px-6 text-center">
      <h2 className="text-4xl font-bold mb-12">What Clients Say</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          "Alex captured our wedding perfectly. Every photo told a story.",
          "Professional and creative — our brand campaign turned out stunning.",
          "Highly recommend! Alex made everyone feel comfortable and natural.",
        ].map((quote, i) => (
          <motion.div
            key={i}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-gray-100 shadow hover:shadow-lg transition"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            “{quote}”
          </motion.div>
        ))}
      </div>
      <p className="mt-6 text-xs text-gray-400 italic">
        (Could integrate Google Reviews or Yelp API here to show real testimonials.)
      </p>
    </div>
  </motion.section>
);

// ---------- CONTACT ----------
const PhotographyContact = () => (
  <motion.section
    id="contact"
    className="py-28 bg-white"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >
    <div className="max-w-3xl mx-auto px-6 text-center">
      <h2 className="text-4xl font-bold mb-6">Let's Work Together</h2>
      <p className="text-gray-700 mb-10">
        Have a project in mind? Get in touch for bookings, collaborations, or custom shoots.
      </p>
      <form className="grid gap-6 bg-gray-50 p-8 rounded-2xl shadow-lg">
        <input className="rounded-lg border border-gray-300 px-4 py-3" placeholder="Name" required />
        <input className="rounded-lg border border-gray-300 px-4 py-3" type="email" placeholder="Email" required />
        <textarea className="rounded-lg border border-gray-300 px-4 py-3" rows={4} placeholder="Message"></textarea>
        <button className="bg-amber-400 text-black rounded-lg py-3 font-bold hover:bg-amber-300 transition">
          Send Message
        </button>
      </form>
      <p className="mt-4 text-xs text-gray-400 italic">
        (We could connect this form to <strong>Formspree</strong>, <strong>SendGrid</strong>, or <strong>EmailJS</strong>.)
      </p>
    </div>
  </motion.section>
);

// ---------- FOOTER ----------
const PhotographyFooter = () => (
  <footer className="bg-black text-gray-400 py-6 text-center text-sm">
    © {new Date().getFullYear()} Alex Carter Photography · All Rights Reserved
    <p className="mt-2 text-xs text-gray-500 italic">
      (Instagram feed, TikTok embeds, or newsletter signup could go here.)
    </p>
  </footer>
);

const PhotographyPortfolioTemplate = () => (
  <div className="font-sans">
    <PhotographyHero />
    <PhotographyServices />
    <PhotographyPortfolio />
    <PhotographyTestimonials />
    <PhotographyContact />
    <PhotographyFooter />
  </div>
);

export default PhotographyPortfolioTemplate;
