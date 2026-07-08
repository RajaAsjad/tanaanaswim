import SafeImage from "@/components/ui/SafeImage";
import Link from "next/link";
import { Star } from "lucide-react";
import { Product } from "@/types";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const hasCompare = product.compareAtPrice && product.compareAtPrice > product.price;

  return (
    <Link href={`/products/${product.slug}`} className="group block">
      <div className="relative aspect-[3/4] overflow-hidden bg-sand mb-3 sm:mb-4">
        {product.images[0] ? (
          <SafeImage
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />
        ) : (
          <div className="absolute inset-0 bg-sand-dark" />
        )}
        {product.badge && (
          <span className="absolute top-2 left-2 sm:top-3 sm:left-3 bg-ocean text-white text-[9px] sm:text-[10px] tracking-[0.15em] uppercase px-2 py-1">
            {product.badge}
          </span>
        )}
        {product.isNew && !product.badge && (
          <span className="absolute top-2 left-2 bg-coral text-white text-[9px] tracking-[0.15em] uppercase px-2 py-1">
            New
          </span>
        )}
      </div>
      <div className="space-y-1">
        <h3 className="text-xs sm:text-sm text-charcoal group-hover:text-ocean transition-colors leading-snug line-clamp-2">
          {product.name}
        </h3>
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-2.5 h-2.5 sm:w-3 sm:h-3 ${i < Math.floor(product.rating) ? "fill-coral text-coral" : "text-sand-dark"}`}
            />
          ))}
        </div>
        <div className="flex items-center gap-2">
          <p className="text-sm font-medium text-charcoal">${product.price}</p>
          {hasCompare && (
            <p className="text-xs text-charcoal-light line-through">${product.compareAtPrice}</p>
          )}
        </div>
      </div>
    </Link>
  );
}
