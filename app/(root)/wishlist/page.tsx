import Link from "next/link";

export default function WishlistPage() {
  return (
    <section className="mx-auto flex min-h-[52vh] max-w-4xl flex-col items-center justify-center px-6 py-20 text-center md:px-12">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#6d891d]">
        Wishlist
      </p>
      <h1 className="mt-4 font-display text-4xl tracking-[-.04em] text-[#18201b] sm:text-6xl">
        Keep your next favorites close.
      </h1>
      <p className="mt-5 max-w-md text-sm leading-7 text-[#68736b]">
        Your wishlist is waiting for the gear you want to come back to.
      </p>
      <Link
        className="mt-8 rounded-full bg-[#18201b] px-6 py-3 text-xs font-bold uppercase tracking-[0.14em]  transition-colors hover:bg-[#6d891d]"
        href="/shop"
      >
        <span className="text-white"> Browse products</span>
      </Link>
    </section>
  );
}
