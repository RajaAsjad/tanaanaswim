import { Product, Review, Collection, BlogPost } from "@/types";

export const collections: Collection[] = [
  {
    slug: "womens",
    name: "Women's",
    description:
      "Premium one-piece swimsuits designed for an incredible fit—with Long Torso and Regular Torso options for every body.",
    image:
      "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=800&q=80",
    heroImage:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&q=80",
  },
  {
    slug: "childrens",
    name: "Children's",
    description:
      "Highly visible swimwear colors for water safety. Modest coverage, durable construction, and family-matching styles.",
    image:
      "https://images.unsplash.com/photo-1530549387789-4c1017266635?w=800&q=80",
    heroImage:
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=1600&q=80",
  },
  {
    slug: "accessories",
    name: "Accessories",
    description:
      "Beach bags, sun hats, goggles, and essentials to complete your family's water day.",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80",
    heroImage:
      "https://images.unsplash.com/photo-1473496169904-658ba7c44d08?w=1600&q=80",
  },
];

export const products: Product[] = [
  {
    id: "1",
    slug: "the-trish",
    name: "THE TRISH",
    category: "womens",
    price: 98,
    description:
      "Our signature women's one-piece with compressive fabric that smooths and supports while keeping everything in place. Available in Long Torso and Regular Torso for a fit that truly works for your body.",
    shortDescription:
      "Signature one-piece with Long Torso & Regular Torso options.",
    features: [
      "Compressive, smoothing fabric",
      "Square neckline with full coverage",
      "Long Torso & Regular Torso options",
      "Stays in place during active water play",
      "UPF 50+ sun protection",
    ],
    torsoOptions: ["long-torso", "regular-torso"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Nautical Stripes", hex: "#1B3A4B" },
      { name: "Coral Reef", hex: "#E07A5F" },
      { name: "Ocean Blue", hex: "#2C5F7C" },
    ],
    images: [
      "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=800&q=80",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80",
    ],
    badge: "Bestseller",
    rating: 4.9,
    reviewCount: 47,
    isBestseller: true,
  },
  {
    id: "2",
    slug: "the-finley",
    name: "THE FINLEY",
    category: "childrens",
    price: 68,
    description:
      "A girls' one-piece with built-in shorts for extra coverage and confidence. Features our signature high-visibility colors for water safety—spot your child instantly at the pool or beach.",
    shortDescription:
      "Girls one-piece with shorts and high-visibility safety colors.",
    features: [
      "Built-in shorts for full coverage",
      "High-visibility water safety colors",
      "Soft, durable fabric",
      "Modest fit for active kids",
      "Family matching available",
    ],
    torsoOptions: ["n/a"],
    sizes: ["2T", "3T", "4T", "5", "6", "7", "8"],
    colors: [
      { name: "Safety Yellow", hex: "#F4D03F" },
      { name: "Bright Coral", hex: "#FF6B6B" },
      { name: "Aqua Splash", hex: "#48C9B0" },
    ],
    images: [
      "https://images.unsplash.com/photo-1530549387789-4c1017266635?w=800&q=80",
      "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=800&q=80",
    ],
    rating: 4.8,
    reviewCount: 32,
    safetyHighlight: "High-visibility colors for water safety",
  },
  {
    id: "3",
    slug: "the-mini-trish",
    name: "THE MINI TRISH",
    category: "childrens",
    price: 58,
    description:
      "A scaled-down version of our beloved Trish for girls. Modest coverage, quality construction, and adorable prints that match mom's suit for the perfect Mommy & Me moment.",
    shortDescription: "Girls one-piece—modest, well-made, Mommy & Me ready.",
    features: [
      "Matches THE TRISH for Mommy & Me",
      "Modest coverage design",
      "Soft, quality construction",
      "Multiple fun prints",
      "Excellent price point",
    ],
    torsoOptions: ["n/a"],
    sizes: ["2T", "3T", "4T", "5", "6", "7", "8", "10"],
    colors: [
      { name: "Nautical Stripes", hex: "#1B3A4B" },
      { name: "Floral Splash", hex: "#E07A5F" },
    ],
    images: [
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&q=80",
    ],
    rating: 4.9,
    reviewCount: 28,
    isBestseller: true,
  },
  {
    id: "4",
    slug: "the-mini-alex",
    name: "THE MINI ALEX",
    category: "childrens",
    price: 48,
    description:
      "European-style boys swim shorts that don't limit movement in the water. No baggy board shorts—just a sleek, functional fit for active swimmers.",
    shortDescription: "European-style boys swim shorts for active swimmers.",
    features: [
      "European-style fitted cut",
      "Freedom of movement in water",
      "Quick-dry fabric",
      "Elastic waist with drawstring",
      "High-visibility color options",
    ],
    torsoOptions: ["n/a"],
    sizes: ["2T", "3T", "4T", "5", "6", "7", "8"],
    colors: [
      { name: "Navy", hex: "#1B3A4B" },
      { name: "Safety Orange", hex: "#FF8C42" },
    ],
    images: [
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    ],
    rating: 4.7,
    reviewCount: 19,
  },
  {
    id: "5",
    slug: "the-everyday-lake-tote",
    name: "The Everyday Lake Tote",
    category: "accessories",
    price: 68,
    description:
      "A roomy, lightweight striped beach tote that fits towels, sunscreen, snacks, and more. Classic summer style that works for beach days, pool trips, and everyday errands.",
    shortDescription: "Roomy striped beach tote—stylish and functional.",
    features: [
      "Extra roomy interior",
      "Lightweight & easy to carry",
      "Classic striped design",
      "Versatile for beach, travel & errands",
      "Durable construction",
    ],
    torsoOptions: ["n/a"],
    sizes: ["One Size"],
    colors: [{ name: "Classic Stripes", hex: "#F5F0E8" }],
    images: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80",
    ],
    rating: 4.9,
    reviewCount: 24,
  },
  {
    id: "6",
    slug: "coastal-cowgirl-beach-hat",
    name: "Coastal Cowgirl Beach Hat",
    category: "accessories",
    price: 42,
    description:
      "A stylish Western beach hat with turquoise detail. Wide brim sun protection, lightweight comfort, and an adjustable fit for windy beach days.",
    shortDescription: "Western beach hat with turquoise—sun protection & style.",
    features: [
      "Wide brim sun protection",
      "Turquoise western detail",
      "Lightweight & comfortable",
      "Adjustable fit",
      "UPF protection",
    ],
    torsoOptions: ["n/a"],
    sizes: ["One Size"],
    colors: [{ name: "Natural/Turquoise", hex: "#D4C4A8" }],
    images: [
      "https://images.unsplash.com/photo-1529958030176-2744575085d9?w=800&q=80",
    ],
    rating: 4.8,
    reviewCount: 15,
  },
  {
    id: "7",
    slug: "childrens-scuba-goggles",
    name: "Children's Scuba Goggles",
    category: "accessories",
    price: 22,
    description:
      "Quality scuba goggles designed for little hands and curious explorers. Sturdy construction that holds up to active water play.",
    shortDescription: "Quality goggles built for little explorers.",
    features: [
      "Kid-friendly sizing",
      "Sturdy construction",
      "Comfortable seal",
      "Anti-fog lens",
      "Fun colors",
    ],
    torsoOptions: ["n/a"],
    sizes: ["One Size"],
    colors: [{ name: "Blue", hex: "#2C5F7C" }],
    images: [
      "https://images.unsplash.com/photo-1530549387789-4c1017266635?w=800&q=80",
    ],
    rating: 5.0,
    reviewCount: 8,
  },
  {
    id: "8",
    slug: "sea-shell-mesh-bags",
    name: "Sea Shell Mesh Bags",
    category: "accessories",
    price: 18,
    description:
      "Mesh bags perfect for collecting shells, treasures, and beach finds. Great quality and sturdy enough for little hands exploring their world.",
    shortDescription: "Sturdy mesh bags for beach treasures.",
    features: [
      "Durable mesh construction",
      "Perfect for shell collecting",
      "Kid-friendly size",
      "Sand drains easily",
      "Multiple color options",
    ],
    torsoOptions: ["n/a"],
    sizes: ["One Size"],
    colors: [
      { name: "Pink", hex: "#FFB6C1" },
      { name: "Blue", hex: "#87CEEB" },
    ],
    images: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
    ],
    rating: 4.9,
    reviewCount: 12,
  },
  {
    id: "9",
    slug: "the-trish-long-torso",
    name: "THE TRISH — Long Torso",
    category: "womens",
    price: 98,
    description:
      "THE TRISH with extra length through the torso for taller frames or longer torsos. Same compressive support, same stay-in-place confidence—just more room where you need it.",
    shortDescription: "Extra torso length for taller frames.",
    features: [
      "Extended torso length",
      "Compressive, smoothing fabric",
      "Square neckline with full coverage",
      "Stays in place during active water play",
      "UPF 50+ sun protection",
    ],
    torsoOptions: ["long-torso"],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: [
      { name: "Nautical Stripes", hex: "#1B3A4B" },
      { name: "Ocean Blue", hex: "#2C5F7C" },
    ],
    images: [
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80",
    ],
    badge: "Long Torso",
    rating: 4.9,
    reviewCount: 31,
    isNew: true,
  },
];

