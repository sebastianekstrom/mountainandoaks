import type { Restaurant } from "./types";

export const RESTAURANTS: Restaurant[] = [
  {
    name: "Dhamaka",
    coordinates: {
      latitude: 40.718,
      longitude: -73.9885,
    },
    ratings: {
      michelin: "Bib",
    },
    chefs: [
      {
        name: "Chintan Pandya",
        description:
          "Previously worked at Rahi and Adda in New York City. Known for his 'Unapologetic Indian' approach, highlighting bold, regional Indian dishes.",
      },
    ],
    description:
      "Located in Manhattan's Essex Market, Dhamaka offers a bold exploration of India's lesser-known regional cuisines. The menu features dishes like goat neck dum biryani, gurda kapoora (goat kidney and testicles), and champaran meat cooked with an entire bulb of garlic. The restaurant emphasizes complex spices and fierce heat levels, providing an 'unapologetic' dining experience.",
    website: "https://www.dhamaka.nyc/",
    image:
      require("../../../public/images/restaurants/new-york/restaurants/dhamaka.jpg"),
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
  {
    name: "Cervo's",
    coordinates: {
      latitude: 40.7149,
      longitude: -73.9935,
    },
    ratings: {
      michelin: "Bib",
    },
    chefs: [
      {
        name: "Aaron Crowder",
        description:
          "Previously worked at Hart's and Eel Bar in New York City.",
      },
    ],
    description:
      "A seafood-focused restaurant which draws inspiration from the coastal cuisines of Spain and Portugal. The menu features dishes like fried shrimp heads, Louisiana white prawns a la plancha, and grass-fed lamb burgers with anchovies.",
    website: "https://www.cervosnyc.com/",
    image:
      require("../../../public/images/restaurants/new-york/restaurants/cervos.jpg"),
  },
  {
    name: "Tolo",
    coordinates: {
      latitude: 40.7144246,
      longitude: -73.9904985,
    },
    ratings: {
      michelin: "Bib",
    },
    chefs: [
      {
        name: "Ron Yan",
        description:
          "Previously worked at Le Cirque, Jewel Bako, Legacy Records, and served as executive chef at Parcelle.",
      },
    ],
    description:
      "Offers a refined menu that blends regional Chinese flavors with modern techniques. Signature dishes include seared rice noodles with XO sauce, sweet-and-sour crispy fish, and five-spice boiled peanuts. The restaurant features a curated 300-bottle wine list and a cozy, design-forward interior.",
    website: "https://tolonyc.com/",
    image:
      require("../../../public/images/restaurants/new-york/restaurants/tolo.jpg"),
  },
  {
    name: "Potluck Club",
    coordinates: {
      latitude: 40.7196065,
      longitude: -73.9935758,
    },
    ratings: {
      michelin: "Bib",
    },
    chefs: [
      {
        name: "Zhan Chen",
        description:
          "Previously worked at Jams under Jonathan Waxman and at Pheasant with Vincent Fraissange, bringing experience in Italian and Mediterranean cuisine to his reinterpretation of Cantonese-American dishes.",
      },
    ],
    description:
      "Founded by five childhood friends, the restaurant offers a modern take on traditional Cantonese dishes, infused with American influences. The menu features items like salt & pepper fried chicken with scallion biscuits and chili-plum jam, and jellyfish tiger salad.",
    website: "https://thepotluckclubny.com/",
    image:
      require("../../../public/images/restaurants/new-york/restaurants/potluck-club.jpg"),
  },
  {
    name: "Momofuku Noodle Bar",
    coordinates: {
      latitude: 40.7295,
      longitude: -73.984,
    },
    ratings: {
      michelin: "Bib",
    },
    chefs: [
      {
        name: "David Chang",
        description:
          "Previously worked at Café Boulud in New York and various restaurants in Japan, including a soba shop and the Park Hyatt Tokyo.",
      },
    ],
    description:
      "Opened in 2004 in New York City's East Village, Momofuku Noodle Bar is the flagship restaurant of David Chang's culinary empire. The restaurant offers a constantly changing menu featuring noodles, steamed buns, and daily dishes, drawing inspiration from Asian street food. Signature items include the pork belly buns and smoked pork ramen.",
    website: "https://momofukunoodlebar.com/",
    image:
      require("../../../public/images/restaurants/new-york/restaurants/momofuku-noodle-bar.jpg"),
  },
  {
    name: "bōm",
    coordinates: {
      latitude: 40.7405,
      longitude: -73.9925,
    },
    ratings: {
      michelin: 1,
    },
    chefs: [
      {
        name: "Brian Kim",
        description:
          "Previously opened Oiji in the East Village and Oiji Mi in the Flatiron District.",
      },
      {
        name: "Justin Choung",
        description:
          "Previously worked at Willows Inn, Frantzén, Marea, Günter Seeger, and Morimoto.",
      },
    ],
    description:
      "An intimate 17-seat Korean chef's counter in Manhattan's Flatiron District, bōm offers a progressive tasting menu that begins with delicate seafood and vegetable bites, followed by various cuts of premium meats, including dry-aged wagyu, grilled tableside.",
    website: "https://www.bom-nyc.com/",
    image:
      require("../../../public/images/restaurants/new-york/restaurants/bom.jpg"),
  },
  {
    name: "Sushi Sho",
    coordinates: {
      latitude: 40.7528,
      longitude: -73.9808,
    },
    ratings: {
      michelin: 2,
    },
    chefs: [
      {
        name: "Keiji Nakazawa",
        description:
          "Previously opened Sushi Sho in Yotsuya, Tokyo in 1989 and Sushi Sho at The Ritz-Carlton Residences, Waikiki Beach in 2016. Known for pioneering Edomae-style sushi, emphasizing aging, curing, and fermentation techniques.",
      },
    ],
    description:
      "Sushi Sho in New York offers an omakase experience that showcases a variety of aged, fermented, and pickled fish, shellfish, and vegetables. The restaurant features an eight-seat Hinoki counter and emphasizes traditional Edomae techniques.",
    website: "https://www.exploretock.com/sushi-sho-nyc",
    image:
      require("../../../public/images/restaurants/new-york/restaurants/sushi-sho.jpg"),
  },
  {
    name: "Chef's Table",
    coordinates: {
      latitude: 40.7563,
      longitude: -73.9962,
    },
    ratings: {
      michelin: 2,
    },
    chefs: [
      {
        name: "Max Natmessnig",
        description:
          "Previously worked at Steirereck in Vienna, Oud Sluis in the Netherlands and The NoMad in New York",
      },
      {
        name: "Marco Prins",
        description:
          "Previously worked at Oud Sluis in the Netherlands and served as head chef at The Jane in Antwerp.",
      },
    ],
    description:
      "An intimate counter-dining experience located in the back of a Hell's Kitchen grocery store, Chef's Table at Brooklyn Fare offers a seafood-centric tasting menu that blends Japanese and French techniques. The restaurant features a 44-seat walnut counter surrounding an open kitchen.",
    website: "https://www.brooklynfare.com/chefs-table/",
    image:
      require("../../../public/images/restaurants/new-york/restaurants/chefs-table-at-brooklyn-fare.jpg"),
  },
  {
    name: "Aquavit",
    coordinates: {
      latitude: 40.7612,
      longitude: -73.9719,
    },
    ratings: {
      michelin: 2,
    },
    chefs: [
      {
        name: "Emma Bengtsson",
        description:
          "Previously served as pastry chef at Edsbacka Krog and Operakällaren in Stockholm. Noted for her refined Nordic cuisine and being the first Swedish woman to earn two Michelin stars.",
      },
    ],
    description:
      "The menu features seasonal dishes that blend traditional Scandinavian flavors with contemporary techniques, such as North Sea cod with mussel foam and the signature 'Arctic Bird's Nest' dessert. The restaurant's elegant setting includes a sleek bar and open kitchen, providing a sophisticated dining experience.",
    website: "https://www.aquavit.org/",
    image:
      require("../../../public/images/restaurants/new-york/restaurants/aquavit.jpg"),
  },
  {
    name: "Jean-Georges",
    coordinates: {
      latitude: 40.7691,
      longitude: -73.9817,
    },
    ratings: {
      michelin: 2,
    },
    description:
      "Opened in 1997, it serves as the flagship of Chef Jean-Georges Vongerichten's global restaurant empire. The menu blends French, American, and Asian influences, emphasizing seasonal ingredients sourced from local farmers' markets. The dining room offers elegant views of Central Park, providing a refined setting for the meticulously crafted dishes.",
    website: "https://www.jean-georgesrestaurant.com/jean-georges/",
    image:
      require("../../../public/images/restaurants/new-york/restaurants/jean-georges.jpg"),
  },
];
