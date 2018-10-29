const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

const { title, description } = require("./config.json");

const outputDirectory = "dist";

module.exports = {
  entry: "./src/index.tsx",
  mode: process.env.NODE_ENV || "development",
  module: {
    rules: [
      // typescript
      {
        test: /\.tsx?$/,
        use: "awesome-typescript-loader"
      },
      // css
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      // fonts
      {
        test: /\.(woff|woff2)$/,
        use: ["file-loader"]
      }
    ]
  },
  output: {
    publicPath: "/",
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, outputDirectory)
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  plugins: [
    new CleanWebpackPlugin([outputDirectory]),
    new HtmlWebpackPlugin({
      title,
      meta: {
        viewport: "width=device-width, initial-scale=1",
        description
      }
    })
  ],
  devServer: {
    historyApiFallback: true
  }
};
