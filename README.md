# One Bite Street - Website Architecture & Design System

## 1. Information Architecture

### Primary Navigation Structure

```
Home
├── About
│   ├── Our Philosophy
│   ├── The Team
│   └── Timeline (Journey so far)
├── Ventures
│   ├── Food Festivals
│   ├── Café & Restaurant Concepts
│   ├── Hotel & Accommodation
│   ├── Creative Hub (Co-work/Co-live)
│   └── F&B Consulting
├── Projects (Living Archive)
│   ├── All Projects
│   ├── Filter by Venture Type
│   └── Individual Case Studies
├── Creative Residency
│   ├── For Creators
│   ├── Current Residents
│   └── Apply
├── Journal (Blog/Updates)
└── Contact
```

### Content Hierarchy

**Homepage:**

- Hero: Bold statement of mission with immersive visual
- Philosophy snippet: "BE HUMAN" manifesto preview
- Venture Overview: 5 core areas with imagery
- Featured Projects: 3-4 highlighted case studies
- Ecosystem Diagram: Visual representation of the sustainable creator ecosystem
- Latest Journal Entries
- CTA: Join the community / Get in touch

**About:**

- Mission & Philosophy (expandable sections)
- Team Grid (photos, roles, short bios)
- Timeline: Interactive journey from inception to present
- Values & Culture
- Press & Recognition (future-ready)

**Ventures (Individual Pages per Venture):**

- Overview & Approach
- Featured Projects within this venture
- Case Studies / Portfolio
- Services Offered (for consulting)
- Contact for Inquiries

**Projects Archive:**

- Filterable grid/masonry layout
- Tags: venture type, year, location, status
- Preview cards with image, title, category, date
- Individual project pages with rich media, story, outcomes

**Creative Residency:**

- What we offer (workspace, living space, support)
- Who it's for
- Success stories / Current residents
- Application process & criteria
- FAQ

**Journal:**

- Blog posts, updates, behind-the-scenes
- Categories: Food, Design, Community, Events, Insights
- Author attribution
- Related articles

---

## 2. Technical Architecture

### Project Structure

```
one-bite-street/
├── app/
│   ├── (root)/
│   │   ├── page.tsx                 # Homepage
│   │   ├── layout.tsx               # Root layout
│   │   └── globals.css
│   ├── about/
│   │   ├── page.tsx
│   │   ├── team/
│   │   └── timeline/
│   ├── ventures/
│   │   ├── page.tsx                 # Ventures overview
│   │   ├── [slug]/                  # Dynamic venture pages
│   │   │   └── page.tsx
│   ├── projects/
│   │   ├── page.tsx                 # Projects archive
│   │   └── [slug]/                  # Individual projects
│   │       └── page.tsx
│   ├── residency/
│   │   ├── page.tsx
│   │   └── apply/
│   ├── journal/
│   │   ├── page.tsx
│   │   └── [slug]/
│   └── contact/
├── components/
│   ├── ui/                          # Base UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Typography.tsx
│   │   └── Input.tsx
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Navigation.tsx
│   │   └── Container.tsx
│   ├── sections/                    # Page-specific sections
│   │   ├── Hero.tsx
│   │   ├── PhilosophyBlock.tsx
│   │   ├── VentureGrid.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── TeamGrid.tsx
│   │   └── Timeline.tsx
│   └── features/                    # Complex features
│       ├── ProjectFilter.tsx
│       ├── ImageGallery.tsx
│       └── NewsletterForm.tsx
├── lib/
│   ├── data/                        # Static data & content
│   │   ├── ventures.ts
│   │   ├── projects.ts
│   │   ├── team.ts
│   │   └── config.ts
│   ├── supabase/                    # Future database layer
│   │   └── client.ts
│   └── utils/
│       ├── formatting.ts
│       └── animations.ts
├── public/
│   ├── images/
│   ├── fonts/
│   └── icons/
├── styles/
│   └── animations.css
├── types/
│   ├── ventures.ts
│   ├── projects.ts
│   └── index.ts
└── tailwind.config.js
```

### Data Model (TypeScript Types)

```typescript
// types/ventures.ts
export type VentureType =
  | "food-festivals"
  | "cafe-restaurant"
  | "hotel"
  | "creative-hub"
  | "consulting";

export interface Venture {
  id: string;
  slug: string;
  type: VentureType;
  title: string;
  description: string;
  heroImage: string;
  approach: string[];
  services?: string[];
  projects: string[]; // Project IDs
  status: "active" | "planned" | "completed";
}

// types/projects.ts
export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  ventureType: VentureType[];
  year: number;
  location: string;
  status: "completed" | "ongoing" | "upcoming";
  featured: boolean;
  coverImage: string;
  gallery: string[];
  description: string;
  challenge?: string;
  solution?: string;
  outcome?: string;
  tags: string[];
  createdAt: string;
}

// types/team.ts
export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  expertise: string[];
  social?: {
    linkedin?: string;
    instagram?: string;
    website?: string;
  };
}
```

