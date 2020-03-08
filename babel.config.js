module.exports = {
	presets: ['@babel/env'],
	overrides: [
		{
			test: './src',
			presets: ['@vue/app']
		},
		{
			test: './ui',
			presets: ['@babel/react']
		}
	]
}