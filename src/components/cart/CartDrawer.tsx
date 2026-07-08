"use client";

import Image from "next/image";
import Link from "next/link";
import { X, Minus, Plus, Trash2 } from "lucide-react";
import { useCart } from "@/context/CartContext";
import Button from "@/components/ui/Button";

export default function CartDrawer() {
  const {
    items,
    isOpen,
    setIsOpen,
    removeItem,
    updateQuantity,
    subtotal,
    itemCount,
  } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60]">
      <div
        className="absolute inset-0 bg-black/40"
        onClick={() => setIsOpen(false)}
      />
      <div className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-white shadow-2xl flex flex-col">
        <div className="flex items-center justify-between p-5 border-b border-sand-dark">
          <h2 className="font-serif text-xl text-ocean">
            Your Cart ({itemCount})
          </h2>
          <button onClick={() => setIsOpen(false)} aria-label="Close cart">
            <X className="w-6 h-6 text-ocean" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
            <p className="text-charcoal-light mb-6">Your cart is empty</p>
            <Button onClick={() => setIsOpen(false)} variant="outline">
              Continue Shopping
            </Button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto p-5 space-y-5">
              {items.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="relative w-20 h-24 flex-shrink-0 bg-sand">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <Link
                      href={`/products/${item.slug}`}
                      onClick={() => setIsOpen(false)}
                      className="text-sm font-medium text-ocean hover:underline"
                    >
                      {item.name}
                    </Link>
                    <p className="text-xs text-charcoal-light mt-1">
                      {item.color} / {item.size}
                      {item.torso !== "n/a" && ` / ${item.torso}`}
                    </p>
                    <p className="text-sm font-medium mt-1">${item.price}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <div className="flex items-center border border-sand-dark">
                        <button
                          onClick={() =>
                            updateQuantity(index, item.quantity - 1)
                          }
                          className="p-1.5 hover:bg-sand"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-3 text-sm">{item.quantity}</span>
                        <button
                          onClick={() =>
                            updateQuantity(index, item.quantity + 1)
                          }
                          className="p-1.5 hover:bg-sand"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(index)}
                        className="p-1.5 text-charcoal-light hover:text-coral"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-sand-dark p-5 space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-charcoal-light">Subtotal</span>
                <span className="font-medium">${subtotal.toFixed(2)}</span>
              </div>
              <p className="text-xs text-charcoal-light text-center">
                Shipping & taxes calculated at checkout
              </p>
              {subtotal >= 125 ? (
                <p className="text-xs text-ocean text-center font-medium">
                  You qualify for FREE shipping!
                </p>
              ) : (
                <p className="text-xs text-charcoal-light text-center">
                  Add ${(125 - subtotal).toFixed(2)} more for free shipping
                </p>
              )}
              <Button fullWidth size="lg">
                Checkout
              </Button>
              <Button
                fullWidth
                variant="outline"
                onClick={() => setIsOpen(false)}
              >
                Continue Shopping
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
