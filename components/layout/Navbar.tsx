import Image from "next/image";
import Link from "next/link";

const navLinkClass =
  "rounded-2xl border border-transparent px-3 py-2 transition-colors duration-200 hover:border-[#d9dfd6] hover:bg-[#eef3ea] hover:text-[#6d891d]";
const dropdownLinkClass =
  "block rounded-2xl px-3 py-2.5 text-[#536057] transition-colors duration-200 hover:bg-[#eef3ea] hover:text-[#6d891d]";

export function Navbar() {
  return (
    <>
      <div className="bg-[#b6d63f] px-6 py-2 text-center text-[10px] font-bold uppercase tracking-[0.18em] text-[#17200f]">
        5% discount on orders over 200,000MMK <span className="px-2">·</span>{" "}
        Built for your next match
      </div>
      <header className="sticky top-0 z-20 mx-auto flex max-w-[1440px] items-center justify-between border-b border-[#d9dfd6] bg-[#f6f7f2]/90 px-6 py-5 backdrop-blur-xl md:px-12">
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
          className="hidden items-center gap-8 text-xs text-[#536057] md:flex"
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
              <span className="text-base font-bold leading-none text-[#6d891d] transition-transform group-hover:translate-y-0.5">
                ↓
              </span>
            </Link>
            <div className="invisible absolute left-1/2 top-full w-56 -translate-x-1/2 translate-y-2 rounded-xl border border-[#d9dfd6] bg-[#ffffff]/95 p-2 opacity-0 shadow-2xl shadow-[#2c4130]/10 backdrop-blur-xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
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
        <div className="flex items-center gap-5 text-sm text-[#536057]">
          <Link
            className="rounded-lg px-2 py-2 text-xl transition-colors duration-200 hover:bg-[#eef3ea] hover:text-[#6d891d]"
            href="/products"
            aria-label="Search"
          >
            ⌕
          </Link>
          <Link
            className="rounded-lg px-2 py-2 text-xl transition-colors duration-200 hover:bg-[#eef3ea] hover:text-[#6d891d]"
            href="/login"
            aria-label="Account"
          >
            ♙
          </Link>
          <Link
            className="rounded-lg border-l border-[#d9dfd6] py-2 pl-5 pr-2 text-xs transition-colors duration-200 hover:bg-[#eef3ea] hover:text-[#6d891d]"
            href="/cart"
          >
            Bag <span className="text-[#6d891d]">0</span>
          </Link>
        </div>
      </header>
    </>
  );
}
