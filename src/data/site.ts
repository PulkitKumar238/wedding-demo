export const brand = {
  name: "Vivaha Atelier",
  shortName: "Vivaha",
  tagline: "An Atelier for Extraordinary Indian Weddings",
  founded: 2014,
  yearsOfCraft: new Date().getFullYear() - 2014,
  location: "Jaipur, India",
  serviceArea: "Jaipur · Udaipur · Delhi NCR · Goa · Rishikesh",
  email: "hello@vivahaatelier.com",
  phone: "+91 141 402 8871",
  phoneDisplay: "+91 141 402 8871",
  address: "14 Amrapali Marg, C-Scheme, Jaipur, Rajasthan 302001",
  instagram: "@vivahaatelier",
  instagramUrl: "https://instagram.com/vivahaatelier",
  facebookUrl: "https://facebook.com/vivahaatelier",
};

/**
 * Enquiries are handed to WhatsApp as a pre-drafted message, so the couple
 * only has to press send.
 *
 * PLACEHOLDER — replace `number` with the studio's real WhatsApp business
 * number before this goes live. Digits only: country code first, no leading
 * "+", no spaces or dashes. e.g. "919876543210" for +91 98765 43210.
 */
export const whatsapp = {
  number: "910000000000",
  display: "+91 00000 00000",
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
  eyebrow: "Jaipur · Udaipur · Delhi NCR · Goa",
  heading: ["Every Love Story", "Deserves a", "Masterpiece"],
  subtitle:
    "Vivaha Atelier designs once-in-a-lifetime weddings across India — from the first roka to the final vidai, every ritual composed like a work of art.",
  cta: "Book a Consultation",
  scrollLabel: "Scroll to begin",
};

export const brandStory = {
  eyebrow: "Our Philosophy",
  title: "Where Rituals Become Memories",
  paragraphs: [
    "Vivaha Atelier began with a simple conviction: an Indian wedding is not a schedule to be managed, but a story told across many days — ritual by ritual, colour by colour, family by family.",
    "For more than a decade, our atelier has designed celebrations in Jaipur, Udaipur, Delhi, Goa, and the palaces and havelis in between — for families who want their wedding to feel inevitable, as though it could belong to no one else.",
    "We are not vendors. We are the quiet hand behind the scenes, translating two families' histories into marigold, mirrorwork, and lamplight. Every Vivaha wedding begins the same way: with listening.",
  ],
  closingLine:
    "Restraint, to us, is the truest form of luxury. A single strand of jasmine says more than a hundred arranged for effect.",
  signature: "Ananya Rathore, Founder & Creative Director",
};

export const experiences = [
  {
    key: "rokaSagai",
    title: "Roka & Sagai",
    description:
      "The first promise between two families, staged with the intimacy it deserves — an engagement that sets the tone for everything after.",
  },
  {
    key: "mehendi",
    title: "Mehendi Ceremony",
    description:
      "Courtyards of marigold and mirrorwork, live dholak, and artists brought in from Rajasthan to write the bride's henna by hand.",
  },
  {
    key: "haldi",
    title: "Haldi Ceremony",
    description:
      "Turmeric, sunlight, and unrestrained joy — the most photographed morning of the wedding, designed in every shade of yellow.",
  },
  {
    key: "sangeet",
    title: "Sangeet Night",
    description:
      "Choreography, staging, and sound built around two families who have been rehearsing for months — production without the chaos.",
  },
  {
    key: "baraatVarmala",
    title: "Baraat & Varmala",
    description:
      "The groom's procession and the exchange of garlands, choreographed so the moment lands exactly as loudly as it should.",
  },
  {
    key: "mandapPheras",
    title: "Mandap & Pheras",
    description:
      "The mandap is the heart of the day. We design it as architecture — florals, drape, and fire, composed to be looked at for hours.",
  },
  {
    key: "reception",
    title: "Reception & Cocktails",
    description:
      "Tablescapes, lighting, and atmosphere designed to turn a banquet hall or a palace lawn into a world entirely of its own.",
  },
  {
    key: "bridalStyling",
    title: "Bridal Styling & Trousseau",
    description:
      "Lehenga, jewellery, and presence — considered as a single composition, from the first fitting to the final vidai.",
  },
] as const;

