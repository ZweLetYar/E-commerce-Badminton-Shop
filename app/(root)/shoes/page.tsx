import { shoes } from "../../../data/shoes";
import { CategoryPageShell } from "../../../components/products/CategoryPageShell";

export default function ShoesPage() {
  return (
    <CategoryPageShell
      eyebrow="Move with intent"
      name="Shoes"
      description="Court-ready traction, comfort, and support for every change of direction."
      products={shoes}
    />
  );
}
