import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDown, ArrowRight } from "lucide-react";
import { GuitarCard } from "@/components/guitar-card";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { asset } from "@/lib/base";
import { guitars } from "@/lib/guitars";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const featured = ["ember", "rav", "kveld"]
    .map((slug) => guitars.find((g) => g.slug === slug))
    .filter((g): g is NonNullable<typeof g> => Boolean(g));

  return (
    <main>
      <section className="relative min-h-dvh overflow-hidden bg-bg">
        <img
          src={asset("guitars/ember-window.jpg?v=9")}
          alt="Sörhuus Ember, a hand-built electric guitar"
          className="absolute inset-0 h-full w-full object-cover object-[center_30%]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/45 to-bg/30" />
        <div className="relative flex min-h-dvh flex-col justify-end px-5 pb-16 pt-28 sm:px-8 sm:pb-20">
          <div className="mx-auto w-full max-w-7xl">
            <Logo
              size="hero"
              className="rise mb-6 drop-shadow-[0_8px_28px_rgba(0,0,0,0.55)]"
            />
            <p className="rise rise-2 text-[0.7rem] tracking-[0.32em] text-accent uppercase">
              Rælingen · Hand-built
            </p>
            <h1 className="rise rise-3 mt-4 max-w-4xl font-display text-display leading-[0.9] tracking-tight">
              One instrument
              <br />
              <em className="italic">at a time.</em>
            </h1>
            <p className="rise rise-3 mt-6 max-w-md text-lede leading-relaxed text-fg/80">
              Sörhuus Guitars builds exclusive instruments in small series.
              Chosen woods, nitrocellulose, and hardware selected for sound —
              not for volume.
            </p>
            <div className="rise rise-4 mt-8 flex flex-wrap gap-3">
              <Button asChild>
                <Link to="/collection">View the collection</Link>
              </Button>
              <Button asChild variant="ghost">
                <Link to="/commission">Commission an instrument</Link>
              </Button>
            </div>
          </div>
          <ArrowDown
            className="absolute bottom-6 right-6 size-5 text-muted sm:right-10"
            aria-hidden
          />
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 md:grid-cols-12 md:py-24">
          <p className="text-[0.7rem] tracking-[0.28em] text-muted uppercase md:col-span-3">
            The atelier
          </p>
          <div className="md:col-span-8 md:col-start-5">
            <h2 className="font-display text-title leading-tight">
              Built in quiet, for hands that play.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted">
              Every instrument passes through the same atelier in Rælingen. No line,
              no seasonal collection. We take in a small amount of wood each
              year and let time do the rest — drying, carving, lacquer, and
              setup.
            </p>
            <Link
              to="/atelier"
              className="mt-8 inline-flex h-11 items-center gap-2 text-sm tracking-[0.16em] uppercase hover:text-accent"
            >
              About the work
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-border px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-[0.7rem] tracking-[0.28em] text-muted uppercase">
                Selected
              </p>
              <h2 className="mt-3 font-display text-title">The collection</h2>
            </div>
            <Link
              to="/collection"
              className="hidden text-sm tracking-[0.16em] text-muted uppercase hover:text-fg sm:inline-flex"
            >
              All instruments
            </Link>
          </div>
          <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((g) => (
              <GuitarCard key={g.slug} guitar={g} featured />
            ))}
          </div>
        </div>
      </section>

      <section className="relative min-h-[70vh] overflow-hidden border-t border-border">
        <img
          src={asset("guitars/kveld-rom.jpg?v=9")}
          alt="Kveld in the atelier"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-bg/55" />
        <div className="relative mx-auto flex min-h-[70vh] max-w-7xl items-end px-5 py-16 sm:px-8">
          <blockquote className="max-w-xl">
            <p className="font-display text-3xl leading-snug italic sm:text-4xl">
              “Wood remembers the hand. We build slowly, so the instrument can
              forget us.”
            </p>
            <footer className="mt-6 text-xs tracking-[0.22em] text-muted uppercase">
              Sörhuus atelier, Rælingen
            </footer>
          </blockquote>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[0.7rem] tracking-[0.28em] text-muted uppercase">
            Commission
          </p>
          <h2 className="mt-4 font-display text-title">
            An instrument for your hands.
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-muted leading-relaxed">
            We take a limited number of commissions each year. Tell us about
            tone, wood, and how you play — the atelier will write back.
          </p>
          <div className="mt-8">
            <Button asChild size="lg">
              <Link to="/commission">Start a conversation</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
