import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function BrandStory() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=800&q=80"
              alt="TANA ANA founder story"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-coral mb-4">
              Our Story
            </p>
            <h2 className="font-serif text-3xl lg:text-4xl text-ocean mb-6 leading-tight">
              Built From Frustration, Designed With Purpose
            </h2>
            <blockquote className="border-l-2 border-coral pl-6 mb-6">
              <p className="text-charcoal italic leading-relaxed mb-4">
                &ldquo;I started this brand out of frustration—I couldn&apos;t
                find a one-piece swimsuit that stayed in place, looked stylish
                and fun, felt functional, and didn&apos;t cost a fortune.&rdquo;
              </p>
              <p className="text-charcoal-light text-sm leading-relaxed">
                With over 15 years of competitive swimming experience, I know
                firsthand the confidence that comes from a swimsuit that fits and
                performs well. I&apos;ve always loved one-pieces, and when I set
                out to create my own, I knew I wanted them to do more than just
                look good.
              </p>
            </blockquote>
            <Link href="/about">
              <Button variant="outline">Read Our Story</Button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
