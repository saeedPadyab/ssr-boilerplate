const path = require("path");
const merge = require("webpack-merge");
const baseConfig = require("./webpack.base");
const webpackNodeExternal = require("webpack-node-externals");
const config = {
  // Inform webpack that we're building a bundle
  // for Node js, rather than  for the browser
  target: "node",
  // Tell webpack the root file of our
  // server application
  entry: "./src/server.js",
  // Tell webpack where to put output file
  // that is generated
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build")
  },
  externals: [webpackNodeExternal()]
};

module.exports = merge(baseConfig, config);