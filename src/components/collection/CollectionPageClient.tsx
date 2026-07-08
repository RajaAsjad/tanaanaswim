"use client";

import { useState } from "react";
import Image from "next/image";
import Container from "@/components/ui/Container";
import ProductCard from "@/components/product/ProductCard";
import ProductFilters from "@/components/product/ProductFilters";
import { Product, Collection } from "@/types";

interface CollectionPageProps {
  collection: Collection | null;
  products: Product[];
  category: string;
}

export default function CollectionPageClient({
  collection,
  products: initialProducts,
  category,
}: CollectionPageProps) {
  const [filteredProducts, setFilteredProducts] = useState(initialProducts);

  return (
    <>
      <section className="relative h-48 sm:h-64 lg:h-80">
        <Image
          src={
            collection?.heroImage ||
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&q=80"
          }
          alt={collection?.name || "All Products"}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-ocean/50" />
        <Container className="relative h-full flex flex-col justify-center">
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white mb-2">
            {collection?.name || "All Products"}
          </h1>
          {collection && (
            <p className="text-white/80 max-w-lg text-sm sm:text-base">
              {collection.description}
            </p>
          )}
        </Container>
      </section>

      <section className="py-12 lg:py-16">
        <Container>
          <ProductFilters
            products={initialProducts}
            onFilter={setFilteredProducts}
            category={category}
          />

          {filteredProducts.length === 0 ? (
            <p className="text-center text-charcoal-light py-12">
              No products match your filters.
            </p>
          ) : (
            <>
              <p className="text-sm text-charcoal-light mb-6">
                {filteredProducts.length} product
                {filteredProducts.length !== 1 ? "s" : ""}
              </p>
              <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </>
          )}
        </Container>
      </section>
    </>
  );
}
