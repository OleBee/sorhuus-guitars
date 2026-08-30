import { Link } from "@tanstack/react-router";
import { Logo } from "@/components/logo";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-bg">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-3 md:py-20">
        <div>
          <Logo size="footer" />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted">
            Hand-built guitars in small series. Rælingen, Norway.
          </p>
        </div>
        <div className="flex flex-col gap-3 text-sm text-muted">
          <Link to="/collection" className="hover:text-fg">
            Collection
          </Link>
          <Link to="/atelier" className="hover:text-fg">
            The atelier
          </Link>
          <Link to="/commission" className="hover:text-fg">
            Commission
          </Link>
        </div>
        <div className="text-sm leading-relaxed text-muted">
          <p>Atelier by appointment</p>
          <p className="mt-1">Rælingen</p>
          <a
            href="mailto:atelier@sorhuus.no"
            className="mt-4 inline-block text-fg hover:text-accent"
          >
            atelier@sorhuus.no
          </a>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl items-center justify-between border-t border-border px-5 py-5 text-xs tracking-[0.16em] text-subtle uppercase sm:px-8">
        <span>Est. atelier</span>
        <span>One instrument at a time</span>
      </div>
    </footer>
  );
}
