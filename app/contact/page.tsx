/* eslint-disable @next/next/no-html-link-for-pages */
// app/contact/page.tsx
"use client";

import { useState } from "react";
import Container from "@/components/layout/Container";
import Section from "@/components/ui/Section";
import { Input, Textarea } from "@/components/ui/Input";
import Button from "@/components/ui/Button";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    inquiryType: "general",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you&apos;d send this to your backend or email service
    console.log("Form submitted:", formData);
    setSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        inquiryType: "general",
      });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      {/* Hero Section */}
      <section className="from-cream to-warmth/10 relative overflow-hidden bg-linear-to-br via-white pt-32 pb-20">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-graphite animate-fade-in mb-6 text-sm tracking-widest uppercase">
              Get in Touch
            </p>
            <h1 className="font-display text-charcoal animate-slide-up mb-8 text-5xl md:text-6xl lg:text-7xl">
              Let&apos;s Create Together
            </h1>
            <p
              className="text-graphite animate-slide-up text-xl leading-relaxed md:text-2xl"
              style={{ animationDelay: "0.1s" }}
            >
              Whether you&apos;re interested in partnering, applying for
              residency, or just want to say hello—we&apos;d love to hear from
              you.
            </p>
          </div>
        </Container>
      </section>

      {/* Contact Options */}
      <Section className="bg-white">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 grid gap-8 md:grid-cols-3">
            {/* Email */}
            <div className="bg-cream border-sand hover:border-warmth rounded-sm border-2 p-8 text-center transition-colors">
              <div className="bg-warmth text-graphite mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full text-3xl">
                ✉️
              </div>
              <h3 className="font-heading mb-3 text-xl">Email Us</h3>
              <p className="text-graphite mb-4 text-sm">
                For general inquiries and partnerships
              </p>
              <a
                href="mailto:hello@onebitestreet.com"
                className="text-warmth hover:text-earth font-medium transition-colors"
              >
                hello@onebitestreet.com
              </a>
            </div>

            {/* Social */}
            <div className="bg-cream border-sand hover:border-warmth rounded-sm border-2 p-8 text-center transition-colors">
              <div className="bg-earth text-graphite mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full text-3xl">
                💬
              </div>
              <h3 className="font-heading mb-3 text-xl">Follow Us</h3>
              <p className="text-graphite mb-4 text-sm">
                Stay updated on our latest projects
              </p>
              <div className="flex justify-center gap-4">
                <a
                  href="#"
                  className="text-warmth hover:text-earth transition-colors"
                >
                  Instagram
                </a>
                <a
                  href="#"
                  className="text-warmth hover:text-earth transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="bg-cream border-sand hover:border-warmth rounded-sm border-2 p-8 text-center transition-colors">
              <div className="bg-olive text-graphite mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full text-3xl">
                📍
              </div>
              <h3 className="font-heading mb-3 text-xl">Visit Us</h3>
              <p className="text-graphite mb-4 text-sm">
                Come by for a coffee and conversation
              </p>
              <p className="text-charcoal font-medium">
                Downtown Plaza
                <br />
                City Center
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Contact Form */}
      <Section className="bg-cream">
        <div className="mx-auto max-w-4xl">
          <div className="border-sand rounded-sm border-2 bg-white p-8 md:p-12">
            <h2 className="font-heading mb-8 text-center text-3xl md:text-4xl">
              Send Us a Message
            </h2>

            {submitted ? (
              <div className="py-12 text-center">
                <div className="mb-6 text-6xl">✓</div>
                <h3 className="font-heading text-olive mb-4 text-2xl">
                  Thank You!
                </h3>
                <p className="text-graphite text-lg">
                  We&apos;ve received your message and will get back to you
                  soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Inquiry Type */}
                <div>
                  <label
                    htmlFor="inquiryType"
                    className="mb-2 block text-sm font-medium"
                  >
                    What brings you here?{" "}
                    <span className="text-black/60">*</span>
                  </label>
                  <select
                    id="inquiryType"
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleChange}
                    required
                    className="w-full rounded-sm border border-black/20 px-4 py-3 transition-colors focus:border-black focus:ring-1 focus:ring-black focus:outline-none"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="residency">
                      Creative Residency Application
                    </option>
                    <option value="consulting">Consulting Services</option>
                    <option value="vendor">
                      Vendor/Festival Participation
                    </option>
                    <option value="press">Press/Media</option>
                  </select>
                </div>

                {/* Name */}
                <Input
                  label="Your Name"
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                />

                {/* Email */}
                <Input
                  label="Email Address"
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                />

                {/* Subject */}
                <Input
                  label="Subject"
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="What's this about?"
                />

                {/* Message */}
                <Textarea
                  label="Message"
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="Tell us more about your inquiry..."
                />

                {/* Submit Button */}
                <div className="pt-4 text-center">
                  <Button type="submit" size="lg" className="w-full md:w-auto">
                    Send Message
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </Section>

      {/* Quick Links */}
      <Section className="bg-white">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-heading mb-8 text-center text-3xl md:text-4xl">
            Looking for Something Specific?
          </h2>

          <div className="grid gap-6 sm:grid-cols-2">
            {/* Residency */}
            <div className="bg-cream border-sand hover:border-warmth rounded-sm border-2 p-8 transition-colors">
              <h3 className="font-heading mb-3 text-xl">Creative Residency</h3>
              <p className="text-graphite mb-4 text-sm leading-relaxed">
                Interested in joining our creative community? Learn more about
                the residency program and application process.
              </p>
              <a
                href="/residency"
                className="text-warmth hover:text-earth inline-flex items-center gap-2 font-medium transition-colors"
              >
                View Residency Info
                <span className="inline-block transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>

            {/* Consulting */}
            <div className="bg-cream border-sand hover:border-warmth rounded-sm border-2 p-8 transition-colors">
              <h3 className="font-heading mb-3 text-xl">F&B Consulting</h3>
              <p className="text-graphite mb-4 text-sm leading-relaxed">
                Need help with your restaurant, café, or hospitality concept?
                Explore our consulting services.
              </p>
              <a
                href="/ventures/consulting"
                className="text-warmth hover:text-earth inline-flex items-center gap-2 font-medium transition-colors"
              >
                View Consulting Services
                <span className="inline-block transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>

            {/* Festivals */}
            <div className="bg-cream border-sand hover:border-warmth rounded-sm border-2 p-8 transition-colors">
              <h3 className="font-heading mb-3 text-xl">Vendor Applications</h3>
              <p className="text-graphite mb-4 text-sm leading-relaxed">
                Want to participate in one of our food festivals as a vendor?
                Check out upcoming opportunities.
              </p>
              <a
                href="/ventures/food-festivals"
                className="text-warmth hover:text-earth inline-flex items-center gap-2 font-medium transition-colors"
              >
                View Festival Info
                <span className="inline-block transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>

            {/* Partnerships */}
            <div className="bg-cream border-sand hover:border-warmth rounded-sm border-2 p-8 transition-colors">
              <h3 className="font-heading mb-3 text-xl">Partnerships</h3>
              <p className="text-graphite mb-4 text-sm leading-relaxed">
                Interested in collaborating or partnering with us on a project?
                We&apos;d love to explore opportunities.
              </p>
              <a
                href="/ventures"
                className="text-warmth hover:text-earth inline-flex items-center gap-2 font-medium transition-colors"
              >
                View Our Ventures
                <span className="inline-block transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* Map Placeholder */}
      <section className="bg-charcoal py-16">
        <Container size="xl">
          <div className="bg-graphite text-sand flex aspect-video items-center justify-center overflow-hidden rounded-sm text-xl">
            [Map Location - Downtown Plaza]
          </div>
        </Container>
      </section>
    </>
  );
}
