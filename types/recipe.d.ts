import { StaticImageData } from "next/image";

type CategoryKey = "pizza" | "bread" | "food-and-drinks" | "guide";

interface Category {
  value: CategoryKey;
  label: string;
  path: string;
}

export interface Categories {
  [key: string]: Category;
}

interface Thumbnail {
  hero: StaticImageData;
  tall: StaticImageData;
  wide: StaticImageData;
  square: StaticImageData;
  meta: StaticImageData;
}

export interface Recipe {
  title: string;
  url: string;
  category: Category;
  thumbnails: Thumbnail;
  description: string;
}

export interface Ingredient {
  value: number;
  label: string;
  valueSuffix?: string | boolean;
  exludeFromTotalWeight?: boolean;
  isWater?: boolean;
  isFlour?: boolean;
  shouldNotBeDuplicated?: boolean;
  excludeValue?: boolean;
  tooltip?: string;
}

export interface MultiIngredient {
  label: string;
  ingredients: Ingredient[];
}
