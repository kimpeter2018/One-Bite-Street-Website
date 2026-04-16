"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export interface SiteHeaderProps {
  /** Accent colour for the "Let's talk" CTA border/text (default: #FF3D6B) */
  accentColor?: string;
  /** Background colour of the header when scrolled (default: rgba(17,17,17,0.96)) */
  scrolledBg?: string;
  /** Extra nav links rendered between the logo and the CTA */
  extraLinks?: Array<{ label: string; href: string }>;
  /** Override the CTA href (default: /contact) */
  ctaHref?: string;
  /** Override the CTA label (default: "Let's talk") */
  ctaLabel?: string;
  /** Back-link rendered instead of the logo area (e.g. on sub-pages) */
  backHref?: string;
  backLabel?: string;
  /** Right-side tag shown next to the hamburger on desktop (e.g. "OH·AE") */
  brandTag?: string;
  brandTagColor?: string;
}

export default function SiteHeader({
  accentColor = "#FF3D6B",
  scrolledBg = "rgba(17,17,17,0.96)",
  extraLinks = [],
  ctaHref = "/contact",
  ctaLabel = "Let's talk",
  backHref,
  backLabel,
  brandTag,
  brandTagColor,
}: SiteHeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          transition: "background 0.4s ease, border-color 0.4s ease",
          background: scrolled ? scrolledBg : "transparent",
          borderBottom: scrolled
            ? "1px solid rgba(255,255,255,0.06)"
            : "1px solid transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 2rem",
            height: "68px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Left: logo OR back link */}
          {backHref ? (
            <Link
              href={backHref}
              style={{
                fontFamily: "'Anton', sans-serif",
                fontSize: "11px",
                letterSpacing: "0.2em",
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
              ← {backLabel ?? "ONE BITE STREET"}
            </Link>
          ) : (
            <div style={{ marginLeft: "-3rem" }}>
              <Link href="/" aria-label="One Bite Street home">
                <Image
                  src="/images/logo.png"
                  alt="One Bite Street"
                  width={300}
                  height={70}
                  style={{ height: "auto", width: "auto" }}
                  priority
                />
              </Link>
            </div>
          )}

          {/* Right side — brand tag + extra links + CTA */}
          <nav
            style={{ display: "flex", alignItems: "center", gap: "2rem" }}
            className="obs-desktop-nav"
          >
            {brandTag && (
              <span
                style={{
                  fontFamily: "'Anton', sans-serif",
                  fontSize: "13px",
                  letterSpacing: "0.22em",
                  color: brandTagColor ?? accentColor,
                }}
              >
                {brandTag}
              </span>
            )}

            {extraLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "16px",
                  letterSpacing: "0.16em",
                  fontWeight: 300,
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.45)",
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.color = "#fff")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLAnchorElement).style.color =
                    "rgba(255,255,255,0.45)")
                }
              >
                {l.label}
              </Link>
            ))}

            <Link
              href={ctaHref}
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "11px",
                letterSpacing: "0.16em",
                fontWeight: 500,
                textTransform: "uppercase",
                color: accentColor,
                textDecoration: "none",
                border: `1px solid ${accentColor}59`,
                padding: "7px 18px",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.background = accentColor;
                el.style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.background = "transparent";
                el.style.color = accentColor;
              }}
            >
              {ctaLabel}
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "8px",
              display: "none",
              flexDirection: "column",
              gap: "5px",
              alignItems: "flex-end",
            }}
            className="obs-mobile-btn"
            aria-label="Toggle menu"
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  display: "block",
                  height: "1px",
                  background: "#fff",
                  transition: "all 0.3s ease",
                  width: i === 1 ? (mobileOpen ? "0" : "14px") : "20px",
                  transform:
                    mobileOpen && i === 0
                      ? "translateY(6px) rotate(45deg)"
                      : mobileOpen && i === 2
                        ? "translateY(-6px) rotate(-45deg)"
                        : "none",
                  opacity: mobileOpen && i === 1 ? 0 : 1,
                }}
              />
            ))}
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 99,
            background: "#111",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "2.5rem",
          }}
        >
          {extraLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={closeMobile}
              style={{
                fontFamily: "'Anton', sans-serif",
                fontSize: "32px",
                letterSpacing: "0.08em",
                color: "#fff",
                textDecoration: "none",
              }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href={ctaHref}
            onClick={closeMobile}
            style={{
              fontFamily: "'Anton', sans-serif",
              fontSize: "32px",
              letterSpacing: "0.08em",
              color: accentColor,
              textDecoration: "none",
            }}
          >
            {ctaLabel}
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .obs-desktop-nav { display: none !important; }
          .obs-mobile-btn  { display: flex !important; }
        }
      `}</style>
    </>
  );
}
