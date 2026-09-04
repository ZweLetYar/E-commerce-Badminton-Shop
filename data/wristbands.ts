import type { Product } from "./types";

export const wristbands: Product[] = [
  {
    id: "wristband-absorb",
    name: "Absorb Wristband",
    category: "Wristbands",
    price: 16000,
    currency: "MMK",
    image: "/showcase/sportwears.jpg",
    description:
      "Comfortable absorbent wristband that stays secure through fast rallies.",
    rating: 4.5,
    stock: 27,
    featured: false,
  },
  {
    id: "wristband-duo",
    name: "Rally Wristband Duo",
    category: "Wristbands",
    price: 26000,
    currency: "MMK",
    image: "/showcase/sportwears.jpg",
    description:
      "A two-pack of lightweight wristbands for training and competition.",
    rating: 4.8,
    stock: 18,
    featured: true,
  },
  {
    id: "wristband-wide-support",
    name: "Wide Support Band",
    category: "Wristbands",
    price: 19000,
    currency: "MMK",
    image: "/showcase/sportwears.jpg",
    description:
      "Wider sweat-absorbing band for a secure fit during intense rallies.",
    rating: 4.6,
    stock: 20,
    featured: false,
  },
  {
    id: "wristband-color-pack",
    name: "Match Color Pack",
    category: "Wristbands",
    price: 30000,
    currency: "MMK",
    image: "/showcase/sportwears.jpg",
    description: "Three color options to coordinate with your match-day kit.",
    rating: 4.7,
    stock: 16,
    featured: true,
  },
];
