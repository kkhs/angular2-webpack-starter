const webpack = require('webpack'),
      webpackMerge = require('webpack-merge'),
      commonConfig = require('./webpack.common'),
      ExtractTextPlugin = require('extract-text-webpack-plugin'),
      ENV = process.env.NODE_ENV = process.env.ENV = 'production';

module.exports = webpackMerge(commonConfig, {
    devtool: 'source-map',
    debug: false,
    output: {
        filename: '[name].[hash].js',
        chunkFilename: '[id].[hash].chunk.js'
    },
    htmlLoader: {
        minimize: false
    },
    plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin(),
        new ExtractTextPlugin('[name].[hash].css'),
        new webpack.DefinePlugin({
            'process.env': {
                'ENV': JSON.stringify(ENV)
            }
        })
    ]
});