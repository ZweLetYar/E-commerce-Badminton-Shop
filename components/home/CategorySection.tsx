import Image from "next/image";
import Link from "next/link";
import { products } from "../../data";
import type { Product } from "../../data/types";
import { ProductCard } from "./ProductCard";

const categoryTiles = [
  {
    name: "Rackets",
    detail: "Power, speed, and control.",
    href: "/rackets",
    image: "/showcase/rackets.jpg",
  },
  {
    name: "Shoes",
    detail: "Move with confidence.",
    href: "/shoes",
    image: "/showcase/shoes.jpg",
  },
  {
    name: "Clothing",
    detail: "Court-ready comfort.",
    href: "/clothings",
    image: "/showcase/sportwears.jpg",
  },
  {
    name: "Accessories",
    detail: "The details that matter.",
    href: "/accessories",
    image: "/showcase/accessories.jpg",
  },
] as const;

type CuratedSection = {
  name: string;
  products: Product[];
};

export function CategorySection() {
  const newArrivals = products
    .filter((product) => product.featured)
    .slice(0, 4);
  const bestSellers = [...products]
    .sort((first, second) => second.rating - first.rating)
    .slice(0, 4);

  const sections: CuratedSection[] = [
    { name: "New Arrivals", products: newArrivals },
    { name: "Best Sellers", products: bestSellers },
  ];

  return (
    <section className="mx-auto max-w-[1280px] px-6 py-7 md:px-12 md:py-12">
      <div className="mb-14 flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
        <div>
          <p className="mb-5 text-[10px] font-bold uppercase tracking-[.2em] text-[#6d891d]">
            Curated for the court
          </p>
          <h2 className="font-display text-5xl font-medium leading-[.9] tracking-[-.07em] sm:text-7xl">
            Find your
            <br />
            <em className="font-serif font-normal tracking-[-.08em] text-[#6d891d]">
              next edge.
            </em>
          </h2>
        </div>
        <Link
          className="border-b border-[#b6d63f] pb-2 text-[11px] font-bold uppercase tracking-[.12em] text-[#6d891d] transition hover:border-[#536b18] hover:text-[#536b18]"
          href="/shop"
        >
          View all equipment <span className="ml-5 text-lg">→</span>
        </Link>
      </div>

      <div className="space-y-20">
        {sections.map((section) => (
          <div key={section.name}>
            <div className="mb-6 flex items-end justify-between gap-4">
              <div>
                <p className="mb-2 text-[10px] font-bold uppercase tracking-[.16em] text-[#87938a]">
                  {section.name === "New Arrivals"
                    ? "Fresh on court"
                    : "Player favourites"}
                </p>
                <h3 className="font-display text-3xl tracking-[-.04em] text-[#18201b]">
                  {section.name}
                </h3>
              </div>
              <Link
                className="border-b border-[#b6d63f]/60 pb-1 text-[10px] font-bold uppercase tracking-[.12em] text-[#6d891d] transition hover:border-[#b6d63f]"
                href={
                  section.name === "New Arrivals"
                    ? "/new-arrivals"
                    : "/best-sellers"
                }
              >
                View all <span className="ml-2 text-sm">→</span>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-2.5 sm:gap-4 md:grid-cols-3 xl:grid-cols-4">
              {section.products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-24">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <p className="mb-2 text-[10px] font-bold uppercase tracking-[.16em] text-[#87938a]">
              Shop by category
            </p>
            <h3 className="font-display text-3xl tracking-[-.04em] text-[#18201b]">
              Build your setup
            </h3>
          </div>
          <Link
            className="hidden border-b border-[#b6d63f]/60 pb-1 text-[10px] font-bold uppercase tracking-[.12em] text-[#6d891d] transition hover:border-[#b6d63f] sm:block"
            href="/shop"
          >
            Browse everything <span className="ml-2 text-sm">→</span>
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          {categoryTiles.map((category) => (
            <Link
              className="group relative aspect-[1.15] overflow-hidden rounded-2xl border border-[#d9dfd6] bg-[#e9efe5] shadow-lg shadow-[#2c4130]/[0.05]"
              href={category.href}
              key={category.name}
            >
              <Image
                src={category.image}
                alt={category.name}
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#18201b]/80 via-[#18201b]/10 to-transparent" />
              <div className="absolute inset-x-4 bottom-4 text-white sm:inset-x-5 sm:bottom-5">
                <h4 className="font-display text-xl tracking-[-.03em] sm:text-2xl">
                  {category.name}
                </h4>
                <p className="mt-1 text-[10px] text-white/75 sm:text-xs">
                  {category.detail}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-20 flex flex-col items-center justify-between gap-5 rounded-2xl bg-[#18201b] px-6 py-8 text-center sm:flex-row sm:px-10 sm:text-left">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[.16em] text-[#b6d63f]">
            Ready for the next point?
          </p>
          <p className="mt-2 font-display text-2xl text-white">
            Explore the complete collection.
          </p>
        </div>
        <Link
          className="rounded-full bg-[#b6d63f] px-5 py-3 text-[10px] font-bold uppercase tracking-[.12em] text-[#17200f] transition hover:bg-[#dce8c4]"
          href="/shop"
        >
          Shop all products
        </Link>
      </div>
    </section>
  );
}
