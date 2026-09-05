import Image from "next/image";
import Link from "next/link";
import type { Product } from "../../data/types";

type ProductCardProps = {
  product: Product;
};

const priceFormatter = new Intl.NumberFormat("en-US");

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-[#d9dfd6] bg-white/75 shadow-xl shadow-[#2c4130]/[0.06] backdrop-blur-md transition-colors duration-300 hover:border-[#b6d63f]">
      <Link
        href={`/products/${product.id}`}
        aria-label={`View ${product.name}`}
      >
        <div className="relative aspect-[1.7] overflow-hidden bg-[#e4ebe0] sm:aspect-[1.45]">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#18201b]/45 via-transparent to-transparent" />
          {product.featured && (
            <span className="absolute left-2 top-2 rounded-full border border-[#b6d63f]/60 bg-[#eef3d8]/90 px-2 py-1 text-[8px] font-bold uppercase tracking-[.1em] text-[#536b18] backdrop-blur-md sm:left-4 sm:top-4 sm:px-3 sm:text-[9px] sm:tracking-[.14em]">
              Featured
            </span>
          )}
          <span className="absolute bottom-2 right-2 rounded-full bg-[#18201b]/70 px-2 py-1 text-[9px] text-white/90 backdrop-blur-md sm:bottom-4 sm:right-4 sm:px-2.5 sm:text-[10px]">
            {product.rating.toFixed(1)} ★
          </span>
        </div>
        <div className="p-2.5 sm:p-4">
          <p className="mb-1 text-[9px] font-bold uppercase tracking-[.1em] text-[#6d891d] sm:mb-1.5 sm:text-[10px] sm:tracking-[.16em]">
            {product.category}
          </p>
          <div className="flex items-start justify-between gap-2 sm:gap-4">
            <h3 className="font-display text-base leading-tight tracking-[-.03em] text-[#18201b] sm:text-xl">
              {product.name}
            </h3>
            <span className="text-sm text-[#6d891d] transition-transform duration-300 group-hover:translate-x-1 sm:text-lg">
              ↗
            </span>
          </div>
          <div className="mt-2 flex items-center justify-between border-t border-[#d9dfd6] pt-2 sm:mt-3 sm:pt-3">
            <span className="font-display text-sm text-[#18201b] sm:text-lg">
              {priceFormatter.format(product.price)}{" "}
              <small className="font-sans text-[8px] text-[#87938a] sm:text-[9px]">
                {product.currency}
              </small>
            </span>
            <span className="hidden text-[10px] text-[#87938a] sm:inline">
              {product.stock} in stock
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
