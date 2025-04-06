import type { Restaurant } from "./types";

export const RESTAURANTS: Restaurant[] = [
  {
    name: "Fallow",
    coordinates: {
      latitude: 51.509438,
      longitude: -0.1328112,
    },
    image: require("../../../public/images/restaurants/london/restaurants/fallow.jpg"),
    chefs: [
      {
        name: "Jack Croft",
        description: "Previously at El Cellar De can Roca",
      },
      {
        name: "William Murray",
        description: "Previously at The Fat Duck and The Clove Club",
      },
    ],
    description:
      "Sustainable approach to modern British cuisine, featuring innovative dishes like smoked cod's head with sriracha butter",
    website: "https://fallowrestaurant.com/",
  },
  {
    name: "The Clove Club",
    coordinates: {
      latitude: 51.5271179,
      longitude: -0.0792991,
    },
    image: require("../../../public/images/restaurants/london/restaurants/clove-club.jpg"),
    ratings: {
      michelin: 2,
    },
    chefs: [
      {
        name: "Isaac McHale",
        description: "Previously at Noma and Elystan Street",
      },
    ],
    description:
      "Seasonal tasting menus rooted in British produce and modern technique",
    website: "https://www.thecloveclub.com/",
  },
  {
    name: "AngloThai",
    coordinates: {
      latitude: 51.5151278,
      longitude: -0.1611051,
    },
    ratings: {
      michelin: 1,
    },
    image: require("../../../public/images/restaurants/london/restaurants/anglothai.jpg"),
    description:
      "Recreating traditional Thai flavours using only British ingredients",
    website: "https://www.anglothai.co.uk/",
  },
  {
    name: "Roe",
    coordinates: {
      latitude: 51.5023228,
      longitude: -0.015181,
    },
    chefs: [
      {
        name: "Jack Croft",
        description: "Fallow. Previously at El Cellar De can Roca",
      },
      {
        name: "William Murray",
        description: "Fallow. Previously at The Fat Duck and The Clove Club",
      },
    ],
    image: require("../../../public/images/restaurants/london/restaurants/roe.jpg"),
    description:
      "Modern British cuisine, emphasizing sustainable and nose-to-tail cooking, offering dishes like snail vindaloo flatbread, cuttlefish fried toast, and a blooming onion.",
    website: "https://roerestaurant.co.uk/",
  },
  {
    name: "The Palomar",
    coordinates: {
      latitude: 51.5115,
      longitude: -0.1318,
    },
    ratings: {
      michelin: "Bib",
    },
    image: require("../../../public/images/restaurants/london/restaurants/palomar.jpg"),
    description:
      "A vibrant Soho restaurant offering modern Jerusalem cuisine, influenced by the rich cultures of Southern Spain, North Africa, and the Levant. Known for its lively atmosphere and open kitchen bar.",
    website: "https://thepalomar.co.uk/",
  },
  {
    name: "Ikoyi",
    coordinates: {
      latitude: 51.5123768,
      longitude: -0.115553,
    },
    ratings: {
      michelin: 2,
    },
    chefs: [
      {
        name: "Jeremy Chan",
        description: "Previously at Noma and Hibiscus",
      },
    ],
    image: require("../../../public/images/restaurants/london/restaurants/ikoyi.jpg"),
    description:
      "Spice-driven dishes rooted in West African flavors, using peak-season British produce and sustainable ingredients.",
    website: "https://ikoyilondon.com/",
  },
  {
    name: "Akoko",
    coordinates: {
      latitude: 51.5177245,
      longitude: -0.136852,
    },
    ratings: {
      michelin: 1,
    },
    chefs: [
      {
        name: "Mutaro Balde",
        description: "Trained under Alain Ducasse at Plaza Athénée",
      },
    ],
    image: require("../../../public/images/restaurants/london/restaurants/akoko.jpg"),
    description: "Modern West African cuisine with bold, fire-led flavors.",
    website: "http://akoko.co.uk/",
  },
  {
    name: "St. JOHN",
    coordinates: {
      latitude: 51.5204614,
      longitude: -0.1014597,
    },
    ratings: {
      michelin: 1,
    },
    chefs: [
      {
        name: "Mutaro Balde",
        description:
          "Previously at Smith's Restaurant in Covent Garden and The Globe in Notting Hill.",
      },
    ],
    image: require("../../../public/images/restaurants/london/restaurants/stjohn.jpg"),
    description:
      "Renowned for its 'nose-to-tail' dining philosophy, emphasizing the use of the whole animal in traditional British dishes",
    website: "https://stjohnrestaurant.com/",
  },
  {
    name: "Core",
    coordinates: {
      latitude: 51.5165,
      longitude: -0.2055,
    },
    ratings: {
      michelin: 3,
    },
    chefs: [
      {
        name: "Clare Smyth",
        description:
          "First British female chef to run a restaurant with three Michelin stars. Previously at Restaurant Gordon Ramsay as Chef Patron and Alain Ducasse's Le Louis XV in Monte Carlo.",
      },
    ],
    image: require("../../../public/images/restaurants/london/restaurants/core.jpg"),
    description:
      "An elegant fine-dining restaurant in Notting Hill, emphasizing natural, sustainable food with exquisite dishes using the best British produce.",
    website: "https://corebyclaresmyth.com/",
  },
  {
    name: "Hawksmoor Air Street",
    coordinates: {
      latitude: 51.509758,
      longitude: -0.13684,
    },
    chefs: [
      {
        name: "Matt Brown",
        description: "Previously at Restaurant Gordon Ramsay as Head Chef.",
      },
    ],
    image: require("../../../public/images/restaurants/london/restaurants/hawksmoor.jpg"),
    description:
      "An Art Deco-inspired steak and seafood restaurant near Piccadilly Circus, offering a menu equally weighted between the very best steak and sustainable seafood.",
    website: "https://thehawksmoor.com/locations/airstreet/",
  },
  {
    name: "KOL",
    coordinates: {
      latitude: 51.5165,
      longitude: -0.1578,
    },
    ratings: {
      michelin: 1,
    },
    chefs: [
      {
        name: "Santiago Lastra",
        description:
          "Chef Patron of KOL. Previously at Mugaritz in San Sebastian and René Redzepi at Noma's Mexico residency.",
      },
    ],
    image: require("../../../public/images/restaurants/london/restaurants/kol.jpg"),
    description:
      "A modern Mexican restaurant in Marylebone, London, championing wild food and seasonality by blending Mexican culinary traditions with British ingredients.",
    website: "https://kolrestaurant.com/",
  },
  {
    name: "BAO Soho",
    coordinates: {
      latitude: 51.5135,
      longitude: -0.1355,
    },
    ratings: {
      michelin: "Bib",
    },
    image: require("../../../public/images/restaurants/london/restaurants/bao.jpg"),
    description:
      "A Taiwanese-inspired restaurant in Soho, London, renowned for its steamed buns (bao) and small plates, offering a modern take on Taiwanese street food.",
    website: "https://baolondon.com/restaurant/bao-soho",
  },
  {
    name: "Kitchen Table",
    coordinates: {
      latitude: 51.5205,
      longitude: -0.1355,
    },
    ratings: {
      michelin: 2,
    },
    chefs: [
      {
        name: "James Knappett",
        description:
          "Previously at Restaurant Gordon Ramsay, Per Se, and Noma.",
      },
    ],
    image: require("../../../public/images/restaurants/london/restaurants/kitchen-table.jpg"),
    description:
      "An intimate dining experience in Fitzrovia, London, where guests are seated around a horseshoe-shaped counter, observing the chefs prepare a daily-changing tasting menu focused on British ingredients.",
    website: "https://kitchentablelondon.co.uk/",
  },
  {
    name: "Brat",
    coordinates: {
      latitude: 51.5241,
      longitude: -0.0761,
    },
    ratings: {
      michelin: 1,
    },
    chefs: [
      {
        name: "Tomos Parry",
        description:
          "Previously head chef at Kitty Fisher's in Mayfair and worked at Climpson's Arch in London Fields.",
      },
    ],
    image: require("../../../public/images/restaurants/london/restaurants/brat.jpg"),
    description:
      "A Michelin-starred restaurant in Shoreditch, London, inspired by the cooking techniques of the Basque country, specializing in wood-fired dishes with a focus on grilled meats and fish, particularly whole turbot.",
    website: "https://bratrestaurant.co.uk/",
  },
  {
    name: "Humble Chicken",
    coordinates: {
      latitude: 51.5139868,
      longitude: -0.1318371,
    },
    ratings: {
      michelin: 2,
    },
    chefs: [
      {
        name: "Angelo Sato",
        description: "Previously Eleven Madison Park, Restaurant Gordon Ramsay",
      },
    ],
    image: require("../../../public/images/restaurants/london/restaurants/humble-chicken.jpg"),
    description:
      "A Japanese-inspired restaurant in Soho, London, offering an innovative tasting menu that blends Japanese and European influences in a theatrical kitchen setting.",
    website: "https://www.humblechickenuk.com/",
  },
  {
    name: "Gymkhana",
    coordinates: {
      latitude: 51.508556,
      longitude: -0.141556,
    },
    ratings: {
      michelin: 2,
    },
    chefs: [
      {
        name: "Sid Ahuja",
        description:
          "Previously trained with Taj Hotels and the Oberoi group in India, including at the Oberoi Udaivilas.",
      },
    ],
    image: require("../../../public/images/restaurants/london/restaurants/gymkhana.jpg"),
    description:
      "An Indian restaurant in Mayfair, London, inspired by the elite clubs of colonial India, offering refined North Indian cuisine in a setting reminiscent of the Raj era.",
    website: "https://gymkhanalondon.com/",
  },
  {
    name: "Mountain",
    coordinates: {
      latitude: 51.5125,
      longitude: -0.1397,
    },
    ratings: {
      michelin: 1,
    },
    chefs: [
      {
        name: "Tomos Parry",
        description:
          "Previously head chef at Kitty Fisher's in Mayfair and founder of the Michelin-starred Brat in Shoreditch.",
      },
    ],
    image: require("../../../public/images/restaurants/london/restaurants/mountain.jpg"),
    description:
      "A Soho restaurant blending Spanish and Welsh culinary traditions, focusing on wood-fired cooking techniques and high-quality, seasonal British produce.",
    website: "https://mountainbeakstreet.com/",
  },
  {
    name: "Alain Ducasse at The Dorchester",
    coordinates: {
      latitude: 51.5074,
      longitude: -0.1527,
    },
    ratings: {
      michelin: 3,
    },
    chefs: [
      {
        name: "Jean-Philippe Blondet",
        description:
          "Executive Chef at Alain Ducasse at The Dorchester. Previously worked at Spoon at Sanderson in London and Le Louis XV in Monaco.",
      },
    ],
    image: require("../../../public/images/restaurants/london/restaurants/alain-ducasse.jpg"),
    description:
      "A prestigious French restaurant located within The Dorchester Hotel in Mayfair, London, offering contemporary French cuisine with an emphasis on seasonal British and French ingredients. Renowned for its elegant setting and exceptional service.",
    website: "https://www.alainducasse-dorchester.com/",
  },
  {
    name: "The Fat Duck",
    coordinates: {
      latitude: 51.5095,
      longitude: -0.701,
    },
    ratings: {
      michelin: 3,
    },
    chefs: [
      {
        name: "Heston Blumenthal",
        description:
          "A self-taught chef renowned for pioneering molecular gastronomy. Previously worked in various restaurants in France to gain experience before opening The Fat Duck in 1995.",
      },
    ],
    image: require("../../../public/images/restaurants/london/restaurants/the-fat-duck.jpg"),
    description:
      "A three-Michelin-starred restaurant in Bray, Berkshire, celebrated for its innovative and multi-sensory approach to cooking, offering a tasting menu that explores the boundaries of traditional cuisine.",
    website: "https://thefatduck.co.uk/",
  },
  {
    name: "St. JOHN Bread and Wine",
    coordinates: {
      latitude: 51.5195,
      longitude: -0.0731,
    },
    ratings: {
      michelin: "Bib",
    },
    chefs: [
      {
        name: "Farokh Talati",
        description:
          "Head Chef at St. JOHN Bread and Wine. Previously worked at various renowned establishments, bringing a wealth of experience to the kitchen.",
      },
    ],
    image: require("../../../public/images/restaurants/london/restaurants/bread-and-wine.jpg"),
    description:
      "A sister restaurant to the original St. JOHN, located in Spitalfields, London, emphasizing the 'nose-to-tail' dining philosophy with a focus on traditional British dishes and an in-house bakery.",
    website: "https://stjohnrestaurant.com/a/restaurants/bread-and-wine",
  },
  {
    name: "Kiln",
    coordinates: {
      latitude: 51.5125,
      longitude: -0.1355,
    },
    ratings: {
      michelin: "Bib",
    },
    chefs: [
      {
        name: "Meedu Saad",
        description:
          "Head Chef at Kiln. Previously Senior Sous Chef at Smoking Goat in Shoreditch.",
      },
    ],
    image: require("../../../public/images/restaurants/london/restaurants/kiln.jpg"),
    description:
      "A vibrant Soho restaurant offering Thai-inspired cuisine, focusing on wood-fired dishes influenced by the flavors of northern Thailand, Burma, and Laos.",
    website: "https://kilnsoho.com/",
  },
  {
    name: "Hoppers",
    coordinates: {
      latitude: 51.5135,
      longitude: -0.1318,
    },
    ratings: {
      michelin: "Bib",
    },
    image: require("../../../public/images/restaurants/london/restaurants/hoppers.jpg"),
    description:
      "A vibrant restaurant in Soho, London, inspired by Sri Lanka's village toddy shops, offering hoppers, dosas, kothus, and roasts, complemented by a tropical drinks list.",
    website: "https://www.hopperslondon.com/soho/",
  },
];
