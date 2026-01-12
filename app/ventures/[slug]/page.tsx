// app/ventures/[slug]/page.tsx
import { ventures } from "@/lib/data/ventures";
import { notFound } from "next/navigation";
import Container from "@/components/layout/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import Link from "next/link";

export async function generateStaticParams() {
  return ventures.map((venture) => ({
    slug: venture.slug,
  }));
}

export default function VenturePage({ params }: { params: { slug: string } }) {
  const venture = ventures.find((v) => v.slug === params.slug);

  if (!venture) {
    notFound();
  }

  return (
    <>
      {/* Hero Section */}
      <section className="from-cream to-sand relative overflow-hidden bg-linear-to-br via-white pt-32 pb-20">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <div className="animate-fade-in mb-6 text-7xl md:text-8xl">
                {venture.icon}
              </div>
              <p className="text-warmth animate-slide-up mb-4 text-sm tracking-widest uppercase">
                {venture.type.replace("-", " ")}
              </p>
              <h1
                className="font-display text-charcoal animate-slide-up mb-6 text-5xl md:text-6xl lg:text-7xl"
                style={{ animationDelay: "0.1s" }}
              >
                {venture.title}
              </h1>
              <p
                className="text-earth font-heading animate-slide-up text-2xl md:text-3xl"
                style={{ animationDelay: "0.2s" }}
              >
                {venture.tagline}
              </p>
            </div>

            {/* Status Badge */}
            {venture.status !== "active" && (
              <div className="mb-8 text-center">
                <span className="bg-olive/20 text-olive inline-block rounded-full px-6 py-2 text-sm font-semibold tracking-wide uppercase">
                  {venture.status === "planned" ? "Coming Soon" : "Completed"}
                </span>
              </div>
            )}
          </div>
        </Container>
      </section>

      {/* Description */}
      <Section className="bg-white">
        <div className="mx-auto max-w-4xl">
          <p className="text-graphite text-center text-xl leading-relaxed md:text-2xl">
            {venture.description}
          </p>
        </div>
      </Section>

      {/* Approach */}
      <Section className="bg-cream">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-heading mb-16 text-center text-3xl md:text-4xl lg:text-5xl">
            Our Approach
          </h2>

          <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
            {venture.approach.map((item, index) => (
              <div
                key={index}
                className="border-sand hover:border-warmth rounded-sm border-2 bg-white p-8 transition-all duration-300"
                style={{
                  animation: "fade-in 0.6s ease-out forwards",
                  animationDelay: `${index * 0.1}s`,
                  opacity: 0,
                }}
              >
                <div className="flex items-start gap-4">
                  <div className="bg-warmth flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white">
                    {index + 1}
                  </div>
                  <p className="text-graphite text-lg leading-relaxed">
                    {item}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Services (if applicable) */}
      {venture.services && venture.services.length > 0 && (
        <Section className="bg-white">
          <div className="mx-auto max-w-4xl">
            <h2 className="font-heading mb-12 text-center text-3xl md:text-4xl">
              Services We Offer
            </h2>

            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
              {venture.services.map((service, index) => (
                <div
                  key={index}
                  className="bg-cream border-sand hover:border-warmth rounded-sm border-2 p-6 text-center transition-all duration-300 hover:bg-white"
                >
                  <p className="font-heading text-lg">{service}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>
      )}

      {/* Visual Section - Full Width Image Placeholder */}
      <section className="bg-charcoal py-32">
        <Container size="xl">
          <div className="bg-graphite text-sand flex aspect-video items-center justify-center overflow-hidden rounded-sm text-xl">
            [Venture Showcase Image/Video]
          </div>
        </Container>
      </section>

      {/* Featured Projects */}
      <Section className="bg-cream">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-heading mb-8 text-center text-3xl md:text-4xl lg:text-5xl">
            Projects & Case Studies
          </h2>
          <p className="text-graphite mx-auto mb-16 max-w-3xl text-center text-xl">
            See how we&apos;ve brought this venture to life through real
            projects and collaborations
          </p>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Project Preview 1 */}
            <Link href="/projects/project-1" className="group">
              <div className="border-sand hover:border-warmth overflow-hidden rounded-sm border-2 bg-white transition-all duration-300 hover:shadow-lg">
                <div className="bg-graphite text-sand flex aspect-4/3 items-center justify-center">
                  <span className="text-5xl">{venture.icon}</span>
                </div>
                <div className="p-6">
                  <p className="text-warmth mb-2 text-sm">Case Study</p>
                  <h3 className="font-heading group-hover:text-warmth mb-3 text-xl transition-colors">
                    Example Project Title
                  </h3>
                  <p className="text-graphite text-sm leading-relaxed">
                    A brief description of this project and its impact on the
                    community.
                  </p>
                </div>
              </div>
            </Link>

            {/* Project Preview 2 */}
            <Link href="/projects/project-2" className="group">
              <div className="border-sand hover:border-warmth overflow-hidden rounded-sm border-2 bg-white transition-all duration-300 hover:shadow-lg">
                <div className="bg-graphite text-sand flex aspect-4/3 items-center justify-center">
                  <span className="text-5xl">{venture.icon}</span>
                </div>
                <div className="p-6">
                  <p className="text-warmth mb-2 text-sm">Case Study</p>
                  <h3 className="font-heading group-hover:text-warmth mb-3 text-xl transition-colors">
                    Another Project Title
                  </h3>
                  <p className="text-graphite text-sm leading-relaxed">
                    Brief overview of another successful project in this
                    venture.
                  </p>
                </div>
              </div>
            </Link>

            {/* Project Preview 3 */}
            <Link href="/projects/project-3" className="group">
              <div className="border-sand hover:border-warmth overflow-hidden rounded-sm border-2 bg-white transition-all duration-300 hover:shadow-lg">
                <div className="bg-graphite text-sand flex aspect-4/3 items-center justify-center">
                  <span className="text-5xl">{venture.icon}</span>
                </div>
                <div className="p-6">
                  <p className="text-warmth mb-2 text-sm">Case Study</p>
                  <h3 className="font-heading group-hover:text-warmth mb-3 text-xl transition-colors">
                    Third Project Example
                  </h3>
                  <p className="text-graphite text-sm leading-relaxed">
                    How this project exemplified our approach to this venture.
                  </p>
                </div>
              </div>
            </Link>
          </div>

          <div className="mt-12 text-center">
            <Link href="/projects">
              <Button size="lg" variant="outline">
                View All Projects
              </Button>
            </Link>
          </div>
        </div>
      </Section>

      {/* Why This Matters */}
      <Section className="bg-white">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-heading mb-8 text-center text-3xl md:text-4xl">
            Why This Matters
          </h2>

          <div className="text-graphite space-y-6 text-lg leading-relaxed">
            <p>
              {venture.type === "food-festivals" && (
                <>
                  Food festivals are more than just events—they&apos;re
                  celebrations of community, culture, and creativity. They give
                  emerging vendors a platform to showcase their craft, connect
                  directly with customers, and build their businesses in a
                  low-risk environment.
                </>
              )}
              {venture.type === "cafe-restaurant" && (
                <>
                  Our café and restaurant concepts serve as creative incubators
                  where culinary innovation meets community gathering. These
                  spaces generate sustainable revenue while providing
                  opportunities for culinary creators to experiment and grow.
                </>
              )}
              {venture.type === "hotel" && (
                <>
                  We&apos;re reimagining hospitality as a creative experience.
                  Our accommodations blend comfort with community, offering
                  guests more than just a place to sleep—they become temporary
                  members of a vibrant creative ecosystem.
                </>
              )}
              {venture.type === "creative-hub" && (
                <>
                  The Creative Hub is the heart of everything we do. By removing
                  financial pressure and providing a supportive community, we
                  enable creators to focus on what matters most: their craft.
                  This is where the magic happens.
                </>
              )}
              {venture.type === "consulting" && (
                <>
                  Through consulting, we share our expertise and philosophy with
                  other hospitality businesses. Every project we take on helps
                  spread the message that sustainable, human-centered
                  hospitality is not just possible—it&apos;s the future.
                </>
              )}
            </p>

            <p className="font-heading text-charcoal mt-12 text-center text-2xl">
              &quot;{venture.tagline}&quot;
            </p>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-warmth text-white">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading mb-6 text-3xl md:text-4xl">
            Interested in Working Together?
          </h2>
          <p className="mb-8 text-lg opacity-90">
            Whether you&apos;re looking to partner with us, participate in our
            ventures, or learn more about what we do, we&apos;d love to hear
            from you.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/contact">
              <Button
                size="lg"
                variant="secondary"
                className="w-full sm:w-auto"
              >
                Get in Touch
              </Button>
            </Link>
            <Link href="/ventures">
              <Button
                size="lg"
                variant="outline"
                className="hover:text-warmth w-full border-white text-white hover:bg-white sm:w-auto"
              >
                View All Ventures
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
