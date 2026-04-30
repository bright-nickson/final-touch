import { useEffect, useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { useQuoteModal } from "@/context/QuoteModalContext";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/our-works", label: "Our Works" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/request-rework", label: "Request Rework" },
];

// Get current path for active state
const getCurrentPath = () => window.location.pathname;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [pathname, setPathname] = useState(getCurrentPath());
  const { openModal } = useQuoteModal();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  // Update pathname when location changes (for reloads)
  useEffect(() => {
    setPathname(getCurrentPath());
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        scrolled ? "py-3 glass border-b border-border/60" : "py-6 bg-transparent"
      )}
    >
      <div className="container flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 group">
          <span className="grid place-items-center w-9 h-9 rounded-full bg-gradient-sage text-primary-foreground transition-transform duration-500 group-hover:rotate-12">
            <Sparkles className="w-4 h-4" />
          </span>
          <span className="font-display text-lg leading-none">
            The Final Touch
            <span className="block text-[10px] tracking-[0.32em] uppercase text-soft mt-0.5 font-sans">
              Servicing Co.
            </span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-9">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={cn(
                "story-link text-sm font-medium tracking-wide transition-colors",
                pathname === l.href ? "text-primary" : "text-foreground/80 hover:text-foreground"
              )}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <button
            onClick={openModal}
            className="group inline-flex items-center gap-2 rounded-full bg-foreground text-background px-5 py-2.5 text-sm font-medium transition-all duration-300 hover:bg-primary hover:-translate-y-0.5 hover:shadow-lift"
          >
            Request a Quote
            <span className="w-1.5 h-1.5 rounded-full bg-current transition-transform duration-300 group-hover:scale-150" />
          </button>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden grid place-items-center w-10 h-10 rounded-full border border-border bg-surface"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={cn(
          "lg:hidden fixed inset-x-0 top-[72px] origin-top transition-all duration-500 overflow-hidden",
          open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="glass border-y border-border px-6 py-8">
          <nav className="flex flex-col gap-5">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={cn(
                  "font-display text-2xl",
                  pathname === l.href ? "text-primary" : "text-foreground"
                )}
              >
                {l.label}
              </a>
            ))}
            <button
              onClick={openModal}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-foreground text-background px-5 py-3 text-sm font-medium"
            >
              Request a Quote
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}
