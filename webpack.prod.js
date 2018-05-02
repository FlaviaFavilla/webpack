const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const HtmlWebpackPlugin = require('html-webpack-plugin');  // crea html da punto di inizio
const CleanWebpackPlugin = require('clean-webpack-plugin'); //cancella la cart Dist
//const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(common, {

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
    devtool: 'source-map',
    plugins: [
        new CleanWebpackPlugin(['dist']),  //cancella dist ad ogni build
        new HtmlWebpackPlugin({
            template:  './src/index.html' // da dove prende index html
        }),
        // new UglifyJSPlugin({  // minifica il codice
        //   sourceMap: true
        // }),
        new webpack.DefinePlugin({
          'process.env.NODE_ENV': JSON.stringify('production') //indica ai plugin il mode per ottimizzare i pacchetti
        })
        //new webpack.NamedModulesPlugin(), // -dev mode - path relativo del modulo
        //new webpack.HotModuleReplacementPlugin() //-dev mode - live autocomplete
    ],
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        hot: true
    },
    //watch: true
});
