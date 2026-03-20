"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

interface TeamMember {
  id: number;
  name: string;
  role: string;
  story: string;
  imagePlaceholder: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const TEAM: TeamMember[] = [
  {
    id: 1,
    name: "Your Name",
    role: "Founder",
    story:
      "Grew up between hawker centres and dinner tables that never emptied. Believes the most important meetings happen over food.",
    imagePlaceholder: "Portrait photo of founder",
  },
  {
    id: 2,
    name: "Team Member",
    role: "Operations",
    story:
      "Spent years making sure the behind-the-scenes hum was as good as the front-of-house show. Obsessed with the details nobody notices until they&apos;re gone.",
    imagePlaceholder: "Portrait photo of operations lead",
  },
  {
    id: 3,
    name: "Team Member",
    role: "Community & Vendors",
    story:
      "Has probably eaten at every market stall in the city. Loves finding the hidden gem vendors and giving them a stage.",
    imagePlaceholder: "Portrait photo of community lead",
  },
  {
    id: 4,
    name: "Team Member",
    role: "Creative",
    story:
      "Thinks about how spaces feel before they think about how they look. Believes good design is just good hospitality in a different form.",
    imagePlaceholder: "Portrait photo of creative lead",
  },
];

const GALLERY_SLOTS = [
  { id: 1, caption: "Festival atmosphere — wide shot" },
  { id: 2, caption: "Food close-up — hero dish" },
  { id: 3, caption: "Vendor at work — candid" },
  { id: 4, caption: "Crowd gathering — golden hour" },
  { id: 5, caption: "Detail shot — hands, food, texture" },
  { id: 6, caption: "Community moment — people connecting" },
];

const TICKER_ITEMS = [
  "Food Festivals",
  "F&B Consulting",
  "Community Spaces",
  "Be Human",
  "Vendor-First",
  "Co-living",
  "Co-working",
  "Hospitality",
  "Real Estate",
  "The Table",
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function Ticker() {
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS];
  return (
    <div className="overflow-hidden border-y border-black/10 bg-white py-4">
      <div className="animate-ticker flex whitespace-nowrap">
        {items.map((item, i) => (
          <span
            key={i}
            className="text-graphite/60 mx-8 shrink-0 text-sm font-medium tracking-widest uppercase"
          >
            {item}
            <span className="text-warmth mx-8">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function ImagePlaceholder({
  caption,
  className = "",
}: {
  caption: string;
  className?: string;
}) {
  return (
    <div
      className={`bg-sand/40 group relative flex flex-col items-center justify-center overflow-hidden border border-black/8 ${className}`}
    >
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      <svg
        className="relative z-10 mb-3 h-8 w-8 text-black/20"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1}
          d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1}
          d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
      <p className="relative z-10 px-4 text-center font-mono text-xs text-black/30">
        {caption}
      </p>
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-graphite/50 mb-6 text-xs font-medium tracking-[0.2em] uppercase">
      {children}
    </p>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function HomePage() {
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHeroVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="text-charcoal bg-white">
      {/* ── 1. HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative flex min-h-screen flex-col justify-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImagePlaceholder
            caption="Hero image — full bleed, wide festival or food scene. Warm, golden, human."
            className="h-full w-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
        </div>

        <div className="relative z-10 container mx-auto px-6 pb-20 md:px-12 md:pb-28 lg:px-20">
          <div
            className={`transition-all duration-1000 ${heroVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
          >
            <p className="mb-6 font-mono text-sm tracking-widest text-white/60 uppercase">
              One Bite Street
            </p>
            <h1 className="font-display mb-8 max-w-4xl text-6xl leading-[0.9] tracking-tight text-white md:text-8xl lg:text-[10rem]">
              Be
              <br />
              Human.
            </h1>
            <p
              className={`mb-10 max-w-xl text-lg leading-relaxed text-white/80 transition-all delay-200 duration-1000 md:text-xl ${heroVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              vehicula libero vel sapien fermentum nec tincidunt nulla — nulla
              facilisi donec vel nunc fermentum.
            </p>
            <div
              className={`flex flex-wrap gap-4 transition-all delay-300 duration-1000 ${heroVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}
            >
              <Link
                href="/company"
                className="text-charcoal hover:bg-warmth inline-flex items-center gap-2 bg-white px-7 py-3.5 text-sm font-medium tracking-wide transition-colors duration-200 hover:text-white"
              >
                Our Story
                <span className="text-xs">→</span>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border border-white/50 px-7 py-3.5 text-sm font-medium tracking-wide text-white transition-colors duration-200 hover:border-white hover:bg-white/10"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll nudge */}
        <div className="absolute right-8 bottom-8 z-10 flex flex-col items-center gap-2 md:right-16">
          <span className="mb-4 origin-center rotate-90 text-[10px] tracking-widest text-white/40 uppercase">
            Scroll
          </span>
          <div className="relative h-12 w-px overflow-hidden bg-white/20">
            <div
              className="animate-scrollLine absolute top-0 left-0 w-full bg-white/60"
              style={{ height: "40%" }}
            />
          </div>
        </div>
      </section>

      {/* ── 2. TICKER ───────────────────────────────────────────────────────── */}
      <Ticker />

      {/* ── 3. MANIFESTO ────────────────────────────────────────────────────── */}
      <section className="py-24 md:py-36">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="mx-auto max-w-4xl">
            <SectionLabel>Our Belief</SectionLabel>
            <blockquote className="font-display text-charcoal mb-8 text-3xl leading-tight md:text-4xl lg:text-5xl">
              &ldquo;The most valuable thing a company can be is the most human
              thing.&rdquo;
            </blockquote>
            <p className="text-graphite max-w-2xl text-lg leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris —
              nisi ut aliquip ex ea commodo consequat et dolore magna.
            </p>
            <Link
              href="/company"
              className="text-warmth hover:text-earth group mt-8 inline-flex items-center gap-3 text-sm font-medium transition-colors"
            >
              Read our full story
              <span className="inline-block transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── 4. PHOTO GALLERY ────────────────────────────────────────────────── */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto mb-8 px-6 md:px-12 lg:px-20">
          <SectionLabel>In the Field</SectionLabel>
          <h2 className="font-heading text-charcoal text-2xl md:text-3xl">
            What We Do
          </h2>
        </div>

        {/*
          Designer note: Asymmetric 3-column grid.
          Col 1 — tall, Col 2 — two stacked squares, Col 3 — tall offset.
          Swap ImagePlaceholder with Next.js <Image> when photos are ready.
          6 photos total: wide festival shots, food close-ups, candid moments.
        */}
        <div className="grid grid-cols-2 gap-2 px-2 md:grid-cols-3">
          <div className="row-span-2">
            <ImagePlaceholder
              caption={GALLERY_SLOTS[0].caption}
              className="h-full min-h-[400px] md:min-h-[600px]"
            />
          </div>
          <div className="flex flex-col gap-2">
            <ImagePlaceholder
              caption={GALLERY_SLOTS[1].caption}
              className="min-h-[200px] flex-1 md:min-h-[295px]"
            />
            <ImagePlaceholder
              caption={GALLERY_SLOTS[2].caption}
              className="min-h-[200px] flex-1 md:min-h-[295px]"
            />
          </div>
          <div className="row-span-2 mt-16 hidden md:block">
            <ImagePlaceholder
              caption={GALLERY_SLOTS[4].caption}
              className="h-full min-h-[550px]"
            />
          </div>
        </div>
        <div className="mt-2 hidden grid-cols-3 gap-2 px-2 md:grid">
          <div className="col-span-2">
            <ImagePlaceholder
              caption={GALLERY_SLOTS[3].caption}
              className="h-64"
            />
          </div>
          <div>
            <ImagePlaceholder
              caption={GALLERY_SLOTS[5].caption}
              className="-mt-16 h-64"
            />
          </div>
        </div>
      </section>

      {/* ── 5. TEAM ─────────────────────────────────────────────────────────── */}
      <section className="py-24 md:py-36">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="mb-16">
            <SectionLabel>The People</SectionLabel>
            <h2 className="font-heading text-charcoal max-w-sm text-3xl md:text-4xl">
              Who We Are
            </h2>
          </div>

          {/*
            Designer note: 4-col team grid, 2nd and 4th cards offset down.
            Portrait images 3:4 ratio. Candid, natural light preferred.
            Hover: subtle warmth tint over photo.
          */}
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-10">
            {TEAM.map((member, i) => (
              <div
                key={member.id}
                className={`${i % 2 !== 0 ? "md:mt-12" : ""}`}
              >
                <div className="relative mb-6 overflow-hidden">
                  <ImagePlaceholder
                    caption={member.imagePlaceholder}
                    className="aspect-[3/4] w-full"
                  />
                  <div className="bg-warmth/0 hover:bg-warmth/10 absolute inset-0 transition-colors duration-300" />
                </div>
                <p className="text-warmth mb-1 font-mono text-xs tracking-wider uppercase">
                  {member.role}
                </p>
                <h3 className="font-heading text-charcoal mb-3 text-xl">
                  {member.name}
                </h3>
                <p
                  className="text-graphite text-sm leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: member.story }}
                />
              </div>
            ))}
          </div>

          <div className="mt-16 border-t border-black/8 pt-12">
            <Link
              href="/team"
              className="text-warmth hover:text-earth group inline-flex items-center gap-3 text-sm font-medium transition-colors"
            >
              Meet the full team
              <span className="inline-block transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── 6. NEWSLETTER ───────────────────────────────────────────────────── */}
      <section
        id="newsletter"
        className="border-t border-black/8 bg-white py-24 md:py-36"
      >
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="mx-auto max-w-2xl text-center">
            <SectionLabel>Stay Close</SectionLabel>
            <h2 className="font-display text-charcoal mb-6 text-4xl leading-tight md:text-5xl">
              We write occasionally.
              <br />
              <span className="text-warmth">When we do, it matters.</span>
            </h2>
            <p className="text-graphite mb-10 text-lg leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            {/*
              Designer note: On success, replace with a thank-you message.
            */}
            <div className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="your@email.com"
                className="focus:border-warmth focus:ring-warmth flex-1 border border-black/20 px-5 py-3.5 text-sm transition-colors focus:ring-1 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-warmth hover:bg-earth px-7 py-3.5 text-sm font-medium whitespace-nowrap text-white transition-colors"
              >
                Join the table
              </button>
            </div>
            <p className="mt-4 text-xs text-black/30">
              No spam. Unsubscribe whenever.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
