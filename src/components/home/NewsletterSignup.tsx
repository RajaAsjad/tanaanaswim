"use client";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function NewsletterSignup() {
  return (
    <section className="py-16 lg:py-20 bg-sand">
      <Container>
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-serif text-3xl text-ocean mb-3">
            Sign Up for TANA ANA Newsletter
          </h2>
          <p className="text-sm text-charcoal-light mb-2">
            WE WON&apos;T SPAM YOU, PINKY PROMISE.
          </p>
          <p className="text-sm text-charcoal-light mb-8 leading-relaxed">
            TANA ANA newsletters contain links to blogs, early access to new
            collections, and special discounts available to newsletter
            subscribers.
          </p>
          <form
            className="flex flex-col sm:flex-row gap-3"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Email address"
              required
              className="flex-1 px-5 py-3.5 border border-sand-dark bg-white text-sm focus:outline-none focus:border-ocean transition-colors"
            />
            <Button type="submit" size="lg">
              Subscribe
            </Button>
          </form>
        </div>
      </Container>
    </section>
  );
}
