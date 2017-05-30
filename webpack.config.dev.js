const config = require('./webpack.config.js')
const path = require('path')
const DashboardPlugin = require('webpack-dashboard/plugin')

config.entry = [
  'webpack-dev-server/client?http://localhost:8080',
  './app/index.js'
]

config.devtool = 'cheap-module-eval-source-map'

config.devServer = {
  contentBase: path.join(__dirname, 'app', 'static'),
  inline: true,
  compress: true,
  port: 8080
}

config.plugins = config.plugins.concat([
  new DashboardPlugin()
])

module.exports = config
