const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); 
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = function(env, argv){
    const isEnvDevelopment = argv.mode === 'development' || !argv.mode;
    const isEnvProduction = argv.mode === 'production'; 
    
    return{
        mode: isEnvProduction ? 'production' : isEnvDevelopment && 'development',
        devtool: isEnvProduction ? 'source-map' : isEnvDevelopment && 'cheap-module-source-map',
        entry: [
            'react-hot-loader/patch',
            path.join(__dirname, './src/index.js')
        ],
        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, 'dist')
        },
        plugins: [
            new htmlWebpackPlugin({
                template: path.join(__dirname, './public/index.html'),
                filename: 'index.html'
            }),
            new MiniCssExtractPlugin({
                filename: '[name].[contenthash:8].css',
                chunkFilename: '[name].[contenthash:8].chunk.css'
            }),
            new BundleAnalyzerPlugin()
        ],
        module: {
            rules: [
                {test: /\.js$/, exclude: /node_modules/, enforce: "pre", use: 'babel-loader'}, 
                {test: /\.css$/, include: [path.resolve(__dirname, 'src/styles'), /node_modules/], use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']},
                {test: /\.css$/, exclude: [path.resolve(__dirname, 'src/styles'), /node_modules/], use: [MiniCssExtractPlugin.loader, 'css-loader?modules', 'postcss-loader']},
                {test: /\.less$/, include: [path.resolve(__dirname, 'src/styles'), /node_modules/], use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'less-loader']},
                {test: /\.less$/, exclude: [path.resolve(__dirname, 'src/styles'), /node_modules/], use: [MiniCssExtractPlugin.loader, 'css-loader?modules', 'postcss-loader', 'less-loader']},
                {test: /\.(eot|svg|ttf|woff|woff2|png)\w*/, use: 'file-loader'},     
                {
                    test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/, /\.svg$/],
                    loader: 'url-loader',
                    options: {
                        limit: 10000
                    }
                }
            ],
        },
        resolve: {
            alias: {
                '@': path.resolve('src')
            }
        },
        optimization: {
            splitChunks: {
                chunks: 'all',
                name: true,
                cacheGroups: {
                    vendors: {
                        test: /[\\/]node_modules[\\/]/,
                        priority: -10
                    },
                    default: {
                        minChunks: 2,
                        priority: -20,
                        reuseExistingChunk: true
                    }
                },
            },
        }
    }
}