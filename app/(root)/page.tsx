import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-[radial-gradient(circle_at_75%_20%,#27351e_0%,transparent_30%),#090b0b]">
      <section className="mx-auto grid min-h-[680px] max-w-[1440px] items-center gap-8 px-6 py-20 md:grid-cols-2 md:px-12">
        <div className="max-w-xl">
          <p className="mb-7 text-[10px] font-bold uppercase tracking-[0.2em] text-[#d8f36a]">
            Performance / precision / play
          </p>
          <h1 className="font-display text-7xl font-medium leading-[.88] tracking-[-.08em] text-white sm:text-8xl md:text-[7.5rem]">
            Own the
            <br />
            <em className="font-serif font-normal tracking-[-.08em] text-[#d8f36a]">
              rally.
            </em>
          </h1>
          <p className="my-9 max-w-xs text-base leading-6 text-white/45">
            Badminton equipment for players who read the game one shot ahead.
          </p>
          <Link
            className="group inline-flex items-center gap-5 rounded-full border border-[#d8f36a]/60 bg-[#d8f36a]/10 py-2 pl-5 pr-2 text-[11px] font-bold uppercase tracking-[0.08em] text-[#d8f36a] shadow-[0_0_30px_rgba(216,243,106,0.08)] backdrop-blur-md transition hover:border-[#d8f36a] hover:bg-[#d8f36a] hover:text-black"
            href="/products"
          >
            Shop the collection
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#d8f36a] text-lg text-[#12170d] transition group-hover:bg-[#12170d] group-hover:text-[#d8f36a]">
              ↗
            </span>
          </Link>
        </div>
        <div className="relative flex min-h-[430px] items-center justify-center overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] shadow-2xl shadow-black/30 backdrop-blur-md md:min-h-[560px]">
          <div className="absolute inset-0 bg-[linear-gradient(115deg,transparent_25%,rgba(216,243,106,.07)_25.2%,transparent_25.5%,transparent_52%,rgba(216,243,106,.04)_52.2%,transparent_52.5%)]" />
          <div className="absolute h-[330px] w-[330px] rounded-full border border-[#d8f36a]/60 [transform:rotate(-24deg)_scaleX(.72)] sm:h-[430px] sm:w-[430px]" />
          <div className="absolute h-52 w-52 rounded-[50%] border-[8px] border-[#e6edcf] [transform:rotate(34deg)_scaleX(.68)] sm:h-72 sm:w-72" />
          <div className="absolute h-72 w-2 origin-top rotate-30 bg-[#e6edcf] sm:h-80" />
          <div className="absolute right-[13%] top-[13%] text-6xl text-[#d8f36a]">
            ✦
          </div>
          <span className="absolute bottom-7 right-8 text-[10px] tracking-[.18em] text-[#d8f36a]">
            01 / 03
          </span>
        </div>
      </section>
      <section className="flex flex-col gap-3 border-y border-white/10 px-6 py-5 text-[10px] font-bold uppercase tracking-[.14em] text-white/35 md:flex-row md:justify-between md:px-12">
        <span>01 — Tournament-grade gear</span>
        <span>02 — Free delivery over $75</span>
        <span>03 — 30-day returns</span>
      </section>
      <section className="mx-auto max-w-[1280px] px-6 py-24 md:px-12 md:py-32">
        <div className="mb-12 flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
          <div>
            <p className="mb-6 text-[10px] font-bold uppercase tracking-[.2em] text-[#d8f36a]">
              The essentials
            </p>
            <h2 className="font-display text-5xl font-medium leading-[.9] tracking-[-.07em] sm:text-7xl">
              Built for your
              <br />
              <em className="font-serif font-normal tracking-[-.08em] text-[#d8f36a]">
                best game.
              </em>
            </h2>
          </div>
          <Link
            className="border-b border-[#d8f36a] pb-2 text-[11px] uppercase text-[#d8f36a]"
            href="/products"
          >
            View all equipment <span className="ml-5 text-lg">→</span>
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-[1.3fr_1fr_1fr]">
          <CategoryCard
            href="/products"
            title="Rackets"
            detail="Light. Fast. Exact."
            letter="R"
          />
          <CategoryCard
            href="/categories"
            title="Matchwear"
            detail="Move without limits."
            letter="M"
          />
          <CategoryCard
            href="/categories"
            title="Accessories"
            detail="Every detail counts."
            letter="A"
          />
        </div>
      </section>
    </div>
  );
}

function CategoryCard({
  href,
  title,
  detail,
  letter,
}: {
  href: string;
  title: string;
  detail: string;
  letter: string;
}) {
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
