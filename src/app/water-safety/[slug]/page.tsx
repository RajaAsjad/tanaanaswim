import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";
import { getBlogPostBySlug, blogPosts } from "@/data/store";
import { ArrowLeft } from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return { title: "Article Not Found" };
  return { title: post.title, description: post.excerpt };
}

export default async function WaterSafetyArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <section className="relative h-64 lg:h-80">
        <Image
          src={post.image}
          alt={post.title}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-ocean/60" />
        <Container className="relative h-full flex flex-col justify-end pb-10">
          <Link
            href="/water-safety"
            className="inline-flex items-center gap-2 text-white/80 text-sm hover:text-white mb-4 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Water Safety
          </Link>
          <p className="text-xs tracking-widest uppercase text-coral mb-2">
            {post.category} &bull; {post.readTime}
          </p>
          <h1 className="font-serif text-3xl lg:text-4xl text-white max-w-3xl">
            {post.title}
          </h1>
        </Container>
      </section>

      <section className="py-12 lg:py-16">
        <Container>
          <article className="max-w-3xl mx-auto">
            <p className="text-sm text-charcoal-light mb-8">{post.date}</p>
            <div className="space-y-6 text-charcoal-light leading-relaxed">
              {post.content.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </article>
        </Container>
      </section>
    </>
  );
}
