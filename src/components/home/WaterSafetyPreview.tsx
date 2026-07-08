import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { blogPosts } from "@/data/store";

export default function WaterSafetyPreview() {
  return (
    <section className="py-16 lg:py-24 bg-ocean">
      <Container>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <h2 className="font-serif text-3xl lg:text-4xl text-white mb-2">
              Water Safety Blog
            </h2>
            <p className="text-white/70 text-sm max-w-md">
              Essential tips to keep your family safe around water this season.
            </p>
          </div>
          <Link
            href="/water-safety"
            className="text-sm tracking-widest uppercase text-white/80 border-b border-white/40 pb-0.5 hover:text-white hover:border-white transition-colors"
          >
            View All
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/water-safety/${post.slug}`}
              className="group"
            >
              <div className="relative aspect-[16/10] overflow-hidden mb-4">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <p className="text-xs tracking-widest uppercase text-coral mb-2">
                {post.category}
              </p>
              <h3 className="text-white font-medium leading-snug group-hover:underline">
                {post.title}
              </h3>
              <p className="text-white/60 text-sm mt-2 line-clamp-2">
                {post.excerpt}
              </p>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
