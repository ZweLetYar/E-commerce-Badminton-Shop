import type { Product } from "./types";

export const bags: Product[] = [
  {
    id: "bag-court-duffel",
    name: "Court Duffel 6",
    category: "Bags",
    price: 145000,
    currency: "MMK",
    image: "/showcase/bags.jpg",
    description:
      "Compact racket duffel with ventilated shoe storage and match-day organisation.",
    rating: 4.8,
    stock: 11,
    featured: true,
  },
  {
    id: "bag-tour-backpack",
    name: "Tour Backpack",
    category: "Bags",
    price: 118000,
    currency: "MMK",
    image: "/showcase/bags.jpg",
    description:
      "Everyday racket backpack with padded laptop and accessory compartments.",
    rating: 4.7,
    stock: 15,
    featured: false,
  },
  {
    id: "bag-racket-six",
    name: "Racket Bag 6-Pack",
    category: "Bags",
    price: 225000,
    currency: "MMK",
    image: "/showcase/bags.jpg",
    description:
      "Spacious six-racket bag with thermal protection and ventilated storage.",
    rating: 4.9,
    stock: 6,
    featured: true,
  },
  {
    id: "bag-sling-lite",
    name: "Sling Lite",
    category: "Bags",
    price: 85000,
    currency: "MMK",
    image: "/showcase/bags.jpg",
    description:
      "Minimal single-racket sling for quick sessions and daily commutes.",
    rating: 4.5,
    stock: 19,
    featured: false,
  },
];
