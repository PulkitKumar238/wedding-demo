export const brand = {
  name: "Click Weds",
  shortName: "Click Weds",
  tagline: "Luxury Wedding Photography & Films",
  location: "Lucknow, India",
  serviceArea: "Lucknow · across India · worldwide",
  email: "info.clickweds@gmail.com",
  phone: "+91 84679 88926",
  phoneDisplay: "+91 84679 88926",
  address: "Hazratganj, Lucknow, Uttar Pradesh",
  /** Google Maps embed. Swap the q= value once the studio's pin is verified. */
  mapEmbedUrl:
    "https://www.google.com/maps?q=Click+Weds+Hazratganj+Lucknow&output=embed",
  mapLinkUrl: "https://www.google.com/maps/search/Click+Weds+Hazratganj+Lucknow",
  instagram: "@clickweds",
  instagramUrl: "https://instagram.com/clickweds",
  facebookUrl: "https://facebook.com/princeawasthiphotography",
};

/**
 * Enquiries are handed to WhatsApp as a pre-drafted message, so the couple
 * only has to press send.
 *
 * `number` is digits only: country code first, no leading "+", no spaces or
 * dashes — that is the format wa.me expects.
 */
export const whatsapp = {
  number: "918467988926",
  display: "+91 84679 88926",
};

/**
 * Packages is a route of its own; everything else is a section of the home
 * page. The hashes are absolute rather than bare "#films" so they still work
 * from /packages — next/link keeps them client-side either way, so following
 * one from the home page does not reload it.
 */
export const nav = [
  { label: "Films", href: "/#films" },
  { label: "Services", href: "/#services" },
  { label: "Portfolio", href: "/#portfolio" },
  { label: "Packages", href: "/packages" },
  { label: "Process", href: "/#process" },
  { label: "Stories", href: "/#stories" },
  { label: "Contact", href: "/#booking" },
];

export const hero = {
  eyebrow: "Lucknow · across India · worldwide",
  heading: ["Every Love Story", "Deserves a", "Masterpiece"],
  subtitle:
    "Click Weds photographs once-in-a-lifetime weddings across India — from the first roka to the final vidai, every ritual remembered exactly as it felt.",
  cta: "Book Your Date",
  scrollLabel: "Scroll to begin",
};

export const brandStory = {
  eyebrow: "Our Philosophy",
  title: "Where Rituals Become Memories",
  paragraphs: [
    "Click Weds began with a simple conviction: an Indian wedding is not a schedule to be managed, but a story told across many days — ritual by ritual, colour by colour, family by family.",
    "From our base in Lucknow we photograph celebrations across India and beyond — for families who want their wedding remembered the way it actually felt, not the way a shot list says it should look.",
    "We are not vendors. We are the quiet presence at the edge of the frame, watching for the moments nobody thought to plan. Every Click Weds wedding begins the same way: with listening.",
  ],
  closingLine:
    "Restraint, to us, is the truest form of luxury. One honest frame says more than a hundred arranged for effect.",
  signature: "The Click Weds Team, Lucknow",
};

/**
 * What the studio actually sells, in the order the team lists it. Every tile is
 * backed by a photograph of that service being carried out — the edit suites
 * and the drone included — rather than a wedding frame standing in for the
 * craft behind it.
 */
export const services = [
  {
    key: "candidPhotography",
    title: "Candid Photography",
    description:
      "The unposed hours — a father's face during the vidai, cousins mid-argument over the sangeet playlist. Nobody is asked to look at us.",
  },
  {
    key: "cinematicVideography",
    title: "Cinematic Videography",
    description:
      "The film cut, shot for it: gimbals, prime lenses, and a colour grade that holds up on a television years later.",
  },
  {
    key: "traditionalVideography",
    title: "Traditional Videography",
    description:
      "Every ritual recorded end to end, locked off and unhurried, so the pheras exist in full and not only as highlights.",
  },
  {
    key: "traditionalPhotography",
    title: "Traditional Photography",
    description:
      "The portraits the family will ask for — both sides, every elder, properly lit and properly composed. Nobody gets left out.",
  },
  {
    key: "photoEditing",
    title: "Photo Editing",
    description:
      "Colour, skin, and light matched frame to frame in-house, so a gallery reads as one wedding rather than four photographers.",
  },
  {
    key: "videoEditing",
    title: "Video Editing",
    description:
      "Cut, scored, and graded by the people who were in the room — the teaser first, the long film once the dust settles.",
  },
  {
    key: "dronePhotography",
    title: "Drone Photography",
    description:
      "The scale of it from above — the mandap, the baraat down the street, the venue at blue hour. Flown by a licensed pilot.",
  },
  {
    key: "craneLedWall",
    title: "Crane & LED Wall",
    description:
      "Jib moves over a full banquet floor, and a live LED wall so the back of the hall sees the stage as clearly as the front row.",
  },
] as const;

