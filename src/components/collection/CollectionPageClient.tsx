"use client";

import { useState } from "react";
import SafeImage from "@/components/ui/SafeImage";
import Container from "@/components/ui/Container";
import ProductCard from "@/components/product/ProductCard";
import ProductFilters from "@/components/product/ProductFilters";
import { Product, Collection } from "@/types";

interface CollectionPageClientProps {
  collection: Collection | null;
  products: Product[];
  category: string;
}

export default function CollectionPageClient({
  collection,
  products: initialProducts,
  category,
}: CollectionPageClientProps) {
  const [filteredProducts, setFilteredProducts] = useState(initialProducts);
  const [filtersOpen, setFiltersOpen] = useState(false);

  return (
    <>
      <section className="relative h-44 sm:h-56 lg:h-72">
        <SafeImage
          src={
            collection?.heroImage ||
            "https://cdn.shopify.com/s/files/1/0742/4330/9803/collections/MAT_3212_e4ad0ee6-9e1c-4d4a-a1ac-4933ebc29ca9.jpg?v=1781467324"
          }
          alt={collection?.name || "All Products"}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-ocean/45" />
        <Container className="relative h-full flex flex-col justify-center">
          <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-white tracking-wide">
            {collection?.name || "All Products"}
          </h1>
          {collection?.description && (
            <p className="text-white/80 max-w-lg text-sm sm:text-base mt-2 line-clamp-2">
              {collection.description}
            </p>
          )}
        </Container>
      </section>

      <section className="py-8 sm:py-12 lg:py-16">
        <Container>
          {/* Mobile filter toggle */}
          {(category === "womens" || category === "all") && (
            <button
              onClick={() => setFiltersOpen(!filtersOpen)}
              className="sm:hidden w-full mb-4 py-3 border border-sand-dark text-sm tracking-wider uppercase text-charcoal"
            >
              {filtersOpen ? "Hide Filters" : "Filter & Sort"}
            </button>
          )}

          <div className={filtersOpen ? "block" : "hidden sm:block"}>
            <ProductFilters
              products={initialProducts}
              onFilter={setFilteredProducts}
              category={category}
            />
          </div>

          {filteredProducts.length === 0 ? (
            <p className="text-center text-charcoal-light py-16">
              No products match your filters.
            </p>
          ) : (
            <>
              <p className="text-xs sm:text-sm text-charcoal-light mb-4 sm:mb-6">
                {filteredProducts.length} product{filteredProducts.length !== 1 ? "s" : ""}
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6 lg:gap-8">
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
