const IGNORED_PATHS = [
  "pages/",
  "types/recipe\\.d\\.ts",
  "playwright\\.config\\.ts",
  "components/.*\\.stories\\.tsx?",
].join("|");

module.exports = {
  ignore: IGNORED_PATHS,
};
