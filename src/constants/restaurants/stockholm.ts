type MichelinRating = 1 | 2 | 3 | "Bib";

interface Chef {
  name: string;
  description: string | null;
}

interface Ratings {
  michelin?: MichelinRating;
  "m&o"?: number;
}

interface Coordinates {
  longitude: number;
  latitude: number;
}

interface Restaurant {
  name: string;
  coordinates: Coordinates;
  image: string;
  ratings?: Ratings;
  chefs?: Chef[];
  description: string;
  website: string;
}

export const RESTAURANTS: Restaurant[] = [
  {
    name: "Babette",
    coordinates: {
      longitude: 18.0615475,
      latitude: 59.344882,
    },
    image:
      "https://production-data.worldofmouth.app/images/d335a283-dffe-40ce-8877-8a4fb4e88152-1080x1080.jpg",
    ratings: {
      michelin: "Bib",
      "m&o": 8,
    },
    chefs: [
      {
        name: "Olle T Cellton",
        description: "Previously at restaurant Niklas",
      },
      {
        name: "Fredrik Lundberg",
        description: "Previously at restaurant Gaston",
      },
    ],
    description:
      "Wood-fired pizzas and small plates with Southern European influences in an intimate and lively setting.",
    website: "https://babette.se/",
  },
  {
    name: "Aira",
    coordinates: {
      longitude: 18.1235938,
      latitude: 59.3208925,
    },
    image:
      "https://www.sweco.se/wp-content/uploads/sites/3/2022/05/Entre-Restaurang-Aira.jpg",
    ratings: {
      michelin: 2,
    },
    chefs: [
      {
        name: "Tommy Myllymäki",
        description: "Previously at restaurant Niklas",
      },
      {
        name: "Pi Le",
        description: "Gold winner with the junior national chef team",
      },
    ],
    description:
      "Seasonal tasting menu that combines Nordic ingredients with global techniques, served in a strikingly designed space near Royal Djurgården.",
    website: "https://babette.se/",
  },
  {
    name: "Lilla Ego",
    coordinates: {
      longitude: 18.0454852,
      latitude: 59.3436373,
    },
    ratings: {
      michelin: "Bib",
    },
    image:
      "https://res.cloudinary.com/anora/image/upload/t_HeroFullWidthImage-SM-SM/f_auto/folkofolk%2Flilla-ego",
    chefs: [
      {
        name: "Daniel Räms",
        description: null,
      },
      {
        name: "Tom Sjöstedt",
        description: null,
      },
    ],
    description:
      "Modernized Swedish classics, featuring robust and well-composed dishes that deliver on flavor.",
    website: "https://babette.se/",
  },
  {
    name: "Yono Sabo",
    coordinates: {
      longitude: 18.0618303,
      latitude: 59.3392377,
    },
    ratings: {
      "m&o": 6,
    },
    image:
      "https://static.thatsup.co/content/img/place/stockholm/yo/666016d6-da4c-11ee-b935-86d7fdd99ed5/yono-sabo-6038bb97.jpg?1714393327",
    description:
      "Mexican street food bistro offering a menu featuring tacos, burritos, and bowls, with influences from Asian cuisines, served in a cozy and vibrant atmosphere.",
    website: "https://www.yonosabo.se",
  },
  {
    name: "Rolfs Kök",
    coordinates: {
      longitude: 18.056967,
      latitude: 59.3387009,
    },
    ratings: {
      "m&o": 6,
    },
    chefs: [
      {
        name: "Johan Jureskog",
        description: null,
      },
      {
        name: "Klas Ljungquist",
        description: null,
      },
    ],
    image:
      "https://thatsup.website/storage/77/2703/responsive-images/FUJI7845___media_library_original_6240_4160.jpg",
    description:
      "Modern bistro focusing on simplicity and high-quality ingredients, featuring dishes like confit pork belly and reindeer schnitzel.",
    website: "https://rolfskok.se/",
  },
  {
    name: "Brasseri Astoria",
    coordinates: {
      longitude: 18.0772553,
      latitude: 59.3348538,
    },
    ratings: {
      "m&o": 6.5,
    },
    chefs: [
      {
        name: "Björn Frantzén",
        description: "Frantzén, Zén, FZN",
      },
    ],
    image: "https://www.visitstockholm.com/media/images/astoria.width-1440.jpg",
    description:
      "Housed in the meticulously restored former Astoria Cinema from the 1870s, Brasserie Astoria offers a menu of modern brasserie classics with occasional Asian influences, utilizing quality produce.",
    website: "https://www.brasserieastoria.com/",
  },
  {
    name: "Miyakodori",
    coordinates: {
      longitude: 18.0539402,
      latitude: 59.3368766,
    },
    ratings: {
      "m&o": 8.5,
    },
    chefs: [
      {
        name: "Max Westerlund Inazawa",
        description: "Previously at Frantzén",
      },
      {
        name: "John Forsell",
        description: "Previously at Restaurang AG, Rolfs Kök",
      },
      {
        name: "Lars Brennwald",
        description: "Previously at Frantzén, Adam/Albin",
      },
    ],
    image:
      "https://thenordicnomad.com/wp-content/uploads/2022/12/TNN_Miyakodori_Stockholm_Sweden_01_.jpg",
    description:
      "Japanese izakaya featuring a variety of grilled skewers, including meat, fish, and vegetarian options, alongside small dishes like salmon sashimi and deep-fried kara-age chicken.",
    website: "https://miyakodori.se/",
  },
  {
    name: "Aloë",
    coordinates: {
      longitude: 17.9854555,
      latitude: 59.2842603,
    },
    image: "https://www.krogguiden.se/upload/images/image_3710_banner_w949.jpg",
    ratings: {
      michelin: 2,
      "m&o": 10,
    },
    chefs: [
      {
        name: "Daniel Höglander",
        description: null,
      },
      {
        name: "Niclas Jönsson",
        description: null,
      },
    ],
    description:
      "Tasting menu featuring the finest European ingredients prepared with global influences, resulting in intense flavors and original combinations",
    website: "http://aloerestaurant.se/",
  },
  {
    name: "Racamaca",
    coordinates: {
      longitude: 18.0638492,
      latitude: 59.3168579,
    },
    image:
      "https://racamaca.se/wp-content/uploads/sites/2838/2024/04/RACAMACA-10.jpg",
    description:
      "Racamaca offers a menu inspired by Basque cuisine, featuring pintxos and small dishes such as garbanzo beans, boquerones, and chistorra sausage. The ambiance is intimate and lively, complemented by a curated selection of wines and beers.",
    website: "http://www.racamaca.se/",
  },
  {
    name: "Café Nizza",
    coordinates: {
      longitude: 18.086638,
      latitude: 59.3146593,
    },
    image:
      "https://static.bonniernews.se/ba/1ed0d15f-9abd-479d-ac82-169beff742d8.jpeg",
    description:
      "Offers a menu blending French and Italian culinary traditions, featuring dishes such as 'Fermentata cacio e pepe' and 'Agnolotti with ricotta, capers & taggiasca olives'.",
    website: "http://www.cafenizza.se/",
  },
  {
    name: "Woodstockholm",
    coordinates: {
      longitude: 18.0749719,
      latitude: 59.3177645,
    },
    ratings: {
      "m&o": 8,
    },
    image: "https://www.krogguiden.se/upload/images/image_2193_fb_w1200.jpg",
    description:
      "Offers a themed menu that changes every two months, focusing on organically produced food and wine. The ambiance is intimate and cozy, featuring handcrafted furnishings and a vibrant atmosphere.",
    website: "http://www.woodstockholm.com/",
  },
  {
    name: "Restaurang Slipen",
    coordinates: {
      longitude: 18.1016014,
      latitude: 59.3223377,
    },
    chefs: [
      {
        name: "David Zetterström",
        description: null,
      },
      {
        name: "Lotta Zetterström",
        description: null,
      },
    ],
    image: "https://www.krogguiden.se/upload/images/image_513_fb_w1200.jpg",
    description:
      "Menu inspired by European cuisine, featuring hearty and uncomplicated dishes such as oysters, tartare, bone-in beef, and cod loin.",
    website: "https://slipen.se/",
  },
  {
    name: "Restaurant AG",
    coordinates: {
      longitude: 18.0346802,
      latitude: 59.3352467,
    },
    ratings: {
      "m&o": 8,
    },
    chefs: [
      {
        name: "Johan Jureskog",
        description: "Rolfs Kök",
      },
      {
        name: "Klas Ljungqvist",
        description: "Rolfs Kök",
      },
    ],
    image:
      "https://thatsup.website/storage/75/2664/responsive-images/IMG_9740___media_library_original_5760_3840.jpg",
    description:
      "Renowned steakhouse specializing in premium meats, Restaurang AG offers a diverse selection of cuts, dry-aged in-house, complemented by classic side dishes.",
    website: "http://www.restaurangag.se/",
  },
  {
    name: "Adam/Albin",
    coordinates: {
      longitude: 18.066069,
      latitude: 59.3430723,
    },
    ratings: {
      michelin: 1,
    },
    chefs: [
      {
        name: "Adam Dahlberg",
        description: "Solen, MISSHUMASSHU",
      },
      {
        name: "Albin Wessman",
        description: "Solen, MISSHUMASSHU",
      },
    ],
    image:
      "https://media-cdn.tripadvisor.com/media/photo-s/1e/29/d1/c8/the-restaurant.jpg",
    description:
      "Offers a tasting menu that showcases luxury Nordic produce with global influences, featuring dishes like artichoke barigoule and mushroom chawanmushi.",
    website: "http://adamalbin.se",
  },
  {
    name: "Punk Royale",
    coordinates: {
      longitude: 18.0875824,
      latitude: 59.3154739,
    },
    ratings: {
      "m&o": 10,
    },
    chefs: [
      {
        name: "Joakim Almqvist",
        description: null,
      },
      {
        name: "Kalle Nilsson",
        description: null,
      },
    ],
    image:
      "https://carousel-london.com/wp-content/uploads/2024/03/Screen-Shot-2020-09-24-at-12.10.37-e1714380628333.png",
    description:
      "Offers a provocative tasting menu that blends luxury ingredients with playful presentation, featuring dishes like caviar with vodka shots and foie gras served in unconventional ways. ",
    website: "https://punkroyale.se/punk-royale-sthlm",
  },
  {
    name: "Barbro",
    coordinates: {
      longitude: 18.033092,
      latitude: 59.314362,
    },
    ratings: {
      "m&o": 7.5,
    },
    image:
      "https://bar-bro.se/wp-content/uploads/2023/01/UnderBarbro_lightroom-1-of-1-2.jpg",
    description:
      "Asian fusion offering a menu featuring sushi, dumplings, and other Asian-inspired dishes, all designed for sharing.",
    website: "http://bar-bro.se/",
  },
  {
    name: "Restaurang Hantverket",
    coordinates: {
      longitude: 18.0766794,
      latitude: 59.3414547,
    },
    chefs: [{ name: "Stefan Ekengren", description: null }],
    ratings: {
      "m&o": 8.5,
    },
    image:
      "https://thatsup.website/storage/222/14978/FUJI6540.jpg?v=1672238422",
    description:
      "The menu emphasizes seasonal Swedish ingredients, offering medium-sized dishes that blend rustic and elegant flavors.",
    website: "http://restauranghantverket.se/",
  },
  {
    name: "Celeste",
    coordinates: {
      longitude: 18.0573847,
      latitude: 59.3166183,
    },
    chefs: [
      { name: "Jonas Lagerström", description: "Etoile" },
      { name: "Rachel Wennemo", description: "Etoile" },
    ],
    ratings: {
      michelin: 2,
    },
    image:
      "https://svd.vgc.no/v2/images/69ff1819-6631-4381-8ccc-2238d3cb9f06?fit=crop&format=auto&h=551&q=80&upscale=true&w=980&s=409e062cdb647486fa20b043c466f3b916afd122",
    description:
      "Celeste offers a modern tasting menu that evolves with the seasons, showcasing precision and balance in each dish, such as their tartlet filled with Swedish beef tartare.",
    website: "http://www.celesterestaurant.se",
  },
  {
    name: "Persona",
    coordinates: {
      longitude: 18.0889679,
      latitude: 59.3331662,
    },
    chefs: [
      { name: "Louis Cespedes", description: "Previously at Frantzén" },
      { name: "Jonathan Nyström", description: "Previously at Frantzén" },
    ],
    image:
      "https://assets.yellowtrace.com.au/wp-content/uploads/2023/09/25180931/Erik-Bratsberg-Persona-Restaurant-Stockholm-Photo-Erik-Lefvander-Yellowtrace.jpg",
    description:
      "Modern cuisine with bold flavors, featuring both an à la carte menu and a fixed tasting menu that can be tailored based on guests' wine selections.",
    website: "https://www.personasthlm.com",
  },
  {
    name: "Coco & Carmen",
    coordinates: {
      longitude: 18.0912942,
      latitude: 59.333022,
    },
    image:
      "https://media-cdn.tripadvisor.com/media/photo-s/13/80/35/d6/baren.jpg",
    description:
      "From the team behind Punk Royale, Coco & Carmen offers a fixed tasting menu that blends European cuisine with Scandinavian and Japanese influences.",
    website: "https://cococarmen.se",
  },
  {
    name: "MISSHUMASSHU",
    coordinates: {
      longitude: 18.0738881,
      latitude: 59.3338151,
    },
    chefs: [
      {
        name: "Adam Dahlberg",
        description: "Adam/Albin, Solen",
      },
      {
        name: "Albin Wessman",
        description: "Adam/Albin, Solen",
      },
    ],
    image:
      "https://static.thatsup.co/content/img/place/m/i/misshumasshu-30.jpg",
    description:
      "Fusion menu blending Japanese flavors with international street food, featuring dishes like skewers, ramen, and creative small plates.",
    website: "https://misshumasshu.se",
  },
  {
    name: "E&G",
    coordinates: {
      longitude: 18.0607129,
      latitude: 59.3479443,
    },
    image:
      "https://images.squarespace-cdn.com/content/v1/6007514bd4535b44c9ff874b/1611092386305-UQ4PCHVC5XUO33IKD9XY/1a2e130f-1bfe-51e3-92c0-b91a4395c1f0.jpeg",
    description:
      "Rustic European-inspired dishes that change regularly to highlight seasonal ingredients. Offerings range from snacks and small plates to more substantial dishes, catering to both vegetarians and meat lovers.",
    website: "http://www.eochg.se/",
  },
  {
    name: "Bar Nîmes",
    coordinates: {
      longitude: 18.0654578,
      latitude: 59.342484,
    },
    chefs: [
      {
        name: "Kim Öhman",
        description: "Previously at Farang",
      },
    ],
    image:
      "https://thatsup.website/storage/289/22186/Liljeholmen_FUJI0243.jpg?v=1693204893",
    description:
      "Southern French and Italian cuisines, featuring classic dishes such as Vitello Tonnato, Panzanella, and Tajarin.",
    website: "http://bar-nimes.se/",
  },
];
