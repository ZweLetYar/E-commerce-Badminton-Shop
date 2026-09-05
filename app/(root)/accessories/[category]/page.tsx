import Link from "next/link";
import { bags } from "@/data/bags";
import { grips } from "@/data/grips";
import { socks } from "@/data/socks";
import { strings } from "@/data/strings";
import { shuttlecocks } from "@/data/shuttlecocks";
import { towels } from "@/data/towels";
import { wristbands } from "@/data/wristbands";
import { CategoryPageShell } from "@/components/products/CategoryPageShell";

const categoryDetails: Record<string, { name: string; description: string }> = {
  grips: {
    name: "Grips",
    description:
      "Find the right feel, absorbency, and control for your racket.",
  },
  bags: {
    name: "Bags",
    description: "Protect and organise everything you need for match day.",
  },
  strings: {
    name: "Strings",
    description:
      "Explore string options for touch, power, durability, and precision.",
  },
  socks: {
    name: "Socks",
    description: "Stay supported and comfortable through every movement.",
  },
  shuttlecocks: {
    name: "Shuttlecocks",
    description: "Practice and compete with dependable flight and speed.",
  },
  towels: {
    name: "Towels",
    description: "Keep your kit fresh and your focus on the next point.",
  },
  wristbands: {
    name: "Wristbands",
    description: "Lightweight match-day essentials for confident play.",
  },
};

const categoryProducts = {
  grips,
  bags,
  strings,
  socks,
  shuttlecocks,
  towels,
  wristbands,
};

export function generateStaticParams() {
  return Object.keys(categoryDetails).map((category) => ({ category }));
}

export default async function AccessoryCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const details = categoryDetails[category];
  const products = categoryProducts[category as keyof typeof categoryProducts];

  if (!details) {
    return (
      <main className="mx-auto max-w-3xl px-6 py-32 text-center">
        <h1 className="font-display text-5xl">Category not found</h1>
        <Link className="mt-8 inline-block text-[#6d891d]" href="/accessories">
          Back to accessories
        </Link>
      </main>
    );
  }

  return (
    <CategoryPageShell
      eyebrow="Accessory collection"
      name={details.name}
      description={details.description}
      products={products ?? []}
      backHref="/accessories"
      backLabel="All accessories"
    />
  );
}
