// app/page.tsx
// Add this export above the existing "use client" component.
// Since the main component is "use client", metadata must be exported
// from a separate server component wrapper. Here is the pattern:

/*
 * INSTRUCTIONS:
 * Next.js doesn't allow `export const metadata` in "use client" files.
 * Split the file into two:
 *   1. app/page.tsx         — server component, exports metadata, renders <HomePage />
 *   2. app/_home/HomePage.tsx — the existing "use client" component (renamed)
 *
 * Replace your current app/page.tsx with the content below.
 * Move the existing component code to app/_home/HomePage.tsx.
 */

// ── app/page.tsx (SERVER COMPONENT) ──────────────────────────────────────────
import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/metadata";
import HomePageClient from "./_home/HomePageClient";

export const metadata: Metadata = {
  title: "One Bite Street | Grab a Seat. Take a Bite.",
  description:
    "A hospitality collective building human-first food festivals, café concepts, and F&B experiences. We create spaces people actually come back to.",
  alternates: {
    canonical: SITE_CONFIG.url,
  },
  openGraph: {
    title: "One Bite Street | Grab a Seat. Take a Bite.",
    description:
      "A hospitality collective building human-first food festivals, café concepts, and F&B experiences in Germany. We create spaces people come back to.",
    url: SITE_CONFIG.url,
    images: [
      { url: "/og-home.jpg", width: 1200, height: 630, alt: "One Bite Street" },
    ],
  },
};

// JSON-LD for homepage
const homeSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": SITE_CONFIG.url,
  name: "One Bite Street",
  description:
    "A hospitality collective building human-first food festivals, café concepts, and F&B experiences.",
  url: SITE_CONFIG.url,
  email: SITE_CONFIG.email,
  sameAs: ["https://instagram.com/onebitestr"],
  address: {
    "@type": "PostalAddress",
    addressCountry: "DE",
  },
  servesCuisine: "International",
  priceRange: "$$",
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }}
      />
      <HomePageClient />
    </>
  );
}
