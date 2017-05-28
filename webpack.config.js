const path = require('path')
const DashboardPlugin = require('webpack-dashboard/plugin')

module.exports = env => ({
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './app/index.js'
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      },
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'build'),
    inline: true,
    compress: true,
    port: 8080
  },
  plugins: [
    new DashboardPlugin()
  ]
})
