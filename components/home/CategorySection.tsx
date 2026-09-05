import Link from "next/link";
import {
  bags,
  clothings,
  grips,
  rackets,
  shoes,
  shuttlecocks,
  socks,
  strings,
  towels,
  wristbands,
} from "../../data";
import type { Product } from "../../data/types";
import { ProductCard } from "./ProductCard";

const categoryRows: {
  name: string;
  href: string;
  products: Product[];
}[] = [
  { name: "Rackets", href: "/rackets", products: rackets },
  { name: "Shoes", href: "/shoes", products: shoes },
  { name: "Clothings", href: "/clothings", products: clothings },
  { name: "Grips", href: "/accessories/grips", products: grips },
  { name: "Bags", href: "/accessories/bags", products: bags },
  { name: "Strings", href: "/accessories/strings", products: strings },
  { name: "Socks", href: "/accessories/socks", products: socks },
  {
    name: "Shuttlecocks",
    href: "/accessories/shuttlecocks",
    products: shuttlecocks,
  },
  { name: "Towels", href: "/accessories/towels", products: towels },
  {
    name: "Wristbands",
    href: "/accessories/wristbands",
    products: wristbands,
  },
];

export function CategorySection() {
  return (
    <section className="mx-auto max-w-[1280px] px-6 py-24 md:px-12 md:py-32">
      <div className="mb-12 flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
        <div>
          <p className="mb-6 text-[10px] font-bold uppercase tracking-[.2em] text-[#6d891d]">
            The essentials
          </p>
          <h2 className="font-display text-5xl font-medium leading-[.9] tracking-[-.07em] sm:text-7xl">
            Built for your
            <br />
            <em className="font-serif font-normal tracking-[-.08em] text-[#6d891d]">
              best game.
            </em>
          </h2>
        </div>
        <Link
          className="border-b border-[#b6d63f] pb-2 text-[11px] uppercase text-[#6d891d]"
          href="/products"
        >
          View all equipment <span className="ml-5 text-lg">→</span>
        </Link>
      </div>
      <div className="space-y-20">
        {categoryRows.map((category) => (
          <div key={category.name}>
            <div className="mb-6 flex items-end justify-between gap-4">
              <h3 className="font-display text-3xl tracking-[-.04em] text-[#18201b]">
                {category.name}
              </h3>
              <Link
                className="border-b border-[#b6d63f]/60 pb-1 text-[10px] uppercase tracking-[.12em] text-[#6d891d] transition hover:border-[#b6d63f]"
                href={category.href}
              >
                View all <span className="ml-2 text-sm">→</span>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4">
              {category.products.slice(0, 4).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
