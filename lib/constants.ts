/**
 * Site-wide placeholder content.
 * Replace every value below with Alta Renovations' real business information
 * before launch. See README.md for the full placeholder checklist.
 */

export const SITE = {
  name: "Alta Renovations",
  tagline: "Quality renovations. Thoughtfully built.",
  url: "https://altarenovations.ca",
  description:
    "Alta Renovations delivers high-quality residential renovations designed to make your home more functional, comfortable, and beautiful.",
};

export const CONTACT = {
  phone: "(289) 834-1014",
  phoneHref: "tel:+12898341014",
  email: "Alta.contracting.reno@gmail.com",
  serviceArea: "Waterdown, Ontario and the Greater Waterdown Area",
  addressLine: "123 Main Street, Waterdown, ON",
  hours: "Monday – Friday, 8:00 AM – 5:00 PM",
};

export const SOCIAL = {
  instagram: "https://www.instagram.com/alta.renovations.contracting/",
  facebook: "https://facebook.com/altarenovations",
};

/**
 * Homepage-relative anchors ("/#services" not "#services") so these work
 * correctly from any page — a bare "#services" only works while already
 * on the homepage; from a subpage like /services/kitchen-renovations it
 * would silently do nothing.
 */
export const NAV_LINKS = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Projects", href: "/#projects" },
  { label: "Contact", href: "/#contact" },
];
