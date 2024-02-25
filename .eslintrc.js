module.exports = {
  extends: [
    "next/core-web-vitals",
    "plugin:storybook/recommended",
    "plugin:testing-library/react",
    "plugin:sebbe-bakes/all",
  ],
  plugins: ["testing-library"],

  rules: {
    "react/no-unescaped-entities": 0,
    "no-unused-vars": "warn",
    "sebbe-bakes/no-custom-text-elements": "warn",
  },
  overrides: [
    {
      files: ["src/pages/**/**/*.tsx"],
      rules: {
        "react/jsx-key": 0,
      },
    },
    {
      files: ["src/components/Text/Text.tsx"],
      rules: {
        "sebbe-bakes/no-custom-text-elements": 0,
      },
    },
    {
      files: ["tooling/eslint/**/*.js"],
      rules: {
        "sebbe-bakes/no-commonly-misspelled-words": 0,
      },
    },
  ],
};
