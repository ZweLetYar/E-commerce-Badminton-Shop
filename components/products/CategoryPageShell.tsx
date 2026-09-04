import Link from "next/link";
import type { Product } from "../../data/types";
import { CategoryProductGrid } from "./CategoryProductGrid";

type CategoryPageShellProps = {
  eyebrow: string;
  name: string;
  description: string;
  products: Product[];
  backHref?: string;
  backLabel?: string;
};

export function CategoryPageShell({
  eyebrow,
  name,
  description,
  products,
  backHref,
  backLabel,
}: CategoryPageShellProps) {
  return (
    <main className="mx-auto max-w-[1280px] px-6 py-20 md:px-12 md:py-28">
      {backHref && (
        <Link
          className="text-xs uppercase tracking-[.14em] text-white/40 transition hover:text-[#d8f36a]"
          href={backHref}
        >
          ← {backLabel ?? "Back"}
        </Link>
      )}
      <div className={backHref ? "mt-14" : ""}>
        <p className="mb-6 text-[10px] font-bold uppercase tracking-[.2em] text-[#d8f36a]">
          {eyebrow}
        </p>
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <h1 className="font-display text-6xl font-medium tracking-[-.07em] sm:text-8xl">
            {name}
          </h1>
          <p className="max-w-sm text-sm leading-6 text-white/45">
            {description}
          </p>
        </div>
      </div>
      <div className="mt-14">
        <CategoryProductGrid products={products} />
      </div>
    </main>
  );
}
