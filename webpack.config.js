const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');  // crea html da punto di inizio

const merge = require('webpack-merge');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin'); //cancella la cart Dist

module.exports = {
    entry: {
        'app': './src/index.js',
        'css': './src/scss/main.scss'
    },
    output: {
        filename: '[name].bundle.js', // crea un file per ogni entry-point
        path: path.resolve(__dirname, 'dist') // mette il file nella cartella dist
    },
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
        new CleanWebpackPlugin(['dist']),  //cancella dist ad ogni build
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
};
