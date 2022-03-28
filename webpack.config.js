const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

module.exports = {
    mode: 'development',

    entry: {
        main: path.resolve(__dirname, 'src/js/index.js'),
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js',
        assetModuleFilename: '[name][contenthash].[ext]',
        clean: true
    },

    module: {
        rules: [
            {
                test: /.s?css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            },
            // css
            // {test: /\.css$/, use: ['style-loader', 'css-loader']},

            // images
            {test: /\.(svg|ico|png|webp|jpg|gif|jpeg)$/, type: 'asset/resource'}
        ],
    },

    optimization: {
        minimizer: [
            new CssMinimizerPlugin(),
        ],
        minimize: true,
    },

    devtool: 'inline-source-map',

    devServer: {
        static: path.resolve(__dirname, 'dist'),
        port: 5001,
        open: true,
        hot: true,
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: 'styles.css'
        }),

        new FaviconsWebpackPlugin({
            logo: './src/images/logo.png',
            mode: 'webapp',
            manifest: './src/manifest.json'
        }),

        new HtmlWebpackPlugin({
            title: 'Forwwward Studio - Digital Product Studio',
            filename: 'index.html',
            template: path.resolve(__dirname, 'src/index.html'),
        }),
        new HtmlWebpackPlugin({
            title: 'Forwwward Studio - Work',
            filename: 'work.html',
            template: path.resolve(__dirname, 'src/work.html')
        }),
        new HtmlWebpackPlugin({
            title: 'Forwwward Studio - Studio',
            filename: 'studio.html',
            template: path.resolve(__dirname, 'src/studio.html')
        }),
        new HtmlWebpackPlugin({
            title: 'Forwwward Studio - Contact',
            filename: 'contact.html',
            template: path.resolve(__dirname, 'src/contact.html')
        }),
    ]
}