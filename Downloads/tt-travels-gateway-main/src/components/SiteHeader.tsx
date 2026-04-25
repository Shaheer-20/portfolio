import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/vehicles", label: "Vehicles" },
  { to: "/packages", label: "Packages" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-40">
      <div className="container-editorial flex items-center justify-between py-6 md:py-8">
        <Link
          to="/"
          className="font-serif text-2xl md:text-3xl italic tracking-tight text-foreground"
        >
          TT Travels
        </Link>

        <nav className="hidden md:flex items-center gap-10 text-[11px] uppercase tracking-[0.22em]">
          {links.slice(1, -1).map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="hover:text-accent transition-colors"
              activeProps={{ className: "text-accent" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/contact"
          className="hidden md:inline-block text-[11px] uppercase tracking-[0.22em] border-b border-charcoal/30 pb-1 hover:border-charcoal transition-colors"
        >
          Inquire
        </Link>

        <button
          aria-label="Open menu"
          className="md:hidden p-2 -mr-2"
          onClick={() => setOpen(true)}
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 bg-linen flex flex-col p-6 animate-fade-in md:hidden">
          <div className="flex items-center justify-between">
            <span className="font-serif text-2xl italic">TT Travels</span>
            <button aria-label="Close menu" onClick={() => setOpen(false)} className="p-2 -mr-2">
              <X className="h-5 w-5" />
            </button>
          </div>
          <nav className="flex flex-col gap-8 mt-20 text-3xl font-serif">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="hover:text-accent transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
