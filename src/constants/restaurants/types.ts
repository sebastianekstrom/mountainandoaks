type MichelinRating = 1 | 2 | 3 | "Bib";

interface Chef {
  name: string;
  description: string | null;
}

interface RatingWithLink {
  rating: number;
  reviewUrl?: string;
}

interface Ratings {
  michelin?: MichelinRating | { rating: MichelinRating; reviewUrl?: string };
  "m&o"?: number; // Mountain & Oaks rating (1-10) - no links needed
  dn?: number | RatingWithLink; // Dagens Nyheter rating (1-5)
  svd?: number | RatingWithLink; // Svenska Dagbladet rating (1-6)
  whiteguide?: number | RatingWithLink; // White Guide rating (1-6)
}

interface Coordinates {
  longitude: number;
  latitude: number;
}

export interface Restaurant {
  name: string;
  coordinates: Coordinates;
  image: string;
  ratings?: Ratings;
  chefs?: Chef[];
  description: string;
  website: string;
}
