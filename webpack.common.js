const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');  // crea html da punto di inizio
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

};
