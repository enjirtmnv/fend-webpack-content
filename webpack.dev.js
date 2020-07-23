const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: './src/client/index.js',
    mode: 'development',
    devtool: 'source-map',
    stats: 'verbose',
    module: {
        rules: [
            {
                test: '/\.js$/',
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/client/views/index.html",
            filename: "./index.html",
        }),
        new CleanWebpackPlugin({
            // по  умолчанию: false
            dry: true,  // Имитация удаления файлов
            // всегда включено, когда значение dry равно true
            verbose: true, // Запись логов в консоль
            // Автоматически удаляем все неиспользуемые ресурсы
            // webpack при перестройке
            cleanStaleWebpackAssets: true,
            protectWebpackAssets: false
        })
    ]
};


