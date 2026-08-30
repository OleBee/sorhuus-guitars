import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { useMemo, useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { guitars } from "@/lib/guitars";
import { cn } from "@/lib/utils";

type Search = { instrument?: string };

export const Route = createFileRoute("/commission")({
  validateSearch: (search: Record<string, unknown>): Search => ({
    instrument:
      typeof search.instrument === "string" ? search.instrument : undefined,
  }),
  component: CommissionPage,
});

type Inquiry = {
  name: string;
  email: string;
  instrument: string;
  woods: string;
  message: string;
  at: string;
};

function loadInquiries(): Inquiry[] {
  try {
    const raw = localStorage.getItem("sorhuus-inquiries");
    return raw ? (JSON.parse(raw) as Inquiry[]) : [];
  } catch {
    return [];
  }
}

function CommissionPage() {
  const { instrument } = Route.useSearch();
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    instrument: instrument ?? "new",
    woods: "",
    message: "",
  });

  const selected = useMemo(
    () => guitars.find((g) => g.slug === form.instrument),
    [form.instrument],
  );

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    if (form.name.trim().length < 2) {
      setError("Please enter your name.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (form.message.trim().length < 12) {
      setError("Tell us a little more about what you are looking for.");
      return;
    }
    const inquiry: Inquiry = { ...form, at: new Date().toISOString() };
    const next = [inquiry, ...loadInquiries()].slice(0, 20);
    localStorage.setItem("sorhuus-inquiries", JSON.stringify(next));
    setSent(true);
  }

  return (
    <main className="pt-28 sm:pt-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 pb-24 sm:px-8 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="text-[0.7rem] tracking-[0.28em] text-muted uppercase">
            Commission
          </p>
          <h1 className="mt-3 font-display text-display leading-[0.9]">
            Write to the atelier.
          </h1>
          <p className="mt-6 max-w-md leading-relaxed text-muted">
            We reply in person. Tell us how you play, the voice you are after,
            and whether you have an instrument from the collection in mind.
          </p>
          {selected ? (
            <div className="mt-10 flex gap-4">
              <img
                src={selected.hero}
                alt={selected.name}
                className="h-28 w-20 object-cover outline outline-1 -outline-offset-1 outline-fg/10"
              />
              <div>
                <p className="text-[0.65rem] tracking-[0.22em] text-muted uppercase">
                  {selected.number}
                </p>
                <p className="font-display text-2xl">{selected.name}</p>
                <p className="mt-1 text-sm text-muted">{selected.tagline}</p>
              </div>
            </div>
          ) : null}
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          {sent ? (
            <div className="border border-border bg-surface px-6 py-12">
              <p className="text-[0.7rem] tracking-[0.28em] text-muted uppercase">
                Received
              </p>
              <h2 className="mt-3 font-display text-3xl">Thank you, {form.name}.</h2>
              <p className="mt-4 leading-relaxed text-muted">
                Your enquiry is saved. The atelier will write to {form.email}{" "}
                once we have read it through.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="flex flex-col gap-5">
              <Field label="Name">
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={fieldClass}
                  autoComplete="name"
                />
              </Field>
              <Field label="Email">
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={fieldClass}
                  autoComplete="email"
                />
              </Field>
              <Field label="Instrument">
                <select
                  value={form.instrument}
                  onChange={(e) =>
                    setForm({ ...form, instrument: e.target.value })
                  }
                  className={cn(fieldClass, "appearance-none")}
                >
                  <option value="new">New commission</option>
                  {guitars.map((g) => (
                    <option key={g.slug} value={g.slug}>
                      {g.number} {g.name}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label="Wood / tone (optional)">
                <input
                  value={form.woods}
                  onChange={(e) => setForm({ ...form, woods: e.target.value })}
                  className={fieldClass}
                  placeholder="Mahogany, sitka, dark and dry…"
                />
              </Field>
              <Field label="Message">
                <textarea
                  required
                  rows={6}
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  className={cn(fieldClass, "resize-y py-3")}
                />
              </Field>
              {error ? <p className="text-sm text-fg">{error}</p> : null}
              <Button type="submit" size="lg">
                Send enquiry
              </Button>
            </form>
          )}
        </div>
      </div>
    </main>
  );
}

const fieldClass =
  "h-12 w-full border border-border bg-surface px-4 text-sm text-fg placeholder:text-subtle outline-none transition-colors duration-150 focus:border-border-strong";

function Field({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-[0.65rem] tracking-[0.22em] text-muted uppercase">
        {label}
      </span>
      {children}
    </label>
  );
}
