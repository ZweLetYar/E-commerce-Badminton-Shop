import type { Product } from "../../data/types";
import { ProductCard } from "../home/ProductCard";

type CategoryProductGridProps = {
  products: Product[];
};

export function CategoryProductGrid({ products }: CategoryProductGridProps) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
