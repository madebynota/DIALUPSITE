const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: path.join(__dirname, 'src', 'main.js'),
    output: {
        path: path.join(__dirname, 'src', 'static'),
        filename: 'js/bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.json']
    },
    devServer: {
        contentBase: path.join(__dirname, 'src', 'static'),
        inline: true,
        port: 8080,
        stats: 'errors-only',
        historyApiFallback: true
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.js|.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    cacheDirectory: 'babel_cache',
                    presets: ['react', 'es2015']
                }
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]")
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: ExtractTextPlugin.extract('file?name=src/static/fonts/[name].[ext]')
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        }),
        new ExtractTextPlugin('css/styles.css', {
          publicPath: '/css/',
          allChunks: true
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: { warnings: false },
            mangle: true,
            sourcemap: false,
            beautify: false,
            dead_code: true
        })
    ]
};