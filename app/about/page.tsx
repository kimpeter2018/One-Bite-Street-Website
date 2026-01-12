import Container from "@/components/layout/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="from-cream via-sand to-olive/20 relative overflow-hidden bg-linear-to-br pt-32 pb-20">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-graphite animate-fade-in mb-6 text-sm tracking-widest uppercase">
              Our Story
            </p>
            <h1 className="font-display text-charcoal animate-slide-up mb-8 text-5xl md:text-6xl lg:text-7xl">
              BE HUMAN
            </h1>
            <p
              className="text-graphite animate-slide-up text-xl leading-relaxed md:text-2xl"
              style={{ animationDelay: "0.1s" }}
            >
              One Bite Street is more than a business—it&apos;s a philosophy, a
              movement, and a commitment to creating spaces where humanity
              thrives.
            </p>
          </div>
        </Container>
      </section>

      {/* Philosophy Section */}
      <Section className="bg-white">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-heading mb-12 text-center text-3xl md:text-4xl lg:text-5xl">
            Our Philosophy
          </h2>

          <div className="space-y-8 text-lg leading-relaxed">
            <div className="border-warmth border-l-4 py-4 pl-8">
              <h3 className="font-heading text-warmth mb-4 text-2xl">
                Be Human
              </h3>
              <p className="text-graphite">
                True humanity is found in{" "}
                <span className="text-charcoal font-semibold">
                  co-existence
                </span>
                —sharing spaces, ideas, creativity, and daily life. We believe
                that when people come together without barriers, magic happens.
                Creativity flows. Communities form. Life becomes richer.
              </p>
            </div>

            <div className="border-earth border-l-4 py-4 pl-8">
              <h3 className="font-heading text-earth mb-4 text-2xl">
                One Bite at a Time
              </h3>
              <p className="text-graphite">
                <span className="text-charcoal font-semibold">
                  &quot;One Bite&quot;
                </span>{" "}
                represents something light, simple, and meaningful. Small
                opportunities for creators. Warm, enjoyable experiences for
                guests. Sustainable steps toward a bigger vision. We&apos;re
                building this ecosystem one thoughtful bite at a time.
              </p>
            </div>

            <div className="border-olive border-l-4 py-4 pl-8">
              <h3 className="font-heading text-olive mb-4 text-2xl">
                The Sustainable Creator Ecosystem
              </h3>
              <p className="text-graphite">
                We&apos;re creating a world where creators can focus on their
                craft without excessive financial pressure. By integrating
                hospitality ventures with creative spaces, we&apos;ve designed a
                self-sustaining model: revenue from cafés, restaurants, hotels,
                and festivals supports the Creative Hub, allowing artists to
                live, work, and collaborate in one shared environment.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Mission & Values */}
      <Section className="bg-cream">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-heading mb-16 text-center text-3xl md:text-4xl lg:text-5xl">
            What Drives Us
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="border-sand hover:border-warmth rounded-sm border-2 bg-white p-8 transition-all duration-300">
              <div className="mb-6 text-5xl">🤝</div>
              <h3 className="font-heading mb-4 text-xl">Community First</h3>
              <p className="text-graphite leading-relaxed">
                Every decision we make prioritizes the wellbeing and growth of
                our community. We&apos;re building spaces where people genuinely
                want to spend time.
              </p>
            </div>

            <div className="border-sand hover:border-warmth rounded-sm border-2 bg-white p-8 transition-all duration-300">
              <div className="mb-6 text-5xl">🌱</div>
              <h3 className="font-heading mb-4 text-xl">Sustainable Growth</h3>
              <p className="text-graphite leading-relaxed">
                We grow organically, never sacrificing quality or values for
                speed. Every venture is designed to support the ecosystem
                long-term.
              </p>
            </div>

            <div className="border-sand hover:border-warmth rounded-sm border-2 bg-white p-8 transition-all duration-300">
              <div className="mb-6 text-5xl">✨</div>
              <h3 className="font-heading mb-4 text-xl">Creative Excellence</h3>
              <p className="text-graphite leading-relaxed">
                We celebrate creativity in all forms—from culinary arts to
                design, from events to experiences. Excellence isn&apos;t just a
                goal; it&apos;s our standard.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* The Journey */}
      <Section className="bg-white">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-heading mb-16 text-center text-3xl md:text-4xl lg:text-5xl">
            Our Journey
          </h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="bg-sand absolute top-0 bottom-0 left-8 hidden w-0.5 md:block" />

            <div className="space-y-12">
              {/* Timeline Item 1 */}
              <div className="relative pl-0 md:pl-20">
                <div className="bg-warmth absolute top-2 left-5 hidden h-6 w-6 rounded-full border-4 border-white md:block" />
                <div className="bg-cream border-sand rounded-sm border-2 p-8">
                  <p className="text-warmth mb-2 text-sm font-semibold">2022</p>
                  <h3 className="font-heading mb-4 text-2xl">The Spark</h3>
                  <p className="text-graphite leading-relaxed">
                    One Bite Street began as a conversation between friends
                    frustrated by the challenges facing creators—high living
                    costs, lack of sustainable income, isolation. We asked
                    ourselves: what if we could create a different model?
                  </p>
                </div>
              </div>

              {/* Timeline Item 2 */}
              <div className="relative pl-0 md:pl-20">
                <div className="bg-earth absolute top-2 left-5 hidden h-6 w-6 rounded-full border-4 border-white md:block" />
                <div className="bg-cream border-sand rounded-sm border-2 p-8">
                  <p className="text-earth mb-2 text-sm font-semibold">2023</p>
                  <h3 className="font-heading mb-4 text-2xl">First Ventures</h3>
                  <p className="text-graphite leading-relaxed">
                    We launched our first food festival, bringing together 50+
                    local vendors and thousands of visitors. The response was
                    overwhelming. People were hungry—not just for good food, but
                    for genuine connection and community.
                  </p>
                </div>
              </div>

              {/* Timeline Item 3 */}
              <div className="relative pl-0 md:pl-20">
                <div className="bg-olive absolute top-2 left-5 hidden h-6 w-6 rounded-full border-4 border-white md:block" />
                <div className="bg-cream border-sand rounded-sm border-2 p-8">
                  <p className="text-olive mb-2 text-sm font-semibold">2024</p>
                  <h3 className="font-heading mb-4 text-2xl">
                    Expanding the Ecosystem
                  </h3>
                  <p className="text-graphite leading-relaxed">
                    With successful festivals under our belt and café concepts
                    in development, we&apos;re now building toward our flagship
                    vision: the Creative Hub. A place where creators can truly
                    thrive, supported by a self-sustaining hospitality
                    ecosystem.
                  </p>
                </div>
              </div>

              {/* Timeline Item 4 */}
              <div className="relative pl-0 md:pl-20">
                <div className="bg-warmth absolute top-2 left-5 hidden h-6 w-6 rounded-full border-4 border-white md:block" />
                <div className="bg-cream border-sand rounded-sm border-2 p-8">
                  <p className="text-warmth mb-2 text-sm font-semibold">
                    2025 & Beyond
                  </p>
                  <h3 className="font-heading mb-4 text-2xl">The Future</h3>
                  <p className="text-graphite leading-relaxed">
                    We&apos;re just getting started. With each venture, each
                    partnership, each creator who joins our community,
                    we&apos;re proving that a more human way of working and
                    living is possible. Join us on this journey.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Team Section */}
      <Section className="bg-charcoal text-white">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-heading mb-8 text-3xl md:text-4xl lg:text-5xl">
            Meet the Team
          </h2>
          <p className="text-sand mb-12 text-xl leading-relaxed">
            We&apos;re a diverse group of hospitality professionals, creatives,
            designers, and community builders united by a shared vision.
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {/* Team Member 1 */}
            <div className="text-center">
              <div className="bg-graphite mx-auto mb-4 flex h-32 w-32 items-center justify-center rounded-full text-6xl">
                👤
              </div>
              <h3 className="font-heading mb-2 text-xl">Team Member</h3>
              <p className="text-warmth mb-3 text-sm">Co-Founder</p>
              <p className="text-sand text-sm">
                Passionate about creating spaces where community thrives
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="text-center">
              <div className="bg-graphite mx-auto mb-4 flex h-32 w-32 items-center justify-center rounded-full text-6xl">
                👤
              </div>
              <h3 className="font-heading mb-2 text-xl">Team Member</h3>
              <p className="text-warmth mb-3 text-sm">Co-Founder</p>
              <p className="text-sand text-sm">
                Bringing culinary expertise and creative vision
              </p>
            </div>

            {/* Team Member 3 */}
            <div className="text-center">
              <div className="bg-graphite mx-auto mb-4 flex h-32 w-32 items-center justify-center rounded-full text-6xl">
                👤
              </div>
              <h3 className="font-heading mb-2 text-xl">Team Member</h3>
              <p className="text-warmth mb-3 text-sm">Operations Lead</p>
              <p className="text-sand text-sm">
                Making the magic happen behind the scenes
              </p>
            </div>
          </div>

          <div className="mt-16">
            <Link href="/about/team">
              <Button
                variant="outline"
                size="lg"
                className="hover:text-charcoal border-white text-white hover:bg-white"
              >
                See Full Team
              </Button>
            </Link>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-warmth text-white">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading mb-6 text-3xl md:text-4xl">
            Ready to Be Part of This?
          </h2>
          <p className="mb-8 text-lg leading-relaxed opacity-90">
            Whether you&apos;re a creator, a partner, or someone who believes in
            what we&apos;re building, we&apos;d love to hear from you.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/residency">
              <Button
                size="lg"
                variant="secondary"
                className="w-full sm:w-auto"
              >
                Apply for Residency
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="hover:text-warmth w-full border-white text-white hover:bg-white sm:w-auto"
              >
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
