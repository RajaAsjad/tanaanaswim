import SafeImage from "@/components/ui/SafeImage";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { siteContent } from "@/data/store";

export const metadata = {
  title: "About Us",
  description:
    "Meet Tiana, founder of TANA ANA Swimwear — premium fit, family matching, and water safety born from 15+ years of competitive swimming.",
};

export default function AboutPage() {
  const paragraphs = siteContent.aboutStory.split("\n\n");

  return (
    <>
      <section className="relative h-56 sm:h-72 lg:h-96">
        <SafeImage
          src="https://cdn.shopify.com/s/files/1/0742/4330/9803/collections/MAT_3212_e4ad0ee6-9e1c-4d4a-a1ac-4933ebc29ca9.jpg?v=1781467324"
          alt="About TANA ANA"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-ocean/55" />
        <Container className="relative h-full flex flex-col justify-center">
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white tracking-wide">
            About TANA ANA
          </h1>
        </Container>
      </section>

      <section className="section-padding">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start max-w-5xl mx-auto">
            <div className="relative aspect-[4/5] overflow-hidden max-w-sm mx-auto lg:max-w-none w-full">
              <SafeImage
                src="https://cdn.shopify.com/s/files/1/0742/4330/9803/files/TANA_0514_1.jpg?v=1760915247"
                alt="Tiana, founder of TANA ANA"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 80vw, 40vw"
              />
            </div>
            <div className="space-y-5 text-charcoal-light text-sm sm:text-base leading-relaxed">
              {paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              <p className="text-ocean font-medium pt-2">xoxo, Tiana</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="section-padding bg-sand">
        <Container>
          <div className="text-center max-w-lg mx-auto">
            <h2 className="font-serif text-2xl sm:text-3xl text-ocean mb-4">
              Find Your Perfect Fit
            </h2>
            <p className="text-charcoal-light text-sm mb-6">
              Long Torso &amp; Regular Torso options for every body.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/collections/womens" className="inline-flex items-center justify-center px-8 py-3.5 bg-ocean text-white text-xs tracking-[0.15em] uppercase hover:bg-ocean-dark transition-colors">
                Shop Women&apos;s
              </Link>
              <Link href="/fit-guide" className="inline-flex items-center justify-center px-8 py-3.5 border border-ocean text-ocean text-xs tracking-[0.15em] uppercase hover:bg-ocean hover:text-white transition-colors">
                Fit Guide
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
