
import { motion } from "framer-motion";

const EventHero = () => (
  <section className="relative min-h-screen flex items-center justify-center bg-black">
    {/* Video Background */}
    <video
      autoPlay
      muted
      loop
      playsInline
      className="absolute inset-0 w-full h-full object-cover opacity-60"
    >
      <source src="/event-hero-video.mp4" type="video/mp4" />
    </video>
    {/* Overlay */}
    <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/90" />
    {/* Hero Content */}
    <motion.div
      className="relative z-10 text-center max-w-3xl px-6"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight text-indigo-300 drop-shadow-lg">
        FutureTech Summit 2025
      </h1>
      <p className="mt-6 text-xl text-gray-300 leading-relaxed">
        Three days of breakthroughs, networking, and inspiration in Miami.
      </p>
      <motion.div
        className="mt-10 flex justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <a
          href="#register"
          className="bg-indigo-500 text-white px-10 py-4 rounded-full text-lg font-bold shadow-xl hover:bg-indigo-400 transition"
        >
          Get Your Pass
        </a>
      </motion.div>
    </motion.div>
  </section>
);

const EventHighlights = () => (
  <motion.section
    id="highlights"
    className="py-28 bg-white text-center"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >
    <h2 className="text-4xl font-black mb-12 text-gray-900">What to Expect</h2>
    <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
      {[
        { icon: "💡", title: "Keynotes", desc: "Hear from world-class innovators and industry leaders." },
        { icon: "🛠", title: "Workshops", desc: "Hands-on sessions to level up your skills." },
        { icon: "🤝", title: "Networking", desc: "Connect with developers, founders, and investors." },
        { icon: "🚀", title: "Hackathon", desc: "Build the future and compete for exciting prizes." },
      ].map((item, i) => (
        <motion.div
          key={item.title}
          className="bg-gray-50 p-6 rounded-2xl shadow hover:shadow-xl transition"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: i * 0.1 }}
          viewport={{ once: true }}
        >
          <div className="text-4xl">{item.icon}</div>
          <h3 className="mt-4 text-xl font-bold">{item.title}</h3>
          <p className="text-gray-600 mt-2">{item.desc}</p>
        </motion.div>
      ))}
    </div>
  </motion.section>
);

const EventSpeakers = () => (
  <motion.section
    id="speakers"
    className="py-28 bg-gradient-to-b from-indigo-50 to-white"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >
    <div className="max-w-6xl mx-auto px-6 text-center">
      <h2 className="text-4xl font-black mb-16 text-gray-900">Featured Speakers</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {[
          { name: "Dr. Alan Rivera", title: "AI Research Lead", img: "https://placehold.co/400x400?text=Alan" },
          { name: "Priya Shah", title: "CTO, NextGen Robotics", img: "https://placehold.co/400x400?text=Priya" },
          { name: "Lucas Meyer", title: "Founder, CloudEdge", img: "https://placehold.co/400x400?text=Lucas" },
        ].map((s, i) => (
          <motion.div
            key={s.name}
            className="rounded-3xl shadow-lg bg-white p-6 flex flex-col items-center hover:scale-[1.03] transition"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <img src={s.img} alt={s.name} className="w-40 h-40 rounded-full object-cover shadow-md" />
            <h3 className="mt-4 text-xl font-bold">{s.name}</h3>
            <p className="text-gray-600">{s.title}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </motion.section>
);

const EventSchedule = () => (
  <motion.section
    id="schedule"
    className="py-28 bg-gray-100"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >
    <div className="max-w-5xl mx-auto px-6">
      <h2 className="text-4xl font-black text-center mb-16 text-gray-900">Schedule</h2>
      <div className="space-y-8">
        {[
          { day: "Day 1", sessions: ["Keynote: Future of Tech", "Panel: AI & Society", "Networking Gala"] },
          { day: "Day 2", sessions: ["Hands-on Workshops", "Startup Pitch Fest", "Afterparty"] },
          { day: "Day 3", sessions: ["Hackathon Finals", "Closing Keynote", "Awards Ceremony"] },
        ].map((d, i) => (
          <motion.div
            key={d.day}
            className="bg-white rounded-xl shadow p-6"
            initial={{ x: i % 2 === 0 ? -50 : 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-indigo-600">{d.day}</h3>
            <ul className="mt-3 space-y-1 text-gray-700">
              {d.sessions.map((s) => (
                <li key={s}>• {s}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  </motion.section>
);

const EventRegister = () => (
  <motion.section
    id="register"
    className="py-28 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-center"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >
    <h2 className="text-4xl font-black mb-6">Join Us in Miami</h2>
    <p className="max-w-xl mx-auto text-white/80 mb-8">
      Secure your spot for the most innovative tech conference of the year.
    </p>
    <a
      href="#"
      className="bg-white text-indigo-700 px-10 py-4 rounded-full font-bold hover:bg-gray-100 transition"
    >
      Register Now
    </a>
  </motion.section>
);

const EventLandingTemplate = () => (
  <div className="font-sans text-gray-900">
    <EventHero />
    <EventHighlights />
    <EventSpeakers />
    <EventSchedule />
    <EventRegister />
    <footer className="bg-black text-gray-400 py-6 text-center text-sm">
      © {new Date().getFullYear()} FutureTech Summit — Miami, FL
    </footer>
  </div>
);

export default EventLandingTemplate;
