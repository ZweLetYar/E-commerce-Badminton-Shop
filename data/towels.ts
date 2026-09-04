import type { Product } from "./types";

export const towels: Product[] = [
  {
    id: "towel-rally-mini",
    name: "Rally Mini Towel",
    category: "Towels",
    price: 22000,
    currency: "MMK",
    image: "/showcase/accessories.jpg",
    description: "Soft absorbent court towel sized for your racket bag.",
    rating: 4.5,
    stock: 29,
    featured: false,
  },
  {
    id: "towel-match-large",
    name: "Match Towel",
    category: "Towels",
    price: 32000,
    currency: "MMK",
    image: "/showcase/accessories.jpg",
    description: "Quick-dry training towel for long sessions and match days.",
    rating: 4.7,
    stock: 21,
    featured: true,
  },
  {
    id: "towel-court-face",
    name: "Court Face Towel",
    category: "Towels",
    price: 26000,
    currency: "MMK",
    image: "/showcase/accessories.jpg",
    description:
      "Compact soft-touch towel for quick breaks and racket-bag storage.",
    rating: 4.5,
    stock: 24,
    featured: false,
  },
  {
    id: "towel-training-set",
    name: "Training Towel Set",
    category: "Towels",
    price: 48000,
    currency: "MMK",
    image: "/showcase/accessories.jpg",
    description:
      "Two quick-dry towels for training partners and long club sessions.",
    rating: 4.6,
    stock: 13,
    featured: true,
  },
];
