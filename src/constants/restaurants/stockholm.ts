import type { Restaurant } from "./types";

export const RESTAURANTS: Restaurant[] = [
  {
    name: "Bar Agrikultur",
    coordinates: {
      longitude: 18.0833116,
      latitude: 59.3128813,
    },
    ratings: {
      michelin: "Bib",
      "m&o": 9,
    },
    chefs: [
      {
        name: "Filip Fastén",
        description: "Winner of the Swedish 'Chef of the year'",
      },
      {
        name: "Joel Åhlin",
        description: "Previously at Agrikultur",
      },
    ],
    image: require("../../../public/images/restaurants/stockholm/restaurants/agrikultur.jpg"),
    description:
      "Modern interpretations of classic Swedish small plates, using seasonal and locally sourced ingredients.",
    website: "https://baragrikultur.com",
  },
  {
    name: "Triton",
    coordinates: {
      longitude: 18.0662201,
      latitude: 59.3084311,
    },
    ratings: {
      michelin: "Bib",
      "m&o": 9,
    },
    chefs: [
      {
        name: "Erik Eriksson",
        description: "Previously at Gastrologik",
      },
      {
        name: "Adrià Lorenzo",
        description: "Previously at Ekstedt",
      },
      {
        name: "Patric Kling",
        description: "Previously at Oaxen Slip",
      },
    ],
    image: require("../../../public/images/restaurants/stockholm/restaurants/triton.jpg"),
    description:
      "Fixed three-course menu that changes frequently, focusing on high-quality ingredients, in a cozy, homely atmosphere.",
    website: "https://www.triton.restaurant",
  },
  {
    name: "Frantzén",
    coordinates: {
      longitude: 18.0585303,
      latitude: 59.3338871,
    },
    ratings: {
      michelin: 3,
      "m&o": 10,
    },
    chefs: [
      {
        name: "Björn Frantzén",
        description: "Zén, FZN, Brasserie Astoria",
      },
    ],
    image: require("../../../public/images/restaurants/stockholm/restaurants/frantzen.jpg"),
    description:
      "Menu rooted in Nordic cuisine with Japanese influences, providing an immersive dining experience.",
    website: "http://restaurantfrantzen.com",
  },
  {
    name: "Punk Royale",
    coordinates: {
      longitude: 18.0875824,
      latitude: 59.3154739,
    },
    ratings: {
      "m&o": 9,
    },
    chefs: [
      {
        name: "Joakim Almqvist",
        description: "Also at Coco & Carmen",
      },
    ],
    image: require("../../../public/images/restaurants/stockholm/restaurants/punk-royale.jpg"),
    description:
      "Offers a provocative tasting menu that blends luxury ingredients with playful presentation, featuring dishes like caviar with vodka shots and foie gras served in unconventional ways. ",
    website: "https://punkroyale.se/punk-royale-sthlm",
  },
  {
    name: "Miyakodori",
    coordinates: {
      longitude: 18.0539402,
      latitude: 59.3368766,
    },
    ratings: {
      "m&o": 8,
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
    image: require("../../../public/images/restaurants/stockholm/restaurants/miyakodori.jpg"),
    description:
      "Japanese izakaya featuring a variety of grilled skewers, including meat, fish, and vegetarian options, alongside small dishes like salmon sashimi and deep-fried kara-age chicken.",
    website: "https://miyakodori.se/",
  },
  {
    name: "Hantverket",
    coordinates: {
      longitude: 18.0766794,
      latitude: 59.3414547,
    },
    chefs: [
      { name: "Stefan Ekengren", description: "Previously at Görvälns Slott" },
    ],
    ratings: {
      "m&o": 8,
    },
    image: require("../../../public/images/restaurants/stockholm/restaurants/hantverket.jpg"),
    description:
      "The menu emphasizes seasonal Swedish ingredients, offering medium-sized dishes that blend rustic and elegant flavors.",
    website: "http://restauranghantverket.se/",
  },
  {
    name: "DoMa",
    coordinates: {
      longitude: 18.0810174,
      latitude: 59.3389821,
    },
    ratings: {
      "m&o": 8,
    },
    chefs: [
      {
        name: "Tea Malmegård",
        description: "Previously at Edsbacka Krog",
      },
      {
        name: "Viktor Lejon",
        description: "Previously at Edsbacka Krog",
      },
    ],
    image: require("../../../public/images/restaurants/stockholm/restaurants/doma.jpg"),
    description:
      "European and Scandinavian-inspired dishes in a cozy and lively atmosphere.",
    website: "https://www.doma.se/restaurangen",
  },
  {
    name: "Aloë",
    coordinates: {
      longitude: 17.9854555,
      latitude: 59.2842603,
    },
    image: require("../../../public/images/restaurants/stockholm/restaurants/aloe.jpg"),
    ratings: {
      michelin: 2,
      "m&o": 10,
    },
    chefs: [
      {
        name: "Daniel Höglander",
        description:
          "Previously at Ulla Winbladh, Villa Dagmar, Esperanto and Operakällaren",
      },
      {
        name: "Niclas Jönsson",
        description: "Previously at Black Milk Sushi and Villa Dagmar",
      },
    ],
    description:
      "Tasting menu featuring the finest European ingredients prepared with global influences, resulting in intense flavors and original combinations",
    website: "http://aloerestaurant.se/",
  },
  {
    name: "Främmat",
    coordinates: {
      longitude: 18.0453042,
      latitude: 59.3422275,
    },
    ratings: {
      "m&o": 8,
    },
    chefs: [
      {
        name: "Kalle Nilsson",
        description: "Bacchanale, Previously at Punk Royale",
      },
      {
        name: "Jonas Helgesson",
        description: "Bacchanale, Previously at Adam/Albin",
      },
    ],
    image: require("../../../public/images/restaurants/stockholm/restaurants/frammat.jpg"),
    description:
      "Dynamic menu rooted in classic French cuisine, complemented by innovative and creative dishes that evolve regularly.",
    website: "https://frammat.com",
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
    image: require("../../../public/images/restaurants/stockholm/restaurants/woodstockholm.jpg"),
    description:
      "Offers a themed menu that changes every two months, focusing on organically produced food and wine. The ambiance is intimate and cozy, featuring handcrafted furnishings and a vibrant atmosphere.",
    website: "http://www.woodstockholm.com/",
  },
  {
    name: "Restaurant AG",
    coordinates: {
      longitude: 18.0346802,
      latitude: 59.3352467,
    },
    ratings: {
      "m&o": 7,
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
    image: require("../../../public/images/restaurants/stockholm/restaurants/ag.jpg"),
    description:
      "Renowned steakhouse specializing in premium meats, Restaurang AG offers a diverse selection of cuts, dry-aged in-house, complemented by classic side dishes.",
    website: "http://www.restaurangag.se/",
  },
  {
    name: "Barbro",
    coordinates: {
      longitude: 18.033092,
      latitude: 59.314362,
    },
    ratings: {
      "m&o": 7,
    },
    image: require("../../../public/images/restaurants/stockholm/restaurants/barbro.jpg"),
    description:
      "Asian fusion offering a menu featuring sushi, dumplings, and other Asian-inspired dishes, all designed for sharing.",
    website: "http://bar-bro.se/",
  },
  {
    name: "Tegelbacken",
    coordinates: {
      longitude: 18.063029,
      latitude: 59.3283298,
    },
    ratings: {
      "m&o": 6,
    },
    chefs: [
      {
        name: "Markus Aujalay",
        description: "Chef of the Year (2004), previously at Operakällaren",
      },
    ],
    image: require("../../../public/images/restaurants/stockholm/restaurants/tegelbacken.jpg"),
    description:
      "European-inspired small plates in a warm, colorful setting with a touch of glamour.",
    website: "http://tegelbacken.com/",
  },
  {
    name: "Rolfs Kök",
    coordinates: {
      longitude: 18.056967,
      latitude: 59.3387009,
    },
    ratings: {
      "m&o": 7,
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
    image: require("../../../public/images/restaurants/stockholm/restaurants/rolfs-kok.jpg"),
    description:
      "Modern bistro focusing on simplicity and high-quality ingredients, featuring dishes like confit pork belly and reindeer schnitzel.",
    website: "https://rolfskok.se/",
  },
  {
    name: "Minh Mat",
    coordinates: {
      longitude: 18.0414414,
      latitude: 59.3407248,
    },
    ratings: {
      "m&o": 7,
    },
    image: require("../../../public/images/restaurants/stockholm/restaurants/minh-mat.jpg"),
    description:
      "Charming Vietnamese restaurant pairs nostalgic decor with a relaxed atmosphere, serving flavorful dishes like quality grilled prawns with a smooth cream of corn sauce.",
    website: "http://minhmat.se/",
  },
  {
    name: "Animo",
    coordinates: {
      longitude: 18.0643081,
      latitude: 59.3429635,
    },
    ratings: {
      "m&o": 9,
    },
    chefs: [
      {
        name: "Daniel Haynes",
        description: "Previously in the Swedish Culinary Team",
      },
      {
        name: "Anders Karlsson",
        description: "Previously in the Swedish Culinary Team",
      },
    ],
    image: require("../../../public/images/restaurants/stockholm/restaurants/animo.jpg"),
    description:
      "Dynamic à la carte menu that evolves with the seasons, emphasizing creativity and spontaneity. The innovative cocktail bar and curated wine list complement the dishes.",
    website: "https://www.animorestaurant.se",
  },
  {
    name: "Brasserie Astoria",
    coordinates: {
      longitude: 18.0772553,
      latitude: 59.3348538,
    },
    ratings: {
      "m&o": 6,
    },
    chefs: [
      {
        name: "Björn Frantzén",
        description: "Frantzén, Zén, FZN",
      },
    ],
    image: require("../../../public/images/restaurants/stockholm/restaurants/astoria.jpg"),
    description:
      "Housed in the meticulously restored former Astoria Cinema from the 1870s, Brasserie Astoria offers a menu of modern brasserie classics with occasional Asian influences, utilizing quality produce.",
    website: "https://www.brasserieastoria.com/",
  },
  {
    name: "Yono Sabo",
    coordinates: {
      longitude: 18.0618303,
      latitude: 59.3392377,
    },
    ratings: {
      "m&o": 5,
    },
    image: require("../../../public/images/restaurants/stockholm/restaurants/yonosabo.jpg"),
    description:
      "Mexican street food bistro offering a menu featuring tacos, burritos, and bowls, with influences from Asian cuisines, served in a cozy and vibrant atmosphere.",
    website: "https://www.yonosabo.se",
  },
  {
    name: "Babette",
    coordinates: {
      longitude: 18.0615475,
      latitude: 59.344882,
    },
    image: require("../../../public/images/restaurants/stockholm/restaurants/babette.jpg"),
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
    name: "Solen",
    coordinates: {
      longitude: 18.0778464,
      latitude: 59.2921392,
    },
    ratings: {
      "m&o": 8,
    },
    chefs: [
      {
        name: "Adam Dahlberg",
        description: "Adam/Albin, MISSHUMASSHU",
      },
      {
        name: "Albin Wessman",
        description: "Adam/Albin, MISSHUMASSHU",
      },
    ],
    image: require("../../../public/images/restaurants/stockholm/restaurants/solen.jpg"),
    description:
      "Fire-cooked dishes with influences from the Mediterranean, Middle East, and South America in a lively, casual setting.",
    website: "https://www.solen.se",
  },
  {
    name: "Voisine",
    ratings: {
      "m&o": 7,
    },
    coordinates: {
      longitude: 18.0904208,
      latitude: 59.3139738,
    },
    image: require("../../../public/images/restaurants/stockholm/restaurants/voisine.jpg"),
    description:
      "Modern bistro-style dishes with French and Swedish influences, complemented by an extensive wine list.",
    website: "http://www.voisine.se",
  },
  {
    name: "Tjoget",
    coordinates: {
      longitude: 18.0348638,
      latitude: 59.3161676,
    },
    ratings: {
      "m&o": 5,
    },
    image: require("../../../public/images/restaurants/stockholm/restaurants/tjoget.jpg"),
    description:
      "Hip eatery with a cafe & a wine bar serving Mediterranean-inspired dishes in an industrial ambiance.",
    website: "http://tjoget.com/",
  },
  {
    name: "Pat's Place",
    coordinates: {
      longitude: 18.089584,
      latitude: 59.3154548,
    },
    ratings: {
      "m&o": 8,
    },
    image: require("../../../public/images/restaurants/stockholm/restaurants/pats-place.jpg"),
    description:
      "Thai restaurant known for its inventive tapas-style dishes and Thai-inspired cocktails in a relaxed and friendly atmosphere.",
    website: "https://www.patsplace.se/",
  },
  {
    name: "Farang",
    coordinates: {
      longitude: 18.0625271,
      latitude: 59.3416893,
    },
    ratings: {
      "m&o": 7,
    },
    image: require("../../../public/images/restaurants/stockholm/restaurants/farang.jpg"),
    description:
      "Stylish eatery with an industrial-chic finish & Pan-Asian dishes cooked in an open kitchen.",
    website: "http://www.farang.se/",
  },
  {
    name: "Aira",
    coordinates: {
      longitude: 18.1235938,
      latitude: 59.3208925,
    },
    image: require("../../../public/images/restaurants/stockholm/restaurants/aira.jpg"),
    ratings: {
      michelin: 2,
      "m&o": 9,
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
    website: "https://aira.se/",
  },
  {
    name: "Café Nizza",
    coordinates: {
      longitude: 18.086638,
      latitude: 59.3146593,
    },
    ratings: {
      "m&o": 7,
    },
    image: require("../../../public/images/restaurants/stockholm/restaurants/nizza.jpg"),
    description:
      "Offers a menu blending French and Italian culinary traditions, featuring dishes such as 'Fermentata cacio e pepe' and 'Agnolotti with ricotta, capers & taggiasca olives'.",
    website: "http://www.cafenizza.se/",
  },
  {
    name: "Det Arroganta Svinet",
    coordinates: {
      longitude: 18.1123574,
      latitude: 59.1489192,
    },
    ratings: {
      "m&o": 6,
    },
    image: require("../../../public/images/restaurants/stockholm/restaurants/arroganta-svinet.jpg"),
    description:
      "Texas-style barbecue, offering a casual and rustic dining experience with a focus on slow-cooked meats and smoky flavors.",
    website: "http://detarrogantasvinet.se/",
  },
  {
    name: "Funky Chicken",
    coordinates: {
      longitude: 18.1617267,
      latitude: 59.3167265,
    },
    ratings: {
      "m&o": 7,
    },
    image: require("../../../public/images/restaurants/stockholm/restaurants/funky-chicken.jpg"),
    description:
      "Ranked Sweden’s best burger spot for five years, serves expertly crafted smash burgers with a signature crispy crust, drawing long queues, especially in summer.",
    website: "http://funkychickenfoodtruck.se/",
  },
  {
    name: "Dashi",
    coordinates: {
      longitude: 18.0657924,
      latitude: 59.3426531,
    },
    ratings: {
      michelin: 1,
    },
    chefs: [
      {
        name: "Harry Jordås",
        description: null,
      },
      {
        name: "Nathan Turley",
        description: null,
      },
    ],
    image: require("../../../public/images/restaurants/stockholm/restaurants/dashi.jpg"),
    description:
      "Offers an 'osusume' tasting menu that highlights seasonal Swedish produce, with dishes featuring the eponymous dashi broth. The dining experience is complemented by a varied sake list, all within a minimalist setting that reflects both Nordic and Japanese design aesthetics.",
    website: "https://dashisthlm.se/",
  },

  {
    name: "Bord",
    coordinates: {
      longitude: 18.0568196,
      latitude: 59.3493788,
    },
    chefs: [
      {
        name: "Joel Aronsson",
        description: "Previously head chef at Fäviken",
      },
    ],
    image: require("../../../public/images/restaurants/stockholm/restaurants/bord.jpg"),
    description:
      "Mediterranean-inspired menu featuring seasonal, high-quality ingredients, with dishes like turbot from the wood-fired oven.",
    website: "http://bord.restaurant",
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
    image: require("../../../public/images/restaurants/stockholm/restaurants/lilla-ego.jpg"),
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
    website: "https://www.lillaego.com/",
  },
  {
    name: "Ekstedt",
    coordinates: {
      longitude: 18.0748854,
      latitude: 59.3367645,
    },
    ratings: {
      michelin: 1,
    },
    chefs: [
      {
        name: "Niklas Ekstedt",
        description: "Previously at El Bulli",
      },
    ],
    image: require("../../../public/images/restaurants/stockholm/restaurants/ekstedt.jpg"),
    description:
      "A unique dining experience where all dishes are prepared using traditional Nordic techniques over open flames, without the use of electricity or gas",
    website: "http://www.ekstedt.nu/",
  },
  {
    name: "Seafood Gastro",
    coordinates: {
      longitude: 18.0762633,
      latitude: 59.3293149,
    },
    ratings: {
      michelin: 1,
    },
    chefs: [
      {
        name: "Mathias Dahlgren",
        description: "Winner of Bocuse d'Or. Matsalen, Rutabaga and Bon Lloc.",
      },
    ],
    image: require("../../../public/images/restaurants/stockholm/restaurants/seafood.jpg"),
    description:
      "Exclusive tasting menu centered around premium aquatic ingredients, including fish, shellfish, seaweed, and seabirds, all prepared with skillful techniques and subtle Japanese influences.",
    website: "https://mdghs.se/en/seafood-gastro/",
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
    image: require("../../../public/images/restaurants/stockholm/restaurants/celeste.jpg"),
    description:
      "Celeste offers a modern tasting menu that evolves with the seasons, showcasing precision and balance in each dish, such as their tartlet filled with Swedish beef tartare.",
    website: "http://www.celesterestaurant.se",
  },
  {
    name: "Bar Montan",
    coordinates: {
      longitude: 18.0785809,
      latitude: 59.2924085,
    },
    chefs: [
      {
        name: "Johan Montan Ahlgren",
        description: null,
      },
      {
        name: "Öner Kulbay",
        description: null,
      },
      {
        name: "Max Duhs",
        description: null,
      },
    ],
    image: require("../../../public/images/restaurants/stockholm/restaurants/bar-montan.jpg"),
    description:
      "Modern European cuisine with a focus on seasonal and sustainable ingredients. The menu blends Nordic simplicity with Mediterranean flavors, featuring fresh seafood, grilled meats, and vibrant vegetable dishes.",
    website: "http://barmontan.com/",
  },
  {
    name: "RiRi",
    coordinates: {
      longitude: 18.0305846,
      latitude: 59.3153111,
    },
    chefs: [
      {
        name: "Elias Kvarning",
        description: "Previously at Ett Hem and Fäviken***",
      },
    ],
    image: require("../../../public/images/restaurants/stockholm/restaurants/riri.jpg"),
    description:
      "Mediterranean-inspired menu that changes frequently, with dishes prepared over an open flame.",
    website: "https://riri.restaurant/",
  },
  {
    name: "Washoku TOMO",
    coordinates: {
      longitude: 18.0598619,
      latitude: 59.318761,
    },
    chefs: [
      {
        name: "Tomoko Hayashi",
        description: null,
      },
    ],
    image: require("../../../public/images/restaurants/stockholm/restaurants/washoku.jpg"),
    description:
      "Omakase sushi kaiseki course, featuring approximately 16-17 servings, including small dishes, nigiri, soup, and dessert. The menu emphasizes seasonal ingredients, with seafood sourced globally, such as Spanish sea bass, Argentinian prawns, and Canadian black cod.",
    website: "https://www.washokutomo.se/",
  },
  {
    name: "Noema",
    coordinates: {
      longitude: 18.0644833,
      latitude: 59.3423098,
    },
    chefs: [
      {
        name: "Acki Kokotos",
        description: "Previously at Un poco and Balzac",
      },
    ],
    image: require("../../../public/images/restaurants/stockholm/restaurants/noema.jpg"),
    description:
      "Blends luxury and warmth in the iconic Wallenstam building, offering refined small plates and premium meats in a lively setting. Expertly crafted dishes and a vibrant atmosphere make it a top Stockholm dining spot.",
    website: "http://noemastockholm.se/",
  },
  {
    name: "Mormors Dumplings",
    coordinates: {
      longitude: 18.0853485,
      latitude: 59.3135728,
    },
    image: require("../../../public/images/restaurants/stockholm/restaurants/mormor.jpg"),
    description:
      "Features a variety of dumplings, hotpots, and traditional dishes like Kung Pao chicken, all served in a cozy and genuine atmosphere.",
    website:
      "https://www.instagram.com/explore/locations/7654195/mormors-dumplings/?hl=en",
  },
  {
    name: "Essence",
    coordinates: {
      longitude: 18.0057876,
      latitude: 59.332306,
    },
    chefs: [
      {
        name: "Stefan Taylor",
        description: null,
      },
    ],
    image: require("../../../public/images/restaurants/stockholm/restaurants/essence.jpg"),
    description:
      "A 10-seat chef's table concept, guests are served a set tasting menu that evolves daily, showcasing innovative dishes prepared in an open kitchen.",
    website: "http://www.restaurantessence.com/",
  },
  {
    name: "Ergo",
    coordinates: {
      longitude: 18.0809041,
      latitude: 59.3337489,
    },
    chefs: [
      {
        name: "Petter Johansson",
        description: "Previously at Frantzén, Per Se and Zén",
      },
    ],
    image: require("../../../public/images/restaurants/stockholm/restaurants/ergo.jpg"),
    description:
      "Modern fine dining experience with a seasonal 5-course evening menu and a 3-course prix fixe lunch menu, both showcasing French culinary techniques and seasonal ingredients.",
    website: "https://www.restaurantergo.se",
  },
  {
    name: "Freyja + Söder",
    coordinates: {
      longitude: 18.068535,
      latitude: 59.3198064,
    },
    chefs: [
      {
        name: "Emma Shields",
        description: "Previously at Djuret, Flickan, Volt and Oaxen",
      },
    ],
    image: require("../../../public/images/restaurants/stockholm/restaurants/freja.jpg"),
    description:
      "Swedish cuisine with international influences and features panoramic views of Stockholm in a vibrant atmosphere.",
    website: "https://freyjasoder.se/",
  },
  {
    name: "Ärla",
    coordinates: {
      longitude: 18.0705407,
      latitude: 59.3444745,
    },
    chefs: [
      {
        name: "Patric Blomquist",
        description: "Previously at Hybrid",
      },
      {
        name: "Lotta Karlsson",
        description: "Previously at Hybrid",
      },
    ],
    image: require("../../../public/images/restaurants/stockholm/restaurants/arla.jpg"),
    description:
      "Handcrafted dishes focusing on seasonal ingredients, blending fine dining quality with a cozy neighborhood bistro atmosphere.",
    website: "https://www.restaurangaerla.se/",
  },
  {
    name: "Racamaca",
    coordinates: {
      longitude: 18.0638492,
      latitude: 59.3168579,
    },
    image: require("../../../public/images/restaurants/stockholm/restaurants/racamaca.jpg"),
    description:
      "Racamaca offers a menu inspired by Basque cuisine, featuring pintxos and small dishes such as garbanzo beans, boquerones, and chistorra sausage. The ambiance is intimate and lively, complemented by a curated selection of wines and beers.",
    website: "http://www.racamaca.se/",
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
    image: require("../../../public/images/restaurants/stockholm/restaurants/persona.jpg"),
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
    image: require("../../../public/images/restaurants/stockholm/restaurants/coco-carmen.jpg"),
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
    image: require("../../../public/images/restaurants/stockholm/restaurants/misshumashu.jpg"),
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
    image: require("../../../public/images/restaurants/stockholm/restaurants/eg.jpg"),
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
    image: require("../../../public/images/restaurants/stockholm/restaurants/bar-nimes.jpg"),
    description:
      "Southern French and Italian cuisines, featuring classic dishes such as Vitello Tonnato, Panzanella, and Tajarin.",
    website: "http://bar-nimes.se/",
  },
  {
    name: "Brutalisten",
    coordinates: {
      longitude: 18.0674926,
      latitude: 59.3357663,
    },
    image: require("../../../public/images/restaurants/stockholm/restaurants/brutalisten.jpg"),
    description:
      "Offers a menu categorized into 'Orthodox Brutalist,' 'Brutalist,' and 'Semi-Brutalist' dishes, each adhering to varying degrees of minimalism by using single ingredients prepared with minimal or no additions.",
    website: "http://www.brutalisten.com/",
  },
  {
    name: "Nour",
    coordinates: {
      longitude: 18.0712029,
      latitude: 59.3356275,
    },
    chefs: [
      {
        name: "Sayan Isaksson",
        description: "Previously at Esperanto and Imouto",
      },
    ],
    image: require("../../../public/images/restaurants/stockholm/restaurants/nour.jpg"),
    description:
      "Contemporary fusion of Nordic and Japanese cuisines, utilizing seasonal Swedish ingredients to craft innovative tasting menus.",
    website: "http://www.restaurantnour.se/",
  },
  {
    name: "Chez Jolie",
    coordinates: {
      longitude: 18.0763805,
      latitude: 59.3339065,
    },
    chefs: [
      {
        name: "Mikael Einarsson",
        description: "Previously at Djuret and Astoria",
      },
    ],
    image: require("../../../public/images/restaurants/stockholm/restaurants/chez-jolie.jpg"),
    description:
      "Inspired by both the French countryside and metropolitan bistros, featuring classic dishes like oysters au gratin, crispy fried frogs' legs, pâté en croûte, and crêpe soufflé.",
    website: "https://chezjolie.se",
  },
  {
    name: "Rolfs Hav",
    coordinates: {
      longitude: 18.0568469,
      latitude: 59.3385233,
    },
    chefs: [
      {
        name: "Johan Jureskog",
        description: "Restaurang AG, Rolfs Kök",
      },
      {
        name: "Klas Ljungquist",
        description: "Restaurang AG, Rolfs Kök",
      },
    ],
    image: require("../../../public/images/restaurants/stockholm/restaurants/rolfs-hav.jpg"),
    description:
      "Specializing in fresh seafood, Rolfs Hav offers a menu featuring dishes like oysters, caviar, and Skagen, with a focus on cold preparations.",
    website: "https://www.rolfshav.se",
  },
  {
    name: "Forma",
    coordinates: {
      longitude: 18.0344602,
      latitude: 59.3161265,
    },
    image: require("../../../public/images/restaurants/stockholm/restaurants/forma.jpg"),
    description:
      "Combining French techniques with Asian and Swedish influences, focusing on seasonal and sustainably sourced ingredients.",
    website: "https://www.restaurangforma.se",
  },
  {
    name: "Tengu",
    coordinates: {
      longitude: 18.0694741,
      latitude: 59.3434181,
    },
    image: require("../../../public/images/restaurants/stockholm/restaurants/tengu.jpg"),
    description:
      "Japanese-inspired food in a minimalist setting. The menu includes small dishes like shiitake skewers, ramen, and hamachi crudo.",
    website: "http://tengu.se",
  },
  {
    name: "Adam/Albin",
    coordinates: {
      longitude: 18.0661549,
      latitude: 59.3430771,
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
    ratings: {
      michelin: 1,
    },
    image: require("../../../public/images/restaurants/stockholm/restaurants/adam-albin.jpg"),
    description:
      "Tasting menu that showcases luxury Nordic produce with global influences, featuring dishes like artichoke barigoule and mushroom chawanmushi.",
    website: "http://adamalbin.se",
  },
  {
    name: "Bacchanale",
    coordinates: {
      longitude: 18.0784967,
      latitude: 59.3077732,
    },
    chefs: [
      {
        name: "Kalle Nilsson",
        description: "Also at Främmat. Previously at Punk Royale",
      },
      {
        name: "Jonas Helgesson",
        description: "Also at Främmat. Previously at Adam/Albin",
      },
    ],
    image: require("../../../public/images/restaurants/stockholm/restaurants/bacchanale.jpg"),
    description: "French classics with a twist.",
    website: "https://www.bacchanalesthlm.com",
  },
  {
    name: "Surfers",
    coordinates: {
      longitude: 18.0712113,
      latitude: 59.3358149,
    },
    image: require("../../../public/images/restaurants/stockholm/restaurants/surfers.jpg"),
    description:
      "Chinese cuisine, with a focus on honoring and exploring one of the world’s oldest culinary traditions through a modern and heartfelt approach.",
    website: "https://surfersstockholm.se/en/",
  },
  {
    name: "Black Milk Gastro Bar",
    coordinates: {
      latitude: 59.3371,
      longitude: 18.0792,
    },
    chefs: [
      {
        name: "Julian Marti Melo",
        description:
          "Previously co-founded the two-Michelin-starred restaurant Aloë in Stockholm.",
      },
    ],
    description:
      "An omakase-style restaurant, offering an eight-course tasting menu that fuses Japanese tradition with global culinary artistry. The cuisine draws influences from South America, Asia, and Europe, utilizing modern techniques and luxury ingredients like Oscietra caviar and Périgord truffles.",
    website: "https://blackmilkgastrobar.com/",
    image: require("../../../public/images/restaurants/stockholm/restaurants/black-milk.jpg"),
  },
  {
    name: "Flippin' Burgers",
    coordinates: {
      latitude: 59.3406545,
      longitude: 18.0507107,
    },
    ratings: {
      "m&o": 6,
    },
    chefs: [
      {
        name: "Jon Widegren",
        description:
          "Traveled across the U.S. in 2010 to study American burger culture before opening Flippin' Burgers in 2012.",
      },
    ],
    description:
      "Renowned for its dedication to classic American-style hamburgers. Established in 2012, the restaurant emphasizes quality ingredients, sourcing meat from small-scale Swedish producers and buns from local bakeries.",
    website: "https://flippinburgers.se/",
    image:
      require("../../../public/images/restaurants/stockholm/restaurants/flippin-burgers.jpg"),
  },
  {
    name: "La Vecchia Signora",
    coordinates: {
      latitude: 59.3144578,
      longitude: 18.084841,
    },
    ratings: {
      "m&o": 6,
    },
    description:
      "Specializing in cuisine from the Piemonte region, the restaurant offers dishes like tajarin, agnolotti al plin, and vitello tonnato, complemented by an extensive Italian wine list.",
    website: "https://www.lavecchiasignora.se/",
    image:
      require("../../../public/images/restaurants/stockholm/restaurants/la-vecchia-signora.jpg"),
  },
  {
    name: "B.A.R.",
    coordinates: {
      latitude: 59.3299701,
      longitude: 18.077056,
    },
    ratings: {
      "m&o": 6,
    },
    chefs: [
      {
        name: "Henrik Norström",
        description:
          "Co-owner and creative leader of B.A.R. Previously opened Michelin-starred Lux Stockholm.",
      },
    ],
    description:
      "Seafood-focused restaurant in Stockholm's Blasieholmen district, offering a unique dining experience where guests can select fresh fish or meat from an in-house market counter. The chosen items are prepared to order, accompanied by a variety of sauces and sides.",
    website: "https://restaurangbar.se/en/",
    image:
      require("../../../public/images/restaurants/stockholm/restaurants/bar-blasieholmen.jpg"),
  },
  {
    name: "Ho's Kina",
    coordinates: {
      latitude: 59.315006,
      longitude: 18.0326057,
    },
    ratings: {
      "m&o": 5,
    },
    chefs: [
      {
        name: "Manne Ho",
        description:
          "Owner and head chef of Ho's Kina. Son of founder Shiu Tung Ho, who opened the restaurant in 1988 after relocating from Hong Kong to Sweden.",
      },
    ],
    description:
      "Ho's Kina is a family-owned Chinese restaurant located in Stockholm's Hornstull district. Established in 1988 by Shiu Tung Ho, the restaurant offers generous portions of rustic Chinese dishes inspired by Cantonese, Sichuan, and Shanghai cuisines.",
    website: "https://restauranghos.se/",
    image:
      require("../../../public/images/restaurants/stockholm/restaurants/hos-kina.jpg"),
  },
  {
    name: "Urban Deli Nytorget",
    coordinates: {
      latitude: 59.3125041,
      longitude: 18.0824946,
    },
    ratings: {
      "m&o": 3,
    },
    chefs: [
      {
        name: "Jessie Sommarström",
        description:
          "Creative leader at Urban Deli. Previously worked at Sturehof and Esperanto. Named Chef of the Year in 2022 and recognized for her work in food sustainability.",
      },
    ],
    description:
      "Known for its vibrant atmosphere, it offers a menu featuring Nordic and international flavors, with an emphasis on sustainability and quality ingredients. The establishment also includes a grocery store and bakery, making it a popular spot for both dining and shopping.",
    website: "https://www.urbandeli.org/nytorget",
    image:
      require("../../../public/images/restaurants/stockholm/restaurants/urban-deli-nytorget.jpg"),
  },
  {
    name: "La Neta",
    coordinates: {
      latitude: 59.336627,
      longitude: 18.0582477,
    },
    ratings: {
      "m&o": 5,
    },
    chefs: [
      {
        name: "David Licona",
        description:
          "Originally from Monterrey, Mexico, he moved to Stockholm in 2008 and co-founded La Neta in 2009 to bring authentic Mexican street food to the city.",
      },
      {
        name: "Ricardo Medrano",
        description:
          "Also from Monterrey, Mexico, he partnered with David Licona to establish the restaurant.",
      },
    ],
    description:
      "La Neta is a taquería in Stockholm offering authentic Mexican street food. Established in 2009 by two Monterrey natives, it serves tacos and quesadillas with homemade corn tortillas and freshly made salsas. The restaurant features a self-service salsa bar and a casual, communal dining atmosphere.",
    website: "https://www.laneta.se/",
    image:
      require("../../../public/images/restaurants/stockholm/restaurants/la-neta.jpg"),
  },
  {
    name: "Fotografiska",
    coordinates: {
      latitude: 59.3179802,
      longitude: 18.0848078,
    },
    ratings: {
      "m&o": 3,
    },
    chefs: [
      {
        name: "Paul Svensson",
        description:
          "Executive Head Chef at Fotografiska. Previously worked with Marco Pierre White in London and Mathias Dahlgren at Bon Lloc in Stockholm.",
      },
    ],
    description:
      "Located atop Stockholm's Fotografiska museum, the restaurant offers panoramic views and a sustainable, plant-forward menu. Dishes emphasize seasonal, locally sourced vegetables, with optional sustainable meat or fish sides. The establishment is committed to zero-waste practices, including reusing materials like mussel shells for plates and repurposing old wine bottles into glassware.",
    website: "https://stockholm.fotografiska.com/en/restaurants/the-restaurant",
    image:
      require("../../../public/images/restaurants/stockholm/restaurants/fotografiska.jpg"),
  },
  {
    name: "Bistro Bananas",
    coordinates: {
      latitude: 59.3118075,
      longitude: 18.0753039,
    },
    ratings: {
      "m&o": 6,
    },
    description:
      "Housed in a distinctive flatiron building, it offers a diverse menu featuring Neapolitan-style pizzas baked in a wood-fired oven, alongside French bistro dishes like steak tartare and Middle Eastern-inspired options such as lemon falafel.",
    website: "https://bistrobananas.se/",
    image:
      require("../../../public/images/restaurants/stockholm/restaurants/bistro-bananas.jpg"),
  },
  {
    name: "Nytorget 6",
    coordinates: {
      latitude: 59.3120883,
      longitude: 18.0827863,
    },
    ratings: {
      "m&o": 4,
    },
    chefs: [
      {
        name: "Fredrik Larsson",
        description:
          "Previously part of the Swedish Culinary Team. Known for his 'inclusive gastronomy' approach, blending Swedish classics with Southern European influences.",
      },
    ],
    description:
      "The restaurant offers a menu that combines Swedish classics with Southern European flavors, featuring dishes like meatballs, omelets, and seafood pasta. With a vibrant atmosphere, it serves breakfast, lunch, and dinner, and includes a cocktail bar where skilled bartenders craft a variety of drinks.",
    website: "https://www.nytorget6.se/",
    image:
      require("../../../public/images/restaurants/stockholm/restaurants/nytorget-6.jpg"),
  },
  {
    name: "Meatballs for the People",
    coordinates: {
      latitude: 59.3146005,
      longitude: 18.0812414,
    },
    ratings: {
      "m&o": 4,
    },
    chefs: [
      {
        name: "Mathias Pilblad",
        description:
          "Head Chef at Meatballs for the People. Co-authored the restaurant's cookbook, sharing recipes that range from classic Swedish meatballs to innovative variations.",
      },
    ],
    description:
      "Sweden's first and only restaurant dedicated exclusively to meatballs. The establishment offers a diverse selection of handmade, organic meatballs crafted from high-quality, locally sourced meats, including traditional options like beef and pork, as well as more adventurous choices such as moose, reindeer, and bear.",
    website: "https://meatball.se/",
    image:
      require("../../../public/images/restaurants/stockholm/restaurants/meatballs-for-the-people.jpg"),
  },
  {
    name: "Riche",
    coordinates: {
      latitude: 59.3334698,
      longitude: 18.0757636,
    },
    ratings: {
      "m&o": 5,
    },
    chefs: [
      {
        name: "Björn Wahlund",
        description:
          "Previously served as Head Chef at Moderna Museet's restaurant, bringing extensive experience in Swedish and French cuisine.",
      },
    ],
    description:
      "Established in 1893, Riche is a storied brasserie located in Stockholm's Östermalm district. Inspired by Café Riche in Paris, the restaurant blends French elegance with Swedish culinary traditions. The menu features a mix of classic dishes and contemporary creations, all prepared from scratch using seasonal, high-quality ingredients.",
    website: "https://riche.se/en/",
    image:
      require("../../../public/images/restaurants/stockholm/restaurants/riche.jpg"),
  },
  {
    name: "YUC!",
    coordinates: {
      latitude: 59.3423442,
      longitude: 18.051285,
    },
    ratings: {
      "m&o": 5,
    },
    description:
      "YUC! Mexican is a vibrant restaurant in Stockholm's Vasastan district, offering a fusion of Mexican flavors with influences from Peru, Chile, East Asia, and Sweden. The menu features a variety of tacos, ceviches, and other dishes, complemented by a selection of cocktails, including mezcal and tequila options. The lively atmosphere, enhanced by music and a colorful interior, makes it a popular spot for both dining and socializing.",
    website: "https://yucmexican.se/",
    image:
      require("../../../public/images/restaurants/stockholm/restaurants/yuc.jpg"),
  },
  {
    name: "Lådan",
    coordinates: {
      latitude: 59.3403855,
      longitude: 18.0601468,
    },
    ratings: {
      "m&o": 6,
    },
    chefs: [
      {
        name: "Jon Widegren",
        description:
          "Founder of Lådan and Flippin' Burgers. Known for pioneering Stockholm's craft burger scene and expanding into beer-forward street food concepts.",
      },
    ],
    description:
      "Lådan is a casual beer hall and street food restaurant located in Stockholm's Vasastan district. Established in 2017 by Jon Widegren, the founder of Flippin' Burgers, Lådan offers a menu featuring sliders, Chicago-style pizza slices, and various sides, all prepared from scratch.",
    website: "https://ladansthlm.se/",
    image:
      require("../../../public/images/restaurants/stockholm/restaurants/ladan.jpg"),
  },
  {
    name: "Grus Grus",
    coordinates: {
      latitude: 59.3431556,
      longitude: 18.0490735,
    },
    ratings: {
      "m&o": 4,
    },
    chefs: [
      {
        name: "Bill Allison",
        description:
          "Head Chef at Grus Grus. Originally from Canada with Jamaican roots, he brings a diverse culinary background to the restaurant.",
      },
    ],
    description:
      "Grus Grus is a wine bar located in Stockholm's Vasastan district, adjacent to its sister restaurant, Tranan. The establishment focuses on craft wines, offering selections ranging from obscure grape varieties to classic bottles. The menu features seasonal small plates designed for sharing, utilizing local Swedish produce.",
    website: "https://grusgrusvinbaren.se/en/home/",
    image:
      require("../../../public/images/restaurants/stockholm/restaurants/grus-grus.jpg"),
  },
  {
    name: "Den Gyldene Freden",
    coordinates: {
      latitude: 59.32316,
      longitude: 18.0737972,
    },
    ratings: {
      "m&o": 4,
    },
    description:
      "Established in 1722, Den Gyldene Freden is one of the world's oldest restaurants still operating in its original location. Situated in Stockholm's Gamla Stan, it offers a menu rooted in traditional Swedish cuisine, featuring dishes like meatballs with lingonberries and creamy potato purée.",
    website: "https://gyldenefreden.se/en/startpage/",
    image:
      require("../../../public/images/restaurants/stockholm/restaurants/den-gyldene-freden.jpg"),
  },
  {
    name: "Knut",
    coordinates: {
      latitude: 59.3381566,
      longitude: 18.0529088,
    },
    ratings: {
      "m&o": 6,
    },
    chefs: [
      {
        name: "Martin Sjölander",
        description:
          "Born in Timrå, he began working in restaurants at age 14 and traveled globally as a chef before opening Knut in 2013. His culinary vision blends northern Swedish traditions with international influences.",
      },
    ],
    description:
      "Offering northern Swedish cuisine with a modern twist. Established in 2013 by Martin Sjölander, the restaurant draws inspiration from the founder's upbringing in Norrland, incorporating traditional ingredients like reindeer, moose, and cloudberries into contemporary dishes.",
    website: "https://restaurangknut.se/en/home/",
    image:
      require("../../../public/images/restaurants/stockholm/restaurants/knut.jpg"),
  },
  {
    name: "Deli Di Luca",
    coordinates: {
      latitude: 59.3154053,
      longitude: 18.0841642,
    },
    ratings: {
      "m&o": 2,
    },
    chefs: [
      {
        name: "Michele Sganzerla",
        description:
          "Head Chef at Deli Di Luca. Collaborates with Fernando Di Luca to offer a menu that blends traditional Italian cuisine with modern interpretations, emphasizing high-quality ingredients and seasonal produce.",
      },
    ],
    description:
      "Italian restaurant and wine bar located in Stockholm's Södermalm district. The establishment offers a menu that combines traditional Italian dishes with contemporary twists, focusing on high-quality ingredients.",
    website: "https://www.delidiluca.se/",
    image:
      require("../../../public/images/restaurants/stockholm/restaurants/deli-di-luca.jpg"),
  },
  {
    name: "Eatnam",
    coordinates: {
      latitude: 59.3390724,
      longitude: 18.0687694,
    },
    ratings: {
      "m&o": 6,
    },
    description:
      "Vietnamese restaurant in Stockholm offering authentic dishes inspired by the everyday food of Saigon. The menu features pho noodle soup, banh mi sandwiches, fresh spring rolls, and noodle salads, with options for meat lovers, vegetarians, and vegans.",
    website: "https://eatnam.se/",
    image:
      require("../../../public/images/restaurants/stockholm/restaurants/eatnam.jpg"),
  },
  {
    name: "Aifur",
    coordinates: {
      latitude: 59.323059,
      longitude: 18.0718389,
    },
    ratings: {
      "m&o": 4,
    },
    description:
      "Offers a unique dining experience inspired by the Viking Age. Founded by Swedish musician Martin 'E-Type' Erikson, the restaurant immerses guests in a medieval atmosphere with communal wooden tables, candlelight, and traditional Nordic music. The menu features dishes like mead-boiled mussels, moose fillet, and saffron pancakes, accompanied by beverages such as mead, ale, and wine.",
    website: "http://aifur.se/",
    image:
      require("../../../public/images/restaurants/stockholm/restaurants/aifur.jpg"),
  },
  {
    name: "Lennart & Bror",
    coordinates: {
      latitude: 59.3462587,
      longitude: 18.0618021,
    },
    ratings: {
      "m&o": 7,
    },
    description:
      "Lennart & Bror is a butcher shop and restaurant located in Stockholm's Vasastan district. The establishment offers a menu featuring artisanal sandwiches, sausages, and burgers made from high-quality meats. Known for its casual atmosphere, Lennart & Bror provides both dine-in and takeaway options, with a focus on delivering flavorful meat-centric dishes.",
    website: "https://www.lennartochbror.se/",
    image:
      require("../../../public/images/restaurants/stockholm/restaurants/lennart-bror.jpg"),
  },
  {
    name: "Ett Hem",
    coordinates: {
      latitude: 59.3455871,
      longitude: 18.0677353,
    },
    ratings: {
      "m&o": 10,
    },
    chefs: [
      {
        name: "Leo Frodell",
        description: "Head Chef at Ett Hem. Formerly at Aquavit NYC.",
      },
    ],
    description:
      "Ett Hem is an intimate restaurant nestled within a boutique hotel in Stockholm's Östermalm district. Housed in a 1910 Arts & Crafts townhouse, the establishment offers a dining experience that feels like being in a friend's home. The open kitchen serves a daily changing menu based on the freshest local and seasonal ingredients.",
    website: "https://www.etthem.se/kitchen/",
    image:
      require("../../../public/images/restaurants/stockholm/restaurants/ett-hem.jpg"),
  },
  {
    name: "Nalen",
    coordinates: {
      latitude: 59.3371552,
      longitude: 18.067765,
    },
    ratings: {
      "m&o": 4,
    },
    description:
      "Dating back to 1888, Nalen has long been a center for music and cultural events. The restaurant offers a refined take on traditional Swedish cuisine with modern influences, emphasizing sustainability and organic, locally sourced ingredients. Guests can enjoy dishes like Jerusalem artichoke soup with scallop, lamb brisket with sweetbread, and classic meatballs with cream sauce.",
    website: "https://www.nalen.com/restaurang/",
    image:
      require("../../../public/images/restaurants/stockholm/restaurants/nalen.jpg"),
  },
  {
    name: "Monster Chicken",
    coordinates: {
      latitude: 59.3076991,
      longitude: 18.0776832,
    },
    ratings: {
      "m&o": 3,
    },
    description:
      "Korean fried chicken and soju bar located in Stockholm's Södermalm district. Known for its crispy, flavorful chicken, the restaurant offers a variety of sauces and spice levels, including options like 'Pa'Padak' and 'Monstrous Flame'.",
    website: "https://www.monsterchicken.se/",
    image:
      require("../../../public/images/restaurants/stockholm/restaurants/monster-chicken.jpg"),
  },
  {
    name: "Nya Carnegiebryggeriet",
    coordinates: {
      latitude: 59.3054483,
      longitude: 18.0986223,
    },
    ratings: {
      "m&o": 6,
    },
    description:
      "Nya Carnegiebryggeriet is a modern craft brewery and gastropub located in the historic Luma lightbulb factory in Stockholm's Hammarby Sjöstad district. Established in 2014 as a collaboration between Carlsberg Sweden and Brooklyn Brewery, it offers a range of innovative beers, including the popular 100W IPA and Kellerbier. The gastropub serves comfort food designed to pair with their brews, featuring dishes like bone marrow burgers and seasonal seafood.",
    website: "https://www.nyacarnegiebryggeriet.se/",
    image:
      require("../../../public/images/restaurants/stockholm/restaurants/nya-carnegiebryggeriet.jpg"),
  },
  {
    name: "Svartengrens",
    coordinates: {
      latitude: 59.3458781,
      longitude: 18.0589782,
    },
    ratings: {
      "m&o": 6,
    },
    chefs: [
      {
        name: "Göran Svartengren",
        description:
          "Chef and co-founder of Svartengrens, Göran emphasizes sustainable meat sourcing and in-house preparation techniques, including dry-aging, smoking, and sausage making.",
      },
    ],
    description:
      "Svartengrens is a meat-focused restaurant and cocktail bar located in Stockholm's Vasastan district. Founded in 2011, the establishment is renowned for its commitment to sustainability, sourcing locally raised beef from the Stockholm archipelago and preparing all dishes from scratch. The menu changes daily based on available ingredients, featuring cuts like butcher’s steak and entrecôte, complemented by inventive sides.",
    website: "https://www.svartengrens.se/",
    image:
      require("../../../public/images/restaurants/stockholm/restaurants/svartengrens.jpg"),
  },
  {
    name: "Rockin Grill",
    coordinates: {
      latitude: 59.3030848,
      longitude: 18.0812146,
    },
    ratings: {
      "m&o": 6,
    },
    description:
      "Rockin Grill is an American-style fast-food restaurant, offering a menu featuring smashed burgers, pan pizzas, and milkshakes, all prepared with high-quality ingredients. The interior is inspired by 1950s American diners, creating a nostalgic atmosphere for guests.",
    website: "https://www.rockingrill.se/",
    image:
      require("../../../public/images/restaurants/stockholm/restaurants/rockin-grill.jpg"),
  },
  {
    name: "BAP",
    coordinates: {
      latitude: 59.3367325,
      longitude: 18.0822406,
    },
    ratings: {
      "m&o": 6,
    },
    description:
      "New York-style burgers and house-smoked pastrami sandwiches made with premium brisket from Fällmans Kött.",
    website: "https://www.bap-burgersandpastrami.se/",
    image: require("../../../public/images/restaurants/stockholm/restaurants/bap-burgers-and-pastrami.jpg"),
  },
  {
    name: "Copper Club",
    coordinates: {
      latitude: 59.3020974,
      longitude: 18.0987279,
    },
    ratings: {
      "m&o": 5,
    },
    description:
      "Asian fusion bistro and gin bar serving sushi, dim sum, and massaman curry alongside house-distilled gins and craft cocktails.",
    website: "https://copperclub.se/",
    image: require("../../../public/images/restaurants/stockholm/restaurants/copper-club.jpg"),
  },
  {
    name: "Lydmar Hotel",
    coordinates: {
      latitude: 59.3290245,
      longitude: 18.0770716,
    },
    ratings: {
      "m&o": 6,
    },
    description:
      "Upscale brasserie offering European classics like steak tartare and Sicilian fish, with seasonal ingredients and waterfront views.",
    website: "https://www.lydmar.com/",
    image: require("../../../public/images/restaurants/stockholm/restaurants/lydmar-hotel.jpg"),
    chefs: [
      {
        name: "Jakob Levén",
        description:
          "Head Chef at Lydmar Hotel. Previously at Lisa Elmqvist, Gyldene Freden, and Hotel du Vin in England. Known for his seasonal, ingredient-driven cuisine with Scandinavian influence.",
      },
    ],
  },
  {
    name: "NOI (Nobis Hotel)",
    coordinates: {
      latitude: 59.3326,
      longitude: 18.0722,
    },
    ratings: {
      "m&o": 6,
    },
    description:
      "Modern European cuisine with seasonal Swedish ingredients, offering dishes like Kalix bleak roe and spice-roasted duck in a Scandinavian-designed setting.",
    website: "https://www.nobishotel.se/en",
    image: require("../../../public/images/restaurants/stockholm/restaurants/nobis-hotel.jpg"),
    chefs: [
      {
        name: "Emmanouil Spilianakis",
        description:
          "Executive Head Chef at Nobis Hotel Stockholm, leading both NOI and Bino with a focus on seasonal European cuisine. Previously at Operakällaren.",
      },
    ],
  },
  {
    name: "Chelas",
    coordinates: {
      latitude: 59.3177887,
      longitude: 18.0316426,
    },
    ratings: {
      "m&o": 5,
    },
    description:
      "Authentic Mexican eatery in Hornstull offering dishes like bone marrow tacos, enchiladas, and cochinita pibil, emphasizing fresh ingredients and traditional flavors.",
    website: "https://www.chelas.se/",
    image: require("../../../public/images/restaurants/stockholm/restaurants/chelas.jpg"),
  },
  {
    name: "Stella Pizza",
    coordinates: {
      latitude: 59.3111459,
      longitude: 18.0963649,
    },
    ratings: {
      "m&o": 6,
    },
    description:
      "Modern pizzeria blending Swedish classics with Neapolitan techniques—think kebab, banana curry, and truffle pizzas made with house-fermented dough and local ingredients.",
    website: "https://www.stellapizza.se/",
    image: require("../../../public/images/restaurants/stockholm/restaurants/stella.jpg"),
    chefs: [
      {
        name: "Jonas Lagerström",
        description:
          "Michelin-starred chef and co-founder of Stella Pizza and Etoile. Former member of the Swedish National Culinary Team.",
      },
      {
        name: "Danny Falkeman",
        description:
          "Co-founder of Stella Pizza and Etoile. Competed in Chef of the Year and serves as a jury member for the Pizza Champion Cup.",
      },
    ],
  },
  {
    name: "Akkurat",
    coordinates: {
      latitude: 59.3197228,
      longitude: 18.0681573,
    },
    ratings: {
      "m&o": 5,
    },
    description:
      "Gastropub known for its extensive beer and whisky selection, offering Swedish classics like mussels and steak tartare in a rustic setting.",
    website: "https://akkurat.se/",
    image: require("../../../public/images/restaurants/stockholm/restaurants/akkurat.jpg"),
    chefs: [
      {
        name: "Kerim Gudmundson",
        description:
          "Head Chef at Akkurat. Educated at Culinary Arts Academy Switzerland, leading the kitchen with a focus on quality ingredients and traditional Swedish cuisine.",
      },
    ],
  },
  {
    name: "Ångbåtsbryggan",
    coordinates: {
      latitude: 59.3311056,
      longitude: 18.0832036,
    },
    ratings: {
      "m&o": 5,
    },
    description:
      "Seasonal Swedish seafood and brasserie fare served aboard a WWII-era barge moored on Strandvägen, with views over Nybroviken.",
    website: "https://angbatsbryggan.com/",
    image: require("../../../public/images/restaurants/stockholm/restaurants/angbatsbryggan.jpg"),
  },
  {
    name: "Restaurang J",
    coordinates: {
      latitude: 59.3181288,
      longitude: 18.1602932,
    },
    ratings: {
      "m&o": 3,
    },
    description:
      "Maritime brasserie offering Swedish seafood and American-inspired dishes in a New England-style setting with panoramic views of Stockholm's inlet.",
    website: "https://restaurangj.se/",
    image: require("../../../public/images/restaurants/stockholm/restaurants/restaurang-j.jpg"),
    chefs: [
      {
        name: "Henrik Wittgren",
        description:
          "Head Chef at Restaurang J. Known for his seasonal, seafood-focused cuisine, blending Swedish and American coastal influences.",
      },
    ],
  },
  {
    name: "Lulu Sushi",
    coordinates: {
      latitude: 59.3126363,
      longitude: 18.0988882,
    },
    ratings: {
      "m&o": 5,
    },
    description:
      "Latin-Asian fusion spot offering sushi, poké bowls, and ceviche, blending Japanese precision with South American heat and citrus.",
    website: "https://restauranglulu.se/kungsholmen/",
    image: require("../../../public/images/restaurants/stockholm/restaurants/lulu.jpg"),
  },
  {
    name: "SQ (Elite Marina Tower)",
    coordinates: {
      latitude: 59.314757,
      longitude: 18.1091846,
    },
    ratings: {
      "m&o": 3,
    },
    description:
      "Waterfront hotel in a historic redbrick mill offering Swedish brasserie fare at SQ Bar & Restaurant, with panoramic views of Stockholm's inlet.",
    website: "https://www.restaurangsq.se/",
    image: require("../../../public/images/restaurants/stockholm/restaurants/sq.jpg"),
    chefs: [
      {
        name: "Daniel Pettersson",
        description:
          "Head Chef at SQ Bar & Restaurant, Elite Hotel Marina Tower. Crafts seasonal menus focusing on Swedish brasserie classics and modern European flavors.",
      },
    ],
  },
  {
    name: "Villa Foresta",
    coordinates: {
      latitude: 59.360077,
      longitude: 18.1205572,
    },
    ratings: {
      "m&o": 4,
    },
    description:
      "Historic hotel and dining destination on Lidingö offering seasonal Swedish cuisine with Northern Italian influences in a castle-inspired setting.",
    website: "https://villaforesta.se/",
    image: require("../../../public/images/restaurants/stockholm/restaurants/villa-foresta.jpg"),
    chefs: [
      {
        name: "Gustav Otterberg",
        description:
          "Head Chef at Villa Foresta. Formerly at Leijontornet, Ekstedt, and Villa Pauli, he emphasizes seasonal Swedish ingredients and culinary craftsmanship.",
      },
    ],
  },
  {
    name: "At Six",
    coordinates: {
      latitude: 59.3309915,
      longitude: 18.0668371,
    },
    ratings: {
      "m&o": 5,
    },
    description:
      "Contemporary luxury hotel featuring Dining Room, a modern European restaurant with seasonal, globally influenced cuisine, and a curated art collection.",
    website: "https://hotelatsix.com/",
    image: require("../../../public/images/restaurants/stockholm/restaurants/at-six.jpg"),
  },
  {
    name: "Indian Street Food & Co",
    coordinates: {
      latitude: 59.3091415,
      longitude: 18.1037442,
    },
    ratings: {
      "m&o": 6,
    },
    description:
      "Modern Indian street food concept offering dishes like kathi rolls, butter chicken, and deconstructed samosas, blending traditional flavors with contemporary presentation.",
    website: "https://www.indianstreetfood.com/se/",
    image: require("../../../public/images/restaurants/stockholm/restaurants/indian-street-food-co.jpg"),
    chefs: [
      {
        name: "Dheeraj Singh",
        description:
          "Founder and Executive Chef of Indian Street Food & Co. Formerly Head Chef at Hurry Curry, he has cooked for Indian dignitaries and is known for integrating classical Indian cooking with modern tastes.",
      },
    ],
  },
  {
    name: "Ellery Beach House",
    coordinates: {
      latitude: 59.3642411,
      longitude: 18.2539899,
    },
    ratings: {
      "m&o": 6,
    },
    description:
      "Retro-inspired beach resort on Lidingö featuring Mediterranean and Middle Eastern cuisine at Palmers, and Cali-style fare at Coco Beach Club, with pools, saunas, and cabanas.",
    website: "https://www.ellerybeachhouse.com/",
    image: require("../../../public/images/restaurants/stockholm/restaurants/ellery-beach-house.jpg"),
  },
  {
    name: "Bank Hotel",
    coordinates: {
      latitude: 59.3313931,
      longitude: 18.0746401,
    },
    ratings: {
      "m&o": 5,
    },
    description:
      "Luxury hotel in a former 1910 bank building, featuring Bonnie's restaurant offering French-influenced modern European cuisine, and rooftop bar Le Hibou with panoramic city views.",
    website: "https://bankhotel.se/",
    image: require("../../../public/images/restaurants/stockholm/restaurants/bank-hotel.jpg"),
    chefs: [
      {
        name: "Fanny Rönnblom",
        description:
          "Head Chef at Bank Hotel. Formerly at Arnold’s and various restaurants in Macao and Stockholm.",
      },
    ],
  },
  {
    name: "Stigbergets Fot",
    coordinates: {
      latitude: 59.3191201,
      longitude: 18.0709325,
    },
    ratings: {
      "m&o": 6,
    },
    description:
      "Craft beer bar and gastropub offering experimental brews from Stigbergets Bryggeri and others, paired with elevated street food like dry-aged beef burgers and vegan currywurst.",
    website: "https://stigbergetsfot.se/",
    image: require("../../../public/images/restaurants/stockholm/restaurants/stigbergets-fot.jpg"),
    chefs: [
      {
        name: "Johan Thor",
        description:
          "Bar Manager and 'kranoperatör' at Stigbergets Fot. Formerly at Tritonia, he curates the tap list and fosters guest interaction around craft beer.",
      },
    ],
  },
];
