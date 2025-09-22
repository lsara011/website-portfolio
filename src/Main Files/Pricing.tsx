import { useState } from "react";
import PageWrapper from "../PageWrapper";

export default function Pricing() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <PageWrapper>
      <section className="bg-black text-white min-h-[calc(100svh-4rem)]">
        {/* Hero */}
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
            Pricing
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-300 leading-relaxed">
            Clear, upfront pricing designed for realistic timelines and growing businesses.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="max-w-6xl mx-auto px-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 justify-items-center items-stretch">
          <div className="max-w-md w-full">
            <PricingCard
              className="h-full"
              title="Template Website"
              price="$500"
              period="includes up to 3 pages"
              description="A clean, professional site using a template—perfect for small businesses."
              features={[
                "Up to 3 pages (Home, About, Contact)",
                "Customized branding, colors & content",
                "Delivered & launched within 1 week",
                "Basic SEO setup included",
              ]}
              selected={selected === "template"}
              onSelect={() => setSelected("template")}
            />
          </div>

          <div className="max-w-md w-full">
            <PricingCard
              className="h-full"
              title="Extra Pages"
              price="$100"
              period="per additional page"
              description="Ideal for menus, services, or portfolios."
              features={[
                "Flexible page add-ons",
                "Fully matched to your site style",
                "Keeps your site scalable",
              ]}
              selected={selected === "extra"}
              onSelect={() => setSelected("extra")}
            />
          </div>

          <div className="max-w-md w-full">
            <PricingCard
              className="h-full"
              title="Hosting & Care Plan"
              price="$150"
              period="per month"
              description="Optional add-on: hosting, backups, and monthly support."
              features={[
                "Fast, secure hosting + SSL",
                "Monthly backups & uptime monitoring",
                "Small monthly edits included",
              ]}
              selected={selected === "care"}
              onSelect={() => setSelected("care")}
            />
          </div>

          <div className="max-w-md w-full">
            <PricingCard
              className="h-full"
              title="Custom Website"
              price="Starts at $2,000"
              period="per project"
              description="For advanced features, unique designs, and full customization."
              features={[
                "Unlimited pages & custom layouts",
                "E-commerce, bookings, or dashboards",
                "Third-party integrations",
              ]}
              selected={selected === "custom"}
              onSelect={() => setSelected("custom")}
            />
          </div>
        </div>

        {/* Single Call-to-Action Section */}
        <div className="text-center mt-12 space-y-4">
          <p className="text-lg text-gray-300">
            Interested in working together? Check out our{" "}
            <a href="/templates" className="underline hover:text-white">
              templates
            </a>{" "}
            or get in touch to discuss your project.
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
      {/* Removed individual buttons */}
    </div>
  );
}
