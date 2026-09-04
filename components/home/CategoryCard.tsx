import Link from "next/link";

type CategoryCardProps = {
  href: string;
  title: string;
  detail: string;
  letter: string;
};

export function CategoryCard({
  href,
  title,
  detail,
  letter,
}: CategoryCardProps) {
  return (
    <Link
      className="group relative flex h-64 flex-col justify-end overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] p-7 backdrop-blur-md transition hover:-translate-y-1 hover:border-[#d8f36a]/50"
      href={href}
    >
      <span className="absolute right-[-12px] top-7 font-display text-[180px] font-bold leading-none text-[#d8f36a]/10 transition group-hover:text-[#d8f36a]/20">
        {letter}
      </span>
      <b className="absolute right-7 top-7 text-2xl font-normal text-[#d8f36a]">
        ↗
      </b>
      <span className="relative font-display text-2xl">{title}</span>
      <small className="relative mt-2 text-xs text-white/40">{detail}</small>
    </Link>
  );
}
