const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
// const CleanWebpackPlugin = require('clean-webpack-plugin'); //cancella la cart Dist

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
            },
            {
                test: /\.html$/,
                use: ["raw-loader"]  //allows importing files as a String
            },
            {
                test: /\.twig$/,
                use: ["twig-loader"]
            }
        ],
    },
    devtool: 'inline-source-map',
    plugins: [
        //new CleanWebpackPlugin(['dist']),  //cancella dist ad ogni build
        new HtmlWebpackPlugin({
            template:  './src/index.html' // da dove prende index html
        }),
        new webpack.NamedModulesPlugin(), // -dev mode - path relativo del modulo
        new webpack.HotModuleReplacementPlugin() //-dev mode - live autocomplete
    ],
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        hot: true
    },
    watch: true
});
