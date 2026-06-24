// Shared media references — hero video/poster and gallery imagery.

const img = (id, w = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const hero = {
  // Remote ambient video with a graceful poster fallback for slow connections.
  videoMp4:
    "https://res.cloudinary.com/dynbpb9u0/video/upload/v1782319134/hero-video_a1gh0k.mp4",
  poster: img("photo-1600596542815-ffad4c1539a9", 1920),
};

export const aboutNature = img("photo-1501785888041-af3ef285b470", 900);

export const gallery = {
  aerial: "https://unibera.co.in/wp-content/uploads/2026/03/Screenshot-2026-03-16-122022.png",
  green: "https://unibera.co.in/wp-content/uploads/2026/03/Screenshot-2026-03-16-122037.png",
  relax: "https://unibera.co.in/wp-content/uploads/2026/03/Screenshot-2026-03-16-122006.png",
};

export const harmony = {
  courtyard: "https://unibera.co.in/wp-content/uploads/2026/03/Screenshot-2026-03-16-123707.png",
  exterior: "https://unibera.co.in/wp-content/uploads/2026/03/Screenshot-2026-03-16-123733.png",
};

export const tourBg = img("photo-1600566753086-00f18fb6b3ea", 1800);
