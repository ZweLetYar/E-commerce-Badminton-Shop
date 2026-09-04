import Image from "next/image";
import Link from "next/link";

const navLinkClass =
  "rounded-2xl border border-transparent px-3 py-2 transition-colors duration-200 hover:border-white/10 hover:bg-white/[0.06] hover:text-[#d8f36a]";
const dropdownLinkClass =
  "block rounded-2xl px-3 py-2.5 text-white/65 transition-colors duration-200 hover:bg-white/[0.08] hover:text-[#d8f36a]";

export function Navbar() {
  return (
    <>
      <div className="bg-[#d8f36a] px-6 py-2 text-center text-[10px] font-bold uppercase tracking-[0.18em] text-[#12170d]">
        5% discount on orders over 200,000MMK <span className="px-2">·</span>{" "}
        Built for your next match
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
          <Link className={navLinkClass} href="/">
            Home
          </Link>
          <Link className={navLinkClass} href="/rackets">
            Rackets
          </Link>
          <Link className={navLinkClass} href="/shoes">
            Shoes
          </Link>
          <Link className={navLinkClass} href="/clothings">
            Clothings
          </Link>
          <div className="group relative py-3">
            <Link
              className={`${navLinkClass} inline-flex items-center gap-2`}
              href="/accessories"
              aria-haspopup="true"
            >
              Accessories{" "}
              <span className="text-base font-bold leading-none text-[#d8f36a] transition-transform group-hover:translate-y-0.5">
                ↓
              </span>
            </Link>
            <div className="invisible absolute left-1/2 top-full w-56 -translate-x-1/2 translate-y-2 rounded-xl border border-white/10 bg-[#111615]/95 p-2 opacity-0 shadow-2xl shadow-black/40 backdrop-blur-xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              <Link className={dropdownLinkClass} href="/accessories/grips">
                Grips
              </Link>
              <Link className={dropdownLinkClass} href="/accessories/bags">
                Bags
              </Link>
              <Link className={dropdownLinkClass} href="/accessories/strings">
                Strings
              </Link>
              <Link className={dropdownLinkClass} href="/accessories/socks">
                Socks
              </Link>
              <Link
                className={dropdownLinkClass}
                href="/accessories/shuttlecocks"
              >
                Shuttlecocks
              </Link>
              <Link className={dropdownLinkClass} href="/accessories/towels">
                Towels
              </Link>
              <Link
                className={dropdownLinkClass}
                href="/accessories/wristbands"
              >
                Wristbands
              </Link>
            </div>
          </div>
          <Link className={navLinkClass} href="/about">
            Our story
          </Link>
          <Link className={navLinkClass} href="/contact">
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-5 text-sm text-white/70">
          <Link
            className="rounded-lg px-2 py-2 text-xl transition-colors duration-200 hover:bg-white/[0.06] hover:text-[#d8f36a]"
            href="/products"
            aria-label="Search"
          >
            ⌕
          </Link>
          <Link
            className="rounded-lg px-2 py-2 text-xl transition-colors duration-200 hover:bg-white/[0.06] hover:text-[#d8f36a]"
            href="/login"
            aria-label="Account"
          >
            ♙
          </Link>
          <Link
            className="rounded-lg border-l border-white/10 py-2 pl-5 pr-2 text-xs transition-colors duration-200 hover:bg-white/[0.06] hover:text-[#d8f36a]"
            href="/cart"
          >
            Bag <span className="text-[#d8f36a]">0</span>
          </Link>
        </div>
      </header>
    </>
  );
}
