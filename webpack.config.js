var path = require('path');
var utils = require('./public/build/utils');
var config = require('./public/config');

var vueLoaderConfig = require('./public/build/vue-loader.conf');



function resolve (dir) {
    return path.join(__dirname, '..', dir)
}



module.exports = {
    entry: {
        'cloud': './src/js/cloud.js',
        'bind': './src/js/bind.js',
        'order': './src/js/order.js',
        'report': './src/js/report.js',
        'acbind': './src/js/acbind.js',
        'reports': './src/js/reports.js',
        'example': './src/js/example.js'

    },

    output: {
        filename: "[name].js",
        path: __dirname + '/public/dist',

    },
    resolve: {
        extensions: ['.js', '.json', '.vue', '.css'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
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
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('img/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('media/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
                }
            },
            { test: /iview.src.*?js$/, loader: 'babel-loader' },
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            { test: /\.scss$/, loader: 'style!css!sass?sourceMap'},
            { test: /\.less$/, loader: 'style!css!less?sourceMap'}
        ]
    }
}

