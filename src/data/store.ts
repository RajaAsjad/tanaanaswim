import { Product, Review, Collection, BlogPost } from "@/types";
import productsData from "./products.json";

const CDN = "https://cdn.shopify.com/s/files/1/0742/4330/9803";

export const collections: Collection[] = [
  {
    slug: "womens",
    name: "Women's",
    description:
      "Premium one-piece swimsuits with Long Torso & Regular Torso options. Compressive fabric that smooths, supports, and stays in place.",
    image: `${CDN}/collections/MAT_3212_e4ad0ee6-9e1c-4d4a-a1ac-4933ebc29ca9.jpg?v=1781467324`,
    heroImage: `${CDN}/collections/MAT_3212_e4ad0ee6-9e1c-4d4a-a1ac-4933ebc29ca9.jpg?v=1781467324`,
  },
  {
    slug: "childrens",
    name: "Children's",
    description:
      "Modest coverage, family matching styles, and high-visibility water safety colors for kids.",
    image: `${CDN}/collections/MAT_6963_1.jpg?v=1781467357`,
    heroImage: `${CDN}/collections/MAT_6963_1.jpg?v=1781467357`,
  },
  {
    slug: "accessories",
    name: "Accessories",
    description:
      "Beach bags, sun hats, goggles, and lake-day essentials from TANA ANA.",
    image: `${CDN}/collections/MAT_6805copy.jpg?v=1778452465`,
    heroImage: `${CDN}/collections/MAT_6805copy.jpg?v=1778452465`,
  },
  {
    slug: "matching-mommy-mini",
    name: "Matching Mommy & Mini",
    description:
      "Coordinate with your mini for picture-perfect pool and beach days.",
    image: `${CDN}/collections/MAT_7609_bf41bcd4-c9cc-4d76-915c-8c591afd3e24.jpg?v=1748968788`,
    heroImage: `${CDN}/collections/MAT_7609_bf41bcd4-c9cc-4d76-915c-8c591afd3e24.jpg?v=1748968788`,
  },
];

export const products: Product[] = productsData as Product[];

export const reviews: Review[] = [
  {
    id: "1",
    author: "Customer",
    date: "06/23/2026",
    rating: 5,
    title: "Precious and Safe!",
    body: "This is a precious swimsuit! My daughter loves it and the best part is that I can spot her easily in the pool with this print!",
    productName: "THE MINI TRISH - Girls One Piece",
  },
  {
    id: "2",
    author: "AJ Kikumoto",
    date: "05/18/2026",
    rating: 5,
    title: "I absolutely love the Trish! stripes!",
    body: "I absolutely love the Trish! I got the nautical stripes! The material is so soft, and the suit is well made. Fits like a glove!",
    productName: "THE TRISH",
  },
  {
    id: "3",
    author: "Mandi Pederson",
    date: "03/19/2026",
    rating: 5,
    title: "Practical & beautiful!",
    body: "Love the fit and compression of this suit! The square neckline is my favorite and the suit stays in place and doesn't ride up with movement.",
    productName: "THE TRISH",
  },
  {
    id: "4",
    author: "Lisa St George",
    date: "03/20/2026",
    rating: 5,
    title: "All the things",
    body: "Love finding a suit that has shorts for my daughter! Water safety color and cute…it's all the things.",
    productName: "THE FINLEY",
  },
  {
    id: "5",
    author: "Sandra A.",
    date: "04/18/2026",
    rating: 5,
    title: "The Perfect Large Beach Tote Bag",
    body: "This is hands down one of my favorite striped beach tote bags I've owned. It's super roomy, lightweight, and easy to carry.",
    productName: "The Everyday Lake Tote",
  },
  {
    id: "6",
    author: "Eileen B.",
    date: "04/18/2026",
    rating: 5,
    title: "Stylish Western Beach Hat",
    body: "I've been loving this Western Beach Hat with Turquoise from TANA ANA—such a fun, stylish piece for summer with great sun protection.",
    productName: "Coastal Cowgirl Beach Hat w/ Turquoise",
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "water-safety-for-kids-before-summer",
    title:
      "Water Safety for Kids: What Every Parent Should Teach Before Summer Swim Season",
    excerpt:
      "Learn essential water safety tips for kids before summer. Help your child stay safe and confident around pools, lakes, and beaches.",
    image:
      "https://tanaanaswim.com/cdn/shop/articles/april_2026_blog.png?v=1775922376",
    category: "Water Safety",
    readTime: "5 min read",
    date: "May 15, 2026",
    content: [
      "Summer means pool parties, lake days, and beach vacations—but before your kids dive in, water safety should be top of mind.",
      "Always assign a designated water watcher when children are swimming. This person should avoid distractions like phones and focus entirely on the kids in the water.",
      "Choose highly visible swimwear colors. Bright yellows, corals, and neon tones make it easier to spot your child—one reason TANA ANA prioritizes safety colors in our children's collection.",
      "Enroll children in swim lessons appropriate for their age and skill level.",
      "Teach kids to never swim alone and to always ask permission before entering the water.",
    ],
  },
  {
    slug: "cold-water-safety-spring-lake-safety",
    title:
      "Cold Water Safety: Why Lakes & Rivers Are More Dangerous In The Spring",
    excerpt:
      "Spring water can be colder and stronger than it looks. Learn cold water safety tips and how to stay safe around lakes and rivers this spring.",
    image:
      "https://tanaanaswim.com/cdn/shop/articles/march_water_safety.png?v=1772997331",
    category: "Water Safety",
    readTime: "4 min read",
    date: "April 22, 2026",
    content: [
      "Spring weather may feel warm, but lake and river water temperatures often remain dangerously cold well into the season.",
      "Cold water shock can occur in water below 70°F (21°C), causing involuntary gasping and impaired muscle function within minutes.",
      "Always check water temperature before entering. Spring runoff can also create strong currents in rivers and streams.",
      "Dress appropriately and always supervise children closely near any body of water.",
    ],
  },
  {
    slug: "rip-current-safety-101-how-to-spot-one-and-what-to-do-if-youre-caught",
    title:
      "Rip Current Safety 101: How to Spot One and What to Do If You're Caught",
    excerpt:
      "Understanding rip current safety is essential for beach days. Learn how to identify rip currents and survive if caught in one.",
    image:
      "https://tanaanaswim.com/cdn/shop/articles/TANA_0631_1_c2907151-3614-4406-96b5-b111c5983e03.jpg?v=1772999324",
    category: "Water Safety",
    readTime: "6 min read",
    date: "March 10, 2026",
    content: [
      "Rip currents are powerful, narrow channels of water flowing away from shore. They account for the majority of beach rescues each year.",
      "Look for: a channel of churning water, foam moving seaward, a break in the wave pattern, or darker water than surrounding areas.",
      "If caught, stay calm. Swim parallel to shore until out of the current, then swim at an angle back to the beach.",
      "Always swim at beaches with lifeguards and check local conditions before entering the water.",
    ],
  },
];

