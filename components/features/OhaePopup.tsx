"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

// New key, so visitors who dismissed the old "OH·AE launched" popup see this one.
const OHAE_SEEN_KEY = "obs_ohae_opening_seen";

// Put the photo (1086 x 1304) at public/images/ohae-popup.jpeg
const PHOTO_SRC = "/images/ohae-popup.jpeg";

export default function OhaePopup() {
  // Starts closed on server and client alike (no hydration mismatch);
  // the effect decides after mount whether to open it.
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let seen = false;
    try {
      seen = !!localStorage.getItem(OHAE_SEEN_KEY);
    } catch {
      // storage unavailable: show the popup
    }
    if (seen) return;
    const t = setTimeout(() => setOpen(true), 1200);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") dismiss();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const dismiss = () => {
    try {
      localStorage.setItem(OHAE_SEEN_KEY, "1");
    } catch {
      // ignore
    }
    setOpen(false);
  };

  if (!open) return null;

  return (
    <>
      <style>{`
        .ohae-pop-card {
          position: relative;
          width: 100%;
          max-width: 720px;
          max-height: calc(100vh - 2rem);
          overflow-y: auto;
          background: #FAF8F5;
          border-radius: 12px;
          box-shadow: 0 24px 48px rgba(0,0,0,0.25);
          pointer-events: auto;
          display: grid;
          grid-template-columns: 5fr 6fr;
        }
        /* Desktop: photo shown in full at its own 1086 x 1304 ratio */
        .ohae-pop-photo {
          position: relative;
          aspect-ratio: 1086 / 1304;
          background: #E8E2D8;
        }
        .ohae-pop-body {
          padding: 40px 32px 32px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .ohae-pop-link {
          align-self: flex-start;
          font-family: 'DM Sans', sans-serif;
          font-size: 15px;
          font-weight: 500;
          color: #2B2623;
          text-decoration: underline;
          text-underline-offset: 4px;
          transition: text-underline-offset 0.15s ease;
        }
        .ohae-pop-link:hover { text-underline-offset: 7px; }
        .ohae-pop-close {
          position: absolute;
          top: 12px;
          right: 12px;
          z-index: 2;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          border: none;
          cursor: pointer;
          background: rgba(250,248,245,0.92);
          color: #2B2623;
          font-size: 14px;
          line-height: 1;
          box-shadow: 0 1px 4px rgba(0,0,0,0.2);
          transition: background 0.15s ease;
        }
        .ohae-pop-close:hover { background: #fff; }

        /* Mobile: photo on top, cropped to 4:3 so the card stays short */
        @media (max-width: 640px) {
          .ohae-pop-card { grid-template-columns: 1fr; max-width: 420px; }
          .ohae-pop-photo { aspect-ratio: 4 / 3; }
          .ohae-pop-body { padding: 24px 24px 28px; }
        }
      `}</style>

      {/* Backdrop */}
      <div
        onClick={dismiss}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 200,
          background: "rgba(17,17,17,0.6)",
        }}
      />

      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 201,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "1rem",
          pointerEvents: "none",
        }}
      >
        <div
          role="dialog"
          aria-modal="true"
          aria-label="ohae is opening soon"
          className="ohae-pop-card"
        >
          <button
            onClick={dismiss}
            aria-label="Close"
            className="ohae-pop-close"
          >
            &#x2715;
          </button>

          <div className="ohae-pop-photo">
            <Image
              src={PHOTO_SRC}
              alt="ohae"
              fill
              sizes="(max-width: 640px) 420px, 300px"
              style={{ objectFit: "cover", objectPosition: "center" }}
              priority
            />
          </div>

          <div className="ohae-pop-body">
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "14px",
                color: "#6B625B",
                margin: "0 0 12px",
              }}
            >
              News from One Bite Street
            </p>

            <h2
              style={{
                fontFamily: "'Anton', sans-serif",
                fontSize: "30px",
                fontWeight: 400,
                lineHeight: 1.1,
                color: "#2B2623",
                margin: "0 0 16px",
              }}
            >
              We&apos;re getting ready to open ohae
            </h2>

            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "15px",
                fontWeight: 300,
                lineHeight: 1.65,
                color: "#4A423C",
                margin: "0 0 24px",
              }}
            >
              Our café at Elisabethstraße 13 in Marburg opens at the end of
              November. Coffee by day, wine and small plates on Thursday to
              Saturday evenings.
            </p>

            <Link href="/ohae" onClick={dismiss} className="ohae-pop-link">
              See ohae
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
