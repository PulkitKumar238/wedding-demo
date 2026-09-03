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

/** Trimmed from the studio's own wedding film; see README for how it was cut. */
const video = {
  heroTeaser: "/video/hero-teaser.mp4",
  heroTeaserPoster: "/video/hero-teaser-poster.jpg",
} as const;

export const img = {
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

  gallery: {
    venueWalk: engagement.venueWalk,
    couplePortrait: engagement.couplePortrait,
    ringDetail: engagement.ringDetail,
    familyBlessing: haldi.familyBlessing,
    coupleInYellow: haldi.coupleInYellow,
    cafeMoment: preWedding.cafeMoment,
    floralEmbrace: weddingDay.floralEmbrace,
    marigoldBackdrop: haldi.marigoldBackdrop,
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
  stories: {
    vandnaPandey: "/photos/stories/vandna-pandey.jpg",
    rupali: "/photos/stories/rupali.jpg",
    ayushRuchika: "/photos/stories/ayush-ruchika.jpg",
    shubhangi: "/photos/stories/shubhangi.jpg",
    ashutoshGupta: "/photos/stories/ashutosh-gupta.jpg",
    kartik: "/photos/stories/kartik.jpg",
    dishaMishra: "/photos/stories/disha-mishra.jpg",
    sanskriti: "/photos/stories/sanskriti.jpg",
    nishantJenny: "/photos/stories/nishant-jenny.jpg",
    yashShrivastava: "/photos/stories/yash-shrivastava.jpg",
    gurpreetKaur: "/photos/stories/gurpreet-kaur.jpg",
    dhriti: "/photos/stories/dhriti.jpg",
    shubhamMishra: "/photos/stories/shubham-mishra.jpg",
    pranayPragati: "/photos/stories/pranay-pragati.jpg",
    sandeep: "/photos/stories/sandeep.jpg",
    shivenduPandey: "/photos/stories/shivendu-pandey.jpg",
  },

  /** Square crops of the same photographs, for the testimonial avatars. */
  storyAvatars: {
    vandnaPandey: "/photos/story-avatars/vandna-pandey.jpg",
    rupali: "/photos/story-avatars/rupali.jpg",
    ayushRuchika: "/photos/story-avatars/ayush-ruchika.jpg",
    shubhangi: "/photos/story-avatars/shubhangi.jpg",
    ashutoshGupta: "/photos/story-avatars/ashutosh-gupta.jpg",
    kartik: "/photos/story-avatars/kartik.jpg",
    dishaMishra: "/photos/story-avatars/disha-mishra.jpg",
    sanskriti: "/photos/story-avatars/sanskriti.jpg",
    nishantJenny: "/photos/story-avatars/nishant-jenny.jpg",
    yashShrivastava: "/photos/story-avatars/yash-shrivastava.jpg",
    gurpreetKaur: "/photos/story-avatars/gurpreet-kaur.jpg",
    dhriti: "/photos/story-avatars/dhriti.jpg",
    shubhamMishra: "/photos/story-avatars/shubham-mishra.jpg",
    pranayPragati: "/photos/story-avatars/pranay-pragati.jpg",
    sandeep: "/photos/story-avatars/sandeep.jpg",
    shivenduPandey: "/photos/story-avatars/shivendu-pandey.jpg",
  },

  bookingSide: weddingDay.floralArch,
} as const;
