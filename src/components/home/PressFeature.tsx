import SafeImage from "@/components/ui/SafeImage";
import Container from "@/components/ui/Container";
import { images } from "@/data/store";

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
          <div className="relative w-32 h-16 overflow-hidden rounded">
            <SafeImage
              src={images.pressFeature}
              alt="Denver Fashion Week"
              fill
              className="object-cover grayscale"
              sizes="128px"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
