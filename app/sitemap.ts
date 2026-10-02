import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";
import { SERVICES } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: SITE.url,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...SERVICES.map((service) => ({
      url: `${SITE.url}/services/${service.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
