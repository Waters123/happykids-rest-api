const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.config.js");
const Dotenv = require("dotenv-webpack");

const devConfig = {
  mode: "development",
  plugins: [new Dotenv()],
};

module.exports = merge(commonConfig, devConfig);
