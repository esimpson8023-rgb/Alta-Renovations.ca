"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Container from "./Container";
import { NAV_LINKS } from "@/lib/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? "bg-cream/95 shadow-sm backdrop-blur-sm"
          : "bg-transparent"
      }`}
    >
      <Container>
        <nav
          aria-label="Primary"
          className="flex h-24 items-center justify-between"
        >
          <Link href="/#home" className="flex items-center" aria-label="Alta Renovations — home">
            <Image
              src="/images/logo.png"
              alt="Alta Renovations"
              width={149}
              height={120}
              priority
              className="h-16 w-auto rounded-sm sm:h-20"
            />
          </Link>

          <ul className="hidden items-center gap-10 md:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-sm font-medium uppercase tracking-wider transition-colors hover:text-accent ${
                    scrolled ? "text-charcoal" : "text-cream"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden md:block">
            <Link href="/#contact" className="btn-primary">
              Get a Free Quote
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className={`relative flex h-10 w-10 items-center justify-center rounded-sm transition-colors md:hidden ${
              scrolled || menuOpen ? "text-charcoal" : "text-cream"
            }`}
          >
            <Menu
              aria-hidden="true"
              className={`absolute left-1/2 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 transition-all duration-200 ${
                menuOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
              }`}
            />
            <X
              aria-hidden="true"
              className={`absolute left-1/2 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 transition-all duration-200 ${
                menuOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
              }`}
            />
          </button>
        </nav>
      </Container>

      <div
        className={`md:hidden ${
          menuOpen ? "max-h-[28rem]" : "max-h-0"
        } overflow-hidden bg-cream transition-[max-height] duration-300 ease-in-out`}
      >
        <Container>
          <ul className="flex flex-col gap-1 py-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={closeMenu}
                  className="block py-3 text-base font-medium uppercase tracking-wider text-charcoal transition-colors hover:text-accent"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-3">
              <Link
                href="/#contact"
                onClick={closeMenu}
                className="btn-primary w-full"
              >
                Get a Free Quote
              </Link>
            </li>
          </ul>
        </Container>
      </div>
    </header>
  );
}
