import type { Product } from "../../data/types";
import { ProductCard } from "../home/ProductCard";

type CategoryProductGridProps = {
  products: Product[];
};

export function CategoryProductGrid({ products }: CategoryProductGridProps) {
  return (
    <div className="grid grid-cols-2 gap-2.5 sm:gap-4 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
