const path = require('path')
const fs = require('fs')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const PATHS = {
  src: path.join(__dirname, '../src'),
  dist: path.join(__dirname, '../build'),
  assets: 'assets/'
}

const PAGES_DIR = `${PATHS.src}/pug/pages/`
const PAGES = fs.readdirSync(PAGES_DIR).filter(fileName => fileName.endsWith('.pug'))
module.exports={
  externals:{
    paths: PATHS
  },
  entry:{
    index: PATHS.src
  },
  output:{
    filename: `${PATHS.assets}js/[name].js`,
    path: PATHS.dist
  },
  module:{
    rules: [{
      test: /\.pug$/,
      loader: 'pug-loader',
    },{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: '/node_modules/'
    },{
      test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'file-loader',
      options: {
        name: '[name].[ext]',
        outputPath: `${PATHS.assets}fonts/`
      }
    },{
      test: /\.(png|jpg|gif|svg)$/,
      loader: 'file-loader',
      options: {
        name: '[name].[ext]',
        outputPath: `${PATHS.assets}images/`
      }
    },{
      test: /\.scss$/,
      use: [
        "style-loader",
        MiniCssExtractPlugin.loader,
        {
          loader: "css-loader",
          options: {sourceMap: true}
        },   
        {
          loader: "postcss-loader",
          options: {sourceMap: true, config: {path: 'postcss.config.js'}}
        },
        {
          loader: "sass-loader",
          options: {sourceMap: true}
        }
      ]
    },
    {
      test: /\.css$/,
      use: [
        "style-loader",
        MiniCssExtractPlugin.loader,
        {
          loader: "css-loader",
          options: {sourceMap: true}
        },   
        {
          loader: "postcss-loader",
          options: {sourceMap: true, config: {path: 'postcss.config.js'}}
        }
      ]
    }
  ]
  },
  resolve: {
    alias: {
      '~': PATHS.src,
    }
  }, 
  plugins:[
    new MiniCssExtractPlugin({
      filename: `[name].css`,
    }),

    new CopyWebpackPlugin({
      patterns: [
        // { from: `${PATHS.src}/assets/images`, to: `${PATHS.assets}images` },
        // { from: `${PATHS.src}/assets/fonts`, to: `${PATHS.assets}fonts` },
        { from: `${PATHS.src}/static`, to: `` }

      ]
    }),
    ...PAGES.map(page => new HtmlWebpackPlugin({
      template: `${PAGES_DIR}/${page}`,
      filename: `./${page.replace(/\.pug/,'.html')}`
    }))
  ]
}