const fs = require("fs");
const path = require("path");

const { configs, rules } = require("./index");

describe("ESLint Config Loader", () => {
  it("should load all rule files from the config directory", () => {
    const ruleFiles = fs
      .readdirSync("tooling/eslint")
      .filter((file) => file !== "index.js" && !file.endsWith("test.js"));

    // Check if all rule files are loaded
    ruleFiles.forEach((file) => {
      const ruleName = path.basename(file, ".js");
      expect(rules).toHaveProperty(ruleName);
    });

    // Check if all rules are set to 'error'
    Object.keys(configs.all.rules).forEach((rule) => {
      expect(configs.all.rules[rule]).toEqual("error");
    });
  });
});
