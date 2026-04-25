import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { TestimonialCarousel } from "@/components/TestimonialCarousel";
import { vehicles, packages } from "@/data/site";
import { ArrowRight, Search } from "lucide-react";
import { useState } from "react";

const heroImg = "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1600&q=80";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TT Travels — Luxury Transport & Tours" },
      {
        name: "description",
        content:
          "Premium chauffeur-driven vehicles, curated travel packages, and unmatched comfort for your journeys.",
      },
      { property: "og:title", content: "TT Travels — Luxury Transport" },
      {
        property: "og:description",
        content: "Quiet, deeply considered travel and premium transportation.",
      },
      { property: "og:image", content: heroImg },
      { property: "twitter:image", content: heroImg },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const [search, setSearch] = useState("");

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <SiteHeader />

      {/* HERO */}
      <section className="relative min-h-screen flex flex-col">
        <div className="container-editorial flex-1 flex flex-col justify-center pt-32 pb-16 lg:pt-40 lg:pb-24">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            <div className="lg:col-span-5 z-10">
              <div className="flex items-center gap-4 mb-8 animate-fade-in">
                <div className="w-8 h-px bg-charcoal/30" />
                <span className="eyebrow">Volume MMXXV — Chapter I</span>
              </div>
              <h1 className="font-serif text-6xl md:text-7xl lg:text-[6.5rem] leading-[0.88] tracking-tight text-balance animate-fade-up">
                Journey in<br />
                <em className="text-charcoal/60">comfort.</em>
              </h1>
              <p
                className="mt-10 max-w-md text-base md:text-lg leading-[1.8] text-muted-foreground animate-fade-up"
                style={{ animationDelay: "0.15s" }}
              >
                A premium fleet of vehicles and curated travel packages —
                designed for those who appreciate seamless, luxurious journeys with expert drivers.
              </p>

              {/* Search */}
              <form
                onSubmit={(e) => e.preventDefault()}
                className="mt-12 flex items-center gap-3 bg-card p-2 pl-5 shadow-soft border border-border max-w-md animate-fade-up"
                style={{ animationDelay: "0.3s" }}
              >
                <Search className="h-4 w-4 text-muted-foreground" />
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Where shall we drive you?"
                  className="flex-1 bg-transparent text-sm focus:outline-none py-2"
                />
                <Link
                  to="/packages"
                  className="bg-charcoal text-linen px-5 py-3 text-[11px] uppercase tracking-[0.22em] hover:bg-accent transition-colors"
                >
                  Explore
                </Link>
              </form>
            </div>

            <div className="lg:col-span-7 relative">
              <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-limestone/50 rounded-full blur-[120px] pointer-events-none" />
              <div className="bg-limestone/40 p-3 md:p-5 relative z-10 shadow-elegant">
                <div className="aspect-[4/3] overflow-hidden bg-limestone">
                  <img
                    src={heroImg}
                    alt="Luxury journey"
                    width={1600}
                    height={1200}
                    className="w-full h-full object-cover animate-slow-zoom"
                  />
                </div>
              </div>
              <div className="absolute -bottom-8 md:-bottom-10 right-4 md:right-12 bg-linen/95 backdrop-blur-md px-6 py-5 md:px-8 md:py-6 shadow-soft border border-border z-20 min-w-[220px] animate-fade-up" style={{ animationDelay: "0.5s" }}>
                <p className="eyebrow text-charcoal/40 mb-2">Featured Package</p>
                <p className="font-medium">The Amalfi Coastal Drive</p>
                <p className="font-serif italic text-sm text-muted-foreground">
                  7 days of luxury travel
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container-editorial pb-8 flex justify-between items-end text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
          <span>01 / 05</span>
          <span>Scroll to descend ↓</span>
          <span className="hidden md:inline">Vol. MMXXV</span>
        </div>
      </section>

      {/* FEATURED VEHICLES */}
      <section className="container-editorial py-32 md:py-40">
        <div className="flex items-end justify-between mb-16 md:mb-24">
          <div className="max-w-2xl">
            <span className="eyebrow">Chapter II — Our Fleet</span>
            <h2 className="font-serif text-5xl md:text-7xl mt-6 leading-[0.95] text-balance">
              Vehicles for<br />
              <em>every journey.</em>
            </h2>
          </div>
          <Link
            to="/vehicles"
            className="hidden md:inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] hover:text-accent transition-colors group"
          >
            Explore fleet
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-16">
          {vehicles.slice(0, 3).map((v, i) => (
            <Link
              key={v.slug}
              to="/vehicles"
              className="group block hover-lift"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="aspect-[4/5] overflow-hidden bg-limestone mb-5">
                <img
                  src={v.image}
                  alt={v.name}
                  width={1200}
                  height={1500}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-105"
                />
              </div>
              <div className="flex items-baseline justify-between mb-2">
                <h3 className="font-serif text-2xl">{v.name}</h3>
                <span className="eyebrow">{v.type}</span>
              </div>
              <p className="font-serif italic text-muted-foreground">{v.tagline}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* PACKAGES PREVIEW */}
      <section className="bg-limestone/40 py-32 md:py-40">
        <div className="container-editorial">
          <div className="grid lg:grid-cols-12 gap-12 mb-20">
            <div className="lg:col-span-5">
              <span className="eyebrow">Chapter III — Tours</span>
              <h2 className="font-serif text-5xl md:text-7xl mt-6 leading-[0.95]">
                Curated<br />
                <em>packages.</em>
              </h2>
            </div>
            <p className="lg:col-span-5 lg:col-start-8 text-base md:text-lg leading-[1.8] text-muted-foreground self-end">
              Our travel packages combine premium vehicle transport with expert drivers
              and carefully selected accommodations. We handle the road; you enjoy the view.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {packages.slice(0, 3).map((p) => (
              <Link
                key={p.slug}
                to="/packages"
                className="group block bg-card hover-lift shadow-soft"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.name}
                    width={1200}
                    height={1500}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
                  />
                </div>
                <div className="p-8">
                  <div className="flex justify-between eyebrow mb-4">
                    <span>{p.destination}</span>
                    <span>{p.duration}</span>
                  </div>
                  <h3 className="font-serif text-3xl mb-3">{p.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    {p.summary}
                  </p>
                  <div className="flex justify-between items-baseline pt-6 border-t border-border">
                    <span className="font-serif text-2xl">
                      ${p.priceFrom.toLocaleString()}
                    </span>
                    <span className="eyebrow">From / per guest</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              to="/packages"
              className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] border-b border-charcoal/30 pb-1 hover:border-charcoal hover:text-accent transition-colors"
            >
              All packages
              <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="container-editorial py-32 md:py-40">
        <div className="mb-16">
          <span className="eyebrow">Chapter IV — Feedback</span>
        </div>
        <TestimonialCarousel />
      </section>

      {/* CTA */}
      <section className="container-editorial pb-32">
        <div className="bg-charcoal text-linen p-12 md:p-20 lg:p-28 relative overflow-hidden">
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-terracotta/20 rounded-full blur-[120px]" />
          <div className="relative max-w-3xl">
            <span className="eyebrow text-linen/50">Book your transport</span>
            <h2 className="font-serif text-5xl md:text-7xl mt-6 leading-[0.95] text-balance">
              Ready to<br />
              <em className="text-linen/70">hit the road?</em>
            </h2>
            <p className="mt-8 text-linen/70 text-lg leading-relaxed max-w-xl">
              Whether you need a luxury transfer or a week-long chauffeured tour, 
              our drivers and vehicles are at your service.
            </p>
            <Link
              to="/contact"
              className="mt-10 inline-flex items-center gap-3 bg-linen text-charcoal px-8 py-4 text-[11px] uppercase tracking-[0.22em] hover:bg-accent hover:text-linen transition-colors group"
            >
              Contact Us
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
