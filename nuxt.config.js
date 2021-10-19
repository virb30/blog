export default {
	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: 'viniboscoa.dev',
		htmlAttrs: {
			lang: 'pt-BR',
		},
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: 'Site pessoal e blog para registrar impressões, aprendizados e insights sobre Desenvolvimento Web, Segurança da Informação e Data ScienceSite pessoal e blog com conteúdos sobre Desenvolvimento Web, Segurança da Informação e Data Science' },
			{ hid: 'theme-color', name: 'theme-color', content: '#E5E7EB' },
		],
		link: [
			{ rel: 'preconnect', href: 'https://fonts.gstatic.com' },
			{ href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap', rel: 'stylesheet' },
			{ rel: 'icon', type: 'image/png', href: '/favicon.png' },
		],
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: [
		'~/assets/styles/tailwind.css',
		'~/assets/styles/global.css',
	],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [
		'@/plugins/gtag.ts',
	],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
		// https://go.nuxtjs.dev/typescript
		'@nuxt/typescript-build',
		'@nuxtjs/color-mode',
		// https://go.nuxtjs.dev/tailwindcss
		'@nuxtjs/tailwindcss',
	],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
		'@nuxtjs/sitemap',
	],

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {
	},

	ignore: ['**/*.test.*'],

	tailwindcss: {
		viewer: false,
	},

	colorMode: {
		classSuffix: '',
	},

	googleAnalytics: {
		id: process.env.GOOGLE_ANALYTICS_ID, // Use as fallback if no runtime config is provided
	},
	publicRuntimeConfig: {
		googleAnalytics: {
			id: process.env.GOOGLE_ANALYTICS_ID,
		},
	},
};
