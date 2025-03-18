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

export interface Restaurant {
  name: string;
  coordinates: Coordinates;
  image: string;
  ratings?: Ratings;
  chefs?: Chef[];
  description: string;
  website: string;
}
