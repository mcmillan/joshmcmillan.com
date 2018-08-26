const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",
  mode: process.env.PROD == "yah" ? "production" : "development",
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
      },
      // markdown
      {
        test: /\.md$/,
        use: ["html-loader", "markdown-loader"]
      }
    ]
  },
  output: {
    publicPath: "/"
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "josh mcmillan",
      hash: true
    })
  ],
  devServer: {
    historyApiFallback: true
  }
};
