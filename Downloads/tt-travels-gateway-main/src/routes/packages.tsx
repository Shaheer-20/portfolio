import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { packages } from "@/data/site";
import { Check } from "lucide-react";

export const Route = createFileRoute("/packages")({
  head: () => ({
    meta: [
      { title: "Journeys — TT Travels" },
      {
        name: "description",
        content:
          "Hand-composed itineraries: coastal sojourns, cultural immersions, fjord expeditions and wellness retreats.",
      },
      { property: "og:title", content: "Journeys — TT Travels" },
      {
        property: "og:description",
        content: "Hand-composed itineraries by TT Travels.",
      },
    ],
  }),
  component: PackagesPage,
});

const CATEGORIES = ["All", "Coastal", "Cultural", "Adventure", "Wellness"] as const;
const SORTS = ["Featured", "Price: Low to High", "Price: High to Low", "Duration"] as const;

function PackagesPage() {
  const [cat, setCat] = useState<(typeof CATEGORIES)[number]>("All");
  const [sort, setSort] = useState<(typeof SORTS)[number]>("Featured");

  const list = useMemo(() => {
    const filtered = cat === "All" ? packages : packages.filter((p) => p.category === cat);
    const sorted = [...filtered];
    if (sort === "Price: Low to High") sorted.sort((a, b) => a.priceFrom - b.priceFrom);
    if (sort === "Price: High to Low") sorted.sort((a, b) => b.priceFrom - a.priceFrom);
    if (sort === "Duration") sorted.sort((a, b) => b.nights - a.nights);
    return sorted;
  }, [cat, sort]);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="container-editorial pt-40 pb-20 md:pt-52">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-8 h-px bg-charcoal/30" />
          <span className="eyebrow">Itineraries</span>
        </div>
        <h1 className="font-serif text-6xl md:text-8xl lg:text-[8rem] leading-[0.88] tracking-tight max-w-5xl">
          Composed<br />
          <em>by hand.</em>
        </h1>
        <p className="mt-12 max-w-xl text-lg leading-[1.8] text-muted-foreground">
          Each journey is a starting point — every detail can be reshaped to your rhythm.
        </p>
      </section>

      {/* Filters */}
      <section className="container-editorial pb-12">
        <div className="flex flex-col md:flex-row md:items-center gap-8 border-y border-border py-6">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="eyebrow">Style</span>
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`text-sm transition-colors ${
                  cat === c ? "text-accent border-b border-accent pb-0.5" : "hover:text-accent"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="md:ml-auto flex items-center gap-3">
            <span className="eyebrow">Sort</span>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as (typeof SORTS)[number])}
              className="bg-transparent text-sm border-b border-border focus:outline-none focus:border-charcoal py-1"
            >
              {SORTS.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      <section className="container-editorial pb-32">
        <div className="space-y-20 md:space-y-28">
          {list.map((p, i) => (
            <article
              key={p.slug}
              className={`grid lg:grid-cols-12 gap-8 lg:gap-16 items-center ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="lg:col-span-7 aspect-[4/3] overflow-hidden bg-limestone hover-lift">
                <img
                  src={p.image}
                  alt={p.name}
                  width={1600}
                  height={1200}
                  loading="lazy"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-[2s]"
                />
              </div>
              <div className="lg:col-span-5">
                <div className="flex items-center gap-4 mb-5 eyebrow">
                  <span>{p.category}</span>
                  <span className="text-charcoal/30">/</span>
                  <span>{p.destination}</span>
                  <span className="text-charcoal/30">/</span>
                  <span>{p.duration}</span>
                </div>
                <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[0.95] mb-6">
                  {p.name}
                </h2>
                <p className="text-muted-foreground leading-[1.8] mb-8">{p.summary}</p>

                <ul className="space-y-3 mb-10">
                  {p.inclusions.map((inc) => (
                    <li key={inc} className="flex items-start gap-3 text-sm">
                      <Check className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex items-end justify-between pt-6 border-t border-border">
                  <div>
                    <p className="eyebrow mb-1">From / per guest</p>
                    <p className="font-serif text-4xl">${p.priceFrom.toLocaleString()}</p>
                  </div>
                  <Link
                    to="/contact"
                    className="bg-charcoal text-linen px-6 py-3 text-[11px] uppercase tracking-[0.22em] hover:bg-accent transition-colors"
                  >
                    Inquire
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
