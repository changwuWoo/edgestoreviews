const path = require('path')
const utils = require('./utils')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const config = require('../config')
const vueLoaderConfig = require('./vue-loader.conf')
const IS_DEV = process.env.NODE_ENV === 'development'
const ROOT_PATH = path.resolve(__dirname, '../')
const BUILD_PATH = IS_DEV ? path.resolve(ROOT_PATH, '../nextCloudLib-dev/web/webapp/public') : path.resolve(ROOT_PATH, 'public')
const JS_NAME = IS_DEV ? 'js/[name].js' : 'js/[name].[chunkhash.8].js'
const CSS_NAME = IS_DEV ? 'css/[name].css' : 'css/[name].[chunkhash.8].css'
const LESS_NAME = IS_DEV ? '[name]_[local]_[hash:base64:4]' : '[hash:base64:8]'

module.exports = {
  stats: {
    chunks: false,
    children: false
  },
  entry: {
    lib: []
  },
  output: {
    path: path.resolve(BUILD_PATH),
    filename: JS_NAME,
    publicPath: './public'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json', '.jsx']
  },
  plugins: [
    new ExtractTextPlugin(CSS_NAME,{allChunks:true})
  ],
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [resolve('src'), resolve('test')],
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test')]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  }
}
