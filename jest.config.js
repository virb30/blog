module.exports = {
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/$1',
        '^~/(.*)$': '<rootDir>/$1',
        '^vue$': 'vue/dist/vue.common.js'
    },
    moduleFileExtensions: [
        'ts',
        'js',
        'vue',
        "mjs"
    ],
    testEnvironment: 'jsdom',
    transform: {
        '^.+\\.ts$': 'ts-jest',
        '^.+\\.(js,mjs)$': 'babel-jest',
        '.*\\.(vue)$': 'ts-jest',
    },
    preset: 'ts-jest',
    collectCoverage: false,
    collectCoverageFrom: [
        '<rootDir>/components/**/*.vue',
        '<rootDir>/pages/**/*.vue',
        '<rootDir>/layouts/**/*.vue',
        '<rootDir>/store/**/*.ts',
        '<rootDir>/utils/**/*.ts',
        '!<rootDir>/**/types.ts',
        '!<rootDir>/**/Logo.vue',
    ],
};
