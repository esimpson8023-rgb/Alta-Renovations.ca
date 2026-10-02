import {
  ChefHat,
  Bath,
  Layers,
  Home as HomeIcon,
  PaintRoller,
  SlidersHorizontal,
  Gem,
  Compass,
  PhoneCall,
  Search,
  type LucideIcon,
} from "lucide-react";

export type ImageTone = "charcoal" | "stone" | "accent" | "cream";

export interface ServiceItem {
  slug: string;
  title: string;
  description: string;
  /** Longer, substantive copy for the service's own detail page. */
  longDescription: string;
  /** Typical scope items shown as a checklist on the detail page. */
  highlights: string[];
  icon: LucideIcon;
  tone: ImageTone;
  /** Path under /public to a real photo. Falls back to PlaceholderImage when unset. */
  image?: string;
}

export const SERVICES: ServiceItem[] = [
  {
    slug: "kitchen-renovations",
    title: "Kitchen Renovations",
    description:
      "Modern, functional kitchens designed around the way you live.",
    longDescription:
      "Your kitchen carries more daily use than almost any other room in the house — it's where mornings start, meals come together, and people naturally gather. A kitchen renovation looks at how your household actually moves through the space and reworks the layout, storage, and finishes around that, rather than just swapping in new cabinets.",
    highlights: [
      "Custom cabinetry and storage layouts",
      "Countertop, backsplash, and surface selection",
      "Lighting, electrical, and plumbing updates",
      "Flooring and finish coordination",
      "Island and workflow planning",
    ],
    icon: ChefHat,
    tone: "charcoal",
    image: "/images/kitchen-open-concept.jpg",
  },
  {
    slug: "bathroom-renovations",
    title: "Bathroom Renovations",
    description: "Beautiful and practical bathroom transformations.",
    longDescription:
      "Bathrooms combine tight tolerances with a lot of moving parts — plumbing, ventilation, waterproofing, and finishes all have to come together correctly. We plan the layout and fixtures around how you actually use the space, whether that's a busy family bathroom or a quieter primary ensuite.",
    highlights: [
      "Showers, tubs, and custom tile work",
      "Vanities, lighting, and storage",
      "Plumbing and ventilation updates",
      "Waterproofing and floor heating options",
      "Fixture and finish selection",
    ],
    icon: Bath,
    tone: "stone",
    image: "/images/bathroom-shower.jpg",
  },
  {
    slug: "basement-renovations",
    title: "Basement Renovations",
    description:
      "Turn unused basement space into something your family can actually use.",
    longDescription:
      "An unfinished or dated basement is often the most underused space in a home. Turning it into a usable room — a family space, home gym, office, or entertainment area — means addressing moisture, ceiling height, and layout constraints specific to below-grade construction, then building a space that fits how you'll actually use it.",
    highlights: [
      "Framing, insulation, and moisture management",
      "Flooring suited to below-grade spaces",
      "Built-ins: wet bars, media walls, storage",
      "Egress, lighting, and electrical planning",
      "Layout designed around how you'll use the room",
    ],
    icon: Layers,
    tone: "accent",
    image: "/images/basement-pool-table.jpg",
  },
  {
    slug: "whole-home-renovations",
    title: "Whole-Home Renovations",
    description: "Complete transformations that bring your vision to life.",
    longDescription:
      "Some projects touch nearly every room — a full renovation coordinated as one project instead of a series of disconnected updates. We sequence the work so rooms flow into each other visually and functionally, keep the schedule organized across trades, and keep you informed as the scope moves through the house.",
    highlights: [
      "Coordinated scope across multiple rooms",
      "Consistent design language room to room",
      "Scheduling and trade coordination",
      "Structural, electrical, and plumbing updates as needed",
      "A single point of contact for the whole project",
    ],
    icon: HomeIcon,
    tone: "charcoal",
    image: "/images/living-room-fireplace.jpg",
  },
  {
    slug: "interior-renovations",
    title: "Interior Renovations",
    description:
      "Walls, flooring, trim, painting, and other interior improvements.",
    longDescription:
      "Not every project needs to be a full gut renovation. Interior updates — walls, flooring, trim, paint, lighting — can meaningfully change how a space feels without a complete teardown. We help identify which updates will have the most impact for your space and budget.",
    highlights: [
      "Flooring replacement and refinishing",
      "Trim, millwork, and accent walls",
      "Paint and finish updates",
      "Lighting and electrical refreshes",
      "Wall removal or reconfiguration",
    ],
    icon: PaintRoller,
    tone: "stone",
    image: "/images/about-accent-wall.jpg",
  },
  {
    slug: "custom-renovations",
    title: "Custom Renovations",
    description: "Renovation solutions tailored specifically to your home.",
    longDescription:
      "Some projects don't fit a standard category — a built-in feature, an unusual layout, or a specific idea you haven't seen done elsewhere. Custom work starts with your vision and figures out how to build it, balancing what you want with what the space and budget allow.",
    highlights: [
      "One-off builds: bars, shelving, feature walls",
      "Non-standard layouts and room conversions",
      "Material and finish sourcing for specific looks",
      "Collaborative design development",
      "Built around a vision you bring to us",
    ],
    icon: SlidersHorizontal,
    tone: "accent",
    image: "/images/basement-bar.jpg",
  },
];

