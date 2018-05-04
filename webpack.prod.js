const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const HtmlWebpackPlugin = require('html-webpack-plugin');  // crea html da punto di inizio
const CleanWebpackPlugin = require('clean-webpack-plugin'); //cancella la cart Dist
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); //estrae il file css
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin"); // minimizza il css


module.exports = merge(common, {
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true // set to true if you want JS source maps
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
    module: {
        rules: [
            {
              test: /\.scss$/,
              use: [ MiniCssExtractPlugin.loader, "css-loader", 'sass-loader']  //estrae il css
            }
        ],
    },
    devtool: 'source-map',
    plugins: [
        new CleanWebpackPlugin(['build']),  //cancella contenuto build ad ogni re-build
        new HtmlWebpackPlugin({
            template:  './src/index.html.twig' // da dove prende index html
        }),
        new HtmlWebpackPlugin({
            filename: 'help.html',
            template:  './src/help.html.twig',
            helper: require('./src/help.js'),   // file con opzioni aggiuntive da passare alla pagina
            inject: false
        }),
        new webpack.DefinePlugin({
          'process.env.NODE_ENV': JSON.stringify('production') //indica ai plugin il mode per ottimizzare i pacchetti
        }),
        new MiniCssExtractPlugin({
           filename: "[name].css", //estrae il file css
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, "build"),
        hot: true
    },
});
