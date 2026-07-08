import Container from "@/components/ui/Container";
import { siteContent } from "@/data/store";

export default function FitTagline() {
  return (
    <section className="section-padding bg-ocean text-white">
      <Container>
        <p className="text-center text-base sm:text-lg lg:text-xl leading-relaxed max-w-4xl mx-auto font-light tracking-wide">
          {siteContent.fitTagline}
        </p>
      </Container>
    </section>
  );
}
