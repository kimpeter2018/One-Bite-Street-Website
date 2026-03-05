import Link from "next/link";
import Button from "@/components/ui/Button";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="from-surface to-accent/10 relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br via-white">
        {/* Optional: Add a background pattern */}
        <div className="absolute inset-0 -z-10 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)",
              backgroundSize: "32px 32px",
            }}
          />
        </div>

        <div className="container mx-auto px-4 pt-32 pb-20 text-center">
          <div className="mx-auto max-w-5xl">
            {/* Emoji/Icon */}
            <div className="animate-fade-in mb-8 text-7xl md:text-8xl">🎪</div>

            {/* Main heading */}
            <h1 className="font-display text-text-primary animate-slide-up mb-6 text-5xl leading-tight sm:text-6xl md:text-7xl lg:text-8xl">
              OneBite Street
            </h1>

            {/* Subheading */}
            <p
              className="font-heading text-primary animate-slide-up mb-8 text-xl md:text-2xl lg:text-3xl"
              style={{ animationDelay: "0.1s" }}
            >
              Food Festivals That Bring Communities Together
            </p>

            {/* Description */}
            <p
              className="text-text-secondary animate-slide-up mx-auto mb-12 max-w-3xl text-base leading-relaxed md:text-lg lg:text-xl"
              style={{ animationDelay: "0.2s" }}
            >
              We create immersive food festival experiences that celebrate local
              vendors, culinary creativity, and the joy of gathering around
              great food.
            </p>

            {/* CTA Buttons */}
            <div
              className="animate-slide-up flex flex-col justify-center gap-4 sm:flex-row"
              style={{ animationDelay: "0.3s" }}
            >
              <Link href="/about">
                <Button size="lg" className="w-full sm:w-auto">
                  Learn More About Us
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 transform animate-bounce">
            <svg
              className="text-primary h-6 w-6"
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
        </div>
      </section>

      {/* What We Do Section */}
      <section className="bg-white py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="font-heading text-text-primary mb-6 text-3xl md:text-4xl lg:text-5xl">
              What We Do
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed md:text-xl">
              OneBite Street specializes in creating unforgettable food festival
              experiences. We bring together local vendors, food enthusiasts,
              and communities to celebrate culinary diversity and creativity in
              vibrant, welcoming environments.
            </p>
          </div>

          {/* Features Grid */}
          <div className="mx-auto mt-16 grid max-w-6xl gap-8 md:grid-cols-3">
            {/* Feature 1 */}
            <div className="bg-surface border-border hover:border-primary rounded-lg border-2 p-8 text-center transition-all hover:shadow-lg">
              <div className="bg-primary text-text-inverse mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full text-3xl">
                🍜
              </div>
              <h3 className="font-heading text-text-primary mb-4 text-xl">
                Local Vendors
              </h3>
              <p className="text-text-secondary leading-relaxed">
                We showcase emerging and established local food vendors, giving
                them a platform to reach new audiences.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-surface border-border hover:border-primary rounded-lg border-2 p-8 text-center transition-all hover:shadow-lg">
              <div className="bg-primary text-text-inverse mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full text-3xl">
                🎉
              </div>
              <h3 className="font-heading text-text-primary mb-4 text-xl">
                Community Events
              </h3>
              <p className="text-text-secondary leading-relaxed">
                Our festivals are designed to bring people together, creating
                memorable experiences and lasting connections.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-surface border-border hover:border-primary rounded-lg border-2 p-8 text-center transition-all hover:shadow-lg">
              <div className="bg-primary text-text-inverse mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full text-3xl">
                🌟
              </div>
              <h3 className="font-heading text-text-primary mb-4 text-xl">
                Curated Experiences
              </h3>
              <p className="text-text-secondary leading-relaxed">
                Every festival is carefully curated to ensure quality,
                diversity, and an atmosphere that celebrates food culture.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="bg-surface py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="font-heading text-text-primary mb-12 text-center text-3xl md:text-4xl lg:text-5xl">
              Our Approach
            </h2>

            <div className="space-y-6">
              {/* Approach Item 1 */}
              <div className="border-border flex items-start gap-4 rounded-lg border-2 bg-white p-6">
                <div className="bg-primary text-text-inverse flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-xl font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-heading text-text-primary mb-2 text-xl">
                    Vendor-First Mindset
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    We prioritize the success of our vendors by providing them
                    with excellent foot traffic, marketing support, and a
                    well-organized event infrastructure.
                  </p>
                </div>
              </div>

              {/* Approach Item 2 */}
              <div className="border-border flex items-start gap-4 rounded-lg border-2 bg-white p-6">
                <div className="bg-primary text-text-inverse flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-xl font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-heading text-text-primary mb-2 text-xl">
                    Community-Centered Design
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    Our festivals are designed with the community in mind,
                    creating spaces where people of all backgrounds can come
                    together and connect.
                  </p>
                </div>
              </div>

              {/* Approach Item 3 */}
              <div className="border-border flex items-start gap-4 rounded-lg border-2 bg-white p-6">
                <div className="bg-primary text-text-inverse flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-xl font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-heading text-text-primary mb-2 text-xl">
                    Quality & Diversity
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    We carefully curate our vendor lineup to ensure a diverse
                    range of cuisines and price points, making our festivals
                    accessible to everyone.
                  </p>
                </div>
              </div>

              {/* Approach Item 4 */}
              <div className="border-border flex items-start gap-4 rounded-lg border-2 bg-white p-6">
                <div className="bg-primary text-text-inverse flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-xl font-bold">
                  4
                </div>
                <div>
                  <h3 className="font-heading text-text-primary mb-2 text-xl">
                    Sustainable Practices
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    We&apos;re committed to minimizing waste and environmental
                    impact through thoughtful planning and sustainable event
                    practices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-secondary py-24 text-white md:py-32">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="font-heading mb-12 text-3xl md:text-4xl lg:text-5xl">
              Why Partner With Us?
            </h2>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {/* Reason 1 */}
              <div className="text-center">
                <div className="bg-primary text-text-inverse mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full text-4xl">
                  📍
                </div>
                <h3 className="font-heading mb-3 text-xl">Prime Locations</h3>
                <p className="text-text-inverse/80 leading-relaxed">
                  We secure high-traffic venues that attract large, diverse
                  crowds to maximize vendor exposure.
                </p>
              </div>

              {/* Reason 2 */}
              <div className="text-center">
                <div className="bg-primary text-text-inverse mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full text-4xl">
                  📢
                </div>
                <h3 className="font-heading mb-3 text-xl">Marketing Power</h3>
                <p className="text-text-inverse/80 leading-relaxed">
                  Our festivals benefit from comprehensive marketing campaigns
                  across social media and local channels.
                </p>
              </div>

              {/* Reason 3 */}
              <div className="text-center">
                <div className="bg-primary text-text-inverse mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full text-4xl">
                  🤝
                </div>
                <h3 className="font-heading mb-3 text-xl">Vendor Support</h3>
                <p className="text-text-inverse/80 leading-relaxed">
                  We provide hands-on support before, during, and after events
                  to ensure vendor success.
                </p>
              </div>

              {/* Reason 4 */}
              <div className="text-center">
                <div className="bg-primary text-text-inverse mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full text-4xl">
                  ✨
                </div>
                <h3 className="font-heading mb-3 text-xl">
                  Memorable Experiences
                </h3>
                <p className="text-text-inverse/80 leading-relaxed">
                  We create festivals that people remember and want to return
                  to, building loyal audiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-text-primary mb-6 text-3xl md:text-4xl lg:text-5xl">
              Let&apos;s Create Something Amazing
            </h2>
            <p className="text-text-secondary mb-8 text-lg leading-relaxed md:text-xl">
              Whether you&apos;re a vendor interested in participating, a venue
              owner looking to host, or simply want to learn more about our
              upcoming festivals—we&apos;d love to hear from you.
            </p>

            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link href="/contact">
                <Button size="lg" className="w-full sm:w-auto">
                  Get in Touch
                </Button>
              </Link>
              <Link href="/about">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-accent/20 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h3 className="font-heading text-text-primary mb-4 text-2xl md:text-3xl">
              Stay Updated
            </h3>
            <p className="text-text-secondary mb-8">
              Subscribe to hear about our upcoming festivals and events
            </p>

            <form className="flex flex-col gap-4 sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="border-border focus:border-primary flex-1 rounded-lg border-2 bg-white px-6 py-4 focus:outline-none"
                required
              />
              <Button type="submit" size="lg" className="whitespace-nowrap">
                Subscribe
              </Button>
            </form>
            <p className="text-text-secondary mt-4 text-sm">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
