import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0d1010] px-6 pb-7 pt-16 md:px-12">
      <div className="mx-auto grid max-w-[1280px] gap-10 md:grid-cols-[1.5fr_.75fr_.75fr_1.35fr]">
        <div>
          <Link
            className="inline-flex rounded-lg bg-white p-1 transition hover:opacity-90"
            href="/"
          >
            <Image
              src="/logo.jpg"
              alt="ZC Badminton Store"
              width={150}
              height={65}
              className="h-12 w-auto object-contain"
            />
          </Link>
          <p className="mt-6 text-sm leading-6 text-white/40">
            Equipment for the moments
            <br />
            that change the game.
          </p>
        </div>
        <div className="flex flex-col gap-3 text-xs text-white/45">
          <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.16em] text-white">
            Explore
          </p>
          <Link href="/products">All equipment</Link>
          <Link href="/categories">Collections</Link>
          <Link href="/about">Our story</Link>
        </div>
        <div className="flex flex-col gap-3 text-xs text-white/45">
          <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.16em] text-white">
            Support
          </p>
          <Link href="/contact">Contact us</Link>
          <Link href="/cart">Shipping & returns</Link>
          <Link href="/login">My account</Link>
        </div>
        <div>
          <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.16em] text-white">
            Stay in the rally
          </p>
          <p className="max-w-xs text-xs leading-5 text-white/45">
            New drops, match-day notes, and 10% off your first order.
          </p>
          <div className="mt-5 flex max-w-xs border-b border-white/20">
            <input
              className="min-w-0 flex-1 bg-transparent py-3 text-xs outline-none placeholder:text-white/35"
              aria-label="Email address"
              placeholder="Your email address"
              type="email"
            />
            <button className="text-xl text-[#d8f36a]" aria-label="Subscribe">
              →
            </button>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-16 flex max-w-[1280px] flex-wrap justify-between gap-3 border-t border-white/10 pt-5 text-[10px] text-white/35">
        <span>© 2026 Rally/Court</span>
        <span>Designed for the long game.</span>
        <span>Instagram &nbsp; YouTube</span>
      </div>
    </footer>
  );
}
