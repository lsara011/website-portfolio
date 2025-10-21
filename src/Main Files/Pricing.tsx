import { useState } from "react";
import PageWrapper from "../PageWrapper";

export default function Pricing() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <PageWrapper>
      <section className="bg-black text-white min-h-[calc(100svh-4rem)]">
        <div className="max-w-screen-xl mx-auto px-6 pt-14 pb-10 text-center">
          <h1
            className="
              text-4xl md:text-5xl font-extrabold
              bg-clip-text text-transparent
              [background-image:linear-gradient(270deg,#00f6ff,#ff6ec7,#8b5cf6,#00f6ff)]
              bg-[length:300%_300%]
              [animation:gradient-shift_8s_linear_infinite]
            "
          >
            Website Development Plans
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-300 leading-relaxed">
            Straightforward, transparent pricing — designed for small businesses and startups.
          </p>
        </div>

        <div className="max-w-5xl mx-auto px-6 grid gap-8 sm:grid-cols-2 justify-items-center items-stretch">
          {/* Starter Plan */}
          <PricingCard
            className="h-full"
            title="Starter Plan"
            price="$0 Down"
            period="$150/month · 12-month commitment"
            description="Best for new businesses or first-time website owners who want a professional site without large upfront costs."
            features={[
              "Up to 3 pages (Home, About, Contact)",
              "Hosting, maintenance, and SSL included",
              "Ongoing updates & support",
              "$25 per extra page",
            ]}
            selected={selected === "starter"}
            onSelect={() => setSelected("starter")}
          />

          {/* Business Plan */}
          <PricingCard
            className="h-full"
            title="Business Plan"
            price="$2,500"
            period="one-time project"
            description="Perfect for established businesses ready for a complete, customized website experience."
            features={[
              "5-page minimum custom design",
              "$100 per extra page",
              "Hosting & maintenance: $30/month",
              "Full ownership of all files and code",
            ]}
            selected={selected === "business"}
            onSelect={() => setSelected("business")}
          />
        </div>

        {/* CTA */}
        <div className="text-center mt-12 space-y-4">
          <p className="text-lg text-gray-300">
            Ready to get started? Check out our{" "}
            <a href="/templates" className="underline hover:text-white">
              templates
            </a>{" "}
            or reach out to discuss your project.
          </p>
          <a
            href="/contact"
            className="inline-block px-6 py-3 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-xl font-semibold text-black hover:opacity-90 transition"
          >
            Contact Me
          </a>
        </div>
      </section>
    </PageWrapper>
  );
}

// --- Pricing Card Component ---
type PricingProps = {
  title: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  selected: boolean;
  onSelect: () => void;
  className?: string;
};

function PricingCard({
  title,
  price,
  period,
  description,
  features,
  selected,
  onSelect,
  className = "",
}: PricingProps) {
  return (
    <div
      onClick={onSelect}
      className={`
        rounded-2xl p-6 sm:p-8 flex flex-col justify-between cursor-pointer transition-transform duration-200 ${className}
        ${selected
          ? "bg-white text-black shadow-2xl scale-105"
          : "bg-zinc-900/70 backdrop-blur hover:scale-[1.02]"}
      `}
    >
      <div>
        <h3 className="text-2xl sm:text-3xl font-semibold">{title}</h3>
        <div className="mt-4 text-3xl sm:text-4xl font-extrabold">
          {price}
          <span className="text-base sm:text-lg font-normal opacity-70">
            {" "}
            · {period}
          </span>
        </div>
        <p
          className={`mt-4 text-base ${
            selected ? "text-gray-700" : "text-gray-300"
          }`}
        >
          {description}
        </p>
        <ul className="mt-6 space-y-2">
          {features.map((f) => (
            <li key={f} className="flex items-start gap-2 text-sm">
              <span className="text-emerald-400 mt-0.5">✓</span>
              <span>{f}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}