export const reviews: Review[] = [
  {
    id: "1",
    author: "Customer",
    date: "06/23/2026",
    rating: 5,
    title: "Precious and Safe!",
    body: "This is a precious swimsuit! My daughter loves it and the best part is that I can spot her easily in the pool with this print!",
    productName: "THE MINI TRISH",
  },
  {
    id: "2",
    author: "AJ Kikumoto",
    date: "05/18/2026",
    rating: 5,
    title: "I absolutely love the Trish!",
    body: "I absolutely love the Trish! I got the nautical stripes! The material is so soft, and the suit is well made. Fits like a glove! Highly recommend if you want a comfortable, great coverage suit!",
    productName: "THE TRISH",
  },
  {
    id: "3",
    author: "Mandi Pederson",
    date: "03/19/2026",
    rating: 5,
    title: "Practical & beautiful!",
    body: "Love the fit and compression of this suit! The square neckline is my favorite and I love how I don't have to worry about any cheek hanging out, the suit stays in place and doesn't ride up with movement.",
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
    body: "This is hands down one of my favorite striped beach tote bags I've owned. It's super roomy, lightweight, and easy to carry—even when it's packed full.",
    productName: "The Everyday Lake Tote",
  },
  {
    id: "6",
    author: "Eileen B.",
    date: "04/18/2026",
    rating: 5,
    title: "Cute & Spacious Striped Beach Bag",
    body: "I'm obsessed with this striped beach bag from TANA ANA—it's the perfect mix of cute and practical. The size is amazing and fits all my beach essentials.",
    productName: "The Everyday Lake Tote",
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "water-safety-for-kids-before-summer",
    title: "Water Safety for Kids: What Every Parent Should Know Before Summer",
    excerpt:
      "Learn essential water safety tips for kids before summer. Help your child stay safe and confident around pools, lakes, and beaches.",
    image:
      "https://images.unsplash.com/photo-1505118380757-91f5eb962245?w=800&q=80",
    category: "Water Safety",
    readTime: "5 min read",
    date: "May 15, 2026",
    content: [
      "Summer means pool parties, lake days, and beach vacations—but before your kids dive in, water safety should be top of mind.",
      "Always assign a designated water watcher when children are swimming. This person should avoid distractions like phones and focus entirely on the kids in the water.",
      "Enroll children in swim lessons appropriate for their age and skill level. Even basic water comfort can make a significant difference in an emergency.",
      "Choose highly visible swimwear colors. Bright yellows, corals, and neon tones make it easier to spot your child in crowded pools and open water—one reason TANA ANA prioritizes safety colors in our children's collection.",
      "Teach kids to never swim alone and to always ask permission before entering the water. Establish clear rules about where they can and cannot go.",
      "Learn CPR and basic water rescue skills. These skills can save lives in the critical minutes before emergency services arrive.",
    ],
  },
  {
    slug: "cold-water-safety-spring-lake-safety",
    title: "Cold Water Safety: Why Lakes & Rivers Are More Dangerous in Spring",
    excerpt:
      "Spring water can be colder and stronger than it looks. Learn cold water safety tips and how to stay safe around lakes and rivers this spring.",
    image:
      "https://images.unsplash.com/photo-1439854516164-0abcd1234567?w=800&q=80",
    category: "Water Safety",
    readTime: "4 min read",
    date: "April 22, 2026",
    content: [
      "Spring weather may feel warm, but lake and river water temperatures often remain dangerously cold well into the season.",
      "Cold water shock can occur in water below 70°F (21°C), causing involuntary gasping, hyperventilation, and impaired muscle function within minutes.",
      "Always check water temperature before entering. If the water feels cold to your hand, it's too cold for extended swimming without a wetsuit.",
      "Spring runoff can also create strong currents in rivers and streams that aren't visible from the surface. Never underestimate moving water.",
      "Dress appropriately with layers you can remove as you warm up, and always supervise children closely near any body of water.",
    ],
  },
  {
    slug: "rip-current-safety-101",
    title: "Rip Current Safety 101: How to Spot One and What to Do If You're Caught",
    excerpt:
      "Understanding rip current safety is essential for beach days. Learn how to identify rip currents and survive if caught in one.",
    image:
      "https://images.unsplash.com/photo-1505118380757-91f5eb962245?w=800&q=80",
    category: "Water Safety",
    readTime: "6 min read",
    date: "March 10, 2026",
    content: [
      "Rip currents are powerful, narrow channels of water flowing away from shore. They account for the majority of beach rescues each year.",
      "Look for these signs: a channel of churning, choppy water; a line of foam or debris moving steadily seaward; a break in the wave pattern; or water that appears darker than surrounding areas.",
      "If caught in a rip current, stay calm. Don't fight the current by swimming directly toward shore.",
      "Swim parallel to the shore until you're out of the current, then swim at an angle back to the beach.",
      "If you can't escape, float or tread water and signal for help by waving your arms and calling out.",
      "Always swim at beaches with lifeguards and check local conditions before entering the water.",
    ],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category);
}

export function getCollectionBySlug(slug: string): Collection | undefined {
  return collections.find((c) => c.slug === slug);
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
