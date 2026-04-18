// app/contact/page.tsx
// SERVER COMPONENT wrapper — exports metadata, renders client component.
// Move your existing "use client" contact page to app/contact/_ContactClient.tsx

import type { Metadata } from "next";
import { buildMetadata, SITE_CONFIG } from "@/lib/metadata";
import ContactPageClient from "./_ContactClient";

export const metadata = buildMetadata({
  title: "Contact | Let's Make Something",
  description:
    "Get in touch with One Bite Street. Whether you're a vendor, potential partner, or just curious — a real person reads every message and writes back.",
  path: "/contact",
  ogImage: "/og-default.png",
});

// JSON-LD: ContactPage schema
const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact One Bite Street",
  description:
    "Get in touch with One Bite Street. Whether you&apos;re a vendor, potential partner, or just curious — a real person reads every message.",
  url: `${SITE_CONFIG.url}/contact`,
  mainEntity: {
    "@type": "Organization",
    name: "One Bite Street",
    email: SITE_CONFIG.email,
    url: SITE_CONFIG.url,
    sameAs: ["https://instagram.com/onebitestr"],
  },
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <ContactPageClient />
    </>
  );
}
