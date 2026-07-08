import Link from "next/link";
import Container from "@/components/ui/Container";
import ProductCard from "@/components/product/ProductCard";
import { products } from "@/data/store";

export default function FeaturedProducts() {
  const featured = products.filter(
    (p) => p.isBestseller || p.isNew
  ).slice(0, 4);

  return (
    <section className="py-16 lg:py-24 bg-sand">
      <Container>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <h2 className="font-serif text-3xl lg:text-4xl text-ocean mb-2">
              Bestsellers
            </h2>
            <p className="text-charcoal-light text-sm">
              Customer favorites for fit, function, and style.
            </p>
          </div>
          <Link
            href="/collections/all"
            className="text-sm tracking-widest uppercase text-ocean border-b border-ocean pb-0.5 hover:text-coral hover:border-coral transition-colors"
          >
            View All
          </Link>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
}