/**
 * Every wedding the studio has delivered a gallery for, in the order the studio
 * numbered its own client folders — those folders are the source of truth for
 * both the names and the running order.
 *
 * `key` matches the photo folder under `public/photos/couples`. Locations are
 * the one field the folders do not carry and are still unverified.
 */
export const stories = [
  { key: "vasundharaBrandon", couple: "Vasundhara & Brandon", location: "Lucknow, Uttar Pradesh" },
  { key: "nishantJenny", couple: "Nishant & Jenny", location: "Varanasi, Uttar Pradesh" },
  { key: "asavariSwapnil", couple: "Asavari & Swapnil", location: "Lucknow, Uttar Pradesh" },
  { key: "nidaMohamed", couple: "Nida & Mohamed", location: "Lucknow, Uttar Pradesh" },
  { key: "ashutoshTwinkle", couple: "Ashutosh & Twinkle", location: "Destination Wedding" },
  { key: "dhitiPuneet", couple: "Dhiti & Puneet", location: "Kanpur, Uttar Pradesh" },
  { key: "shubhangiShobhit", couple: "Shubhangi & Shobhit", location: "Lucknow, Uttar Pradesh" },
  { key: "shivanshKeerthi", couple: "Shivansh & Keerthi", location: "Lucknow, Uttar Pradesh" },
  { key: "dishaAbhinav", couple: "Disha & Abhinav", location: "Lucknow, Uttar Pradesh" },
  { key: "amanShivangi", couple: "Aman & Shivangi", location: "Kanpur, Uttar Pradesh" },
] as const;

export const storiesSection = {
  eyebrow: "Their Stories",
  title: "Every Wedding We've Told",
  description:
    "Ten families, ten entirely different days. Open any one to see the whole wedding.",
};

export const process = [
  {
    key: "consultation",
    number: "01",
    title: "Consultation",
    description:
      "We begin with a conversation, not a questionnaire — understanding who you are, individually and together.",
  },
  {
    key: "preWedding",
    number: "02",
    title: "Pre-Wedding Shoot",
    description:
      "An unhurried day somewhere that means something to you, so you are used to the camera long before the wedding.",
  },
  {
    key: "weddingDays",
    number: "03",
    title: "The Wedding Days",
    description:
      "We arrive early and stay late, moving with your families through every ceremony rather than running a shot list.",
  },
  {
    key: "edit",
    number: "04",
    title: "The Edit",
    description:
      "Every frame graded by hand in our studio — culled hard, so what reaches you is the story and not the whole card.",
  },
  {
    key: "album",
    number: "05",
    title: "Album & Film",
    description:
      "Your gallery and film in about forty days, and a printed album built to be handed to people, not scrolled.",
  },
] as const;

/**
 * Grounded in the studio's public listings: over ten years in business,
 * recommended by 100% of couples on WeddingWire, 40 day delivery. The
 * wedding count is the one figure still to be confirmed by the studio.
 */
export const stats = [
  { value: 120, suffix: "+", label: "Weddings Photographed" },
  { value: 10, suffix: "+", label: "Years Behind the Lens" },
  { value: 100, suffix: "%", label: "Couples Recommend Us" },
  { value: 40, suffix: " days", label: "Album Delivery" },
] as const;

