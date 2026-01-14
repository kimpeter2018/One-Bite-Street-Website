import Container from "@/components/layout/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import Link from "next/link";

// Sample team data - you can move this to lib/data/team.ts later
const teamMembers = [
  {
    id: "1",
    name: "Sarah Chen",
    role: "Co-Founder & Creative Director",
    bio: "Sarah brings 10+ years of hospitality experience and a passion for building community-driven spaces. She believes that the best experiences happen when people come together authentically.",
    image: "/images/team/sarah.jpg",
    expertise: [
      "Hospitality Strategy",
      "Brand Development",
      "Community Building",
    ],
    social: {
      linkedin: "#",
      instagram: "#",
    },
  },
  {
    id: "2",
    name: "Marcus Rivera",
    role: "Co-Founder & Culinary Lead",
    bio: "A chef who found his calling in creating sustainable food systems. Marcus oversees all culinary ventures and mentors creators in our residency program.",
    image: "/images/team/marcus.jpg",
    expertise: [
      "Culinary Arts",
      "Menu Design",
      "Food Systems",
      "Vendor Relations",
    ],
    social: {
      linkedin: "#",
      instagram: "#",
    },
  },
  {
    id: "3",
    name: "Aisha Patel",
    role: "Operations Director",
    bio: "The operational backbone of One Bite Street. Aisha ensures everything runs smoothly, from festival logistics to day-to-day hub management.",
    image: "/images/team/aisha.jpg",
    expertise: ["Operations", "Event Management", "Systems Design"],
    social: {
      linkedin: "#",
    },
  },
  {
    id: "4",
    name: "Jordan Kim",
    role: "Community Manager",
    bio: "Jordan creates the glue that holds our community together. They organize events, support residents, and ensure everyone feels at home.",
    image: "/images/team/jordan.jpg",
    expertise: [
      "Community Engagement",
      "Event Programming",
      "Resident Support",
    ],
    social: {
      instagram: "#",
    },
  },
  {
    id: "5",
    name: "Elena Rodriguez",
    role: "Design & Brand Lead",
    bio: "Elena shapes the visual identity of everything we create, from festival spaces to café interiors. She believes design should be warm, human, and inclusive.",
    image: "/images/team/elena.jpg",
    expertise: [
      "Graphic Design",
      "Interior Design",
      "Brand Identity",
      "Visual Storytelling",
    ],
    social: {
      linkedin: "#",
      website: "#",
    },
  },
  {
    id: "6",
    name: "David Okonkwo",
    role: "Consulting Lead",
    bio: "David works with external partners on F&B consulting projects, bringing decades of restaurant experience and a commitment to sustainable hospitality.",
    image: "/images/team/david.jpg",
    expertise: [
      "Restaurant Consulting",
      "Menu Engineering",
      "Staff Training",
      "Business Strategy",
    ],
    social: {
      linkedin: "#",
    },
  },
];

