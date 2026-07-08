import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] lg:min-h-[85vh] flex items-center">
      <Image
        src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80"
        alt="Family at the beach wearing TANA ANA swimwear"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ocean/70 via-ocean/40 to-transparent" />
      <Container className="relative z-10 py-20">
        <div className="max-w-xl">
          <p className="text-white/80 text-xs sm:text-sm tracking-[0.3em] uppercase mb-4">
            Premium Fit &bull; Family Matching &bull; Water Safety
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6">
            Swimwear That Moves With Confidence
          </h1>
          <p className="text-white/90 text-base sm:text-lg leading-relaxed mb-8 max-w-md">
            Long Torso &amp; Regular Torso options. Compressive fabric that
            stays in place. Highly visible colors for kids.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/collections/womens">
              <Button size="lg">Shop Women&apos;s</Button>
            </Link>
            <Link href="/collections/childrens">
              <Button size="lg" variant="outline" className="!border-white !text-white hover:!bg-white hover:!text-ocean">
                Shop Children&apos;s
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
