import { projects } from "@/lib/data/projects";
import { notFound } from "next/navigation";
import Container from "@/components/layout/Container";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import Link from "next/link";

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  // Get related projects (same venture type)
  const relatedProjects = projects
    .filter(
      (p) =>
        p.id !== project.id &&
        p.ventureType.some((vt) => project.ventureType.includes(vt)),
    )
    .slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <section className="from-warmth/5 via-cream to-sand relative overflow-hidden bg-linear-to-br pt-32 pb-20">
        <Container>
          <div className="mx-auto max-w-5xl">
            {/* Breadcrumbs */}
            <div className="animate-fade-in mb-8">
              <Link
                href="/projects"
                className="text-warmth hover:text-earth text-sm font-medium transition-colors"
              >
                ← Back to Projects
              </Link>
            </div>

            {/* Project Meta */}
            <div className="animate-slide-up mb-6 flex flex-wrap gap-3">
              {project.featured && (
                <span className="bg-rust rounded-full px-4 py-2 text-xs font-semibold tracking-wide text-white uppercase">
                  Featured Project
                </span>
              )}
              <span
                className={`rounded-full px-4 py-2 text-xs font-semibold tracking-wide uppercase ${
                  project.status === "completed"
                    ? "bg-olive text-white"
                    : project.status === "ongoing"
                      ? "bg-warmth text-white"
                      : "bg-sand text-charcoal"
                }`}
              >
                {project.status}
              </span>
              {project.ventureType.map((vt, index) => (
                <span
                  key={index}
                  className="text-charcoal border-sand rounded-full border-2 bg-white px-4 py-2 text-xs font-semibold tracking-wide uppercase"
                >
                  {vt.replace("-", " ")}
                </span>
              ))}
            </div>

            {/* Title */}
            <h1
              className="font-display text-charcoal animate-slide-up mb-4 text-4xl md:text-5xl lg:text-6xl"
              style={{ animationDelay: "0.1s" }}
            >
              {project.title}
            </h1>

            {/* Subtitle */}
            {project.subtitle && (
              <p
                className="text-earth font-heading animate-slide-up mb-6 text-xl md:text-2xl"
                style={{ animationDelay: "0.2s" }}
              >
                {project.subtitle}
              </p>
            )}

            {/* Meta Info */}
            <div
              className="text-graphite animate-slide-up flex flex-wrap gap-6 text-sm"
              style={{ animationDelay: "0.3s" }}
            >
              <div>
                <span className="font-semibold">Location:</span>{" "}
                {project.location}
              </div>
              <div>
                <span className="font-semibold">Year:</span> {project.year}
              </div>
              <div>
                <span className="font-semibold">Status:</span>{" "}
                <span className="capitalize">{project.status}</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Hero Image */}
      <section className="bg-charcoal py-16">
        <Container size="xl">
          <div className="bg-graphite text-sand flex aspect-video items-center justify-center overflow-hidden rounded-sm text-8xl">
            {project.ventureType[0] === "food-festivals" && "🎪"}
            {project.ventureType[0] === "cafe-restaurant" && "☕"}
            {project.ventureType[0] === "hotel" && "🏨"}
            {project.ventureType[0] === "creative-hub" && "🌱"}
            {project.ventureType[0] === "consulting" && "🤝"}
          </div>
        </Container>
      </section>

      {/* Overview */}
      <Section className="bg-white">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-heading mb-8 text-3xl md:text-4xl">
            Project Overview
          </h2>
          <p className="text-graphite text-xl leading-relaxed">
            {project.description}
          </p>
        </div>
      </Section>

      {/* Challenge, Solution, Outcome */}
      {(project.challenge || project.solution || project.outcome) && (
        <Section className="bg-cream">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-8 md:grid-cols-3">
              {/* Challenge */}
              {project.challenge && (
                <div className="border-sand rounded-sm border-2 bg-white p-8">
                  <div className="bg-warmth mb-6 flex h-12 w-12 items-center justify-center rounded-full text-2xl text-white">
                    🎯
                  </div>
                  <h3 className="font-heading text-warmth mb-4 text-2xl">
                    The Challenge
                  </h3>
                  <p className="text-graphite leading-relaxed">
                    {project.challenge}
                  </p>
                </div>
              )}

              {/* Solution */}
              {project.solution && (
                <div className="border-sand rounded-sm border-2 bg-white p-8">
                  <div className="bg-earth mb-6 flex h-12 w-12 items-center justify-center rounded-full text-2xl text-white">
                    💡
                  </div>
                  <h3 className="font-heading text-earth mb-4 text-2xl">
                    Our Approach
                  </h3>
                  <p className="text-graphite leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              )}

              {/* Outcome */}
              {project.outcome && (
                <div className="border-sand rounded-sm border-2 bg-white p-8">
                  <div className="bg-olive mb-6 flex h-12 w-12 items-center justify-center rounded-full text-2xl text-white">
                    ✨
                  </div>
                  <h3 className="font-heading text-olive mb-4 text-2xl">
                    The Results
                  </h3>
                  <p className="text-graphite leading-relaxed">
                    {project.outcome}
                  </p>
                </div>
              )}
            </div>
          </div>
        </Section>
      )}

      {/* Gallery (if available) */}
      {project.gallery && project.gallery.length > 0 && (
        <Section className="bg-white">
          <div className="mx-auto max-w-6xl">
            <h2 className="font-heading mb-12 text-center text-3xl md:text-4xl">
              Project Gallery
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {project.gallery.map((image, index) => (
                <div
                  key={index}
                  className="bg-graphite text-sand flex aspect-4/3 items-center justify-center overflow-hidden rounded-sm"
                >
                  [Gallery Image {index + 1}]
                </div>
              ))}
            </div>
          </div>
        </Section>
      )}

      {/* Tags */}
      {project.tags && project.tags.length > 0 && (
        <Section className="bg-cream py-16">
          <div className="mx-auto max-w-4xl">
            <h3 className="font-heading mb-6 text-center text-xl">
              Project Tags
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="text-charcoal border-sand hover:border-warmth rounded-sm border bg-white px-4 py-2 text-sm transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </Section>
      )}

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <Section className="bg-white">
          <div className="mx-auto max-w-6xl">
            <h2 className="font-heading mb-12 text-center text-3xl md:text-4xl">
              Related Projects
            </h2>

            <div className="grid gap-8 md:grid-cols-3">
              {relatedProjects.map((relProject) => (
                <Link
                  key={relProject.id}
                  href={`/projects/${relProject.slug}`}
                  className="group"
                >
                  <div className="bg-cream border-sand hover:border-warmth overflow-hidden rounded-sm border-2 transition-all duration-300 hover:shadow-lg">
                    <div className="bg-graphite text-sand flex aspect-4/3 items-center justify-center text-5xl transition-transform duration-300 group-hover:scale-110">
                      {relProject.ventureType[0] === "food-festivals" && "🎪"}
                      {relProject.ventureType[0] === "cafe-restaurant" && "☕"}
                      {relProject.ventureType[0] === "hotel" && "🏨"}
                      {relProject.ventureType[0] === "creative-hub" && "🌱"}
                      {relProject.ventureType[0] === "consulting" && "🤝"}
                    </div>
                    <div className="p-6">
                      <p className="text-warmth mb-2 text-xs tracking-widest uppercase">
                        {relProject.ventureType[0].replace("-", " ")}
                      </p>
                      <h3 className="font-heading group-hover:text-warmth mb-2 text-lg transition-colors">
                        {relProject.title}
                      </h3>
                      <p className="text-graphite line-clamp-2 text-sm">
                        {relProject.subtitle || relProject.description}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link href="/projects">
                <Button variant="outline" size="lg">
                  View All Projects
                </Button>
              </Link>
            </div>
          </div>
        </Section>
      )}

      {/* CTA */}
      <Section className="bg-warmth text-white">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading mb-6 text-3xl md:text-4xl">
            Have a Project in Mind?
          </h2>
          <p className="mb-8 text-lg leading-relaxed opacity-90">
            Let&apos;s collaborate to create something meaningful for your
            community. Whether it&apos;s an event, a space, or a complete
            concept—we&apos;re here to help.
          </p>
          <Link href="/contact">
            <Button size="lg" variant="secondary">
              Let&apos;s Talk
            </Button>
          </Link>
        </div>
      </Section>
    </>
  );
}
