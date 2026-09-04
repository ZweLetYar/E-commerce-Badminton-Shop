export default async function ClothingProductPage({
  params,
}: {
  params: Promise<{ "clothing-id": string }>;
}) {
  const { "clothing-id": clothingId } = await params;
  return (
    <main className="mx-auto max-w-4xl px-6 py-24">
      <p className="mb-4 text-[#d8f36a]">Clothing product</p>
      <h1 className="font-display text-6xl">{clothingId}</h1>
    </main>
  );
}
