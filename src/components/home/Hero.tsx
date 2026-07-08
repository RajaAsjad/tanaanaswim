import SafeImage from "@/components/ui/SafeImage";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { siteContent } from "@/data/store";

export default function Hero() {
  const { hero } = siteContent;

  return (
    <section className="relative min-h-[75vh] sm:min-h-[80vh] lg:min-h-[90vh] flex items-end sm:items-center">
      <SafeImage
        src={hero.image}
        alt="TANA ANA Americana Collection - Match with Mini"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10 sm:bg-gradient-to-r sm:from-black/60 sm:via-black/25 sm:to-transparent" />
      <Container className="relative z-10 pb-10 sm:pb-0 py-8 sm:py-20 w-full">
        <div className="max-w-lg mx-auto sm:mx-0 text-center sm:text-left">
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white leading-[1.15] mb-6 sm:mb-8 tracking-wide">
            {hero.title}
          </h1>
          <Link
            href={hero.ctaLink}
            className="inline-flex items-center justify-center px-10 py-4 bg-white text-ocean text-sm font-medium tracking-[0.2em] uppercase hover:bg-sand transition-colors min-w-[200px]"
          >
            {hero.cta}
          </Link>
        </div>
      </Container>
    </section>
  );
}
