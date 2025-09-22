import React from "react";
import { motion } from "framer-motion";

// ---------- NAVBAR ----------
const AutoNavbar: React.FC = () => (
  <nav className="bg-white shadow-md font-oswald  backdrop-blur-md">
    <div className="max-w-7xl mx-auto flex justify-between items-center px-6 h-20">
      <span className="text-4xl text-black tracking-wider">
        AutoCare<span className="text-amber-500">+</span>
      </span>
      <ul className="hidden md:flex gap-10 text-gray-700 text-sm uppercase">
        {["Home", "Repairs", "WhyUs", "Book", "Contact"].map((label) => (
          <li key={label}>
            <a
              href={`#${label.toLowerCase()}`}
              className="hover:text-amber-500 transition-colors duration-300"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
      <a
        href="#book"
        className="hidden md:inline-block bg-amber-500 text-black px-5 py-2 rounded-full font-semibold hover:bg-amber-400 transition"
      >
        Schedule Now
      </a>
    </div>
  </nav>
);

// ---------- HERO ----------
const AutoHero: React.FC = () => (
  <section
    id="home"
    className="relative bg-[url('https://images.unsplash.com/photo-1604680103310-d9a19d3b6e38?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center text-white min-h-screen flex items-center justify-center"
  >
    <div className="absolute inset-0 bg-black/70" />
    <motion.div
      className="relative z-10 text-center px-6 max-w-3xl"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-6xl md:text-7xl font-oswald font-bold uppercase">
        Reliable Auto Care for Every Driver
      </h1>
      <p className="mt-6 text-lg text-gray-300 font-inter">
        Comprehensive repairs, maintenance, and diagnostics — trusted by Miami drivers for over 10 years.
      </p>
      <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="#repairs"
          className="bg-amber-500 text-black px-8 py-3 rounded-full font-bold hover:bg-amber-400 transition"
        >
          Explore Services
        </a>
        <a
          href="#book"
          className="border-2 border-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-black transition"
        >
          Book Appointment
        </a>
      </div>
      <p className="mt-6 text-sm text-gray-400">
        <strong className="text-amber-400">Integration Idea:</strong> Add a
        hero slider for promotions, seasonal discounts, or a short background
        video for impact.
      </p>
    </motion.div>
  </section>
);

// ---------- SERVICES / REPAIRS ----------
const repairs = [
  { title: "Engine Diagnostics", img: "https://placehold.co/800x600?text=Engine" },
  { title: "Brake Repair", img: "https://placehold.co/800x600?text=Brakes" },
  { title: "Tires & Alignment", img: "https://placehold.co/800x600?text=Tires" },
  { title: "Oil & Fluids", img: "https://placehold.co/800x600?text=Oil" },
  { title: "Battery & Electrical", img: "https://placehold.co/800x600?text=Battery" },
  { title: "Suspension & Steering", img: "https://placehold.co/800x600?text=Suspension" },
];

const AutoRepairs: React.FC = () => (
  <section id="repairs" className="bg-black relative">
    <h2 className="text-center text-4xl font-oswald text-amber-500 py-12">
      Our Services
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {repairs.map((r, i) => (
        <motion.div
          key={r.title}
          className="relative h-[300px] sm:h-[350px] lg:h-[400px] group overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          viewport={{ once: true }}
        >
          <img
            src={r.img}
            alt={r.title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-colors duration-300" />
          <div className="relative z-10 flex items-center justify-center h-full">
            <h3 className="text-3xl font-oswald text-white tracking-wide text-center px-4">
              {r.title}
            </h3>
          </div>
        </motion.div>
      ))}
    </div>
    <p className="text-center text-gray-400 text-sm py-6">
      <strong className="text-amber-400">Integration Idea:</strong> Connect to
      your shop's POS or management system so this list updates live with prices
      and availability — even integrate with online ordering.
    </p>
  </section>
);

// ---------- WHY US ----------
const AutoWhyUs: React.FC = () => (
  <section id="whyus" className="bg-white py-20">
    <h2 className="text-center text-4xl font-oswald text-black mb-10">
      Why Drivers Trust Us
    </h2>
    <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-center">
      {[
        { title: "Certified Mechanics", desc: "Our ASE-certified mechanics handle any job with precision." },
        { title: "Transparent Pricing", desc: "Upfront quotes and no surprise fees." },
        { title: "State-of-the-Art Tools", desc: "We use the latest tech to get you back on the road faster." },
      ].map((w, i) => (
        <motion.div
          key={w.title}
          className="p-6 bg-gray-50 rounded-lg shadow hover:shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-oswald text-amber-500">{w.title}</h3>
          <p className="text-gray-600 mt-2 font-inter">{w.desc}</p>
        </motion.div>
      ))}
    </div>
    <p className="text-center text-gray-500 text-sm mt-6">
      <strong className="text-amber-500">Integration Idea:</strong> Pull in live
      Google Reviews or Yelp ratings here to build credibility.
    </p>
  </section>
);

// ---------- BOOKING ----------
const AutoBooking: React.FC = () => (
  <section id="book" className="bg-gray-900 py-24 text-white">
    <div className="max-w-5xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
      <motion.div
        className="space-y-4"
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-oswald">Book Your Appointment</h2>
        <p className="text-gray-300 font-inter">
          Select a service and schedule a time that works best for you — our team will be ready.
        </p>
        <ul className="mt-4 space-y-2 font-inter">
          <li>📍 1234 NW 5th Street, Miami, FL</li>
          <li>📞 (305) 555-1234</li>
          <li>⏱ Mon–Fri: 8am–6pm | Sat: 9am–3pm</li>
        </ul>
      </motion.div>
      <motion.form
        className="bg-white rounded-xl shadow-xl p-6 text-gray-900 space-y-4"
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <input className="border rounded-lg px-4 py-3 w-full" placeholder="Full Name" required />
        <input className="border rounded-lg px-4 py-3 w-full" placeholder="Phone" required />
        <select className="border rounded-lg px-4 py-3 w-full" required>
          <option>Engine Diagnostics</option>
          <option>Brake Repair</option>
          <option>Tire & Alignment</option>
          <option>Oil Change</option>
        </select>
        <input className="border rounded-lg px-4 py-3 w-full" type="datetime-local" required />
        <button className="bg-amber-500 text-black rounded-lg px-6 py-3 font-bold hover:bg-amber-400 transition w-full">
          Confirm Booking
        </button>
      </motion.form>
    </div>
    <p className="text-center text-gray-400 text-sm mt-6">
      <strong className="text-amber-400">Integration Idea:</strong> Connect this
      form to Calendly, Square Appointments, or HubSpot CRM for automated
      confirmations, reminders, and SMS updates.
    </p>
  </section>
);

// ---------- FOOTER ----------
const AutoFooter: React.FC = () => (
  <footer id="contact" className="bg-black text-gray-400 py-8">
    <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
      <p className="text-sm font-inter">© {new Date().getFullYear()} AutoCare+ — Built for Drivers</p>
      <div className="flex gap-6">
        {["Facebook", "Instagram", "Google Reviews"].map((link) => (
          <a key={link} href="#" className="hover:text-amber-500">{link}</a>
        ))}
      </div>
    </div>
    <p className="text-center text-xs text-gray-500 mt-4">
      <strong className="text-amber-400">Integration Idea:</strong> Include
      embedded Google Maps, business hours, and a newsletter signup.
    </p>
  </footer>
);

// ---------- MASTER TEMPLATE ----------
const AutoServiceTemplate: React.FC = () => (
  <div className="font-inter">
    <AutoNavbar />
    <AutoHero />
    <AutoRepairs />
    <AutoWhyUs />
    <AutoBooking />
    <AutoFooter />
  </div>
);

export default AutoServiceTemplate;
