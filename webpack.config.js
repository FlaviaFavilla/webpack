const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
  	  'main': './src/index.js',
      },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
      rules: [{
          test: /\.scss$/,
          use: ['style-loader','css-loader', 'resolve-url-loader', 'sass-loader']
      }],
  },
  devServer: {
     contentBase: './dist',
     hot: true
 },
  watch: true,
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
	       	title: 'My webpack Test',
    	})
  ]
};
