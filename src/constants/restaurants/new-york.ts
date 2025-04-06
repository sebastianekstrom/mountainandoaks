import type { Restaurant } from "./types";

export const RESTAURANTS: Restaurant[] = [
  {
    name: "Aska",
    coordinates: {
      latitude: 40.712293,
      longitude: -73.966408,
    },
    ratings: {
      michelin: 2,
    },
    chefs: [
      {
        name: "Fredrik Berselius",
        description:
          "Chef-owner of Aska. Previously worked at Per Se, Aquavit, and Corton in New York City.",
      },
    ],
    description:
      "Offering a multi-course tasting menu rooted in Nordic sensibilities, utilizing hyper-seasonal and locally foraged ingredients.",
    website: "https://www.askanyc.com/",
    image: require("../../../public/images/restaurants/new-york/restaurants/aska.jpg"),
  },
  {
    name: "Le Bernardin",
    coordinates: {
      latitude: 40.761543,
      longitude: -73.981804,
    },
    ratings: {
      michelin: 3,
    },
    chefs: [
      {
        name: "Éric Ripert",
        description:
          "Chef and co-owner of Le Bernardin. Previously worked at La Tour d'Argent and Jamin in Paris, and Jean Louis at the Watergate Hotel in Washington, D.C.",
      },
    ],
    description:
      "A renowned French seafood restaurant in Midtown Manhattan, New York City, celebrated for its refined and innovative seafood dishes, maintaining three Michelin stars since 2005.",
    website: "https://www.le-bernardin.com/",
    image: require("../../../public/images/restaurants/new-york/restaurants/le-bernadin.jpg"),
  },
  {
    name: "Per Se",
    coordinates: {
      latitude: 40.768735,
      longitude: -73.982938,
    },
    ratings: {
      michelin: 3,
    },
    chefs: [
      {
        name: "Thomas Keller",
        description:
          "Previously opened The French Laundry in Yountville, California, and has received multiple James Beard Foundation awards.",
      },
    ],
    description:
      "Contemporary French cuisine through meticulously crafted tasting menus in an elegant setting with views of Central Park.",
    website: "https://www.thomaskeller.com/perseny",
    image: require("../../../public/images/restaurants/new-york/restaurants/per-se.jpg"),
  },
  {
    name: "Agi's Counter",
    coordinates: {
      latitude: 40.6708,
      longitude: -73.9572,
    },
    ratings: {
      michelin: "Bib",
    },
    chefs: [
      {
        name: "Jeremy Salamon",
        description:
          "Previously worked at Locanda Verde, Prune, Buvette, and Via Carota in New York City. Former Executive Chef of The Eddy and Wallflower.",
      },
    ],
    description:
      "Serves breakfast, lunch, and dinner, featuring dishes like palacsinta (Hungarian crepes), confit tuna melts, and caraway caesars. The café also boasts an all-Hungarian wine list and local beers.",
    website: "https://agiscounter.com/",
    image: require("../../../public/images/restaurants/new-york/restaurants/agis.jpg"),
  },
];
