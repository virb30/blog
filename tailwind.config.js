module.exports = {
	purge: {
		enabled: process.env.NODE_ENV === 'production',
		content: [
			'./components/**/*.{vue,js}',
			'./layouts/**/*.vue',
			'./pages/**/*.vue',
			'./plugins/**/*.{js,ts}',
			'./nuxt.config.{js,ts}',
		],
	},
	darkMode: 'class', // or 'media' or 'class'
	theme: {
		darkSelector: '.dark',
		extend: {},
	},
	variants: {
		extend: {
			cursor: ['disabled'],
			opacity: ['disabled'],
			backgroundColor: ['dark', 'dark-hover', 'dark-group-hover', 'dark-even', 'dark-odd'],
			borderColor: ['dark', 'dark-disabled', 'dark-focus', 'dark-focus-within'],
			textColor: ['dark', 'dark-hover', 'dark-active', 'dark-placeholder', 'hover'],
			fontWeight: ['hover'],
		},
	},
	plugins: [
		require('tailwindcss-dark-mode')(),
	],
};
