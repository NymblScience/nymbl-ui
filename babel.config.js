module.exports = {
	presets: ['@babel/env'],
	overrides: [
		{
			test: './src',
			presets: ['@vue/cli-plugin-babel/preset']
		},
		{
			test: './ui',
			presets: ['@babel/react']
		}
	]
}