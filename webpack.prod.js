const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.config.js");
const Dotenv = require("dotenv-webpack");

const prodConfig = {
  mode: "production",
  plugins: [new Dotenv()],
};

module.exports = merge(commonConfig, prodConfig);
