import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useReveal } from "@/hooks/use-reveal";
import QuoteModal from "./QuoteModal";

export default function SiteLayout({ children }: { children: ReactNode }) {
  useReveal();
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <QuoteModal />
    </div>
  );
}
