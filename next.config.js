/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "www.cubcadet.com",
			},
			{
				protocol: "https",
				hostname: "ubcadet.com",
			},
		],
	},
};

module.exports = nextConfig;
