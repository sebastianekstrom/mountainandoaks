module.exports = {
  create(context) {
    const wordsThatIMispellSoMuchINeedACustomLintRuleForIt = [
      { misspelled: "mire poix", correct: "mirepoix" },
      { misspelled: "schallots", correct: "shallots" },
      { misspelled: "crème fraiche", correct: "crème fraîche" },
      { misspelled: "creme fraiche", correct: "crème fraîche" },
      { misspelled: "creme fraîche", correct: "crème fraîche" },
      { misspelled: "Kitchen Aid", correct: "KitchenAid" },
      { misspelled: "flavour", correct: "flavor" },
      { misspelled: "dutch oven", correct: "Dutch oven", exact: true },
      { misspelled: "colour", correct: "color" },
      { misspelled: "quiet", correct: "quiet" },
    ];

    function checkNodeForMisspelledWords(node) {
      const value = node.value ? node.value.toString() : "";

      if (
        typeof value === "string" &&
        (value.startsWith("http://") || value.startsWith("https://"))
      ) {
        return;
      }

      wordsThatIMispellSoMuchINeedACustomLintRuleForIt.forEach(
        ({ misspelled, correct, exact = false }) => {
          const regex = new RegExp(`\\b${misspelled}\\b`, exact ? "" : "i");
          if (regex.test(value)) {
            context.report({
              node,
              message: `🦆 You silly goose! The word "${misspelled}" is misspelled, the correct spelling is "${correct}".`,
            });
          }
        }
      );
    }

    return {
      Literal: checkNodeForMisspelledWords,
      JSXText: checkNodeForMisspelledWords,
    };
  },
};
