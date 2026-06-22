// Location intro stats, connectivity node-map data, and the
// "Everything Within Reach" distance carousel cards.

export const connectivityStats = [
  { value: 5, suffix: "", unit: "Minutes", label: "To the Expressway" },
  { value: 15, suffix: "", unit: "Minutes", label: "To the Highways" },
  { value: 50, suffix: "", unit: "Minutes", label: "To the Airport" },
];

// Polar layout (angle in degrees, radius as % of half-canvas) for the SVG map.
export const connectivityNodes = [
  { id: "delhi", label: "Delhi Int. Airport", angle: -90, radius: 78 },
  { id: "noida", label: "Noida", angle: -30, radius: 80 },
  { id: "buddh", label: "Buddh Int. Circuit", angle: 30, radius: 80 },
  { id: "grnoida", label: "Gr. Noida", angle: 90, radius: 78 },
  { id: "noidaintl", label: "Noida Intl. Airport", angle: 150, radius: 80 },
  { id: "dadri", label: "Dadri", angle: 210, radius: 80 },
];

const img = (id, w = 900) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const distanceCards = [
  {
    distance: "2.7",
    name: "DPS Knowledge Park V",
    tag: "Education & Institutes",
    image: img("photo-1562774053-701939374585"),
  },
  {
    distance: "2.8",
    name: "Yatharth Super Speciality Hospital",
    tag: "Healthcare",
    image: img("photo-1519494026892-80bbd2d6fd0d"),
  },
  {
    distance: "5.5",
    name: "D Mart",
    tag: "Daily Essentials",
    image: img("photo-1604719312566-8912e9227c6a"),
  },
  {
    distance: "7.2",
    name: "Phase 2, Noida",
    tag: "Business District",
    image: img("photo-1486406146926-c627a92ad1ab"),
  },
  {
    distance: "7.5",
    name: "Gaur City Mall",
    tag: "Shopping & Leisure",
    image: img("photo-1567958451986-2de427a4a0be"),
  },
  {
    distance: "11",
    name: "Medanta Super Speciality Hospital",
    tag: "Healthcare",
    image: img("photo-1538108149393-fbbd81895907"),
  },
  {
    distance: "13",
    name: "NE3 & NH24 / NH9",
    tag: "Highway Connectivity",
    image: img("photo-1502920917128-1aa500764cbd"),
  },
  {
    distance: "15",
    name: "DLF Mall of India",
    tag: "Shopping & Leisure",
    image: img("photo-1441986300917-64674bd600d8"),
  },
  {
    distance: "15",
    name: "Indirapuram",
    tag: "Residential Hub",
    image: img("photo-1480714378408-67cf0d13bc1b"),
  },
  {
    distance: "50",
    name: "Noida International Airport",
    tag: "Air Travel",
    image: img("photo-1436491865332-7a61a109cc05"),
  },
  {
    distance: "50",
    name: "IGI Airport, New Delhi",
    tag: "Air Travel",
    image: img("photo-1530521954074-e64f6810b32d"),
  },
];
