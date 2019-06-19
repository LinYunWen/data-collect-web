const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: {
        index: './index.js'
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve('./dist')
    },
    target: 'web',
    watch: true,
    watchOptions: {
        ignored: /node_modules/
    },
    devtool: 'inline-source-map',
    devServer: {
        // contentBase: path.join(__dirname, 'dist'),
        contentBase: "./dist",
        compress: true,
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.html?$/,
                use: [
                    {
                        loader: "html-loader",
                        options: { minimize: false }
                    }
                ]
            },
            {
                test: /\.s?css$/,
                use: [
                    'style-loader',
                    {
                        loader: "css-loader",
                        options: {
                            modules: {
                                localIdentName: '[name]__[local]___[hash:base64:5]'
                            }
                        }
                    },
                    'sass-loader'
                ]
            },
            {
                test: /\.(jpe?g|png|gif)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'assets'
                        }
                    }
                ]
            }
        ]
    },
    optimization: {},
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ]
};
