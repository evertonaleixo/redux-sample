var fs = require('fs');

const path = require('path');
const webpack = require('webpack');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const srcRoot = path.resolve(__dirname, 'src');
const appRoot = path.resolve(srcRoot, 'app');



module.exports = (env) => {

  const isDev = env == 'development';

  return {
    context: path.resolve(__dirname),
    entry: {
      main: './src/app/main.js',
      vendor: [
        'react', 'react-dom', 'jquery', 'moment',
        // 'jquery-ui', 'bootstrap',
        'react-bootstrap', 'lodash'
      ]
    },
    output: {
      path: path.resolve(__dirname, './build'),
      filename: isDev ? 'js/[name].bundle.js' : 'js/[id].[hash].bundle.js',
      sourceMapFilename: isDev ? 'js/[name].bundle.map' : 'js/[id].[chunkhash].bundle.map',
      chunkFilename: isDev ? 'js/[name].chunk.js' : 'js/[id].[chunkhash].chunk.js',


      publicPath: '/'
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/, // A regexp to test the require path. accepts either js or jsx

          loader: 'babel-loader',

          query:{
            "presets": [
              ["es2015", {"modules": false}],
              //Webpack understands the native import syntax, and uses it for tree shaking

              "stage-2",
              //Specifies what level of language features to activate.
              //State 2 is "draft", 4 is finished, 0 is strawman.
              //See https://tc39.github.io/process-document/

              "react"
              //Transpile React components to JS
            ],
            "plugins": [
              "react-hot-loader/babel"
              //Enables React code to work with HMR.
            ]
          },

          exclude: [
            /node_modules/,
          ],
        },

        {test: /\.css$/, loader: "style-loader!css-loader"},

        {test: /\.json$/, loader: "json-loader"},

        {
          test: /\.(jpe?g|png|gif)$/,
          loader: 'file-loader',
          query:{
            name: 'assets/img/[name].[ext]'
          }
        },
      ]

    },
    resolve: {
      extensions: [".js", ".jsx"],

      modules: [
        appRoot,
        'node_modules'
      ]
    },
    devServer: {

      // historyApiFallback: true,
      contentBase: path.join(__dirname, "build"),
      port: 3000,
      // hot: true,
      compress:true,
      publicPath: '/',
      stats: "minimal",
      host: "0.0.0.0",
      // https: {
      //   key: fs.readFileSync("./cert-ojc2017.key"),
      //   cert: fs.readFileSync("./cert-ojc2017.crt")
      // },
      disableHostCheck: true,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
        "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
      }
    },
    stats: "minimal",
    performance: {
      hints: false
    },
    node: {
      fs: "empty",
      tls: "empty",
      net: "empty",
      navigator: "empty",
      xmlhttprequest: "empty",
      location: "empty",
      child_process: "empty",
    },
    devtool: isDev ? 'eval' : 'cheap-source-map', //false, //isDev ? 'eval' : 'cheap-source-map',

    plugins: [
      new CleanWebpackPlugin(['dist']),
      new CopyWebpackPlugin([
        {from: './src/index.html'},
        {from: './src/service-worker.js'},
        {from: './src/assets', to: './assets'},

      ]),
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),

      new HtmlWebpackPlugin({
        template: path.resolve(srcRoot, 'index.html'),
        chunksSortMode: 'dependency'
      }),

      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        filename: 'js/[hash].vendor.js',

        minChunks: Infinity,
      }),

      new webpack.DefinePlugin({
        process: {
          env: {
            NODE_ENV: isDev ? '"development"' : '"production"'
          }
        }
      }),


    ].concat(
      !isDev
        ? // production only plugins
        [
          new webpack.optimize.UglifyJsPlugin({
            compress: {
              warnings: false
            }
          }),
        ]
        :// dev only plugins
        []
    )
  }
};
