"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { Product } from "../../data/types";

type ProductCardProps = {
  product: Product;
};

const priceFormatter = new Intl.NumberFormat("en-US");

export function ProductCard({ product }: ProductCardProps) {
  const [isSaved, setIsSaved] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const isLowStock = product.stock > 0 && product.stock <= 5;

  return (
    <article className="group overflow-hidden rounded-2xl border border-[#d9dfd6] bg-white shadow-lg shadow-[#2c4130]/[0.05] transition duration-300 hover:-translate-y-1 hover:border-[#b6d63f] hover:shadow-xl hover:shadow-[#2c4130]/[0.1]">
      <Link
        href={`/products/${product.id}`}
        aria-label={`View ${product.name}`}
      >
        <div className="relative aspect-[1.4] overflow-hidden bg-[#e4ebe0] sm:aspect-[1.5]">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#18201b]/40 via-transparent to-transparent" />
          {product.featured && (
            <span className="absolute left-3 top-3 rounded-full bg-[#b6d63f] px-2.5 py-1.5 text-[8px] font-bold uppercase tracking-[.12em] text-[#17200f] sm:left-4 sm:top-4 sm:text-[9px]">
              Editor&apos;s pick
            </span>
          )}
          <button
            type="button"
            onClick={(event) => {
              event.preventDefault();
              setIsSaved((current) => !current);
            }}
            className={`absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full border text-lg backdrop-blur-md transition sm:right-4 sm:top-4 ${
              isSaved
                ? "border-[#b6d63f] bg-[#dce8c4] text-[#536b18]"
                : "border-white/70 bg-[#18201b]/55 text-white hover:border-[#b6d63f] hover:bg-[#dce8c4] hover:text-[#536b18]"
            }`}
            aria-label={isSaved ? "Remove from wishlist" : "Add to wishlist"}
            aria-pressed={isSaved}
          >
            {isSaved ? "♥" : "♡"}
          </button>
          <span className="absolute bottom-3 left-3 rounded-full bg-[#18201b]/75 px-2.5 py-1.5 text-[10px] font-bold text-white backdrop-blur-md sm:bottom-4 sm:left-4">
            ★ {product.rating.toFixed(1)}
          </span>
          <span className="absolute bottom-3 right-3 text-[9px] font-bold uppercase tracking-[.1em] text-white/85 sm:bottom-4 sm:right-4">
            {product.stock > 0 ? "Available" : "Sold out"}
          </span>
        </div>
      </Link>
      <div className="p-3 sm:p-4">
        <Link href={`/products/${product.id}`}>
          <p className="text-[9px] font-bold uppercase tracking-[.14em] text-[#6d891d] sm:text-[10px]">
            {product.category}
          </p>
          <div className="mt-1.5 flex items-start justify-between gap-2">
            <h3 className="font-display text-base leading-tight tracking-[-.03em] text-[#18201b] sm:text-xl">
              {product.name}
            </h3>
            <span className="text-base text-[#6d891d] transition-transform duration-300 group-hover:translate-x-1 sm:text-lg">
              ↗
            </span>
          </div>
          {/* <p className="mt-2 line-clamp-2 min-h-10 text-[11px] leading-5 text-[#68736b]">
            {product.description}
          </p> */}
        </Link>
        <div className="mt-3 flex items-end justify-between gap-2 border-t border-[#d9dfd6] pt-3">
          <div>
            <span className="font-display text-base text-[#18201b] sm:text-lg">
              {priceFormatter.format(product.price)}
            </span>
            <span className="ml-1 text-[8px] font-bold uppercase tracking-[.08em] text-[#87938a]">
              {product.currency}
            </span>
            <p
              className={`mt-1 text-[9px] font-bold uppercase tracking-[.08em] ${isLowStock ? "text-[#b35c22]" : "text-[#87938a]"}`}
            >
              {product.stock === 0
                ? "Unavailable"
                : isLowStock
                  ? `Only ${product.stock} left`
                  : `${product.stock} in stock`}
            </p>
          </div>
          <button
            type="button"
            disabled={product.stock === 0}
            onClick={() => setIsAdded(true)}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#18201b] text-lg text-white transition hover:bg-[#536b18] disabled:cursor-not-allowed disabled:bg-[#cbd6c5]"
            aria-label={
              isAdded
                ? `${product.name} added to cart`
                : `Add ${product.name} to cart`
            }
          >
            {isAdded ? "✓" : "+"}
          </button>
        </div>
      </div>
    </article>
  );
}
