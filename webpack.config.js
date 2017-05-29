const path = require('path')
const DashboardPlugin = require('webpack-dashboard/plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = env => ({
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './app/index.js'
  ],
  resolve: {
    alias: {
      modules: path.resolve(__dirname, 'app', 'modules'),
      components: path.resolve(__dirname, 'app', 'components'),
      routes: path.resolve(__dirname, 'app', 'routes'),
      store: path.resolve(__dirname, 'app', 'store')
    },
  },
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
      {
        test: /\.css/,
        loader: ExtractTextPlugin.extract('css-loader')
      },
      {
        test: /\.(svg|png)/,
        loader: 'file-loader'
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'build'),
    inline: true,
    compress: true,
    port: 8080
  },
  plugins: [
    new ExtractTextPlugin({ filename: 'bundle.css', disable: false, allChunks: true }),
    new DashboardPlugin()
  ]
})
