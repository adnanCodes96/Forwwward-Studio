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
            scriptLoading: 'defer',
            meta: {
                'author': {name: 'author', content: 'Adnan Musinovic'},
                'description': {name: 'description', content: 'We partner with tech companies & startups to craft remarkable products and brands that impact and inspire.'},
                'keyword': {name: 'keywords', content: 'Forwwward Studio, Web Design, Web Development, Marketing'},
                'og:title': { property: 'og:title', content: 'Forwwward Studio - Digital Product Studio'},
                'og:description': { property: 'og:description', content: 'We partner with tech companies &amp; startups to craft remarkable products and brands that impact and inspire.' },
                'og:type': { property: 'og:type', content: 'website' },
                'og:url': { property: 'og:url', content: '...' },
                'og:image': { property: 'og:image', content: 'src/images/facebook-share-img.png' },
                'twitter:card': { name: 'twitter:card', content: 'summary_large_image' },
                'twitter:title': { name: 'twitter:title', content: 'Forwwward Studio - Digital Product Studio' },
                'twitter:description': { name: 'twitter:description', content: 'We partner with tech companies &amp; startups to craft remarkable products and brands that impact and inspire.' },
                'twitter:image': { name: 'twitter:image', content: 'src/images/twitter-share-img.png' },
                'theme-color': {name: 'theme-color', content: '#191919'}
            }
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