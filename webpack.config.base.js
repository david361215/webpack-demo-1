const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.[contenthash].js',
  },
  plugins: [
    new HtmlWebpackPlugin({
        title: 'XDML - 写代码啦',
        template: 'src/assets/index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        use: ['file-loader']
      },
        {
          test: /\.styl$/,
          use: [ 
            "style-loader",
            "css-loader",
            "stylus-loader", // compiles Styl to CSS        
          ]
        },
      {
        test: /\.less$/i,
        use: [
          "style-loader",
          "css-loader",
          // compiles Less to CSS
          "less-loader",
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },
};