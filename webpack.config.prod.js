const config = require('./webpack.config.js')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

config.plugins = config.plugins.concat([
  new webpack.optimize.UglifyJsPlugin(),
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
    }
  })
])

module.exports = config
