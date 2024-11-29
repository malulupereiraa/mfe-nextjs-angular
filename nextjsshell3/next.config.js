const { NextFederationPlugin, withModuleFederation } = require('@module-federation/nextjs-mf');
/** @type {import('next').NextConfig} */

const remote = (isServer) => {
  /**
   * Developer
   */
  const location = isServer && false ? "ssr" : "chunks";
  return {
    // App1: `App1@http://localhost:3005/_next/static/${location}/remoteEntry.js`, // exemplo codes nextjs
    mfeAngular: "mfeAngular@http://localhost:4201/remoteEntry.js",
  };
};
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  reactStrictMode: true,
  webpack: (config, options) => {
    config.experiments = { topLevelAwait: true };
    config.plugins.push(
      new NextFederationPlugin({
        // Name of the remote entry file
        name: "host",
        // Filename in the output dir where the remote entry will be emitted
        filename: "static/chunks/remoteEntry.js",
        // The name of the exposed module in the remote entry
        // remotes: remote(options.isServer),
        remotes: {mfeAngular: `mfeAngular@http://localhost:4201/remoteEntry.js`,},
        // Exposes the modules from the remote entry
        exposes: {},
        // Shared modules
        shared: {
          // react: {
          //   eager: true,
          //   singleton: true,
          //   requiredVersion: false,
          // },
          // 'react-dom': {
          //   eager: true,
          //   singleton: true,
          //   requiredVersion: false,
          // },
        },
      })
    );
    return config;
  }
};

module.exports = nextConfig

