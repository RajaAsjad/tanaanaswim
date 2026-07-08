"use client";

import Link from "next/link";
import Container from "@/components/ui/Container";

const footerLinks = {
  explore: [
    { label: "About", href: "/about" },
    { label: "Fit Guide", href: "/fit-guide" },
    { label: "Swimsuit Care", href: "/fit-guide" },
    { label: "Water Safety", href: "/water-safety" },
  ],
  customerCare: [
    { label: "Contact Us", href: "https://tanaanaswim.com/pages/contact" },
    { label: "Shipping", href: "https://tanaanaswim.com/policies/shipping-policy" },
    { label: "Return Policy", href: "https://tanaanaswim.com/policies/refund-policy" },
    { label: "Start a Return", href: "https://tanaanaswim.com/pages/contact" },
  ],
  social: [
    { label: "Instagram", href: "https://instagram.com/tanaanaswim" },
    { label: "Facebook", href: "https://facebook.com/tanaanaswim" },
    { label: "Pinterest", href: "https://pinterest.com/tanaanaswim" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-ocean text-white mt-auto">
      <Container className="py-12 sm:py-16">
        {/* Newsletter top */}
        <div className="text-center mb-12 sm:mb-16 pb-12 border-b border-white/10">
          <h3 className="font-serif text-xl sm:text-2xl mb-2 tracking-wide">
            Stay up to date with new products &amp; exclusive offers!
          </h3>
          <form
            className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto mt-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Email address"
              required
              className="flex-1 px-4 py-3.5 bg-white/10 border border-white/20 text-white placeholder:text-white/50 text-sm focus:outline-none focus:border-white/50"
            />
            <button
              type="submit"
              className="px-6 py-3.5 bg-white text-ocean text-xs tracking-[0.15em] uppercase font-medium hover:bg-sand transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10">
          <div className="col-span-2 md:col-span-1">
            <h3 className="font-serif text-xl tracking-[0.15em] mb-4">TANA ANA</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              Premium swimwear with Long Torso &amp; Regular Torso options.
              Family matching collections and water safety colors for kids.
            </p>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase mb-4 font-semibold">
              Explore
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.explore.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-white/60 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase mb-4 font-semibold">
              Customer Care
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.customerCare.map((link) => (
                <li key={link.label}>
                  <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-sm text-white/60 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase mb-4 font-semibold">
              Contact Info
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.social.map((link) => (
                <li key={link.label}>
                  <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-sm text-white/60 hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="https://tanaanaswim.com/pages/contact" target="_blank" rel="noopener noreferrer" className="text-sm text-white/60 hover:text-white transition-colors">
                  Contact Us Directly
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Payment & legal */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-wrap justify-center gap-3 mb-6 opacity-60">
            {["Visa", "Mastercard", "Amex", "PayPal", "Apple Pay", "Shop Pay"].map((m) => (
              <span key={m} className="text-[10px] tracking-wider uppercase border border-white/20 px-2 py-1">
                {m}
              </span>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/40 text-center sm:text-left">
            <p>&copy; {new Date().getFullYear()}, TANA ANA. All rights reserved.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://tanaanaswim.com/policies/privacy-policy" target="_blank" rel="noopener noreferrer" className="hover:text-white/70">Privacy</a>
              <a href="https://tanaanaswim.com/policies/refund-policy" target="_blank" rel="noopener noreferrer" className="hover:text-white/70">Refunds</a>
              <a href="https://tanaanaswim.com/policies/terms-of-service" target="_blank" rel="noopener noreferrer" className="hover:text-white/70">Terms</a>
              <a href="https://tanaanaswim.com/policies/shipping-policy" target="_blank" rel="noopener noreferrer" className="hover:text-white/70">Shipping</a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
