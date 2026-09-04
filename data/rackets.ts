import type { Product } from "./types";

export const rackets: Product[] = [
  {
    id: "racket-apex-900",
    name: "Apex 900",
    category: "Rackets",
    price: 285000,
    currency: "MMK",
    image: "/rackets/racket-apex-900.jpg",
    description:
      "Head-light tournament racket for speed, precision, and quick defence.",
    rating: 4.9,
    stock: 8,
    featured: true,
  },
  {
    id: "racket-strike-78",
    name: "Strike 78",
    category: "Rackets",
    price: 198000,
    currency: "MMK",
    image: "/rackets/racket-strike-78.jpg",
    description:
      "Balanced all-round racket with a forgiving response for developing players.",
    rating: 4.7,
    stock: 14,
    featured: true,
  },
  {
    id: "racket-astrox-100zz",
    name: "Astrox 100ZZ",
    category: "Rackets",
    price: 325000,
    currency: "MMK",
    image: "/rackets/racket-astrox-100zz.jpg",
    description:
      "Stiff shaft and explosive frame geometry for aggressive singles play.",
    rating: 4.8,
    stock: 5,
    featured: false,
  },
  {
    id: "racket-aero-88",
    name: "Aero 88",
    category: "Rackets",
    price: 245000,
    currency: "MMK",
    image: "/rackets/racket-aero-88.jpg",
    description:
      "Fast aerodynamic racket for players who build points with pace.",
    rating: 4.6,
    stock: 11,
    featured: false,
  },
  {
    id: "racket-control-tour",
    name: "Control Tour",
    category: "Rackets",
    price: 275000,
    currency: "MMK",
    image: "/rackets/racket-control-tour.jpg",
    description:
      "Stable even-balance racket for precise placement and touch play.",
    rating: 4.8,
    stock: 7,
    featured: true,
  },
];
