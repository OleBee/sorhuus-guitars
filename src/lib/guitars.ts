import { asset } from "./base";

export type GuitarKind = "electric" | "acoustic";
export type GuitarStatus = "available" | "sold" | "hold";

export type Guitar = {
  slug: string;
  number: string;
  name: string;
  kind: GuitarKind;
  status: GuitarStatus;
  year: number;
  mensur: string;
  tagline: string;
  description: string;
  story: string;
  hero: string;
  gallery: string[];
  specs: { label: string; value: string }[];
};

export const KIND_LABEL: Record<GuitarKind, string> = {
  electric: "Electric",
  acoustic: "Acoustic",
};

export const STATUS_LABEL: Record<GuitarStatus, string> = {
  available: "Available",
  sold: "Sold",
  hold: "On hold",
};

export const guitars: Guitar[] = [
  {
    slug: "ember",
    number: "No. 01",
    name: "Ember",
    kind: "electric",
    status: "available",
    year: 2026,
    mensur: "628 mm",
    tagline: "Carved top. Gold hardware. Dark nitro.",
    description:
      "Ember is a carved solidbody with two humbuckers and a three-and-three headstock. Dark finish, cream binding, and brushed gold — built for weight, sustain, and a warm midrange.",
    story:
      "Photographed in the atelier, in winter light against textile and wood. The body is carved by hand; the topography of the top reads in sidelight.",
    hero: asset("guitars/ember-window.jpg?v=9"),
    gallery: [
      asset("guitars/ember-window.jpg?v=9"),
      asset("guitars/ember-sofa.jpg?v=9"),
      asset("guitars/ember-angle.jpg?v=9"),
      asset("guitars/ember-close.jpg?v=9"),
    ],
    specs: [
      { label: "Body", value: "Carved solidbody" },
      { label: "Neck", value: "Set-in, three-and-three" },
      { label: "Pickups", value: "Two humbuckers" },
      { label: "Hardware", value: "Brushed gold" },
      { label: "Scale", value: "628 mm" },
      { label: "Finish", value: "Nitrocellulose, dark" },
    ],
  },
  {
    slug: "rav",
    number: "No. 02",
    name: "Rav",
    kind: "electric",
    status: "available",
    year: 2026,
    mensur: "628 mm",
    tagline: "Honey over maple. Same form, another temperature.",
    description:
      "Rav is Ember’s sister in open wood — a carved top in honey and amber, gold hardware, and two humbuckers. Same body, more light in the lacquer.",
    story:
      "The top is carved so the grain reads in relief. Photographed in the same room as Ember, against another textile, in softer light.",
    hero: asset("guitars/rav-full.jpg?v=9"),
    gallery: [
      asset("guitars/rav-full.jpg?v=9"),
      asset("guitars/rav-sofa.jpg?v=9"),
      asset("guitars/rav-wide.jpg?v=9"),
      asset("guitars/rav-carve.jpg?v=9"),
    ],
    specs: [
      { label: "Body", value: "Carved solidbody" },
      { label: "Neck", value: "Set-in, three-and-three" },
      { label: "Pickups", value: "Two humbuckers" },
      { label: "Hardware", value: "Brushed gold" },
      { label: "Scale", value: "628 mm" },
      { label: "Finish", value: "Nitro, honey / amber" },
    ],
  },
  {
    slug: "host",
    number: "No. 03",
    name: "Høst",
    kind: "electric",
    status: "available",
    year: 2026,
    mensur: "648 mm",
    tagline: "Butterscotch. Cream pickguard. Dry twang.",
    description:
      "Høst is a bolt-on in a butter-soft finish, with a cream pickguard, chrome hardware, and a six-in-line headstock. Dry attack, open treble — built for the studio and small rooms.",
    story:
      "A simpler instrument than Ember, with the same gravity. No relic, no theatre. Wood, lacquer, and a setup that sits.",
    hero: asset("guitars/host-portrait.jpg?v=9"),
    gallery: [
      asset("guitars/host-portrait.jpg?v=9"),
      asset("guitars/host-sofa.jpg?v=9"),
      asset("guitars/host-wide.jpg?v=9"),
      asset("guitars/host-lie.jpg?v=9"),
    ],
    specs: [
      { label: "Body", value: "Solidbody, bolt-on" },
      { label: "Neck", value: "Six-in-line" },
      { label: "Pickups", value: "Two single coils" },
      { label: "Hardware", value: "Chrome" },
      { label: "Scale", value: "648 mm" },
      { label: "Finish", value: "Nitro, butterscotch" },
    ],
  },
  {
    slug: "kveld",
    number: "No. 04",
    name: "Kveld",
    kind: "acoustic",
    status: "available",
    year: 2026,
    mensur: "648 mm",
    tagline: "Dark acoustic. Open voice. Built for quiet rooms.",
    description:
      "Kveld is a dark acoustic with a deep body and a dry, quick response. Meant as a companion — more chamber than concert hall.",
    story:
      "Photographed in use: in the room, against window and plants, and out on the balcony in evening sun. The instrument carries the mark of hands, not of the stage.",
    hero: asset("guitars/kveld-gulv.jpg?v=9"),
    gallery: [
      asset("guitars/kveld-gulv.jpg?v=9"),
      asset("guitars/kveld-rom.jpg?v=9"),
      asset("guitars/kveld-balkong.jpg?v=9"),
    ],
    specs: [
      { label: "Body", value: "Acoustic, dark finish" },
      { label: "Top", value: "Spruce, dark-stained" },
      { label: "Neck", value: "Mahogany" },
      { label: "Scale", value: "648 mm" },
      { label: "Finish", value: "Thin nitro, satin" },
    ],
  },
];

export function getGuitar(slug: string) {
  return guitars.find((g) => g.slug === slug);
}

export function neighbors(slug: string) {
  const i = guitars.findIndex((g) => g.slug === slug);
  if (i < 0) return { prev: undefined, next: undefined };
  return {
    prev: guitars[(i - 1 + guitars.length) % guitars.length],
    next: guitars[(i + 1) % guitars.length],
  };
}
