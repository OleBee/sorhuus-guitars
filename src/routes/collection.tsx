import { createFileRoute } from "@tanstack/react-router";
import { GuitarCard } from "@/components/guitar-card";
import { guitars } from "@/lib/guitars";

export const Route = createFileRoute("/collection")({
  component: CollectionPage,
});

function CollectionPage() {
  return (
    <main className="pt-28 sm:pt-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <p className="text-[0.7rem] tracking-[0.28em] text-muted uppercase">
          Collection
        </p>
        <h1 className="mt-3 font-display text-display leading-[0.9]">
          The instruments
        </h1>
        <p className="mt-5 max-w-xl text-muted leading-relaxed">
          Small series, numbered. Some are available now. Others have sold —
          and can be built again as a commission.
        </p>

        <div className="mt-12 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {guitars.map((g) => (
            <GuitarCard key={g.slug} guitar={g} />
          ))}
        </div>
      </div>
      <div className="h-24" />
    </main>
  );
}
