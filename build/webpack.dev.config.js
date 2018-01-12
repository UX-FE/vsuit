/**
 * 本地预览
 */

const path = require('path');
const webpack = require('webpack');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.base.config.js');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');


module.exports = merge(webpackBaseConfig, {
    // 入口
    entry: {
        main: './examples/main',
        vendors: ['vue', 'vue-router']
    },
    // 输出
    output: {
        path: path.join(__dirname, '../examples/dist'),
        publicPath: '/',// 输出解析文件的目录，url 相对于 HTML 页面
        filename: '[name].js',
        chunkFilename: '[name].chunk.js'// 「附加分块(additional chunk)」的文件名模板
    },
    resolve: {
        alias: {
            uxkit: '../../src/index',
            vue: 'vue/dist/vue.esm.js'
            // vue: 'vue/dist/vue.runtime.js'
        }
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({ name: 'vendors', filename: 'vendor.bundle.js' }),
        new HtmlWebpackPlugin({
            inject: true,
            filename: path.join(__dirname, '../examples/dist/index.html'),
            template: path.join(__dirname, '../examples/index.html')
        }),
        new FriendlyErrorsPlugin()
    ]
});
