// Numbered amenities. Rows with an `image` reveal a full-bleed photo on hover.

const img = (id, w = 1400) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const amenities = [
  {
    no: "01",
    name: "Wellness & Fitness",
    group: "Wellness",
    image: img("photo-1518611012118-696072aa579a"),
  },
  { no: "02", name: "Yoga Deck", group: "Wellness", image: img("photo-1544367567-0f2fcb009e0b") },
  {
    no: "03",
    name: "Fully Equipped Gym",
    group: "Wellness",
    image: img("photo-1534438327276-14e5300c3a48"),
  },
  {
    no: "04",
    name: "Jogging Track",
    group: "Wellness",
    image: img("photo-1502904550040-7534597429ae"),
  },
  {
    no: "05",
    name: "Recreation",
    group: "Recreation",
    image: img("photo-1571902943202-507ec2618e8f"),
  },
  {
    no: "06",
    name: "Swimming Pool",
    group: "Recreation",
    image: img("photo-1576013551627-0cc20b96c2a7"),
  },
  {
    no: "07",
    name: "Badminton Court",
    group: "Recreation",
    image: img("photo-1626224583764-f87db24ac4ea"),
  },
  {
    no: "08",
    name: "Family Spaces",
    group: "Family",
    image: img("photo-1600880292203-757bb62b4baf"),
  },
  {
    no: "09",
    name: "Kids Play Area",
    group: "Family",
    image: img("photo-1597430203889-c93c999d22d9"),
  },
  {
    no: "10",
    name: "Landscaped Green Areas",
    group: "Family",
    image: img("photo-1558521958-0a228e77fc99"),
  },
];
