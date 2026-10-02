import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ServiceItem } from "@/lib/data";
import PlaceholderImage from "./PlaceholderImage";

export default function ServiceCard({ service }: { service: ServiceItem }) {
  const Icon = service.icon;

  return (
    <Link
      href={`/services/${service.slug}`}
      className="group flex flex-col overflow-hidden rounded-sm border border-stone-pale bg-white/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-charcoal/10"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        {service.image ? (
          <Image
            src={service.image}
            alt={service.title}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <PlaceholderImage
            tone={service.tone}
            icon={Icon}
            label={service.title}
            className="h-full w-full transition-transform duration-500 group-hover:scale-105"
          />
        )}
      </div>
      <div className="flex flex-1 flex-col gap-2 p-6">
        <h3 className="font-display text-xl text-charcoal">
          {service.title}
        </h3>
        <p className="text-sm leading-relaxed text-stone">
          {service.description}
        </p>
        <span className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-accent-dark">
          Learn More
          <ArrowRight
            aria-hidden="true"
            className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
          />
        </span>
      </div>
    </Link>
  );
}
