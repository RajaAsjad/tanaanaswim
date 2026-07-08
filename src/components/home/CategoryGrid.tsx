import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { collections } from "@/data/store";

export default function CategoryGrid() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <Container>
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl lg:text-4xl text-ocean mb-3">
            Shop Now
          </h2>
          <p className="text-charcoal-light max-w-lg mx-auto">
            Premium one-pieces, family matching styles, and water-safe
            accessories for every adventure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {collections.map((collection) => (
            <Link
              key={collection.slug}
              href={`/collections/${collection.slug}`}
              className="group relative aspect-[3/4] overflow-hidden"
            >
              <Image
                src={collection.image}
                alt={collection.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ocean/80 via-ocean/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                <h3 className="font-serif text-2xl lg:text-3xl text-white mb-2">
                  {collection.name}
                </h3>
                <span className="inline-block text-xs tracking-widest uppercase text-white/80 border-b border-white/40 pb-1 group-hover:border-white transition-colors">
                  Shop Collection
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
