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

const V = "v=11";

export const guitars: Guitar[] = [
  {
    slug: "ember",
    number: "No. 01",
    name: "Ember",
    kind: "electric",
    status: "available",
    year: 2026,
    mensur: "628 mm",
    tagline: "Carved top. Dark sunburst. Studio light.",
    description:
      "Ember is a carved solidbody with two humbuckers and a three-and-three headstock. Dark sunburst, block inlays, and chrome — built for weight, sustain, and a warm midrange.",
    story:
      "Photographed in the studio against charcoal. The carved maple top reads in sidelight; the burst falls to black at the edge.",
    hero: asset(`guitars/ember-hero.svg?${V}`),
    gallery: [
      asset(`guitars/ember-hero.svg?${V}`),
      asset(`guitars/ember-angle.svg?${V}`),
      asset(`guitars/ember-alt.svg?${V}`),
    ],
    specs: [
      { label: "Body", value: "Carved solidbody" },
      { label: "Neck", value: "Set-in, three-and-three" },
      { label: "Pickups", value: "Two humbuckers" },
      { label: "Hardware", value: "Chrome" },
      { label: "Scale", value: "628 mm" },
      { label: "Finish", value: "Nitrocellulose, dark sunburst" },
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
    tagline: "Honey over maple. Same gravity, another temperature.",
    description:
      "Rav is Ember’s sister in open wood — a carved single-cut in honey and amber, two humbuckers, and a six-in-line headstock. Same intent, more light in the lacquer.",
    story:
      "Studio portrait on charcoal. The grain of the top is left to speak; no burst, no theatre.",
    hero: asset(`guitars/rav-hero.svg?${V}`),
    gallery: [asset(`guitars/rav-hero.svg?${V}`)],
    specs: [
      { label: "Body", value: "Carved solidbody" },
      { label: "Neck", value: "Set-in, six-in-line" },
      { label: "Pickups", value: "Two humbuckers" },
      { label: "Hardware", value: "Chrome" },
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
    tagline: "Cream body. Tortoise guard. Gold hardware.",
    description:
      "Høst is a bolt-on in a cream finish, with a tortoise pickguard, gold hardware, and a three-and-three headstock. Dry attack, open treble — built for the studio and small rooms.",
    story:
      "A simpler instrument than Ember, with the same gravity. Photographed full-length on a dark seamless ground.",
    hero: asset(`guitars/host-hero.svg?${V}`),
    gallery: [asset(`guitars/host-hero.svg?${V}`)],
    specs: [
      { label: "Body", value: "Solidbody, bolt-on" },
      { label: "Neck", value: "Three-and-three" },
      { label: "Pickups", value: "Single coil" },
      { label: "Hardware", value: "Gold" },
      { label: "Scale", value: "648 mm" },
      { label: "Finish", value: "Nitro, cream" },
    ],
  },
  {
    slug: "kveld",
    number: "No. 04",
    name: "Kveld",
    kind: "electric",
    status: "available",
    year: 2026,
    mensur: "648 mm",
    tagline: "Metallic blue. Pearl guard. Evening voice.",
    description:
      "Kveld is an offset electric in metallic blue, with a pearloid pickguard, gold hardware, and two humbuckers. Built as a companion — more chamber than concert hall.",
    story:
      "Studio light on a dark ground. The lacquer holds the room; the silhouette is the whole argument.",
    hero: asset(`guitars/kveld-hero.svg?${V}`),
    gallery: [asset(`guitars/kveld-hero.svg?${V}`)],
    specs: [
      { label: "Body", value: "Offset solidbody" },
      { label: "Neck", value: "Six-in-line" },
      { label: "Pickups", value: "Two humbuckers" },
      { label: "Hardware", value: "Gold" },
      { label: "Scale", value: "648 mm" },
      { label: "Finish", value: "Nitro, metallic blue" },
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
