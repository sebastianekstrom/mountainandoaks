const IGNORED_PATHS = [
  "src/pages/",
  "src/types/recipe\\.d\\.ts",
  "playwright\\.config\\.ts",
  "src/components/.*\\.stories\\.tsx?",
].join("|");

module.exports = {
  ignore: IGNORED_PATHS,
};
