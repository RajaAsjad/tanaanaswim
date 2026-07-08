export type TorsoType = "long-torso" | "regular-torso" | "n/a";

export type ProductCategory = "womens" | "childrens" | "accessories";

export interface ProductVariant {
  id: string;
  name: string;
  torso?: TorsoType;
  size?: string;
  color?: string;
  price: number;
  inStock: boolean;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: ProductCategory;
  price: number;
  compareAtPrice?: number;
  description: string;
  shortDescription: string;
  features: string[];
  torsoOptions: TorsoType[];
  sizes: string[];
  colors: { name: string; hex: string }[];
  images: string[];
  badge?: string;
  rating: number;
  reviewCount: number;
  isBestseller?: boolean;
  isNew?: boolean;
  safetyHighlight?: string;
  shopifyUrl?: string;
  tags?: string[];
}

export interface Collection {
  slug: string;
  name: string;
  description: string;
  image: string;
  heroImage: string;
}

export interface Review {
  id: string;
  author: string;
  date: string;
  rating: number;
  title: string;
  body: string;
  productName: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  readTime: string;
  date: string;
  content: string[];
}

export interface CartItem {
  productId: string;
  slug: string;
  name: string;
  price: number;
  size: string;
  torso: string;
  color: string;
  quantity: number;
  image: string;
}
