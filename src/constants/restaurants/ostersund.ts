import type { Restaurant } from "./types";

export const RESTAURANTS: Restaurant[] = [
  {
    name: "Bua",
    coordinates: {
      longitude: 14.6340788,
      latitude: 63.1774453,
    },
    ratings: {
      whiteguide: {
        rating: 4,
        reviewUrl: "https://whiteguide.com/se/sv/restaurants/12639-bua",
      },
    },
    image: require("../../../public/images/restaurants/ostersund/restaurants/bua.jpg"),
    description:
      "A playful and relaxed restaurant with roots in Jämtland, serving seasonal small plates made from local ingredients in a casual yet elegant setting. The menu is creative, the staff guide you like seasoned hosts, and the drinks list features small-scale local brews and European wines.",
    website: "https://www.nastgard.se/bua",
  },
  {
    name: "Artut",
    coordinates: {
      longitude: 14.639245,
      latitude: 63.1766117,
    },
    image: require("../../../public/images/restaurants/ostersund/restaurants/artut.jpg"),
    description:
      "A laid-back, city-center restaurant celebrated for its sourdough pizzas, craft beer selection, and seasonal comfort dishes. It’s casual, welcoming—and a local favorite for both creative pizza toppings and rotating house specialties.",
    website: "https://www.artutbar.se/",
  },
];
