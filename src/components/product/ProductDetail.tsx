"use client";

import { useState } from "react";
import Image from "next/image";
import { Star, Truck, Shield, RotateCcw, Check } from "lucide-react";
import { Product } from "@/types";
import { useCart } from "@/context/CartContext";
import Button from "@/components/ui/Button";

interface ProductDetailProps {
  product: Product;
}

const torsoLabels: Record<string, string> = {
  "long-torso": "Long Torso",
  "regular-torso": "Regular Torso",
  "n/a": "Standard",
};

export default function ProductDetail({ product }: ProductDetailProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedTorso, setSelectedTorso] = useState(
    product.torsoOptions.find((t) => t !== "n/a") || "n/a"
  );
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem({
      productId: product.id,
      slug: product.slug,
      name: product.name,
      price: product.price,
      size: selectedSize,
      torso: torsoLabels[selectedTorso] || "Standard",
      color: selectedColor.name,
      quantity: 1,
      image: product.images[0],
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
      <div>
        <div className="relative aspect-[3/4] overflow-hidden bg-sand mb-4">
          <Image
            src={product.images[selectedImage]}
            alt={product.name}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          {product.badge && (
            <span className="absolute top-4 left-4 bg-ocean text-white text-xs tracking-widest uppercase px-3 py-1.5">
              {product.badge}
            </span>
          )}
        </div>
        {product.images.length > 1 && (
          <div className="flex gap-3">
            {product.images.map((img, i) => (
              <button
                key={i}
                onClick={() => setSelectedImage(i)}
                className={`relative w-20 h-24 overflow-hidden border-2 transition-colors ${
                  selectedImage === i ? "border-ocean" : "border-transparent"
                }`}
              >
                <Image src={img} alt="" fill className="object-cover" sizes="80px" />
              </button>
            ))}
          </div>
        )}
      </div>

      <div>
        <h1 className="font-serif text-3xl lg:text-4xl text-ocean mb-3">
          {product.name}
        </h1>

        <div className="flex items-center gap-2 mb-4">
          <div className="flex items-center gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${i < Math.floor(product.rating) ? "fill-coral text-coral" : "text-sand-dark"}`}
              />
            ))}
          </div>
          <span className="text-sm text-charcoal-light">
            {product.rating} ({product.reviewCount} reviews)
          </span>
        </div>

        <p className="text-2xl font-medium text-ocean mb-6">${product.price}</p>

        <p className="text-charcoal-light leading-relaxed mb-6">
          {product.description}
        </p>

        {product.safetyHighlight && (
          <div className="flex items-start gap-3 bg-coral/10 border border-coral/20 p-4 mb-6">
            <Shield className="w-5 h-5 text-coral flex-shrink-0 mt-0.5" />
            <p className="text-sm text-charcoal">
              <strong className="text-ocean">Water Safety:</strong>{" "}
              {product.safetyHighlight}
            </p>
          </div>
        )}

        {product.torsoOptions.some((t) => t !== "n/a") && (
          <div className="mb-6">
            <label className="block text-xs tracking-widest uppercase text-charcoal-light mb-3">
              Torso Length
            </label>
            <div className="flex flex-wrap gap-2">
              {product.torsoOptions
                .filter((t) => t !== "n/a")
                .map((torso) => (
                  <button
                    key={torso}
                    onClick={() => setSelectedTorso(torso)}
                    className={`px-4 py-2.5 text-sm border transition-colors ${
                      selectedTorso === torso
                        ? "bg-ocean text-white border-ocean"
                        : "border-sand-dark hover:border-ocean"
                    }`}
                  >
                    {torsoLabels[torso]}
                  </button>
                ))}
            </div>
            <p className="text-xs text-charcoal-light mt-2">
              Not sure? Check our{" "}
              <a href="/fit-guide" className="text-ocean underline">
                Fit Guide
              </a>
            </p>
          </div>
        )}

        {product.colors.length > 1 && (
          <div className="mb-6">
            <label className="block text-xs tracking-widest uppercase text-charcoal-light mb-3">
              Color: {selectedColor.name}
            </label>
            <div className="flex gap-3">
              {product.colors.map((color) => (
                <button
                  key={color.name}
                  onClick={() => setSelectedColor(color)}
                  className={`w-8 h-8 rounded-full border-2 transition-all ${
                    selectedColor.name === color.name
                      ? "border-ocean scale-110"
                      : "border-sand-dark"
                  }`}
                  style={{ backgroundColor: color.hex }}
                  title={color.name}
                  aria-label={color.name}
                />
              ))}
            </div>
          </div>
        )}

        <div className="mb-8">
          <label className="block text-xs tracking-widest uppercase text-charcoal-light mb-3">
            Size
          </label>
          <div className="flex flex-wrap gap-2">
            {product.sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`min-w-[3rem] px-4 py-2.5 text-sm border transition-colors ${
                  selectedSize === size
                    ? "bg-ocean text-white border-ocean"
                    : "border-sand-dark hover:border-ocean"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <Button
          fullWidth
          size="lg"
          onClick={handleAddToCart}
          className="mb-3"
        >
          {added ? (
            <span className="flex items-center gap-2">
              <Check className="w-5 h-5" /> Added to Cart
            </span>
          ) : (
            "Add to Cart"
          )}
        </Button>

        {product.shopifyUrl && (
          <a
            href={product.shopifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center py-3.5 border border-ocean text-ocean text-xs tracking-[0.15em] uppercase hover:bg-ocean hover:text-white transition-colors mb-6"
          >
            Buy on TANA ANA Store
          </a>
        )}

        <ul className="space-y-3 mb-8">
          {product.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2 text-sm text-charcoal-light">
              <Check className="w-4 h-4 text-ocean flex-shrink-0 mt-0.5" />
              {feature}
            </li>
          ))}
        </ul>

        <div className="grid grid-cols-3 gap-4 pt-6 border-t border-sand-dark">
          <div className="text-center">
            <Truck className="w-5 h-5 text-ocean mx-auto mb-2" />
            <p className="text-xs text-charcoal-light">Free shipping over $125</p>
          </div>
          <div className="text-center">
            <Shield className="w-5 h-5 text-ocean mx-auto mb-2" />
            <p className="text-xs text-charcoal-light">Quality guaranteed</p>
          </div>
          <div className="text-center">
            <RotateCcw className="w-5 h-5 text-ocean mx-auto mb-2" />
            <p className="text-xs text-charcoal-light">Easy returns</p>
          </div>
        </div>
      </div>
    </div>
  );
}
