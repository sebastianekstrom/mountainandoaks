const fs = require("fs");
const path = require("path");
const { exec } = require("child_process");
const net = require("net");

function checkPort(port, callback) {
  const server = net.createServer();
  server.once("error", (err) => {
    if (err.code === "EADDRINUSE") {
      // Port is in use
      callback(true);
    }
  });
  server.once("listening", () => {
    // Port is available
    server.close();
    callback(false);
  });
  server.listen(port);
}

function copyAndRenameImage(sourcePath, targetDir, fileName, category, slug) {
  // Adjust category if it is 'food-and-drinks'
  const adjustedCategory =
    category === "food-and-drinks" ? "recipes" : category;
  const targetPath = path.join(
    __dirname,
    targetDir
      .replace("{{category}}", adjustedCategory)
      .replace("{{slug}}", slug),
    fileName,
  );

  // Ensure the target directory exists
  fs.mkdirSync(path.dirname(targetPath), { recursive: true });

  // Copy and rename the image
  fs.copyFileSync(sourcePath, targetPath);
}

function formatFile(filePath) {
  return new Promise((resolve, reject) => {
    // Command to format the file with Prettier and fix with ESLint
    const formatCommand = `npx prettier --write "${filePath}" && npx eslint "${filePath}" --fix`;

    exec(formatCommand, (error, stdout) => {
      if (error) {
        console.error(`Error formatting file: ${error}`);
        return reject(error);
      }

      resolve(stdout);
    });
  });
}

/** @type {import('plop').NodePlopAPI} */
module.exports = (plop) => {
  plop.setActionType("formatCode", async (answers, config) => {
    const paths = config.paths.map((templatePath) =>
      plop.renderString(templatePath, answers),
    );

    // Loop through each path and format the file
    for (const filePath of paths) {
      try {
        await formatFile(path.join(__dirname, filePath));
      } catch (error) {
        console.error(`Error formatting ${filePath}: ${error}`);
      }
    }
  });

  plop.setActionType("openUrl", (answers) => {
    const category = answers.category;
    const url = `http://localhost:3000/${category}/${answers.slug}`;

    checkPort(3000, (isInUse) => {
      if (isInUse) {
        const command = `open "${url}"`;
        exec(command, (error) => {
          if (error) {
            console.error(`Error opening URL: ${error}`);
            return;
          }
        });
      } else {
        console.error(
          "Failed to open URL since nothing is running on port 3000. Please start your server.",
        );
      }
    });
  });

  plop.setActionType("copyPlaceholderImages", (answers) => {
    const sourcePath = path.join(
      __dirname,
      "tooling/plop-templates/placeholder.png",
    );
    const targetDir = "public/images/{{category}}/{{slug}}/thumbnails";
    const fileNames = [
      "hero.png",
      "tall.png",
      "wide.png",
      "square.png",
      "meta.png",
    ];

    fileNames.forEach((fileName) => {
      copyAndRenameImage(
        sourcePath,
        targetDir,
        fileName,
        answers.category,
        answers.slug,
      );
    });
  });

  plop.setGenerator("recipe", {
    description: "Add a new recipe",
    prompts: [
      {
        type: "input",
        name: "title",
        message: "Recipe title:",
      },
      {
        type: "input",
        name: "description",
        message: "Recipe description:",
      },
      {
        type: "input",
        name: "slug",
        message: "Recipe slug:",
        filter: (input) => input.replace(/\//g, ""), // Remove all slashes from slug
      },
      {
        type: "list",
        name: "category",
        message: "Recipe category:",
        choices: [
          { name: "Pizza", value: "pizza" },
          { name: "Bread", value: "bread" },
          { name: "Food & Drinks", value: "food-and-drinks" },
          { name: "Guides", value: "guides" },
        ],
      },
    ],
    actions: (data) => {
      const adjustedCategory =
        data.category === "food-and-drinks" ? "recipes" : data.category;
      return [
        {
          type: "modify",
          path: "src/constants/recipes.ts",
          pattern: /(export const RECIPES: Recipe\[\] = \[)/g,
          template: `$1\n  {\n    title: "{{title}}",\n    url: "/${adjustedCategory}/{{slug}}",\n    category: CATEGORIES["{{category}}"],\n    thumbnails: {\n      hero: require("../../public/images/${adjustedCategory}/{{slug}}/thumbnails/hero.png"),\n      tall: require("../../public/images/${adjustedCategory}/{{slug}}/thumbnails/tall.png"),\n      wide: require("../../public/images/${adjustedCategory}/{{slug}}/thumbnails/wide.png"),\n      square: require("../../public/images/${adjustedCategory}/{{slug}}/thumbnails/square.png"),\n      meta: require("../../public/images/${adjustedCategory}/{{slug}}/thumbnails/meta.png"),\n    },\n    description: "{{description}}",\n  },`,
        },
        {
          type: "add",
          path: "src/pages/{{category}}/{{slug}}.tsx",
          templateFile: "tooling/plop-templates/recipe.tsx.hbs",
          data: {
            ...data,
            categoryPath: adjustedCategory,
          },
        },
        {
          type: "copyPlaceholderImages",
          description: "Copying placeholder images and renaming them",
        },
        {
          type: "add",
          path: "__tests__/pages/{{category}}/{{slug}}.test.tsx",
          templateFile: "tooling/plop-templates/recipe-test.tsx.hbs",
        },
        {
          type: "formatCode",
          paths: [
            "src/pages/{{category}}/{{slug}}.tsx",
            "__tests__/pages/{{category}}/{{slug}}.test.tsx",
            "src/constants/recipes.ts",
          ],
          description: "Formatting code",
        },
        () => {
          console.log("The recipe set up for is done 🎉");
          return ""; // Return an empty string to fulfill the action's requirement
        },
        {
          type: "openUrl",
          description: "Open the recipe URL in the browser",
        },
      ];
    },
  });
};
