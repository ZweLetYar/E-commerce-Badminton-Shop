"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const showcaseImages = [
  { src: "/showcase/rackets.jpg", alt: "Badminton rackets" },
  { src: "/showcase/accessories.jpg", alt: "Badminton accessories" },
  { src: "/showcase/bags.jpg", alt: "Badminton bags" },
  { src: "/showcase/shoes.jpg", alt: "Badminton shoes" },
  { src: "/showcase/sportwears.jpg", alt: "Badminton sportswear" },
];

export function HeroSection() {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const carouselTimer = window.setInterval(() => {
      setActiveImage((current) => (current + 1) % showcaseImages.length);
    }, 5000);

    return () => window.clearInterval(carouselTimer);
  }, []);

  const showPrevious = () => {
    setActiveImage(
      (current) =>
        (current - 1 + showcaseImages.length) % showcaseImages.length,
    );
  };

  const showNext = () => {
    setActiveImage((current) => (current + 1) % showcaseImages.length);
  };

  return (
    <section className="mx-auto grid min-h-[680px] max-w-[1440px] items-center gap-8 px-6 py-20 md:grid-cols-2 md:px-12">
      <div className="max-w-xl">
        <p className="mb-7 text-[10px] font-bold uppercase tracking-[0.2em] text-[#6d891d]">
          Performance / precision / play
        </p>
        <h1 className="font-display text-7xl font-medium leading-[.88] tracking-[-.08em] text-[#18201b] sm:text-8xl md:text-[7.5rem]">
          Own the
          <br />
          <em className="font-serif font-normal tracking-[-.08em] text-[#6d891d]">
            rally.
          </em>
        </h1>
        <p className="my-9 max-w-xs text-base leading-6 text-[#68736b]">
          Badminton equipment for players who read the game one shot ahead.
        </p>
        <Link
          className="group inline-flex items-center gap-5 rounded-full border border-[#b6d63f] bg-[#eef3d8] py-2 pl-5 pr-2 text-[11px] font-bold uppercase tracking-[0.08em] text-[#536b18] shadow-[0_8px_24px_rgba(86,111,24,0.12)] backdrop-blur-md transition hover:border-[#9fbe2e] hover:bg-[#b6d63f] hover:text-[#17200f]"
          href="/products"
        >
          <span className="transition-colors group-hover:text-[#17200f]">
            Shop the collection
          </span>
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#b6d63f] text-lg text-[#17200f] transition group-hover:bg-[#17200f] group-hover:text-[#b6d63f]">
            ↗
          </span>
        </Link>
      </div>
      <div className="relative min-h-[430px] overflow-hidden rounded-[2rem] border border-[#d9dfd6] bg-[#e9efe5] shadow-2xl shadow-[#2c4130]/10 backdrop-blur-md md:min-h-[560px]">
        {showcaseImages.map((image, index) => (
          <Image
            key={image.src}
            src={image.src}
            alt={image.alt}
            fill
            priority={index === 0}
            sizes="(max-width: 768px) 100vw, 50vw"
            className={`object-cover transition-opacity duration-700 ${
              activeImage === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-[#18201b]/55 via-[#18201b]/5 to-transparent" />
        <div className="absolute inset-0 bg-[linear-gradient(115deg,transparent_25%,rgba(182,214,63,.12)_25.2%,transparent_25.5%,transparent_52%,rgba(182,214,63,.08)_52.2%,transparent_52.5%)]" />
        <button
          type="button"
          onClick={showPrevious}
          aria-label="Previous showcase image"
          className="absolute left-5 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/70 bg-[#18201b]/35 text-lg text-white backdrop-blur-md transition hover:border-[#b6d63f] hover:text-[#b6d63f]"
        >
          ←
        </button>
        <button
          type="button"
          onClick={showNext}
          aria-label="Next showcase image"
          className="absolute right-5 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/70 bg-[#18201b]/35 text-lg text-white backdrop-blur-md transition hover:border-[#b6d63f] hover:text-[#b6d63f]"
        >
          →
        </button>
        <div
          className="absolute bottom-7 left-7 flex gap-2"
          aria-label="Showcase image selector"
        >
          {showcaseImages.map((image, index) => (
            <button
              key={image.src}
              type="button"
              onClick={() => setActiveImage(index)}
              aria-label={`Show ${image.alt}`}
              aria-current={activeImage === index}
              className={`h-1.5 rounded-full transition-all ${
                activeImage === index
                  ? "w-8 bg-[#b6d63f]"
                  : "w-1.5 bg-white/70 hover:bg-white"
              }`}
            />
          ))}
        </div>
        <span className="absolute bottom-7 right-8 text-[10px] tracking-[.18em] text-[#b6d63f]">
          {String(activeImage + 1).padStart(2, "0")} / 05
        </span>
      </div>
    </section>
  );
}