export interface ProjectItem {
  slug: string;
  name: string;
  type: string;
  location: string;
  tone: ImageTone;
  /** Path under /public to a real photo. Falls back to PlaceholderImage when unset. */
  image?: string;
}

export const PROJECTS: ProjectItem[] = [
  {
    slug: "modern-kitchen-transformation",
    name: "Modern Kitchen Transformation",
    type: "Kitchen Renovation",
    location: "Waterdown, ON",
    tone: "charcoal",
    image: "/images/hero-kitchen.jpg",
  },
  {
    slug: "luxury-bathroom-remodel",
    name: "Luxury Bathroom Remodel",
    type: "Bathroom Renovation",
    location: "Flamborough, ON",
    tone: "stone",
    image: "/images/bathroom-vanity.jpg",
  },
  {
    slug: "basement-entertainment-space",
    name: "Basement Entertainment Space",
    type: "Basement Renovation",
    location: "Burlington, ON",
    tone: "accent",
    image: "/images/basement-pool-table.jpg",
  },
  {
    slug: "modern-open-concept-living",
    name: "Modern Open-Concept Living Space",
    type: "Whole-Home Renovation",
    location: "Dundas, ON",
    tone: "charcoal",
    image: "/images/kitchen-open-concept.jpg",
  },
  {
    slug: "refined-interior-refresh",
    name: "Refined Interior Refresh",
    type: "Interior Renovation",
    location: "Ancaster, ON",
    tone: "stone",
    image: "/images/basement-bar-counter.jpg",
  },
  {
    slug: "tailored-family-remodel",
    name: "Tailored Family Remodel",
    type: "Custom Renovation",
    location: "Carlisle, ON",
    tone: "accent",
    image: "/images/basement-bar.jpg",
  },
];

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Consultation",
    description: "Tell us about your project, ideas, and goals.",
  },
  {
    number: "02",
    title: "Planning",
    description: "We work through the details and develop a renovation plan.",
  },
  {
    number: "03",
    title: "Renovation",
    description:
      "Our team brings the project to life with careful workmanship.",
  },
  {
    number: "04",
    title: "Final Walkthrough",
    description:
      "We review the completed project with you and make sure everything is right.",
  },
];

export interface TrustPoint {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const TRUST_POINTS: TrustPoint[] = [
  {
    icon: Gem,
    title: "Quality Craftsmanship",
    description: "Careful attention to detail from start to finish.",
  },
  {
    icon: Compass,
    title: "Built Around You",
    description:
      "Renovations designed around your home, lifestyle, and vision.",
  },
  {
    icon: PhoneCall,
    title: "Reliable Service",
    description: "Clear communication and dependable project management.",
  },
  {
    icon: Search,
    title: "Attention to Detail",
    description: "We don't cut corners. Every detail matters.",
  },
];

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  /** Path under /public to a photo of the finished project this client is describing. */
  image?: string;
  imageAlt?: string;
}

/**
 * Not real customer feedback. Names use a generic "first name + last
 * initial" format — a standard, widely-recognized convention for
 * anonymized/placeholder reviews — and quotes are written to sound like
 * natural, varied client voices rather than marketing copy. Replace all of
 * it with real testimonials once you've collected them.
 */
export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "We interviewed a few contractors before deciding, and it was clear from the first meeting that this team actually listened. The whole process was smooth, and our home feels completely different now — in the best way.",
    name: "Sarah M.",
    role: "Homeowner",
    image: "/images/kitchen-open-concept.jpg",
    imageAlt: "Open-concept kitchen and dining renovation",
  },
  {
    quote:
      "Our old kitchen was cramped and outdated. Now it's the heart of the house — everyone ends up hanging out around the island. Couldn't be happier with how it turned out.",
    name: "Michael T.",
    role: "Kitchen Renovation Client",
    image: "/images/hero-kitchen.jpg",
    imageAlt: "Renovated white kitchen with quartz countertops",
  },
  {
    quote:
      "I was a little nervous renovating with two young kids at home, but the crew was respectful of our space and kept things tidy the whole time. The bathroom itself turned out even better than I'd pictured.",
    name: "Jennifer K.",
    role: "Bathroom Renovation Client",
    image: "/images/bathroom-shower.jpg",
    imageAlt: "Marble bathroom shower renovation",
  },
  {
    quote:
      "Our basement sat unfinished for years. Now it's where we spend most of our evenings — pool table, bar, the whole setup. Wish we'd gotten it done sooner.",
    name: "David R.",
    role: "Basement Renovation Client",
    image: "/images/basement-pool-table.jpg",
    imageAlt: "Finished basement entertainment space with pool table",
  },
  {
    quote:
      "We had a pretty specific idea for a custom bar area and weren't sure anyone could pull it off exactly right. They did, right down to the details we cared about most.",
    name: "Amanda L.",
    role: "Custom Renovation Client",
    image: "/images/basement-bar.jpg",
    imageAlt: "Custom built-in wet bar renovation",
  },
];

export const SERVICE_TYPES = [
  "Kitchen Renovation",
  "Bathroom Renovation",
  "Basement Renovation",
  "Whole-Home Renovation",
  "Interior Renovation",
  "Custom Renovation",
  "Other",
];

export const BUDGET_RANGES = [
  "Under $25,000",
  "$25,000 – $50,000",
  "$50,000 – $100,000",
  "$100,000 – $250,000",
  "$250,000+",
  "Not sure yet",
];
