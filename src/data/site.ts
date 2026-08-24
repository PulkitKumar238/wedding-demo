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

export const nav = [
  { label: "Our Story", href: "#story" },
  { label: "Experiences", href: "#experiences" },
  { label: "Weddings", href: "#weddings" },
  { label: "Process", href: "#process" },
  { label: "Journal", href: "#journal" },
  { label: "Contact", href: "#booking" },
];

export const hero = {
  eyebrow: "Lucknow · across India · worldwide",
  heading: ["Every Love Story", "Deserves a", "Masterpiece"],
  subtitle:
    "Click Weds photographs once-in-a-lifetime weddings across India — from the first roka to the final vidai, every ritual remembered exactly as it felt.",
  cta: "Book a Consultation",
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
 * Every tile here is backed by a photograph of that exact thing in
 * `public/photos`. Ceremonies the studio has not photographed yet — sangeet,
 * pheras, baraat, reception — are deliberately absent rather than illustrated
 * with a near-miss from another ceremony.
 */
export const experiences = [
  {
    key: "rokaSagai",
    title: "Roka & Sagai",
    description:
      "The first promise between two families, photographed with the intimacy it deserves — where the story properly begins.",
  },
  {
    key: "preWeddingShoot",
    title: "Pre-Wedding Shoot",
    description:
      "An unhurried day somewhere that already means something to you, long before guest lists and timings take over.",
  },
  {
    key: "mehendi",
    title: "Mehendi",
    description:
      "Courtyards of marigold and mirrorwork, live dholak, and the slow hours of henna written onto the bride's hands.",
  },
  {
    key: "haldi",
    title: "Haldi",
    description:
      "Turmeric, sunlight, and unrestrained joy — the loudest morning of the wedding, in every shade of yellow.",
  },
  {
    key: "varmala",
    title: "Varmala",
    description:
      "The exchange of garlands, framed and lit so the moment lands exactly as loudly as it should.",
  },
  {
    key: "weddingDay",
    title: "The Wedding Day",
    description:
      "Every hour of the day itself, held together — the rituals, the families, the light — so you are never managing anything.",
  },
  {
    key: "bridalPortraits",
    title: "Bridal Portraits",
    description:
      "Lehenga, jewellery, and presence, composed as one portrait in the quiet hour before the day begins.",
  },
  {
    key: "couplePortraits",
    title: "Couple Portraits",
    description:
      "The two of you, away from the crowd for twenty minutes — usually the frames that end up on the wall.",
  },
] as const;

export const featuredWeddings = [
  { key: "venueWalk", couple: "Ayush & Ruchika", location: "Lucknow, Uttar Pradesh", size: "large" },
  { key: "couplePortrait", couple: "Nishant & Jenny", location: "Varanasi, Uttar Pradesh", size: "tall" },
  { key: "ringDetail", couple: "Shubham & Disha", location: "Lucknow, Uttar Pradesh", size: "small" },
  { key: "familyBlessing", couple: "Pranay & Sanskriti", location: "Kanpur, Uttar Pradesh", size: "small" },
  { key: "coupleInYellow", couple: "Shivendu & Vandna", location: "Rishikesh, Uttarakhand", size: "tall" },
  { key: "cafeMoment", couple: "Yash & Shubhangi", location: "Goa", size: "small" },
  { key: "floralEmbrace", couple: "Ashutosh & Gurpreet", location: "Chandigarh, Punjab", size: "small" },
  { key: "marigoldBackdrop", couple: "Kartik & Rupali", location: "Delhi NCR", size: "large" },
] as const;

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
      "Your gallery and film in about four weeks, and a printed album built to be handed to people, not scrolled.",
  },
] as const;

/**
 * Grounded in the studio's public listings: roughly three years in business,
 * recommended by 100% of couples on WeddingWire, ~4 week delivery. The
 * wedding count is the one figure still to be confirmed by the studio.
 */
export const stats = [
  { value: 120, suffix: "+", label: "Weddings Photographed" },
  { value: 3, suffix: "+", label: "Years Behind the Lens" },
  { value: 100, suffix: "%", label: "Couples Recommend Us" },
  { value: 4, suffix: " wks", label: "Album Delivery" },
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

export const testimonials = [
  {
    key: "ayushRuchika",
    names: "Ayush & Ruchika",
    location: "Lucknow — four ceremonies over three days",
    quote:
      "Click Weds didn't just photograph our wedding — they understood it before we did. Both families felt looked after, which is the hardest part of an Indian wedding to get right.",
  },
  {
    key: "nishantJenny",
    names: "Nishant & Jenny",
    location: "Varanasi — a Punjabi and Christian ceremony, side by side",
    quote:
      "Ours was two very different traditions in one weekend. They covered both with the same care, and never once made either side feel like the smaller event.",
  },
  {
    key: "shubhamDisha",
    names: "Shubham & Disha",
    location: "Lucknow — mehendi, haldi, and a winter wedding",
    quote:
      "From the first call it was clear this was a team obsessed with craft, not checklists. Our haldi photographs look like stills from a film.",
  },
  {
    key: "pranaySanskriti",
    names: "Pranay & Sanskriti",
    location: "Kanpur — three days, two hundred guests",
    quote:
      "We met six photographers. Click Weds was the only one who asked about our families before asking about our budget. The album alone was worth every rupee.",
  },
  {
    key: "shivenduVandna",
    names: "Shivendu & Vandna",
    location: "Rishikesh — a riverside wedding at sunrise",
    quote:
      "Impeccable, calm, and endlessly creative. My mother worried they would be underfoot during the rituals, and by the sangeet she had stopped noticing them entirely.",
  },
] as const;

/**
 * Ceremonies a couple can attach a date to in the enquiry form. A wedding is
 * several events across several days, so the form lets them add one row per
 * ceremony rather than asking for a single "wedding date".
 *
 * OTHER_CEREMONY reveals a free-text field for anything not listed.
 */
export const OTHER_CEREMONY = "Other";

export const ceremonyOptions = [
  "Roka / Sagai",
  "Engagement",
  "Tilak",
  "Pre-Wedding Shoot",
  "Mehendi",
  "Haldi",
  "Sangeet",
  "Cocktail Night",
  "Baraat",
  "Wedding (Pheras)",
  "Reception",
  OTHER_CEREMONY,
] as const;

export const booking = {
  eyebrow: "Begin Your Story",
  title: "Let's Design Something Unforgettable",
  description:
    "Consultations are held by invitation and availability — we accept a limited number of weddings each season to preserve the attention every celebration deserves.",
  cta: "Book a Consultation",
};

export const footer = {
  description:
    "Click Weds is a luxury wedding photography and film studio based in Lucknow, documenting Indian celebrations across India and worldwide.",
};
