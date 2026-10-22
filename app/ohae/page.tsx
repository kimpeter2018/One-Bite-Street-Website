// app/ohae/page.tsx
// Server component: exports metadata and renders the page.

import { buildMetadata, SITE_CONFIG } from "@/lib/metadata";
import OhaePageClient from "./_OhaeClient";

export const metadata = buildMetadata({
  title: "ohae | Café & wine bar in Marburg",
  description:
    "Coffee by day, wine and small plates on Thursday to Saturday evenings. ohae opens end of November 2026 at Elisabethstraße 13, Marburg.",
  path: "/ohae",
  ogImage: "/og-ohae.png",
});

const ohaeSchema = {
  "@context": "https://schema.org",
  "@type": "CafeOrCoffeeShop",
  name: "ohae",
  description:
    "Café by day, wine bar and bistro Thursday to Saturday evenings, in Marburg.",
  url: `${SITE_CONFIG.url}/ohae`,
  parentOrganization: {
    "@type": "Organization",
    name: "One Bite Street",
    url: SITE_CONFIG.url,
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Elisabethstraße 13",
    postalCode: "35037",
    addressLocality: "Marburg",
    addressCountry: "DE",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday"],
      opens: "09:00",
      closes: "20:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "22:00",
    },
  ],
  sameAs: ["https://instagram.com/ohae_cafe"],
  servesCuisine: ["Coffee", "Desserts", "Tapas", "Wine", "Beer"],
  image: `${SITE_CONFIG.url}/og-ohae.png`,
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