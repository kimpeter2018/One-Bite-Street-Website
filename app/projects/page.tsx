"use client";

import { useState } from "react";
import Container from "@/components/layout/Container";
import Section from "@/components/ui/Section";
import Link from "next/link";
import { projects } from "@/lib/data/projects";
import type { VentureType } from "@/types/ventures";

export default function ProjectsPage() {
  const [filter, setFilter] = useState<VentureType | "all">("all");

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((p) => p.ventureType.includes(filter));

  const filterOptions: { value: VentureType | "all"; label: string }[] = [
    { value: "all", label: "All Projects" },
    { value: "food-festivals", label: "Food Festivals" },
    { value: "cafe-restaurant", label: "Café & Restaurant" },
    { value: "hotel", label: "Hotel" },
    { value: "creative-hub", label: "Creative Hub" },
    { value: "consulting", label: "Consulting" },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="from-cream to-warmth/10 relative overflow-hidden bg-linear-to-br via-white pt-32 pb-20">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-graphite animate-fade-in mb-6 text-sm tracking-widest uppercase">
              Our Work
            </p>
            <h1 className="font-display text-charcoal animate-slide-up mb-8 text-5xl md:text-6xl lg:text-7xl">
              Projects & Case Studies
            </h1>
            <p
              className="text-graphite animate-slide-up text-xl leading-relaxed md:text-2xl"
              style={{ animationDelay: "0.1s" }}
            >
              A living archive of how we&apos;re bringing communities together
              through food, hospitality, and creative spaces.
            </p>
          </div>
        </Container>
      </section>

      {/* Filter Bar */}
      <Section className="bg-white py-12">
        <Container>
          <div className="flex flex-wrap justify-center gap-3">
            {filterOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => setFilter(option.value)}
                className={`rounded-sm px-6 py-3 font-medium transition-all duration-200 ${
                  filter === option.value
                    ? "bg-warmth text-graphite shadow-md"
                    : "bg-cream text-charcoal hover:bg-sand border-sand border-2"
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </Container>
      </Section>

      {/* Projects Grid */}
      <Section className="bg-cream">
        <Container>
          {filteredProjects.length === 0 ? (
            <div className="py-20 text-center">
              <p className="text-graphite text-xl">
                No projects found in this category yet.
              </p>
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredProjects.map((project, index) => (
                <Link
                  key={project.id}
                  href={`/projects/${project.slug}`}
                  className="group"
                  style={{
                    animation: "fade-in 0.6s ease-out forwards",
                    animationDelay: `${index * 0.05}s`,
                    opacity: 0,
                  }}
                >
                  <div className="border-sand hover:border-warmth flex h-full flex-col overflow-hidden rounded-sm border-2 bg-white transition-all duration-300 hover:shadow-xl">
                    {/* Image */}
                    <div className="bg-graphite relative aspect-4/3 overflow-hidden">
                      <div className="from-warmth/20 to-earth/20 text-graphite absolute inset-0 flex items-center justify-center bg-linear-to-br text-6xl transition-transform duration-500 group-hover:scale-110">
                        {project.ventureType[0] === "food-festivals" && "🎪"}
                        {project.ventureType[0] === "cafe-restaurant" && "☕"}
                        {project.ventureType[0] === "hotel" && "🏨"}
                        {project.ventureType[0] === "creative-hub" && "🌱"}
                        {project.ventureType[0] === "consulting" && "🤝"}
                      </div>

                      {/* Status Badge */}
                      <div className="absolute top-4 right-4">
                        <span
                          className={`rounded-full px-3 py-1 text-xs font-semibold tracking-wide uppercase ${
                            project.status === "completed"
                              ? "bg-olive/90 text-graphite"
                              : project.status === "ongoing"
                                ? "bg-warmth/90 text-graphite"
                                : "bg-sand/90 text-charcoal"
                          }`}
                        >
                          {project.status}
                        </span>
                      </div>

                      {/* Featured Badge */}
                      {project.featured && (
                        <div className="absolute top-4 left-4">
                          <span className="bg-rust/90 text-graphite rounded-full px-3 py-1 text-xs font-semibold tracking-wide uppercase">
                            Featured
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex grow flex-col p-6">
                      <div className="mb-3">
                        <span className="text-warmth text-xs font-semibold tracking-widest uppercase">
                          {project.ventureType
                            .map((vt) => vt.replace("-", " "))
                            .join(" • ")}
                        </span>
                      </div>

                      <h3 className="font-heading group-hover:text-warmth mb-2 text-xl transition-colors">
                        {project.title}
                      </h3>

                      {project.subtitle && (
                        <p className="text-graphite mb-4 text-sm">
                          {project.subtitle}
                        </p>
                      )}

                      <p className="text-graphite mb-4 line-clamp-3 grow text-sm leading-relaxed">
                        {project.description}
                      </p>

                      <div className="border-sand flex items-center justify-between border-t pt-4">
                        <div className="text-graphite text-xs">
                          <span className="font-semibold">
                            {project.location}
                          </span>
                          <span className="mx-2">•</span>
                          <span>{project.year}</span>
                        </div>

                        <span className="text-warmth flex items-center gap-2 text-sm font-medium transition-all group-hover:gap-3">
                          View
                          <span className="inline-block transition-transform group-hover:translate-x-1">
                            →
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </Container>
      </Section>

      {/* Stats Section */}
      <Section className="bg-charcoal text-graphite">
        <Container>
          <h2 className="font-heading mb-12 text-center text-3xl md:text-4xl">
            Impact by the Numbers
          </h2>

          <div className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-2 md:grid-cols-4">
            <div className="text-center">
              <div className="font-display text-warmth mb-3 text-5xl md:text-6xl">
                {projects.length}
              </div>
              <p className="text-sand">Total Projects</p>
            </div>

            <div className="text-center">
              <div className="font-display text-earth mb-3 text-5xl md:text-6xl">
                {projects.filter((p) => p.status === "completed").length}
              </div>
              <p className="text-sand">Completed</p>
            </div>

            <div className="text-center">
              <div className="font-display text-olive mb-3 text-5xl md:text-6xl">
                {projects.filter((p) => p.status === "ongoing").length}
              </div>
              <p className="text-sand">Ongoing</p>
            </div>

            <div className="text-center">
              <div className="font-display text-rust mb-3 text-5xl md:text-6xl">
                {projects.filter((p) => p.featured).length}
              </div>
              <p className="text-sand">Featured</p>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="bg-white">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading mb-6 text-3xl md:text-4xl">
            Want to Work with Us?
          </h2>
          <p className="text-graphite mb-8 text-lg leading-relaxed">
            Whether you have a project in mind, want to partner on an event, or
            are interested in consulting services—let&apos;s create something
            meaningful together.
          </p>
          <Link href="/contact">
            <button className="focus:ring-warmth bg-warmth hover:bg-earth text-graphite inline-flex items-center justify-center rounded-sm px-8 py-4 text-lg font-medium shadow-sm transition-all duration-200 focus:ring-2 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50">
              Get in Touch
            </button>
          </Link>
        </div>
      </Section>
    </>
  );
}
