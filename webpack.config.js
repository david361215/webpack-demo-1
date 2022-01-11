const path = require('path');

const base = require('./webpack.config.base.js')

module.exports = {
    ...base,
    mode: 'development',
    devServer: {
        contentBase: './dist',
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader","css-loader"],
            }
        ]
    }
};