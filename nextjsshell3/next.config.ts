/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import NextFederationPlugin from "@module-federation/nextjs-mf";
import { FederatedTypesPlugin } from "@module-federation/typescript";

const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  webpack(config: any, options: any) {
    const { isServer } = options;
    const remotes = {
      mfeAngular: 'mfeAngular@http://localhost:4201/remoteEntry.js',
    };
    const federatedConfig = {
      name: "host",
      filename: "static/chunks/remoteEntry.js",
      remotes: remotes,
      shared: {},
      extraOptions: {}, // Add appropriate options here
    };
    config.plugins.push(
      new NextFederationPlugin(federatedConfig)
    );
    return config;
  },
};
module.exports = nextConfig;

