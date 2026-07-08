import Hero from "@/components/home/Hero";
import CategoryGrid from "@/components/home/CategoryGrid";
import DenverFashionWeek from "@/components/home/DenverFashionWeek";
import WaterSafetyPreview from "@/components/home/WaterSafetyPreview";
import BrandStory from "@/components/home/BrandStory";
import LakeLifeSection from "@/components/home/LakeLifeSection";
import ReviewsSection from "@/components/home/ReviewsSection";
import FitTagline from "@/components/home/FitTagline";
import NewsletterSignup from "@/components/home/NewsletterSignup";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CategoryGrid />
      <DenverFashionWeek />
      <WaterSafetyPreview />
      <BrandStory />
      <LakeLifeSection />
      <ReviewsSection />
      <FitTagline />
      <NewsletterSignup />
    </>
  );
}
