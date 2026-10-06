import Image from "next/image";
import Link from "next/link";
import { Instagram, Facebook } from "lucide-react";
import Container from "./Container";
import { NAV_LINKS, CONTACT, SOCIAL, SITE } from "@/lib/constants";
import { SERVICES } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-charcoal pt-16 text-cream/80">
      <Container>
        <div className="grid grid-cols-1 gap-12 border-b border-cream/10 pb-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Image
              src="/images/logo.png"
              alt="Alta Renovations"
              width={149}
              height={120}
              className="h-16 w-auto rounded-sm"
            />
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-cream/60">
              &ldquo;{SITE.tagline}&rdquo;
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={SOCIAL.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Alta Renovations on Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-cream/15 transition-colors hover:border-accent hover:text-accent"
              >
                <Instagram className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href={SOCIAL.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Alta Renovations on Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-cream/15 transition-colors hover:border-accent hover:text-accent"
              >
                <Facebook className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-cream/50">
              Navigation
            </h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-cream/70 transition-colors hover:text-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-cream/50">
              Services
            </h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              {SERVICES.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-sm text-cream/70 transition-colors hover:text-accent"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-cream/50">
              Contact
            </h3>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm text-cream/70">
              <li>{CONTACT.phone}</li>
              <li>{CONTACT.email}</li>
              <li>{CONTACT.serviceArea}</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center gap-2 py-8 text-center text-xs text-cream/50 sm:flex-row sm:justify-between sm:text-left">
          <p>&copy; 2026 Alta Renovations. All rights reserved.</p>
          <p>Website by Alta Renovations</p>
        </div>
      </Container>
    </footer>
  );
}
