import Image from "next/image";
import Container from "@/components/ui/Container";

export default function PressFeature() {
  return (
    <section className="py-12 bg-white border-y border-sand-dark">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-charcoal-light">
            As Seen In
          </p>
          <h2 className="font-serif text-2xl lg:text-3xl text-ocean">
            Denver Fashion Week
          </h2>
          <div className="relative w-32 h-16 opacity-60">
            <Image
              src="https://images.unsplash.com/photo-1558176289-4cbbf7a0b122?w=200&q=80"
              alt="Denver Fashion Week"
              fill
              className="object-contain grayscale"
              sizes="128px"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
