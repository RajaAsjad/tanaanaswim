"use client";

import Container from "@/components/ui/Container";

export default function NewsletterSignup() {
  return (
    <section className="section-padding bg-sand border-t border-sand-dark">
      <Container>
        <div className="max-w-lg mx-auto text-center px-2">
          <h2 className="font-serif text-2xl sm:text-3xl text-ocean mb-2 tracking-wide">
            Sign up for TANA ANA Newsletter
          </h2>
          <p className="text-xs sm:text-sm text-charcoal-light mb-1 font-medium tracking-wide">
            WE WON&apos;T SPAM YOU, PINKY PROMISE.
          </p>
          <p className="text-xs sm:text-sm text-charcoal-light mb-6 sm:mb-8 leading-relaxed">
            Early access to new collections, blog links, and special discounts
            for newsletter subscribers.
          </p>
          <form
            className="flex flex-col sm:flex-row gap-2 sm:gap-0 max-w-md mx-auto"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Email address"
              required
              className="flex-1 px-4 py-3.5 border border-sand-dark bg-white text-sm focus:outline-none focus:border-ocean sm:border-r-0"
            />
            <button
              type="submit"
              className="px-6 py-3.5 bg-ocean text-white text-xs tracking-[0.15em] uppercase hover:bg-ocean-dark transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
}
