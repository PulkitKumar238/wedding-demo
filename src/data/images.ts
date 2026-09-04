/**
 * Every image is a real photograph from the studio's own archive, served from
 * `public/photos`. Sources are grouped by ceremony so a photo can be swapped
 * without hunting through the sections that reference it.
 */

const engagement = {
  venueWalk: "/photos/engagement/NIK07440.jpg",
  couplePortrait: "/photos/engagement/PR005699.jpg",
  ringExchange: "/photos/engagement/PR006296.jpg",
  ringDetail: "/photos/engagement/PR006299.jpg",
} as const;

const haldi = {
  marigoldBackdrop: "/photos/haldi/DSC00721.jpg",
  coupleInYellow: "/photos/haldi/NIK03299.jpg",
  familyBlessing: "/photos/haldi/NIK04629.jpg",
  petalShower: "/photos/haldi/PR004960.jpg",
} as const;

const preWedding = {
  cafeMoment: "/photos/pre-wedding/NIK03197.jpg",
} as const;

const weddingDay = {
  floralEmbrace: "/photos/wedding-day/NIK00396.jpg",
  bridePampas: "/photos/wedding-day/NIK00427.jpg",
  varmala: "/photos/wedding-day/NIK06063.jpg",
  bridalVeil: "/photos/wedding-day/NIK09579.jpg",
  vidaiWalk: "/photos/wedding-day/PR001542.jpg",
  floralArch: "/photos/wedding-day/PR001775.jpg",
} as const;

/**
 * The studio wordmark, in the two forms the site needs. `logo` is the full
 * lockup — mark above the name — and `mark` is the brushed CW on its own, for
 * the places too small to set the name legibly beside it. The `-light` files
 * are the ivory cut, for anything sitting on charcoal or over photography.
 */
const logo = {
  full: "/brand/clickweds-logo.png",
  fullLight: "/brand/clickweds-logo-light.png",
  mark: "/brand/clickweds-mark.png",
  markLight: "/brand/clickweds-mark-light.png",
} as const;

/**
 * The studio's portfolio strip. Each frame ships twice, because the rail and
 * the lightbox want different things from it.
 *
 * `tile` is pre-cropped to the rail's 3:4 and sized for it. That crop is not
 * cosmetic: `object-cover` scales a landscape frame to twice the tile's width
 * before trimming the sides, so an uncropped landscape was being fetched at
 * tile width and stretched 2x — soft, while the portraits beside it were
 * sharp. Cropping first makes every file match the box it lands in.
 *
 * `full` keeps the original aspect ratio for the lightbox, which is the only
 * place a frame is shown whole.
 */
