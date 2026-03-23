"use client";

const plans = [
  {
    id: "basic",
    tier: "Basic",
    name: "The Foundation",
    price: "1,499",
    tagline: "Start your journey",
    featured: false,
    features: [
      "Full gym access (Mon–Sat)",
      "Locker room & changing area",
      "Access to cardio zone",
      "Free weights & machines",
      "2 Group classes / month",
      "Fitness assessment (initial)",
    ],
    cta: "Get Started",
  },
  {
    id: "elite",
    tier: "Elite",
    name: "The Warrior",
    price: "2,999",
    tagline: "Most popular",
    featured: true,
    features: [
      "Unlimited gym access (7 days)",
      "All Basic features included",
      "Unlimited group classes",
      "Monthly body composition check",
      "Nutrition guidance session",
      "2 Personal training sessions / mo",
      "Priority equipment booking",
      "Access to exclusive member events",
    ],
    cta: "Join Elite",
  },
  {
    id: "pt",
    tier: "Personal Training",
    name: "The Champion",
    price: "5,999",
    tagline: "Maximum results",
    featured: false,
    features: [
      "All Elite features included",
      "12 Personal training sessions / mo",
      "Custom training program",
      "Weekly nutrition planning",
      "Weekly progress tracking",
      "Priority coach access",
      "Supplement guidance",
      "Recovery & mobility sessions",
      "Exclusive 1-on-1 coaching",
    ],
    cta: "Go Champion",
  },
];

export default function Membership() {
  return (
    <section id="memberships" className="bg-[#111111] py-24 lg:py-32 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#d4af37 1px, transparent 1px), linear-gradient(90deg, #d4af37 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-4">
          <span className="w-12 h-px bg-[#d4af37]" />
          <span className="text-[#d4af37] text-xs tracking-[0.4em] uppercase font-medium">
            Membership Plans
          </span>
        </div>

        <h2
          className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4"
          style={{ fontFamily: "var(--font-cinzel), serif" }}
        >
          Choose Your{" "}
          <span className="text-[#d4af37]">Path</span>
        </h2>
        <p className="text-[#606060] text-lg max-w-xl mb-16">
          Every warrior&apos;s journey is unique. Select the plan that matches your
          ambition and ignites your transformation.
        </p>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative flex flex-col border transition-all duration-300 hover:-translate-y-2 ${
                plan.featured
                  ? "border-[#d4af37] bg-[#0f0f0f] shadow-[0_0_60px_rgba(212,175,55,0.15)]"
                  : "border-white/10 bg-[#1a1a1a] hover:border-[#d4af37]/50"
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-1.5 bg-[#d4af37] text-black text-xs font-black tracking-[0.2em] uppercase whitespace-nowrap">
                  ★ Recommended
                </div>
              )}

              <div className={`p-8 border-b ${plan.featured ? "border-[#d4af37]/20" : "border-white/5"}`}>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-[#d4af37] text-xs tracking-[0.3em] uppercase font-medium mb-1">
                      {plan.tier}
                    </p>
                    <h3
                      className="text-white text-xl font-black"
                      style={{ fontFamily: "var(--font-cinzel), serif" }}
                    >
                      {plan.name}
                    </h3>
                  </div>
                  <span className="text-[#606060] text-xs tracking-wider italic">
                    {plan.tagline}
                  </span>
                </div>
                <div className="flex items-end gap-1 mt-6">
                  <span className="text-[#d4af37] text-2xl font-bold">₹</span>
                  <span
                    className="text-5xl font-black text-white leading-none"
                    style={{ fontFamily: "var(--font-cinzel), serif" }}
                  >
                    {plan.price}
                  </span>
                  <span className="text-[#606060] text-sm mb-2">/month</span>
                </div>
              </div>

              <div className="p-8 flex-1">
                <ul className="space-y-3">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-3 text-sm">
                      <svg
                        className="w-4 h-4 text-[#d4af37] mt-0.5 flex-shrink-0"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-[#a0a0a0]">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-8 pt-0">
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className={`block w-full py-4 text-center font-bold text-sm tracking-[0.2em] uppercase transition-all duration-300 ${
                    plan.featured
                      ? "bg-[#d4af37] text-black hover:bg-[#f0c040] hover:shadow-[0_0_20px_rgba(212,175,55,0.3)]"
                      : "border border-[#d4af37]/50 text-[#d4af37] hover:bg-[#d4af37] hover:text-black"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-[#606060] text-sm mt-10">
          All plans include GST. Annual memberships available at discounted rates.{" "}
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="text-[#d4af37] hover:underline"
          >
            Contact us for corporate packages.
          </a>
        </p>
      </div>
    </section>
  );
}