export const whyChooseUs = {
  eyebrow: "Why Couples Choose Us",
  title: "Craft, Discretion, and an Obsession with Detail",
  description:
    "Every Click Weds wedding is shot by a senior photographer from the first call to the final album — never handed off, never templated. It is a level of care that has made us the studio couples across Lucknow and beyond keep recommending.",
  points: [
    {
      title: "Senior-Led, Always",
      description: "You work directly with a lead photographer throughout — never a rotating team of assistants.",
    },
    {
      title: "Unhurried Coverage",
      description: "We shoot every ceremony at its own pace, and never leave a function early to reach the next booking.",
    },
    {
      title: "One Wedding at a Time",
      description: "We limit our calendar deliberately, so every celebration receives our undivided attention.",
    },
  ],
};

/**
 * One testimonial per wedding, sharing the story's key so the couple's name and
 * avatar are never restated here and cannot drift out of step with the slider.
 */
export const testimonials = [
  { key: "vasundharaBrandon", quote: "Booked them for an engagement, went back for the wedding, and will send them every cousin I have. Straightforward people who deliver what they promise." },
  { key: "nishantJenny", quote: "Ours was two very different traditions in one weekend. They covered both with the same care, and never once made either side feel like the smaller event." },
  { key: "asavariSwapnil", quote: "Forty days after the wedding, exactly as promised, the full gallery and the film arrived. No chasing, no excuses. Rarer than it should be." },
  { key: "nidaMohamed", quote: "Click Weds didn't just photograph our wedding — they understood it before we did. Both families felt looked after, which is the hardest part of a wedding to get right." },
  { key: "ashutoshTwinkle", quote: "From the first call it was clear this was a team obsessed with craft, not checklists. Nothing about the day felt staged for a camera." },
  { key: "dhitiPuneet", quote: "Impeccable, calm, and endlessly creative. My mother worried they would be underfoot during the rituals, and by the sangeet she had stopped noticing them entirely." },
  { key: "shubhangiShobhit", quote: "My bridal portraits are the only photographs of myself I have ever actually liked. I still have no idea how they managed that in twenty minutes." },
  { key: "shivanshKeerthi", quote: "We are both stiff in front of a lens. They spent the pre-wedding shoot just talking to us, and by the wedding we had stopped performing entirely." },
  { key: "dishaAbhinav", quote: "Half our wedding happened after dark and I was sure the photographs would suffer. They are somehow the best ones in the whole gallery." },
  { key: "amanShivangi", quote: "There were forty cousins in that haldi and they got every single one. My grandmother has printed three of those frames already." },
] as const;

/**
 * The studio's wedding films, in the order they play. Titles are the couples
 * named on each upload — the YouTube titles themselves are keyword-stuffed for
 * search and read badly on a page, so only the names are carried over.
 *
 * Posters live in `public/photos/films`, so the YouTube player is only ever
 * loaded once a visitor actually presses play.
 */
export const films = [
  { id: "YGodpv3qwd0", title: "Ashutosh & Twinkle", note: "Destination wedding teaser" },
  { id: "v59M6vkHfsM", title: "Ayush & Janhvi", note: "Wedding film" },
  { id: "iRp4aJSStCw", title: "Shobhit & Shubhangi", note: "Wedding teaser, Lucknow" },
  { id: "Jw7UKOL7Nu0", title: "Kartik & Nishi", note: "Wedding teaser, Lucknow" },
  { id: "qo0LDkBfZMQ", title: "A Lucknow Nikah", note: "Taj Mahal, Lucknow" },
  { id: "JnDbuRC3LjU", title: "Jasmeet & Jasmine", note: "Wedding highlight" },
  { id: "56nLQih7vWU", title: "Utkarsh & Priyashree", note: "Wedding teaser, Lucknow" },
] as const;

export const filmsSection = {
  eyebrow: "In Motion",
  title: "Our Wedding Films",
  description:
    "Seven weddings as they actually sounded and moved — the teasers and highlight films cut in our own studio.",
};

/**
 * Every occasion a couple can attach a date to in the enquiry form, listed in
 * roughly the order a celebration runs: the run-up, the functions, the wedding
 * itself, then what follows. The studio's non-wedding shoots sit at the end.
 *
 * The wedding is split by when and where it happens rather than offered as one
 * "Wedding Day", because that is what changes the crew and the lighting plan.
 *
 * OTHER_CEREMONY reveals a free-text field for anything not listed.
 */
export const OTHER_CEREMONY = "Other";

