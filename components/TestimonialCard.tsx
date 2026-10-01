import Image from "next/image";
import { Quote } from "lucide-react";
import type { Testimonial } from "@/lib/data";

export default function TestimonialCard({
  testimonial,
}: {
  testimonial: Testimonial;
}) {
  return (
    <figure className="group flex h-full flex-col overflow-hidden rounded-sm border border-stone-pale bg-white/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-charcoal/10">
      {testimonial.image && (
        <div className="relative aspect-[16/10] w-full overflow-hidden">
          <Image
            src={testimonial.image}
            alt={testimonial.imageAlt ?? ""}
            fill
            sizes="(min-width: 768px) 33vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col gap-6 p-8">
        <Quote
          aria-hidden="true"
          strokeWidth={1.25}
          className="h-8 w-8 text-accent"
        />
        <blockquote className="flex-1 text-base leading-relaxed text-charcoal/90">
          &ldquo;{testimonial.quote}&rdquo;
        </blockquote>
        <figcaption className="border-t border-stone-pale pt-4">
          <span className="block text-sm font-semibold text-charcoal">
            {testimonial.name}
          </span>
          <span className="block text-xs uppercase tracking-wider text-stone">
            {testimonial.role}
          </span>
        </figcaption>
      </div>
    </figure>
  );
}
