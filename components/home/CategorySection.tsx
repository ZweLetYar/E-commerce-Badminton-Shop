import Link from "next/link";
import { CategoryCard } from "./CategoryCard";

export function CategorySection() {
  return (
    <section className="mx-auto max-w-[1280px] px-6 py-24 md:px-12 md:py-32">
      <div className="mb-12 flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
        <div>
          <p className="mb-6 text-[10px] font-bold uppercase tracking-[.2em] text-[#d8f36a]">
            The essentials
          </p>
          <h2 className="font-display text-5xl font-medium leading-[.9] tracking-[-.07em] sm:text-7xl">
            Built for your
            <br />
            <em className="font-serif font-normal tracking-[-.08em] text-[#d8f36a]">
              best game.
            </em>
          </h2>
        </div>
        <Link
          className="border-b border-[#d8f36a] pb-2 text-[11px] uppercase text-[#d8f36a]"
          href="/products"
        >
          View all equipment <span className="ml-5 text-lg">→</span>
        </Link>
      </div>
      <div className="grid gap-4 md:grid-cols-[1.3fr_1fr_1fr]">
        <CategoryCard
          href="/products"
          title="Rackets"
          detail="Light. Fast. Exact."
          letter="R"
        />
        <CategoryCard
          href="/categories"
          title="Matchwear"
          detail="Move without limits."
          letter="M"
        />
        <CategoryCard
          href="/categories"
          title="Accessories"
          detail="Every detail counts."
          letter="A"
        />
      </div>
    </section>
  );
}
