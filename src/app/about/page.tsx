import Image from "next/image";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Link from "next/link";

export const metadata = {
  title: "About Us",
  description:
    "Learn about TANA ANA Swimwear—premium fit, family matching, and water safety born from 15+ years of competitive swimming experience.",
};

export default function AboutPage() {
  return (
    <>
      <section className="relative h-64 lg:h-96">
        <Image
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&q=80"
          alt="About TANA ANA"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-ocean/60" />
        <Container className="relative h-full flex flex-col justify-center">
          <h1 className="font-serif text-4xl lg:text-5xl text-white mb-3">
            About TANA ANA
          </h1>
          <p className="text-white/80 max-w-lg">
            Premium swimwear designed with purpose, built from experience.
          </p>
        </Container>
      </section>

      <section className="py-16 lg:py-24">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl text-ocean mb-6">
              Built From Frustration, Designed With Purpose
            </h2>
            <div className="prose prose-lg text-charcoal-light space-y-6 leading-relaxed">
              <p>
                TANA ANA was born from a simple frustration: the inability to
                find a one-piece swimsuit that stayed in place, looked stylish,
                felt functional, and didn&apos;t cost a fortune.
              </p>
              <p>
                With over 15 years of competitive swimming experience, our
                founder knows firsthand the confidence that comes from a
                swimsuit that fits and performs well. That expertise drives
                every design decision—from our compressive fabric that smooths
                and supports, to our Long Torso and Regular Torso options that
                ensure every body finds its perfect fit.
              </p>
              <p>
                But TANA ANA is about more than great-fitting swimwear. We
                believe in family matching collections that create lasting
                memories, and we&apos;re passionate about children&apos;s water
                safety through highly visible swimwear colors that help parents
                spot their kids instantly at the pool or beach.
              </p>
              <p>
                Every piece is designed to do more than just look good—it needs
                to perform when you&apos;re chasing your littles at the pool,
                building sandcastles at the beach, or simply enjoying a
                confidence-boosting day in the sun.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 bg-sand">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            <div>
              <p className="font-serif text-4xl text-ocean mb-2">15+</p>
              <p className="text-sm text-charcoal-light">
                Years of competitive swimming experience
              </p>
            </div>
            <div>
              <p className="font-serif text-4xl text-ocean mb-2">108+</p>
              <p className="text-sm text-charcoal-light">
                Five-star customer reviews
              </p>
            </div>
            <div>
              <p className="font-serif text-4xl text-ocean mb-2">3</p>
              <p className="text-sm text-charcoal-light">
                Core pillars: Fit, Family, Safety
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 lg:py-24">
        <Container>
          <div className="text-center max-w-xl mx-auto">
            <h2 className="font-serif text-3xl text-ocean mb-4">
              Ready to Find Your Perfect Fit?
            </h2>
            <p className="text-charcoal-light mb-8">
              Explore our collections and discover swimwear that moves with
              confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/collections/womens">
                <Button size="lg">Shop Women&apos;s</Button>
              </Link>
              <Link href="/fit-guide">
                <Button size="lg" variant="outline">
                  Read Fit Guide
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
