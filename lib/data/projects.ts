import { Project } from "@/types/projects";

export const projects: Project[] = [
  {
    id: "1",
    slug: "summer-street-market-2024",
    title: "Summer Street Market 2024",
    subtitle: "A three-day celebration of local food and community",
    ventureType: ["food-festivals"],
    year: 2024,
    location: "Downtown Plaza",
    status: "completed",
    featured: true,
    coverImage: "/images/projects/summer-market-cover.jpg",
    gallery: [
      "/images/projects/summer-market-1.jpg",
      "/images/projects/summer-market-2.jpg",
      "/images/projects/summer-market-3.jpg",
    ],
    description:
      "Our flagship summer festival brought together 50+ local food vendors, artisan makers, and thousands of community members for a weekend of culinary exploration and connection. From sunrise yoga to sunset live music, every moment was designed to celebrate the joy of gathering.",
    challenge:
      "Create an accessible, inclusive food festival that showcases emerging local talent while providing a sustainable income opportunity for vendors in a post-pandemic economy.",
    solution:
      "We designed a low-barrier entry system for vendors, curated a diverse mix of cuisines and price points, and created multiple revenue streams through ticket sales, sponsorships, and merchandise. The layout encouraged exploration while providing shaded rest areas and community gathering spaces.",
    outcome:
      "5,000+ attendees over three days, 90% vendor satisfaction rate, and 40% of vendors reported this was their most profitable event of the year. The festival generated enough revenue to fund two creative residency spots for the following year.",
    tags: [
      "food festival",
      "community event",
      "vendor support",
      "cultural celebration",
    ],
    createdAt: "2024-08-15",
  },
  {
    id: "2",
    slug: "corner-kitchen-concept",
    title: "The Corner Kitchen",
    subtitle: "A neighborhood café designed for connection",
    ventureType: ["cafe-restaurant"],
    year: 2024,
    location: "Riverside District",
    status: "ongoing",
    featured: true,
    coverImage: "/images/projects/corner-kitchen-cover.jpg",
    gallery: [
      "/images/projects/corner-kitchen-1.jpg",
      "/images/projects/corner-kitchen-2.jpg",
    ],
    description:
      "More than just a café, The Corner Kitchen is a community living room. With flexible seating, co-working spaces, and a rotating menu featuring local ingredients, it's become the neighborhood's gathering place for both morning coffee and evening conversations.",
    challenge:
      "Design a café concept that serves as both a profitable business and a genuine community space, without falling into the trap of being just another coffee shop.",
    solution:
      "We created distinct zones for different uses—focused work areas, communal tables for socializing, and cozy corners for reading. The menu changes weekly based on seasonal availability, and we host evening events (poetry readings, acoustic sets, community workshops) to activate the space beyond café hours.",
    outcome:
      "Opened to sold-out crowds, with 200+ regulars in the first three months. The space generates steady revenue while serving as an incubator for our Creative Hub's culinary creators, several of whom test menu items here before launching their own ventures.",
    tags: [
      "café concept",
      "community space",
      "local ingredients",
      "flexible design",
    ],
    createdAt: "2024-03-20",
  },
  {
    id: "3",
    slug: "restaurant-rebrand-consultancy",
    title: "Heritage Restaurant Rebrand",
    subtitle: "Breathing new life into a beloved establishment",
    ventureType: ["consulting"],
    year: 2023,
    location: "Historic Downtown",
    status: "completed",
    featured: true,
    coverImage: "/images/projects/restaurant-rebrand-cover.jpg",
    gallery: [
      "/images/projects/restaurant-rebrand-1.jpg",
      "/images/projects/restaurant-rebrand-2.jpg",
    ],
    description:
      "A 20-year-old family restaurant was struggling with declining foot traffic and outdated systems. We provided comprehensive consulting covering brand refresh, menu engineering, operational systems, and team culture development.",
    challenge:
      "Modernize the restaurant's offerings and operations while preserving the family legacy and loyal customer base that made it special in the first place.",
    solution:
      "Rather than a complete overhaul, we helped them refine their story. We streamlined the menu to highlight their signature dishes, redesigned the space to feel fresh but familiar, trained staff in hospitality excellence, and created a marketing strategy that honored their history while attracting new diners.",
    outcome:
      "Within six months: 40% increase in revenue, 25% improvement in staff retention, and glowing reviews from both longtime regulars and first-time visitors. The family reported feeling 'excited about the business again.'",
    tags: [
      "restaurant consulting",
      "brand strategy",
      "operational improvement",
      "team development",
    ],
    createdAt: "2023-11-10",
  },
  {
    id: "4",
    slug: "pop-up-dinner-series",
    title: "Rooftop Dinner Series",
    subtitle: "Intimate culinary experiences under the stars",
    ventureType: ["food-festivals", "cafe-restaurant"],
    year: 2024,
    location: "Various Rooftop Locations",
    status: "ongoing",
    featured: false,
    coverImage: "/images/projects/rooftop-dinner-cover.jpg",
    gallery: [],
    description:
      "A monthly pop-up dinner series featuring guest chefs from our Creative Hub, paired with local wines and stunning rooftop views. Limited to 30 guests per event for an intimate experience.",
    challenge:
      "Create a revenue-generating event series that also serves as a showcase platform for our creative residents.",
    solution:
      "Partner with buildings that have underutilized rooftop spaces, invite Creative Hub chefs to design experimental menus, price tickets at a premium but accessible level, and create an atmosphere of exclusivity and connection.",
    outcome:
      "Consistently sold-out events, with a waitlist of 100+ people. Three chefs have used this platform to secure funding for their own restaurant concepts.",
    tags: [
      "pop-up dining",
      "chef showcase",
      "experiential dining",
      "community",
    ],
    createdAt: "2024-02-05",
  },
  {
    id: "5",
    slug: "creative-workspace-pilot",
    title: "Creative Workspace Pilot Program",
    subtitle: "Testing the co-working/co-living model",
    ventureType: ["creative-hub"],
    year: 2023,
    location: "Central District",
    status: "completed",
    featured: false,
    coverImage: "/images/projects/workspace-pilot-cover.jpg",
    gallery: [],
    description:
      "Before launching the full Creative Hub, we ran a 6-month pilot program with 10 creators sharing a co-working space and subsidized accommodation nearby.",
    challenge:
      "Validate the Creative Hub concept and understand what creators actually need to thrive.",
    solution:
      "Rent flexible co-working space, negotiate group rates at nearby apartments, provide monthly stipends for basic needs, and facilitate weekly community dinners and skill-shares.",
    outcome:
      "8 out of 10 participants launched or significantly advanced their creative projects. The insights gained directly shaped the design of our planned Creative Hub. Participants reported reduced financial stress and increased creative output.",
    tags: [
      "pilot program",
      "co-working",
      "co-living",
      "creator support",
      "community building",
    ],
    createdAt: "2023-06-01",
  },
  {
    id: "6",
    slug: "autumn-harvest-festival",
    title: "Autumn Harvest Festival",
    subtitle: "Celebrating seasonal bounty and local farmers",
    ventureType: ["food-festivals"],
    year: 2023,
    location: "County Fairgrounds",
    status: "completed",
    featured: false,
    coverImage: "/images/projects/harvest-festival-cover.jpg",
    gallery: [],
    description:
      "A weekend festival connecting urban communities with local farmers and producers, featuring farm-to-table cooking demonstrations, artisan market, and live music.",
    challenge:
      "Bridge the gap between urban food lovers and rural producers while creating economic opportunity for small-scale farmers.",
    solution:
      "Partner directly with farmers for vendor selection, organize cooking demos using their produce, provide subsidized booth fees for smaller producers, and create a 'meet your farmer' program.",
    outcome:
      "2,500+ attendees, 30 local farms represented, $50k in direct sales to farmers, and ongoing relationships formed between chefs and producers.",
    tags: [
      "harvest festival",
      "farm-to-table",
      "local agriculture",
      "community connection",
    ],
    createdAt: "2023-10-20",
  },
];
