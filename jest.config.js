const nextJest = require("next/jest");

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const customJestConfig = {
  // Add more setup options before each test is run
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  // if using TypeScript with a baseUrl set to the root directory then you need the below for alias' to work
  moduleDirectories: ["node_modules", "<rootDir>/"],
  testEnvironment: "jest-environment-jsdom",
  coverageDirectory: "./coverage/",
  collectCoverage: true,
  modulePathIgnorePatterns: ["./__tests__/e2e"],
  collectCoverageFrom: [
    "!/node_modules/",
    "!build/",
    "components/**/**/*.ts",
    "components/**/**/*.tsx",
    "!components/**/**/*.stories.ts",
    "!components/**/**/*.stories.tsx",
    "utils/**/**/*.ts",
    "utils/**/**/*.tsx",
    "pages/**/**/*.tsx",
  ],
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
