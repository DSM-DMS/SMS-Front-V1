const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = {
  mode: "none",
  entry: {
    app: path.join(__dirname, "src", "index.tsx")
  },
  target: "web",
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: "/node_modules/"
      },
      {
        test: /\.(jpg|png|jpeg|bmp|gif|svg)?$/,
        loader: "file-loader"
      },
      {
        test: /\.css?$/,
        loader: ["style-loader", "css-loader"]
      }
    ]
  },
  output: {
    filename: "bundle.min.js",
    publicPath: "/",
    path: path.resolve(__dirname, "s3-build")
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public", "index.html")
    }),
    new Dotenv({
      path: path.join(__dirname, "src/.env")
    })
  ],
  devServer: {
    historyApiFallback: true,
    host: "0.0.0.0"
  }
};