const portfolio = [
  { tile: "/photos/portfolio/tiles/1h0a0549.jpg", full: "/photos/portfolio/1h0a0549.jpg" },
  { tile: "/photos/portfolio/tiles/1h0a4685.jpg", full: "/photos/portfolio/1h0a4685.jpg" },
  { tile: "/photos/portfolio/tiles/1h0a6723.jpg", full: "/photos/portfolio/1h0a6723.jpg" },
  { tile: "/photos/portfolio/tiles/ali06240.jpg", full: "/photos/portfolio/ali06240.jpg" },
  { tile: "/photos/portfolio/tiles/avi03102.jpg", full: "/photos/portfolio/avi03102.jpg" },
  { tile: "/photos/portfolio/tiles/dsc-1728.jpg", full: "/photos/portfolio/dsc-1728.jpg" },
  { tile: "/photos/portfolio/tiles/dsc-2793.jpg", full: "/photos/portfolio/dsc-2793.jpg" },
  { tile: "/photos/portfolio/tiles/dsc-7059.jpg", full: "/photos/portfolio/dsc-7059.jpg" },
  { tile: "/photos/portfolio/tiles/dsc00376.jpg", full: "/photos/portfolio/dsc00376.jpg" },
  { tile: "/photos/portfolio/tiles/dsc00657.jpg", full: "/photos/portfolio/dsc00657.jpg" },
  { tile: "/photos/portfolio/tiles/dsc00687.jpg", full: "/photos/portfolio/dsc00687.jpg" },
  { tile: "/photos/portfolio/tiles/dsc00950.jpg", full: "/photos/portfolio/dsc00950.jpg" },
  { tile: "/photos/portfolio/tiles/dsc00983.jpg", full: "/photos/portfolio/dsc00983.jpg" },
  { tile: "/photos/portfolio/tiles/dsc01012.jpg", full: "/photos/portfolio/dsc01012.jpg" },
  { tile: "/photos/portfolio/tiles/dsc01096.jpg", full: "/photos/portfolio/dsc01096.jpg" },
  { tile: "/photos/portfolio/tiles/dsc01441.jpg", full: "/photos/portfolio/dsc01441.jpg" },
  { tile: "/photos/portfolio/tiles/dsc01477.jpg", full: "/photos/portfolio/dsc01477.jpg" },
  { tile: "/photos/portfolio/tiles/dsc01684.jpg", full: "/photos/portfolio/dsc01684.jpg" },
  { tile: "/photos/portfolio/tiles/dsc02259.jpg", full: "/photos/portfolio/dsc02259.jpg" },
  { tile: "/photos/portfolio/tiles/dsc02832.jpg", full: "/photos/portfolio/dsc02832.jpg" },
  { tile: "/photos/portfolio/tiles/dsc04470.jpg", full: "/photos/portfolio/dsc04470.jpg" },
  { tile: "/photos/portfolio/tiles/dsc04942-2.jpg", full: "/photos/portfolio/dsc04942-2.jpg" },
  { tile: "/photos/portfolio/tiles/dsc07424.jpg", full: "/photos/portfolio/dsc07424.jpg" },
  { tile: "/photos/portfolio/tiles/dsc07591.jpg", full: "/photos/portfolio/dsc07591.jpg" },
  { tile: "/photos/portfolio/tiles/nik00206.jpg", full: "/photos/portfolio/nik00206.jpg" },
  { tile: "/photos/portfolio/tiles/nik00209.jpg", full: "/photos/portfolio/nik00209.jpg" },
  { tile: "/photos/portfolio/tiles/nik00495-2.jpg", full: "/photos/portfolio/nik00495-2.jpg" },
  { tile: "/photos/portfolio/tiles/nik00692.jpg", full: "/photos/portfolio/nik00692.jpg" },
  { tile: "/photos/portfolio/tiles/nik01037.jpg", full: "/photos/portfolio/nik01037.jpg" },
  { tile: "/photos/portfolio/tiles/nik01420.jpg", full: "/photos/portfolio/nik01420.jpg" },
  { tile: "/photos/portfolio/tiles/nik01496.jpg", full: "/photos/portfolio/nik01496.jpg" },
  { tile: "/photos/portfolio/tiles/nik01506.jpg", full: "/photos/portfolio/nik01506.jpg" },
  { tile: "/photos/portfolio/tiles/nik02251.jpg", full: "/photos/portfolio/nik02251.jpg" },
  { tile: "/photos/portfolio/tiles/nik02301.jpg", full: "/photos/portfolio/nik02301.jpg" },
  { tile: "/photos/portfolio/tiles/nik02714.jpg", full: "/photos/portfolio/nik02714.jpg" },
  { tile: "/photos/portfolio/tiles/nik02832.jpg", full: "/photos/portfolio/nik02832.jpg" },
  { tile: "/photos/portfolio/tiles/nik02864.jpg", full: "/photos/portfolio/nik02864.jpg" },
  { tile: "/photos/portfolio/tiles/nik03577.jpg", full: "/photos/portfolio/nik03577.jpg" },
  { tile: "/photos/portfolio/tiles/nik03771.jpg", full: "/photos/portfolio/nik03771.jpg" },
  { tile: "/photos/portfolio/tiles/nik03810.jpg", full: "/photos/portfolio/nik03810.jpg" },
  { tile: "/photos/portfolio/tiles/nik03877.jpg", full: "/photos/portfolio/nik03877.jpg" },
  { tile: "/photos/portfolio/tiles/nik03901.jpg", full: "/photos/portfolio/nik03901.jpg" },
  { tile: "/photos/portfolio/tiles/nik04689.jpg", full: "/photos/portfolio/nik04689.jpg" },
  { tile: "/photos/portfolio/tiles/nik04806.jpg", full: "/photos/portfolio/nik04806.jpg" },
  { tile: "/photos/portfolio/tiles/nik04984.jpg", full: "/photos/portfolio/nik04984.jpg" },
  { tile: "/photos/portfolio/tiles/nik05000.jpg", full: "/photos/portfolio/nik05000.jpg" },
  { tile: "/photos/portfolio/tiles/nik05633.jpg", full: "/photos/portfolio/nik05633.jpg" },
  { tile: "/photos/portfolio/tiles/nik05747.jpg", full: "/photos/portfolio/nik05747.jpg" },
  { tile: "/photos/portfolio/tiles/nik06044.jpg", full: "/photos/portfolio/nik06044.jpg" },
  { tile: "/photos/portfolio/tiles/nik06156.jpg", full: "/photos/portfolio/nik06156.jpg" },
  { tile: "/photos/portfolio/tiles/nik06319.jpg", full: "/photos/portfolio/nik06319.jpg" },
  { tile: "/photos/portfolio/tiles/nik06436.jpg", full: "/photos/portfolio/nik06436.jpg" },
  { tile: "/photos/portfolio/tiles/nik07569.jpg", full: "/photos/portfolio/nik07569.jpg" },
  { tile: "/photos/portfolio/tiles/nik07668.jpg", full: "/photos/portfolio/nik07668.jpg" },
  { tile: "/photos/portfolio/tiles/nik08317.jpg", full: "/photos/portfolio/nik08317.jpg" },
  { tile: "/photos/portfolio/tiles/nik08939.jpg", full: "/photos/portfolio/nik08939.jpg" },
  { tile: "/photos/portfolio/tiles/nik09282.jpg", full: "/photos/portfolio/nik09282.jpg" },
  { tile: "/photos/portfolio/tiles/pr-05916.jpg", full: "/photos/portfolio/pr-05916.jpg" },
  { tile: "/photos/portfolio/tiles/pr-06245.jpg", full: "/photos/portfolio/pr-06245.jpg" },
  { tile: "/photos/portfolio/tiles/pr-07700.jpg", full: "/photos/portfolio/pr-07700.jpg" },
  { tile: "/photos/portfolio/tiles/pr-07788.jpg", full: "/photos/portfolio/pr-07788.jpg" },
  { tile: "/photos/portfolio/tiles/pr-08058.jpg", full: "/photos/portfolio/pr-08058.jpg" },
  { tile: "/photos/portfolio/tiles/pr-08619.jpg", full: "/photos/portfolio/pr-08619.jpg" },
  { tile: "/photos/portfolio/tiles/pr001113.jpg", full: "/photos/portfolio/pr001113.jpg" },
  { tile: "/photos/portfolio/tiles/pr001783.jpg", full: "/photos/portfolio/pr001783.jpg" },
  { tile: "/photos/portfolio/tiles/pr001974.jpg", full: "/photos/portfolio/pr001974.jpg" },
  { tile: "/photos/portfolio/tiles/pr002215.jpg", full: "/photos/portfolio/pr002215.jpg" },
  { tile: "/photos/portfolio/tiles/pr002375.jpg", full: "/photos/portfolio/pr002375.jpg" },
  { tile: "/photos/portfolio/tiles/pr002618.jpg", full: "/photos/portfolio/pr002618.jpg" },
  { tile: "/photos/portfolio/tiles/pr003119.jpg", full: "/photos/portfolio/pr003119.jpg" },
  { tile: "/photos/portfolio/tiles/pr004156.jpg", full: "/photos/portfolio/pr004156.jpg" },
  { tile: "/photos/portfolio/tiles/pr005775.jpg", full: "/photos/portfolio/pr005775.jpg" },
  { tile: "/photos/portfolio/tiles/pr005893 copy.jpg", full: "/photos/portfolio/pr005893 copy.jpg" },
  { tile: "/photos/portfolio/tiles/pr006968.jpg", full: "/photos/portfolio/pr006968.jpg" },
  { tile: "/photos/portfolio/tiles/pr006988.jpg", full: "/photos/portfolio/pr006988.jpg" },
  { tile: "/photos/portfolio/tiles/pr007190.jpg", full: "/photos/portfolio/pr007190.jpg" },
  { tile: "/photos/portfolio/tiles/pr008261.jpg", full: "/photos/portfolio/pr008261.jpg" },
  { tile: "/photos/portfolio/tiles/pr008877.jpg", full: "/photos/portfolio/pr008877.jpg" },
  { tile: "/photos/portfolio/tiles/pr008878.jpg", full: "/photos/portfolio/pr008878.jpg" },
  { tile: "/photos/portfolio/tiles/pr008886.jpg", full: "/photos/portfolio/pr008886.jpg" },
  { tile: "/photos/portfolio/tiles/pr008979.jpg", full: "/photos/portfolio/pr008979.jpg" },
  { tile: "/photos/portfolio/tiles/pr009492.jpg", full: "/photos/portfolio/pr009492.jpg" },
  { tile: "/photos/portfolio/tiles/pr009819.jpg", full: "/photos/portfolio/pr009819.jpg" },
] as const;

