"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import { EyebrowLabel, SectionContainer } from "@/components/ui/primitives";

// ─── Constants ────────────────────────────────────────────────────────────────

const ACCENT = "#FF3D6B";

// ─── Data ─────────────────────────────────────────────────────────────────────

const PAINS = [
  {
    n: "01",
    icon: "◫",
    title: "You have a great space. Nobody knows what to do with it.",
    body: "The room looks fine. The concept sounds fine. But foot traffic is thin, dwell time is low, and repeat visits are rare. Something about the atmosphere isn't landing — you just can't put your finger on what.",
    tags: ["Venue owners", "Landlords", "Co-working spaces", "Event halls"],
  },
  {
    n: "02",
    icon: "⊘",
    title: "Your events fill up once. Then the novelty wears off.",
    body: "First event: great energy. Second event: noticeably quieter. Third: you're wondering if you did something wrong. You didn't. You just haven't built a reason for people to come back yet — and that's a different problem than filling seats once.",
    tags: ["Event planners", "Markets", "Pop-ups", "Festival organisers"],
  },
  {
    n: "03",
    icon: "⌁",
    title: "Your menu tells people the wrong story.",
    body: "The food is actually good. But the menu reads like it was written by a committee — too many options, unclear identity, no thread that connects any of it. Customers can't describe you to a friend because you haven't given them the words.",
    tags: ["Restaurant owners", "Café operators", "Food stall vendors"],
  },
  {
    n: "04",
    icon: "⊞",
    title: "Your numbers don't reflect how hard you're working.",
    body: "You're at it from open to close. The reviews are mostly positive. But margins are thin, table turns are awkward, and you suspect money is leaking somewhere — you just haven't had the time or distance to find where.",
    tags: ["F&B operators", "Hospitality businesses", "Café owners"],
  },
  {
    n: "05",
    icon: "◌",
    title: "Your brand looks like everyone else's.",
    body: "Someone designed a logo. You picked some fonts. The Instagram is consistent enough. But walk into any food market and you'll find ten stalls that look identical to yours. Nothing about your presence says: this one's different.",
    tags: ["New food businesses", "Festival vendors", "Hospitality startups"],
  },
  {
    n: "06",
    icon: "⊟",
    title: "You're planning an event but the vendor side is chaos.",
    body: "You've handled the venue and the permits. But finding the right mix of vendors, managing their needs, laying out a stall plan that creates good flow — that's a full-time job you didn't budget for.",
    tags: ["Event organisers", "Festival planners", "City markets"],
  },
];

const BREAKTHROUGHS = [
  {
    trigger: "Space not converting",
    insight:
      "Most spaces fail not because of what's in them, but because of how people move through them. We start by walking the space like a first-time visitor — and immediately spot what the owner stopped seeing years ago.",
    outcome:
      "Repositioned layout, adjusted lighting logic, and a clear 'journey' from entrance to departure that makes the space feel intentional.",
  },
  {
    trigger: "Events with no return rate",
    insight:
      "One-time events sell novelty. Recurring events sell belonging. The shift from one to the other is almost always about what happens in the 48 hours after the event — not during it.",
    outcome:
      "We build the follow-up loop: social moments, vendor spotlights, community anchors — all designed to make guests feel like they're part of something ongoing.",
  },
  {
    trigger: "Menu with no identity",
    insight:
      "The best menus have an argument. They say: this is what we believe food should be, and here's the proof. We help clients find that argument — then cut everything that contradicts it.",
    outcome:
      "A tighter, more confident menu with a clear story. Often fewer items than before. Almost always better received.",
  },
  {
    trigger: "Revenue not matching effort",
    insight:
      "The usual culprits are pricing psychology (too many mid-tier items, not enough clear premium), inefficient table or counter flow, and labour costs calibrated to peak hours rather than average hours.",
    outcome:
      "A revenue audit that identifies the top three leaks, plus a concrete action plan that can typically be implemented in under a month.",
  },
];

