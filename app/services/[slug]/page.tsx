import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import ServiceCard from "@/components/ServiceCard";
import ProjectCard from "@/components/ProjectCard";
import PlaceholderImage from "@/components/PlaceholderImage";
import CTA from "@/components/CTA";
import { SITE } from "@/lib/constants";
import { SERVICES, PROJECTS } from "@/lib/data";

export function generateStaticParams() {
  return SERVICES.map((service) => ({ slug: service.slug }));
}

function getService(slug: string) {
  return SERVICES.find((service) => service.slug === slug);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};

  // `title` here is wrapped by the root layout's "%s | Alta Renovations"
  // template automatically — do not append the suffix again here.
  // openGraph/twitter titles are NOT auto-templated, so those need the
  // full explicit string.
  const fullTitle = `${service.title} | Alta Renovations`;
  const url = `${SITE.url}/services/${service.slug}`;

  return {
    title: service.title,
    description: service.longDescription,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description: service.description,
      url,
      siteName: SITE.name,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: service.description,
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    notFound();
  }

  const Icon = service.icon;
  const relatedType = service.title.replace(/Renovations$/, "Renovation");
  const relatedProjects = PROJECTS.filter(
    (project) => project.type === relatedType
  );
  const otherServices = SERVICES.filter((s) => s.slug !== service.slug);

  return (
    <>
      <Navbar />
      <main>
        <section className="bg-charcoal pb-16 pt-32 sm:pb-20 sm:pt-40">
          <Container>
            <Link
              href="/#services"
              className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-cream/60 transition-colors hover:text-accent-light"
            >
              <ArrowLeft aria-hidden="true" className="h-3.5 w-3.5" />
              Back to Services
            </Link>
            <div className="mt-6 flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-accent/30 bg-accent/5">
                <Icon
                  aria-hidden="true"
                  strokeWidth={1.5}
                  className="h-5 w-5 text-accent-light"
                />
              </div>
              <span className="eyebrow text-accent-light">Services</span>
            </div>
            <h1 className="mt-4 max-w-2xl font-display text-4xl text-balance text-cream sm:text-5xl lg:text-6xl">
              {service.title}
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-cream/75">
              {service.description}
            </p>
          </Container>
        </section>

        <section className="bg-cream py-20 sm:py-28">
          <Container>
            <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-2 lg:gap-20">
              <Reveal>
                <h2 className="font-display text-2xl text-charcoal sm:text-3xl">
                  What This Involves
                </h2>
                <p className="mt-5 text-base leading-relaxed text-stone">
                  {service.longDescription}
                </p>
                <ul className="mt-8 flex flex-col gap-3">
                  {service.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-3">
                      <CheckCircle2
                        aria-hidden="true"
                        className="mt-0.5 h-5 w-5 shrink-0 text-accent"
                      />
                      <span className="text-sm leading-relaxed text-charcoal/90">
                        {highlight}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link href="/#contact" className="btn-primary mt-8 inline-flex">
                  Request a Free Quote
                </Link>
              </Reveal>

              <Reveal
                delay={150}
                className="relative aspect-[4/5] w-full overflow-hidden rounded-sm"
              >
                {service.image ? (
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                ) : (
                  <PlaceholderImage
                    tone={service.tone}
                    icon={Icon}
                    label={service.title}
                    className="h-full w-full"
                  />
                )}
              </Reveal>
            </div>
          </Container>
        </section>

        {relatedProjects.length > 0 && (
          <section className="bg-cream-100 py-20 sm:py-28">
            <Container>
              <Reveal>
                <span className="eyebrow">Recent Work</span>
                <h2 className="mt-4 font-display text-3xl text-charcoal sm:text-4xl">
                  {service.title} Projects
                </h2>
              </Reveal>
              <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                {relatedProjects.map((project, index) => (
                  <Reveal key={project.slug} delay={index * 80}>
                    <ProjectCard project={project} />
                  </Reveal>
                ))}
              </div>
            </Container>
          </section>
        )}

        <section className="bg-cream py-20 sm:py-28">
          <Container>
            <Reveal>
              <span className="eyebrow">Explore More</span>
              <h2 className="mt-4 font-display text-3xl text-charcoal sm:text-4xl">
                Other Services
              </h2>
            </Reveal>
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              {otherServices.map((other, index) => (
                <Reveal key={other.slug} delay={index * 80}>
                  <ServiceCard service={other} />
                </Reveal>
              ))}
            </div>
          </Container>
        </section>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
