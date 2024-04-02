const { RuleTester } = require("eslint");

const yourCustomRule = require("./no-commonly-misspelled-words");

const ruleTester = new RuleTester();

ruleTester.run("misspelled-words", yourCustomRule, {
  valid: [
    {
      code: "<Text>The Dutch oven is great for cooking.</Text>",
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
    {
      code: "<Text>The KitchenAid mixer is awesome!</Text>",
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
  ],
  invalid: [
    {
      code: "<Text>The dutch oven is great for cooking.</Text>",
      errors: [
        {
          message:
            '🦆 You silly goose! The word "dutch oven" is misspelled, the correct spelling is "Dutch oven".',
        },
      ],
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
    {
      code: "<Text>Use crème fraiche for this recipe.</Text>",
      errors: [
        {
          message:
            '🦆 You silly goose! The word "crème fraiche" is misspelled, the correct spelling is "crème fraîche".',
        },
      ],
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
  ],
});
