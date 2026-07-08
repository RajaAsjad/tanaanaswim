import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import { Product } from "@/types";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group block"
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-sand mb-4">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
        {product.badge && (
          <span className="absolute top-3 left-3 bg-ocean text-white text-[10px] tracking-widest uppercase px-2.5 py-1">
            {product.badge}
          </span>
        )}
        {product.safetyHighlight && (
          <span className="absolute top-3 left-3 bg-coral text-white text-[10px] tracking-widest uppercase px-2.5 py-1">
            Safety Color
          </span>
        )}
      </div>
      <div>
        <h3 className="text-sm font-medium text-ocean group-hover:underline mb-1">
          {product.name}
        </h3>
        <div className="flex items-center gap-1 mb-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`w-3 h-3 ${i < Math.floor(product.rating) ? "fill-coral text-coral" : "text-sand-dark"}`}
            />
          ))}
          <span className="text-xs text-charcoal-light ml-1">
            ({product.reviewCount})
          </span>
        </div>
        <p className="text-sm font-medium">${product.price}</p>
      </div>
    </Link>
  );
}
