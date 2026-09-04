import type { Product } from "./types";

export const clothings: Product[] = [
  {
    id: "clothing-rally-tee",
    name: "Rally Performance Tee",
    category: "Clothings",
    price: 68000,
    currency: "MMK",
    image: "/showcase/sportwears.jpg",
    description:
      "Lightweight quick-dry tee with unrestricted movement through every swing.",
    rating: 4.7,
    stock: 22,
    featured: true,
  },
  {
    id: "clothing-court-shorts",
    name: "Court Motion Shorts",
    category: "Clothings",
    price: 72000,
    currency: "MMK",
    image: "/showcase/sportwears.jpg",
    description:
      "Stretch court shorts with secure pockets and a clean athletic fit.",
    rating: 4.6,
    stock: 17,
    featured: false,
  },
  {
    id: "clothing-match-set",
    name: "Match Day Set",
    category: "Clothings",
    price: 125000,
    currency: "MMK",
    image: "/showcase/sportwears.jpg",
    description:
      "Breathable top and short set designed for focused match days.",
    rating: 4.8,
    stock: 10,
    featured: true,
  },
  {
    id: "clothing-rally-polo",
    name: "Rally Court Polo",
    category: "Clothings",
    price: 82000,
    currency: "MMK",
    image: "/showcase/sportwears.jpg",
    description:
      "Polished performance polo with quick-dry fabric and stretch panels.",
    rating: 4.7,
    stock: 14,
    featured: false,
  },
  {
    id: "clothing-warmup-jacket",
    name: "Court Warm-Up Jacket",
    category: "Clothings",
    price: 148000,
    currency: "MMK",
    image: "/showcase/sportwears.jpg",
    description:
      "Lightweight zip jacket for warm-ups, travel, and cool match halls.",
    rating: 4.6,
    stock: 8,
    featured: true,
  },
];
