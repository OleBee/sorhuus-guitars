import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { asset } from "@/lib/base";

export const Route = createFileRoute("/atelier")({ component: AtelierPage });

function AtelierPage() {
  return (
    <main className="pt-28 sm:pt-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <p className="text-[0.7rem] tracking-[0.28em] text-muted uppercase">
          Atelier
        </p>
        <h1 className="mt-3 max-w-3xl font-display text-display leading-[0.9]">
          A quiet room in Rælingen.
        </h1>
        <p className="mt-6 max-w-xl text-lede leading-relaxed text-muted">
          Sörhuus Guitars is a small atelier. We build exclusive instruments
          for players who want something that cannot be ordered from a list.
        </p>
      </div>

      <div className="mx-auto mt-14 max-w-7xl px-5 sm:px-8">
        <img
          src={asset("guitars/ember-hero.svg?v=10")}
          alt="Ember — studio portrait"
          className="aspect-[16/10] w-full bg-surface object-contain outline outline-1 -outline-offset-1 outline-fg/10"
        />
      </div>

      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-2 md:py-24">
        <div>
          <h2 className="font-display text-title">The wood first.</h2>
          <p className="mt-5 leading-relaxed text-muted">
            We take in a limited lot of mahogany, maple, sitka, and walnut each
            year. The blanks dry in the atelier until they have stopped moving.
            Only then is the body and neck drawn. Nothing is forced. If the
            wood will not, we wait.
          </p>
        </div>
        <div>
          <h2 className="font-display text-title">Nitro, not plastic.</h2>
          <p className="mt-5 leading-relaxed text-muted">
            The finish is nitrocellulose in thin coats. It wears with the years
            and lets the voice through. Hardware is chosen for weight and
            friction, not for shine. The setup is finished in the same room
            the build began.
          </p>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-6 px-5 sm:px-8 lg:grid-cols-2">
        <img
          src={asset("guitars/host-hero.svg?v=10")}
          alt="Høst, studio portrait"
          className="aspect-[4/5] w-full bg-surface object-contain outline outline-1 -outline-offset-1 outline-fg/10 lg:aspect-[16/10]"
        />
        <img
          src={asset("guitars/kveld-hero.svg?v=10")}
          alt="Kveld, studio portrait"
          className="aspect-[4/5] w-full bg-surface object-contain outline outline-1 -outline-offset-1 outline-fg/10 lg:aspect-[16/10]"
        />
      </div>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="grid gap-10 border-t border-border pt-14 md:grid-cols-3">
          {[
            {
              n: "01",
              t: "Conversation",
              d: "We start with how you play, not with a configurator. Tone, weight, neck profile.",
            },
            {
              n: "02",
              t: "Wood",
              d: "You see the blanks. We choose together — or we say no if the store does not stretch.",
            },
            {
              n: "03",
              t: "Build",
              d: "Six to ten months. You receive photographs along the way. No rush fees. No shortcuts.",
            },
          ].map((step) => (
            <div key={step.n}>
              <p className="text-[0.7rem] tracking-[0.28em] text-muted">
                {step.n}
              </p>
              <h3 className="mt-3 font-display text-2xl">{step.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{step.d}</p>
            </div>
          ))}
        </div>
        <div className="mt-14">
          <Button asChild>
            <Link to="/commission">Write to the atelier</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
