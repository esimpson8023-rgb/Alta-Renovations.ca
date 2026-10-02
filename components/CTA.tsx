import Image from "next/image";
import Link from "next/link";
import Container from "./Container";
import Reveal from "./Reveal";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-charcoal py-24 sm:py-32">
      <div className="absolute inset-0">
        <Image
          src="/images/cta-bathroom-skylight.jpg"
          alt="Bathroom renovation with skylight and custom glass shower"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/80" />
      </div>
      <Container className="relative">
        <Reveal className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
          <h2 className="font-display text-3xl text-balance text-cream sm:text-4xl lg:text-5xl">
            Ready to Transform Your Home?
          </h2>
          <p className="max-w-xl text-base leading-relaxed text-cream/75 sm:text-lg">
            Let&apos;s talk about your renovation project. Tell us what
            you&apos;re planning and we&apos;ll help you take the next step.
          </p>
          <Link href="/#contact" className="btn-primary mt-2">
            Request a Free Quote
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
