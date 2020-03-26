/* global describe, it, expect, jest, beforeEach */

const noRelativeParentImport = require('../../src/rules/no-relative-parent-import');

describe('no-relative-parent-import', () => {
  const context = {
    report: jest.fn(),
  };

  const rule = noRelativeParentImport.create(context);

  beforeEach(() => {
    context.report.mockClear();
  });

  it('reports when the import path contains ".."', () => {
    const badNode = {
      source: {
        value: '../relative-parent',
      },
    };

    rule.ImportDeclaration(badNode);

    expect(context.report).toHaveBeenCalledTimes(1);
    expect(context.report).toHaveBeenCalledWith({
      node: badNode,
      message:
        'Do not import parent modules with relative "../". Use the "^/" alias.',
    });
  });

  it('does not report when the import path does not contains ".."', () => {
    const goodNode = {
      source: {
        value: '^/absolute',
      },
    };

    rule.ImportDeclaration(goodNode);

    expect(context.report).toHaveBeenCalledTimes(0);
  });
});
