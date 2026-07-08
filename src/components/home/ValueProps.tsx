import { Shield, Heart, Users } from "lucide-react";
import Container from "@/components/ui/Container";

const pillars = [
  {
    icon: Heart,
    title: "Premium Fit & Function",
    description:
      "Long Torso and Regular Torso options with compressive fabric that smooths, supports, and stays in place.",
  },
  {
    icon: Users,
    title: "Family Matching",
    description:
      "Mommy & Me collections designed to coordinate beautifully because family memories deserve matching style.",
  },
  {
    icon: Shield,
    title: "Water Safety",
    description:
      "Highly visible swimwear colors for children so you can spot your little ones instantly at the pool or beach.",
  },
];

export default function ValueProps() {
  return (
    <section className="py-16 lg:py-20 bg-sand">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-ocean/10 mb-5">
                <pillar.icon className="w-6 h-6 text-ocean" />
              </div>
              <h3 className="font-serif text-xl text-ocean mb-3">
                {pillar.title}
              </h3>
              <p className="text-sm text-charcoal-light leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
