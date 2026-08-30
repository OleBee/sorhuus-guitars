import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  getGuitar,
  KIND_LABEL,
  neighbors,
  STATUS_LABEL,
} from "@/lib/guitars";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/guitar/$slug")({
  loader: ({ params }) => {
    const guitar = getGuitar(params.slug);
    if (!guitar) throw notFound();
    return { guitar };
  },
  component: GuitarDetail,
});

function GuitarDetail() {
  const { guitar } = Route.useLoaderData();
  const { prev, next } = neighbors(guitar.slug);
  const [active, setActive] = useState(guitar.gallery[0] ?? guitar.hero);

  useEffect(() => {
    setActive(guitar.gallery[0] ?? guitar.hero);
  }, [guitar]);

  return (
    <main className="pt-24 sm:pt-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-10 sm:px-8 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <div className="overflow-hidden bg-surface outline outline-1 -outline-offset-1 outline-fg/10">
            <img
              src={active}
              alt={`${guitar.number} ${guitar.name}`}
              className="aspect-[3/4] w-full bg-surface object-contain sm:aspect-[4/5]"
            />
          </div>
          {guitar.gallery.length > 1 ? (
            <div className="mt-3 grid grid-cols-3 gap-3">
              {guitar.gallery.map((src) => (
                <button
                  key={src}
                  type="button"
                  onClick={() => setActive(src)}
                  className={cn(
                    "overflow-hidden outline outline-1 -outline-offset-1",
                    active === src ? "outline-accent" : "outline-fg/10",
                  )}
                >
                  <img
                    src={src}
                    alt=""
                    className="aspect-[4/3] w-full bg-surface object-contain"
                  />
                </button>
              ))}
            </div>
          ) : null}
        </div>

        <div className="lg:col-span-5 lg:pt-4">
          <p className="text-[0.7rem] tracking-[0.28em] text-muted uppercase">
            {guitar.number} · {KIND_LABEL[guitar.kind]}
          </p>
          <h1 className="mt-3 font-display text-display leading-[0.9]">
            {guitar.name}
          </h1>
          <p className="mt-2 text-sm tracking-[0.16em] text-muted uppercase">
            {STATUS_LABEL[guitar.status]} · {guitar.year}
          </p>
          <p className="mt-6 text-lede leading-relaxed text-fg/90">
            {guitar.description}
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted">{guitar.story}</p>

          <dl className="mt-10 divide-y divide-border border-y border-border">
            {guitar.specs.map((row) => (
              <div
                key={row.label}
                className="flex items-baseline justify-between gap-6 py-3"
              >
                <dt className="text-xs tracking-[0.18em] text-muted uppercase">
                  {row.label}
                </dt>
                <dd className="text-sm text-fg">{row.value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button asChild>
              <Link to="/commission" search={{ instrument: guitar.slug }}>
                {guitar.status === "available"
                  ? "Enquire about this instrument"
                  : "Commission a sister instrument"}
              </Link>
            </Button>
            <Button asChild variant="ghost">
              <Link to="/collection">Back to the collection</Link>
            </Button>
          </div>
        </div>
      </div>

      <nav className="mx-auto flex max-w-7xl items-center justify-between border-t border-border px-5 py-8 sm:px-8">
        {prev ? (
          <Link
            to="/guitar/$slug"
            params={{ slug: prev.slug }}
            className="text-sm text-muted hover:text-fg"
          >
            ← {prev.name}
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link
            to="/guitar/$slug"
            params={{ slug: next.slug }}
            className="text-sm text-muted hover:text-fg"
          >
            {next.name} →
          </Link>
        ) : null}
      </nav>
    </main>
  );
}