const CAPABILITIES = [
  {
    area: "Space Activation",
    items: [
      "Layout and flow consulting",
      "Atmosphere direction (lighting, sound, material)",
      "Pop-up and residency design",
      "Venue brief writing for architects and interior designers",
    ],
  },
  {
    area: "Culinary Direction",
    items: [
      "Menu development and rationalisation",
      "Concept creation from scratch",
      "Seasonal and dietary range planning",
      "Sourcing introductions and supplier relations",
    ],
  },
  {
    area: "Event Production",
    items: [
      "Food festival programming and curation",
      "Vendor sourcing and management",
      "Layout and flow planning",
      "On-the-day operations and logistics",
    ],
  },
  {
    area: "Brand & Identity",
    items: [
      "Brand strategy and positioning",
      "Identity systems (visual + verbal)",
      "Content direction for social and digital",
      "Naming and messaging frameworks",
    ],
  },
  {
    area: "Operations & Revenue",
    items: [
      "Revenue diagnosis and improvement planning",
      "Digital and physical workflow design",
      "Software selection and implementation support",
      "Systems documentation for growing teams",
    ],
  },
  {
    area: "F&B Consulting",
    items: [
      "New concept validation and roadmapping",
      "Location feasibility and market analysis",
      "Opening project management",
      "Ongoing advisory for early-stage operators",
    ],
  },
];

const WHO_WE_WORK_WITH = [
  {
    label: "Independent café and restaurant owners",
    sub: "trying to tighten their concept and grow without losing what makes them good",
  },
  {
    label: "Event organisers and festival planners",
    sub: "who want better vendors, better flow, and events people talk about afterward",
  },
  {
    label: "Property owners and developers",
    sub: "with ground-floor or underused spaces looking for the right activation partner",
  },
  {
    label: "First-time food entrepreneurs",
    sub: "who have the product but need help with everything else",
  },
  {
    label: "Hospitality groups launching new concepts",
    sub: "who want an outside perspective before they commit resources",
  },
];

// ─── Section: Hero ────────────────────────────────────────────────────────────

