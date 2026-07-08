import SafeImage from "@/components/ui/SafeImage";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { siteContent } from "@/data/store";

export default function DenverFashionWeek() {
  const { denverFashionWeek } = siteContent;

  return (
    <section className="bg-sand">
      <Container className="py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          <div className="relative aspect-square lg:aspect-auto lg:min-h-[500px] order-2 lg:order-1">
            <SafeImage
              src={denverFashionWeek.image}
              alt="Denver Fashion Week - TANA ANA Swimwear"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="flex flex-col items-center justify-center text-center px-6 py-12 sm:py-16 lg:py-20 order-1 lg:order-2">
            <p className="text-xs tracking-[0.3em] uppercase text-charcoal-light mb-4">
              As Seen In Denver Fashion Week
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-ocean mb-4 tracking-wide">
              {denverFashionWeek.title}
            </h2>
            <p className="text-charcoal-light text-base sm:text-lg mb-8 max-w-sm leading-relaxed">
              {denverFashionWeek.subtitle}
            </p>
            <Link
              href={denverFashionWeek.ctaLink}
              className="inline-flex items-center justify-center px-10 py-4 bg-ocean text-white text-sm tracking-[0.2em] uppercase hover:bg-ocean-dark transition-colors"
            >
              {denverFashionWeek.cta}
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
