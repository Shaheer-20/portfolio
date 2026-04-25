import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Lightbox } from "@/components/Lightbox";
import { vehicles } from "@/data/site";
import { Phone, User } from "lucide-react";

export const Route = createFileRoute("/vehicles")({
  head: () => ({
    meta: [
      { title: "Vehicles — TT Travels" },
      {
        name: "description",
        content:
          "Browse our premium fleet of vehicles and meet our experienced drivers.",
      },
      { property: "og:title", content: "Vehicles — TT Travels" },
      {
        property: "og:description",
        content: "A curated fleet of premium travel vehicles.",
      },
    ],
  }),
  component: VehiclesPage,
});

const TYPES = ["All", "SUV", "Sedan", "Van", "Bus", "Luxury"] as const;

function VehiclesPage() {
  const [type, setType] = useState<(typeof TYPES)[number]>("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = useMemo(
    () => vehicles.filter((v) => type === "All" || v.type === type),
    [type]
  );

  const lightboxImages = filtered.map((v) => ({ src: v.image, alt: v.name }));

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="container-editorial pt-40 pb-20 md:pt-52">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-8 h-px bg-charcoal/30" />
          <span className="eyebrow">Our Fleet</span>
        </div>
        <h1 className="font-serif text-6xl md:text-8xl lg:text-[8rem] leading-[0.88] tracking-tight max-w-5xl">
          Premium<br />
          <em>transport.</em>
        </h1>
        <p className="mt-12 max-w-xl text-lg leading-[1.8] text-muted-foreground">
          Vehicles chosen for their comfort, safety, and reliability. Tap an
          image to look closer.
        </p>
      </section>

      {/* Filters */}
      <section className="container-editorial pb-12">
        <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-12 border-y border-border py-6">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="eyebrow">Vehicle Type</span>
            {TYPES.map((t) => (
              <button
                key={t}
                onClick={() => setType(t)}
                className={`text-sm transition-colors ${
                  type === t ? "text-accent border-b border-accent pb-0.5" : "hover:text-accent"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
          <span className="md:ml-auto eyebrow">{filtered.length} found</span>
        </div>
      </section>

      {/* Grid */}
      <section className="container-editorial pb-32">
        {filtered.length === 0 ? (
          <p className="font-serif italic text-2xl text-muted-foreground py-32 text-center">
            No vehicles match — try a different type.
          </p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-20">
            {filtered.map((v, i) => (
              <article key={v.slug} className="group">
                <button
                  onClick={() => setLightbox(i)}
                  className="block w-full aspect-[4/5] overflow-hidden bg-limestone mb-6 hover-lift"
                >
                  <img
                    src={v.image}
                    alt={v.name}
                    width={1200}
                    height={1500}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
                  />
                </button>
                <div className="flex items-baseline justify-between mb-3">
                  <h3 className="font-serif text-3xl">{v.name}</h3>
                  <span className="eyebrow">{v.type}</span>
                </div>
                <p className="font-serif italic text-muted-foreground mb-3">{v.tagline}</p>
                <p className="text-sm leading-relaxed text-muted-foreground mb-6">{v.description}</p>
                
                {/* Driver Info */}
                <div className="bg-card p-5 border border-border mt-auto">
                  <div className="flex items-center gap-4 mb-4">
                    <img 
                      src={v.driver.image} 
                      alt={v.driver.name} 
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-medium flex items-center gap-2">
                        <User className="w-3 h-3 text-muted-foreground" />
                        {v.driver.name}
                      </p>
                      <p className="text-xs text-muted-foreground">{v.driver.experience} Experience</p>
                    </div>
                  </div>
                  <a 
                    href={`tel:${v.driver.phone}`} 
                    className="flex items-center justify-center gap-2 w-full py-2 bg-charcoal text-linen text-xs uppercase tracking-wider hover:bg-accent transition-colors"
                  >
                    <Phone className="w-3 h-3" />
                    Contact Driver
                  </a>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      {lightbox !== null && (
        <Lightbox
          images={lightboxImages}
          index={lightbox}
          onClose={() => setLightbox(null)}
          onNavigate={setLightbox}
        />
      )}

      <SiteFooter />
    </div>
  );
}
