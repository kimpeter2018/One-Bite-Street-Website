"use client";

import { useState, useEffect } from "react";

// ─── Service topics ────────────────────────────────────────────────────────────

const SERVICES = [
  {
    id: "menu",
    label: "Menu Development",
    desc: "Recipe creation, costing, dietary range, seasonal adjustments.",
    x: 18,
    y: 22,
  },
  {
    id: "event",
    label: "Event Planning",
    desc: "Food festivals, private dining, pop-ups, vendor curation.",
    x: 72,
    y: 14,
  },
  {
    id: "interior",
    label: "Interior & Space Design",
    desc: "Layout, flow, atmosphere — making every square metre work.",
    x: 88,
    y: 48,
  },
  {
    id: "space",
    label: "Space Utilisation",
    desc: "You have a space but aren&apos;t sure how to make it earn.",
    x: 62,
    y: 80,
  },
  {
    id: "revenue",
    label: "Revenue Inspection",
    desc: "Thorough diagnosis of why the numbers aren&apos;t moving.",
    x: 22,
    y: 76,
  },
  {
    id: "systems",
    label: "Systems & Operations",
    desc: "Efficient digital + physical workflows for restaurants and cafés.",
    x: 8,
    y: 50,
  },
  {
    id: "software",
    label: "Software Support",
    desc: "Web, app, or in-store software — built or sourced for you.",
    x: 44,
    y: 92,
  },
];

// Centre node position (%)
const CX = 44;
const CY = 46;

// ─── Helpers ──────────────────────────────────────────────────────────────────

function EyebrowLabel({
  children,
  light = false,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <p
      style={{
        fontFamily: "'DM Sans', sans-serif",
        fontSize: "10px",
        letterSpacing: "0.24em",
        fontWeight: 500,
        textTransform: "uppercase",
        color: light ? "rgba(255,255,255,0.35)" : "#FF3D6B",
        marginBottom: "1.25rem",
      }}
    >
      {children}
    </p>
  );
}

// ─── Curly map SVG ────────────────────────────────────────────────────────────

