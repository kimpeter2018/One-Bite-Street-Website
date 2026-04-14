"use client";

const VALUES = [
  {
    number: "01",
    tag: "Mutual Growth",
    title: "We rise together.",
    body: "Real success is never solo. We build with our neighbors, our vendors, our customers — not above them. When the people around us win, that&apos;s when we know we&apos;ve actually done something worth doing.",
  },
  {
    number: "02",
    tag: "Continuous Relationship",
    title: "Beyond the transaction.",
    body: "A deal ends. A relationship doesn&apos;t. We&apos;re not here to close and move on — we&apos;re here to stay, to check in, to grow with you. Money is a byproduct. Trust is the point.",
  },
  {
    number: "03",
    tag: "Human Above All",
    title: "Human above everything.",
    body: "The world chases tech stacks and frameworks and the next big method. We go the other way — plain, warm, honest. The most sophisticated thing a business can do is be genuinely human.",
  },
];

export default function CompanyValue() {
  return (
    <section className="w-full bg-[#F8F6F2]">
      {/* ── Statement block ───────────────────────── */}
      <div className="border-b border-[#1C2E24]/10">
        <div className="container mx-auto px-8 py-28 md:px-16 md:py-36">
          <p className="mb-10 font-sans text-[11px] font-medium tracking-[0.24em] text-[#FF3D6B] uppercase">
            What we stand for
          </p>

          <h2
            className="font-anton max-w-4xl leading-[0.95] text-[#1C2E24]"
            style={{ fontSize: "clamp(44px, 7vw, 92px)" }}
          >
            We don&apos;t just solve problems.{" "}
            <span className="text-[#D4687A]">We sit down with you.</span>
          </h2>

          <p className="mt-10 max-w-2xl font-sans text-[16px] leading-[1.85] font-light text-[#1C2E24]/50">
            Most businesses fix what&apos;s visible. We go deeper — into the
            rhythms, the pressures, the people — and build something that works
            from the inside out. Not a quick fix. A foundation.
          </p>
        </div>
      </div>

      {/* ── Three values ─────────────────────────── */}
      <div className="container mx-auto px-8 py-28 md:px-16 md:py-36">
        <div className="grid gap-16 md:grid-cols-3 md:gap-0">
          {VALUES.map((v, i) => (
            <div
              key={v.number}
              className={`${
                i !== 0
                  ? "border-t border-[#1C2E24]/10 pt-16 md:border-t-0 md:border-l md:pt-0 md:pl-16"
                  : ""
              } ${i !== VALUES.length - 1 ? "md:pr-16" : ""}`}
            >
              {/* Number + tag */}
              <div className="mb-8 flex items-center gap-4">
                <span className="font-sans text-[11px] font-light tracking-[0.2em] text-[#1C2E24]/20">
                  {v.number}
                </span>
                <span className="h-px w-6 bg-[#FF3D6B]/40" />
                <span className="font-sans text-[10px] font-medium tracking-[0.18em] text-[#FF3D6B] uppercase">
                  {v.tag}
                </span>
              </div>

              {/* Title */}
              <h3
                className="font-anton mb-7 leading-[0.95] text-[#1C2E24]"
                style={{ fontSize: "clamp(30px, 3.2vw, 44px)" }}
              >
                {v.title}
              </h3>

              {/* Body */}
              <p
                className="font-sans text-[15px] leading-[1.85] font-light text-[#1C2E24]/50"
                dangerouslySetInnerHTML={{ __html: v.body }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
