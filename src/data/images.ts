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

const mehendi = {
  handsDetail: "/photos/mehendi/pexels-photo-18074563.jpg",
  artistAtWork: "/photos/mehendi/pexels-photo-31032216.jpg",
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

export const img = {
  heroMain: weddingDay.vidaiWalk,
  heroAlt: haldi.marigoldBackdrop,

  brandStoryHands: engagement.ringDetail,
  brandStoryCouple: weddingDay.floralEmbrace,

  experiences: {
    rokaSagai: engagement.ringExchange,
    preWeddingShoot: preWedding.cafeMoment,
    mehendi: mehendi.artistAtWork,
    haldi: haldi.petalShower,
    varmala: weddingDay.varmala,
    weddingDay: weddingDay.bridePampas,
    bridalPortraits: weddingDay.bridalVeil,
    couplePortraits: engagement.couplePortrait,
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

  testimonials: {
    ayushRuchika: "/photos/avatars/ayush-ruchika.jpg",
    nishantJenny: "/photos/avatars/nishant-jenny.jpg",
    shubhamDisha: "/photos/avatars/shubham-disha.jpg",
    pranaySanskriti: "/photos/avatars/pranay-sanskriti.jpg",
    shivenduVandna: "/photos/avatars/shivendu-vandna.jpg",
  },

  /*
    Presented as the studio's own feed, so this is their photography only —
    the two Pexels mehendi files are deliberately excluded.
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

  bookingSide: weddingDay.floralArch,
} as const;
