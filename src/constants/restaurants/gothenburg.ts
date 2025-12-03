import type { Restaurant } from "./types";

export const RESTAURANTS: Restaurant[] = [
  {
    name: "SK Mat & Människor",
    coordinates: {
      latitude: 57.6949,
      longitude: 11.9848,
    },
    ratings: {
      michelin: 1,
      "m&o": 8,
    },
    chefs: [
      {
        name: "Stefan Karlsson",
        description:
          "Previously at restaurant Fond for over ten years and has curated menus for the Nobel Prize dinner multiple times.",
      },
    ],
    description:
      "Offers a modern take on Swedish cuisine. The open kitchen allows diners to observe the preparation of seasonal dishes that emphasize local ingredients, reflecting a commitment to sustainability and culinary excellence.",
    website: "https://en.skmat.se/",
    image: require("../../../public/images/restaurants/gothenburg/restaurants/sk-mat-och-manniskor.jpg"),
  },
  {
    name: "Familjen",
    coordinates: {
      latitude: 57.6975,
      longitude: 11.9765,
    },
    ratings: {
      michelin: "Bib",
    },
    chefs: [
      {
        name: "Tom Surma",
        description:
          "Bar chef at Familjen. Known for crafting innovative cocktails that complement the restaurant's modern West Swedish cuisine.",
      },
    ],
    description:
      "Familjen offers modern West Swedish gastronomy in a relaxed, living-room-inspired setting. The menu emphasizes seasonal, locally sourced ingredients, resulting in hearty yet refined dishes. The vibrant atmosphere is enhanced by a renowned cocktail program and a curated selection of wines and beers.",
    website: "https://www.restaurangfamiljen.se/en/familjen-en/",
    image: require("../../../public/images/restaurants/gothenburg/restaurants/familjen.jpg"),
  },
  {
    name: "Bulot",
    coordinates: {
      latitude: 57.7086,
      longitude: 11.9672,
    },
    chefs: [
      {
        name: "Gabriel Melim Andersson",
        description: "Previously at Aska, La Gazetta, Koka and Bhoga.",
      },
      {
        name: "Emil Bjelke",
        description: "Previously at Koka and Bhoga.",
      },
    ],
    description:
      "A modern bistro in central Gothenburg, Bulot offers a seasonal menu with a subtle French influence, emphasizing seafood and local ingredients. The restaurant features a relaxed atmosphere with both à la carte and tasting menu options.",
    website: "https://www.bulot.se/",
    image: require("../../../public/images/restaurants/gothenburg/restaurants/bulot.jpg"),
  },
  {
    name: "Human",
    coordinates: {
      latitude: 57.6968,
      longitude: 11.9585,
    },
    chefs: [
      {
        name: "Martin Moses",
        description:
          "Previously at SK Mat & Människor and was awarded Swedish Chef of the Year in 2019.",
      },
    ],
    description:
      "Offers a modern Nordic tasting menu with a focus on seasonal, locally sourced ingredients. The intimate setting features an open kitchen and minimalist design, creating a relaxed yet refined dining experience.",
    website: "https://www.humanrestaurang.se/",
    image: require("../../../public/images/restaurants/gothenburg/restaurants/human.jpg"),
  },
  {
    name: "Koka",
    coordinates: {
      latitude: 57.6983,
      longitude: 11.9664,
    },
    ratings: {
      michelin: 1,
    },
    chefs: [
      {
        name: "Johan Björkman",
        description:
          "Previously worked at Kock & Vin and has been instrumental in shaping modern West Swedish gastronomy.",
      },
    ],
    description:
      "Koka offers a modern take on West Swedish gastronomy. The menu emphasizes local seafood, vegetables, and game, with a strong commitment to sustainability—90% of ingredients are organic. The minimalist setting complements the focused and flavorful dishes, which are available in 3, 5, or 7-course tasting menus.",
    website: "https://restaurangkoka.se/en/restaurant-koka/",
    image: require("../../../public/images/restaurants/gothenburg/restaurants/koka.jpg"),
  },
  {
    name: "vRÅ",
    coordinates: {
      latitude: 57.7089,
      longitude: 11.9737,
    },
    chefs: [
      {
        name: "Sofia B. Olsson",
        description:
          "Previously worked at Bhoga in Gothenburg. Known for her commitment to sustainability and blending Nordic and Japanese culinary techniques.",
      },
    ],
    description:
      "vRÅ offers a fusion of Nordic and Japanese cuisine, emphasizing sustainable practices. The menu features seasonal, locally sourced seafood and produce, with ingredients often harvested from the restaurant's rooftop garden. The dining space combines elements of the building's 1920s architecture with modern design.",
    website: "https://restaurangvra.se/en",
    image: require("../../../public/images/restaurants/gothenburg/restaurants/vra.jpg"),
  },
  {
    name: "28+",
    coordinates: {
      latitude: 57.6968,
      longitude: 11.9725,
    },
    ratings: {
      michelin: 1,
    },
    description:
      "A Michelin-starred institution in Gothenburg since 1991, 28+ offers refined French-Scandinavian cuisine in an atmospheric cellar setting. The menu emphasizes seasonal ingredients, blending classical techniques with bold flavors. The restaurant is renowned for its exceptional cheese selection and one of Sweden's finest wine cellars.",
    website: "http://www.28plus.se/",
    image: require("../../../public/images/restaurants/gothenburg/restaurants/28-plus.jpg"),
  },
  {
    name: "Project",
    coordinates: {
      latitude: 57.6968,
      longitude: 11.9814,
    },
    ratings: {
      michelin: 1,
    },
    chefs: [
      {
        name: "Cameron Irving",
        description:
          "Previously worked in London and throughout Europe before opening Project in 2016 with his wife, Anna Irving.",
      },
    ],
    description:
      "Offers a seasonal tasting menu that emphasizes seafood and local game, complemented by Japanese influences. The intimate setting and attentive service create a welcoming atmosphere for guests.",
    website: "https://projectgbg.com/",
    image: require("../../../public/images/restaurants/gothenburg/restaurants/project.jpg"),
  },
  {
    name: "Bar La Lune",
    coordinates: {
      latitude: 57.6984,
      longitude: 11.9706,
    },
    chefs: [
      {
        name: "Oskar Ahlvin",
        description:
          "Previously worked at Bhoga in Gothenburg. Known for his passion for natural wines and creating a Parisian-inspired wine bar experience.",
      },
    ],
    description:
      "A cozy natural wine bar in Gothenburg's Vasa district, Bar La Lune offers a Parisian-inspired atmosphere with a focus on natural wines and seasonal small plates. The menu features dishes like pork fat and duck liver rillette, galette du Provence, and chicken liver mousse on grilled bread.",
    website: "https://barlalune.se/",
    image: require("../../../public/images/restaurants/gothenburg/restaurants/bar-la-lune.jpg"),
  },
  {
    name: "Trattoria La Strega",
    coordinates: {
      latitude: 57.6968,
      longitude: 11.9725,
    },
    chefs: [
      {
        name: "Nina Rydqvist",
        description:
          "Previously worked in Lombardy and has familial roots in Sicily. Known for her zero-waste approach and authentic Northern Italian cuisine.",
      },
    ],
    description:
      "A cozy trattoria in Gothenburg's Vasastan district, Trattoria La Strega offers authentic Northern Italian cuisine with a focus on seasonal ingredients and natural wines. The restaurant is renowned for its signature pappardelle with king crab and a curated selection of organic wines.",
    website: "http://www.trattorialastrega.se/",
    image: require("../../../public/images/restaurants/gothenburg/restaurants/trattoria-la-strega.jpg"),
  },
  {
    name: "Carbon",
    coordinates: {
      latitude: 57.7086,
      longitude: 11.9746,
    },
    chefs: [
      {
        name: "Jean Henkel",
        description: "Previously worked at Palace",
      },
    ],
    description:
      "A modern bistro in Gothenburg, Carbon offers a seasonal menu that blends contemporary techniques with traditional bases. Guests can choose between 5 or 8-course tasting menus, with all dishes accompanied by suggested wine pairings. The restaurant features an elegant interior with rich décor and crushed velvet banquettes, creating a refined dining atmosphere.",
    website: "https://www.restaurangcarbon.se/",
    image: require("../../../public/images/restaurants/gothenburg/restaurants/carbon.jpg"),
  },
];
