import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ---------- HERO ----------
const YogaHero = () => {
  const words = ["Peace", "Balance", "Strength", "Clarity"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setIndex((i) => (i + 1) % words.length),
      3000
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex flex-col md:flex-row items-center bg-gradient-to-r from-rose-50 to-emerald-50 overflow-hidden">
      <motion.div
        className="flex-1 px-10 py-20 text-center md:text-left relative z-10"
        initial={{ x: -40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl md:text-6xl font-bold text-emerald-800 leading-tight">
          Welcome to Serenity Studio
        </h1>
        <AnimatePresence mode="wait">
          <motion.p
            key={index}
            className="mt-4 text-3xl font-light text-emerald-600"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
          >
            {words[index]}
          </motion.p>
        </AnimatePresence>
        <p className="mt-6 text-gray-700 max-w-md mx-auto md:mx-0">
          A modern sanctuary for yoga, pilates, and guided meditation — designed
          to help you slow down and reconnect with yourself.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <a
            href="#classes"
            className="bg-emerald-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-emerald-500 transition"
          >
            View Classes
          </a>
          <a
            href="#locations"
            className="border border-emerald-600 text-emerald-700 px-8 py-4 rounded-full font-semibold hover:bg-emerald-100 transition"
          >
            Find a Studio
          </a>
        </div>
      </motion.div>

      <motion.img
        src="https://images.unsplash.com/photo-1588286840104-8957b019727f?auto=format&fit=crop&w=1000&q=80"
        alt="Yoga Pose"
        className="flex-1 h-[70vh] w-full object-cover md:rounded-l-[3rem] shadow-xl"
        initial={{ x: 40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      />
    </section>
  );
};

// ---------- WHY CHOOSE US ----------
const YogaWhy = () => (
  <motion.section
    id="why"
    className="py-28 bg-white text-center"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >
    <h2 className="text-4xl font-bold text-emerald-800 mb-12">
      Why Choose Serenity?
    </h2>
    <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {[
        {
          icon: "🧘",
          title: "Expert Instructors",
          desc: "Certified teachers to guide your practice safely.",
        },
        {
          icon: "🌿",
          title: "Calming Space",
          desc: "A serene environment with natural light and soft music.",
        },
        {
          icon: "🫶",
          title: "Community",
          desc: "Connect with like-minded individuals who share your journey.",
        },
        {
          icon: "🔥",
          title: "Variety",
          desc: "From Hatha to Hot Yoga, we offer styles for every level.",
        },
      ].map((item, i) => (
        <motion.div
          key={item.title}
          className="bg-emerald-50 rounded-2xl p-6 shadow hover:shadow-lg transition"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: i * 0.1 }}
        >
          <div className="text-4xl">{item.icon}</div>
          <h3 className="mt-4 text-xl font-semibold text-emerald-700">
            {item.title}
          </h3>
          <p className="text-gray-600 mt-2">{item.desc}</p>
        </motion.div>
      ))}
    </div>
  </motion.section>
);

// ---------- LOCATIONS ----------
const YogaLocations = () => (
  <motion.section
    id="locations"
    className="py-28 bg-gradient-to-br from-emerald-100 to-white"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >
    <div className="max-w-6xl mx-auto px-6 text-center">
      <h2 className="text-4xl font-bold text-emerald-800 mb-14">Our Studios</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            city: "Miami",
            img: "https://placehold.co/600x400?text=Miami+Studio",
            address: "123 Biscayne Blvd, Miami, FL",
            hours: "Mon–Fri: 7AM – 7PM | Sat–Sun: 8AM – 5PM",
          },
          {
            city: "Orlando",
            img: "https://placehold.co/600x400?text=Orlando+Studio",
            address: "456 Orange Ave, Orlando, FL",
            hours: "Mon–Fri: 6AM – 8PM | Sat–Sun: 8AM – 6PM",
          },
          {
            city: "Broward Studio",
            img: "https://placehold.co/600x400?text=Broward+Studio",
            address: "456 Sunrise Blvd, Ft. Lauderdale, FL",
            hours: "Mon–Fri: 6AM – 8PM | Sat–Sun: 8AM – 6PM",
          },
          {
            city: "Tampa",
            img: "https://placehold.co/600x400?text=Tampa+Studio",
            address: "789 Bayshore Blvd, Tampa, FL",
            hours: "Mon–Fri: 7AM – 6PM | Sat: 9AM – 3PM",
          },
          {
            city: "West Palm Beach",
            img: "https://placehold.co/600x400?text=West+Palm+Studio",
            address: "321 Clematis St, West Palm Beach, FL",
            hours: "Mon–Fri: 7AM – 7PM | Sat–Sun: 8AM – 5PM",
          },
          {
            city: "Naples",
            img: "https://placehold.co/600x400?text=Naples+Studio",
            address: "88 Gulf Shore Blvd, Naples, FL",
            hours: "Mon–Fri: 6AM – 7PM | Sat–Sun: 9AM – 4PM",
          },
        ].map((loc, i) => (
          <motion.div
            key={loc.city}
            className="relative rounded-3xl overflow-hidden shadow-lg group bg-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <img
              src={loc.img}
              alt={`${loc.city} Studio`}
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              onError={(e) =>
                ((e.target as HTMLImageElement).src =
                  "https://placehold.co/600x400?text=Studio")
              }
            />
            {/* Overlay with details */}
            <div className="p-6 text-left">
              <h3 className="text-2xl font-bold text-emerald-800">
                {loc.city}
              </h3>
              <p className="text-gray-700 mt-2">{loc.address}</p>
              <p className="text-gray-500 text-sm mt-1">{loc.hours}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </motion.section>
);

// ---------- CLASSES ----------
const YogaClasses = () => (
  <motion.section
    id="classes"
    className="py-28 bg-gradient-to-b from-emerald-50 to-white"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >
    <div className="max-w-5xl mx-auto px-6">
      <h2 className="text-4xl font-bold text-center text-emerald-800 mb-12">
        Weekly Classes
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { day: "Mon", class: "Sunrise Flow — 7 AM" },
          { day: "Tue", class: "Hatha Basics — 6 PM" },
          { day: "Wed", class: "Power Vinyasa — 7 PM" },
          { day: "Thu", class: "Yin & Meditation — 8 PM" },
          { day: "Fri", class: "Strength Pilates — 6 PM" },
          { day: "Sat", class: "Weekend Flow — 9 AM" },
        ].map((item, i) => (
          <motion.div
            key={item.class}
            className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <h3 className="text-emerald-600 font-semibold text-lg">
              {item.day}
            </h3>
            <p className="mt-2 text-gray-700">{item.class}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </motion.section>
);

// ---------- MEMBERSHIP ----------
const YogaMembership = () => (
  <motion.section
    id="membership"
    className="py-28 bg-emerald-800 text-white text-center"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >
    <h2 className="text-4xl font-bold mb-10">Membership Plans</h2>
    <div className="max-w-4xl mx-auto grid sm:grid-cols-3 gap-8">
      {[
        {
          name: "Drop-In",
          price: "$20",
          perks: "Single class — no commitment.",
        },
        {
          name: "Monthly",
          price: "$99",
          perks: "Unlimited classes + free guest pass.",
        },
        {
          name: "Annual",
          price: "$999",
          perks: "Full access + 15% off workshops.",
        },
      ].map((plan, i) => (
        <motion.div
          key={plan.name}
          className={`rounded-2xl p-6 shadow-xl ${
            i === 1
              ? "bg-white text-emerald-800 font-semibold"
              : "bg-emerald-700"
          }`}
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ delay: i * 0.1 }}
        >
          <h3 className="text-2xl">{plan.name}</h3>
          <p className="text-3xl my-4">{plan.price}</p>
          <p className="text-sm">{plan.perks}</p>
        </motion.div>
      ))}
    </div>
    <a
      href="#join"
      className="mt-10 inline-block bg-white text-emerald-800 px-10 py-4 rounded-full font-bold hover:bg-gray-200 transition"
    >
      Join Now
    </a>
    <p className="mt-6 text-center text-white">
      💳 Online membership sign-up and recurring billing can be integrated using
      Stripe or Square.
    </p>
  </motion.section>
);

const YogaStudioTemplate = () => (
  <div className="font-sans">
    <YogaHero />
    <YogaWhy />
    <YogaLocations />
    <YogaClasses />
    <YogaMembership />
    <footer className="bg-emerald-900 text-white py-6 text-center">
      © {new Date().getFullYear()} Serenity Studio — Find Your Flow 🌱
    </footer>
  </div>
);

export default YogaStudioTemplate;
