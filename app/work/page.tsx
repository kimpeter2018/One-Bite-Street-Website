// app/work/page.tsx
// SERVER COMPONENT — exports metadata, renders client component.

import type { Metadata } from "next";
import { buildMetadata, SITE_CONFIG } from "@/lib/metadata";
import WorkPageClient from "./_WorkClient";

export const metadata: Metadata = buildMetadata({
  title: "How We Work | Space, Events & F&B Consulting",
  description:
    "Real problems we solve for hospitality businesses, event planners, and F&B operators — from spaces that aren't converting to menus with no identity. See how One Bite Street approaches each one.",
  path: "/work",
  ogImage: "/og-default.png",
  keywords: [
    "how to fix a restaurant that isn't working",
    "event planning consultant Germany",
    "food festival consultant",
    "hospitality consultant Marburg",
    "café consulting Germany",
    "space activation consultant",
    "F&B consulting Germany",
    "menu development consultant",
    "food event production Germany",
    "restaurant revenue consultant",
    "how to improve restaurant revenue",
    "space design for food businesses",
    "vendor curation festival",
    "food market organiser Germany",
    "brand identity food business",
  ],
});

// JSON-LD: Service schema
const workSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "F&B and Hospitality Consulting — One Bite Street",
  description:
    "Space activation, culinary direction, event production, brand identity, and revenue consulting for hospitality businesses and event organisers in Germany.",
  provider: {
    "@type": "Organization",
    name: "One Bite Street",
    url: SITE_CONFIG.url,
    email: SITE_CONFIG.email,
  },
  serviceType: [
    "Space Activation",
    "Culinary Direction",
    "Event Production",
    "Brand Identity",
    "F&B Consulting",
    "Revenue Consulting",
  ],
  areaServed: {
    "@type": "Country",
    name: "Germany",
  },
  url: `${SITE_CONFIG.url}/work`,
};

// JSON-LD: FAQPage schema targeting SEO queries
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What kind of hospitality businesses does One Bite Street work with?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We work with independent café and restaurant owners, event organisers and festival planners, property owners with underused spaces, first-time food entrepreneurs, and hospitality groups launching new concepts in Germany.",
      },
    },
    {
      "@type": "Question",
      name: "How does One Bite Street help with food event planning?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We handle food festival programming and curation, vendor sourcing and management, layout and flow planning, and on-the-day operations. We work across the full event lifecycle — from concept to execution to post-event follow-up.",
      },
    },
    {
      "@type": "Question",
      name: "Can you help with a space that isn't converting customers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — space activation is one of our core services. We assess layout, flow, atmosphere, and customer journey to identify what's not working and propose practical changes. Most spaces fail not because of what's in them, but because of how people move through them.",
      },
    },
    {
      "@type": "Question",
      name: "Do you help with restaurant or café menu development?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We offer culinary direction including menu development, concept rationalisation, seasonal and dietary range planning, and sourcing introductions. We help operators find a clear identity and express it through what's on the plate.",
      },
    },
    {
      "@type": "Question",
      name: "Where is One Bite Street based?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "One Bite Street is a hospitality collective based in Germany, currently operating in Marburg. We work with clients across Germany and are open to projects beyond our home base.",
      },
    },
  ],
};

export default function WorkPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(workSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <WorkPageClient />
    </>
  );
}
