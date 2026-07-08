"use client";

import Link from "next/link";
import Container from "@/components/ui/Container";

export default function Footer() {
  return (
    <footer className="bg-ocean text-white mt-auto">
      <Container className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h3 className="font-serif text-2xl tracking-[0.15em] mb-4">
              TANA ANA
            </h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Premium swimwear designed for an incredible fit. Long Torso &
              Regular Torso options, family matching collections, and
              high-visibility colors for children&apos;s water safety.
            </p>
          </div>

          <div>
            <h4 className="text-xs tracking-widest uppercase mb-4 font-medium">
              Shop
            </h4>
            <ul className="space-y-2.5 text-sm text-white/70">
              <li>
                <Link href="/collections/womens" className="hover:text-white transition-colors">
                  Women&apos;s
                </Link>
              </li>
              <li>
                <Link href="/collections/childrens" className="hover:text-white transition-colors">
                  Children&apos;s
                </Link>
              </li>
              <li>
                <Link href="/collections/accessories" className="hover:text-white transition-colors">
                  Accessories
                </Link>
              </li>
              <li>
                <Link href="/collections/all" className="hover:text-white transition-colors">
                  All Products
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs tracking-widest uppercase mb-4 font-medium">
              Learn
            </h4>
            <ul className="space-y-2.5 text-sm text-white/70">
              <li>
                <Link href="/fit-guide" className="hover:text-white transition-colors">
                  Fit Guide
                </Link>
              </li>
              <li>
                <Link href="/water-safety" className="hover:text-white transition-colors">
                  Water Safety
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs tracking-widest uppercase mb-4 font-medium">
              Newsletter
            </h4>
            <p className="text-sm text-white/70 mb-4">
              Early access to new collections and special discounts. We
              won&apos;t spam you, pinky promise.
            </p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2.5 bg-white/10 border border-white/20 text-white placeholder:text-white/50 text-sm focus:outline-none focus:border-white/40"
              />
              <button
                type="submit"
                className="px-4 py-2.5 bg-coral hover:bg-coral-dark text-white text-xs tracking-widest uppercase transition-colors"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/50">
          <p>&copy; {new Date().getFullYear()} TANA ANA Swimwear. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Shipping & Returns
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
