export default async function RacketProductPage({
  params,
}: {
  params: Promise<{ "racket-id": string }>;
}) {
  const { "racket-id": racketId } = await params;
  return (
    <main className="mx-auto max-w-4xl px-6 py-24">
      <p className="mb-4 text-[#d8f36a]">Racket product</p>
      <h1 className="font-display text-6xl">{racketId}</h1>
    </main>
  );
}
