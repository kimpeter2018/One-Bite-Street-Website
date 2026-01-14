// ============================================
// app/page.tsx - Complete Homepage
// ============================================

import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import Link from "next/link";
import Image from "next/image";
import { ventures } from "@/lib/data/ventures";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
        {/* Background with gradient overlay */}
        <div className="from-cream via-sand to-olive/20 absolute inset-0 -z-10 bg-linear-to-br" />

        {/* Optional: Add a background pattern or image */}
        <div className="absolute inset-0 -z-10 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
              backgroundSize: "32px 32px",
            }}
          />
        </div>

        <Container className="pt-32 pb-20 text-center">
          <div className="mx-auto max-w-5xl">
            {/* Small intro text */}
            <p className="text-graphite animate-fade-in mb-8 text-sm tracking-widest uppercase md:text-base">
              A Multidisciplinary Hospitality & Creative Collective
            </p>

            {/* Main heading */}
            <h1 className="font-display text-charcoal animate-slide-up mb-8 text-5xl leading-tight sm:text-6xl md:text-7xl lg:text-8xl">
              BE HUMAN
            </h1>

            {/* Subheading */}
            <p
              className="text-earth font-heading animate-slide-up mb-6 text-xl md:text-2xl lg:text-3xl"
              style={{ animationDelay: "0.1s" }}
            >
              Co-live, co-work, and co-entertain
            </p>

            {/* Description */}
            <p
              className="text-graphite animate-slide-up mx-auto mb-12 max-w-3xl text-base leading-relaxed md:text-lg lg:text-xl"
              style={{ animationDelay: "0.2s" }}
            >
              Building sustainable ecosystems where creators thrive through food
              festivals, hospitality concepts, and collaborative spaces that
              celebrate human connection.
            </p>

            {/* CTA Buttons */}
            <div
              className="animate-slide-up flex flex-col justify-center gap-4 sm:flex-row"
              style={{ animationDelay: "0.3s" }}
            >
              <Link href="/ventures">
                <Button size="lg" className="w-full sm:w-auto">
                  Explore Our Ventures
                </Button>
              </Link>
              <Link href="/about">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  Our Story
                </Button>
              </Link>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 transform animate-bounce">
            <svg
              className="text-warmth h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </Container>
      </section>

      {/* Philosophy Section */}
      <section className="bg-white py-24 md:py-32">
        <Container size="md">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading mb-8 text-3xl md:text-4xl lg:text-5xl">
              Our Philosophy
            </h2>
            <div className="text-graphite space-y-6 text-lg leading-relaxed md:text-xl">
              <p>
                True humanity is found in{" "}
                <span className="text-warmth font-semibold">co-existence</span>
                —sharing spaces, ideas, creativity, and daily life.
              </p>
              <p>
                <span className="text-earth font-semibold">
                  &quot;One Bite&quot;
                </span>{" "}
                represents something light, simple, and meaningful: small
                opportunities for creators and warm, enjoyable experiences for
                guests.
              </p>
              <p>
                We&apos;re building a sustainable ecosystem where creators can
                work and experiment without excessive financial pressure, earn
                income through hospitality, and live, create, and collaborate in
                one shared environment.
              </p>
            </div>
            <Link href="/about" className="mt-8 inline-block">
              <Button variant="ghost" className="group">
                Read more about us
                <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Button>
            </Link>
          </div>
        </Container>
      </section>

      {/* Ventures Grid */}
      <section className="bg-cream py-24 md:py-32">
        <Container>
          <div className="mb-16 text-center">
            <h2 className="font-heading mb-4 text-3xl md:text-4xl lg:text-5xl">
              What We Do
            </h2>
            <p className="text-graphite mx-auto max-w-2xl text-lg md:text-xl">
              Five interconnected ventures creating a holistic ecosystem for
              creativity and hospitality
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {ventures.map((venture, index) => (
              <Link
                key={venture.id}
                href={`/ventures/${venture.slug}`}
                className="group border-sand hover:border-warmth block rounded-sm border-2 bg-white p-8 transition-all duration-300 hover:shadow-lg"
                style={{
                  animation: "fade-in 0.6s ease-out forwards",
                  animationDelay: `${index * 0.1}s`,
                  opacity: 0,
                }}
              >
                <div className="mb-6 text-5xl transition-transform duration-300 group-hover:scale-110">
                  {venture.icon}
                </div>
                <h3 className="font-heading group-hover:text-warmth mb-3 text-xl font-semibold transition-colors md:text-2xl">
                  {venture.title}
                </h3>
                <p className="text-graphite mb-4 leading-relaxed">
                  {venture.tagline}
                </p>
                <div className="text-warmth flex items-center font-medium transition-all group-hover:gap-2">
                  <span>Learn more</span>
                  <span className="inline-block transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </div>

                {/* Status badge */}
                {venture.status === "planned" && (
                  <div className="border-sand mt-4 border-t pt-4">
                    <span className="text-olive inline-block text-xs font-semibold tracking-wide uppercase">
                      Coming Soon
                    </span>
                  </div>
                )}
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Ecosystem Visualization */}
      <section className="bg-white py-24 md:py-32">
        <Container>
          <div className="mb-16 text-center">
            <h2 className="font-heading mb-4 text-3xl md:text-4xl lg:text-5xl">
              The Ecosystem
            </h2>
            <p className="text-graphite mx-auto max-w-2xl text-lg md:text-xl">
              How our ventures interconnect to support creators and communities
            </p>
          </div>

          <div className="mx-auto max-w-4xl">
            {/* Simple visual representation */}
            <div className="relative">
              {/* Center - Creative Hub */}
              <div className="bg-warmth text-graphite mx-auto flex aspect-square max-w-xs flex-col items-center justify-center rounded-full p-8 text-center md:p-12">
                <div className="mb-3 text-4xl md:text-5xl">🌱</div>
                <h3 className="font-heading text-xl font-bold md:text-2xl">
                  Creative Hub
                </h3>
                <p className="mt-2 text-sm opacity-90">The Heart</p>
              </div>

              {/* Surrounding ventures */}
              <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
                <div className="bg-cream border-sand rounded-sm border-2 p-6 text-center">
                  <div className="mb-2 text-3xl">🎪</div>
                  <h4 className="font-heading text-sm font-semibold">
                    Food Festivals
                  </h4>
                </div>
                <div className="bg-cream border-sand rounded-sm border-2 p-6 text-center">
                  <div className="mb-2 text-3xl">☕</div>
                  <h4 className="font-heading text-sm font-semibold">
                    Café & Restaurant
                  </h4>
                </div>
                <div className="bg-cream border-sand rounded-sm border-2 p-6 text-center">
                  <div className="mb-2 text-3xl">🏨</div>
                  <h4 className="font-heading text-sm font-semibold">Hotel</h4>
                </div>
                <div className="bg-cream border-sand rounded-sm border-2 p-6 text-center">
                  <div className="mb-2 text-3xl">🤝</div>
                  <h4 className="font-heading text-sm font-semibold">
                    Consulting
                  </h4>
                </div>
              </div>

              {/* Description */}
              <div className="mx-auto mt-12 max-w-2xl text-center">
                <p className="text-graphite leading-relaxed">
                  Revenue from our hospitality ventures supports the Creative
                  Hub, allowing artists and creators to focus on their work
                  without financial pressure. In turn, creators contribute to
                  the vibrancy of our cafés, restaurants, and events.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Featured Projects Preview */}
      <section className="bg-charcoal text-graphite py-24 md:py-32">
        <Container>
          <div className="mb-16 text-center">
            <h2 className="font-heading mb-4 text-3xl md:text-4xl lg:text-5xl">
              Featured Projects
            </h2>
            <p className="text-sand mx-auto max-w-2xl text-lg md:text-xl">
              A glimpse into our work bringing communities together through food
              and creativity
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {/* Project Card 1 */}
            <div className="group cursor-pointer">
              <div className="bg-graphite mb-4 aspect-4/3 overflow-hidden rounded-sm">
                <div className="text-sand flex h-full w-full items-center justify-center transition-transform duration-300 group-hover:scale-105">
                  [Project Image]
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-warmth text-sm tracking-wide uppercase">
                  Food Festival
                </p>
                <h3 className="font-heading group-hover:text-warmth text-xl font-semibold transition-colors">
                  Summer Street Market 2024
                </h3>
                <p className="text-sand text-sm">
                  Three-day festival bringing together 50+ local vendors and
                  5,000 visitors
                </p>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="group cursor-pointer">
              <div className="bg-graphite mb-4 aspect-4/3 overflow-hidden rounded-sm">
                <div className="text-sand flex h-full w-full items-center justify-center transition-transform duration-300 group-hover:scale-105">
                  [Project Image]
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-warmth text-sm tracking-wide uppercase">
                  Café Concept
                </p>
                <h3 className="font-heading group-hover:text-warmth text-xl font-semibold transition-colors">
                  The Corner Kitchen
                </h3>
                <p className="text-sand text-sm">
                  A neighborhood café designed as a community gathering space
                </p>
              </div>
            </div>

            {/* Project Card 3 */}
            <div className="group cursor-pointer">
              <div className="bg-graphite mb-4 aspect-4/3 overflow-hidden rounded-sm">
                <div className="text-sand flex h-full w-full items-center justify-center transition-transform duration-300 group-hover:scale-105">
                  [Project Image]
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-warmth text-sm tracking-wide uppercase">
                  Consulting
                </p>
                <h3 className="font-heading group-hover:text-warmth text-xl font-semibold transition-colors">
                  Restaurant Rebrand
                </h3>
                <p className="text-sand text-sm">
                  Complete concept refresh and operational overhaul for
                  established restaurant
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link href="/projects">
              <Button
                variant="outline"
                size="lg"
                className="hover:text-charcoal text-graphite border-white hover:bg-white"
              >
                View All Projects
              </Button>
            </Link>
          </div>
        </Container>
      </section>

      {/* Stats Section */}
      <section className="bg-warmth text-graphite py-24 md:py-32">
        <Container>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-12">
            <div className="text-center">
              <div className="font-display mb-2 text-4xl font-bold md:text-5xl lg:text-6xl">
                5
              </div>
              <p className="text-sm opacity-90 md:text-base">Active Ventures</p>
            </div>
            <div className="text-center">
              <div className="font-display mb-2 text-4xl font-bold md:text-5xl lg:text-6xl">
                12+
              </div>
              <p className="text-sm opacity-90 md:text-base">
                Projects Completed
              </p>
            </div>
            <div className="text-center">
              <div className="font-display mb-2 text-4xl font-bold md:text-5xl lg:text-6xl">
                30+
              </div>
              <p className="text-sm opacity-90 md:text-base">
                Creative Partners
              </p>
            </div>
            <div className="text-center">
              <div className="font-display mb-2 text-4xl font-bold md:text-5xl lg:text-6xl">
                ∞
              </div>
              <p className="text-sm opacity-90 md:text-base">Possibilities</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Call to Action - Join the Movement */}
      <section className="bg-white py-24 md:py-32">
        <Container size="md">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading mb-6 text-3xl md:text-4xl lg:text-5xl">
              Join the Movement
            </h2>
            <p className="text-graphite mb-8 text-lg leading-relaxed md:text-xl">
              Whether you&apos;re a creator looking for a supportive ecosystem,
              a business seeking hospitality consulting, or simply someone who
              believes in the power of community— there&apos;s a place for you
              at One Bite Street.
            </p>

            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="bg-cream border-sand hover:border-warmth rounded-sm border-2 p-8 transition-colors">
                <h3 className="font-heading mb-3 text-xl font-semibold">
                  For Creators
                </h3>
                <p className="text-graphite mb-6">
                  Apply for our creative residency program and join our
                  community of makers
                </p>
                <Link href="/residency">
                  <Button variant="outline" className="w-full">
                    Learn About Residency
                  </Button>
                </Link>
              </div>

              <div className="bg-cream border-sand hover:border-warmth rounded-sm border-2 p-8 transition-colors">
                <h3 className="font-heading mb-3 text-xl font-semibold">
                  For Businesses
                </h3>
                <p className="text-graphite mb-6">
                  Partner with us to develop authentic F&B concepts that
                  resonate
                </p>
                <Link href="/contact">
                  <Button variant="outline" className="w-full">
                    Get in Touch
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Newsletter / Journal Preview */}
      <section className="bg-sand py-24 md:py-32">
        <Container size="md">
          <div className="mb-12 text-center">
            <h2 className="font-heading mb-4 text-3xl md:text-4xl">
              Stay Connected
            </h2>
            <p className="text-graphite text-lg">
              Subscribe to our journal for updates, insights, and
              behind-the-scenes stories
            </p>
          </div>

          <form className="mx-auto max-w-xl">
            <div className="flex flex-col gap-4 sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="border-sand focus:border-warmth flex-1 rounded-sm border-2 bg-white px-6 py-4 focus:outline-none"
                required
              />
              <Button type="submit" size="lg" className="whitespace-nowrap">
                Subscribe
              </Button>
            </div>
            <p className="text-graphite mt-4 text-center text-sm">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </form>

          {/* Recent journal entries preview */}
          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
            <Link href="/journal/post-1" className="group">
              <div className="bg-cream mb-3 aspect-16/10 overflow-hidden rounded-sm">
                <div className="text-graphite flex h-full w-full items-center justify-center transition-transform duration-300 group-hover:scale-105">
                  [Journal Image]
                </div>
              </div>
              <p className="text-warmth mb-1 text-sm">Behind the Scenes</p>
              <h3 className="font-heading group-hover:text-warmth font-semibold transition-colors">
                Building Our First Festival
              </h3>
            </Link>

            <Link href="/journal/post-2" className="group">
              <div className="bg-cream mb-3 aspect-16/10 overflow-hidden rounded-sm">
                <div className="text-graphite flex h-full w-full items-center justify-center transition-transform duration-300 group-hover:scale-105">
                  [Journal Image]
                </div>
              </div>
              <p className="text-warmth mb-1 text-sm">Philosophy</p>
              <h3 className="font-heading group-hover:text-warmth font-semibold transition-colors">
                What Co-living Really Means
              </h3>
            </Link>

            <Link href="/journal/post-3" className="group">
              <div className="bg-cream mb-3 aspect-16/10 overflow-hidden rounded-sm">
                <div className="text-graphite flex h-full w-full items-center justify-center transition-transform duration-300 group-hover:scale-105">
                  [Journal Image]
                </div>
              </div>
              <p className="text-warmth mb-1 text-sm">Insights</p>
              <h3 className="font-heading group-hover:text-warmth font-semibold transition-colors">
                Creating Sustainable Hospitality
              </h3>
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
