// app/not-found.tsx
// Custom 404 — server component, no-indexed automatically by Next.js

import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 — Page Not Found",
  description: "The page you're looking for doesn't exist.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div
      style={{
        background: "#111",
        color: "#fff",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'DM Sans', sans-serif",
        textAlign: "center",
        padding: "2rem",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Anton&family=DM+Sans:wght@300;400;500&display=swap');
      `}</style>

      <p
        style={{
          fontFamily: "'Anton', sans-serif",
          fontSize: "10px",
          letterSpacing: "0.28em",
          textTransform: "uppercase",
          color: "#FF3D6B",
          marginBottom: "1.5rem",
        }}
      >
        404
      </p>

      <h1
        style={{
          fontFamily: "'Anton', sans-serif",
          fontSize: "clamp(48px, 10vw, 120px)",
          lineHeight: 0.88,
          marginBottom: "1.5rem",
        }}
      >
        WRONG
        <br />
        <span style={{ color: "#FF3D6B" }}>TABLE.</span>
      </h1>

      <p
        style={{
          fontSize: "16px",
          fontWeight: 300,
          color: "rgba(255,255,255,0.45)",
          marginBottom: "3rem",
          maxWidth: "360px",
          lineHeight: 1.75,
        }}
      >
        This page doesn&apos;t exist. But the homepage does — and it&apos;s much
        better anyway.
      </p>

      <Link
        href="/"
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "11px",
          letterSpacing: "0.18em",
          fontWeight: 500,
          textTransform: "uppercase",
          background: "#FF3D6B",
          color: "#fff",
          padding: "14px 28px",
          textDecoration: "none",
        }}
      >
        Back to Home
      </Link>
    </div>
  );
}
