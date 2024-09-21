/* eslint-disable @typescript-eslint/no-unused-vars */
/** @type {import("next").NextConfig} */
const nextConfig = {
webpack: (
    config,
    { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
) => {
    config.resolve.fallback = {
    crypto: false,
    stream: false,
    buffer: false,
    vm: false,
    };

    config.module.rules.push({
    test: /\.wasm$/,
    type: "asset/resource",
    });

    return config;
},

};
export default nextConfig;
