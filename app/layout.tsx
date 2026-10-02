import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { SITE } from "@/lib/constants";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const TITLE = "Home Renovation Services in Waterdown, ON | Alta Renovations";
const DESCRIPTION =
  "Alta Renovations delivers high-quality residential renovations — kitchens, bathrooms, basements, and whole-home remodels — for homeowners in Waterdown, Ontario and the Greater Waterdown Area. Request a free quote today.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: TITLE,
    template: "%s | Alta Renovations",
  },
  description: DESCRIPTION,
  keywords: [
    "home renovations Waterdown",
    "renovation contractor Waterdown Ontario",
    "kitchen renovation Waterdown",
    "bathroom renovation Waterdown",
    "basement renovation Waterdown",
    "whole-home renovation",
    "residential remodeling",
    "Greater Waterdown Area renovations",
  ],
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE.url,
    siteName: SITE.name,
    type: "website",
    locale: "en_CA",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: SITE.url,
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: SITE.name,
  url: SITE.url,
  description: SITE.description,
  areaServed: [
    { "@type": "City", name: "Waterdown, Ontario" },
    { "@type": "Place", name: "Greater Waterdown Area" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${playfair.variable} ${inter.variable}`}
    >
      <body className="font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
