import { CategoryProductGrid } from "../../../components/products/CategoryProductGrid";
import { products } from "../../../data";

export default function BestSellersPage() {
  const bestSellers = [...products].sort((first, second) => {
    return second.rating - first.rating;
  });

  return (
    <main className="mx-auto max-w-[1280px] px-6 py-16 md:px-12 md:py-24">
      <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#6d891d]">
        Player favourites
      </p>
      <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
        <h1 className="font-display text-6xl font-medium leading-[.9] tracking-[-.07em] sm:text-8xl">
          Best
          <br />
          <em className="font-serif font-normal text-[#6d891d]">sellers.</em>
        </h1>
        <p className="max-w-sm text-sm leading-6 text-[#68736b]">
          Proven equipment loved by players who stay ready for the next rally.
        </p>
      </div>
      <div className="mt-14">
        <CategoryProductGrid products={bestSellers} />
      </div>
    </main>
  );
}
