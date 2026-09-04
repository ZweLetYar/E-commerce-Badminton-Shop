import Image from "next/image";
import Link from "next/link";
import type { Product } from "../../data/types";

type ProductCardProps = {
  product: Product;
};

const priceFormatter = new Intl.NumberFormat("en-US");

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] shadow-xl shadow-black/10 backdrop-blur-md transition-colors duration-300 hover:border-[#d8f36a]/40">
      <Link
        href={`/products/${product.id}`}
        aria-label={`View ${product.name}`}
      >
        <div className="relative aspect-[1.45] overflow-hidden bg-[#171d19]">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
          {product.featured && (
            <span className="absolute left-4 top-4 rounded-full border border-[#d8f36a]/40 bg-[#d8f36a]/15 px-3 py-1 text-[9px] font-bold uppercase tracking-[.14em] text-[#d8f36a] backdrop-blur-md">
              Featured
            </span>
          )}
          <span className="absolute bottom-4 right-4 rounded-full bg-black/45 px-2.5 py-1 text-[10px] text-white/75 backdrop-blur-md">
            {product.rating.toFixed(1)} ★
          </span>
        </div>
        <div className="p-4">
          <p className="mb-1.5 text-[10px] font-bold uppercase tracking-[.16em] text-[#d8f36a]">
            {product.category}
          </p>
          <div className="flex items-start justify-between gap-4">
            <h3 className="font-display text-xl tracking-[-.03em] text-white">
              {product.name}
            </h3>
            <span className="text-lg text-[#d8f36a] transition-transform duration-300 group-hover:translate-x-1">
              ↗
            </span>
          </div>
          <p className="mt-2 line-clamp-2 text-xs leading-4 text-white/40">
            {product.description}
          </p>
          <div className="mt-3 flex items-center justify-between border-t border-white/10 pt-3">
            <span className="font-display text-lg text-white">
              {priceFormatter.format(product.price)}{" "}
              <small className="font-sans text-[9px] text-white/40">
                {product.currency}
              </small>
            </span>
            <span className="text-[10px] text-white/35">
              {product.stock} in stock
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
