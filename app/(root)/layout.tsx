import type { ReactNode } from "react";
import { Footer } from "../../components/layout/Footer";
import { Navbar } from "../../components/layout/Navbar";

export default function RootRouteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen overflow-hidden bg-[#090b0b] text-[#eef1e8]">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
