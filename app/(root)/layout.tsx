import type { ReactNode } from "react";
import { Footer } from "../../components/layout/Footer";
import { Navbar } from "../../components/layout/Navbar";

export default function RootRouteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen overflow-hidden bg-[#f6f7f2] text-[#18201b]">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
