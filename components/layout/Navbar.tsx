"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navLinkClass =
  "rounded-2xl border border-transparent px-3 py-2 transition-colors duration-200 hover:border-[#b6d63f] hover:bg-[#dce8c4] hover:text-[#536b18]";
const dropdownLinkClass =
  "block rounded-2xl px-3 py-2.5 text-[#536057] transition-colors duration-200 hover:bg-[#dce8c4] hover:text-[#536b18]";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="fixed inset-x-0 top-0 z-20">
      <div className="bg-[#b6d63f] px-6 py-2 text-center text-[10px] font-bold uppercase tracking-[0.18em] text-[#17200f]">
        5% discount on orders over 200,000MMK <span className="px-2">·</span>{" "}
        Built for your next match
      </div>
      <header className="mx-auto flex max-w-[1440px] items-center justify-between border-b border-[#d9dfd6] bg-[#f6f7f2]/90 px-6 py-5 backdrop-blur-xl md:px-12">
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
          <div className="group relative py-3">
            <Link
              className={`${navLinkClass} inline-flex items-center gap-2`}
              href="/shop"
              aria-haspopup="true"
            >
              Shop{" "}
              <span className="text-base font-bold leading-none text-[#6d891d] transition-transform group-hover:translate-y-0.5">
                ↓
              </span>
            </Link>
            <div className="invisible absolute left-1/2 top-full w-[42rem] -translate-x-1/2 translate-y-2 rounded-xl border border-[#d9dfd6] bg-[#ffffff] p-3 opacity-0 shadow-2xl shadow-[#2c4130]/10 backdrop-blur-xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              <div className="grid grid-cols-3 gap-3">
                <div>
                  <p className="px-3 pb-1 text-[9px] font-bold uppercase tracking-[0.14em] text-[#87938a]">
                    Shop
                  </p>
                  <Link className={dropdownLinkClass} href="/shop">
                    All Products
                  </Link>
                  <Link className={dropdownLinkClass} href="/rackets">
                    Rackets
                  </Link>
                  <Link className={dropdownLinkClass} href="/shoes">
                    Shoes
                  </Link>
                  <Link className={dropdownLinkClass} href="/clothings">
                    Clothing
                  </Link>
                </div>
                <div className="border-l border-[#d9dfd6] pl-2">
                  <p className="px-3 pb-1 text-[9px] font-bold uppercase tracking-[0.14em] text-[#87938a]">
                    Accessories
                  </p>
                  <Link className={dropdownLinkClass} href="/accessories">
                    All Accessories
                  </Link>
                  <Link className={dropdownLinkClass} href="/accessories/grips">
                    Grips
                  </Link>
                  <Link className={dropdownLinkClass} href="/accessories/bags">
                    Bags
                  </Link>
                  <Link
                    className={dropdownLinkClass}
                    href="/accessories/strings"
                  >
                    Strings
                  </Link>
                  <Link className={dropdownLinkClass} href="/accessories/socks">
                    Socks
                  </Link>
                </div>
                <div className="border-l border-[#d9dfd6] pl-2">
                  <p className="px-3 pb-1 text-[9px] font-bold uppercase tracking-[0.14em] text-[#87938a]">
                    More accessories
                  </p>
                  <Link
                    className={dropdownLinkClass}
                    href="/accessories/shuttlecocks"
                  >
                    Shuttlecocks
                  </Link>
                  <Link
                    className={dropdownLinkClass}
                    href="/accessories/towels"
                  >
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
            </div>
          </div>
          <Link className={navLinkClass} href="/new-arrivals">
            New Arrivals
          </Link>
          <Link className={navLinkClass} href="/best-sellers">
            Best Sellers
          </Link>
          <Link className={navLinkClass} href="/about">
            About Us
          </Link>
          <Link className={navLinkClass} href="/contact">
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-2 text-sm text-[#536057] sm:gap-5">
          <form
            action="/shop"
            className="hidden items-center rounded-full border border-[#cbd6c5] bg-white/80 px-3 py-1.5 transition focus-within:border-[#b6d63f] focus-within:bg-white lg:flex"
            role="search"
          >
            <span
              className="mr-2 text-lg leading-none text-[#6d891d]"
              aria-hidden="true"
            >
              ⌕
            </span>
            <input
              className="w-32 bg-transparent text-xs text-[#18201b] outline-none placeholder:text-[#87938a] xl:w-44"
              type="search"
              name="search"
              placeholder="Search products"
              aria-label="Search products"
            />
          </form>

          <Link
            className="rounded-lg px-2 py-2 text-xl transition-colors duration-200 hover:bg-[#dce8c4] hover:text-[#536b18]"
            href="/wishlist"
            aria-label="Wishlist"
          >
            ♡
          </Link>
          <Link
            className="rounded-lg px-2 py-2 text-xl transition-colors duration-200 hover:bg-[#dce8c4] hover:text-[#536b18]"
            href="/login"
            aria-label="Account"
          >
            👤
          </Link>
          <Link
            className="rounded-lg border-l border-[#d9dfd6] px-2 py-2 text-xl transition-colors duration-200 hover:bg-[#dce8c4] hover:text-[#536b18] sm:pl-5"
            href="/cart"
            aria-label="Shopping Cart"
          >
            🛒 <span className="text-xs text-[#6d891d]">0</span>
          </Link>
          <button
            type="button"
            className="ml-1 rounded-lg border border-[#d9dfd6] px-3 py-2 text-lg leading-none transition-colors hover:bg-[#dce8c4] hover:text-[#536b18] md:hidden"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? "×" : "☰"}
          </button>
        </div>
      </header>
      {isMenuOpen && (
        <nav
          className="border-b border-[#d9dfd6] bg-[#ffffff] px-6 py-4 shadow-lg shadow-[#2c4130]/[0.06] md:hidden"
          aria-label="Mobile navigation"
        >
          <div className="grid gap-1 sm:grid-cols-2">
            <form
              action="/shop"
              className="col-span-full flex items-center rounded-2xl border border-[#cbd6c5] bg-[#f6f7f2] px-3 py-2 focus-within:border-[#b6d63f]"
              role="search"
            >
              <span
                className="mr-2 text-lg leading-none text-[#6d891d]"
                aria-hidden="true"
              >
                ⌕
              </span>
              <input
                className="min-w-0 flex-1 bg-transparent px-1 text-sm text-[#18201b] outline-none placeholder:text-[#87938a]"
                type="search"
                name="search"
                placeholder="Search products"
                aria-label="Search products"
              />
              <button
                className="rounded-full bg-[#18201b] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[.1em] text-white transition hover:bg-[#536b18]"
                type="submit"
              >
                Search
              </button>
            </form>
            <Link className={navLinkClass} href="/" onClick={closeMenu}>
              Home
            </Link>
            <Link className={navLinkClass} href="/shop" onClick={closeMenu}>
              Shop
            </Link>
            <Link
              className={navLinkClass}
              href="/new-arrivals"
              onClick={closeMenu}
            >
              New Arrivals
            </Link>
            <Link
              className={navLinkClass}
              href="/best-sellers"
              onClick={closeMenu}
            >
              Best Sellers
            </Link>
            <Link className={navLinkClass} href="/about" onClick={closeMenu}>
              About Us
            </Link>
            <Link className={navLinkClass} href="/contact" onClick={closeMenu}>
              Contact
            </Link>
          </div>
        </nav>
      )}
    </div>
  );
}
