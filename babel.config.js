module.exports = {
	env: {
		test: {
			presets: [
				[
					'@babel/preset-env',
					{
						targets: {
							node: 'current',
						},
					},
				],
			],
		},
	},
	plugins: [
		['transform-object-rest-spread'],
		['babel-plugin-postcss'],
	],
};
