import type { Metadata } from "next";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { CartProvider } from "@/context/CartContext";

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const sourceSans = Source_Sans_3({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "TANA ANA Swimwear | Long Torso & Mommy & Me One-Piece Swimsuits",
    template: "%s | TANA ANA Swimwear",
  },
  description:
    "Premium women's and family swimwear with Long Torso & Regular Torso options. Family matching collections and high-visibility colors for children's water safety.",
  keywords: [
    "swimwear",
    "one piece swimsuit",
    "long torso swimsuit",
    "mommy and me",
    "water safety swimwear",
    "family matching swimsuits",
  ],
  openGraph: {
    title: "TANA ANA Swimwear",
    description:
      "Premium fit, family matching, and water safety—swimwear designed with purpose.",
    url: "https://tanaanaswim.com",
    siteName: "TANA ANA Swimwear",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${sourceSans.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">
        <CartProvider>
          <AnnouncementBar />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
