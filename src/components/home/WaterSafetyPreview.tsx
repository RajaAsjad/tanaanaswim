import Link from "next/link";
import Container from "@/components/ui/Container";
import SafeImage from "@/components/ui/SafeImage";
import { blogPosts } from "@/data/store";

export default function WaterSafetyPreview() {
  return (
    <section className="section-padding bg-white">
      <Container>
        <div className="flex items-end justify-between mb-8 sm:mb-10 gap-4">
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-ocean tracking-wide">
            Water Safety Blog
          </h2>
          <Link
            href="/water-safety"
            className="text-xs sm:text-sm tracking-[0.15em] uppercase text-ocean border-b border-ocean/40 pb-0.5 hover:border-ocean whitespace-nowrap flex-shrink-0"
          >
            View all
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/water-safety/${post.slug}`}
              className="group block"
            >
              <div className="relative aspect-[16/10] overflow-hidden mb-4 bg-sand">
                <SafeImage
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <h3 className="text-sm sm:text-base font-medium text-charcoal leading-snug group-hover:text-ocean transition-colors line-clamp-2 mb-2">
                {post.title}
              </h3>
              <p className="text-xs sm:text-sm text-charcoal-light line-clamp-2">
                {post.excerpt}
              </p>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
