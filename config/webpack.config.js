/**
 * @name Webpack config file
 * @description Configure how we want webpack to work.
 * @version 2.5.0
 * @since 1.0.0
 * @author Aaron Welsh <contact@aaron-welsh.co.uk>
 */

const webpack = require('webpack');
const env = require('./env');
module.exports = {
    entry: '../src/js/main.js',
    output: {
        filename: '../dist/js/bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
        ]
    },

    resolve: {
        alias: {
            vue: 'vue/dist/vue.common.js'
        }
    }
};
if (env.mode === 'production') {
    module.exports.devtool = '#source-map';
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: false
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
    ])
}