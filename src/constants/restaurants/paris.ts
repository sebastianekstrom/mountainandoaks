import type { Restaurant } from "./types";

export const RESTAURANTS: Restaurant[] = [
  {
    name: "Pages",
    coordinates: {
      latitude: 48.8701,
      longitude: 2.2931,
    },
    ratings: {
      michelin: 1,
    },
    chefs: [
      {
        name: "Ryuji Teshima",
        description:
          "Previously trained under Hugo Desnoyer and worked at L'Astrance and Passage 53 in Paris.",
      },
    ],
    description:
      "Pages offers a seasonal tasting menu that blends French gastronomy with Japanese precision. Signature offerings include Wagyu beef, seafood from Normandy and Brittany, and vegetables sourced from local producers.",
    website: "https://www.restaurantpages.fr/",
    image: require("../../../public/images/restaurants/paris/restaurants/pages.jpg"),
  },
  {
    name: "Clamato",
    coordinates: {
      latitude: 48.8516,
      longitude: 2.3807,
    },
    chefs: [
      {
        name: "Bertrand Grébaut",
        description:
          "Previously at L'Arpège under Alain Passard and is also known for his work at Septime.",
      },
      {
        name: "Théo Pourriat",
        description:
          "Previously collaborated with Bertrand Grébaut at Septime.",
      },
    ],
    description:
      "Offering a daily-changing menu of small plates that highlight fresh, sustainably sourced seafood. Known for its casual atmosphere, natural wines, and signature dishes like maple syrup tart.",
    website: "https://www.clamato-charonne.fr/en/",
    image: require("../../../public/images/restaurants/paris/restaurants/clamato.jpg"),
  },
  {
    name: "La Jacobine",
    coordinates: {
      latitude: 48.853,
      longitude: 2.3407,
    },
    description:
      "A cozy bistro tucked away in a historic Parisian passage, offering classic French cuisine such as coq au vin, boeuf bourguignon, and French onion soup in an intimate setting.",
    website: "https://lajacobine.fr/",
    image: require("../../../public/images/restaurants/paris/restaurants/la-jacobine.jpg"),
  },
  {
    name: "Septime",
    coordinates: {
      latitude: 48.8531,
      longitude: 2.3806,
    },
    ratings: {
      michelin: 1,
    },
    chefs: [
      {
        name: "Bertrand Grébaut",
        description:
          "Previously trained under Alain Passard at L'Arpège and earned a Michelin star at L'Agapé.",
      },
    ],
    description:
      "A modern Parisian restaurant in the 11th arrondissement, offering seasonal French cuisine with a focus on sustainability and local sourcing. Known for its minimalist, industrial-chic interior and a commitment to reducing food waste.",
    website: "https://www.septime-charonne.fr/en/",
    image: require("../../../public/images/restaurants/paris/restaurants/septime.jpg"),
  },
  {
    name: "Plénitude",
    coordinates: {
      latitude: 48.8595,
      longitude: 2.3411,
    },
    ratings: {
      michelin: 3,
    },
    chefs: [
      {
        name: "Arnaud Donckele",
        description:
          "Previously held three Michelin stars at La Vague d'Or in Saint-Tropez.",
      },
    ],
    description:
      "A three-Michelin-starred restaurant located within the Cheval Blanc Paris hotel, offering a creative French cuisine that emphasizes sauces and seasonal ingredients in an intimate setting overlooking the Seine.",
    website:
      "https://www.chevalblanc.com/en/maison/paris/restaurants-and-bars/plenitude/",
    image:
      require("../../../public/images/restaurants/paris/restaurants/plenitude.jpg"),
  },
  {
    name: "La Tour d'Argent",
    coordinates: {
      latitude: 48.8498,
      longitude: 2.3549,
    },
    ratings: {
      michelin: 1,
    },
    chefs: [
      {
        name: "Yannick Franques",
        description:
          "Previously held positions at Château Saint-Martin & Spa and Hôtel Hermitage Monte-Carlo.",
      },
    ],
    description:
      "A historic Parisian restaurant established in 1582, renowned for its pressed duck and panoramic views of the Seine and Notre-Dame. La Tour d'Argent combines classic French cuisine with a rich heritage, offering an elegant dining experience.",
    website: "https://tourdargent.com/",
    image: require("../../../public/images/restaurants/paris/restaurants/la-tour-d-argent.jpg"),
  },
  {
    name: "Le Taillevent",
    coordinates: {
      latitude: 48.8742,
      longitude: 2.3006,
    },
    ratings: {
      michelin: 2,
    },
    chefs: [
      {
        name: "Giuliano Sperandio",
        description:
          "ExecuPreviously served as sous-chef at Le Clarence under Christophe Pelé.",
      },
    ],
    description:
      "Le Taillevent offers refined French haute cuisine, emphasizing seasonal ingredients and classic techniques. Renowned for its impeccable service and an extensive wine cellar featuring over 2,800 selections.",
    website: "https://www.letaillevent.com/en/home/",
    image: require("../../../public/images/restaurants/paris/restaurants/le-taillevent.jpg"),
  },
  {
    name: "Parcelles",
    coordinates: {
      latitude: 48.8622,
      longitude: 2.3551,
    },
    chefs: [
      {
        name: "Julien Chevallier",
        description: "Previously worked at Semilla, Justine, and Uno in Paris.",
      },
    ],
    description:
      "Parcelles offers refined French cuisine with a focus on seasonal, market-driven ingredients. Signature dishes include pressed pork shank, line-caught sea bass with spelt risotto and smoked eel sauce, and a dark chocolate tart with caramelized pecans.",
    website: "https://www.parcelles-paris.fr/",
    image: require("../../../public/images/restaurants/paris/restaurants/parcelles.jpg"),
  },
  {
    name: "Chez L'Ami Jean",
    coordinates: {
      latitude: 48.8593,
      longitude: 2.3062,
    },
    chefs: [
      {
        name: "Stéphane Jégo",
        description:
          "Previously worked for 12 years under Yves Camdeborde at La Régalade in Paris.",
      },
    ],
    description:
      "A lively Parisian bistro in the 7th arrondissement, known for its hearty Basque-inspired cuisine and generous portions. Signature dishes include Parmesan soup, veal cheek confit, and the renowned rice pudding. The atmosphere is convivial, with communal seating.",
    website: "https://lamijean.fr/",
    image: require("../../../public/images/restaurants/paris/restaurants/chez-lami-jean.jpg"),
  },
  {
    name: "Epicure",
    coordinates: {
      latitude: 48.8722,
      longitude: 2.3145,
    },
    ratings: {
      michelin: 3,
    },
    chefs: [
      {
        name: "Arnaud Faye",
        description:
          "Previously held two Michelin stars at Château de la Chèvre d'Or and earned the title Meilleur Ouvrier de France in 2019.",
      },
    ],
    description:
      "Offering refined French cuisine that emphasizes seasonal ingredients and elegant presentation. The dining room features Louis XVI furnishings and overlooks a tranquil French-style garden.",
    website:
      "https://www.oetkercollection.com/hotels/le-bristol-paris/restaurants-bar/epicure/",
    image: require("../../../public/images/restaurants/paris/restaurants/epicure.jpg"),
  },
  {
    name: "Le Bon Georges",
    coordinates: {
      latitude: 48.8791,
      longitude: 2.3375,
    },
    chefs: [
      {
        name: "Loïc Lobet",
        description:
          "Previously held positions at esteemed establishments, bringing a wealth of experience to the kitchen.",
      },
    ],
    description:
      "Offering a daily-changing chalkboard menu that emphasizes high-quality, seasonal ingredients. Signature dishes include steak tartare, côte de boeuf from Polmard, and oeufs mimosa with bonito flakes.",
    website: "https://www.lebongeorges.com/",
    image: require("../../../public/images/restaurants/paris/restaurants/le-bon-georges.jpg"),
  },
  {
    name: "Le George",
    coordinates: {
      latitude: 48.8687,
      longitude: 2.3006,
    },
    ratings: {
      michelin: 1,
    },
    chefs: [
      {
        name: "Simone Zanoni",
        description:
          "Previously held positions at Gordon Ramsay's three-Michelin-starred restaurant in London and the two-starred Gordon Ramsay au Trianon in Versailles.",
      },
    ],
    description:
      "A Michelin-starred restaurant within the Four Seasons Hotel George V, offering a modern Mediterranean menu that emphasizes light, shareable dishes inspired by the French Riviera and Italy.",
    website: "https://www.fourseasons.com/paris/dining/restaurants/le_george/",
    image: require("../../../public/images/restaurants/paris/restaurants/le-george.jpg"),
  },
  {
    name: "Clown Bar",
    coordinates: {
      latitude: 48.8631,
      longitude: 2.3706,
    },
    chefs: [
      {
        name: "Sota Atsumi",
        description:
          "Clown Bar, Saturne, Toyo, and Michel Troisgros in Roanne.",
      },
    ],
    description:
      "A historic bistro near Paris's Cirque d’Hiver, Clown Bar features Belle Époque interiors with whimsical clown-themed ceramic tiles. The menu offers inventive French cuisine with Japanese influences, including dishes like veal brain in tosazu broth and foie gras pithiviers. The restaurant is also noted for its selection of natural wines.",
    website: "https://www.clown-bar-paris.fr/",
    image: require("../../../public/images/restaurants/paris/restaurants/clown-bar.jpg"),
  },
  {
    name: "L'Arpège",
    coordinates: {
      latitude: 48.855701,
      longitude: 2.317,
    },
    ratings: {
      michelin: 3,
    },
    chefs: [
      {
        name: "Alain Passard",
        description:
          "Previously worked at Le Lion d'Or, La Chaumière, and L'Archestrate under Alain Senderens.",
      },
    ],
    description:
      "Renowned for its vegetable-focused cuisine sourced from the chef's own organic gardens. L'Arpège offers a seasonal tasting menu that highlights the natural flavors of produce, reflecting Chef Passard's commitment to sustainability and culinary artistry.",
    website: "https://www.alain-passard.com/",
    image: require("../../../public/images/restaurants/paris/restaurants/larpege.jpg"),
  },
  {
    name: "Kei",
    coordinates: {
      latitude: 48.8647,
      longitude: 2.3429,
    },
    ratings: {
      michelin: 3,
    },
    chefs: [
      {
        name: "Kei Kobayashi",
        description:
          "Previously worked at L'Auberge du Vieux Puits under Gilles Goujon, Le Prieuré Baumanière, Le Cerf, and Alain Ducasse's Plaza Athénée in Paris.",
      },
    ],
    description:
      "Kei offers a harmonious blend of French haute cuisine and Japanese aesthetics. Chef Kobayashi's dishes are known for their precision, elegance, and seasonal ingredients, reflecting his unique culinary vision.",
    website: "https://restaurant-kei.fr/en/",
    image: require("../../../public/images/restaurants/paris/restaurants/kei.jpg"),
  },
  {
    name: "Restaurant A.T.",
    coordinates: {
      latitude: 48.8466,
      longitude: 2.3522,
    },
    ratings: {
      michelin: 1,
    },
    chefs: [
      {
        name: "Atsushi Tanaka",
        description:
          "Chef-owner of Restaurant A.T. Previously trained under Pierre Gagnaire and worked in Spain and Scandinavia before establishing his own restaurant in Paris.",
      },
    ],
    description:
      "A minimalist dining venue in Paris's Latin Quarter, offering a single seasonal tasting menu that blends French technique with Japanese aesthetics. Chef Tanaka's dishes are known for their artistic presentation and focus on natural flavors.",
    website: "https://www.atsushitanaka.com/",
    image: require("../../../public/images/restaurants/paris/restaurants/restaurant-at.jpg"),
  },
  {
    name: "Maison",
    coordinates: {
      latitude: 48.8625,
      longitude: 2.3783,
    },
    chefs: [
      {
        name: "Sota Atsumi",
        description:
          "Clown Bar, Saturne, Toyo, and Michel Troisgros in Roanne.",
      },
    ],
    description:
      "A refined restaurant in Paris's 11th arrondissement, offering a seasonal tasting menu that blends French culinary techniques with Japanese aesthetics. The intimate setting features an open kitchen and a communal eight-meter-long wooden table.",
    website: "https://en.maison-sota.com/",
    image: require("../../../public/images/restaurants/paris/restaurants/maison.jpg"),
  },
  {
    name: "Le Chateaubriand",
    coordinates: {
      latitude: 48.8651,
      longitude: 2.3707,
    },
    chefs: [
      {
        name: "Iñaki Aizpitarte",
        description:
          "Previously worked at La Famille in Montmartre and is known for pioneering the bistronomy movement in Paris.",
      },
    ],
    description:
      "A trailblazing neo-bistro that offers a no-choice tasting menu that changes daily, showcasing inventive dishes with bold flavor combinations. The restaurant is renowned for its unpretentious atmosphere and natural wine selection.",
    website: "https://www.lechateaubriand.net/",
    image: require("../../../public/images/restaurants/paris/restaurants/le-chateaubriand.jpg"),
  },
  {
    name: "Amâlia",
    coordinates: {
      latitude: 48.868,
      longitude: 2.3702,
    },
    ratings: {
      michelin: 1,
    },
    chefs: [
      {
        name: "Eugenio Anfuso",
        description:
          "Previously worked at L'Astrance and L'Ambroisie in Paris, and collaborated with Pierre Gagnaire, Pascal Barbot, and Bernard Pacaud.",
      },
    ],
    description:
      "Offering a modern reinterpretation of French haute cuisine with Italian influences. Chefs Anfuso and Spurio craft seasonal tasting menus that highlight refined flavors and artistic presentation in an elegant, intimate setting.",
    website: "https://amaliarestaurant.com/en",
    image: require("../../../public/images/restaurants/paris/restaurants/amalia.jpg"),
  },
];
