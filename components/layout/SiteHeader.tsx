"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export interface SiteHeaderProps {
  accentColor?: string;
  scrolledBg?: string;
  extraLinks?: Array<{ label: string; href: string }>;
  ctaHref?: string;
  ctaLabel?: string;
  backHref?: string;
  backLabel?: string;
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
  // Both initialised to false — matches server render exactly.
  // They only change after mount (post-hydration), so no mismatch.
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    // Correct the value immediately in case the page loaded already scrolled
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      {/* ── Header bar ─────────────────────────────────────────────────────
          suppressHydrationWarning is placed on the <header> element because
          its `style` prop depends on `scrolled`, which starts as `false` on
          both server and client but can immediately flip to `true` on the
          client if the user has already scrolled. React would otherwise throw
          a hydration warning for the style difference on first paint.
          This is safe: the content/structure never changes, only the style.
      ─────────────────────────────────────────────────────────────────── */}
      <header
        suppressHydrationWarning
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          transition:
            "background 0.4s ease, border-color 0.4s ease, backdrop-filter 0.4s ease",
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
          {/* Left ── logo or back-link */}
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

          {/* Right ── brand tag + extra links + CTA */}
          <nav
            className="obs-desktop-nav"
            style={{ display: "flex", alignItems: "center", gap: "2rem" }}
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

          {/* Hamburger (mobile only, shown via CSS) */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="obs-mobile-btn"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "8px",
              display: "none", // overridden to flex on mobile via <style> below
              flexDirection: "column",
              gap: "5px",
              alignItems: "flex-end",
            }}
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

      {/* ── Mobile overlay ─────────────────────────────────────────────────
          Always present in the DOM — no conditional rendering.
          Conditional rendering ({mobileOpen && <div>}) would create a DOM
          node that exists on the client but not on the server, causing a
          hydration mismatch. Instead we keep the element in the DOM always
          and toggle visibility via opacity + pointer-events.
      ─────────────────────────────────────────────────────────────────── */}
      <div
        aria-hidden={!mobileOpen}
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
          opacity: mobileOpen ? 1 : 0,
          pointerEvents: mobileOpen ? "auto" : "none",
          transition: "opacity 0.25s ease",
        }}
      >
        {extraLinks.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            onClick={closeMobile}
            tabIndex={mobileOpen ? 0 : -1}
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
          tabIndex={mobileOpen ? 0 : -1}
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

      <style>{`
        @media (max-width: 768px) {
          .obs-desktop-nav { display: none !important; }
          .obs-mobile-btn  { display: flex !important; }
        }
      `}</style>
    </>
  );
}
