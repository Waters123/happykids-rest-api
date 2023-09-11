const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  target: "node",
  externalsPresets: { node: true },
  externals: [nodeExternals()],
  entry: "./src/server.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  // Additional configuration goes here
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
    ],
  },
};
