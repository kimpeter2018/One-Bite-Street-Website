// app/ohae/page.tsx
// SERVER COMPONENT wrapper — exports metadata, renders client component.
// Move your existing "use client" ohae page to app/ohae/_OhaeClient.tsx

import type { Metadata } from "next";
import { buildMetadata, SITE_CONFIG } from "@/lib/metadata";
import OhaePageClient from "./_OhaeClient";

export const metadata = buildMetadata({
  title: "OH·AE Café | Opening in Marburg, Germany",
  description:
    "Good coffee. Good food. Somewhere to actually sit. OH·AE is opening in Marburg, Germany.",
  path: "/ohae",
  ogImage: "/og-ohae.png",
});

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
  openingDate: "2026",
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
