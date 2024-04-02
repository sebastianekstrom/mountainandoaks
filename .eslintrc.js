module.exports = {
  extends: [
    "next/core-web-vitals",
    "plugin:storybook/recommended",
    "plugin:testing-library/react",
    "plugin:sebbe-bakes/all",
    "prettier",
  ],
  plugins: ["testing-library"],

  rules: {
    "react/no-unescaped-entities": 0,
    "no-unused-vars": "warn",
    "sebbe-bakes/no-custom-text-elements": "warn",
    "no-multiple-empty-lines": ["error", { max: 1, maxBOF: 0, maxEOF: 1 }],
    "import/order": [
      "error",
      {
        "newlines-between": "always",
        groups: ["builtin", "external", "internal"],
        pathGroups: [
          {
            pattern: "public/images/**",
            group: "internal",
            position: "before",
          },
          {
            pattern: "components/**",
            group: "internal",
            position: "after",
          },
          {
            pattern: "types/**",
            group: "internal",
            position: "after",
          },
          {
            pattern: "utils/**",
            group: "internal",
            position: "after",
          },
        ],
        pathGroupsExcludedImportTypes: ["builtin"],
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],
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
    {
      files: ["__tests__/e2e/**/*"],
      rules: {
        "testing-library/prefer-screen-queries": 0,
      },
    },
  ],
};