---

## 3. Design System

### Color Palette (Warm, Human-Centered)

```css
/* Primary */
--warmth: #e8825c; /* Terracotta - Main accent */
--earth: #c87c5a; /* Deep clay */
--cream: #f5efe7; /* Warm cream background */

/* Neutrals */
--charcoal: #2c2c2c; /* Text */
--graphite: #4a4a4a; /* Secondary text */
--sand: #e5ddd5; /* Subtle borders */
--white: #fefdfb; /* Off-white */

/* Accents */
--olive: #a3957a; /* Natural green-brown */
--rust: #b85c38; /* Deeper warmth */
```

### Typography System

```css
/* Headings - Editorial style */
--font-display: "Playfair Display", serif; /* Hero, H1 */
--font-heading: "Space Grotesk", sans-serif; /* H2-H6 */
--font-body: "Inter", sans-serif; /* Body text */

/* Scale */
--text-xs: 0.75rem; /* 12px */
--text-sm: 0.875rem; /* 14px */
--text-base: 1rem; /* 16px */
--text-lg: 1.125rem; /* 18px */
--text-xl: 1.25rem; /* 20px */
--text-2xl: 1.5rem; /* 24px */
--text-3xl: 1.875rem; /* 30px */
--text-4xl: 2.25rem; /* 36px */
--text-5xl: 3rem; /* 48px */
--text-6xl: 3.75rem; /* 60px */
```

### Spacing System (8px base)

```
2: 0.125rem (2px)
4: 0.25rem (4px)
8: 0.5rem (8px)
12: 0.75rem (12px)
16: 1rem (16px)
24: 1.5rem (24px)
32: 2rem (32px)
48: 3rem (48px)
64: 4rem (64px)
96: 6rem (96px)
128: 8rem (128px)
```

### Component Styling Principles

- **Generous whitespace**: Let content breathe
- **Asymmetric layouts**: Break the grid occasionally for visual interest
- **Image-forward**: Large, high-quality photography
- **Hover states**: Subtle, warm transitions
- **Micro-interactions**: Gentle animations on scroll/hover

---

## 4. Tailwind Configuration

```javascript
// tailwind.config.js
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        warmth: "#E8825C",
        earth: "#C87C5A",
        cream: "#F5EFE7",
        charcoal: "#2C2C2C",
        graphite: "#4A4A4A",
        sand: "#E5DDD5",
        white: "#FEFDFB",
        olive: "#A3957A",
        rust: "#B85C38",
      },
      fontFamily: {
        display: ["Playfair Display", "serif"],
        heading: ["Space Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      spacing: {
        128: "8rem",
        144: "9rem",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out",
        "slide-up": "slideUp 0.6s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
```

---

## 5. Key Features & Interactions

### Navigation

- **Fixed header** with subtle blur background on scroll
- **Mega menu** on hover for "Ventures" showing all 5 areas
- **Mobile**: Full-screen overlay menu with stacked navigation
- **Breadcrumbs** on internal pages

### Homepage Hero

- **Full viewport height** with parallax background image
- **Animated typography**: Words fade in sequentially
- **Scroll indicator**: Subtle bounce animation
- **Video option**: Background video alternative to image

### Project Archive

- **Masonry grid** layout (Pinterest-style)
- **Filter bar**: By venture type, year, status
- **Smooth transitions** when filtering
- **Infinite scroll** or pagination
- **Hover effect**: Image zoom + overlay with project details

### Timeline (About Page)

- **Vertical timeline** with milestone markers
- **Scroll-triggered animations**: Items fade in as you scroll
- **Mixed content**: Text, images, quotes
- **Expandable details** for major milestones

### Ecosystem Diagram

- **Interactive SVG** or canvas visualization
- Shows connections between ventures
- Clickable nodes leading to venture pages
- Animates on viewport entry

---

## 6. Content Strategy

### Voice & Tone

- **Warm and inviting**, not corporate
- **Storytelling-driven**: Every page tells part of the journey
- **First-person plural** ("we", "our") to emphasize community
- **Conversational yet professional**
- **Inclusive language**: "creators", "collaborators", "community"

### Photography Guidelines

- **Candid moments**: People working, eating, creating
- **Warm lighting**: Golden hour, natural light
- **Tight crops mixed with environmental shots**
- **Show process, not just results**
- **Diverse representation** of creators and guests

### Content Blocks (Reusable)

