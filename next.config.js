/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    reactStrictMode: true,
    trailingSlash: false,
    distDir: ".next",
    devIndicators: {
        buildActivity: true,
        buildActivityPosition: "bottom-right"
    },
    images: {
        domains: []
    },
    webpack(config) {
        config.module.rules.push({
            test: /.svg$/i,
            issuer: /.[jt]sx?$/,
            use: ["@svgr/webpack"]
        });
        return config;
    },
    async rewrites() {
        return [
            {
                source: "/api/GetStatus",
                destination: "https://loadshedding.eskom.co.za/LoadShedding/GetStatus"
            }
        ];
    }
};

module.exports = nextConfig;
