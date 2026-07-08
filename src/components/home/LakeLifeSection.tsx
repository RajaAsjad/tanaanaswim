import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { siteContent } from "@/data/store";

export default function LakeLifeSection() {
  const { lakeLife } = siteContent;

  return (
    <section className="relative min-h-[400px] sm:min-h-[500px] flex items-center">
      <Image
        src={lakeLife.image}
        alt="Bold bright swimwear built for lake life"
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/40" />
      <Container className="relative z-10 text-center py-16">
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white mb-8 tracking-wide leading-tight max-w-2xl mx-auto">
          {lakeLife.title}
        </h2>
        <Link
          href={lakeLife.ctaLink}
          className="inline-flex items-center justify-center px-10 py-4 bg-white text-ocean text-sm tracking-[0.2em] uppercase hover:bg-sand transition-colors"
        >
          {lakeLife.cta}
        </Link>
      </Container>
    </section>
  );
}
