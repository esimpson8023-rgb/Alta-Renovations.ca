import Image from "next/image";
import { ChevronDown } from "lucide-react";
import Container from "./Container";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero-kitchen.jpg"
          alt="Newly renovated kitchen with quartz countertops and custom white cabinetry"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_25%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/60 to-charcoal/30" />
      </div>

      <Container className="pt-24">
        <div className="max-w-3xl animate-fadeUp opacity-0 [animation-delay:150ms]">
          <span className="eyebrow text-accent-light">
            Residential Renovations
          </span>
          <h1 className="mt-5 font-display text-4xl leading-[1.1] text-balance text-cream sm:text-6xl lg:text-7xl">
            Transform Your Home.
            <br />
            Built Around You.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream/80 sm:text-xl">
            Alta Renovations delivers high-quality residential renovations
            designed to make your home more functional, comfortable, and
            beautiful.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a href="#contact" className="btn-primary">
              Get a Free Quote
            </a>
            <a
              href="#projects"
              className="btn-light border border-cream/20"
            >
              View Our Work
            </a>
          </div>
        </div>
      </Container>

      <a
        href="#trust"
        aria-label="Scroll to explore more"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 animate-bounceSlow flex-col items-center gap-2 text-cream/40 transition-colors hover:text-cream sm:flex"
      >
        <span className="text-[10px] font-semibold uppercase tracking-[0.3em]">
          Scroll
        </span>
        <ChevronDown aria-hidden="true" className="h-5 w-5" />
      </a>
    </section>
  );
}