export const siteContent = {
  hero: {
    title: "Match with Mini for the Fourth 🇺🇸",
    cta: "Shop Now",
    ctaLink: "/collections/matching-mommy-mini",
    image: `${CDN}/collections/YOK_2966.jpg?v=1748968496`,
  },
  denverFashionWeek: {
    title: "DENVER FASHION WEEK",
    subtitle: "Fashionable Swimwear but still Functional",
    cta: "Shop Now",
    ctaLink: "/collections/womens",
    image: `${CDN}/files/DFWbyWestonMosburg105362.jpg?v=1778604293`,
  },
  lakeLife: {
    title: "BOLD. BRIGHT. BUILT FOR LAKE LIFE.",
    cta: "Shop Now",
    ctaLink: "/collections/childrens",
    image: `${CDN}/files/little_girls_water_safety_color_swimsuit_biker_shorts_and_long_sleeve_top_coral_cover.jpg?v=1758555429`,
  },
  fitTagline:
    "TANA ANA swimwear is designed for an incredible fit, offering both regular and long torso options. Our compressive fabric smooths and supports while keeping everything in place, so you can move with confidence!",
  founderQuote: {
    part1:
      "I started this brand out of frustration—I couldn't find a one-piece swimsuit that stayed in place, looked stylish and fun, felt functional, and didn't cost a fortune.",
    part2:
      "With over 15 years of competitive swimming experience, I know firsthand the confidence that comes from a swimsuit that fits and performs well. I've always loved one-pieces, and when I set out to create my own, I knew I wanted them to do more than just look good.",
  },
  aboutStory: `Hey there! I'm Tiana, the founder of TANA ANA, a brand born from my love of swimming, my passion for finding the perfect swimsuit, and a little bit of inspiration from my sweet nieces.

Swimming has been a part of my life since I was 11 years old, and for over a decade, I lived the life of a competitive swimmer. I had the honor of competing at the collegiate level for four years.

The name TANA ANA comes from two of my nieces — my second oldest calls me "Tana," and my youngest niece calls me "Ana." The combination captures the fun, carefree, and playful spirit that I want my brand to embody.

I believe swimsuits should empower you to feel confident, comfortable, and stylish — whether you're diving into the deep end or simply soaking up the sun.`,
};

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  if (category === "all") return products;
  if (category === "matching-mommy-mini") {
    return products.filter(
      (p) =>
        p.tags?.some((t) =>
          ["mommy", "matching", "mini trish", "mataya", "kathi"].some((k) =>
            t.toLowerCase().includes(k)
          )
        ) ||
        p.name.toLowerCase().includes("mini") ||
        p.name.toLowerCase().includes("mataya") ||
        p.name.toLowerCase().includes("kathi") ||
        p.name.toLowerCase().includes("trish")
    );
  }
  return products.filter((p) => p.category === category);
}

export function getCollectionBySlug(slug: string): Collection | undefined {
  return collections.find((c) => c.slug === slug);
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
