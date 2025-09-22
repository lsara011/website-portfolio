import { useState } from "react";
import { motion } from "framer-motion";

// ---------- FALLBACK IMAGE HELPER ----------
const ImageWithFallback = ({ src, alt }: { src: string; alt: string }) => {
  const [error, setError] = useState(false);
  return !error ? (
    <img
      src={src}
      alt={alt}
      className="w-full h-full object-cover"
      onError={() => setError(true)}
    />
  ) : (
    <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500">
      <span className="text-sm">Image unavailable</span>
    </div>
  );
};

// ---------- NAVBAR ----------
const PortfolioNavbar = () => (
  <nav className="w-full bg-black text-white shadow-md font-poppins">
    <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
      <span className="text-3xl font-pacifico tracking-tight">Jane</span>
      <ul className="hidden md:flex gap-8 text-lg">
        {[
          { label: "Home", href: "#home" },
          { label: "Projects", href: "#projects" },
          { label: "About", href: "#about" },
          { label: "Contact", href: "#contact" },
        ].map((item) => (
          <li key={item.label}>
            <a href={item.href} className="hover:text-emerald-400 transition">
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  </nav>
);

// ---------- NEW HERO ----------
const PortfolioHero = () => (
  <motion.section
    id="home"
    className="relative min-h-[85vh] bg-gray-950 text-white flex flex-col md:flex-row items-center justify-between px-6"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    {/* Left Side - Intro */}
    <motion.div
      className="flex-1 max-w-xl text-center md:text-left py-20"
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-emerald-400">
        Crafting <span className="text-white">Modern</span> <br /> Web Experiences
      </h1>
      <p className="mt-6 text-lg text-gray-300 font-merriweather">
        Hi, I’m Jane — a frontend engineer passionate about designing elegant,
        performant, and accessible user interfaces.
      </p>
      <motion.a
        href="#projects"
        whileHover={{ scale: 1.05 }}
        className="inline-block mt-8 bg-emerald-500 text-black px-8 py-3 rounded-lg font-bold shadow-lg hover:bg-emerald-400 transition"
      >
        Explore My Work →
      </motion.a>
    </motion.div>

    {/* Right Side - Hero Image */}
    <motion.div
      className="flex-1 flex justify-center py-10"
      initial={{ x: 50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div className="rounded-3xl overflow-hidden shadow-2xl w-80 h-80">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
          alt="Jane portrait"
        />
      </div>
    </motion.div>
  </motion.section>
);

// ---------- PROJECTS ----------
const PortfolioProjects = () => (
  <motion.section
    id="projects"
    className="py-28 bg-gray-50 font-poppins"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >
    <div className="max-w-6xl mx-auto px-6">
      <h2 className="text-5xl font-extrabold text-center mb-14 font-merriweather">
        Projects
      </h2>
      <div className="grid md:grid-cols-2 gap-10">
        {[
          {
            title: "Personal Portfolio",
            desc: "A modern responsive portfolio built with React and TailwindCSS.",
            img: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80",
          },
          {
            title: "E-commerce Dashboard",
            desc: "Admin dashboard with charts and analytics built using Next.js and Chart.js.",
            img: "https://images.unsplash.com/photo-1580910051074-0ef7b5c56c02?auto=format&fit=crop&w=800&q=80",
          },
          {
            title: "Mobile UI Kit",
            desc: "Designed in Figma and built with React Native for a consistent mobile experience.",
            img: "https://images.unsplash.com/photo-1590608897129-79da98d159b6?auto=format&fit=crop&w=800&q=80",
          },
          {
            title: "Blog Platform",
            desc: "A headless CMS blog using Next.js, Sanity.io, and TailwindCSS.",
            img: "https://images.unsplash.com/photo-1523475496153-3d6ccf42136c?auto=format&fit=crop&w=800&q=80",
          },
        ].map((p, i) => (
          <motion.div
            key={p.title}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="h-56 w-full">
              <ImageWithFallback src={p.img} alt={p.title} />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2 font-merriweather">
                {p.title}
              </h3>
              <p className="text-gray-600">{p.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </motion.section>
);

// ---------- ABOUT ----------
const PortfolioAbout = () => (
  <motion.section
    id="about"
    className="py-28 bg-white font-merriweather"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >
    <div className="max-w-3xl mx-auto px-6 text-center">
      <h2 className="text-4xl font-extrabold mb-6">About Me</h2>
      <p className="text-lg text-gray-700 leading-relaxed">
        I’m passionate about building intuitive, inclusive digital products.
        With experience in React, TypeScript, and TailwindCSS, I love turning
        complex ideas into elegant solutions that work on every device.
      </p>
    </div>
  </motion.section>
);

// ---------- CONTACT ----------
const PortfolioContact = () => (
  <motion.section
    id="contact"
    className="py-28 bg-gray-900 text-white font-poppins"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >
    <div className="max-w-4xl mx-auto px-6 text-center">
      <h2 className="text-4xl font-extrabold mb-6 font-merriweather">
        Get In Touch
      </h2>
      <form className="grid sm:grid-cols-2 gap-6 bg-gray-800 p-8 rounded-2xl shadow-lg">
        <input className="rounded-lg border border-gray-700 bg-gray-700 px-4 py-3 text-white" placeholder="Name" required />
        <input className="rounded-lg border border-gray-700 bg-gray-700 px-4 py-3 text-white" placeholder="Email" type="email" required />
        <textarea className="sm:col-span-2 rounded-lg border border-gray-700 bg-gray-700 px-4 py-3 text-white" placeholder="Your message" rows={4} required />
        <button
          type="submit"
          className="sm:col-span-2 bg-emerald-500 hover:bg-emerald-400 text-black px-6 py-3 rounded-lg font-bold transition w-full"
        >
          Send Message
        </button>
      </form>
    </div>
  </motion.section>
);

// ---------- FOOTER ----------
const PortfolioFooter = () => (
  <footer className="bg-black text-gray-400 py-6 text-center text-sm font-poppins">
    <p>© {new Date().getFullYear()} Jane Doe — All Rights Reserved</p>
  </footer>
);

// ---------- MASTER TEMPLATE ----------
const PortfolioTemplate = () => (
  <div className="font-sans text-gray-900">
    <PortfolioNavbar />
    <PortfolioHero />
    <PortfolioProjects />
    <PortfolioAbout />
    <PortfolioContact />
    <PortfolioFooter />
  </div>
);

export default PortfolioTemplate;
