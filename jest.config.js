module.exports = {
	moduleNameMapper: {
		'^@/(.*)$': '<rootDir>/$1',
		'^~/(.*)$': '<rootDir>/$1',
		'^vue$': 'vue/dist/vue.common.js',
	},
	moduleFileExtensions: [
		'ts',
		'js',
		'vue',
		'json',
	],
	testEnvironment: 'jsdom',
	transform: {
		'^.+\\.ts$': 'ts-jest',
		'^.+\\.js$': 'babel-jest',
		'.*\\.(vue)$': 'vue-jest',
	},
	preset: '@nuxt/test-utils',
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
