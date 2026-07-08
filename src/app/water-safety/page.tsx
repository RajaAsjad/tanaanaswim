import SafeImage from "@/components/ui/SafeImage";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { blogPosts } from "@/data/store";

export const metadata = {
  title: "Water Safety",
  description:
    "Essential water safety tips for families. Learn how TANA ANA's high-visibility swimwear colors help keep children safe.",
};

export default function WaterSafetyPage() {
  return (
    <>
      <section className="relative h-64 lg:h-80">
        <SafeImage
          src="https://images.unsplash.com/photo-1505118380757-91f5eb962245?w=1600&q=80"
          alt="Water Safety"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-ocean/60" />
        <Container className="relative h-full flex flex-col justify-center">
          <h1 className="font-serif text-4xl lg:text-5xl text-white mb-3">
            Water Safety
          </h1>
          <p className="text-white/80 max-w-lg">
            Keeping families safe around water—because style should never
            compromise safety.
          </p>
        </Container>
      </section>

      <section className="py-12 lg:py-16 bg-coral/10 border-b border-coral/20">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-2xl text-ocean mb-4">
              Why Visible Colors Matter
            </h2>
            <p className="text-charcoal-light leading-relaxed">
              TANA ANA children&apos;s swimwear features highly visible colors
              specifically chosen for water safety. Bright yellows, corals, and
              neon tones make it significantly easier to spot your child in
              crowded pools, lakes, and beaches—giving you peace of mind while
              they play.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 lg:py-24">
        <Container>
          <h2 className="font-serif text-3xl text-ocean mb-10">
            Water Safety Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/water-safety/${post.slug}`}
                className="group"
              >
                <div className="relative aspect-[16/10] overflow-hidden mb-4">
                  <SafeImage
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <p className="text-xs tracking-widest uppercase text-coral mb-2">
                  {post.category} &bull; {post.readTime}
                </p>
                <h3 className="font-medium text-ocean leading-snug group-hover:underline mb-2">
                  {post.title}
                </h3>
                <p className="text-sm text-charcoal-light line-clamp-2">
                  {post.excerpt}
                </p>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
