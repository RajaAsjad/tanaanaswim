import SafeImage from "@/components/ui/SafeImage";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { Ruler, CheckCircle, HelpCircle } from "lucide-react";
import { images } from "@/data/store";

export const metadata = {
  title: "Fit Guide",
  description:
    "Find your perfect TANA ANA fit with our Long Torso vs Regular Torso guide. Premium one-piece swimsuits designed for every body.",
};

const fitSteps = [
  {
    title: "Measure Your Torso",
    description:
      "Measure from the highest point of your shoulder (where strap sits) down through the crotch and back up to the same shoulder point.",
  },
  {
    title: "Compare to Standard",
    description:
      "If your torso measurement is longer than average for your height, you likely need our Long Torso option. Most women 5'8\" and taller benefit from Long Torso.",
  },
  {
    title: "Choose Your Size",
    description:
      "Use your standard dress size as a starting point. Our compressive fabric provides support. If between sizes, size up for comfort.",
  },
];

const torsoComparison = [
  {
    type: "Regular Torso",
    bestFor: "Average torso length, most heights under 5'8\"",
    features: [
      "Standard body length",
      "Balanced proportions",
      "Most popular option",
    ],
  },
  {
    type: "Long Torso",
    bestFor: "Taller frames, longer torsos, 5'8\"+",
    features: [
      "Extra length through torso",
      "No pulling or riding up",
      "Full coverage maintained",
    ],
  },
];

export default function FitGuidePage() {
  return (
    <>
      <section className="relative h-64 lg:h-80">
        <SafeImage
          src={images.fitGuideHero}
          alt="Fit Guide"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-ocean/60" />
        <Container className="relative h-full flex flex-col justify-center">
          <h1 className="font-serif text-4xl lg:text-5xl text-white mb-3">
            Fit Guide
          </h1>
          <p className="text-white/80 max-w-lg">
            Long Torso vs Regular Torso. Find the fit that works for your body.
          </p>
        </Container>
      </section>

      <section className="py-16 lg:py-24">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Ruler className="w-10 h-10 text-ocean mx-auto mb-4" />
            <h2 className="font-serif text-3xl text-ocean mb-4">
              Why Torso Length Matters
            </h2>
            <p className="text-charcoal-light leading-relaxed">
              TANA ANA swimwear is designed for an incredible fit, offering
              both regular and long torso options. Our compressive fabric
              smooths and supports while keeping everything in place, so you can
              move with confidence. The right torso length prevents pulling,
              riding up, and discomfort during active water play.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {torsoComparison.map((option) => (
              <div
                key={option.type}
                className="border border-sand-dark p-8 bg-sand/30"
              >
                <h3 className="font-serif text-2xl text-ocean mb-2">
                  {option.type}
                </h3>
                <p className="text-sm text-coral mb-4">Best for: {option.bestFor}</p>
                <ul className="space-y-2">
                  {option.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-charcoal-light"
                    >
                      <CheckCircle className="w-4 h-4 text-ocean flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <h2 className="font-serif text-2xl text-ocean text-center mb-10">
            How to Find Your Fit
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {fitSteps.map((step, i) => (
              <div key={step.title} className="text-center">
                <div className="w-12 h-12 rounded-full bg-ocean text-white flex items-center justify-center mx-auto mb-4 text-lg font-serif">
                  {i + 1}
                </div>
                <h3 className="font-medium text-ocean mb-2">{step.title}</h3>
                <p className="text-sm text-charcoal-light leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-ocean p-8 lg:p-12 text-center">
            <HelpCircle className="w-8 h-8 text-coral mx-auto mb-4" />
            <h3 className="font-serif text-2xl text-white mb-3">
              Still Not Sure?
            </h3>
            <p className="text-white/70 mb-6 max-w-md mx-auto">
              When in doubt, choose Long Torso if you&apos;re tall or frequently
              experience suits riding up. Our easy return policy makes it
              risk-free to find your perfect fit.
            </p>
            <Link href="/collections/womens">
              <Button variant="secondary" size="lg">
                Shop Women&apos;s Collection
              </Button>
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
