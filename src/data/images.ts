function unsplash(id: string, params = "q=80&auto=format&fit=crop") {
  return `https://images.unsplash.com/photo-${id}?${params}`;
}

export const img = {
  heroMain: unsplash("1519741497674-611481863552", "q=80&w=2400&auto=format&fit=crop"),
  heroAlt: unsplash("1606216794074-735e91aa2c92", "q=80&w=2400&auto=format&fit=crop"),

  brandStoryHands: unsplash("1520854221256-17451cc331bf", "q=80&w=1600&auto=format&fit=crop"),
  brandStoryCouple: unsplash("1606216794074-735e91aa2c92", "q=80&w=1600&auto=format&fit=crop"),

  experiences: {
    luxuryWeddings: unsplash("1523438885200-e635ba2c371e", "q=80&w=1400&auto=format&fit=crop"),
    destinationWeddings: unsplash("1533105079780-92b9be482077", "q=80&w=1400&auto=format&fit=crop"),
    floralDecoration: unsplash("1529636798458-92182e662485", "q=80&w=1400&auto=format&fit=crop"),
    receptionStyling: unsplash("1519167758481-83f550bb49b3", "q=80&w=1400&auto=format&fit=crop"),
    mehendiSangeet: unsplash("1587271636175-90d58cdad458", "q=80&w=1400&auto=format&fit=crop"),
    engagement: unsplash("1465495976277-4387d4b0b4c6", "q=80&w=1400&auto=format&fit=crop"),
    corporateEvents: unsplash("1531058020387-3be344556be6", "q=80&w=1400&auto=format&fit=crop"),
    bridalStyling: unsplash("1546032996-6dfacbacbf3f", "q=80&w=1400&auto=format&fit=crop"),
  },

  gallery: {
    palmEvening: unsplash("1606216794074-735e91aa2c92", "q=80&w=1600&auto=format&fit=crop"),
    lakeChairs: unsplash("1522673607200-164d1b6ce486", "q=80&w=1600&auto=format&fit=crop"),
    confettiKiss: unsplash("1583939003579-730e3918a45a", "q=80&w=1600&auto=format&fit=crop"),
    lakeBouquet: unsplash("1591604466107-ec97de577aff", "q=80&w=1600&auto=format&fit=crop"),
    blackSandBeach: unsplash("1544078751-58fee2d8a03b", "q=80&w=1600&auto=format&fit=crop"),
    bouquetDetail: unsplash("1550005809-91ad75fb315f", "q=80&w=1600&auto=format&fit=crop"),
    shoesDetail: unsplash("1509927083803-4bd519298ac4", "q=80&w=1600&auto=format&fit=crop"),
    receptionToast: unsplash("1527529482837-4698179dc6ce", "q=80&w=1600&auto=format&fit=crop"),
    mandap: unsplash("1587271636175-90d58cdad458", "q=80&w=1600&auto=format&fit=crop"),
  },

  process: {
    consultation: unsplash("1543269865-cbf427effbad", "q=80&w=1400&auto=format&fit=crop"),
    planning: unsplash("1522199755839-a2bacb67c546", "q=80&w=1400&auto=format&fit=crop"),
    design: unsplash("1529636798458-92182e662485", "q=80&w=1400&auto=format&fit=crop"),
    execution: unsplash("1523438885200-e635ba2c371e", "q=80&w=1400&auto=format&fit=crop"),
    celebration: unsplash("1467810563316-b5476525c0f9", "q=80&w=1400&auto=format&fit=crop"),
  },

  statsBackground: unsplash("1546032996-6dfacbacbf3f", "q=80&w=2000&auto=format&fit=crop"),

  testimonials: {
    isabellaMarco: unsplash("1524504388940-b1c1722653e1", "q=80&w=400&auto=format&fit=crop"),
    charlotte: unsplash("1544005313-94ddf0286df2", "q=80&w=400&auto=format&fit=crop"),
    sophiaJames: unsplash("1573497019940-1c28c88b4f3e", "q=80&w=400&auto=format&fit=crop"),
    thomas: unsplash("1560250097-0b93528c311a", "q=80&w=400&auto=format&fit=crop"),
    daniel: unsplash("1519085360753-af0119f7cbe7", "q=80&w=400&auto=format&fit=crop"),
  },

  instagram: [
    unsplash("1519741497674-611481863552", "q=70&w=800&auto=format&fit=crop"),
    unsplash("1522673607200-164d1b6ce486", "q=70&w=800&auto=format&fit=crop"),
    unsplash("1529636798458-92182e662485", "q=70&w=800&auto=format&fit=crop"),
    unsplash("1550005809-91ad75fb315f", "q=70&w=800&auto=format&fit=crop"),
    unsplash("1465495976277-4387d4b0b4c6", "q=70&w=800&auto=format&fit=crop"),
    unsplash("1509927083803-4bd519298ac4", "q=70&w=800&auto=format&fit=crop"),
    unsplash("1522748906645-95d8adfd52c7", "q=70&w=800&auto=format&fit=crop"),
    unsplash("1533105079780-92b9be482077", "q=70&w=800&auto=format&fit=crop"),
    unsplash("1587271636175-90d58cdad458", "q=70&w=800&auto=format&fit=crop"),
    unsplash("1467810563316-b5476525c0f9", "q=70&w=800&auto=format&fit=crop"),
    unsplash("1546032996-6dfacbacbf3f", "q=70&w=800&auto=format&fit=crop"),
    unsplash("1527529482837-4698179dc6ce", "q=70&w=800&auto=format&fit=crop"),
  ],

  bookingSide: unsplash("1591604466107-ec97de577aff", "q=80&w=1600&auto=format&fit=crop"),
} as const;
