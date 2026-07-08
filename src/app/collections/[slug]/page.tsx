import { notFound } from "next/navigation";
import CollectionPageClient from "@/components/collection/CollectionPageClient";
import {
  getCollectionBySlug,
  getProductsByCategory,
  products,
} from "@/data/store";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return [
    { slug: "womens" },
    { slug: "childrens" },
    { slug: "accessories" },
    { slug: "matching-mommy-mini" },
    { slug: "all" },
  ];
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  if (slug === "all") {
    return { title: "All Products", description: "Shop all TANA ANA swimwear and accessories." };
  }
  const collection = getCollectionBySlug(slug);
  return {
    title: collection?.name || "Collection",
    description: collection?.description,
  };
}

export default async function CollectionPage({ params }: PageProps) {
  const { slug } = await params;
  const collection =
    slug === "all" ? null : getCollectionBySlug(slug) ?? null;
  const categoryProducts =
    slug === "all" ? products : getProductsByCategory(slug);

  if (slug !== "all" && !collection) {
    notFound();
  }

  return (
    <CollectionPageClient
      collection={collection}
      products={categoryProducts}
      category={slug}
    />
  );
}
