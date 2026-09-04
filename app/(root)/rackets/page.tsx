import { rackets } from "../../../data/rackets";
import { CategoryPageShell } from "../../../components/products/CategoryPageShell";

export default function RacketsPage() {
  return (
    <CategoryPageShell
      eyebrow="Find your advantage"
      name="Rackets"
      description="Tournament-ready frames built for speed, control, and confident attack."
      products={rackets}
    />
  );
}
