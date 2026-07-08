import SafeImage from "@/components/ui/SafeImage";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { collections } from "@/data/store";

const shopCollections = collections.slice(0, 3);

export default function CategoryGrid() {
  return (
    <section className="section-padding bg-white">
      <Container>
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-ocean tracking-wide">
            Shop Now
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
          {shopCollections.map((collection) => (
            <Link
              key={collection.slug}
              href={`/collections/${collection.slug}`}
              className="group relative aspect-[4/5] sm:aspect-[3/4] overflow-hidden block"
            >
              <SafeImage
                src={collection.image}
                alt={collection.name}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 group-active:scale-100"
                sizes="(max-width: 640px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              <div className="absolute inset-0 flex flex-col items-center justify-end pb-8 sm:pb-10">
                <h3 className="font-serif text-2xl sm:text-3xl text-white tracking-wider">
                  {collection.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
