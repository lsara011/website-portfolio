import React, { useState } from "react";
import { motion } from "framer-motion";

// ---------- NAVBAR ----------
const RestaurantNavbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const links = ["Experience", "Story", "Menu", "Chefs", "Reserve", "Contact"];

  return (
    <header className="left-0 right-0 bg-[#1A1A1A]/80 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 h-16">
        <span className="text-3xl font-pacifico text-[#CBAE88]">Saboré</span>
        <nav className="hidden md:flex gap-8 text-sm uppercase tracking-widest">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="hover:text-[#CBAE88] transition"
            >
              {l}
            </a>
          ))}
        </nav>
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1"
        >
          <span className="w-6 h-0.5 bg-white" />
          <span className="w-6 h-0.5 bg-white" />
          <span className="w-6 h-0.5 bg-white" />
        </button>
      </div>
      {open && (
        <div className="absolute inset-x-0 top-16 bg-[#1A1A1A] flex flex-col text-center gap-6 py-6 md:hidden">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="hover:text-[#CBAE88] text-lg"
              onClick={() => setOpen(false)}
            >
              {l}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

// ---------- HERO ----------
const RestaurantHero: React.FC = () => (
  <motion.section
    id="home"
    className="relative bg-[url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center min-h-screen flex items-center justify-center text-center"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <div className="absolute inset-0 bg-black/70" />
    <motion.div
      className="relative z-10 px-6 max-w-3xl"
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-6xl md:text-7xl font-bebas text-[#CBAE88] tracking-widest mb-4">
        Culinary Artistry Redefined
      </h1>
      <p className="text-gray-200 font-merriweather text-lg leading-relaxed">
        A fine dining journey blending innovation, passion, and global flavors.
      </p>
      <motion.a
        href="#reserve"
        className="inline-block mt-10 bg-[#CBAE88] text-black px-10 py-4 rounded-full font-bold shadow hover:bg-[#b39b74] transition"
        whileHover={{ scale: 1.05 }}
      >
        Reserve Now
      </motion.a>
      {/* Developer Note */}
      <p className="mt-6 text-gray-400 text-sm">
        <strong className="text-[#CBAE88]">Developer Option:</strong> Hero
        section can feature a video background or seasonal promotions banner.
      </p>
    </motion.div>
  </motion.section>
);

// ---------- EXPERIENCE ----------
const RestaurantExperience: React.FC = () => (
  <motion.section
    id="experience"
    className="relative min-h-[60vh] flex items-center"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >
    <img
      src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=80"
      alt="Restaurant Interior"
      className="absolute inset-0 w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-black/60" />
    <div className="relative max-w-3xl mx-auto text-center px-6 text-white">
      <h2 className="text-5xl font-bebas text-[#CBAE88] uppercase">
        An Immersive Dining Journey
      </h2>
      <p className="mt-6 font-poppins text-lg leading-relaxed">
        From the moment you step inside, our team curates every detail — from
        plate to playlist — so your night is unforgettable.
      </p>
      {/* Developer Note */}
      <p className="mt-4 text-gray-400 text-sm">
        <strong className="text-[#CBAE88]">Developer Option:</strong> We can
        embed a 360° virtual tour or ambient music to create an immersive
        experience.
      </p>
    </div>
  </motion.section>
);

// ---------- OUR STORY ----------
const RestaurantStory: React.FC = () => (
  <motion.section
    id="story"
    className="relative min-h-screen flex items-center justify-center"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >
    <img
      src="https://images.unsplash.com/photo-1543353071-873f17a7a088?auto=format&fit=crop&w=1600&q=80"
      alt="Our Story Background"
      className="absolute inset-0 w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-black opacity-90" />
    <motion.div
      className="relative max-w-3xl mx-auto text-center px-6 text-white"
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-6xl md:text-7xl font-bebas text-[#CBAE88] uppercase tracking-wide mb-8">
        Our Story
      </h2>
      <p className="font-poppins text-xl leading-relaxed text-gray-200 mb-6">
        Saboré was founded with one mission — to create a dining experience
        that celebrates culture, seasonality, and innovation.
      </p>
      <p className="font-merriweather text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
        Every ingredient is sourced with care, every dish is plated with passion,
        and every guest is welcomed like family.
      </p>
      {/* Developer Note */}
      <p className="mt-4 text-gray-400 text-sm">
        <strong className="text-[#CBAE88]">Developer Option:</strong> This
        section can include a short documentary video, team carousel, or
        milestone timeline.
      </p>
    </motion.div>
  </motion.section>
);

// ---------- MENU ----------
const menuItems = [
  { name: "Golden Truffle Tagliatelle", img: "https://placehold.co/500x350?text=Pasta" },
  { name: "Wagyu Ribeye Steak", img: "https://placehold.co/500x350?text=Steak" },
  { name: "Seared Scallops", img: "https://placehold.co/500x350?text=Scallops" },
  { name: "Mushroom Risotto", img: "https://placehold.co/500x350?text=Risotto" },
];

const RestaurantMenu: React.FC = () => (
  <motion.section
    id="menu"
    className="bg-[#1A1A1A] py-24 text-center"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >
    <h2 className="text-4xl font-bebas text-[#CBAE88] mb-10">Signature Dishes</h2>
    <div className="flex gap-6 overflow-x-auto overflow-y-hidden px-6 snap-x snap-mandatory">
      {menuItems.map((item, i) => (
        <motion.div
          key={item.name}
          className="min-w-[300px] bg-[#2C2C2C] rounded-2xl overflow-hidden shadow-lg snap-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: i * 0.1 }}
        >
          <img src={item.img} alt={item.name} className="h-52 w-full object-cover" />
          <div className="p-4">
            <h3 className="text-lg font-bebas text-[#CBAE88]">{item.name}</h3>
          </div>
        </motion.div>
      ))}
    </div>
    {/* Developer Note */}
    <p className="mt-6 text-gray-400 text-sm max-w-xl mx-auto">
      <strong className="text-[#CBAE88]">Developer Option:</strong> We can
      connect this menu to your POS so items & prices update live — even add
      online ordering.
    </p>
  </motion.section>
);

// ---------- CHEFS ----------
const RestaurantChefs: React.FC = () => (
  <motion.section
    id="chefs"
    className="bg-[#1A1A1A] py-24"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >
    <h2 className="text-4xl text-center font-bebas text-[#CBAE88] mb-10">
      Meet the Team
    </h2>
    <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
      {["Executive Chef", "Sous Chef", "Pastry Chef", "Front of House", "Sommelier", "Owners"].map((role, i) => (
        <motion.div
          key={role}
          className="relative overflow-hidden rounded-2xl group"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
        >
          <img
            src={`https://placehold.co/600x700?text=${encodeURIComponent(role)}`}
            alt={role}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
            <h3 className="text-xl font-bebas text-white">{role}</h3>
          </div>
        </motion.div>
      ))}
    </div>
    {/* Developer Note */}
    <p className="mt-6 text-gray-400 text-center text-sm max-w-xl mx-auto">
      <strong className="text-[#CBAE88]">Developer Option:</strong> Can include
      chef bios, Instagram feeds, or short video intros for each team member.
    </p>
  </motion.section>
);

// ---------- RESERVATIONS ----------
const RestaurantReserve: React.FC = () => (
  <motion.section
    id="reserve"
    className="relative bg-[#1A1A1A] py-32 text-center text-white"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >
    <h2 className="text-5xl font-bebas text-[#CBAE88] mb-10">
      Reserve Your Experience
    </h2>
    <form className="max-w-lg mx-auto bg-[#2C2C2C]/80 backdrop-blur-md rounded-2xl shadow-xl p-8 space-y-4">
      <input className="bg-transparent border border-gray-600 rounded-lg px-4 py-3 w-full placeholder-gray-400" placeholder="Name" required />
      <input className="bg-transparent border border-gray-600 rounded-lg px-4 py-3 w-full placeholder-gray-400" placeholder="Phone" required />
      <input className="bg-transparent border border-gray-600 rounded-lg px-4 py-3 w-full" type="date" required />
      <input className="bg-transparent border border-gray-600 rounded-lg px-4 py-3 w-full" type="time" required />
      <button className="w-full bg-[#CBAE88] text-black py-3 rounded-lg font-bold hover:bg-[#b39b74] transition">
        Reserve Table
      </button>
    </form>
    {/* Developer Note */}
    <p className="mt-6 text-gray-400 max-w-lg mx-auto text-sm leading-relaxed">
      <strong className="text-[#CBAE88]">Developer Option:</strong> Can be
      connected to OpenTable, Resy, or Yelp Reservations for live availability.
    </p>
  </motion.section>
);

// ---------- FOOTER ----------
const RestaurantFooter: React.FC = () => (
  <footer className="bg-[#1A1A1A] text-gray-400 py-6 text-center font-merriweather">
    <p>© {new Date().getFullYear()} Saboré — Miami Beach, FL</p>
    {/* Developer Note */}
    <p className="mt-2 text-gray-500 text-xs">
      <strong className="text-[#CBAE88]">Developer Option:</strong> Add Google
      Maps, hours, or a newsletter signup here.
    </p>
  </footer>
);

// ---------- MASTER TEMPLATE ----------
const RestaurantTemplate: React.FC = () => (
  <div className="font-poppins">
    <RestaurantNavbar />
    <RestaurantHero />
    <RestaurantExperience />
    <RestaurantStory />
    <RestaurantMenu />
    <RestaurantChefs />
    <RestaurantReserve />
    <RestaurantFooter />
  </div>
);

export default RestaurantTemplate;
