module.exports = {
    setupFiles: ['<rootDir>client/src/tests/app.test.jsx'],
    transformIgnorePatterns: ["/node_modules/"],
    transform: {
      '^.+\\.(js|jsx)?$': 'babel-jest'
    }
}