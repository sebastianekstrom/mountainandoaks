import type { Restaurant } from "./types";

export const RESTAURANTS: Restaurant[] = [
  {
    name: "Per Se",
    coordinates: {
      latitude: 40.7682478,
      longitude: -73.9828968,
    },
    image: require("../../../public/images/restaurants/new-york/restaurants/per-se.jpg"),
    ratings: {
      michelin: 3,
    },
    chefs: [
      {
        name: "Thomas Keller",
        description: "The French Laundry, Surf Club, Bouchon & La Calenda",
      },
    ],
    description:
      "Nine-course tasting menu and an award-winning wine list, with views of Central Park and Columbus Circle.",
    website: "https://thomaskeller.com/perseny/",
  },
];
