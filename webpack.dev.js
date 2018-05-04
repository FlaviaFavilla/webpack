const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const HtmlWebpackPlugin = require('html-webpack-plugin');  // crea html da punto di inizio
const webpack = require('webpack');

module.exports  = merge(common, {

    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader',]
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ],
    },
    devtool: 'inline-source-map',
    plugins: [
        new HtmlWebpackPlugin({
            template:  './src/index.html.twig' // da dove prende index html
        }),
        new webpack.NamedModulesPlugin(), // -dev mode - path relativo del modulo
        new webpack.HotModuleReplacementPlugin() //-dev mode - live autocomplete
    ],
    devServer: {
        contentBase: path.join(__dirname, "build"),
        hot: true
    },
    watch: true
});
