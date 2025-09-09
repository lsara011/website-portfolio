import PageWrapper from "../PageWrapper";
export default function Pricing() {
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
          Simple, transparent pricing that scales with your business.
        </p>
      </div>

      {/* Pricing Grid */}
      <div className="max-w-screen-xl mx-auto px-6 pb-16 grid gap-8 md:grid-cols-3">
        <PricingCard
          title="Starter Template"
          price="$500"
          period="one-time"
          description="Perfect for small businesses who need a quick, professional site."
          features={[
            "Pick from template designs",
            "Customized content & branding",
            "Live in under a week",
          ]}
        />
        <PricingCard
          title="Hosting & Maintenance"
          price="$150"
          period="per month"
          description="Reliable hosting plus ongoing support and small edits."
          features={[
            "Hosting + security updates",
            "Backups & monitoring",
            "Monthly edits included",
          ]}
          highlight
        />
        <PricingCard
          title="Custom Website"
          price="Starts at $2,000"
          period="per project"
          description="For businesses that need advanced features or unique designs."
          features={[
            "Unlimited pages",
            "E-commerce & integrations",
            "Scalable solutions",
          ]}
        />
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
  highlight?: boolean;
};

function PricingCard({
  title,
  price,
  period,
  description,
  features,
  highlight = false,
}: PricingProps) {
  return (
    <div
      className={`
        rounded-2xl p-8 flex flex-col
        ${highlight ? "bg-white text-black shadow-2xl scale-105" : "bg-zinc-900/70 backdrop-blur"}
      `}
    >
      <h3 className="text-2xl font-semibold">{title}</h3>
      <div className="mt-4 text-4xl font-extrabold">
        {price}
        <span className="text-lg font-normal opacity-70"> / {period}</span>
      </div>
      <p className={`mt-4 text-base ${highlight ? "text-gray-700" : "text-gray-300"}`}>
        {description}
      </p>
      <ul className="mt-6 space-y-2 flex-1">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-sm">
            <span className="text-emerald-400 mt-0.5">✓</span>
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <a
        href="/contact"
        className={`
          mt-8 inline-block px-5 py-3 rounded-lg font-semibold text-center transition
          ${highlight
            ? "bg-black text-white hover:bg-gray-800"
            : "bg-white/10 text-white hover:bg-white/20"}
        `}
      >
        {highlight ? "Get Started" : "Contact Me"}
      </a>
    </div>
  );
}