export default function TeamPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="from-cream via-sand to-olive/20 relative overflow-hidden bg-linear-to-br pt-32 pb-20">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <Link
              href="/about"
              className="animate-fade-in text-warmth hover:text-earth mb-8 inline-block text-sm font-medium transition-colors"
            >
              ← Back to About
            </Link>

            <p className="animate-fade-in text-graphite mb-6 text-sm tracking-widest uppercase">
              The People Behind the Vision
            </p>
            <h1 className="animate-slide-up font-display text-charcoal mb-8 text-5xl md:text-6xl lg:text-7xl">
              Meet Our Team
            </h1>
            <p
              className="animate-slide-up text-graphite text-xl leading-relaxed md:text-2xl"
              style={{ animationDelay: "0.1s" }}
            >
              Wed&apos;re a diverse group of hospitality professionals,
              creatives, and community builders united by a shared belief: that
              humanity thrives when we create together.
            </p>
          </div>
        </Container>
      </section>

      {/* Team Grid */}
      <Section className="bg-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member, index) => (
              <div
                key={member.id}
                className="group"
                style={{
                  animation: "fade-in 0.6s ease-out forwards",
                  animationDelay: `${index * 0.1}s`,
                  opacity: 0,
                }}
              >
                <div className="border-sand bg-cream hover:border-warmth flex h-full flex-col overflow-hidden rounded-sm border-2 transition-all duration-300 hover:shadow-lg">
                  {/* Photo */}
                  <div className="bg-graphite relative aspect-square overflow-hidden">
                    <div className="text-sand flex h-full w-full items-center justify-center text-8xl transition-transform duration-300 group-hover:scale-105">
                      👤
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex grow flex-col bg-white p-6">
                    <h3 className="font-heading group-hover:text-warmth mb-1 text-2xl transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-warmth mb-4 text-sm font-semibold tracking-wide uppercase">
                      {member.role}
                    </p>

                    <p className="text-graphite mb-6 grow text-sm leading-relaxed">
                      {member.bio}
                    </p>

                    {/* Expertise Tags */}
                    <div className="mb-6 flex flex-wrap gap-2">
                      {member.expertise.map((skill, idx) => (
                        <span
                          key={idx}
                          className="border-sand bg-cream text-charcoal rounded-full border px-3 py-1 text-xs"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Social Links */}
                    <div className="border-sand flex gap-4 border-t pt-4">
                      {member.social?.linkedin && (
                        <a
                          href={member.social.linkedin}
                          className="text-warmth hover:text-earth text-sm transition-colors"
                        >
                          LinkedIn
                        </a>
                      )}
                      {member.social?.instagram && (
                        <a
                          href={member.social.instagram}
                          className="text-warmth hover:text-earth text-sm transition-colors"
                        >
                          Instagram
                        </a>
                      )}
                      {member.social?.website && (
                        <a
                          href={member.social.website}
                          className="text-warmth hover:text-earth text-sm transition-colors"
                        >
                          Website
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Values Section */}
      <Section className="bg-cream">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-heading mb-12 text-center text-3xl md:text-4xl">
            What Unites Us
          </h2>

          <div className="space-y-8">
            <div className="border-sand rounded-sm border-2 bg-white p-8">
              <div className="mb-4 flex items-center gap-4">
                <div className="bg-warmth flex h-12 w-12 items-center justify-center rounded-full text-2xl text-white">
                  🤝
                </div>
                <h3 className="font-heading text-xl">Community First</h3>
              </div>
              <p className="text-graphite leading-relaxed">
                Every member of our team believes in the power of community.
                Wed&apos;re not just colleagues—wed&apos;re a chosen family
                working toward a shared vision of more human hospitality.
              </p>
            </div>

            <div className="border-sand rounded-sm border-2 bg-white p-8">
              <div className="mb-4 flex items-center gap-4">
                <div className="bg-earth flex h-12 w-12 items-center justify-center rounded-full text-2xl text-white">
                  🌱
                </div>
                <h3 className="font-heading text-xl">Sustainable Growth</h3>
              </div>
              <p className="text-graphite leading-relaxed">
                Wed&apos;re building for the long term, not quick wins. Our team
                values thoughtful, sustainable growth that benefits everyone in
                the ecosystem.
              </p>
            </div>

            <div className="border-sand rounded-sm border-2 bg-white p-8">
              <div className="mb-4 flex items-center gap-4">
                <div className="bg-olive flex h-12 w-12 items-center justify-center rounded-full text-2xl text-white">
                  ✨
                </div>
                <h3 className="font-heading text-xl">Creative Excellence</h3>
              </div>
              <p className="text-graphite leading-relaxed">
                We push each other to do our best work while maintaining balance
                and joy. Excellence doesnd&apos;t mean perfection—it means care,
                intention, and continuous learning.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Join the Team */}
      <Section className="bg-charcoal text-white">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading mb-6 text-3xl md:text-4xl">
            Want to Join Us?
          </h2>
          <p className="text-sand mb-8 text-lg leading-relaxed">
            Wed&apos;re always looking for talented, passionate people who share
            our vision. Whether youd&apos;re interested in hospitality, creative
            work, or operations—wed&apos;d love to hear from you.
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
            <Link href="/residency">
              <Button
                size="lg"
                variant="outline"
                className="hover:text-warmth w-full border-white text-white hover:bg-white sm:w-auto"
              >
                Apply for Residency
              </Button>
            </Link>
          </div>
        </div>
      </Section>

      {/* Back to About */}
      <Section className="bg-white py-16">
        <div className="text-center">
          <Link
            href="/about"
            className="text-warmth hover:text-earth inline-flex items-center gap-2 transition-colors"
          >
            <span className="inline-block transition-transform group-hover:-translate-x-1">
              ←
            </span>
            Back to About Page
          </Link>
        </div>
      </Section>
    </>
  );
}
