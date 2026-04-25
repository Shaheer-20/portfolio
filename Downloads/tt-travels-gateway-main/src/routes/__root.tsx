import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <span className="eyebrow">Error 404</span>
        <h1 className="font-serif text-7xl mt-4">Lost in transit.</h1>
        <p className="mt-4 text-muted-foreground">
          This page has wandered off the map. Let's find our way back.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-block bg-charcoal text-linen px-8 py-3 text-[11px] uppercase tracking-[0.22em] hover:bg-accent transition-colors"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "TT Travels — Curated Journeys, Quietly Considered" },
      {
        name: "description",
        content:
          "TT Travels designs deeply considered journeys to a small collection of sanctuaries — coastal villas, mountain retreats, desert riads.",
      },
      { name: "author", content: "TT Travels" },
      { property: "og:title", content: "TT Travels — Curated Journeys" },
      {
        property: "og:description",
        content:
          "Quiet, considered travel. Private villas and curated itineraries across the Mediterranean and beyond.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
