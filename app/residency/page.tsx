import Container from "@/components/layout/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import Link from "next/link";

export default function ResidencyPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="from-olive/10 via-cream to-sand relative overflow-hidden bg-linear-to-br pt-32 pb-20">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <div className="animate-fade-in mb-6 text-7xl">🌱</div>
            <p className="text-graphite animate-fade-in mb-6 text-sm tracking-widest uppercase">
              Creative Hub
            </p>
            <h1 className="font-display text-charcoal animate-slide-up mb-8 text-5xl md:text-6xl lg:text-7xl">
              Creative Residency
            </h1>
            <p
              className="text-graphite animate-slide-up text-xl leading-relaxed md:text-2xl"
              style={{ animationDelay: "0.1s" }}
            >
              Live, work, and create without financial pressure. Join a
              community of artists, designers, and makers building meaningful
              work together.
            </p>
          </div>
        </Container>
      </section>

      {/* What We Offer */}
      <Section className="bg-white">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-heading mb-16 text-center text-3xl md:text-4xl lg:text-5xl">
            What We Offer
          </h2>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Living Space */}
            <div className="bg-cream border-sand hover:border-warmth rounded-sm border-2 p-8 transition-all duration-300">
              <div className="bg-warmth mb-6 flex h-16 w-16 items-center justify-center rounded-full text-3xl text-white">
                🏠
              </div>
              <h3 className="font-heading mb-4 text-2xl">Affordable Living</h3>
              <p className="text-graphite leading-relaxed">
                Comfortable, shared living spaces at below-market rates. Focus
                on your craft, not your rent. Private bedrooms with shared
                common areas that encourage community and collaboration.
              </p>
            </div>

            {/* Working Space */}
            <div className="bg-cream border-sand hover:border-warmth rounded-sm border-2 p-8 transition-all duration-300">
              <div className="bg-earth mb-6 flex h-16 w-16 items-center justify-center rounded-full text-3xl text-white">
                💻
              </div>
              <h3 className="font-heading mb-4 text-2xl">Co-Working Space</h3>
              <p className="text-graphite leading-relaxed">
                Dedicated workspace with high-speed internet, meeting rooms, and
                specialized equipment. Whether you&apos;re writing, designing,
                coding, or cooking—we&apos;ve got the space you need.
              </p>
            </div>

            {/* Community */}
            <div className="bg-cream border-sand hover:border-warmth rounded-sm border-2 p-8 transition-all duration-300">
              <div className="bg-olive mb-6 flex h-16 w-16 items-center justify-center rounded-full text-3xl text-white">
                🤝
              </div>
              <h3 className="font-heading mb-4 text-2xl">Creative Community</h3>
              <p className="text-graphite leading-relaxed">
                Connect with fellow creators across disciplines. Regular
                community dinners, skill-sharing workshops, and collaborative
                projects. You&apos;re never working alone.
              </p>
            </div>

            {/* Income Opportunities */}
            <div className="bg-cream border-sand hover:border-warmth rounded-sm border-2 p-8 transition-all duration-300">
              <div className="bg-rust mb-6 flex h-16 w-16 items-center justify-center rounded-full text-3xl text-white">
                💰
              </div>
              <h3 className="font-heading mb-4 text-2xl">
                Income Opportunities
              </h3>
              <p className="text-graphite leading-relaxed">
                Contribute to our hospitality ventures and earn income. Work
                shifts at our cafés, help with festivals, contribute your
                creative skills—all while building your own projects.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* How It Works */}
      <Section className="bg-cream">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-heading mb-12 text-center text-3xl md:text-4xl">
            How The Residency Works
          </h2>

          <div className="space-y-8">
            {/* Step 1 */}
            <div className="flex items-start gap-6">
              <div className="bg-warmth flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-xl font-bold text-white">
                1
              </div>
              <div className="border-sand grow rounded-sm border-2 bg-white p-6">
                <h3 className="font-heading mb-3 text-xl">Apply</h3>
                <p className="text-graphite leading-relaxed">
                  Submit your application with your portfolio, project proposal,
                  and why you want to join our community. We accept creators
                  from all disciplines—culinary, design, tech, writing, arts,
                  and more.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-start gap-6">
              <div className="bg-earth flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-xl font-bold text-white">
                2
              </div>
              <div className="border-sand growded-sm border-2 bg-white p-6">
                <h3 className="font-heading mb-3 text-xl">Interview</h3>
                <p className="text-graphite leading-relaxed">
                  If selected, we&apos;ll schedule a conversation to learn more
                  about your work, your goals, and how you&apos;d contribute to
                  the community. This isn&apos;t about credentials—it&apos;s
                  about fit and passion.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-start gap-6">
              <div className="bg-olive flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-xl font-bold text-white">
                3
              </div>
              <div className="border-sand grow rounded-sm border-2 bg-white p-6">
                <h3 className="font-heading mb-3 text-xl">Trial Period</h3>
                <p className="text-graphite leading-relaxed">
                  New residents start with a 3-month trial period. This gives
                  both you and the community a chance to see if it&apos;s the
                  right fit. Most trials convert to ongoing residency.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex items-start gap-6">
              <div className="bg-rust flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-xl font-bold text-white">
                4
              </div>
              <div className="border-sand grow rounded-sm border-2 bg-white p-6">
                <h3 className="font-heading mb-3 text-xl">
                  Create & Contribute
                </h3>
                <p className="text-graphite leading-relaxed">
                  Live, work, and grow with us. Contribute 10-15 hours per week
                  to our hospitality ventures, participate in community life,
                  and focus the rest of your time on your creative work.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Who It&apos;s For */}
      <Section className="bg-white">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-heading mb-8 text-center text-3xl md:text-4xl">
            Who This Is For
          </h2>

          <div className="text-graphite space-y-6 text-lg leading-relaxed">
            <p>
              Our Creative Residency is designed for makers, creators, and
              builders who want to focus on meaningful work without the crushing
              pressure of high living costs. You might be:
            </p>

            <ul className="ml-6 space-y-4">
              <li className="flex gap-3">
                <span className="text-warmth shrink-0">•</span>
                <span>
                  <strong>A culinary creator</strong> developing your own food
                  concept, perfecting recipes, or building a catering business
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-warmth shrink-0">•</span>
                <span>
                  <strong>A designer or artist</strong> working on a portfolio,
                  starting a studio, or creating a body of work
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-warmth shrink-0">•</span>
                <span>
                  <strong>A developer or maker</strong> building an app,
                  product, or creative tech project
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-warmth shrink-0">•</span>
                <span>
                  <strong>A writer or content creator</strong> working on a
                  book, blog, or creative project
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-warmth shrink-0">•</span>
                <span>
                  <strong>An entrepreneur</strong> building a creative business
                  with social impact
                </span>
              </li>
            </ul>

            <p className="border-sand border-t pt-6">
              What matters most isn&apos;t your credentials or
              experience—it&apos;s your commitment to your craft, your openness
              to community, and your desire to create something meaningful.
            </p>
          </div>
        </div>
      </Section>

      {/* Current Residents */}
      <Section className="bg-charcoal text-white">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-heading mb-12 text-center text-3xl md:text-4xl">
            Meet Some Current Residents
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Resident 1 */}
            <div className="text-center">
              <div className="bg-graphite mx-auto mb-6 flex h-32 w-32 items-center justify-center rounded-full text-6xl">
                👨‍🍳
              </div>
              <h3 className="font-heading mb-2 text-xl">Alex</h3>
              <p className="text-warmth mb-3 text-sm">Culinary Creator</p>
              <p className="text-sand text-sm leading-relaxed">
                &quot;The residency gave me the space to test my pop-up dinner
                concept. Now I&apos;m launching my own restaurant.&quot;
              </p>
            </div>

            {/* Resident 2 */}
            <div className="text-center">
              <div className="bg-graphite mx-auto mb-6 flex h-32 w-32 items-center justify-center rounded-full text-6xl">
                👩‍🎨
              </div>
              <h3 className="font-heading mb-2 text-xl">Maria</h3>
              <p className="text-warmth mb-3 text-sm">Graphic Designer</p>
              <p className="text-sand text-sm leading-relaxed">
                &quot;Being around other creators pushed my work to new levels.
                The community support is incredible.&quot;
              </p>
            </div>

            {/* Resident 3 */}
            <div className="text-center">
              <div className="bg-graphite mx-auto mb-6 flex h-32 w-32 items-center justify-center rounded-full text-6xl">
                👨‍💻
              </div>
              <h3 className="font-heading mb-2 text-xl">Jordan</h3>
              <p className="text-warmth mb-3 text-sm">Developer</p>
              <p className="text-sand text-sm leading-relaxed">
                &quot;I finally had the time and headspace to build my app. The
                low rent and community made it possible.&quot;
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section className="bg-cream">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-heading mb-12 text-center text-3xl md:text-4xl">
            Common Questions
          </h2>

          <div className="space-y-6">
            <div className="border-sand rounded-sm border-2 bg-white p-8">
              <h3 className="font-heading mb-3 text-xl">
                What&apos;s the monthly cost?
              </h3>
              <p className="text-graphite leading-relaxed">
                Residency costs vary based on room type and contribution level,
                but typically range from $500-$800/month for private room +
                co-working access. This is significantly below market rate,
                subsidized by our hospitality ventures.
              </p>
            </div>

            <div className="border-sand rounded-sm border-2 bg-white p-8">
              <h3 className="font-heading mb-3 text-xl">
                How long can I stay?
              </h3>
              <p className="text-graphite leading-relaxed">
                After the 3-month trial period, residents can stay as long as
                they&apos;re actively working on their projects and contributing
                to the community. Most residents stay 6-18 months.
              </p>
            </div>

            <div className="border-sand rounded-sm border-2 bg-white p-8">
              <h3 className="font-heading mb-3 text-xl">
                What does &quot;contribution&quot; mean?
              </h3>
              <p className="text-graphite leading-relaxed">
                Residents contribute 10-15 hours per week to our hospitality
                operations— working café shifts, helping at festivals,
                contributing design work, etc. This keeps costs low and
                strengthens the community.
              </p>
            </div>

            <div className="border-sand rounded-sm border-2 bg-white p-8">
              <h3 className="font-heading mb-3 text-xl">
                Can I work a regular job too?
              </h3>
              <p className="text-graphite leading-relaxed">
                Absolutely! Many residents have part-time jobs or freelance
                work. The residency is designed to reduce financial pressure,
                not eliminate all income needs.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-warmth text-white">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading mb-6 text-3xl md:text-4xl">
            Ready to Join Us?
          </h2>
          <p className="mb-8 text-lg leading-relaxed opacity-90">
            Applications are reviewed on a rolling basis. We&apos;re currently
            accepting applications for residency starting in the next quarter.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/contact">
              <Button
                size="lg"
                variant="secondary"
                className="w-full sm:w-auto"
              >
                Apply Now
              </Button>
            </Link>
            <Link href="/about">
              <Button
                size="lg"
                variant="outline"
                className="hover:text-warmth w-full border-white text-white hover:bg-white sm:w-auto"
              >
                Learn More About Us
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
