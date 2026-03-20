"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

// ─────────────────────────────────────────────────────────────────────────────
// CONFIG — flip SHOW_EXAMPLE_PROJECT to true when you have a real project ready
// ─────────────────────────────────────────────────────────────────────────────
const SHOW_EXAMPLE_PROJECT = false;

// ─── Types ────────────────────────────────────────────────────────────────────

interface Project {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  year: number;
  location: string;
  status: "completed" | "ongoing" | "upcoming";
  coverImageCaption: string;
  excerpt: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

// ↓ Replace this with real project data when ready.
//   Duplicate this object for each new project you add.
const PROJECTS: Project[] = [
  {
    id: 1,
    slug: "project-name-here",
    title: "Project Name Here",
    subtitle: "A short punchy subtitle — one line",
    category: "Food Festival",
    year: 2025,
    location: "City, Country",
    status: "completed",
    coverImageCaption:
      "Cover photo — wide, atmospheric, warm tones. 16:9 or 3:2 ratio.",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vehicula libero vel sapien fermentum, nec tincidunt nulla dignissim. Sed euismod nisl vel ultricies lacinia.",
  },
];

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

function SectionLabel({
  children,
  light = false,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <p
      className={`mb-6 text-xs font-medium tracking-[0.2em] uppercase ${light ? "text-white/30" : "text-graphite/50"}`}
    >
      {children}
    </p>
  );
}

function StatusBadge({ status }: { status: Project["status"] }) {
  const styles = {
    completed: "bg-warmth/10 text-warmth",
    ongoing: "bg-sand/60 text-graphite/70",
    upcoming: "border border-black/10 text-black/30",
  };
  const labels = {
    completed: "Completed",
    ongoing: "Ongoing",
    upcoming: "Upcoming",
  };
  return (
    <span
      className={`px-2.5 py-1 text-[10px] font-medium tracking-widest uppercase ${styles[status]}`}
    >
      {labels[status]}
    </span>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function WorkPage() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="text-charcoal bg-white">
      {/* ── 1. HERO ─────────────────────────────────────────────────────────── */}
      <section className="border-b border-black/8 pt-40 pb-24 md:pt-52 md:pb-32">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div
            className={`max-w-4xl transition-all duration-1000 ${visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
          >
            <p className="text-graphite/40 mb-8 font-mono text-xs tracking-[0.2em] uppercase">
              Work
            </p>
            <h1 className="font-display text-charcoal mb-10 text-5xl leading-[0.92] tracking-tight md:text-7xl lg:text-8xl">
              Things we&apos;ve
              <br />
              built and
              <br />
              <span className="text-warmth">put into the world.</span>
            </h1>
            <p
              className={`text-graphite max-w-lg text-xl leading-relaxed transition-all delay-200 duration-1000 ${visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              vehicula libero vel sapien fermentum nec tincidunt nulla
              dignissim.
            </p>
          </div>
        </div>
      </section>

      {/* ── 2. PROJECT GRID ─────────────────────────────────────────────────── */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          {SHOW_EXAMPLE_PROJECT ? (
            /*
              ── PROJECTS VISIBLE STATE ──────────────────────────────────────
              Shown when SHOW_EXAMPLE_PROJECT = true (or when real projects exist).
              Add more <Project> objects to PROJECTS array above and they appear here.
            */
            <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
              {PROJECTS.map((project) => (
                <Link
                  key={project.id}
                  href={`/work/${project.slug}`}
                  className="group hover:border-warmth relative block overflow-hidden border border-black/8 transition-all duration-300 hover:shadow-lg"
                >
                  {/* Left accent bar */}
                  <div className="bg-warmth absolute top-0 bottom-0 left-0 w-1 origin-bottom scale-y-0 transition-transform duration-300 group-hover:scale-y-100" />

                  {/* Cover image */}
                  <ImagePlaceholder
                    caption={project.coverImageCaption}
                    className="aspect-[3/2] w-full"
                  />

                  {/* Card text */}
                  <div className="p-6 md:p-8">
                    <div className="mb-4 flex items-center justify-between">
                      <span className="text-graphite/40 font-mono text-[10px] tracking-wider">
                        {project.category} · {project.year} · {project.location}
                      </span>
                      <StatusBadge status={project.status} />
                    </div>
                    <h2 className="font-heading text-charcoal group-hover:text-warmth mb-1 text-xl transition-colors md:text-2xl">
                      {project.title}
                    </h2>
                    <p className="text-graphite/60 mb-4 text-sm">
                      {project.subtitle}
                    </p>
                    <p className="text-graphite text-sm leading-relaxed">
                      {project.excerpt}
                    </p>
                    <span className="text-warmth mt-6 inline-flex items-center gap-2 text-xs font-medium opacity-0 transition-opacity group-hover:opacity-100">
                      View project →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            /*
              ── EMPTY STATE ─────────────────────────────────────────────────
              Shown at launch. Replace with real project content when ready
              by setting SHOW_EXAMPLE_PROJECT = true at the top of this file.
            */
            <div className="max-w-2xl">
              <div className="mb-16">
                <SectionLabel>Coming Soon</SectionLabel>
                <h2 className="font-display text-charcoal mb-6 text-4xl leading-tight md:text-5xl">
                  Our first project
                  <br />
                  is underway.
                </h2>
                <p className="text-graphite mb-8 max-w-md text-lg leading-relaxed">
                  Check back soon — we&apos;re building something worth writing
                  about.
                </p>
                <Link
                  href="/contact"
                  className="text-charcoal hover:border-warmth hover:text-warmth inline-flex items-center gap-2 border border-black/20 px-7 py-3.5 text-sm font-medium transition-colors"
                >
                  Get in touch while you wait
                </Link>
              </div>

              {/*
                ── TEASER CARD ─────────────────────────────────────────────
                A blurred/locked preview of the first project.
                Gives the page life even before launch.
              */}
              <div className="pointer-events-none relative overflow-hidden border border-black/8 select-none">
                {/* Blur overlay */}
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 bg-white/60 backdrop-blur-sm">
                  <span className="text-2xl">🔒</span>
                  <p className="text-graphite/50 font-mono text-xs tracking-widest uppercase">
                    Coming soon
                  </p>
                </div>

                {/* Blurred content underneath */}
                <ImagePlaceholder
                  caption="Cover photo — first project"
                  className="aspect-[3/2] w-full"
                />
                <div className="p-6 md:p-8">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-graphite/40 font-mono text-[10px] tracking-wider">
                      Food Festival · 2025 · City, Country
                    </span>
                    <span className="border border-black/10 px-2.5 py-1 text-[10px] font-medium tracking-widest text-black/30 uppercase">
                      Upcoming
                    </span>
                  </div>
                  <h2 className="font-heading text-charcoal mb-1 text-xl md:text-2xl">
                    Project Name TBC
                  </h2>
                  <p className="text-graphite/60 mb-4 text-sm">
                    A short punchy subtitle — one line
                  </p>
                  <p className="text-graphite text-sm leading-relaxed">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit.
                    Quisque vehicula libero vel sapien fermentum.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