function ServiceMap({
  selected,
  onSelect,
}: {
  selected: string | null;
  onSelect: (id: string) => void;
}) {
  // Build a slightly curvy path between two % positions
  const curvePath = (
    ax: number,
    ay: number,
    bx: number,
    by: number,
  ): string => {
    // Control point — offset perpendicular to midpoint for a gentle curl
    const mx = (ax + bx) / 2;
    const my = (ay + by) / 2;
    const dx = bx - ax;
    const dy = by - ay;
    // Perpendicular offset — alternating sign based on angle
    const curl = 8;
    const cpx = mx - dy * (curl / 100);
    const cpy = my + dx * (curl / 100);
    return `M ${ax} ${ay} Q ${cpx} ${cpy} ${bx} ${by}`;
  };

  return (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid meet"
      style={{
        width: "100%",
        height: "100%",
        overflow: "visible",
      }}
    >
      {/* Curly connector lines */}
      {SERVICES.map((s) => {
        const isActive = selected === s.id;
        return (
          <path
            key={`line-${s.id}`}
            d={curvePath(CX, CY, s.x, s.y)}
            fill="none"
            stroke={isActive ? "#FF3D6B" : "rgba(255,255,255,0.1)"}
            strokeWidth={isActive ? "0.5" : "0.3"}
            strokeDasharray={isActive ? "none" : "1 1.5"}
            style={{ transition: "stroke 0.3s ease, stroke-width 0.3s ease" }}
          />
        );
      })}

      {/* Centre node */}
      <circle cx={CX} cy={CY} r="3.2" fill="#FF3D6B" />
      <circle
        cx={CX}
        cy={CY}
        r="5.5"
        fill="none"
        stroke="rgba(255,61,107,0.25)"
        strokeWidth="0.5"
      />
      <text
        x={CX}
        y={CY - 5}
        textAnchor="middle"
        fontSize="2.4"
        fill="rgba(255,255,255,0.5)"
        fontFamily="monospace"
        letterSpacing="0.3"
      >
        ONE BITE ST.
      </text>

      {/* Service nodes */}
      {SERVICES.map((s) => {
        const isActive = selected === s.id;
        return (
          <g
            key={`node-${s.id}`}
            style={{ cursor: "pointer" }}
            onClick={() => onSelect(s.id)}
          >
            {/* Outer ring on active */}
            {isActive && (
              <circle
                cx={s.x}
                cy={s.y}
                r="4.2"
                fill="none"
                stroke="rgba(255,61,107,0.35)"
                strokeWidth="0.5"
              />
            )}
            {/* Dot */}
            <circle
              cx={s.x}
              cy={s.y}
              r={isActive ? "2.4" : "1.6"}
              fill={isActive ? "#FF3D6B" : "rgba(255,255,255,0.35)"}
              style={{
                transition: "r 0.25s ease, fill 0.25s ease",
              }}
            />
            {/* Label */}
            <text
              x={s.x}
              y={s.y + (s.y < CY ? -4 : 4.5)}
              textAnchor="middle"
              fontSize="2.6"
              fill={isActive ? "#FF3D6B" : "rgba(255,255,255,0.4)"}
              fontFamily="'DM Sans', sans-serif"
              fontWeight={isActive ? "500" : "400"}
              style={{ transition: "fill 0.25s ease" }}
            >
              {s.label}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ContactPage() {
  const [vis, setVis] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const t = setTimeout(() => setVis(true), 80);
    return () => clearTimeout(t);
  }, []);

  const selectedService = SERVICES.find((s) => s.id === selected);

  const handleSelect = (id: string) => {
    setSelected((prev) => (prev === id ? null : id));
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const subject = selectedService
      ? `[${selectedService.label}] Message from ${form.name}`
      : `Message from ${form.name}`;

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject,
          message: selectedService
            ? `Topic: ${selectedService.label}\n\n${form.message}`
            : form.message,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setErrorMsg(data.error || "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      setForm({ name: "", email: "", message: "" });
      setSelected(null);
    } catch {
      setStatus("error");
      setErrorMsg("Could not send your message. Check your connection.");
    }
  };

  return (
    <div
      style={{
        background: "#111",
        color: "#fff",
        minHeight: "100vh",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Anton&family=DM+Sans:ital,wght@0,200;0,300;0,400;0,500;1,300;1,400&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        input, textarea {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.1);
          color: #fff;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          font-weight: 300;
          padding: 14px 18px;
          width: 100%;
          outline: none;
          transition: border-color 0.2s ease, background 0.2s ease;
          border-radius: 0;
          -webkit-appearance: none;
        }
        input::placeholder, textarea::placeholder {
          color: rgba(255,255,255,0.2);
        }
        input:focus, textarea:focus {
          border-color: rgba(255,61,107,0.5);
          background: rgba(255,61,107,0.03);
        }
        textarea { resize: none; }
        .service-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 7px 14px;
          border: 1px solid rgba(255,255,255,0.1);
          font-size: 11px;
          letter-spacing: 0.08em;
          font-weight: 400;
          color: rgba(255,255,255,0.45);
          cursor: pointer;
          transition: all 0.2s ease;
          background: transparent;
          font-family: 'DM Sans', sans-serif;
          white-space: nowrap;
        }
        .service-pill:hover {
          border-color: rgba(255,61,107,0.4);
          color: rgba(255,255,255,0.7);
        }
        .service-pill--active {
          border-color: #FF3D6B !important;
          color: #FF3D6B !important;
          background: rgba(255,61,107,0.06) !important;
        }
        .service-pill--active .pill-dot { background: #FF3D6B !important; }
        .pill-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: rgba(255,255,255,0.2);
          flex-shrink: 0;
          transition: background 0.2s ease;
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes scrollLine {
          0%   { transform: translateY(-100%); }
          100% { transform: translateY(300%); }
        }
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr !important; }
          .map-col { min-height: 320px; }
        }
      `}</style>

      {/* ── Nav back link ──────────────────────────────────────────────────── */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          height: "68px",
          display: "flex",
          alignItems: "center",
          padding: "0 2rem",
          background: "rgba(17,17,17,0.92)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <a
          href="/"
          style={{
            fontFamily: "'Anton', sans-serif",
            fontSize: "13px",
            letterSpacing: "0.18em",
            color: "rgba(255,255,255,0.4)",
            textDecoration: "none",
            transition: "color 0.2s ease",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLAnchorElement).style.color = "#fff")
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLAnchorElement).style.color =
              "rgba(255,255,255,0.4)")
          }
        >
          ← ONE BITE STREET
        </a>
      </div>

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section
        style={{
          paddingTop: "140px",
          paddingBottom: "80px",
          paddingLeft: "2rem",
          paddingRight: "2rem",
          maxWidth: "1280px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            opacity: vis ? 1 : 0,
            transform: vis ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.9s ease, transform 0.9s ease",
          }}
        >
          <EyebrowLabel light>Get in Touch</EyebrowLabel>
          <h1
            style={{
              fontFamily: "'Anton', sans-serif",
              fontSize: "clamp(52px, 10vw, 130px)",
              lineHeight: 0.88,
              letterSpacing: "-0.01em",
              marginBottom: "2rem",
            }}
          >
            LET&apos;S MAKE
            <br />
            <span style={{ color: "#FF3D6B" }}>SOMETHING.</span>
          </h1>
          <p
            style={{
              fontSize: "16px",
              fontWeight: 300,
              lineHeight: 1.75,
              color: "rgba(255,255,255,0.4)",
              maxWidth: "480px",
            }}
          >
            We&apos;re a small team. Every message goes to a real person who
            reads it properly and writes back. Tell us what you&apos;re working
            on — or what&apos;s not working.
          </p>
        </div>
      </section>

      {/* ── Map + guide ───────────────────────────────────────────────────── */}
      <section
        style={{
          background: "rgba(255,255,255,0.02)",
          borderTop: "1px solid rgba(255,255,255,0.06)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          padding: "5rem 2rem",
        }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div
            style={{
              marginBottom: "3rem",
              display: "flex",
              flexDirection: "column",
              gap: "0.75rem",
            }}
          >
            <EyebrowLabel light>Not sure where to start?</EyebrowLabel>
            <h2
              style={{
                fontFamily: "'Anton', sans-serif",
                fontSize: "clamp(28px, 4vw, 52px)",
                lineHeight: 0.95,
                color: "#fff",
              }}
            >
              FIND YOUR
              <br />
              <span style={{ color: "#FF3D6B" }}>STARTING POINT.</span>
            </h2>
            <p
              style={{
                fontSize: "14px",
                fontWeight: 300,
                color: "rgba(255,255,255,0.35)",
                maxWidth: "420px",
                lineHeight: 1.75,
                marginTop: "0.5rem",
              }}
            >
              Tap whichever node feels closest to your situation. It will
              pre-fill your message topic so you don&apos;t have to start from a
              blank page.
            </p>
          </div>

          {/* Map + info panel */}
          <div
            className="contact-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 420px",
              gap: "3rem",
              alignItems: "center",
            }}
          >
            {/* SVG map */}
            <div
              className="map-col"
              style={{
                aspectRatio: "1 / 0.85",
                position: "relative",
              }}
            >
              <ServiceMap selected={selected} onSelect={handleSelect} />
            </div>

            {/* Info panel */}
            <div
              style={{
                minHeight: "240px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              {selected && selectedService ? (
                <div
                  style={{
                    opacity: 1,
                    transition: "opacity 0.3s ease",
                  }}
                >
                  <div
                    style={{
                      width: "3px",
                      height: "40px",
                      background: "#FF3D6B",
                      marginBottom: "1.5rem",
                    }}
                  />
                  <p
                    style={{
                      fontSize: "9px",
                      letterSpacing: "0.22em",
                      fontWeight: 500,
                      textTransform: "uppercase",
                      color: "#FF3D6B",
                      marginBottom: "0.75rem",
                    }}
                  >
                    Selected topic
                  </p>
                  <h3
                    style={{
                      fontFamily: "'Anton', sans-serif",
                      fontSize: "clamp(22px, 3vw, 34px)",
                      lineHeight: 0.95,
                      color: "#fff",
                      marginBottom: "1rem",
                    }}
                  >
                    {selectedService.label}
                  </h3>
                  <p
                    style={{
                      fontSize: "14px",
                      fontWeight: 300,
                      lineHeight: 1.8,
                      color: "rgba(255,255,255,0.45)",
                      marginBottom: "2rem",
                    }}
                    dangerouslySetInnerHTML={{ __html: selectedService.desc }}
                  />
                  <button
                    onClick={() => {
                      document
                        .getElementById("contact-form")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "11px",
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: "#FF3D6B",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      padding: 0,
                    }}
                  >
                    Write to us about this ↓
                  </button>
                </div>
              ) : (
                <div>
                  <p
                    style={{
                      fontSize: "13px",
                      fontWeight: 300,
                      color: "rgba(255,255,255,0.2)",
                      lineHeight: 1.8,
                      fontStyle: "italic",
                    }}
                  >
                    Select a node to learn what we can do for you in that area —
                    or scroll down and write to us directly. There&apos;s no
                    wrong way to start.
                  </p>

                  {/* Pill list — scrollable on mobile */}
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "8px",
                      marginTop: "2rem",
                    }}
                  >
                    {SERVICES.map((s) => (
                      <button
                        key={s.id}
                        className={`service-pill${selected === s.id ? "service-pill--active" : ""}`}
                        onClick={() => handleSelect(s.id)}
                      >
                        <span className="pill-dot" />
                        {s.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── Form ──────────────────────────────────────────────────────────── */}
      <section
        id="contact-form"
        style={{ padding: "6rem 2rem", maxWidth: "1280px", margin: "0 auto" }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "5rem",
            alignItems: "start",
          }}
          className="contact-grid"
        >
          {/* Left — copy */}
          <div>
            <EyebrowLabel light>Send a Message</EyebrowLabel>
            <h2
              style={{
                fontFamily: "'Anton', sans-serif",
                fontSize: "clamp(28px, 4vw, 52px)",
                lineHeight: 0.95,
                color: "#fff",
                marginBottom: "1.5rem",
              }}
            >
              WE READ
              <br />
              EVERY MESSAGE.
            </h2>
            <p
              style={{
                fontSize: "14px",
                fontWeight: 300,
                lineHeight: 1.85,
                color: "rgba(255,255,255,0.35)",
                marginBottom: "2.5rem",
                maxWidth: "360px",
              }}
            >
              No contact form black holes here. A real person will read what you
              write and reply — usually within a couple of days.
            </p>

            {/* Guidance list */}
            <div
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              {[
                {
                  arrow: "→",
                  label: "Vendors",
                  text: "Tell us what you make and where you&apos;ve sold before.",
                },
                {
                  arrow: "→",
                  label: "Partners",
                  text: "Give us the short version first. We can schedule a call.",
                },
                {
                  arrow: "→",
                  label: "Everyone else",
                  text: "Just be yourself. That&apos;s the whole point.",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{ display: "flex", gap: "12px", alignItems: "start" }}
                >
                  <span
                    style={{
                      color: "#FF3D6B",
                      fontSize: "13px",
                      marginTop: "1px",
                      flexShrink: 0,
                    }}
                  >
                    {item.arrow}
                  </span>
                  <p
                    style={{
                      fontSize: "13px",
                      fontWeight: 300,
                      lineHeight: 1.7,
                      color: "rgba(255,255,255,0.4)",
                    }}
                  >
                    <span
                      style={{
                        color: "rgba(255,255,255,0.7)",
                        fontWeight: 400,
                      }}
                    >
                      {item.label}
                    </span>{" "}
                    — <span dangerouslySetInnerHTML={{ __html: item.text }} />
                  </p>
                </div>
              ))}
            </div>

            {/* Direct contact */}
            <div
              style={{
                marginTop: "3rem",
                paddingTop: "2rem",
                borderTop: "1px solid rgba(255,255,255,0.06)",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              {[
                {
                  label: "Email",
                  value: "onebitestr@gmail.com",
                  href: "mailto:onebitestr@gmail.com",
                },
                {
                  label: "Instagram",
                  value: "@onebitestr",
                  href: "https://instagram.com/onebitestr",
                },
              ].map((item) => (
                <div key={item.label}>
                  <p
                    style={{
                      fontSize: "9px",
                      letterSpacing: "0.22em",
                      textTransform: "uppercase",
                      color: "rgba(255,255,255,0.2)",
                      marginBottom: "3px",
                    }}
                  >
                    {item.label}
                  </p>
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      item.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    style={{
                      fontSize: "13px",
                      color: "rgba(255,255,255,0.5)",
                      textDecoration: "none",
                      transition: "color 0.2s ease",
                    }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLAnchorElement).style.color =
                        "#fff")
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLAnchorElement).style.color =
                        "rgba(255,255,255,0.5)")
                    }
                  >
                    {item.value}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div>
            {status === "success" ? (
              /* Success state */
              <div
                style={{
                  paddingTop: "3rem",
                  animation: "fadeUp 0.6s ease forwards",
                }}
              >
                <div
                  style={{
                    width: "3px",
                    height: "48px",
                    background: "#FF3D6B",
                    marginBottom: "2rem",
                  }}
                />
                <h3
                  style={{
                    fontFamily: "'Anton', sans-serif",
                    fontSize: "clamp(28px, 4vw, 48px)",
                    lineHeight: 0.95,
                    color: "#fff",
                    marginBottom: "1rem",
                  }}
                >
                  MESSAGE
                  <br />
                  RECEIVED.
                </h3>
                <p
                  style={{
                    fontSize: "14px",
                    fontWeight: 300,
                    lineHeight: 1.8,
                    color: "rgba(255,255,255,0.4)",
                    marginBottom: "2rem",
                    maxWidth: "320px",
                  }}
                >
                  Thanks for reaching out. We&apos;ll read it properly and get
                  back to you soon. Welcome to the table.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "11px",
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: "#FF3D6B",
                    padding: 0,
                  }}
                >
                  ← Send another message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >
                {/* Selected topic badge */}
                {selected && selectedService && (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "10px 16px",
                      border: "1px solid rgba(255,61,107,0.3)",
                      background: "rgba(255,61,107,0.05)",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      <span
                        style={{
                          width: "6px",
                          height: "6px",
                          borderRadius: "50%",
                          background: "#FF3D6B",
                          flexShrink: 0,
                        }}
                      />
                      <span
                        style={{
                          fontSize: "11px",
                          letterSpacing: "0.1em",
                          color: "rgba(255,255,255,0.6)",
                        }}
                      >
                        Topic:{" "}
                        <span style={{ color: "#FF3D6B" }}>
                          {selectedService.label}
                        </span>
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => setSelected(null)}
                      style={{
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        color: "rgba(255,255,255,0.25)",
                        fontSize: "13px",
                        padding: "2px 4px",
                        transition: "color 0.2s ease",
                      }}
                      onMouseEnter={(e) =>
                        ((e.currentTarget as HTMLButtonElement).style.color =
                          "rgba(255,255,255,0.6)")
                      }
                      onMouseLeave={(e) =>
                        ((e.currentTarget as HTMLButtonElement).style.color =
                          "rgba(255,255,255,0.25)")
                      }
                    >
                      ✕
                    </button>
                  </div>
                )}

                {/* Name + Email row */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "12px",
                  }}
                >
                  <div>
                    <label
                      style={{
                        display: "block",
                        fontSize: "9px",
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        color: "rgba(255,255,255,0.25)",
                        marginBottom: "6px",
                        fontFamily: "monospace",
                      }}
                    >
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      disabled={status === "loading"}
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      style={{
                        display: "block",
                        fontSize: "9px",
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        color: "rgba(255,255,255,0.25)",
                        marginBottom: "6px",
                        fontFamily: "monospace",
                      }}
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      disabled={status === "loading"}
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "9px",
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: "rgba(255,255,255,0.25)",
                      marginBottom: "6px",
                      fontFamily: "monospace",
                    }}
                  >
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={7}
                    disabled={status === "loading"}
                    placeholder={
                      selectedService
                        ? `Tell us about your ${selectedService.label.toLowerCase()} situation — context helps us help you better.`
                        : "Tell us what&apos;s on your mind. The more context, the better we can help."
                    }
                  />
                </div>

                {/* Error */}
                {status === "error" && (
                  <p
                    style={{
                      fontSize: "12px",
                      color: "#FF3D6B",
                      fontWeight: 300,
                    }}
                  >
                    {errorMsg}
                  </p>
                )}

                {/* Submit */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingTop: "8px",
                  }}
                >
                  <p
                    style={{
                      fontSize: "9px",
                      letterSpacing: "0.14em",
                      color: "rgba(255,255,255,0.15)",
                      fontFamily: "monospace",
                    }}
                  >
                    * Required
                  </p>
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    style={{
                      background:
                        status === "loading"
                          ? "rgba(255,61,107,0.6)"
                          : "#FF3D6B",
                      border: "none",
                      color: "#fff",
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "11px",
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      fontWeight: 500,
                      padding: "15px 32px",
                      cursor: status === "loading" ? "not-allowed" : "pointer",
                      transition: "background 0.2s ease",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                    onMouseEnter={(e) => {
                      if (status !== "loading")
                        (
                          e.currentTarget as HTMLButtonElement
                        ).style.background = "rgba(255,61,107,0.82)";
                    }}
                    onMouseLeave={(e) => {
                      if (status !== "loading")
                        (
                          e.currentTarget as HTMLButtonElement
                        ).style.background = "#FF3D6B";
                    }}
                  >
                    {status === "loading" ? (
                      <>
                        Sending
                        <span style={{ animation: "none", opacity: 0.6 }}>
                          ...
                        </span>
                      </>
                    ) : (
                      <>Send message →</>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ── Footer strip ──────────────────────────────────────────────────── */}
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.06)",
          padding: "2rem 2rem",
          maxWidth: "1280px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        <span
          style={{
            fontFamily: "'Anton', sans-serif",
            fontSize: "11px",
            letterSpacing: "0.18em",
            color: "rgba(255,255,255,0.15)",
          }}
        >
          ONE BITE STREET
        </span>
        <p
          style={{
            fontSize: "10px",
            letterSpacing: "0.14em",
            color: "rgba(255,255,255,0.12)",
          }}
        >
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </div>
  );
}
