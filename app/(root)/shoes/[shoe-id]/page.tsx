export default async function ShoeProductPage({
  params,
}: {
  params: Promise<{ "shoe-id": string }>;
}) {
  const { "shoe-id": shoeId } = await params;
  return (
    <main className="mx-auto max-w-4xl px-6 py-24">
      <p className="mb-4 text-[#d8f36a]">Shoe product</p>
      <h1 className="font-display text-6xl">{shoeId}</h1>
    </main>
  );
}
