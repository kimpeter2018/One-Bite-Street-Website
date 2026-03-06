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

interface VentureItem {
  id: number;
  label: string;
  title: string;
  description: string;
  status: "active" | "coming-soon" | "future";
  href: string;
}

interface JournalEntry {
  id: number;
  category: string;
  title: string;
  excerpt: string;
  date: string;
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

const VENTURES: VentureItem[] = [
  {
    id: 1,
    label: "01 — Active",
    title: "Food Festivals",
    description:
      "Curated street food experiences that bring communities together. We handle everything — vendors, layout, atmosphere — so the magic can just happen.",
    status: "active",
    href: "/ventures/food-festivals",
  },
  {
    id: 2,
    label: "02 — Coming Soon",
    title: "F&B Consulting",
    description:
      "We help food businesses find their identity, tighten their operations, and build something worth returning to.",
    status: "coming-soon",
    href: "/ventures/consulting",
  },
  {
    id: 3,
    label: "03 — Coming Soon",
    title: "Community Spaces",
    description:
      "Spaces designed for people to live, work, and eat together. We believe the best creative work happens in rooms with good kitchens.",
    status: "coming-soon",
    href: "/ventures/spaces",
  },
  {
    id: 4,
    label: "04 — Future",
    title: "Hospitality & Real Estate",
    description:
      "Hotels, cafés, and places worth staying in. The long dream — built slowly and built right.",
    status: "future",
    href: "/ventures",
  },
];

const GALLERY_SLOTS = [
  { id: 1, caption: "Festival atmosphere — wide shot", aspect: "tall" },
  { id: 2, caption: "Food close-up — hero dish", aspect: "square" },
  { id: 3, caption: "Vendor at work — candid", aspect: "square" },
  { id: 4, caption: "Crowd gathering — golden hour", aspect: "wide" },
  { id: 5, caption: "Detail shot — hands, food, texture", aspect: "tall" },
  { id: 6, caption: "Community moment — people connecting", aspect: "square" },
];

const TABLE_ENTRIES: JournalEntry[] = [
  {
    id: 1,
    category: "Behind the Scenes",
    title: "What We Learned From Our First Festival",
    excerpt:
      "Everything that went right, everything that didn&apos;t, and why we&apos;d do it all again tomorrow.",
    date: "Coming soon",
    imagePlaceholder: "Editorial photo — festival prep or aftermath",
  },
  {
    id: 2,
    category: "Vendor Story",
    title: "The Stall That Almost Didn&apos;t Show Up",
    excerpt:
      "A story about a vendor who drove three hours with a broken van and still sold out by noon.",
    date: "Coming soon",
    imagePlaceholder: "Photo of vendor or their food",
  },
  {
    id: 3,
    category: "Our Thinking",
    title: "Why &apos;Be Humane&apos; Is Not a Tagline",
    excerpt:
      "Most companies say they care about people. Here&apos;s what it actually looks like when you mean it.",
    date: "Coming soon",
    imagePlaceholder: "Atmospheric or conceptual photo",
  },
];

const TICKER_ITEMS = [
  "Food Festivals",
  "F&B Consulting",
  "Community Spaces",
  "Be Humane",
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
      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      {/* Camera icon */}
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

// ─── Main Page ─────────────────────────────────────────────────────────────────

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
        {/* Background image slot */}
        <div className="absolute inset-0 z-0">
          <ImagePlaceholder
            caption="Hero image — full bleed, wide festival or food scene. Warm, golden, human."
            className="h-full w-full"
          />
          {/* Gradient overlay for text legibility — designer can keep or remove */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
        </div>

        {/* Hero text */}
        <div className="relative z-10 container mx-auto px-6 pb-20 md:px-12 md:pb-28 lg:px-20">
          <div
            className={`transition-all duration-1000 ${heroVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
          >
            <p className="mb-6 font-mono text-sm tracking-widest text-white/60 uppercase">
              One Bite Street
            </p>
            {/* ↓ Designer: swap font-display with the chosen display typeface */}
            <h1 className="font-display mb-8 max-w-4xl text-6xl leading-[0.9] tracking-tight text-white md:text-8xl lg:text-[10rem]">
              Be
              <br />
              Humane.
            </h1>
            <p
              className={`mb-10 max-w-xl text-lg leading-relaxed text-white/80 transition-all delay-200 duration-1000 md:text-xl ${heroVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}
            >
              A hospitality collective building spaces, festivals, and
              businesses around one belief — that the most valuable thing is the
              most human thing.
            </p>
            <div
              className={`flex flex-wrap gap-4 transition-all delay-300 duration-1000 ${heroVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}
            >
              <Link
                href="/about"
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
            {/*
              Designer note: This is the manifesto block.
              Typography should feel like an editorial pull-quote.
              Consider large leading, generous tracking, possibly a serifed
              display font for the pull-quote line.
            */}
            <blockquote className="font-display text-charcoal mb-8 text-3xl leading-tight md:text-4xl lg:text-5xl">
              &ldquo;The most valuable thing a company can be is the most human
              thing.&rdquo;
            </blockquote>
            <p className="text-graphite max-w-2xl text-lg leading-relaxed">
              We started with food festivals because food is where humans have
              always gathered. But what we&apos;re really building is something
              bigger — ecosystems where creators, vendors, and communities can
              grow together. Practical, warm, and a little bit beautiful.
            </p>
            <Link
              href="/about"
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
          Designer note: This is a 3-column asymmetric grid.
          Left column: one tall image
          Middle column: two stacked squares
          Right column: one tall image (offset top)
          On mobile it collapses to a 2-col or single-col scroll.

          Swap <ImagePlaceholder> with Next.js <Image> components when photos are ready.
          Recommended: 6 photos total — mix of wide festival shots,
          tight food close-ups, and candid human moments.
        */}
        <div className="grid grid-cols-2 gap-2 px-2 md:grid-cols-3">
          {/* Col 1 — tall */}
          <div className="row-span-2">
            <ImagePlaceholder
              caption={GALLERY_SLOTS[0].caption}
              className="h-full min-h-[400px] md:min-h-[600px]"
            />
          </div>
          {/* Col 2 — two squares */}
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
          {/* Col 3 — tall offset (hidden on mobile) */}
          <div className="row-span-2 mt-16 hidden md:block">
            <ImagePlaceholder
              caption={GALLERY_SLOTS[4].caption}
              className="h-full min-h-[550px]"
            />
          </div>
        </div>

        {/* Second row — wide + square (desktop only) */}
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

      {/* ── 5. VENTURES ─────────────────────────────────────────────────────── */}
      <section className="bg-cream/50 py-24 md:py-36">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="mb-16 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <SectionLabel>What We&apos;re Building</SectionLabel>
              <h2 className="font-heading text-charcoal text-3xl md:text-4xl">
                Our Ventures
              </h2>
            </div>
            <Link
              href="/ventures"
              className="text-warmth hover:text-earth group inline-flex items-center gap-2 text-sm font-medium transition-colors"
            >
              See all ventures
              <span className="inline-block transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>

          {/*
            Designer note: Each venture card has a left number/label,
            a title, description, and status badge. On hover the card
            lifts with a warm left-border accent. Consider animating
            these in staggered on scroll.
          */}
          <div className="grid gap-4 md:grid-cols-2">
            {VENTURES.map((v) => (
              <Link
                key={v.id}
                href={v.href}
                className="group hover:border-warmth relative overflow-hidden border border-black/8 bg-white p-8 transition-all duration-300 hover:shadow-lg md:p-10"
              >
                {/* Left accent bar — appears on hover */}
                <div className="bg-warmth absolute top-0 bottom-0 left-0 w-1 origin-bottom scale-y-0 transition-transform duration-300 group-hover:scale-y-100" />

                <div className="mb-6 flex items-start justify-between">
                  <span className="text-graphite/40 font-mono text-xs tracking-wider">
                    {v.label}
                  </span>
                  <span
                    className={`px-2.5 py-1 text-[10px] font-medium tracking-widest uppercase ${
                      v.status === "active"
                        ? "bg-warmth/10 text-warmth"
                        : v.status === "coming-soon"
                          ? "bg-sand/60 text-graphite/60"
                          : "border border-black/10 bg-transparent text-black/30"
                    }`}
                  >
                    {v.status === "active"
                      ? "Active"
                      : v.status === "coming-soon"
                        ? "Coming Soon"
                        : "Future"}
                  </span>
                </div>

                <h3 className="font-heading text-charcoal group-hover:text-warmth mb-3 text-xl transition-colors md:text-2xl">
                  {v.title}
                </h3>
                <p className="text-graphite text-sm leading-relaxed">
                  {v.description}
                </p>

                <span className="text-warmth mt-6 inline-flex items-center gap-2 text-xs font-medium opacity-0 transition-opacity group-hover:opacity-100">
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. TEAM ─────────────────────────────────────────────────────────── */}
      <section className="py-24 md:py-36">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="mb-16">
            <SectionLabel>The People</SectionLabel>
            <h2 className="font-heading text-charcoal max-w-sm text-3xl md:text-4xl">
              Who We Are
            </h2>
          </div>

          {/*
            Designer note: Team cards are intentionally asymmetric.
            Photo is square/portrait on top, text below.
            Hover: photo has a warm tint overlay.
            Consider an off-grid layout — first card full width on mobile,
            then 3-col on desktop. Or a horizontal scroll on mobile.

            Photo specs: portrait orientation preferred (3:4 ratio),
            natural light, candid/semi-candid rather than posed headshots.
          */}
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-10">
            {TEAM.map((member, i) => (
              <div key={member.id} className={`${i === 1 ? "md:mt-12" : ""}`}>
                {/* Photo slot */}
                <div className="relative mb-6 overflow-hidden">
                  <ImagePlaceholder
                    caption={member.imagePlaceholder}
                    className="aspect-[3/4] w-full"
                  />
                  {/* Hover overlay — designer: add a subtle warmth tint */}
                  <div className="bg-warmth/0 hover:bg-warmth/10 absolute inset-0 transition-colors duration-300" />
                </div>

                {/* Text */}
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
              href="/about"
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

      {/* ── 7. THE TABLE (Journal) ──────────────────────────────────────────── */}
      <section className="bg-charcoal py-24 text-white md:py-36">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="mb-16 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <SectionLabel>
                <span className="text-white/30">Stories &amp; Thinking</span>
              </SectionLabel>
              <h2 className="font-display text-4xl text-white md:text-5xl">
                The Table
              </h2>
            </div>
            <Link
              href="/the-table"
              className="text-warmth group inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-white"
            >
              All stories
              <span className="inline-block transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>

          {/*
            Designer note: 3 journal cards on dark background.
            First card is wider/featured (col-span-2 on desktop).
            Image on top, category + title + excerpt below.
            Keep the aesthetic editorial — like a magazine spread.
          */}
          <div className="grid gap-6 md:grid-cols-3">
            {TABLE_ENTRIES.map((entry, i) => (
              <Link
                key={entry.id}
                href={`/the-table/${entry.id}`}
                className={`group block ${i === 0 ? "md:col-span-1" : ""}`}
              >
                {/* Image */}
                <div className="mb-5 overflow-hidden">
                  <ImagePlaceholder
                    caption={entry.imagePlaceholder}
                    className={`w-full transition-transform duration-500 group-hover:scale-[1.02] ${i === 0 ? "aspect-[4/3]" : "aspect-square"}`}
                  />
                </div>
                {/* Text */}
                <p className="text-warmth mb-2 text-[10px] font-medium tracking-widest uppercase">
                  {entry.category}
                </p>
                <h3
                  className="font-heading group-hover:text-warmth mb-2 text-lg leading-snug text-white transition-colors"
                  dangerouslySetInnerHTML={{ __html: entry.title }}
                />
                <p
                  className="text-sm leading-relaxed text-white/50"
                  dangerouslySetInnerHTML={{ __html: entry.excerpt }}
                />
                <p className="mt-4 font-mono text-xs text-white/25">
                  {entry.date}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. UPCOMING EVENT ───────────────────────────────────────────────── */}
      <section className="bg-warmth/5 border-warmth/10 border-y py-24 md:py-36">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="mx-auto max-w-5xl">
            <SectionLabel>Next Up</SectionLabel>

            {/*
              Designer note: This is the "upcoming event" feature block.
              It&apos;s intentionally large and confident — one event at a time,
              full focus. Left side has the event details, right side has
              an image slot.

              When no event is scheduled, this section can be hidden or
              replaced with a "Stay tuned" message and a newsletter signup.
            */}
            <div className="grid items-center gap-12 md:grid-cols-2">
              <div>
                <p className="text-warmth mb-4 font-mono text-xs tracking-widest uppercase">
                  Upcoming Festival
                </p>
                <h2 className="font-display text-charcoal mb-4 text-4xl leading-tight md:text-5xl">
                  Festival Name
                  <br />
                  TBC
                </h2>
                <div className="mb-8 flex flex-col gap-2">
                  <p className="text-graphite flex items-center gap-3 text-sm">
                    <span className="text-warmth text-base">📅</span>
                    Date TBC
                  </p>
                  <p className="text-graphite flex items-center gap-3 text-sm">
                    <span className="text-warmth text-base">📍</span>
                    Location TBC
                  </p>
                  <p className="text-graphite flex items-center gap-3 text-sm">
                    <span className="text-warmth text-base">🎪</span>
                    Vendors TBC
                  </p>
                </div>
                <p className="text-graphite mb-8 max-w-sm text-sm leading-relaxed">
                  Placeholder — add a short description of the next festival
                  here when dates are confirmed. Keep it warm and exciting.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/events"
                    className="bg-warmth hover:bg-earth inline-flex items-center gap-2 px-7 py-3.5 text-sm font-medium tracking-wide text-white transition-colors"
                  >
                    See all events
                  </Link>
                  <Link
                    href="/contact"
                    className="text-charcoal hover:border-warmth hover:text-warmth inline-flex items-center gap-2 border border-black/20 px-7 py-3.5 text-sm font-medium transition-colors"
                  >
                    Vendor enquiry
                  </Link>
                </div>
              </div>

              <div>
                <ImagePlaceholder
                  caption="Event promo image — poster, venue photo, or atmospheric shot"
                  className="aspect-4/5 w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 9. NEWSLETTER / STAY IN TOUCH ───────────────────────────────────── */}
      <section className="bg-white py-24 md:py-36">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="mx-auto max-w-2xl text-center">
            <SectionLabel>Stay Close</SectionLabel>
            <h2 className="font-display text-charcoal mb-6 text-4xl leading-tight md:text-5xl">
              We write occasionally.
              <br />
              <span className="text-warmth">When we do, it matters.</span>
            </h2>
            <p className="text-graphite mb-10 text-lg leading-relaxed">
              Festival dates, vendor stories, new ventures, and honest
              reflections on building something human. No noise.
            </p>

            {/*
              Designer note: Simple email input + button.
              The button should be warm and confident, not generic.
              On success, replace with a thank-you message.
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
