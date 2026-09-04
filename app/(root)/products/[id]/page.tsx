export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <main className="mx-auto max-w-4xl px-6 py-24">
      <p className="mb-4 text-[#d8f36a]">Product</p>
      <h1 className="font-display text-6xl">{id}</h1>
    </main>
  );
}
