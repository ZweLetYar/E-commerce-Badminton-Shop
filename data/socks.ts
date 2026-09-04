import type { Product } from "./types";

export const socks: Product[] = [
  {
    id: "socks-court-crew",
    name: "Court Crew Socks",
    category: "Socks",
    price: 18000,
    currency: "MMK",
    image: "/showcase/sportwears.jpg",
    description:
      "Cushioned court socks with arch support and breathable mesh panels.",
    rating: 4.6,
    stock: 40,
    featured: true,
  },
  {
    id: "socks-ankle-lite",
    name: "Ankle Lite Socks",
    category: "Socks",
    price: 15000,
    currency: "MMK",
    image: "/showcase/sportwears.jpg",
    description:
      "Low-profile performance socks for lightweight everyday movement.",
    rating: 4.4,
    stock: 33,
    featured: false,
  },
  {
    id: "socks-cushion-mid",
    name: "Cushion Mid Socks",
    category: "Socks",
    price: 20000,
    currency: "MMK",
    image: "/showcase/sportwears.jpg",
    description:
      "Mid-cut socks with reinforced heel and toe cushioning for court play.",
    rating: 4.7,
    stock: 26,
    featured: true,
  },
  {
    id: "socks-performance-pair",
    name: "Performance Pair",
    category: "Socks",
    price: 24000,
    currency: "MMK",
    image: "/showcase/sportwears.jpg",
    description:
      "Two pairs of moisture-wicking socks with a secure no-slip fit.",
    rating: 4.5,
    stock: 30,
    featured: false,
  },
];
