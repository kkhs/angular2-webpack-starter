const webpackMerge = require('webpack-merge'),
      BrowserSyncPlugin = require('browser-sync-webpack-plugin'),
      commonConfig = require('./webpack.common'),
      ExtractTextPlugin = require('extract-text-webpack-plugin'),
      bsConfig = require('./browsersync');

module.exports = webpackMerge(commonConfig, {
    debug: true,
    output: {
        pathinfo: true,
        filename: '[name].js',
        chunkFilename: '[id].chunk.js'
    },
    devtool: 'cheap-module-eval-source-map',
    plugins: [
        new ExtractTextPlugin('[name].css'),
        new BrowserSyncPlugin(bsConfig)
    ]
});