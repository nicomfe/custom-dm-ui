const path = require('path')
const webpack = require('webpack')
const cssnano = require('cssnano')

module.exports = {
  devtool: 'eval-source-map',
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/index',
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/',
  },
  plugins: [
    new webpack.DefinePlugin({
      __DEV__: true,
      'process.env.NODE_ENV': JSON.stringify('development'),
      'process.env.BROWSER': true,
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      exclude: /node_modules/,
      include: path.join(__dirname, 'src'),
    },
    {
      test: /(\.scss|\.css)$/,
      loaders: [
        'style',
        'css?modules&sourceMap&importLoaders=1&localIdentName=[name]-[local]-[hash:base64:5]',
        'postcss',
        'sass',
      ],
    },
    {
      test: /\.(jpg|jpeg|gif|png|ico|ttf|otf|eot|svg|woff|woff2)(\?[a-z0-9]+)?$/,
      loader: 'file-loader?name=[path][name].[ext]',
    }],
  },
  node: {
    net: 'empty',
    tls: 'empty',
    dns: 'empty',
  },
  postcss: [
    cssnano({
      sourcemap: true,
      autoprefixer: {
        add: true,
        remove: true,
        browsers: ['last 2 versions'],
      },
      safe: true,
      discardComments: {
        removeAll: true,
      },
    }),
  ],
}
