import { motion } from "framer-motion";
import { useState } from "react";

// ---------- NAVBAR ----------
const CoffeeNavbar = () => (
  <header className="bg-[#5C4033] text-white shadow-md">
    <div className="max-w-7xl mx-auto flex justify-between items-center h-16 px-6">
      <span className="text-2xl font-extrabold tracking-wide">Daily Brew</span>
      <nav className="hidden md:flex gap-8 text-sm uppercase tracking-wide">
        {["Home", "Menu", "Reviews", "Visit"].map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="hover:text-[#F2D0A7] transition"
          >
            {link}
          </a>
        ))}
      </nav>
    </div>
  </header>
);

// ---------- HERO ----------
const CoffeeHero = () => (
  <motion.section
    id="home"
    className="relative min-h-[85vh] bg-[url('https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center flex items-center justify-center text-center"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80" />

    <motion.div
      className="relative z-10 max-w-3xl px-6"
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-5xl md:text-7xl font-extrabold text-[#F2D0A7] tracking-wide mb-6">
        Where Every Sip Feels Like Home
      </h1>
      <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-10">
        Specialty coffee and homemade pastries in a warm, rustic setting — crafted fresh, daily.
      </p>

      {/* Featured Drink Card */}
      <motion.div
        className="bg-[#FAF3E0]/90 rounded-2xl shadow-2xl p-6 inline-block max-w-md mx-auto"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.7 }}
      >
        <h3 className="text-2xl font-bold text-[#5C4033] mb-2">☕ Barista’s Pick</h3>
        <p className="text-lg text-[#5C4033]/90">
          Try our <span className="font-semibold">Maple Oat Latte</span> — the perfect cozy companion for fall mornings.
        </p>
        <a
          href="#menu"
          className="mt-4 inline-block bg-[#5C4033] text-[#F2D0A7] px-6 py-2 rounded-lg font-bold hover:bg-[#3a2920] transition"
        >
          View Menu
        </a>
      </motion.div>
    </motion.div>
  </motion.section>
);


// ---------- FEATURED MENU ----------
const CoffeeMenu = () => (
  <motion.section
    id="menu"
    className="bg-[#FAF3E0] py-24"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >
    <div className="max-w-5xl mx-auto px-6 text-center">
      <h2 className="text-4xl font-bold text-[#5C4033] mb-12">Barista Picks</h2>
      <div className="grid sm:grid-cols-2 gap-8">
        {[
          { name: "Maple Oat Latte", price: "$4.75" },
          { name: "Cold Brew Tonic", price: "$5.25" },
          { name: "Honey Lavender Cappuccino", price: "$5.50" },
          { name: "Pumpkin Cream Cold Brew", price: "$5.00" },
          { name: "Fresh Baked Scone", price: "$3.50" },
          { name: "Chocolate Croissant", price: "$3.95" },
        ].map((item, i) => (
          <motion.div
            key={item.name}
            className="bg-white shadow rounded-2xl px-8 py-6 flex justify-between hover:shadow-lg transition"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <span className="text-lg font-medium text-[#5C4033]">{item.name}</span>
            <span className="font-bold text-[#A0522D]">{item.price}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </motion.section>
);

// ---------- REVIEWS ----------
const CoffeeReviews = () => (
  <motion.section
    id="reviews"
    className="py-24 bg-white"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >
    <div className="max-w-6xl mx-auto px-6 text-center">
      <h2 className="text-4xl font-bold text-[#5C4033] mb-12">What Our Guests Say</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { quote: "Coziest café in town — the latte art is always perfect!", name: "Lena M." },
          { quote: "Love the rustic vibes and chill playlist. My go-to spot!", name: "Andre P." },
          { quote: "Friendly staff, amazing pastries — I could stay all day.", name: "Carmen D." },
        ].map((r, i) => (
          <motion.div
            key={i}
            className="bg-[#FAF3E0] rounded-xl p-8 shadow hover:shadow-lg transition"
            initial={{ scale: 0.85, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <p className="italic text-lg text-[#5C4033]">“{r.quote}”</p>
            <span className="block mt-4 font-semibold text-[#A0522D]">— {r.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </motion.section>
);

// ---------- LOCATION ----------
const CoffeeVisit = () => {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.section
      id="visit"
      className="bg-[#5C4033] text-white py-28"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl font-bold mb-6 text-[#F2D0A7]">Come Hang Out</h2>
          <p className="mb-6 text-lg leading-relaxed text-gray-200">
            We’re located in the heart of Miami — perfect for your morning coffee run,
            weekend brunch, or afternoon work session.
            <br /><br />
            <strong>123 Main Street, Miami, FL</strong>
            <br />
            Mon–Fri: 7AM – 6PM | Sat–Sun: 8AM – 5PM
          </p>
          <a
            href="https://goo.gl/maps/"
            className="inline-block bg-[#F2D0A7] text-[#5C4033] px-8 py-3 rounded-lg font-bold hover:bg-[#e5b87f] transition"
          >
            Get Directions
          </a>
        </motion.div>

        {/* Right Image or Placeholder */}
        <motion.div
          className="rounded-3xl shadow-2xl h-[26rem] w-full overflow-hidden flex items-center justify-center bg-[#3B2A24]"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          {!imgError ? (
            <img
              src="https://images.unsplash.com/photo-1515442261605-65987783cb6b?auto=format&fit=crop&w=800&q=80"
              alt="Coffee shop exterior"
              className="object-cover w-full h-full"
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="flex flex-col items-center justify-center text-center p-6 text-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-16 h-16 mb-4 opacity-50"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M3 3v18h18V3H3zM8 13l2.293 2.293a1 1 0 001.414 0L16 11l5 5H3l5-5z"
                />
              </svg>
              <p className="text-lg font-semibold">Image unavailable</p>
              <p className="text-sm text-gray-400">
                But our café still looks cozy in real life!
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </motion.section>
  );
};

// ---------- FOOTER ----------
const CoffeeFooter = () => (
  <footer className="bg-[#3A2C27] text-gray-300 py-8 text-center">
    <p>© {new Date().getFullYear()} Daily Brew Café · Brewed with Love ☕</p>
  </footer>
);

const CoffeeShopTemplate = () => (
  <div className="font-sans">
    <CoffeeNavbar />
    <CoffeeHero />
    <CoffeeMenu />
    <CoffeeReviews />
    <CoffeeVisit />
    <CoffeeFooter />
  </div>
);

export default CoffeeShopTemplate;