function Hero({ vis }: { vis: boolean }) {
  return (
    <section
      style={{
        background: "#111",
        paddingTop: "clamp(120px, 18vw, 180px)",
        paddingBottom: "clamp(60px, 8vw, 100px)",
        paddingLeft: "2rem",
        paddingRight: "2rem",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative bg text */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: "-2rem",
          right: "-1rem",
          fontFamily: "'Anton', sans-serif",
          fontSize: "clamp(100px, 18vw, 240px)",
          lineHeight: 1,
          color: "transparent",
          WebkitTextStroke: "1px rgba(255,255,255,0.035)",
          pointerEvents: "none",
          userSelect: "none",
          letterSpacing: "-0.02em",
        }}
      >
        HOW
      </div>

      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* Breadcrumb */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            marginBottom: "2.5rem",
            opacity: vis ? 1 : 0,
            transition: "opacity 0.8s ease 0.1s",
          }}
        >
          <Link
            href="/"
            style={{
              fontFamily: "monospace",
              fontSize: "10px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.2)",
              textDecoration: "none",
              transition: "color 0.2s ease",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.color =
                "rgba(255,255,255,0.5)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.color =
                "rgba(255,255,255,0.2)")
            }
          >
            One Bite Street
          </Link>
          <span
            style={{
              color: "rgba(255,255,255,0.12)",
              fontFamily: "monospace",
              fontSize: "10px",
            }}
          >
            /
          </span>
          <span
            style={{
              fontFamily: "monospace",
              fontSize: "10px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.35)",
            }}
          >
            How We Work
          </span>
        </div>

        <EyebrowLabel light>How We Work</EyebrowLabel>

        <h1
          style={{
            fontFamily: "'Anton', sans-serif",
            fontSize: "clamp(52px, 9vw, 120px)",
            lineHeight: 0.88,
            letterSpacing: "-0.01em",
            color: "#fff",
            marginBottom: "2rem",
            maxWidth: "900px",
            opacity: vis ? 1 : 0,
            transform: vis ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.9s ease 0.2s, transform 0.9s ease 0.2s",
          }}
        >
          PROBLEMS
          <br />
          WE ACTUALLY <span style={{ color: ACCENT }}>SOLVE.</span>
        </h1>

        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "clamp(16px, 1.8vw, 20px)",
            lineHeight: 1.75,
            fontWeight: 300,
            color: "rgba(255,255,255,0.45)",
            maxWidth: "560px",
            opacity: vis ? 1 : 0,
            transform: vis ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 0.9s ease 0.4s, transform 0.9s ease 0.4s",
          }}
        >
          If you work in hospitality, food, or spaces — you already know the
          problems. Here&apos;s what they actually look like, what usually
          causes them, and how we approach fixing them.
        </p>

        {/* Read time + article meta */}
        <div
          style={{
            display: "flex",
            gap: "2rem",
            marginTop: "3rem",
            flexWrap: "wrap",
            opacity: vis ? 1 : 0,
            transition: "opacity 0.8s ease 0.6s",
          }}
        >
          {[
            { label: "Read time", value: "8 min" },
            { label: "Topics", value: "Space · Events · F&B · Brand" },
            { label: "Updated", value: "2026" },
          ].map((m) => (
            <div key={m.label}>
              <p
                style={{
                  fontFamily: "monospace",
                  fontSize: "9px",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.18)",
                  marginBottom: "3px",
                }}
              >
                {m.label}
              </p>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "13px",
                  fontWeight: 300,
                  color: "rgba(255,255,255,0.45)",
                }}
              >
                {m.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Section: Pain Points ─────────────────────────────────────────────────────

function PainPoints() {
  return (
    <section style={{ background: "#0e0e0e", padding: "6rem 2rem" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        {/* Intro block */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4rem",
            marginBottom: "5rem",
            alignItems: "end",
          }}
          className="obs-two-col"
        >
          <div>
            <EyebrowLabel light>The Problems</EyebrowLabel>
            <h2
              style={{
                fontFamily: "'Anton', sans-serif",
                fontSize: "clamp(34px, 5vw, 64px)",
                lineHeight: 0.92,
                color: "#fff",
              }}
            >
              THINGS WE HEAR
              <br />
              <span style={{ color: ACCENT }}>ALL THE TIME.</span>
            </h2>
          </div>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "15px",
              lineHeight: 1.85,
              fontWeight: 300,
              color: "rgba(255,255,255,0.35)",
            }}
          >
            These aren&apos;t unusual problems. They show up in every kind of
            hospitality business — from a solo food stall to a multi-venue
            operator. What varies is how deeply they&apos;re embedded, and how
            willing the owner is to look at them directly.
          </p>
        </div>

        {/* Pain cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
            gap: "2px",
          }}
        >
          {PAINS.map((pain, i) => (
            <div
              key={pain.n}
              style={{
                background: i % 2 === 0 ? "#141414" : "#111",
                padding: "2.5rem",
                borderLeft: `1px solid rgba(255,255,255,0.04)`,
                borderBottom: `1px solid rgba(255,255,255,0.04)`,
                position: "relative",
              }}
            >
              {/* Number */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  marginBottom: "1.5rem",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Anton', sans-serif",
                    fontSize: "11px",
                    letterSpacing: "0.2em",
                    color: "rgba(255,255,255,0.12)",
                  }}
                >
                  {pain.n}
                </span>
                <span
                  style={{
                    fontSize: "18px",
                    color: `${ACCENT}80`,
                    lineHeight: 1,
                  }}
                >
                  {pain.icon}
                </span>
              </div>

              {/* Title */}
              <h3
                style={{
                  fontFamily: "'Anton', sans-serif",
                  fontSize: "clamp(18px, 2vw, 24px)",
                  lineHeight: 1.05,
                  color: "#fff",
                  marginBottom: "1.25rem",
                  letterSpacing: "-0.005em",
                }}
              >
                {pain.title}
              </h3>

              {/* Body */}
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "14px",
                  lineHeight: 1.85,
                  fontWeight: 300,
                  color: "rgba(255,255,255,0.38)",
                  marginBottom: "1.5rem",
                }}
              >
                {pain.body}
              </p>

              {/* Tags */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {pain.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontFamily: "monospace",
                      fontSize: "8px",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "rgba(255,255,255,0.18)",
                      border: "1px solid rgba(255,255,255,0.07)",
                      padding: "3px 8px",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Section: Divider quote ───────────────────────────────────────────────────

function PullQuote() {
  return (
    <section
      style={{
        background: ACCENT,
        padding: "5rem 2rem",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          fontFamily: "'Anton', sans-serif",
          fontSize: "clamp(80px, 14vw, 200px)",
          lineHeight: 1,
          color: "rgba(0,0,0,0.06)",
          pointerEvents: "none",
          userSelect: "none",
          whiteSpace: "nowrap",
        }}
      >
        FIX THE ROOT
      </div>
      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        <p
          style={{
            fontFamily: "'Anton', sans-serif",
            fontSize: "clamp(22px, 3.5vw, 44px)",
            lineHeight: 1.05,
            color: "#fff",
            letterSpacing: "-0.01em",
          }}
        >
          &ldquo;Most fixes in hospitality are cosmetic. We look for the thing
          underneath the thing.&rdquo;
        </p>
        <p
          style={{
            fontFamily: "monospace",
            fontSize: "10px",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.6)",
            marginTop: "1.5rem",
          }}
        >
          — One Bite Street, operating principle
        </p>
      </div>
    </section>
  );
}

// ─── Section: Breakthroughs ───────────────────────────────────────────────────

function Breakthroughs() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section style={{ background: "#F8F6F2", padding: "6rem 2rem" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "5rem",
            alignItems: "start",
          }}
          className="obs-two-col"
        >
          {/* Left: sticky heading */}
          <div style={{ position: "sticky", top: "6rem" }}>
            <EyebrowLabel>The Breakthroughs</EyebrowLabel>
            <h2
              style={{
                fontFamily: "'Anton', sans-serif",
                fontSize: "clamp(34px, 5vw, 62px)",
                lineHeight: 0.92,
                color: "#111",
                marginBottom: "1.5rem",
              }}
            >
              WHAT ACTUALLY
              <br />
              <span style={{ color: ACCENT }}>MOVES THE NEEDLE.</span>
            </h2>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "15px",
                lineHeight: 1.85,
                fontWeight: 300,
                color: "rgba(17,17,17,0.45)",
                maxWidth: "400px",
              }}
            >
              Every one of these comes from a real pattern we&apos;ve seen
              repeated across clients. The situations are always slightly
              different. The underlying cause is usually the same.
            </p>

            <div
              style={{
                marginTop: "2.5rem",
                padding: "1.5rem",
                background: "#fff",
                borderLeft: `3px solid ${ACCENT}`,
              }}
            >
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "13px",
                  lineHeight: 1.8,
                  fontWeight: 300,
                  color: "rgba(17,17,17,0.5)",
                }}
              >
                Click each trigger to read what we&apos;ve found — and what
                usually resolves it.
              </p>
            </div>
          </div>

          {/* Right: accordion */}
          <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
            {BREAKTHROUGHS.map((bt, i) => (
              <div
                key={i}
                style={{
                  background: "#fff",
                  borderBottom: "1px solid rgba(17,17,17,0.06)",
                  overflow: "hidden",
                  transition: "background 0.2s ease",
                }}
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  style={{
                    width: "100%",
                    textAlign: "left",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: "1.5rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "1rem",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      gap: "1rem",
                      alignItems: "center",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "monospace",
                        fontSize: "9px",
                        letterSpacing: "0.16em",
                        textTransform: "uppercase",
                        color: ACCENT,
                        flexShrink: 0,
                        background: `${ACCENT}15`,
                        padding: "4px 8px",
                        whiteSpace: "nowrap",
                      }}
                    >
                      Trigger
                    </span>
                    <h3
                      style={{
                        fontFamily: "'Anton', sans-serif",
                        fontSize: "clamp(15px, 1.6vw, 19px)",
                        lineHeight: 1.1,
                        color: "#111",
                        letterSpacing: "0",
                      }}
                    >
                      {bt.trigger}
                    </h3>
                  </div>
                  <span
                    style={{
                      color: ACCENT,
                      fontSize: "18px",
                      flexShrink: 0,
                      transform: open === i ? "rotate(45deg)" : "rotate(0deg)",
                      transition: "transform 0.25s ease",
                      display: "block",
                      lineHeight: 1,
                    }}
                  >
                    +
                  </span>
                </button>

                {/* Expanded content */}
                <div
                  style={{
                    maxHeight: open === i ? "500px" : "0",
                    overflow: "hidden",
                    transition: "max-height 0.35s ease",
                  }}
                >
                  <div
                    style={{
                      padding: "0 1.5rem 1.75rem",
                      borderTop: "1px solid rgba(17,17,17,0.06)",
                    }}
                  >
                    <div
                      style={{
                        paddingTop: "1.5rem",
                        display: "flex",
                        flexDirection: "column",
                        gap: "1.25rem",
                      }}
                    >
                      <div>
                        <p
                          style={{
                            fontFamily: "monospace",
                            fontSize: "8px",
                            letterSpacing: "0.2em",
                            textTransform: "uppercase",
                            color: "rgba(17,17,17,0.3)",
                            marginBottom: "6px",
                          }}
                        >
                          What we find
                        </p>
                        <p
                          style={{
                            fontFamily: "'DM Sans', sans-serif",
                            fontSize: "14px",
                            lineHeight: 1.85,
                            fontWeight: 300,
                            color: "rgba(17,17,17,0.6)",
                          }}
                        >
                          {bt.insight}
                        </p>
                      </div>
                      <div
                        style={{
                          background: `${ACCENT}08`,
                          borderLeft: `2px solid ${ACCENT}`,
                          padding: "1rem 1.25rem",
                        }}
                      >
                        <p
                          style={{
                            fontFamily: "monospace",
                            fontSize: "8px",
                            letterSpacing: "0.2em",
                            textTransform: "uppercase",
                            color: ACCENT,
                            marginBottom: "6px",
                          }}
                        >
                          Typical outcome
                        </p>
                        <p
                          style={{
                            fontFamily: "'DM Sans', sans-serif",
                            fontSize: "14px",
                            lineHeight: 1.75,
                            fontWeight: 400,
                            color: "rgba(17,17,17,0.7)",
                          }}
                        >
                          {bt.outcome}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Section: Who we work with ────────────────────────────────────────────────

function WhoWeWorkWith() {
  return (
    <section
      style={{
        background: "#fff",
        padding: "6rem 2rem",
        borderTop: "1px solid rgba(17,17,17,0.06)",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "380px 1fr",
            gap: "5rem",
            alignItems: "start",
          }}
          className="obs-two-col"
        >
          <div>
            <EyebrowLabel>Who We Work With</EyebrowLabel>
            <h2
              style={{
                fontFamily: "'Anton', sans-serif",
                fontSize: "clamp(30px, 4vw, 52px)",
                lineHeight: 0.92,
                color: "#111",
                marginBottom: "1.5rem",
              }}
            >
              IF THIS
              <br />
              SOUNDS LIKE
              <br />
              <span style={{ color: ACCENT }}>YOU.</span>
            </h2>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "14px",
                lineHeight: 1.85,
                fontWeight: 300,
                color: "rgba(17,17,17,0.45)",
              }}
            >
              We work with a range of businesses — but what they have in common
              is that they care about doing it properly, not just doing it fast.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {WHO_WE_WORK_WITH.map((w, i) => (
              <div
                key={i}
                style={{
                  padding: "1.75rem 0",
                  borderBottom:
                    i !== WHO_WE_WORK_WITH.length - 1
                      ? "1px solid rgba(17,17,17,0.07)"
                      : "none",
                  display: "flex",
                  gap: "1.5rem",
                  alignItems: "flex-start",
                }}
              >
                <span
                  style={{
                    color: ACCENT,
                    fontFamily: "'Anton', sans-serif",
                    fontSize: "13px",
                    flexShrink: 0,
                    marginTop: "2px",
                  }}
                >
                  →
                </span>
                <div>
                  <p
                    style={{
                      fontFamily: "'Anton', sans-serif",
                      fontSize: "clamp(16px, 1.6vw, 20px)",
                      lineHeight: 1.1,
                      color: "#111",
                      marginBottom: "4px",
                      letterSpacing: "0",
                    }}
                  >
                    {w.label}
                  </p>
                  <p
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "13px",
                      fontWeight: 300,
                      lineHeight: 1.7,
                      color: "rgba(17,17,17,0.4)",
                      fontStyle: "italic",
                    }}
                  >
                    {w.sub}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Section: Capabilities ────────────────────────────────────────────────────

function Capabilities() {
  return (
    <section style={{ background: "#111", padding: "6rem 2rem" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div style={{ marginBottom: "4rem" }}>
          <EyebrowLabel light>What We Do</EyebrowLabel>
          <h2
            style={{
              fontFamily: "'Anton', sans-serif",
              fontSize: "clamp(34px, 5vw, 64px)",
              lineHeight: 0.92,
              color: "#fff",
              maxWidth: "700px",
            }}
          >
            OUR FULL
            <br />
            <span style={{ color: ACCENT }}>CAPABILITIES.</span>
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "1px",
            background: "rgba(255,255,255,0.05)",
          }}
        >
          {CAPABILITIES.map((cap, i) => (
            <div
              key={cap.area}
              style={{
                background: "#111",
                padding: "2.5rem",
              }}
            >
              {/* Area header */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "1.75rem",
                  paddingBottom: "1.25rem",
                  borderBottom: `1px solid rgba(255,255,255,0.06)`,
                }}
              >
                <span
                  style={{
                    fontFamily: "monospace",
                    fontSize: "9px",
                    letterSpacing: "0.18em",
                    color: "rgba(255,255,255,0.15)",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3
                  style={{
                    fontFamily: "'Anton', sans-serif",
                    fontSize: "clamp(15px, 1.4vw, 18px)",
                    letterSpacing: "0.02em",
                    color: ACCENT,
                  }}
                >
                  {cap.area}
                </h3>
              </div>

              {/* Items */}
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {cap.items.map((item) => (
                  <li
                    key={item}
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "13px",
                      lineHeight: 1.7,
                      fontWeight: 300,
                      color: "rgba(255,255,255,0.4)",
                      padding: "6px 0",
                      borderBottom: "1px solid rgba(255,255,255,0.04)",
                      display: "flex",
                      gap: "10px",
                      alignItems: "flex-start",
                    }}
                  >
                    <span
                      style={{
                        color: `${ACCENT}60`,
                        flexShrink: 0,
                        marginTop: "2px",
                        fontSize: "10px",
                      }}
                    >
                      ·
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "13px",
            fontWeight: 300,
            lineHeight: 1.8,
            color: "rgba(255,255,255,0.2)",
            marginTop: "2rem",
            maxWidth: "640px",
          }}
        >
          We don&apos;t offer everything at once. Most engagements start with
          one or two areas where the need is clearest — and we build from there.
          The right starting point depends on your situation.
        </p>
      </div>
    </section>
  );
}

// ─── Section: Process ─────────────────────────────────────────────────────────

function Process() {
  const steps = [
    {
      n: "01",
      title: "You reach out.",
      body: "No pitch deck needed. Just tell us what's going on — your situation, what you've tried, what's frustrating you. The messier the better. We read everything properly.",
    },
    {
      n: "02",
      title: "We listen before we diagnose.",
      body: "Most consultants arrive with the answer before they've heard the question. We don't. The first conversation is about understanding the problem fully — not selling you on a solution.",
    },
    {
      n: "03",
      title: "We agree on a clear scope.",
      body: "No vague retainers. We scope specifically: what are we doing, what does success look like, what's the timeline, what's the cost. Everything in writing before we start.",
    },
    {
      n: "04",
      title: "We do the work alongside you.",
      body: "We're not a deliverables-and-goodbye firm. We embed in the problem with you — on-site, available, thinking about your business the way you do.",
    },
    {
      n: "05",
      title: "We stay close after.",
      body: "The handover isn't a goodbye. We check in. We course-correct if something isn't working as planned. The relationship continues as long as it's useful.",
    },
  ];

  return (
    <section style={{ background: "#F8F6F2", padding: "6rem 2rem" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div style={{ marginBottom: "4rem" }}>
          <EyebrowLabel>How It Works</EyebrowLabel>
          <h2
            style={{
              fontFamily: "'Anton', sans-serif",
              fontSize: "clamp(34px, 5vw, 62px)",
              lineHeight: 0.92,
              color: "#111",
            }}
          >
            THE WAY
            <br />
            <span style={{ color: ACCENT }}>WE ENGAGE.</span>
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "0",
          }}
        >
          {steps.map((step, i) => (
            <div
              key={step.n}
              style={{
                padding: "2.5rem 2rem",
                borderRight:
                  i !== steps.length - 1
                    ? "1px solid rgba(17,17,17,0.08)"
                    : "none",
                position: "relative",
              }}
            >
              {/* Connector line */}
              {i !== steps.length - 1 && (
                <div
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    top: "3rem",
                    right: "-1px",
                    width: "1px",
                    height: "24px",
                    background: ACCENT,
                    opacity: 0.4,
                  }}
                />
              )}

              <span
                style={{
                  fontFamily: "'Anton', sans-serif",
                  fontSize: "clamp(36px, 4vw, 54px)",
                  lineHeight: 0.85,
                  color: `${ACCENT}18`,
                  display: "block",
                  marginBottom: "1.25rem",
                  letterSpacing: "-0.02em",
                }}
              >
                {step.n}
              </span>
              <h3
                style={{
                  fontFamily: "'Anton', sans-serif",
                  fontSize: "clamp(17px, 1.6vw, 21px)",
                  lineHeight: 1.05,
                  color: "#111",
                  marginBottom: "0.85rem",
                }}
              >
                {step.title}
              </h3>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "13px",
                  lineHeight: 1.85,
                  fontWeight: 300,
                  color: "rgba(17,17,17,0.45)",
                }}
              >
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Section: CTA ─────────────────────────────────────────────────────────────

function ContactCTA() {
  return (
    <section
      style={{
        background: "#111",
        padding: "8rem 2rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Glow */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "700px",
          height: "700px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255,61,107,0.09) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          position: "relative",
          zIndex: 2,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "5rem",
          alignItems: "center",
        }}
        className="obs-two-col"
      >
        {/* Left */}
        <div>
          <EyebrowLabel light>Ready to talk?</EyebrowLabel>
          <h2
            style={{
              fontFamily: "'Anton', sans-serif",
              fontSize: "clamp(42px, 7vw, 100px)",
              lineHeight: 0.88,
              color: "#fff",
              letterSpacing: "-0.01em",
              marginBottom: "1.5rem",
            }}
          >
            TELL US
            <br />
            <span style={{ color: ACCENT }}>WHAT&apos;S</span>
            <br />
            GOING ON.
          </h2>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "15px",
              lineHeight: 1.8,
              fontWeight: 300,
              color: "rgba(255,255,255,0.35)",
              maxWidth: "380px",
            }}
          >
            No templates. No packages. Just a real conversation about your
            situation — and whether we can help with it.
          </p>
        </div>

        {/* Right */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {/* Primary CTA */}
          <Link
            href="/contact"
            style={{
              fontFamily: "'Anton', sans-serif",
              fontSize: "clamp(18px, 2vw, 24px)",
              letterSpacing: "0.02em",
              textTransform: "uppercase",
              background: ACCENT,
              color: "#fff",
              padding: "1.5rem 2rem",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              transition: "background 0.2s ease",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.background =
                "rgba(255,61,107,0.85)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLAnchorElement).style.background = ACCENT)
            }
          >
            Send us a message
            <span style={{ fontSize: "22px" }}>→</span>
          </Link>

          {/* Quick scenarios */}
          <div
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.07)",
              padding: "1.5rem",
            }}
          >
            <p
              style={{
                fontFamily: "monospace",
                fontSize: "8px",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.2)",
                marginBottom: "1rem",
              }}
            >
              Common starting points
            </p>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              {[
                "I'm opening something new and don't know where to start",
                "My space isn't working and I can't figure out why",
                "I want to run a food event but need help with the vendor side",
                "My revenue isn't matching the effort I'm putting in",
              ].map((s, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    gap: "10px",
                    alignItems: "flex-start",
                  }}
                >
                  <span
                    style={{
                      color: `${ACCENT}80`,
                      fontSize: "10px",
                      flexShrink: 0,
                      marginTop: "3px",
                    }}
                  >
                    ·
                  </span>
                  <p
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "12px",
                      fontWeight: 300,
                      lineHeight: 1.6,
                      color: "rgba(255,255,255,0.3)",
                      fontStyle: "italic",
                    }}
                  >
                    &ldquo;{s}&rdquo;
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Direct email */}
          <div
            style={{ paddingTop: "0.25rem", display: "flex", gap: "1.5rem" }}
          >
            <div>
              <p
                style={{
                  fontFamily: "monospace",
                  fontSize: "8px",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.15)",
                  marginBottom: "4px",
                }}
              >
                Or email directly
              </p>
              <a
                href="mailto:onebitestr@gmail.com"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "13px",
                  fontWeight: 300,
                  color: "rgba(255,255,255,0.4)",
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.color = "#fff")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.color =
                    "rgba(255,255,255,0.4)")
                }
              >
                onebitestr@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Root ─────────────────────────────────────────────────────────────────────

export default function WorkPageClient() {
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVis(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <div style={{ background: "#111" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Anton&family=DM+Sans:ital,wght@0,200;0,300;0,400;0,500;1,300;1,400&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        @media (max-width: 768px) {
          .obs-two-col { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
          .obs-two-col > *:first-child { position: static !important; }
        }
      `}</style>

      <SiteHeader
        extraLinks={[
          { label: "OH·AE", href: "/ohae" },
          { label: "How We Work", href: "/work" },
        ]}
        ctaHref="/contact"
        ctaLabel="Let's talk"
      />

      <Hero vis={vis} />
      <PainPoints />
      <PullQuote />
      <Breakthroughs />
      <WhoWeWorkWith />
      <Capabilities />
      <Process />
      <ContactCTA />

      <SiteFooter
        links={[
          { label: "Home", href: "/" },
          { label: "OH·AE", href: "/ohae" },
          { label: "Contact", href: "/contact" },
        ]}
      />
    </div>
  );
}