/**
 * One entry per wedding in "Every Wedding We've Told". `cover` is already
 * cropped to the story card's 3:4 and `avatar` to the testimonial circle, so
 * neither is fetched at one size and drawn at another. `gallery` is the set
 * that opens when a card is clicked — kept at its original aspect ratios,
 * because that lightbox is where a frame is finally seen whole.
 *
 * Files are numbered rather than named, so a photo is swapped by replacing the
 * file; only the count below changes.
 */
const couple = (slug: string, shots: number) => ({
  cover: `/photos/couples/${slug}/cover.jpg`,
  avatar: `/photos/couples/${slug}/avatar.jpg`,
  gallery: Array.from(
    { length: shots },
    (_, i) => `/photos/couples/${slug}/${String(i + 1).padStart(2, "0")}.jpg`
  ),
});

const couples = {
  vasundharaBrandon: couple("vasundhara-brandon", 18),
  nishantJenny: couple("nishant-jenny", 18),
  asavariSwapnil: couple("asavari-swapnil", 18),
  nidaMohamed: couple("nida-mohamed", 18),
  ashutoshTwinkle: couple("ashutosh-twinkle", 18),
  dhitiPuneet: couple("dhiti-puneet", 18),
  shubhangiShobhit: couple("shubhangi-shobhit", 18),
  shivanshKeerthi: couple("shivansh-keerthi", 18),
  dishaAbhinav: couple("disha-abhinav", 18),
  amanShivangi: couple("aman-shivangi", 18),
} as const;

