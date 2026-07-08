import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { siteContent } from "@/data/store";

export default function BrandStory() {
  const { founderQuote } = siteContent;

  return (
    <section className="section-padding bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center max-w-6xl mx-auto">
          <div className="relative aspect-[4/5] max-w-md mx-auto lg:max-w-none w-full overflow-hidden">
            <Image
              src="https://cdn.shopify.com/s/files/1/0742/4330/9803/files/TANA_0489_1.jpg?v=1760914594"
              alt="TANA ANA founder Tiana"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 90vw, 45vw"
            />
          </div>
          <div className="text-center lg:text-left px-2 sm:px-0">
            <blockquote className="space-y-6">
              <p className="font-serif text-xl sm:text-2xl lg:text-[1.65rem] text-ocean leading-relaxed italic">
                &ldquo;{founderQuote.part1}&rdquo;
              </p>
              <p className="text-charcoal-light text-sm sm:text-base leading-relaxed">
                {founderQuote.part2}
              </p>
            </blockquote>
            <Link
              href="/about"
              className="inline-block mt-8 text-sm tracking-[0.2em] uppercase text-ocean border-b border-ocean pb-1 hover:text-coral hover:border-coral transition-colors"
            >
              Read Our Story
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
