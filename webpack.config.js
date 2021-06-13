/*
 * @Descripttion: webpack配置
 * @Date: 2021-05-17 09:48:30
 * @LastEditTime: 2021-06-05 15:19:48
 */
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "production",
  target: "node",
  entry: ["babel-polyfill", "./index.js"],
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [new CleanWebpackPlugin()],
  optimization: {
    minimize: false,
    splitChunks: {
      chunks: "all",
      cacheGroups: {
        libs: {
          name: "chunk-libs",
          test: /[\\/]node_modules[\\/]/,
          priority: 10,
          chunks: "initial",
        },
        mysql2: {
          name: "chunk-mysql2",
          priority: 20,
          test: /[\\/]node_modules[\\/]_?mysql2(.*)/,
        },
        sequelize: {
          name: "chunk-sequelize",
          priority: 20,
          test: /[\\/]node_modules[\\/]_?sequelize(.*)/,
        },
        moment: {
          name: "chunk-moment",
          priority: 20,
          test: /[\\/]node_modules[\\/]_?moment(.*)/,
        },
        polyfill: {
          name: "chunk-babel-polyfill",
          priority: 20,
          test: /[\\/]node_modules[\\/]_?babel-polyfill(.*)/,
        },
        express: {
          name: "chunk-express",
          priority: 20,
          test: /[\\/]node_modules[\\/]_?express(.*)/,
        },
      },
    },
  },
};