/**
 * Poster frames for the wedding films, pulled once from YouTube and served
 * from our own origin. The viewer shows these until someone presses play, so
 * an ordinary visit never touches YouTube at all.
 */
const films = {
  "YGodpv3qwd0": "/photos/films/YGodpv3qwd0.jpg",
  "v59M6vkHfsM": "/photos/films/v59M6vkHfsM.jpg",
  "iRp4aJSStCw": "/photos/films/iRp4aJSStCw.jpg",
  "Jw7UKOL7Nu0": "/photos/films/Jw7UKOL7Nu0.jpg",
  "qo0LDkBfZMQ": "/photos/films/qo0LDkBfZMQ.jpg",
  "JnDbuRC3LjU": "/photos/films/JnDbuRC3LjU.jpg",
  "56nLQih7vWU": "/photos/films/56nLQih7vWU.jpg",
} as const;

/** Trimmed from the studio's own wedding film; see README for how it was cut. */
const video = {
  heroTeaser: "/video/hero-teaser.mp4",
  heroTeaserPoster: "/video/hero-teaser-poster.jpg",
} as const;

export const img = {
  couples,

  films,

  portfolio,

  logo: logo.full,
  logoLight: logo.fullLight,
  logoMark: logo.mark,
  logoMarkLight: logo.markLight,

  heroVideo: video.heroTeaser,
  heroPoster: video.heroTeaserPoster,
  heroMain: weddingDay.vidaiWalk,
  heroAlt: haldi.marigoldBackdrop,

  brandStoryHands: engagement.ringDetail,
  brandStoryCouple: weddingDay.floralEmbrace,

  services: {
    candidPhotography: "/photos/services/candid-photography.jpg",
    cinematicVideography: "/photos/services/cinematic-videography.jpg",
    traditionalVideography: "/photos/services/traditional-videography.jpg",
    traditionalPhotography: "/photos/services/traditional-photography.jpg",
    photoEditing: "/photos/services/photo-editing.jpg",
    videoEditing: "/photos/services/video-editing.jpg",
    dronePhotography: "/photos/services/drone-photography.jpg",
    craneLedWall: "/photos/services/crane-led-wall.jpg",
  },

  /*
    These five are stages of the studio's workflow, not ceremonies, so each
    photo is chosen for what it literally depicts: a couple talking across a
    table, a pre-wedding shoot, a ceremony in full swing, a finished frame,
    and the last moment of the day.
  */
  process: {
    consultation: preWedding.cafeMoment,
    preWedding: engagement.venueWalk,
    weddingDays: haldi.familyBlessing,
    edit: weddingDay.floralArch,
    album: weddingDay.vidaiWalk,
  },

  statsBackground: haldi.marigoldBackdrop,

  /*
    Feed for the retired "Inspiration, As It Finds Us" moodboard. The section
    is off the page but the component and this list are kept intact so it can
    be dropped back in — see the commented import in app/page.tsx.

    Presented as the studio's own feed, so this is their photography only.
  */
  instagram: [
    weddingDay.bridalVeil,
    haldi.petalShower,
    engagement.ringExchange,
    weddingDay.floralArch,
    engagement.venueWalk,
    haldi.marigoldBackdrop,
    weddingDay.varmala,
    haldi.coupleInYellow,
    preWedding.cafeMoment,
    weddingDay.bridePampas,
    haldi.familyBlessing,
    engagement.couplePortrait,
  ],

  /** One photograph per wedding, shown in the stories slider. */
  /** Square crops of the same photographs, for the testimonial avatars. */
  bookingSide: weddingDay.floralArch,
} as const;
