const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: path.join(__dirname, 'src', 'main.js'),
    output: {
        path: path.join(__dirname, 'src', 'static', 'js'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.json']
    },
    devServer: {
        contentBase: path.join(__dirname, 'src', 'static'),
        inline: true,
        port: 8080,
        stats: 'errors-only'
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.js|.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: ['babel-loader'],
                query: {
                    cacheDirectory: 'babel_cache',
                    presets: ['react', 'es2015']
                }
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
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