export const ceremonyOptions = [
  "Pre-Wedding Shoot",
  "Roka",
  "Shagan",
  "Tilak Ceremony",
  "Engagement Ceremony",
  "Haldi",
  "Bride & Groom Combined Haldi",
  "Mehendi",
  "Bride & Groom Combined Mehendi",
  "Sangeet Night",
  "Day Wedding",
  "Evening Wedding",
  "Church Wedding",
  "Gurudwara Wedding",
  "Bride Home Welcome",
  "Reception Party",
  "Home Pooja",
  "Maternity Shoot",
  "Baby Shoot",
  "Birthday",
  OTHER_CEREMONY,
] as const;

/**
 * The studio's standard packages, transcribed from the quotation PDFs it sends
 * clients. Page one of each PDF is the package — the ceremonies, the crew on
 * each, what is delivered and what comes free. Custom packages are quoted
 * separately and deliberately are not listed here.
 *
 * `list` is "TOTAL COST OF THIS PACKAGE" and `offer` is "AFTER DISCOUNT YOU GET
 * THIS ONLY IN". Wedding Only is the one fixed price, with no discount shown.
 */
const ALBUM_50 =
  "1 exclusive luxury wedding album, 50 sheets with 300 photos, NTR 200GSM matt or glossy";
const TEASER =
  "1 exclusive cinematic story-telling wedding teaser mixing all your cinematic functions, 4 to 5 minutes UHD";
const FULL_VIDEOS =
  "Complete edited detailed videos for all functions as per shoot";
const REELS = "1 to 2 reel videos, 30 to 59 sec, for social media";
const SOCIAL_PHOTOS =
  "30 to 40 selected edited bridal and couple wedding photos for social media (soft copy)";
const RAW_DRIVE = "Complete raw data on your hard drive";

/** The five complimentary items that come with most packages. */
const GIFTS = [
  "1 small photo frame 8x12",
  "1 big photo frame 12x18",
  "1 mini album",
  "1 pen drive box",
  "1 calendar",
];

const FULL_CREW = [
  "1 Candid Photographer",
  "1 Cinematic Videographer",
  "1 Traditional Photographer",
  "1 Traditional Videographer",
  "1 Light Man",
];

/** The wedding day always adds a drone to the full crew. */
const WEDDING_CREW = [
  "1 Candid Photographer",
  "1 Cinematic Videographer",
  "1 Traditional Photographer",
  "1 Traditional Videographer",
  "1 Drone Videographer",
  "1 Light Man",
];

const TRAD_PAIR = ["1 Traditional Photographer", "1 Traditional Videographer"];

const MIXED = "Mixed with some candid & cinematic shots";

