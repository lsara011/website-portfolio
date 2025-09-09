import PageWrapper from "../PageWrapper";
export default function Services() {
  return (
    <PageWrapper>
      <section className="bg-black text-white min-h-[calc(100svh-4rem)]">
      {/* Hero */}
      <div className="max-w-screen-xl mx-auto px-6 pt-14 pb-12 text-center">
        <h1
          className="
            text-4xl md:text-5xl font-extrabold
            bg-clip-text text-transparent
            [background-image:linear-gradient(270deg,#00f6ff,#ff6ec7,#8b5cf6,#00f6ff)]
            bg-[length:300%_300%]
            [animation:gradient-shift_8s_linear_infinite]
          "
        >
          Services
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-300 leading-relaxed">
          From fast templates to full-stack custom builds, I help businesses
          get online with reliable, scalable solutions.
        </p>
      </div>

      {/* Services overview */}
      <div className="max-w-screen-xl mx-auto px-6 pb-16 grid gap-8 md:grid-cols-3">
        <ServiceCard
          title="Website Templates"
          description="Affordable starter sites for small businesses."
          points={[
            "Restaurant, salon, tire shop, gym templates",
            "Customized branding & content",
            "Responsive, mobile-ready",
          ]}
        />
        <ServiceCard
          title="Hosting & Maintenance"
          description="Stress-free monthly care for your site."
          points={[
            "Hosting & backups",
            "Monthly updates included",
            "Priority support",
          ]}
        />
        <ServiceCard
          title="Custom Websites"
          description="Full custom builds for businesses that need more."
          points={[
            "Tailored design & branding",
            "E-commerce, booking, APIs",
            "Built to scale",
          ]}
        />
      </div>
    </section>
    </PageWrapper>
    
  );
}

type ServiceProps = { title: string; description: string; points: string[] };

function ServiceCard({ title, description, points }: ServiceProps) {
  return (
    <div className="bg-zinc-900/70 backdrop-blur rounded-2xl p-8 shadow-lg flex flex-col">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-3 text-gray-300">{description}</p>
      <ul className="mt-4 space-y-2 text-sm text-gray-400 flex-1">
        {points.map((p) => (
          <li key={p} className="flex items-start gap-2">
            <span className="text-emerald-400 mt-0.5">✓</span>
            <span>{p}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
