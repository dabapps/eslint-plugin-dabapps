/* global describe, it, expect */

const index = require('../src');

describe('index', () => {
  it('exports a set of rules that are objects with at least a "create" function', () => {
    expect(Object.keys(index)).toEqual(['rules']);

    const ruleNames = Object.keys(index.rules);

    expect(ruleNames).toEqual(['no-relative-parent-import']);

    ruleNames.forEach(name => {
      expect(index.rules[name]).toBeTruthy();
      expect(typeof index.rules[name]).toBe('object');
      expect(typeof index.rules[name].create).toBe('function');
    });
  });
});