export const packages = [
  {
    key: "weddingOnly",
    code: "Wedding Only",
    name: "The Wedding Day",
    covers: ["Wedding"],
    list: null,
    offer: 80000,
    crew: [
      {
        ceremony: "Wedding Ceremony",
        people: [
          "1 Candid Photographer",
          "1 Traditional Photographer",
          "1 Cinematic Videographer",
          "1 Traditional Videographer",
        ],
      },
    ],
    deliverables: [
      "1 exclusive luxury album, 40 sheets & 250 photos, matt or glossy 200GSM high-quality print",
      "1 exclusive cinematic teaser video, 3 to 4 minutes in UHD",
      "Complete full-length edited detailed videos for all functions as per shoot",
      "1 Instagram reel video, 30 to 59 sec",
      "30 to 40 selected edited photos (soft copy)",
      "Complete raw data via Google Drive link",
    ],
    complimentary: [],
  },
  {
    key: "haldiWedding",
    code: "HW",
    name: "Haldi & Wedding",
    covers: ["Haldi", "Wedding"],
    list: 120000,
    offer: 85000,
    crew: [
      { ceremony: "Haldi Ceremony", people: TRAD_PAIR, note: MIXED },
      { ceremony: "Wedding Ceremony", people: WEDDING_CREW },
    ],
    deliverables: [
      TEASER,
      ALBUM_50,
      FULL_VIDEOS,
      "1 reel video, 30 to 59 sec, for social media",
      SOCIAL_PHOTOS,
      RAW_DRIVE,
    ],
    complimentary: [
      "2 small photo frames 8x12",
      "1 big photo frame 12x18",
      "1 mini album",
      "1 pen drive box",
      "1 calendar",
    ],
  },
  {
    key: "haldiWeddingPremium",
    code: "Premium HW",
    name: "Haldi & Wedding — Premium",
    covers: ["Haldi", "Wedding"],
    list: 155000,
    offer: 99000,
    crew: [
      { ceremony: "Haldi Ceremony", people: FULL_CREW },
      { ceremony: "Wedding Ceremony", people: WEDDING_CREW },
    ],
    deliverables: [TEASER, ALBUM_50, FULL_VIDEOS, REELS, SOCIAL_PHOTOS, RAW_DRIVE],
    complimentary: GIFTS,
  },
  {
    key: "hmwStandard",
    code: "HMW Standard",
    name: "Haldi, Mehndi & Wedding",
    covers: ["Haldi", "Mehndi", "Wedding"],
    list: 120000,
    offer: 99000,
    crew: [
      { ceremony: "Haldi Ceremony", people: TRAD_PAIR },
      { ceremony: "Mehndi Ceremony", people: TRAD_PAIR },
      { ceremony: "Wedding Ceremony", people: WEDDING_CREW },
    ],
    deliverables: [TEASER, ALBUM_50, FULL_VIDEOS, REELS, SOCIAL_PHOTOS, RAW_DRIVE],
    complimentary: GIFTS,
  },
  {
    key: "hmswBasic",
    code: "HMSW Basic",
    name: "Haldi, Mehndi, Sangeet & Wedding",
    covers: ["Haldi", "Mehndi", "Sangeet", "Wedding", "Vidai"],
    list: 159000,
    offer: 110000,
    crew: [
      { ceremony: "Mehndi Ceremony", people: TRAD_PAIR },
      { ceremony: "Sangeet Ceremony", people: TRAD_PAIR },
      { ceremony: "Haldi Ceremony", people: TRAD_PAIR },
      { ceremony: "Wedding Ceremony", people: WEDDING_CREW },
      { ceremony: "Vidai Rasam", people: TRAD_PAIR },
    ],
    deliverables: [TEASER, ALBUM_50, FULL_VIDEOS, REELS, SOCIAL_PHOTOS, RAW_DRIVE],
    complimentary: GIFTS,
  },
  {
    key: "hmwPremium",
    code: "HMW Premium",
    name: "Haldi, Mehndi & Wedding — Premium",
    covers: ["Haldi", "Mehndi", "Wedding", "Vidai"],
    list: 175000,
    offer: 130000,
    crew: [
      { ceremony: "Haldi Ceremony", people: FULL_CREW },
      { ceremony: "Mehndi Ceremony", people: FULL_CREW },
      { ceremony: "Wedding Ceremony", people: WEDDING_CREW },
      { ceremony: "Vidai Rasam", people: TRAD_PAIR },
    ],
    deliverables: [TEASER, ALBUM_50, FULL_VIDEOS, REELS, SOCIAL_PHOTOS, RAW_DRIVE],
    complimentary: GIFTS,
  },
  {
    key: "ehmw",
    code: "EHMW",
    name: "Engagement, Haldi, Mehndi & Wedding",
    covers: ["Engagement", "Haldi", "Mehndi", "Wedding"],
    list: 180000,
    offer: 135000,
    crew: [
      { ceremony: "Engagement Ceremony", people: FULL_CREW },
      { ceremony: "Mehndi Ceremony", people: TRAD_PAIR, note: MIXED },
      { ceremony: "Haldi Ceremony", people: TRAD_PAIR, note: MIXED },
      { ceremony: "Wedding Ceremony", people: WEDDING_CREW },
    ],
    deliverables: [
      TEASER,
      "1 exclusive luxury wedding album, 50 sheets each with 300 photos, NTR 200GSM matt or glossy",
      FULL_VIDEOS,
      REELS,
      SOCIAL_PHOTOS,
      RAW_DRIVE,
    ],
    complimentary: GIFTS,
  },
  {
    key: "hmswPremium",
    code: "HMSW Premium",
    name: "Haldi, Mehndi, Sangeet & Wedding — Premium",
    covers: ["Haldi", "Mehndi", "Sangeet", "Wedding", "Vidai"],
    list: 225000,
    offer: 135000,
    crew: [
      { ceremony: "Mehndi Ceremony", people: FULL_CREW },
      { ceremony: "Haldi Ceremony", people: FULL_CREW },
      { ceremony: "Sangeet Night", people: FULL_CREW },
      { ceremony: "Wedding Ceremony", people: WEDDING_CREW },
      { ceremony: "Vidai Rasam", people: TRAD_PAIR },
    ],
    deliverables: [TEASER, ALBUM_50, FULL_VIDEOS, REELS, SOCIAL_PHOTOS, RAW_DRIVE],
    complimentary: GIFTS,
  },
  {
    key: "ehmwr",
    code: "EHMWR",
    name: "Engagement to Reception",
    covers: ["Engagement", "Haldi", "Mehndi", "Wedding", "Reception"],
    list: 185000,
    offer: 150000,
    crew: [
      { ceremony: "Engagement Ceremony", people: FULL_CREW },
      {
        ceremony: "Haldi & Mehndi",
        people: TRAD_PAIR,
        note: "Mixed with some candid and cinematic shots",
      },
      { ceremony: "Wedding Ceremony", people: WEDDING_CREW },
      { ceremony: "Reception Party", people: FULL_CREW },
    ],
    deliverables: [
      TEASER,
      "1 exclusive wedding album, 50 sheets with 300 photos, NTR 200GSM matt or glossy",
      FULL_VIDEOS,
      SOCIAL_PHOTOS,
      "1 to 2 reel videos for Instagram and social media",
      RAW_DRIVE,
    ],
    complimentary: [
      "2 small photo frames 8x12",
      "1 big photo frame 12x18",
      "1 wedding invitation",
      "1 table calendar",
      "1 pen drive box",
      "1 mini album",
    ],
  },
] as const;

