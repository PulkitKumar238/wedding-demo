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

export const nav = [
  { label: "Our Story", href: "#story" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Process", href: "#process" },
  { label: "Stories", href: "#stories" },
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
 * One slide per wedding the studio has shot, in deliberately mixed order
 * rather than the order the folders happen to sit in.
 *
 * `key` matches the studio's own shoot folder, so every slide stays traceable
 * to its archive even where the couple's name has since been corrected.
 *
 * Most names here are now the real ones, taken from the studio's client
 * folders. The seven still carrying an invented partner are vandnaPandey,
 * yashShrivastava, gurpreetKaur, shubhamMishra, pranayPragati, rupali and
 * shivenduPandey — three client folders (Asavari & Swapnil, Nida & Mohamed,
 * Shivansh & Keerthi) are unmatched and belong to three of them.
 */
export const stories = [
  { key: "vandnaPandey", couple: "Karan & Vandna", location: "Lucknow, Uttar Pradesh" },
  { key: "ayushRuchika", couple: "Ayush & Janhvi", location: "Lucknow, Uttar Pradesh" },
  { key: "shubhangi", couple: "Shobhit & Shubhangi", location: "Varanasi, Uttar Pradesh" },
  { key: "ashutoshGupta", couple: "Ashutosh & Twinkle", location: "Lucknow, Uttar Pradesh" },
  { key: "kartik", couple: "Kartik & Nishi", location: "Delhi NCR" },
  { key: "dishaMishra", couple: "Abhinav & Disha", location: "Lucknow, Uttar Pradesh" },
  { key: "sanskriti", couple: "Aman & Shivangi", location: "Kanpur, Uttar Pradesh" },
  { key: "nishantJenny", couple: "Nishant & Jenny", location: "Varanasi, Uttar Pradesh" },
  { key: "yashShrivastava", couple: "Yash & Ishita", location: "Lucknow, Uttar Pradesh" },
  { key: "gurpreetKaur", couple: "Jaspreet & Gurpreet", location: "Chandigarh, Punjab" },
  { key: "dhriti", couple: "Puneet & Dhiti", location: "Kanpur, Uttar Pradesh" },
  { key: "shubhamMishra", couple: "Shubham & Priya", location: "Agra, Uttar Pradesh" },
  { key: "pranayPragati", couple: "Pranay & Pragati", location: "Lucknow, Uttar Pradesh" },
  { key: "rupali", couple: "Varun & Rupali", location: "Manali, Himachal Pradesh" },
  { key: "sandeep", couple: "Brandon & Vasundhara", location: "Lucknow, Uttar Pradesh" },
  { key: "shivenduPandey", couple: "Shivendu & Aarti", location: "Rishikesh, Uttarakhand" },
] as const;

export const storiesSection = {
  eyebrow: "Their Stories",
  title: "Every Wedding We've Told",
  description:
    "Sixteen families, sixteen entirely different days. Swipe through a few of them.",
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

/**
 * One testimonial per story, sharing its key, its couple and its photograph —
 * so the avatar beside a quote is the same wedding shown in the slider.
 *
 * Placeholder copy: every quote below was written for the demo and must be
 * replaced with genuine reviews before launch.
 */
export const testimonials = [
  { key: "vandnaPandey", quote: "Click Weds didn't just photograph our wedding — they understood it before we did. Both families felt looked after, which is the hardest part of an Indian wedding to get right." },
  { key: "rupali", quote: "We dragged them up a mountain in the middle of winter and not one of them complained. The snow frames are the ones both our families ask for." },
  { key: "ayushRuchika", quote: "The varmala happened in about ninety seconds and they caught all of it. We have watched that sequence more times than we would like to admit." },
  { key: "shubhangi", quote: "My bridal portraits are the only photographs of myself I have ever actually liked. I still have no idea how they managed that in twenty minutes." },
  { key: "ashutoshGupta", quote: "From the first call it was clear this was a team obsessed with craft, not checklists. Nothing about the day felt staged for a camera." },
  { key: "kartik", quote: "We are both stiff in front of a lens. They spent the pre-wedding shoot just talking to us, and by the wedding we had stopped performing entirely." },
  { key: "dishaMishra", quote: "Half our wedding happened after dark and I was sure the photographs would suffer. They are somehow the best ones in the whole gallery." },
  { key: "sanskriti", quote: "There were forty cousins in that haldi and they got every single one. My grandmother has printed three of those frames already." },
  { key: "nishantJenny", quote: "Ours was two very different traditions in one weekend. They covered both with the same care, and never once made either side feel like the smaller event." },
  { key: "yashShrivastava", quote: "The teaser reached us before our guests had even flown home. We must have watched it thirty times that first night." },
  { key: "gurpreetKaur", quote: "They read the room all day. Quiet through the Anand Karaj, everywhere at once once the dancing started. That judgement is the whole job." },
  { key: "dhriti", quote: "Impeccable, calm, and endlessly creative. My mother worried they would be underfoot during the rituals, and by the sangeet she had stopped noticing them entirely." },
  { key: "shubhamMishra", quote: "We met six photographers. Click Weds was the only one who asked about our families before asking about our budget. The album alone was worth every rupee." },
  { key: "pranayPragati", quote: "Four weeks after the wedding, exactly as promised, the full gallery and the film arrived. No chasing, no excuses. Rarer than it should be." },
  { key: "sandeep", quote: "Booked them for an engagement, went back for the wedding, and will send them every cousin I have. Straightforward people who deliver what they promise." },
  { key: "shivenduPandey", quote: "They were the calmest people at that wedding. When the schedule fell apart in the afternoon, they simply kept shooting and we never felt it." },
] as const;

/**
 * Ceremonies a couple can attach a date to in the enquiry form. Kept to the
 * events most couples actually book coverage for — Roka and Tilak sit under
 * one option, and the baraat and pheras under "Wedding Day", so the dropdown
 * stays short enough to scan.
 *
 * OTHER_CEREMONY reveals a free-text field for anything not listed.
 */
export const OTHER_CEREMONY = "Other";

export const ceremonyOptions = [
  "Pre-Wedding Shoot",
  "Roka / Engagement",
  "Mehendi",
  "Haldi",
  "Sangeet",
  "Wedding Day",
  "Reception",
  OTHER_CEREMONY,
] as const;

export const booking = {
  eyebrow: "Begin Your Story",
  title: "Let's Capture Something Unforgettable",
  description:
    "Consultations are held by invitation and availability — we accept a limited number of weddings each season to preserve the attention every celebration deserves.",
  cta: "Book a Consultation",
};

export const footer = {
  description:
    "Click Weds is a luxury wedding photography and film studio based in Lucknow, documenting Indian celebrations across India and worldwide.",
};
