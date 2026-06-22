// Shared media references — hero video/poster and gallery imagery.

const img = (id, w = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const hero = {
  // Remote ambient video with a graceful poster fallback for slow connections.
  videoMp4:
    "https://cdn.coverr.co/videos/coverr-an-aerial-view-of-a-modern-villa-2633/1080p.mp4",
  poster: img("photo-1600596542815-ffad4c1539a9", 1920),
};

export const aboutNature = img("photo-1501785888041-af3ef285b470", 900);

export const gallery = {
  aerial: img("photo-1545324418-cc1a3fa10c00", 1400),
  green: img("photo-1600585154340-be6161a56a0c", 800),
  relax: img("photo-1571896349842-33c89424de2d", 800),
};

export const harmony = {
  courtyard: img("photo-1600607687939-ce8a6c25118c", 800),
  exterior: img("photo-1613977257363-707ba9348227", 1400),
};

export const tourBg = img("photo-1600566753086-00f18fb6b3ea", 1800);
