module.exports = {
    setupFiles: ['<rootDir>client/src/tests/app.test.js'],
    transformIgnorePatterns: ["/node_modules/"],
    transform: {
      '^.+\\.(js|jsx)?$': 'babel-jest'
    }
}