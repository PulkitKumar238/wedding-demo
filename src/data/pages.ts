import { services, stories, films } from "@/data/site";

/**
 * Long-form copy for the pages that exist only for search — the per-wedding
 * galleries, the per-service pages, the Lucknow landing page. The home page's
 * sections stay lean; this is where the words a crawler needs actually live.
 *
 * Everything here is grounded in what the studio has really delivered: the
 * cities are the ones in `stories`, the film ids are the real uploads, and no
 * page claims a venue or a date the studio has not confirmed.
 */

/* ------------------------------------------------------------------ weddings */

type WeddingCopy = {
  /** Folder slug under `public/photos/couples` and the URL segment. */
  slug: string;
  /** City the wedding was shot in, or "" for a destination wedding. */
  city: string;
  region: string;
  destination: boolean;
  /** Matching upload from `films`, where the studio published one. */
  filmId?: (typeof films)[number]["id"];
  /** ~150 chars, for the meta description. */
  summary: string;
  /** Body paragraphs, unique per wedding. */
  intro: string[];
};

const WEDDINGS: Record<string, WeddingCopy> = {
  vasundharaBrandon: {
    slug: "vasundhara-brandon",
    city: "Lucknow",
    region: "Uttar Pradesh",
    destination: false,
    summary:
      "Vasundhara & Brandon's Lucknow wedding, photographed by Click Weds — an engagement that turned into full wedding coverage, ceremony to reception.",
    intro: [
      "Vasundhara and Brandon first booked Click Weds for their engagement and came back for the wedding itself — a Lucknow celebration that brought two families and two backgrounds into one weekend of ceremonies.",
      "The gallery below runs across the functions the studio covered: the quiet preparation, the rituals in full, and the portraits both sides of the family asked for. Every frame was culled and graded by hand in the studio's own edit suite.",
    ],
  },
  nishantJenny: {
    slug: "nishant-jenny",
    city: "Varanasi",
    region: "Uttar Pradesh",
    destination: false,
    summary:
      "Nishant & Jenny's Varanasi wedding by Click Weds — two traditions across one weekend, each ceremony covered with the same care.",
    intro: [
      "Nishant and Jenny married in Varanasi over a single weekend that held two very different sets of customs. Click Weds covered both, and neither side was ever treated as the smaller event.",
      "These photographs move through the weekend in order — the arrivals, the ceremonies, the families finding their way through an unfamiliar ritual, and the celebration that followed once the formalities were done.",
    ],
  },
  asavariSwapnil: {
    slug: "asavari-swapnil",
    city: "Lucknow",
    region: "Uttar Pradesh",
    destination: false,
    summary:
      "Asavari & Swapnil's Lucknow wedding, photographed and filmed by Click Weds and delivered in full forty days later — gallery, teaser and long films.",
    intro: [
      "Asavari and Swapnil were married in Lucknow. Forty days later, exactly as promised, the full gallery and the wedding film were delivered — no chasing, no excuses.",
      "The selection here is the story of the day rather than the whole card: the getting-ready hours, the ceremony start to finish, and the frames the couple return to most.",
    ],
  },
  nidaMohamed: {
    slug: "nida-mohamed",
    city: "Lucknow",
    region: "Uttar Pradesh",
    destination: false,
    summary:
      "Nida & Mohamed's Lucknow nikah, photographed by Click Weds — a wedding covered so both families felt looked after from the first ritual on.",
    intro: [
      "Nida and Mohamed's Lucknow wedding was covered by Click Weds from the earliest preparations through to the vidai. Both families felt looked after — the hardest part of a wedding to get right.",
      "The gallery follows the day as it happened, unhurried, with a senior candid photographer on the unposed hours and a traditional photographer on every family portrait.",
    ],
  },
  ashutoshTwinkle: {
    slug: "ashutosh-twinkle",
    city: "",
    region: "India",
    destination: true,
    filmId: "YGodpv3qwd0",
    summary:
      "Ashutosh & Twinkle's destination wedding by Click Weds — full photo and film coverage on the road, with a cinematic teaser to match.",
    intro: [
      "Ashutosh and Twinkle married away from home, and Click Weds travelled with the wedding — a full photo and film crew covering every function on location.",
      "The destination teaser is embedded below, cut in the studio's own suite, and the gallery carries the stills: the setting, the ceremonies, and the guests who made the trip.",
    ],
  },
  dhitiPuneet: {
    slug: "dhiti-puneet",
    city: "Kanpur",
    region: "Uttar Pradesh",
    destination: false,
    summary:
      "Dhiti & Puneet's Kanpur wedding, photographed by Click Weds — calm, unobtrusive coverage that the family stopped noticing by the sangeet.",
    intro: [
      "Dhiti and Puneet were married in Kanpur. The family had worried the photographers would be underfoot during the rituals; by the sangeet they had stopped noticing them entirely.",
      "That is the coverage this gallery is drawn from — close to the ceremony without interrupting it, and every elder on both sides properly photographed.",
    ],
  },
  shubhangiShobhit: {
    slug: "shubhangi-shobhit",
    city: "Lucknow",
    region: "Uttar Pradesh",
    destination: false,
    filmId: "iRp4aJSStCw",
    summary:
      "Shubhangi & Shobhit's Lucknow wedding by Click Weds — a cinematic teaser plus a full gallery, including the bridal portraits the bride still keeps.",
    intro: [
      "Shubhangi and Shobhit were married in Lucknow. The bridal portraits from that day are, in the bride's words, the only photographs of herself she has ever actually liked.",
      "The Lucknow wedding teaser is embedded below. The gallery covers the rest of the day — the preparation, the ceremony, and the portraits, all graded by hand in the studio.",
    ],
  },
  shivanshKeerthi: {
    slug: "shivansh-keerthi",
    city: "Lucknow",
    region: "Uttar Pradesh",
    destination: false,
    summary:
      "Shivansh & Keerthi's Lucknow wedding, photographed by Click Weds — a pre-wedding shoot first, so the camera had stopped mattering by the wedding.",
    intro: [
      "Shivansh and Keerthi describe themselves as stiff in front of a lens. Click Weds spent their pre-wedding shoot just talking to them, and by the wedding they had stopped performing entirely.",
      "The gallery here is the result — a Lucknow wedding photographed close and unposed, with the family portraits handled separately so nobody was left out.",
    ],
  },
  dishaAbhinav: {
    slug: "disha-abhinav",
    city: "Lucknow",
    region: "Uttar Pradesh",
    destination: false,
    summary:
      "Disha & Abhinav's Lucknow wedding by Click Weds — half of it after dark, and the low-light frames are the best in the gallery.",
    intro: [
      "Half of Disha and Abhinav's Lucknow wedding happened after sunset. The couple were sure the photographs would suffer; the night frames are somehow the strongest in the whole gallery.",
      "This selection covers the day and the night both — the daytime rituals, the evening ceremony, and the celebration that ran late.",
    ],
  },
  amanShivangi: {
    slug: "aman-shivangi",
    city: "Kanpur",
    region: "Uttar Pradesh",
    destination: false,
    summary:
      "Aman & Shivangi's Kanpur wedding, photographed by Click Weds — a forty-cousin haldi with every single one of them in the frame.",
    intro: [
      "Aman and Shivangi's Kanpur haldi had forty cousins in it, and Click Weds got every single one. Three of those frames have already been printed and framed by the bride's grandmother.",
      "The gallery below runs through the functions the studio covered in Kanpur — the haldi, the ceremony, and the family portraits either side.",
    ],
  },
};

