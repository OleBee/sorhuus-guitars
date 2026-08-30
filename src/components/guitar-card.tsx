import { Link } from "@tanstack/react-router";
import type { Guitar } from "@/lib/guitars";
import { STATUS_LABEL } from "@/lib/guitars";
import { cn } from "@/lib/utils";

export function GuitarCard({
  guitar,
  featured = false,
}: {
  guitar: Guitar;
  featured?: boolean;
}) {
  return (
    <Link
      to="/guitar/$slug"
      params={{ slug: guitar.slug }}
      className="group block"
    >
      <div className="overflow-hidden bg-surface outline outline-1 -outline-offset-1 outline-fg/10">
        <img
          src={guitar.hero}
          alt={`${guitar.number} ${guitar.name}`}
          className={cn(
            "w-full object-contain bg-surface transition-transform duration-500 ease-out group-hover:scale-[1.03]",
            featured ? "aspect-[4/5] sm:aspect-[3/4]" : "aspect-[2/3]",
          )}
        />
      </div>
      <div className="mt-4 flex items-start justify-between gap-4">
        <div>
          <p className="text-[0.65rem] tracking-[0.28em] text-muted uppercase">
            {guitar.number}
          </p>
          <h3 className="mt-1 font-display text-2xl leading-none sm:text-3xl">
            {guitar.name}
          </h3>
        </div>
        <span
          className={cn(
            "mt-1 shrink-0 text-[0.65rem] tracking-[0.18em] uppercase",
            guitar.status === "available" ? "text-fg" : "text-subtle",
          )}
        >
          {STATUS_LABEL[guitar.status]}
        </span>
      </div>
      <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted">
        {guitar.tagline}
      </p>
    </Link>
  );
}
