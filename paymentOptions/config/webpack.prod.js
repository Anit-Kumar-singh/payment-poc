const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const packageJson = require("../package.json");

const prodConfig = {
  mode: "production",
  output: {
    filename: "[name].[contenthash].js",
    publicPath: "/payment_options/latest/",
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "payment-options",
      filename: "remoteEntry.js",
      exposes: {
        "./PaymentApp": `./src/bootstrap`,
      },
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);
