/** @type {import('next').NextConfig} */
const runtimeCaching = require('next-pwa/cache');


module.exports = {
    pageExtensions: ['jsx', 'tsx', 'ts', 'js', 'mdx'],
    images: {
        domains: ['localhost'],
    }
};

const withPWA = require("next-pwa")({
    dest: "public",
    register: true,
    skipWaiting: true,
    runtimeCaching
    // Other PWA options      
});

const nextConfig = withPWA({
});

module.exports = nextConfig;