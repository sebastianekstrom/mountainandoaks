const { RuleTester } = require("eslint");
const disallowedElementsRule = require("./no-custom-text-elements");

const ruleTester = new RuleTester({
  parserOptions: { ecmaVersion: 6, ecmaFeatures: { jsx: true } },
});

ruleTester.run("disallowed-elements", disallowedElementsRule, {
  valid: [
    {
      code: "<Text>This is a text component.</Text>",
    },
    {
      code: "<div>This is a div element.</div>",
    },
  ],
  invalid: [
    {
      code: "<p>This is a paragraph.</p>",
      errors: [
        {
          message:
            "The use of <p> element is not allowed. Please use the <Text /> component instead.",
        },
      ],
    },
    {
      code: "<h1>This is a heading.</h1>",
      errors: [
        {
          message:
            "The use of <h1> element is not allowed. Please use the <Text /> component instead.",
        },
      ],
    },
    {
      code: "<h2>This is a smaller heading.</h2>",
      errors: [
        {
          message:
            "The use of <h2> element is not allowed. Please use the <Text /> component instead.",
        },
      ],
    },
  ],
});
