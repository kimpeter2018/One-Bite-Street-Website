"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

// ─────────────────────────────────────────────────────────────────────────────
// HOW TO USE THIS TEMPLATE
// ─────────────────────────────────────────────────────────────────────────────
// 1. Duplicate this file's parent folder structure for each new project
// 2. Update PROJECT_DATA below with real content
// 3. Replace <ImagePlaceholder> components with Next.js <Image> tags
// 4. Add / remove gallery images as needed (GALLERY array)
// ─────────────────────────────────────────────────────────────────────────────

const PROJECT_DATA = {
  title: "Project Name Here",
  subtitle: "A short punchy subtitle — one line",
  category: "Food Festival",
  year: 2025,
  location: "City, Country",
  status: "completed" as const,

  // Hero image
  heroImageCaption:
    "Hero photo — full bleed, wide and atmospheric. Warm tones.",

  // The story — replace each paragraph with real copy
  intro:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vehicula libero vel sapien fermentum, nec tincidunt nulla dignissim. Sed euismod nisl vel ultricies lacinia, nisl nisl aliquam nisl nulla facilisi.",
  challenge:
    "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin commodo eros id ante porttitor, vel suscipit felis dignissim. Fusce tincidunt nisl eget ultricies tincidunt.",
  approach:
    "Curabitur vel eros sit amet nunc congue tincidunt. Donec vel nunc at nisl fermentum dictum. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl nulla facilisi donec vel nunc at nisl fermentum.",
  outcome:
    "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Quisque vehicula libero vel sapien fermentum, nec tincidunt nulla dignissim — sed euismod nisl vel ultricies lacinia.",

  // Stats — update with real numbers or remove
  stats: [
    { label: "Vendors", value: "—" },
    { label: "Guests", value: "—" },
    { label: "Days", value: "—" },
  ],

  // Gallery images — add as many as needed
  gallery: [
    { id: 1, caption: "Gallery photo 1 — atmosphere or crowd" },
    { id: 2, caption: "Gallery photo 2 — food close-up" },
    { id: 3, caption: "Gallery photo 3 — vendor candid" },
    { id: 4, caption: "Gallery photo 4 — detail or texture" },
  ],
};

// ─── Sub-components ───────────────────────────────────────────────────────────

function ImagePlaceholder({
  caption,
  className = "",
}: {
  caption: string;
  className?: string;
}) {
  return (
    <div
      className={`bg-sand/40 relative flex flex-col items-center justify-center overflow-hidden border border-black/8 ${className}`}
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
      <p className="relative z-10 px-4 text-center font-mono text-xs leading-relaxed text-black/30">
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

export default function ProjectDetailPage() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  const p = PROJECT_DATA;

  return (
    <div className="text-charcoal bg-white">
      {/* ── 1. HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative flex min-h-[65vh] flex-col justify-end overflow-hidden md:min-h-[75vh]">
        <div className="absolute inset-0 z-0">
          <ImagePlaceholder
            caption={p.heroImageCaption}
            className="h-full w-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent" />
        </div>

        <div className="relative z-10 container mx-auto px-6 pb-16 md:px-12 md:pb-24 lg:px-20">
          <div
            className={`transition-all duration-1000 ${visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
          >
            {/* Breadcrumb */}
            <Link
              href="/work"
              className="mb-8 inline-flex items-center gap-2 font-mono text-xs tracking-widest text-white/50 uppercase transition-colors hover:text-white"
            >
              ← Work
            </Link>
            <p className="mb-4 font-mono text-xs tracking-[0.2em] text-white/50 uppercase">
              {p.category} · {p.year} · {p.location}
            </p>
            <h1 className="font-display mb-4 max-w-3xl text-4xl leading-[0.92] tracking-tight text-white md:text-6xl lg:text-7xl">
              {p.title}
            </h1>
            <p className="max-w-lg text-lg text-white/70 md:text-xl">
              {p.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* ── 2. STATS BAR ────────────────────────────────────────────────────── */}
      <section className="border-b border-black/8">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="flex flex-wrap divide-x divide-black/8">
            {p.stats.map((stat) => (
              <div key={stat.label} className="px-8 py-6 first:pl-0">
                <p className="text-graphite/40 mb-1 font-mono text-[10px] tracking-widest uppercase">
                  {stat.label}
                </p>
                <p className="font-display text-charcoal text-2xl">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. STORY ────────────────────────────────────────────────────────── */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid gap-16 md:grid-cols-5 md:gap-24">
            {/* Left — sticky label column */}
            <div className="md:col-span-2">
              <SectionLabel>The Story</SectionLabel>
              <h2 className="font-display text-charcoal text-3xl leading-tight md:text-4xl">
                What we did
                <br />
                and how
                <br />
                we did it.
              </h2>
            </div>

            {/* Right — body copy */}
            <div className="space-y-8 md:col-span-3">
              <div>
                <p className="text-warmth mb-3 font-mono text-[10px] tracking-widest uppercase">
                  Overview
                </p>
                <p className="text-graphite text-base leading-relaxed md:text-lg">
                  {p.intro}
                </p>
              </div>
              <div>
                <p className="text-warmth mb-3 font-mono text-[10px] tracking-widest uppercase">
                  The Challenge
                </p>
                <p className="text-graphite text-base leading-relaxed">
                  {p.challenge}
                </p>
              </div>
              <div>
                <p className="text-warmth mb-3 font-mono text-[10px] tracking-widest uppercase">
                  Our Approach
                </p>
                <p className="text-graphite text-base leading-relaxed">
                  {p.approach}
                </p>
              </div>
              <div>
                <p className="text-warmth mb-3 font-mono text-[10px] tracking-widest uppercase">
                  The Outcome
                </p>
                <p className="text-graphite text-base leading-relaxed">
                  {p.outcome}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. GALLERY ──────────────────────────────────────────────────────── */}
      <section className="bg-white py-4">
        {/*
          Designer note: 2-col masonry-style gallery.
          Odd images are full-height, even images slightly shorter — creates
          a gentle offset rhythm. Add / remove items in PROJECT_DATA.gallery.
        */}
        <div className="container mx-auto mb-8 px-6 md:px-12 lg:px-20">
          <SectionLabel>Gallery</SectionLabel>
        </div>
        <div className="grid grid-cols-2 gap-2 px-2">
          {p.gallery.map((img, i) => (
            <ImagePlaceholder
              key={img.id}
              caption={img.caption}
              className={`w-full ${i % 2 === 0 ? "aspect-[3/4]" : "mt-8 aspect-square"}`}
            />
          ))}
        </div>
      </section>

      {/* ── 5. NEXT PROJECT / BACK ──────────────────────────────────────────── */}
      <section className="border-t border-black/8 py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-graphite/40 mb-3 font-mono text-xs tracking-widest uppercase">
                Up Next
              </p>
              <p className="text-graphite/40 text-lg">
                More projects coming soon.
              </p>
            </div>
            <Link
              href="/work"
              className="text-charcoal hover:border-warmth hover:text-warmth inline-flex items-center gap-2 self-start border border-black/20 px-7 py-3.5 text-sm font-medium transition-colors"
            >
              ← Back to all work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
