import Link from "next/link";

const accessoryCategories = [
  {
    slug: "grips",
    name: "Grips",
    detail: "Comfort and control for every rally.",
    letter: "G",
  },
  {
    slug: "bags",
    name: "Bags",
    detail: "Carry your whole game with confidence.",
    letter: "B",
  },
  {
    slug: "strings",
    name: "Strings",
    detail: "Tune your racket to your style.",
    letter: "S",
  },
  {
    slug: "socks",
    name: "Socks",
    detail: "Secure support from warm-up to match point.",
    letter: "S",
  },
  {
    slug: "shuttlecocks",
    name: "Shuttlecocks",
    detail: "Reliable flight for serious practice.",
    letter: "C",
  },
  {
    slug: "towels",
    name: "Towels",
    detail: "Stay fresh between every game.",
    letter: "T",
  },
  {
    slug: "wristbands",
    name: "Wristbands",
    detail: "Small details, better focus.",
    letter: "W",
  },
];

export default function AccessoriesPage() {
  return (
    <main className="mx-auto max-w-[1280px] px-6 py-20 md:px-12 md:py-28">
      <p className="mb-6 text-[10px] font-bold uppercase tracking-[.2em] text-[#6d891d]">
        Complete your setup
      </p>
      <div className="mb-14 flex flex-col justify-between gap-8 md:flex-row md:items-end">
        <h1 className="max-w-2xl font-display text-6xl font-medium leading-[.9] tracking-[-.07em] sm:text-8xl">
          The details
          <br />
          <em className="font-serif font-normal text-[#6d891d]">matter.</em>
        </h1>
        <p className="max-w-xs text-sm leading-6 text-[#68736b]">
          Purpose-built accessories to make every session more comfortable,
          consistent, and yours.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {accessoryCategories.map((category) => (
          <Link
            className="group relative flex min-h-56 flex-col justify-end overflow-hidden rounded-2xl border border-[#d9dfd6] bg-white/75 p-7 shadow-[0_12px_30px_rgba(44,65,48,0.06)] backdrop-blur-md transition hover:-translate-y-1 hover:border-[#b6d63f]"
            href={`/accessories/${category.slug}`}
            key={category.slug}
          >
            <span className="absolute right-[-10px] top-3 font-display text-[170px] font-bold leading-none text-[#b6d63f]/25 transition group-hover:text-[#b6d63f]/40">
              {category.letter}
            </span>
            <span className="relative mb-2 font-display text-2xl">
              {category.name}
            </span>
            <span className="relative max-w-[220px] text-xs leading-5 text-[#68736b]">
              {category.detail}
            </span>
            <span className="absolute right-7 top-7 text-xl text-[#6d891d]">
              ↗
            </span>
          </Link>
        ))}
      </div>
    </main>
  );
}
