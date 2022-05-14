/** @type {import('next').NextConfig} */
const nextTranslate = require('next-translate');
const nextConfig = {
	reactStrictMode: true,
	experimental: {
		outputStandalone: true
	},
	images: {
		domains: ['vlset.vlu.edu.vn', 'uniworld.io', 'www.vanlanguni.edu.vn']
	}
};

module.exports = {
	...nextTranslate(),
	nextConfig
};
