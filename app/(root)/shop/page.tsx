import { CategoryProductGrid } from "../../../components/products/CategoryProductGrid";
import { products } from "../../../data";

export default async function ShopPage({
  searchParams,
}: {
  searchParams: Promise<{ search?: string }>;
}) {
  const { search } = await searchParams;
  const query = search?.trim() ?? "";
  const normalizedQuery = query.toLowerCase();
  const filteredProducts = normalizedQuery
    ? products.filter((product) =>
        [product.name, product.category, product.description].some((value) =>
          value.toLowerCase().includes(normalizedQuery),
        ),
      )
    : products;

  return (
    <main className="mx-auto max-w-[1280px] px-6 py-16 md:px-12 md:py-24">
      <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#6d891d]">
        Shop the collection
      </p>
      <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
        <h1 className="font-display text-6xl font-medium leading-[.9] tracking-[-.07em] sm:text-8xl">
          Equipment for
          <br />
          <em className="font-serif font-normal text-[#6d891d]">the rally.</em>
        </h1>
        <p className="max-w-sm text-sm leading-6 text-[#68736b]">
          Explore rackets, court shoes, clothing, and considered accessories
          built for every session.
        </p>
      </div>
      <div className="mt-14">
        {query && (
          <p className="mb-6 text-sm text-[#68736b]">
            {filteredProducts.length} result
            {filteredProducts.length === 1 ? "" : "s"} for{" "}
            <span className="font-bold text-[#18201b]">“{query}”</span>
          </p>
        )}
        {filteredProducts.length > 0 ? (
          <CategoryProductGrid products={filteredProducts} />
        ) : (
          <div className="rounded-2xl border border-dashed border-[#bfcbbb] bg-white/60 px-6 py-16 text-center">
            <h2 className="font-display text-3xl tracking-[-.04em] text-[#18201b]">
              No products found
            </h2>
            <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-[#68736b]">
              Try a different product name or browse the full collection.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
