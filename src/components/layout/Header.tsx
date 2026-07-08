"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, ShoppingBag, Search } from "lucide-react";
import Container from "@/components/ui/Container";
import { useCart } from "@/context/CartContext";
import CartDrawer from "@/components/cart/CartDrawer";

const navLinks = [
  { label: "Women's", href: "/collections/womens" },
  { label: "Children's", href: "/collections/childrens" },
  { label: "Accessories", href: "/collections/accessories" },
  { label: "Water Safety", href: "/water-safety" },
  { label: "About", href: "/about" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { itemCount, setIsOpen } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/98 backdrop-blur-md shadow-sm"
            : "bg-white"
        }`}
      >
        <Container>
          <div className="flex items-center justify-between h-14 sm:h-16 lg:h-[72px]">
            <button
              className="lg:hidden p-2 -ml-2 touch-manipulation"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6 text-charcoal" strokeWidth={1.5} />
            </button>

            <Link
              href="/"
              className="absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0 font-serif text-xl sm:text-2xl tracking-[0.25em] text-ocean"
            >
              TANA ANA
            </Link>

            <nav className="hidden lg:flex items-center gap-7 xl:gap-9">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[11px] tracking-[0.15em] text-charcoal hover:text-ocean transition-colors uppercase font-medium"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-1 sm:gap-2">
              <button className="p-2.5 hidden sm:flex touch-manipulation" aria-label="Search">
                <Search className="w-5 h-5 text-charcoal" strokeWidth={1.5} />
              </button>
              <button
                className="p-2.5 relative touch-manipulation"
                onClick={() => setIsOpen(true)}
                aria-label={`Cart, ${itemCount} items`}
              >
                <ShoppingBag className="w-5 h-5 text-charcoal" strokeWidth={1.5} />
                {itemCount > 0 && (
                  <span className="absolute top-1 right-1 bg-ocean text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                    {itemCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </Container>

        {/* Mobile menu */}
        <div
          className={`fixed inset-0 z-[60] lg:hidden transition-opacity duration-300 ${
            mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        >
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setMobileOpen(false)}
          />
          <div
            className={`absolute left-0 top-0 bottom-0 w-[min(320px,88vw)] bg-white shadow-2xl transition-transform duration-300 ease-out ${
              mobileOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="flex items-center justify-between px-5 h-14 border-b border-sand-dark">
              <span className="font-serif text-lg tracking-[0.2em] text-ocean">TANA ANA</span>
              <button onClick={() => setMobileOpen(false)} aria-label="Close menu" className="p-2 -mr-2">
                <X className="w-6 h-6" strokeWidth={1.5} />
              </button>
            </div>
            <nav className="py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center px-6 py-4 text-sm tracking-[0.12em] uppercase text-charcoal border-b border-sand/80 hover:bg-sand active:bg-sand transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/fit-guide"
                onClick={() => setMobileOpen(false)}
                className="flex items-center px-6 py-4 text-sm tracking-[0.12em] uppercase text-charcoal-light hover:bg-sand transition-colors"
              >
                Fit Guide
              </Link>
            </nav>
            <div className="px-6 py-6 mt-auto border-t border-sand-dark">
              <p className="text-xs text-charcoal-light mb-3">Follow us</p>
              <div className="flex gap-4">
                <a href="https://instagram.com/tanaanaswim" target="_blank" rel="noopener noreferrer" className="text-sm text-ocean hover:text-coral">Instagram</a>
                <a href="https://facebook.com/tanaanaswim" target="_blank" rel="noopener noreferrer" className="text-sm text-ocean hover:text-coral">Facebook</a>
                <a href="https://pinterest.com/tanaanaswim" target="_blank" rel="noopener noreferrer" className="text-sm text-ocean hover:text-coral">Pinterest</a>
              </div>
            </div>
          </div>
        </div>
      </header>
      <CartDrawer />
    </>
  );
}
