import type { Restaurant } from "./types";

export const RESTAURANTS: Restaurant[] = [
  {
    name: "Quetzal",
    coordinates: {
      latitude: 43.656472,
      longitude: -79.406917,
    },
    ratings: {
      michelin: 1,
    },
    chefs: [
      {
        name: "Steven Molnar",
        description:
          "Trained under Charles-Antoine Crête, Normand Laprise, and David Lee.",
      },
    ],
    description:
      "Offers a modern interpretation of Mexican cuisine. The menu features dishes cooked exclusively over a 28-foot wood fire, utilizing both traditional Mexican ingredients and locally sourced Canadian produce.",
    website: "https://www.quetzaltoronto.com/",
    image: require("../../../public/images/restaurants/toronto/restaurants/quetzal.jpg"),
  },
  {
    name: "Enigma Yorkville",
    coordinates: {
      latitude: 43.6686,
      longitude: -79.3904,
    },
    ratings: {
      michelin: 1,
    },
    chefs: [
      {
        name: "Quinton Bennett",
        description: "Previously at Noma",
      },
    ],
    description:
      "A Michelin-starred restaurant in Toronto's Yorkville neighborhood, offering a modern international tasting menu that blends premium local and international ingredients. The dining experience is refined and globally inspired.",
    website: "https://www.enigmayorkville.com/",
    image: require("../../../public/images/restaurants/toronto/restaurants/enigma-yorkville.jpg"),
  },
  {
    name: "DaiLo",
    coordinates: {
      latitude: 43.6559,
      longitude: -79.4112,
    },
    chefs: [
      {
        name: "Nick Liu",
        description:
          "Previously worked at Scaramouche and trained in Tuscany, England, and Mexico. Known for pioneering 'New Asian Cuisine' that blends traditional Chinese dishes with French techniques and modern influences.",
      },
    ],
    description:
      "A contemporary Asian brasserie in Toronto's Little Italy, DaiLo offers a modern interpretation of Chinese cuisine, incorporating French culinary techniques and local Canadian ingredients.",
    website: "https://dailoto.com/",
    image: require("../../../public/images/restaurants/toronto/restaurants/dailo.jpg"),
  },
  {
    name: "Alo",
    coordinates: {
      latitude: 43.648556,
      longitude: -79.395944,
    },
    ratings: {
      michelin: 1,
    },
    chefs: [
      {
        name: "Patrick Kriss",
        description:
          "Previously worked under Daniel Boulud. Recognized as Outstanding Chef by Canada's 100 Best Restaurants in 2017, 2018, and 2019.",
      },
    ],
    description:
      "Located atop a heritage building in downtown Toronto, Alo offers a contemporary French tasting menu that blends European and Asian influences.",
    website: "https://alorestaurant.com/",
    image: require("../../../public/images/restaurants/toronto/restaurants/alo.jpg"),
  },
  {
    name: "Viaggio",
    coordinates: {
      latitude: 43.6515,
      longitude: -79.437,
    },
    chefs: [
      {
        name: "Jon Vettraino",
        description:
          "Previously worked at Buca Osteria, Splendido, and 416 Snack Bar in Toronto.",
      },
    ],
    description:
      "Offers a seasonal menu that blends classical Italian elements with global flavors. Signature dishes include tagliolini with charred octopus in smoked dashi butter and tiramisu pancakes with espresso maple syrup. The restaurant features a cozy 32-seat dining room and a spacious patio adorned with garden lights.",
    website: "https://viaggiorestaurant.ca/",
    image: require("../../../public/images/restaurants/toronto/restaurants/viaggio.jpg"),
  },
];
