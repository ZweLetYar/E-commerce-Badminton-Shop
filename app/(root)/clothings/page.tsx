import { clothings } from "../../../data/clothings";
import { CategoryPageShell } from "../../../components/products/CategoryPageShell";

export default function ClothingsPage() {
  return (
    <CategoryPageShell
      eyebrow="Match-day layers"
      name="Clothings"
      description="Breathable performance pieces designed to move naturally through every rally."
      products={clothings}
    />
  );
}
