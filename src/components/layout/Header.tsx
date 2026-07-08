"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ShoppingBag, Search, ChevronDown } from "lucide-react";
import Container from "@/components/ui/Container";
import { useCart } from "@/context/CartContext";
import CartDrawer from "@/components/cart/CartDrawer";

const navLinks = [
  {
    label: "Shop",
    href: "/collections/womens",
    children: [
      { label: "Women's", href: "/collections/womens" },
      { label: "Children's", href: "/collections/childrens" },
      { label: "Accessories", href: "/collections/accessories" },
      { label: "All Products", href: "/collections/all" },
    ],
  },
  { label: "Fit Guide", href: "/fit-guide" },
  { label: "Water Safety", href: "/water-safety" },
  { label: "About", href: "/about" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);
  const { itemCount, setIsOpen } = useCart();

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-sand-dark">
        <Container>
          <div className="flex items-center justify-between h-16 lg:h-20">
            <button
              className="lg:hidden p-2 -ml-2"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6 text-ocean" />
            </button>

            <Link
              href="/"
              className="font-serif text-2xl lg:text-3xl tracking-[0.2em] text-ocean font-light"
            >
              TANA ANA
            </Link>

            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) =>
                link.children ? (
                  <div
                    key={link.label}
                    className="relative group"
                    onMouseEnter={() => setShopOpen(true)}
                    onMouseLeave={() => setShopOpen(false)}
                  >
                    <button className="flex items-center gap-1 text-sm tracking-wider text-charcoal hover:text-ocean transition-colors uppercase">
                      {link.label}
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    {shopOpen && (
                      <div className="absolute top-full left-0 pt-2 w-48">
                        <div className="bg-white border border-sand-dark shadow-lg py-2">
                          {link.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="block px-4 py-2.5 text-sm text-charcoal hover:bg-sand hover:text-ocean transition-colors"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm tracking-wider text-charcoal hover:text-ocean transition-colors uppercase"
                  >
                    {link.label}
                  </Link>
                )
              )}
            </nav>

            <div className="flex items-center gap-3">
              <button
                className="p-2 hidden sm:block"
                aria-label="Search"
              >
                <Search className="w-5 h-5 text-ocean" />
              </button>
              <button
                className="p-2 relative"
                onClick={() => setIsOpen(true)}
                aria-label={`Cart, ${itemCount} items`}
              >
                <ShoppingBag className="w-5 h-5 text-ocean" />
                {itemCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 bg-coral text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-medium">
                    {itemCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </Container>

        {mobileOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            <div
              className="absolute inset-0 bg-black/40"
              onClick={() => setMobileOpen(false)}
            />
            <div className="absolute left-0 top-0 bottom-0 w-80 max-w-[85vw] bg-white shadow-xl">
              <div className="flex items-center justify-between p-4 border-b border-sand-dark">
                <span className="font-serif text-xl tracking-widest text-ocean">
                  TANA ANA
                </span>
                <button onClick={() => setMobileOpen(false)} aria-label="Close menu">
                  <X className="w-6 h-6 text-ocean" />
                </button>
              </div>
              <nav className="p-4 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <div key={link.label}>
                    {link.children ? (
                      <>
                        <p className="px-3 py-2 text-xs tracking-widest text-charcoal-light uppercase font-medium">
                          {link.label}
                        </p>
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setMobileOpen(false)}
                            className="block px-3 py-2.5 text-sm text-charcoal hover:text-ocean"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </>
                    ) : (
                      <Link
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className="block px-3 py-3 text-sm tracking-wider text-charcoal hover:text-ocean uppercase"
                      >
                        {link.label}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>
            </div>
          </div>
        )}
      </header>
      <CartDrawer />
    </>
  );
}
