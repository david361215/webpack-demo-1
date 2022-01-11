const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.[contenthash].js',
  },
  devServer: {
    contentBase: './dist',
  },
  plugins: [
    new MiniCssExtractPlugin({
        filename:'[name].[contenthash].css',
        chunkFilename:'[id].[contenthash].css',
        ignoreOrder:false,
    }),  
    new HtmlWebpackPlugin({
    title: 'XDML - 写代码啦',
    template: 'src/assets/index.html'
  })],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    {
                        loader:MiniCssExtractPlugin.loader,
                        options:{
                            publicPath:'../',
                        }
                    },
                        "css-loader"
                    ],
            }
        ]
    }
};