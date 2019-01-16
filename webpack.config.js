const HtmlWebPackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require("path");

// Extract CSS
const extractCSS = new ExtractTextPlugin("styles.min.css");

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./main.html"
});

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js"
  },
  devServer: {
    hot: true,
    port: 3000,
    historyApiFallback: true,
    contentBase: "./"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }
      },
      {
        test: /\.css$/,
        use: extractCSS.extract(["css-loader", "postcss-loader"])
      }
    ]
  },
  plugins: [htmlPlugin, extractCSS]
};
