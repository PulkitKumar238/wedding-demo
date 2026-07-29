export const brand = {
  name: "Maison Amoret",
  shortName: "Amoret",
  tagline: "An Atelier for Extraordinary Weddings",
  founded: 2014,
  yearsOfCraft: new Date().getFullYear() - 2014,
  location: "Florence, Italy",
  serviceArea: "Tuscany · the Amalfi Coast · Lake Como · the Mediterranean",
  email: "hello@maisonamoret.com",
  phone: "+39 055 289 4471",
  phoneDisplay: "+39 055 289 4471",
  address: "Via de' Tornabuoni 12, Florence, 50123, Italy",
  instagram: "@maisonamoret",
  instagramUrl: "https://instagram.com/maisonamoret",
  facebookUrl: "https://facebook.com/maisonamoret",
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
  eyebrow: "Florence · Amalfi Coast · Lake Como",
  heading: ["Every Love Story", "Deserves a", "Masterpiece"],
  subtitle:
    "Maison Amoret designs once-in-a-lifetime weddings across Italy and the Mediterranean — where every detail is composed like a work of art.",
  cta: "Book a Consultation",
  scrollLabel: "Scroll to begin",
};

export const brandStory = {
  eyebrow: "Our Philosophy",
  title: "Where Dreams Become Celebrations",
  paragraphs: [
    "Maison Amoret began with a simple conviction: a wedding is not an event to be managed, but a story to be composed — frame by frame, bloom by bloom, hour by hour.",
    "For more than a decade, our atelier has designed weddings across Florence, the Amalfi Coast, Lake Como, and the Mediterranean's most storied addresses — for couples who want their celebration to feel inevitable, as though it could belong to no one else.",
    "We are not vendors. We are the quiet hand behind the scenes, translating a couple's history into candlelight, linen, and architecture. Every Maison Amoret wedding begins the same way: with listening.",
  ],
  closingLine:
    "Restraint, to us, is the truest form of luxury. A single perfect bloom says more than a hundred arranged for effect.",
  signature: "Isabella Conti, Founder & Creative Director",
};

export const experiences = [
  {
    key: "luxuryWeddings",
    title: "Luxury Weddings",
    description:
      "Full-scale design and production for couples who want every hour of their celebration considered, from the first toast to the last dance.",
  },
  {
    key: "destinationWeddings",
    title: "Destination Weddings",
    description:
      "Intimate elopements to five-day celebrations, staged across Italy, Greece, and the French Riviera.",
  },
  {
    key: "floralDecoration",
    title: "Floral Decoration",
    description:
      "Sculptural, seasonal, and never generic — florals composed like still-life paintings, never arrangements.",
  },
  {
    key: "receptionStyling",
    title: "Reception Styling",
    description:
      "Tablescapes, lighting, and atmosphere designed to transform any room into a world entirely of its own.",
  },
  {
    key: "mehendiSangeet",
    title: "Mehendi & Sangeet",
    description:
      "Vibrant, joy-filled celebrations styled with the same precision and restraint as our white-wedding work.",
  },
  {
    key: "engagement",
    title: "Engagement",
    description:
      "Understated, cinematic proposals and engagement celebrations, designed to mark where the story begins.",
  },
  {
    key: "corporateEvents",
    title: "Corporate Events",
    description:
      "Brand launches, galas, and private events, staged with the same rigor and discretion as our weddings.",
  },
  {
    key: "bridalStyling",
    title: "Bridal Styling & Design",
    description:
      "Gown, veil, and presence — considered as a single composition, from first fitting to final walk.",
  },
] as const;

export const featuredWeddings = [
  { key: "palmEvening", couple: "Amara & Oliver", location: "Florence, Italy", size: "large" },
  { key: "lakeChairs", couple: "Elena & Luca", location: "Lake Como, Italy", size: "tall" },
  { key: "confettiKiss", couple: "Sofia & Andrea", location: "Villa Cetinale, Tuscany", size: "small" },
  { key: "lakeBouquet", couple: "Camille & Nicolas", location: "Lake Como, Italy", size: "small" },
  { key: "blackSandBeach", couple: "Freya & Oskar", location: "Reynisfjara, Iceland", size: "tall" },
  { key: "mandap", couple: "Priya & Rohan", location: "Jaipur, India", size: "small" },
  { key: "bouquetDetail", couple: "Grace & William", location: "Santorini, Greece", size: "small" },
  { key: "receptionToast", couple: "Anaïs & Julien", location: "Provence, France", size: "large" },
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
    "Every Maison Amoret wedding is led by a senior designer from first call to final farewell — never handed off, never templated. It is a level of care that has made us the atelier of choice for couples seeking something quietly extraordinary.",
  points: [
    {
      title: "Senior-Led, Always",
      description: "You work directly with a lead designer throughout — never a rotating team of coordinators.",
    },
    {
      title: "Uncompromising Sourcing",
      description: "Rare blooms, heirloom linens, and artisans sourced from across Europe for every celebration.",
    },
    {
      title: "One Wedding at a Time",
      description: "We limit our calendar deliberately, so every celebration receives our undivided attention.",
    },
  ],
};

export const testimonials = [
  {
    key: "isabellaMarco",
    names: "Isabella & Marco",
    location: "Milan, Italy — married at Villa Cimbrone, Amalfi Coast",
    quote:
      "Maison Amoret didn't just plan our wedding — they understood it before we did. Every detail felt like it had always belonged to us.",
  },
  {
    key: "charlotte",
    names: "Charlotte Whitfield",
    location: "London, UK — married in Florence",
    quote:
      "From the first call, it was clear this was a team obsessed with craft, not checklists. Our wedding felt like walking into a film.",
  },
  {
    key: "sophiaJames",
    names: "Sophia & James",
    location: "New York, USA — Lake Como wedding",
    quote:
      "We interviewed six planners. Maison Amoret was the only one who asked about us before asking about our Pinterest board.",
  },
  {
    key: "thomas",
    names: "Thomas Reinhardt",
    location: "Geneva, Switzerland — private estate wedding, Provence",
    quote:
      "Impeccable, discreet, and endlessly creative. I would trust this team with anything, and have, twice over.",
  },
  {
    key: "daniel",
    names: "Daniel & Priya Mehta",
    location: "Dubai, UAE — Sangeet & wedding, Tuscany",
    quote:
      "Our families come from two very different traditions. Maison Amoret wove both together with more grace than we imagined possible.",
  },
] as const;

export const booking = {
  eyebrow: "Begin Your Story",
  title: "Let's Design Something Unforgettable",
  description:
    "Consultations are held by invitation and availability — we accept a limited number of celebrations each year to preserve the attention every wedding deserves.",
  cta: "Book a Consultation",
};

export const footer = {
  description:
    "Maison Amoret is a luxury wedding design atelier based in Florence, crafting extraordinary celebrations across Italy and the Mediterranean.",
};
