import Link from "next/link";

export default function CartPage() {
  return (
    <main className="mx-auto flex min-h-[52vh] max-w-4xl flex-col items-center justify-center px-6 py-20 text-center md:px-12">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#6d891d]">
        Shopping Cart
      </p>
      <h1 className="mt-4 font-display text-5xl tracking-[-.05em] text-[#18201b] sm:text-7xl">
        Your cart is ready.
      </h1>
      <p className="mt-5 max-w-md text-sm leading-7 text-[#68736b]">
        Add equipment from the collection and it will appear here before
        checkout.
      </p>
      <Link
        className="mt-8 rounded-full bg-[#18201b] px-6 py-3 text-xs font-bold uppercase tracking-[0.14em] text-white transition-colors hover:bg-[#6d891d]"
        href="/shop"
      >
        Browse products
      </Link>
    </main>
  );
}
