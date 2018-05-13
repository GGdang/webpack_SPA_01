const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const {VueLoaderPlugin} = require('vue-loader');
const webpack = require("webpack");
module.exports = {
    entry: './src/main.js',
    output: {
        path: __dirname + '/dist',
        filename: '[name].js',
        chunkFilename: '[name].chunk.js',
        
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new ExtractTextPlugin({
            filename: "[name].css",
            allChunks: true
        }),
        new VueLoaderPlugin(),
        new webpack.ProvidePlugin({
            '$': "jquery",
            'jQuery': "jquery",
            'Popper': 'popper.js',
            'WOW':'wow.js'
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
                    publicPath: '/', //編譯圖片時的路徑
                    fallback: "style-loader",
                    use: ["css-loader",'postcss-loader', "sass-loader"]
                })
            },
            {
                test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        name: '[name].[ext]',
                        limit: 1024,
                        // outputPath: '/',
                        useRelativePath: true,
                    }
                }]

            }
        ]
    }
};