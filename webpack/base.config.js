const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const SRC_PATH = path.resolve(__dirname, "../src");
const NODE_MODULES_PATH = path.resolve(__dirname, "../node_modules");

module.exports = {
    plugins: [
        new MiniCssExtractPlugin({
            filename: "styles.css",
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(SRC_PATH, './index.html')
        })
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.(ts|tsx)?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                }
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },
    resolve: { 
        modules: [SRC_PATH, NODE_MODULES_PATH],
        extensions: ['*', '.js', '.jsx', '.ts', '.tsx',]
    }
};