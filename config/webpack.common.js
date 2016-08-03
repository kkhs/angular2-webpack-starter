const webpack = require('webpack'),
      HtmlWebpackPlugin = require('html-webpack-plugin'),
      ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        polyfills: './app/polyfills',
        vendor: './app/vendor',
        main: './app/bootstrap'
    },
    output: {
        path: './dist'
    },
    module: {
        loaders: [
            { test: /\.ts$/, loaders: ['ts', 'angular2-template'], exclude: /node_modules/ },
            { test: /\.html$/, loader: 'html' },
            { test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/, loader: 'file?name=assets/[name].[hash].[ext]' },
            { test: /\.css$/, exclude: './src/app', loader: ExtractTextPlugin.extract('style', 'css?sourceMap') },
            { test: /\.css$/, include: './src/app', loader: 'raw' },
            { test: /\.scss$/, exclude: './src/app', loader: ExtractTextPlugin.extract('style', 'css?sourceMap!sass?sourceMap&sourceMapContents') },
            { test: /\.scss$/, include: './src/app', loader: 'sass?sourceMap&sourceMapContents'}          
        ]
    },
    resolve: {
        root: './',
        modulesDirectories: ['node_modules'],
        extensions: ['', '.ts', '.js']
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({name: ['main', 'vendor', 'polyfills']}),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './app/layout.html'
        })
    ]
}