export const featuredWeddings = [
  { key: "venueWalk", couple: "Ayush & Ruchika", location: "Jaipur, Rajasthan", size: "large" },
  { key: "couplePortrait", couple: "Nishant & Jenny", location: "The Leela, Udaipur", size: "tall" },
  { key: "ringDetail", couple: "Shubham & Disha", location: "Lucknow, Uttar Pradesh", size: "small" },
  { key: "mehendiHands", couple: "Pranay & Sanskriti", location: "Jodhpur, Rajasthan", size: "small" },
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
    key: "planning",
    number: "02",
    title: "Planning",
    description:
      "Budget, logistics, and vendor curation, structured into a plan built entirely around your story.",
  },
  {
    key: "design",
    number: "03",
    title: "Design",
    description:
      "Mood boards, sketches, and material samples — every detail considered before a single flower is ordered.",
  },
  {
    key: "execution",
    number: "04",
    title: "Execution",
    description:
      "Our production team arrives days before your celebration, building the world we designed together.",
  },
  {
    key: "celebration",
    number: "05",
    title: "Celebration",
    description:
      "We disappear into the background so you can be fully present in the one day built entirely around you.",
  },
] as const;

export const stats = [
  { value: 480, suffix: "+", label: "Weddings Designed" },
  { value: 11, suffix: "", label: "Years of Craft" },
  { value: 98, suffix: "%", label: "Client Referral Rate" },
  { value: 24, suffix: "/7", label: "Concierge Support" },
] as const;

export const whyChooseUs = {
  eyebrow: "Why Couples Choose Us",
  title: "Craft, Discretion, and an Obsession with Detail",
  description:
    "Every Vivaha wedding is led by a senior designer from the first call to the final vidai — never handed off, never templated. It is a level of care that has made us the atelier of choice for families seeking something quietly extraordinary.",
  points: [
    {
      title: "Senior-Led, Always",
      description: "You work directly with a lead designer throughout — never a rotating team of coordinators.",
    },
    {
      title: "Uncompromising Sourcing",
      description: "Rare blooms, heirloom textiles, and karigars sourced from across India for every celebration.",
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
    location: "Jaipur — four ceremonies over three days",
    quote:
      "Vivaha didn't just plan our wedding — they understood it before we did. Both families felt looked after, which is the hardest part of an Indian wedding to get right.",
  },
  {
    key: "nishantJenny",
    names: "Nishant & Jenny",
    location: "Udaipur — a Punjabi and Christian ceremony, side by side",
    quote:
      "Ours was two very different traditions in one weekend. They wove both together with more grace than we imagined possible, and never once made either side feel like a guest.",
  },
  {
    key: "shubhamDisha",
    names: "Shubham & Disha",
    location: "Lucknow — mehendi, haldi, and a winter wedding",
    quote:
      "From the first call, it was clear this was a team obsessed with craft, not checklists. Our haldi looked like something out of a film, and it was still finished by lunch.",
  },
  {
    key: "pranaySanskriti",
    names: "Pranay & Sanskriti",
    location: "Jodhpur — a fort wedding for two hundred guests",
    quote:
      "We met six planners. Vivaha was the only one who asked about our families before asking about our budget. The mandap alone was worth every rupee.",
  },
  {
    key: "shivenduVandna",
    names: "Shivendu & Vandna",
    location: "Rishikesh — a riverside wedding at sunrise",
    quote:
      "Impeccable, calm, and endlessly creative. My mother worried about every ritual being done properly, and by the sangeet she had stopped worrying entirely.",
  },
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
    "Vivaha Atelier is a luxury wedding design house based in Jaipur, crafting extraordinary Indian celebrations across Rajasthan and beyond.",
};
