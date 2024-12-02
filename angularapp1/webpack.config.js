
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const { shareAll } = require('@angular-architects/module-federation/webpack');
const path = require("path");

const share = mf.share;

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, 'tsconfig.json'),
  []
);


module.exports = {
  output: {
    uniqueName: "mfeAngular",
    publicPath: "auto",
    scriptType: "text/javascript"
  },
  optimization: {
    runtimeChunk: false
  },
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    }
  },
  plugins: [
    new ModuleFederationPlugin({

      name: "mfeAngular",
      filename: "remoteEntry.js",
      library: { type: 'var', name: 'mfeAngular' },
      exposes: {
        './App': './src/app/app.component.ts',
        // './AppComponent': './src/bootstrap.ts',
      },
      shared: {
        "@angular/core": { singleton: true },
        "@angular/common": { singleton: true },
        "@angular/common/http": { singleton: true },
        "@angular/router": { singleton: true },

        // Uncomment for sharing lib of an Angular CLI or Nx workspace
        ...sharedMappings.getDescriptors(),
        // ...shareAll({ eager: true, singleton: true, strictVersion: true, requiredVersion: 'auto' }),
      },

    }),

    sharedMappings.getPlugin(),
  ],
};
