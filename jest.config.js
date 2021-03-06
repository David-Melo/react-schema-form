module.exports = {
  setupTestFrameworkScriptFile: require.resolve('./tests/setup-test-env.js'),
  moduleNameMapper: {
    '.*(css|less|scss|jpg|jpeg|gif|png)$': '<rootDir>/tests/mock-assets.js'
  }
};
