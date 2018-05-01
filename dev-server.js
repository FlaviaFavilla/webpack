const webpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
const config = require('./webpack.dev.js');

const options = {
  contentBase: './dist',
  watchContentBase: true,
  hot: true,
  host: 'localhost'
};

const compiler = webpack(config);
const server = new webpackDevServer(compiler, options);
webpackDevServer.addDevServerEntrypoints(config, options);


