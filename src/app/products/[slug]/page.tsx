import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";
import ProductDetail from "@/components/product/ProductDetail";
import ProductCard from "@/components/product/ProductCard";
import { getProductBySlug, products } from "@/data/store";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Product Not Found" };
  return {
    title: product.name,
    description: product.shortDescription,
  };
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <>
      <section className="py-10 lg:py-16">
        <Container>
          <ProductDetail product={product} />
        </Container>
      </section>

      {related.length > 0 && (
        <section className="py-12 lg:py-16 bg-sand">
          <Container>
            <h2 className="font-serif text-2xl lg:text-3xl text-ocean mb-8">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </Container>
        </section>
      )}
    </>
  );
}
