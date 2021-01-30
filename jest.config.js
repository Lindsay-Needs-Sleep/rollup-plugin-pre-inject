module.exports = {
    moduleDirectories: ['node_modules'],
    collectCoverage: false,
    silent: false,
    notify: false,
    setupFilesAfterEnv: ['./test/config/test-framework-setup.js'],
    verbose: false,
    // testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|js?|tsx?|ts?)$',
    transform: {
        '\\.js$': './test/config/jest-transform.js',
        // '\\.mjs$': './test/config/jest-transform.js',
    },
    // moduleFileExtensions: ['js', 'mjs'],
    modulePathIgnorePatterns: ['<rootDir>/out', '<rootDir>/test/out'],
    moduleNameMapper: {
        '^@src/(.*)$': '<rootDir>/src/$1',
    },
};
