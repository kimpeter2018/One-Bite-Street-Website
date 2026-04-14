// app/ohae/page.tsx
// SERVER COMPONENT wrapper — exports metadata, renders client component.
// Move your existing "use client" ohae page to app/ohae/_OhaeClient.tsx

import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/metadata";
import OhaePageClient from "./_OhaeClient";

export const metadata: Metadata = {
  title: "OH·AE Café | Opening in Marburg, Germany",
  description:
    "OH·AE is a new café concept by One Bite Street opening in Marburg, Germany. Good coffee, good food — somewhere to actually sit.",
  keywords: [
    "OH AE café",
    "café Marburg",
    "coffee Marburg Germany",
    "One Bite Street café",
    "new café Germany",
    "matcha café Marburg",
    "specialty coffee Marburg",
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/ohae`,
  },
  openGraph: {
    title: "OH·AE Café | Opening in Marburg, Germany",
    description:
      "Good coffee. Good food. Somewhere to actually sit. OH·AE is opening in Marburg, Germany.",
    url: `${SITE_CONFIG.url}/ohae`,
    images: [
      {
        url: "/og-ohae.jpg",
        width: 1200,
        height: 630,
        alt: "OH·AE Café — Opening in Marburg",
      },
    ],
  },
  twitter: {
    title: "OH·AE Café | Opening in Marburg, Germany",
    description:
      "Good coffee. Good food. Somewhere to actually sit. OH·AE is opening in Marburg.",
    images: ["/og-ohae.jpg"],
  },
};

// JSON-LD: CafeOrCoffeeShop schema
const ohaeSchema = {
  "@context": "https://schema.org",
  "@type": "CafeOrCoffeeShop",
  name: "OH·AE",
  description:
    "A chill spot to sit longer than you planned, eat something good, and leave feeling slightly better about everything.",
  url: `${SITE_CONFIG.url}/ohae`,
  parentOrganization: {
    "@type": "Organization",
    name: "One Bite Street",
    url: SITE_CONFIG.url,
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Marburg",
    addressCountry: "DE",
  },
  openingDate: "2025",
  sameAs: ["https://instagram.com/onebitestr"],
  servesCuisine: ["Coffee", "Café food", "Matcha"],
  priceRange: "$$",
  image: `${SITE_CONFIG.url}/og-ohae.jpg`,
};

export default function OhaePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ohaeSchema) }}
      />
      <OhaePageClient />
    </>
  );
}
