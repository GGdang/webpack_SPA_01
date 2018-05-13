const webpack = require('webpack');
const merge = require('webpack-merge');
const webpackBaseConfig = require('./webpack.config.js');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const {
    VueLoaderPlugin
} = require('vue-loader');
module.exports = {
    entry: './src/main.js',
    output: {
        path: __dirname + '/dist',
        filename: './js/app.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new ExtractTextPlugin("./css/app.css"),
        new VueLoaderPlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.ProvidePlugin({
            '$': "jquery",
            'jQuery': "jquery",
            'Popper': 'popper.js',
        })
    ],
    module: {
        rules: [{
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        css: ExtractTextPlugin.extract({
                            use: 'css-loader',
                            fallback: 'vue-style-loader'
                        })
                    }
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    publicPath: '', //編譯圖片時的路徑
                    fallback: "style-loader",
                    use: [{
                        loader: "css-loader",
                        options: {
                            minimize: true,
                        }
                    }, {
                        loader: 'postcss-loader',
                        options: {
                            autoprefixer: true
                        }
                    }, "sass-loader"]
                })
            },
            {
                test: /\.(gif|jpg|png)\??.*$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        name: '[name].[ext]',
                        limit: 1024,
                        outputPath: '../',
                        useRelativePath: true,
                    }
                },"image-webpack-loader" ]
                
            },
            {
                test: /\.(woff|svg|eot|ttf)\??.*$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        name: '[name].[ext]',
                        limit: 1024,
                        outputPath: '../images/',
                        useRelativePath: true,
                    }
                },"image-webpack-loader" ]
                
            }
        ]
    }
};
