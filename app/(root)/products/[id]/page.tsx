import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProductActions } from "../../../../components/products/ProductActions";
import { products } from "../../../../data";

const priceFormatter = new Intl.NumberFormat("en-US");

export function generateStaticParams() {
  return products.map((product) => ({ id: product.id }));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = products.find((item) => item.id === id);

  if (!product) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-[1280px] px-6 py-12 md:px-12 md:py-20">
      <Link
        href="/shop"
        className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-[#87938a] transition hover:text-[#536b18]"
      >
        <span aria-hidden="true">←</span> Back to collection
      </Link>

      <div className="mt-10 grid gap-12 lg:grid-cols-[minmax(0,1.08fr)_minmax(360px,.92fr)] lg:items-start lg:gap-20">
        <div className="relative aspect-[.95] overflow-hidden rounded-[2rem] border border-[#d9dfd6] bg-[#e9efe5] shadow-2xl shadow-[#2c4130]/10 sm:aspect-[1.08]">
          <Image
            src={product.image}
            alt={product.name}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 55vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#18201b]/35 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-white sm:bottom-8 sm:left-8 sm:right-8">
            <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#dce8c4]">
              ZC / performance gear
            </span>
            <span className="text-xs tracking-[0.16em] text-white/80">
              {product.category}
            </span>
          </div>
          {product.featured && (
            <span className="absolute left-6 top-6 rounded-full border border-[#b6d63f] bg-[#dce8c4] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-[#536b18] sm:left-8 sm:top-8">
              Featured pick
            </span>
          )}
        </div>

        <div className="pt-1 lg:pt-8">
          <div className="flex flex-wrap items-center gap-3 text-[10px] font-bold uppercase tracking-[0.18em] text-[#6d891d]">
            <span>{product.category}</span>
            <span
              className="h-1 w-1 rounded-full bg-[#b6d63f]"
              aria-hidden="true"
            />
            <span className="text-[#87938a]">In stock</span>
          </div>
          <h1 className="mt-5 max-w-xl font-display text-5xl font-medium leading-[.92] tracking-[-.07em] text-[#18201b] sm:text-7xl">
            {product.name}
          </h1>
          <div className="mt-6 flex items-center gap-4">
            <span className="text-sm tracking-[0.12em] text-[#536b18]">
              {"★".repeat(Math.round(product.rating))}
            </span>
            <span className="text-xs text-[#68736b]">
              {product.rating.toFixed(1)} / 5.0 · Player rated
            </span>
          </div>
          <p className="mt-8 max-w-lg text-base leading-7 text-[#68736b]">
            {product.description}
          </p>

          <div className="mt-8 flex items-baseline gap-3 border-y border-[#d9dfd6] py-6">
            <span className="font-display text-3xl tracking-[-.04em] text-[#18201b]">
              {priceFormatter.format(product.price)}
            </span>
            <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#87938a]">
              {product.currency}
            </span>
          </div>

          <div className="mt-6 flex items-center gap-2 text-xs text-[#68736b]">
            <span
              className="h-2 w-2 rounded-full bg-[#7eaa27]"
              aria-hidden="true"
            />
            Ready to ship · {product.stock} available
          </div>

          <ProductActions stock={product.stock} />

          <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-[#d9dfd6] pt-7 text-xs">
            <div>
              <dt className="uppercase tracking-[0.14em] text-[#87938a]">
                Category
              </dt>
              <dd className="mt-1 font-bold text-[#18201b]">
                {product.category}
              </dd>
            </div>
            <div>
              <dt className="uppercase tracking-[0.14em] text-[#87938a]">
                Availability
              </dt>
              <dd className="mt-1 font-bold text-[#18201b]">
                {product.stock} units
              </dd>
            </div>
            <div>
              <dt className="uppercase tracking-[0.14em] text-[#87938a]">
                Delivery
              </dt>
              <dd className="mt-1 font-bold text-[#18201b]">Nationwide</dd>
            </div>
            <div>
              <dt className="uppercase tracking-[0.14em] text-[#87938a]">
                Condition
              </dt>
              <dd className="mt-1 font-bold text-[#18201b]">New</dd>
            </div>
          </dl>
        </div>
      </div>
    </main>
  );
}
