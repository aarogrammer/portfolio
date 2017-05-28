/**
 * @name Webpack config file
 * @description Configure how we want webpack to work.
 * @version 2.0.0
 * @since 2.0.0
 * @author Aaron Welsh <contact@aaron-welsh.co.uk>
 */

module.exports = {
    entry: '../public/assets/js/main.js',
    output: {
        filename: '../public/assets/js/bundle.js'
    },
    watch: true,
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
            vue: 'vue/dist/vue.js'
        }
    }
};
