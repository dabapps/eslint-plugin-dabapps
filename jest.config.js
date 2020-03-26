const helpersPattern = '<rootDir>/tests/helpers/*';

module.exports = {
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  testRegex: '(/tests/.*|\\.(test|spec))\\.(js|jsx)$',
  moduleFileExtensions: ['js', 'jsx'],
  testPathIgnorePatterns: [helpersPattern],
  coveragePathIgnorePatterns: [helpersPattern],
};
