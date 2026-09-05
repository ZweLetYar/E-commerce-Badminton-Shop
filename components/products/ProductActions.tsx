"use client";

import { useState } from "react";

type ProductActionsProps = {
  stock: number;
};

export function ProductActions({ stock }: ProductActionsProps) {
  const [quantity, setQuantity] = useState(1);
  const [isSaved, setIsSaved] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  const decreaseQuantity = () => {
    setQuantity((current) => Math.max(1, current - 1));
    setIsAdded(false);
  };

  const increaseQuantity = () => {
    setQuantity((current) => Math.min(stock, current + 1));
    setIsAdded(false);
  };

  return (
    <div className="mt-9 space-y-3">
      <div className="flex flex-col gap-3 sm:flex-row">
        <div className="flex h-14 items-center justify-between rounded-full border border-[#cbd6c5] bg-white px-2 sm:w-36">
          <button
            type="button"
            onClick={decreaseQuantity}
            className="flex h-10 w-10 items-center justify-center rounded-full text-xl text-[#536057] transition hover:bg-[#dce8c4] hover:text-[#536b18]"
            aria-label="Decrease quantity"
          >
            −
          </button>
          <span className="text-sm font-bold text-[#18201b]">{quantity}</span>
          <button
            type="button"
            onClick={increaseQuantity}
            className="flex h-10 w-10 items-center justify-center rounded-full text-xl text-[#536057] transition hover:bg-[#dce8c4] hover:text-[#536b18]"
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>
        <button
          type="button"
          onClick={() => setIsAdded(true)}
          className="flex h-14 flex-1 items-center justify-center gap-3 rounded-full bg-[#18201b] px-6 text-xs font-bold uppercase tracking-[0.14em] text-white transition hover:bg-[#536b18]"
        >
          {isAdded ? "Added to cart" : "Add to cart"}
          <span aria-hidden="true">↗</span>
        </button>
      </div>
      <button
        type="button"
        onClick={() => setIsSaved((current) => !current)}
        className={`flex h-12 w-full items-center justify-center gap-2 rounded-full border text-xs font-bold uppercase tracking-[0.14em] transition ${
          isSaved
            ? "border-[#b6d63f] bg-[#dce8c4] text-[#536b18]"
            : "border-[#cbd6c5] bg-transparent text-[#536057] hover:border-[#b6d63f] hover:bg-[#dce8c4] hover:text-[#536b18]"
        }`}
        aria-pressed={isSaved}
      >
        <span className="text-lg leading-none" aria-hidden="true">
          {isSaved ? "♥" : "♡"}
        </span>
        {isSaved ? "Saved to wishlist" : "Add to wishlist"}
      </button>
    </div>
  );
}
