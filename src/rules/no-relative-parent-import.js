module.exports = {
  create: context => ({
    ImportDeclaration: node => {
      if (node.source.value.indexOf('..') >= 0) {
        context.report({
          node,
          message:
            'Do not import parent modules with relative "../". Use the "^/" alias.',
        });
      }
    },
  }),
};
