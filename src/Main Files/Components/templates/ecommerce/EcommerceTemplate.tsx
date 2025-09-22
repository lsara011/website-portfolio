import { useState } from "react";
import { motion } from "framer-motion";
import { Zap, Droplets, Flame, Star } from "lucide-react";

// ✅ Custom Button Component
const Button = ({
  children,
  onClick,
  className = "",
  type = "button",
  variant = "primary",
  fullWidth = false,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "dark" | "outline";
  fullWidth?: boolean;
}) => {
  const baseStyles =
    "px-6 py-3 rounded-xl font-semibold tracking-wide transition shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variants: Record<string, string> = {
    primary: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",
    secondary: "bg-orange-500 text-white hover:bg-orange-600 focus:ring-orange-400",
    dark: "bg-gray-900 text-white hover:bg-gray-700 focus:ring-gray-500",
    outline: "border border-gray-400 text-gray-700 hover:bg-gray-100 focus:ring-gray-400",
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? "w-full" : ""} ${className}`}
    >
      {children}
    </motion.button>
  );
};

// ✅ Product Data
const product = {
  name: "HyperFuel Energy Drink",
  tagline: "Clean Energy • Zero Crash",
  basePrice: 3.99,
  description:
    "Packed with natural caffeine, B-vitamins, and electrolytes — HyperFuel is the perfect boost for your workouts, study sessions, or late-night grinds.",
  packs: [
    { label: "Single Can", price: 3.99, img: "https://placehold.co/600x800/FF0000/FFF?text=Single+Can" },
    { label: "6-Pack", price: 19.99, img: "https://placehold.co/600x800/FF8800/FFF?text=6-Pack" },
    { label: "12-Pack", price: 34.99, img: "https://placehold.co/600x800/FFCC00/FFF?text=12-Pack" },
  ],
  flavors: [
    { name: "Citrus Blast", color: "bg-yellow-400" },
    { name: "Berry Rush", color: "bg-pink-500" },
    { name: "Tropical Surge", color: "bg-orange-500" },
  ],
  features: [
    { icon: <Zap className="w-4 h-4 text-yellow-500" />, text: "200mg Natural Caffeine" },
    { icon: <Droplets className="w-4 h-4 text-blue-500" />, text: "Electrolytes for Hydration" },
    { icon: <Flame className="w-4 h-4 text-red-500" />, text: "Zero Sugar, Zero Crash" },
  ],
};

const EcommerceTemplate = () => {
  const [selectedPack, setSelectedPack] = useState(product.packs[0]);
  const [selectedFlavor, setSelectedFlavor] = useState(product.flavors[0].name);

  return (
    <div className="bg-gradient-to-b from-orange-50 via-white to-orange-100 min-h-screen font-sans">
      {/* Hero Section */}
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative text-center py-24 bg-gradient-to-r from-red-600 to-orange-500 text-white overflow-hidden"
      >
        <motion.img
          src="https://placehold.co/800x800/FF2200/FFF?text=HyperFuel+Can"
          alt="Hero Can"
          className="absolute opacity-10 top-0 left-1/2 -translate-x-1/2 max-w-[500px] blur-xl"
          animate={{ y: [0, 20, 0] }}
          transition={{ repeat: Infinity, duration: 6 }}
        />
        <h1 className="text-6xl font-extrabold tracking-wide relative z-10">{product.name}</h1>
        <p className="text-xl font-light mt-2 text-white/90">{product.tagline}</p>
        <motion.p
          className="mt-6 max-w-2xl mx-auto text-white/80"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {product.description}
        </motion.p>
        <p className="mt-4 text-sm text-white/70">
          <strong>Third-Party Options:</strong> CMS (Sanity, Contentful) to dynamically update hero text/images.
        </p>
      </motion.header>

      {/* Product Section */}
      <main className="max-w-5xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">
        {/* Image */}
        <motion.div
          key={selectedPack.img}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <img
            src={selectedPack.img}
            alt={selectedPack.label}
            className="rounded-3xl shadow-2xl border-4 border-white max-h-[500px] object-contain"
          />
        </motion.div>

        {/* Info */}
        <div className="bg-white rounded-2xl shadow-xl p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-4xl font-extrabold text-gray-800">${selectedPack.price.toFixed(2)}</h2>
            {/* Pack Selector */}
            <div className="flex gap-3 mt-4 flex-wrap">
              {product.packs.map((pack) => (
                <motion.button
                  key={pack.label}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setSelectedPack(pack)}
                  className={`px-4 py-2 rounded-lg border transition ${
                    selectedPack.label === pack.label ? "bg-red-600 text-white" : "bg-white text-gray-700"
                  }`}
                >
                  {pack.label}
                </motion.button>
              ))}
            </div>

            {/* Flavor Selector */}
            <div className="flex gap-2 mt-6">
              {product.flavors.map((flavor) => (
                <motion.button
                  key={flavor.name}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setSelectedFlavor(flavor.name)}
                  className={`w-6 h-6 rounded-full border-2 ${flavor.color} ${
                    selectedFlavor === flavor.name ? "ring-2 ring-red-500" : ""
                  }`}
                  title={flavor.name}
                />
              ))}
            </div>

            {/* Features */}
            <ul className="mt-6 space-y-2 text-gray-700">
              {product.features.map((f, i) => (
                <li key={i} className="flex items-center gap-2">
                  {f.icon}
                  <span>{f.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Buttons */}
          <div className="mt-8 flex gap-4">
            <Button variant="primary">Add to Cart</Button>
            <Button variant="dark">Buy Now</Button>
          </div>

          <p className="mt-4 text-xs text-gray-500">
            <strong>Third-Party Options:</strong> Stripe, PayPal, Shopify Checkout integration for real purchases.
          </p>
        </div>
      </main>

      {/* Reviews Section */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h3 className="text-3xl font-bold text-center mb-8">What Our Fans Say</h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-xl shadow text-center"
            >
              <Star className="mx-auto text-yellow-400 mb-2" />
              <p className="italic text-gray-700">“HyperFuel keeps me going through my toughest days!”</p>
              <p className="mt-2 font-semibold text-gray-900">– Customer {i}</p>
            </motion.div>
          ))}
        </div>
        <p className="mt-4 text-center text-sm text-gray-500">
          <strong>Third-Party Options:</strong> Trustpilot, Yotpo, or Google Reviews widgets to pull in verified reviews.
        </p>
      </section>

      {/* Video Section */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-center">
        <h3 className="text-3xl font-bold mb-6">See HyperFuel in Action</h3>
        <div className="aspect-video rounded-xl overflow-hidden shadow-xl">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
            title="HyperFuel Promo"
            allowFullScreen
          />
        </div>
        <p className="mt-4 text-sm text-gray-500">
          <strong>Third-Party Options:</strong> YouTube, Vimeo, or Wistia for hosting and tracking engagement analytics.
        </p>
      </section>

      {/* Email Capture */}
      <section className="max-w-lg mx-auto px-6 py-16 text-center">
        <h3 className="text-3xl font-bold mb-4">Join the Fuel Crew</h3>
        <p className="text-gray-700 mb-4">
          Get 10% off your first order and early access to new flavors.
        </p>
        <form className="flex flex-col sm:flex-row gap-3 justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-3 rounded-lg border border-gray-300 flex-1"
          />
          <Button variant="secondary">Subscribe</Button>
        </form>
        <p className="mt-4 text-xs text-gray-500">
          <strong>Third-Party Options:</strong> Mailchimp, Klaviyo, or ConvertKit for automated email campaigns.
        </p>
      </section>

      {/* Payment Logos */}
      <section className="max-w-md mx-auto px-6 py-8 flex flex-col items-center gap-6">
        <div className="flex gap-6">
          <img src="https://placehold.co/80x40?text=Visa" alt="Visa" />
          <img src="https://placehold.co/80x40?text=Mastercard" alt="Mastercard" />
          <img src="https://placehold.co/80x40?text=PayPal" alt="PayPal" />
          <img src="https://placehold.co/80x40?text=ApplePay" alt="Apple Pay" />
        </div>
        <p className="mt-2 text-xs text-gray-500">
          <strong>Third-Party Options:</strong> Stripe, Braintree, or Shopify Payments for seamless checkout.
        </p>
      </section>

      {/* Final CTA */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-orange-500 to-red-600 text-white text-center py-20 rounded-t-3xl mt-12"
      >
        <h3 className="text-4xl font-bold mb-4">Fuel Your Potential</h3>
        <p className="max-w-xl mx-auto text-white/90 mb-6">
          Experience clean energy, zero crash. HyperFuel keeps you going at the gym, in the office, or on the go.
        </p>
        <Button variant="dark">Shop Now</Button>
        <p className="mt-4 text-xs text-white/80">
          <strong>Third-Party Options:</strong> Conversion tracking with Google Analytics, Meta Pixel, or Hotjar.
        </p>
      </motion.section>
    </div>
  );
};

export default EcommerceTemplate;
