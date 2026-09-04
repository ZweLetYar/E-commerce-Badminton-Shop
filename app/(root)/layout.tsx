import type { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";

export default function RootRouteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen overflow-hidden bg-[#090b0b] text-[#eef1e8]">
      <div className="bg-[#d8f36a] px-6 py-2 text-center text-[10px] font-bold uppercase tracking-[0.18em] text-[#12170d]">
        Free shipping on orders over $75 <span className="px-2">·</span> Built
        for your next match
      </div>
      <header className="sticky top-0 z-20 mx-auto flex max-w-[1440px] items-center justify-between border-b border-white/10 bg-[#090b0b]/75 px-6 py-5 backdrop-blur-xl md:px-12">
        <Link
          className="flex items-center rounded-lg bg-white p-1 transition hover:opacity-90"
          href="/"
        >
          <Image
            src="/logo.jpg"
            alt="ZC Badminton Store"
            width={126}
            height={54}
            className="h-10 w-auto object-contain sm:h-11"
            priority
          />
        </Link>
        <nav
          className="hidden items-center gap-8 text-xs text-white/60 md:flex"
          aria-label="Main navigation"
        >
          <Link className="transition hover:text-[#d8f36a]" href="/products">
            Shop
          </Link>
          <Link className="transition hover:text-[#d8f36a]" href="/categories">
            Categories
          </Link>
          <Link className="transition hover:text-[#d8f36a]" href="/about">
            Our story
          </Link>
          <Link className="transition hover:text-[#d8f36a]" href="/contact">
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-5 text-sm text-white/70">
          <Link
            className="text-xl transition hover:text-[#d8f36a]"
            href="/products"
            aria-label="Search"
          >
            ⌕
          </Link>
          <Link
            className="text-xl transition hover:text-[#d8f36a]"
            href="/login"
            aria-label="Account"
          >
            ♙
          </Link>
          <Link
            className="border-l border-white/10 pl-5 text-xs transition hover:text-[#d8f36a]"
            href="/cart"
          >
            Bag <span className="text-[#d8f36a]">0</span>
          </Link>
        </div>
      </header>
      <main>{children}</main>
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
    </div>
  );
}
