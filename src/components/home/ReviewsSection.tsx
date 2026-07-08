"use client";

import { useRef } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import Container from "@/components/ui/Container";
import { reviews } from "@/data/store";

export default function ReviewsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -320 : 320,
      behavior: "smooth",
    });
  };

  return (
    <section className="section-padding bg-sand overflow-hidden">
      <Container>
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-ocean mb-2 tracking-wide">
            Let customers speak for us
          </h2>
          <div className="flex items-center justify-center gap-1 mb-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-coral text-coral" />
            ))}
          </div>
          <p className="text-sm text-charcoal-light">from 108 reviews</p>
        </div>

        <div className="relative">
          <button
            onClick={() => scroll("left")}
            className="hidden sm:flex absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 items-center justify-center bg-white shadow-md rounded-full hover:bg-sand transition-colors"
            aria-label="Previous reviews"
          >
            <ChevronLeft className="w-5 h-5 text-ocean" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="hidden sm:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 items-center justify-center bg-white shadow-md rounded-full hover:bg-sand transition-colors"
            aria-label="Next reviews"
          >
            <ChevronRight className="w-5 h-5 text-ocean" />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-4 sm:gap-6 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {reviews.map((review) => (
              <div
                key={review.id}
                className="flex-shrink-0 w-[85vw] sm:w-[340px] snap-start bg-white p-5 sm:p-6 border border-sand-dark/60"
              >
                <div className="flex items-center gap-0.5 mb-3">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-coral text-coral" />
                  ))}
                </div>
                <h3 className="font-medium text-ocean text-sm sm:text-base mb-2">
                  {review.title}
                </h3>
                <p className="text-sm text-charcoal-light leading-relaxed mb-4 line-clamp-4">
                  {review.body}
                </p>
                <div className="flex items-center justify-between text-xs text-charcoal-light">
                  <span>{review.author}</span>
                  <span>{review.date}</span>
                </div>
                <p className="text-xs text-ocean/70 mt-2 truncate">{review.productName}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