export type Wedding = WeddingCopy & {
  key: string;
  couple: string;
  location: string;
};

/** Stories, in the studio's own running order, joined to their SEO copy. */
export const weddings: Wedding[] = stories.map((story) => {
  const copy = WEDDINGS[story.key];
  if (!copy) throw new Error(`No wedding copy for story "${story.key}"`);
  return { ...copy, key: story.key, couple: story.couple, location: story.location };
});

export const weddingBySlug = (slug: string): Wedding | undefined =>
  weddings.find((w) => w.slug === slug);

/* ------------------------------------------------------------------ services */

type ServiceCopy = {
  slug: string;
  /** Overrides the plain `<title>`; keep the primary keyword near the front. */
  metaTitle: string;
  summary: string;
  body: string[];
  /** `packages` keys that include this craft, for the "book it in a package" rail. */
  relatedPackages: string[];
};

const SERVICES: Record<string, ServiceCopy> = {
  candidPhotography: {
    slug: "candid-wedding-photography",
    metaTitle: "Candid Wedding Photography in Lucknow",
    summary:
      "Candid wedding photography in Lucknow by Click Weds — the unposed hours of an Indian wedding, shot by a senior photographer who is never asked to be looked at.",
    body: [
      "Candid photography is the coverage of everything nobody arranged: a father's face during the vidai, cousins mid-argument over the sangeet playlist, the grandmother who has quietly started crying at the back of the mandap. Nobody is asked to turn towards the camera.",
      "On a Click Weds wedding this is led by a senior photographer, not an assistant, working close to the ceremony without ever interrupting it. The frames are culled hard and graded by hand in the studio, so what reaches you is the story of the day rather than the whole memory card.",
      "Candid coverage is part of every wedding package, and it can also be booked by the hour for a single function.",
    ],
    relatedPackages: ["haldiWeddingPremium", "ehmw", "ehmwr"],
  },
  cinematicVideography: {
    slug: "cinematic-wedding-videography",
    metaTitle: "Cinematic Wedding Videography & Films in Lucknow",
    summary:
      "Cinematic wedding films in Lucknow by Click Weds — gimbals, prime lenses and a colour grade built to hold up on a television years later.",
    body: [
      "Cinematic videography is the film cut, shot for it from the start: stabilised movement, prime lenses, and audio recorded properly rather than lifted off a phone. It is what a teaser and a highlight film are edited from.",
      "Click Weds shoots and edits this in-house. The teaser — four to five minutes, mixing every cinematic function — comes first, and the long-form film follows once the dust settles. Both are scored and graded by the people who were actually in the room.",
      "Every package includes a cinematic crew on the wedding day; the premium tiers add one to the haldi, mehndi and sangeet as well.",
    ],
    relatedPackages: ["hmwPremium", "hmswPremium", "ehmw"],
  },
  traditionalVideography: {
    slug: "traditional-wedding-videography",
    metaTitle: "Traditional Wedding Videography in Lucknow",
    summary:
      "Traditional wedding videography by Click Weds — every ritual recorded end to end, locked off and unhurried, so the pheras exist in full.",
    body: [
      "Traditional videography is the complete record: each ceremony filmed start to finish, locked off and unhurried, so the pheras and the rituals exist in full and not only as thirty-second highlights.",
      "It runs alongside the cinematic crew on every Click Weds wedding, which means the day is covered two ways at once — the film cut and the full document — without either getting in the other's way.",
      "Full-length edited videos for every function you book are included in all nine packages.",
    ],
    relatedPackages: ["haldiWedding", "hmwStandard", "hmswBasic"],
  },
  traditionalPhotography: {
    slug: "traditional-wedding-photography",
    metaTitle: "Traditional Wedding Photography in Lucknow",
    summary:
      "Traditional wedding photography by Click Weds — the family portraits every household asks for, both sides, every elder, properly lit.",
    body: [
      "Traditional photography is the set of portraits the family will ask for afterwards: both sides, every elder, the group shots on the stage, properly lit and properly composed. Nobody gets left out.",
      "On a Click Weds wedding a dedicated traditional photographer handles these while the candid photographer stays on the unposed hours — so the posed coverage never comes at the cost of the real moments.",
      "A traditional photographer is on the crew for every function in every package.",
    ],
    relatedPackages: ["haldiWedding", "hmwStandard", "ehmwr"],
  },
  photoEditing: {
    slug: "wedding-photo-editing",
    metaTitle: "In-House Wedding Photo Editing & Retouching",
    summary:
      "Wedding photo editing by Click Weds — colour, skin and light matched frame to frame in-house, so a gallery reads as one wedding.",
    body: [
      "Every frame Click Weds delivers is graded by hand in the studio. Colour, skin tone and light are matched across the whole gallery, so a set shot by four people over three days reads as one wedding rather than four photographers.",
      "The cull is deliberate and hard. A finished gallery is the story of the celebration, not an export of everything the cameras caught.",
      "Editing is included in every package; extra album sheets and re-prints are available as add-ons.",
    ],
    relatedPackages: ["haldiWeddingPremium", "hmwPremium", "hmswPremium"],
  },
  videoEditing: {
    slug: "wedding-video-editing",
    metaTitle: "In-House Wedding Video Editing",
    summary:
      "Wedding video editing by Click Weds — teasers, highlight films and social cuts, edited, scored and graded by the crew that shot them.",
    body: [
      "The films are cut by the people who shot them. That means the teaser lands on the moments that actually mattered on the day, not the ones that looked good in isolation.",
      "The teaser comes first — four to five minutes, every cinematic function mixed together — followed by the full-length films and one or two reels sized for social media.",
      "All of it is included in the packages; e-invitation videos and extra reels can be added.",
    ],
    relatedPackages: ["hmwStandard", "hmwPremium", "ehmwr"],
  },
  dronePhotography: {
    slug: "wedding-drone-photography",
    metaTitle: "Wedding Drone Photography & Aerial Films in Lucknow",
    summary:
      "Wedding drone photography in Lucknow by Click Weds — the mandap, the baraat and the venue at blue hour, flown by a licensed pilot.",
    body: [
      "A drone gives the scale of the day from above: the full mandap, the baraat coming down the street, the venue lit up at blue hour. It is flown by a licensed pilot.",
      "Aerial coverage is part of the crew on the wedding day in every package, and a drone can be added to any other function. Where a drone is booked, the flight permissions for the venue are the client's to arrange.",
      "It can also be added on its own for ₹6,000.",
    ],
    relatedPackages: ["haldiWedding", "hmwPremium", "ehmwr"],
  },
  craneLedWall: {
    slug: "wedding-crane-and-led-wall",
    metaTitle: "Wedding Crane, Jib & LED Wall Hire in Lucknow",
    summary:
      "Crane, jib and LED wall for weddings in Lucknow by Click Weds — sweeping moves over a full banquet floor and a live wall so the back of the hall sees the stage.",
    body: [
      "A jib move over a full banquet floor gives the reception the scale television coverage has, and a live LED wall means the back of the hall sees the stage as clearly as the front row.",
      "Both are add-ons to any package — the LED wall at ₹12,000, a 32-foot crane at ₹8,000 — and are set up and operated by the studio's own team alongside the photo and film crew.",
      "Live broadcast, a photo booth and a 360 selfie point can be added the same way.",
    ],
    relatedPackages: ["hmswPremium", "ehmwr", "hmwPremium"],
  },
};

export type ServicePage = ServiceCopy & {
  key: string;
  title: string;
  description: string;
};

export const servicePages: ServicePage[] = services.map((service) => {
  const copy = SERVICES[service.key];
  if (!copy) throw new Error(`No service copy for "${service.key}"`);
  return {
    ...copy,
    key: service.key,
    title: service.title,
    description: service.description,
  };
});

export const serviceBySlug = (slug: string): ServicePage | undefined =>
  servicePages.find((s) => s.slug === slug);
