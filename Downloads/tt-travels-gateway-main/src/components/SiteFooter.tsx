import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Mail } from "lucide-react";
import { useState } from "react";

export function SiteFooter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <footer className="bg-charcoal text-linen mt-32">
      <div className="container-editorial py-20 md:py-28">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-12">
          <div className="lg:col-span-5">
            <h3 className="font-serif text-4xl md:text-5xl leading-[0.95] mb-6">
              Quiet letters,<br />
              <em className="text-linen/60">twice a season.</em>
            </h3>
            <p className="text-sm text-linen/60 leading-relaxed max-w-md mb-8">
              A short dispatch with new sanctuaries, seasonal itineraries, and the occasional field
              note. No noise.
            </p>
            {submitted ? (
              <p className="text-sm text-linen/80 italic">Thank you — we'll be in touch.</p>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (email) setSubmitted(true);
                }}
                className="flex border-b border-linen/30 max-w-md"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="flex-1 bg-transparent py-3 text-sm placeholder:text-linen/40 focus:outline-none"
                />
                <button
                  type="submit"
                  className="text-[11px] uppercase tracking-[0.22em] py-3 px-2 hover:text-accent transition-colors"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>

          <div className="lg:col-span-2 lg:col-start-8">
            <p className="eyebrow mb-5 text-linen/40">Explore</p>
            <ul className="space-y-3 text-sm">
              <li><Link to="/destinations" className="hover:text-accent transition-colors">Destinations</Link></li>
              <li><Link to="/packages" className="hover:text-accent transition-colors">Journeys</Link></li>
              <li><Link to="/about" className="hover:text-accent transition-colors">About</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-colors">Inquire</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="eyebrow mb-5 text-linen/40">Studio</p>
            <ul className="space-y-3 text-sm text-linen/70">
              <li>14 Tavistock Mews</li>
              <li>London W11 2AP</li>
              <li>+44 20 7946 0182</li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <p className="eyebrow mb-5 text-linen/40">Follow</p>
            <div className="flex gap-4">
              <a aria-label="Instagram" href="#" className="hover:text-accent transition-colors"><Instagram className="h-5 w-5" /></a>
              <a aria-label="Facebook" href="#" className="hover:text-accent transition-colors"><Facebook className="h-5 w-5" /></a>
              <a aria-label="Email" href="mailto:hello@tttravels.com" className="hover:text-accent transition-colors"><Mail className="h-5 w-5" /></a>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-linen/10 flex flex-col md:flex-row justify-between gap-4 text-[11px] uppercase tracking-[0.22em] text-linen/40">
          <span>© {new Date().getFullYear()} TT Travels — Curated Journeys</span>
          <span>Vol. MMXXV</span>
        </div>
      </div>
    </footer>
  );
}
