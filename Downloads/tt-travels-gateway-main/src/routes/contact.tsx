import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Mail, Phone, MapPin } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — TT Travels" },
      {
        name: "description",
        content:
          "Begin a conversation with TT Travels. Tell us what you imagine and we will send a considered reply.",
      },
      { property: "og:title", content: "Contact — TT Travels" },
      {
        property: "og:description",
        content: "Tell us what you imagine. We will send a considered reply.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="container-editorial pt-40 pb-12 md:pt-52">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-8 h-px bg-charcoal/30" />
          <span className="eyebrow">Inquire</span>
        </div>
        <h1 className="font-serif text-6xl md:text-8xl lg:text-[9rem] leading-[0.88] tracking-tight max-w-5xl">
          A considered<br />
          <em>reply.</em>
        </h1>
      </section>

      <section className="container-editorial py-20">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Form */}
          <div className="lg:col-span-7">
            {submitted ? (
              <div className="bg-limestone/40 p-12 md:p-16 text-center">
                <p className="eyebrow mb-6">Received</p>
                <h2 className="font-serif text-4xl md:text-5xl leading-[1.1] mb-6">
                  Thank you.<br />
                  <em>We'll write back soon.</em>
                </h2>
                <p className="text-muted-foreground">
                  A curator will reply within two working days.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="space-y-10"
              >
                <div className="grid md:grid-cols-2 gap-10">
                  <Field label="Your name" name="name" required />
                  <Field label="Email" name="email" type="email" required />
                </div>
                <div className="grid md:grid-cols-2 gap-10">
                  <Field label="Destination of interest" name="destination" />
                  <Field label="Approximate dates" name="dates" />
                </div>
                <Field label="Tell us what you imagine" name="message" textarea required />
                <button
                  type="submit"
                  className="bg-charcoal text-linen px-10 py-4 text-[11px] uppercase tracking-[0.22em] hover:bg-accent transition-colors"
                >
                  Send Inquiry
                </button>
              </form>
            )}
          </div>

          {/* Contact info */}
          <aside className="lg:col-span-4 lg:col-start-9 space-y-12">
            <div>
              <p className="eyebrow mb-4">Studio</p>
              <p className="font-serif text-2xl leading-snug">
                14 Tavistock Mews<br />
                Notting Hill<br />
                London W11 2AP
              </p>
            </div>
            <div className="space-y-5 pt-8 border-t border-border">
              <a href="mailto:hello@tttravels.com" className="flex items-center gap-4 group">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm group-hover:text-accent transition-colors">
                  hello@tttravels.com
                </span>
              </a>
              <a href="tel:+442079460182" className="flex items-center gap-4 group">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm group-hover:text-accent transition-colors">
                  +44 20 7946 0182
                </span>
              </a>
              <div className="flex items-center gap-4">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">By appointment only</span>
              </div>
            </div>
            <div className="pt-8 border-t border-border">
              <p className="eyebrow mb-4">Hours</p>
              <p className="text-sm text-muted-foreground leading-loose">
                Mon — Fri / 09.00 — 18.00 GMT<br />
                Replies within two working days.
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* Map */}
      <section className="container-editorial pb-32">
        <div className="aspect-[16/9] md:aspect-[21/9] overflow-hidden bg-limestone shadow-soft">
          <iframe
            title="TT Travels studio location"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-0.2120%2C51.5100%2C-0.1980%2C51.5170&layer=mapnik&marker=51.5135%2C-0.2050"
            className="w-full h-full grayscale contrast-110"
            loading="lazy"
          />
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  textarea,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  textarea?: boolean;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="eyebrow block mb-3">{label}</span>
      {textarea ? (
        <textarea
          name={name}
          required={required}
          rows={5}
          className="w-full bg-transparent border-b border-border focus:border-charcoal py-3 text-base focus:outline-none transition-colors resize-none"
        />
      ) : (
        <input
          type={type}
          name={name}
          required={required}
          className="w-full bg-transparent border-b border-border focus:border-charcoal py-3 text-base focus:outline-none transition-colors"
        />
      )}
    </label>
  );
}
