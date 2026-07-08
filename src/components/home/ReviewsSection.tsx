import { Star } from "lucide-react";
import Container from "@/components/ui/Container";
import { reviews } from "@/data/store";

export default function ReviewsSection() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <Container>
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl lg:text-4xl text-ocean mb-3">
            Let Customers Speak For Us
          </h2>
          <div className="flex items-center justify-center gap-1 mb-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-coral text-coral" />
            ))}
          </div>
          <p className="text-sm text-charcoal-light">from 108 reviews</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="border border-sand-dark p-6 lg:p-8 bg-sand/30"
            >
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-coral text-coral" />
                ))}
              </div>
              <h3 className="font-medium text-ocean mb-2">{review.title}</h3>
              <p className="text-sm text-charcoal-light leading-relaxed mb-4">
                {review.body}
              </p>
              <div className="flex items-center justify-between text-xs text-charcoal-light">
                <span>{review.author}</span>
                <span>{review.date}</span>
              </div>
              <p className="text-xs text-ocean mt-2">{review.productName}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
