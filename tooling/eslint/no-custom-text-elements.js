module.exports = {
  create(context) {
    return {
      JSXOpeningElement(node) {
        const disallowedElements = ["p", "h1", "h2", "h3", "h4", "h5", "h6"];
        if (disallowedElements.includes(node.name.name)) {
          context.report({
            node,
            message: `The use of <${node.name.name}> element is not allowed. Please use the <Text /> component instead.`,
          });
        }
      },
    };
  },
};
