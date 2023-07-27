import inquirer from "inquirer";
import fs from "fs/promises";
import path from "path";
import { RECIPES } from "../../src/constants/recipes";

const questions = [
  {
    type: "list",
    name: "recipeType",
    message: "What type of recipe is it?",
    choices: [
      { name: "Bread", value: "bread" },
      { name: "Food & Drinks", value: "recipes" },
      { name: "Pizza", value: "pizza" },
      { name: "Guides", value: "guides" },
    ],
  },
  {
    type: "input",
    name: "recipeName",
    message: `What's the name of the recipe?`,
  },
];

const createRecipe = async () => {
  const { recipeType, recipeName } = await inquirer.prompt(questions);
  console.log({ RECIPES });
  const dirPath = path.resolve(
    process.cwd(),
    "public",
    "images",
    recipeType,
    recipeName,
    "thumbnails"
  );

  try {
    await fs.mkdir(dirPath, { recursive: true });

    const filesToCopy = [
      "hero.png",
      "meta.png",
      "square.png",
      "tall.png",
      "wide.png",
    ];

    for (const file of filesToCopy) {
      const src = path.resolve(__dirname, "thumbnail-placeholders", file);
      const dest = path.resolve(dirPath, file);
      await fs.copyFile(src, dest);
    }

    console.log(`Directory created at ${dirPath}`);
  } catch (error) {
    console.error(`Error creating directory at ${dirPath}:`, error);
  }
};

createRecipe();
