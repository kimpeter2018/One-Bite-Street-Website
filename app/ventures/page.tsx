// app/ventures/page.tsx
import Container from "@/components/layout/Container";
import Section from "@/components/ui/Section";
import Link from "next/link";
import { ventures } from "@/lib/data/ventures";

export default function VenturesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="from-warmth/10 via-cream to-sand relative overflow-hidden bg-linear-to-br pt-32 pb-20">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <p className="animate-fade-in text-graphite mb-6 text-sm tracking-widest uppercase">
              What We Do
            </p>
            <h1 className="animate-slide-up font-display text-charcoal mb-8 text-5xl md:text-6xl lg:text-7xl">
              Our Ventures
            </h1>
            <p
              className="animate-slide-up text-graphite mx-auto max-w-3xl text-xl leading-relaxed md:text-2xl"
              style={{ animationDelay: "0.1s" }}
            >
              Five interconnected ventures working together to create a
              sustainable ecosystem for creativity, hospitality, and human
              connection.
            </p>
          </div>
        </Container>
      </section>

      {/* Ecosystem Overview */}
      <Section className="bg-white">
        <div className="mx-auto mb-20 max-w-4xl text-center">
          <h2 className="font-heading mb-6 text-3xl md:text-4xl">
            A Holistic Ecosystem
          </h2>
          <p className="text-graphite text-lg leading-relaxed">
            Each venture supports and strengthens the others. Revenue from our
            hospitality ventures funds the Creative Hub. Creators from the Hub
            contribute to our cafés, restaurants, and festivals. Together,
            we&apos;re building something that&apos;s greater than the sum of
            its parts.
          </p>
        </div>

        {/* Ventures Grid */}
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 lg:grid-cols-3">
          {ventures.map((venture, index) => (
            <Link
              key={venture.id}
              href={`/ventures/${venture.slug}`}
              className="group"
              style={{
                animation: "fade-in 0.6s ease-out forwards",
                animationDelay: `${index * 0.1}s`,
                opacity: 0,
              }}
            >
              <div className="border-sand bg-cream hover:border-warmth flex h-full flex-col overflow-hidden rounded-sm border-2 transition-all duration-300 hover:shadow-xl">
                {/* Icon Section */}
                <div className="border-sand group-hover:bg-warmth/5 flex items-center justify-center border-b-2 bg-white p-8 transition-colors">
                  <div className="transform text-7xl transition-transform duration-300 group-hover:scale-110">
                    {venture.icon}
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex grow flex-col p-8">
                  <div className="mb-4">
                    <span className="text-warmth text-xs font-semibold tracking-widest uppercase">
                      {venture.type.replace("-", " ")}
                    </span>
                  </div>

                  <h3 className="font-heading group-hover:text-warmth mb-3 text-2xl transition-colors">
                    {venture.title}
                  </h3>

                  <p className="font-heading text-earth mb-4 text-lg">
                    {venture.tagline}
                  </p>

                  <p className="text-graphite mb-6 grow leading-relaxed">
                    {venture.description.substring(0, 150)}...
                  </p>

                  <div className="border-sand flex items-center justify-between border-t pt-4">
                    <span className="text-warmth flex items-center gap-2 text-sm font-medium transition-all group-hover:gap-3">
                      Learn more
                      <span className="inline-block transition-transform group-hover:translate-x-1">
                        →
                      </span>
                    </span>

                    {venture.status !== "active" && (
                      <span className="text-olive text-xs font-semibold tracking-wide uppercase">
                        {venture.status === "planned"
                          ? "Coming Soon"
                          : "Completed"}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* How It Works */}
      <Section className="bg-charcoal text-white">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-heading mb-16 text-center text-3xl md:text-4xl lg:text-5xl">
            How The Ecosystem Works
          </h2>

          <div className="mb-16 grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="bg-warmth mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full text-3xl">
                💰
              </div>
              <h3 className="font-heading mb-4 text-xl">Revenue Generation</h3>
              <p className="text-sand leading-relaxed">
                Our hospitality ventures—festivals, cafés, hotels—generate
                sustainable revenue
              </p>
            </div>

            <div className="text-center">
              <div className="bg-earth mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full text-3xl">
                🌱
              </div>
              <h3 className="font-heading mb-4 text-xl">Supporting Creators</h3>
              <p className="text-sand leading-relaxed">
                Revenue funds the Creative Hub, providing affordable living and
                working spaces
              </p>
            </div>

            <div className="text-center">
              <div className="bg-olive mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full text-3xl">
                ✨
              </div>
              <h3 className="font-heading mb-4 text-xl">Creative Output</h3>
              <p className="text-sand leading-relaxed">
                Creators contribute their talents back to our hospitality
                ventures
              </p>
            </div>
          </div>

          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sand text-lg leading-relaxed">
              This circular model ensures sustainability for everyone involved.
              Creators get the space and support they need. Hospitality ventures
              get authentic, creative talent. Communities get meaningful
              experiences. Everyone wins.
            </p>
          </div>
        </div>
      </Section>

      {/* Impact Section */}
      <Section className="bg-cream">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-heading mb-12 text-3xl md:text-4xl">
            The Impact We&apos;re Creating
          </h2>

          <div className="mb-12 grid gap-8 sm:grid-cols-2">
            <div className="border-sand rounded-sm border-2 bg-white p-8">
              <div className="font-display text-warmth mb-2 text-4xl font-bold">
                50+
              </div>
              <p className="font-heading text-graphite">
                Vendors & Creators Supported
              </p>
            </div>

            <div className="border-sand rounded-sm border-2 bg-white p-8">
              <div className="font-display text-earth mb-2 text-4xl font-bold">
                12+
              </div>
              <p className="font-heading text-graphite">
                Successful Projects Launched
              </p>
            </div>

            <div className="border-sand rounded-sm border-2 bg-white p-8">
              <div className="font-display text-olive mb-2 text-4xl font-bold">
                5k+
              </div>
              <p className="font-heading text-graphite">
                Community Members Engaged
              </p>
            </div>

            <div className="border-sand rounded-sm border-2 bg-white p-8">
              <div className="font-display text-rust mb-2 text-4xl font-bold">
                100%
              </div>
              <p className="font-heading text-graphite">
                Commitment to Our Mission
              </p>
            </div>
          </div>

          <p className="text-graphite text-lg leading-relaxed">
            These numbers tell part of the story, but the real impact is in the
            lives changed, the connections made, and the creative work
            that&apos;s now possible because of this ecosystem.
          </p>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-white">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading mb-6 text-3xl md:text-4xl">
            Want to Be Part of This?
          </h2>
          <p className="text-graphite mb-8 text-lg leading-relaxed">
            Whether you&apos;re interested in partnering on a venture,
            participating as a creator, or simply learning more about what we
            do—we&apos;d love to hear from you.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/residency">
              <button className="bg-warmth hover:bg-earth focus:ring-warmth inline-flex w-full items-center justify-center rounded-sm px-8 py-4 text-lg font-medium text-white shadow-sm transition-all duration-200 focus:ring-2 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto">
                Apply for Residency
              </button>
            </Link>
            <Link href="/contact">
              <button className="border-charcoal text-charcoal hover:bg-charcoal focus:ring-warmth inline-flex w-full items-center justify-center rounded-sm border-2 px-8 py-4 text-lg font-medium transition-all duration-200 hover:text-white focus:ring-2 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto">
                Get in Touch
              </button>
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
