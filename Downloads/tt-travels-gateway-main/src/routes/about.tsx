import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { team } from "@/data/site";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — TT Travels" },
      {
        name: "description",
        content:
          "TT Travels is a small atelier composing private journeys for travellers who value silence, light, and considered design.",
      },
      { property: "og:title", content: "About — TT Travels" },
      {
        property: "og:description",
        content:
          "A small atelier composing private journeys for considered travellers.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="container-editorial pt-40 pb-20 md:pt-52">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-8 h-px bg-charcoal/30" />
          <span className="eyebrow">The Atelier</span>
        </div>
        <h1 className="font-serif text-6xl md:text-8xl lg:text-[9rem] leading-[0.88] tracking-tight max-w-5xl">
          A small,<br />
          <em>considered studio.</em>
        </h1>
      </section>

      {/* Mission */}
      <section className="container-editorial py-20 md:py-32">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <span className="eyebrow">Our Approach</span>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <p className="font-serif text-3xl md:text-4xl leading-[1.3] mb-10">
              We design fewer journeys, more carefully. Each itinerary is composed by a single
              curator, for a single household, in conversation.
            </p>
            <p className="text-muted-foreground leading-[1.9] mb-6">
              TT Travels was founded in 2014 in a small mews studio in Notting Hill, with the
              quiet conviction that great travel is closer to architecture than to logistics. We
              believe in restraint — in the right room, the right light, the right silence between
              moments.
            </p>
            <p className="text-muted-foreground leading-[1.9]">
              We work with a tight network of villa owners, hoteliers, drivers and guides we have
              known for years. We don't sell packages. We compose journeys.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-limestone/40 py-24 md:py-32">
        <div className="container-editorial grid grid-cols-2 md:grid-cols-4 gap-12">
          {[
            { n: "11", l: "Years composing" },
            { n: "42", l: "Sanctuaries curated" },
            { n: "120", l: "Households served" },
            { n: "98%", l: "Return guests" },
          ].map((s) => (
            <div key={s.l}>
              <p className="font-serif text-6xl md:text-8xl mb-3">{s.n}</p>
              <p className="eyebrow">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="container-editorial py-32 md:py-40">
        <div className="mb-20">
          <span className="eyebrow">The Studio</span>
          <h2 className="font-serif text-5xl md:text-7xl mt-6 leading-[0.95]">
            Three hands,<br />
            <em>one table.</em>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {team.map((m) => (
            <div key={m.name} className="hover-lift">
              <div className="aspect-[4/5] overflow-hidden bg-limestone mb-6">
                <img
                  src={m.image}
                  alt={m.name}
                  width={800}
                  height={1000}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-serif text-3xl">{m.name}</h3>
              <p className="eyebrow mt-3">{m.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-editorial pb-32">
        <div className="border-t border-border pt-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <h2 className="font-serif text-4xl md:text-6xl leading-[0.95] max-w-2xl">
            Begin a quiet conversation.
          </h2>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-charcoal text-linen px-8 py-4 text-[11px] uppercase tracking-[0.22em] hover:bg-accent transition-colors group"
          >
            Inquire
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
