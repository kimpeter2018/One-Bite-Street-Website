import Link from "next/link";
import Button from "@/components/ui/Button";

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="from-surface via-accent/10 relative overflow-hidden bg-gradient-to-br to-white pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-text-secondary animate-fade-in mb-6 text-sm tracking-widest uppercase">
              Our Story
            </p>
            <h1 className="font-display text-text-primary animate-slide-up mb-8 text-5xl md:text-6xl lg:text-7xl">
              About OneBite Street
            </h1>
            <p
              className="text-text-secondary animate-slide-up text-xl leading-relaxed md:text-2xl"
              style={{ animationDelay: "0.1s" }}
            >
              We&apos;re passionate about creating food festivals that celebrate
              local talent, bring communities together, and make great food
              accessible to everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="bg-white py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="font-heading text-text-primary mb-8 text-center text-3xl md:text-4xl lg:text-5xl">
              Our Mission
            </h2>
            <div className="text-text-secondary space-y-6 text-lg leading-relaxed">
              <p>
                OneBite Street was founded with a simple belief: food has the
                power to bring people together. In a world that often feels
                disconnected, we create spaces where communities can gather,
                discover new flavors, and celebrate the creativity of local food
                vendors.
              </p>
              <p>
                Our festivals are more than just events—they&apos;re
                celebrations of culinary diversity, platforms for emerging food
                entrepreneurs, and gathering places for food lovers from all
                walks of life.
              </p>
              <p>
                We&apos;re committed to supporting local food businesses by
                providing them with opportunities to showcase their work,
                connect with customers, and grow their brands in a supportive,
                well-organized environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-surface py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <h2 className="font-heading text-text-primary mb-16 text-center text-3xl md:text-4xl lg:text-5xl">
              Our Values
            </h2>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Value 1 */}
              <div className="border-border hover:border-primary rounded-lg border-2 bg-white p-8 transition-all hover:shadow-lg">
                <div className="mb-6 text-5xl">🤝</div>
                <h3 className="font-heading text-text-primary mb-4 text-xl">
                  Community First
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  We prioritize the wellbeing and success of our vendors,
                  attendees, and the local communities we serve.
                </p>
              </div>

              {/* Value 2 */}
              <div className="border-border hover:border-primary rounded-lg border-2 bg-white p-8 transition-all hover:shadow-lg">
                <div className="mb-6 text-5xl">✨</div>
                <h3 className="font-heading text-text-primary mb-4 text-xl">
                  Quality & Excellence
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  We carefully curate every aspect of our festivals to ensure
                  the highest quality experience for everyone involved.
                </p>
              </div>

              {/* Value 3 */}
              <div className="border-border hover:border-primary rounded-lg border-2 bg-white p-8 transition-all hover:shadow-lg">
                <div className="mb-6 text-5xl">🌍</div>
                <h3 className="font-heading text-text-primary mb-4 text-xl">
                  Sustainability
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  We&apos;re committed to minimizing environmental impact
                  through sustainable practices and responsible event
                  management.
                </p>
              </div>

              {/* Value 4 */}
              <div className="border-border hover:border-primary rounded-lg border-2 bg-white p-8 transition-all hover:shadow-lg">
                <div className="mb-6 text-5xl">🎨</div>
                <h3 className="font-heading text-text-primary mb-4 text-xl">
                  Diversity & Inclusion
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  We celebrate culinary diversity and create inclusive spaces
                  where everyone feels welcome.
                </p>
              </div>

              {/* Value 5 */}
              <div className="border-border hover:border-primary rounded-lg border-2 bg-white p-8 transition-all hover:shadow-lg">
                <div className="mb-6 text-5xl">💡</div>
                <h3 className="font-heading text-text-primary mb-4 text-xl">
                  Innovation
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  We constantly evolve and improve, finding new ways to create
                  memorable festival experiences.
                </p>
              </div>

              {/* Value 6 */}
              <div className="border-border hover:border-primary rounded-lg border-2 bg-white p-8 transition-all hover:shadow-lg">
                <div className="mb-6 text-5xl">❤️</div>
                <h3 className="font-heading text-text-primary mb-4 text-xl">
                  Passion
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  We genuinely love what we do and it shows in every festival we
                  organize.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Team */}
      <section className="bg-white py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="font-heading text-text-primary mb-8 text-center text-3xl md:text-4xl lg:text-5xl">
              Meet the Team
            </h2>
            <p className="text-text-secondary mb-16 text-center text-lg">
              We&apos;re a passionate group of food lovers, event organizers,
              and community builders dedicated to creating unforgettable
              festival experiences.
            </p>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Team Member 1 */}
              <div className="text-center">
                <div className="bg-surface mx-auto mb-4 flex h-32 w-32 items-center justify-center rounded-full text-6xl">
                  👤
                </div>
                <h3 className="font-heading text-text-primary mb-2 text-xl">
                  Team Member
                </h3>
                <p className="text-primary mb-3 text-sm font-semibold">
                  Founder
                </p>
                <p className="text-text-secondary text-sm">
                  Passionate about bringing people together through food and
                  community events.
                </p>
              </div>

              {/* Team Member 2 */}
              <div className="text-center">
                <div className="bg-surface mx-auto mb-4 flex h-32 w-32 items-center justify-center rounded-full text-6xl">
                  👤
                </div>
                <h3 className="font-heading text-text-primary mb-2 text-xl">
                  Team Member
                </h3>
                <p className="text-primary mb-3 text-sm font-semibold">
                  Operations Lead
                </p>
                <p className="text-text-secondary text-sm">
                  Ensures every festival runs smoothly from start to finish.
                </p>
              </div>

              {/* Team Member 3 */}
              <div className="text-center">
                <div className="bg-surface mx-auto mb-4 flex h-32 w-32 items-center justify-center rounded-full text-6xl">
                  👤
                </div>
                <h3 className="font-heading text-text-primary mb-2 text-xl">
                  Team Member
                </h3>
                <p className="text-primary mb-3 text-sm font-semibold">
                  Vendor Relations
                </p>
                <p className="text-text-secondary text-sm">
                  Works closely with vendors to support their success at our
                  events.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="bg-surface py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="font-heading text-text-primary mb-16 text-center text-3xl md:text-4xl lg:text-5xl">
              Our Journey
            </h2>

            <div className="relative">
              {/* Timeline line */}
              <div className="border-border absolute top-0 bottom-0 left-8 hidden w-0.5 border-l-2 md:block" />

              <div className="space-y-12">
                {/* Timeline Item 1 */}
                <div className="relative pl-0 md:pl-20">
                  <div className="bg-primary absolute top-2 left-5 hidden h-6 w-6 rounded-full border-4 border-white md:block" />
                  <div className="border-border rounded-lg border-2 bg-white p-8">
                    <p className="text-primary mb-2 text-sm font-semibold">
                      The Beginning
                    </p>
                    <h3 className="font-heading text-text-primary mb-4 text-2xl">
                      The Idea
                    </h3>
                    <p className="text-text-secondary leading-relaxed">
                      OneBite Street started with a simple observation: our
                      community needed more spaces where people could gather,
                      discover local food, and connect with each other.
                    </p>
                  </div>
                </div>

                {/* Timeline Item 2 */}
                <div className="relative pl-0 md:pl-20">
                  <div className="bg-primary absolute top-2 left-5 hidden h-6 w-6 rounded-full border-4 border-white md:block" />
                  <div className="border-border rounded-lg border-2 bg-white p-8">
                    <p className="text-primary mb-2 text-sm font-semibold">
                      First Steps
                    </p>
                    <h3 className="font-heading text-text-primary mb-4 text-2xl">
                      Our First Festival
                    </h3>
                    <p className="text-text-secondary leading-relaxed">
                      We launched our first food festival, bringing together
                      local vendors and creating an experience that exceeded our
                      expectations. The community response was overwhelming.
                    </p>
                  </div>
                </div>

                {/* Timeline Item 3 */}
                <div className="relative pl-0 md:pl-20">
                  <div className="bg-primary absolute top-2 left-5 hidden h-6 w-6 rounded-full border-4 border-white md:block" />
                  <div className="border-border rounded-lg border-2 bg-white p-8">
                    <p className="text-primary mb-2 text-sm font-semibold">
                      Today
                    </p>
                    <h3 className="font-heading text-text-primary mb-4 text-2xl">
                      Growing Together
                    </h3>
                    <p className="text-text-secondary leading-relaxed">
                      We continue to grow and evolve, always staying true to our
                      mission of bringing communities together through
                      exceptional food festival experiences.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-text-inverse py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading mb-6 text-3xl md:text-4xl">
              Want to Work With Us?
            </h2>
            <p className="mb-8 text-lg leading-relaxed opacity-90">
              Whether you&apos;re interested in becoming a vendor, partnering on
              an event, or simply learning more about what we do—we&apos;d love
              to hear from you.
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
              <Link href="/">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-text-inverse hover:text-primary w-full border-white hover:bg-white sm:w-auto"
                >
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