- Philosophy statement
- Venture overview cards
- Project case study template
- Team member profile
- Testimonial/quote block
- Statistics/impact numbers
- Call-to-action sections

---

## 7. Future Scalability

### Phase 1 (Launch)

- Static content in TypeScript files
- All pages built, responsive
- Basic contact form
- Newsletter signup

### Phase 2 (CMS Integration)

- **Supabase** for:
  - Projects database
  - Journal/blog posts
  - Team members
  - Events calendar
- Admin panel for content updates
- Image optimization with CDN

### Phase 3 (Community Features)

- Creator application portal
- Project submission forms
- Event registration
- Member directory (for residents)
- Private creator hub (login required)

### Phase 4 (Advanced)

- Multi-language support
- E-commerce for festival tickets
- Booking system for co-working spaces
- Newsletter archive
- Search functionality

---

## 8. Performance & SEO

### Technical Optimizations

- **Next.js Image component** for automatic optimization
- **Static generation** for all pages where possible
- **Dynamic imports** for heavy components
- **Lazy loading** for images below fold
- **Font subsetting** for custom typography
- **Tailwind purge** to minimize CSS

### SEO Strategy

- **Descriptive meta titles** per page
- **Compelling meta descriptions** (150-160 chars)
- **Open Graph tags** for social sharing
- **Structured data** (JSON-LD) for projects, organization
- **XML sitemap** generation
- **robots.txt** configuration
- **Alt text** for all images

### Analytics

- **Privacy-focused analytics** (Plausible or Fathom)
- **Goal tracking**: Newsletter signups, contact form, applications
- **Heatmaps** (optional) for UX insights

---

## 9. Accessibility

- **Semantic HTML5** elements
- **ARIA labels** where needed
- **Keyboard navigation** fully supported
- **Focus states** clearly visible
- **Color contrast** meets WCAG AA standards
- **Alt text** for all meaningful images
- **Skip to main content** link
- **Reduced motion** preference respected

---

## 10. Development Workflow

### Git Strategy

```
main (production)
├── develop (staging)
└── feature branches (feature/project-archive)
```

### Component Development

- **Atomic design**: Atoms → Molecules → Organisms
- **Storybook** (optional) for component documentation
- **TypeScript strict mode** for type safety
- **ESLint + Prettier** for code consistency

### Testing Strategy

- **Unit tests** for utility functions
- **Integration tests** for key user flows
- **Visual regression testing** (Chromatic or Percy)
- **Lighthouse CI** for performance monitoring

---

## 11. Deployment

### Hosting Recommendation

**Vercel** (optimal for Next.js)

- Automatic deployments from GitHub
- Preview deployments for PRs
- Edge network for global performance
- Built-in analytics
- Free SSL

### Environment Variables

```
NEXT_PUBLIC_SITE_URL
SUPABASE_URL (future)
SUPABASE_ANON_KEY (future)
CONTACT_FORM_ENDPOINT
NEWSLETTER_API_KEY
```

### Monitoring

- **Uptime monitoring**: UptimeRobot
- **Error tracking**: Sentry
- **Performance**: Vercel Analytics + Web Vitals

---

## 12. Launch Checklist

**Pre-launch:**

- [ ] All pages responsive (mobile, tablet, desktop)
- [ ] Cross-browser testing (Chrome, Safari, Firefox, Edge)
- [ ] Content proofread and approved
- [ ] Images optimized and compressed
- [ ] Forms tested (contact, newsletter)
- [ ] 404 page designed
- [ ] Favicon and app icons set
- [ ] SEO meta tags verified
- [ ] Privacy policy and terms (if needed)
- [ ] Google Analytics / privacy-focused analytics configured
- [ ] SSL certificate active
- [ ] Domain configured

**Post-launch:**

- [ ] Submit sitemap to Google Search Console
- [ ] Set up Google Business Profile (if applicable)
- [ ] Social media announcement content ready
- [ ] Monitor analytics for first week
- [ ] Collect feedback from team and select users
- [ ] Plan content calendar for Journal

---

## 13. Design Inspiration References

**For One Bite Street's aesthetic:**

- **Kinfolk Magazine** - editorial layouts, warm photography
- **Aesop** - minimal sophistication, storytelling
- **Ace Hotel** - creative hospitality, community focus
- **It's Nice That** - creative showcases, bold typography
- **Soho House** - member community, elevated casual

**Technical Excellence:**

- **Stripe** - clean navigation, component consistency
- **Linear** - smooth interactions, performance
- **Notion** - content organization, scalability

---

This architecture provides a solid foundation that honors One Bite Street's philosophy while remaining flexible for growth. The structure supports your multidisciplinary nature and positions you to expand ventures, onboard creators, and tell your evolving story beautifully.