/** Page two of every quotation — identical across all nine. */
export const addOns = [
  { name: "Drone Camera", price: 6000 },
  { name: "LED Wall 10x12", price: 12000 },
  { name: "Crane 32 Feet", price: 8000 },
  { name: "360 Selfie Point", price: 6000 },
  { name: "Live Broadcast", price: 25000 },
  { name: "Live Photo Booth", price: 20000 },
] as const;

/** Bookable by the hour, from the same page. */
export const hourlyServices = [
  { name: "Candid Photography", unit: "2-3 hrs / 4-6 hrs", price: "8,000 / 15,000" },
  { name: "Cinematic Videography", unit: "2-3 hrs / 4-6 hrs", price: "8,000 / 15,000" },
  { name: "Traditional Videography", unit: "2-3 hrs / 4-6 hrs", price: "5,000 / 10,000" },
  { name: "Traditional Photography", unit: "2-3 hrs / 4-6 hrs", price: "5,000 / 10,000" },
  { name: "Extra Album Sheets", unit: "1 sheet, matt or glossy", price: "272 per sheet" },
  { name: "E-invitation Video", unit: "30 sec / 1 min", price: "1,500 / 2,500" },
] as const;

export const packageTerms = [
  "Payment: 30% booking amount, 50% two days before the wedding, 10% on raw data delivery, 10% at final delivery.",
  "Bookings cancelled within 10 days of the date are not refundable.",
  "Vidai coverage runs to 10:00am; beyond that is charged at ₹2,000 per hour.",
  "Drone permissions are the client's to arrange where a drone is booked.",
  "Only the functions you book are covered.",
  "Travel, food and stay are the client's responsibility for functions outside Lucknow.",
];

export const packagesSection = {
  eyebrow: "What It Costs",
  title: "Packages",
  description:
    "The studio's standard packages. Anything else is quoted around your own schedule — tell us the functions and we will build it to fit.",
};

export const booking = {
  eyebrow: "Begin Your Story",
  title: "Let's Capture Something Unforgettable",
  description:
    "Consultations are held by invitation and availability — we accept a limited number of weddings each season to preserve the attention every celebration deserves.",
  cta: "Book Your Date",
};

export const footer = {
  description:
    "Click Weds is a luxury wedding photography and film studio based in Lucknow, documenting Indian celebrations across India and worldwide.",
};
