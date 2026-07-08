import Hero from "@/components/home/Hero";
import CategoryGrid from "@/components/home/CategoryGrid";
import ValueProps from "@/components/home/ValueProps";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import BrandStory from "@/components/home/BrandStory";
import PressFeature from "@/components/home/PressFeature";
import ReviewsSection from "@/components/home/ReviewsSection";
import WaterSafetyPreview from "@/components/home/WaterSafetyPreview";
import NewsletterSignup from "@/components/home/NewsletterSignup";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CategoryGrid />
      <ValueProps />
      <FeaturedProducts />
      <PressFeature />
      <BrandStory />
      <ReviewsSection />
      <WaterSafetyPreview />
      <NewsletterSignup />
    </>
  );
}
